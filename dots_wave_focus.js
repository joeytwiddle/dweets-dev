// Inspired by https://www.epam.com/

// Initial
for(c.width=512,w=i=256;i--;)X=(i%16-7.5),Z=(i>>4)+2,Y=200+200*S(i/99+t),x.shadowBlur=Z,x.fillRect(w+60*X/Z,100+Y/Z,W=20/Z,W)

//
for(c.width=512,w=256,i=4096;i--;)X=(i%64-32),Z=(i>>6),Y=200+50*S(X/3+Z+t),F=Math.abs(Z-3),x.fillStyle=R(0,0,0,.8/F),x.fillRect(w+60*X/Z,9+Y/Z,W=(9+F*8)/Z,W) 

//
for(c.width=512,w=256,i=4096;i--;)X=(i%64-32),Z=(i>>6)/4,Y=w+50*S(X/3+Z+t),F=Math.abs(Z-3),x.fillStyle=R(0,0,0,.2/F),x.fillRect(w+60*X/Z,9+Y/Z,W=(9+F*9)/Z,W) 

//
for(c.width=512,w=256,i=4096;i--;)X=(i%64-32),Z=(i>>6)/8,Y=w+w*S(X/3+t)*C(Z+t),F=Math.abs(Z-3),x.fillStyle=R(0,0,0,.3/F**2),x.fillRect(w+60*X/Z,9+Y/Z,W=(9+F*5)/Z,W)

//
for(c.width=512,w=256,i=4096;i--;)X=(i%64-32),Z=(i>>6)/9,Y=99+99*S(X/2+t)*S(Z+t),F=(Z-3)**2,x.fillStyle=R(0,0,0,.3/F),x.fillRect(w+60*X/Z,9+Y/Z,W=(9+F*5)/Z,W)

//
for(c.width=512,w=256,i=4096;i--;)X=(i%64-32),Z=i/w,Y=4+S(X/3+t)+S(Z-t),F=(Z-5)**2,x.fillStyle=R(0,0,0,.3/F),x.fillRect(w+90*X/Z,9+99*Y/Z,W=(9+F*5)/Z,W)

//
for(c.width=512,w=256,i=4096;i--;)X=(i%64-32),Z=i/w,Y=S(X/2+t)+S(Z-t),F=(Z-4)**2,x.fillStyle=R(0,0,0,.3/F),x.fillRect(w+60*X/Z,99+99*Y/Z,W=(9+F*3)/Z,W)

// Best so far
for(c.width=512,w=256,i=4096;i--;)X=(i%64-32),Z=i/w,Y=2+S(X/2+t)*S(Z-t),F=(Z-3)**2,x.fillStyle=R(0,0,0,.3/F),x.fillRect(w+60*X/Z,9+99*Y/Z,W=(9+F*3)/Z,W)

//
for(c.width=512,w=256,i=2048;i--;)X=(i%64-32),Z=i/w,Y=2+S(X/2+t)*S(Z-t),F=(Z-3)**2,x.globalAlpha=.2/F,x.fillRect(w+60*X/Z,9+99*Y/Z,W=(5+F*4)/Z,W)
// We can surely golf this a bit

// Aside: But it might also be worth starting with the old code from https://dwitter.net/d/3266
// Which is:
c.width|=0;for(i=6e3;i--;)Z=40+21*i%256,Y=99*i%2e7,F=40+99*(1-C(t))-Z,x.globalAlpha=.7/(1+F*F/1740),x.fillRect(9e4/Z,Y/Z,w=(900+F*F/15)/Z,w)
//
c.width|=0;for(i=6e3;i--;)Z=4+21*i%256,X=99*i%2e7,Y=2e4+5e3*C(Z/9+X/9+t),F=40-Z,x.globalAlpha=.7/(1+F*F/1740),x.fillRect(X/Z,Y/Z,w=(900+F*F/2)/Z,w)

