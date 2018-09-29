// Using magna's new template: https://www.dwitter.net/d/3232
// Random circles
{
x.globalAlpha=.02;x.beginPath();x.arc(r(),r()/2,r()/9,0,7);x.fill()};{r=()=>Math.random()*2e3
// Nice mottled abstract
x.globalAlpha=r()/79e3;x.beginPath();x.arc(r(),r()/2,r()/9,0,7);x.fill()};{r=()=>Math.random()*2e3
x.fillStyle=`hsla(${t},99%,50%,.1`;x.beginPath();x.arc(r(),r()/2,r()/9,0,7);x.fill()};{r=()=>Math.random()*2e3
// Nebula
x.fillStyle=`hsla(${t*5},99%,50%,.02`;x.beginPath();x.arc(r(),r()/2,r()/9,0,7);x.fill()};{r=()=>Math.random()*2e3
x.fillStyle=`hsla(${t*5+r()/15},99%,50%,.02`;x.beginPath();x.arc(r(),r()/2,r()/9,0,7);x.fill()};{r=()=>Math.random()*2e3
// Beautiful but faint, and turns grey after a while
x.fillStyle=`hsla(${t*5+r()/9},99%,70%,.02`;x.beginPath();x.arc(r()-99,r()/2-60,r()/15,0,7);x.fill()};{r=()=>Math.random()*2400
// Stronger; doesn't converge to grey but does look a bit garish
x.fillStyle=`hsla(${t*5+r()/9},99%,60%,.05`;x.beginPath();x.arc(r()-99,r()/2-60,r()/15,0,7);x.fill()};{r=()=>Math.random()*2400
// Finer.  Looks a bit too messy in the end, IMHO
x.fillStyle=`hsla(${t*5+r()/9},99%,50%,.05`;x.beginPath();x.arc(r()-99,r()/2-60,r()/30,0,7);x.fill()};{r=()=>Math.random()*2400
// More small than large; --- GOOD TO RELEASE ---
x.fillStyle=`hsla(${t*5+r()/9},99%,60%,.05`;x.beginPath();x.arc(r()-99,r()/2-60,r()**1.5/999,0,7);x.fill()};{r=()=>Math.random()*2400
// Just an alternative.  Quite delicate and rich but a little faint
x.fillStyle=`hsla(${t*5+r()/15},99%,60%,.03`;x.beginPath();x.arc(r()-99,r()/2-60,r()**1.5/999,0,7);x.fill()};{r=()=>Math.random()*2400

// Experiment **2
x.fillStyle=`hsla(${t*5+r()/9},99%,50%,.05`;x.beginPath();x.arc(r()-99,r()/2-60,r()**2/3e4,0,7);x.fill()};{r=()=>Math.random()*2400
// Experiment **3
x.fillStyle=`hsla(${t*5+r()/9},99%,50%,.05`;x.beginPath();x.arc(r()-99,r()/2-60,r()**3/1e8,0,7);x.fill()};{r=()=>Math.random()*2400
// Experiment **2
x.fillStyle=`hsla(${5*t+r()/9},99%,50%,.05`;x.beginPath();x.arc(r()-99,r()/2-60,r()**2/6e4,0,7);x.fill()};{r=()=>Math.random()*2400
// Slow down the colour cycling, slightly lighter
x.fillStyle=`hsla(${2*t+r()/9},99%,55%,.05`;x.beginPath();x.arc(r()-99,r()/2-60,r()**2/4e4,0,7);x.fill()};{r=()=>Math.random()*2400
// Too faint.  Previous was better.
x.fillStyle=`hsla(${2*t+r()/9},99%,60%,.04`;x.beginPath();x.arc(r()-99,r()/2-60,r()**2/4e4,0,7);x.fill()};{r=()=>Math.random()*2400
// I quite like this one
x.fillStyle=`hsla(${5*t+r()/9},99%,55%,.04`;x.beginPath();x.arc(r()-99,r()/2-99,r()**3/5e7,0,7);x.fill()};{r=()=>Math.random()*2400

// --- MEH --- Some dark + light circles, but use T() so not too many
x.fillStyle=`hsla(${t*5+r()/9},99%,${50+T(r())*9}%,.05`;x.beginPath();x.arc(r()-99,r()/2-60,r()**1.5/999,0,7);x.fill()};{r=()=>Math.random()*2400
// Golfed
// This was an attempt to make a nebular with dark + like areas; but it rather makes the whole image look a bit dirty :P
x.arc(r(x.beginPath(x.fillStyle=`hsla(${t*5+r()/9},99%,${50+T(r())}%,.05`))-99,r()/2-60,r()**1.5/999,0,7);x.fill()};{r=()=>Math.random()*3e3
// Added a loop, reduced opacity and removed color-time
r=()=>Math.random()*2520;for(i=99;i--;)x.arc(r(x.fillStyle=`hsla(${r()},99%,${50+T(r())*9}%,.01`)-99,r()/2-60,300,0,7),,x.beginPath(),x.fill()

// Reducing width doesn't make it much faster
t||(c.width=200)
x.fillStyle=`hsla(${2*t+r()/15},99%,55%,.02`;x.beginPath();x.arc(r()-99,r()/2-99,r()**2/2e4,0,7);x.fill()};{r=()=>Math.random()*600
}

