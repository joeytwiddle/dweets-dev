// Blinkenlights / macOS's Arabesque screensaver
x.fillStyle='#0001';x.fillRect(0,0,2e3,1080)
r=()=>(Math.random()*20|0)*99
x.fillStyle=`hsla(${r()},99%,50%,.5)`
x.beginPath();x.arc(r(),r(),40,0,7);x.fill()
// Begin golfing
x.fillStyle='#0001';x.fillRect(0,0,2e3,1080)
r=()=>Math.random()*16<<7
x.fillStyle=`hsla(${r()},99%,50%,.5)`
x.beginPath();x.arc(r(),r(),40,0,7);x.fill()
// Do fade-to-black with an arc as well
R=()=>Math.random()*16<<7
d=(r,l,o)=>x.beginPath(x.fillStyle=`hsla(${R()},99%,${l}%,${o})`)|x.arc(R(),R(),r,0,7)|x.fill()
d(3e3,0,.1)
d(40,50,.5)
// Same in binary
R=()=>Math.random()*16<<7
d=(i)=>x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*i}%,${.1+.4*i})`)|x.arc(R(),R(),40+3e3*!i,0,7)|x.fill()
d(0)
d(1)
// With a loop instead of a function
R=()=>Math.random()*16<<7
for(i=2;i--;)x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*i}%,${.1+.5*i})`)|x.arc(R(),R(),40+3e3*!i,0,7)|x.fill()
// Fade-to-black first, then a dot
R=()=>Math.random()*16<<7
for(i=2;i--;x.fill())x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*!i}%,${.6-.5*i})`)|x.arc(R(),R(),40+3e3*i,0,7)
// More dots (141)
R=()=>Math.random()*16<<7
for(i=9;i--;)x.beginPath(x.fillStyle=`hsla(${R()},99%,${i&&50}%,${i?.6:.1})`)|x.arc(R(),R(),40+3e3*!i,0,7)|x.fill()
// Go back; slower fade
// BUG: some dots never fully fade, whilst others do
R=()=>Math.random()*16<<7
for(i=2;i--;x.fill())x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*!i}%,${i?.03:.5})`)|x.arc(R(),R(),i?3e3:40,0,7)
// Using t trick instead of Math.random (nice to see some occasional repetition/patterns)
// BUG: some dots never fully fade, whilst others do
// Another fun thing with the t trick is e.g. 33* gives a double-pulsing yellow dot, 55* gives a slower double-pulsing orange dot
// === RELEASED === https://www.dwitter.net/d/11857
R=()=>(97*t++*t%1)*16<<7
for(i=2;i--;x.fill())x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*!i}%,${i?.03:.5})`)|x.arc(R(),R(),i?3e3:40,0,7)
// Smaller dots, faster fade
// Nah, the previous one is nicer
R=()=>(97*t++*t%1)*16<<7
for(i=2;i--;x.fill())x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*!i}%,${i?.04:.6})`)|x.arc(R(),R(),i?3e3:35,0,7)
// Smaller dots, slower fade
R=()=>(97*t++*t%1)*16<<7
for(i=2;i--;x.fill())x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*!i}%,${i?.03:1})`)|x.arc(R(),R(),i?3e3:25,0,7)
// Smaller dots, slower fade (my favourite right now)
R=()=>(97*t++*t%1)*16<<7
for(i=2;i--;x.fill())x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*!i}%,${i?.02:1})`)|x.arc(R(),R(),i?3e3:20,0,7)
// We can get fading to work properly by only doing it occasionally
// Although a slight flicker can be perceived as a result
R=()=>(97*t++*t%1)*16<<7
for(i=2;i--;x.fill())k=t%.1<.01,x.beginPath(x.fillStyle=`hsla(${R()},99%,${50*!k}%,${k?.1:.5})`)|x.arc(R(),R(),k?3e3:40,0,7)
