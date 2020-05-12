// Wandering hue
// This was at https://www.dwitter.net/d/11765 but I deleted it because it was very slow
for(i=2e3;i--;){H=t?H+(Math.random()-.5)/2:0
x.fillStyle=`hsla(${H},99%,50%,.5)`
x.fillRect(1920*Math.random(),1080*Math.random(),1,1)}
