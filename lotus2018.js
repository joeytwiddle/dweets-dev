for(c.width|=j=99;j--;)W=120*S(j/39)*C(t),x.fillRect(960-W+(500-j*j/20)*S(t),440+4*j,2*W,4)
for(c.width|=j=99;j--;)W=120*S(k=j/39)*C(t),x.fillRect(960+(500+j*4*C(k))*S(t)-W,440+4*j,2*W,4)
c.width|=0;for(i=19;i--;)for(j=99;j--;)W=120*S(j/39)*C(a=t+i),x.fillRect(960-W+(500-j*j/20)*S(a),440+4*j+99*C(a),2*W,5)
c.width|=0;for(i=19;i--;x.fillStyle=i&1?'#ff7':'#f7f')for(j=99;j--;)W=120*S(j/39)*C(a=t+i),x.fillRect(960-W+(500-j*j/20)*S(a),440+4*j+99*C(a),2*W,5)
c.width|=0;for(i=19;x.fillStyle=i&1?'#ff7':'#f7f',i--;)for(j=99;j--;)W=120*S(j/39)*S(a=t%.628+i*.314),x.fillRect(960-W+(500-j*j/20)*C(a),440+4*j+99*S(a),2*W,5)
c.width|=0;for(i=19;x.fillStyle=i&1?'#ff7':'#f7f',i--;)for(j=99;j--;)W=120*S(j/39)*C(a=t%1.26-i*.628),x.fillRect(960-W-(500-j*j/20)*S(a),440+4*j+99*C(a),2*W,5)
c.width|=0;for(i=19;x.fillStyle=i&1?'#ff7':'#f7f',i--;)for(j=99;j--;)W=120*S(j/39)*S(a=-t%.628-i*.314),x.fillRect(960-W-(500-j*j/20)*C(a),440+4*j-99*S(a),2*W,5)
c.width|=0;for(i=0;x.fillStyle=`hsl(${i*9},99%,50%`,i++<20;)for(j=99;j--;)W=120*S(j/39)*S(a=+(t%.628)+i*.314),x.fillRect(960-W-(500-j*j/20)*C(a),440+4*j-99*S(a),2*W,5)

// Two colours
c.width|=0;for(i=0;x.fillStyle=i&1?'#ff74':'#f7f2',i++<20;)for(j=99;j--;)W=120*S(j/39)*S(a=+(t%.628)+i*.314),x.fillRect(960-W-(500-j*j/20)*C(a),440+4*j-99*S(a),2*W,4)
c.width|=0;for(i=0;x.fillStyle=i&1?'#f7f4':'#ff74',i++<20;)for(j=99;j--;)W=120*S(j/39)*S(a=+(t%.628)+i*.314),x.fillRect(960-W-(500-j*j/20)*C(a),440+4*j-99*S(a),2*W,4)
c.width|=0;for(i=0;x.fillStyle=i&1?'#f7f1':'#ff73',i++<20;)for(j=99;j--;)W=120*S(j/39)*S(a=+(t%.628)+i*.314),x.fillRect(960-W-(500-j*j/20)*C(a),500+4*j-99*S(a),2*W,4)
c.width|=0;for(i=0;x.fillStyle=i&1?'#f7f2':'#ff75',i++<20;)for(j=99;j--;)W=120*S(j/39)*S(a=+(t%.628)+i*.314),x.fillRect(960-W-(500-j*j/20)*C(a),500+4*j-99*S(a),2*W,4)
c.width|=0;for(i=20;x.fillStyle=i&1?'#f7f2':'#ff75',i--;)for(j=99;j--;)W=120*S(j/39)*S(a=(t%.628)+i*.314),x.fillRect(960-W-(500-j**4/2e5)*C(a),500+4*j-99*S(a),2*W,4)

c.width|=0;for(i=0;i++<20;)for(j=99;j--;)x.fillStyle=`hsla(${i&1?40:300},99%,70%,${.5-S(a)/2}`,W=120*S(j/39)*S(a=+(t%.628)+i*.314),x.fillRect(960-W-(500-j*j/20)*C(a),440+4*j-99*S(a),2*W,4)

// White to purple gradient?
c.width|=0;for(i=0;i++<20;)for(j=99;j--;)W=120*S(j/39)*S(a=+(t%.628)+i*.314),x.fillStyle='#f7f'+(j/11|0),x.fillRect(960-W-(500-j*j/20)*C(a),500+4*j-99*S(a),2*W,4)

