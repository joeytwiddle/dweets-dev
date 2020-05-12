// Nodes are T[0..63] with 62 and 63 being the inputs
// Weights are S[0..4096]
//
// Edit: I was initially a bit overconfident thinking that 100*100*factorial(64) would complete in one frame!
//
//       I later reduced this from 64 to 8.
//
//       Shouts out to balint for the loopbuster.
//
for(X=99;X--;)for(Y=99;Y--;){T[63]=[X],T[62]=[Y]
for(i=62;v=0,i--;T[i]=v)for(j=64;j-->i)w=64*j+i,S[w]=S[w]||Math.random(),v+=S[w]*T[j]
x.fillStyle=R(T[0],T[0],T[0]),x.fillRect(X,Y,1,1)}
//
for(X=99;X--;)for(Y=99;Y--;){T[31]=[X],T[30]=[Y]
for(i=30;v=0,i--;T[i]=v)for(j=32;j-->i;)w=32*j+i,S[w]=S[w]||Math.random(),v+=S[w]*T[j]
x.fillStyle=R(T[0],T[0],T[0]),x.fillRect(X,Y,1,1)}
// It keeps crashing.  Why?  It is the loopbuster?
//
// Edit: Yes, yes it is.
//
for(X=99;X--;)for(Y=99;Y--;){T[15]=X,T[14]=Y
for(i=14;i--;T[i]=v)for(j=16,v=0;j-->i*2;){w=16*j+i,S[w]=S[w]||Math.random();v+=S[w]*T[j];}
x.fillRect(X,Y,T[0],T[0]);throw ''+T[4]}
// First version which runs
// It runs so slowly.  Why?
//
// Edit: Because factorial(7) is still pretty large
//
c.width|=S=[];if(t>2)return
for(X=99;X--;)for(Y=99;Y--;){T[9]=X,T[8]=Y
for(i=7;i--;T[i]=v)for(v=0,j=10;--j>i;){w=9*j+i,S[w]=S[w]||(Math.random()-.5);v+=S[w]*T[j]/9;if(X==98&&Y<3)console.log(X,Y,i,j,w,S[w],v)}x.fillRect(9*X,9*Y,T[0],T[0])}
// We can see it changing
c.width|=0;if(t>5)return;if(t===0)S=[]
for(X=99;X--;)for(Y=99;Y--;){T[9]=X,T[8]=Y,T[7]=199*C(t)
for(i=7;i--;T[i]=v)for(v=0,j=10;--j>i;){w=9*j+i,S[w]=S[w]||(Math.random()-.5);v+=S[w]*T[j]/9;if(X==98&&Y<-3)console.log(X,Y,i,j,w,S[w],v)}x.fillRect(9*X,9*Y,T[0],T[0])}
//
c.width|=0;if(t>5)return;if(t===0)S=Math.sin
for(X=99;X--;)for(Y=99;Y--;){T[9]=X,T[8]=Y,T[7]=199*C(t)
for(i=7;i--;T[i]=9*S(v))for(v=0,j=10;--j>i;){w=9*j+i,S[w]=S[w]||(Math.random()-.5);v+=S[w]*T[j]/9;if(X==98&&Y<-3)console.log(X,Y,i,j,w,S[w],v)}x.fillRect(9*X,9*Y,T[0],T[0])}
//
c.width|=0;if(t>5)return;if(t===0)S=Math.sin
for(X=99;X--;)for(Y=99;Y--;){T[7]=X,T[6]=Y,T[5]=99*S(t)
for(i=5;i--;T[i]=i%2?9*C(v):9*S(v))for(v=0,j=8;--j>i;){w=9*j+i,S[w]=S[w]||(Math.random()-.5);v+=S[w]*T[j]/9;if(X==98&&Y<-3)console.log(X,Y,i,j,w,S[w],v)}x.fillRect(9*X,9*Y,T[0],T[0])}
//
c.width|=0;if(t>5)return;if(t===0)S=Math.sin
for(X=99;X--;)for(Y=99;Y--;){T[7]=X,T[6]=Y,T[5]=99*S(t)
for(i=5;i--;T[i]=i%2?C(v):S(v))for(v=0,j=8;--j>i;){w=9*j+i,S[w]=S[w]||(Math.random()-.5);v+=S[w]*T[j]}x.fillRect(9*X,9*Y,s=9*T[0],s)}
//
c.width|=0;if(t>5)return;if(t===0)Q=[]
for(X=99;X--;)for(Y=99;Y--;){T[7]=X,T[6]=Y,T[5]=99*S(t)
for(i=5;i--;T[i]=i%2?C(v):S(v))for(v=0,j=8;--j>i;){w=9*j+i,Q[w]=Q[w]||Math.random()-.5;v+=Q[w]*T[j]}x.fillRect(9*X,9*Y,s=9*T[0],s)}
//
c.width|=0;if(t>5)return;if(t===0)Q=[]
for(X=99;X--;)for(Y=99;T[7]=X,T[6]=Y,T[5]=99*S(t),Y--;){
for(i=5;i--;T[i]=S(v))for(v=0,j=8;--j>i;){w=9*i+j,Q[w]=Q[w]||Math.random()-.5;v+=Q[w]*T[j]}x.fillRect(9*X,9*Y,s=9*T[0],s)}
//
c.width=192;if(t>5)return;if(t===0)Q=[]
for(X=99;X--;)for(Y=99;T[7]=X,T[6]=Y,T[5]=99*S(t),Y--;)
for(i=5;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=0,j=8;--j>i;)w=9*i+j,Q[w]=Q[w]||Math.random()-.5,v+=Q[w]*T[j]
//
c.width=192;t||(Q=[])
for(X=99;X--;)for(Y=99;T[7]=X,T[6]=Y,T[5]=99*t,Y--;)
for(i=5;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=0,j=8;--j>i;)w=9*i+j,Q[w]=Q[w]||Math.random()-.5,v+=Q[w]*T[j]
// 183 A poor man's zzart
c.width=192;for(X=99;X--;)for(Y=99;T[7]=X,T[6]=Y,T[5]=99*t||(Q=[]),Y--;)for(i=5;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=0,j=8;--j>i;)w=9*i+j,Q[w]=Q[w]||Math.random(),v+=Q[w]*T[j]
// We can actually drop the C=[] reset and spend the chars on something else
// That would give us 9 chars to play with!
t||(C=[])
c.width=192;for(X=99;X--;)for(Y=99;T[7]=X,T[6]=Y,T[5]=99*t,Y--;)for(i=5;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=0,j=8;--j>i;)w=9*i+j,C[w]=C[w]||Math.random(),v+=C[w]*T[j]
// (ASIDE) Instead of Math.random() we could use w...?
t||(C=[])
c.width=192;for(X=99;X--;)for(Y=99;T[7]=X,T[6]=Y,T[5]=99*t,Y--;)for(i=5;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=0,j=8;--j>i;)w=9*i+j,C[w]=C[w]||w/7,v+=C[w]*T[j]
// We can golf v=j=i and keep the reset in for 183
t||(C=[]);c.width=192;for(X=99;X--;)for(Y=99;T[7]=X,T[6]=Y,T[5]=99*t,Y--;)for(i=5;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=j=i;j++<7;)w=9*i+j,C[w]=C[w]||Math.random(),v+=C[w]*T[j]
// Instead of animating by t, we could focus on regenerating new NNs
for(w=99;w--;)C[w]=Math.random()
c.width=192;for(X=99;X--;)for(Y=99;T[7]=X,T[6]=Y,Y--;)for(i=6;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=j=i;j++<7;)w=9*i+j,v+=C[w]*T[j]
//for(w=99;w--;)C[w]=t*Math.random()
for(c.width=w=99;w--;)C[w]=t*w%1;for(X=50;X--;)for(Y=50;T[7]=X,T[6]=Y,Y--;)for(i=6;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=j=i;j++<7;v+=C[w]*T[j])w=9*i+j
// We can inline C[w] since it's generated
for(x.width=84,X=50;X--;)for(Y=50;T[7]=X,T[6]=Y,Y--;)for(i=6;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=j=i;j++<7;v+=(t*w%1)*T[j])w=9*i+j
// Inline w
for(c.width=X=84;X--;)for(Y=50;T[7]=X,T[6]=Y,Y--;)for(i=6;x.fillRect(X,Y,s=T[0],s),i--;T[i]=S(v))for(v=j=i;j++<7;v+=(t*(i+j)%1)*T[j]);
for(c.width=X=84;X--;)for(Y=50;T[7]=X,T[6]=Y,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;v+=(t*(l+n)%1)*T[n]);
// (ASIDE) Just adding colour for fun
for(c.width=X=84;X--;)for(Y=50;T[7]=X,T[6]=Y,Y--;)for(l=6;x.fillStyle=R(255*T[1],255*T[2],255*T[3]),x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;v+=(t*(l+n)%1)*T[n]);
// Back to previous
for(c.width=X=84;X--;)for(Y=50;T[7]=X,T[6]=Y,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;v+=(t*(l+n)%1)*T[n]);
// Different weights generator
for(c.width=X=84;X--;)for(Y=50;T[7]=X,T[6]=Y,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;v+=(t*(7*l+n)%1)*T[n]);
// It looks better if we scale X,Y
for(c.width=X=84;X--;)for(Y=50;T[7]=X/4,T[6]=Y/4,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=(t*(7*l+n)%1)*T[n]
// === FAVOURITE === Cleanup
for(c.width=X=84;X--;)for(Y=50;T[7]=X/4,T[6]=Y/4,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=t*(l+n)/5%1*T[n]
// Tweaked
for(c.width=X=84;X--;)for(Y=50;T[7]=X/4,T[6]=Y/4,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=t/3*(l+n)%1*T[n]
// Alt 1
for(c.width=X=84;X--;)for(Y=50;T[7]=X/4,T[6]=Y/4,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=S(t*l+n)*T[n]
// Alt 2
for(c.width=X=84;X--;)for(Y=50;T[7]=X/3,T[6]=Y/3,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=S(l+t*n)*T[n]
// Alt 3
for(c.width=X=84;X--;)for(Y=50;T[7]=X/3,T[6]=Y/3,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=C(l*t+t*n)*T[n]
// Take cleanup, remove two layers, make it faster and then smoother
for(c.width=X=84;X--;)for(Y=50;T[5]=X/4,T[4]=Y/4,Y--;)for(l=4;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<5;)v+=t*(l+n/5)%1*T[n]
// I tried removing one more layer but it lost a lot of its detail
// Expand back to 6 layers (not dividing l, makes it too fast)
for(c.width=X=84;X--;)for(Y=50;T[6]=X/3,T[5]=Y/3,Y--;)for(l=5;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<6;)v+=t*(l+n/5)%1*T[n]
// === FAVOURITE === Original 7 layers, but reduced resolution to speed up
for(c.width=X=55;X--;)for(Y=34;T[7]=X/3,T[6]=Y/3,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=t*(l+n)/7%1*T[n]
// Fix the weights and use t as input
for(c.width=X=55;X--;)for(Y=34;T[7]=X/3,T[6]=Y/3,T[5]=t*9,Y--;)for(l=5;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=(l+n)/5%1*T[n]

// Published: https://www.dwitter.net/d/16668
// Dweet dream: a sort of 7-layer neural network
// A poor man's zzArt.  A redux of https://joeytwiddle.github.io/nn-images/
// Node values are held in T, with T[6,7] being the input nodes
// Each "layer" has just one output T[l] formed from all the previous nodes T[l+1..7]
// Instead of randomly generating and storing weights, we use `t*(7*l+n)%1`
// Other weights you can try: `v+=S(t*l+n)*T[n]` or `v+=S(l+t*n)*T[n]`
//
// For random weights each frame, put `W={};` at the start and `v+=(W[k=l*7+n]=W[k]||Math.random())*T[n]` at the end

// f8f82804 did a remix: https://www.dwitter.net/d/16672
// By keeping his looping but dropping his globalAlpha, we can get down to 131
// Although that reintroduces the problem with the last line which he had fixed.  (I had previously mitigated that by nudging it off-screen!)
c.width=32;for(i=512;T[7]=i--/99;x.fillRect(i>>4,Y,s=T[0],s))for(T[l=6]=(Y=i&15)/7;l--;T[l]=S(v))for(v=n=l;n++<7;)v+=S(t*l-n)*T[n]
// With colour
c.width=32;for(i=512;T[7]=i--/99;x.fillStyle=R(i*T[0],i*T[1],i*T[2]),x.fillRect(i>>4,Y,1,1))for(T[l=6]=(Y=i&15)/7;l--;T[l]=S(v))for(v=n=l;n++<7;)v+=S(t*l-n)*T[n]
// Another remix based off f8f82804's
c.width=48;for(i=1400;T[7]=i--/60;x.fillRect(i/28,Y,s=T[0],s))for(T[l=6]=(Y=i%28)/3;l--;T[l]=S(v))for(v=n=l;n++<7;)v+=t*(l-n)/17%1*T[n]
// With colour
t+=2;c.width=48;p=255;for(i=1400;T[7]=i--/60;x.fillStyle=R(p*T[0],p*T[1],p*T[2]),x.fillRect(i/28,Y,1,1))for(T[l=6]=(Y=i%28)/3;l--;T[l]=S(v))for(v=n=l;n++<7;)v+=t*(l-n)/7%1*T[n]

// Chaotic black+white
for(c.width=X=55;X--;)for(Y=34;T[7]=X/3,T[6]=Y/3,Y--;)for(l=6;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=S(t*(l+n)/7%9)*T[n]

// Forking the favourite.  We can assign l inside T[..] to save some chars
for(c.width=X=55;X--;)for(Y=34;Y--;)for(T[7]=X/3,T[l=6]=Y/3;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=t*(l+n)/7%1*T[n]
// Or for development, using `--l` we can easily tweak the number of layers.  Note that 6 or 5 layers looks fairly good too, just a few details missing.
for(c.width=X=55;X--;)for(Y=34;Y--;)for(T[l=7]=X/3,T[--l]=Y/3;x.fillRect(X,Y,s=T[0],s),l--;T[l]=S(v))for(v=n=l;n++<7;)v+=t*(l+n)/7%1*T[n]

// We can reverse the for loops, making T easier to initialise, and save many chars (similar output, but now more white than black)
// It seems to run slightly faster, have I missed an iteration?  Try changing the two 7s to 8s.
for(c.width=X=55;X--;)for(Y=34;Y--;)for(T=[X/3,Y/3],l=1;x.fillRect(X,Y,s=T[7],s),l++<7;T[l]=S(v))for(v=n=l;n--;)v+=t*(l+n)/7%1*T[n]
// With a continuous function
for(c.width=X=55;X--;)for(Y=34;Y--;)for(T=[X/3,Y/3],l=1;x.fillRect(X,Y,s=T[8],s),l++<8;T[l]=S(v))for(v=n=l;n--;)v+=C(t*(l+n)/2)*T[n]
// Funky plasma-like
for(c.width=X=55;X--;)for(Y=34;Y--;)for(T=[X/3,Y/3],l=1;x.fillRect(X,Y,s=T[8],s),l++<8;T[l]=S(v))for(v=n=l;n--;)v+=S(n*l+t)*T[n]
// === GOOD === Same algorithm but golfed.  Is this what thinking looks like?
for(c.width=X=55;X--;)for(Y=34;Y--;)for(T=[X/3,Y/3],l=1;x.fillRect(X,Y,s=T[8],s),l++<8;T[l]=S(v))for(v=n=l;n--;)v+=C(l+t*n)*T[n]

// Instead of two loops, use div and mod
for(c.width=55,i=1760;i--;)for(T=[i%55/3,(i/55|0)/3],l=1;x.fillRect(i%55,i/55|0,s=T[8],s),l++<8;T[l]=S(v))for(v=n=l;n--;)v+=C(l+t*n)*T[n]
// Cheat (may appear fuzzy in the middle)
for(c.width=55,i=1760;i--;)for(T=[i%55/3,i/165],l=1;x.fillRect(i%55,i/55,s=T[8],s),l++<8;T[l]=S(v))for(v=n=l;n--;)v+=C(l+t*n)*T[n]
// Change the two 8s to 6s for a nice smooth ride, or to 9s for extra complexity
for(c.width=55,i=1760;i--;)for(T=[i%55/4,i/165],l=1;x.fillRect(i%55,i/55,s=T[6],s),l++<6;T[l]=S(v))for(v=n=l;n--;)v+=C(l+t*n)*T[n]
