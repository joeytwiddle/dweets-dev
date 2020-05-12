// Every dweet ever?  Builds random strings and execute them

// An earlier version of this file was published here: https://gist.github.com/joeysino/873024af8e175c3de37b0c36cdc529a6#file-every_dweet_ever-js-L208

// See also:
// - magna's "Brute-force dweet" https://www.dwitter.net/d/10548
// - tomxor and anotherkitten's "60 monkeys per second" https://www.dwitter.net/d/12403
// - https://www.dwitter.net/h/fuzzing
//   "Fuzzing or fuzz testing is an automated software testing technique that involves providing invalid, unexpected, or random data as inputs to a computer program."

// There are < 3e277 possible dweets (excluding unicode chars)
// (128 - 32) ** 140

l=t%140,s=''
for(i=l;i-->0;)s+=String.fromCharCode(32+95*Math.random())
c.width|=0,x.font='200px s',x.fillText(s,5,150)

// There are only 7.6e276 possible dweets
// This dweet runs all of them
r=Math.random;l=140*r(),s=''
for(i=l;i-->0;)s+=String.fromCharCode(32+95*r())
c.width|=0,x.font='200px s',x.fillText(s,5,150)
//,eval(s)

// Let's try starting with some valid code, and modifying it
t||(s='r=()=>Math.random()*256,X=r(),Y=r(),x.fillStyle=R(r(),r(),r()),x.fillRect(X,Y,r(),r())')
t&&eval(s)

// We cannot modify string with s[9]='a'
t?eval(s),s[r()]=String.fromCharCode(s[r()]):s='r=()=>Math.random()*140|0,X=r(),Y=r(),x.fillStyle=R(r(),r(),r()),x.fillRect(X,Y,r(),r())'

t?(s=s.split(''),s[r()]=String.fromCharCode(r())),s=s.join('')):(s='r=()=>Math.random()*140|0,X=r(),Y=r(),x.fillStyle=R(r(),r(),r()),x.fillRect(X,Y,r(),r())');eval(s)
console.log(s)

c.width|=0;t?(x.font='200px s',x.fillText(s,5,150),s=s.split(''),s[r()]=String.fromCharCode(r()),s=s.join('')):(s='r=()=>Math.random()*140|0,X=r(),Y=r(),x.fillStyle=R(r(),r(),r());x.fillRect(X,Y,r(),r())')
//eval(s)

// Here we only replace the original program (o) with the new program (p) if the new program executes without an error
c.width|=0;t||(o='c.width|=0,r=()=>Math.random()*140|0,x.fillRect(r(),r(),r(),r())')
t&&(i=o.slice(0),i[r()]=String.fromCharCode(r()),p=i.join(''))
x.font='200px s',x.fillText(s,5,150)
eval(p);o=p

// @todo May not be able to mutate; should change a random number of chars

t||(o='c.width|=0,r=()=>Math.random()*140|0,x.fillRect(r(),r(),r(),r())'.split(''))
t&&(i=o.slice(),i[r()]=String.fromCharCode(r()),p=i.join(''))
x.font='50px s',x.fillText(p,5,150)
//eval(p);o=p

r=()=>Math.random()*140|0
t||(o='c.width|=0,x.fillRect(r(),r(),r(),r())'.split(''))
t&&(i=o.slice(),i[r()]=String.fromCharCode(r()),p=i.join(''))
x.font='50px s',x.fillText(p,5,150)
//eval(p);o=p

r=()=>Math.random()*140|0
t||(o='c.width|=0,x.fillRect(r(),r(),r(),r())'.split(''))
c.width|=0,x.font='50px s',x.fillText(o.join(''),5,950)
t&&(i=o.slice(),i[r()]=String.fromCharCode(r()),p=i.join(''),eval(p),o=i)

r=()=>Math.random()*140|0
t||(o='x.fillRect(r(),r(),r(),r())'.split(''))
c.width|=0,x.font='50px s',x.fillText(o.join(''),5,950)
t&&(i=o.slice(),i[r()]=String.fromCharCode(32+r()),p=i.join(''),eval(p),o=i)

