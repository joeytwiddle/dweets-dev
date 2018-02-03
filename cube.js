// This approach is wrong; I padd x,y,z indexes but that is surely maybe foobar
// Or maybe it can work

// Four corners could be obtained from four rotations
// Or the way we plot a grid using one loop and %, except it's only a 2x2 grid

// To loop the sides, choose which axis is fixed, and if <3 then -1 otherwise +1

c.width|=0
k=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1]]
k=[[1,0,0],[0,1,0],[-1,0,0],[0,-1,0]]
r=(p,x,y,z,a)=>[p[x]*C(a)+p[y]*S(a),p[y]*C(a)-p[x]*S(a),p[z]]
f=p=>r(p,0,1,0,t/8)
W=400
x.beginPath()
k.forEach((p,i)=>(P=f(p),x[i?'lineTo':'moveTo'](1e3+W*P[0],540+W*P[1])))
x.fill()
k.forEach((p,i)=>(P=f(p),x.fillRect(1e3+W*P[0],540+W*P[1],9,9),
x.font='50px s',x.fillText(p+" "+P,0,500+70*i)
))

c.width|=0
k=[[1,0,1],[0,1,1],[-1,0,1],[0,-1,1]]
r=(p,x,y,z,a)=>[p[x]*C(a)+p[y]*S(a),p[y]*C(a)-p[x]*S(a),p[z]]
f=p=>r(r(p,0,1,2,t/7),1,2,0,t)
W=400
x.beginPath()
k.forEach((p,i)=>(
[X,Z,Y]=f(p),Z+=2,
x[i?'lineTo':'moveTo'](1e3+W*X/Z,540+W*Y/Z),
x.fillRect(1e3+W*X/Z,540+W*Y/Z,9,9),
x.font='50px s',x.fillText(p+" "+[X,Y,Z],0,500+70*i)
))
x.fill()

c.width|=0,f=p=>r(r(p,0,1,2,t/7),1,2,0,t),W=400,x.beginPath()
r=(p,x,y,z,a)=>[p[x]*C(a)+p[y]*S(a),p[y]*C(a)-p[x]*S(a),p[z]]
for(F=6;F--;){s=F%3,v=(F+1)%3,w=(F+2)%3
for(c=4;c--;){
p=[],p[s]=-1+2*(F/3|0),p[v]=-1+2*(c%2),p[w]=-1+2*(c/2|0)
;[X,Z,Y]=f(p),Z+=2,
//x[i?'lineTo':'moveTo'](1e3+W*X/Z,540+W*Y/Z),
x.fillRect(1e3+W*X/Z,540+W*Y/Z,9,9),
x.font='50px s',x.fillText(`${F} ${c} ${p} ${[X,Y,Z]}`,0,20+70*(F*4+c))
}x.fill()}

c.width|=0,f=p=>r(r(p,0,1,2,t/7),1,2,0,t),W=400,x.beginPath()
r=(p,x,y,z,a)=>[p[x]*C(a)+p[y]*S(a),p[y]*C(a)-p[x]*S(a),p[z]]
for(F=6;F--;){s=F%3,v=(F+1)%3,w=(F+2)%3
for(V=4;V--;){
p=[],p[s]=-1+2*(F/3|0),p[v]=-1+2*(V%2),p[w]=-1+2*(V/2|0)
;[X,Z,Y]=f(p),Z+=2,
x[i?'lineTo':'moveTo'](1e3+W*X/Z,540+W*Y/Z),
x.fillRect(1e3+W*X/Z,540+W*Y/Z,9,9),
x.font='50px s',x.fillText(`${F} ${V} ${p} ${[X,Y,Z]}`,0,20+70*(F*4+V))
}x.fill()}

