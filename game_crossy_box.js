K=c.width=2e3;for(i=9;i--;)for(j=9;j--;)x.fillRect(20*t+j*300%K,i*90,100,50),C

K=c.width=2e3;for(i=9;i--;)for(j=9;j--;)m=39*(3*i%7),x.fillRect((m*t+j*300)%K,i*90,100,50),C

K=c.width=2e3;for(i=9;i--;)for(j=9;j--;)m=39*(3*i%7),x.fillRect(i?(m*t+j*300)%K:K/2,i?i*90:K/2,100,50),C
K=c.width=2e3;H=K/2;t?0:Y=H;for(i=9;i--;)for(j=9;j--;)m=39*(3*i%7),x.fillRect(i?(m*t+j*300)%K:H,i?i*90:Y,100,50),C;onkeyup=e=>Y-=90
K=c.width=2e3;H=K/2;t?0:Z=H;for(i=9;i--;)for(j=9;j--;)m=39*(3*i%7),x.fillRect(i?X=(m*t+j*300)%K:H,Y=i?i*90:Z,100,50),i&&((X-H)+(Y-Z))<50?Z+H:onkeyup=e=>Z-=90
K=c.width=2e3;H=K/2;t?0:Z=H;for(i=9;i--;)for(j=9;j--;)m=39*(3*i%7),x.fillRect(i?X=(m*t+j*300)%K:H,i?Y=i*90:Z,100,50),i&&(X-H)+(Y-Z)<50?Z=H:onkeyup=e=>Z-=90
K=c.width=2e3;H=K/2;t?0:Z=H;for(i=9;i--;)for(j=9;j--;)m=39*(3*i%7),x.fillRect(i?X=(m*t+j*300)%K:H,i?Y=i*90:Z,100,50),i&&(((X-H)+(Y-Z))**2)<5?Z=H:onkeyup=e=>Z-=90
K=c.width=2e3;H=K/2;t?0:Z=H;for(i=9;i--;)for(j=9;j--;)m=39*(3*i%7),x.fillRect(i?X=(m*t+j*300)%K:H,i?Y=i*90:Z,100,50),i&&((X-H)+(Y-Z))**2<5?Z=H:onkeyup=e=>Z-=90

K=c.width=2e3;H=K/2;t?0:Z=0;for(i=9;i--;)for(j=9;j--;)m=39*(3*i%7),x.fillRect(i?X=(m*t+j*300)%K:H,i?Y=i*90:Z*90,100,50),i==Z&&(X-H)**2<5?Z=0:onkeyup=e=>Z++

// Faster, more gaps
// onclick is probably better for mobile
K=c.width=2e3;H=K/2;t?0:Z=0;for(i=9;i--;)for(j=9;j--;)m=69*(3*i%8),x.fillRect(i?X=(m*t+j*400)%K:H,i?Y=i*90:Z*90,100,50),i==Z&&(X-H)**2<5?Z=0:onclick=e=>Z++

// Collision detection.  This basically works!
K=c.width=2e3;H=K/2;t?0:Z=0;for(i=9;i--;)for(j=9;j--;)m=69*(3*i%8),L=100,x.fillRect(i?X=(m*t+j*400)%K:H,i?Y=i*90:Z*90,L,50),i==Z&&(X-H)**2<L*L/4?Z=0:onclick=e=>Z++

// Let's start golfing
// We can make the test <K (2000) if we make the lengths 89 (1980.25)
K=c.width=2e3;t?0:Z=0;for(i=9;i--;)for(j=9;j--;)m=69*(3*i%8),x.fillRect(i?X=(m*t+j*400)%K:K/2,i?Y=i*90:Z*90,89,50),i==Z&&(X-K/2)**2<K?Z=0:onclick=e=>Z++

