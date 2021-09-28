// cantelope/joeytwiddle's stochastic sphere: https://www.dwitter.net/d/3524
for(R=Math.random,w=960,i=w*4,x.globalAlpha=.02;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3

// Fast-start on the stochastic sphere
for(R=Math.random,w=960,i=3e3,x.globalAlpha=1/(9+t/9);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
// Shade about right, but comes out very grainy + ugly
for(R=Math.random,i=w=960,x.globalAlpha=1/(9+t/20);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
for(R=Math.random,i=w=960,x.globalAlpha=1/(9+t/9);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
for(R=Math.random,w=960,i=3e3,x.globalAlpha=1/(9+t/2);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
// Reduce the alpha but increase the number of dots
for(R=Math.random,w=960,i=8e3,x.globalAlpha=1/(40+t);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
// Smoother.  But looks a bit wrong somehow.  Middle and edges are too similar, a bit greywashed.
for(R=Math.random,w=960,i=2e4,x.globalAlpha=1/(80+t);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.3
// Increase center/edge contrast
for(R=Math.random,w=960,i=4e3,x.globalAlpha=1/(25+2*t);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.2
for(R=Math.random,w=960,i=6e3,x.globalAlpha=1/(40+t);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.2
// Grainy not so bad mah
for(R=Math.random,w=960,i=1e3,x.globalAlpha=1/(4+t);i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,1,1))Z=5/9*R()**.2
// Remove globalAlpha
// --- Old release candidate --- A nice kind of grainy, and fast!
// "Stochastic sphere.  Re-release because previous version was too slow"
for(R=Math.random,w=960,i=8e3;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,k=1/(5+t),k))Z=5/9*R()**.2
// Compromise
for(R=Math.random,w=960,i=6e3;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,k=1/(5+t),k))Z=5/9*R()**.2
// Alternative: a lot faster on slow machine (4e3 also can)
for(R=Math.random,w=960,i=5e3;i--;x.fillRect(w+S(p=w*R())*Z*w,540+C(p)*Z*w,k=1/(2+t),k))Z=5/9*R()**.2
// Golfed a bit more --- RELEASED ---
for(R=Math.random,w=520,i=4e3;i--;x.fillRect(960+S(a=w*R())*Z*w,540+C(a)*Z*w,k=1/(2+t),k))Z=R()**.2
// Also nice, but still a bit too slow on slow hardware (it does get dark after a really long run, but that's ok i think)
for(R=Math.random,w=520,i=6e3;i--;x.fillRect(960+S(a=w*R())*Z*w,540+C(a)*Z*w,k=1/(5+t),k))Z=R()**.2
// A lighter version, for your reference
for(R=Math.random,w=520,i=3e3;i--;x.fillRect(960+S(a=w*R())*Z*w,540+C(a)*Z*w,k=1/(9+t),k))Z=R()**.2
// Trying to make it longer lasting, for more greys.
// Gets way too dark in the end
for(R=Math.random,w=520,i=4e3;i--;x.fillRect(960+S(a=w*R())*Z*w,540+C(a)*Z*w,k=2/(9+t),k))Z=R()**.2
// But curiously is still feels very black+white!
for(R=Math.random,w=520,i=4e3;i--;x.fillRect(960+S(a=w*R())*Z*w,540+C(a)*Z*w,k=5/(35+t),k))Z=R()**.2
// OK this one is nice.  Although if you leave it running long enough, it gets a bit too dark.
for(R=Math.random,w=520,i=4e3;i--;x.fillRect(960+S(a=w*R())*Z*w,540+C(a)*Z*w,k=1/(9+t**.5),k))Z=R()**.25

// Trying to make a cube
for(R=Math.random,w=960,i=5e3,x.globalAlpha=.1;i--;x.fillRect(X=180+R()*.7*w,450-X/2+R()*(w/2+X*.6),1,1))Z=5/9*R()**.3
// This is good enough for a dweet, but I think we can go further
for(R=Math.random,w=960,i=5e3,x.globalAlpha=.2;i--;X=180+R()*.81*w,x.fillRect(w+s*(w-X),450-X/2+R()*(w/2+X*.6),1,1))s=R()<.3?.7:-.5

// We don't have to use globalAlpha.  We can just plot sub-pixel size squares!
// Concern: On Mac I used .04, but on my Linux .1 was too damn slow, so I went for .2
// Does the behaviour vary wildly between OS?
for(R=Math.random,w=960,i=5e3;i--;X=180+R()*.81*w,x.fillRect(w+s*(w-X),450-X/2+R()*(w/2+X*.6),.2,.2))s=R()<.3?.7:-.5
w=960,r=Math.random;for(i=5e3;i--;X=180+r()*.81*w,x.fillRect(w+s*(w-X),450-X/2+r()*(w/2+X*.6),.2,.2))s=r()<.3?.7:-.5
w=960,r=Math.random;s=r()<.3?.7:-.5;X=180+r()*.81*w,x.fillRect(w+s*(w-X),450-X/2+r()*(w/2+X*.6),.2,.2);t<5e3&&u(t+1)

// Add a random cylinder
w=960,r=Math.random;c=r()<.3,s=r()<.3?.7:-.5;X=180+r()*.81*w,x.fillRect(c?250+200*S(t):w+s*(w-X),450-X/2+r()*(w/2+X*.6),.2,.2);t<5e3&&u(t+1)

// Different angle, less weird
w=960,r=Math.random;c=r()<.3,s=r()<.3?.7:-.5;X=180+r()*.81*w,x.fillRect(c?250+200*S(t):w+s*(w-X),350-X/3+r()*(w/2+X/2),.2,.2);t<5e3&&u(t+1)

// Cone instead of cylinder?
w=1e3,r=Math.random;c=r()<.1,s=r()<.3?.7:-.5;X=80+r()*.92*w,Y=350-X/3+r()*(w/2+X/2),x.fillRect(c?250+S(t)*Y/5:w+s*(w-X),Y,.2,.2);t<w&&u(t+1)
w=1e3,r=Math.random;c=r()<.2,s=r()<.3?.7:-.5;X=r()*w,Y=350-X/3+r()*(w/2+X/2),x.fillRect(c?99+S(X)*Y/3:w+s*(w-X),Y,.2,.2);t<w&&u(t+1)
// Cube left, cone right
w=1e3,r=Math.random;c=r()<.2,s=r()<.3?.7:-.5;X=r()*w,Y=350-X/3+r()*(w/2+X/2),x.fillRect(c?1600+S(X)*Y/3:520+s*(w-X),Y,.2,.2);t<w&&u(t+1)
// --- BEST SO FAR WITH CONE ---
w=1e3,r=Math.random;s=r()<.3?.7:-.5;X=r()*w,Y=350-X/3+r()*(w/2+X/2),x.fillRect(r()<.3?1600+S(X)*Y/3:520+s*(w-X),Y,.2,.2);t<w&&u(t+1)
// Rounding the bottom of the cone, but wrong
w=1e3,r=Math.random;c=r()<.2,s=r()<.3?.7:-.5;X=r()*w,Y=350-X/3+r()*(w/2+X/2),x.fillRect(c?99+S(X)*Y/3:w+s*(w-X),Y+c*99*C(X),.2,.2);t<w&&u(t+1)
// Same
w=1e3,r=Math.random;s=r()<.3?.7:-.5;X=r()*w,Y=350-X/3+r()*(w/2+X/2),x.fillRect((c=r()<.3)?1600+S(X)*Y/3:520+(W=s*(w-X)),Y+c*W/8*C(X),.7,.7);t<w&&u(t+1)
// Random ribbon
// --- CONSIDER --- Stick on .4 for slow machines and this is pretty amazing man
w=1e3,r=Math.random;c=r()<.2,s=r()<.3?.7:-.5;X=r()*w,Y=350-X/3+r()*(w/2+X/2),x.fillRect(c?1600+S(X/Y)*Y/3:520+s*(w-X),Y,.2,.2);t<w&&u(t+1)

// Bad and broken
w=1e3,r=Math.random;s=r()<.3;X=r()*w,Y=350+(r()*(w/2+X/2)-X/3)*(s?.7:1),x.fillRect(r()<.3?1600+S(X)*Y/3:520+(s?.5:-.4)*(w-X),Y,.6,.6);t<w&&u(t+1)

// Cone with its head chopped off
w=1e3,r=Math.random;s=r()<.3?.7:-.5;X=r()*w,Y=350-X/3+r()*(w/2+X/2),R=520+s*(w-X),x.fillRect(R>1080?1600+S(X)*Y/3:R,Y,.2,.2);t<w&&u(t+1)

// Same size: k=.04,k
// I don't think the uneven distribution looks correct
// Therefore we should choose a random point on the canvas, work out which face it sits in, and then decide whether or not to plot it
// If possible, render a plane, and multiple cubes, maybe a cylinder... xD
// If a cube is really huge, it's vertical edges won't be vertical in the image
// Use 1/t for alpha, to draw quickly and then stop drawing
// Use .2/t**.1 for a quick start and a slow continuation
// Or .3/(t+1)**.1
// But actually .2 is good enough, so no real need to muck about
// Tiffany wants shadow!

// Just trying to make the original a bit smaller
w=960,r=Math.random;for(i=5e3;i--;D=X-w,d=D>0?D:-D,T=100+d/2,h=w-d/4-T,x.fillRect(X,T+r()*h,.4,.4))X=w/2+r()*w
w=960,r=Math.random;for(i=5e3;i--;d=D>0?D:-D,T=100+d/2,h=w-d/4-T,x.fillRect(w+D,T+r()*h,.2,.2))D=(r()<.3?-.7:1)*w/2*r()

// Filthy: Instead of a for loop, we can call u() at the end.  It will reach maximum call stack, and then do the next frame xD
w=960,r=Math.random;D=X-w,d=D>0?D:-D,T=100+d/2,h=w-d/4-T,x.fillRect(X,T+r()*h,1,1)X=w/2+w*r()**.5;u()
// Could we do it cleaner? t<20&&u(t+1)

// Use .2 for release, but .5 is good for testing
// Actually use .1,.2, and maybe use t<w&&u(t+.5) to end lighter
// Mmm no, more like t<w/4 for 3.75 minutes and t+.2
// Note that this works: t<w/4&&u(t+.03) but +.02 causes a "Maximum call stacke exceeded" error

w=960,r=Math.random;for(i=5e3;i--;d=D>0?D:-D,T=100+d/2,h=w-d/4-T,x.fillRect(w+D,T+r()*h,.5,.5))D=(r()<.3?-.7:1)*w/2*r()
w=960,r=Math.random;for(i=5e3;i--;d=D>0?D:-D,T=100+d/2,h=w-d/4-T,x.fillRect(w+D,T+r()*h,.5,.5))r()<.3?F=-.7:F=1,D=F*w/2*r()
w=960,r=Math.random;for(i=5e3;i--;T=100+D*k,h=w-D*k/4-T,x.fillRect(w+D,T+r()*h,.5,.5))r()<.3?(F=-.6,k=-1.1):(F=1,k=.5),d=r(),D=F*w/2*d
w=960,r=Math.random;for(i=5e3;i--;T=100+D*k,h=w-D*k/4-T,x.fillRect(w+D,T+r()*h,.5,.5))s=r(),F=s<.3?-.6:1,k=s<.3?-1.1:.5,d=r(),D=F*w/2*d
w=960,r=Math.random;for(i=5e3;i--;T=100+D*k,h=w-D*k/4-T,x.fillRect(w+D,T+r()*h,.5,.5))s=r()<.6,F=s?-.6:1,k=s?-1.1:.5,d=r(),D=F*w/2*d
// Make it larger, tweak the position
w=960,r=Math.random;for(i=5e3;i--;T=9+D*k,h=w-D*k/4-T,x.fillRect(w+D,T+r()*h,.5,.5))s=r()<.6,F=s?-.7:1.2,k=s?-1.1:.5,d=r(),D=F*w/2*d
w=1e3,r=Math.random;for(i=5e3;i--;T=9+D*k,h=1e3-D*k/4-T,x.fillRect(w+D,T+r()*h,.5,.5))s=r()<.6,F=s?.7:-1.2,k=s?1.3:-.5,d=r(),D=F*w/2*d
w=1e3,r=Math.random;for(i=5e3;i--;T=9+D*k,h=w-D*k/4-T,x.fillRect(500+D,T+r()*h,.5,.5))s=r()<.6,F=s?-.7:1.2,k=s?-1.1:.5,d=r(),D=F*w/2*d
w=1e3,r=Math.random;for(i=5e3;i--;T=9+D*k,h=w-D*k/4-T,x.fillRect(500+D,T+r()*h,.5,.5))s=r()<.6,F=s?-.8:1.2,k=s?-1:.4,d=r(),D=F*w/2*d
w=1e3,r=Math.random;for(i=5e3;i--;T=9+D*k,h=w-D*k/4-T,x.fillRect(700+D,T+r()*h,.5,.5))s=r()<.6,F=s?-.7:1.3,k=s?-1:.3,d=r(),D=F*w/2*d

// Let's try to golf it
// Inline h
w=1e3,r=Math.random;for(i=5e3;i--;T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.5,.5))s=r()<.6,F=s?-.7:1.3,k=s?-1:.3,d=r(),D=F*w/2*d
// Inline F
w=1e3,r=Math.random;for(i=5e3;i--;T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.5,.5))s=r()<.6,k=s?-1:.3,d=r(),D=(s?-.7:1.3)*w/2*d

// Looping with u().
// It doesn't save any chars, but it is good for incremental drawings which you want to slow and (almost) animating after some time.
// Curiously it looks good with .2 or with .5, so no need to change t+1 to t+d
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.3,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.5,.5),t<5e3&&u(t+1)

// Larger face
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.4)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.1,.2),t<5e3&&u(t+2)
// First favourite, but pretty slow
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.1,.1),t<w/4&&u(t+.1)
// Very fine (beautiful, but maybe too smooth)
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.01,.01),t<w/4&&u(t+.03)
// Quite fine version
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.02,.02),t<w/4&&u(t+.05)

