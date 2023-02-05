//
c.width=w=255
for(i=w;i--;){
  q=S(i/20+t)+S(i/10+(2-S(t)*4))+S(-i/5+t)
  x.fillStyle=['#078930','#FCDD09','#DA121A','#222'][q&3]
  x.fillRect(0,i,w,i)
}
// Golfed
for(i=c.width=255;i--;)
x.fillStyle=['#078930','#FCDD09','#DA121A','#222'][S(i/20+t)+S(i/10+(2-S(t)*4))+S(-i/5+t)&3],
x.fillRect(0,i,255,i)