// That's curious
// x.fillStyle='#f7f'+(j<<3) gives me yellows, or indeed <<1 or <<2
// x.fillStyle='#f7f'+(j>>3) gives me purples

// TODO: Get the arms to expand outwards
// TODO: Fatten the bottom (sine instead of quadratic, draw out and up rather than down and in?)
// TODO: Unwrap the loops
// TODO: Draw from back to front?!
// TODO: Ideal gradient would be yellow -> white -> purple ->rapid green LOL
// TODO: Maybe just do a static image with lovely gradients and distribution?

// TODO: Draw from j=0 at the bottom to j=99 at the top?

// Draw back: from low layer to high layer, should always be correct order
// Draw front: from high layer to low layer, should always be correct order
// Whoa
c.width|=0;for(i=-9;i++<9;)for(j=99;j--;)x.fillStyle=`hsl(${i*9},99%,70%`,a=(i>0?3.14:0)+(4*i+t)%3.14,b=i/6,W=120*S(j/39)*S(a),x.fillRect(960-W-(500-j*j/20)*C(a)*S(b),440+4*j-99*S(a),2*W,4)
c.width|=0;for(i=-9;i++<9;)for(j=99;j--;)x.fillStyle=`hsl(${i*9},99%,70%`,a=(i>0?3.14:0)+(4*i+t)%3.14,b=i/6,W=120*S(j/39)*S(a),x.fillRect(960-W-(500-j*j/20)*C(a)*S(b),440+4*j-299*S(a),2*W,5)
c.width|=0;for(i=-9;i++<9;)for(j=99;j--;)x.fillStyle=`hsl(${i*9},99%,70%`,a=(i>0?3.14:0)+(4*i+t)%3.14,b=i/6,W=120*S(j/39)*S(a),x.fillRect(960-W-(500-j*j/20)*C(a)*S(b),940-4*(99-j)*(1-C(b)/2-S(b)/2),2*W,5)
// There should be pairs, so when the front one reaches the end of its swing, it will appear on the back