// --- BEST SO FAR --- This did occasionally do stuff
// 149
r=()=>Math.random()*140|0
t||(o='x.fillRect(r(),r(),r(),r())'.split(''))
c.width|=0,x.font='50px s',x.fillText(o.join(''),5,950)
t&&(i=o.slice(),i[r()]=String.fromCharCode(32+r()),p=i.join(''),eval(p),o=i)

// 146
r=Math.random
t||(o='x.fillRect(9*r(),9*r(),9,9)'.split(''))
c.width|=0,x.font='50px s',x.fillText(o.join(''),5,950)
t&&(i=o.slice(),i[140*r()|0]=String.fromCharCode(32+95*r()),p=i.join(''),eval(p),o=i)

// The r()<.9 allows the dweet to change more than 1 char before attempting execution
// 156
r=Math.random
t||(o='x.fillRect(9*r(),9*r(),9,9)'.split(''))
c.width|=0,x.font='50px s',x.fillText(o.join(''),5,950)
t&&(i=o.slice(),i[140*r()|0]=String.fromCharCode(32+95*r()),p=i.join(''),r()<.9&&(eval(p),o=i))

// Re-arranged but not shorter
t?(i=o.slice(),i[140*r()|0]=String.fromCharCode(32+95*r())):(o=i='r=Math.random,x.fillRect(9*r(),9*r(),9,9)'.split(''))
c.width|=0,x.font='50px s',x.fillText(o.join(''),5,950)
!t||r()<.9?(p=i.join(''),eval(p),o=i):0

// --- BEST SO FAR --- 138 but never does anything interesting, of course
r=Math.random
t||(o="x.fillText(p,5,450)".split(''))
c.width|=0,x.font='50px s',x.fillText(o.join(''),5,950)
t&&(i=o.slice(),i[140*r()|0]=String.fromCharCode(32+95*r()),p=i.join(''),eval(p),o=i)

r=Math.random
t||(o="x.fillText(p,5,99)".split(''))
c.width=400,x.fillText(o.join(''),5,200)
t&&(i=o.slice(),i[140*r()|0]=String.fromCharCode(32+95*r()),p=i.join(''),eval(p),o=i)

// 154 Just draws one square; occasionally moves or resizes it before breaking lol
r=()=>Math.random()*140|0
t||(o='c.width=400,x.fillRect(99,99,99,99)'.split(''))
c.width=400,x.fillText(o.join(''),5,150)
t&&(i=o.slice(),i[r()]=String.fromCharCode(r()),p=i.join(''),eval(p),o=i)

// 171 Make the frame update also the initial program
// BUG: o is used on the first line but not initialised
// We cannot leave the eval until later, unless we move the r outside
// We could fix this by using a var that will initially be a string.  So far I only found: origin and code
// Also we could use p instead of o.join('')
eval(O="r=Math.random,c.width=400,x.fillText(o.join(''),5,90)")
t?(i=[...o],i[140*r()|0]=String.fromCharCode(32+95*r()),p=i.join(''),r()<.9&&(eval(p),o=i)):(o=O.split(''))

// 171 LOL pulling the 140* into the r() comes out exactly the same
eval(O="r=()=>Math.random()*140|0,c.width=400,x.fillText(o.join(''),5,90)")
t?(i=[...o],i[r()]=String.fromCharCode(r()),p=i.join(''),r()<99&&(eval(p),o=i)):(o=O.split(''))

// Use T as our program string variable
eval(O="r=()=>Math.random()*140|0,c.width=400,x.fillText(T,5,90)")
t?(i=[...o],i[r()]=String.fromCharCode(r()),T=i.join(''),r()<99&&(eval(T),o=i)):(o=O.split(''))