// But drawing more than one per frame speeds it up hugely!
r=()=>Math.random()*2400;t*=99;for(i=99;i--;){x.fillStyle=`hsla(${t+r()/15},99%,55%,.01`;x.beginPath();x.arc(r()-99,r()/2-99,r()**2/4e4,0,7);x.fill()}
r=()=>Math.random()*2520;for(i=999;i--;)x.fillStyle=`hsla(${r()},99%,50%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**3/5e7,0,7),x.fill()
// Nice big splodges and also fine details
r=()=>Math.random()*2520;for(i=999;i--;)x.fillStyle=`hsla(${r()},99%,50%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**4/1e11,0,7),x.fill()
// Extending the same idea
r=()=>Math.random()*2520;for(i=999;i--;)x.fillStyle=`hsla(${r()},99%,50%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**6/5e17,0,7),x.fill()
// --- RELEASED --- d/3239
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,50%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**3/4e7,0,7),x.fill()
// Although maybe the exponents aren't doing much.  Here is one without:
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,50%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()/5,0,7),x.fill()
// In fact you can just select fixed width circles (e.g. 250) and still get a pretty similar effect, including details from the overlaps
// This one does that, and cycles through the colors as well
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${50*t+r()/3},99%,50%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,200,0,7),x.fill()
// Make the colour trend from right to left
r=()=>Math.random()*2520;for(i=99;i--;)X=r(),x.fillStyle=`hsla(${50*t+r()/8+X/8},99%,50%,.01`,x.beginPath(),x.arc(X-99,r()/2-99,200,0,7),x.fill()

// Add a slow zoom (unfortunately with artefacts)
x.drawImage(c,-1,-.5,1922,1081)
// Oh ... drawImage fourth and fifth arguments are optional.

// Scroll left at the same time as colour trending left
r=()=>Math.random()*2520;for(i=99;i--;)X=r(),x.fillStyle=`hsla(${99*t+r()/8+X/8},99%,50%,.01`,x.beginPath(),x.arc(X-99,r()/2-99,200,0,7),x.fill();x.drawImage(c,-8,0,1920,1080)
// Scroll left at the same time as colour trending right
r=()=>Math.random()*2520;for(i=99;i--;)X=r(),x.fillStyle=`hsla(${99*t+r()/8-X/8},99%,50%,.01`,x.beginPath(),x.arc(X-99,r()/2-99,200,0,7),x.fill();x.drawImage(c,-4,0,1920,1080)

// Predictable positioning of the brush
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,50%,.01`,x.beginPath(),x.arc(2520*(1+S(t*2.1))/2-99,2520*(1+S(t*7.3))/2/2-99,r()**3/4e7,0,7),x.fill()
// Predictable positioning and colour (only size is random)
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${t*397+3*i},99%,50%,.01`,x.beginPath(),x.arc(2520*(1+S(t*2.1))/2-99,2520*(1+S(t*7.3))/2/2-99,r()**3/4e7,0,7),x.fill()

// Trying to make a Firefox friendly version
r=()=>Math.random()*2520;for(i=10;i--;)x.fillStyle=`hsla(${50*t+r()/12},99%,50%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**6/5e17,0,7),x.fill()
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,55%,.03`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**9/3e28,0,7),x.fill()
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,50%,.03`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**5/5e14,0,7),x.fill()
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,50%,.03`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**3/8e7,0,7),x.fill()
// It seems to slow down when we use a bigger exponent (higher fidelity numbers?) but I think the result is better
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,50%,.03`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**9/2e28,0,7),x.fill()
// Curiously, lower opacity suffers less in Firefox, if we reduce the luminosity
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,40%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**9/2e28,0,7),x.fill()
// Or with the original at much lower luminosity
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,33%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**3/4e7,0,7),x.fill()
// Or higher
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,66%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()**3/4e7,0,7),x.fill()