K=c.width=2e3;t?0:Z=0;for(i=9;i--;)for(j=9;j--;)m=69*(3*i%8),x.fillRect(i?X=(m*t+j*400)%K:K/2,i?Y=i*90:Z*90,89,50),i==Z&&(X-K/2)**2<K?Z=0:onclick=e=>Z++
// Init Z later.  Use T instead of Z, so it will never throw an no-such-variable error.
W=c.width=2e3;for(i=9;i--;)for(j=9;j--;)m=69*(3*i%8),x.fillRect(i?X=(m*t+j*400)%W:W/2,i?Y=i*90:T*90,89,50),!t||i==T&&(X-W/2)**2<W?T=0:onclick=e=>T++
// Actually we don't need it.  We don't access Z until i=0
W=c.width=2e3;for(i=9;i--;)for(j=9;j--;)m=69*(3*i%8),x.fillRect(i?X=(m*t+j*400)%W:W/2,i?Y=i*90:Z*90,89,50),!t||i==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// Swap i and j for classic x and y
W=c.width=2e3;for(j=9;j--;)for(i=9;i--;)m=69*(3*j%8),x.fillRect(j?X=(m*t+i*400)%W:W/2,j?Y=j*90:Z*90,89,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// Why use two for loops when you could use one?!
W=c.width=2e3;for(i=81;i--;)j=i/9|0,m=69*(3*j%8),x.fillRect(j?X=(m*t+i*400)%W:W/2,j?Y=j*90:Z*90,89,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
W=c.width=2e3;for(i=64;i--;)j=i>>3,m=69*(3*j%8),x.fillRect(j?X=(m*t+i*400)%W:W/2,j?Y=j*90:Z*90,89,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// We can inline m, since it is never re-used
W=c.width=2e3;for(i=64;i--;)j=i>>3,x.fillRect(j?X=(69*(3*j%8)*t+i*400)%W:W/2,j?Y=j*90:Z*90,89,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// More lanes
W=c.width=2e3;for(i=96;i--;)j=i>>3,x.fillRect(j?X=(69*(3*j%8)*t+i*400)%W:W/2,j?Y=j*90:Z*90,89,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// Save 1 char -- early releasable --
W=c.width=2e3;for(i=96;i--;)j=i>>3,x.fillRect(j?X=(3*j%8*69*t+i*400)%W:W/2,j?Y=j*90:Z*90,89,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// Harder version
W=c.width=2e3;for(i=96;i--;)j=i>>3,x.fillRect(j?X=(4*j%11*t*69+i*400)%W:W/2,j?Y=j*90:Z*90,89,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// Back to easy version; slower (for mobile), smaller cars (closer to real)
W=c.width=2e3;for(i=96;i--;)j=i>>3,x.fillRect(j?X=(3*j%8*55*t+i*400)%W:W/2,j?Y=j*90:Z*90,60,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// Wider cars (makes it very hard!)
W=c.width=2e3;for(i=96;i--;)j=i>>3,x.fillRect(j?X=(3*j%8*33*t+i*400)%W:W/2,j?Y=j*90:Z*90,90,50),!t||j==Z&&(X-W/2)**2<W*3?Z=0:onclick=e=>Z++
// With smaller cars, 4%11 becomes workable
W=c.width=2e3;for(i=96;i--;)j=i>>3,x.fillRect(j?X=(4*j%11*55*t+i*400)%W:W/2,j?Y=j*90:Z*90,50,50),!t||j==Z&&(X-W/2)**2<W?Z=0:onclick=e=>Z++
// Medium size cars, difficult, slower
W=c.width=2e3;for(i=96;i--;)j=i>>3,x.fillRect(j?X=(5*j%8*44*t+i*400)%W:W/2,j?Y=j*90:Z*90,66,50),!t||j==Z&&(X-W/2)**2<W*2?Z=0:onclick=e=>Z++
// Nice uneven spacing (some cars in pairs) but impossible because one is stuck!
W=c.width=2e3;for(i=96;i--;)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*600)%W:W/2,j?Y=j*90:Z*90,90,50),!t||j==Z&&(X-W/2)**2<W*3?Z=0:onclick=e=>Z++
// Same but possible.  A bit too easy
W=c.width=2e3;for(i=96;i--;)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*610)%W:W/2,j?Y=j*90:Z*90,99,50),!t||j==Z&&(X-W/2)**2<W*4?Z=0:onclick=e=>Z++
// Fewer cars per row
W=c.width=2e3;for(i=96;i--;)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*550)%W:W/2,j?Y=j*90:Z*90,90,50),!t||j==Z&&(X-W/2)**2<W*3?Z=0:onclick=e=>Z++
// Wider cars
W=c.width=2e3;for(i=96;i--;)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*550)%W:W/2,j?Y=j*90:Z*90,99,50),!t||j==Z&&(X-W/2)**2<W*4?Z=0:onclick=e=>Z++
// Nice: irregular, slow, difficult
W=c.width=2e3;for(i=96;i--;)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*570)%W:W/2,j?Y=j*90:Z*90,99,50),!t||j==Z&&(X-W/2)**2<W*4?Z=0:onclick=e=>Z++
// I quite like this, but the static last row makes it impossible
W=c.width=2e3;for(i=96;i--;)j=i>>2,x.fillRect(j?X=(7*j%11*33*t+i*570)%W:W/2,j?Y=j*90:Z*90,99,50),!t||j==Z&&(X-W/2)**2<W*4?Z=0:onclick=e=>Z++
// --- FIRST RELEASE --- Nice, like the previous irregular, but with a few pairs
W=c.width=2e3;for(i=96;i--;)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*590)%W:W/2,j?Y=j*90:Z*90,99,50),!t||j==Z&&(X-W/2)**2<W*4?Z=0:onclick=e=>Z++
// Two directional, nice but not quite hard enough
W=c.width=2e3;for(i=96;i--;)j=i>>2,x.fillRect(j?X=((3*j%8-3.5)*53*t+i*570)%W:W/2,j?Y=j*90:Z*90,99,50),!t||j==Z&&(X-W/2)**2<W*4?Z=0:onclick=e=>Z++

