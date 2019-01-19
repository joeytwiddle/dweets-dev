// Network of dots (Voronotsomuch) similar to particles.js
c.width|=0
for(i=99;i--;)r=17*i%1e3,a=t*(i/9%5),T[i]=[960+r*C(a),540+r*S(a)]
for(i=99;i--;)x.fillRect(T[i][0],T[i][1],5,5)
// Working but large
c.width|=0
for(i=29;i--;)r=3e5*i**.1/7%1e3,a=t*(77/i%4-2),T[i]=[960+r*C(a),540+r*S(a)]
for(i=29;i--;)for(j=29;j--;)((T[i][0]-T[j][0])**2+(T[i][1]-T[j][1])**2<1e5)?x.beginPath()|x.moveTo(T[i][0],T[i][1])|x.lineTo(T[j][0],T[j][1])|x.stroke():0,x.fillRect(T[i][0],T[i][1],9,9)
//
c.width|=0
for(i=32;i--;)r=(i/7%1)**.7*1e3,a=t*(77/i%4-2),T[i]=[960+r*C(a),540+r*S(a)]
for(i=32;i--;)for(j=32;j--;)((T[i][0]-T[j][0])**2+(T[i][1]-T[j][1])**2<1e5)?x.beginPath()|x.moveTo(T[i][0],T[i][1])|x.lineTo(T[j][0],T[j][1])|x.stroke():0,x.fillRect(T[i][0],T[i][1],9,9)
//
c.width|=0
for(i=32;i--;)r=(i/7%1)**.7*1e3,a=t*(5e7/i%2-1)*3/i**.5,T[i]=[960+r*C(a),540+r*S(a)]
for(i=32;i--;)for(j=32;j--;)d=((T[i][0]-T[j][0])**2+(T[i][1]-T[j][1])**2)/2e5,d<1?(x.globalAlpha=1-d)|x.beginPath()|x.moveTo(T[i][0],T[i][1])|x.lineTo(T[j][0],T[j][1])|x.stroke():0,x.fillRect(T[i][0],T[i][1],9,9)
//
c.width|=0
for(i=32;i--;)r=(i/7%1)**.7*1.2e3,a=t*(5e7/i%5-2)/i**.5,T[i]=[960+r*C(a),540+r*S(a)]
for(i=32;i--;)for(j=32;j--;)d=((T[i][0]-T[j][0])**2+(T[i][1]-T[j][1])**2)/2e5,d<1?(x.globalAlpha=1-d)|x.beginPath()|x.moveTo(T[i][0],T[i][1])|x.lineTo(T[j][0],T[j][1])|x.stroke():0,x.fillRect(T[i][0],T[i][1],9,9)
//
c.width|=0;for(i=32;i--;){r=(i/7%1)**.7*1.2e3,a=t*(5e7/i%5-2)/i**.5,T[i]=[960+r*C(a),540+r*S(a)];for(j=i;j--;)d=((T[i][0]-T[j][0])**2+(T[i][1]-T[j][1])**2)/2e5,d<1?(x.lineWidth=1-d)|x.beginPath()|x.moveTo(T[i][0],T[i][1])|x.lineTo(T[j][0],T[j][1])|x.stroke():0,x.fillRect(T[i][0],T[i][1],9,9)}
//
c.width|=0;for(i=32;i--;){T[i]=[((i*i%99-50)*5*t&2047)-64,((i**3%99-50)*6*t&2047)-484];for(j=i;j--;)d=((T[i][0]-T[j][0])**2+(T[i][1]-T[j][1])**2)/2e5,d<1?(x.lineWidth=1-d)|x.beginPath()|x.moveTo(T[i][0],T[i][1])|x.lineTo(T[j][0],T[j][1])|x.stroke():0/*,x.fillRect(T[i][0],T[i][1],9,9)*/}
//
c.width|=0
for(i=64;i-=2;){T[i]=((i*i%99-50)*5*t&2047)-64,T[i+1]=((i**3%99-50)*6*t&2047)-484
/*x.fillRect(T[i],T[i+1],9,9)*/
for(j=i;j-=2;)d=((T[i]-T[j])**2+(T[i+1]-T[j+1])**2)/2e5,d<1?(x.lineWidth=1-d)|x.beginPath()|x.moveTo(T[i],T[i+1])|x.lineTo(T[j],T[j+1])|x.stroke():0}
//
c.width|=300
for(i=64;i-=2;){T[i]=((i*i%99-50)*6*t&2047)-64,T[i+1]=((i**3%99-50)*5*t&2047)-484
x.fillRect(T[i],T[i+1],9,9)
for(j=i;j-=2;)d=((T[i]-T[j])**2+(T[i+1]-T[j+1])**2)/2e5,d<1?(x.lineWidth=1-d)|x.beginPath()|x.moveTo(T[i],T[i+1])|x.lineTo(T[j],T[j+1])|x.stroke():0}
// Low-res (make lines appear thicker)
c.width=300,t+=9
for(i=64;i-=2;){T[i]=((i*i%99-50)*t&511)-99,T[i+1]=((i**3%99-50)*t&511)-99
x.fillRect(T[i],T[i+1],4,4)
for(j=i;j-=2;)d=((T[i]-T[j])**2+(T[i+1]-T[j+1])**2)/1e4,d<1?(x.lineWidth=1-d)|x.beginPath()|x.moveTo(T[i],T[i+1])|x.lineTo(T[j],T[j+1])|x.stroke():0}
// High-res, thicker lines
c.width|=300
for(i=64;i-=2;){T[i]=((i*i%99-50)*6*t&2047)-64,T[i+1]=((i**3%99-50)*5*t&2047)-484
x.fillRect(T[i],T[i+1],9,9)
for(j=i;j-=2;)d=((T[i]-T[j])**2+(T[i+1]-T[j+1])**2)/4e4,d<5?(x.lineWidth=5-d)|x.beginPath()|x.moveTo(T[i],T[i+1])|x.lineTo(T[j],T[j+1])|x.stroke():0}
// With dots instead of squares
c.width|=300
for(i=64;i-=2;){T[i]=((i*i%99-50)*6*t&2047)-64,T[i+1]=((i**3%99-50)*5*t&2047)-484
x.beginPath(),x.arc(T[i],T[i+1],9,0,7),x.fill()
for(j=i;j-=2;)d=((T[i]-T[j])**2+(T[i+1]-T[j+1])**2)/4e4,d<5?(x.lineWidth=5-d)|x.beginPath()|x.moveTo(T[i],T[i+1])|x.lineTo(T[j],T[j+1])|x.stroke():0}
//
c.width|=300
r=()=>8*Math.random()-4
for(i=64;i-=2;){
S[i]=S[i]||r()
C[i]=C[i]||r()
T[i]=(S[i]*t&2047)-64,T[i+1]=(C[i]*t&2047)-484
x.beginPath(),x.arc(T[i],T[i+1],9,0,7),x.fill()
for(j=i;j-=2;)d=((T[i]-T[j])**2+(T[i+1]-T[j+1])**2)/4e4,d<5?(x.lineWidth=5-d)|x.beginPath()|x.moveTo(T[i],T[i+1])|x.lineTo(T[j],T[j+1])|x.stroke():0}
//
t?0:(S={},C={})/*only needed for dev*/
c.width|=300,t+=999
r=()=>98*Math.random()-49
for(i=64;i-=2;){
S[i]=S[i]||r()
C[i]=C[i]||r()
T[i]=(S[i]*t&2047)-64,T[i+1]=(C[i]*t&2047)-484
x.beginPath(),x.arc(T[i],T[i+1],9,0,7),x.fill()
for(j=i;j-=2;)d=((T[i]-T[j])**2+(T[i+1]-T[j+1])**2)/4e4,d<5?(x.lineWidth=5-d)|x.beginPath()|x.moveTo(T[i],T[i+1])|x.lineTo(T[j],T[j+1])|x.stroke():0}

// Too late, yonatan did it!  https://www.dwitter.net/d/9105
