t||(b="01234 56789abcdef",g=5);D={1:1,4:1};c.onclick=e=>{i=e.x/9+36*e.y/9|0;d=g-i;h=(d in D||-d in D);console.log(i,g,d,h);h&&(b[g]=b[i],b[i]=' ');console.log(b)}

if(!t){b=[];for(i=15;i--;)b.push(i);g=15};D={1:1,4:1};c.onclick=e=>{i=e.x/9+36*e.y/9|0;d=g-i;h=(d in D||-d in D);console.log(i,g,d,h);h&&(b[g]=b[i],b[i]=' ');console.log(b)}

if(!t){b=[];for(i=16;--i;)b.push(i);g=15};D={1:1,4:1};c.onclick=e=>{i=e.x/9+36*e.y/9|0;d=g-i;h=(d in D||-d in D);h&&(b[g]=b[i],b[i]=' ')}

b=t?b:(g=15,[],D={1:1,4:1},c.onclick=e=>{i=e.x/9+36*e.y/9|0;d=g-i;h=(d in D||-d in D);h&&(b[g]=b[i],b[i]=' '),console.log(i,g,d,h)});for(i=16;--i;)t?x.fillText(i,9*(i%4),9*i/4):b[i]=i

c.width=90;b=t?b:(g=15,[],D={1:1,4:1},c.onclick=e=>{i=e.x/60+e.y/15|0;d=g-i;h=(d in D||-d in D);h&&(b[g]=b[i],b[g=i]='#'),console.log([e.x,e.y],i,d,h,g,b)});for(i=16;--i;)t?x.fillText(b[i],9*(i%4),9*i/4):b[i]=i

c.width=90;t||(g=15,D={1:1,4:1},b=c.onclick=e=>{i=e.x/60+e.y/15|0;d=g-i;h=(d in D||-d in D);h&&(b[g]=b[i],b[g=i]='#'),console.log([e.x,e.y],i,d,h,g,b)});for(i=16;--i;)t?x.fillText(b[i],9*(i%4),9*i/4):b[i]=i
// More accurate
c.width=90;t||(g=0,D={1:1,4:1},b=[],c.onclick=e=>{i=(e.x/50|0)+4*(e.y/60|0);d=g-i;h=(d in D||-d in D);h&&(b[g]=b[i],b[g=i]=' '),console.log([e.x,e.y],i,d,h,g,b)});for(i=16;i--;)t?x.fillText(b[i],9*(i%4),9*(4+i-i%4)/4):b[i]=i+1
c.width=90;t||(g=0,D={1:1,4:1},b=c.onclick=e=>{i=(e.x/52|0)+4*(e.y/72|0);d=g-i;h=(d in D||-d in D);h&&(b[g]=b[i],b[g=i]=' ')});for(i=16;i--;)t?x.fillText(b[i],9*(i%4),3*(4+i-i%4)):b[i]=i
// Use T instead of b, then we don't need to initialise it
c.width=90;t||(g=0,D={1:1,4:1},c.onclick=e=>{i=(e.x/52|0)+4*(e.y/72|0);d=g-i;h=(d in D||-d in D);h&&(T[g]=T[i],T[g=i]=' ')});for(i=16;i--;)t?x.fillText(T[i],9*(i%4),3*(4+i-i%4)):T[i]=i
c.width=90;t||(g=0,D={1:1,4:1},c.onclick=e=>{i=(e.x/52|0)+4*(e.y/72|0);d=g-i;(d in D||-d in D)&&(T[g]=T[i],T[g=i]=' ')});for(i=16;i--;)t?x.fillText(T[i],9*(i%4),3*(4+i-i%4)):T[i]=i

// Valid move detection code:
// Strictly speaking, i should be in range 0<=i<=15 but I haven't been checking that
d=g-i,D={1:1,4:1},(d in D||-d in D)&&()
d=g-i,D={1:1,4:1},D[d]||D[-d]&&()
D={1:1,4:1},D[d=g-i]||D[-d]&&()
D={1:1,4:1},D[d=g-i]||D[-d]&&()
// Assigning d is a waste of chars!
D={1:1,4:1},D[g-i]|D[i-g]&&()
// OH NO!  This seems close but it doesn't work if one of the D[k]s is undefined!
D='01001';D[g-i]-D[i-g]&&()
// This works
D='01001';D[g-i]|D[i-g]&&()
// Alternative, longer.  We use 'C' which is a predefined function
C[1]=C[4]=1;C[g-i]|C[i-g]&&()
// This also works
'01001'[g-i]|'01001'[i-g]&&()
// Oh shit.  Well duh.  The +1,-1 permission allows us to slide over the wraparound (e.g. 3 and 4)
'-1-4'.indexOf(d)>=0
'-1-4'.match(d)
d*d|17==17

