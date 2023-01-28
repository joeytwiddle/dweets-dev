// Based on https://www.dwitter.net/d/18146

for(c.width|=i=9;i--;)
for(j=201;j--;)
q=!j,x.fillRect(400+i*100+S(t)*300+30*S((j-200)/99+t),400+!q*250+j,50,1+q*200)

// Why the top isn't rendering?
for(j=9;j--;)for(i=50;i--;)W=50-i,x.fillRect(450+j*100+S(t)*300+0*i*i/50*S(1e3/i-t*8+j**3)-!!i*W/2,600-!i*200+!!i*i*4,W,i?3:200)
// OK fixed (I guess S(1/0) was NaN)
for(c.width|=j=9;j--;)for(i=50;i--;)W=50-i,x.fillRect(425+j*100+S(t)*300+i*i/50*S(1e3/(i+1)-t*8+j**3)-W/2,600-!i*200+!!i*i*4,W,i?3:200)
//
for(c.width|=j=9;j--;)for(i=200;i--;)W=50-i/4,x.fillRect(425+j*100+S(t)*300+i*i/400*S(2e3/(i+1)-t*8+j**7)-W/2,610-!i*210+!!i*i,W,i?3:200)
// Getting there
for(c.width|=j=9;j--;)for(i=200;i--;)W=50-i/4,x.fillRect(425+j*100+S(t)*300+i*i/500*S(4e3/(i+1)-t*8+j**7)-W/2,610-!i*210+!!i*i,W,i?1:200)
// Gaps to make it gentler  === BEST ===
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/250*S(3e3/(i+1)-t*8+j**7)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// Nice but reipples DISAPPEAR at 90% browser zoom!
// (Actually that was when we used 620, but with 610 they appear again!)
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/150*S(3e3/(i+1)-t*8+j**7)-W/2,610-!i*210+!!i*i*3,W,i?1:200)
// Not bad, until you zoom in
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/150*S(2e3/(i+1)-t*8+j**7)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// === GOOD ===
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/150*S(3e3/(i+1)-t*3+j**7)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// Make ripples go up/down, depending on which block
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/150*S(3e3/(i+1)-t*3*C(j)+j**7)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/150*S(3e3/(i+1)-9*C(j+t/2)+j**7)-W/2,610-!i*210+!!i*i*2,W,i?1:200)

// Not ideal but cute
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/250*S(i*25-t*8+j)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// A bit of randomnity, === GOOD ===
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/250*S(i**5-t*8+j)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// Improved
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i/3*S((5+j)*i**5-t*8)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// Mixing the last two
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/250*S((5+j)*i**5-t*8)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// Improved?
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/3,x.fillRect(425+j*100+S(t)*300+i/3*S((5+j)*i**5-t*3)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// Improved? === GREAT ===
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/3,x.fillRect(425+j*100+S(t)*300+i*i/250*S((5+j)*i**5-t*3)-W/2,610-!i*210+!!i*i*2,W,i?1:200)

// TODO: The !!i*i is not neededi, it can be simplified to just i

// Simplified === GOOD ===
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/3,x.fillRect(425+j*100+S(t)*300+i/4*S((5+j)*i**5-t*3)-W/2,610-!i*210+i*2,W,i?1:200)

// Inverted version === GOOD ===
c.style.filter='invert(100%)'
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/3,x.fillRect(425+j*100+S(t)*300+i*i/250*S((5+j)*i**5-t*3)-W/2,610-!i*210+!!i*i*2,W,i?1:200)
// or
x.fillRect(0,0,2e3,2e3)
for(j=9;j--;)for(i=99;i--;)W=50-i/3,x.clearRect(425+j*100+S(t)*300+i*i/250*S((5+j)*i**5-t*3)-W/2,610-!i*210+!!i*i*2,W,i?1:200)

// Inverted, splified and golfed (145)
c.style.filter='invert(100%)'
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/3,x.fillRect(550+j*99+i/4*S((5+j)*i*i-t*3)-W/2,610-!i*210+i*2,W,i?1:200)
// 144
c.style.filter='invert(100%)'
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/3,x.fillRect(550+j*99+i/4*S((5+j)*i*i-t*3)-W/2,i?610+2*i:400,W,i?1:200)

// Inverted using fillRect() Smaller but inefficient (in Firefox)
x.fillRect(0,0,2e3,1080)
for(j=9;j--;)for(i=99;i--;)W=50-i/3,x.clearRect(550+j*99+i/4*S((5+j)*i*i-t*3)-W/2,i?610+2*i:400,W,i?1:200)
// Restore the default swing === GREAT ===
x.fillRect(0,0,2e3,1080)
for(j=9;j--;)for(i=99;i--;)W=50-i/3,x.clearRect(550+j*99+S(t)*300+i/4*S((5+j)*i*i-t*3)-W/2,i?610+2*i:400,W,i?1:200)

// Experimenting with some vertical rippling
for(c.width|=j=9;j--;)for(i=99;i--;)W=50-i/2,x.fillRect(425+j*100+S(t)*300+i*i/150*S(3e3/(i+1)-t+j**7)-W/2,610-!i*210+!!i*i*2-i/9*C(t+i**7+j**5),W,i?1:200)
