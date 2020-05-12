// A sphere full of dots, which we can rotate via the mouse?
// Inspired by https://www.dwitter.net/d/11899
x.fillRect(0,0,2e3,2e3)
c.onmousemove=e=>{X=e.x,Y=e.y}
for(i=96;i--;)for(j=54;j--;)a=X/40,b=Y/40,u=i*20*C(i),v=j*20*S(j),w=i*j%800,x.clearRect(960+u*C(a)+v*S(a),540+v*C(a)/9-u*S(a)/9+w,6,6)

// Still foobar.  I must learn 3d rotation again!
W=400
x.fillRect(0,0,2e3,2e3)
for(i=999;i--;)a=i,b=i*i+t/5,u=W*C(a)*C(b),v=W*S(a)*C(b),w=W*C(b)+W*S(b)*C(a)+W*S(b)*S(a),x.clearRect(960+u*C(t)-v*S(t),540+w,6,6)