c.width|=0,f=p=>r(r(p,0,1,2,t/7),1,2,0,t),W=400
r=(p,x,y,z,a)=>[p[x]*C(a)+p[y]*S(a),p[y]*C(a)-p[x]*S(a),p[z]]
for(F=6;F--;){s=F%3,v=(F+1)%3,w=(F+2)%3,x.beginPath()
for(V=4;V--;){
p=[],p[s]=-1+2*(F/3|0),p[v]=-1+2*(V%2),p[w]=-1+2*(V/2|0)
;[X,Z,Y]=f(p),Z+=2,
x[i?'lineTo':'moveTo'](1e3+W*X/Z,540+W*Y/Z),
x.fillRect(1e3+W*X/Z,540+W*Y/Z,9,9),
x.font='50px s',x.fillText(`${F} ${V} ${p} ${[X,Y,Z]}`,0,20+70*(F*4+V))
}x.globalAlpha=0.3,x.fillStyle=`hsl(${F*60},100%,50%)`,x.fill()}

// Swap the 'p' lines to get joined corners instead of gaps
// Swap the 'd' lines to get something that is not a cube, but has square and triangular faces
c.width|=0,f=p=>r(r(p,0,1,2,t/7),1,2,0,t),H=400
r=(p,x,y,z,a)=>[p[x]*C(a)+p[y]*S(a),p[y]*C(a)-p[x]*S(a),p[z]]
for(F=6;F--;){s=F%3,v=(F+1)%3,w=(F+2)%3,x.beginPath()
//p=[],p[s]=-1+2*(F/3|0)
p=[],p[s]=2.2*(F/3|0)-1.1
d=(V,W)=>{p[v]=V,p[w]=W;[X,Z,Y]=f(p);Z+=2,x.lineTo(1e3+H*X/Z,540+H*Y/Z)}
//d(1,0),d(0,1),d(-1,0),d(0,-1)
d(-1,-1),d(1,-1),d(1,1),d(-1,1)
x.globalAlpha=0.3,x.fillStyle=`hsl(${F*60},100%,50%)`,x.fill()}

// 381 Add lines
c.width|=0,f=p=>r(r(p,0,1,2,t/7),1,2,0,t),H=500
r=(p,x,y,z,a)=>[p[x]*C(a)+p[y]*S(a),p[y]*C(a)-p[x]*S(a),p[z]]
for(F=6;F--;){s=F%3,v=(F+1)%3,w=(F+2)%3,x.beginPath()
p=[],p[s]=2.2*(F/3|0)-1.1
d=(V,W)=>{p[v]=V,p[w]=W;[X,Z,Y]=f(p);Z+=2.3,x.lineTo(1e3+H*X/Z,540+H*Y/Z)}
d(-1,-1),d(1,-1),d(1,1),d(-1,1),d(-1,-1)
x.globalAlpha=0.3,x.fillStyle=`hsl(${F*60},100%,50%)`,x.fill(),x.stroke()}

// 424 No lines, explode faces periodically
// --- RELEASE ON CODEGOLF.TK? ---
c.width|=0,f=p=>r(r(p,0,1,2,t/7),1,2,0,t),H=500
r=(p,x,y,z,a)=>[p[x]*C(a)+p[y]*S(a),p[y]*C(a)-p[x]*S(a),p[z]]
for(F=6;F--;){s=F%3,v=(F+1)%3,w=(F+2)%3,x.beginPath()
p=[],p[s]=2*(F/3|0)-1,e=.7-.5*S(t*.7),p[s]*=e>1?e:1
d=(V,W)=>{p[v]=V,p[w]=W;[X,Z,Y]=f(p);Z+=2.3,x.lineTo(1e3+H*X/Z,540+H*Y/Z)}
d(-1,-1),d(1,-1),d(1,1),d(-1,1)
x.globalCompositeOperation='lighten',x.globalAlpha=0.3,x.fillStyle=`hsl(${F*60},100%,50%)`,x.fill()}

// Modify this line for a longer and larger opening time
p=[],p[s]=2*(F/3|0)-1,e=1+S(t/3)/2,p[s]*=e>1?e:1

