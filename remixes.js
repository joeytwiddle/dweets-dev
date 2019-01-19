// yonatan's beautiful mountains and sunshine: https://codegolf.tk/a/68
E=c.cloneNode()
E.width=128
E.height=71
F=E.getContext('2d')
g=F.createRadialGradient(64,35,0,64,35,99)
g[A='addColorStop'](.05,'#0C0804')
g[A](.1,'#080402')
g[A](.15,'#060302')
g[A](.3,'#030201')
g[A](1,'#000')
F[I='fillStyle']=g
F[r='fillRect'](0,0,128,71)
F[I]='#000'
w=c.width=512
c.height=284
x[I]=g=x.createLinearGradient(0,0,0,w/2)
g[A](0,'#2a3e55')
g[A](.7,'#8d4835')
x[r](0,0,w,w/2)
m=(f,j)=>[1721,947,547,233,73,31,7].reduce((a,v)=>a*j-S(f*v),0)
for(i=0;i<4;i++)
for(X=0,x[I]=`hsl(7,23%,${23-i*6}%`;X<w;X++)
x[r](X,U=150+i*25+m((t+t*i*i)*.05+X/2e3,-.5+i/19)*45,1,w),
F[r](X/4,U/4+1,1,w)
F[O='globalCompositeOperation']='lighter'
s=1.1
for(p=0;p<5;p++,s*=s)F.drawImage(E,(128-128*s)/2,(71-71*s)/2,128*s,71*s)
x[O]=F[O]
x.drawImage(E,0,0,512,284)

// iverjo's black and white tunnel https://www.dwitter.net/d/103
c.width=2e3;n=900;for(i=9;i++<n;)p=t+i/99,s=4/(9.1-p%9),x.beginPath(),x.lineWidth=s*s,x.arc(n,480+40*s*S(t),s*99,i,i+.9),x.stroke()
// Made the line widths adjust to compression
// Although very occasionally (every 40 rows) it goes wrong for some reason :-O
// The tiles at this point are not even spaced correctly.
// Ah I think this must be related to the transition at p%9
c.width=2e3;n=900;for(i=9;i++<n;)p=t+i/99,s=4/(9.1-p%9),x.beginPath(),x.lineWidth=s*s*(.9+.5*S(t)*S(i+.45)),x.arc(n,480+40*s*S(t),s*99,i,i+.9),x.stroke()
c.width=2e3;n=900;for(i=9;i++<n;)p=t+i/99,s=4/(9.1-p%9),x.beginPath(),x.lineWidth=s*s*(1.2+.5*S(t)*S(i+.45)),x.arc(n,480+40*s*S(t),s*99,i,i+.9),x.stroke()
c.width=2e3;n=900;for(i=9;i++<n;)p=t+i/99,s=4/(9.1-p%9),x.beginPath(),x.lineWidth=s*s*(1+S(t)*S(i+.45)/2),x.arc(n,480+40*s*S(t),s*99,i,i+.9),x.stroke()
// Minifying
c.width=2e3;n=900;for(i=9;i++<n;p=t+i/99,s=4/(9.1-p%9))x.beginPath(),x.lineWidth=s*s*(1+S(t)*S(i+.45)/2),x.arc(n,480+40*s*S(t),s*99,i,i+.9),x.stroke()
c.width=2e3;n=900;for(i=9;i++<n;s=4/(9.1-(t+i/99)%9))x.beginPath(),x.lineWidth=s*s*(1+S(t)*S(i+.45)/2),x.arc(n,480+40*s*S(t),s*99,i,i+.9),x.stroke()
c.width=2e3;for(i=9;i++<900;s=4/(9.1-(t+i/99)%9))x.beginPath(),x.lineWidth=s*s*(1+S(t)*S(i+.45)/2),x.arc(900,480+40*s*S(t),s*99,i,i+.9),x.stroke()
c.width|=0;for(i=9;i++<900;s=4/(9.1-(t+i/99)%9))x.beginPath(),x.lineWidth=s*s*(1+S(t)*S(i+.45)/2),x.arc(900,480+40*s*S(t),s*99,i,i+.9),x.stroke()
// POSTED



// cantelope's spiral /2355
x.save(),x.translate(960,540);for(i=99;i--;x.fillStyle=`hsl(${i*6+t*800},80%,90%`,x.fillRect(a=i*10,a,-a*2,-a*2),x.rotate(.775));x.restore()
// My remix
// With fewer boxes
x.save(),x.translate(960,540);for(i=69;i--;x.fillStyle=`hsl(${i*6-t*800},99%,60%`,x.fillRect(a=i*i/5,a,-a*2,-a*2),x.rotate(t/20));x.restore()
// With more boxes
x.save(),x.translate(960,540);for(i=95;i--;x.fillStyle=`hsl(${i*6-t*800},99%,60%`,x.fillRect(a=i*i/9,a,-a*2,-a*2),x.rotate(t/20));x.restore()
// This one works pretty nicely at home
x.save(),x.translate(960,540);for(i=95;i--;x.fillStyle=`hsl(${i*6-t*200},99%,60%`,x.fillRect(a=i*i/9,a,-a*2,-a*2),x.rotate(t/40));x.restore()
// --- CONSIDER --- Keep the scaling but drop the color rotation
x.save(),x.translate(960,540);for(i=95;i--;x.fillStyle=`hsl(${i*6-t*99},99%,60%`,x.fillRect(a=i*i/9,a,-a*2,-a*2),x.rotate(t/40));x.restore()
// Keep the rotation but drop the scaling
x.save(),x.translate(960,540);for(i=99;i--;x.fillStyle=`hsl(${i*6-t*800},99%,60%`,x.fillRect(a=i*10,a,-a*2,-a*2),x.rotate(t/20));x.restore()
// Is that too fast?
x.save(),x.translate(960,540);for(i=99;i--;x.fillStyle=`hsl(${i*6-t*800},99%,60%`,x.fillRect(a=i*10,a,-a*2,-a*2),x.rotate(t/20));x.restore()
// --- CONSIDER --- It is on my laptop anyway.  Let's try something gentler
x.save(),x.translate(960,540);for(i=99;i--;x.fillStyle=`hsl(${i*6-t*200},99%,60%`,x.fillRect(a=i*10,a,-a*2,-a*2),x.rotate(t/40));x.restore()
// --- CONSIDER --- Not too fast, not too slow
x.save(),x.translate(960,540);for(i=95;i--;x.fillStyle=`hsl(${i*6-t*99},99%,60%`,x.fillRect(a=i*i/9,a,-a*2,-a*2),x.rotate(t/5));x.restore()
// --- CONSIDER --- Let's send the colors inward?  (Still slowly going outwards)
x.save(),x.translate(960,540);for(i=95;i--;x.fillStyle=`hsl(${i*6-t*50},99%,60%`,x.fillRect(a=i*i/9,a,-a*2,-a*2),x.rotate(t/5));x.restore()
// Faster.  At the right speed, the colors and the spiral compete
// --- RELEASED --- https://www.dwitter.net/d/2623
x.save(),x.translate(960,540);for(i=95;i--;x.fillStyle=`hsl(${i*6-t*99},99%,60%`,x.fillRect(a=i*i/9,a,-a*2,-a*2),x.rotate(t/3));x.restore()
// Just throwing some random colours at it
x.save(),x.translate(960,540);for(i=95;i--;x.fillStyle=R(99*S(i+t),99*S(t/2),99*S(i)),x.fillRect(a=i*i/9,a,-a*2,-a*2),x.rotate(t/19));x.restore()

// I wanted the squares to gently move, but a=(i+t)**2/9 creates a big gap in the middle, so instead I needed to adjust the delta of the first square and the initial color.
didt=90
T=t*didt
f=T|0
d=T-f
x.save(),x.translate(960,540)
x.rotate(-f*t/10)
for(i=99;i--;x.fillStyle=`hsl(${i*6-6*f},99%,60%`,
x.fillRect(a=(i+d)*10,a,-a*2,-a*2),x.rotate(t/10));x.restore()
//x.fillRect(a=(i+d)**2/9,a,-a*2,-a*2),x.rotate(t/10));x.restore()


// eruonna's clock: https://www.dwitter.net/d/2489
// We can actually get it to tell the real time:
c.width|=0;[1440,60,1].map((h,i)=>{e=99*(3+i),f=(Date.now()/1e3%86400)*.105/h,x.moveTo(960,540),x.lineTo(960+e*S(f),540-e*C(f)),x.stroke()})
// Although New_Core already did that some time ago: https://www.dwitter.net/d/456
// BUG: New_Core's doesn't show the minute hand when the minutes are 00?!
// BUG: My remix (probably) shows GMT, but local would be better.
// BUG: The seconds are certainly different in my remix.  Perhaps %86400 does not account for leap seconds etc?

// New_Core's blue pulse zoom https://www.dwitter.net/d/508
// Original
x.beginPath();x.strokeStyle=R(0,a=255*(t%1),a);x.ellipse(960,540,b=99+9*S(a=t*9),b*.9,t,0,7),x.stroke();x.drawImage(c,-5,-3,1920+10,1080+6)
// My first tweak
x.beginPath();x.strokeStyle=R(0,a=255*(t%1),a);x.ellipse(960,540,b=99+2*S(t/2),b*.9,t,0,7),x.stroke();x.drawImage(c,-5,-3,1930,1086)
x.beginPath();x.strokeStyle=R(0,a=255*S(9*t),a);x.ellipse(960,540,b=89+2*S(t/2),b*.9,t,0,7),x.stroke();x.drawImage(c,-9,-5,1938,1090)
// Fun shapes (arms)
x.beginPath();x.strokeStyle=R(0,a=255*S(7*t),a);x.ellipse(960,540,b=49+2*S(t/2),b*.6,t,0,7),x.stroke();x.drawImage(c,-9,-4,1938,1088)
// Fun shapes (arms) bigger and better
x.beginPath();x.strokeStyle=R(0,a=255*S(7*t),a);x.ellipse(960,540,b=69+2*S(t/2),b*.6,t,0,7),x.stroke();x.drawImage(c,-9,-4,1938,1088)
// Rotating ellipses --- RELEASED ---
x.beginPath();x.strokeStyle=R(0,a=255*S(7*t),a);x.ellipse(960,540,b=79+2*S(t/2),b*.7,t/2,0,7),x.stroke();x.drawImage(c,-9,-4,1938,1088)
// Pointless deviation, but really shows the separation down the center lines
x.beginPath();x.strokeStyle=R(0,a=255*S(9*t),a);x.ellipse(960+4*S(t),540+4*C(t),b=19+2*S(t/2),b*.7,t/2,0,7),x.stroke();x.drawImage(c,-19,-9,1958,1098)
x.beginPath();x.strokeStyle=R(0,a=255*S(9*t),a);x.ellipse(960+9*S(t),540+9*C(t),b=19+2*S(t/2),b*.7,t/2,0,7),x.stroke();x.drawImage(c,-19,-9,1958,1098)
// Rotating ellipses, but now tunnel rotates too
x.beginPath();x.strokeStyle=R(0,a=255*S(7*t),a);x.ellipse(960,540,b=79+2*S(t/2),b*.7,t/2,0,7),x.stroke();x.drawImage(c,-9+.3*S(t/2),-4+.3*C(t/2),1938,1088)
// The release, but using fill instead of stroke.  Shorter, and looks better.
x.beginPath();x.fillStyle=R(0,a=255*S(7*t),a);x.ellipse(960,540,b=79+2*S(t/2),b*.7,t/2,0,7),x.fill();x.drawImage(c,-9,-4,1938,1088)

// keithclark's cube of dots https://www.dwitter.net/d/2561
for(a=c.width|=l=C(t),m=S(t);a=a-.7,a>0;x.fillRect((d*l-e*m)*h+960,(g*l-f*m)*h+520,h/=80,h))d=S(a*92),e=S(a),f=C(a*t/2e3),g=d*m+e*l,h=800/(3+g*m+f*l)
for(a=c.width|=l=C(t),m=S(t);a=a-.7,a>0;x.fillRect((d*l-e*m)*h+960,(g*l-f*m)*h+520,h/=80,h))d=S(a*9),e=S(a),f=C(a*t/2e3),g=d*m+e*l,h=800/(3+g*m+f*l)

// Riley's ball
r=540
p=3.14
x.strokeStyle=R(0,0,0,.15)
x.stroke()
n=Math.random()
n<.1&&x.beginPath()
//n=1.3+C(n*p)
n=2*n-1
n=.3+n**3
x.lineTo(960+C(n*p)*r,r+S(n*p)*r)

// donbright's purple glow: https://www.dwitter.net/d/2723
x.fillStyle=R()
x.fillRect(0,0,2e3,2e3)
for(b=260;b-=20;){
x.shadowBlur=b/4
x.shadowColor=R(255,200-b*2,255)
x.fillStyle='white'
for(i=9;i--;)x.fillRect(400+i*100+S(t)*300,400,50,200)
}
//
x.fillStyle=R()
x.fillRect(0,0,2e3,2e3)
for(b=260;b-=20;){
x.shadowBlur=b/3
x.shadowColor=R(255,260-b**1.5,255)
x.fillStyle='white'
for(i=9;i--;)x.fillRect(400+i*100+S(t)*300,400,50,200)
}
//
x.fillStyle=R()
x.fillRect(0,0,2e3,2e3)
for(b=260;b-=10;){
x.shadowBlur=b/4
x.shadowColor=R(255,260-b**1.1,255)
x.fillStyle='white'
for(i=9;i--;)x.fillRect(400+i*100+S(t)*300,400,50,200)
}
//
x.fillStyle=R()
x.fillRect(0,0,2e3,2e3)
for(b=880;b-=80;){
x.shadowBlur=b/4
x.shadowColor=`hsl(300,99%,${100-b/12}%`
x.fillStyle='white'
for(i=9;i--;)x.fillRect(400+i*100+S(t)*300,400,50,200)
}
//
x.fillStyle=R()
x.fillRect(0,0,2e3,2e3)
for(b=1280;b-=160;){
x.shadowBlur=b/4
x.shadowColor=`hsl(300,99%,${100-b/16}%`
x.fillStyle='#fff'
for(i=9;i--;)x.fillRect(400+i*100+S(t)*300,400,50,200)
}
//
x.fillStyle=R()
x.fillRect(0,0,2e3,2e3)
for(b=8;b--;){
x.shadowBlur=b*40
x.shadowColor=`hsl(300,99%,${100-2*b**2}%`
x.fillStyle='#fff'
for(i=9;i--;)x.fillRect(400+i*100+S(t)*300,400,50,200)
}
//
x.fillStyle=R()
x.fillRect(0,0,2e3,2e3)
for(b=8;b--;){
x.shadowBlur=b*20
x.shadowColor=`hsl(300,99%,${100-b*8}%`
x.fillStyle='#fff'
for(i=9;i--;)x.fillRect(400+i*100+S(t)*300,400,50,200)
}
// Trying to golf now
x.fillStyle=R()
x.fillRect(0,0,2e3,2e3)
for(j=72;j--;){
x.shadowBlur=2*j
x.fillStyle=x.shadowColor=`hsl(300,99%,${110-j}%`
x.fillRect(400+(j%9)*100+S(t)*300,400,50,200)
}
//
x.fillRect(0,0,c.width=500,300)
for(j=72;j--;){
x.shadowBlur=j/2
x.fillStyle=x.shadowColor=`hsl(300,99%,${110-j}%`
x.fillRect(99+(j%9)*25+S(t)*75,99,11,50)
}
// 149
x.fillRect(0,0,c.width=500,300)
for(j=72;x.shadowBlur=j--/2;)x.fillStyle=x.shadowColor=`hsl(300 99%${110-j}%`,x.fillRect(140+j%9*25+S(t)*75,99,11,50)
// Notable: https://www.dwitter.net/d/9628
// Remove the motion, and we can fit in 140:
// --- GOOD ---
x.fillRect(0,0,c.width=500,300);for(j=72;x.shadowBlur=j--/2;x.fillRect(150+j%9*25,99,11,50))x.fillStyle=x.shadowColor=`hsl(300 99%${110-j}%`
x.fillRect(0,0,c.width=500,300);for(j=72;x.shadowBlur=j--/2;x.fillRect(150+j%9*25+75*S(t),99,11,50))x.fillStyle=x.shadowColor=`hsl(300 99%${110-j}%`
x.fillRect(0,0,c.width=500,300);for(j=72;x.shadowBlur=j--/2;x.fillRect(j%9*25*T(t),99,11,50))x.fillStyle=x.shadowColor=`hsl(300 99%${110-j}%`
for(c.width=550,j=73;p=j<73,x.shadowBlur=j--/2;x.fillStyle=x.shadowColor=`hsl(300 99%${110-j}%`)x.fillRect(p*(150+j%9*25+75*S(t)),p*99,p?11:2e3,p?50:2e3)
for(c.width=j=73;p=j<73,x.shadowBlur=j--/6;x.fillStyle=x.shadowColor=`hsl(300 99%${110-j}%`)x.fillRect(p*(j%9*6+9*S(t)),p*9,p?2:99,p?9:99)
for(c.width=j=99;p=j<99,x.shadowBlur=j--/6;x.fillStyle=x.shadowColor=`hsl(300 99%${110-j}%`)x.fillRect(p*(j%9*8+9*S(t)),p*9,p?3:99,p?15:99)
for(c.width=j=99;p=j<99,x.shadowBlur=j--/6;x.fillStyle=x.shadowColor=`hsl(300 99%${110-j}%`)x.fillRect(p*(9+j%9*8+T(t)),p*9,p?3:99,p?15:99)
// Oh duh!  We can use R() instead of hsl()
for(c.width=j=99;p=j<99,x.shadowBlur=j--/6;x.fillStyle=x.shadowColor=R(255,400-j*9,255))x.fillRect(p*(j%9*8+9*S(t)),p*9,p?3:99,p?15:99)
x.fillRect(0,0,c.width=500,300);for(j=72;x.shadowBlur=j--/2;x.fillRect(150+j%9*25+75*S(t),99,11,50))x.fillStyle=x.shadowColor=R(255,400-9*j,255)
for(c.width=j=W=300;p=j<W,x.shadowBlur=j--/9;x.fillStyle=x.shadowColor=R(255,400-j*9,255))x.fillRect(p*(j%9*16+90+40*S(t)),p*59,p?7:W,p?25:W)
// In fact we can use R(W,_,W)
x.fillRect(0,0,W=c.width=500,W);for(j=72;x.shadowBlur=j--;x.fillRect(150+j%9*25+75*S(t),99,11,50))x.fillStyle=x.shadowColor=R(W,W-15*j,W)
x.fillRect(0,0,W=c.width=500,W);for(j=72;x.shadowBlur=j--*2;x.fillRect(150+j%9*25+75*S(t),99,11,50))x.fillStyle=x.shadowColor=R(W,W-20*j,W)
x.fillRect(0,0,W=c.width=500,W);for(j=72;x.shadowBlur=j--;x.fillRect(150+j%9*25+75*S(t),99,9,48))x.fillStyle=x.shadowColor=R(W,W-15*j,W)
// --- RELEASED --- https://www.dwitter.net/d/9639
x.fillRect(0,0,W=c.width=500,W);for(j=72;x.shadowBlur=j--/2;x.fillRect(150+j%9*25+75*S(t),99,9,50))x.fillStyle=x.shadowColor=R(W,W-15*j,W)
// Blur changes with time
x.fillRect(0,0,W=c.width=500,W);for(j=72;x.shadowBlur=j--/t;x.fillRect(150+j%9*25+75*S(t),99,11,50))x.fillStyle=x.shadowColor=R(W,W-15*j,W)
x.fillRect(0,0,W=c.width=500,W);for(j=72;x.shadowBlur=j--*S(t);x.fillRect(150+j%9*25+75*S(t),99,11,50))x.fillStyle=x.shadowColor=R(W,W-15*j,W)
x.fillRect(0,0,W=c.width=500,W);for(j=99;x.shadowBlur=j--*T(t);x.fillRect(150+j%9*25+75*S(t),99,9,50))x.fillStyle=x.shadowColor=R(W,W-9*j,W)

