/* Ghost Beat "Ask anything else": answers a visitor's question from the
   published knowledge base (faq-kb.js). Never generates text: it picks the
   best-matching published answer and cites where it came from.

   Matching is tiered:
     1. keyword overlap (IDF-weighted), available instantly
     2. meaning, via a small sentence-embedding model running in the browser,
        once it has loaded (the visitor's question never leaves the device)

   Environment-agnostic: the page passes in a Transformers.js feature
   extraction pipeline, so the same code runs in the browser and in Node tests. */

/* the embedding model: Transformers.js id, how token vectors are pooled, and
   the instruction some retrieval models want in front of a search query */
export const MODEL = { id: 'Xenova/all-MiniLM-L6-v2', pooling: 'mean', queryPrefix: '' };
export const MODEL_ID = MODEL.id;

/* score cut-offs, tuned on 126 test questions (including two sets written
   without looking at the knowledge base):
   at or above `answer` we answer; between `closest` and `answer` we show the
   nearest published answer labelled as such; below `closest` it's not covered,
   but anything above `suggest` is still offered as a follow-up question */
/* how much the keyword score counts next to meaning once the model is loaded */
const LEX_WEIGHT = 0.35;

export const THRESHOLDS = {
    semantic: { answer: 0.6, closest: 0.52, suggest: 0.42, second: 0.58, gap: 0.05 },
    keyword: { answer: 0.5, closest: 0.34, suggest: 0.2, second: 0.6, gap: 0.08 }
};

const STOP = new Set(('a an the is are was were be been am do does did doing i me my mine you your yours it its ' +
    'this that these those of to in on for with at by from as and or but if then so than too very can could ' +
    'will would should shall may might must have has had having what which who whom whose when where why how ' +
    'there here about into out up down over under again any all some no not only own same just also get got ' +
    'ghost beat app ghostbeat').split(' '));

function stem(w) {
    if (w.length > 4 && w.endsWith('ing')) return w.slice(0, -3);
    if (w.length > 3 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
    if (w.length > 3 && w.endsWith('es')) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
    if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
    return w;
}

function tokens(text) {
    return text.toLowerCase()
        .replace(/[’']/g, '')
        .replace(/(\w)-(\w)/g, '$1$2')
        .replace(/[^a-z0-9$/.\s]/g, ' ')
        .split(/\s+/)
        .map(function (w) { return w.replace(/^[./]+|[./]+$/g, ''); })
        .filter(function (w) { return w && !STOP.has(w); })
        .map(stem);
}

function dot(a, b) {
    var s = 0;
    for (var i = 0; i < a.length; i++) s += a[i] * b[i];
    return s;
}

export function createAsker(kb, opts) {
    opts = opts || {};
    var thresholds = opts.thresholds || THRESHOLDS;
    var lexWeight = opts.lexWeight !== undefined ? opts.lexWeight : LEX_WEIGHT;

    /* keyword index: a word from one of the entry's phrasings counts fully,
       a word that only appears in its answer counts half */
    var docs = kb.map(function (e) {
        return { q: new Set(tokens(e.q.join(' '))), a: new Set(tokens(e.a)) };
    });
    var df = Object.create(null);
    docs.forEach(function (d) {
        new Set(Array.from(d.q).concat(Array.from(d.a))).forEach(function (t) { df[t] = (df[t] || 0) + 1; });
    });
    function idf(t) { return Math.log(1 + kb.length / (df[t] || 0.5)); }

    function keywordScores(question) {
        var qt = Array.from(new Set(tokens(question)));
        var total = qt.reduce(function (s, t) { return s + idf(t); }, 0);
        return docs.map(function (d) {
            if (!total) return 0;
            var hit = qt.reduce(function (s, t) { return s + idf(t) * (d.q.has(t) ? 1 : d.a.has(t) ? 0.5 : 0); }, 0);
            return hit / total;
        });
    }

    var embed = null;
    var phraseVecs = null;
    var answerVecs = null;
    var model = MODEL;

    /* load the knowledge base into the model: every phrasing and every answer
       gets a vector; an entry's score is its best-matching vector */
    async function useModel(extractor, config) {
        model = config || MODEL;
        embed = async function (texts) {
            var out = await extractor(texts, { pooling: model.pooling, normalize: true });
            return out.tolist();
        };
        var texts = [], owner = [];
        kb.forEach(function (e, i) { e.q.forEach(function (q) { texts.push(q); owner.push(i); }); });
        var vecs = await embed(texts);
        var byEntry = kb.map(function () { return []; });
        vecs.forEach(function (v, k) { byEntry[owner[k]].push(v); });
        answerVecs = await embed(kb.map(function (e) { return e.a; }));
        phraseVecs = byEntry;
    }

    async function ask(question) {
        question = String(question || '').trim().slice(0, 300);
        if (!question) return null;

        var mode = phraseVecs ? 'semantic' : 'keyword';
        var lex = keywordScores(question);
        var scores;
        if (phraseVecs) {
            /* question vs. phrasings is like-for-like; question vs. answer is a
               search, which some models want flagged with a query prefix */
            var qv = (await embed([question]))[0];
            var qa = model.queryPrefix ? (await embed([model.queryPrefix + question]))[0] : qv;
            scores = phraseVecs.map(function (list, i) {
                var sem = Math.max(dot(answerVecs[i], qa), Math.max.apply(null, list.map(function (v) { return dot(v, qv); })));
                /* keywords nudge ties between near-identical meanings */
                return (1 - lexWeight) * sem + lexWeight * lex[i];
            });
        } else {
            scores = lex;
        }

        var ranked = scores
            .map(function (score, i) { return { entry: kb[i], score: score }; })
            .sort(function (a, b) { return b.score - a.score; });

        var t = thresholds[mode];
        var top = ranked[0];
        var status = top.score >= t.answer ? 'answered' : top.score >= t.closest ? 'closest' : 'not_covered';
        var matches = [];
        if (status !== 'not_covered') {
            matches.push(top);
            /* a second answer only when it's also a strong, near-equal match
               (e.g. a two-part question) */
            var next = ranked[1];
            var floor = status === 'answered' ? t.second : t.closest;
            if (next.score >= floor && top.score - next.score <= t.gap) matches.push(next);
        }
        var floorRelated = status === 'not_covered' ? t.suggest : t.closest;
        var related = ranked
            .slice(matches.length, matches.length + 3)
            .filter(function (r) { return r.score >= floorRelated; })
            .map(function (r) { return r.entry; });

        return { question: question, mode: mode, status: status, matches: matches, related: related, ranked: ranked.slice(0, 5) };
    }

    return { ask: ask, useModel: useModel, ready: function () { return !!phraseVecs; } };
}
