// vim: colorcolumn=141 iskeyword-=-

// Based on https://www.dwitter.net/d/1763

// Theramin
if(!t)a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start()
c.onmousemove=e=>o.frequency.value=e.x*3
c.onclick=_=>a.close()

// Theramin (click to start a new instrument)
c.onclick=a=>(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=e.x/2)
c.onclick=_=>(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());c.onmousemove=e=>o.frequency.value=2*e.x

// Theramin that only starts once (so user is never left with 20 of them, but 141 chars)
a=t?a:0
c.onclick=_=>a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start())
c.onmousemove=e=>o.frequency.value=e.x

// 144 chars: Theramin which stops on click
if(!t)a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=e.x;c.onclick=_=>a.close()
// 144 chars: Theramin which stops on click
t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=e.x,c.onclick=_=>a.close())
// Golfed to 142:
t?c.onclick=_=>a.close():(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=e.x)


// Ideally I want to create a theramin which we can click to start/stop
// Although so far I haven't even managed to create one which auto-starts and clicks to stop!
// Or one which clicks-to-start and prevents duplicates from being created.  (User can silence by going off frequency spectrum.)
a=t?a:0;c.onclick=e=>{a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start())}c.onmousemove=e=>o.frequency.value=e.x
a=t?a:0;c.onclick=e=>{a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start())}c.onmousemove=e=>o.frequency.value=e.x
a=t?a:0;c.onclick=e=>o=o||({a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=e.x}
// Copies of piano from below, for reference
//a=t?a:0;c.onclick=e=>(a&&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=e.x,o.connect(a.destination),o.start())
//a=t?a:0;c.onclick=e=>{if(!a){a=new AudioContext;o=a.createOscillator();o.connect(a.destination),o.start()}o.frequency.value=e.x}
//a=t?a:0;c.onclick=e=>{a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=e.x}
a=t?a:0;c.onclick=_=>a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());c.onmousemove=e=>o.frequency.value=e.x
// BAD: Creates a tonne of oscillators :P
a=t?a:0;c.onclick=e=>a=a||new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start();c.onmouseover=e=>o.frequency.value=e.x

// A theramin which auto-starts but on frequency 0
// For some reason the mouseover doesn't work; oh behcause we were calling h() on every frame!
h=c.onmouseover=e=>o.frequency.value=e.x;a=t?a:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h({x:0}))
t?0:((h=c.onmouseover=e=>o.frequency.value=e.x),a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h({x:0}))
t?0:((c.onmouseover=h=e=>o.frequency.value=e.x),a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h({x:0}))
if(!t){h=c.onmouseover=e=>o.frequency.value=e.x;a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h({x:0})}
// OK it works now!
h=c.onmousemove=e=>o.frequency.value=e.x;t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h({x:0}))
t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h=c.onmousemove=e=>o.frequency.value=e.x,h({x:0}))
t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h=c.onmousemove=e=>o.frequency.value=4*e.x,h({x:0}))
// I tried passing {} and c, since they have x:undefined, but that didn't work.
// Making another function doesn't help
t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>h(e.x),h=x=>o.frequency.value=x,h(0))
// Closer to release: all the frequencies, big empty gap on the left
t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h=c.onmousemove=e=>o.frequency.value=1.02**e.x,h({x:0}))
t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h=c.onmousemove=e=>o.frequency.value=30*e.x,h({x:0}))
// Init with onclick, not auto, but risk of creating multiple (which cannot be silenced)
c.onclick=_=>(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h=c.onmousemove=e=>o.frequency.value=30*e.x)
// Do not init until onclick; prevent multiple contexts from being created
a=t?a:0;c.onclick=_=>a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=e.x)
a=t?a:0;c.onclick=_=>a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=e.x)
// *** RELEASED ***
c.onclick=_=>window.a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=e.x)

// Post-release: We can use 'this' instead of 'window'
c.onclick=_=>this.a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=e.x)

// Tuneful version with no initialisation
t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),c.onmousemove=e=>o.frequency.value=440*1.06**(e.x/40|0)))
t?0:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h=c.onmousemove=e=>o.frequency.value=99*1.1**(e.x/9|0)),h({x:0}))

// Dodgy:
c.onclick=_=>{h=c.onmouseover=e=>o.frequency.value=e.x;a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),h({x:0})}

// Init trick for the theramin, but not the piano.  We could disable the onclick after it has run once: if(!t)I=e=>(...,I=0);c.onclick=I
t?c.onclick=I:I=_=>(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),I=0);c.onmousemove=e=>o.frequency.value=e.x
t?c.onclick=I:I=_=>(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),I=o.start());c.onmousemove=e=>o.frequency.value=e.x
t||I=_=>(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),I=o.start());c.onclick=I;c.onmousemove=e=>o.frequency.value=e.x
c.onclick=t?I:I=_=>(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),I=o.start());c.onmousemove=e=>o.frequency.value=e.x
// So ... the init trick saved us nothing!