// Rewrite, drawing perfectly from back to front, and repeating
// T=[0..32)
c.width|=0;for(i=8192;i--;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/5,a=(4*p+t)%3.14+(T>16)*3.14,W=120*S(y/81)*S(a),x.fillStyle=`hsl(${p*9},99%,70%`,x.fillRect(960-500*C(a)-W,940-2*y,2*W,2)
c.width|=0;for(i=8192;i--;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/5,a=(4*p+t)%3.14+(T>16)*3.14,W=120*S(y/81)*S(a),x.fillStyle=`hsl(${p*9},99%,70%`,x.fillRect(960-500*C(a)*y/256-W,940-2*y*(40+T)/80,2*W,2)
c.width|=0;for(i=8192;i-=8;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/5,a=(4*p+t)%3.14+(T>16)*3.14,W=120*S(y/81)*S(a),x.fillStyle=`hsl(${p*9},99%,70%`,x.fillRect(960-500*C(a)*y/256-W,940-2*y*(40+T)/80,2*W,16)
c.width|=0;for(i=8192;i-=8;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/5,a=(4*p+t)%3.14+(T>16)*3.14,W=120*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*9},99%,70%`,x.fillRect(960-500*C(a)*y/256-W,940-2*y*(1-C(b))/2*(1.5-S(a))/3,2*W,16)
c.width|=0;for(i=8192;i-=8;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/5,a=(4*p+t)%3.14+(T>16)*3.14,W=120*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*9},99%,70%`,x.fillRect(960-500*C(a)*y/256-W,940-2*y*(1-C(b))/2*(1.5-S(a))/3,2*W,16)
c.width|=0;for(i=8192;i-=4;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=120*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*9},99%,70%`,x.fillRect(960-500*C(a)*y/256*S(E)-W,940-y*(1-C(b)/999-S(a)/2)*C(0),2*W,16)
c.width|=0;for(i=8192;i-=4;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=120*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*9},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,940-y*(1-C(b)/999-S(a)/2)*C(E),2*W,16)
c.width|=0;for(i=8192;i-=2;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=99*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*9},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,940-y*(2-S(b)/2-S(a)+S(E))*C(E)/2,2*W,16)

// A nice accident
c.width|=0;for(i=8192;i-=2;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=99*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*7},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,840-y*(0-S(b)/2-S(a)*+S(E)+C(E))/2,2*W,16)
c.width|=0;for(i=8192;i-=4;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=99*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*7},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,940-y*(1-S(b)-S(a)*S(E)+C(E))/2,2*W,10)
c.width|=0;for(i=8192;i-=4;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=99*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*7},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,940-y*(1-(S(b)+S(a))*S(E)+C(E))/2,2*W,10)
c.width|=0;for(i=8192;i-=4;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=99*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*7},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,940-y*(2-(S(b)+S(a))*S(E)+C(E))/2,2*W,12)
// --- THIS IS GOOD! ---
c.width|=0;for(i=8192;i-=2;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=130*S(b=y/81)*S(a),x.fillStyle=`hsl(${p*7},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,940-y*(2-(S(b)+S(a))*S(E)+C(E))/2,2*W,12)

c.width|=0;for(i=8192;i-=8;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=99*S(b=y/81)*S(a)*(1+S(E)),x.fillStyle=`hsl(${p*7},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,860-y*(2-(1+S(b)+2*S(a))*S(E)+C(E))/2,2*W,20)
// --- RELEASED --- https://codegolf.tk/a/270
c.width|=0;for(i=8192;i-=8;)T=i>>8,y=i%256,p=((T-16)**2)**.5,E=p/11,a=(4*p+t)%3.14+(T>16)*3.14,W=8+99*S(b=y/83)*S(a)*(1+S(E)),x.fillStyle=`hsl(${p*7},99%,70%`,x.fillRect(960-600*C(a)*y/256*S(E)-W,860-y*(2-(1+S(b)+2*S(a))*S(E)+C(E))/2,2*W,20)
// NOTE: Use 8448 instead of 8192 to avoid one petal glitching out
// Shades of pink: `hsl(300,99%,${40+y/5}%`
// Forked into rose.js

// Trying for 140 again
c.width|=0;for(i=20;x.fillStyle=i<9?'#f7f2':'#ff75',i--;)for(j=99;j--;)W=120*S(j/31)*S(a=t+i*17),x.fillRect(960-W-500*S(j/71)*C(a),960-j*(1+i/5+S(a)),2*W,9)
c.width|=0;for(i=20;i--;)for(j=99;x.fillStyle='#f7f'+j/11,j--;x.fillRect(960-W-500*S(j/71)*C(a),960-j*(1+i/5+S(a)),2*W,9))W=120*S(j/31)*S(a=t+i*17)
// Alternative route with no payoff
//c.width|=0;for(k=1980;k--;)i=k/99|0,j=k%99,x.fillStyle='#f7f'+j/11,W=120*S(j/31)*S(a=t+i*17),x.fillRect(960-W-500*S(j/71)*C(a),960-j*(1+i/5+S(a)),2*W,9)
//c.width|=0;for(k=1980;k--;)x.fillStyle='#f7f'+k%99/11,W=120*S(k%99/31)*S(a=t+(k/99|0)*17),x.fillRect(960-W-500*S(k%99/71)*C(a),960-k%99*(1+(k/99|0)/5+S(a)),2*W,9)
//c.width|=0;for(k=1980;k--;)x.fillStyle='#f7f'+k%99/11,W=120*S(k%99/31)*S(a=t+(k/99|0)*17),x.fillRect(960-W-500*S(k%99/71)*C(a),960-k%99*(1+k/500+S(a)),2*W,9)
c.width|=0;for(k=1024;k--;)i=k>>6,j=k%64,x.fillStyle='#f7f'+j/9,W=120*S(j/20)*S(a=t+i*17),x.fillRect(960-W-500*S(j/41)*C(a),960-j*(1+i/2+S(a)),2*W,9)
c.width|=0;for(k=1024;k--;)i=k>>6,j=k%64,x.fillStyle='#f7f'+j/9,W=120*S(j/20)*S(a=k>>6<<4),x.fillRect(960-W-500*S(j/41)*C(a+t),960-j*(1+i/2+S(a+t)),2*W,9)
for(c.width|=k=1024;k--;)i=k>>6,j=k%64,x.fillStyle='#f7f'+j/9,W=120*S(j/20)*S(a=t+i*17),x.fillRect(960-W-500*S(j/41)*C(a),960-j*(i+S(a)),2*W,9)
// --- RELEASED --- https://www.dwitter.net/d/8288
for(c.width|=k=511;k--;x.fillRect(960-W-500*S(j/41)*C(a),960-j*(i+S(a)),2*W,9))i=k>>5,j=k%32,x.fillStyle='#f7f'+j/5,W=99*S(j/10)*S(a=t+i*17)
// Although the `+j/5` does very little.  We could have focused on other things instead!
// Make solid
for(c.width|=k=511;k--;x.fillRect(960-W-500*S(j/41)*C(a),960-j*(p=i+S(a)),2*W,p))i=k>>5,j=k%32,x.fillStyle='#f7f'+j/5,W=99*S(j/10)*S(a=t+i*17)
// Improved: made a bit more 3d, no need to change opacity, no need to shrink width
for(c.width|=k=511;k--;x.fillRect(960-W-500*S(j/41)*C(a),960-j*(i+4*S(a)),2*W,9))i=k>>5,j=k%32,x.fillStyle='#f7f3',W=99*S(j/10),a=t+i*17
// No need for S(j/41), inline a
// Improved --- TO RELEASE NEXT YEAR? ---
for(c.width|=k=511;k--;x.fillRect(960-W-12*j*C(a=t+i*17),960-j*(i+4*S(a)),2*W,9))i=k>>5,j=k%32,x.fillStyle='#f7f3',W=99*S(j/10)
for(c.width|=k=511;k--;x.fillRect(960-W-12*j*C(a=t+i*8)*C(E=i/15),900-j*(9*S(E)+5*S(a)),2*W,9))i=k>>5,j=k%32,x.fillStyle='#f7f3',W=60*S(j/10)
// The previous two made solid
for(c.width|=k=511;k--;x.fillRect(960-W-12*j*C(a=t+i*17),960-j*(p=i+4*S(a)),2*W,p))i=k>>5,j=k%32,x.fillStyle='#f7f3',W=99*S(j/10)
for(c.width|=k=511;k--;x.fillRect(960-W-12*j*C(a=t+i*8)*C(E=i/15),900-j*(p=9*S(E)+5*S(a)),2*W,p))i=k>>5,j=k%32,x.fillStyle='#f7f3',W=60*S(j/10)
// Further improvements:
// - FIX BUG: 511 leaves one petal missing, use 544 instead
// - Make the petals shorter and fatter
// - Group the petals in pairs (symmetry)
// --- RELEASED --- https://www.dwitter.net/d/10878
for(c.width|=k=512;k--;x.fillRect(960-W-12*j*C(a=t+i*17),960-j*(p=i+4*S(a)),2*W,p))i=k>>5,j=k%32,x.fillStyle='#fc74',W=99*S(j/10)
// Colour each petal differently
for(c.width|=k=512;k--;x.fillRect(960-W-12*j*C(a=t+i*17),960-j*(p=i+4*S(a)),2*W,p))i=k>>5,j=k%32,x.fillStyle=`hsla(${60-k/5},99%,45%,20%)`,W=99*S(j/10)

// Experimenting
for(c.width|=k=511;k--;x.fillRect(960-W-800*S(j/41)*C(a)*S(E),960-j*(12*C(E)+S(a)),2*W,9))i=k>>5,j=k%32,E=1.5*(i/16)**.5,x.fillStyle='#f7f4',W=99*S(j/10)*S(a=t+i*17)
a=1;for(c.width|=k=511;k--;x.fillRect(960-W-800*S(j/41)*C(a)*S(E),960-j*(12*C(E)+S(a)),2*W,9))i=k>>5,j=k%32,E=1.5*(i/16)**.5,x.fillStyle='#f7f'+(5-4*S(a)|0),W=99*S(j/10)*S(a=t+i*17)
a=1;for(c.width|=k=511;k--;x.fillRect(960-W-800*S(j/41)*C(a)*S(E),960-j*(12*C(E)+3*S(a)),2*W,9))i=k>>5,j=k%32,E=1.5*(i/16)**.5,x.fillStyle='#f7f'+(6-3*S(a)|0),W=99*S(j/10)*S(a=t+i*17)
for(c.width|=k=511;k--;x.fillRect(960-W-800*S(j/41)*C(a)*S(E),960-j*(12*C(E)+5*S(a)*S(E)),2*W,9))i=k>>5,j=k%32,E=1.5*(i/16)**.5,x.fillStyle='#f7f4',W=99*S(j/10)*S(a=t+i*17)
a=1;for(c.width|=k=511;k--;x.fillRect(960-W-800*S(j/41)*C(a)*S(E),960-j*(12*C(E)+9*S(a)*S(E)),2*W,9))i=k>>5,j=k%32,E=1.5*(i/16)**.5,x.fillStyle='#f7f'+(6-2*S(a)|0),W=99*S(j/10)*S(a=t+i*17)
a=1;for(c.width|=k=511;k--;x.fillRect(960-W-800*S(j/41)*C(a)*S(E),860-j*(12*C(E)+9*S(a)*S(E)),2*W,9))i=k>>5,j=k%32,E=.5+(i/16)**.5,x.fillStyle='#f7f'+(6-2*S(a)|0),W=99*S(j/10)*S(a=t+i*17)

// Experimenting 2
for(c.width|=k=511;k--;x.fillRect(960-W-500*j/41*C(a),960-j*(4*S(i/5)+4*S(a)),2*W,9))i=k>>5,j=k%32,x.fillStyle='#f7f3',W=99*S(j/10),a=t+i*17

// TODO: Can we do the golfed pink one with a mirror copy reflection with reduced alpha?
// --- These three are pretty good ---
for(c.width|=k=1024;k--;x.fillRect(960-W-500*j/41*C(a=t+i*17),760-j*(i*(1-2*l)+4*S(a)),2*W,9))i=(k>>5)%16,j=k%32,l=k<512,x.fillStyle=l?'#fbf1':'#f7f3',W=99*S(j/10)
for(c.width|=k=1024;k--;x.fillRect(960-W-500*j/41*C(a=t+i*17),860-j*(i*(2*l-1)+4*S(a)),2*W,9))i=(k>>5)%16,j=k%32,l=k<512,x.fillStyle=l?'#f7f3':'#ecf1',W=99*S(j/10)
for(c.width|=k=1024;k--;x.fillRect(960-W-600*j/41*C(a=t+i*17),860-j*(i*(2*l-1)+4*S(a)),2*W,9))i=(k>>5)%16,j=k%32,l=k<512,x.fillStyle=l?'#f8f3':'#fdf2',W=99*S(j/10)
// Some golfing
for(c.width=k=256;k--;x.fillRect(99-W-4*j*C(a=t+i*17),99-j/1.5*(i*(2*l-1)+S(a)),2*W,4))i=(k>>4)%8,j=k%8,l=k<128,x.fillStyle=l?'#f8f3':'#fdf2',W=9*S(j/2.5)
for(c.width=k=256;k--;x.fillRect(99-W-6*j*C(a=t+i*17),99-j*(i*(2*l-1)+S(a)),2*W,4))i=(k>>4)%8,j=k%8,l=k<128,x.fillStyle=l?'#f8f3':'#fdf2',W=9*S(j/2.5)
for(c.width=k=512;k--;x.fillRect(256-W-7*j*C(a=t+i*17),200-j*(i*(2*l-1)+S(a)),2*W,4))i=k>>4&7,j=k%16,l=k<256,x.fillStyle=l?'#f8f3':'#fdf2',W=30*S(j/5)
for(c.width=k=512;k--;x.fillRect(256-W-7*j*C(a=t+i*17),200-j*(i*(2*l-1)+S(a)),2*W,4))i=k>>4&7,j=k%16,l=k<256,x.fillStyle='#f7f'+(1+l),W=30*S(j/5)
for(c.width=k=512;k--;x.fillRect(256-W-7*j*C(a=t+i*8),180-j*(i*(2*l-1)+3*S(a)),2*W,4))i=k>>4&7,j=k%16,l=k<256,x.fillStyle='#f7f'+(1+l),W=40*S(j/5)
for(c.width|=k=1024;k--;x.fillRect(960-W-500*j/41*C(a=t+i*17),860-j*(i*(2*l-1)+4*S(a)),2*W,9))i=k>>5&15,j=k%32,l=k<512,x.fillStyle='#f7f'+(1+l),W=99*S(j/10)
// We could make the top stronger by plotting it twice?
for(c.width=k=768;k--;x.fillRect(384-W-7*j*C(a=t+i*17),300-j*(i*(2*l-1)+S(a)),2*W,4))i=k>>4&7,j=k%16,l=k<512,x.fillStyle='#f7f1',W=30*S(j/5)
// More 3D (I think the first is buggy, but they both appear the same!)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),300-j*(i*(2*(k<512)-1)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,x.fillStyle='#f7f1',W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-8*j*C(a=t+i*8),300-j*(i*(2*(k>255)-1)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,x.fillStyle='#f7f1',W=30*S(j/5)
// Stronger top
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),300-j*(i*(2*l-1)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,l=k<512,x.fillStyle='#f7f'+(l+1),W=30*S(j/5)
// Solid top, faint bottom
//for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),300-j*(i*(2*l-1)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,l=k<512,x.fillStyle=`#f${l?9:'e'}f`,W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),300-j*(i*(2*l-1)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,l=k<512,x.fillStyle=l?'#f9f':'#fef',W=30*S(j/5)
for(c.width=k=512;k--;x.fillRect(256-W-9*j*C(a=t+i*8),180-j*(i*(1-2*l)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,l=k>>8,x.fillStyle=l?'#fef':'#f7f',W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),260-j*((l?-i:i)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,l=k>>8,x.fillStyle=l?'#fef':'#f7f',W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),260-j*((k>>8?-i:i)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,x.fillStyle=k>>8?'#fef':'#f7f',W=30*S(j/5)
// --- GOOD TO RELEASE --- Just 1 char to golf...!
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),280-j*((k>>8?i:-i)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,x.fillStyle='#f7f'+(k>>7),W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),280-j*4*S(a)+j*(k>>8?-i:i),2*W,6))i=k>>4&7,j=k%16,x.fillStyle='#f7f'+(k>>7),W=30*S(j/5)
for(c.width=k=512;k--;x.fillRect(256-W-9*j*C(a=t+i*8),180-j*4*S(a)+j*i-2*j*i*(k>>8),2*W,6))i=k>>4&7,j=k%16,x.fillStyle='#f7f'+(k>>7),W=30*S(j/5)
for(c.width=k=512;k--;x.fillRect(256-W-9*j*C(a=t+i*8),180+j*(i-2*i*(k>>8)-4*S(a)),2*W,6))i=k>>4&7,j=k%16,x.fillStyle='#f7f'+(k>>7),W=30*S(j/5)
// Make the bottoms thin instead of lighter colour
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),300-j*(i*(2*l-1)+4*S(a)),2*W,1+5*l))i=k>>4&7,j=k%16,l=k<512,x.fillStyle='#f7f1',W=30*S(j/5)
// Make the lines get thinner at the ends
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),260-j*4*S(a)+j*(k>>8?-i:i),2*W,j^15))i=k>>4&7,j=k%16,x.fillStyle='#f7f'+(k>>7),W=30*S(j/5)
// --- FOOBAR but FITS ---
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),280-j*4*S(a)+j*(k>>8?-i:i),2*W,6))i=k/16&7,j=k%16,x.fillStyle='#f7f'+k/128,W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),280-j*4*S(a)+j*(k>>8?-i:i),2*W,6))i=k/16&7,j=k%16,x.fillStyle='#f7f'+k/255,W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),280-j*4*S(a)+j*(k>>8?-i:i),2*W,6))i=k/16&7,j=k%16,x.fillStyle='#f7f'+k/256,W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),280-j*4*S(a)+j*(k>>8?-i:i),2*W,6))i=k/16&7,j=k%16,x.fillStyle='#f7f'+k/99,W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),280-j*4*S(a)+j*(k>>8?-i:i),2*W,6))i=k/16&7,j=k%16,x.fillStyle='#f7f'+k/85,W=30*S(j/5)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),280-j*4*S(a)+j*(k>>8?-i:i),2*W,6))i=k/16&7,j=k%16,x.fillStyle='#f7f'+k/153,W=30*S(j/5)
// --- GREAT --- Oh we can use a number larger than 768, and write the top half many times
// QUOTE: Vesak day - a time for reflection

