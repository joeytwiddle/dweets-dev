// Piano
c.onclick=e=>{a=new(window.AudioContext)(),o=a.createOscillator(),o.connect(a.destination),o.start();o.frequency.value=e.x}

osc.noteOff(ctx.currentTime + time + duration);


c.onclick=e=>{a=new(window.AudioContext)(),o=a.createOscillator(),o.connect(a.destination),o.start()
o.frequency.value=e.x
o.noteOn(a.currentTime+.1)
o.noteOff(a.currentTime+.5)}

c.onclick=e=>{a&&a.close();a=new(window.AudioContext)(),o=a.createOscillator()
o.frequency.value=e.x
o.connect(a.destination)
o.start()
}

c.onclick=e=>{a&&a.close();a=new(window.AudioContext)(),o=a.createOscillator()
o.frequency.value=440*1.06**(e.x/10)
o.connect(a.destination)
o.start()
}

// BUG: These crash if 'a' does not already exist
c.onclick=e=>(a&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=440*1.06**(e.x/8),o.connect(a.destination),o.start())
c.onclick=e=>(a&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=440*1.06**(e.x/8|0),o.connect(a.destination),o.start())
c.onclick=e=>(a&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=99*1.06**(e.x/9|0),o.connect(a.destination),o.start())

// Trying to fix it
a=c.onclick=e=>(a&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=99*1.06**(e.x/9|0),o.connect(a.destination),o.start())

a=0
c.onclick=c.onclick||(e=>(a&&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=99*1.06**(e.x/9|0),o.connect(a.destination),o.start()))

a=t?a:0
a=t?a:init

// Clickable:
a=t?a:0;c.onclick=e=>(a&&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=1.06**e.x,o.connect(a.destination),o.start())
c.onclick=e=>(window.a&&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=1.06**e.x,o.connect(a.destination),o.start())

// A piano that clicks on/off:
a=t?a:0;c.onclick=e=>a?(a.close(),a=0):(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),o.frequency.value=e.x)
a=t?a:0;c.onclick=e=>{a=a?(a.close(),0):new AudioContext;o=a.createOscillator(),o.connect(a.destination),o.start(),o.frequency.value=e.x}
a=t?a:0;c.onclick=e=>{a=a?(a.close(),0):new AudioContext;o=a.createOscillator(),o.connect(a.destination),o.start(),o.frequency.value=3*e.x}
a=t?a:0;c.onclick=e=>{a=a?a.close()&0:new AudioContext;o=a.createOscillator(),o.connect(a.destination),o.start(),o.frequency.value=3*e.x}

// Trying (and failing) to make it tuneful
a=t?a:0;c.onclick=e=>{if(!a){a=new AudioContext;o=a.createOscillator();o.connect(a.destination),o.start()}o.frequency.value=99*1.06**(e.x/9|0)}
a=t?a:0;c.onclick=e=>{if(!a){a=new AudioContext;o=a.createOscillator();o.connect(a.destination),o.start()}o.frequency.value=9*1.1*(e.x/9|0)}
a=t?a:0;c.onclick=e=>{a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=9*1.06**(e.x/9|0)}
a=t?a:0;c.onclick=e=>{a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=440*1.0595**(e.x/40|0)}
a=t?a:0;c.onclick=e=>{a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=99*1.1**(e.x/9|0)}

// A piano that clicks to change note:
a=t?a:0;c.onclick=e=>(a&&a.close(),a=new AudioContext,o=a.createOscillator(),o.frequency.value=e.x,o.connect(a.destination),o.start())
a=t?a:0;c.onclick=e=>{if(!a){a=new AudioContext;o=a.createOscillator();o.connect(a.destination),o.start()}o.frequency.value=e.x}
// This one is my favourite:
a=t?a:0;c.onclick=e=>{a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=e.x}
// --- RELEASED ---
c.onclick=e=>{window.a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=56*1.06**(e.x/9|0)}
// Smaller: We can drop the c.
onclick=e=>{window.a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=56*1.06**(e.x/9|0)}
// a.close||a.start did not work because "Illegal invocation" and it didn't save any chars anyway!
a=t?a:0;onclick=e=>{(a.close||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start))();o.frequency.value=56*1.06**(e.x/9|0)}

/*
I deleted the release from dwitter because piano_keyboard /2477 is like this but better.

At deletion time, it had 2 points, and the comments were:

joeytwiddle: A poorly tuned piano? Restricts notes to the musical scale (approx)
joeytwiddle: Adding a.close() makes the transition between notes a bit sharper
joeytwiddle: Wider and more accurate keys: 440*1.06**(e.x/60|0)
joeytwiddle: Oeps. Can totally use 'this' instead of 'window'
donbright: this is amazing but i am too afraid to annoy people to remix

Damnit I lost my two points!  xD
*/

