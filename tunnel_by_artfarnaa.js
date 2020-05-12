// artfarnaa's original: https://www.dwitter.net/d/3090

// Remixing
for(c.width|=a=30;--a;
x.arc(960+a*a*S(3*t+a/9)/2,540+a*a*S(2*t+a/9)*2,a*a*3,0,7))
x.moveTo(G=a|0,0);x.fill('evenodd')

for(c.width|=a=30;--a;
x.arc(960+b*b*S(3*t+b/9)/2,540+b*b*S(2*t+b/9)*2,b*b*3,0,7))
b=a+5*t%2,x.moveTo(G=b|0,0);x.fill('evenodd')

for(c.width|=a=35;--a;
x.arc(960+(b*b+90)*S(3*t+b/29)/2,540+(b*b+90)*S(2*t+b/29)*2,b*b*3,0,7))
b=a+9*t%2,x.moveTo(G=b|0,0);x.fill('evenodd')

for(c.width|=a=25;--a;
x.arc(960+(90*S(t+b/9))/2,540+(70*S(2*t+b/9))*2,b*b*3,0,7))
b=a+9*t%2,x.moveTo(G=b|0,0);x.fill('evenodd')

for(c.width|=a=25;--a;
x.arc(960+(90*S(t+b/4))/2,540+(40*S(2*t+b/5))*2,b*b*3,0,7))
b=a+9*t%2,x.moveTo(G=b|0,0);x.fill('evenodd')

for(c.width|=a=25;--a;
x.arc(960+(b*b-999)*S(t+b*b/250)/2,540+(b*b+-499)*S(3*t-b*b/555),b*b*3,0,7))
b=a+9*t%2,x.moveTo(G=b|0,0);x.fill('evenodd')

for(c.width|=a=25;--a;
x.arc(960+(b*b-999)*S(2*t+b*b/200)/2,540+(b*b+-999)*S(t-b*b/255)/2,b*b*3,0,7))
b=a+9*t%2,x.moveTo(G=b|0,0);x.fill('evenodd')

// The bigger the subtract from b the better
for(c.width|=a=25;--a;
x.arc(960+(b*b-9999)*S(2*t+b*b/200)/20,540+(b*b+-9999)*S(t-b*b/255)/20,b*b*3,0,7))
b=a+9*t%2,x.moveTo(G=b|0,0);x.fill('evenodd')

for(c.width|=a=25;--a;x.arc(960+(b-999)*S(t+b/220)/2,540+(b+-999)*C(t-b/220)/2,b*3,0,7))f=a+9*t%2,b=f*f,x.moveTo(G=b|0,0);x.fill('evenodd')

for(c.width|=a=25;--a;x.arc(960+(b-999)*S(t+b/220)/2,540+(b+-999)*S(t-b/220)/2,b*3,0,7))f=a+9*t%2,b=f*f,x.moveTo(G=b|0,0);x.fill('evenodd')

c.width|=k=960;for(a=25;--a;x.arc(k+(b-k)*S(t+b/200)/2,540+(b-k)*C(t/3-b/200)/2,b*3,0,7))f=a+7*t%2,b=f*f,x.moveTo(G=b|0,0);x.fill('evenodd')

// --- RELEASED --- https://www.dwitter.net/d/3091
c.width|=k=960;for(a=25;--a;x.arc(k+(b-k)*S(t+b/210)/2,540+(b-k)*C(t/3-b/210)/2,b*3,0,7))f=a+7*t%2,b=f*f,x.moveTo(G=b|0,0);x.fill('evenodd')
