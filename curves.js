x.fillRect(60*t,500+500*S(t),3,3)
x.fillRect(60*t,500+500*(S(t)>0?1:-1)*Math.abs(S(t))**.1,3,3)
clamp=(x,a,b)=>x<a?a:x>b?b:x;x.fillRect(60*t,500+clamp(800*S(t),-500,500),3,3)
