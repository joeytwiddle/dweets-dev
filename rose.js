// Forked from lotus2018.js

// https://beta.dwitter.net/create

// White -> red
c.width|=0
for(i=8448;i-=8;)T=i>>8,y=i%256,p=Math.abs(T-16),
W=8+99*S(b=y/83)*S(a=(4*p+t)%3.14+(T>16)*3.14)*(1+S(E=p/19)),
x.fillStyle=`hsl(0,99%,${60+2*p}%)`,
x.fillRect(960-600*C(a)*y/256*S(E)-W,860-y*(2-(1+S(b)+2*S(a))*S(E)+C(E))/2,2*W,20)

// Oops
c.width|=0
for(i=0;i<8448;i+=8)T=i>>8,y=i%256,p=Math.abs(T+48),
  W=99*S(b=y/83)*S(a=(4*p+t)%3.14+(T>16)*3.14)*(1+S(E=p/19)),
  x.fillStyle=`hsl(0,99%,${y/5}%)`,
  x.fillRect(960-600*C(a)*y/256*S(E)-W,860-y*(2-(1+S(b)+2*S(a))*S(E)+C(E))/2,2*W,20)

// Red -> black
c.width|=0
for(i=8448;i-=8;)T=i>>8,y=i%256,p=Math.abs(T-16),
W=99*S(b=y/83)*S(a=(4*p+t)%3.14+(T>16)*3.14)*(1+S(E=p/11)),
x.fillStyle=`hsl(0,99%,${y/5}%)`,
x.fillRect(960-600*C(a)*y/256*S(E)-W,860-y*(3-(1+S(b)+2*S(a))*S(E)+C(E))/2,2*W,30)

// Wheee
c.width|=0
for(i=8448;i-=8;)T=i>>8,y=i%256,p=Math.abs(T-16),
  W=99*S(b=y/83)*S(a=(4*p+t)%3.14+(T>16)*3.14)*(1+S(E=p/11+t)),
  x.fillStyle=`hsl(0,99%,${90-2*p}%)`,
  x.fillRect(960-600*C(a)*y/256*S(E)-W,860-y*(3-(1+S(b)+2*S(a))*S(E)+C(E))/2,2*W,30)

// Opening and closing
c.width|=0
for(i=8448;i-=8;)T=i>>8,y=i%256,p=Math.abs(T-16),
  W=99*S(b=y/83)*S(a=(4*p+t)%3.14+(T>16)*3.14)*(1+S(E=p/11*S(t)**2)),
  x.fillStyle=`hsl(0,99%,${y/5}%)`,
  x.fillRect(960-600*C(a)*y/256*S(E)-W,860-y*(3-(1+S(b)+2*S(a))*S(E)+C(E))/2,2*W,30)

// Opening and closing (better but bigger)
c.width|=0
for(i=8448;i-=8;)T=i>>8,y=i%256,p=Math.abs(T-16),
W=99*S(b=y/83)*S(a=(4*p+t+C(t))%3.14+(T>16)*3.14)*(1+S(E=p/11*((S(t))**2)**0.3)),
x.fillStyle=`hsl(0,99%,${y/5}%)`,
x.fillRect(960-600*C(a)*y/256*S(E)-W,860-y*(3-(1+S(b)+2*S(a))*S(E)+C(E))/2,2*W,30)
