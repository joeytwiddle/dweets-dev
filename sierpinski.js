# Very loosely based on: https://www.dwitter.net/d/531
t||(X=Y=H=0,M=960,W=540,B=1080)
for(i=0;i<120;i++){
c=3*Math.random()|0
P=[[M-W,B],[M+W,B],[M,0]][c]
X=X+P[0]>>1,Y=Y+P[1]>>1,H=(H+120*c)/2
x.fillStyle=`hsl(${H},50%,50%)`
x.fillRect(X,Y,2,2)
}

// Golfed a bit
t||(X=Y=H=0,M=960,W=540,B=W*2)
for(i=0;i<120;i++){
c=3*Math.random()|0
x.fillStyle=`hsl(${H=(H+120*c)/2},50%,50%)`
x.fillRect(X=X+M-W+c*W>>1,Y=Y+(c&1)*B>>1,2,2)
}

// Golfed a bit more
t||(X=Y=H=0)
for(i=99;i--;){
c=3*Math.random()|0
x.fillStyle=`hsl(${H=H+120*c>>1},50%,50%)`
x.fillRect(X=X+460+c*540>>1,Y=Y+999*(c&1)>>1,2,2)
}

// Golfed to 139
t?0:X=Y=H=0;for(i=9;i--;)c=3*Math.random()|0,x.fillStyle=`hsl(${H=H+120*c>>1},50%,50%)`,x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,2,2)
// Golfed to 136
// BUG! H not defined
for(i=9;i--;t?x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,2,2):X=Y=H=0)c=3*Math.random()|0,x.fillStyle=`hsl(${H=H+120*c>>1},50%,50%)`
// Add color cycling
for(i=9;i--;t?x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,2,2):X=Y=H=0)c=3*Math.random()|0,x.fillStyle=`hsl(${H=H+2*t+120*c>>1},50%,50%)`
// Also color cycling
for(i=999;i--;t?x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,2,2):X=Y=H=0)c=3*Math.random()|0,x.fillStyle=`hsl(${H=H+99*(c+t)>>1},50%,50%)`
// Pseudorandom number generator
// BUG! H not defined
for(i=999;i--;t?x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,4,4):X=Y=H=0)c=(i*t^i|0)%3,x.fillStyle=`hsl(${H=H+199*(c+t)>>1},50%,50%)`
// FIX:
for(i=999;i--;x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,4,4))c=(i*t^i|0)%3,t?x.fillStyle=`hsl(${H=H+199*(c+t)>>1},50%,50%)`:X=Y=H=0
// But because H is just averaging out c, we actually get a simple color progression from left to right
// Adjusting H after using it is more interesting.  (Actually here we keep halving the value)
for(i=999;i--;x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,9,9))c=3*Math.random()|0,t?(x.fillStyle=`hsl(${H},50%,50%)`,H=.5*H+0.5*299*(c+t)>>1):X=Y=H=0
for(i=999;i--;x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,6,6),H=H+299*(c+t)>>2)c=3*Math.random()|0,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// Golfed back down to 140
for(i=K=500;i--;x.fillRect(X=X+K+c*K>>1,Y=Y+999*(1-c&1)>>1,6,6),H=H+K*(c+t)>>2)c=3*Math.random()|0,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// Oh but I had accidentally removed the PRNG, so I can reduce further
for(i=K=500;i--;x.fillRect(X=X+K+c*K>>1,Y=Y+999*(1-c&1)>>1,6,6),H=H+K*(c+t)>>2)c=(i*t^i|0)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// So then I can improve the looks again
K=500;for(i=5*K;i--;x.fillRect(X=X+K+c*K>>1,Y=Y+999*(1-c&1)>>1,3,3),H=H+K*(c+t)>>2)c=(i*t^i|0)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// And further
for(i=3000;i--;x.fillRect(X=X+460+c*540>>1,Y=Y+999*(1-c&1)>>1,3,3),H=H+400*(c+t)>>2)c=(i*t^i|0)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// Too far (push down Y away from top)
for(i=3000;i--;x.fillRect(X=X+460+c*540>>1,Y=Y+40+999*(1-c&1)>>1,2,2),H=H+400*(c+t)>>2)c=(i*t^i|0)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// OK this just fits
for(i=3000;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1077*(1-c&1)>>1,3,3),H=H+400*(c+t)>>2)c=(i*t^i|0)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// Oooh golfing available.  Unfortunately that is a bit slow on my little Asus.
for(i=3000;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1077*(1-c&1)>>1,3,3),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// --- TO RELEASE? --- This is faster, but how is it on Mac?  It's actually pretty ugly up close, on any platform.  300 color cycles even faster, but is even dirtier.
for(i=400;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1074*(1-c&1)>>1,6,6),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// We could compromise between the two above, although it does slow down the color cycling on my Asus
// But I prefer the thickness of 6,6 because it makes the colors appear stronger (fewer white holes)
for(i=600;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1076*(1-c&1)>>1,4,4),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// More detailed colors, now you can clearly see the hue travel from right to left
for(i=800;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1074*(1-c&1)>>1,6,6),H=0.7*H+120*(c+t))c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// --- RELEASED ---
for(i=600;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1076*(1-c&1)>>1,4,4),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},50%,50%)`:X=Y=H=0
// Oh, I could have brightened the colors somewhat
for(i=600;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1075*(1-c&1)>>1,5,5),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},70%,50%)`:X=Y=H=0
// And for 2 extra chars, give it a margin from the edges, and also make the proportions exact
for(i=600;i--;x.fillRect(X=X+398+c*577>>1,Y=Y+38+1e3*(1-c&1)>>1,4,4),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},90%,60%)`:X=Y=H=0
// Smaller
for(i=600;i--;x.fillRect(X=X+440+c*520>>1,Y=Y+88+900*(1-c&1)>>1,4,4),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},90%,65%)`:X=Y=H=0

// Experimenting with colors; this shows the second level triangles changing separately:
for(i=900;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1076*(1-c&1)>>1,6,6),H=(.3*H+.7*400*(c+t))/2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},80%,60%)`:X=Y=H=0

// 20171012 I discovered yonatan did something similar (but not animated): https://www.dwitter.net/d/2668

// 2020 Same thing but better colours
for(i=600;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1076*(1-c&1)>>1,4,4),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},99%,65%)`:X=Y=H=0
// Slower colours (a bit prettier)
for(i=600;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1076*(1-c&1)>>1,4,4),H=H+250*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},99%,65%)`:X=Y=H=0
// Finer, slower (for powerful machines)
for(i=2e3;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1076*(1-c&1)>>1,2,2),H=H+300*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},99%,65%)`:X=Y=H=0
// Finer, good speed (for powerful machines)
for(i=4e3;i--;x.fillRect(X=X+400+c*600>>1,Y=Y+1076*(1-c&1)>>1,2,2),H=H+400*(c+t)>>2)c=(i*t^i)%3,t?x.fillStyle=`hsl(${H},99%,65%)`:X=Y=H=0
