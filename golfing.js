// Dwitterer's yin-yang
f=(a,d)=>x.beginPath(x.fillStyle=d)|x.arc(960+80*S(a),540+80*C(a),80-30*S(g/8),0,7)|x.fill()
g=t*60
π=g/12.56
s=2*Math.abs(128-g%255)
f(π,R(255-s,0,s)),f(π+3.14,R(s,0,255-s))
//
f=(a,d)=>x.beginPath(x.fillStyle=d)|x.arc(960+80*S(a),540+80*C(a),80-30*S(t*7.5),0,7)|x.fill()
g=t*60
f(t*5,R(s=C(g/128*3.14)*127+128,0,255-s)),f(t*5+3.14,R(255-s,0,s))
// My version, 157 chars and only 3 statements: `f=?;f();f()`
f=(a,d)=>x.beginPath(x.fillStyle=d)|x.arc(960+80*S(a),540+80*C(a),80-30*S(t*7.5),0,7)|x.fill()
f(t*5,R(s=C(t*1.47)*127+128,0,255-s))
f(t*5+3.14,R(255-s,0,s))
// Dwitterer's attempt
f=(b,a,d)=>x.beginPath(x.fillStyle=d)|x.arc(960+(u=80)*S(b),540+u*C(a),u-30*S(g=t*8),0,7)|x.fill()
f(π=t*5,n=π+3.14,R(255-(s=C(g/4)*127+128),0,s))
f(n,π,R(s,0,255-s))
// vuebke's help
for(i=2;i--;)x.beginPath(x.fillStyle=R(i?w=255-(s=C(t*2)*127+128):s,0,i?s:w))|x.arc(960+80*S(i?π=t*5:n),540+80*C(i?n=π+3.14:π),80-30*S(t*8),0,7)|x.fill()
// Finally --- PUBLISHED --- https://www.dwitter.net/d/8528
for(i=2;i--;)x.beginPath(x.fillStyle=R(i?a=S(t)*129+129:0,0,i?0:a))|x.arc(960+80*S(i?π=t*5:n),540+80*C(i?n=π+3:π),80-30*S(t*8),0,7)|x.fill()
// pythech's golf
with(x)for(i=2;i--;fill())arc(960-80*S(k=t*5+3.14*i),540+80*C(k),80-30*S(t*8),!beginPath(fillStyle=R(i?s=C(t*2)*127+128:w,0,i?w=255-s:s)),9)
