// Balint's trail of dots
c.width|=0;for(p=199;p--;)r=p**.5*19,k=2*t+r/99,q=p,x.fillRect(960+400*S(k)+r*C(q),540+300*S(k/.9)+r*S(q),20,20)
// --- RELEASED but weak --- Beautified for release
c.width|=0;for(p=199;p--;)r=p**.5*19,k=2*t+r/99,q=p+6*t,x.fillRect(960+400*S(k)+r*C(q),540+250*C(k/.7)+r*S(q),w=10+r/20,w)
c.width|=0;for(p=800;p--;)r=p**.5*9,k=2*t+r/120,q=p-9*S(t),x.fillRect(960+400*S(k)+r*C(q),540+250*C(k/.7)+r*S(q),w=5+r/20,w)
// Weird little bug
c.width|=0;for(p=600;p--;)r=p**.5*9,k=2*p+r/120,q=p-9*S(t),x.fillRect(960+400*S(k)+r*C(q),540+250*C(k/.7)+r*S(q),w=5+r/20,w)
// White borders
c.width|=0;for(p=0;p++<200;)r=p**.5*19,k=2*t+r/99,q=p-t,x.clearRect(X=960+400*S(k)+r*C(q),Y=510+250*S(k/.7)+r*S(q),w=19+r/5,w),x.fillRect(X+8,Y+8,w-16,w-16)
// White borders and longer
c.width|=0;for(p=0;p++<800;)r=p**.5*9,k=2*t+r/40,x.clearRect(X=960+400*S(k)+r*C(p-t),Y=510+250*S(k/.7)+r*S(p-t),w=19+r/5,w),x.fillRect(X+4,Y+4,w-8,w-8)
// --- RELEASED --- Angry box worm
for(c.width|=p=0;p++<1e3;x.fillRect(X+4,Y+4,w-8,w-8))r=p/4,k=2*t+r/50,x.clearRect(X=960+600*S(k)+r*C(p),Y=510+250*S(k/.5)+r*S(p),w=19+r/5,w)
// With peristalsis
for(c.width|=p=0;p++<1e3;x.fillRect(X+4,Y+4,w-8,w-8))r=p/4,k=2*t+r/50,r*=1-.2*C(2*k),x.clearRect(X=960+600*S(k)+r*C(p),Y=510+250*S(k/.5)+r*S(p),w=19+r/5,w)
// Swallowing you
for(c.width|=p=0;p++<1e3;x.fillRect(X+4,Y+4,w-8,w-8))r=p/4,k=2*t+r/50,r*=9/(9-t),x.clearRect(X=960+600*S(k)+r*C(p),Y=510+250*S(k/.5)+r*S(p),w=19+r/5,w)
// With circles
for(c.width|=p=0;p++<1e3;)r=p/4,k=2*t+r/50,x.beginPath(),x.arc(X=960+600*S(k)+r*C(p),Y=510+250*S(k/.5)+r*S(p),w=9+r/9,0,7),x.fillStyle='#fff',x.fill(),x.beginPath(),x.fillStyle='#000',x.arc(X,Y,w-8,0,7),x.fill()
// Circles using stroke instead of two arcs
for(c.width|=p=0;p++<1e3;)r=p/4,k=2*t+r/50,x.beginPath(),x.arc(960+600*S(k)+r*C(p),510+250*S(k/.5)+r*S(p),9+r/9,0,7),x.fillStyle='#000',x.fill(),x.strokeStyle='#fff',x.lineWidth=4,x.stroke()
// A mistake
c.width|=0,s=3e3*t|0;for(i=199;i--;)p=s+i,r=9*p%199,k=p/999+r**.3/2,q=p,x.fillRect(960+400*S(k)+r*C(q),540+300*S(k/.9)+r*S(q),20,20)
// Getting closer
c.width|=0,s=3e3*t|0;for(i=800;i--;)p=s+i,r=9*p%500,k=p/999+r**.3/2,q=p,x.fillRect(960+400*S(k)+r*C(q),540+300*S(k/.9)+r*S(q),20,20)
c.width|=0,s=3e3*t|0;for(i=800;i--;)p=s+i,r=7.7*p%500,k=p/999+r**.3/2,q=p,x.fillRect(960+400*S(k)+r/3*C(q),540+300*S(k/.9)+r/3*S(q),10,10)

// Starfield
c.width|=0;x.fillRect(0,0,2e3,2e3);for(i=2e3;i--;)s=(i%40/9)**3+9,x.fillStyle=`hsla(${i},99%,50%,.1)`,x.fillRect((i*(i%19)+s*t)%2e3,(i*(i%17)-s*t)%1e3,s,s)
for(i=0;i<4e3;)p=!!i++,s=p?(i%80/54)**9+5:2e3,x.fillStyle=`hsla(${i},99%,${p*50}%,.1)`,x.fillRect(p*(i*(i%19)-s*t)%2e3,p*(i*(i%17)+s*t)%1080,s,s)
// Tried to use S() to encourage clustering but no joy
t*=4;for(i=0;i<4e3;i++)p=!!i,s=p?(i%90/37)**4+9:2e3,x.fillStyle=`hsla(${i},99%,${p*50}%,.1)`,x.fillRect(p*(1e3+i*S(i%17)-s*t)%2e3,p*(1e3+i*S(i%23)+s*t)%1080,s,s)

// A beautiful (but slow) starfield from kipkat's http://golf512.dx.am/
x.globalCompositeOperation='darken'
x.fillStyle="#0003";x.fillRect(0,0,Z=2e3,Z)
x.globalCompositeOperation='screen'
for(i=500;i--;x.beginPath(),x.arc((S(i)*1e9-k)%550-30,(i*9+k/4)%550-30,j,0,7),x.fill())k=f*i/999,x.shadowColor=x.fillStyle=H(i%99-70,99,40+i%40),j=((i%99)/29)**2,x.shadowBlur=50
