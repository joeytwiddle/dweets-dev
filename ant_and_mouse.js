// 
onmousemove=e=>(k=9,d=Math.atan2(e.pageY*s-b,e.pageX*s-a))
t?x.fillRect(a+=k*C(d),b+=k*S(d),9,9):a=b=d=k=0
s=2e3/c.clientWidth

// Released
t?x.fillRect(a+=9*C(d),b+=9*S(d),9,9):a=b=k=j=0
d=Math.atan2(j-b,k-a)
s=2e3/c.clientWidth
onmousemove=e=>(k=e.pageX*s,j=e.pageY*s)

// Sucky big version, using a vector instead of an angle
t?s=2e3/c.clientWidth:a=b=k=j=0
e=k-a;f=j-b
M=(e*e+f*f)**.5
M?(x.fillRect(a+=9*e/M,b+=9*f/M,9,9)):onmousemove=e=>(k=e.x*s,j=e.y*s)

// With D, let him turn slowly
// With v, let him go faster when further away
t?x.fillRect(a+=v*C(d),b+=v*S(d),9,9):a=b=k=j=d=0
D=(Math.atan2(j-b,k-a)-d+3.14)%6.24-3.14;d+=.05*D
v=Math.log((j-b)**2 + (k-a)**2+1)/2
s=2e3/c.clientWidth
onmousemove=e=>(k=e.pageX*s,j=e.pageY*s)

// Turn slower at higher speeds
t?x.fillRect(a+=v*C(d),b+=v*S(d),9,9):a=b=k=j=d=0
v=Math.log((j-b)**2 + (k-a)**2+1)/2
D=(Math.atan2(j-b,k-a)-d+3.14)%6.24-3.14
d+=D/(v+.1)
s=2e3/c.clientWidth
onmousemove=e=>(k=e.pageX*s,j=e.pageY*s)