// The release, golfed
c.width|=0;for(i=96;i--;!t||j==Z&&(X-1e3)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*590)%2e3:1e3,99*(j||Z),99,50)
// Different traffic (hard, a bit sucky tbh)
c.width|=0;for(i=96;i--;!t||j==Z&&(X-1e3)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(5*j%8*33*t+i*590)%2e3:1e3,99*(j||Z),99,50)
// Inefficient but short
c.width|=0;for(i=2e3;i--;!t||j==Z&&(X-1e3)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*580)%2e3:1e3,45*(j||Z),99,25)
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*580)%2e3:H,45*(j||Z),99,25)
// Oh we can drop 2e3 to golf off 1 more char
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*580)%2e3:H,45*(j||Z),99,25)

// Crazy convoys
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=((j%3+1)*(t+i)*620)%2e3:H,52*(j||Z),99,40)
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=((j%3+1)*(t+i)*660)%2e3:H,52*(j||Z),99,40)
// Looks cool but too easy
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=((j%3+1)*(t+i)*653)%2e3:H,52*(j||Z),99,40)
// A bit harder :)
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=((j%3+1)*(t+i)*673)%2e3:H,52*(j||Z),99,40)
// Has lorries!
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(5*j%7*99*t+i*650)%2e3:H,54*(j||Z),99,45)
// Less regular than most
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(4*j%7*555*t+i*582)%2e3:H,54*(j||Z),99,45)
// Pretty awesome; irregular; but way too fast!  2e3e need the big number to overlap to make lorries.
// Try j%3+2 or j%3+3 to get the speeds more even (above that we lose the lorries) although these are getting too fast :-/
// 213-232 work ok (the lorries disappear in the middle)
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=((j%3+1)*(t+i)*213)%2e3:H,52*(j||Z),99,40)
// Kinda nice but the cars squidge through each other.  Might work if you call them crocs :P
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=((i%7+1)*(t+i)*77)%2e3:H,52*(j||Z),99,40)
// Back to non-squidgy
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=((j%8+4)*(t+i)*87)%2e3:H,52*(j||Z),99,40)
// A bit ugly but speed is acceptable
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=((j%6+1)*(t+i)*57)%2e3:H,52*(j||Z),99,40)
// Difficulty level: donbright!
// Wait a minute, we can remove the brackets after X!
// Golfed but too fast: should add t/3 or 4 as necessary
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(j%3+1)*(t+i)*213%2e3:H,52*(j||Z),99,40)
// --- SECOND RELEASE --- https://www.dwitter.net/d/2600
c.width|=0;for(i=H=1e3;i--;!t||j==Z&&(X-H)**2<8e3?Z=0:onclick=e=>Z++)j=i>>2,x.fillRect(j?X=(j%3+1)*(t/4+i)*213%2e3:H,52*(j||Z),99,40)

