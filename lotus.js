// Horizontal petal
x.save()
//x.transform(2,0,0,2,0,0)
x.rotate(3.1416/8)
x.beginPath()
x.arc(1000,200,500,0.65,2.45)
x.arc(1000,800,500,3.78,5.6)
x.fill();
x.restore();

// Vertical petal
x.save()
//x.transform(1,0,0,1,0,0)
//x.translate(1000,500)
//x.rotate(3.1416/8)
x.beginPath()
x.arc(700,500,500,5.35,7.2)
x.arc(1300,500,500,2.22,4.0)
x.fill();
x.restore();

// Rotating pink petals
c.width|=0
for(i=9;i--;){
k=i+t/4
x.fillStyle=R(200,120+5*i,200)
x.save()
//x.transform(1,0,0,1,0,0)
//x.translate(1000,500)
x.beginPath()
x.translate(1000+400*S(7*k),500)
x.rotate(S(7*k))
x.arc(-300,0,500,5.35,7.2)
x.arc(+300,0,500,2.22,4.0)
x.fill();
x.restore();
}

// Rotating pink petals drawn by parabola
c.width|=0
for(i=9;i--;){
k=i+t/4
x.fillStyle=R(200,120+5*i,200)
x.save()
x.beginPath()
x.translate(1000+300*S(7*k),900)
x.rotate(S(7*k))
x.moveTo(0,0)
for(j=9;j--;)x.lineTo(-160+10*(j-4)**2,75*j-600)
for(j=9;j--;)x.lineTo(160-10*(j-4)**2,-75*j)
x.fill();
x.restore();
}

// Rotating petals with skew
c.width|=0
l=(X,Y,r)=>x.lineTo(1e3+X+Y*S(r),900-Y)
// Curving out at the bottom using power
c.width|=l=(X,Y,r)=>x.lineTo(1e3+X+9*Y**.7*S(r),900-Y)
// Curving out and back in using sine
c.width|=l=(X,Y,r)=>x.lineTo(1e3+X+700*S(Y/400)*S(r),900-Y)
for(i=9;i--;){
x.fillStyle=R(200,120+5*i,200)
x.beginPath()
r=7*i+t
for(j=9;j--;)l(-160+10*(j-4)**2,600-75*j,r)
for(j=9;j--;)l(160-10*(j-4)**2,75*j,r)
x.fill();
}

// Petals are not thick when they are at the edge
c.width|=l=(X,Y,r)=>x.lineTo(1e3+9*Y**.7*S(X),900-Y)
for(i=9;i--;){
x.fillStyle=R(200,120+5*i,200)
x.beginPath()
r=7*i+t
for(j=9;j--;)l(r-.32+(j-4)**2/50,600-75*j)
for(j=9;j--;)l(r+.32-(j-4)**2/50,75*j)
x.fill();
}

// More elegant but still too thin at the bottom
c.width|=l=(X,Y,r)=>x.lineTo(1e3+9*Y**.7*S(X),900-Y)
for(i=9;i--;){
x.fillStyle=R(200,120+5*i,200)
x.beginPath()
r=7*i+t
for(j=8.25;j-=.25;)l(r-.32+(j-4)**2/50,600-75*j)
for(j=8.25;j-=.25;)l(r+.32-(j-4)**2/50,75*j)
x.fill();
}

// Using Bezier
B=1e3
p=(X,Y)=>B+199*Y**.2*S(X)
c.width|=b=(X,Y,U,V,P,Q)=>x.bezierCurveTo(p(X,Y),B-Y,p(U,V),B-V,p(P,Q),B-Q)
for(i=9;i--;){
x.fillStyle=R(200,150-5*i,200)
//x.fillStyle='hsl(300,50%,70%'
x.beginPath()
r=7*i+t
x.moveTo(B,B)
b(r-.4,200,r-.4,400,r,600)
b(r+.4,400,r+.4,200,r,0)
x.fill();
}

B=1e3;p=(X,Y)=>B+199*Y**.2*S(X);c.width|=b=(X,Y,U,V,P,Q)=>x.bezierCurveTo(p(X,Y),B-Y,p(U,V),B-V,p(P,Q),B-Q);for(i=9;i--;)r=7*i+t,x.fillStyle=R(200,150-5*i,200),x.beginPath(),x.moveTo(B,B),b(r-.4,200,r-.4,400,r,600),b(r+.4,400,r+.4,200,r,0),x.fill()

// For inspiration: https://www.dwitter.net/d/2931
// For inspiration: https://www.dwitter.net/d/1481
// Fish: https://www.dwitter.net/d/1938
// Radial flower: https://www.dwitter.net/d/279
// More radials: https://www.dwitter.net/d/376
