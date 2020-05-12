for(c.width|=i=2e3;i--;)a=i+t,h=i/666-.25,r=(h<1.2)*99+(h>0&&h<1)*300*S(h*3),x.fillRect(960+r*S(a),150+i*.8-r*C(a)/5,15,15)
for(c.width|=i=2e3;i--;)a=i+t,h=i/666-.25,r=(h<1.2)*99+(h>0&&h<1)*300*S(h*3),x.fillStyle='#b00',x.fillRect(960+r*S(a),99+i*.8-r*C(a)/5,15,15)
for(c.width|=i=2e3;i--;)a=i-t,h=i/666-.25,r=(h<1.2)*99+(h>0&&h<1)*300*S(h*3),x.fillStyle='#b'+i,x.fillRect(960+r*S(a),99+i*.8-r*C(a)/5,50,50)
for(c.width|=i=1e3;i--;)a=i-t,h=i/580-.25,r=(h<1.2)*99+(h>0&&h<1)*400*S(h*3),x.fillStyle='#b'+i,x.fillRect(960+r*S(a),50+i-r*C(a)/5,50,50)
// === DELETED === https://www.dwitter.net/d/12133
for(c.width|=i=999;i--;)a=i+t,h=i/580-.25,r=(h<1.2)*99+(h>0&&h<1)*400*S(h*3),x.fillStyle='#b'+i,x.fillRect(960+r*S(a),50+i-r*C(a)/5,50,30)
// Better proportions?
// === TO DELETE === https://www.dwitter.net/d/12134
for(c.width|=i=999;i--;)a=i-t,h=i/580-.25,r=(h<1.2)*150+(h>0&&h<1)*400*S(h*3),x.fillStyle='#b'+i,x.fillRect(960+r*S(a),50+i+r*C(a)/5,80,30)
// #e might have looked a little more cheerful
// === RELEASED === https://www.dwitter.net/d/12135
for(c.width|=i=999;i--;)a=i-t,h=i/580-.25,r=(h<1.2)*150+(h>0&&h<1)*400*S(h*3),x.fillStyle='#e'+i,x.fillRect(960+r*S(a),50+i+r*C(a)/5,80,30)

// Emoji lanters swinging on a line
// === RELEASED === https://www.dwitter.net/d/12174
c.width|=0;for(i=9;i--;)x.save(),x.translate(115+280*i,400+80*i-9*i*i),x.scale(20,20),x.rotate(S(t-i/5)/4),x.fillText('🏮',-6,6),x.restore()
// Perpas better
c.width|=0;for(i=9;i--;)x.save(),x.translate(115+280*i,600-9*i*i),x.scale(20,20),x.rotate(S(t*2+i/3)/4),x.fillText('🏮',-6,6),x.restore()
