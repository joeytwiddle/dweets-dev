// https://www.dwitter.net/d/3111
c.width*=1;for(i=70;i--;x.fillRect(800+i*5,200+o*40,5,i>2?200:700))x.globalAlpha=o=S(t*2+i/8)*i/130+.7
// Better shading:
c.width*=1;for(i=70;i--;x.fillRect(800+i*5,200+o*40,5,i>2?200:700))o=S(a=t*2+i/8)*i/130+.7,x.globalAlpha=.4+C(a)/7
// Double wave:
c.width*=1;for(i=70;i--;x.fillRect(800+i*5,100+o*190,5,i>2?200:700))x.globalAlpha=o=.6+(.2*S(-t*11+i/8)+.2*C(t*5))*i/130

// His new changing-color technique https://www.dwitter.net/d/3116
h=800;c.width*=1;for(i=64;i--;x.fillRect(h+i*6,y=200+S(p)*i/5,6,i>2?y:h))x.fillStyle=`hsl(${~t*h^i*2},90%,${i>2?(35-9*C(p=t*2+i/6)):0}%`
// Calculate actual derivative to do shading
h=800;c.width*=1;for(i=64;i--;x.fillRect(h+i*6,y=200+o,6,i>2?y:h),p=o)o=S(t*2+i/6)*i/3+40,x.fillStyle=`hsl(${~t*h^i*2},90%,${i>2?50+(o-p)*9:0}%`
// Rainbow flag
h=800;c.width*=1;for(i=64;i--;x.fillRect(h+i*6,y=200+o,6,i>2?y:h),p=o)o=S(t*2+i/6)*i/3+40,x.fillStyle=`hsl(${i>>3<<5},90%,${i>2?50+(o-p)*7:0}%`
// Larger
h=800;c.width*=1;for(i=256;i--;x.fillRect(99+i*6,99+o,6,i>2?700:h),p=o)o=S(t*2+i/9)*i/3+40,x.fillStyle=`hsl(${i/30<<5},90%,${i>2?50+(o-p)*3:0}%`
// BUG: For some reason occasionally the last column or two turn black.  Ah it's when p and o are wrap around.
// BUG: In fact it will crash on the first run because p is not defined!
c.width*=1;for(i=256;i--;x.fillRect(180+i*6,50+o,6,900),p=o)o=(S(i/11-t*11)+C(i/19-t*17))*i/9,x.fillStyle=`hsl(${i/23.2<<5},90%,${50+(o-p)*3}%`
c.width*=1;for(i=256;i--;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i/11-t*11)+C(i/19-t*17))*i**.5,x.fillStyle=`hsl(${i/23.2<<5},90%,${50+(o-p)*3}%`
// This can fix that bug
c.width*=1;for(i=p=0;i++<256;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i/11-t*11)+C(i/19-t*17))*i/12,x.fillStyle=`hsl(${i/23.2<<5},90%,${50+(o-p)*3}%`
c.width+=p=0;for(i=256;i--;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i/11-t*11)+C(i/19-t*17))*i/12,x.fillStyle=`hsl(${i/23.2<<5},90%,${50+(o-p)*3}%`
for(c.width+=(i=p=0);i++<256;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i/11-t*11)+C(i/19-t*17))*i/12,x.fillStyle=`hsl(${i/23.2<<5},90%,${50+(o-p)*3}%`
// Golfing
c.width+=p=0;for(i=256;i--;x.fillRect(64+i*7,70+o,7,900),p=o)o=(S(i/7-t*9)+C(i/9-t*7))*i/9,x.fillStyle=`hsl(${i/23.2<<5},90%,${50+(o-p)*3}%`
c.width+=p=0;for(i=252;i--;x.fillRect(64+i*7,70+o,7,900),p=o)o=(S(i/7-t*9)+C(i/9-t*7))*i/9,x.fillStyle=`hsl(${i/23<<5},90%,${50+(o-p)*3}%`
c.width+=p=0;for(i=252;i--;x.fillRect(64+i*7,70+o,7,900),p=o)o=(S(i/9-t*7)+C(i/17-t*9))*i/9,x.fillStyle=`hsl(${i/23<<5},90%,${50+(o-p)*3}%`
for(c.width+=i=p=0;i++<252;x.fillRect(64+i*7,70+o,7,900),p=o)o=(S(i/9-t*7)+C(i/17-t*9))*i/9,x.fillStyle=`hsl(${i/23<<5},90%,${50+(o-p)*3}%`
// Larger margin on the left and right
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i/9-t*7)+C(i/17-t*9))*i/9,x.fillStyle=`hsl(${i/23<<5},90%,${50+(o-p)*3}%`
// Fewer color bands; slightly darker and heavier shading
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i/9-t*7)+C(i/19-t*9))*i/9,x.fillStyle=`hsl(${i/43<<6},90%,${45+(o-p)*4}%`
// Tweaked the colors so it looks less artificial (more real) on Mac, although the wavelength is still too low
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i/9-t*7)+C(i/19-t*9))*i/9,x.fillStyle=`hsl(${i/43<<6},70%,${55+(o-p)*4}%`
// --- MAYBE RELEASABLE --- 140 Similar but with less wobble
for(c.width+=i=p=0;i++<252;x.fillRect(70+i*7,70+o,7,900),p=o)o=(S(i/19-t*9)+C(i/41-t*7))*i/9,x.fillStyle=`hsl(${i/43<<6},70%,${55+(o-p)*4}%`
// --- MAYBE RELEASABLE --- Just one wave, with exponential wobble
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i**.5-t*7))*i**.6,x.fillStyle=`hsl(${i/43<<6},70%,${55+(o-p)*9}%`
// Drooping, and more extreme i**
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o+i/4,6,800),p=o)o=(S(i**.5-t*7))*i**.7,x.fillStyle=`hsl(${i/43<<6},70%,${55+(o-p)*9}%`
// Push flapping to the end only
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o+i/4,6,800),p=o)o=(S(i/19-t*7))*i**1.2/20,x.fillStyle=`hsl(${i/43<<6},70%,${55+(o-p)*9}%`
// But better with slowing wave progression
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o+i/4,6,800),p=o)o=(S(i**.5-t*7))*i**1.2/14,x.fillStyle=`hsl(${i/43<<6},70%,${50+(p-o)*5}%`
// But is it better linear?  Shave one char by grouping the shading coefficients (shading less flexible now): ${6*(9+p-o)}
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o+i/4,6,800),p=o)o=(S(i/30-t*7))*i**1.2/14,x.fillStyle=`hsl(${i/43<<6},70%,${50+(p-o)*5}%`
// --- I WANT THIS --- Greater whiptail (wave progression sppeds up) but does not fit
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o+i/4,6,800),p=o)o=(S(i**1.2/99-t*7))*i**1.4/29,x.fillStyle=`hsl(${i/43<<6},70%,${50+(p-o)*5}%`
// Back to linear amplitude increase
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o+i/4,6,800),p=o)o=(S(i**1.2/99-t*7))*i/6,x.fillStyle=`hsl(${i/43<<6},70%,${6*(9+p-o)}%`
// Faster wave progression
for(c.width+=i=p=0;i++<252;x.fillRect(204+i*6,70+o+i/4,6,800),p=o)o=(S(i**1.4/252-t*7))*i/4,x.fillStyle=`hsl(${i/43<<6},70%,${5*(9+p-o)}%`
// --- BEST SO FAR, COULD RELEASE --- Angle it upwards
for(c.width+=i=p=0;i++<252;x.fillRect(204+i*6,250+o-i/2,6,800),p=o)o=(S(i**1.4/450-t*7))*i/4,x.fillStyle=`hsl(${i/43<<6},70%,${6*(8+p-o)}%`
// Just experimenting with a larger exponent
for(c.width+=i=p=0;i++<252;x.fillRect(204+i*6,70+o+i/4,6,800),p=o)o=(S(i**1.5/452-t*7))*i/4,x.fillStyle=`hsl(${i/43<<6},70%,${6*(9+p-o)}%`
// Now we can extract k for 0 gain
//k=252;for(c.width+=i=p=0;i++<k;x.fillRect(k+i*6,70+o+i/4,6,800),p=o)o=(S(i**1.4/k-t*7))*i/4,x.fillStyle=`hsl(${i/43<<6},70%,${6*(9+p-o)}%`
// Again, only flap the end, but back to basic linear
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o+i/4,6,800),p=o)o=(S(i/19-t*7))*i/8,x.fillStyle=`hsl(${i/43<<6},70%,${55+(o-p)*9}%`
// Back to the double wobble
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o+i/4,6,800),p=o)o=(S(i/19-t*7)+C(i/41-t*9))*i/9,x.fillStyle=`hsl(${i/43<<6},70%,${55+(o-p)*9}%`
// --- RELEASABLE --- Remove the drooping.  Well that almost brought us back to the NOT BAD above
for(c.width+=i=p=0;i++<252;x.fillRect(99+i*6,99+o,6,800),p=o)o=(S(i/19-t*7)+C(i/41-t*9))*i/9,x.fillStyle=`hsl(${i/43<<6},70%,${55+(o-p)*7}%`

