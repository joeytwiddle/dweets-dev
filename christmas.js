// 2017
// https://www.dwitter.net/d/3634
for(r=Math.random,i=w=700;i--;x.fillRect(i%9?960+a/2*C(p=w*r()):960+99*C(p),i%9?80+a+a/6*S(p):790+200*r()+30*S(p),k=2/(5+t),k))a=w*r()**.6
// A remix that uses u() for looping https://www.dwitter.net/d/7638
r=Math.random,w=700,a=w*r()**.6,p=w*r(),x.fillRect(p&7?960+a/2*C(p):960+99*C(p),p&7?980-a-a/6*S(p):90+200*r()+30*S(p),.2,.2),t<9&&u(t+.002)

// 2018
for(R=Math.random,i=w=700;i--;x.fillRect(960+r*C(a),80+y+r/8*S(a),s=.3-.2*T,s))y=896*(R()**.5),T=y>768,r=T?9:(y|127)*(y/9+y%128)/300,a=w*R()
// --- RELEASED --- at https://www.dwitter.net/d/11549
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),s=T?.01:.1,s))y=896*(R()**.5),T=y>768,r=T?9:(y|127)*(y/9+y%128)/300,a=99*R()
// Fairer distribution (except for the trunk)
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),s=T?.004:.1,s))l=7*R()**.5|0,y=128*(l+R()**.5),T=l>5,r=T?9:128*++l*(y/9+y%128)/300,a=99*R()
// Not so wide
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),s=T?.01:.1,s))y=896*(R()**.5),T=y>768,r=T?9:(y|127)*(y/4+y%128)/700,a=99*R()
// "Real shape" (branches curve upwards, smaller near bottom) (/5,/7 leaves holes)
for(R=Math.random,i=5e3;i--;x.fillRect(960+r*C(a),80+y+r/5*S(a),s=T?.004:.02,s))y=896*(R()**.5),T=y>768,r=T?9:(y|127)*(y*S(y/300)-2*y%128)/1200,a=99*R()
for(R=Math.random,i=5e3;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),s=T?.09:.1,s))y=896*(R()**.4),T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1200,a=99*R()

// --- RELEASED 2019 --- at https://www.dwitter.net/d/16968
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.2,.2))y=896*R(),T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1313,a=9*R()
// I didn't have space for proper point distribution, but using `r` for pixel size almost does the job
// Disadvantage: It's a little bit ugly (clumpy) and it doesn't properly render the fairy
// We can also use i*R() instead of 9*R() to avoid the ugly edge appearing on the left
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),r/800,.2))y=896*R(),T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1313,a=i*R()
// Nice but over
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.1+r/800,.2))y=896*R(),T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1313,a=i*R()

// Alternate (taller but slightly better distribution, except the trunk)
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.2,.2))y=896*R()**.5,T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/2e3,a=i*R()

// Golf away the Math.random.  This cuts down the size, but we get some artefacts
for(i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.2,.2))y=i*1.3,T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1313,a=9*C(i*t*++t)
for(i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),r/600,.2))y=i*1.3,T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1515,a=99*C(t*++t)
for(i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),r/600,.2))y=i*t%896,T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1515,a=99*C(t*++t)
// Remove y
for(i=896;i--;x.fillRect(960+r*C(a),80+i+r/9*S(a),r/600,.2))i,T=i>768,r=T?30:(i|127)*(i*S(i/300)-2*i%128)/1515,a=99*C(t*++t)
// Fixes
for(i=896;i--;x.fillRect(960+r*C(a),80+i+r/9*S(a),Math.max(r/600,.1),.2))i,T=i>768,r=T?30:(i|127)*(i*S(i/300)-2*i%128)/1515,a=99*Math.random()

// On Windows Firefox I could use .04 but on Linux Firefox I must use .09 for the angel to fully render
// Sadly this means the thinner elements (angel and trunk) get darker again
// Better angel, fairer distribution, golfed but slight ringing
for(y=896;y--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.05+r/700,.2))r=y>767?30:(y|127)*(y*S(y/300-.1)-2*y%128)/1313,a=99*Math.random()
// Less ringing
for(k=i=896;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.05+r/700,.2))y=i*t%k,r=y>767?30:(y|127)*(y*S(y/300-.1)-2*y%128)/1313,a=99*Math.random()
// --- GOOD --- golfed, no more Math.random()
for(k=i=896;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.09+r/700,.2))y=t*++t%k,r=y>767?30:(y|127)*(y*S(y/300-.1)-2*y%128)/1313,a=i*t
// Shrink pixels over time, so image never gets too dark
s=2/(9+t);for(k=i=896;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.09+r/700,s))y=t*++t%k,r=y>767?30:(y|127)*(y*S(y/300-.1)-2*y%128)/1313,a=i*t
// --- OK --- Slower shrink, smoother final result? (Actually gets quite dark, use 4/(20+t) instead)
s=8/(40+t);for(k=i=896;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),.09+r/700,s))y=t*++t%k,r=y>767?30:(y|127)*(y*S(y/300-.1)-2*y%128)/1313,a=i*t
// Add 58 to y, so the angel gets a halo (but the tree ends up too high)
s=4/(20+t);for(k=i=841;i--;x.fillRect(960+r*C(a),y+r/9*S(a),.09+r/700,s))y=t*++t%k+58,r=y>767?30:(y|127)*(y*S(y/300-.1)-2*y%128)/1313,a=i*t
// I feel there is still a little ringing, but not too bad

