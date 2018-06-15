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

// Halloween dripping blood
X=40*Math.random();x.strokeStyle='#c00';x.lineCap='round';x.lineWidth=50;x.moveTo(50*X,0);x.lineTo(50*X,99);x.stroke()
t?0:T=[];X=40*Math.random()|0;x.fillStyle='#c00';x.beginPath();x.arc(50*X,T[X]=(T[X]||0)+15,30,0,7);x.fill()
t?0:T=[];for(i=4;i--;)X=40*Math.random()|0,x.beginPath(),x.arc(50*X,T[X]=(T[X]||0)+15,30,0,7),x.fillStyle='#c00',x.fill()
t?0:T=[];for(i=9;i--;)X=20*Math.random()|0,x.beginPath(),x.arc(99*X,T[X]=(T[X]||0)+5,50,0,7),x.fillStyle='#c00',x.fill()
t?0:T=[X=0];for(i=15;i--;)X=Math.random()*20|0,x.beginPath(),x.arc(99*X,T[X]=(T[X]||0)+2+S(X/t),50,0,7),x.fillStyle='#c00',x.fill()
// --- RELEASED --- Although the X=0 is not needed https://www.dwitter.net/d/3436
t?0:T=[X=0];for(X=20;X--;)x.beginPath(),x.arc(99*X,T[X]=(T[X]||0)+2+S(X*9+7*t/X),50,0,7),x.fillStyle='#c00',x.fill()
// My favourite, because it is slower
t?0:T=[];for(X=20;X--;)x.beginPath(),x.arc(99*X,T[X]=(T[X]||0)+1+S(X*9+8*t/(X+9)),50,0,7),x.fillStyle='#c00',x.fill()
t?0:T=[X=0];for(X=20;X--;)x.beginPath(),x.arc(99*X,T[X]=(T[X]||0)+2+S(X/2+t)+S(X*9+8*t/(X+9)),50,0,7),x.fillStyle='#c00',x.fill()
// Slowed down, but I can't decide on 2 or 3
t?0:T=[X=0];for(X=20;X--;)x.beginPath(),x.arc(99*X,T[X]=(T[X]||0)+(2+S(X/2+t/2)+S(X*9+4*t/(X+9)))/2,50,0,7),x.fillStyle='#c00',x.fill()
// I think this is my favourite because the streaks are/appear less regular
t?0:T=[X=0];for(X=20;X--;)x.beginPath(),x.arc(99*X,T[X]=(T[X]||0)+(2+S(X/2+t/2)+S(X*9+4*t/(X+9)))/3,50,0,7),x.fillStyle='#c00',x.fill()

// Halloween bat
for(X=700;X--;)U=400+99*(C((1+X/59)**.6)**2)**.5,V=800-X/9-99*(S(X/76)**2)**.5,x.fillRect(960+X,U,1,V-U),x.fillRect(960-X,U,1,V-U)
for(X=700;X--;)U=400+99*(C((1+X/59)**.6)**2)**.5,V=900-X/3-99*(S(X/76)**2)**.5,x.fillRect(960+X,U,1,V-U),x.fillRect(960-X,U,1,V-U)
for(X=700;X--;)U=400+99*S(Math.abs(-2+(X/35))**.6),V=900-X/3-99*(S(X/76)**2)**.5,x.fillRect(960+X,U,1,V-U),x.fillRect(960-X,U,1,V-U)
for(X=700;X--;)U=300+99*S(Math.abs(-2+(X/35))**.6)+X/1.8,V=900-X/3-99*(S(X/76)**2)**.5,x.fillRect(960+X,U,1,V-U),x.fillRect(960-X,U,1,V-U)
for(X=620;X--;)U=300+99*S(Math.abs(-2+(X/35))**.6)+X*X/999,V=900-X/3-99*(S(X/76)**2)**.5,x.fillRect(960+X,U,1,V-U),x.fillRect(960-X,U,1,V-U)
for(X=700;X--;)U=300+99*S(Math.abs(-2+(X/35))**.6)+(X/9)**1.3,V=900-X/2-99*(S(X/76)**2)**.5,x.fillRect(960+X,U,1,V-U),x.fillRect(960-X,U,1,V-U)
// Golfed by removing the two fillRects
for(X=-700;X<700;X++,x.fillRect(960+X,U,1,V))K=Math.abs(X),U=250+99*S(Math.abs(-2+(K/35))**.6)+(K/9)**1.3,V=850-K/2-99*(S(K/76)**2)**.5-U
// Animated
c.width|=0;for(X=-700;X<700;X++,x.fillRect(960+X,U+K*S(t)/3,1,V))K=Math.abs(X),U=250+99*S(Math.abs(-2+(K/35))**.6)+(K/9)**1.3,V=850-K/2-99*(S(K/76)**2)**.5-U
c.width|=0;for(X=-700;X<700;X++,x.fillRect(960+X*(1+.3*C(t)),U+K*S(t)/2,2,V))K=Math.abs(X),U=250+99*S(Math.abs(-2+(K/35))**.6)+(K/9)**1.3,V=850-K/2-99*(S(K/76)**2)**.5-U
// Same animation, but blinged up a bit
c.width|=0;for(X=-700;X<700;X++,x.fillRect(960+X*(1+.3*C(2*t)),U+(K-99)*S(2*t)/2,2,V))K=Math.abs(X),U=250+99*S(Math.abs(-2+(K/35))**.6)+(K/9)**1.3,V=850-K/2-99*(S(K/76)**2)**.5-U
// Released on codegolf
c.width|=0;for(X=-700;X<700;X++,x.fillRect(960+X*(1+.3*C(5*t)),U+(K-99)*(.3+S(5*t+.5))/2,2,V))K=Math.abs(X),U=250+99*S(Math.abs(-2+(K/35))**.6)+(K/9)**1.3,V=850-K/2-99*(S(K/76)**2)**.5-U
// Flatten the wings a bit at the bottom of the downstroke
c.width|=0;for(X=-700;X<700;X++,x.fillRect(960+X*(1+.3*C(2*t)),U+(K-150)*(.3+S(2*t+.5))/1.5,2,V))K=Math.abs(X),U=250+99*S(Math.abs(-2+(K/35))**.6)+(K/9)**1.3,V=850-K/2-(2-S(2*t+2))*35*(S(K/76)**2)**.5-U

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
