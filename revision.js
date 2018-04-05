c.width|=0;w=960;for(i=9;i--;r=i*9)x.beginPath(),x.lineWidth=9,x.arc(940,540,i*60,0,2+S(t)),x.stroke()

c.width|=0;x.lineWidth=d=50;for(i=9;i--;r=i*d)x.beginPath(),x.arc(940,540,r,2+2*S(t+i),6+2*C(t-i)),x.stroke()

c.width|=0;x.lineWidth=d=50;for(i=9;i--;r=i*d)i^4&&(x.beginPath(),x.arc(940,540,r*.9,r+t+2+2*S(t+i),r+t+5+1*C(t-i)),x.stroke())

c.width|=0;x.lineWidth=d=50;for(i=9;i--;r=i*d)n=r%6+3,i^5&&i^2&&(x.beginPath(),x.arc(940,540,r*.9,1+S(t+i),n+1*C(t-i)),x.stroke())

c.width|=0;x.lineWidth=d=50;for(i=9;i--;r=i*d)s=3+3*S(t+i)-i,l=r%6,x.beginPath(),x.arc(940,540,r*.9,s,s+l),x.stroke()

// Nice distrib but just a little too crazy
c.width|=0;x.lineWidth=d=50;for(i=19;i-->3;)r=i,s=6*S(t+r)-r,l=1+i%4/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l),x.stroke()
c.width|=0;x.lineWidth=d=50;for(i=19;i-->3;)r=i,s=6*S(t+r)-r,l=1+i%4/2,i%5&&(x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l),x.stroke())

c.width|=0;x.lineWidth=d=50;for(i=19;i-->3;)r=i,s=2*S(3*t+r)-4*r,l=1+i%5/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l),x.stroke()

c.width|=0;x.lineWidth=d=50;for(i=19;i-->3;)s=i+4*S(t+i),l=i%6/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l),x.stroke()
// Good with 7 layers
c.width|=0;x.lineWidth=d=50;for(i=19;i-->3;)s=i+4*S(t+i),l=i%5,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l),x.stroke()
// Good with 9 layers
c.width|=0;x.lineWidth=d=50;for(i=20;i-->3;)s=i+4*S(t+i),l=i%4,x.beginPath(),x.arc(940,540,(i%10)*d*.9,s,s+l),x.stroke()

// Thick
c.width|=0;x.lineWidth=d=50;for(i=20;i-->3;)s=i+6*S(t+i),l=i%8,x.beginPath(),x.arc(940,540,(i%10)*d*.9,s,s-l),x.stroke()

// Looks quite like the Revision logo when t+i/9 is low
// Not bad but too periodic
c.width|=0;x.lineWidth=d=50;for(i=30;i-->3;x.stroke())s=i+S(t+i/9),l=i%6/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l)
// Unfortunately there regularly appears an ugly black cluster on the left that doesn't look random
c.width|=0;x.lineWidth=d=50;for(i=30;i-->5;x.stroke())s=i-S(t*i/4),l=i%6/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l)
// Does repeat but takes some time to reach it
c.width|=0;x.lineWidth=d=50;for(i=30;i--;x.stroke())s=i+6*S(t+i),l=i%6/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l)
c.width|=0;x.lineWidth=d=50;for(i=30;i--;x.stroke())s=i+6*S(t+i),l=i%6/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l)
c.width|=0;x.lineWidth=d=50;for(i=30;i--;x.stroke())s=i+6*S(t+i),l=i%6/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l)
// Larger, smaller central hole
c.width|=0;x.lineWidth=d=50;for(i=30;i--;x.stroke())s=i+6*S(t+i),l=i%6/2,x.beginPath(),x.arc(940,540,(2+i%9)*d*.9,s,s+l)

// Enforce two empty layers
c.width|=0;x.lineWidth=d=50;for(i=30;i--;x.stroke())s=i+6*S(t+i),l=(3+i)%5/2,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l)

// Enforce two empty and two full (almost) but a bit too regular
c.width|=0;x.lineWidth=d=50;for(i=30;i--;x.stroke())s=i+6*S(t+i),l=(4+i)%5*.5,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l*l)

// Just experimenting
c.width|=0;x.lineWidth=d=50;for(i=30;i--;(i+4)%5&&x.stroke())s=i+6*S(t+i),l=(5+2*i)%6/2,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l)
// A nice mixture of different sizes in psuedo-random order, but no full circles
c.width|=0;x.lineWidth=d=50;for(i=30;i--;(i+4)%5&&x.stroke())s=i+6*S(t+i),l=(5+i*3)%6/3,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l)