// The release, but with the player starting at the bottom and moving up
W=c.width=2e3;for(i=32;i--;)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*590)%W:W/2,j?Y=j*90:Z*90,99,50),!t||j==Z&&(X-W/2)**2<W*4?Z=9:onclick=e=>Z--
// Starting at the bottom, golfed
W=c.width=2e3;for(i=32;i--;!t||j==Z&&(X-W/2)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*590)%W:W/2,90*(j||Z),99,50)
// Without H (H offers no saving because we don't use it to init i)
c.width|=0;for(i=32;i--;!t||j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=(3*j%8*33*t+i*590)%2e3:1e3,90*(j||Z),99,50)
// With the other way of generating traffic
c.width|=0;for(i=32;i--;!t||j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=(j%3+1)*(t+i)*213%2e3:1e3,90*(j||Z),99,50)
// Starting at the bottom is nice, but the problem is once you reach Z=0, you are stuck there
// Well we can send you back to the start
W=c.width=2e3;for(i=36;i--;!t||!Z||j==Z&&(X-W/2)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=(5*j%9*33*t+i*590)%W:W/2,99*(j||Z),99,50)
// Drop W
c.width|=0;for(i=36;i--;!t||!Z||j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=(5*j%9*33*t+i*590)%2e3:1e3,99*(j||Z),99,50)
// Funkier traffic
c.width|=0;for(i=36;i--;!t||!Z||j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=((j%3+1)*(t+i)*213)%2e3:1e3,99*(j||Z),99,50)
// It doesn't help but we can flip the test with DeMorgan's Law
c.width|=0;for(i=36;i--;t&&Z&&(j!=Z||(X-1e3)**2>8e3)?onclick=e=>Z--:Z=9)j=i>>2,x.fillRect(j?X=((j%3+1)*(t+i)*213)%2e3:1e3,99*(j||Z),99,50)

// Bloated attempt at changing the pattern
t?0:(P=3,Q=8,Z=0);W=c.width=2e3;for(i=32;i--;Z?0:P+=2,Q+=0,!t||!Z||j==Z&&(X-W/2)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=(P*j%Q*33*t+i*590)%W:W/2,90*(j||Z),99,50)
// Smaller, but scene changes on every reset, not only when Z=0
t?c.width|=0:P=K=99;for(i=36;i--;t&&Z&&(j!=Z||(X-1e3)**2>8e3)?onclick=e=>Z--:(Z=9,P+=36))j=i>>2,x.fillRect(j?X=(j%3*(t+i)*P)%2e3:1e3,K*(j||Z),K,50)
// Drop K, start P at 9 instead of 99
t?c.width|=0:P=9;for(i=36;i--;t&&Z&&(j!=Z||(X-1e3)**2>8e3)?onclick=e=>Z--:(Z=9,P+=36))j=i>>2,x.fillRect(j?X=(j%3*(t+i)*P)%2e3:1e3,99*(j||Z),99,50)
// OK we change P after each crossing, but too slowly
t?c.width|=0:P=9;for(i=36;i--;!t||!Z&&P++||j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=(j%3*(t+i)*P)%2e3:1e3,99*(j||Z),99,50)
// Avoid the later check for t by setting Z on the first check
t?c.width|=0:P=Z=9;for(i=36;i--;!Z&&P++||j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=(j%3*(t+i)*P)%2e3:1e3,99*(j||Z),99,50)
// Wait a minute, we can remove the brackets after X!  OK so now it fits, although P only incs by a tiny 1
t?c.width|=0:P=Z=9;for(i=36;i--;!Z&&P++||j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50)
// Ah, we can inc P by 9.  Still too small really.
t?c.width|=0:P=Z=9;for(i=36;i--;Z?j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--:P+=Z=9)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50)