// Remove the code that checks valid moves
c.width=90;t||(g=0,c.onclick=e=>{i=(e.x/52|0)+4*(e.y/72|0);T[g]=T[i];T[g=i]=' '});for(i=16;i--;)t?x.fillText(T[i],9*(i%4),3*(4+i-i%4)):T[i]=i

c.width=90;t||(g=0,c.onclick=e=>{i=(e.x/52|0)+4*(e.y/72|0);T[g]=T[i];T[g=i]=' '});for(i=16;i--;)t?x.fillText(T[i],9*(i%4),3*(4+i-i%4)):T[i]=i

// First version which fits!
c.width=90;for(i=16;i--;)t?x.fillText(T[i],9*(i%4),3*(4+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{i=(e.x/52|0)+4*(e.y/72|0);T[g]=T[i];T[g=i]=' '})
// Golfing
c.width=90;for(i=16;i--;)t?x.fillText(T[i],9*(i%4),3*(4+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{T[g]=T[i=(e.x/52|0)+4*(e.y/72|0)];T[g=i]=' '})
// Beautified (to release?)
c.width=90;for(i=16;i--;)t?x.fillText(T[i],17*(i%4),3*(4+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{T[g]=T[i=(e.x/99|0)+4*(e.y/72|0)];T[g=i]=''})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,9+12*(i>>2)):(T[i]=g=i,c.onclick=e=>{T[g]=T[i=e.x/99|0+4*(e.y/70|0)];T[g=i]=''})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,9+12*(i>>2)):T[i]=g=i;c.onclick=e=>{T[g]=T[i=e.x/99|0+4*(e.y/70|0)];T[g=i]=''}
// Minified below (to release?) Not so pretty: the top line is shifted up so we can (div 64) in the event
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+12*(i>>2)):(T[i]=g=i,c.onclick=e=>{T[g]=T[h=e.x/99|0+4*(e.y>>6)];T[g=h]=''})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+12*(i>>2)):T[i]=g=i;c.onclick=e=>{T[g]=T[h=e.x/99|0+4*(e.y>>6)];T[g=h]=''}

// ^^^ BEST SO FAR ^^^

// Trying to squeeze the cheat detection back in
c.width=90;for(i=16;i--;)t?x.fillText(T[i],17*(i%4),3*(4+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{D='100001';D[d=g-i]-D[-d]?T[g]=T[i=(e.x/99|0)+4*(e.y/72|0)],T[g=i]=' ':0})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],17*(i%4),3*(4+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{D='100001';D[d=g-i]-D[-d]?(T[g]=T[i=(e.x/99|0)+4*(e.y/72|0)],T[g=i]=0):0})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],17*(i%4),3*(4+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{D='100001';i=(e.x/99|0)+4*(e.y/72|0);h=D[d=g-i]-D[-d];console.log("%s-%s=%s",g,i,d,D[d=g-i],D[-d],h,!!h);h?(T[g]=T[i],T[g=i]=0):0})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],17*(i%4),3*(4+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{D='100001';i=(e.x/99|0)+4*(e.y/72|0);D[d=g-i]-D[-d]?(T[g]=T[i],T[g=i]=''):0})