// Fast-start
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(1+t**.5),l),t<w/4&&u(t+.1)
// Fast-start that doesn't take ages on slower hardware
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(1+t**.6/9),l),t<w/4&&u(t+.1)
// Drops to quarter strength after 30 seconds, but still becomes too dark
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(1+t/30),l),t<w/4&&u(t+.1)
// But perhaps this is better.  A bit lighter.  Check the end result on high performance machine.  Compare to previous.
// I considered releasing this.  But the for loop is faster and less grainy.
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=.6/(1+t/90),l),t<w/4&&u(t+.1)
// This gets just about right.  But it is a bit grainy, and maybe a little darker than we needed.
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(1+t/9),l),t<w/4&&u(t+.1)
// Looks great on Mac, but is it fast enough?  It does start out pretty faint.  I think it's ok though.
// NO!  Everything after this is too slow on laptop.
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=.3/(1+t/20),l),t<w/3&&u(t+.1)
// Gets quite dark
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(3+t/9),l),t<w/3&&u(t+.1)
// Nice, on the light side.
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(4+t/3),l),t<w/3&&u(t+.1)
// Just about right.
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(4+t/4),l),t<w/3&&u(t+.1)
// Similar, a touch lighter, smaller
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(3+t/4),l),t<w&&u(t+.2)
// Well on my laptop this is far too slow :-/
// Perhaps the number format is different so they keep getting rounded down?!
// Will it do TCO with an if() ?