// We can stop using o-p for the grey shade, and just use o, as a poor approximation
// And use a more expensive wobble
c.width+=i=0;for(i=252;i--;x.fillRect(70+i*7,70+o,7,900))o=(S(i/19-t*7)+C(i/41-t*9))*i/9,x.fillStyle=`hsl(${i/43<<6},70%,${55+o/9}%`
// Or a really expensive wobble!  (o/9 is too faint on my laptop, so using o/4)
c.width+=i=0;for(i=252;i--;x.fillRect(70+i*7,70+o,7,900))o=(S(i**.7/4-t*11)+C(i**.4-t*7))*i**.6,x.fillStyle=`hsl(${i/43<<6},70%,${55+o/4}%`

// Adding back yokljo's random colors trick
for(c.width+=i=p=0;i++<252;x.fillRect(180+i*6,70+o,6,900),p=o)o=(S(i/9-t*7)+C(i/19-t*9))*i/9,x.fillStyle=`hsl(${~t*h^(i>>5<<5)},90%,${45+(o-p)*4}%`

// But actually the LGBT+ pride flag has horizontal stripes, not vertical!
c.width|=k=100;for(b=7;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i/11-t*7)+C(i/19-t*9))*i/9,x.fillStyle=`hsl(${b<<6},90%,${45+(o-p)*6}%`
c.width|=k=120;for(b=7;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i/17-t*11)+C(i/11-t*19))*i/9,x.fillStyle=`hsl(${b<<6},90%,${45+(o-p)*7}%`

