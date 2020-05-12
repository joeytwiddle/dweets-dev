// FrankForce's original: https://www.dwitter.net/d/18022
c.width|=F=800;t*=9;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2),strokeStyle=R(0,a*99,a*F,.1+a/9),ellipse(F,99+i%F,a&i%F<(b?F-t:t)?S(b?i/9-t*7:0)**2*5:C(i/127)*159+169-a*9,!a*3,0,0,7);

// Notes:
// It makes two passes
// a is the pass (0 or 1)
// b is top or bottom (0 or 1)
// q is falling sand or fallen sand (1 or 0)

// My remixes:
c.width|=F=800;t*=9;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2),strokeStyle='#0003',ellipse(F,99+i%F,(q=a&i%F<(b?F-t:t))?S(b?i/9-t*7:0)**2*5:C(i/127)*159+169-a*9,!q*50,0,0,7)
//
c.width|=F=800;t*=99;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2,q=a&i%F<(b?F-t:t)),strokeStyle='#0003',ellipse(F,99+i%F,q?b*S(i/9-t*7)**2*5:C(i/127)*159+169-a*9,!q*50,0,0,7)
c.width|=F=800;t*=99;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2,q=a&i%F<(b?F-t:t)),strokeStyle='#0003',ellipse(F,99+i%F,q?b*S(i/9-t*7)**2*5:C(i/127)*159+169,!q*50,0,0,7)
c.width|=F=800;t*=99;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2,q=a&i%F<(b?F-t:t)),strokeStyle='#0003',ellipse(F,99+i%F,q?b*S(i/9-t*7)**2*5:w=C(i/127)*159+169,!q*w/5,0,0,7)
c.width|=F=800;t*=99;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2,q=a&i%F<(b?F-t:t)),strokeStyle='#0003',ellipse(F,99+i%F,q?b*S(i/9-t*7)**2*5:w=C(i/127)*159+169,!q*w/5,0,0,7)
c.width|=F=800;t*=99;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2,q=a&i%F<(b?F-t:t)),strokeStyle='#0003',ellipse(F,99+i%F,q?b**5:w=C(i/127)*159+169,!q*w/5,0,0,7)
// GOOD1
c.width|=F=800;t*=99;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2,q=a&i%F<(b?F-t:t)),globalAlpha=.2,ellipse(F,99+i%F,q?b**5:w=C(i/127)*159+169,!q*w/5,0,0,7)
// I was trying to have the sand gather as a cone, but this needs more work
c.width|=F=800;t*=99;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2,q=a*(i-(b?F-t:t))),strokeStyle='#0003',ellipse(F,99+i%F,q<0?b*5:w=(C(i/127)*159+169)*(a&b?q/F:1),(q>=0)*w/5,0,0,7)

// Fork from GOOD1
// Reduce resolution
c.width=F=600;t*=99;with(x)for(i=2*F;i--;stroke())beginPath(a=i<F,b=i>F/2,q=a&i%F<(b?F-t:t)),globalAlpha=.1,ellipse(F/2,20+i%F/2,q?b**5:w=C(i/96)*40+44,!q*w/5,0,0,7)