// Small and cute (switch to -i*8 to start with some taller petals)
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*4*S(a)+j*(k>>7?-i:i),2*W,6))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=30*S(j/5)
// === FAVOURITE === Minor tweaks
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*3*S(a)+j*(k>>7?-i:i),2*W,6))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=30*S(j/5)
// Small and cute and solid (+2)
// Unfortunately with simple solid, the petals disappear when they transition between up/down
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*(p=4*S(a)-(k>>7?-i:i)),2*W,p))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=30*S(j/5)
// --- FAVOURITE despite issues --- Little lotus Experiment, more side-on
// Note: The p+2 trick strengthens the upwards petals, whilst weakening the downwards petals.  But this isn't ideal, because some upwards petals are reflections, and downwards petals are real!
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*(p=3*S(a)-(k>>7?-i:i)),2*W,p+2))i=k/16&7,j=k%16,x.fillStyle='#f9b2',W=30*S(j/5)
// === GOOD === Raise the bottommost petals, so none are resting on the water (ungolfed, +4)
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*3*S(a)+j*(k>>7?-i:i),2*W,6))i=1+(k/16&7),j=k%16,x.fillStyle='#fac2',W=30*S(j/5)
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*4*S(a)+j*(k>>7?-i:i),2*W,6))i=1+(k/16&7),j=k%16,x.fillStyle='#f8a2',W=30*S(j/5)
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*3*S(a)+j*(k>>7?-i:i),2*W,9))i=1+(k/16&7),j=k%16,x.fillStyle='#f8a1',W=30*S(j/5)
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*3*S(a)+j*(k>>7?-i:i),2*W,9))i=1+(k/16&7),j=k%16,x.fillStyle='#f791',W=30*S(j/5)
// === RELEASED 2020 === https://www.dwitter.net/d/18635 Same but gentler
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*3*S(a)+j*(k>>7?-i:i),2*W,9))i=1+(k/16&7),j=k%16,x.fillStyle='#f9a1',W=30*S(j/5)
// But I think 700 is more attractive than 500

