// Frank's originals
// https://www.dwitter.net/d/18610
for(k=i=960;--i;x.fill(x.arc(k+i+S(m=i+t*k/4)*(r=(S(t+m/k)*.5+1.4)*1e5/i),540+C(m)*r,s=4e4/i,0,7,(m=i-t*k|0)%59||x.arc(k+i+S(m=m**5)*r/3,540+C(m)*r/2,s=r/9,0,7))))x.beginPath(x.fillStyle=R(i/4))
// With lighting https://www.dwitter.net/d/18625
for(k=i=960;--i;i%2?(m|=0)%(f=399)||x.arc(k+S(m%=4)*r/3,f+i+C(m)*r/3,r/9,0,7):x.arc(k+S(i)*(r=1e5/i),f+i+C(i)*r,r/2,0,7),x.fill())x.beginPath(x.fillStyle=R(v=i%2*k-C((m=i+t*k/2)/127)*9+i/3,v*3))
// Redux https://www.dwitter.net/d/18633
for(k=i=600;--i;x[f='fillRect'](k-i+S(i)*(r=1e5/i),k+C(i)*r,r/=2,r))x.fillStyle=R(i%2|(m=i+t*k)%7||x[f](k-i+S(m*=m)*r,k+C(m)*r,r/=9,r),i/2)

// I wanted the original red circles, but reduxed to 140.  Here's what I tried:
// These perform poorly in Firefox but absolutely terrible in Chrome
// My remix 1
for(k=i=600;--i;)m=i+t*k,s=i%5,r=(s?1e5:3e4)/i,x.fillStyle=R(i/2),x.font=`${r/25}em'`,x.fillText(s?'⬤':'⬬',k-i+S(s?i:(m*=m))*r,k+C(s?i:m)*r)
// My remix 2
for(k=i=300;--i;)m=i-t*k,s=i%5,r=(s?5e4:1e4)/i,x.fillStyle=R(i),x.font=`${r/25}em'`,x.fillText(s?'⬤':'⬬',2*k-2*i+S(s?i:m*m)*r,k+C(s?i:m)*r)

// But in the end Frank's did it!  https://www.dwitter.net/d/18638
with(x)for(k=i=700;--i;m=i+t*k/2|0,fill(arc(k-i+(r=(S(t*4+m/k)/2+1)*(m%39?1e5:3e4)/i)*S(m*=m),k+C(m)*r,r/2,0,7)))beginPath(fillStyle=R(i/2))

// pavel also did one https://www.dwitter.net/d/18639
with(x)for(k=i=999;--i;beginPath(fill(arc(k+i+r*C(a=i%2?i+240*t:(i-k*t>>5)**5),540+r*S(a),r/5,0,7))))fillStyle=R(i/4),r=(S(t)/2+1+i%2)*7e4/i

// My redux of Frank's redux (remove the pulsing)
with(x)for(k=i=700;--i;m=i-t*k/2|0,fill(arc(k+i+(r=(S(m/k)+2)*(m%39?5e4:5e3)/i)*S(m*=m),k-C(m)*r,r/2,0,7)))beginPath(fillStyle=R(i/2))
// Remove the motion of the walls (glitches due to m%39 at different i!)
with(x)for(k=i=700;--i;m=i-t*k/2|0,n=m%39?i:m,fill(arc(k+i+(r=(S(n/k)+2)*(m%39?5e4:5e3)/i)*S(n*=n),k-C(n)*r,r/2,0,7)))beginPath(fillStyle=R(i/2))
// Reverse the motion of the walls (similar glitches)
with(x)for(k=i=700;--i;m=i-t*k/2|0,n=m%39?i+t*k/2|0:m,fill(arc(k+i+(r=(S(n/k)+2)*(m%39?5e4:5e3)/i)*S(n*=n),k-C(n)*r,r/2,0,7)))beginPath(fillStyle=R(i/2))
// I should study further
// All I would really want to achieve is to make Frank's wall move more slowly than the cells, or static, or best of all make the cells move more quickly when the walls are compressed
// Make the cells flow faster when the walls are constricted
with(x)for(k=i=700;--i;m=i+t*k/2|0,fill(arc(k-i+(r=((m%39?S:C)(t*4+m/k)/2+1)*(m%39?1e5:1e4)/i)*S(m*=m),k+C(m)*r,r/2,0,7)))beginPath(fillStyle=R(i/2))
