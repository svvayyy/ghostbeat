/* Ghost Beat: shared ghost bar test engine.
   UI-agnostic. It plays the audible bar(s) with Web Audio, collects taps during
   the silent bar(s), and grades them. Each landing page variant renders its own
   UI by listening to events:

     var game = new GhostEngine({ bpm: 100, onBars: 1, offBars: 1 });
     game.on('phase',  function (e) {});  // e.phase: 'listen' | 'ghost' | 'done' | 'idle'
     game.on('beat',   function (e) {});  // audible beats only: { index, beat, bar, accent }
     game.on('tap',    function (e) {});  // { kind: 'hit' | 'early' | 'extra' | 'stray', index, dev, rating }
     game.on('result', function (r) {});  // see finish()
     game.start(); game.tap(); game.cancel();

   Silent beats never fire events, so the UI can't leak the tempo. The switch to
   the 'ghost' phase lands halfway between beats for the same reason. */
(function (global) {
    'use strict';

    var RATINGS = [
        { max: 25, key: 'perfect', label: 'Perfect', points: 300 },
        { max: 50, key: 'great', label: 'Great', points: 200 },
        { max: 90, key: 'good', label: 'Good', points: 100 },
        { max: Infinity, key: 'off', label: 'Off', points: 40 }
    ];

    var VERDICTS = {
        S: 'Machine-level timing.',
        A: 'Locked in.',
        B: 'Solid. The app will tighten it.',
        C: 'You drifted when the click left.',
        D: 'The click was carrying you.',
        '-': 'No taps registered. Try again?'
    };

    function rate(dev) {
        var a = Math.abs(dev);
        for (var i = 0; i < RATINGS.length; i++) if (a <= RATINGS[i].max) return RATINGS[i];
    }

    function storage(fn) {
        try { return fn(global.localStorage); } catch (e) { return null; }
    }

    /* map the AudioContext clock onto performance.now(), including output
       latency, so expected beat times match when the click is actually heard */
    function clockOffset(ctx) {
        if (ctx.getOutputTimestamp) {
            var ts = ctx.getOutputTimestamp();
            if (ts && ts.contextTime > 0 && ts.performanceTime > 0) {
                return ts.performanceTime - ts.contextTime * 1000;
            }
        }
        var latency = (ctx.outputLatency || ctx.baseLatency || 0) * 1000;
        return performance.now() - ctx.currentTime * 1000 + latency;
    }

    function click(ctx, when, accent) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(accent ? 1760 : 1320, when);
        gain.gain.setValueAtTime(0.0001, when);
        gain.gain.exponentialRampToValueAtTime(accent ? 0.55 : 0.38, when + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.07);
        osc.connect(gain).connect(ctx.destination);
        osc.start(when);
        osc.stop(when + 0.09);
    }

    function GhostEngine(opts) {
        opts = opts || {};
        this.bpm = opts.bpm || 100;
        this.beatsPerBar = opts.beatsPerBar || 4;
        this.onBars = opts.onBars || 1;
        this.offBars = opts.offBars || 1;
        this.storageKey = opts.storageKey || 'ghostbeat-test-best';
        this.handlers = {};
        this.ctx = null;
        this.running = false;
        this.phase = 'idle';
        this.timers = [];
        this.times = [];
        this.ghostStart = 0;
        GhostEngine.instances.push(this);
    }

    GhostEngine.instances = [];
    GhostEngine.RATINGS = RATINGS;
    GhostEngine.VERDICTS = VERDICTS;

    var proto = GhostEngine.prototype;

    proto.on = function (name, fn) {
        (this.handlers[name] = this.handlers[name] || []).push(fn);
        return this;
    };

    proto.emit = function (name, payload) {
        (this.handlers[name] || []).forEach(function (fn) { fn(payload); });
    };

    /* change tempo or bar pattern between rounds */
    proto.set = function (cfg) {
        if (this.running) return;
        for (var k in cfg) if (cfg.hasOwnProperty(k)) this[k] = cfg[k];
    };

    proto.interval = function () { return 60000 / this.bpm; };
    proto.ghostCount = function () { return this.offBars * this.beatsPerBar; };

    /* beats elapsed since the first click, as a float (null when idle).
       Handy for requestAnimationFrame-driven visuals during the audible bar. */
    proto.position = function () {
        if (!this.running || !this.times.length) return null;
        return (performance.now() - this.times[0]) / this.interval();
    };

    proto.setPhase = function (phase) {
        this.phase = phase;
        this.emit('phase', { phase: phase, bpm: this.bpm, onBars: this.onBars, offBars: this.offBars });
    };

    proto.start = function () {
        if (this.running) return;
        var self = this;
        this.running = true;
        this.taps = [];
        this.claimed = [];
        this.extra = 0;
        if (!this.ctx) {
            var AC = global.AudioContext || global.webkitAudioContext;
            this.ctx = new AC();
        }
        var go = function () { if (self.running) self.schedule(); };
        this.ctx.resume().then(go, go);
    };

    proto.at = function (time, fn) {
        this.timers.push(setTimeout(fn, Math.max(0, time - performance.now())));
    };

    proto.schedule = function () {
        var self = this;
        var ctx = this.ctx;
        var iv = this.interval();
        var bpb = this.beatsPerBar;
        var audible = this.onBars * bpb;
        var total = (this.onBars + this.offBars) * bpb;
        var startAt = ctx.currentTime + 0.4;
        var offset = clockOffset(ctx);

        this.times = [];
        this.ghostStart = audible;
        for (var i = 0; i < total; i++) {
            var tCtx = startAt + (i * iv) / 1000;
            if (i < audible) click(ctx, tCtx, i % bpb === 0);
            this.times.push(tCtx * 1000 + offset);
        }

        this.setPhase('listen');
        this.times.slice(0, audible).forEach(function (t, i) {
            self.at(t, function () {
                self.emit('beat', { index: i, beat: i % bpb, bar: Math.floor(i / bpb), accent: i % bpb === 0 });
            });
        });
        this.at(this.times[audible - 1] + iv / 2, function () { self.setPhase('ghost'); });
        this.at(this.times[total - 1] + iv * 0.6, function () { self.finish(); });
    };

    /* register a tap now. Returns the tap event (or null when not running). */
    proto.tap = function () {
        if (!this.running || !this.times.length) return null;
        var now = performance.now();
        var iv = this.interval();
        var ev;

        if (now < this.times[this.ghostStart] - iv / 2) {
            ev = { kind: 'early' };
        } else {
            var best = -1, bestAbs = Infinity;
            for (var j = this.ghostStart; j < this.times.length; j++) {
                var a = Math.abs(now - this.times[j]);
                if (a < bestAbs) { bestAbs = a; best = j; }
            }
            var idx = best - this.ghostStart;
            var dev = Math.round(now - this.times[best]);
            if (bestAbs > iv / 2) {
                ev = { kind: 'stray' };
            } else if (this.claimed[idx] !== undefined) {
                this.extra++;
                ev = { kind: 'extra', index: idx, dev: dev };
            } else {
                this.claimed[idx] = dev;
                ev = { kind: 'hit', index: idx, dev: dev, rating: rate(dev) };
            }
        }
        this.taps.push(now);
        this.emit('tap', ev);
        return ev;
    };

    proto.finish = function () {
        this.running = false;
        this.timers = [];
        var n = this.ghostCount();
        var devs = [], hits = [], score = 0;
        for (var i = 0; i < n; i++) {
            var d = this.claimed[i];
            if (d === undefined) { devs.push(null); continue; }
            devs.push(d);
            hits.push(d);
            score += rate(d).points;
        }
        var misses = n - hits.length;
        var avg = null, mean = null, spread = null, grade;

        if (!hits.length) {
            grade = '-';
        } else {
            avg = Math.round(hits.reduce(function (s, d) { return s + Math.abs(d); }, 0) / hits.length);
            mean = Math.round(hits.reduce(function (s, d) { return s + d; }, 0) / hits.length);
            spread = Math.round(Math.sqrt(hits.reduce(function (s, d) { return s + (d - mean) * (d - mean); }, 0) / hits.length));
            if (misses * 2 >= n) grade = 'D';
            else if (avg <= 20 && !misses) grade = 'S';
            else if (avg <= 40 && !misses) grade = 'A';
            else if (avg <= 70) grade = 'B';
            else if (avg <= 100) grade = 'C';
            else grade = 'D';
        }

        var tendency = mean === null ? null : mean < -15 ? 'rushing' : mean > 15 ? 'dragging' : 'centered';
        var key = this.storageKey + ':' + this.bpm + ':' + this.onBars + '-' + this.offBars;
        var prevBest = storage(function (s) { return parseInt(s.getItem(key), 10) || 0; }) || 0;
        var isBest = score > prevBest;
        if (isBest) storage(function (s) { s.setItem(key, String(score)); });

        var result = {
            grade: grade,
            verdict: VERDICTS[grade],
            devs: devs,
            ratings: devs.map(function (d) { return d === null ? null : rate(d); }),
            hits: hits.length,
            misses: misses,
            total: n,
            extra: this.extra,
            avg: avg,
            mean: mean,
            spread: spread,
            tendency: tendency,
            score: score,
            maxScore: n * RATINGS[0].points,
            best: Math.max(score, prevBest),
            isBest: isBest && score > 0,
            bpm: this.bpm,
            interval: this.interval(),
            times: this.times.slice(),
            taps: this.taps.slice(),
            ghostStart: this.ghostStart
        };
        this.setPhase('done');
        this.emit('result', result);
    };

    proto.cancel = function () {
        this.timers.forEach(clearTimeout);
        this.timers = [];
        if (!this.running) return;
        this.running = false;
        this.setPhase('idle');
    };

    /* bind a tap target plus the spacebar (only while a round runs) */
    proto.bindInput = function (el) {
        var self = this;
        el.addEventListener('pointerdown', function (e) {
            if (e.button > 0) return;
            e.preventDefault();
            self.tap();
        });
        global.addEventListener('keydown', function (e) {
            if (e.code !== 'Space' || !self.running || e.repeat) return;
            e.preventDefault();
            self.tap();
        });
    };

    global.GhostEngine = GhostEngine;
})(window);