// donbright's blurred boxes, now moving "randomly" and merging
x.fillRect(0,0,W=c.width=500,W);for(j=72;x.shadowBlur=j--*5;x.fillRect(240+75*T(t+j%9),99+99*T(t-j%9*3),50,50))x.fillStyle=x.shadowColor=R(W,W-15*j,W)
// A bit heavy, but shorter
x.fillRect(0,0,W=c.width=99,W);for(H=j=288;x.shadowBlur=j--/4;x.fillRect(7*T(t+j%9),9*T(t-j%9*3),5,5))x.fillStyle=x.shadowColor=R(H,H-j,H)
// === RELEASED === Reduxing "The alien deployment" or "the night the visitors arrived" or "the night they came" or "the night they arrived" or "the night it began" or "this looks a bit like an alien invasion"
x.fillRect(0,0,W=c.width=99,W);for(H=j=288;x.shadowBlur=j--/4;x.fillRect(9*T(j%9+t),7*T(t-j%9),5,5))x.fillStyle=x.shadowColor=R(H-j,H,H)
// With yonatan's golfing we can make the paths a bit more random
for(p in x)this[p[0]+p[6]]=p
x[fc](0,0,W=c.width=99,W);for(H=j=288;x[sB]=j--/4;x[fc](9*T(k/.9),7*T(k/.7),5,5))x[fy]=x[sC]=R(H-j,H,H),k=j%9+t

// TODO: Can we use shadow blur and threshold to make plasma?

// Black and white circle by PeCaN ("anti-pattern") https://www.dwitter.net/d/1699
// The original could be directed by mouse, but I was experimenting with automatic patterns
t||x.translate(960,540,X=540,0);X=500-t;x.rotate(.1),x.fillStyle=R(k=300*C(t*X),k,k),x.fillRect(X*C(t),X*S(t),50,50)
t||x.translate(960,540,X=540,0);X=500-t*5;x.rotate(.1),x.fillStyle=R(k=300*C(t*X),k,k),x.fillRect(X*C(t),X*S(t),50,50)
t||x.translate(960,540,X=540,0);X=500-t*5;x.fillStyle=R(k=300*C(t*X),k,k),x.fillRect(X*C(t),X*S(t),50,50)
// If you don't want the square to wobble in and out so much (this one was not so interesting to me)
t||x.translate(960,540,X=540,0);X=500-t*5;x.rotate(.1),x.fillStyle=R(k=300*C(t*X),k,k),x.fillRect(X*C(t)-25,X*S(t)-25,50,50)
// A similar dweet
r=_=>Math.random()*255;x.rotate(t/10);x.shadowBlur=r();x.shadowColor=R();x.fillStyle=`hsl(${r()},100%,50%)`,x.fillRect(t*20,t*20,50,50)

// Wobbly ellipse causes moire.  (Mine, not a remix)
// === PUBLISHED ===
r=Math.random
t%10<.3&&(c.width|=0,U=r(),V=r())
x.beginPath()
k=p=>1+S(p*t)
x.ellipse(960+300*S(t),540,300*k(U),200*k(V),t,0,7)
x.stroke()

// An excellent bouncing ball, with compresion: https://www.dwitter.net/d/244

// NewCore's bouncing ball https://www.dwitter.net/d/2754
t?c.width|=0:d=a=y=0;y+=9*a;a-=.01;b=y<1?-20*a:20*a+20;y<0?(y=0,b>29?a=1:T):T;x.ellipse(960,840-y,b*C(t*9)+200,b*S(t*9)+200,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=1;y+=9*a;a-=.01;y<0?(y=-1,b=-20*a,b>29?a=y=1:T):b=20*a+20;x.ellipse(960,840-y,b*C(t*9)+200,b*S(t*9)+200,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=1;y+=9*a;a-=.01;y<0?(y=0,b=-20*a,b>29?a=y=1:T):b=20*a+20;h=b*S(t*9);x.ellipse(960,840-y-(y>0?0:h),200+b*C(t*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=1;y+=9*a;a-=.01;y<0?(y=0,b=-20*a,T||(T=t),b>29?(a=y=1,T=0):T):b=20*a+20;l=t-T;h=b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*C(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=1;y+=9*a;a-=.01;y<0?(y=0,b=-20*a,T||(T=t),b>29?(a=y=1,T=0):T):b=20*a+20;l=t-T-1.57;h=b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*C(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T-.087;y+=9*a;a-=.01;y<0?(y=0,b=40,T?l>1.5?(a=y=1,T=0):u:T=t):b=20*a+20;h=b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*C(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T-.087;y+=9*a;a-=.01;y<0?(T||(T=t),l=.087+t-T,y=0,b=40,l>.43?(a=y=1,T=0):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<0?(F||(F=T=t),l=.087+t-T,y=0,b=40,l>.43?(a=1,y=28,F=0):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<-28?(F||(F=T=t),l=.087+t-T,y=-28,b=40,l>.43?(a=1,y=28,F=0):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<-28?(F||(F=T=t),l=.087+(t-T)/2,y=-28,b=40,l>.43?(a=1,y=28,F=0,T+=(t-T)/2):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill();
// Presumably it should slow down in the depth of the squash, but not at the beginning or end of the squash
// Correction for smooth landing and take-off
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<-28?(F||(F=T=t),l=.0+(t-T)/2,y=-28,b=40,l>.43?(a=1,y=1,F=0,T+=(t-T)/2):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill()
// Squish at 1x speed
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<-28?(F||(F=T=t),l=.0+t-T,y=-28,b=40,l>.43?(a=1,y=1,F=0,T+=0):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill()

// Grapher https://www.dwitter.net/d/2760
// My remix
t?x.F(~x.F(K,9,9),--X+50,110+-eval(K+" "+~0)):(X=K="",x.F=x.fillText,onkeydown=e=>/[\--9XYS()+*]$/.test(A=e.key)&&(K+=A)+(X=c.width=200))

// Xen's blood https://www.dwitter.net/d/3199
t?X.push([9e99/t%2e3,2]):X=[];for(i=X.length;i--;x.fill())x.beginPath(x.fillStyle=R(X[i][1]/6)),x.arc(X[i][0]-=T(i),k=X[i][1]*=1.02,k/4,0,7)

// Lurifax's waves https://www.dwitter.net/d/3209
for(i=c.width=480;--i;){for(j=9,d=4;j--;){y=S(j+d*t+i/99*(1+j))*30/j+125+15*j;x.fillStyle=R(0,j*16+96,S(t)*32+200);x.fillRect(i,350-y,1,y);d=-d}}
for(i=c.width=480;--i;){for(j=9,d=4;j--;){y=50+15*j+30/j*S(d*t/j+i/99*(1+j));x.fillStyle=R(0,j*16+96,200);x.fillRect(i,300-y,1,y);d=-d}}
for(i=c.width=480;--i;){for(j=9,d=4;j--;){z=1+j;y=50+15*j+30/j*S(d*t/z+i/99*z);x.fillStyle=R(0,j*16+96,200);x.fillRect(i,300-y,1,y);d=-d}}
// Getting too complicated
for(i=c.width=480;--i;){for(j=9,d=4;j--;){z=1/(10-j)*9;y=50+15*j+30/j*S(d*t/z+i/99*z);x.fillStyle=R(0,j*16+96,200);x.fillRect(i,300-y,1,y);d=-d}}
for(i=c.width=480;--i;){for(j=9,d=4;j--;){y=20+20*j-30/j*S(k=d*t/j+i/199*j)*S(k/2);x.fillStyle=R(0,j*16+96,200);x.fillRect(i,300-y,1,y);d=-d}}
t*=4;for(i=c.width=480;--i;){for(j=9,d=4;j--;){z=j;y=50+15*j-30/j*Math.abs(S(d*t/z+i/49*z));x.fillStyle=R(0,j*16+96,200);x.fillRect(i,300-y,1,y);d=-d}}
// --- FAVOURITE --- simplifying again
for(i=c.width=480;--i;){for(j=9,d=4;j--;){y=20+20*j+30/j*S(d*t/j+i/199*j);x.fillStyle=R(0,j*16+96,200);x.fillRect(i,300-y,1,y);d=-d}}
for(i=c.width=480;--i;){for(j=9,d=4;j--;){y=30*j**.8+30/j*S(d*t/j+i/199*j);x.fillStyle=R(0,j*16+96,200);x.fillRect(i,300-y,1,y);d=-d}}
for(i=c.width=480;--i;){for(j=9,d=7;j-->2;){y=40*j**.7+30/j*S(d*t/j+i/250*j);x.fillStyle=R(0,70+j*16,200);x.fillRect(i,300-y,1,y);d=-d}}
// --- PUBLISHED ---
for(i=c.width=480;--i;){for(j=8,d=7;j-->2;){y=40*j**.7+30/j*S(d*t/j+i/250*j);x.fillStyle=R(0,70+j*16,200);x.fillRect(i,300-y,1,y);d=-d}}
// Trying for a full horizon
for(i=c.width=480;--i;){for(j=16,d=7;j-->4;){y=200-600/j+30/j*S(4*d*t+i/950*j**2);x.fillStyle=R(0,20+j*12,200);x.fillRect(i,300-y,1,y);d=-d}}
t*=4;for(i=c.width=480;--i;){for(j=20,d=7;j-->4;){y=200-600/j+30/j*S((19/j%5-3)*d*t+i/950*j**2);x.fillStyle=R(0,20+j*12,200);x.fillRect(i,300-y,1,y);d=-d}}
t*=4;for(i=c.width=480;--i;){for(j=20,d=7;j-->4;){y=200-600/j+30/j*S((19/j%5-3)*d*t+i/950*j*9);x.fillStyle=R(0,20+j*12,200);x.fillRect(i,300-y,1,y);d=-d}}
t*=14;for(i=c.width=480;--i;){for(j=30;(j=j-2)>2;){y=220-600/j+30/j*S((11.1*j%5-3)*t+i/1950*j*j);x.fillStyle=R(0,20+j*9,200);x.fillRect(i,300-y,1,y)}}
// Adding sun twinkles
for(i=c.width=480;--i;){for(j=8,d=7;j-->2;){y=40*j**.7+30/j*S(d*t/j+i/250*j);x.fillStyle=Math.abs(i-240)**.3<4*Math.random()?'#fff':R(0,70+j*16,200);x.fillRect(i,300-y,1,y);d=-d}}

// Lurifax's spirograph https://www.dwitter.net/d/3194
for(i=2e3;i--;x.fillStyle=R(C(t)*128+128,0,C(i)*128+128,.07))x.fillRect(960+S(p=i/314)*(d=250+S(p*3+C(t))*(S(t)*99)*C(t)*4),540+C(p)*d,9,9)
// Stripey
for(i=500;i--;x.fillStyle=R(C(t)*128+128,0,C(i)*128+128,.07))x.fillRect(960+S(p=i/78)*(d=250+S(p*3+C(t))*(S(t)*99)*C(t)*4),540+C(p)*d,9,9)
// Separate lines
for(i=500;i--;x.fillStyle=R(C(t)*128+128,0,C(i)*128+128,.07))x.fillRect(960+S(p=i/7)*(d=250+S(p*3+C(t))*(S(t)*99)*C(t)*4),540+C(p)*d,9,9)
// Spinning plot points
for(i=500;i--;x.fillStyle=R(C(t)*128+128,0,C(i)*128+128,.07))x.fillRect(960+S(p=i/7+C(t))*(d=250+S(p*3+C(t))*(S(t)*99)*C(t)*4),540+C(p)*d,9,9)

// Jeff suggested I remix Nova to make it more like fire https://www.dwitter.net/d/2815
x.fillStyle=R(k=260,k,k,.05)
x.fillRect(0,0,2e3,1e3)
x.fillStyle=`hsl(${30+10*S(4*t)},99%,50%)`
x.font='480px s'
x.fillText('JEFIR',k,700)
x.drawImage(c,3*S(5*t+3*C(t)),-4)
// Improved a little
x.fillStyle=R(k=260,k,k,.05)
x.fillRect(0,0,2e3,1e3)
x.fillStyle=`hsl(${30+10*S(4*t)},99%,50%)`
x.font='480px s'
x.fillText('FIRE',1.5*k,999)
x.drawImage(c,2*S(5.5*t)+2*C(t*3.3)+2*C(t*4.4),-7)

// sigsevb also tried to do fire: https://www.dwitter.net/d/623
// I tweaked it only as an experiment:
x.fillStyle=R(55,22,11);x.globalCompositeOperation=t*40&1?'lighter':'source-over';x.fillText(x.font='400px FIRE',0,999);x.drawImage(c,S(t*9),-9)

// Changed the shading of the red spheres on: https://www.dwitter.net/d/1468
r=Math.random
i=t&&i<240?i+6:(X=r()*1920,Y=r()*1080,0)
with(x)beginPath(),fillStyle=R(20+i),arc(X-i/2,Y-i/2,280-i,0,6.28),fill()

// yonatan's warp https://www.dwitter.net/d/2806
// Made it a bit more eye-like
c.width=128;for(J=X=64;X>-J;X--)for(K=Y=32;Y>-K;Y--)D=(X*X+Y*Y)**.5,x.fillStyle=`hsl(${D-t*99^T(X/Y+t)},50%,${D^(t%J)}%`,x.fillRect(X+J,Y+K,1,1)

// mmastrac's raindrops: https://www.dwitter.net/d/3282
for(c.width|=i=d=1920;z=i+250,i-=2;x.fillText("💧",d*T(z/17),(i+(t+(5*D|0)*C(i+t))*D*5e3)%2e3))x.globalAlpha=D=d/(d+(z*i)%8e4),x.font=999*D+'px a'

// artfarnaa's Mandala https://www.dwitter.net/d/3300
// He requested colour
for(c.width|=a=441;--a;)x.fillStyle=`hsl(${99*a+99*t},99%,50%`,x.beginPath(),x.moveTo(G=a/2|0,0),x.arc(960+S(t+G*1)*238,540+C(t+G)*238,a%4*274*Math.abs(C(t/3)*S(t/2)),0,8),x.globalCompositeOperation='xor',x.fill()
for(c.width|=a=441;--a;)x.fillStyle=`hsl(${33*a},99%,50%`,x.beginPath(),x.moveTo(G=a/2|0,0),x.arc(960+S(t+G*1)*238,540+C(t+G)*238,a%4*274*Math.abs(C(t/3)*S(t/2)),0,8),x.globalCompositeOperation='xor',x.fill()

// Remix of https://www.dwitter.net/d/2877
// Goes a bit foobar later on
x.globalAlpha=1;for(j=0;j<400;j+=40)(w=l=>{for(i=0,R=4*l-t*99,r=l/2,b=R-r;i<7;i+=0.01){q=(n)=>b*n(i)+(S(t*5)*r*n(-b/r*i));x.clearRect(980+q(C),540+q(S),4,4)}})(j);x.globalAlpha=0.1;x.fillRect(0,0,1920,1080)

// iverjo's PacMan
i=W=c.width=960;for(;X=250*t%W,i>X;i-=190)x.beginPath(),x.arc(X,200,40,G=.3-.3*S(X/29),3.14+G),x.fill(),x.fillRect(i,190,20,20)
W=c.width=960;for(i=5;i--;)x.beginPath(),x.arc(X=250*t%W,200,40,G=.3-.3*S(X/29),3.14+G),x.fill(),x.fillRect(i>X/190?190*i:999,190,20,20)
i=W=c.width=960;for(X=250*t%W;k=i>900?+1:-1,i>X;i-=190)x.beginPath(),x.arc(X,200,40,G=1.5+1.4*k*S(X/66),G-3.14),x.fill(),x.fillRect(i,190,20,20)

// Remixing cantelope's sphere https://www.dwitter.net/d/3519
// Short
for(R=Math.random,w=960,i=w*4;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.2
// Greyscale
for(R=Math.random,i=w=960,x.globalAlpha=.03;i--;x.fillRect(w+S(p=w*R())/Z*w,540+C(p)/Z*w,1,1))Z=1.8/R()**.25
// Slow smooth grey
for(R=Math.random,i=w=960,x.globalAlpha=.03;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
// Fast smooth grey
for(R=Math.random,w=960,i=w*4,x.globalAlpha=.01;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
// Faster smooth grey --- RELEASED ---
for(R=Math.random,w=960,i=w*4,x.globalAlpha=.05;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
// Formed with a spiral, just for fun
for(R=Math.random,w=960,i=w*4,x.globalAlpha=.2;i--;x.fillRect(w+S(p=w*r+t)*Z*w,540+C(p)*Z*w,1,1))r=R(),Z=5/9*r**.3
for(R=Math.random,w=960,i=w*4,x.globalAlpha=.2;i--;x.fillRect(w+S(p=w*r/150+t)*Z*w,540+C(p)*Z*w,1,1))r=R(),Z=5/9*r**.3
// Random color dots
x.fillStyle=`hsla(${9*t},99%,50%,.1`;for(R=Math.random,i=w=960;i--;x.fillRect(w+S(p=w*R())*S(q)/Z*w,540+C(p)*S(q)/Z*w,1,1))Z=1.8/R()**.25
for(R=Math.random,i=w=960;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,3,3,x.fillStyle=`hsla(${99*T(p+t+Z)},99%,50%,.3`))r=R(),Z=5/9*r**.3
for(R=Math.random,i=w=960;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,3,3,x.fillStyle=`hsla(${99*T(p+Z+t/9)},99%,50%,.3`))Z=5/9*R()**.3
for(R=Math.random,i=w=960;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1,x.fillStyle=`hsla(${99*T(p+Z*9+t/99)},99%,30%,.3`))Z=5/9*R()**.3
// Spiral lollipop
for(R=Math.random,i=w=960;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,3,3,x.fillStyle=`hsla(${99*T(p+4*Z+t/39)},80%,30%,.03`))Z=5/9*R()**.3
for(R=Math.random,i=w=960;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,5,5,x.fillStyle=`hsla(${99*T(p*2+Z*9-t/2)},99%,65%,.6`))Z=5/9*R()**.5
// Pulsing spiral
for(R=Math.random,i=w=960;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,5,5,x.fillStyle=`hsl(${99*T(p+T(3*Z-t)/6)},99%,65%`))Z=5/9*R()**.5
// Drawn the glitchy way
for(i=w=960;i--;x.fillRect(w+S(p=i*t)*Z*w,540+C(p)*Z*w,5,5,x.fillStyle=`hsl(${99*T(p+T(3*Z-t)/6)},99%,65%`))Z=5/9*(i/w)**.5
// Phasing spiral
for(i=w=960;i--;x.fillRect(w+S(p=t+i)*Z*w,540+C(p)*Z*w,5,5,x.fillStyle=`hsl(${99*T(p+T(3*Z-t)/6)},99%,65%`))Z=5/9*(i/w)**.5
// Feathery
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,5,5,x.fillStyle=`hsl(${99*T(p+T(3*Z-t)/6)},99%,65%`))Z=5/9*((t+i/w)%4)**.5

// Nice feathery
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,9,9,x.fillStyle=`hsl(${99*T(p+T(Z-2*t)/6)},99%,65%`))Z=5/9*((t+i/w)%4)
// Grow the brush with radius.  Still some funny bits.
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,r,r,x.fillStyle=`hsl(${99*T(p+T(Z-2*t)/6)},99%,65%`))Z=5/9*((t+i/w)%4),r=w*Z/20
// Greyscale chaos
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,r,r,x.fillStyle=`hsl(0,0%,${90*Math.abs(T(p+T(Z-2*t)/6))}%`))Z=5/9*((t+i/w)%4),r=9

// Nice simple
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,5,5,x.fillStyle=`hsl(${99*T(p+T(Z-t)/6)},99%,65%`))Z=5/9*((t/2+i)%1)
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,9,9,x.fillStyle=`hsl(${99*T(p+1*T(3*Z-t)/6)},99%,65%`))Z=5/9*((t+i/17)%1)
// The funky splosion
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(${99*T(p+T(4*Z-t)/6)},99%,65%`))Z=((t+i)%4)**.5/2
// Filling the screen
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(${99*T(p+T(4*Z-t)/6)},99%,65%`))Z=((.7*t+i)%4)**.5/2
// --- RELEASED ---
for(i=w=960;i--;x.fillRect(w+S(p=i+t/9)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(${99*T(p+T(4*Z-t)/6)},99%,65%`))Z=((.73*t+i)%4)**.5*.6
// Greyscale version
for(i=w=960;i--;x.fillRect(w+S(p=i+t/9)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(0,0%,${40+30*C(3*p+T(5*Z-3*t))}%`))Z=((.73*t+i)%4)**.5*.6
// And with colour cycling (a bit yucky)
for(i=w=960;i--;x.fillRect(w+S(p=i+t/9)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(${24+9*t},40%,${50+30*C(3*p+T(5*Z-3*t))}%`))Z=((.73*t+i)%4)**.5*.6
for(i=w=960;i--;x.fillRect(w+S(p=i+t/9)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(${24+39*t},99%,${70+10*C(3*p+T(5*Z-3*t))}%`))Z=((.73*t+i)%4)**.5*.6
// Linear growth (no longer exploding)
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(${99*T(p+T(4*Z-t)/6)},99%,65%`))Z=((t+i)%4)/3
for(i=w=960;i--;x.fillRect(w+S(p=i)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(${99*T(p+T(4*Z-t)/6)},99%,65%`))Z=((t+i)%4)**2/14
for(i=w=960;i--;x.fillRect(w+S(p=i+t/9)*Z*w,540+C(p)*Z*w,7,7,x.fillStyle=`hsl(${77*T(p+T(4*Z-t)/6)},99%,65%`))Z=((t+i)%4)/3
// Soft and slow
for(R=Math.random,i=w=960;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1,x.fillStyle=`hsla(${99*T(p+Z+t/99)},30%,20%,.03`))Z=5/9*R()**.3
// A planet?
for(R=Math.random,i=w=960;i--;x.fillRect(X=w+S(p=w*R())*Z*w,Y=540+C(p)*Z*w,3,3,x.fillStyle=`hsla(${(Y+X*X/1e4)},30%,30%,.1`))Z=5/9*R()**.3
for(R=Math.random,i=w=960;i--;x.fillRect(X=w+S(p=w*R())*Z*w,Y=540+C(p)*Z*w,3,3,x.fillStyle=`hsla(${(Y+X*X/1e4)},90%,70%,.1`))Z=5/9*R()**.3
// Releasable.  A bit simple.
for(R=Math.random,i=w=960;i--;x.fillRect(X=w+S(p=w*R())*Z*w,Y=540+C(p)*Z*w,3,3,x.fillStyle=`hsla(${(Y+X*X/1e4)},70%,40%,.1`))Z=5/9*R()**.5