// So here's a weird approach.  P keep increasing until an invisible car on j=0 hits our frog.  This increases P a lot!
// BUG: With this _?_:_ the onclick does not get set!
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z?(X-1e3)**2<8e3?Z=9:onclick=e=>Z--:Z?0:P++)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50)
// Still broken
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z?(X-1e3)**2<8e3?Z=9:Z?0:P++,onclick=e=>Z--)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50)
// --- Fixed version.  This one is quite nice but too fast ---
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z?(X-1e3)**2<8e3?Z=9:0:Z?0:P++)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50),onclick=e=>Z--
// Different each time, but grows too quickly
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z?(X-1e3)**2<8e3?Z=9:0:Z?0:P+=t)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50),onclick=e=>Z--

// Crossy Box with different levels
// Instead of P+=9, we use P^=t.  The traffic grows slowly
t?c.width|=0:P=Z=9;for(i=36;i--;!Z&&(P^=t)||j==Z&&(X-1e3)**2<8e3?Z=9:onclick=e=>Z--)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50)
// P+=99 cannot be used in an expression, but P=P+99 can
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z||(P=P+99))j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50),onclick=e=>Z--
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?0:P=P+99)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50),onclick=e=>Z--
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?onclick=e=>Z--:P=P+99)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50)
// --- Golfed ---
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillRect(j?X=j%3*(t+i)*P%2e3:1e3,99*(j||Z),99,50)
// Slowed down
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillRect(j?X=j%3*(t/4+i)*P%2e3:1e3,99*(j||Z),99,50)
// --- POTENTIAL RELEASE CANDIDATE 3 --- Since every N is a dead row, change the 3 in j%3
t?c.width|=0:P=Z=9;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillRect(j?X=j%4*(t/4+i)*P%2e3:1e3,99*(j||Z),99,50)
// Bring back %3+1 (costs 4 chars!) but then P=Z=9 start point sucks, so start at 0
// --- This would be nice but it's probably too fast on fast machines ---
t?c.width|=0:P=Z=0;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillRect(j?X=(j%3+1)*(t+i)*P%2e3:1e3,99*(j||Z),99,50)
// --- POTENTIAL RELEASE CANDIDATE 3 --- with 4 rows before a gap
t?c.width|=0:P=Z=0;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillRect(j?X=j%5*(t/9+i)*P%2e3:1e3,99*(j||Z),99,50)
// --- RELEASE 3 --- https://www.dwitter.net/d/2612
t?c.width|=0:P=Z=5;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillRect(j?X=j%5*(t/19+i)*P%2e3:1e3,99*(j||Z),99,50)
// Just for comparison, going down
t?c.width|=0:P=Z=9;for(i=99;i--;j==Z&&(X-1e3)**2<8e3?Z=0:Z<9?onclick=e=>Z++:P++)j=i>>2,x.fillRect(j?X=j%5*(t/19+i)*P%2e3:1e3,99*(j||Z),99,50)
// Or going up, but switching the slower rows to be lower
t?c.width|=0:P=Z=0;for(i=45;i--;Z>0&&j==Z&&(X-1e3)**2<8e3?Z=0:Z<9?onclick=e=>Z++:P++)j=i>>2,x.fillRect(j?X=j%5*(t/3+i)*P%2e3:1e3,900-99*(j||Z),99,50)
// Oh, there is a much easier way to do that:
t?c.width|=0:P=Z=5;for(i=36;i--;j==Z&&(X-1e3)**2<8e3?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillRect(j?X=(10-j)%5*(t/19+i)*P%2e3:1e3,99*(j||Z),99,50)
// TODO: What if we reduce the width?
// MrM@_S's inspiration to shrink the canvas shaves off 6 chars!
t?c.width=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<80?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillRect(j?X=j%5*(t/19+i)*P%200:99,9*(j||Z),9,5)

// With chars?
t?c.width=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillText('X',j?X=j%5*(t/99+i)*P%200:99,9*(j||Z))
// This doesn't quite give us the correct symbols, we need 0 or 1
t?c.width=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillText('CF'[j&1],j?X=j%5*(t/99+i)*P%200:99,9*(j||Z))
// '🐸🚗'[j&&1] did not work.  And neither did '🐸🚗'.charAt(j?1:0)
// These work:
t?c.width=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillText(j?'🚗':'🐸',j?X=j%5*(t/99+i)*P%200:99,9*(j||Z))
t?c.width=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P+=.1)j=i>>2,x.fillText(j?'🚗':'🐸',j?X=j%5*(t+i)*P%200:99,9*(j||Z))
// Shrunk size
t?c.width=99:P=Z=0;for(i=36;i--;j==Z&&(X-49)**2<60?Z=9:Z?onclick=e=>Z--:P+=.1)j=i>>2,x.fillText(j?'#':'X',j?X=j%5*(t+i)*P%99:49,5*(j||Z))
// Possible dodgy release, but with a funny bar of vehicles
t?c.width=W=250:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P+=.1)j=i>>2,x.fillText(j?'🚃':P|0,j?X=j%5*(t/i)*P%W:99,9*(j||Z))
t?c.width=W=200:P=Z=0;for(i=36;--i;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P+=.1)j=i>>2,x.fillText(j?'🚌':'🐥',j?X=j%5*t/i*P%W:99,9*(j||Z))
t?c.width=W=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillText(j?'🚌':'🐢',j?X=j%5*t/i*P/9%W:99,9*(j||Z))
// --- RELEASED ---
t?c.width=W=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillText(j?'🚌':'🐢',j?X=j%5*t/i*P/23%W:99,9*(j||Z))
t?c.width=W=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillText(j?'🚌':'🐢',j?X=j%5*t/9*P+i%W:99,9*(j||Z))
// This is what I really wanted to release (it doesn't get tooo fast, if we use t/W instead of t/99)
t?c.width=W=200:P=Z=0;for(i=36;i--;j==Z&&(X-99)**2<60?Z=9:Z?onclick=e=>Z--:P++)j=i>>2,x.fillText(j?'🚌':'🐢',j?X=j%5*(t/W+i)*P%W:99,9*(j||Z)) 

// MrM@_S
W=c.width=255;for(i=96;i--;j=i>>2,x.fillText((u+u)[t&W],j?X=(3*j%8*33*t+i*W)%W:W/2,j?Y=j*9:Z*9))!t||j==Z&&(X-W/2)**2<W*4?Z=0:onclick=e=>Z++

// "We do P++ on every iteration of the loop, until Boxy gets hit by an invisible car on row 0."
// This is not true.  Because we don't assign X when we are on row 0, the collision is with the last car on row 1.


// There is a spare char available in the wink of the for loop

/*

Poor Boxy is far from home.  He was carelessly attached to a tan function and was rapidly diverged.  He misses his friends 0, 1, 2, 5, 6, 7 and 8.

Now he wants to make the journey back, but there are many perils ahead of him.

Join boxy on his adventures as he crosses quiet country roads, busy highways, train tracks, and fields full of dangerous sliding black boxes!

*/