// Scrap that.  Go back to Beautified
c.width=90;for(i=16;i--;)t?x.fillText(T[i],17*(i%4),3*(4+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{T[g]=T[i=(e.x/99|0)+4*(e.y/72|0)];T[g=i]=''})
// and try to minimize some more
c.width=90;for(i=16;i--;)t?x.fillText(T[i],11*(i%4),5/2*(3+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{T[g]=T[i=(e.x>>6)+4*(e.y>>6)];T[g=i]=''})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],11*(i%4),5/2*(3+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{T[g]=T[i=(e.x>>6)+4*(e.y>>6)];T[g=i]=''})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,5/2*(3+i-i%4)):(T[i]=i,g=0,c.onclick=e=>{T[g]=T[i=(e.x>>6)+4*(e.y>>6)];T[g=i]=''})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,5/2*(3+i-i%4)):(T[i]=g=i,c.onclick=e=>{T[g]=T[i=(e.x>>6)+4*(e.y>>6)];T[g=i]=''})
// BAD: Let the board appear diagonal (easier to draw but clicks cannot work can they?  e.y cannot contribute linearly to i, it has to cause jumps of 4i
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,8+3*i):(T[i]=g=i,c.onclick=e=>{T[g]=T[i=(e.x>>6)+(e.y>>4)];T[g=i]=''})
// x and y (better be i and j, since x is the ctx)?  Not too costly to grab these, but the problem is we don't have x,y for g!
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,5/2*(3+i-i%4)):(T[i]=g=i,c.onclick=e=>{i=e.x>>6;j=e.y>>6;;;;T[g]=T[k=i+4*j];T[g=k]=''})
// Using >>= doesn't save any chars
// Tweak the positions a little
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,7+3*i-i%4*3):(T[i]=g=i,c.onclick=e=>{i=e.x>>6;j=e.y>>6;;;;T[g]=T[k=i+4*j];T[g=k]=''})
// WRONG!  Using bitwise operations for comparison.  But i and j are the positions, we need to be examining the offset from the empty tile
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,7+3*(i-i%4)):(T[i]=g=i,c.onclick=e=>{i=e.x>>6;j=e.y>>6;(i*i^j*j)==1&&(T[g]=T[k=i+4*j],T[g=k]='')})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,7+3*(i-i%4)):(T[i]=g=i,c.onclick=e=>{i=e.x>>6;j=e.y>>6;(i*i^j*j)^1||(T[g]=T[k=i+4*j],T[g=k]='')})
// Filthy hack with &17.  Allows wraparound, diagonal jumps and knight jumps (2v1h or some 4h1v)!
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,5/2*(3+i-i%4)):(T[i]=g=i,c.onclick=e=>{h=(e.x>>6)+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')})
// Uglify (shift text)
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,3*(2+i-i%4)):(T[i]=g=i,c.onclick=e=>{h=(e.x>>6)+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')})
// We can do /64|0 but I thought | was greedy.  No gain anyway
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,6+3*i-i%4*3):(T[i]=g=i,c.onclick=e=>{h=e.x/64|0+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*11,6+3*i-i%4*3):(T[i]=g=i,c.onclick=e=>{h=(e.x>>6)+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')})
// Making a function to do x>>6 didn't help: f=x=>x>>6
// No loss in wider x spacing
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+3*i-i%4*3):(T[i]=g=i,c.onclick=e=>{h=e.x/99|0+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+12*(i>>2)):(T[i]=g=i,c.onclick=e=>{h=e.x/99|0+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+12*(i>>2)):(T[i]=g=i,c.onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-g;d*d&17&&(T[g]=T[h],T[g=h]='')})
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+12*(i>>2)):T[i]=g=i;c.onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-g;d*d&17&&(T[g]=T[h],T[g=h]='')}
c.width=90;for(i=16;i--;t?x.fillText(T[i],i%4*17,6+12*(i>>2)):T[i]=g=i)c.onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-g;d*d&17&&(T[g]=T[h],T[g=h]='')}
c.width=90;for(i=16;i--;t?x.fillText(T[i],i%4*17,6+12*(i>>2)):T[i]=g=i)c.onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-g;d*d&17&&(T[g]=T[h],T[g=h]='')}
// Do we really need to show only 16 chars?  No!  90 will do fine.  :P
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,6+12*(i>>2)):T[i]=g=i)c.onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-g;d*d&17&&(T[g]=T[h],T[g=h]='')}

// Better positioning --- THIS WAS THE FIRST RELEASE ---
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)c.onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-g;d*d&17&&(T[g]=T[h],T[g=h]='')}

for(i=c.width=90;i--;t?x.fillText(T[i],i%4*11,9+10*(i>>2)):T[i]=g=i)c.onclick=e=>{d=(h=e.x>>6+4*(e.y>>6))-g;d*d&17&&(T[g]=T[h],T[g=h]='')}

// Swap x,y?  But it costs extra chars.
for(i=c.width=90;i--;t?x.fillText(T[i],(i>>2)*17,i%4*10+9):T[i]=g=i)c.onclick=e=>{d=(h=(e.y>>6)+4*(e.x/99|0))-g;d*d&17&&(T[g]=T[h],T[g=h]='')}

// --- POST-RELEASE WORK HERE ---
// We can remove the c. and save two bytes!
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-g;d*d&17&&(T[g]=T[h],T[g=h]='')}
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>'-1-4'.match((h=e.x/99|0+4*(e.y>>6))-g)&&(T[g]=T[h],T[g=h]='')
// With a 0 instead of a space, it fits
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>'-1-4'.match((h=e.x/99|0+4*(e.y>>6))-g)&&(T[g]=T[h],T[g=h]=0)
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>(((h=e.x/99|0+4*(e.y>>6))-g)**2|17)==17&&(T[g]=T[h],T[g=h]=0)