// iverjo's kaliverscope
b=31;for(i=0;i++<1e3;)s=45/(9-(t+i/99)%9),x.fillStyle=R((d=i*119)%256,d/1.4%256,d/7%256),x.fillRect(960+5*s*C(h=i*t/b+t),540+5*s*S(h),s,s)

// Remixing New_Core's blobs: https://www.dwitter.net/d/4827
for(a=c.width=200,i=9;i--;x.fillRect(74+65*S(t*.9+i*4),35+28*C(t+i),40,40))x.filter='blur(10px) contrast(2%)',x.globalCompositeOperation="lighter"
for(c.width=200,i=9;i--;x.fillRect(74+65*S(t/3+i*4),35+28*C(t+i),40,40))x.filter='blur(9px)contrast(1%)',x.globalCompositeOperation="lighter"
for(c.width=99,i=9;i--;x.fillRect(37+32*S(t+i*4),17+14*C(t*i),20,20))x.filter='blur(5px)contrast(1%)',x.globalCompositeOperation="lighter"
// --- RELEASED ---
for(c.width=99,i=9;i--;x.fillRect(40+35*S(t-i),19-14*C(t*i),20,20))x.filter='blur(5px)contrast(1%)',x.globalCompositeOperation="lighter"
// Might be good if sped up, but too slow and boring at this speed
for(c.width=99,i=9;i--;x.fillRect(36+32*S(t*i/7),17-10*C(t*i/5),25,25))x.filter='blur(5px)contrast(1%)',x.globalCompositeOperation="lighter"
for(c.width=99,i=7;i--;x.fillRect(36+32*S(t*.9+i),17-10*C(t*i),25,25))x.filter='blur(5px)contrast(1%)',x.globalCompositeOperation="lighter"

// An attractor: https://www.dwitter.net/d/4805
// Original
c.width=1920;d=-2.1;e=1.9;for(i=l=j=t;i<9e3;i++)k=S(d*l)+C(t)*C(j*d),m=S(e*j)+S(t)*C(l*e),j=k,l=m,x.fillRect(960+j*400,540+l*250,2,2)
// --- WAS RELEASED? --- If it is too slow, then add t*=4; at the start https://www.dwitter.net/d/4842
c.width=640;d=-2.1;e=1.9;for(i=l=j=t;i<6e4;i++)k=S(d*l)+C(t)*C(j*d),m=S(e*j)+S(t)*C(l*e),j=k,l=m,x.fillRect(320+j*100,180+l*70,.3,.3)
// Medium version (still quite slow)
c.width=1e3;d=-2.1;e=1.9;for(i=l=j=t;i<4e4;i++)k=S(d*l)+C(t)*C(j*d),m=S(e*j)+S(t)*C(l*e),j=k,l=m,x.fillRect(500+j*160,280+l*110,.3,.3)
// Adjustable version
t+=2;c.width=W=1e3;d=-2.1;e=1.9;for(i=l=j=t;i<3e4;i++)k=S(d*l)+C(t)*C(j*d),m=S(e*j)+S(t)*C(l*e),j=k,l=m,x.fillRect(W/2+j*W/5,W/4+l*W/9,.3,.3)
// --- ALSO RELEASED --- Version for easier tweaking.  Medium: W=1e3, i=2e5 Heavy: W=2e3, i=1e6
c.width=W=400;d=-2.1;e=1.9;for(l=j=t,i=3e4;i--;x.fillRect(W/2+j*W/5,W/4+l*W/9,.3,.3))k=S(d*l)+C(t)*C(j*d),m=S(e*j)+S(t)*C(l*e),j=k,l=m

// Retro sun setting over sea: https://www.dwitter.net/d/5059
// Original:
c.width|=0;a=1e3;x.arc(a,545,255,22/7,44/7);for(i=9;i--;){d=i*55;x.fillStyle=R(a,a/i,80);x.fill();x.fillRect(a-d/2+20*S(t*(9-i)),a-d,d,40)}
// My remix:
c.width|=0;a=1e3;x.arc(a,550,255,22/7,44/7);for(i=15;i--;){d=i*31;x.fillStyle=R(a,a/i,80);x.fill();x.fillRect(a-d/2+20*S(t*(9-i)),a-d,d,12)}
c.width|=0;a=1e3;x.arc(a,550,255,22/7,44/7);for(i=15;i--;){d=i*35;x.fillStyle=R(a,a/i,80);x.fill();x.fillRect(a-d/2+20*S(t*(9-i)),a-d*.9,d,15)}

// RomanW's bitmask; not usable but inspiration https://www.dwitter.net/d/5271
// Golfed golf ball https://www.dwitter.net/d/5433
for(c.width|=i=h=999;i--;)x.fillRect(h+(i*h-i*i)**.5*S(t+i),i,9,9)
for(c.width|=i=h=999;i--;)S(i/7)>.9&&x.fillRect(h+(i*h-i*i)**.5*S(t+i),i,60,60)

// rikardlindstrom's cloth: https://www.dwitter.net/d/5542
for(i=c.width=196,x.lineWidth=.01*i/100;i--;)x.arc(0,20+C(t*5+i**1.6/180)*C(t*3+i**1.5/177)*(191-i)*.2/2,i/.75,0,1.);x.stroke();

// p01's globe with countries: https://www.dwitter.net/d/5600
for(i=h=c.width=432;i--;)C(t-i)>0&&x.fillText('.⬤'['榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1],192+(i*h-i*i)**.5*S(t-i)/2,i/2+9)
// These don't look great
for(i=h=c.width=432;i--;)C(t-i)>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s='榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1*9,s)
for(i=h=c.width=432;i--;)C(t-i)>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s='榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1*10*(1+C(t-i)),2*s)
for(i=h=c.width=432;i--;)s='榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1*10*(1+C(t-i)),x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2-s/2,i/2+9-s/2,s,2*s)
// Looks ok
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*9*(C(t-i)),x.beginPath(),C(t-i)>0&&x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()
// Those fade too strongly at the edges.  This one avoids that:
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*9*C(t-i)**.5,x.beginPath(),x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()
// --- RELEASED but then DELETED --- Also reduce ball size on the up/down
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*9*(C(t-i)*S(i/137))**.5,x.beginPath(),x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()
// If you don't want to get too small at the poles, try this instead: *C(t-i)**.5*S(i/137)**.25
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*9*C(t-i)**.5*S(i/137)**.25,x.beginPath(),x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()
// With small dots in the white area
for(i=h=c.width=432;i--;)s=(('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*7+2)*C(t-i)**.5*S(i/137)**.25,x.beginPath(),x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()
// --- RELEASED --- With small dots in the white area and large dots that appear 3-D (they bunch up at the edges, and appear to shrink "over" the horizon)
// (Although *5+1 is more like the original)
for(i=h=c.width=432;i--;)s=(('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*7+2)*C(t-i)**.3*S(i/137)**.2,x.beginPath(),x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()
// Transparent with dots
for(i=h=c.width=432;i--;)s=(('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*2+.5)*(2+C(t-i)),x.beginPath(),x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()
// --- GOOD --- Transparent without dots
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*3*(1.5+C(t-i)),x.beginPath(),x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()
// Golf the release by 2 chars using ? instead of +
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1?9:2)*C(t-i)**.3*S(i/137)**.2,x.beginPath(),x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6),x.fill()

// --- OK --- Square version
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*15*(C(t-i)*S(i/137))**.5,s>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2-s/2,i/2+9-s/2,s,s)
// Rectangles, flat at poles, narrow at edges
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*15,s>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s*C(t-i)**.5,s*S(i/137)**.5)
// Rectangles, flat at poles, narrow at edges, with correct handling of rectangle's center
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*15,W=s*C(t-i)**.5,H=s*S(i/137)**.5,x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2-W/2,i/2+9-H/2,W,H)
// --- RELEASED but then DELETED ---
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*16,W=s*C(t-i),H=s*S(i/137),C(t-i)>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2-W/2,i/2+9-H/2,W,H)
// But the top and bottoms look a bit sparse.  This produces rectangles that just about touch, at all latitudes.
// Why do we need **.5 for the height but not the width?  I expect it is because the points near the poles were already intentionally distributed across the surface evenly.
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*15,W=s*C(t-i),H=s*S(i/137)**.5,C(t-i)>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2-W/2,i/2+9-H/2,W,H)
// --- RELEASED --- With dots
// (Although *9+1 is more like the original)
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*12+3,W=s*C(t-i),H=s*S(i/137)**.5,C(t-i)>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2-W/2,i/2+9-H/2,W,H)
// We can golf this by using ...?15:3 instead of (...)*12+3
// --- GOOD --- Transparent version
for(i=h=c.width=432;i--;)s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*5*(2+C(t-i)),W=s*C(t-i),H=s*S(i/137)**.5,x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2-W/2,i/2+9-H/2,W,H)

