// Barcode
r=Math.random;if(t%1<.01){c.width=400
for(i=20,X=100;i--;X+=w+4)w=4+10*r(),x.fillRect(X,10,w,140)
S=Object.keys(this),x.fillText(S[r()*S.length|0],170,180)}
// Smaller canvas
r=Math.random;if(t%1<.01){c.width=200
for(i=19,X=40;i--;X+=w+2)w=2+5*r(),x.fillRect(X,5,w,70)
S=Object.keys(this),x.fillText(S[r()*S.length|0],80,90)}
// Golfing
r=Math.random;if(r()<.1){c.width=200
for(i=19,X=40;i--;X+=w+2)w=2+5*r(),x.fillRect(X,5,w,70)
S=Object.keys(this),x.fillText(S[r()*S.length|0],80,90)}
// Golfing (I feel sad about 199 but good about the |0)
r=Math.random;if(r()<.1){c.width=200
for(i=19,X=40;i--;X+=w+2)w=1+6*r()|0,x.fillRect(X,5,w,70)
S=Object.keys(this),x.fillText(S[r()*199|0],70,90)}
//
r=Math.random;if(r()<.1){c.width=99
for(i=X=20;i--;X+=w)x.fillRect(X++,5,w=1+3*r()|0,35)
S=Object.keys(this),x.fillText(S[r()*215|0],20,50)}
//
r=Math.random;if(r()<.05){c.width=99
for(i=X=20;i--;X+=w)x.fillRect(X++,5,w=1+3*r()|0,35)
x.fillText(Object.keys(this)[r()*215|0],20,50)}
//
r=Math.random;if(r()<.05){c.width=199
for(i=X=20;i--;X+=w)x.fillRect(X+=2,5,w=2+7*r()|0,80)
x.fillText(Object.keys(this)[r()*215|0],22,99)}
// Set initial X different from i, but use it for text too
r=Math.random;if(r()<.05){c.width=199
x.fillText(Object.keys(this)[r()*215|0],X=24,99)
for(i=22;i--;X+=w)x.fillRect(X+=2,5,w=2+6*r()|0,80)}
// === RELEASED === https://www.dwitter.net/d/3598
r=Math.random;if(r()<.04){c.width=199
for(i=X=25;i--;X+=w)x.fillRect(X+=2,9,w=1+6*r()|0,78)
x.fillText(Object.keys(this)[r()*215|0],27,99)}
// Golfed 1 char
r=Math.random;if(r()<.04){c.width=199
for(i=X=25;i--;X+=2+w)x.fillRect(X,9,w=1+6*r()|0,78)
x.fillText(Object.keys(this)[r()*215|0],27,99)}

// A stochastic approach
r=Math.random;if(r()<.04){c.width=199
for(i=148,X=25;i--;X++)r()<.6&&x.fillRect(X,9,1,78)
x.fillText(Object.keys(this)[r()*215|0],27,99)}
// Enforce three black blocks (but does not enforce white next to them)
r=Math.random;if(r()<.04){c.width=199
for(i=148,X=25;i--;X++)(r()<.6||(i%70)<9)&&x.fillRect(X,9,1,78)
x.fillText(Object.keys(this)[r()*215|0],27,99)}
// This does enforce white gaps on either side of the bars, but it's costly
r=Math.random;if(r()<.04){c.width=199
for(i=148,X=25;i--;X++)(k=i%70,k>9&&r()<.6||k>1&&k<9)&&x.fillRect(X,9,1,78)
x.fillText(Object.keys(this)[r()*215|0],27,99)}

// Shorter version of first stochastic above
r=Math.random;if(t%1<.01){c.width=199
for(i=X=25;X<170;X++)r()<.6&&x.fillRect(X,9,1,78)
x.fillText(Object.keys(this)[r()*215|0],27,99)}
// With three bars
r=Math.random;if(t%1<.01){c.width=250
for(i=X=48;X<192;X++)r()<.5||(X|48)==X?x.fillRect(X,9,1,78):0
x.fillText(Object.keys(this)[r()*215|0],49,99)}
// Three bars (thinner)
r=Math.random;if(t%1<.01){c.width=250
for(i=X=56;X<192;X++)r()<.6||X==(X|56)?x.fillRect(X,9,1,78):0
x.fillText(Object.keys(this)[r()*215|0],56,99)}

// 155 Unfinished: form the code from the string
if(t%1<.01){c.width=199
x.fillText(T=Object.keys(this)[t*9%215|0],27,99)
for(i=148,X=25;i--;X++)(k=i%70,k>9&&T[i/9|0]<'m'||k>1&&k<9)&&x.fillRect(X,9,1,78)}

// Trying to add bars again
r=Math.random;if(t%2<.6){c.width=256
for(i=X=56;X<176;X++)(r()<.6||(X&40)==40)&&x.fillRect(X,9,1,78)
x.fillText(Object.keys(this)[r()*215|0],27,99)}
// Gaps on both sides.  Needs rescaling
r=Math.random;if(t%2<.6){c.width=256
for(i=X=56;X<176;X++)k=X%40,(k>15&&r()<.6||k>3&&k<12)&&x.fillRect(X,9,1,78)
x.fillText(Object.keys(this)[r()*215|0],27,99)}