// 294
// Golf and drop rotation about X axis
c.width|=H=400
for(F=6;F--;){s=F%3,x.beginPath()
p=[],p[s]=2.2*(F/3|0)-1.1
d=(V,W)=>{p[(F+1)%3]=2*V-1,p[(F+2)%3]=2*W-1
,[X,Z,Y]=p;[X,Z]=[C(t)*X+S(t)*Z,C(t)*Z-S(t)*X]
Z+=2,x.lineTo(1e3+H*X/Z,540+H*Y/Z)}
d(0,0),d(1,0),d(1,1),d(0,1)
x.globalAlpha=0.3,x.fillStyle=`hsl(${F*60},100%,50%)`,x.fill()}

// 296
// Tried more inlining, but it only got larger!
c.width|=H=400
for(F=6;F--;){s=F%3,x.beginPath()
d=(V,W)=>{
p=[2.2*(F/3|0)-1.1,2*V-1,2*W-1]
j=(F+1)%3
,[X,Y,Z]=[C(t)*p[F%3]+S(t)*p[j],p[(F+2)%3],C(t)*p[j]-S(t)*p[F%3]]
z=H/(Z+2),x.lineTo(1e3+z*X,540+z*Y)}
d(0,0),d(1,0),d(1,1),d(0,1)
x.globalAlpha=0.3,x.fillStyle=`hsl(${F*60},100%,50%)`,x.fill()}

// 236
// Golfing - greyscale
c.width|=H=540
for(F=6;F--;){s=F%3,x.beginPath()
p=[],p[s]=3*(F/3|0)-1.5
d=(V,W)=>{p[(F+1)%3]=2*V-1,p[(F+2)%3]=2*W-1
,[X,Z,Y]=p;[X,Z]=[C(t)*X+S(t)*Z,C(t)*Z-S(t)*X]
Z+=3,x.lineTo(1e3+H*X/Z,H+H*Y/Z)}
d(0,0),d(1,0),d(1,1),d(0,1)
x.fill()}

// Wireframe with connected corners (this saves 0 chars)
c.width|=H=540
for(F=6;F--;){s=F%3,x.beginPath()
p=[],p[s]=2*(F/3|0)-1
d=(V,W)=>{p[(F+1)%3]=2*V-1,p[(F+2)%3]=2*W-1
,[X,Z,Y]=p;[X,Z]=[C(t)*X+S(t)*Z,C(t)*Z-S(t)*X]
Z+=3,x.lineTo(1e3+H*X/Z,H+H*Y/Z)}
d(0,0),d(1,0),d(1,1),d(0,1)
x.stroke()}

// Wireframe golfed a bit
c.width|=H=540;for(F=6;F--;x.beginPath(),d(0,0),d(1,0),d(1,1),d(0,1),x.stroke())s=F%3,p=[],p[s]=2*(F/3|0)-1,d=(V,W)=>{p[(F+1)%3]=2*V-1,p[(F+2)%3]=2*W-1,[X,Z,Y]=p;[X,Z]=[C(t)*X+S(t)*Z,C(t)*Z-S(t)*X],Z+=2,x.lineTo(1e3+H*X/Z,H+H*Y/Z)}

// Trying to loop the multiple calls to d() but something didn't work!
c.width|=H=540
for(n=24;n--;){F=n/4|0%6,s=F%3,x.beginPath()
p=[],p[s]=2*(F/3&1)-1
d=(V,W)=>{p[(F+1)%3]=2*V-1,p[(F+2)%3]=2*W-1
,[X,Z,Y]=p;[X,Z]=[C(t)*X+S(t)*Z,C(t)*Z-S(t)*X]
Z+=3,x.lineTo(1e3+H*X/Z,H+H*Y/Z)}
d(n&1,(n/2)&1),(n&3)||x.stroke()}

// Cantelope's wireframe cube in 170
for(w=(c.width|=i=17)/2;i--;x.lineTo(w+S(p=Math.atan2(X=S(q=1.57*i-t+(i/4|0)*4.71)/1.4,Y=((i/4|0)%2)-.5)+t)*(d=(X*X+Y*Y)**.5)/(Z=2+C(q)/1.4)*w,540+C(p)*d/Z*w));x.stroke()
