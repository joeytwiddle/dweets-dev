// Flag of Ukraine transitioning into Flag of Russia
c.width=300;T=.5-.5*C(t/9)
for(i=2;i--;x.fillRect(0,56*T+h*i,300,h))x.fillStyle=`hsl(${i==1?50-46*T:210},99%,${37-!i*5*T}%)`,h=85-28*T

c.width=-1;T=.5-.5*C(t/5)
for(i=2;i--;x.fillRect(0,56*T+h*i,300,h))x.fillStyle=`hsl(${i?50-46*T:210},${99-i*T*24}%,${49-!i*17*T}%)`,h=85-28*T

// Clamping using cosine
//T=C(1.5/(1+t/6))
//T=C(9/(6+t))
// Date functions
//T=Math.min((Date.now()-1646e9)/3e9,1)
// Without clamping
//T=Date.now()/5e9-329
// Clamping using cosine (needs more work)
//T=C(9e9/(Date.now()-1646e9))
//T=C(9e9/(Date.now()-1646e9))
// 

// Golfed: T now ranges 0-2 instead of 0-1
c.width=-1;T=1-C(t/5)
for(i=2;i--;x.fillRect(0,28*T+h*i,300,h))x.fillStyle=`hsl(${i?50-23*T:210},${99-i*T*12}%,${49-!i*9*T}%)`,h=85-14*T
// More accurate blues
c.width=-1;T=1-C(t/5)
for(i=2;i--;x.fillRect(0,28*T+h*i,300,h))x.fillStyle=`hsl(${i?50-23*T:210},${99-i*T*12}%,${i?49:36-2*T}%)`,h=85-14*T
// One-way, clamping using cosine
c.width=-1;T=C(9/(6+t))
for(i=2;i--;x.fillRect(0,56*T+h*i,300,h))x.fillStyle=`hsl(${i?50-46*T:210},${99-i*T*24}%,${i?49:36-4*T}%)`,h=85-28*T