// OK then, going back to slow machines
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(2+t/99),l),t<w&&u(t+1)
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(1+t/99),l),t<w&&u(t+1)
// Far too dark too soon
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(1+t/w),l),t<w&&u(t+1)
// Too dark
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(1+t/20),l),t<w&&u(t+.2)
// Just about fast enough.  Nice, grainy, dark and light balance (try 7 for darker, 5 for lighter)
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(1+t/6),l),t<w&&u(t+.2)
// Avoid bittiness in the final output.  How does this look on laptop?  A bit bloody slow!
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(2+t/7),l),t<w&&u(t+.2)
// This is faster
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=2/(3+t/7),l),t<w&&u(t+.2)
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),l=2/(3+t/7),l),t<w&&u(t+.2)
// Use a bloody for loop, it works much better, and it only costs 1 char more!
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=2/(9+t/2),l))s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(5+t/5),l))s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k
// A bit faster and more grainy, why not?
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(3+t/2),l))s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k
// Huh?  There is golfing still available.  We don't need d!
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(3+t/3),l))s=r()<.6,k=s?-1:.4,D=(s?-.7:1.3)*w/2*r(),T=9+D*k
// More golfing available.  But too grainy and too dark.
// --- Earlier release candidate --- Good on slow laptop
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(3+t/2),l))s=r()<.6,k=s?-1:.4,D=(s?-350:650)*r(),T=9+D*k
// Ends up way too dark
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(5+t/2),l))s=r()<.6,k=s?-1:.4,D=(s?-350:650)*r(),T=9+D*k
// Meh.  Too bitty.
w=1e3,r=Math.random;for(i=3e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(3+t),l))s=r()<.6,k=s?-1:.4,D=(s?-350:650)*r(),T=9+D*k
// --- RELEASED --- Lighter with a smaller loop.  Grainy in a kind of nice way.
w=1e3,r=Math.random;for(i=4e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(4+t),l))s=r()<.6,k=s?-1:.4,D=(s?-350:650)*r(),T=9+D*k
// Go up to 5e3 if you can.  4e3 takes a bit too long to establish
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D,T+r()*(w-D*k/4-T),l=1/(4+t),l))s=r()<.6,k=s?-1:.4,D=(s?-350:650)*r(),T=9+D*k