// Back to the main code
// Golfed (140)
for(c.width=512,i=2e3;i--;)X=i%64-32,Z=i/256,Y=2+S(X/2+t)*S(Z-t),F=(Z-3)**2,x.globalAlpha=.2/F,x.fillRect(256+60*X/Z,9+99*Y/Z,W=(5+F*4)/Z,W)
// Overgolfed
for(i=c.width=512;i--;)X=i%32-16,Z=i/128,Y=2+S(X/2+t)*S(Z-t),F=(Z-2)**2,x.globalAlpha=.2/F,x.fillRect(256+60*X/Z,9+99*Y/Z,W=(5+F*4)/Z,W)
// Overgolfed funky (139)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=2+C(X+t)+S(Z-t),F=(Z-1-C(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,9+99*Y/Z,W=(4+F*9)/Z,W)
// Overgolfed funky (140)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=S(Z-t)-C(X+t),F=(Z-1+S(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,300+300*Y/Z,W=(4+F*9)/Z,W)
// Focus on the wave (134)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=2+S(2*Z-t),F=(Z-1-C(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,9+99*Y/Z,W=(4+F*9)/Z,W)
// Focus on the wave, better follow (136)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=2+S(2*Z-t),F=(Z-1.5-C(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,9+99*Y/Z,W=(4+F*9)/Z,W)
// Focus on the wave, with an angle (138)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=2+C(X/2-t+Z*3),F=(Z-1-C(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,9+99*Y/Z,W=(4+F*9)/Z,W)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=2+C(2*Z-t+X/4),F=(Z-1-C(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,9+99*Y/Z,W=(4+F*9)/Z,W)
// Focus on the wave (139)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=2+C(X/3+t)+S(Z-t),F=(Z-1+S(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,99*Y/Z,W=(4+F*9)/Z,W)
// I think I prefer the first funky one
// Double waves, although X wave is not moving (139)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=2+S(2*Z-t)-S(X/3),F=(Z-2+S(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,99*Y/Z,W=(4+F*6)/Z,W)
// Golfing: inline Y and fillRect (136)
for(i=c.width=1e3;i--;x.fillRect(512+50*X/Z,99*(2+S(2*Z-t)-S(X/3))/Z,W=(4+F*6)/Z,W))X=i%32-16,Z=i/256,F=(Z-2+S(t))**2,x.globalAlpha=.1/F
// Now we can make X waves move too (138)
for(i=c.width=1e3;i--;x.fillRect(512+50*X/Z,99*(2+S(2*Z-t)-S(X/3+t))/Z,W=(4+F*6)/Z,W))X=i%32-16,Z=i/256,F=(Z-2+S(t))**2,x.globalAlpha=.1/F
for(i=c.width=1e3;i--;x.fillRect(512+50*X/Z,99*(2+S(2*Z-t)+C(X/3+t))/Z,W=(4+F*6)/Z,W))X=i%32-16,Z=i/256,F=(Z-2+S(t))**2,x.globalAlpha=.1/F
// Lower
for(i=c.width=1e3;i--;x.fillRect(512+50*X/Z,99*(3+S(2*Z-t)+C(X/3+t))/Z,W=(4+F*6)/Z,W))X=i%32-16,Z=i/256,F=(Z-1+S(t))**2,x.globalAlpha=.1/F
// Change perspective
for(i=c.width=1e3;i--;x.fillRect(512+99*X/Z,200*(2+S(Z-t)-S(X/3+t))/Z,W=(9+F*4)/Z,W))X=i%32-16,Z=i/128,F=(Z-3+S(t))**2,x.globalAlpha=.2/F
// Lower
for(i=c.width=1e3;i--;x.fillRect(512+99*X/Z,200*(4+S(Z-t)-S(X/3+t))/Z,W=(9+F*4)/Z,W))X=i%32-16,Z=i/128,F=(Z-2+S(t))**2,x.globalAlpha=.2/F
// More fuzzy, less deep
for(i=c.width=768;i--;x.fillRect(384+99*X/Z,200*(4+C(Z-t)-C(X/3+t))/Z,W=(9+F*7)/Z,W))X=i%32-16,Z=i/128,F=(Z-3-S(t))**2,x.globalAlpha=.2/F
for(i=c.width=768;i--;x.fillRect(384+99*X/Z,200*(4+C(Z-t)-C(X/3+t))/Z,W=(9+F*9)/Z,W))X=i%32-16,Z=i/128,F=(Z-4-S(t))**2,x.globalAlpha=.4/F

// How about a tunnel?
// Needs more work
for(i=c.width=2e3;i--;)Z=i/1e3,X=S(a=i+t),Y=C(a)+S(t-Z*9),F=(Z-1-C(t))**2,x.globalAlpha=.1/F,x.fillRect(1e3+50*X/Z,600+50*Y/Z,W=(1+F)/Z,W)

