// My version of the badger song
// (Not everyone will know the original)
i=2.7*t&15,s=9+i,x.font=s+'em"'
x.fillText(i<11?'🦡':i<14&&i%2?'🍄':'',960-s*9,540+s*5)
//
p=2.7*t,i=p&15,s=9+i,x.font=s+'em"'
x.fillText((p>>4)%5<4?(i<11?'🦡':i<14&&i%2?'🍄':''):i%8?'':'🐍',960-s*9,540+s*5)
// WRONG: Most bars are 16, but the snake bar is 12
// BUG: Or maybe it should be 14, but the last beat should contain a badger
p=2.7*t%76,i=p&15,s=9+i,x.font=s+'em"'
x.fillText((p>>4)%5<4?(i<11?'🦡':i<14&&i%2?'🍄':''):i%6==2?'🐍':'',960-s*9,540+s*5)
// Larger
p=2.7*t%76,i=p&15,s=p>>4%5==4,w=9+3*i+4*s,x.font=w+'em"'
x.fillText(!s?(i<11?'🦡':i<14&&i%2?'🍄':''):i%6==2?'🐍':'',960-w*9,540+w*5)
// Golf and positioning
p=2.7*t%76,i=p&15,s=p>>4%5==4,w=9+3*i+4*s,x.font=w+'em"'
x.fillText(s?(i%6==1?'🐍':''):i<11?'🦡':i<14&i?'🍄':'',960-9*w*(2-2*(i%2)),300+w*9)
// Really the first should be a badger, but which is silent on all except on the first verse
// Well here is a badger that is never silent
p=2.7*t%76,i=p&15,s=p>>4==4,w=9+3*i+8*s,x.font=w+'em"'
x.fillText(i<12^s?'🦡':s?(i%6==1?'🐍':''):i>12&i?'':'🍄',960-9*w*(2-2*(i%2)),300+w*9)
// === FAVOURITE === Centralised snake and mushroom
p=2.7*t%76,i=p&15,s=p>>4==4,b=i<12^s,w=3*i,x.font=w+'em"'
x.fillText(b?'🦡':s?(i%6==2?'🐍':''):i>12&i?'':'🍄',960-9*w*(1+b-2*b*(i%2)),300+w*9)
// Larger snake and mushroom, but not centralised
p=2.7*t%76,i=p&15,s=p>>4==4,b=i<12^s,w=3*i+9*!b,x.font=w+'em"'
x.fillText(b?'🦡':s?(i%6==2?'🐍':''):i>12&i?'':'🍄',960-9*w*(2-2*(w%2)),300+w*9)
// Attempt at pseudo-random placement
p=2.7*t%76,i=p&15,r=99+p|0,s=p>>4==4,b=i<12^s,w=3*i+9*!b,x.font=w+'em"'
x.fillText(b?'🦡':s?(i%6==2?'🐍':''):i>12&i?'':'🍄',r*i*i%1500,300+w*9)
// Back to centralised, make the snake a normal length bar
p=2.6*t%80,i=p&15,s=p>63,b=i<12&!s,w=3*i,x.font=w+'em"'
x.fillText(b?'🦡':s?(i%8==3?'🐍':''):i>12&i?'':'🍄',960-9*w*(1+b-2*b*(i%2)),300+w*9)
// Shrinking badgers (needs randomised X)
p=2.6*t%80,i=p&15,s=p>63,B=i>11|s,b=!B,w=50/(1+b*i),x.font=w+'em"'
x.fillText(B?s?i%8==3?'🐍':'':i>12&i?'':'🍄':'🦡',960-9*w*(1+b-2*b*(i%2)),300+w*9)
// Randomised X
p=2.6*t%80,r=77+p|0,i=p&15,s=p>63,B=i>11|s,b=!B,w=50/(1+b*i),x.font=w+'em"'
x.fillText(B?s?i%8==3?'🐍':'':i>12&i?'':'🍄':'🦡',r*i*i%1500,800)
// Just checked the video
// So actually the snake comes at the end of a verse, instead of the mushroom, and then has a whole verse to itself
p=2.6*t%80,r=77+p|0,i=p&15,s=p>59,B=i>11|s,b=!B,w=50/(1+b*i),x.font=w+'em"'
x.fillText(B?s?i%4==2?'🐍':'':i>12&i?'':'🍄':'🦡',r*i*i%1e3,300+9*w)

