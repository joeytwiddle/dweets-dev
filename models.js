// Balint's wall https://www.dwitter.net/d/10345
for(c.width|=Y=19;Y--;)for(X=99;X--;x.fillRect(999+C(a)*300,Y*10+S(a)*120,10,12))x.fillStyle=`hsl(0 ${(k=(j=Y%8>1?(X/2+t*99+(Y>>3)*4)%9:Y%8)>1)*50}%${60+C(a=X/32)*40-k*30+!k*j*40}%`
// messed up but close
for(c.width|=Y=19;Y--;)for(X=99;X--;x.fillRect(999+C(a)*300,Y*10+S(a)*120,10,12))x.fillStyle=`hsl(0 ${(k=(j=(X/2+t*99+(Y>>3)*4)%9)<2||((j=Y%8)>1))*50}%${60+C(a=X/32)*40-k*30+!k*j*40}%`

// k = is red brick
// j = how far off red brick?
(
    k=(
        j=Y%8>1
            ?(X/2+t*99+(Y>>3)*4)%9
            :Y%8
    )>1
)*50
// Failed fix
(k=(j=(X/2+t*99+(Y>>3)*4)%9)>1||(j=Y%8)>1)*50
//
r=Y%8
l=(X/2+t*99+(Y>>3)*4)%9
k=l>1&&r>1
j=r>1?l:r
// or
j=l<2?l:r
k*50
// Still not right
for(c.width|=Y=19;Y--;)for(X=99;X--;x.fillRect(999+C(a)*300,Y*10+S(a)*120,10,12))x.fillStyle=`hsl(0 ${r=Y%8,l=(X/2+t*99+(Y>>3)*4)%9,k=l>1&&r>1,j=l<2?l:r,k*50}%${60+C(a=X/32)*40-k*30+!k*j*40}%`
// One bug I know is that 0 should refer to the brick above, and 1 to the brick below, but currently both are aligned with the brick below
// We can partially address that with `r=(Y+1)%8`
for(c.width|=Y=19;Y--;)for(X=99;X--;x.fillRect(999+C(a)*300,Y*10+S(a)*120,10,12))x.fillStyle=`hsl(0 ${r=(Y+1)%8,l=(X/2+t*99+(Y>>3)*4)%9,k=l>1&&r>1,j=l<2?l:r,k*50}%${60+C(a=X/32)*40-k*30+!k*j*40}%`