// Multiply length by i to get different sizes on the same layer
c.width|=0;x.lineWidth=d=50;for(i=30;i--;(i+4)%5&&x.stroke())s=i+6*S(t+i),l=(5+i*3)%6/44*i,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l)
// NICE!  Slightly thicker
c.width|=0;x.lineWidth=d=50;for(i=30;i--;(i+4)%5&&x.stroke())s=i+6*S(t+i),l=(5+i*3)%6/33*i,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l)
c.width|=0;x.lineWidth=d=45;for(i=30;i--;(i+3)%5&&x.stroke())s=i+6*S(t+i),l=(99-i*3)%7/2,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l)
c.width|=0;x.lineWidth=d=45;for(i=30;i--;(i+3)%5&&x.stroke())s=i+6*S(t+i),l=(2+i*3)%7/3,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l*l)
// Thick and slow but captures the esssence
c.width|=0;x.lineWidth=d=45;for(i=30;i--;(i+3)%5&&x.stroke())s=i+6*S(t+i),l=(3+i*3)%7/2.5,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l*l)
c.width|=0;x.lineWidth=d=45;for(i=30;i--;(i+3)%5&&x.stroke())s=i+6*S(t+i),l=(3+i*3)%7/1.5,x.beginPath(),x.arc(940,540,(2+i%10)*d*.9,s,s+l)

// THIS ONE has the middle key shape
// But sadly it also has a few silly radial lines
c.width|=0;x.lineWidth=d=40;for(i=30;i--;(i+4)%6&&x.stroke())s=i+6*S(t+i),l=(4+i*3)%7/1.5,x.beginPath(),x.arc(940,540,(2+i%12)*d*.9,s,s+l)
// This thinner one also has the key shape.  But instead of radial lines, it has radial holes
c.width|=0;x.lineWidth=d=40;for(i=30;i--;(i+4)%6&&x.stroke())s=i+6*S(t+i),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,(2+i%12)*d*.9,s,s+l)

// A simpler one, but really captures the revi logo quite well, even though it has too many layers
c.width|=0;x.lineWidth=d=40;for(i=30;i--;(r+2)%3&&x.stroke())r=(2+i%12),s=i+6*S(t+i),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// --- RELEASED --- Similar, but with fewer layers https://www.dwitter.net/d/2474
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+4*S(t+i),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Same, but golfed to 122
c.width|=i=30;with(x)for(lineWidth=45;i--;r%4&&stroke())beginPath(r=2+i%10),arc(940,540,r*44,s=i+4*S(t/3+i),s+(4+i*3)%6)
// Trying to do the layers more exactly

// Give each block a unique period, for less repetition
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+4*S(t*i/60+i),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Another way to do that
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+4*S(i%7*t/9+i),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)

// Use ** so they sit still for some time.  Notice that each ring has a block which comes immediately after another block.
// The problem is that ** doesn't make them sit at -1 and +1, it makes them sit at 0, with a brief swing over to 1 and back.
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+4*S(t/16+i)**256,l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Combined with the unique periods
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+4*S(i%4*t/10+i)**64,l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+4*(S(i%4*t/10+i)**32),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Slow rotation plus the locking/unlocking
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+2*(S(i%7*t/60)**32+2*C(t/30+i%5)),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Like all in this group, looks nice until you see the swing there-and-back pattern
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+2*C(t/4+i)**32,l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)


// Staircase function
// BUG: Using the approximation 3.141 will make the animation jerky if it is left running for more than a minute or two.
// If you watch for about a minute (or less) there is an "unlocked" configuration where there are holes open to the middle.
stair=x=>2*(x>>1)+(x%2<1?-1:C(x*3.141))


// More generalised staircase function, with configurable width of flat and curved parts
stair=(x,f,c)=>2*(x/(f+c)|0)+((e=x%(f+c))<f?-1:-C((e-f)*3.141/c))
// Purer: starts at 0 and step up 1
stair=(x,f,c)=>(x/(f+c)|0)+.5*((e=x%(f+c))<f?0:1-C((e-f)*3.141/c))

// Documented the staircase here: https://math.stackexchange.com/questions/1671132