// Back to the dots, remove the latitudinal resizing, golf a bit
for(i=h=c.width=432;i--;x.fill())s=('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*5*C(t-i)**.2,x.arc(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s,0,6,x.beginPath())

// Back to original (138)
for(i=h=c.width=432;i--;)C(t-i)>0&&x.fillText('.⬤'['榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1],192+(i*h-i*i)**.5*S(t-i)/2,i/2+9)
// Use fillRect instead of fillText (140)
for(i=h=c.width=432;i--;)C(t-i)>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s=['榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1]*9,s)
// But we don't need the square brackets.  We can make it 1 char shorter (139)
for(i=h=c.width=432;i--;)C(t-i)>0&&x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,s='榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1&&9,s)

// Aemkei did a rectangular version in 139: https://www.dwitter.net/d/5808
for(c.width|=i=h=555;i--;)x.fillRect(h+(i*h-i*i)**.5*S(t-i),i,'耀ࠠ䆄鹲�鯵�嵴䲲旓겘ャ蕌੡兎豐炆萔₠䤈䡅䈂呐ₔ⒠䐁∉ሊ@ 䀀'.charCodeAt(i/16)>>i%T&1&&T*C(t-i)+T,T=16)

// We could fix the height and vary the width only, like aemkei does...
// Follow aemkei's approach, fading the rectangles to 0 when they are at the very back (138)
for(i=h=c.width=432;i--;)x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,('榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1)*9*(1+C(t-i)),9)
// Use Aemkei's '&&' method to save 1 char (137)
for(i=h=c.width=432;i--;)x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,'榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1&&9*(1+C(t-i)),9)
// We can remove the brackets too (135) (but 136 on Linux!)
for(i=h=c.width=432;i--;)x.fillRect(192+(i*h-i*i)**.5*S(t-i)/2,i/2+9,'榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1&&9*C(t-i)+9,9)
// Spinning with tan
for(i=h=c.width=432;i--;)x.fillRect(192+(i*h-i*i)**.5*S(w=T(t)-i)/2,i/2+9,'榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1&&9*C(w)+9,9)

// Agnes's snake: https://www.dwitter.net/d/5665
f=5;m=.5;w=c.width+=i=0;for(i;i<w;i+=f){d=i/w;s=d>m?1-d:d;s**=m;x.arc(m*w*(1+m*S(d+t)),f*S(t*f**d)+540+100*C(d-t),s*35*d,0,7);}x.stroke();
f=5;m=.5;w=c.width+=i=0;for(i;i<w;i+=f){d=i/w;s=d>m?1-d:d;s**=m;x.arc(m*w*(1+m*S(d+t)),f*S(12*t+3*f*d)+540+99*C(t+d),s*35*d,0,7);}x.stroke()
f=5;m=.5;w=c.width+=i=0;for(i;i<w;i+=f){d=i/w;s=d>m?1-d:d;s**=m;x.arc(m*w*(1+m*S(d+t)),f*S(12*t+15*d)+540+99*C(t+d),s*35*d,0,7);}x.stroke()

// Xen's listing of global properties: https://www.dwitter.net/d/5309
c.width|=0;x.font='5em"';i=0;for(k in x)i+=99,x.fillText(k,10,i-99*t)

// TODO: This is almost a dancing lady, if the upper curves were slightly separated from the lower curves
// https://www.dwitter.net/u/jonathan_b

// Amir's funky wobbler (333)
c.width=1920,X=40,Y=25
f=(i,j,H)=>{p=[k=0,-H,X,-H-Y,0,-H-2*Y,-X,-H-Y,0,-H,X,-H-Y,X,H-Y,0,H,0,-H,-X,-H-Y,-X,H-Y,0,H]
for(;k<24;x.lineTo(i+p[k++],j+p[k++]))k%8?1:(x.fillStyle=R(20*k),x.fill(),x.beginPath())
x.fillStyle=R(20),x.fill()}
for(i=0;i<10;i++)for(j=0;j<10;j++)f(960+(i-j)*X,400+(i+j)*Y,S(-t*4+((i-j)**2+(i+j-9)**2)/15)*50+125)
// My first remix (214)
c.width=1920,X=40,Y=25
f=(i,j,H)=>{for(k=3;k--;)O=45*C(k),x.fillStyle=R(99+2*O),x.fillRect(i-O,j-H-9*S(k),X,2*H)}
for(i=0;i<10;i++)for(j=0;j<10;j++)f(960+(i-j)*X,400+(i+j)*Y,S(-t*4+((i-j)**2+(i+j-9)**2)/15)*50+125)
// Second (185)
c.width|=X=40,Y=25
for(i=10;i--;)for(j=10;j--;)
for(k=3;k--;)H=S(((i-j)**2+(i+j-9)**2)/15-t*4)*50+99,O=45*C(k),x.fillStyle=R(99+2*O),x.fillRect(960+(i-j)*X-O,800-(i+j)*Y-H-9*S(k),X,2*H)
// Third (187) (shared)
c.width|=X=40,Y=25
for(i=10;i--;)for(j=10;j--;)
for(k=3;k--;)H=S(((i-j)**2+(i+j-9)**2)/15-t*4)*50+99,h=(k+2)%3,x.fillStyle=R(99*h),x.fillRect(960+(i-j)*X-21*h,800-(i+j)*Y-H-9*(k&2),X,2*H)
// Dwitterer also did a redux (189)
c.width|=0;for(i=9;i--;)for(j=9;j--;)[0,2,4].map(d=>x.fillRect(0,0,2,2,x.fillStyle=R(d*99),a=[20,-9,0,h=99+30*S(i+j+t),-20,-9],a.splice(d,2),x.setTransform(...a,(24+i-j)*40,(39-i-j)*18-h)))
// It was finally released as a hack: https://www.dwitter.net/d/2381

// A golf-down for Dwitterer
// Original:
c.width^=n=S(t%2);with(x){lineWidth=5;beginPath();a=1920;b=1080;arc(a/2,b/2,b/2,0,2*Math.PI);stroke();for(i=0;i<8;i++){drawImage(c,n*(a/3),n*(b/3),a/3,b/3)}}
// Mine:
c.width^=n=S(t%2);with(x){beginPath(lineWidth=i=8);arc(960,540,540,0,7);for(stroke();i--;)drawImage(c,n*640,n*360,640,360)}
// magna golfed further:
c.width^=n=S(t%2);x.arc(960,540,540,0,x.lineWidth=i=8);for(x.stroke();i--;)x.drawImage(c,n*640,n*360,640,360)

// Someone made a spectrum analyser, similar to my old one: https://www.dwitter.net/d/6373
// My old one is here: https://www.dwitter.net/d/2411
// I adapted his to be more like mine:
c.width=1080;for(i=0;i<10;i++){for(j=0;j<40*(.9+S(i+8*t)*C(i+t))*i;j+=80){x.fillStyle=R(j,650-j,0,1),x.fillRect(1000-i*99,500-j/2,75,30)}}

// Remixing this
t?0:C=document,S=C.createElement('script');S.src="https://pastebin.com/raw/Wu9jikLh";C.head.appendChild(S)

fetch('https://pastebin.com/raw/Wu9jikLh',{mode:'no-cors'}).then(async r=>console.log("text:",await r.text()))
fetch('//dweet.dwitter.net/id/888').then(async r=>console.log("text:",await r.text()))
fetch('https://www.hastebin.com/ehituqigoc.lisp',{mode:'no-cors'}).then(async r=>console.log("text:",await r.text()))
fetch('//dweet.dwitter.net/id/888',{mode:'no-cors'}).then(async r=>console.log((await r.text()).slice(23)))

// Remixing this https://www.dwitter.net/d/6692
D=x=>(r=new XMLHttpRequest,r.open('GET','./'+x,0),r.send(),r.response.match(/u\(t.*([^]*?) }/)[1])
eval(t?A:A=D(1494)+';'+D(888).slice(23))

//F=I=>fetch('//dweet.dwitter.net/id/'+I).then(async r=>T[I]=(await r.text()).match(/u\(t.*([^]*?) }/)[1])
//F=async I=>T[I]=(await(await fetch('//dweet.dwitter.net/id/'+I)).text()).match(/u\(t.*([^]*?) }/)[1]
F=async I=>T[I]=(await(await fetch('/id/'+I)).text()).match(/u\(t.*([^]*?) }/)[1];eval(t?T[1494]+';'+T[888].slice(23):F(1494),F(888))

// He used it to make this random dweet slideshow: https://www.dwitter.net/d/6715

// Just one dweet
a=888
F=async I=>T[I]=(await(await fetch('/id/'+I)).text()).match(/u\(t.*([^]*?) }/)[1]
eval(t?T[a]:F(a))

// Birds' rainbow donut
with(x)for(c.width|=a=1e3;a--;beginPath(stroke()))b=255,d=C(a)*10,strokeStyle=`hsla(${d*7},99%,50%,.5)`,ellipse(960+200*C(a+t*3),540+200*S(a),90+30*S(a),90+d*3,0,0,7)
// My reductions
with(x)for(c.width|=a=1e3;a--;beginPath(stroke()))d=C(a)*27,strokeStyle=`hsla(${d*2},99%,50%,.5`,ellipse(960+200*C(a+t*3),540+200*S(a),90+30*S(a),90+d,0,0,7)
with(x)for(c.width|=a=1e3;a--;beginPath(stroke()))strokeStyle=`hsl(${d=C(a)*54},99%,50%`,ellipse(960+200*C(a+t*3),540+d*4,90+30*S(a),90+d,0,0,7)
// Published: /6681
with(x)for(c.width=a=2e3;a-=4;beginPath(stroke()))strokeStyle=`hsl(${d=C(a)*70},99%,50%`,ellipse(960+200*C(a+t*3),480+d*4,90+d/3,90+d,0,0,7)
with(x)for(c.width=a=2e3;a-=4;beginPath(stroke()))strokeStyle=`hsl(${d=C(a)*70},99%,50%`,arc(960+200*C(a+t*3),480+d*4,99+d,0,7)
// His increment
// Published: https://www.dwitter.net/d/6706
with(x)for(c.width=a=2e3;a--;beginPath(stroke()))b=255,d=C(a)*20,strokeStyle=R(b*S(a)+b,25*d,99+d,.5),arc(960+b*C(a+t),540+b*C(a),70+d,0,7)

// Annan made the PacMan yellow! https://www.dwitter.net/d/6738
// Together we got it working ok
c.width|=τ=6.3,y=S(t%1*τ*2)
with(x)for(i=2;i<9;moveTo(w=500,w),fill(arc(w,w,w/2,y,τ-y)),fillRect(w*i++-t*w%w,w,60,60))fillStyle='#FE0'
// My remix is slower: one gulp per dot
c.width|=τ=6.3,y=.5+S(τ*t%τ)/2
with(x)for(i=1.7;i<9;moveTo(w=540,w),fill(arc(w,w,w/2,y,τ-y)),fillRect(w*i++-t*w%w,w,60,60))fillStyle='#FE0'

// Making his mouth move in a linear trianglular wave
y=(((τ*t%τ-3)/2.5)**2)**.5
y=Math.abs((τ*t%τ-3)/2.5)
// Annan suggests this alternative (although I'm not sure that's really saving us any chars, maybe sometimes it could?)
n=0|t+.5,y=(t-n)*(-1)**n
// I tried to use it
c.width|=τ=6.3,n=2*t+.5|0,y=.4+(2*t-n)*(-1)**n
with(x)for(i=1.65;i<9;moveTo(w=500,w),fill(arc(w,w,w/2,y,τ-y)),fillRect(w*i++-t*w%w,w,60,60))fillStyle='#FE0'

// https://www.dwitter.net/d/6830
with(x)shadowBlur=99,shadowColor=R(),fillStyle=`hsl(${t*411},85%,50%)`,fillRect(910+860*S(t*5.1),490+400*S(9e12*t/new Date),100,100)
with(x)shadowBlur=99,shadowColor=R(),fillStyle=`hsl(${t*320},85%,50%)`,fillRect(960-500*T(t*5),540+400*S(t*3),200,80+50*S(t))
with(x)shadowBlur=99,shadowColor=R(),fillStyle=`hsl(${30*t+30*S(t*9)},99%,70%`,fillRect(910+860*S(t*4.3),490+400*S(5.7*t),100,100)
// Moving the multiple make the curve more interesting, but the amplitude of change gets too large as t increases
with(x)shadowBlur=99,shadowColor=R(),fillStyle=`hsl(${30*t+30*S(t*9)},99%,70%`,fillRect(910+860*S(t*4.7),490+400*C((6.7+S(t/3))*t),100,100)
// Fixed; could probably be improved by tweaking
with(x)shadowBlur=99,shadowColor=R(),fillStyle=`hsl(${30*t+30*S(t*9)},99%,70%`,fillRect(910+860*S(t*4.7),490-400*C(5.7*t-2*S(t)),100,100)

// City skyline with reflection in water: https://www.dwitter.net/d/7171
// I would like to make the reflections proper vertical mirrors with a little wobble.

// Minecraft wow! https://www.dwitter.net/d/7215

// https://www.dwitter.net/d/7272
c.width|=0,d=700;for(i=1e3;i--;)X=S(i/t),Z=C(55*i),B=(4-Z*C(t)+X*S(t))/d,x.fillRect(d+(X*C(t)+Z*S(t))/B,d+C(19*t*t/i)/B,.05/B,.05/B)
c.width|=0,d=700;for(i=1e3;i--;)X=S(99*i),Z=C(i*t/99),B=(4-Z*C(t)+X*S(t))/d,x.fillRect(d+(X*C(t)+Z*S(t))/B,d+C(99*i)/B,.05/B,.05/B)
c.width|=0,d=700;for(i=1e3;i--;)X=S(i/t),Z=C(55*i),B=(4-Z*C(t)+X*S(t))/d,x.fillRect(d+(X*C(t)+Z*S(t))/B,d+C(S(t/4)*99/i)/B,.05/B,.05/B)

// yonatan's landscape: https://www.dwitter.net/d/7301
// Yonatan's beautiful coloured canyons: https://www.dwitter.net/d/7318
for(i=2e3,n=99;i--;x.fillStyle=R(q=(Y+1)*n,q/3,n-q),x.fillRect(i,t*n-(Y|0)*n,1,n*n))for(Y=0,j=4;j--;)Y+=C(((i-960)+S(t+Y)*n*j*j)/2**j/t/9)
// My first remix (fixed a bit)
for(x.beginPath(i=1920);i--;x.lineTo(i,t*99+(Y*2|0)*4*t))for(Y=0,j=4;j--;)Y=Y+S(((i-960)/t+S(t+Y)*299*j*j/t)/(40*2**j));t<15&&x.stroke()
for(i=1920;i--;t<15&&x.fillRect(i,t*99+(Y*2|0)*4*t,.2,2*t))for(Y=0,j=4;j--;)Y=Y+S(((i-960)/t+S(t+Y)*299*j*j/t)/(40*2**j))
// My second remix (fixed a bit) https://www.dwitter.net/d/7317
for(i=1920;i--;t<15&&x.fillRect(i,t*99+(Y*2|0)*4*t,.2,8))for(Y=0,j=4;j--;)Y=Y+S(((i-960)/t+S(t+Y)*299*j*j/t)/(40*2**j))
for(i=1920;i--;t<15&&x.fillRect(i,t*99+(Y*2|0)*4*t,.2,15/(t+1)))for(Y=1,j=4;j--;)Y=Y+S(((i-960)/t+S(t+Y)*299*j*j/t)/(40*2**j))
// Coloured
for(i=1920;i--;t<15&&x.fillRect(i,t*99+(Y*2|0)*4*t,1,8*t))for(Y=0,j=4;j--;)Y=Y+S(((i-960)/t+S(t+Y)*299*j*j/t)/(40*2**j)),x.fillStyle=R(0,-99*Y,99*Y)
// --- GOOD but could use more work --- Coloured golfed to fit (but never stops, so heavy on CPU)
for(i=1920;i--;x.fillRect(i,t*99+Y*8*t,1,8*t))for(Y=0,j=4;j--;)Y=Y+S(((i-960)/t+S(t+Y)*299*j*j/t)/(40*2**j)),x.fillStyle=R(0,-99*Y,99*Y)
for(i=1920;i--;x.fillRect(i,t*99+(Y*8|0)*t,1,8*t))for(Y=0,j=4;j--;)Y=Y+S(((i-960)/t+S(t+Y)*299*j*j/t)/(40*2**j)),x.fillStyle=R(0,-99*Y,99*Y)
// Instead of 8*t we can use 16 to save 1 char, but it looks a bit ugly on the horizon.  Any lower, and we get white gaps.
// --- GOOD but could use more work --- Sandy
x.fillStyle='#da0a';for(i=1920;i--;t<15&&x.fillRect(i,t*99+(Y*4)*2*t,.2,18))for(Y=0,j=4;j--;)Y=Y+S(((i-960)/t-S(Y-t)*299*j*j/t)/(40*2**j))

// New_Core's starfield: https://www.dwitter.net/d/7355
x[q='fillStyle']='#0001';x[f='fillRect'](0,0,a=2e3,a);for(i=a;i-=4;x[f](a*S(i*99)*s+955,a*C(i)*s+535,s*9,s*9))s=99/((i+t*99)%a-a),x[q]='#fff'
//for(i=a=2e3;i-=4;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,i?s*9:a,i?s*9:a))s=99/((i+t*99)%a-a),x.fillStyle=i?'#fff':'#0001'
//for(i=a=2e3;i-=4;x.fillRect(i==a?0:a*S(i*99)*s+955,i==a?0:a*C(i)*s+535,k=i==a?a:s*9,k))s=99/((i+t*99)%a-a),x.fillStyle=i==a?'#0001':'#fff'
for(i=a=2e3;i;x.fillRect(i==a?0:a*S(i*99)*s+955,i==a?0:a*C(i)*s+535,k=i==a?a:s*9,k),i-=4)s=99/((i+t*99)%a-a),x.fillStyle=i==a?'#0001':'#fff'
a=2e3;for(i=0;i<a;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k),i+=4)s=99/((i+t*99)%a-a),x.fillStyle=i?'#fff':'#0001'
a=2e3;for(i=0;i<a;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k),i+=4)s=99/((i+t*99)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0001'
//a=2e3;for(i=0;i<a;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k),i+=4)s=99/((i+t*99)%a-a),x.fillStyle=`hsla(${i},99%,${i?50:0}%,${i?1:.1}`
a=2e3;for(i=0;i<a;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k),i++)s=25/((i+t*25)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0001'
for(i=a=2e3;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=25/((i+t*25)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0001'
// Tweaking numbers
for(i=a=2e3;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=40/((i+t*80)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0001'
// Mixed up colours (avoid banding) but fewer visible stars
for(i=a=2e3;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=9/((i+t*20)%a-a),x.fillStyle=i?`hsl(${9*i},99%,50%`:'#0001'
// Lower a
for(i=a=720;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=40/((i+t*40)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0002'
for(i=a=600;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=50/((i+t*50)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0002'
for(i=a=360;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=30/((i+t*60)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0004'
for(i=a=360;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=9/((i+t*30)%a-a),x.fillStyle=i?`hsl(${i*9},99%,50%`:'#0002'
// Nice but slowish --- TO RELEASE ---
for(i=a=360;i--;x.fillRect(i?a*S(i*a)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=20/((i+t*40)%a-a),x.fillStyle=i?`hsl(${i*5},99%,50%`:'#0001'
// Similar but faster
for(i=a=360;i--;x.fillRect(i?a*S(i*a)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=20/((i+t*80)%a-a),x.fillStyle=i?`hsl(${i*5},99%,50%`:'#0002'
for(i=a=360;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=20/((i+t*50)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0003'
for(i=a=360;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=50/((i+t*99)%a-a),x.fillStyle=i?`hsl(${i},99%,50%`:'#0002'
// Folding space with 99*s
for(i=a=360;i--;x.fillRect(i?a*S(i*a)*s+955:0,i?99*s*C(i)*s+535:0,k=i?s*9:2e3,k))s=20/((i+t*40)%a-a),x.fillStyle=i?`hsl(${i*5},99%,50%`:'#0001'
// Fast busy dark flow --- TO RELEASE ---
for(i=a=720;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=99/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*2},99%,50%`:'#0005'
// Fog
for(i=a=720;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=99/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*2},99%,${-s*20}%`:'#0005'
// Fast
for(i=a=360;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=60/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*2},99%,50%`:'#0004'
for(i=a=360;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*9:2e3,k))s=99/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*2},99%,50%`:'#0003'
//for(i=a=180;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s*5:2e3,k))s=70/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*2},99%,50%`:'#0004'
for(i=a=180;i--;x.fillRect(i?a*S(i*a)*s+955:0,i?a*C(i)*s+535:0,k=i?s*5:2e3,k))s=90/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*4},99%,50%`:'#0004'
for(i=a=180;i--;x.fillRect(i?a*S(i*a)*s+955:0,i?a*C(i)*s+535:0,k=i?s*5:2e3,k))s=20/((i+t*30)%a-a),x.fillStyle=i?`hsl(${i*8},99%,50%`:'#0001'
for(i=a=180;i--;x.fillRect(i?a*S(i*a)*s+955:0,i?i*C(i)*s+535:0,k=i?s*5:2e3,k))s=20/((i+t*30)%a-a),x.fillStyle=i?`hsl(${i*8},99%,50%`:'#0001'
// Repetitive but flattened and medium speed -- QUITE GOOD --
for(i=a=90;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?60*C(i)*s+535:0,k=i?2*s:2e3,k))s=a/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*8},99%,50%`:'#0002'
// Similar but more dots
for(i=a=180;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?90*C(i)*s+535:0,k=i?2*s:2e3,k))s=a/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*9},99%,50%`:'#0002'
for(i=a=40;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?a*C(i)*s+535:0,k=i?s:2e3,k))s=99/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*9},99%,50%`:'#0002'
for(i=a=40;i--;x.fillRect(i?a*S(i*99)*s+955:0,i?i*C(i)*s+535:0,k=i?s:2e3,k))s=99/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*9},99%,50%`:'#0002'
// Some fun
for(i=a=40;i--;x.fillRect(i?a*S(p=(t|0)*i+t)*s+955:0,i?i*C(p)*s+535:0,k=i?s:2e3,k))s=99/((i+t*a)%a-a),x.fillStyle=i?`hsl(${i*9},99%,50%`:'#0002'

// Batrachus's banana: https://www.dwitter.net/d/7333
for(c.width+=i=0;(j=i++/(d=960))<1;x.fillRect(d+M*S(i)*C(t)+(j-.5)*S(t)*d,d/2+M*C(i)+S(3*j)*d/4,50,50))M=d*Math.max(0,S(2.5*j+.6)/6-.06)
for(c.width+=i=0;(j=i++/(d=960))<1;x.fillRect(d+(j-.5)*S(t)*d-M,d/2+S(3*j)*d/4-M,2*M,2*M))M=d*Math.max(0,S(2.5*j+.6)/6-.06)+25
for(c.width+=i=0;(j=i++/(d=960))<1;x.beginPath(),x.arc(d+(j-.5)*S(t)*d,d/2+S(3*j)*d/4,M,0,7),x.fill())M=d*Math.max(0,S(2.5*j+.6)/6-.06)+25
for(c.width+=i=0;(j=i++/(d=960))<1;x.arc(d+(j-.5)*S(t)*d,d/2+S(3*j)*d/4,M,0,7))M=d*Math.max(0,S(2.5*j+.6)/6-.06)+25;x.stroke()
// Holy
for(i=d=480,c.width=2*d;i--;x.arc(d+(j-.5)*S(t)*d,d/2+S(3*j)*d/4,M,0,7))j=i/d,M=d*Math.max(0,S(2.5*j+.6)/6-.06)+12;x.stroke()
// -- RELEASED -- (still a tiny bit holy) https://www.dwitter.net/d/7372
for(i=d=960,c.width=d;i--;x.arc(d/2+(j-.5)*S(t)*d/2,d/4+S(3*j)*d/8,M,0,7))j=i/d,M=d/2*Math.max(0,S(2.5*j+.6)/6-.06)+12;x.stroke()
// No holes
for(i=d=960,c.width=d/2;i--;x.arc(d/4+(j-.5)*S(t)*d/4,d/8+S(3*j)*d/16,M,0,7))j=i/d,M=d/4*Math.max(0,S(2.5*j+.6)/6-.06)+7;x.stroke()
// Wireframe
//for(i=d=240,c.width=4*d;i--;x.arc(2*d+(j-.5)*S(t)*d*2,d+S(3*j)*d/2,M,0,7))j=i/d,M=2*d*Math.max(0,S(2.5*j+.6)/6-.06)+12;x.stroke()
//for(i=d=30,c.width=32*d;i--;x.arc(16*d+(j-.5)*S(t)*d*16,8*d+S(3*j)*d*4,M,0,7))j=i/d,M=16*d*Math.max(0,S(2.5*j+.6)/6-.06)+12;x.stroke()
// Diguise the mould line by drawing each arc separately
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*S(t)*d*8,4*d+S(3*j)*d*2,M,0,7),x.stroke())j=i/d,M=8*d*Math.max(0,S(2.5*j+.6)/6-.06)+12
// --- RELEASED --- Diguise the mould line by only arcing 2...8 https://www.dwitter.net/d/7371
for(i=d=60,c.width=16*d;i--;x.arc(8*d+(j-.5)*S(t)*d*8,4*d+S(3*j)*d*2,M,2,8))j=i/d,M=8*d*Math.max(0,S(2.5*j+.6)/6-.06)+12;x.stroke()
// k=d/4 re-used 4 times but didn't save the cost
//for(i=d=960,k=d/4,c.width=d/2;i--;x.arc(k+(j-.5)*S(t)*k,d/8+S(3*j)*k/4,M,0,7))j=i/d,M=k*Math.max(0,S(2.5*j+.6)/6-.06)+7;x.stroke()
//for(i=d=4*(k=240),c.width=d/2;i--;x.arc(k+(j-.5)*S(t)*k,d/8+S(3*j)*k/4,M,0,7))j=i/d,M=k*Math.max(0,S(2.5*j+.6)/6-.06)+7;x.stroke()
//for(k=240,i=d=4*k,c.width=d/2;i--;x.arc(k+(j-.5)*S(t)*k,d/8+S(3*j)*k/4,M,0,7))j=i/d,M=k*Math.max(0,S(2.5*j+.6)/6-.06)+7;x.stroke()
// Whoops swan
for(i=d=1920,c.width=d;i--;x.arc(d/2+(j-.5)*S(t)*d/2,d/4+S(3*j)*d/8,M,0,7))j=2*i/d,M=d*Math.max(0,S(2.5*j+.6)/6-.06)+12;x.stroke()
// Yellow and black banana (break rotation illusion)
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*S(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.fillStyle=R(k=i<2||i>50?0:255,k,0),x.fill())j=i/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
// Poor attempt to fix rotation illusion
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.fillStyle=R(k=j<.02||j>.85?0:255,k,0),x.fill())P=2*Math.PI,j=t%P<P/2?i/d:1-(i+1)/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
// Alpha attempt to fix rotation illusion
for(i=d=50,c.width=16*d,x.globalAlpha=.4;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.fillStyle=R(k=j<.04||j>.85?0:255,k,0),x.fill())P=2*Math.PI,j=t%P<P/2?i/d:1-(i+1)/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
// Oscillating alpha attempt
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.globalAlpha=.6+.4*(2*j-1)**2*C(2*t+P),x.fillStyle=R(k=j<.02||j>.85?0:255,k,0),x.fill())P=Math.PI,j=t%(2*P)<P?i/d:1-(i+1)/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.globalAlpha=j>.01&&j<.9?.5+.5*(2*j-1)**2*C(2*t+P):1,x.fillStyle=R(k=j<.02||j>.85?0:255,k,0),x.fill())P=Math.PI,j=t%(2*P)<P?i/d:1-(i+1)/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.globalAlpha=j<.05&&j>.01||j>.8&&j<.9?.2:1,x.fillStyle=R(k=j<.02||j>.85?0:255,k,0),x.fill())P=Math.PI,j=t%(2*P)<P?i/d:1-(i+1)/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.globalAlpha=j>.01&&j<.9?.6+.4*C(2*t+P):1,x.fillStyle=R(k=j<.02||j>.85?0:255,k,0),x.fill())P=Math.PI,j=t%(2*P)<P?i/d:1-(i+1)/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
// --- RELEASED --- Codegolf.tk doesn't have R(r,g,b) so we must fix it https://codegolf.tk/a/262
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.globalAlpha=j>0&&j<.9?.6+.4*C(2*t+P):1,x.fillStyle=k=j<.02||j>.85?'#000':'#ff0',x.fill())P=Math.PI,j=t%(2*P)<P?i/d:1-(i+1)/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
// --- RELEASED --- Tiffany requested gradient https://codegolf.tk/a/264
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.globalAlpha=j>0&&j<.9?.6+.4*C(2*t+P):1,x.fillStyle=k=j<.02||j>.85?'#000':`hsl(60,99%,${50-30*i/d*S(t)**2}%`,x.fill())P=Math.PI,j=t%(2*P)<P?i/d:1-(i+1)/d,M=8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12
// --- RELEASED --- Party banana https://codegolf.tk/a/263
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8,4*d+S(3*j)*d*2,M,2,8),x.fillStyle=`hsl(${300*(j+t)},99%,50%`,x.fill())P=2*Math.PI,j=i/d,M=(8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12)*(1+S(j/(1+C(t*.7))-7*S(t))**10)
// Add some simple translations with tan
for(i=d=60,c.width=16*d;i--;x.beginPath(),x.arc(8*d+(j-.5)*C(t)*d*8+7*T(t/3.1),4*d+S(3*j)*d*2-5*T(t/5.3),M,2,8),x.fillStyle=`hsl(${300*(j+t)},99%,50%`,x.fill())P=2*Math.PI,j=i/d,M=(8*d*Math.max(0,S(2.8*j+.4)/6-.06)+12)*(1+S(j/(1+C(t*.7))-7*S(t))**10)
// --- TO RELEASE --- Yonatan's 175 compressed https://codegolf.tk/a/265
// BUG: For some reason this one does not decompress like the other ones did!
eval(unescape(escape`挮睩摴栽㈰〻景爨搽椽ㄷ〰㭪㵩ⴭ⽤㭸⹦楬汒散琨㤹⬨椭ㅥ㌩⩓⡴⤯㤫匨椩⨨爭愯㐩ⱓ⠳⩪⤪㜵⭃⡩⤪爬㘬㘩⥲㵪㸮㤿㈺㌰⩓⠳⩪⬮㌩ⱸ⹦楬汓瑹汥㵒⡢㴷⨨愽爭匨椪㈩⨪㠪ㄵ⤭匨椪⨸⤪⨸⨳〬截⸸⤀`.replace(/u(..)/g,"$1%")))

// alien's wireframe https://www.dwitter.net/d/7375
w=c.width=401
h=w/2
for(i=w;i--;){
x.moveTo(h,h/2)
X=C(i/h)*90
Y=h/2+h/(i+t%1)
x.lineTo(h*X+i,h)
x.moveTo(0,Y)
x.lineTo(w,Y)
}
x.stroke()

w=c.width=401,h=w/2;with(x)for(i=w;i--;)moveTo(h,h/2),lineTo(h*90*C(i/h)+i,h*2),moveTo(0,Y=h/2+h/(i-t%1)),lineTo(w,Y);x.stroke()
w=c.width=401,h=w/2;x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(h,h/2),l(h*90*C(i/h)+i,w),m(0,Y=h/2+h/(i-t%1)),l(w,Y);x.stroke()
// Reduce to 200
c.width=w=200,h=99;x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(h,h/2),l(h*90*C(i/h)+i,w),m(0,Y=h/2+h/(i-t%1)),l(w,Y);x.stroke()
// Inline w and h at 400
c.width=400,x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=400;i--;)m(200,99),l(18000*C(i/200)+i,400),m(0,Y=99+200/(i-t%1)),l(400,Y);x.stroke()
// Inline h at 200
c.width=w=200,x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(99,50),l(99*90*C(i/99)+i,w),m(0,Y=50+99/(i-t%1)),l(w,Y);x.stroke()
// Inline w (bad)
c.width=200,x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=200;i--;)m(99,50),l(99*90*C(i/99)+i,200),m(0,Y=50+99/(i-t%1)),l(200,Y);x.stroke()
// Inline w and h at 99
c.width=99,x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=99;i--;)m(50,25),l(4500*C(i/50)+i,99),m(0,Y=25+50/(i-t%1)),l(99,Y);x.stroke()
c.width=w=200,h=99;x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(h,h/2),l(h*90*C(i/h)+i,h*2),m(0,Y=h/2+h/(i-t%1)),l(w,Y);x.stroke()
// Shrinking the 200
c.width=w=200,x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(99,51),l(90*i-999,w),m(0,Y=50+99/(i-t%1)),l(w,Y);x.stroke()
// Adding a spinning triangle
c.width=w=200,x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(99,51),l(90*i-999,w),m(0,Y=50+99/(i-t%1)),l(w,Y),m(99,30),l(99+i*C(t)/8,90-i/9);x.stroke()
// Shrinking the original
c.width=w=400,h=200;x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(h,h/2),l(90*i-20*h,w),m(0,Y=h/2+h/(i-t%1)),l(w,Y);x.stroke()
// Adding a spinning triangle?
c.width=w=400,h=200;x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(h,h/2),l(90*i-20*h,w),m(0,Y=h/2+h/(i-t%1)),l(w,Y),m(h,30),l(h+i*C(t)/8,h-i/9);x.stroke()
// Working
c.width=w=405,h=w/2;x.m=x.moveTo;x.l=x.lineTo;with(x)for(i=w;i--;)m(h,h/2),l(h*i-9e3,w),m(0,Y=h/2+h/(i-t%1)),l(w,Y),m(h,30),l(h+i*C(t)/8,h-i/9);x.stroke()

// jkjustjoshing's heartbeat signal https://www.dwitter.net/d/7394
i=1920;j=Math.abs;for(;i--;)a=(t*600-i/9|0)%999,x.fillStyle=R(0,a?255-a:0,0),x.fillRect(i,a?500+100*j(T(i/599))*S(j(i/90)):0,1,a?40:999)
i=1920;j=Math.abs;for(;i--;)a=(t*600-i/9|0)%400,x.fillStyle=R(0,a?255-a:0,0),x.fillRect(i,a<256?500+100*j(T(i/599))*S(j(i/90)):0,1,a<256?40:999)

// Remix of ...
v=~~(t*60);x.beginPath();for(i=300;--i;){x.lineTo(C(i+t/42)*i*9,S(i*i*0.1+t/8)*i*9)};x.strokeStyle=`hsl(${v},40%,${25*(1+S(3*t))}%)`;x.stroke()

// Remix of https://www.dwitter.net/d/7548
for(a=t,c.width=99,i=16;i--;x.stroke())x.lineTo(50+S(t+=(7-i)%2/.64)*29,12+(i%4>>1<<5)+C(t)*11)
s=x=>13*Math.abs(x%6-3)-19
x.fillText('◕',43+s(a*7),32+s(a*9))

// https://www.dwitter.net/d/7579
c.width|=0;x.globalAlpha=.2;for(k=9;k--;)for(j=22;j--;)for(i=9;i--;)x.fillRect(540+i*99-40*T(m=3*t+k/540-i/12+j/5e2)**3,400+j*9-99*S(2*m)**4,50,9)
// We could probably golf this down to size by using one for loop and some %s
// Or maybe not!
c.width|=0;x.globalAlpha=.2;for(i=1782;i--;)l=i/22%9|0,x.fillRect(540+l*99-40*T(m=3*t+(i/198|0)/540-l/12+i%22/5e2)**3,400+i%22*9-99*S(2*m)**4,50,9)
// --- RELEASED --- Ah we can if we drop the flooring in 198|0
c.width|=0;x.globalAlpha=.2;for(i=1782;i--;)l=i/22%9|0,x.fillRect(540+l*99-40*T(m=3*t+i/1e5-l/12+i%22/5e2)**3,400+i%22*9-199*S(2*m)**8,50,9)
// Tweaking 1
c.width|=0;x.globalAlpha=.3;for(i=1782;i--;)l=i/22%9|0,x.fillRect(540+l*99-T(m=3*t+i/1e5-l/12+i%22/5e2)**9,460+i%22*9-199*S(2*m)**8,50,9)
// Tweaking 2
c.width|=0;x.globalAlpha=.2;for(i=1782;i--;)l=i/22%9|0,x.fillRect(540+l*99-40*T(m=3*t+i/1e5-l/12+i%22/5e2)**3,460+i%22*9-199*S(2*m+.2)**8,50,9)
// Or we ould go back to the earlier version, and try to introduce some powers of 2
// Experimenting with motion blur
x.fillStyle='#fff8';x.fillRect(0,0,2e3,2e3);x.fillStyle='#0009';for(i=1782;i--;)l=i/22%9|0,x.fillRect(540+l*99-T(m=t+i/1e5-l/12+i%22/5e2)**15,460+i%22*9-199*S(2*m)**18,50,40)
x.fillStyle='#fffb';x.fillRect(0,0,2e3,2e3);x.fillStyle='#0009';for(i=1782;i--;)l=i/22%9|0,x.fillRect(540+l*99-T(m=3*t+i/1e5-l/12+i%22/5e2)**7,460+i%22*9-199*S(2*m)**18,50,40)

// I posted this: https://twitter.com/beesandbombs/status/981922654646136832
// Agnes offered this:
with(x)for(w=c.width|=i=8,fillRect(0,0,w,w),translate(960,540);i--;rotate(0.8))for(j=20;j--;m=j%10,n=m/10,fillStyle=R(255*(j<10),0,255*(j>=10),(1+S(j+t))/2),beginPath(),arc(n*500,10*S(j+t),20*n,0,7),fill());
// I remixed it to this:
with(x)for(w=c.width|=i=8,fillRect(0,0,w,w);i--;)for(j=30;j--;m=j%15,n=m*m/225,a=.78*i+S(p=j*.6+t*9)/7,fillStyle=R(k=255,130+k*(j>15),k,1+C(p)),beginPath(),r=n*500,arc(960+r*S(a),540+r*C(a),40*n,0,7),fill());
// Or this
with(x)for(w=c.width|=i=8,fillRect(0,0,w,w);i--;)for(j=32;j--;n=(j%15)**2/23,a=.78*i+S(p=j*.6+t*9)/7,fillStyle=R(k=255,130+k*(j>15),k,1+C(p)),beginPath(),arc(960+n*50*S(a),540+n*50*C(a),4*n,0,7),fill());
// --- RELEASED on codegolf ---
with(x)for(w=c.width|=i=8,fillRect(0,0,w,w);i--;)for(j=32;j--;a=.8*i-S(p=j*.6+t*8)/7,fillStyle=R(k=255,150+k*(j>15),k,.5+C(p)/2),beginPath(),arc(960+12*n*S(a),540+n*12*C(a),n,0,7),fill())n=(j%15)**2/5
// In Firefox it's a little bit too fast.  Here is reduced speed and softened colours a little
with(x)for(w=c.width|=i=8,fillRect(0,0,w,w);i--;)for(j=32;j--;a=.8*i-S(p=j*.6+t*6)/7,fillStyle=R(k=240,150+k*(j>15),k,.6+C(p)/2),beginPath(),arc(960+12*n*S(a),540+n*12*C(a),n,0,7),fill())n=(j%15)**2/5
// Balint's black+white version
with(x)for(c.width|=i=8;i--;)for(j=32;j--;n=(j%15)**2/23,a=.78*i+S(p=j*.6+t*9)/7,fillStyle=R(0,0,0,1+C(p)),beginPath(),r=n*50,arc(960+r*S(a),540+r*C(a),4*n,0,7),fill());
// With rectangles, we can hit the 140 target
for(c.width|=i=8;i--;)for(j=32;j--;x.globalAlpha=.5+C(p=j*.6+t*9)/2,x.fillRect(940+n*9*S(a=.78*i+S(p)/7),520+n*9*C(a),n,n))n=(j%15)**2/4
for(c.width|=i=8;i--;)for(j=32;j--;x.globalAlpha=.5+C(p=j*.6+t*6)/2,x.fillRect(940+n*9*S(a=.8*i+S(p)/7),520+n*9*C(a),n,n))n=(j%16)**2/5
// Reduce to one for loop
for(c.width|=i=256;i--;x.fillRect(940+n*9*S(a=.8*(i%8)+S(p)/7),520+n*9*C(a),n,n))n=((j=i>>3)%16)**2/5,x.globalAlpha=.5+C(p=j*.6+t*6)/2
// Draw rects from desired center, not top-left
for(c.width|=i=256;i--;x.fillRect(960+n*18*S(a=.8*(i%8)+S(p)/7),540+n*18*C(a),k=n*2,k))n=((j=i>>3)%16)**2/9,x.globalAlpha=.5+C(p=j*.6+t*6)/2
// Undo that, make the helix widths change instead
for(c.width|=i=256;i--;x.fillRect(940+n*9*S(a=.8*(i%8)+S(p)/9/S(t)),520+n*9*C(a),n,n))n=((j=i>>3)%16)**2/5,x.globalAlpha=.5+C(p=j*.6+t*6)/2
// Or do 6 tentacles instead of 8 --- RELEASED https://www.dwitter.net/d/7604 ---
for(c.width|=i=192;i--;x.fillRect(940+n*9*S(a=i%6*1.04+S(p)/5+t),520+n*9*C(a),n,n))n=((j=i/6)%16)**2/5,x.globalAlpha=.5+C(p=j*.6+t*6)/2
// Balint suggested adding an arc
// x.font=r+"px A";x.fillText("⚫",x,y)
// x.beginPath();x.arc(x,y,r,0,7);x.fill()
for(c.width|=i=8;i--;)for(j=32;j--;x.globalAlpha=.5+C(p)/2,x.font=n+'px A',x.fillText('⚫',960+n*9*S(a=.8*i+S(p=j*.6+t*6)/7),540+n*9*C(a)))n=(j%16)**2/5
for(c.width|=i=8;i--;)for(j=32;j--;x.globalAlpha=.5+C(p)/2,x.beginPath(),x.arc(960+n*9*S(a=.8*i+S(p=j*.6+t*6)/7),540+n*9*C(a),n,0,7),x.fill())n=(j%16)**2/5
// Shrinking the ball instead of alpha-ing it
for(c.width|=i=8;i--;)for(j=32;j--;x.font=(n*(.5+C(p=j*.6+t*6)/2)|0)+'px A',x.fillText('⚫',960+n*5*S(a=.8*i+S(p)/7),540+n*5*C(a)))n=(j%16)**2/3
// --- RELEASED ---
for(c.width|=i=8;i--;)for(j=32;j--;x.font=(n/6*(1+C(p=j*.6+t*9))|0)+'px A',x.fillText('⚫',960+n*2*S(a=.8*i+S(p)/7),540+n*2*C(a)))n=(j%16)**2
// Four sizes of circles: •●⚫⬤

// yokljo's water drop and ripples https://www.dwitter.net/d/5257
// Original
w=c.width|=0,j=w/2,h=700,x.font="90px A",x.fillText("💧",j-50,(t%1-.55)*w);for(i=-j;i<j;i++)x.fillRect(i+j,h-S(S(i/j*9/(t%1))/i/j*w)*90,2,h)
// Starting to remix
w=c.width|=0,j=w/2,h=700,x.font="90px A",x.fillText("💧",j-50,(t%1-.55)*w),s=x=>x/Math.abs(x);for(i=-j;i<j;i++)x.fillRect(i+j,h-S(i/9-5*t*s(i))*90/i,2,h)

// Yonatan set out to dwittify http://wa.zozuar.org/code.php?c=6ooi
w=c.width=400;for(i=8e4;i--;x.fillRect(i%w,i/w,z/=w,z))d=((X=i%w-200)*X+(Y=i/200-200)*Y)/99,z=((Y/d-S(t))*w^(X/d+C(t))*w)&w
// Medium size grind
w=c.width=400;for(i=8e4;i--;x.fillRect(i%w,i/w,z/=w,z))d=((X=i%w-200)*X+(Y=i/300-150)*Y)/99,z=((Y/d-S(t))*w^(X/d+C(t))*w)&w
// Better w, still needs work
w=c.width=511;for(i=8e4;i--;x.fillRect(i%w,i/w,z/=w,z))d=((X=i%w-200)*X+(Y=i/300-150)*Y)/99,z=((Y/d-S(t))*w^(X/d+C(t))*w)&w
// High detail (VERY SLOW!)
w=c.width=960;for(i=5e5;i--;x.fillRect(i%w,i/w,z/=w,z))d=((X=i%w-480)*X+(Y=i/720-360)*Y)/199,z=((Y/d-S(t))*w^(X/d+C(t))*w)&w
// Better w (VERY SLOW!)
var w,i,z,d,X,Y
w=c.width=1023;for(i=6e5;i--;x.fillRect(i%w,i/w,z/=w,z))d=((X=i%w-512)*X+(Y=i/768-384)*Y)/280,z=((Y/d-S(t))*w^(X/d+C(t))*w)&w
// getImageData, running but slow (and still a bit off)
t||(d=x.createImageData(w=c.width=511,w/2));for(i=1e5;i--;k=4*i,d.data[k]=d.data[k+1]=d.data[k+2]=255*z/w|0,d.data[k+3]=255)p=((X=i%w-256)*X+(Y=i/768-384)*Y)/300,z=((Y/p-S(t))*w^(X/p+C(t))*w)&w;x.putImageData(d,0,0)
// Yonatan published: https://www.dwitter.net/d/7690
// I golfed it a little.  The vars really speed it up.
var X,Y,i,d,w=c.width=99
for(i=6e3;i--;x.fillRect(i%w,i/w|0,1,1))X=i%w-50,Y=i/w-30,d=X*X+Y*Y,x.fillStyle=R(((Y/d-S(t/9))*1e4^(X/d+C(t/7))*1e4)&255)

// yonatan's rushing blocks: https://www.dwitter.net/d/7579
// Rushing left and low --- RELEASED --- https://www.dwitter.net/d/7584
c.width|=0;x.globalAlpha=.2;for(i=1782;i--;)l=i/22%9|0,x.fillRect(540+l*99-40*T(m=3*t+i/1e5-l/12+i%22/5e2)**3,460+i%22*9-199*S(2*m)**8,50,9)
// Rushing right and high
c.width|=0;x.globalAlpha=.2;for(i=1782;i--;)l=i/22%9|0,x.fillRect(540+l*99+40*T(m=3*t-i/1e5+l/12-i%22/5e2)**5,460+i%22*9-199*S(2*m)**8,50,9)

// prplz swaying blocks: https://www.dwitter.net/d/7839
with(x)for(c.width|=i=0,translate(S(t)*300+400,600);i++<9;rotate(-k))translate(100,0),rotate(k=C(t-3.8)/3),fillRect(-25,-200,50,200)
// My remix, swaying from the top
t*=7;with(x)for(c.width|=i=0,translate(S(t)*300+400,400);i++<9;)translate(100,0),rotate(k=C(t+.1)/2),fillRect(-25,100,50,200),rotate(-k)
// My remix, swaying from the bottom
t*=7;with(x)for(c.width|=i=0,translate(S(t)*300+400,600);i++<9;)translate(100,0),rotate(k=C(t-2.7)/2),fillRect(-25,-120,50,200),rotate(-k)

// Xen's squidgy worm: https://www.dwitter.net/d/3528
for(i=2e3;i--;x.fillStyle=`hsla(${t+X},80%,${80+20*S(i)}%,.01)`)x.fillRect(X=i-S(t-i)*1e3,400+400*C(t+i)+400*S(X/400+t),90,90);

// Balint's falling bouncing ball: https://www.dwitter.net/d/7980
c.width=280
for(i=9;i-->-1;)x.fillRect(D=i*20+(K=-(t%1)*20),D,W=20,W)
x.font="30px A"
x.fillText("●",94,90-20*Math.abs(C(3*(t%1))))
// Double bounce
c.width=280
for(i=9;i--;)x.fillRect(D=i*20+(K=-(t%1)*20),D,W=20,W)
x.font="30px A"
x.fillText("●",96,99+K-20*(1-t%1)*Math.abs(C(6.3*(t%1))))
// Double bounce with higher second bounce
c.width=280
for(i=9;i--;)x.fillRect(D=i*20+(K=-(t%1)*20),D,W=20,W)
x.font="30px A"
x.fillText("●",96,99+K-20*(1.2-t%1)*Math.abs(C(6.3*(t%1))))
// Larger boxes
c.width=380
for(i=9;i--;)x.fillRect(D=i*30+(K=-(t%1)*30),D,W=30,W)
x.font="30px A"
x.fillText("●",88,90+K-30*(1.2-t%1)*Math.abs(C(6.3*(t%1))))
//
c.width=580
for(i=9;i--;)x.fillRect(D=i*40+(K=-(t%1)*40),D,W=40,W)
x.font="30px A"
x.fillText("●",160,160+K-40*(1.2-t%1)*Math.abs(C(6.3*(t%1))))
// RELEASED but then deleted
c.width=280
for(i=9;i--;)x.fillRect(D=i*20+(K=-(t%1)*20),D,W=20,W)
x.font="24px A"
x.fillText("●",98,99+K-20*(1.1-t%1)*Math.abs(C(6*(t%1))))
// --- RELEASED --- https://www.dwitter.net/d/7995
c.width=280,W=20
for(i=9;i--;)x.fillRect(D=i*W-(K=(t%1)*W),D,W,W)
x.font="24px A"
x.fillText("●",98,101-K-W*(1.2-t%1)*(C(6.3*(t%1))**2)**.5)
// Multibounce
x.fillText("●",98,101-K-W*(1-t%1)**2*(C(12*(t%1))**2)**.5)
// Multibounce (more)
x.fillText("●",98,101-K-W*(1-t%1)**2*(C(15*(t%1))**2)**.5)
// Bouncing upwards! (poor)
c.width=280,W=20
for(i=9;i-->-1;)x.fillRect(D=i*W+(K=(t%1)*W),D,W,W)
x.font="24px A"
x.fillText("●",98,80+K-W*1.2*(t%1)*(C(6*(t%1))**2)**.5)
// Bouncing upwards! (better, but still not perfect)
c.width=280,W=20
for(i=9;i-->-1;)x.fillRect(D=i*W+(K=(t%1)*W),D,W,W)
x.font="24px A"
x.fillText("●",98,80+K-W*1.2*(t%1)*(C(6*(t%1))**2)**.5)

// NOTE: Instead of simulating bouncing with a sine wave (inaccurate), New_Core has a nice short iterative method:
t?c.width|=0:Y=0
Y+=(t%6)-3

// TODO Parallax trees: https://www.dwitter.net/d/2357
// There are 23 chars free here.  How about some mountains?

// AnthonyLewis's rippes: https://www.dwitter.net/d/8079
// Trying to make the ripples fade out using lineWidth
// A lot of golfing here
t?0:a=[];w=c.width^=Z=Math.random
k=frame%50
a[k]=[Z()*w,Z()*w]
for(e of a)x.beginPath(i=k++%50,x.lineWidth=9/i,x.arc(...e,i*3,0,7),x.stroke())

// George's cycles: https://www.dwitter.net/d/8115
for(j=1;j<7;j++)
for(i=1;i<7;i++)
x.fillRect(958+80*S(i*t)+170*(i-3.5),170*(j-3.5)+538-80*C(j*t),4,4)

// TODO: Finish "Shattering Floors" https://www.dwitter.net/d/8107

// TODO: Somewhat Dwittery Bros, Mario but with Unicode

// Yonatan's smoke: https://www.dwitter.net/d/8094
c.width|=0
for(i=3e3;i--;x.fillRect(960+(h=S(i/88-9*t)*i**2/2e4),1200-i/2-C(-9*t+i/55+h*h/1e5)*h*i/4e3,s=99/i**.3,s))x.globalAlpha=.01
//
c.width|=0;t*=1
for(i=3e3;i--;x.fillRect(960+(h=S(i/88-t)*i**3/3e7),1200-i/2-C(t+i/55+h*h/1e5)*h*i/4e3,s=i**2/1e5,9))x.globalAlpha=.01

// Debian logo: https://www.dwitter.net/d/8475
with(x)for(z=i=1e3;i-=8;t>5.6?fillText("debian",640,z):fillRect((r=90**(t/15)*70)*S(m=2*t+i/8e2+Math.random()/4)+z,C(m)*r+390,9,9))fillStyle='#d15',font="14em'"
with(x)for(i=70;i--;t>5.6?fillText("debian",640,1e3):fillRect((r=90**(t/15)*70)*S(m=2*t+i/80+(t*i%1)/3)+1e3,C(m)*r+390,9,9))fillStyle='#d15',font="14em'"
with(x)for(i=4*t;i-->0;t>5.7?fillText("debian",640,1e3):fillRect((r=80+9*t*t)*S(m=2*t+i/20+(t**i%1)/8)+1e3,C(m)*r+390,9,9))fillStyle='#d15',font="14em'"
t=((t/5.6)**0.5)*5.6;with(x)for(i=9;i--;t>5.6?fillText("debian",640,1e3):fillRect((r=90**(t/15)*70)*S(m=2*t+i/80+(t*i%1))+1e3,C(m)*r+390,9,9))fillStyle='#d15',font="14em'"
t=t**0.5;with(x)for(i=30;i--;t>2?fillText("debian",640,1e3):fillRect((r=90**(t/6)*80)*S(m=5.6*t+i/80+t*i%1)+1e3,C(m)*r+390,9,9))fillStyle='#d15',font="14em'"
// Favourite
t=t**0.5;with(x)for(i=30;i--;t>2?fillText("debian",640,1e3):fillRect((r=80+70*t*t)*S(m=5.6*t+i/80+t*i%1)+1e3,C(m)*r+390,9,9))fillStyle='#d15',font="14em'"
with(x)for(i=25;i--;t>2?fillText("debian",760,940):fillRect((r=80+150*t)*S(m=8*t**.5+t*i%1)+1e3,C(m)*r+390,i,i))fillStyle='#d15',font="9em'"
with(x)for(i=20;i--;t>2?fillText("debian",760,940):fillRect((r=80+99*t)*S(m=8*t**.5+t*i%1)+1e3,C(m)*r+390,i,i))fillStyle='#d15',font="9em'"
with(x)for(i=22;i--;t>2?fillText("debian",760,960):fillRect((r=70+180*t)*S(m=8*t**.5+t*i%1)+1e3,C(m)*r+390,i,i))fillStyle='#d15',font="9em'"
with(x)for(i=90;i--;t>2?fillText("debian",760,940):fillRect((r=80+150*t)*S(m=8*t**.5+t*i%1)+1e3,C(m)*r+390,9,9))fillStyle='#d15',font="9em'"
with(x)for(i=14;i--;t>5?fillText("debian",760,940):fillRect((r=50+60*t)*S(m=5*t**.5+t*i%1)+1e3,C(m)*r+390,i,i))fillStyle='#d15',font="9em'"
// Released
with(x)for(i=23;i--;t>2?fillText("debian",760,980):fillRect((r=70+180*t)*S(m=8*t**.5+t*i%1)+1e3,C(m)*r+390,i,i))fillStyle='#d15',font="9em'"
// The favourite above, but without colour
t**=.5;with(x)for(i=30;i--;t>2?fillText("debian",640,1e3):fillRect((r=70+80*t*t)*S(m=5.6*t+i/80+t*i%1)*.9+1e3,C(m)*r+390,9,9))font="14em'"
with(x)for(i=30;i--;t>4?fillText("debian",640,1e3):fillRect((r=70+80*t)*S(m=5.6*t**.5+i/80+t**.5*i%1)*.9+1e3,C(m)*r+390,9,9))font="14em'"
with(x)for(i=30;i--;t>4?fillText("debian",640,1e3):fillRect((r=70+80*t)*S(m=5*t**.6+i/99+t**.5*i%1)*.9+1e3,C(m)*r+390,9,9))font="14em'"
// Probably the best B+W
with(x)for(i=30;i--;t>4?fillText("debian",640,1e3):fillRect((r=70+80*t)*S(m=5.6*t**.5+i/80+t**.5*i%1)*.93+1e3,C(m)*r+390,9,9))font="14em'"
with(x)for(i=30;i--;t>4?fillText("debian",640,1e3):fillRect((r=70+80*t)*S(m=5*t**.6+t*i%1)*.93+1e3,C(m)*r+390,9,9))font="14em'"
// Very rough
with(x)for(i=30;i--;t>4?fillText("debian",640,1e3):fillRect((r=70+80*t)*S(m=5*t**.6+t*i%1)*.93+1e3,C(m)*r+390,i,i))font="14em'"
// Neatish
with(x)for(i=40;i--;t>4?fillText("debian",640,1e3):fillRect((r=70+80*t)*S(m=5*t**.6+t*i%1)+1e3,C(m)*r+390,9,9))fillStyle='#d15',font="14em'"

// Knifa's red wall https://www.dwitter.net/d/6344 
// I wanted it to feel like a 3d wall, perhaps inside the Tron universe, so:
c.style.background='black'
for(i=0;i<192;i++)for(j=0;j<32;j++){q=i-96;r=j-16
x.fillStyle=R(S(t*q*r/10)*255)
x.fillRect(i*8+200,600-(j-5)*Math.abs(i-96)/5,8,8)}
//
c.style.background=R();for(i=192;i--;)for(j=32;j--;)q=i-96,x.fillStyle=R(S(t*j/q*99)*255),x.fillRect(i*8+200,800-(j-3)*Math.abs(q)/4,8,8)
// Heavier
c.style.background=R()
for(i=192;i--;)for(j=96;j--;)q=i-96,x.fillStyle=R(S(t*j/q*99)*255),x.fillRect(i*9+90,800-(j-9)*Math.abs(q)/9,8,8)
// Rather heavy
c.style.background=R();for(i=384;i--;)for(j=96;j--;)q=i-192,x.fillStyle=R(S(t*j/q*99)*255),x.fillRect(i*4+192,800-(j-9)*Math.abs(q)/30,4,4)
// Very heavy
c.style.background=R();for(i=768;i--;)for(j=96;j--;)q=i-384,x.fillStyle=R(S(t*j/q*99)*255),x.fillRect(i*2+192,800-(j-9)*Math.abs(q)/40,2,2)

// Remixing trancor and Xen's plasma: https://www.dwitter.net/d/9071
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(i/5-t/.9)+S(k/6+S(t))*S(i/20+t/.7))*150},90%,50%`
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(i/5-t/.9)+S(k/6+S(t))*S(i/20+t/.7)-t)*99},80%,75%`
// That old alpha trick again.  Interesting where the patterns form
t||(c.width=69);t*=9;for(i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(i/5-t/.9)+S(k/6+S(t))*S(i/20+t/.7)-t)*99},99%,66%,.01`
// Revert; spice it up a bit
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(i/5-t/.9)+C(C(i/9)+k/5+S(t))*S(i/20+t/.7)-t)*99},80%,75%`
// Greyscale version
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(0,0%,${50+S(3*(C(i/5+t/.9)+C(C(i/9)+k/5+S(t))*S(i/20+t/.7)+t))*30}%`
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(0,0%,${50+S(2*(C(i/5+t*2)+C(C(i/9)+k/5+S(t))*S(i/20+t/.9)+t))*30}%`
// Color redux (don't stray too far from a central colour which slowly changes over time)
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(8*C(2*(C(i/5-t/.9)+C(C(i/9)+k/5+S(t))*S(i/20+t/.7)))-t)*9},80%,75%`
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(6*C(3*(C(i/5-t/.9)+C(C(i/9)+k/5+S(t))*S(i/20+t/.7)))+t)*9},80%,75%`
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${36*C(2*(C(i/5-t/.7)+C(C(i/8)+k/5+S(t))*S(i/9+t/.9)))+t*9},90%,75%`
// Revert; colour redux
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(i/5-t/.9)+C(C(i/9)+k/5+S(t))*S(i/20+t/.7)-t)*60+t},80%,75%`
// More psychedelic (too long)
for(c.width=i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(4*(C(i/5-t/.9)+C(C(i/9)+k/5+S(t))*S(i/20+t/.7)-t)))*99-99*t},80%,60%`
for(t?0:c.width=69,i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(4*(C(i/7-t/.9)+C(C(i/9)+k/9+S(t))*S(i/20+t/.7)-t)))*99-99*t},80%,60%`
for(c.width=i=99;i--;)for(k=56;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(4*(C(i/11-t/.9)+C(C(i/13)+k/11)*S(i/17+t/.7)-t)))*99-99*t},80%,60%`
for(t?0:c.width=69,i=69;i--;)for(k=39;k--;x.fillRect(i,k,1,1))x.fillStyle=`hsl(${(C(4*(C(i/11-t/.9)+C(C(i/13)+k/9+S(t))*S(i/23+t/.7)-t)))*99-99*t},80%,60%`

// A nice spiral
for(c.width|=0,i=3300;i--;x.beginPath())x.arc(S(i/9-t)*i/3+960,C(i/9-t)*i/3+540,i/2e2+2,0,7),x.fill()
// Animated
k=9+S(t)/50;for(c.width|=0,i=3300;i--;x.beginPath())x.arc(S(i/k)*i/3+960,C(i/k)*i/3+540,i/2e2+2,0,7),x.fill()

// iverjo's android spinner: https://www.dwitter.net/d/620
c.width|=0;x.beginPath();x.arc(960,500,199,t*9+2*C(t*3),t*9+3.2+2*S(t*3));x.lineWidth=40;x.strokeStyle=`hsl(${(t|0%4)*90} 99%50%`;x.stroke();

// kipkat's matrix https://www.dwitter.net/d/9220
x.font='3em x';r=Math.random;for(i=166;i--;x.fillText('mtrx'[r()*4|0],y*32,z*32*z/t))y=r()*66,z=r()*33,x.fillStyle=C(t*i)<0?'#0f0':'#000';x.drawImage(c,0,9)
x.font=`3em'`,r=Math.random;for(i=1e3;i--;x.fillText('mtrc'[r()*4|0],r()*2e3,(r()*1e3)**2/t))x.fillStyle=R(0,(C(t*i)>.9)*255);x.drawImage(c,0,9)
x.font=`3em'`,r=Math.random;for(i=1e3;i--;x.fillText('mtrc'[i%4],r()*2e3,(r()*1e3)**2/t))x.fillStyle=R(0,C(t*i)*9e3-8e3);x.drawImage(c,0,9)
// Good (like original)
x.font=`3em'`,r=Math.random;for(i=400;i--;x.fillText('mtrc'[i%4],r()*2e3,(r()*1e3)**2/t))x.fillStyle=R(0,C(t*i)*9e3-8e3);x.drawImage(c,0,9)
x.font=`3em'`,r=Math.random;for(i=50;i--;x.fillText('matricsxz'[i%9],r()*2e3,900*r()**9))x.fillStyle=R(0,C(t*i)*9e3-8e3);x.drawImage(c,0,9)
x.font=`3em'`,r=Math.random;for(i=50;i--;x.fillText('matwicsxz'[i%9],r()*2e3,900*r()**9))x.fillStyle=R(0,C(t*i)*1e3-745);x.drawImage(c,0,9)
// --- RELEASED --- https://www.dwitter.net/d/9227
x.font=`3em'`,r=Math.random;for(i=50;i--;x.fillText('makwicths'[i%9],r()*2e3,900*r()**9))x.fillStyle=R(0,C(t*i)*1e3-745);x.drawImage(c,0,9)
// Good (fine)
x.font=`25px'`,r=Math.random;for(i=50;i--;x.fillText('matricths'[i%9],r()*2e3,900*r()**9))x.fillStyle=R(0,C(t*i)*1e3-745);x.drawImage(c,0,9)
r=Math.random;for(i=1e3;i--;x.fillText('mtrc'[r()*4|0],y*32,z*32*z/t))y=r()*66,z=r()*33,x.fillStyle=R(0,(C(t*i)>.9)*255);x.drawImage(c,0,9)
// --- RELEASED --- https://www.dwitter.net/d/9228
r=Math.random;for(i=1e3;i--;x.fillText('mtrc'[r()*4|0],y*32,z*32*z/t))y=r()*66,z=r()*33,x.fillStyle=R(0,C(t*i)*1e3-745);x.drawImage(c,0,9)
r=Math.random;for(i=600;i--;x.fillText('mtrc'[r()*4|0],y*32,1e3*r()**9))y=r()*66,z=r()*33,x.fillStyle=R(0,C(t*i)*1e3-745);x.drawImage(c,0,9)
// Purer version (not as good)
r=Math.random;for(i=20;i--;x.fillText('mtrc'[r()*4|0],2e3*r(),9))x.fillStyle=R(0,C(t*i)*1e3-745);x.drawImage(c,0,6)
// Moving columns at different speeds:
r=Math.random;for(i=20;i--;x.fillText('mtrc'[r()*4|0],2e3*r(),9))x.fillStyle=R(0,C(t*i)*1e3-745),p=2e3*i/20,x.drawImage(c,p,0,99,h=1e3,p,9+6*C(i*p),99,h)

// kipkat's sun and sea https://www.dwitter.net/d/9298
x.fillStyle='cyan';x.fillRect(0,0,y=2e3,y)
x.fillStyle='blue';x.fillRect(0,540,y,y)
x.fillStyle='yellow'
for(j=-400;j++<400;)W=j>0?(1.6e5-j*j)**.5:(400+Math.random()*j),x.fillRect(960-W,540-j,W*2,1)
// for(j=-400;j++<400;)W=j>0?(1.6e5-j*j)**.5:(400+j*((40*t^-j)%9)/9),x.fillRect(960-W,540-j,W*2,1)
// for(j=-400;j++<400;)W=j>0?(1.6e5-j*j)**.5:(400+j*(1+S(j/6+t*6))/3),x.fillRect(960-W,540-j,W*2,1) 
// for(j=-600;j++<400;)W=j>0?(1.6e5-j*j)**.5:(400+j/3+2*j*(S(j/6+t*6))/5),x.fillRect(960-W,540-j,W*2,1)

// cantelope's soft rainbow spiral https://www.dwitter.net/d/9324
for(w=i=c.width=1e3;i--;x.fillStyle=`hsl(${99*t+i*S(t)},50%,93%)`,x.fillRect(w/2+i*S(T=i/.955+i/w*S(t)-t)-s/2,w/3+i*C(T)-s/2,s,s))s=5+i/6
for(w=i=c.width=1e3;i--;x.fillStyle=`hsl(${i/3-99*t},50%,93%)`,x.fillRect(w/2+d*S(T=i/.955+i/w*S(t)-t),w/3+d*C(T),s,s))d=i*i/w,s=4+d/6
for(w=i=c.width=2e3;i--;x.fillStyle=`hsl(${i/3-99*t},50%,93%)`,x.fillRect(w/2+d*S(T=i/.955+i/w*C(i/4e2-5*t)-t),w/3+d*C(T),s,s))d=i*i/w,s=d/6
for(w=i=c.width=1e3;i--;x.fillStyle=`hsl(${i/3-99*t},50%,93%)`,x.fillRect(w/2+d*S(T=i/.955+i/500*C(i/4e2-5*t)-t),w/3+d*C(T),s,s))d=i,s=9+d/8

// Flooded by drips https://www.dwitter.net/d/9446 
// Just some gentle golfing:
c.width=w=2e3;for(i=0;i<w;i+=250)x.fillStyle='#6bf',x.font='6em a',x.fillText('💧',i,t*1e3%(1.1e3+i)-99);x.fillRect(0,1080-t*9,w,w)

// Galaxtone's bat+ball / pong
t||(v=V=y=18,w=W=.5);onmousemove=e=>y=e.y/9;c.width|=a=30;x[f='fillRect'](9,y*a,a,210);z=(V-y-3)/3;Z=z*z<1;w=v>63|v<0&Z?-w:w;W=V>a|V<0?-W:v<0&Z?z:W;v=v<-2?-a:v+w;V+=W;x[f](v*a,V*a,a,a)

// Remix Balint's world: https://www.dwitter.net/d/9487
// Make it turn (the trees rotate around), while a dog chases a robot across the top
with(x)t?k-=.1:arc(0,0,370,0,7,translate(960,540,k=2,fillStyle="#080")),font="8em A",k<0&&rotate(.314,k=2),fill(fillText("🌳",-70,k*50-395))
with(x)setTransform(10,0,0,10,960,540),t?k-=.1:arc(0,0,30,0,7,k=2,fillStyle="#080"),fill(),k<0&&rotate(.314*t,k=2),fillText("🌳",0,k*5-39)
c.width|=0;with(x){setTransform(10,0,0,10,960,540),arc(0,0,30,0,7),fillStyle="#080",fill();for(k=9;k--;)rotate(k>7?t:k),fillText("🌳",0,-39)}
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=9;k--;)fillText("🌳",43+70*S(a=k+t),97-70*C(a))}
// Ghost: 👻
// Robot: 🤖 (oh what a shame, it is face only)
// Octopus: 🐙
// Dog chasing alien
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=19;k--;)j=k>1,fillText(k?j?"🌳":"🐕":"👾",43+70*S(a=6+k/2+j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)}
// Dog chasing car
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=19;k--;)j=k>1,fillText(k?j?"🌳":"🐕":"👾",43+70*S(a=6+k/2+j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)}
// Dog chasing cow
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=19;k--;)j=k>1,fillText(k?j?"🌳":"🐕":"🐄",43+70*S(a=25+k/2+j*t-!j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)}
// Rabbit chasing turtle
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=19;k--;)j=k>1,fillText(k?j?"🌳":"🐕":"🐄",43+70*S(a=25+k/2+j*t-!j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)}
// === GOOD === Dog chasing police car 179
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=19;k--;)j=k>1,fillText(k?j?"🌳":"🐕":"🚓",43+70*S(a=25+k/2+j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)}
// Failed golf with .forEach 186
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();[..."🚓🐕🌳🌳🌳🌳"].forEach((c,k)=>{j=k>1;fillText(c,43+70*S(a=25+k/2+j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)})}
// Failed golf with dereference array to get sprite (broken)
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=19;k--;)j=k>1,fillText([..."🚓🐕🌳🌳"][k&3],43+70*S(a=25+k/2+j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)}
// Failed golf with dereference array to get sprite (working)
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=19;k--;)j=k>1,fillText([..."🚓🐕🌳"][k<2?k:2],43+70*S(a=25+k/2+j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)}
// Dog chasing police car UTF16
c.width|=0;with(x){scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill();for(k=19;k--;)j=k>1,fillText(k?j?"\uD83C\uDF33":"\uD83D\uDC15":"\uD83D\uDE93",43+70*S(a=25+k/2+j*t),97-70*C(a)-!j*9*(S(7*t-k)**2)**.5)}
// Fix speeds for faster machine, golf a little
// === PUBLISHED === on codegolf at https://codegolf.tk/a/282
with(x)for(c.width|=0,scale(20,20),arc(48,97,70,0,7),fillStyle="#080",fill(),k=20;k--;fillText(k?j?"🌳":"🐕":"🚓",43+70*S(a=25+k/2+j*t/2),97-70*C(a)-!j*9*(S(5*t-k)**2)**.5))j=k>1
// Here is a flat version with no earth (the fillStyle may as well be removed)
with(x)for(c.width|=0,scale(20,20),fillStyle="#080",k=7;k--;fillText(k?j?"🌳":"🐕":"🚓",(25+40*k+9*j*t)%99,40-!j*9*(S(5*t-k)**2)**.5))j=k>1 

// icecuber's snake: https://www.dwitter.net/d/495
// Make it grow longer as it eats
c.width=-1;F=(n,r=0,m=1)=>n?F(n/9|0,n/3%3^1?r+n%3*m:m*3-1-r-n%3*m,m*3):r%27*9;for(j=t|0;j--;x.fillRect(F(k|0),F(k/3|0),8,8))k=j?t*8-j-7:t<<3
// TODO: Change the algorithm so there is less touching as the snake grows longer (maybe 5x5 squares instead of 3x3)
// With fading: t?0:c.width=432;x.fillStyle='#fff1';x.fillRect(0,0,432,300);x.fillStyle='black';F=(n,r=0,m=1)=>n?F(n/9|0,n/3%3^1?r+n%3*m:m*3-1-r-n%3*m,m*3):r%27*9;for(j=6;j--;)k=j?t*8-j-7:t<<3,x.fillRect(F(k|0),F(k/3|0),7,7)

// Based on: https://twitter.com/beesandbombs/status/1006940434877251585
// Balint's rotating hexagons: https://www.dwitter.net/d/9771
// Slow down the rotation 141
for(c.width=500,x.scale(20,X=20);X--;)for(Y=20;Y--;x.fill())for(i=6,x.beginPath();i--;)x.lineTo(C(a=(i*4.2+1+C(t))/4)+X*2+Y%2,S(a)+1+Y*1.7-1)
// closer to perfect: a=(i*4.16+1.14+1.04*C(t))/4
// TODO: f possible, rotate slightly earlier at different X/Y
// Try un-nesting the loop (141)
for(c.width=500,x.scale(20,20),P=640;P--;x.fill())for(Y=P>>5,i=6,x.beginPath();i--;)x.lineTo(C(a=(i*4.2+1+C(t))/4)+P%32*2+Y%2,S(a)+1+Y*1.7-1)
// prplz:
c.width=-1;for(x.scale(X=q=15,q);X--;)for(Y=q;Y--;x.fill())for(x.beginPath(i=6);i--;)x.lineTo(C(a=i*1.04+S(t)*1.57+1.57)+X*2+Y%2,S(a)+Y*1.7)
// Apply above to prplz: https://www.dwitter.net/d/9780
c.width=-1;for(x.scale(X=q=15,q);X--;)for(Y=q;Y--;x.fill())for(x.beginPath(i=6);i--;)x.lineTo(C(a=(i*4.2+1+C(t))/4)+X*2+Y%2,S(a)+Y*1.7)
c.width=-1;for(P=256,x.scale(15,15);P--;x.fill())for(Y=P>>4,x.beginPath(i=6);i--;)x.lineTo(C(a=(i*4.2+1+C(t))/4)+P%16*2+Y%2,S(a)+Y*1.7)
// Back and forth, waving from right to left (139) --- RELEASED --- https://www.dwitter.net/d/9784
c.width=-1;for(x.scale(X=q=15,q);X--;)for(Y=q;Y--;x.fill())for(x.beginPath(i=6);i--;)x.lineTo(C(a=(i*4.2+1+C(t+X/5))/4)+X*2+Y%2,S(a)+Y*1.7)
// Keep rotating, no wave (138) --- RELEASED --- https://www.dwitter.net/d/9783
c.width=-1;for(x.scale(X=q=15,q);X--;)for(Y=q;Y--;x.fill())for(x.beginPath(i=6);i--;)x.lineTo(C(a=(i*4.2+.5+t+C(t))/4)+X*2+Y%2,S(a)+Y*1.7)
c.width=-1;for(x.scale(X=15,15);X--;)for(Y=15;Y--;x.fill())for(x.beginPath(i=6);i--;)x.lineTo(C(a=(i*4.2+.5+t+C(t))/4)+X*2+Y%2,S(a)+Y*1.7)
// The last one with waves (146)
c.width=-1;for(x.scale(X=15,15);X--;)for(Y=15;Y--;x.fill())for(x.beginPath(i=6);i--;)q=t+X/5,x.lineTo(C(a=(i*4.2+.5+q+C(q))/4)+X*2+Y%2,S(a)+Y*1.7)
// Balint's version which waves from the middle: https://www.dwitter.net/d/9787
c.width=-1;for(x.scale(X=14,14);X--;)for(Y=9;Y--;x.fill())for(x.beginPath(i=6);i--;)k=t*5-((X-5)**2+(Y-4)**2)**.5,x.lineTo(C(a=(i*4.2+.5+k+C(k))/4)+X*2+Y%2,S(a)+Y*1.7);
// I tweaked `a` to turn 1/12 instead of 1/4 circle (172, 166), and then golfed the expression a little
c.width=-1;for(x.scale(X=14,14);X--;)for(Y=9;Y--;x.fill())for(x.beginPath(i=6);i--;)k=t*5-((X-5)**2+(Y-4)**2)**.5,x.lineTo(C(a=(i*4.2+(k+C(k))/3-.5)/4)+X*2+Y%2,S(a)+Y*1.7);
c.width=-1;for(x.scale(X=14,14);X--;)for(Y=9;Y--;x.fill())for(x.beginPath(i=6);i--;)k=t*5-((X-5)**2+(Y-4)**2)**.5,x.lineTo(S(a=i*1.05+(S(k)-k)/12)+X*2+Y%2,C(a)+Y*1.7)
// yonatan continued golfing
c.width=-1;for(x.scale(X=14,X);X--;)for(Y=9;Y--;x.fill())for(x.beginPath(i=6);i--;)k=t*5-Math.hypot(X-5,Y-4),x.lineTo(C(a=i/.95+(S(k)-k)/12)+X*2+Y%2,S(a)+Y/.6)
c.width=-1;with(x)for(scale(X=14,X);X--;)for(Y=9;Y--;fill())for(beginPath(i=6);i--;)k=t*5-Math.hypot(X-5,Y-4),lineTo(C(a=i/.95+(S(k)-k)/12)+X*2+Y%2,S(a)+Y/.6)
c.width=-1;with(x)for(scale(X=13,X);X--;)for(Y=9;Y--;fill())for(beginPath(i=6);i--;)k=t*5-Math.hypot(X-6,Y-4),lineTo(C(a=i/.95+(S(k)-k)/12)+X*2+Y%2,S(a)+Y/.6)
// Instead of hypot, we could use something manhatten-ish, but this is 2 chars longer: ((X-6)**2+(Y-4)**2)/8
// Inline the assignment of k
c.width=-1;with(x)for(scale(X=13,X);X--;)for(Y=9;Y--;fill())for(beginPath(i=6);i--;)lineTo(C(a=i/.95+(k-S(k=t*5-Math.hypot(X-6,Y-4)))/12)+X*2+Y%2,S(a)+Y/.6)
// Add an invert
c.style.filter='invert(1';c.width=-1;with(x)for(scale(X=13,X);X--;)for(Y=9;Y--;fill())for(beginPath(i=6);i--;)lineTo(C(a=i/.95+(k-S(k=t*5-Math.hypot(X-4,Y-4)))/12)+X*2+Y%2,S(a)+Y/.6)
// --- GREAT --- Feeding the staircase function into the staircase function to make longer flats and sharper rises:
c.style.filter='invert(1';c.width=-1;with(x)for(scale(X=13,X);X--;)for(Y=9;Y--;fill())for(beginPath(i=6);i--;)lineTo(C(a=i/.95+(S(q=S(k=t*5-Math.hypot(X-4,Y-4))-k)-q)/12)+X*2+Y%2,S(a)+Y/.6)
// --- REGRESSION --- Make the staircase function a Javascript function (+2)
c.style.filter='invert(1';c.width=-1;s=t=>t-S(t);with(x)for(scale(X=13,X);X--;)for(Y=9;Y--;fill())for(beginPath(i=6);i--;)lineTo(C(a=i/.95+s(s(t*5-Math.hypot(X-4,Y-4)))/12)+X*2+Y%2,S(a)+Y/.6)
// Remove the invert and triple feed the staircase function
c.width=-1;with(x)for(scale(X=13,X);X--;)for(Y=9;Y--;fill())for(beginPath(i=6);i--;)lineTo(C(a=i/.955-(S(r=S(q=S(k=t*7-Math.hypot(X-4,Y-4))-k)-q)-r)/12)+X*2+Y%2,S(a)+Y/.6)
// Make neighbours turn sooner rather than later
c.width=-1;with(x)for(scale(X=13,X);X--;)for(Y=9;Y--;fill())for(beginPath(i=6);i--;)lineTo(C(a=i/.955-(S(r=S(q=S(k=t*7-Math.hypot(X-4,Y-4)/2)-k)-q)-r)/12)+X*2+Y%2,S(a)+Y/.6)

// https://twitter.com/aerotwist/status/970428201733378048
c.width=1920;with(x)for(j=22;j--;fillStyle=j%2?'#000':'#fff',fill())for(s=70*j,beginPath(i=6);i--;)lineTo(960+s*C(a=i/.955+(S(q=S(k=4*t-j/6)-k)-q)/6),540+s*S(a))
c.width=1920;with(x)for(j=22;j--;fillStyle=j%2?'#000':'#fff',fill())for(s=70*j,beginPath(i=6);i--;)p=S(q=S(k=4*t-j/6)-k)-q,lineTo(960+s*C(a=i/.955+p/6),540+s*S(a))
c.width=1920;with(x)for(j=22;j--;fillStyle=j%2?'#000':'#fff',s>0&&fill())for(s=70*j,p=S(q=S(k=4*t-j/6)-k)-q,s-=70*p/3.14%140,beginPath(i=6);i--;)lineTo(960+s*C(a=i/.955+p/6),540+s*S(a))
c.width|=0;with(x)for(j=22;j--;fillStyle=j%2?'#000':'#fff',s>0&&fill())for(p=(S(q=S(k=4*t-j/6)-k)-q)/6,s=70*j-134*p%140,beginPath(i=6);i--;)lineTo(960+s*C(a=i/.955+p),540+s*S(a))
c.width|=0;with(x)for(j=22;j--;fillStyle=j%2?'#000':'#fff',s>0&&fill())for(p=S(q=S(k=4*t-j/6)-k)-q,s=70*j-22.29*p%140,beginPath(i=6);i--;)lineTo(960+s*C(a=i/.955+p/6),540+s*S(a))
// Found yonatan's earlier attempt, titled "meh"
for(i=19;i--;x.fill())for(x.beginPath(m=6);m--;)x.fillStyle=i%2?R():'#fff',x.lineTo(960+C(n=m*1.04+t+(q=S(t)**2))*(a=(i-(q+1)%1)*88),540+S(n)*a)
// With a couple of those tricks, I can reduce mine somewhat
// --- PUBLISHED --- https://www.dwitter.net/d/9830
with(x)for(j=22;j--;fillStyle=j%2?R():'#fff',s>0&&fill())for(p=S(q=S(k=4*t-j/6)-k)-q,s=70*j-22.29*p%140,beginPath(i=6);i--;)lineTo(960+s*C(a=i/.955+p/6),540+s*S(a))
// Fun accidents
//for(i=19;i--;x.fill())for(x.beginPath(m=6);m--;)x.fillStyle=i%2?R():'#fff',p=s=70*i-22.29*(t+i/9)%140,x.lineTo(960+C(a=m*1.04+p)*s,540+S(a)*s)
// Expanding yonatan's using my step function (not step function of step function) (UNFINISHED, imperfect)
for(i=19;i--;x.fill())for(x.beginPath(m=6);m--;)x.fillStyle=i%2?R():'#fff',p=t-i/6-S(t-i/6),s=70*i-22.29*p%140,x.lineTo(960+C(a=m*1.04+p)*s,540+S(a)*s)

// Dwitterer wanted help golfing his zig zags
for(c.width|=l=10;l--;x.beginPath(x.stroke()))for(i=1e3,Y=v=300+l*50;i--;x.lineTo(X+50,i%2?Y+=50:Y-=50))x.moveTo(X=S(t/2)*200-3*v+50*i,Y)
//
c.width=-1;for(l=10;l--;x.beginPath(x.stroke()))for(i=1e3,Y=v=20+l*18;i--;x.lineTo(X+50,i%2?Y+=50:Y-=50))x.moveTo(X=S(t/2)*50-3*v+18*i,Y)
//
for(c.width=-1,l=10;l--;x.beginPath(x.stroke()))for(i=1e3,Y=v=47+l*8;i--;x.lineTo(X+8,Y+=i%2*16-8))x.moveTo(X=S(t/2)*31-3*v+8*i,Y)

// Remixing aemkei's twinkling dots: https://www.dwitter.net/d/9827
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=9*S((i+t/3)/2)*(S(i**5)*S(t*2-i/9))),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5/h*S(i+t/3),i,w,0,7)
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=9*S((i+t/3)/2)*(S(i**5)*S(t*2-i/9))),w>0&&x.arc(h+h*500*C((i-500)/300)**(1/7)**.5/h*S(i+t/3),i,w,0,7)
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=9*S((i+t/3)/2)*S(t*2-i**5)-3),w>0&&x.arc(h-h*(2e5-(i-500)**2)**.5/h*S(i+t/3)*S(i**7),i,w,0,7)
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=15*S((i+t/3)/2)*(S(i**5)*S(t-i/9))-7),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5/h*S(i+t/3),i,w,0,7)
// --- GOOD ---
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=15*S(i/2+t/6)*(S(i**5)*S(t-i/9))-7),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5/h*S(i+t/3),i,w,0,7)
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=9*S(i/2+t/6)*S(i**5)*S(t-i/9)-1),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5/h*S(i+t/3),i,w,0,7)
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=S(i/2+t/6)*(S(i**5)+S(t-i/9))*6-1),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5/h*S(i+t/3),i,w,0,7)
// --- GOOD ---
for(c.width|=i=h=1e3;i-=2;x.fill())x.beginPath(w=12*S(k=i**3+t/8)*S(i**5)*S(t-i/9)),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5/h*S(k*2),i,w,0,7)
// Not all on the surface
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=12*S(k=i**3+t/8)*S(i**5)*S(t-i/9)),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5*S(i)**.3/h*S(k*2),i,w,0,7)
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=12*S(k=i**3+t/8)*S(i**5)*S(t-i)),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5*S(i)**.3/h*S(k*2),i,w,0,7)
// Possibly more accurate
for(c.width|=i=h=1e3;i-=2;x.fill())x.beginPath(w=9*S(k=i**3+t/8)*S(t/.7-i)+1),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5*S(i)**.3/h*S(k*2),i,w,0,7)
// But I think these look better, so :P
// --- Published this remix --- https://www.dwitter.net/d/9835
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=12*S(k=i**3+t/8)*S(t-i)-2),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5*S(i)**.3/h*S(k*2),i,w,0,7)
for(c.width|=i=h=1e3;i--;x.fill())x.beginPath(w=14*S(k=i**3+t/8)*S(t-i)-4),w>0&&x.arc(h+h*(2e5-(i-500)**2)**.5*S(i)**.3/h*S(k*2),i,w,0,7)

