// Inspired by https://www.youtube.com/watch?v=Zz0Xcneakeg
// Remix of https://www.dwitter.net/d/3633
for(r=Math.random,w=250,i=4e3;i--;x.fillRect((m?1280:640)+a*(c?C(p):S(w*p)),c?300+2*a+a/3*S(p):w+C(w*p)*a,k=2/(5+t),k))a=w*r()**.4,p=3*r(),c=i&1,m=i&2
for(r=Math.random,w=200,i=4e3;i--;x.fillRect((m?1280:640)+a*(c?C(p):S(p)),c?600+w*m+(2-2*m)*a+a/4*S(p):300+C(p)*a,k=2/(5+t),k))a=w*r()**.4,p=w*r(),c=i&1,m=i&2
// Inline c
for(r=Math.random,w=200,i=4e3;i--;x.fillRect((m?1280:640)+a*(i&1?C(p):S(p)),i&1?600+w*m+(2-2*m)*a+a/4*S(p):300+C(p)*a,k=2/(5+t),k))a=w*r()**.4,p=w*r(),m=i&2
// Constant fill rate
for(r=Math.random,w=200,i=1e4;i--;x.fillRect((m?1280:640)+a*(i&1?C(p):S(p)),i&1?600+w*m+(2-2*m)*a+a/4*S(p):300+C(p)*a,.3,.3))a=w*r()**.4,p=w*r(),m=i&2
// Reuse k (148)
for(r=Math.random,i=w=200,k=.3;i--;x.fillRect((m?1280:640)+a*(i&1?C(p):S(p)),i&1?600+w*m+(2-2*m)*a+a/4*S(p):300+C(p)*a,k,k))a=w*r()**k,p=w*r(),m=i&2
// m* instead of m?: (145)
for(r=Math.random,i=w=200,k=.3;i--;x.fillRect(480+720*m+a*(i&1?C(p):S(p)),i&1?600+w*m+(2-2*m)*a+a/4*S(p):300+C(p)*a,k,k))a=w*r()**k,p=w*r(),m=i&2
// Put Norma on the left
for(r=Math.random,i=w=200,k=.3;i--;x.fillRect(480*(1+m)+a*(i&1?C(p):S(p)),i&1?600+w*m+(2-2*m)*a+a/4*S(p):300+C(p)*a,k,k))a=w*r()**k,p=w*r(),m=i&2
// --- GOOD --- Remove redundant S(p) (134) (Can make it faster with `k=.4` but not so attractive)
for(r=Math.random,i=w=200,k=.3;i--;x.fillRect(480*(1+m)+a*C(p),i&1?575+w*m+(2-2*m)*a+a/4*S(p):275+S(p)*a,k,k))a=w*r()**k,p=w*r(),m=i&2
// Go back to the faster softening renderer
for(r=Math.random,w=200,i=1e4;i--;x.fillRect(480+480*m+a*C(p),i&1?600+w*m+(2-2*m)*a+a/4*S(p):300+S(p)*a,k=2/(5+t),k))a=w*r()**.4,p=w*r(),m=i&2
// Faster render but softer, flatter angle (136)
for(r=Math.random,w=200,i=4e3;i--;x.fillRect(480*(1+m)+a*C(p),i&1?575+w*m+(2-2*m)*a+a/8*S(p):275+S(p)*a,.1,.1))a=w*r()**.4,p=w*r(),m=i&2
// --- GOOD --- Minor layout tweaks, faster. It goes dark eventually, but I think Dwitter viewers would appreciate the speed
for(r=Math.random,w=200,i=4e3;i--;x.fillRect(520+400*m+a*C(p),i&1?575+w*m+(2-2*m)*a+a/5*S(p):275+S(p)*a,.2,.2))a=w*r()**.4,p=w*r(),m=i&2
// Heads touching torsos
for(r=Math.random,w=200,i=4e3;i--;x.fillRect(480*(1+m)+a*C(p),i&1?525+w*m+(2-2*m)*a+a/8*S(p):325+S(p)*a,.1,.1))a=w*r()**.4,p=w*r(),m=i&2
// Fast render that doesn't go black (141)
for(r=Math.random,w=200,i=4e3;i--;x.fillRect(520+400*m+a*C(p),i&1?575+w*m+(2-2*m)*a+a/5*S(p):275+S(p)*a,.2/(1+t),1))a=w*r()**.4,p=w*r(),m=i&2
// --- GOOD --- Fast render golfed
for(r=Math.random,w=200,i=4e3;i--;x.fillRect(520+400*m+a*C(p),i&1?575+w*m+(2-2*m)*a+a/5*S(p):275+S(p)*a,S(1/t),.2))a=w*r()**.4,p=w*r(),m=i&2
