// 2018
for(r=Math.random,i=w=700;i--;x.fillRect(i%9?960+a/2*C(p=w*r()):960+99*C(p),i%9?80+a+a/6*S(p):790+200*r()+30*S(p),k=2/(5+t),k))a=w*r()**.6
// 2019
for(R=Math.random,i=w=700;i--;x.fillRect(960+r*C(a),80+y+r/8*S(a),s=.3-.2*T,s))y=896*(R()**.5),T=y>768,r=T?9:(y|127)*(y/9+y%128)/300,a=w*R()
// --- RELEASED --- at https://www.dwitter.net/d/11549
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),s=T?.01:.1,s))y=896*(R()**.5),T=y>768,r=T?9:(y|127)*(y/9+y%128)/300,a=99*R()
// Fairer distribution (except for the trunk)
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),s=T?.004:.1,s))l=7*R()**.5|0,y=128*(l+R()**.5),T=l>5,r=T?9:128*++l*(y/9+y%128)/300,a=99*R()
// Not so wide
for(R=Math.random,i=700;i--;x.fillRect(960+r*C(a),80+y+r/9*S(a),s=T?.01:.1,s))y=896*(R()**.5),T=y>768,r=T?9:(y|127)*(y/4+y%128)/700,a=99*R()
// "Real shape" (branches curve upwards, smaller near bottom)
for(R=Math.random,i=5e3;i--;x.fillRect(960+r*C(a),80+y+r/5*S(a),s=T?.004:.02,s))y=896*(R()**.5),T=y>768,r=T?9:(y|127)*(y*S(y/300)-2*y%128)/1200,a=99*R()