// f8f82804's nested cubes https://www.dwitter.net/d/10480
for(w=c.width=594;w-=99;x.beginPath(x.stroke()))for(i=17;i--;)x.lineTo(297+w*S(p=1.57*(i-(i>>2))+t)/(Z=4+C(p)),150-w/5+.4*w*((i&4))/Z-9*T(t-w/7e2))

// tomxor's saturn
x.fillRect(0,0,i=1e4,i)
for(t+=160;p=i&1,m=t/C(t/i)+p*(t/2+i%t),i--;)
(i/7%1<.7-C(n=t/9+i*i))&&
x.clearRect(960+m*S(n)*C(!p*i/t),540+m*C(n+p*2),2,2)
// Alt: ((i/7%1)**.25<(1-C(n=t/9+i*i))/2)&&
// Why is it the the bottom of the sphere still has dots?
// I think the bottom of the sphere must have C(n)>0 but not C(n)==1

// anotherkitten's rainbow tunnel https://www.dwitter.net/d/10601
for(i=17;i--;x.beginPath(x.fill()))q=6*S(t/2),p=i+t%1,r=p*p,x.fillStyle=`hsl(${(p-t)*9} 50%${i-t&1?40:60}%`,x.arc(960+C(a=p/5+q)*r,540+S(a)*r,5*p*p,0,7)

// Impossible triangle by pavelb and anotherkitten https://www.dwitter.net/d/10655
// Lighting
ϕ=t;with(x)for(c.width=-1,translate(150,84),i=3;i--;rotate(t),t=2.1,fill(new Path2D('M67 28 9-72-9-72 37 11-19 11-28 25')))fillStyle=R(a=120+80*C((ϕ-i*Math.PI*2/3)),a,a)
