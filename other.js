// The relationship between RGB and hue
i=t,X=200*i
f=o=>255*(k=(i-o+8)%6,k<1?k:k<3?1:k<4?4-k:0)
x.fillStyle=R(f(0),f(2),f(4))
x.fillRect(X,700,4,50)
x.fillStyle=R(255,0,0);x.fillRect(X,600-f(0),6,6)
x.fillStyle=R(0,255,0);x.fillRect(X,600-f(2),6,6)
x.fillStyle=R(0,0,255);x.fillRect(X,600-f(4),6,6)
// See also: https://www.dwitter.net/d/8399
// TODO: Will these curves help us to golf the above down to fit?

// Depth of field: https://www.dwitter.net/d/3262
c.width|=0;for(i=256;i--;)X=7e4*i%1921,Z=9+43*i%256,Y=8e4*t/Z%1180,x.globalAlpha=Z/256,x.fillRect(X,Y,S=(300/Z)**1.5,S*4)
c.width|=0;for(i=256;i--;)X=7e4*i%1921,Z=9+43*i%256,Y=8e4*t/Z%1180,F=90-Z,x.globalAlpha=.5-F/128,x.fillRect(X,Y,S=900/Z*F/80,S*4)
// Doesn't look how I hoped
c.width|=0;for(i=256;i--;)X=7e4*i%1921,Z=9+11*i%256,Y=8e4*t/Z%1180,F=90-Z,F=F<0?-F:F,x.globalAlpha=.4-F/400,x.fillRect(X,Y,S=900/Z*F/80,S*4)
// Changing the focal depth
c.width|=0;for(i=256;i--;)X=7e4*i%1921,Z=9+11*i%256,Y=8e4*t/Z%1180,F=(9*t%256)-Z,F=F<0?-F:F,x.globalAlpha=1-F*F/2000,x.fillRect(X,Y,S=900/Z*F/80,S*4)
c.width|=0;for(i=200;i--;)X=7e4*i%1921,Z=9+11*i%256,Y=8e4*t/Z%2e3-1e3,F=(20*t%256)-Z,F=F<0?-F:F,A=1/(1+F/19),x.globalAlpha=A<0?0:A,x.fillRect(X,Y,S=900/Z*(1+F/90),S*4)
c.width|=0;for(i=200;i--;)X=7e4*i%1921,Z=9+11*i%256,Y=8e4*t/Z%2e3-1e3,F=256-(20*t%256)-Z,F=F<0?-F:F,A=1/(1+F*F/3e2),x.globalAlpha=A<0?0:A,x.fillRect(X,Y,S=900/Z*(1+F/90),S*4)
c.width|=0;for(i=200;i--;)X=7e4*i%1921,Z=9+11*i%256,Y=8e4*t/Z%2e3-1e3,F=128*(1+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/3e3),x.globalAlpha=A<0?0:A,x.fillRect(X,Y,s=900/Z*(1+F/90),s*4)
c.width|=0;for(i=999;i--;)X=7e4*i%5e5,Z=9+11*i%256,Y=151973*(t+i)%413377-1e4,F=128*(1+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/3e3),x.globalAlpha=A<0?0:A,x.fillRect(X/Z,Y/Z,s=900/Z*(1+F/60),s*4)
c.width|=0;for(i=999;i--;)X=7e4*i%5e5,Z=9+11*i%256,Y=151973*(t+i)%413377-2e4,F=80*(1.6+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/3e3),x.globalAlpha=A<0?0:A,x.fillRect(X/Z,Y/Z,s=900/Z*(1+F/40),s*4)
c.width|=0;for(i=1999;i--;)X=17391*i%5e5,Z=9+11*i%256,Y=151973*(t+i)%413377-2e4,F=100*(1.2+S(t))-Z,F=F<0?-F:F,A=1/(1+F/1e1),x.globalAlpha=A<0?0:A,x.fillRect(X/Z,Y/Z,s=(900+F*F/20)/Z,s*4)
c.width|=0;for(i=1999;i--;)X=17391*i%5e5,Z=9+11*i%256,Y=151973*(t+i)%413377-2e4,F=100*(1.2+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,x.fillRect(X/Z,Y/Z,s=(900+F*F/10)/Z,s*4)
c.width|=0;for(i=1999;i--;)X=17391*i%5e5,Z=40+11*i%256,Y=151973*(t+i)%413377-2e4,F=40+128*(1+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,x.fillRect(X/Z,Y/Z,s=(900+F*F/8)/Z,s*4)
c.width|=0;for(i=599;i--;)X=37397*i%914377,Z=37+23*i%512,Y=251977*(t+i)%813377-81217,F=40+256*(1+.8*S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/2840),x.globalAlpha=A<0?0:A,x.fillRect(X/Z,Y/Z,s=(1800+F*F/9)/Z,s*4)
c.width|=0;for(i=1999;i--;)X=17397*i%514377,Z=40+11*i%256,Y=251977*(t+i)%413377-21217,F=40+128*(1+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,x.fillRect(X/Z,Y/Z,s=(900+F*F/8)/Z,s*4)
c.width|=0;for(i=1999;i--;)X=17397*i%514377,Z=40+11*i%256,Y=251977*(0+i)%413377-21217,F=40+128*(1+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,s=(900+F*F/8)/Z,x.fillRect(X/Z-s/2,Y/Z-s*2,s,s*4)
c.width|=0;for(i=1999;i--;)X=17397*i%514377,Z=40+11*i%256,Y=251977*(t+i)%413377-21217,F=60+128*(1+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,w=(900+F*F/8)/Z,h=(3600+F*F/8)/Z,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
c.width|=0;for(i=1999;i--;)X=17397*i%514377,Z=40+21*i%256,Y=251977*(t+i)%413377-21217,F=60+120*(1+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,w=(900+F*F/8)/Z,h=w*4,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
c.width|=0;for(i=1999;i--;)X=17397*i%514377,Z=40+21*i%256,Y=251977*(t+i)%413377-21217,F=60+120*(1-S(t/3)**3)-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,w=(900+F*F/8)/Z,h=w*4,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
c.width|=0;for(i=1999;i--;)X=17393*i%514377,Z=40+(21*i)%256,Y=251917*(t+i)%413377-21217,F=60+120*(1-S(t)**3)-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,w=(900+F*F/8)/Z,h=w*4,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
t*=1;c.width|=0;for(i=1999;i--;)X=17393*i%514377,Z=40+(21*i+((23*i)^(i+17)))%256,Y=251917*(t+i)%413377-21217,F=60+120*(1-S(t)**3)-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,w=(900+F*F/8)/Z,h=w*4,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
t=(Date.now()-1507732695623)/3000;c.width|=0;for(i=1999;i--;)X=17393*i%514377,Z=40+(21*i+((23*i)^(i+17)))%256,Y=251917*(t/9+i)%413377-21217,F=80+120*(1-S(t))-Z,F=F<0?-F:F,A=.7/(1+F*F/2e3),x.globalAlpha=A<0?0:A,w=(900+F*F/32)/Z,h=w*4,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
t=(Date.now()-1507732695623)/3000;c.width|=0;for(i=1999;i--;)X=17393*i%514377,Z=40+(21*i+((23*i)^(i+17)))%512,Y=251917*(t/2+i)%813377-21217,F=80+220*(1-S(t))-Z,F=F<0?-F:F,A=.7/(1+F*F/6e3),x.globalAlpha=A<0?0:A,w=(900+F*F/64)/Z,h=w*4,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
t=(Date.now()-1507732695623)/3000;c.width|=0;for(i=1999;i--;)X=17393*i%514377,Z=40+(21*i+((23*i)^(i+17)))%512,Y=251917*(t/2+i)%813377-21217,F=80+220*(1-S(t))-Z,F=F<0?-F:F,A=.7/(1+F*F/14e3),x.globalAlpha=A<0?0:A,w=(900+F*F/64)/Z,h=w*4,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)

// Maybe better to do it with a grid, instead of with raindrops
c.width|=0;for(i=16*16*16;i--;)X=(i%16)*4096,Z=40+30*(i>>8),Y=((i>>4)%16)*10000,F=60+128*(1+S(t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,w=(900+F*F/8)/Z,h=(3600+F*F/8)/Z,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
k=1<<14;c.width|=0;for(i=16*16*16;i--;)Z=40+30*(i>>8),X=(i%16-8)*k,Y=(((i>>4)%16)-8)*k,F=60+128*(1+S(3*t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,w=(900+F*F/8)/Z,h=w,x.fillRect(960+X/Z-w/2,540+Y/Z-h/2,w,h)
k=1<<14;c.width|=0;for(i=16*16*16;i--;)Z=40+30*(i>>8),X=(i%16-8)*k,Y=(((i>>4)%16)-8)*k,F=60+128*(1+S(3*t))-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,f=F*F/8,i&1?(w=2*k,h=100):(w=100,h=2*k),h=(h+f)/Z,w=(w+f)/Z,x.fillRect(960+X/Z-w/2,540+Y/Z-h/2,w,h)

// Forget the raindrops.  Just a plane of dots
c.width|=0;for(i=1999;i--;)X=90000,Z=40+21*i%256,Y=251977*(0+i)%413377-21217,F=60+120*(1-S(t)**3)-Z,F=F<0?-F:F,A=1/(1+F/10),x.globalAlpha=A<0?0:A,w=(900+F*16)/Z,h=w*4,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
c.width|=0;for(i=2e3;i--;)X=9e4,Z=40+21*i%256,Y=200*(0+i)%413377-21217,F=60+120*(1-C(t)**3)-Z,F=F<0?-F:F,A=1/(1+F*F/640),x.globalAlpha=A<0?0:A,w=(900+F*F/8)/Z,h=w,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
c.width|=0;for(i=6e3;i--;)X=9e4,Z=40+(21*i%512),Y=100*i%2e7,F=50+160*(1-C(3*t))-Z,F=F<0?-F:F,A=.7/(1+F*F/1740),x.globalAlpha=A<0?0:A,w=(900+F*F/19)/Z,h=w,x.fillRect(X/Z-w/2,Y/Z-h/2,w,h)
// --- RELEASED ---
c.width|=0;for(i=6e3;i--;)Z=40+21*i%256,Y=99*i%2e7,F=40+99*(1-C(t))-Z,x.globalAlpha=.7/(1+F*F/1740),x.fillRect(9e4/Z,Y/Z,w=(900+F*F/15)/Z,w)
// Improved
c.width|=0;for(i=4e3;i--;)Z=40+21*i%256,Y=99*i%2e7,F=60+99*(1-C(t))-Z,x.globalAlpha=.7/(1+F*F/1500),x.fillRect(9e4/Z,Y/Z,w=(900+F*F/9)/Z,w)

// A Unicode raindrop:
x.fillText("💧"
// Unfortunately they don't blur as they should.  They just get larger.
t=(Date.now()-1507732695623)/3000;c.width|=0;for(i=1999;i--;)X=17393*i%514377,Z=40+(21*i+((23*i)^(i+17)))%512,Y=251917*(t/2+i)%813377-21217,F=80+220*(1-S(t))-Z,A=.7/(1+F*F/19e3),x.globalAlpha=A<0?0:A,w=(900+F*F/64)/Z,h=w*4,x.font=(w*6|0)+'px a',x.fillText("💧",X/Z-w/2,Y/Z-h/2)

// Sun
c.width|=0;x.beginPath();for(n=9;n>7;n--)for(a=6.28;a>0;a-=.02)d=100*S(a*n+t),r=500-Math.abs(d),x.lineTo(960+r*S(a),540+r*C(a));x.fill()
c.width|=0;x.beginPath();for(n=1e3;n>3;n/=2)for(a=6.28;a>0;a-=.02)d=300*S(a*n+t*8)*C(t+n),r=400-Math.abs(d),x.lineTo(960+r*S(a),540+r*C(a));x.stroke()
c.width=k=2e3;for(n=1e3;n>3;n/=2,x.fill())for(a=6.28,x.beginPath(x.fillStyle=R(k,n,0,.2));a>0;a-=.02)d=100*S(a*n+t*8)*C(t+n),r=400-Math.abs(d),x.lineTo(960+r*S(a),540+r*C(a))
c.width=k=2e3;for(n=1e3;n>3;n/=2,x.fill())for(a=6.28,x.beginPath(x.fillStyle=R(k,500-n,0,.1));a>0;a-=.02)d=100*S(a*n+t*8),r=400-Math.abs(d),x.lineTo(960+r*S(a),540+r*C(a))
c.width=k=2e3;for(n=1e3;n>3;n/=2,x.fill())for(a=6.28,x.beginPath(x.fillStyle=R(k,500-n,0,.1));a>0;a-=.02)d=300*S(a*n+t*8),r=500-Math.abs(d),x.lineTo(960+r*S(a),540+r*C(a))
x.fillStyle=R(120,220,256,0.1),x.fillRect(0,0,2e3,2e3);for(n=9;n<1e3;n*=2,x.fill())for(a=6.28,x.beginPath(x.fillStyle=R(k,500-n,0,.1));a>0;a-=.02)d=200*S(a*n+t*8),r=500-Math.abs(d),x.lineTo(960+r*S(a),540+r*C(a))
x.fillStyle=R(120,220,256,0.1),x.fillRect(0,0,2e3,2e3);for(n=9;n<1e3;n*=2,x.fill())for(a=6.28,x.beginPath(x.fillStyle=R(k,500-n,0,.1));a>0;a-=.03)d=300*S(a*n+t),r=500-Math.abs(d)*C(n+9*t),x.lineTo(960+r*S(a),540+r*C(a))

// Bouncing burger
c.width|=0;for(l=9;l--;f>0&&x.fillRect(960-(W=l&7?400:500),900-99*l-5*Math.abs(C(14*f))/f/f,2*W,70))x.fillStyle=`hsl(${93*l},99%,50%)`,f=t-l/18
c.width|=l=9;for(;l--;(f=t-l/18)>0&&x.fillRect(960-(W=l&7?500:600),900-99*l-5*(C(14*f)**2)**.3/f/f,2*W,90))x.fillStyle=`hsl(${93*l},99%,50%`
c.width|=l=7;for(;l--;(f=t/4-l/8)>0&&x.fillRect(960-450,960-99*l-5*(C(14*f)**2)**.3/f/f,900,90))x.fillStyle=`hsl(${47+999*l**1.3099},99%,50%`
// --- PUBLISHED --- Let the bun be the same size as the contents; search for better colors
c.width|=l=5;for(;l--;(f=t/2-l/9)>0&&x.fillRect(960-450,960-99*l-5*(C(11*f)**2)**.4/f/f,900,90))x.fillStyle=`hsl(${47+213*l**6&127},99%,50%`
// Double whopper
c.width|=l=9;for(;l--;(f=t/2-l/9)>0&&x.fillRect(960-450,960-99*l-5*(C(11*f)**2)**.4/f/f,900,90))x.fillStyle=`hsl(${47+95*l**6&127},99%,50%`

// Video play button from https://www.dwitter.net/d/5221
x.font="200px A";x.fillText("▶️",900,700);
// I should have used it for my Revision 2018 intro but I didn't

// BTW my revision logo dweet is here: https://www.dwitter.net/d/2474

// Dwitter out of dots, weird emergence
with(x){fillStyle='#0004',r=Math.random
for(i=5e3;i--;)fillRect(r()*1920,r()*1080,1,1)
fillStyle='#88888801',font='35em Q',fillText('Dwitter',90,750)}

// Glitchy ellipsoid
c.width|=0;for(i=-600;i++<600;)x.beginPath(),((i+500*t|0)%70)<30?x.ellipse(960,540-i,r=(1e5-i*i)**.5,r/9,0,0,7):0,x.stroke()
c.width|=0;for(i=-600;i++<600;)x.beginPath(),((i+500*T(t)|0)%120*C(t))<30?x.ellipse(960,540-i,r=(1e5-i*i)**.5,r/9,0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=i+500*t|0,k%900<450&&k%150<50?x.ellipse(300,300-i/2,r=(5e4-(i-300)**2)**.5,r/9,0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=i+500*t|0,k%1e3<400&&k%100<30?x.ellipse(300,300-i/2,r=(5e4-(i-300)**2)**.5/2,r/9,0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=i+500*(1+S(t))|0,k%900<450&&k%100<30?x.ellipse(300,300-i/2,r=(5e4-(i-300)**2)**.5/2,r/9,0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=99*t|i,k%150<50?x.ellipse(300,i/2,r=(5e4-(i-300)**2)**.5,r/4,0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=500*t|i,k%900<450&&k%150<50?x.ellipse(300,i/2,r=(5e4-(i-300)**2)**.5,r/t,0,0,7):0,x.stroke()
// Smoother
for(c.width=i=600;i--;)x.beginPath(),k=99*t+i|i,k%150<50?x.ellipse(300,i/2,r=(5e4-(i-300)**2)**.5,r/(5+5*S(t)),0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=i+500*t|(i/9),k%150<50?x.ellipse(300,300-i/2,r=(5e4-(i-300)**2)**.5,r/9,0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=99*t+i|i/9,k%150<50?x.ellipse(300,20+i/2,r=(5e4-(i-300)**2)**.5,r*(.3-.3*C(t/2)),0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=99*t+i|i/5,k%150<50?x.ellipse(300,20+i/2,r=(5e4-(i-300)**2)**.5,r*(.3-.3*C(t)),0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=99*t+i|i/9,k%150<50?x.ellipse(300,320-i/2,r=(5e4-(i-300)**2)**.5,.3*r*(1-C(t/2)),0,0,7):0,x.stroke()
for(c.width=i=600;i--;)x.beginPath(),k=200*t+i|i/8,k%150<50?x.ellipse(300,320-i/2,r=(5e4-(i-300)**2)**.5,r/3*(1-C(t/9)),0,0,7):0,x.stroke()
// Shorter but ugly line
for(c.width=i=600;i--;)k=200*t+i|i/8,k%150<50?x.ellipse(300,320-i/2,r=(5e4-(i-300)**2)**.5,r/3*(1-C(t/9)),0,0,7):0;x.stroke()
// Flowing upward
for(c.width=i=600;i--;)x.beginPath(),k=150*t+i|i/8,k%150<50?x.ellipse(300,20+i/2,r=(5e4-(i-300)**2)**.5,r/3*(1-C(t/9)),0,0,7):0,x.stroke()
// Flowing downward --- RELEASED --- https://www.dwitter.net/d/8516
for(c.width=i=600;i--;)x.beginPath(),k=150*t+i|i/8,k%150<50?x.ellipse(300,320-i/2,r=(5e4-(i-300)**2)**.5,r/3*(1-C(t/9)),0,0,7):0,x.stroke()
// Faster --- FAVOURITE ---
for(c.width=i=600;i--;)x.beginPath(),k=250*t-i|i/5,k%150<50?x.ellipse(300,20+i/2,r=(5e4-(i-300)**2)**.5,r/4*(1-C(t/4)),0,0,7):0,x.stroke()
// Very fast and glitchy --- RATHER FUN ---
for(c.width=i=600;i--;)x.beginPath(),k=250*t-i*C(t)/9|i/5,k%150<50?x.ellipse(300,20+i/2,r=(5e4-(i-300)**2)**.5,r/4*(1-C(t/4)),0,0,7):0,x.stroke()
// Using angle instead of altitude, and smaller, to avoid the Moire, but not quite, it just spreads it out evenly
for(c.width=i=600;i--;)x.beginPath(),k=250*t-i*C(t)/9|i/5,k%150<50?x.ellipse(300,160-100*C(a=i/191),r=160*S(a),r/4*(1-C(t/4)),0,0,7):0,x.stroke()
// Using angle, back to the "Faster" above --- SECOND FAVOURITE ---
for(c.width=i=600;i--;)x.beginPath(),k=250*t-i|i/5,k%150<50?x.ellipse(300,160-100*C(a=i/191),r=160*S(a),r/4*(1-C(t/4)),0,0,7):0,x.stroke()

// Emoji downtown
c.width=420;x.scale(25,25),i=0;for(j of '🏩🏡🏣💒🏤🏫🏥⛪🏨🏦🏢🏠🏬🏪')x.fillText(j,(10*i+++4*t)%140-70,9)
c.width=420;x.scale(25,25),i=0;for(j of '🏡🏣💒🏤🏫🏥⛪🏨🏦🗿🏢🏠🏬🏪')x.fillText(j,(10*i+++4*t)%140-70,9)
// Parallax?
c.width=520;i=0;for(k in 'abcdefg'){x.scale(1.5,1.5);for(j of '🏩🏡🏣💒🏤🏫🏥⛪🏨🏦🏢🏠🏬🏪')x.fillText(j,(12*i+++4*t)%140-70,16)}
// Still a gap on the right, but now hidden :-P
c.width=520;x.translate(0,250);i=0;for(k in 'abcdefg'){x.scale(1.5,1.5);for(j of '🏩🏡🏣💒🏤🏫🏥⛪🏨🏦🏢🏠🏬🏪')x.fillText(j,(12*i+++4*t)%140-70,1)}
// TODO: Every other layer could be vehicles, moving faster

// Birthday ballons for Sophie
c.width|=0;for(i=9;i--;x.fill())s=90+i*9,x.beginPath(),x.arc((375*i%2e3)+S(t+i)*s,1500-(3*s*t%2000),s,0,7),x.fillStyle=`hsl(${40*i} 99%60%`
c.width|=0;for(i=0;i++<20;x.fill())s=i*9,x.beginPath(),x.arc((9377*i%2e3)+S(t+i)*s,1500-(3*s*t%2000),s,0,7),x.fillStyle=`hsl(${97*i} 99%60%`
for(c.width|=i=0;i++<30;x.fill())x.beginPath(s=9+i*6),x.arc((9377*i%2e3)+S(t+i)*s,1500-(3*s*t%2000),s,0,7),x.fillStyle=`hsl(${97*i} 99%60%`
for(c.width|=i=0;i++<30;x.fill())x.beginPath(s=i*6),x.arc((9377*i%2e3)+S(t+i)*s,1500-(3*s*t%2000),s,0,7),x.fillStyle=`hsl(${97*i},99%,60%)`
// --- RELEASED ---
for(c.width|=i=0;i++<30;x.fill())x.beginPath(s=20+i*6),x.arc((23**i%2e3)+S(t+i)*s,1500-(3*s*t%2e3),s,0,7),x.fillStyle=`hsl(${79*i},90%,65%)`
// More and smaller
for(c.width|=i=0;i++<90;x.fill())x.beginPath(s=i**1.1),x.arc((19**i%2e3)+S(t+i)*s,1500-(3*s*t%2e3),s,0,7),x.fillStyle=`hsl(${79*i},90%,65%)`
// Experimenting with FRNG
for(c.width|=i=0;i++<80;x.fill())x.beginPath(s=9+i*2),x.arc((19**i%2e3)+S(t+i)*s,1500-(i*i+3*s*t)%2e3,s,0,7),x.fillStyle=`hsl(${57*i+t},90%,65%)`

// Pineapple
c.width|=0;x.rotate(.78);for(i=300;i--;)X=200*S(i)*S(.3+i/134),Y=i*1.3,U=X+Y,V=Y-X,x.fillRect(900+U,-500+V,20,20)
c.width|=0;x.rotate(.78);for(i=0;i++<100;)X=200*S(i*.6)*S(.6+i/64),Y=i*4,U=X+Y,V=Y-X,x.clearRect(900+U-2,-500+V-2,98,98),x.fillRect(900+U,-500+V,94,94)
// TODO Only print when C(angle) > 0

// Throwing waves (but we really need _^_ instead of /"\)
a='¸„.-•~¹°”ˆ˜¨',a+=[...a].reverse().join('')
throw [1,2,3,4].map(i=>[...a].map((c,j)=>a[(3*j/i+3*t*i|0)%a.length]).join('')).join('\n')
// More like hills from a train
a='¸„.-•~¹°”ˆ˜¨',a+=[...a].reverse().join('')
throw [3,4,6,8].map(i=>[...a].map((c,j)=>a[(3*j/i+3*t*i|0)%a.length]).join('')).join('\n')
//
a='¸„.-•~¹°”ˆ˜¨˜ˆ”°¹~•-.„',a+=[...a].join('')
throw [3,4,6,8].map(i=>[...a].map((c,j)=>a[(3*j/i+3*t*i|0)%a.length]).join('')).join('\n')
//
a='¸„.-•~¹°”ˆ˜¨˜ˆ”°¹~•-.„',a+=a+a
throw [3,4,6,8].map(i=>[...a].map((c,j)=>a[(3*j/i+3*t*i|0)%a.length]).join('')).join('\n')
// Tweak palette
a='¸_„.-•¹°”ˆ˜ˆ”°¹•-.„_¸',a+=a+a
throw [3,4,6,9].map(i=>[...a].map((c,j)=>a[(3*j/i+3*t*i|0)%a.length]).join('')).join('\n')
// --- RELEASED --- Waves: https://www.dwitter.net/d/9630
a='¸„.-”-.„¸',a+=a+a+a+a,a+=a
throw [3,4.5,6,9].map(i=>[...a].map((c,j)=>a[(3*j/i+6*t*i|0)%a.length]).join('')).join('\n')
// Add a little boat
a='¸„.-”-.„¸',a+=a+a+a+a,a+=a
e=[3,4.5,6,9].map(i=>[...a].map((c,j)=>a[(3*j/i+6*t*i|0)%a.length]).join(''))
e[0]=e[0].slice(0,63)+'⛵'+e[0].slice(63,-4)
throw e.join('\n')

// Tribute to https://twitter.com/beesandbombs/status/1037429260833746945 (176)
// Original source code: https://gist.github.com/beesandbombs/d1c009425a6ed52f62227905a1f7e585
x.fillRect(0,0,c.width=W=300,W);x.fillStyle='#fff'
for(k=W;k-=1;)T=6.3*k/W-t/9,a=5*T,d=20*S(T*4),R=t,r=40+20*S(T*2),X=r*S(a),Y=r*C(a),x.fillText('+',W/2+X*C(R)+d*S(R),W/3.5+Y)
// yonatan's golf (148)
x.fillRect(0,0,c.width=k=W=314,W)
for(x.fillStyle='#fff';k--;x.fillText('+',W/2+r*S(5*T)*C(t)+20*S(T*4)*S(t),86+r*C(5*T)))T=k/50-t/9,r=40+20*S(T*2)
// I dropped black background and added some greyscale (162)
for(c.width=k=W=314;k--;x.fillText('+',W/2+X*C(t)+d*S(t),86+r*C(5*T)))T=k/50-t/9,r=40+20*S(T*2),d=20*S(T*4),X=r*S(5*T),x.fillStyle=R(0,0,0,.7+(X*S(t)-d*C(t))/40)
// Tweak the numbers closer to the original (164)
for(c.width=k=W=314;k-=2;x.fillText('+',W/2+X*C(t)+d*S(t),86+r*C(4*T)))T=k/50-t/9,r=40+20*S(T*3),d=20*S(2+T*3),X=r*S(4*T),x.fillStyle=R(0,0,0,.8+(X*S(t)-d*C(t))/40)
// yonatan uses invert filter, to avoid fillRect and fillStyle! (133)
c.style.filter='invert(1)'
for(c.width=k=314;k--;x.fillText(7,157+r*S(5*T)*C(t)+20*S(T*4)*S(t),86+r*C(5*T)))T=k/50-t/9,r=40+20*S(T*2)
// Add the greyscale (187)
c.style.filter='invert(1)'
for(c.width=k=314;k-=2;x.fillText('+',157+X*C(t)+d*S(t),86+r*C(5*T)))T=k/50-t/9,r=40+20*S(T*2),X=r*S(5*T),d=20*S(T*4),x.fillStyle=R(0,0,0,.7+(X*S(t)-d*C(t))/40)
// Tweak the numbers closer to the original (189)
c.style.filter='invert(1)'
for(c.width=k=314;k-=2;x.fillText('+',157+X*C(t)+d*S(t),86+r*C(4*T)))T=k/50-t/9,r=40+20*S(T*3),X=r*S(4*T),d=20*S(2+T*3),x.fillStyle=R(0,0,0,.7+(X*S(t)-d*C(t))/40)
// Inline T (192)
//c.style.filter='invert(1)'
//for(c.width=k=316;k-=2;x.fillText('+',157+X*C(t)+d*S(t),86+r*C(k/12.5)))r=40+20*S(k/16.7),X=r*S(k/12.5),d=20*S(2+k/16.7),x.fillStyle=R(0,0,0,.7+(X*S(t)-d*C(t))/40)
// Golf by moving into variables inside R(), and use C() instead of S() for d (181)
c.style.filter='invert(1)';for(c.width=k=316;k-=2;x.fillText('+',157+X*C(t)+d*S(t),86+r*C(4*T)))T=k/50-t/9,x.fillStyle=R(r=40+20*S(T*3),X=r*S(4*T),d=20*C(T*3),.7+(X*S(t)-d*C(t))/50)
// yonatan's improved release: https://www.dwitter.net/d/9734
c.style.filter='invert(1';for(c.width=k=360;k-=2;x.fillText('+',180+U,99+S(p)/P))X=C(p=k/10+t),Y=C(q=k*.06)/2,U=Y*S(t)+X*C(t),V=X*S(t)-Y*C(t),U/=P=(1-V/3)/(2+S(q))/25,x.globalAlpha=++V
// Hue
c.style.filter='invert(1)';for(c.width=k=314;k--;x.fillRect(157+X*C(t)+d*S(t),86+r*C(4*T),9,9))T=k/50,x.fillStyle=`hsl(${k},99%,50%,.2)`,R(r=40+20*S(T*3),X=r*S(4*T),d=60*C(T*3))
// Try to emphasise depth with shading
c.style.filter='invert(1)';for(c.width=k=316;k--;x.fillRect(157+X*C(t)+d*S(t),86+r*C(4*T),4,4))T=k*t/200,x.fillStyle=R(r=40+20*S(T*3),X=r*S(4*T),d=40*C(T*3),.2+(X*S(t)-d*C(t))/400)
// Watch it draw itself
c.style.filter='invert(1)';for(c.width=k=316;k--;x.fillRect(157+X*C(t)+d*S(t),86+r*C(4*T),k/99,k/99))T=k/40+t,x.fillStyle=R(r=40+20*S(T*3),X=r*S(4*T),d=40*C(T*3),1+(X*S(t)-d*C(t))/80)
// --- RELEASED ---
c.style.filter='invert(1)';for(c.width=k=316;k--;x.fillRect(157+X*C(t)+d*S(t),86+r*C(4*T),s=k/50,s))T=k/40+t,x.fillStyle=R(r=40+20*S(T*3),X=r*S(4*T),d=60*C(T*3),.7+(X*S(t)-d*C(t))/99)
c.style.filter='invert(1)';for(c.width=k=316;k--;x.fillRect(157+X*C(t)+d*S(t),86+r*C(4*T),4,4))T=k*t/200,x.fillStyle=R(r=40+20*S(T*3),X=r*S(4*T),d=60*C(T*3),.7+(X*S(t)-d*C(t))/99)
c.style.filter='invert(1)';for(c.width=k=316;k--;x.fillText(0,157+1.2*X*C(t)+d*S(t),86+r*C(4*T)))T=k*t/200,x.fillStyle=R(r=40+20*S(T*3),X=r*S(4*T),d=60*C(T*3),.3+(X*S(t)-d*C(t))/200)
c.style.filter='invert(1)';for(c.width=k=316;k--;x.fillRect(157+1.5*X*C(t)+d*S(t),86+r*C(4*T),4,4))T=k*t/200,x.fillStyle=R(r=40+20*S(T*3),X=r*S(4*T),d=80*C(T*3),.3+(X*S(t)-d*C(t))/300)

// Zoom in on a sine wave, find out it's made of tiny sine waves.  Recurse.
// Really bad initial attempt:
c.width|=0
t=1+t%2
for(I=2e3;I--;)X=(I-960)/100,x.fillRect(I,480-300*C(X/t**3)-100*(t-1)*3/2*(C(X*9/t**2)-t),5,5)