// Quite chaotic, sometimes together, sometimes stopping
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+((i%4)-1.5)*stair((i%8)*t/4),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Tweaking (a favourite although only 4 chunks)
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+(((1+i)%4)-1.5)*stair((i/2%4) + t,3,1),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Not bad, interesting:
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=3*i+(((1+i)%4)-1.5)*stair((i/2%6) + t,5,1),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Ditto
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+(((1+i)%4)-1.5)*stair((i%9)*1.1 + t,9,1),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
//
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=3*i+(((1+i)%6)-2.5)*stair((i/2%6) + t,3,1),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
// Four pieces: left-right-left-right
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+(((1+i)%4)-1)*(1+(i%4))/3*stair((i/2%4) + t,3,1),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)

// With perspective
c.width|=0;x.lineWidth=d=50;for(i=30;i--;x.stroke())s=i+6*S(t+i),l=i%6/2,x.beginPath(),x.arc(940,540,(i%9)*d*.9,s,s+l);c.style.transform=`perspective(50mm)rotate3d(1,1,1,${t}rad`

// REMIX FOR REVISION 2018
stair=(x,f,c)=>(x/(f+c)|0)+.5*((e=x%(f+c))<f?0:1-C((e-f)*3.141/c))
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+(((1+i)%4)-1.5)*stair((i/2%4)+4*t,3,1),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
c.style.transform=`perspective(50mm)rotate3d(1,1,1,${t}rad`
// 256 chars
Q=x=>2*(x>>1)+(x%2<1?-1:C(x*3.141))
c.width|=0;x.lineWidth=d=45;for(i=30;i--;r%4&&x.stroke())r=(2+i%10),s=i+(((1+i)%4)-1.5)*Q((i/2%4)+2*t,3,1),l=(4+i*3)%6,x.beginPath(),x.arc(940,540,r*d*.9,s,s+l)
c.style.transform=`perspective(50mm)rotate3d(1,1,1,${t}rad`
// ---- TODO ---- Check speed on powerful machine before releasing!
// ---- TODO ---- Try to fix the perspective bug:
// BUG: THESE GET MESSED UP ON CHROME on dwitter when the angles get extreme
// On codegolf.tk it doesn't get messed up, but it does completely disappear for a small part of the rotation
// Golfed (removed 16 chars)
// ---- TODO ---- We could inline Q by using k= instead of passing args
Q=k=>2*(k>>1)+(k%2<1?-1:C(k*3.141))
c.width|=i=30;with(x)for(lineWidth=45;i--;r%4&&stroke())beginPath(r=2+i%10),arc(940,540,r*44,s=i+(((1+i)%4)-1.5)*Q((i/2%4)+2*t,3,1),s+(4+i*3)%6)
c.style.transform=`perspective(50mm)rotate3d(1,1,1,${t}rad`

// The streaming music compo had a gentle starfield flowing behind the logo.  Perhaps we can use the 20 spare chars from the golfed version to do that too?
with(x)for(c.width|=i=60;i--;r%4&&stroke())k=i>30,lineWidth=45+k*99,beginPath(r=k?i*t%30:2+i%10),arc(940,540,r*44,s=i+!k*4*S(t/3+i),s+(k?.04:(4+i*3)%6))
with(x)for(c.width|=i=60;i--;r%4&&stroke())k=i>30,beginPath(r=k?i*t%60:2+i%10),lineWidth=45+39*k*r,arc(940,540,r*44,s=i+!k*4*S(t/3+i),s+(k?.02:(4+i*3)%6))
with(x)for(c.width|=i=60;i--;r%4&&stroke())k=i>30,beginPath(r=k?i*t%30:2+i%10,lineWidth=45+9*k*r),arc(940,540,r*44,s=i+!k*4*S(t/3+i),s+(k?.04:(4+i*3)%6))
with(x)for(c.width|=i=60;i--;r%4&&stroke())k=i>30,beginPath(r=k?i*t%60:2+i%10,lineWidth=45+49*k*r),arc(940,540,r*44,s=i+!k*4*S(t/3+i),s+(k?.02:(4+i*3)%6))
// But r should grow not linearly but quadratically, otherwise it feels like the lines slow down!
with(x)for(c.width|=i=60;i--;r%4&&stroke())k=i>30,beginPath(r=k?(i*t/9%8)**2:2+i%10,lineWidth=45+49*k*r),arc(940,540,r*44,s=i+!k*4*S(t/3+i),s+(k?.02:(4+i*3)%6))
// We can slow down the stars with i<30 instead of i>30 but then they appear less random
// Actually even with i>30 they still show some unwanted patterns sometimes
