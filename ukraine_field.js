X=Math.random()*1920
x.shadowColor=`hsl(${t?40+t*t%9:211},99%,50%,.5)`,x.shadowBlur=9+t
for(Y=500;Y--;)x.fillRect(X+Y**.5,530+t*9+Y,w=t*Y/9,w)

R=Math.random;X=R()*2e3
x.shadowColor=`hsl(${t?40+9*R():211},99%,50%)`,x.shadowBlur=9
for(Y=500;Y--;)x.fillRect(X-Y**.8,530+t*9+Y,w=2+Y/9,w)

R=Math.random;X=R()*2e3
x.fillStyle=`hsl(${t?40+9*R():211},99%,60%,.5)`
for(Y=500;Y--;)x.fillRect(!!t*X-Y**.8,!!t*530+t*9+Y,w=t?2+Y/9:2e3,w)

// The Ukrainian flag can be interpreted as a wheatfield under a blue sky
// Published: https://www.dwitter.net/d/25069
R=Math.random;X=R()*2e3
x.fillStyle=`hsl(${t?40+20*R()-t/15:211},99%,60%)`
for(Y=550;Y--;)x.fillRect(!!t*X-Y**.7,!!t*530+Y+t,w=t?Y/9:2e3,w)
