/* Ghost Beat "Ask anything else" knowledge base, v3.
   Sourced from the published site, privacy.html, and the shipped Ghost Beat 3 app.
   Answers describe what a user sees and does;
   no internals, roadmap items, or unreleased features.

   q:   ways people might ask (embedded for matching; add more freely)
   a:   the answer shown to the visitor
   src: where the answer comes from, shown as a citation link

   Answers that go beyond what the site says today (sourced from the shipped
   V3 app) are listed with their evidence in private review notes kept outside
   this repo. */

const FAQ = { label: 'FAQ', href: '#faq' };
const FEATURES = { label: 'Features', href: '#features' };
const INSIDE = { label: 'Inside Ghost Beat 3', href: '#inside' };
const SPECS = { label: 'Specs', href: '#specs' };
const HOME = { label: 'Overview', href: '#top' };
const TEST = { label: 'Ghost bar test', href: '#test' };
const privacy = (label, id) => ({ label: 'Privacy policy · ' + label, href: 'privacy.html#' + id });

export default [
    /* ---------- the product ---------- */
    {
        id: 'what-is',
        q: ['What is Ghost Beat?', 'What does this app do?', 'How does Ghost Beat help my timing?', 'Is this a metronome?', 'How do I get better at keeping time?', 'How can I improve my timing?', 'How do I stop rushing or dragging?', 'How do I practice without relying on a click?'],
        a: 'Ghost Beat is a timing trainer for drummers and musicians. It cycles between audible and silent bars to train your internal clock, so you can keep the beat without the click.',
        src: HOME
    },
    {
        id: 'whats-new',
        q: ["What's new in Ghost Beat 3?", 'What changed in version 3?', 'What does the V3 update add?', 'What are the new features?', 'Is there a new update?'],
        a: 'Ghost Beat 3 adds hands-free Start on Sound with Auto Stop and connected kit inputs, an optional counting voice, routines with bar or timed steps, daily goals with a goal alert, free tempo ladders, and optional iCloud sync.',
        src: INSIDE
    },
    {
        id: 'audience',
        q: ['Who is Ghost Beat for?', 'Is it only for drummers?', 'Is it good for beginners?', 'Is it useful for worship drummers?', 'Can marching band players use it?', 'Can guitarists or bass players use it?', 'Is it good for session players?'],
        a: "It's a timing trainer for drummers and other musicians, built for anyone who can't afford to drift: drumline and marching, church and worship drummers, studio and session players, beginners building fundamentals, and anyone who leans on the click.",
        src: HOME
    },
    {
        id: 'start',
        q: ['How do I get started?', 'How do I use the player?', 'How do I start the metronome?', 'Where is the start button?', "What's in the Practice menu on the player?"],
        a: 'Dial in a tempo on the jog wheel, set your ON bars and OFF bars, pick your time signature and note value, and press Start. The Practice menu above Start lets you choose a routine, listen for sound, or jump to practice settings.',
        src: INSIDE
    },
    {
        id: 'home',
        q: ['What is on the Home screen?', 'What does Jump back in do?', 'Where do I see my week at a glance?', 'What are the cards on the home page?', 'How do I pick up where I left off?'],
        a: "Home shows Jump back in with your current Player setup, today's challenge, this week's practice by day, your daily goal ring, and tiles for your streak, this week's time, and sessions saved this week.",
        src: INSIDE
    },

    /* ---------- ghost bars and training ---------- */
    {
        id: 'ghost-bar',
        q: ["What's a ghost bar?", "How do ghost bars work?", "Can I choose how many bars are silent?", "What does on bars and off bars mean?", "How many silent bars can I set?", "What is the default ghost pattern?", "Can I set my own on and off pattern?", "Can the click drop out for a bar?"],
        a: 'A ghost bar is a bar where the click goes silent, so you hold the tempo yourself. Set 1 to 16 ON bars and 0 to 16 OFF bars; the default is 2 on and 1 off.',
        src: FAQ
    },
    {
        id: 'ghost-bar-setup',
        q: ['How do I change the ghost bar pattern?', 'Where do I set on bars and off bars?', 'Can I use it as a normal metronome?', 'How do I turn ghost bars off?', 'Can the click play all the time?'],
        a: 'On the Player, use the plus and minus buttons for ON BARS and OFF BARS. Set OFF BARS to 0 and Ghost Beat works as a regular metronome.',
        src: INSIDE
    },
    {
        id: 'silent-look',
        q: ['How do I know when a bar is silent?', 'Why did the pads turn red?', 'What do the dots under the pads mean?', 'Is there a visual cue during silent bars?', 'Can I see where I am in the pattern?'],
        a: 'During a silent bar the beat pads turn red and dashed and the dial shows SILENT. The small dots below the pads show which bar of the on/off pattern you are in.',
        src: INSIDE
    },
    {
        id: 'random-mute',
        q: ['What is Random Mute?', 'Can beats drop out randomly?', 'Can it mute random beats?', 'How often does Random Mute drop beats?', 'Where do I turn on Random Mute?', 'Is Random Mute free?'],
        a: "Random Mute drops whole counts at random inside your on bars, so you never know which one is next. Turn it on in Settings → Challenge and set the chance from 5% to 90% (30% by default). It's free.",
        src: FEATURES
    },
    {
        id: 'fade',
        q: ["What is Progressive Fade?", "Can the click fade out gradually?", "Why is Progressive Fade greyed out?", "How does fade remove bars?", "Can the click slowly disappear over time?", "Can it take the click away bar by bar?"],
        a: 'Progressive Fade, a Pro feature in Settings → Challenge, swaps one on bar for an off bar every few bars (1 to 16, default 4) until one on bar is left. It needs at least 2 on bars and can run together with Random Mute.',
        src: FEATURES
    },
    {
        id: 'total-silence',
        q: ["Can I practice in total silence?", "Can every bar be silent?", "What's the most silence I can set?", "Can the click disappear completely while I keep time?", "Can I turn off every audible bar?"],
        a: "Not with ghost bars: there's always at least 1 audible bar to set the tempo, so the most silence in a cycle is 1 on and 16 off. Progressive Fade also works its way down to that one bar.",
        src: INSIDE
    },
    {
        id: 'challenges',
        q: ['What are daily challenges?', 'Is there a challenge every day?', "How do I start today's challenge?", 'What kind of challenges are there?', 'What happens when I finish a challenge?'],
        a: "Every day there's a new challenge on Home: hold a tempo for a set time, hit an accuracy target, or survive a ghost bar pattern like 1 on / 2 off for 90 seconds. Tap it to load it on the Player; you'll see Challenge complete when you make it.",
        src: FEATURES
    },

    /* ---------- tap accuracy ---------- */
    {
        id: 'tap-accuracy',
        q: ["What is Tap Accuracy?", "How does tap accuracy work?", "How do I test my timing in the app?", "Does it measure my timing in milliseconds?", "Does it account for touch screen latency?", "Does it grade me?", "Where is the timing mode?", "Why do the first taps not count toward my grade?", "What is the calibration at the start of Tap Accuracy?", "Why does Tap Accuracy calibrate first?"],
        a: "Press Timing on the Player, then tap the Tap button on each beat. The first 8 taps set your timing offset before scoring starts, which absorbs any steady delay from your screen or your own habit of tapping early or late, so tap steadily with the beat. After that, every tap is measured in milliseconds and the session is graded S through D.",
        src: FEATURES
    },
    {
        id: 'grades',
        q: ['What do the S to D grades mean?', 'How is my grade calculated?', 'What does S grade mean?', 'How is accuracy percentage calculated?', 'Why is my grade showing dashes?', 'What is consistency?'],
        a: "Grades come from consistency, how tightly your taps cluster: S is under 10 ms of spread, A under 20, B under 35, C under 50, and D above that. You need at least 4 scored taps for a grade. Accuracy counts a tap within 15 ms as 100%, dropping to 0% at 50 ms off.",
        src: FEATURES
    },
    {
        id: 'timing-summary',
        q: ['What happens when I stop Timing?', 'What does the timing summary show?', 'Are my timing results saved?', 'Where can I see my accuracy after a session?', 'Do I get a score at the end?', 'How do I see my timing results?'],
        a: 'When you end a timing session you get a summary with your accuracy, grade, BPM, average deviation, consistency, and total taps. The result is saved with that practice session.',
        src: FEATURES
    },
    {
        id: 'timing-silent',
        q: ['Can I use tap accuracy during silent bars?', 'Does tap accuracy work with ghost bars?', 'Why did some taps not count?', 'Do count-in taps count?', 'Can I tap along when the click drops out?', 'Does it grade me during ghost bars?'],
        a: "Yes. Taps are measured against the beat through silent bars too. Taps more than half a beat away from any click are ignored, and count-ins don't count.",
        src: FEATURES
    },
    {
        id: 'site-test',
        q: ['How does the test on this page work?', 'How is the ghost bar test scored?', 'Can I try it without downloading?', 'Is the website test the same as the app?', 'What is the game on this page?', 'How do I play the timing test here?'],
        a: "Try the ghost bar test on this page: listen to one bar of clicks, then tap every beat of the silent bar, and you're graded S to D on how far your taps land from the beat on average. The app's Tap Accuracy grades consistency instead, so the two letter grades aren't directly comparable.",
        src: TEST
    },
    {
        id: 'drumming-graded',
        q: ["Does it grade my actual drumming?", "Does it score my playing on the kit?", "Can it tell if my drumming is in time?", "Does practice detection check my timing?", "Does it grade my drum hits?", "Can it grade me through the microphone?"],
        a: "No. Tap Accuracy grades taps on the on-screen Tap button. Practice detection only estimates how long you played; it doesn't judge your timing.",
        src: FEATURES
    },

    /* ---------- tempo and rhythm ---------- */
    {
        id: 'tempo-range',
        q: ['What tempo range does it support?', 'How fast can it go?', 'What is the slowest BPM?', 'Can it go up to 300 BPM?', 'How do I set the tempo?', "What's the fastest tempo?", "What's the maximum BPM?"],
        a: 'Ghost Beat runs from 20 to 300 BPM. Turn the jog wheel, use the plus and minus buttons, or tap the tempo in; on Mac you can also scroll over the dial.',
        src: SPECS
    },
    {
        id: 'tap-tempo',
        q: ['Is there tap tempo?', 'Can I tap in a tempo?', 'How do I set BPM by tapping?', 'What does the Tap button do?', 'How do I find the tempo of a song?', 'Can I tap along to set the speed?'],
        a: 'Yes. Tap the Tap button on the Player a few times at the speed you want and Ghost Beat sets the BPM from your taps. When Timing is on, that button records timing taps instead.',
        src: INSIDE
    },
    {
        id: 'quarter-bpm',
        q: ['Is BPM quarter notes in 6/8?', 'How does BPM work in compound time?', 'Why does 6/8 play six clicks?', 'Is the tempo dotted quarter in 6/8?', 'Does BPM match my backing tracks in 6/8?'],
        a: 'BPM always measures quarter notes, in every time signature. In 6/8 you hear six eighth-note counts per bar at that quarter-note tempo.',
        src: SPECS
    },
    {
        id: 'meters',
        q: ['What time signatures are supported?', 'Does it do odd time signatures?', 'Does it support subdivisions?', 'Can it do triplets?', 'Can it play sixteenth notes?', 'Does it support 5/4?', 'Which note values can I pick?'],
        a: "Ghost Beat supports 8 time signatures: 2/4, 3/4, 4/4, 5/4, 6/8, 7/8, 9/8, and 12/8. The 7 note values are 1/4, 1/8, 1/8 triplets, 1/16, 1/16 triplets, 1/32, and 1/32 triplets.",
        src: SPECS
    },
    {
        id: 'seven-eight',
        q: ['Can I change the grouping in 7/8?', 'Does it support 2+2+3?', 'How is 7/8 counted?', 'Can it do 3+2+2?', 'Can I play 7/8 as 3+2+2?', 'Does it handle 7/8 groupings?'],
        a: 'Yes. In 7/8 you can choose the beat grouping: 2+2+3, 2+3+2, or 3+2+2. The grouping option only appears when 7/8 is selected.',
        src: SPECS
    },
    {
        id: 'accents',
        q: ['Can I set accents?', 'How do I change which beats are accented?', 'Can I turn off the accent on beat one?', 'What are the default accents?', 'Can I accent beat 4?'],
        a: 'Tap the numbered counts on the Player to accent or unaccent any of them. Defaults follow the meter: beat 1 in 2/4, 3/4, and 4/4; 1 and 4 in 5/4 and 6/8; 1, 3, and 5 in 7/8; and each group of three in 9/8 and 12/8.',
        src: INSIDE
    },
    {
        id: 'count-in',
        q: ['Is there a count-in?', 'Can it count me in?', 'How long can the count-in be?', 'Can the count-in be spoken?', 'How do I turn off the count-in?'],
        a: 'Yes. Set a count-in of Off or 1 to 8 bars in Settings → Count-in, and turn on Spoken count-in to hear the numbers. Playback starts on the next downbeat.',
        src: INSIDE
    },

    /* ---------- sound ---------- */
    {
        id: 'voice',
        q: ['Can it count out loud?', 'Is there a voice count?', 'Can I change the counting voice?', 'Does the voice say the subdivisions?', 'What voices are there?', 'What language is the counting voice?'],
        a: 'Yes. Turn on Counting voice to hear the counts, with subdivisions like "one and," "one e and a," or "one trip let." Choose a Natural, Low, or Bright voice; the words are in English.',
        src: INSIDE
    },
    {
        id: 'click-voice',
        q: ['Can I turn off the click and only hear the voice?', 'Can I mix the click and voice volume separately?', 'Where are the sound settings?', 'Can I hear the click and voice together?', 'Can I use voice counting without a click?', 'How do I turn the click off?', 'Where do I change click and voice volume?'],
        a: 'Yes. The Sound button on the Player has separate Click and Counting voice switches, each with its own volume, so you can play the click, the voice, or both.',
        src: INSIDE
    },
    {
        id: 'click-sounds',
        q: ['Can I change the click sound?', 'What click sounds are there?', 'Is there a woodblock sound?', 'Is there a hi-hat click?', 'How many click sounds are there?'],
        a: 'There are 4 click sounds: Classic, Woodblock, Beep, and Hi-Hat. Pick one from the Sound button on the Player.',
        src: SPECS
    },
    {
        id: 'click-volume',
        q: ['Can I make the click louder?', 'The click is too quiet', 'How loud can the click go?', 'Is there a volume boost?', "I can't hear the click over my drums", 'Can the click be louder than 100%?', 'How do I turn up the metronome?'],
        a: 'Yes. Click volume goes from 20% to 200%; anything above 100% boosts the click for loud rooms.',
        src: INSIDE
    },
    {
        id: 'pitch',
        q: ['Can I change the click pitch?', 'Can I make the click higher or lower?', 'Why is sound pitch locked?', 'How much can I change the pitch?', 'Can I tune the click?', 'Is click pitch a Pro feature?', 'Can I make the click lower so it cuts through cymbals?'],
        a: 'With Pro you can shift the click pitch up to 12 semitones higher or lower. On the free version the pitch is fixed.',
        src: FEATURES
    },
    {
        id: 'haptics',
        q: ['Does it have haptics?', 'Can I feel the beat as vibration?', 'Can my phone vibrate on each beat?', 'Where is haptic feedback?', 'Can I feel the click instead of hearing it?', 'Is there vibration mode?', 'Does the iPhone buzz on the beat?'],
        a: 'Yes. On iPhone, turn on Haptic feedback in Settings → Feel to feel each beat as a vibration. Routines have their own haptics switch in Routine Settings.',
        src: FEATURES
    },
    {
        id: 'customize',
        q: ['What can I customize?', 'How customizable is the metronome?', 'Can I adjust everything about the click?', 'What settings does the metronome have?', 'Can I change the feel of the click?', 'What options does the player have?'],
        a: 'Pick your time signature, note value, accents, click sound, click and voice volume, count-in, and haptics. Pro adds adjustable click pitch.',
        src: FEATURES
    },
    {
        id: 'background',
        q: ['Does it keep playing in the background?', 'Can I use it with the screen off or in another app?', 'Will the click stop if I lock my phone?', 'Can I switch apps while it plays?', 'Does it play with the screen locked?', 'Will it keep going if I open another app?'],
        a: 'Yes. Ghost Beat supports background audio, so the click keeps playing when you switch apps or lock your screen.',
        src: SPECS
    },
    {
        id: 'interruptions',
        q: ['What happens if I get a phone call?', 'Does it resume after an interruption?', 'What happens if my headphones disconnect?', 'Will the click blast through my speaker if headphones unplug?', 'What happens if an alarm goes off?', 'Does it stop when I unplug headphones?'],
        a: 'A call or alarm pauses playback, and practice time stops counting until it resumes when your device allows. If your headphones disconnect, Ghost Beat stops instead of switching the click to the speaker.',
        src: SPECS
    },
    {
        id: 'silent-click',
        q: ["The metronome is running but I can't hear it", "Why is there no sound?", "The click is silent", "No click sound", "Why can't I hear anything?", "Why did the click go quiet?"],
        a: "First check whether it's meant to be quiet: a ghost bar (red pads and SILENT in the dial), Random Mute, or Progressive Fade. If not, open the Sound button on the Player and check the Click and Counting voice switches and their volumes, then your device volume and which speaker or headphones it's playing through.",
        src: INSIDE
    },

    /* ---------- hands-free ---------- */
    {
        id: 'hands-free',
        q: ['Can I start it without touching my phone?', 'Can it start when I start playing?', 'What is Start on Sound?', 'Is there a hands-free mode?', 'How do I turn on Start on Sound?', 'How does press and hold Start work?'],
        a: 'Turn on Start on Sound in Settings → Hands-free. Then press and hold Start until the ring fills and let go; Ghost Beat listens and starts the click after a few hits. A quick tap still starts right away, and the Practice menu has Listen for sound too.',
        src: FEATURES
    },
    {
        id: 'hands-free-tempo',
        q: ['Does Start on Sound detect my tempo?', 'Will it match the speed I play?', 'Can I count it in with my sticks?', 'What tempo does it start at after listening?', 'Does it figure out my BPM from my playing?', 'Can it set the tempo from my stick clicks?'],
        a: "No. A few hits just start the click at the tempo you've set, so set your BPM first.",
        src: FEATURES
    },
    {
        id: 'auto-stop',
        q: ['Can it stop when I stop playing?', 'What is Auto Stop?', 'How long before it stops after silence?', 'Does it restart when I play again?', 'Can it count in when it restarts?', 'Can the click turn off by itself when I stop?', 'Does the metronome stop automatically if I quit playing?'],
        a: 'Yes. With Start on Sound on, Stop after silence pauses the click when you stop playing (3 seconds by default, adjustable from 1 to 30) and restarts when you play again. You can add a one-bar count-in on restart.',
        src: FEATURES
    },
    {
        id: 'headphones',
        q: ['Should I use headphones?', 'Why does the mic hear the click?', 'Does the speaker click confuse detection?', 'Do I need headphones for Start on Sound?', 'The click is setting off Start on Sound', 'Should I wear headphones for detection?'],
        a: 'Headphones help: they let the mic hear your drums instead of the click coming out of the speaker.',
        src: FEATURES
    },

    /* ---------- practice detection and inputs ---------- */
    {
        id: 'count-practice',
        q: ['Does it work with my electronic drum kit?', 'Does it support MIDI?', 'Can it track practice without the click?', 'How does the app log my playing time?', 'Can it track my practice minutes automatically?', 'Does it know when I am playing?', 'What are ways the app can detect I am playing on my drums?', 'How do I turn on automatic practice detection?', 'Can it count my practice if I never press start?', 'Does it track drumming when the metronome is off?'],
        a: 'Turn on Automatic Practice Detection in Settings → Practice and Ghost Beat counts your drumming while the app is open, even without the click. It listens through your microphone, a connected audio input, or a MIDI kit, and audio stays on your device.',
        src: FEATURES
    },
    {
        id: 'detection-how',
        q: ["How does it detect drumming?", "How does automatic detection work?", "How accurate is practice detection?", "Why is my detected time different from my real time?"],
        a: "It listens for a run of sharp hits: a few in a row start a session, and a few seconds of quiet end it, adapting to your room's noise. Detected time is an estimate that includes short rests, and it's marked Auto detected in your history.",
        src: privacy('Microphone and connected instruments', 'microphone')
    },
    {
        id: 'detection-click',
        q: ['Does detection count while the click plays?', 'Will my practice be counted twice?', 'Does detection run during routines?', 'Is metronome time counted twice with detection?', 'Does it listen while the metronome is playing?', 'Does detection double count my routine?'],
        a: "Detection pauses while the click or a routine plays, since that time is already counted directly. Nothing gets counted twice.",
        src: FEATURES
    },
    {
        id: 'detection-background',
        q: ['Does it listen in the background?', 'Does it track practice when the app is closed?', 'Does detection work on Mac when I use another app?', 'When does listening pause?', 'Will it count practice if I close the app?', 'Does it need to stay open to track practice?'],
        a: "On iPhone and iPad, listening only runs while Ghost Beat is open and pauses outside the app. On Mac it continues while a Ghost Beat window is open, even if you're in another app; hide or close it to pause.",
        src: privacy('Microphone and connected instruments', 'microphone')
    },
    {
        id: 'input-sources',
        q: ['Can I use an audio interface?', 'Can I connect my drum kit?', 'Can I plug in my e-kit?', 'What inputs can Ghost Beat listen to?', 'Can I use a USB microphone?', 'How do I choose the input?'],
        a: 'Choose an input source in Settings → Hands-free. iPhone and iPad can use the built-in microphone, a connected audio input, or a MIDI drum module; Mac uses the input selected in System Settings → Sound, including an audio interface, or a MIDI source.',
        src: FEATURES
    },
    {
        id: 'midi',
        q: ['Does MIDI need microphone permission?', 'How does MIDI detection work?', 'My MIDI module disconnected', 'Do I need to calibrate with MIDI?', 'Can I use a MIDI drum module?', 'Do I need the mic for my electronic kit?', 'What if my e-kit unplugs?'],
        a: "No microphone needed: with a MIDI drum module, pad hits count directly, and sensitivity and calibration don't apply. If the device disconnects, Ghost Beat stops listening until you reconnect it or pick another input.",
        src: privacy('Microphone and connected instruments', 'microphone')
    },
    {
        id: 'sensitivity',
        q: ['It is not picking up my drums', 'Will it detect a practice pad?', 'How do I make the mic more sensitive?', 'It starts from background noise', 'What does microphone sensitivity do?'],
        a: 'Adjust Microphone sensitivity in Settings → Hands-free: slide toward Quieter hits for practice pads and soft playing, or toward Louder hits if room noise sets it off. It applies to both Start on Sound and practice detection.',
        src: FEATURES
    },
    {
        id: 'calibration',
        q: ['How do I calibrate the microphone?', 'What does Auto-calibrate do?', 'How long does calibration take?', 'Should I calibrate for my kit?', 'Calibrate for my room'],
        a: 'Tap Auto-calibrate in Settings → Hands-free: stay quiet for 2 seconds, then play normally for 6. Ghost Beat sets its threshold from your hits and the room, for both Start on Sound and practice detection. No audio is recorded.',
        src: privacy('Microphone and connected instruments', 'microphone')
    },
    {
        id: 'calibration-fail',
        q: ['Calibration says too much background noise', 'Calibration says not enough clear hits', 'Calibration failed', 'Calibration says no mic signal', 'Why does calibration keep failing?', 'Calibration says the mic stopped responding'],
        a: 'Try again with a steady beat, move the device closer to your drums or to a quieter spot, and check microphone access and your input. A failed calibration keeps your previous setting.',
        src: FEATURES
    },

    /* ---------- practice time, goals, stats ---------- */
    {
        id: 'what-counts',
        q: ['What counts toward my daily goal?', 'Does routine time count?', 'Does detected drumming count toward my goal?', 'Do pauses count as practice?', 'What fills my practice ring?', 'Does playing without the click count toward my goal?', 'What gets counted as practice?', 'Which sessions count as practice time?'],
        a: "Click sessions, routines, and detected drumming all fill your daily goal ring. Time counts once a session passes 10 seconds, including those first 10; pauses and interruptions don't count.",
        src: FEATURES
    },
    {
        id: 'short-session',
        q: ["Why didn't my session save?", 'Do short sessions count?', 'What is the minimum session length?', 'My practice did not show up', 'Why is my session missing from history?', 'How long until a session counts?'],
        a: 'Sessions save once they reach 10 seconds, and those first 10 seconds are included. Shorter runs are not saved.',
        src: FEATURES
    },
    {
        id: 'device-overlap',
        q: ['What if I practice on two devices at once?', 'Does practice on iPad and iPhone double count?', 'Is overlapping practice counted twice?', 'Will practicing on my iPad and Mac at the same time count twice?', 'How does practice time work across devices?'],
        a: 'With iCloud sync on, overlapping practice on different devices counts once. Click and routine time takes priority, and detected drumming fills the gaps.',
        src: privacy('Optional iCloud sync', 'icloud-sync')
    },
    {
        id: 'goals',
        q: ['Can I set a daily practice goal?', 'How do I change my daily goal?', 'What is the default daily goal?', 'How long can my goal be?', 'What is the practice ring?'],
        a: 'Set your daily goal in Settings → Practice, from 5 to 180 minutes in 5-minute steps (30 by default). The ring fills as you play and turns solid green when you hit it.',
        src: FEATURES
    },
    {
        id: 'goal-breakdown',
        q: ['How much have I practiced today?', 'Can I see how my time was counted?', 'How much time is left on my goal?', 'How many days did I practice this week?', 'What does the goal ring show when I tap it?', 'Can I see detected drumming separately?'],
        a: "Tap your goal ring to see today's time split into click and routines versus detected drumming, how much is left, and this week's total time and days practiced.",
        src: FEATURES
    },
    {
        id: 'weekly-chart',
        q: ["What is this week's practice chart?", 'Can I see my practice by day?', 'Does the weekly chart include today?', 'Where do I see my weekly practice?', 'What is the bar chart on the home screen?', 'Does the week start on Sunday or Monday?'],
        a: "Home shows this week's seven daily totals, including practice that's still in progress, with the week starting on the day your device's calendar uses. Tap it for your full history.",
        src: INSIDE
    },
    {
        id: 'stats',
        q: ['Does it track my progress?', 'Can I see practice statistics?', 'What stats does it show?', 'Can I see my timing stats over time?', 'Where are my timing insights?'],
        a: 'Yes. Stats show your practice time, average session, streaks, and timing insights like average and best accuracy, best grade, and consistency. Free shows the last 7 days; Pro adds 30 days and all time.',
        src: FEATURES
    },
    {
        id: 'stats-pro',
        q: ['Why are 30-day stats locked?', 'Can I see all-time stats?', 'How far back does my history go for free?', 'Why can I only see 7 days of stats?', 'Is my older practice history deleted on the free version?', 'What stats need Pro?'],
        a: 'Free stats cover the last 7 days. The 30 Days and All Time views are part of Pro; your older sessions are still kept.',
        src: FEATURES
    },
    {
        id: 'streaks',
        q: ['Does it keep a streak?', 'How does the streak work?', 'Where is my best streak?', 'Does it keep my streak?', 'How do I keep my streak going?', 'What counts as a streak day?'],
        a: 'Yes. Your streak counts the days in a row you practice. Home shows your current Day Streak, and stats show your current and best streak.',
        src: INSIDE
    },
    {
        id: 'history',
        q: ['Can I see my practice history?', 'Where are my past sessions?', 'What does Auto detected mean in my history?', 'Does history show my BPM?', 'Where is my session log?', 'Can I see what I practiced yesterday?'],
        a: 'Session history lists each session with its time, BPM, and timing grade and accuracy when you used Timing. Sessions found by practice detection are labeled Auto detected.',
        src: FEATURES
    },

    /* ---------- tempo ladders ---------- */
    {
        id: 'ladders',
        q: ['What are tempo ladders?', 'Can it speed up the tempo gradually?', 'Can I build speed automatically?', 'Is there a speed trainer?', 'Can it speed up a few BPM every few bars?', 'Are tempo ladders free?'],
        a: 'Tempo ladders raise the BPM for you: set a start and target tempo, a step of 1 to 50 BPM, and how many bars to play each tempo (1 to 128). Changes land on beat 1, off bars count, and ladders are free on the Player and in presets.',
        src: FEATURES
    },
    {
        id: 'ladder-finish',
        q: ['What happens when the ladder reaches the target?', 'Can the ladder come back down?', 'Can the tempo ladder repeat?', 'Can the ladder stop at the end?', 'Why did my ladder turn off?'],
        a: 'At the target, choose Stay, Stop, or Come back down, and turn on Repeat ladder to keep climbing and returning. Editing the BPM by hand turns the ladder off; save a preset to keep the setup.',
        src: FEATURES
    },

    /* ---------- routines and presets ---------- */
    {
        id: 'routines',
        q: ['What are practice routines?', 'Can I build a practice routine?', 'Can it run through exercises automatically?', 'Can each step have its own tempo?', 'How do I make a routine?', 'Can I chain exercises together?', 'Can I put several exercises into one practice session?'],
        a: 'Routines chain steps that play one after another. On the Practice tab, add a routine, then add steps one at a time with their own tempo, ghost pattern, time signature, note value, and accents. Press start once and it runs itself.',
        src: FEATURES
    },
    {
        id: 'routine-steps',
        q: ['How long can a routine step be?', 'Can a step be timed instead of bars?', 'How many bars can a step be?', 'What can I set per step?', 'Can a step be a set number of minutes?', 'Can each step have its own time signature?'],
        a: 'Each step runs for 1 to 64 bars or a set time from 5 seconds to 2 hours. Every step also has its own BPM, on/off bars, time signature, note value, and accents.',
        src: INSIDE
    },
    {
        id: 'timed-steps',
        q: ['Why did my timed step run long?', 'Does a timed step cut off mid-bar?', 'Is step time exact?', 'My 5 minute step ran a little over', 'Does a timed step finish the bar?', 'Why does the step wait before moving on?'],
        a: 'Step time is a minimum: when the time is up, Ghost Beat finishes the current bar before moving on, so steps never cut off mid-bar.',
        src: INSIDE
    },
    {
        id: 'routine-settings',
        q: ['Can a routine loop?', 'Can a routine have its own sound?', 'Does a routine change my normal settings?', 'Can a routine have a count-in?', 'What are routine settings?'],
        a: "Routine Settings are just for that routine: loop it, add a starting count-in (off or 1 to 4 bars), spoken count-in, haptics, click sound and volume, and counting voice. Your usual Player settings stay the same.",
        src: INSIDE
    },
    {
        id: 'routine-playback',
        q: ['Can I pause a routine?', 'Can I skip a step?', 'How do I end a routine?', 'Why can I not change the time signature during a routine?', 'Can I use a tempo ladder in a routine?'],
        a: 'While a routine plays you can pause, resume, skip to the next step, or end it, and the Player shows the next step. Tempo ladders and the main rhythm settings are locked until the routine ends.',
        src: INSIDE
    },
    {
        id: 'starter-routines',
        q: ['Does it come with routines?', 'Are there example routines?', 'What is Ghost Mode Training?', 'What is Speed Builder?', 'What routines come with the app?', 'Is there a built-in routine to get started?'],
        a: 'Yes. Ghost Beat includes two starter routines: Ghost Mode Training, which goes from full click to 1 on / 3 off, and Speed Builder, which climbs from 100 to 160 BPM.',
        src: INSIDE
    },
    {
        id: 'presets',
        q: ['What are presets?', 'Can I save my settings?', 'How do I save a setup?', 'How many presets can I save?', 'Do presets save the tempo ladder?'],
        a: 'Presets save your whole Player setup, including tempo, rhythm, ghost pattern, sound, and tempo ladder, so you can load it again from the Presets button. Free includes 3 presets; Pro is unlimited.',
        src: FEATURES
    },
    {
        id: 'notes',
        q: ['Can I save notes on a routine?', 'Can I write practice notes?', 'Where are practice notes?', 'Do my notes sync?', 'Is there a place to write sticking ideas?', 'Are practice notes a Pro feature?'],
        a: 'Practice Notes, a Pro feature, let you save reminders, sticking ideas, and what to work on next with the notes button on any routine or preset. Notes save when you close them and sync with iCloud if you turn it on.',
        src: FEATURES
    },

    /* ---------- price ---------- */
    {
        id: 'free',
        q: ['Is Ghost Beat free?', 'How much does it cost?', "What's included for free?", 'What are the limits of the free version?', 'How many routines can I make for free?', 'How many steps can a free routine have?'],
        a: "Yes. It's free to download, with ghost bars, Random Mute, tempo ladders, daily goals, and 7 days of stats included, plus 4 routines, 6 steps per routine, and 3 presets.",
        src: FAQ
    },
    {
        id: 'pro',
        q: ["What does Pro include?", "How much is Pro?", "How much does Pro cost?", "Is there a subscription?", "Is Pro a one-time purchase?", "What do I get if I upgrade?", "Do I have to pay monthly?", "Is there a monthly fee?", "How do I cancel my subscription?", "Does Pro give me more routines or steps?", "Which free limits does Pro remove?", "Do I pay once for Pro?", "Is the price different in other countries?"],
        a: "Pro is a one-time purchase, not a subscription: $4.99 in the US, with your local price shown in the App Store. It unlocks unlimited routines, steps, and presets, 30-day and all-time stats, click pitch, progressive fade, and practice notes. Find it in Settings → Ghost Beat Pro.",
        src: FAQ
    },
    {
        id: 'restore',
        q: ["How do I restore my Pro purchase?", "Who handles payment?", "Do you see my credit card?", "I got a new phone, do I need to buy Pro again?"],
        a: "Apple processes payment and manages purchase history and restoration, so use Restore Purchases in Settings on a new device. Ghost Beat doesn't receive your payment-card details.",
        src: privacy('Ghost Beat Pro', 'pro')
    },
    {
        id: 'pro-locked',
        q: ["I bought Pro but it's still locked", "Pro isn't unlocked", "I paid but don't have Pro", "Pro is not unlocked on my iPad", "My Pro purchase disappeared", "Pro features are locked after buying"],
        a: "Check that this device is signed in to the App Store with the same Apple Account you bought Pro with, then tap Restore Purchases in Settings. Pro is tied to that Apple Account, not to iCloud sync, so turning sync on won't unlock it. If it's still locked, email support@ghostbeat.cc.",
        src: privacy('Ghost Beat Pro', 'pro')
    },
    {
        id: 'pro-devices',
        q: ["Does Pro work on my Mac too?", "Do I need to buy Pro separately for my iPad?", "Does one purchase cover iPhone and Mac?", "Is Pro a universal purchase?", "Do I pay for Pro on each device?"],
        a: "Yes. Ghost Beat is one app across iPhone, iPad, and Mac, so Pro carries over to any device signed in to the same Apple Account. If it doesn't show up, tap Restore Purchases in Settings.",
        src: privacy('Ghost Beat Pro', 'pro')
    },
    {
        id: 'ads',
        q: ['Are there ads?', 'Does Ghost Beat track me for advertising?', 'Is there an advertising identifier?', 'Does it have ads?', 'Will I see advertisements?'],
        a: 'No. There are no ads and no advertising tracking, and no advertising identifier is used.',
        src: privacy('App-session analytics', 'analytics')
    },

    /* ---------- devices, account, sync ---------- */
    {
        id: 'devices',
        q: ['Which devices does it run on?', 'Is it on Android?', 'Does it work on iPad?', 'Is there a Mac app?', 'Is it on Windows?', 'Is there an Apple Watch app?'],
        a: "Ghost Beat runs on iPhone, iPad, and Mac. There isn't an Android, Windows, or Apple Watch version.",
        src: FAQ
    },
    {
        id: 'requirements',
        q: ['What iOS version do I need?', 'Will it run on my old iPad?', 'What macOS version is required?', 'What are the system requirements?', 'Does it work on iOS 16?', 'Is my Mac too old for Ghost Beat?'],
        a: 'Ghost Beat needs iOS or iPadOS 16.4 or later on iPhone and iPad, and macOS 13 or later on Mac.',
        src: FAQ
    },
    {
        id: 'offline',
        q: ["Does it work offline?", "Do I need internet?", "Can I use it on a plane?", "Does it need wifi?", "Does it need wifi to sync?", "Will it work without a connection?"],
        a: "Yes, practicing doesn't need an internet connection. iCloud sync waits until you're back online, and buying or restoring Pro needs a connection to the App Store.",
        src: INSIDE
    },
    {
        id: 'mac',
        q: ['Is the Mac app different?', 'Can I change the tempo with my mouse?', 'Does the Mac app have haptics?', 'Can I use my audio interface on Mac?', 'Does the Mac version have all the features?', 'How do I use Ghost Beat on my Mac?'],
        a: 'The Mac app has the same practice tools. You can scroll over the dial to change the tempo, it listens through the input chosen in System Settings → Sound, and haptics are iPhone only.',
        src: FAQ
    },
    {
        id: 'account',
        q: ['Do I need an account?', 'Do I have to sign up?', 'Do I need to log in?', 'Do I need to make an account?', 'Is there a login?'],
        a: "No. There's no Ghost Beat account. Apple handles the Apple Account used for purchases and optional iCloud sync.",
        src: FAQ
    },
    {
        id: 'sync',
        q: ["Does it sync between devices?", "Will my routines sync to my iPad?", "How does iCloud sync work?", "Is sync on by default?", "Can I use it on my iPhone and Mac?", "Will my presets show up on my Mac?", "Do my routines carry over to my other devices?", "Does my practice history sync?", "Will my stats show up on my other devices?"],
        a: "Turn on Sync with iCloud in Settings → iCloud to keep routines, presets, notes, practice history, and your daily goal together on the same Apple Account. It's off by default, syncs while the app is open between sessions, and shows when it last synced.",
        src: privacy('Optional iCloud sync', 'icloud-sync')
    },
    {
        id: 'sync-local-only',
        q: ["What doesn't sync?", 'Do my microphone settings sync?', 'Does my input source sync?', 'Do reminders sync?', 'Why did sync pause?'],
        a: "Audio and microphone settings, your input choice and calibration, and reminders stay on each device. Sync waits while you're playing, calibrating, or editing a routine, then catches up.",
        src: privacy('Optional iCloud sync', 'icloud-sync')
    },
    {
        id: 'sync-conflict',
        q: ['What if I edit a routine on two devices?', 'Will sync overwrite my changes?', 'Why do I have a duplicate routine?', 'What happens if two devices change the same preset?', 'Why are there two copies of my preset?'],
        a: "If the same routine or preset is edited on two devices before they sync, Ghost Beat keeps both edits as separate versions instead of overwriting one with the other.",
        src: privacy('Optional iCloud sync', 'icloud-sync')
    },
    {
        id: 'sync-trouble',
        q: ["Why aren't my devices syncing?", "Sync isn't working", "My routines aren't showing up on my iPad", "iCloud sync is stuck", "My Mac is not getting my presets", "Why does sync need attention?"],
        a: "Turn on Sync with iCloud on each device, signed in to the same iCloud account, and keep Ghost Beat open with playback stopped, since it syncs between sessions. Settings → iCloud shows the status and when it last synced, with a Sync now or Retry button. Its message points to the fix, like signing in to iCloud, freeing up iCloud storage, or waiting until you're back online.",
        src: privacy('Optional iCloud sync', 'icloud-sync')
    },
    {
        id: 'sync-delete',
        q: ['How do I delete my iCloud data?', 'Does turning off sync delete my data?', 'How do I erase my cloud library?', 'How do I remove my data from iCloud?', 'Will turning off iCloud sync erase my routines?'],
        a: "Turning sync off stops future syncing but doesn't delete existing copies. To remove cloud data, turn sync off on all your devices first, then use Apple's iCloud storage controls for Ghost Beat. There isn't currently an in-app button to erase the whole cloud library.",
        src: privacy('Optional iCloud sync', 'icloud-sync')
    },
    {
        id: 'retention',
        q: ['How do I delete my data?', 'Does deleting the app delete my data?', 'How do I reset my practice history?', 'How do I delete my routines?', 'Can I wipe my practice history?'],
        a: "You control your local library with the app's delete and reset controls, and with sync enabled, deletions are synced. Turning off sync or deleting the app alone doesn't erase iCloud data.",
        src: privacy('Retention and your choices', 'retention')
    },
    {
        id: 'local-data',
        q: ['Where is my practice data stored?', 'Is my data saved on my phone?', 'What happens to my practice history?', 'Is my practice history stored in the cloud?', 'Does my data stay on my device?'],
        a: "Settings, routines, presets, practice history, timing results, daily goals, and notes are saved on your device. If you turn on iCloud sync, a copy is also kept in your private iCloud. This practice content is never sent to the analytics service.",
        src: privacy('Your practice data', 'practice-data')
    },

    /* ---------- notifications ---------- */
    {
        id: 'notifications',
        q: ['Does it send notifications?', 'Are notifications generated on my device?', 'Will Ghost Beat send me push notifications?', 'Are notifications sent from a server?', 'What notifications does Ghost Beat send?'],
        a: 'If you allow notifications, Ghost Beat can schedule local practice reminders and daily-goal alerts. They are generated on your device and you control them in the app and in system settings.',
        src: privacy('Notifications', 'notifications')
    },
    {
        id: 'reminders',
        q: ['Can it remind me to practice?', 'How do I change the reminder time?', 'Can I turn off the daily reminder?', 'Does it tell me when I reach my goal?', 'Can I get a daily practice reminder?', 'Can it notify me when I hit my goal?'],
        a: 'Yes. Settings has a Daily reminder, set for 7 PM by default once notifications are allowed and adjustable to any time, plus a Goal reached alert for when you hit your daily goal. Turn either off any time.',
        src: privacy('Notifications', 'notifications')
    },

    /* ---------- privacy ---------- */
    {
        id: 'recording',
        q: ['Does it record my playing?', 'Does it upload my audio?', 'Is my microphone audio saved?', 'Does it record MIDI?', 'Does Ghost Beat save recordings of me?', 'Is my drumming uploaded anywhere?'],
        a: "No. Microphone or connected audio input is analyzed live on your device. It isn't saved as a recording or uploaded, and MIDI performances aren't recorded either.",
        src: FAQ
    },
    {
        id: 'microphone',
        q: ['Why does Ghost Beat need the microphone?', 'What is the microphone used for?', 'Can I turn off microphone access?', 'Does it listen through the microphone?', 'Can I use it without giving mic access?'],
        a: "The microphone or a connected audio input is used for Start on Sound, calibration, silence detection, and automatic practice tracking. Permission is requested only when you turn one of those on, and everything else works without it.",
        src: privacy('Microphone and connected instruments', 'microphone')
    },
    {
        id: 'mic-permission',
        q: ["I denied microphone access, how do I turn it on?", "How do I enable the microphone?", "Microphone permission is off", "I said no to the microphone", "How do I allow microphone access on Mac?", "Start on Sound needs microphone permission", "How do I give Ghost Beat microphone access?"],
        a: "Tap Open Microphone Settings where Ghost Beat shows it, or turn it on yourself: on iPhone and iPad in Settings → Ghost Beat → Microphone, and on Mac in System Settings → Privacy & Security → Microphone. A MIDI drum module doesn't need microphone permission.",
        src: privacy('Microphone and connected instruments', 'microphone')
    },
    {
        id: 'analytics',
        q: ['Does Ghost Beat collect analytics?', 'What data do you collect?', 'What is TelemetryDeck?', 'Can I turn off analytics?', 'Does the app track usage?', 'What analytics does Ghost Beat use?'],
        a: "Ghost Beat 3 sends app-session start events through TelemetryDeck to learn how often the app is used and which devices and versions to support. They never include your name, email, practice content, audio, or MIDI. There's currently no in-app switch to turn them off, and analytics data is never sold.",
        src: privacy('App-session analytics', 'analytics')
    },
    {
        id: 'sell',
        q: ['Do you sell my data?', 'Is my data shared with advertisers?', 'Do you track me across other apps?', 'Do you share my information?', 'Is my data sold to third parties?'],
        a: "No. Analytics data isn't sold or used to track you across other companies' apps and websites, and there are no ads or advertising tracking.",
        src: privacy('App-session analytics', 'analytics')
    },
    {
        id: 'kids',
        q: ['Is it safe for kids?', 'Does it ask for my age?', 'Can my child use Ghost Beat?', 'Is Ghost Beat okay for children?', 'Does it collect personal info from kids?'],
        a: "Ghost Beat doesn't ask for a name, date of birth, or contact details in the app. A parent or guardian can contact support@ghostbeat.cc with privacy questions.",
        src: privacy('Younger users', 'younger-users')
    },

    /* ---------- help ---------- */
    {
        id: 'accessibility',
        q: ['Does it work with VoiceOver?', 'Is it accessible?', 'Does it support larger text?', 'Does it respect Reduce Motion?', 'Can blind drummers use Ghost Beat?', 'Does it support Dynamic Type?'],
        a: 'Yes. Controls have VoiceOver labels, layouts adapt to larger text, and animations follow Reduce Motion.',
        src: FAQ
    },
    {
        id: 'support',
        q: ["How do I contact support?", "How do I get help?", "Can I request a feature?", "Where is the privacy policy in the app?"],
        a: 'Email support@ghostbeat.cc. Settings in the app also links to support and the privacy policy.',
        src: { label: 'Support', href: 'mailto:support@ghostbeat.cc' }
    },
    {
        id: 'bug-report',
        q: ["I found a bug", "How do I report a bug?", "The app crashed", "Something isn't working right", "What should I include in a bug report?", "How do I report a problem?"],
        a: "Email support@ghostbeat.cc with your device, its iOS, iPadOS, or macOS version, your Ghost Beat version, the steps that cause it, what you expected versus what happened, and a screenshot if you can.",
        src: { label: 'Support', href: 'mailto:support@ghostbeat.cc' }
    },
    {
        id: 'maker',
        q: ['Who makes Ghost Beat?', 'Who is the developer?', 'Who made this app?', 'Who is behind Ghost Beat?', 'Who is Swayyy?'],
        a: 'Ghost Beat is made by Swayyy.',
        src: HOME
    },
    {
        id: 'this-box',
        q: ['How does this answer box work?', 'Is this an AI?', 'Is my question sent anywhere?', 'Who answers these questions?', 'Does this chat use ChatGPT?'],
        a: "A small language model running in your browser matches your question against Ghost Beat's own help notes about the app, this site, and the privacy policy, then shows the matching answer. Your question never leaves your device.",
        src: FAQ
    }
];
