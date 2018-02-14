// vim: foldmethod=marker

// Android Spinner {{{

// Remix of: https://www.dwitter.net/d/3096
// I was trying to make Android's spinner
c.width+=0;for(r=112;r--;a=r/18+5*t,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineCap='round',x.lineWidth=10*(1.3+Math.sin(a*2+9*t)+1.3+Math.sin(a-7*t)),x.stroke());
c.width+=0;for(r=112;r--;a=r/18+5*t,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineCap='round',x.lineWidth=10*(1.3+Math.sin(a+9*t)+1.3+0*Math.sin(a-7*t)),x.stroke());
c.width+=0;for(r=112;r--;a=r/18+5*t,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineCap='round',x.lineWidth=10*(1.1+Math.cos(r/36)+1.1+Math.cos(r/36)),x.stroke());
c.width+=0;for(r=112;r--;a=r/18+5*t,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineCap='round',x.lineWidth=20*(1.2+C(3.14-r/36)+C(3.14+((r+56)%112)/36)),x.stroke());
c.width+=0;for(r=112;r--;a=r/18+5*t,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineCap='round',x.lineWidth=20*(1.2-S(1.57-r/36)-S(1.57-((r+56)%112)/36)),x.stroke());
// We need to work a based not r based.  We need a number between 0 and 3 (never more or less) for both worms
// Maybe it would be better for my head to use r=360 and make a constant to convert that to 6.283
// t should not push a around; t should push the arguments to sin
c.width+=0;for(r=112;r--;a=r/18,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineCap='round',x.lineWidth=30*(2.2-S(((r+200*t)%112)/72)-S(((300+200*t-r)%112)/72)),x.stroke());
c.width+=0;l=200*(t+1);for(r=99;r--;a=r/16,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineCap='round',x.lineWidth=30*(2.2-S((r+l)%99/64)-S((l-r)%99/64)),x.stroke());
c.width+=0;s=a=>S(a%99/64);l=200*(t+1);for(r=99;r--;a=r/16,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineCap='round',x.lineWidth=30*(2.2-s(r+l)-s(l-r)),x.stroke());

// Don't use arc or stroke at all; fill rectangles instead
c.width+=0;s=a=>S(a%99/64);l=200*(t+1);for(r=99;r--;a=r/16,w=30*(2.2-s(r+l)-s(l-r)),x.fillRect(960+400*C(a),540+400*S(a),w,w));
c.width+=0;s=a=>S(a%99/64);l=200*(t+1);for(r=101;r--;a=r/16,w=30*(2.2-s(r+l)-s(l-r)),x.fillRect(960+400*C(a)-w/2,540+400*S(a)-w/2,w,w));
c.width+=0;s=a=>S(a%99/64);l=180*(t+1);for(r=101;r--;a=1-r/16,w=9*(2.2-s(r+l*.8)-s(l-r)),x.fillRect(960+99*C(a)-w/2,540+99*S(a)-w/2,w,w));