// Xem's version is bouncier.  Let's adapt that.  https://www.dwitter.net/d/17467
for(c.width|=i=0,x.font=`19em'`;i++<=(t*2.5|0)%16;)x.fillText(i<13?'🦡':i&1?'🍄':'',800+C(i)*800,600+C(t*15)*99+S(i**2)*300)
for(c.width|=i=0;v=t*2.6,v=v>>4,i++<=v%16|0;)x.font=`${40/(i+1)}em'`,x.fillText(v%5>3?'🐍':i<13?'🦡':i&1?'🍄':'',800+C(i)*800,900-i*70+C(t*15)*99)
for(c.width|=i=0;v=t*2.6,v=v>>4,i++<=v%16|0;)x.font=`19em'`,x.fillText(v%5>3?'🐍':i<13?'🦡':i&1?'🍄':'',800+C(i)*800,900-i*40+C(t*15)*99)
for(c.width|=i=0,v=t*2.6;i++<=v%16|0;x.fillText(s?'🐍':m?i&1?'🍄':'':'🦡',800+C(i)*800,900-i*40+C(t*15)*99))s=v>>4%5>3,m=i>12,x.font=`19em'`
for(c.width|=i=0,v=t*2.6;i++<=v%16|0;x.fillText(s?'🐍':i>12?i&1?'🍄':'':'🦡',800+C(i+s*t)*800,900-i*40+C(t*15)*99))s=v>>4%5>3,x.font=`19em'`
for(c.width|=i=0,v=t*2.6;i++<=v%16|0;x.fillText(s?'🐍':i>12?i&1?'🍄':'':'🦡',800+C(i+s*t)*800,960-i*40+C(t*15)*99))s=v%80>64,x.font=`19em'`
// Badgers on top, mushrooms on top
for(v=t*2.6,c.width|=i=1+v%16|0;--i;x.fillText(s?'🐍':i>12?i&1?'🍄':'':'🦡',800+C(i+s*t)*800,960-i*40+C(t*15)*99))s=v%80>64,x.font=`19em'`
// Badgers behind, mushrooms behind
for(v=t*2.6,c.width|=i=1+v%16|0;i--;x.fillText(s?'🐍':i>11?i&1?'':'🍄':'🦡',800-C(i+s*t)*800,920-i*40+C(t*15)*99))s=v%80>64,x.font=`19em'`
// Badgers turn into mushrooms!
for(v=t*2.6,c.width|=n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',800+C(i+s*t)*700,920-i*40+C(t*15)*99))s=v%80>64,x.font=`19em'`
// Introduce snake instead of mushroom (more like the original song, but too many snakes at the introduction)
for(v=t*2.6,c.width|=n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',800+C(i+s*t)*700,920-!s*i*40+C(t*15)*99))s=v%80>60,x.font=`19em'`
// === FAVOURITE === Snakes don't jump, but do slide, and appear at different levels
for(v=t*2.6,c.width|=n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',800+C(i+s*t)*700,920-i*40+!s*C(t*15)*99))s=v%80>60,x.font=`19em'`
// Minor golf, loses some height span (139)
for(v=t*2.6,c.width|=n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',800+C(i+s*t)*700,99*(9-i/2+!s*C(t*15))))s=v%80>60,x.font=`19em'`
// === FAVOURITE === Better golf, using fixed timing (136)
for(v=t*2.6,c.width|=n=i=v&15;i--+1;x.fillText(s?'🐍':n>11?i&1?'🍄':'':'🦡',800+C(i+s*t)*700,880-i*40+!s*C(t*15)*99))s=v%80>59,x.font=`19em'`
// Golfed but lower resolution (137)
for(v=t*2.6,c.width=190,n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',75+C(i+s*t)*70,90-i*4+!s*C(t*15)*9))s=v%80>60,x.font=`2em'`
// Golfed but lower resolution and each verse starts blank (timing is off by one) (134)
for(v=t*2.6,c.width=250,n=i=v&15;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',99+C(i+s*t)*90,120-i*6+!s*C(t*15)*9))s=v%80>60,x.font=`2em'`
// Fixed timing, we need the loop condition to be i+1 if we want to iterate i=0 (136)
// === BEST SO FAR ===
for(v=t*2.6,c.width=250,n=i=v&15;i--+1;x.fillText(s?'🐍':n>11?i&1?'🍄':'':'🦡',99+C(i+s*t)*90,120-i*6+!s*C(t*15)*9))s=v%64>48,x.font=`2em'`
// The original song starts with three pairs of mushrooms before the snake, but after that it has four pairs of mushrooms before the snake
// b-m b-m b-m b-s snake b-m b-m b-m b-m b-s snake
// The final layout would be v%96>76
// But I don't think we need to follow that pattern, because it is rather odd anyway
// Make the badgers disappear when we are showing mushrooms
for(v=t*2.6,c.width=190,n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i<12|i&1?'':'🍄':'🦡',75+C(i+s*t)*70,90-i*4+!s*C(t*15)*9))s=v%80>60,x.font=`2em'`
//  Golf 2.6 -> 3 but keep the disappearing badgers
for(v=t*3,c.width=190,n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i<12|i&1?'':'🍄':'🦡',75+C(i+s*t)*70,90-i*4+!s*C(t*15)*9))s=v%80>60,x.font=`2em'`
// Stop the mushrooms from bouncing (but now the later snakes bounce!)
for(v=t*2.6,c.width=190,n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?b|i&1?'':'🍄':'🦡',75+C(i+s*t)*70,90-i*4+(b^s)*C(t*15)*9))s=v%80>60,x.font=`2em'`,b=i<12
// Better timing 2.67, keep the disappearing badgers, and the sliding snake, but now the snakes are back to bouncing
for(v=t*2.67,c.width=190,n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i<12|i&1?'':'🍄':'🦡',75+C(i+s*t)*70,90-i*4+C(t*15)*9))s=v%80>60,x.font=`2em'`
// Now we can golf t*15 -> v*6
for(v=t*2.67,c.width=190,n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i<12|i&1?'':'🍄':'🦡',75+C(i+s*t)*70,90-i*4+C(v*6)*9))s=v%80>60,x.font=`2em'`
// === PUBLISHED at https://www.dwitter.net/d/24856 === The two most popular badger videos on YouTube have either 3 or 4 badger verses, then a snake verse, THEN 5 badger verses before each snake verse.  So we had better have a 6-verse loop, and forget about matching the start of the video.
for(v=t*2.67,c.width=190,n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i<12|i&1?'':'🍄':'🦡',75+C(i+s*t)*70,90-i*4+C(v*6)*9))s=v%96>76,x.font=`2em'`

// How about [...' 🦡🍄🐍'][b|m|s]
// where b=0 or 1, m=0 or 2, s=0 or 3
// BROKEN
for(v=t*2.6,c.width|=n=i=1+v%16|0;i--;x.fillText([...'🦡🍄🐍'][m+s],800+C(i+s*t)*700,920-i*40+!s*C(t*15)*99))s=v%80>60,m=n>12&&(i&1)<1,x.font=`19em'`

// BROKEN large static-ish mushroom and snake
for(v=t*2.6,c.width=250,n=i=v&15;i--;x.fillText(s?'🐍':m?i&1?'':'🍄':'🦡',99-C(s|m||i)*90,120-i*6+!s*C(t*15)*9))s=v%80>60,m=n>12,x.font=m*1+`2em'`

// TODO: Release the need for exact timing of the snake.  Most viewers won't appreciate this, if they aren't listening to the original audio.  Let the snake have the entire 4th verse.  With this simplification, can we make the snake and mushroom larger and/or lone?