// Down to 143 but it using i[r()]=i[r()] does not offer enough!
eval(O="r=()=>Math.random()*140|0,c.width=400,x.fillText(T,5,9)")
t?(i=[...o],i[r()]=O[r()],T=i.join(''),r()<70&&(eval(T),o=i)):(o=O.split(''))

// 138 by splitting in a different place, so we never need to [...] or slice
eval(O="r=()=>Math.random()*140|0,c.width=400,x.fillText(T,5,9)")
t?(i=o.split(''),i[r()]=O[r()],T=i.join(''),r()<70&&(eval(T),o=T)):(o=O)

eval(O="r=()=>Math.random()*140|0,c.width=99,x.fillText(T,5,9)")
t?(i=o.split(''),i[r()]=`\0x${r()}`,T=i.join(''),r()<70&&(eval(T),o=T)):(o=O)

eval(O="r=()=>Math.random()*140|0,c.width=99,x.fillText(T,5,9)")
t?(i=o.split(''),i[r()]=(''+u)[r()],T=i.join(''),r()<70&&(eval(T),o=T)):(o=O)

// Avoid two o= and some ()s by doing a ternary assignment
// Use ||_ to break out, trusting that _ does not exist
eval(O="r=()=>Math.random()*140|0,c.width=99,x.fillText(T,5,9)")
o=t?(i=o.split(''),i[r()]=(''+u)[r()],T=i.join(''),r()<70||_,eval(T),T):O

// 151 Trying to get String.fromCharCode(r()) back in there
// A shorter alternative would be great
eval(O="r=()=>Math.random()*140|0,c.width=99,x.fillText(T,5,9)")
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),T=i.join(''),r()<9&&_,eval(T),T):O

// 138 If only t%140|0 was a random value lol :-P
eval(O="r=()=>t%140|0,c.width=99,x.fillText(T,5,9)")
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),T=i.join(''),r()<9?_:eval(T),T):O

// To save space I had to clobber something which was guaranteed to exist.  I chose C.
eval(O="r=()=>T(t)%140|0,c.width=99,x.fillText(C,5,9)")
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<9?_:eval(C),C):O

// c=String.fromCharCode(140*Math.random()|0)
// eval(`x="${'\\u00'+(140*Math.random()|0).toString(16)}"`)

// 152
eval(O="k=140,r=()=>Math.random()*k|0,c.width=k,x.fillText(C,5,9)")
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<9?_:eval(C),C):O

// 149
eval(O="r=()=>Math.random()*140|0,c.width=99,x.fillText(C,5,9)")
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<9?_:eval(C),C):O

// Tried to make a PRNG.  But we probably want true random anyway
eval(O="r=()=>t*j^j++,c.width=99,x.fillText(C,5,9)")
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<9?_:eval(C),C):(j=0,O)
// continued
eval(O="r=()=>((t^j++)|0)%140,c.width=99,x.fillText(C,5,9)")
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<9?_:eval(C),C):(j=0,O)

// This version runs for a bit, but stops printing itself as soon as it modifies itself.
c.width=99,r=()=>Math.random()*140|0
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<9?_:eval(C),C):"x.fillText(C,5,9)"

// Cute blinking dot until it disappears
r=()=>Math.random()*140|0
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<9?_:eval(C),C):"c.width=190,x.fillRect(4,4,4,4)"

// 140
// This one works.  The problem is that it quickly breaks the string that shows it working :P
c.width=99,r=()=>Math.random()*140|0
o=t?(i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<9?_:eval(C),C):"x.fillText(C,-t,9)"
// 138
o=t?(r=Math.random,i=o.split(''),i[r()*140|0]=String.fromCharCode(r()*128),C=i.join(''),r()<.1?_:eval(C),C):"c.width=99,x.fillText(C,1,9)"
o=t?(r=Math.random,i=o.split(''),i[r()*140|0]=String.fromCharCode(r()*128),r(C=i.join(''))<.1?_:eval(C),C):"c.width=99,x.fillText(C,1,9)"
o=t?(r=Math.random,i=o.split(''),i[r()*140|0]=String.fromCharCode(r()*128),r(C=i.join(''))<.1?_:eval(C),C):"c.width--,x.fillText(C,1,9)"
// 141
o=t?(r=Math.random,i=o.split(''),i[r()*140|0]=String.fromCharCode(r()*128),r(C=i.join(''))<.1?_:eval(O+C),C):O="c.width--,x.fillText(C,1,9);"
o=t?(r=Math.random,i=o.split(''),i[r()*140|0]=String.fromCharCode(r()*128),r(C=i.join(''))<.1?_:eval(O+C),C):O="x.fillText(C,1,c.width--/2);"

