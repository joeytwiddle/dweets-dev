W=960;H=540;r=H/2
x.fillStyle=R(240,240,40)
x.arc(W,H,r,3.14,0)
x.fill()
x.fillStyle=R(0,0,255)
x.fillRect(W-r,H,2*r,r)

W=960;H=540;r=H/2;k=r/2
x.fillStyle=R(240,240,40)
x.beginPath()
x.arc(W,H,r,3.14,0)
x.fill()
x.fillStyle=R(0,0,255)
x.beginPath()
x.arc(W,H+k,r,0,3.14)
x.fill()
x.fillRect(W-r,H,2*r,k)

W=960;H=540;r=H/2;k=r/2;f=t&1
x.fillStyle=R(f&&240,f&&240,f||255)
x.beginPath()
f?x.arc(W,H,r,3.14,0):x.arc(W,H+k,r,0,3.14)
x.fill()
f||x.fillRect(W-r,H,2*r,k)

W=960;H=540;r=H/2;k=r/2;f=t&1;l=f&&r
x.fillStyle=R(l,l,f||r)
x.beginPath()
x.arc(W,f?H:H+k,r,f*3.14,f?0:3.14)
x.fill()
f||x.fillRect(W-r,H,H,k)

W=960;H=540;r=H/2;k=r/2;f=t&1;l=f&&r
x.fillStyle=R(l,l,f||r)
x.beginPath()
x.arc(W,f?H:H+2*k,r,f*3.14,f?0:3.14)
x.fill()
x.fillRect(W-r,H+k-f*k,H,k)

W=960;H=450;r=H/2;k=r/2;f=t&1;l=f&&H
with(x)fillStyle=R(l,l,f||H),beginPath(),arc(W,f?H:H+r,r,f*3.14,f?0:3.14),fill(),fillRect(W-r,H+k-f*k,H,k)

// Some of these unicode chars are too big!
c.width|=512;s=32
m='Հῐ㷰ῐᕐ𒪡媔媔⪠ࢀ⢠'
for(i=90;i--;x.fillRect(s*X,s*Y,s,s))(X=i%9,Y=i/9|0,c=(m.charCodeAt(Y)>>(2*X))&3,r=(c&1)*255,b=(c&2)*127,x.fillStyle=R(r,r,b),t||console.log(i,c,r,b))

s=32
m='ŐߴོߴՔનᚥ᪩Ƞਨ'
for(i=70;i--;x.fillRect(s*X,s*Y,s,s))(X=i%7,Y=i/7|0,c=(m.charCodeAt(Y)>>(2*X))&3,r=(c&1)*255,b=(c&2)*127,x.fillStyle=R(r,r,b))

m='ŐߴོߴՔનᚥ᪩Ƞਨ';for(i=s=70;i--;x.fillRect(s*X,s*Y,s,s))(X=i%7,Y=i/7|0,c=(m.charCodeAt(Y)>>(2*X))&3,r=(c&1)*255,x.fillStyle=R(r,r,(c&2)*127))
m='ŐߴོߴՔનᚥ᪩ȠԔ';for(i=s=70;i--;x.fillRect(s*X,s*Y,s,s))(X=i%7,Y=i/7|0,c=(m.charCodeAt(Y)>>(2*X))&3,r=(c&1)*255,x.fillStyle=R(r,r,(c&2)*127))
m='ŐߴོߴՔનᚥ᪩ȠԔ';for(i=s=77;i--;x.fillRect(s*X,s*Y,s,s,Y=i/7|0,c=(m.charCodeAt(Y)>>(2*X))&3,x.fillStyle=R(r=(c&1)*255,r,(c&2)*127)))X=i%7
m='ŐߴོߴՔનᚥ᪩ȠԔ';for(i=s=70;i--;x.fillRect(s*X,s*Y,s,s,c=(m.charCodeAt(Y)>>(2*X))&3,r=(c&1)*255,x.fillStyle=R(r,r,(c&2)*127)))(X=i%7,Y=i/7|0)
m='ŐߴོߴՔનᚥ᪩ȠԔ';for(i=s=99;i--;X=i%9,Y=i/9|0,c=(m.charCodeAt(Y)>>2*X-2)&3,r=(c&1)<<8,x.fillStyle=R(r,r,(c&2)<<7),x.fillRect(s*X,s*Y,s,s));
m='ŐߴོߴՔનᚥ᪩ȠԔ';for(i=s=99;i--;Y=i/9|0,c=(m.charCodeAt(Y)>>2*X-2)&3,r=(c&1)<<8,x.fillStyle=R(r,r,(c&2)<<7),x.fillRect(s*X,s*Y,s,s))X=i%9
m='ŐߴོߴՔનᚥ᪩ȠԔ';for(i=99;i--;Y=i/9|0,c=(m.charCodeAt(Y)>>2*X-2)&3,r=(c&1)<<8,x.fillStyle=R(r,r,(c&2)<<7),x.fillRect((s=i*S(t))*X,s*Y,s,s))X=i%9
// --- PUBLISHED --- https://www.dwitter.net/d/3063
m='ŐߴོߴՔનᚥ᪩ȠԔ';for(i=99,s=i*T(t);i--;Y=i/9|0,c=m.charCodeAt(Y)>>2*X-2&3,r=(c&1)<<8,x.fillStyle=R(r,r,(c&2)<<7),x.fillRect(s*X,s*Y,s,s))X=i%9

// Golfing a bit
for(i=99,s=i*T(t);i--;Y=i/9|0,c='ŐߴོߴՔનᚥ᪩ȠԔ'.charCodeAt(Y)>>2*X-2&3,r=c%2<<8,x.fillStyle=R(r,r,(c&2)<<7),x.fillRect(s*X,s*Y,s,s))X=i%9
