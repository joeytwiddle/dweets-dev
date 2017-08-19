/*
 * There are limitations to our histogram algorithm.
 * For example 'abc' scores the same as 'BCD'
 */

// Keeps growing
s=''+u
for(i=s.length-1;i--;)d=s.charCodeAt(i+1)-s.charCodeAt(i),T[d]=(T[d]||0)+1
for(i=-255;i<256;i++)x.fillRect(999+9*i,0,9,T[i])

// We can remove the -1.  We get NaN on the first iteration, but setting T[NaN] is not a problem
s=''+u
for(i=s.length;i--;)d=s.charCodeAt(i+1)-s.charCodeAt(i),T[d]=(T[d]||0)+1
for(i=-255;i<256;i++)x.fillRect(999+9*i,0,9,T[i])

// Resets every other second
s=''+u
for(i=s.length;i--;)d=s.charCodeAt(i+1)-s.charCodeAt(i),T[d]=(T[d]||0)+1
for(i=-255;i<256;i++)x.fillRect(999+9*i,0,9,t&1?T[i]:T[i]=0)

// Save 1 char with a function
c=i=>s.charCodeAt(i),s=''+u
for(i=s.length;i--;)d=c(i+1)-c(i),T[d]=(T[d]||0)+1
for(i=-255;i<256;i++)x.fillRect(999+9*i,0,9,t&1?T[i]:T[i]=0)

// Accumulate only during the first second
c=i=>s.charCodeAt(i),s=''+u
for(i=s.length;i--;)d=c(i+1)-c(i),T[d]=(T[d]||0)+(t<1?1:0)
for(i=-255;i<256;i++)x.fillRect(999+9*i,0,9,T[i])

// Clear T so we can rerun (better off with the reset above)
// The t&1 can be replaced with just t, but then the histogram does not stop after 1 seconds, it keeps growing
c=i=>s.charCodeAt(i),t&1?0:T=c,s=''+u
for(i=s.length;i--;)d=c(i+1)-c(i),T[d]=(T[d]||0)+(t<1?1:0)
for(i=-255;i<256;i++)x.fillRect(999+9*i,0,9,T[i])

s=''+u
for(i=s.length;i--;)d=s.charCodeAt(i+1)-s.charCodeAt(i),T[d]=(T[d]||0)+1
for(i=512;i--;)x.fillRect(999+9*i-512,0,9,t&1?T[i]:T[i]=0)

// BUG: This one collects negative values but does not display them
c=i=>s.charCodeAt(i),t&1?0:T=c,s=''+u
for(i=s.length;i--;)d=c(i+1)-c(i),T[d]=(T[d]||0)+1
for(i=512;i--;)x.fillRect(999+9*i-512,0,9,T[i])

// BROKEN somehow: Broken Better positioning, show the negative numbers too
c=i=>s.charCodeAt(i),t&1?0:T=c,s=''+u
for(i=s.length;i--;)d=c(i+1)-c(i),T[d]=(T[d]||0)+1
for(i=512;i--;)x.fillRect(999+9*i-512,0,9,T[i-256])

// Modolu will keep numbers in range
// BUG: This one collects negative values but does not display them
c=i=>s.charCodeAt(i),t&1?0:T=c,s=''+u
for(i=s.length;i--;)d=c(i+1)-c(i)%256,T[d]=(T[d]||0)+1
for(i=512;i--;)x.fillRect(999+3*i,0,3,T[i])

// Better positioning, show the negative numbers too
// --- BEST SO FAR ---
c=i=>s.charCodeAt(i),t&1?0:T=c,s=''+u
for(i=s.length;i--;)d=c(i+1)-c(i)%256,T[d]=(T[d]||0)+1
for(i=512;i--;)x.fillRect(3*i,0,3,T[i-256])

// Three char diff (doesn't fit)
c=i=>s.charCodeAt(i),t&1?0:T=c,s=''+u
for(i=s.length;i--;)d=c(i+2)-c(i+1)-c(i)%256,T[d]=(T[d]||0)+1
for(i=512;i--;)x.fillRect(3*i,0,3,T[i-256])

// Attempt to golf emptying of T[*]
c=i=>s.charCodeAt(i),s=''+u
for(i=s.length;i--;)d=c(i+2)-c(i+1)-c(i)%256,T[d]++
for(i=512;i--;j=i-256)x.fillRect(3*i,0,3,T[j]),t&1||!T[j]?T[j]=0:0

// Using H instead of T costs 1 char more
c=i=>s.charCodeAt(i),H=t&1?H:{},s=''+u
for(i=s.length;i--;)d=c(i+2)-c(i+1)-c(i)%256,H[d]=(H[d]||0)+1
for(i=512;i--;)x.fillRect(3*i,0,3,H[i-256])

