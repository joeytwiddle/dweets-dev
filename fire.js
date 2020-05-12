// katkip's fire
// https://www.dwitter.net/d/17943
for(c.width=i=200,x.fillStyle='#024';i--;)x.fillRect(99+S(i*i+t/9)*99,49+C(i)*49,9,9),'‮';c.style.filter=`blur(12px)contrast(15)invert(7)`
// My remixes
for(c.width=i=200,x.fillStyle='#024';i--;)x.fillRect(99+C(i*i+t/9)*49,110+20-i*t%99,9,9);c.style.filter=`blur(12px)contrast(15)invert(7)`
for(c.width=i=99,x.fillStyle='#024';i--;)x.fillRect(50+25*(q=C(i*i+t/9)),99-50*C(q)-i*t%40,4,9);c.style.filter=`blur(12px)contrast(15)invert(7)`
// Wow cool patterns!
for(c.width=i=99,x.fillStyle='#024';i--;)x.fillRect(50+25*(q=C(i+t%20)),99-50*C(q)-i*t%40,4,9);c.style.filter=`blur(12px)contrast(15)invert(7)`
for(c.width=i=99,x.fillStyle='#024';i--;c.style.filter=`blur(9px)contrast(15)invert()`)x.fillRect(50+22*(q=C(i+t%20)),99-50*C(q)-i*t%40,4,9)
// Instead of raising the middle, stretch the middle (it moves faster, which looks good)
for(c.width=i=99,x.fillStyle='#024';i--;c.style.filter=`blur(9px)contrast(15)invert()`)x.fillRect(50+22*(q=C(i+t%20)),80-(i*t%40)*(1+C(q))*.9,6,9)