// Experimenting with double petals
for(c.width=k=2e3;k--;x.fillRect(1e3-W-19*j*C(a=t-i*9),840-j*(p=6*S(a)-(k>>8?-i:i)),2*W,p+4))i=k/32&15,j=k%32,x.fillStyle='#f9b2',W=90*S(j/10)
// Experiment: Instead of layering the top, use thinner lines for the reflections
for(c.width=1e3,k=256;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*(p=3*S(a)-(s?-i:i)),2*W,s?p*2:p/4))i=k/16&7,j=k%16,s=k>127,x.fillStyle='#f9b4',W=30*S(j/5)
// Interesting experiment: Petals thicken at their outermost
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*(3*S(a)-(k>>7?-i:i)),2*W,j))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=30*S(j/5)
// Lines thicken with k
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*(3*S(a)-(k>>7?-i:i)),2*W,4+k/99))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=30*S(j/5)
// === FAVOURITE ===
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*(3*S(a)-(k>>7?-i:i)),2*W,4+k/99))i=k/16&7,j=k%16,x.fillStyle='#f8a1',W=30*S(j/5)
for(c.width=k=1e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),440-j*(3*S(a)-(k>>7?-i:i)),2*W,4+k/99))i=k/16&7,j=k%16,x.fillStyle='#f791',W=30*S(j/5)