// Just putting H into a variable, for use in future experimentation
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D,T+r()*H,l=1/(5+t),l))s=r()<.6,k=s?-1:.4,D=(s?-350:650)*r(),T=9+D*k,H=w-D*k/4-T

// All a plane, ungolfed, just to see how it looks
w=1e3,r=Math.random;for(i=4e3;i--;x.fillRect(p?1920*r():700+D,p?730+500*r()**2:T+r()*(w-D*k/4-T),1,1))p=r()<.2,s=r()<.6,k=s?-1:.4,D=(s?-350:650)*r(),T=9+D*k

// Add the cone
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.7:1.3)*w/2*d,T=9+D*k,Y=T+r()*(w-D*k/4-T),x.fillRect(r()<.2?99+S(D)*Y/3:w+D,Y,.2,.2),t<w&&u(t+1)
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,D=(s?-.7:1.3)*w/2*r(),T=9+D*k,Y=T+r()*(w-D*k/4-T),x.fillRect(r()<.2?99+S(D)*Y/3:w+D,Y,.2,.2),t<w&&u(t+1)

// Bring back the cone 2?
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(700+D*X,c?1600+S(X/Y)*Y/3:Y,l=1/(3+t/2),l))c=r()<.3,s=r()<.6,k=s?-1:.4,X=r()*w,D=s?-.3:.6,T=9+D*X*k,Y=T+r()*(w-D*X*k/4-T)
w=1e3,r=Math.random;for(i=5e3;i--;x.fillRect(c?1500+S(5*X/Y)*Y/3:500+D*X,Y,l=1/(3+t/2),l))c=r()<.3,s=r()<.6,k=s?-1:.4,X=r()*w,D=s?-.4:.6,T=9+D*X*k,Y=T+r()*(w-D*X*k/4-T)

