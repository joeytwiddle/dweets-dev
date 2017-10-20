r=500
p=9,s=12
for(i=p*s;i--;){
a=6.28*i/p/s;
x.lineTo(960+r*S(a),540+r*C(a));
(i%s)?0:(x.fill(),x.beginPath())
}

r=500
p=99*Math.random()|0,s=22
for(i=p*s;i--;){
a=6.28*i/p/s;
R=r*S(6.28*i/s)
x.lineTo(960+R*S(a),540+R*C(a));
(i%s)?x.fillStyle=`hsl(${i*360/p/s},99%,50%`:(x.fill(),x.beginPath())
}

r=800/t
p=9+(t*t&9),s=22
for(i=p*s;i--;){
A=i/p/s
a=r+6.28*A
R=r*S(3.14*i/s)
x.lineTo(960+R*S(a),540+R*C(a))
;(i%s)?x.fillStyle=`hsl(${360*A},99%,50%`:(x.fill(),x.beginPath())
}

r=800/t
p=9+(t*t&9),s=22
for(i=p*s;i--;)A=i/p/s,a=r+6.28*A,R=r*S(3.14*i/s),x.lineTo(960+R*S(a),540+R*C(a)),(i%s)?x.fillStyle=`hsl(${360*A},99%,50%`:(x.fill(),x.beginPath())

r=800/t
p=9+((t|0)**2&9),s=222
for(i=p*s;i--;){
A=i/p/s
a=r+6.28*A
R=r*S(3.14*i/s)
x.fillStyle=`hsl(${360*A},99%,50%`
x.fillRect(960+R*S(a),540+R*C(a),9,9)
}

r=800/t
p=9+(t*t&9),s=222
for(i=p*s;i--;){
A=i/p/s
a=r+6.28*A
R=r*S(3.14*i/s)
x.fillStyle=`hsl(${360*A},99%,50%`
x.fillRect(960+R*S(a),540+R*C(a),9,9)
}

r=800/t
p=9+(t*t&9),s=222
x.fillStyle=`hsl(${360*t},99%,50%`
for(i=p*s;i--;){
A=i/p/s
a=r+6.28*A
R=r*S(3.14*i/s)
x.fillRect(960+R*S(a),540+R*C(a),9,9)
}

r=800/t
p=9+t*t&9,s=222
x.fillStyle=`hsl(${360*t},99%,50%`
for(i=p*s;i--;){
A=i/p/s
a=r+6*A
R=r*S(3*i/s)
x.fillRect(960+R*S(a),540+R*C(a),9,9)
}

r=800/t,p=9+t*t&9,s=222
x.fillStyle=`hsl(${360*t},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=r+6*A,R=r*S(3*i/s),x.fillRect(960+R*S(a),540+R*C(a),9,9)

// --- RELEASED ---
r=800/t,p=9+t*t&9,s=540
x.fillStyle=`hsl(${s*t},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=r+6*A,R=r*S(3*i/s),x.fillRect(960+R*S(a),s+R*C(a),9,9)

r=9e4/t**3,p=2+(t*t&7),s=540
x.fillStyle=`hsl(${t*s/2},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=r+6*A,R=r*S(3*i/s),x.fillRect(960+R*S(a),s+R*C(a),9,9)

// Streaks
r=9e4/t**3,p=2+(t*t&7),s=540
x.fillStyle=`hsl(${t*s/2},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=6*A,R=r*S(3*i/s),x.fillRect(960+R*S(a),s+R*C(a),9,9)

r=800/t,p=6+(t*t&7),s=540
x.fillStyle=`hsl(${s*t},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=r+6*A,R=r+99*S(3*i/s),x.fillRect(960+R*S(a),s+R*C(a),9,9)

r=800/t**2,p=9+(99*t*t&7),s=540
x.fillStyle=`hsl(${s*t},99%,50%`
if(20*t%1<.1)
for(i=p*s;i--;)A=i/p/s,a=r+6*A,R=r+.1*r*S(3*i/s),x.fillRect(960+R*S(a),s+R*C(a),9,9)

r=1/(t/9)**4,p=19+(99*t*t&7),s=540
x.fillStyle=`hsl(${s*t},99%,50%`
if(20*t%1<.03)
for(i=p*s;i--;)A=i/p/s,a=6.28*A,R=r+.1*r*S(3*i/s),x.fillRect(960+R*S(a),s+R*C(a),9,9)

// Uniform
r=1/(t/9)**4,p=6+(99*t*t&62),s=540
x.fillStyle=`hsl(${s*t},99%,50%`
if(20*t%1<.03)
for(i=p*s;i--;)A=i/p/s,a=6.28*A,R=r+.05*r*S(3.14*i/s),x.fillRect(960+R*S(a),s+R*C(a),9,9)

// Nice uniform
if(!t)
for(t=19;t--;){
r=80*(19-t),p=8+(9*t&62),s=54
x.fillStyle=`hsl(${s*t},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=6.28*A,R=r+35*S(3.14*i/s),x.fillRect(960+R*S(a),540+R*C(a),9,9)
}

c.width|=0
for(e=19;e--;){
r=80*(19-e),p=8+(t+9*e&62),s=54
x.fillStyle=`hsl(${s*e},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=6.28*A,R=r+35*S(3.14*i/s),x.fillRect(960+R*S(a),540+R*C(a),9,9)
}

// Animated variant
c.width|=0
for(e=19;e--;){
r=80*(19-e),p=8+(t*9*e&62),s=20
x.fillStyle=`hsl(${s*e},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=6.28*A,R=r+35*S(3.14*i/s),x.fillRect(960+R*S(a),540+R*C(a),9,9)
}

// Animated variant with oscillating trails
x.fillStyle=R(255,255,255,(1-S(t))/2);x.fillRect(0,0,2e3,2e3)
for(e=19;e--;){
r=80*(19-e),p=8+(9*t*e&62),s=20
x.fillStyle=`hsl(${s*e},99%,50%`
for(i=p*s;i--;)A=i/p/s,a=6.28*A,Q=r+70*(S(3.14*i/s)**2)**.5,x.fillRect(960+Q*S(a),540+Q*C(a),9,9)
}
// TODO: Do this but instead of changing each layer, zoom in constantly to reveal new layers