// TODO: Consider using height 9 instead of 6; it makes the petals stronger, more distinct from the reflection
// TODO :Or even cooler, replace 6 with t!
// If we want to avoid the complete flatness, we must never let p===0
for(c.width=k=1e3;k;x.fillRect(500-W-9*j*C(a=3*t-8*i),440-j*(p=4*S(a)-(k>>7?-i:i)|3),2*W,p))i=k--/16&7,j=k%16,x.fillStyle='#fb31',W=30*S(j/5)
// This hack patches that with a fake, but it goes over the limit
for(c.width=k=1e3;k;x.fillRect(500-W-9*j*C(a=2*t-i*8),440-j*(4*S(a)-(k>>7?-i:i)),2*W,6+6*C(a)**2))i=k--/16&7,j=k%16,x.fillStyle='#f9b1',W=30*S(j/5)

// Just for fun, petals move at different speeds
for(c.width=k=1e3;k;x.fillRect(500-W-9*j*C(a=i*t),440-j*(p=4*S(a)-(k>>7?-i:i)),2*W,p))i=k--/16&7,j=k%16,x.fillStyle='#fb31',W=30*S(j/5)

// === ALMOST FAVOURITE but too slow on mobile === Same shape but stronger (higher res, more overwrites)
for(c.width=k=2e3;k--;x.fillRect(1e3-W-18*j*C(a=t+i*8),840-j*8*S(a)+j*2*(k>>7?-i:i),2*W,12))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=60*S(j/5)
for(c.width=k=2e3;k--;x.fillRect(999-W-15*j*C(a=t+i*8),760-j*8*S(a)+2*j*(k>>7?-i:i),2*W,9))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=50*S(j/5)
for(c.width=k=2e3;k--;x.fillRect(999-W-25*j*C(a=t+i*8),760-j*15*S(a)+3*j*(k>>7?-i:i),2*W,9))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=80*S(j/5)