// Can we use any of the golfing above whilst keeping the earlier distribution methods ** and T?  Yes!
// Arguably the grain is now too evenly spaced!
// Although these two don't have the angel fix: y/300-.1
for(i=700;i--;x.fillRect(960+r*C(a=++t),80+y+r/9*S(a),T?.1:.4,.1))y=896*Math.random()**.4,T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1313
for(i=700;i--;x.fillRect(960+r*C(a=++t),80+y+r/9*S(a),T?.1:.4,.1))y=896*Math.random()**.4,T=y>768,r=T?30:(y|127)*(y*S(y/300)-2*y%128)/1313
// --- GOOD --- EXCEPT: after a long run, the trunk goes ugly uniform grey (Firefox Linux)
// Replacing the Math.random() with a generator.  Weird that the i* is needed- I felt it shouldn't be!  Are we relying on noise from floating point limitations?
for(i=700;i--;x.fillRect(960+r*C(a=++t),80+y+r/9*S(a),T?.1:.4,.1))y=(i*t*++t%1)**.4*896,T=y>768,r=T?30:(y|127)*(y*S(y/300-.1)-2*y%128)/1313

// TODO: Inlining a= can be done for all the above too

// 2022 Twinkling tree
c.style.filter=`invert(1)`
c.width=1920
for(i=99;i--;)
Y=70*i**.5,W=9+7*S(4*t*C(i**5)),
x.fillRect(960+Y*S(i-t/11)/2-W/2,170+Y-W/2,W,W)
// Only show the front
c.style.filter=`invert(1)`,c.width=1920
for(i=99;i--;)Y=70*i**.5,W=9+7*S(4*t*C(i**5)),C(a=i-t/3)>0&&x.fillRect(960+Y*S(a)/2-W/2,170+Y-W/2,W,W)
// Only show the front (soft edges)
c.style.filter=`invert(1)`,c.width=1920
for(i=99;i--;)Y=70*i**.5,W=(5+4*S(4*t*C(i**5)))*(1+C(a=i-t/3)),x.fillRect(960+Y*S(a)/2-W/2,170+Y-W/2,W,W)
// Shorter
x.fillRect(0,0,1920,1080)
for(i=99;i--;)Y=70*i**.5,W=(5+4*S(4*t*C(i**5)))*(1+C(a=i-t/3)),x.clearRect(960+Y*S(a)/2-W/2,170+Y-W/2,W,W)
// With a little bit of 3D
// === PUBLISHED === https://www.dwitter.net/d/26619
x.fillRect(0,0,1920,1080)
for(i=99;i--;x.clearRect(960+Y*S(a)/2-W/2,140+Y+Y*C(a)/9-W/2,W,W))Y=70*i**.5,W=(5+4*S(4*t*C(i**5)))*(1+C(a=i+t/3))
// Long: Twinkling red and white
c.width|=0;x.fillRect(0,0,1920,1080)
for(i=200;i--;x.fillRect(960+Y*S(a)/2-W/2,140+Y+Y*C(a)/9-W/2,W,W))Y=50*i**.5,W=(5+4*S(4*t*C(i**5)))*(1+C(a=i+t/3)),x.fillStyle=i&2?'#ddd':'#f22'
// Does it look better when we make the pulsation speed range between 2 and 4 (instead of -4 to 4)?  I think it does.
c.width|=0;x.fillRect(0,0,1920,1080)
for(i=200;i--;x.fillRect(960+Y*S(a)/2-W/2,140+Y+Y*C(a)/9-W/2,W,W))Y=50*i**.5,W=(5+4*S(t*(3+C(i**5))))*(1+C(a=i+t/3)),x.fillStyle=i&2?'#ddd':'#f22'

// 2023 Twinkling tree
// Make twinkling dependent on angle, not time
x.fillRect(0,0,1920,1080)
for(i=500;i--;x.clearRect(960+Y*S(a)/2-W/2,140+Y+Y*C(a)/9-W/2,W,W))Y=32*i**.5,a=i+2*S(t),W=(5+4*S(9*a*C(i**5)))*(1+C(a))
// More performant, but longer
c.width|=c.style.filter='invert('
for(i=500;i--;x.fillRect(960+Y*S(a)/2-W/2,140+Y+Y*C(a)/9-W/2,W,W))Y=32*i**.5,a=i+2*S(t),W=(5+4*S(6*a*C(i**5)))*(1+C(a))
// Smaller alternative
x.fillRect(0,0,1920,1080)
for(i=200;i--;x.clearRect(960+Y*S(a)/2-W/2,140+Y+Y*C(a)/9-W/2,W,W))Y=50*i**.5,a=i+2*S(t),W=(5+4*S(5*a+i**5))*(1+C(a))
