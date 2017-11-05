// Javascript sort visualiser https://www.dwitter.net/d/3420 and predecessors
t?0:M=[];for(f=w=62,i=500;i--;)M[i]=x.fillRect(w*(i>>4),w*(i%16),w,w,x.fillStyle=R(e=M[i]))||t?f&&e>(z=M[i+1])?(M[f--,i+1]=e,z):e:i**6%256
for(f=w=t?64:M=[],i=500;i--;)M[x.fillRect(w*(i>>4),i%16*w,w,w,x.fillStyle=R(e=M[i])),i]=f&&e>(z=M[i+1])?(M[f--,i+1]=e,z):e||Math.random()*i
for(w=t?64:N=[],i=500;i--;)t?x.fillRect(w*(i>>4),i%16*w,w,w,x.fillStyle=R(M[i])):N[i]=Date.now()%i;M=N.slice(0).sort((a,b)=>i++>t*1e3?0:a-b)

// Capture camera
t?v&&x.drawImage(v,0,0):navigator.mediaDevices.getUserMedia().then(e=>(v=document.createElement`video`).srcObject=e)
// Stretch it over the full screen
t?v&&x.drawImage(v,0,0,1920,1080):navigator.mediaDevices.getUserMedia().then(e=>(v=document.createElement`video`).srcObject=e)

// Squidgy mirror?  https://www.dwitter.net/d/3427
t?x.drawImage(c,50*S(t*2),g=t*100%600,h=600,h,0,g,h,h):navigator.getUserMedia({video:1},e=>(c=document.createElement`video`).srcObject=e,S)

// An stretched starfield (like Defender, or warp) using LCARS-like colours: https://www.dwitter.net/d/1783
w=c.width+=0;x.fillRect(0,0,w,w);for(i=0;i<1000;i+=3)x.fillStyle='#a'+(~~(i*99)%0xff),x.fillRect(w+(t*(-S(i)+C(i))*5e3)%w,i,200/S(i),3)

// Mandelbrot zoom!  https://www.dwitter.net/d/1735