// Large and detailed
for(c.width=k=2e3;k--;x.fillRect(999-W-15*j*C(a=t+i*8),680-j*8*S(a)+j*(k>512?-i:i),2*W,9))i=k/32&15,j=k%32,x.fillStyle='#f9b1',W=90*S(j/10)
// Large and detailed and solid
for(c.width=k=2e3;k--;x.fillRect(999-W-15*j*C(a=t+i*8),680-j*(p=8*S(a)-(k>>9?-i:i)),2*W,p))i=k/32&15,j=k%32,x.fillStyle='#f9b1',W=90*S(j/10)
// === NICE === Large and cute
for(c.width=k=1e3;k--;x.fillRect(500-W-15*j*C(a=t+i*8),360-j*8*S(a)+2*j*(k>>7?-i:i),2*W,9))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=50*S(j/5)
// === GREAT === Large and cute and solid
for(c.width=k=1e3;k--;x.fillRect(500-W-15*j*C(a=t+i*8),360-j*(p=8*S(a)-2*(k>>7?-i:i)),2*W,p))i=k/16&7,j=k%16,x.fillStyle='#f9b1',W=50*S(j/5)

// Medium cuteness (Solid top, faint bottom, from above)
for(c.width=k=768;k--;x.fillRect(384-W-9*j*C(a=t+i*8),300-j*(i*(2*l-1)+4*S(a)),2*W,6))i=k>>4&7,j=k%16,l=k<512,x.fillStyle=l?'#f9f':'#fef',W=30*S(j/5)