// Remove lineCap
c.width+=0;s=a=>S(a%99/64);l=200*(t+1);for(r=99;r--;a=r/16,x.beginPath(),x.arc(960,540,400,a,a+.3),x.lineWidth=30*(2.2-s(r+l)-s(l-r)),x.stroke());
c.width+=0;s=a=>S(a%99/64);l=200*(t+1);for(r=99;r--;x.arc(960,540,400,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=66-30*(s(r+l)+s(l-r)))a=r/16
c.width+=0;s=a=>S(a%99/64);l=200*t;for(r=99;r--;x.arc(960,540,400,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=66-30*(s(r+l)+s(l-r)))a=1-r/16
// --- Could release ---
c.width|=0;s=a=>S(a%99/64);l=200*t;for(r=99;r--;x.arc(960,540,100,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=30-14*(s(r+l)+s(l-r)))a=1-r/16

// But I want the collision points move
c.width|=0;s=a=>S(a%99/64);l=200*t;for(r=99;r--;x.arc(960,540,100,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=30-14*(s(r+l)+s(1.3*l-r)))a=1-r/16
// Golfing?
c.width|=k=200;s=a=>S(a%k/128);l=k*t;for(r=k;r--;x.arc(960,540,k,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=30-14*(s(r+l)+s(l-r)))a=1-r/32
c.width|=k=100;s=a=>S(a%k/64);l=k*t;for(r=k;r--;x.arc(960,540,k,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=30-14*(s(r+l)+s(l-r)))a=1-r/16
c.width|=k=99;s=a=>S(a%k/64);l=k*t;for(r=k;r--;x.arc(960,540,k,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=30-14*(s(r+l)+s(1.3*l-r)))a=1-r/16
c.width|=k=99;s=a=>S(a%k/64);l=k*t;for(r=k;r--;x.arc(960,540,k,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=30-14*(s(r+l*.7)+s(l-r)))a=1-r/16
c.width|=k=99;s=a=>S(a%k/k);l=k*t;for(r=k;r--;x.arc(960,540,k,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=30-18*(s(r+l)+s(1.3*l-r)))a=1-r/16
// --- RELEASED --- It's slower than the earlier version though
c.width|=k=99;s=a=>S(a%k/k);l=k*t;for(r=k;r--;x.arc(960,540,k,a,a+.3,x.beginPath(x.stroke())),x.lineWidth=28-16*(s(r+l)+s(1.3*l-r)))a=1-r/16
// The /k should be /64 and the 28-16 should be 28-12 but I had to cut corners!  With those settings the tail gets thinner more quickly.
// Also l could be a bit faster

// }}}

// Skype spinner {{{

c.width|=0;for(i=5;i--;)p=i,r=1-C(((95*t+9*p)%120)/32),a=3.14*r,x.fillRect(960+99*S(a),540-99*C(a),20,20)
c.width|=0;for(i=5;i--;)p=i*1.2,k=(95*t+9*p)%150,j=k>99?99:k,r=1-C(j/32),a=3.14*r,x.fillRect(960+99*S(a),540-99*C(a),20,20)
// Inline p=i
c.width|=0;for(i=5;i--;)k=(99*t+9*i)%150,j=k>99?99:k,r=1-C(j/32),a=3.14*r,x.fillRect(960+99*S(a),540-99*C(a),20,20)
c.width|=0;for(i=5;i--;)k=(99*t+9*i)%150,j=k>99?99:k,r=1-C(j/32),a=3.14*r,x.fillRect(960+99*S(a),540-99*C(a),s=20+10*C(j/16),s)
c.width|=0;for(i=5;i--;)k=(99*t+9*i)%150,j=k>99?99:k,a=3.14*(1-C(j/32)),x.fillRect(960+99*S(a),540-99*C(a),s=10+5*(1+C(j/16))**2,s)
c.width|=0;for(i=5;i--;)k=(99*t+9*i)%150,j=k>99?99:k,a=3.14*(1-C(j/32)),s=9+5*(1+C(j/16))**2,x.fillRect(960+99*S(a)-s/2,540-99*C(a)-s/2,s,s)
c.width|=0;for(i=5;i--;)k=(99*t+9*i)%150,j=k>99?99:k,a=3.14*(1-C(j/32)),s=9+5*(1+C(j/16))**2,x.fillRect(960+99*S(a)-s,540-99*C(a)-s/2,s,s)
c.width|=0;for(i=5;i--;x.fillRect(960+99*S(a)-s,540-99*C(a)-s/2,s,s))k=(99*t+9*i)%150,j=k>99?99:k,a=3.14*(1-C(j/32)),s=9+5*(1+C(j/16))**2
// --- RELEASABLE ---
c.width|=0;for(i=5;i--;x.fillRect(960+99*S(a)-s,540-99*C(a)-s/2,s,s))k=(99*t+9*i)%150,j=k>99?99:k,a=3.14*(1-C(j/32)),s=9+3*(2+C(j/16))**2
// The ball at the top shrinks/grows as blobs leave/enter it
c.width|=0;for(i=5;i--;x.fillRect(960+99*S(a)-s,540-99*C(a)-s/2,s,s))k=(99*t+9*i)%150,j=k>99?99:k,a=3.14*(1-C(j/32)),s=9+4*(2+C((k+25)/24))**2
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=(m*t+9*i)%150,j=k>m?m:k,a=3.14*(1-C(j/32)),s=9+4*(2+C((k+25)/24))**2
// --- RELEASABLE --- Blobs travel together / reduce phase separation
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=(m*t+6*i)%150,j=k>m?m:k,a=3.14*(1-C(j/32)),s=9+4*(2+C((k+25)/24))**2

// Skip the pause between 99 and 150
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=(m*t+6*i)%m,j=k,a=6.28*(.5-C(j/32)/2)**3,s=9+1*(2+C(a))**3
// Smooth but never join
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=(m*t+6*i)%m,j=k,a=6.28*j/m,s=9+1*(2+C(a))**3
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=(m*t+3*i*(1-C(6.28*m*t/m)))%m,a=6.28*k/m,s=9+1*(2+C(a))**3
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=(m*t+3*i*(1-C(6.28*m*t/m))),a=6.28*k/m,s=9+1*(2+C(a))**3
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=(m*t),a=6.28*k/m+(i-2)*(1-C(6.28*m*t/m))/4,s=9+1*(2+C(a))**3
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=(m*t),a=6.28*k/m+(i-2)*(1-C(6.28*m*t/m))/2,s=9+1*(2+C(a))**3
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=m*t,a=6.28*k/m,a+=(i-2)*(1.2-C(a))/4,s=9+1*(2+C(a))**3
// An extra a+= makes the central swing fast again
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=m*t,a=6.28*k/m,a+=(1-C(a)),a+=(i-0)*(2-C(a))/4,s=9+1*(2+C(a))**3
// WIP!
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=m*t,A=6.28*k/m,a=A+0*(i-2)/2,a-=S(a)/2,s=9+1*(2+C(A))**3
c.width|=m=99;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=m*t,A=6.28*k/m,a=A+(i-2)/4*(1-C(A)),a-=S(a)/2,s=9+(1+C(a))**5
// --- RELEASED ---
c.width|=m=170;for(i=5;i--;x.fillRect(960+m*S(a)-s,540-m*C(a)-s/2,s,s))k=m*t,a=6.28*k/m,a+=(i-2)*(1-C(a))/6,a-=0.8*S(a),s=20+1.4*(1+C(a))**5

// With arcs
c.width|=0;for(i=5;i--;)k=(99*t+9*i)%150,j=k>99?99:k,r=1-C(j/32),a=3.14*r,x.lineWidth=20,x.beginPath(),x.arc(960,540,99,a,a+.2),x.stroke()
// Get longer mid-swing
c.width|=0;for(i=5;i--;)k=(99*t+9*i)%150,j=k>99?99:k,a=3.14*(1-C(j/32)),x.lineWidth=20,x.beginPath(),x.arc(960,540,99,a,a+.1*(2-C(j/16))),x.stroke()
// Get taller at the top of the swing
c.width|=0;for(i=5;i--;)k=(99*t+9*i)%150,j=k>99?99:k,r=1-C(j/32),a=3.14*r,x.lineWidth=20+(a-3)**4/3,x.beginPath(),x.arc(960,540,99,a-.1,a+.1),x.stroke()
// }}}

// Facebook dots/lines {{{
c.width|=0;for(i=3;i--;)p=t%1,q=p-.1*i,h=p>.1*i&&p<.3+.1*i?(70-40*q)*(0.9):0,x.fillRect(920+i*50,540-h,30,h*2)
c.width|=0;for(i=3;i--;)p=t%1,q=p-.1*i,h=p>.1*i&&p<.3+.1*i?(80-40*q)*(0.9):0,x.fillRect(920+i*50,540-h,35,h*2)
x.fillRect(0,0,1920,1080);t*=1.9;f=.075;for(i=3;i--;)p=t%1,q=p-f*i,h=p>f*i&&p<.24+f*i?(70-80*q)*(0.9):0,x.clearRect(920+i*50,540-h,30,h*2)
x.fillRect(0,0,1920,1080);t*=1.9;f=.075;for(i=3;i--;)p=t%1,q=p-f*i,h=p>f*i&&p<.25+f*i?(80-90*q)*(0.9):0,x.clearRect(920+i*50,540-h,32,h*2)
// }}}

// Mac spinner {{{
for(i=256;i--;)s=(i>>5),r=(i%32)*2,a=3.14*s/4-2*t+r/70,x.fillStyle=`hsl(${s*45},75%,55%)`,x.fillRect(960+r*C(a),540+r*S(a),2,2)
// Got pretty close to the right colors, but in backwards order!
for(i=384;i--;)s=(i/64|0),r=i%64,a=3.14*s/3-2*t+r/70,x.fillStyle=`hsl(${((s-.0)**1.6)*22},75%,55%)`,x.fillRect(960+r*C(a),540+r*S(a),2,2)
for(i=384;i--;)s=(i/64|0),r=i%64,a=3.14*s/3-2*t+r/70,x.fillStyle=`hsl(${((s-.0)**1.7)*19},75%,55%)`,x.fillRect(960+r*C(a),540+r*S(a),2,2)
for(i=384;i--;)s=(i/64|0),r=i%64,a=3.14*s/3-2*t+r/70,x.fillStyle=`hsl(${((s-.0)**1.8)*17},75%,55%)`,x.fillRect(960+r*C(a),540+r*S(a),2,2)
// Colors not quite right, but going in the right direction
for(i=384;i--;)s=(i/64|0),r=i%64,a=3.14*s/3-2*t+r/70,x.fillStyle=`hsl(${((64-s)**0.9)*72},75%,55%)`,x.fillRect(960+r*C(a),540+r*S(a),2,2)
// Uh, just swap C and S to swap the color direction
for(i=384;i--;)s=(i/64|0),r=i%64,a=3.14*s/3-3*t+r/64,x.fillStyle=`hsl(${s**1.8*17},75%,55%`,x.fillRect(960+r*S(a),540+r*C(a),2,2)
// --- RELEASED --- golfed
for(i=384;i--;x.fillRect(960+r*S(a),540+r*C(a),2,2))s=i>>6,r=i%64,a=1.05*s-3*t+r/64,x.fillStyle=`hsl(${17*s**1.8},75%,55%`
// With a border
for(i=384;i--;x.fillRect(960+r*S(a),540+r*C(a),2,2))s=i>>6,r=i%64,a=1.05*s-3*t+r/64,x.fillStyle=`hsl(${17*s**1.8},75%,${r<62?55:0}%`
// }}}

// Slack spinner, coded with Dwitterer
// My suggestion: If someone is looking for a challenge, I've seen a lot of loading animations on Dwitter but I haven't seen the four tartan dots/lines from the Slack spinner... https://cdn.dribbble.com/users/5484/screenshots/2145786/for_dribbble.gif
// Dwitterer's first version
d=['#ff580a','#ff69b4','#0080ff','#00c3af'];for(i in d)x.fillStyle=d[i],x.arc(i*100+850,540,15,0,7),x.fill()
// Add x.beginPath() to see all the colours
d=['#ff580a','#ff69b4','#0080ff','#00c3af'];for(i in d)x.fillStyle=d[i],x.beginPath(),x.arc(i*100+850,540,15,0,7),x.fill()
// My adaptation
c.width|=0;for(i in d=['#f61','#f7b','#08f','#0cb'])x.fillStyle=d[i],x.fillRect(i*99+850,540,15,100*S(t)),x.rotate(.6),x.translate(300,-900)
// Dwitterer's remix back
c.width|=d=['#f61','#f7b','#08f','#0cb'];for(i in d)x.fillStyle=d[i],x.fillRect(i*100+960,540,10,100*S(t-50)),x.rotate(S(t)),x.translate(50,-500)
// My continuation
c.width|=d=['#f61','#f7b','#08f','#0cb'];for(i=99;i--;)a=3*S(t)-3*t+i%4*1.57+1,k=C(a),s=S(a),x.fillStyle=d[i%4],l=i*(1+C(t))-99,x.fillRect(960+55*s-l*k,540+55*k+l*s,25,25)
// With alpha
c.width|=d=['#f613','#f7b3','#08f3','#0cb3'];for(i=99;i--;)a=3*S(t)-3*t+i%4*1.57+1,k=C(a),s=S(a),x.fillStyle=d[i%4],l=i*(1+C(t))-99,x.fillRect(960+55*s-l*k,540+55*k+l*s,25,25)
// Breaking the colors saves 9 chars!
for(c.width|=m=i=99;i--;)a=1+3*(S(t)-t)+i%4*1.57,k=C(a),s=S(a),x.fillStyle=`hsl(${m+m*(i&3)},99%,65%`,l=i*(1+C(t))-m,x.fillRect(960+55*s-l*k,540+55*k+l*s,25,25)
for(c.width|=m=i=99;i--;)a=1+3*(S(t)-t)+i%4*1.57,k=C(a),s=S(a),x.fillStyle=`hsl(${m+m*(i&3)},99%,65%`,l=i*(1+C(t))-m,x.fillRect(960+55*s-l*k,540+55*k+l*s,25,25)
// 17 chars over
for(c.width|=m=i=99;i--;x.fillRect(960+55*s-l*k,540+55*k+l*s,25,25))k=C(a=1+3*(S(t)-t)+i%4*1.57),s=S(a),x.fillStyle=`hsl(${m+m*(i&3)},99%,65%`,l=i*(1+C(t))-m
// Smaller canvas, 13 chars over
for(c.width=m=i=99;i--;x.fillRect(48+9*s-l*k,25+9*k+l*s,5,5))k=C(a=3*(S(t)-t)+i%4*1.57-1),s=S(a),x.fillStyle=`hsl(${m+m*(i&3)},99%,65%`,l=i*(1+C(t))/5-20
// Grow the lines backwards
for(c.width=m=i=99;i--;x.fillRect(48+9*s-l*k,25+9*k+l*s,5,5))k=C(a=3*(S(t)-t)+i%4*1.57-1),s=S(a),x.fillStyle=`hsl(${m+m*(i&3)},99%,65%`,l=20-i*(1+C(t))/5
// For +1, be dots more of the time, only grow lines at the end
for(c.width=m=i=99;i--;x.fillRect(48+9*s-l*k,25+9*k+l*s,5,5))k=C(a=5*(S(t)-t)+i%4*1.57-1),s=S(a),x.fillStyle=`hsl(${m+m*(i&3)},99%,65%`,l=16-i*C(t/2)**8/3
// Shrinking >11
for(c.width=m=i=99;i--;x.fillRect(48+9*s-l*k,25+9*k+l*s,5,5))k=C(a=3*(S(t)-t)+i%4*1.57-1),s=S(a),x.fillStyle=`hsl(${i%4*66},99%,65%`,l=16-i*C(t/2)**8/3
// Shrinking >10
for(c.width=m=i=99;i--;x.fillRect(48+9*s-l*k,25+9*k+l*s,5,5))k=C(a=3*(S(t)-t)+i%4*1.57-1),s=S(a),x.fillStyle=`hsl(${i%4*66},99%,70%`,l=20-i*(1+C(t))/5

// Going back to large version, trying to make it nice for codegolf.tk ?
for(c.width|=m=i=99;i--;x.fillRect(960+55*s-l*k,540+55*k+l*s,25,25))a=3*(S(t)-t)-1+i%4*1.57,k=C(a),s=S(a),x.fillStyle=`hsla(${i%4*m},99%,50%,0.2`,l=m-2*i*C(t/2)**8
