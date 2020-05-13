// My version of the badger song
// (Millenials probably won't get it)
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
for(c.width|=i=0;v=t*2.5,v=v>>4,i++<=v%16|0;)x.font=`${40/(i+1)}em'`,x.fillText(v%5>3?'🐍':i<13?'🦡':i&1?'🍄':'',800+C(i)*800,900-i*70+C(t*15)*99)
for(c.width|=i=0;v=t*2.5,v=v>>4,i++<=v%16|0;)x.font=`19em'`,x.fillText(v%5>3?'🐍':i<13?'🦡':i&1?'🍄':'',800+C(i)*800,900-i*40+C(t*15)*99)
for(c.width|=i=0,v=t*2.5;i++<=v%16|0;x.fillText(s?'🐍':m?i&1?'🍄':'':'🦡',800+C(i)*800,900-i*40+C(t*15)*99))s=v>>4%5>3,m=i>12,x.font=`19em'`
for(c.width|=i=0,v=t*2.5;i++<=v%16|0;x.fillText(s?'🐍':i>12?i&1?'🍄':'':'🦡',800+C(i+s*t)*800,900-i*40+C(t*15)*99))s=v>>4%5>3,x.font=`19em'`
for(c.width|=i=0,v=t*2.5;i++<=v%16|0;x.fillText(s?'🐍':i>12?i&1?'🍄':'':'🦡',800+C(i+s*t)*800,960-i*40+C(t*15)*99))s=v%80>64,x.font=`19em'`
// Badgers on top, mushrooms on top
for(v=t*2.5,c.width|=i=1+v%16|0;--i;x.fillText(s?'🐍':i>12?i&1?'🍄':'':'🦡',800+C(i+s*t)*800,960-i*40+C(t*15)*99))s=v%80>64,x.font=`19em'`
// Badgers behind, mushrooms behind
for(v=t*2.5,c.width|=i=1+v%16|0;i--;x.fillText(s?'🐍':i>11?i&1?'':'🍄':'🦡',800-C(i+s*t)*800,920-i*40+C(t*15)*99))s=v%80>64,x.font=`19em'`
// Badgers turn into mushrooms!
for(v=t*2.5,c.width|=n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',800+C(i+s*t)*700,920-i*40+C(t*15)*99))s=v%80>64,x.font=`19em'`
// Introduce snake instead of mushroom (more like the original song, but too many snakes at the introduction)
for(v=t*2.5,c.width|=n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',800+C(i+s*t)*700,920-!s*i*40+C(t*15)*99))s=v%80>60,x.font=`19em'`
// Snakes don't jump, but do appear at different levels
for(v=t*2.5,c.width|=n=i=1+v%16|0;i--;x.fillText(s?'🐍':n>12?i&1?'':'🍄':'🦡',800+C(i+s*t)*700,920-i*40+!s*C(t*15)*99))s=v%80>60,x.font=`19em'`
// The original song starts with three pairs of mushrooms before the snake, but after that it has four pairs of mushrooms before the snake
// b-m b-m b-m b-s snake b-m b-m b-m b-m b-s snake
// That would be v%96>76

// TODO: How about ' 🦡🍄🐍'[b|m|s]
//       or perhaps ...' 🦡🍄🐍'[b|m|s]
// where b=0 or 1, m=0 or 2, s=0 or 3 oh not quite binary