// 2020 release with more petals, and no longer raise the first petal
// "Dark" and thick
for(c.width=k=2e3;k--;x.fillRect(1400-W-9*j*C(a=t-i*8),820-j*3*S(a)+j/2*(k>>8?-i:i),2*W,9))i=k/16&15,j=k%16,x.fillStyle='#f8a1',W=30*S(j/5)
// Light and thick
for(c.width=k=2e3;k--;x.fillRect(1400-W-9*j*C(a=i*8-t),820-j*3*S(a)+j/2*(k>>8?-i:i),2*W,9))i=k/16&15,j=k%16,x.fillStyle='#fab1',W=30*S(j/5)
// Lighter version (less flooding)
for(c.width=k=2e3;k--;x.fillRect(1400-W-9*j*C(a=i*8-t),820-j*3*S(a)+j/2*(k>>8?-i:i),2*W,7))i=k/16&15,j=k%16,x.fillStyle='#fab1',W=30*S(j/5)
// === FAVOURITE FOR 2021 === Darker but finer
for(c.width=k=2e3;k--;x.fillRect(1400-W-9*j*C(a=i*8-t),820-j*3*S(a)+j/2*(k>>8?-i:i),2*W,7))i=k/16&15,j=k%16,x.fillStyle='#f8a1',W=30*S(j/5)
// Just for fun, let the petals rise and fall (the flower opens and closes)
for(c.width=k=2e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8)*C(o),820-j*3*S(a)+6*j*S(o)*(k>>8?-1:1),2*W,7))i=k/16&15,j=k%16,o=.2+i*(1-C(t))/25,x.fillStyle='#fab1',W=30*S(j/5)
// === ALTERNATIVE FOR 2021 === Solid version
for(c.width=k=2e3;k--;x.fillRect(500-W-9*j*C(a=t-i*8),820-j*(p=3*S(a)-(k>>8?-i:i)/2),2*W,p))i=k/16&15,j=k%16,x.fillStyle='#f8a2',W=30*S(j/5)
// === ALTERNATIVE FOR 2021 === Larger (try 1500 instead of 500 if you like)  But perhaps smaller is prettier than larger?
for(c.width=k=2e3;k--;x.fillRect(500-W-18*j*C(a=t-i*8),820-j*6*S(a)+j*(k>>8?-i:i),2*W,12))i=k/16&15,j=k%16,x.fillStyle='#f8a1',W=60*S(j/5)
// Solid version
for(c.width=k=2e3;k--;x.fillRect(500-W-18*j*C(a=t-i*8),820-j*(p=6*S(a)-(k>>8?-i:i)),2*W,p))i=k/16&15,j=k%16,x.fillStyle='#f9b2',W=60*S(j/5)
// Same thing, but with 4x iterations, to make smoother petal edges
for(c.width=2e3,k=8e3;k--;x.fillRect(500-W-18*j/4*C(a=t-i*8),820-j*(p=6/4*S(a)-(k>>10?-i:i)/4),2*W,p))i=k/64&15,j=k%64,x.fillStyle='#f9b2',W=60*S(j/20)
// BAD Petals pink to yellow
for(c.width=k=2e3;k--;x.fillRect(1500-W-9*j*C(a=t-i*8),820-j*3*S(a)+j/2*(k>>8?-i:i),2*W,9))i=k/16&15,j=k%16,x.fillStyle=`hsl(${-40+6*i},90%,${50+i*2}%,.1)`,W=30*S(j/5)