// Trying for cross-browser
// Start with large circles, end with small ones
r=()=>Math.random()*2520;for(i=9;i--;)x.fillStyle=`hsla(${r()},99%,50%,.05`,x.beginPath(),x.arc(r()-99,r()/2-99,400/(1+2*t),0,7),x.fill()
r=()=>Math.random()*2520;for(i=9;i--;)x.fillStyle=`hsla(${r()},99%,50%,.1`,x.beginPath(),x.arc(r()-99,r()/2-99,400/(1+5*t),0,7),x.fill()
// Nice strong colours, but the dots are very obvious
r=()=>Math.random()*2520;for(i=9;i--;)x.fillStyle=`hsla(${r()},99%,50%,.1`,x.beginPath(),x.arc(r()-99,r()/2-99,999/(1+25*t),0,7),x.fill()
// --- CONSIDER RELEASING --- This has nice muted colours
r=()=>Math.random()*2520;for(i=9;i--;)x.fillStyle=`hsla(${r()},99%,50%,.07`,x.beginPath(),x.arc(r()-99,r()/2-99,800/(1+9*t),0,7),x.fill()
r=()=>Math.random()*2520;for(i=9;i--;)x.fillStyle=`hsla(${r()},99%,50%,.08`,x.beginPath(),x.arc(r()-99,r()/2-99,800/(1+12*t),0,7),x.fill()
// Without the loop
r=()=>Math.random()*2520;x.fillStyle=`hsla(${r()},99%,50%,${.5/t}`,x.beginPath(),x.arc(r()-99,r()/2-99,999/(1+t),0,7),x.fill()
r=()=>Math.random()*2520;x.fillStyle=`hsla(${r()},99%,50%,${.1/t**.4}`,x.beginPath(),x.arc(r()-99,r()/2-99,999/(1+t),0,7),x.fill()
r=()=>Math.random()*2520;x.fillStyle=`hsla(${r()},99%,50%,${.5/t**.5}`,x.beginPath(),x.arc(r()-99,r()/2-99,999/(1+t),0,7),x.fill()
// Funny struggling failure to grey on both Chrome and Firefox
t*=99;for(i=99;i--;)r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,55%,${1/t**.7}`,x.beginPath(),x.arc(r()-99,r()/2-99,999/t**.4,0,7),x.fill()
// Put this on the front to get the same result, but sped up
t*=99;for(i=99;i--;)
// We are using 55% for this technique, because it comes out a little bit dark on Chrome (but actually fine on Firefox)
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,55%,${.5/t**.5}`,x.beginPath(),x.arc(r()-99,r()/2-99,999/(1+t*.5),0,7),x.fill()
// --- CONSIDER RELEASING --- The following two ain't bad (I have tested both, they work in Chrome and Firefox)
// Grainy, circles are clearly visible
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,55%,${1/t**.6}`,x.beginPath(),x.arc(r()-99,r()/2-99,999/(1+t*.7),0,7),x.fill()
// Fainter, misty
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,55%,${.5/t**.5}`,x.beginPath(),x.arc(r()-99,r()/2-99,999/(1+t*.3),0,7),x.fill()
// Vivid, detailed, compromise
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,55%,${.5/t**.3}`,x.beginPath(),x.arc(r()-99,r()/2-99,999/(1+t*.5),0,7),x.fill()

// Plots some ugly black circles at the start
for(i=50;i--;r=()=>Math.random()*2520-99)x.fillStyle=`hsla(${r()},99%,55%,${.1/t}`,x.beginPath(),x.arc(r(),r()/2,99/(1+t),0,7),x.fill()
for(i=20;i--;r=()=>Math.random()*2520-99)x.fillStyle=`hsla(${r()},99%,55%,${.5/t**.5}`,x.beginPath(),x.arc(r(),r()/2,99/t,0,7),x.fill()
for(i=20;i--;r=()=>Math.random()*2520-99)x.fillStyle=`hsla(${r()},99%,55%,${.2/t}`,x.beginPath(),x.arc(r(),r()/2,99/t**.6,0,7),x.fill()

// --- CONSIDER RELEASING --- With squares
// The first one avoids the ugly black squares by using (t+1)
// The second one produces ugly black squares at the start, but we don't notice them because so many are plotted later
// The third also produces ugly black squares, which sometimes stick around.  But aside from that, it is my --- FAVOURITE ---
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,50%,${.9/(t+1)}`,x.beginPath(),s=999/(1+t),x.fillRect(r()-99-s/2,r()/2-99-s/2,s,s)
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,50%,${.9/t**.4}`,x.beginPath(),s=999/(1+t**.7),x.fillRect(r()-99-s/2,r()/2-99-s/2,s,s)
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,50%,${.9/t**.6}`,x.beginPath(),s=999/(1+t**.8),x.fillRect(r()-99-s/2,r()/2-99-s/2,s,s)
// Nice and detailed, but a bit grainy
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,50%,.2`,x.beginPath(),s=999/(1+t**.8),x.fillRect(r()-99-s/2,r()/2-99-s/2,s,s)
// --- SECOND FAVOURITE --- Noisy
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,50%,${.5/t**.1}`,x.beginPath(),s=999/(1+t**.7),x.fillRect(r()-99-s/2,r()/2-99-s/2,s,s)

// With rotated squares (many of them plotted off-screen, top-left busier than bottom-right)
r=()=>Math.random()*2520,x.fillStyle=`hsla(${r()},99%,50%,${.99/t}`,x.beginPath(),x.rotate(r()),s=999/(1+t/9),x.fillRect(r()-99-s/2,r()/2-99-s/2,s,s)

// mmastrac did a thing with crosses: https://www.dwitter.net/d/3284
// I tried to do the same trick using his code, but it didn't quite work out:
x.font='100px a',r=x=>Math.random()*2e3-100;x.fillStyle=`hsla(${99*t},50%,50%,${.5/t})`;for(i=200;i--;){x.fillText("✕",r(),r());}
r=x=>Math.random()*2e3-100;for(i=500;i--;){x.font=(Math.random()*400|0)+'px a',x.fillStyle=`hsla(${Math.random()*360},99%,50%,.01)`,x.fillText("✕",r(),r());}
r=x=>Math.random()*2e3-100;for(i=3900;i--;){x.font='150px a',x.fillStyle=`hsla(${Math.random()*360},99%,50%,.01)`,x.fillText("O",r(),r());}
r=x=>Math.random()*2e3-100;for(i=3900;i--;){x.font='300px a',x.fillStyle=`hsla(${Math.random()*360},99%,50%,.01)`,x.fillText(t|0,r(),r());}
// Wih unicodes
r=x=>Math.random()*2e3-100;for(i=500;i--;){x.font='300px sa',x.fillStyle=`hsla(${Math.random()*360},99%,50%,.01)`,x.fillText(String.fromCharCode((65+t*99)|0),r(),r())};
// As originally intended, fade alpha with t
r=x=>Math.random()*2e3-100;for(i=3900;i--;){x.font='300px a',x.fillStyle=`hsla(${Math.random()*360},99%,50%,${.01+1/t})`,x.fillText(t|0,r(),r());}
r=x=>Math.random()*2e3-100;for(i=3900;i--;){x.font='300px a',x.fillStyle=`hsla(${Math.random()*360},99%,50%,${.01+1/t})`,x.fillText('x',r(),r());}
// --- CONSIDER RELEASING THIS REMIX --- (but test it on Firefox first) Accelerating madness
r=x=>Math.random()*2e3-100;for(i=300;i--;){x.font='300px a',x.fillStyle=`hsla(${t**3},99%,50%,.05)`,x.fillText('x',r(),r());}
// --- CONSIDER RELEASING THIS REMIX --- Furious painter
r=x=>Math.random()*2e3-100;for(i=300;i--;){x.font='300px a',x.fillStyle=`hsla(${t**3},99%,50%,.1)`,x.fillText(t|0,2e3*S(t*i),1e3*C(i/t));}
// Pointless greyscale version
r=x=>Math.random()*2e3-100;for(i=300;i--;){x.font='300px a',x.fillStyle=`hsla(0,0%,${t**3%100}%,.1)`,x.fillText(t|0,2e3*S(t*i),1e3*C(i/t));}

t*=99;
for(i=99;i--;){
r=m=>Math.random()*m;
x.fillStyle = R(r(256),r(256),r(256),r(.05+1/t))
x.fillRect(r(2120)-99,r(1280)-99,r(500),r(500));
}
t*=99;
for(i=99;i--;){
r=m=>Math.random()*m;
x.fillStyle = R(r(256),r(256),r(256),r(.05+1/t**.3))
x.fillRect(r(2120)-99,r(1280)-99,r(500),r(500));
}
t*=99;
for(i=99;i--;){
r=m=>Math.random()*m;
x.fillStyle = R(r(256),r(256),r(256),r(t**-.4))
x.fillRect(r(2120)-99,r(1280)-99,r(500/t**.3),r(500/t**.3));
}

// Remixing: https://www.dwitter.net/d/2734
w=1680;r=Math.random;for(i=99;i--;)x.fillStyle=`hsla(${4*i+t*25},99%,66%,.01`,x.fillRect(r()*w,r()*w/2,k=r()*300,k)

// Remixing: https://www.dwitter.net/d/5836
for(t?i=Z:Z=c.width=255;i--;x.fill(x.arc(129-i*C(t+i),69+55*S(t+i/(S(t)+6)),i/9,0,9)))x.fillStyle=`hsla(${i+t*i},99%,65%,.01)`,x.beginPath()

// Remixing d/3239 cross-browser cross-platform and working
// Do we really need `r()**3`?  Let's just use `r()/5`.
// Tested on Chrome on Linux.  62% greys out.  65% almost whites out.
// Consider 63% instead of 64%
// --- TO RELEASE ---
r=()=>Math.random()*2520;for(i=99;i--;)x.fillStyle=`hsla(${r()},99%,64%,.01`,x.beginPath(),x.arc(r()-99,r()/2-99,r()/5,0,7),x.fill()
