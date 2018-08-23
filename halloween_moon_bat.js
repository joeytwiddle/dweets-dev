// HEY I HAVEN'T RELEASED THIS YET SO PLEASE DON'T SHARE OR PUBLISH IT, THANKS!

//x.fillRect(0,0,1920,1080)
//for(i=800;i--;)W=(16e4-(i-400)**2)**.5,x.clearRect(960-W,99+i,2*W,1)
//x.fillStyle='#fff',x.beginPath(),x.arc(960,540,400,0,7),x.fill(),x.fillStyle=R()
//x.fillStyle='#fff',x.arc(960,540,400,0,7),x.fill(),x.fillStyle=R()
// So using arc and 2xfillStyle is 2 chars shorter than using pythag, as long as we don't have to beginPath.

// This is one of the rare Edge-compatible dweets, because it does use the `c.width=` trick.

// Unicode Bat:🦇
x.fillRect(0,0,1920,1080)
for(i=800;i--;)W=(16e4-(i-400)**2)**.5,x.clearRect(960-W,99+i,2*W,1)
x.fillRect(960+600*C(5*t),540+9*C(t*99),s=9+T(t),s)
//
x.fillRect(0,0,2e3,1080)
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(9e4-(i-300)**2)**.5
x.fillRect(960+600*S(4*t),540,s=9+T(t)**2,s)
//
x.fillRect(0,0,2e3,1080)
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(9e4-(i-300)**2)**.5
s=9+T(t/2)**4,x.fillRect(960+600*S(5*t)-s,420-s,2*s,2*s)
// Smaller moon
x.fillRect(0,0,2e3,1080)
for(i=400;i--;x.clearRect(960-W,99+i,2*W,1))W=(4e4-(i-200)**2)**.5
s=9+T(t/2)**4,x.fillRect(960+600*S(5*t)-s,320-s,2*s,2*s)
// Blacken the screen at the start with T(8)
for(i=400;i--;x.clearRect(960-W,99+i,2*W,1))W=(4e4-(i-200)**2)**.5
s=9+T(t?t/2:8)**4,x.fillRect(960+600*S(5*t)-s,320-s,2*s,2*s)
// Longer wait for the change
for(i=400;i--;x.clearRect(960-W,99+i,2*W,1))W=(4e4-(i-200)**2)**.5
s=9+T(t?t/3:8)**6,x.fillRect(960+600*C(5*t)-s,320-s,2*s,2*s)
// Upward slope, but too fast
for(i=400;i--;x.clearRect(960-W,99+i,2*W,1))W=(4e4-(i-200)**2)**.5
s=9+T(t?t/3:8)**6,x.fillRect(960+600*C(5*t)-s,320-s+50*S(10*t),2*s,2*s)
// A good surprise (but over limit) (and appears too soon)
for(i=400;i--;x.clearRect(960-W,99+i,2*W,1))W=(4e4-(i-200)**2)**.5
s=9+T(t?t/4:8)**6,x.fillRect(960+600*S(2*t)-s,320-50*S(4*t)+9*C(99*t)-s,2*s,2*s)
// With flapping but no slope, slower change
for(i=400;i--;x.clearRect(960-W,99+i,2*W,1))W=(4e4-(i-200)**2)**.5
s=9+T(t?t/6:8)**8,x.fillRect(960+600*S(2*t)-s,320-9*S(99*t)-s,2*s,2*s)
// Another surprise
// Quite glitchy but also quite bat-like!
for(i=400;i--;x.clearRect(960-W,99+i,2*W,1))W=(4e4-(i-200)**2)**.5
s=9+T(t?t/5:8)**8,x.fillRect(960-600*C(2*t)-s,320-s*.7*S(70*t)-s,2*s,2*s)
// OH, instead of '#000' for black, we can use R()
// Larger moon
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(9e4-(i-300)**2)**.5
s=9+T(t?t/5:8)**8,x.fillRect(960-600*C(2*t)-s,400-s*.7*S(70*t)-s,2*s,2*s)
// Shorter bat, slower crossing
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(9e4-(i-300)**2)**.5
s=9+T(t?t/5:8)**8,x.fillRect(960-500*C(2*t)-s,400-s*.4*S(70*t)-s/2,2*s,s)
// --- GOOD 140 char redux --- Golfed (by expanding the **2) and then cancelling
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(600*i-i*i)**.5
s=9+T(t/5||8)**8,x.fillRect(960-500*C(2*t)-s,400-s*.4*S(70*t)-s/2,2*s,s)
// 141!  Angled crossing (fixed diagonal, not swapping)
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(600*i-i*i)**.5
s=9+T(t/5||8)**8,x.fillRect(960-5*(q=99*C(2*t))-s,400-s*S(70*t)/3-s/2+q,2*s,s)

// Perform 3 fillRects for the bat, with the middle one oscillating independently of the outer two.  (7 or more also acceptable)
// I thought it might be possible if the clearRect was a fillRect, then we could combine them all, but it's not!
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(9e4-(i-300)**2)**.5
s=19+T(t?t/5:8)**8;for(j=3;j--;)x.fillRect(960-500*C(2*t)-s*j,400-s*.4*S(70*t+j*3.14)-s/2,s,s)
// Wings!
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(9e4-(i-300)**2)**.5
s=9+T(t?t/5:8)**8;for(j=9;j--;)x.fillRect(960-500*C(2*t)-s*(j-4)/3,400-s*S(70*t)*Math.abs((j-4)*3.14)/9-s/2,s,s)
// --- GOOD for codegolf.tk --- With upward slope
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(9e4-(i-300)**2)**.5
s=9+T(t?t/5:8)**8;for(j=9;j--;)x.fillRect(960-500*C(2*t)-s*(j-4)/3,400-s*S(80*t)*Math.abs((j-4)*3.14)/9-s/2+80*S(4*t),s,s)
// Golfed a little
for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(600*i-i*i)**.5
for(j=9;j--;x.fillRect(960-500*C(2*t)-s*(j-4)/3,400-s*S(80*t)*((j-4)**2)**.5/2.9-s/2+80*S(4*t),s,s))s=9+T(t/5||8)**8
// === OH THIS COULD BE PUBLISHED COMPRESSED! ===
eval(unescape(escape`景爨椽㘰〻椭ⴻ砮捬敡牒散琨㤶〭圬㤹⭩ⰲ⩗ⰱ⤩圽⠶〰⩩⵩⩩⤪⨮㔊景爨樽㤻樭ⴻ砮晩汬剥捴⠹㘰ⴵ〰⩃⠲⩴⤭猪⡪ⴴ⤯㌬㐰〭猪匨㠰⩴⤪⠨樭㐩⨪㈩⨪⸵⼲⸹⵳⼲⬸〪匨㐪琩ⱳⱳ⤩猽㤫吨琯㕼簸⤪⨸`.replace(/u(..)/g,"$1%")))
// Recommend: Publish the 140 redux, then publish the full compressed version as a remix
// TODO CONSIDER: Instead of **8 (shocking) we could use **6 (get to watch the incoming bat)
// Hmmm I still like the **8.  More shocking!
// Comment: End with `**6` or `**4` for a gentler approach
// I am leaning towards `**6` now.  It gives the viewer a little moment to understand what they are seeing.