// Shave 3 off, but looks a bit misshapen
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.3,d=r(),D=(s?-.4:.7)*w*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.5,.5),t<5e3&&u(t+1)
// Angle not too bad
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.4,d=r(),D=(s?-.4:.6)*w*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.5,.5),t<5e3&&u(t+1)
// Just a slightly different angle.  Still looks bad.
w=1e3,r=Math.random,s=r()<.6,k=s?-1:.15,d=r(),D=(s?-.4:.7)*w*d,T=9+D*k,x.fillRect(700+D,T+r()*(w-D*k/4-T),.5,.5),t<5e3&&u(t+1)

// We could forget the 5e3.  It is only seems to make it about 2x faster on my laptop.

// Sphere and cone
for(r=Math.random,w=320,i=4e3;i--;x.fillRect(c?500+a*C(p):4*w+S(a)*Z*w,c?3*a+a/3*S(p):720+C(a)*Z*w,k=1/(2+t),k))Z=r()**.2,a=w*r(),c=r()<.5,p=3*r()
// "Positioning"
for(r=Math.random,w=270,i=4e3;i--;x.fillRect(c?5*w+a*C(p):2*w+S(a)*Z*w,c?3*a+a/3*S(p):720+C(a)*Z*w,k=1/(2+t),k))Z=r()**.3,a=w*r(),c=r()<.5,p=3*r()
//
for(r=Math.random,w=320,i=4e3;i--;x.fillRect(c?500+a*C(p):4*w+S(a)*Z*w,c?a*(7+S(p))/3:500+C(a)*Z*w,k=1/(2+t),k))Z=r()**.2,a=w*r(),c=r()<.5,p=3*r()
for(r=Math.random,w=320,i=4e3;i--;x.fillRect(c?500+a*C(p):4*w+S(a)*Z*w,c?3*a+a/3*S(p):720+C(a)*Z*w,k=1/(2+t),k))Z=r()**.2,a=w*r(),c=r()<.5,p=3*r()
for(r=Math.random,w=270,i=4e3;i--;x.fillRect(c?5*w+a*C(p):2*w+S(p)*Z*w,c?3*a+a/3*S(p):720+C(p)*Z*w,k=1/(2+t),k))Z=r()**.4,a=w*Z,p=w*r(),c=i<p
// Funny pattern on the sphere
r=Math.random,w=270,Z=r()**.4,a=w*Z,p=3*r(),c=t&1,x.fillRect(c?5*w+a*C(p):2*w+S(t)*Z*w,c?3*a+a/3*S(p):720+C(t)*Z*w,k=9/(9+t),k);t<w&&u(t+.1)
// OK but we can see the back of the cone
r=Math.random,w=270,Z=r()**.4,a=w*Z,p=w*r(),c=t&1,x.fillRect(c?5*w+a*C(p):2*w+S(p)*Z*w,c?3*a+a/3*S(p):720+C(p)*Z*w,k=9/(9+t),k);t<w&&u(t+.1)
// Extract repeated S(p) and C(p)
r=Math.random,w=270,Z=r()**.4,a=w*Z,U=S(p=w*r()),V=C(p),c=t&1,x.fillRect(c?5*w+a*V:2*w+U*a,c?3*a+a/3*U:720+V*a,k=9/(9+t),k);t<w&&u(t+.1)
//
r=Math.random,w=270,Z=r()**.4,a=w*Z,p=3*r(),c=t&1,x.fillRect(c?5*w+a*C(p):2*w+S(w*p)*a,c?3*a+a/3*S(p):720+C(w*p)*a,k=9/(9+t),k);t<w&&u(t+.1)
//
r=Math.random,w=320,Z=r()**.4,a=w*Z,p=3*r(),c=t&1,x.fillRect(c?4*w+a*C(p):550+S(w*p)*a,c?3*a+a/3*S(p):720+C(w*p)*a,k=9/(9+t),k);t<w&&u(t+.1)
r=Math.random,w=320,a=w*r()**.4,p=3.1*r(),c=t&1,x.fillRect(c?4*w+a*C(p):550+S(w*p)*a,c?9+3*a+a/3*S(p):720+C(w*p)*a,k=9/(9+t),k);t<w&&u(t+.1)
//
r=Math.random,w=320,a=w*r()**.4,p=3*r(),c=t&1,x.fillRect(c?1370+a*C(p):530+S(w*p)*a,c?9+3*a+a/3*S(p):740+C(w*p)*a,k=9/(9+t),k);t<w&&u(t+.04)
//
for(r=Math.random,w=320,i=4e3;i--;x.fillRect(c?1380+a*C(p):510+S(w*p)*a,c?9+3*a+a/3*S(p):740+C(w*p)*a,k=1/(2+t),k))a=w*r()**.4,p=3*r(),c=i&1
for(r=Math.random,w=350,i=4e3;i--;x.fillRect(c?1380+a*C(p):510+S(w*p)*a,c?9+2*a+a/3*S(p):700+C(w*p)*a,k=2/(4+t),k))a=w*r()**.4,p=3*r(),c=i&1
// --- RELEASED --- Plato's meditation room
for(r=Math.random,w=350,i=4e3;i--;x.fillRect(c?4*w+a*C(p):500+S(w*p)*a,c?40+2*a+a/3*S(p):700+C(w*p)*a,k=2/(5+t),k))a=w*r()**.4,p=3*r(),c=i&1
// Golfing is available!  (We could spend the 2 spare chars turning 3 into 3.1!)
for(r=Math.random,w=350,i=4e3;i--;x.fillRect(c?500+S(w*p)*a:4*w+a*C(p=3*r()),c?700+C(w*p)*a:40+2*a+a/3*S(p),k=2/(5+t),k))a=w*r()**.4,c=i&1

