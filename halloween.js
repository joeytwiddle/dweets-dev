// Halloween dripping blood
t?0:T=[X=0];for(X=20;X--;)x.beginPath(),x.arc(99*X,T[X]=(T[X]||0)+2+S(X*9+7*t/X),50,0,7),x.fillStyle='#c00',x.fill()
// Perhaps for next year, we can follow it by darker blood, or just black.

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

// yonatan's pumpkin
c.width=99
rt=t
for(i=2e3;i--;(!(((q=i/18%6.3)|Y)&-4)*(1<<(Y<<2|q*2-.6)&3594))||x.fillRect(50+C(m)*r,S(-m)*r/(9+S(rt*9)*4)+t*20,5,6))t=3-i/2e3*3,b=C(i/1),r=(9+b)*6*S(S(t)**.5),x.fillStyle=R(q=300+b*9-S(m=i/18)*120,q/2),Y=t*3-4

// This default by prplz is a bit halloweeny, but it's a surprise so I didn't hashtag it.  https://www.dwitter.net/d/10308

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

