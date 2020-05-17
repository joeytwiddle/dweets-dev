x.fillRect(0,0,W=c.width=500,W);for(j=72;x.shadowBlur=j--/2;x.fillRect(150+j%9*25,99-39*(q=C(j%9/3+t)),9*q*q,50))x.fillStyle=x.shadowColor=`hsl(${30*(j%9+t)},99%,${110-j}%)`

// Failed golfs
for(j=0;j<72;j++)k=!!j,x.shadowBlur=j/2,x.fillStyle=x.shadowColor=`hsl(${30*(j%9+t)},99%,${k*110-j}%)`,x.fillRect(k*150+j%9*25,k?99-39*(q=C(j%9/3+t)):0,k?9*q*q:2e3,k?50:2e3)
for(j=73;j--;)k=j<72,x.shadowBlur=j/2,x.fillStyle=x.shadowColor=`hsl(${30*(j%9+t)},99%,${k*110-j}%)`,x.fillRect(k*150+j%9*25,k?99-39*(q=C(j%9/3+t)):0,k?9*q*q:2e3,k?50:2e3)