// Strengthen the edges of the sphere, to match the cylinder.  Oh but now the middle does not match!
for(r=Math.random,w=350,i=4e3;i--;x.fillRect(c?500+S(w*p)*a:4*w+a*C(p=3*r()),c?700+C(w*p)*a:40+2*a+a/3*S(p),k=2/(5+t),k))c=i&1,a=w*r()**(.5-.3*c)

// A sort of xmas tree
for(r=Math.random,w=350,i=4e3;i--;x.fillRect(i%9?960+a*C(p):960+99*C(p),i%9?40+2*a+a/3*S(p):750+200*r()+30*S(p),k=2/(5+t),k))a=w*r()**.6,p=w*r()
// Broken
for(r=Math.random,w=960,i=4e3;i--;x.fillRect(i%9?w+a*C(p):w+99*C(p),i%9?40+2*a+a/3*S(p):750+200*r()+30*S(p),k=2/(5+t),k))a=w*r()**.6,p=w*r()
//
for(r=Math.random,i=w=350;i--;x.fillRect(i%9?960+a*C(p):960+99*C(p),i%9?40+2*a+a/3*S(p):750+200*r()+30*S(p),k=2/(5+t),k))a=w*r()**.6,p=w*r()
// --- RELEASED https://www.dwitter.net/d/3634 ---
for(r=Math.random,i=w=700;i--;x.fillRect(i%9?960+a/2*C(p):960+99*C(p),i%9?40+a+a/6*S(p):750+200*r()+30*S(p),k=2/(5+t),k))a=w*r()**.6,p=w*r()
// We can move p inside the first S() because i%9 guarantees it will be visited first
for(r=Math.random,i=w=700;i--;x.fillRect(i%9?960+a/2*C(p=w*r()):960+99*C(p),i%9?40+a+a/6*S(p):750+200*r()+30*S(p),k=2/(5+t),k))a=w*r()**.6
for(r=Math.random,i=w=700;i--;x.fillRect(i%9?960+a/2*C(p=w*r()):960+99*C(p),i%9?80+a+a/6*S(p):790+200*r()+30*S(p),k=2/(5+t),k))a=w*r()**.6
// Opaque tree (non-transparent) proof of concept
for(r=Math.random,i=w=700;i--;x.fillRect(i%9?960+a/2*C(p=3.14*r()):960+99*C(p),i%9?80+a+a/6*S(p):(Y=850+150*r()+30*S(p),Y>895?Y:-1),k=2/(5+t),k))a=w*r()**.6

// TODO: I originally intended to choose random points anywhere in the image, and deciding a p(plotting)  That way we could probably have a plane/horizon

// TODO: Also, make an IFS but use low alpha to make it grainy

// Messing about: What if we used sine instead of random?
w=1e3,r=i=>.5+.5*S(i*t),s=r(3)<.6,k=s?-1:.4,d=r(5),D=(s?-.7:1.3)*w/2*d,T=9+D*k,x.fillRect(700+D,T+r(7*t)*(w-D*k/4-T),l=1/(1+t/8),l),t<w&&u(t+.2)

// TODO: Fire random rays onto a plane (which is a chessboard).  From the plane coordinate decide if the point is on a black or white square.  Either plot it or don't plot it.
// TODO: We can extend this idea to render all kinds of surfaces.  Fire random rays and then decide (with probability) whether to plot the dot or not.
// Oh silly, that's what you already wrote above.