// TODO: None of these rules prevent row wraparound, which is unfortunate
// Concern: | is greedy on left and right, so |0+4*k is a bit naughty, although we get away with it because e.x/99 should never be >= 4
// TBH we could just move it to the right hand side
//for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>(((h=e.x/99|0+4*(e.y>>6))-g)**2|17)^17||(T[g]=T[h],T[g=h]='')
// --- RELEASED --- https://www.dwitter.net/d/6753
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>(((h=4*(e.y>>6)+e.x/99|0)-g)**2|17)^17||(T[g]=T[h],T[g=h]='')
// Tried swapping axes but it didn't work
for(i=c.width=90;i--;t?x.fillText(T[i],(i>>2)*17,9+i%4*10):T[i]=g=i)onclick=e=>(((h=(e.x/99|0)*4+(e.y>>6))-g)**2|17)^17||(T[g]=T[h],T[g=h]='')
// Alternative rule, using **, longer
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>'16'.match(((h=e.x/99|0+4*(e.y>>6))-g)**2)&&(T[g]=T[h],T[g=h]='')
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>{h=e.x/99|0+4*(e.y>>6),'-1-4'.match(h-g)&&(T[g]=T[h],T[g=h]='')}
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>(((h=e.x/99|0+4*(e.y>>6))-g)**2|17)==17&&(T[g]=T[h],T[g=h]='')
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-g;(d*d|17)==17&&(T[g]=T[h],T[g=h]='')}
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>{h=e.x/99|0+4*(e.y>>6);d=h-g;(d*d|17)==17&&(T[g]=T[h],T[g=h]='')}

// Do the comparison using x,y instead of h-g to avoid wraparound
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>(x=e.x/99,y=e.y>>6,((p-x)*(q-y)|1)^1||(p=x,q=y,T[g]=T[h=p+4*q],T[g=h]=''))
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=g=i)onclick=e=>(x=e.x/99,y=e.y>>6,((g%4-x)*((g>>2)-y)|1)^1||(T[g]=T[h=p+4*q],T[g=h]=''))

// How about key-driven?
// BUG: There is no way to move the '10' tile since we can't type it in one key.
// (It would be ok if we could reduce the tiles to hexadecimal or alphanumeric values, e.g. '1' ... 'f'
for(i=c.width=90;i--;t?x.fillText(T[i],i%4*17,9+10*(i>>2)):T[i]=C[i]=g=i)onkeyup=e=>(((h=C[k=e.key])-g)**2|17)^17||(T[C[k]=g]=T[h],T[g=h]='')

// WRONG: If we use | as a delimiter, then we can make the function body an expression, and drop the {}s
// But surely this is wrong?  I think | is not so greedy on the RHS as it is on the left.
// In fact these don't work at all unless we paste the above first and then paste each of these in turn.
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+12*(i>>2)):T[i]=g=i;c.onclick=e=>d=(h=e.x/99|0+4*(e.y>>6))-g/d*d&17&&(T[g]=T[h],T[g=h]='')
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+12*(i>>2)):T[i]=g=i;c.onclick=e=>d=(h=e.x/99|0+4*(e.y>>6))-g|d*d&17&&(T[g]=T[h],T[g=h]='')

// Let t do the looping for us?  But t is a float so needs to be floored, also needs to be modulused.  Also it takes 16 seconds to initialise!
t<16?(T[t]=g=t,c.onclick=e=>{h=e.x/99|0+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')}):t%17?x.fillText(T[t%16],t%4*17,6+12*((t%16)>>2)):c.width=90
i=((t|0)%16);t<16?(T[i]=g=i,c.onclick=e=>{h=e.x/99|0+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')}):i%100?x.fillText(T[i],i%4*17,6+12*(i>>2)):c.width=90
// Initialise in 2 seconds, by scaling
i=((t*8|0)%16);t<2?(T[i]=g=i,c.onclick=e=>{h=e.x/99|0+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]='')}):i%100?x.fillText(T[i],i%4*17,6+12*(i>>2)):c.width=90

// Alternative: init i to 0 and update it in the loop
t||(i=g=0);i?0:c.width=90;x.fillText(T[i],i%4*17,6+12*(i>>2));T[i]=T[i]||i;c.onclick=e=>{h=e.x/99|0+4*(e.y>>6);d=h-g;d*d&17&&(T[g]=T[h],T[g=h]=' ')};i=(i+1)%16

// WRONG: Use S instead of g?  Don't initialise it.  Doesn't work.
c.width=90;for(i=16;i--;)t?x.fillText(T[i],i%4*17,6+12*(i>>2)):T[i]=i;c.onclick=e=>{d=(h=e.x/99|0+4*(e.y>>6))-S;d*d&17&&(T[S]=T[h],T[S=h]='')}