// How about falling rain?
// Definitely needs more work
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=(((1+i*i)%20)*t)%5,F=(Z-1+S(t/9))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,99*Y/Z,W=(4+F*9)/Z,W)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=(i*i%99+t*2)%5,F=(Z-1+S(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,99*Y/Z,W=(4+F*9)/Z,W)
// Not bad, using %Z to make further columns taller (but it does make the nearer columns disproportionately busy)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=(i*i%99+t*2)%(6*Z),F=(Z-1+S(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,99*Y/Z,W=(4+F*9)/Z,W)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=(i**3%93+t*2)%9-6,F=(Z-1+S(t))**2,x.globalAlpha=.2/F,x.fillRect(512+50*X/Z,400+99*Y/Z,W=(4+F*9)/Z,W)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=(i**3%93+t*2)%9-9,F=(Z-1+S(t))**2,x.globalAlpha=.2/F,x.fillRect(512+50*X/Z,600+99*Y/Z,W=(4+F*9)/Z,W)
for(i=c.width=1e3;i--;)X=i%32-16,Z=i/256,Y=(i**3%93+t*2)%9-6,F=(Z-1.5+S(t))**2,x.globalAlpha=.3/F,x.fillRect(512+50*X/Z,400+99*Y/Z,W=(4+F*9)/Z,W)
for(i=c.width=1e3;i--;)X=i**3%32-16,Z=i/256,Y=(i**3%93+t*2)%9-7,F=2*(Z-1.5+S(t))**2,x.globalAlpha=.1/F,x.fillRect(512+50*X/Z,500+99*Y/Z,W=(6+F*9)/Z,W)
// Snow (black on white)
for(i=c.width=1e3;i--;)X=i**3%32-16+C(i+t*2),Z=i/150,Y=(i**3%93+t*2)%9-7,F=(Z-3-2*S(t/2))**2,x.globalAlpha=.2/F,x.fillRect(512+50*X/Z,500+99*Y/Z,W=(9+F*4)/Z,W)
for(i=c.width=1e3;i--;)X=i**3%32-16+C(i+t*2),Z=i/250,Y=(i**3%93+t*2)%9-7,F=(Z-2-S(t))**2,x.globalAlpha=.2/F,x.fillRect(512+50*X/Z,500+99*Y/Z,W=(9+F*6)/Z,W)
for(i=c.width=1e3;i--;)X=i**3%32-16+C(i+t*2),Z=i/200,Y=(i**3%93+t*2)%9-7,F=(Z-2+S(t))**2,x.globalAlpha=.2/F,x.fillRect(512+50*X/Z,500+99*Y/Z,W=(9+F*4)/Z,W)
for(i=c.width=1e3;i--;)X=i**3%32-16+C(i+t*2),Z=i/200,Y=(i**3%93+t*2)%9-7,F=(Z-2.5+2*S(t/2))**2,x.globalAlpha=.2/F,x.fillRect(512+50*X/Z,500+99*Y/Z,W=(9+F*4)/Z,W)
// Snow but visible cube
c.style.filter=`invert(1)`;for(i=c.width=1e3;i--;)X=i**3%32-16+C(i+t*2),Z=i/200,Y=(i**3%93+t*2)%9-7,F=(Z-2.5+2*S(t))**2,x.globalAlpha=.4/F,x.fillRect(512+50*X/Z,500+99*Y/Z,W=(9+F*4)/Z,W)
// Snow corridor (nice mistake!)
c.style.filter=`invert(1)`;for(i=c.width=1e3;i--;)X=i**3%32-16+C(i+t*2),Z=i/200,Y=(i**3%93+t*2)%9-4,F=(Z-2.5+2*S(t))**2,x.globalAlpha=.4/F,x.fillRect(512+9*X/Z,300+99*Y/Z,W=(9+F*4)/Z,W)
c.style.filter=`invert(1)`;for(i=c.width=1e3;i--;)X=i**3%32-16+C(i+t*2),Z=i/150,Y=(i**3%93+t*2)%9-6,F=(Z-4+3*S(t))**2,x.globalAlpha=1/F,x.fillRect(512+99*X/Z,400+200*Y/Z,W=(9+F*4)/Z,W)