// 149
o=t?(r=()=>Math.random()*140|0,i=o.split(''),i[r()]=String.fromCharCode(r()),C=i.join(''),r()<1?_:eval(C),C):O="c.width=99,x.fillText(C,1,9)";eval(O)
// 148
o=t?(r=Math.random,i=o.split(''),i[r()*140|0]=String.fromCharCode(r()*140),C=i.join(''),r()<.1?_:eval(C),C):O="c.width=99,x.fillText(C,1,9)";eval(O)
// We don't need to eval.  Just end in ';' and add to C
o=t?(r=Math.random,i=o.split(''),i[r()*140|0]=String.fromCharCode(r()*128),r(C=i.join(''))<.1?_:eval(O+C),C):O="c.width=399,x.fillText(C,1,9);"

// --- RELEASE ONE OF THESE? ---
// Don't overwrite C, use d instead
// We can make r a direct reference to Math.random() but then we need to reduce the probability, or the dweet breaks too quickly
x.width=99;r=Math.random;d=t?(i=d.split(''),i[r()*140|0]=String.fromCharCode(r()*128),r(D=i.join(''))<.1||eval(D),D):"x.fillText(D,-t,9)"
// This one has pretty good outcomes, because the P(change) is quite low
r=Math.random;d=t?(i=d.split(''),i[r()*140|0]=String.fromCharCode(r(c.width=99)*128),r(D=i.join(''))<.001||eval(D),D):"x.fillText(D,-9*t,9)"
// So actually keeping r as its own function saves us 1 char!
r=()=>Math.random()*140|0;d=t?(i=d.split(''),i[r()]=String.fromCharCode(r(c.width=99)),r(D=i.join(''))<9||eval(D),D):"x.fillText(D,-9*t,9)"

// In b4: https://discordapp.com/channels/395956681793863690/395956681793863692?jump=398976357930893324
// "I'm working on a PhD in genetic programming so considering code generation using current dweets as seeds and entropy as fitness value. Not sure how successful it'll be, but should be fun to implement - it's just a side project. There's also analysis looking at most used primitives and such."

/*
### joeytwiddle - 01/06/2018
I was experimenting with a dweet that generates dweets. Here is what I got so far:

```
r=()=>Math.random()*140|0;d=t?(i=d.split(''),i[r()]=String.fromCharCode(r(c.width=99)),eval(r(D=i.join(''))<9?O:D),D):O="x.fillText(D,-t,9)"
```

`d` is the current generated dweet, and `D` is the potential new version. `d` starts with the original "fillText" seed string on the right (aka `O`).

On each frame it copies `d` into `D`, and sets a random character in the string.

Then it will usually eval `D` to see if it runs without error, and if it runs then it will set `d=D`. But occasionally (`r()<9`) it will eval `O` instead of `D`, which will allow 2 (or more) chars to change before doing the eval check on `D`. (And it also displays `D`'s code for us, so we can see the progress.) This means it prefers to stick with a working dweet, but will occasionally branch out and try something different.

Therefore, if left running for long enough, it should produce every possible (non-Unicode) dweet! (Although it might need restarting sometimes, if it breaks a global, e.g. by doing `x=3`.)

However, so far it has not produced anything even slightly interesting. That's why I am sharing it here, and not on the site. Feel fre to improve it if you like! :sweat_smile:

Actually I imagine a genetic approach as proposed by @AnnanFay#0634 would produce better results. I just wanted to post this before they solve the problem! :wink:

### sigveseb - 01/06/2018
I love it

### ౫౬౧ - 01/06/2018
very nice
*/