// We haven't quite got the colors right; the pride flag doesn't have cyan, but it does have red-orange-yellow
// This is closer though: 23*b**1.6 or 21*b**1.7 18*b**1.8
// 17*t and 19*t are a bit too fast on Mac
c.width|=k=120;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i/11-t*7)+C(i/19-t*9))*i/9,x.fillStyle=`hsl(${21*b**1.7},90%,${45+(o-p)*6}%`
c.width|=k=120;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i/11-t*17)+C(i/23-t*19))*i/9,x.fillStyle=`hsl(${23*b**1.6},90%,${45+(o-p)*6}%`
c.width|=k=150;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i/11-t*13)+C(i/23-t*11))*i/9,x.fillStyle=`hsl(${21*b**1.7},90%,${45+(o-p)*6}%`
c.width|=k=150;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i/11-t*13)+C(i/23-t*11))*i/9,x.fillStyle=`hsl(${18*b**1.8},70%,${55+(o-p)*6}%`
// With some i**.5 we can make the waves accelerate as they move along the flag; not sure how realistic that is
c.width|=k=150;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i/23-t*13)+C(i**.4-t*11))*i**.6,x.fillStyle=`hsl(${18*b**1.8},70%,${55+(o-p)*9}%`
// --- OK --- Slower is still good.  In fact it's plenty fast on a Mac Book Pro!  Looks great on Linux.  i/9 is also fine
c.width|=k=150;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i**.7/4-t*11)+C(i**.4-t*7))*i**.6,x.fillStyle=`hsl(${18*b**1.8},70%,${55+(o-p)*9}%`
// With extra wobble at the end
c.width|=k=150;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(k+i*6,70+k*b+o,6,k),p=o)o=(S(i**.7/4-t*11)+C(i**.4-t*7))*i**1.2/19,x.fillStyle=`hsl(${18*b**1.8},70%,${55+(p-o)*9}%`
// --- GREAT THE BEST RELEASED on https://codegolf.tk/a/168 --- Exponents inside sin/cos, for faster wave progression (amplitude 0.7 is also nice for a wavy flag)
c.width|=k=130;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(320+i*5,260+k*b-i/2+o,5,k),p=o)o=(S(i**1.3/180-t*11)+C(i**1.4/600-t*8))*i**0.6,x.fillStyle=`hsl(${18*b**1.8},70%,${55+(p-o)*9}%`
// Just for comparison, the same as above but without exponentials:
c.width|=k=130;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(320+i*5,230+k*b-i/2+o,5,k),p=o)o=(S(i**1.3/180-t*11)+C(i**1.0/400-t*8))*i**1/8,x.fillStyle=`hsl(${18*b**1.8},70%,${55+(p-o)*9}%`
// We can stop using o-p for the grey shade, and just use o, as a poor approximation
c.width|=k=150;for(b=6;b--;)for(i=252;i--;x.fillRect(k+i*6,70+k*b+o,6,k))o=(S(i**.7/4-t*11)+C(i**.4-t*7))*i**.6,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o/2}%`
// --- GOOD --- Back to i/9 A bit dark sometimes
c.width|=k=150;for(b=6;b--;)for(i=252;i--;x.fillRect(k+i*6,70+k*b+o,6,k))o=(S(i**.7/4-t*11)+C(i**.4-t*7))*i/9,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o/2}%`
// And use a cheaper wobble
c.width|=k=150;for(b=6;b--;)for(i=252;i--;x.fillRect(k+i*6,70+k*b+o,6,k))o=(S(i/19-t*7)+C(i/41-t*9))*i/9,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o/2}%`
// 144 --- GOOD --- Trying to golf it down (the flag got smaller here too)
c.width|=k=99;for(b=6;b--;)for(i=k;i--;x.fillRect(k+i*9,k+k*b+o/9,9,k))o=S(i/9-t*7)*i+C(i/7-t*9)*i,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o/9}%`
// There are optimisations you forgot to apply.  For example, the loop through b could be combined into the other loop
// Well that didn't work so well!
c.width|=k=99;for(j=k*6;j--;x.fillRect(k+i*9,k+k*b+o/9,9,k))i=j/6|0,b=j%6,o=S(i/9-t*7)*i+C(i/7-t*9)*i,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o/9}%`
// 145 Apparently we don't need the |0.  BUG: We do need the |0 on Linux!
c.width|=k=99;for(j=k*6;j--;x.fillRect(k+i*9,k+k*b+o/9,9,k))i=j/6,b=j%6,o=S(i/9-t*7)*i+C(i/7-t*9)*i,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o/9}%`
// Moving b's assignment didn't help.  BUG: We do need the |0 on Linux!
c.width|=k=99;for(j=k*6;j--;x.fillRect(k+i*9,k+b*k+o/9,9,k))i=j/6,o=S(i/9-t*7)*i+C(i/7-t*9)*i,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,${55+o/9}%`
// 140 but rainbow. Swap the row/column iteration, inline b, make some sacrifices
c.width|=k=99;for(j=k*6;j--;x.fillRect(k+i*9,k+k*j/k+o/9,9,k))i=j%k,o=S(i/9-t*7)*i+C(i/7-t*9)*i,x.fillStyle=`hsl(${j**1.8/k},70%,${55+o/9}%`

// Branching back off the good 144 again
// Remove the left margin (the top one is still needed)
// 140 --- RELEASABLE --- Extract the o/9
c.width|=k=99;for(b=6;b--;)for(i=k;i--;x.fillRect(i*9,k+k*b+o,9,k))o=(S(i/9-t*7)+C(i/7-t*9))*i/9,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o}%`
// Stronger wobble, but colors too strong
c.width|=k=99;for(b=6;b--;)for(i=k;i--;x.fillRect(i*9,k+k*b+o,9,k))o=(S(i/9-t*7)+C(i/7-t*9))*i/8,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o}%`
// Tweaked coefficients
c.width|=k=99;for(b=6;b--;)for(i=k;i--;x.fillRect(i*9,k+k*b+o,9,k))o=(S(i/5-t*9)+C(i/7-t*7))*i/8,x.fillStyle=`hsl(${18*b**1.8},70%,${55+o}%`

// We can take GREAT THE BEST and remove the shading, but that still doesn't get us down to 140
c.width|=k=150;for(b=6;b--;)for(i=252;i--;x.fillRect(k+i*6,70+k*b+o,6,k))o=(S(i**.7/4-t*11)+C(i**.4-t*7))*i**.6,x.fillStyle=`hsl(${18*b**1.8},70%,55%`
// Back to i/9
c.width|=k=150;for(b=6;b--;)for(i=252;i--;x.fillRect(k+i*6,70+k*b+o,6,k))o=(S(i**.7/4-t*11)+C(i**.4-t*7))*i/9,x.fillStyle=`hsl(${18*b**1.8},70%,55%`
// And without shading, we can inline o
c.width|=k=150;for(b=6;b--;)for(i=252;i--;x.fillRect(k+i*6,70+k*b+(S(i**.7/4-t*11)+C(i**.4-t*7))*i/9,6,k))x.fillStyle=`hsl(${18*b**1.8},70%,55%`

// Fork "Moving b's assignment", remove shading, and inline things
c.width|=k=99;for(j=k*6;j--;x.fillRect(k+i*9,k+b*k+(S(i/9-t*7)+C(i/7-t*9))*i/9,9,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,${55}%`
// Tweaked coefficients
c.width|=k=99;for(j=k*6;j--;x.fillRect(k+i*9,k+b*k+(S(i/9-t*7)+C(i/7-t*9))*i/5,9,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,${55}%`
// Larger flag
c.width|=k=128;for(j=k*6;j--;x.fillRect(k+i*9,k+b*k+(S(i/9-t*7)+C(i/7-t*9))*i/5,9,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,${55}%`
// Add droop; also tweak colors for a lighter orange
c.width|=k=120;for(j=k*6;j--;x.fillRect(k+i*9,k+b*k+i+(S(i/9-t*7)+C(i/7-t*9))*i/5,9,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,55%`
// Lighter orange but greener yellow yuck: ${21*(b=j%6)**1.7}
// --- OK --- Larger, leaning up, single wave with exponent
c.width|=k=140;for(j=k*6;j--;x.fillRect(k+i*12,230+b*k-i+(S(i**1.4/200-t*7))*i/3,12,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,55%`
// Exponent amplitude, so the flag experiences significant pull from the start
c.width|=k=140;for(j=k*6;j--;x.fillRect(k+i*12,230+b*k-i+(S(i**1.3/k-t*7))*i**.7*2,12,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,55%`
// --- GOOD ---Smaller, cuter, but swing exponent a little stale again
c.width|=k=150;for(j=k*6;j--;x.fillRect(300+i*9,180+b*k-i+(S(i**1.3/k-t*7))*i**.7,9,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,55%`
// --- RELEASED as https://www.dwitter.net/d/3153 --- Spend the last pixel on making the flag just a little bit more wavy
c.width|=k=150;for(j=k*6;j--;x.fillRect(300+i*9,180+b*k-i+(S(i**1.33/k-t*7))*i**.7,9,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,55%`
// Similar, but derived from earlier version, more wavy and without the amplitude exponent
c.width|=k=140;for(j=k*6;j--;x.fillRect(320+i*9,230+b*k-i+(S(i**1.4/200-t*7))*i/3,9,k))i=j/6|0,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,55%`
// 144, 142 Taking the release above, and trying to reintroduce the double wobble
c.width|=k=150;for(j=k*8;j--;x.fillRect(300+i*9,180+b*k-i+(S(i/14-t*9)+C(i/18-t*7))*i/5,9,k))i=j>>3,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,55%`
c.width|=k=130;for(j=k*8;j--;x.fillRect(k+i*9,++b*k+k-i+(S(i/14-t*9)+C(i/18-t*7))*i/5,9,k))i=j>>3,x.fillStyle=`hsl(${18*(b=j%6)**1.8},70%,55%`

// 161 Greyscale shaded
c.width|=k=130;for(i=p=0;i++<252;x.fillRect(320+i*5,260-i/2+o,5,700),p=o)o=(S(i**1.3/180-t*11)+C(i**1.4/600-t*8)/1)*i**0.6,x.fillStyle=`hsl(0,0%,${45+(p-o)*15}%`
// --- RELEASED --- https://www.dwitter.net/d/3161
c.width|=0;for(i=p=0;i++<252;x.fillRect(370+i*5,70+i/2+o,5,700),p=o)o=(S(i**1.3/180-t*11)+C(i**1.4/600-t*8))*i**.6,x.globalAlpha=.5+(o-p)/9
// Red flag (142)
c.width|=0;for(i=p=0;i++<252;x.fillRect(370+i*5,70+i/2+o,5,700),p=o)o=(S(i**1.3/180-t*11)+C(i**1.4/600-t*8))*i**.6,x.fillStyle=R(195+(o-p)*30)
// 20180717: Balint used derivatives for the lighting, saving two chars (mainly because it could avoid initialising p, and reverse the loop)
c.width|=0;for(i=252;i--;x.fillRect(370+i*5,70+i/2+(S(R=i**1.3/180-t*11)+C(T=i**1.4/600-t*8))*i**.6,5,700))x.globalAlpha=.5+(C(R)-S(T))/9

// Splitting away from the first "rainbow flag" and using exponentials for realism
h=800;c.width*=1;for(i=64;i--;x.fillRect(h+i*6,y=200+o,6,i>2?y:h),p=o)o=S(t*2-i**1.5/69)*i**.4*2,x.fillStyle=`hsl(${i>>3<<5},90%,${i>2?50+(o-p)*7:0}%`
h=800;c.width*=1;for(i=64;i--;x.fillRect(h+i*6,y=200+o-i/2,6,i>2?200:h),p=o)o=S(t*2-i**1.5/69)*i**.4*2,x.fillStyle=`hsl(${i>>3<<5},90%,${i>2?50+(o-p)*7:0}%`

// Take the release rainbow flag and add some horizontal wobble
c.width|=k=130;for(b=6;b--;)for(i=p=0;i++<252;x.fillRect(320+i*5-i/9*C(b/5+8*t),230+k*b-i/2+o,9,k),p=o)o=(S(i**1.3/180-t*11)+C(i**1.4/600-t*8))*i**0.6,x.fillStyle=`hsl(${18*b**1.8},70%,${55+(p-o)*9}%`

// aemkei's JS dots flag: https://www.dwitter.net/d/2023

// James W. Cadle's Flag of Earth, with help from mycurvefit.com #flag
X=[700,0,-1400,0],Y=[300,0,0,0],R=[150,480,1200,1100],C=['#fff','#39f','#ff0','#000']
for(i=4;i--;)x.beginPath(),x.arc(960+X[i],540+Y[i],R[i],0,7),x.fillStyle=C[i],x.fill()
// 153, with thanks to https://mycurvefit.com/
X=[700,0,-1400,0],C=['#fff','#39f','#ff0','#000']
for(i=4;i--;)x.beginPath(),x.arc(960+X[i],540+(i||300),150+135*i+200*i*i,0,7),x.fillStyle=C[i],x.fill()
// 146
C=['#fff','#39f','#ff0','#000']
for(i=4;i--;)x.beginPath(),x.arc(i%2?960:1660-1050*i,540+(i||300),150+135*i+200*i*i,0,7),x.fillStyle=C[i],x.fill()
// 150
['#000','#ff0','#39f','#fff'].map((C,i)=>{x.beginPath(),x.arc(i%2?1050*i-1490:960,i<3?540:840,150+135*(3-i)+200*(3-i)**2,0,7),x.fillStyle=C,x.fill()})
// 143
['#000','#ff0','#39f','#fff'].map((C,i)=>{x.beginPath(),x.arc(i%2?1050*i-1490:960,i<3?540:840,2310-1305*i+195*i*i,0,7),x.fillStyle=C,x.fill()})
// --- RELEASED --- https://www.dwitter.net/d/9116
['#000','#ff0','#39f','#fff'].map((C,i)=>x.beginPath(x.fillStyle=C)|x.arc(i%2?1050*i-1490:960,i<3?540:840,2310-1305*i+195*i*i,0,7)|x.fill())

// f8f82804_s Pride flag: https://www.dwitter.net/d/9188 clever but too strong
c.width=500;a=29;for(i=240;α=C(T=i/a-t),i--;)for(j=6;j--;x.fillRect(i,a+j*a+S(T)*7,1,30))x.fillStyle=`hsl(${a*j**1.4} 99%${9+a*(0<α)*α**2}%`
// An improvement
c.width=500;a=29;for(i=240;α=C(T=(i/a)**.8-t*6),i--;)for(j=6;j--;x.fillRect(i,a+j*a+S(T)*i/a,1,30))x.fillStyle=`hsl(${a*j**1.4} 99%${a+a*(0<α)*α**2}%`
// My remix
c.width=400;a=29;for(i=240;α=C(T=i**.4-t),i--;)for(j=6;j--;x.fillRect(i,i/9+j*a+S(T)*i/a,1,30))x.fillStyle=`hsl(${a*j**1.4} 90%${40-9*S(T)}%`
c.width=400;a=29;for(i=250;α=C(T=i**.4-t),i--;)for(j=6;j--;x.fillRect(i,i/9+j*a+k/3,1,30))x.fillStyle=`hsl(${a*j**1.4} 90%${k=40+S(T)*i/9}%`
c.width=400;a=29;for(i=250;α=C(T=i**.4-t*3),i--;)for(j=6;j--;x.fillRect(i,a+j*a-k/3,1,30))x.fillStyle=`hsl(${a*j**1.4} 90%${k=42+S(T)*i/9}%`
c.width=400;a=29;for(i=240;α=C(T=i**.4-t*6),i--;)for(j=6;j--;x.fillRect(i,60+j*a-k,1,30))x.fillStyle=`hsl(${a*j**1.4} 80%${k=40+S(T)*i/20}%`
c.width=400;a=29;for(i=240;α=C(T=i**.4-t*6),i--;)for(j=6;j--;x.fillRect(i,65+j*a-k,1,30))x.fillStyle=`hsl(${a*j**1.4} 90%${k=45+S(T)*i/20}%`
// Change 20 for 18, and t*6 for t*7
// --- RELEASE THIS --- #pride #flag a combination of d/9188 and d/3153 (no phong, soft shadows)
c.width=400;a=29;for(i=240;α=C(T=i**.4-t*7),i--;)for(j=6;j--;x.fillRect(i,65+j*a-k,1,30))x.fillStyle=`hsl(${a*j**1.4} 90%${k=45+S(T)*i/18}%`
// === RELEASE THIS === Or is this better? (without a)
c.width=400;for(i=240;α=C(T=i**.5/2-t*7),i--;)for(j=6;j--;x.fillRect(i,65+j*29-k,1,30))x.fillStyle=`hsl(${29*j**1.4} 90%${k=45+S(T)*i/18}%`
// A much brighter version (a is back)
c.width=400;a=29;for(i=240;α=C(T=i**.4-t*6),i--;)for(j=6;j--;x.fillRect(i,50+j*a-k/2,1,30))x.fillStyle=`hsl(${a*j**1.4} 90%${k=55+S(T)*i/9}%`
// Slightly improved the **.4 situation by making everything smaller (141)
c.width=200;a=15;for(i=120;α=C(T=i**.4-t*7),i--;)for(j=6;j--;x.fillRect(i,j*a+k/3-5,1,16))x.fillStyle=`hsl(${29*j**1.4} 80%${k=45+S(T)*i/5}%`
// Wait a minute, we don't need a anymore!
c.width=200;for(i=120;α=C(T=i**.4-t*7),i--;)for(j=6;j--;x.fillRect(i,j*15+k/2-11,1,16))x.fillStyle=`hsl(${29*j**1.4} 80%${k=45+S(T)*i/8}%`

// 2020 adapted using NewCore's rect width approach (looks bad until you go fullscreen)
c.width|=0;for(j=702;j-=9;)for(i=p=0;i++<252;p=o)o=(S(i**1.3/180-t*11+j/150)+C(i**1.4/600-t*8))*i**.6,w=4+o-p,x.fillRect(370+i*5,70+j+i/2+o,w,w)