// Duh.  We can use this instead of window
onclick=e=>{this.a&&a.close();a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=56*1.06**(e.x/9|0}

// We don't need to use the a=t?a:0 if we just want to do setup
t||(a=...)

/** p(object, regexp) = find key in object */
/** P(object, regexp) = get property from object */
P=(o,r)=>{for(k in o)if(k.match(r))return o[k]}
P=(o,r)=>Object.entries(o).find(e=>e[0].match(r))[1]
p=(o,r)=>Object.keys(o).map(k=>k.match(r))[0]
/** This one is shorter, but it doesn't find props on o's prototype */
P=(o,r)=>o[Object.keys(o).find(k=>k.match(r))]
/** f(object, regexp) = get bound function from object */
f=(o,r)=>p(o,r).bind(o)
/** This version of p returns only the key.  It can be used to make function calls without the extra f function */
p=(o,r)=>{for(k in o)if(k.match(r))return k}

// @consider We may be able to shorten calls to Q by using template strings: Q`eO` by I don't think we can pass a regexp argh.

// Original
c.onclick=e=>{this.a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start());o.frequency.value=56*1.06**(e.x/9|0)}
// "Minified"
f=(o,r)=>p(o,r).bind(o);p=(o,r)=>{for(k in o)if(k.match(r))return o[k]};c.onclick=e=>{this.a||(a=new AudioContext,o=f(a,/eO/)(),f(o,/ct/)(p(a,/de/)),o.start());p(o,/fr/).value=56*1.06**(e.x/9|0)}
// We don't actually need f.  If the target obj is short enough we can use o[p(o,k)]
p=(o,r)=>{for(k in o){if(k.match(r)){return k}}};c.onclick=e=>{this.a||(a=new AudioContext,o=a[p(a,/eO/)](),o[p(o,/ct/)](a[p(a,/de/)]),o.start());o[p(o,/fr/)].value=56*1.06**(e.x/9|0)}
p=(o,r)=>{for(k in o)if(k.match(r))return k};c.onclick=e=>{this.a||(a=new AudioContext,o=a[p(a,/eO/)](),o[p(o,/ct/)](a[p(a,/de/)]),o.start());o[p(o,/fr/)].value=56*1.06**(e.x/9|0)}
// Do like this but do not pass o. set O (we actually used Z) outside p and use it inside p.  Not tested:
p=r=>{for(k in Z)if(k.match(r))return k};c.onclick=e=>{this.a||(a=new AudioContext,Z=a,o=a[p(/eO/)](),d=a[p(/de/)],Z=o,o[p(/ct/)](d),o.start());o[p(/fr/)].value=56*1.06**(e.x/9|0)}
// It works!  But only because we can now drop a in favour of Z
p=r=>{for(k in Z)if(k.match(r))return k};c.onclick=e=>{this.Z||(Z=new AudioContext,o=Z[p(/eO/)](),d=Z[p(/de/)],Z=o,o[p(/ct/)](d),o.start());o[p(/fr/)].value=56*1.06**(e.x/9|0)}
// Adding P = Z[p(r)]
p=r=>{for(k in Z)if(k.match(r))return k};P=r=>Z[p(r)];c.onclick=e=>{this.a||(a=new AudioContext,Z=a,o=P(/eO/)(),d=P(/de/),Z=o,P(/ct/)(d),o.start());P(/fr/).value=56*1.06**(e.x/9|0)}
// Use Z instead of a, since it's only needed for a check
p=r=>{for(k in Z)if(k.match(r))return k};P=r=>Z[p(r)];c.onclick=e=>{this.Z||(Z=new AudioContext,o=P(/eO/)(),d=P(/de/),Z=o,P(/ct/)(d),o.start());P(/fr/).value=56*1.06**(e.x/9|0)}

// @todo Instead of this.a can we somehow use T which they say is already defined, and can be overwritten?
// @todo Instead of checking inside c.onclick, we could check outside: c.onclick=this.a||e=>... Not sure how that helps :P

// New piano
c.onclick=e=>{this.a&&a.close();a=new AudioContext;o=a.createOscillator();o.connect(a.destination);o.start();o.frequency.value=56*1.06**(e.x/9|0)}
c.onclick=e=>{this.a&&a.close();a=new AudioContext;o=a.createOscillator();o.connect(a.destination);o.start();o.frequency.value=1.1**(e.x/9|0)}
c.onclick=e=>{this.a&&a.close();(o=(a=new AudioContext).createOscillator()).connect(a.destination);o.start();o.frequency.value=1.1**(e.x/9|0)}