r=()=>Math.random()*140|0;d=t?(i=d.split(''),i[r()]=String.fromCharCode(r(c.width=99)),eval(r(D=i.join(''))<9?O:D),D):O="x.fillText(D,-t,9)"
r=()=>Math.random()*140|0;d=t?(i=d.split(''),i[r()]=String.fromCharCode(r()),eval(r(D=i.join(''))<9?O:D),D):O="x.fillText(D,0,9,c.width=99)"

// Prints and randomizes it more often than it evaluates it
r=()=>Math.random()*140|0;d=t?(i=d.split(''),i[r()]=String.fromCharCode(r()),eval(r(D=i.join(''))>9?O:D),D):O="x.fillText(D,0,9,c.width-=9)"
// Prints and randomizes more rarely
r=()=>Math.random()*140|0;d=t?(i=d.split(''),i[r()]=String.fromCharCode(r()),eval(r(D=i.join(''))<3?O:D),D):O="x.fillText(D,0,9,c.width=99)"
// Rename vars to D and E
r=()=>Math.random()*140|0;D=t?(i=D.split(''),i[r()]=String.fromCharCode(r()),eval(r(E=i.join(''))<3?O:E),E):O="x.fillText(E,0,9,c.width=99)"

//r=()=>Math.random()*140|0;D=t?(i=D.split(''),eval(`i[r()]="\\${r().toString(8)}"`+r(E=i.join(''))<3?O:E),E):O="x.fillText(E,0,9,c.width=99)"

// Golfing:
// - The t|| and t&& can be squished
// - The i=o.slice() can become i=[...o]

// A more genetic algorithm would cut+paste, rather than just clobbering a random character

/*
 * OK time for an alternative approach
 *
 * A working dweet is usually made up of useful bits and bobs.
 *
 * How about if we pick canvas functions at random from Object.keys(x.__proto__), and give them random arguments?
 *
 * Pick a key.  It might be a function or a property.  Pick randomly whether to call it or assign it.
 * (Oh shit, assigning a function will break it permanently!  OK nevermind, lets always try to call it.)
 * Now we need to build some random expressions to pass to it!
 */

// Remixing magna's https://www.dwitter.net/d/10548
// The try-catch is not strictly necessary, but helps to stop the console from filling up
s=[];for(p in x)s.push(p)
T.valueOf=_=>Math.random()*s.length
f=x[s[T|0]]
try{f.call&&f.apply(x,[T,T,T,T,T,T,T,T,T].slice(0,f.length))}catch(e){}
//
s=[];for(p in x)s.push(p)
T.valueOf=_=>Math.random()*s.length
f=x[s[T|0]]
try{f.apply(x,[T,T,T,T,T,T,T,T,T].slice(0,f.length))}catch(e){}
//
s=[];for(p in x)s.push(p)
T.valueOf=_=>Math.random()*s.length
try{x[s[T|0]].apply(x,[T,T,T,T,T,T,T,T,T].slice(0,T))}catch(e){}
// Golfed
s=[];for(p in x)s.push(p)
T.valueOf=_=>Math.random()*s.length
try{x[s[T|0]](...[T,T,T,T,T,T,T,T,T].slice(0,T))}catch(e){}
// Golfed, and deterministic
// --- GOOD --- Cool pattern, but clearly a pattern
s=[];for(p in x)s.push(p)
T.valueOf=_=>t++**t%s.length
x[s[T|0]](...[T,T,T,T,T,T,T,T,T].slice(0,T))
// Really minimised
s=[];for(p in x)s.push(p)
T.valueOf=_=>t++**t%s.length
x[s[T|0]](T,T,T,T,T,T,T,T,T)
