// jylikangas https://dwitter.net/d/17550
c.style.filter="blur(1vh)sepia()invert(.9"
for(c.width=i=-9;++i<9;R=a=>x.lineTo(150+a*70/(z=j-t*5%1)+C(t)*20,90+(90+S(j+t*5&a|9)*40-a**4)/z))for(j=20;x.beginPath(x.stroke()),R(i),--j;R(i+1))R(i)
// My remix
for(k=150,c.width=i=-9;++i<9;R=a=>x.lineTo(k+a*k/(z=j-t%1),90+(k+S(j+t&a|9)*k-a**4)/z))for(j=40;x.beginPath(x.stroke()),R(i),--j;R(i+1))R(i)
// Random surface
for(c.width=i=-9;++i<9;R=a=>x.lineTo(k+a*k/(z=j-t%1),90+(C(j+t&a)*k-a**4)/z))for(j=k=150;x.beginPath(x.stroke()),R(i),--j;R(i+1))R(i)
// Random surface, faster
for(k=150,c.width=i=-9;++i<9;R=a=>x.lineTo(k+a*k/(z=j-t*5%1),90+(C(j+t*5&a)*k-a**4)/z))for(j=40;x.beginPath(x.stroke()),R(i),--j;R(i+1))R(i)
// Accelerating
for(c.width=i=-9;++i<9;R=a=>x.lineTo(k+a*k/(z=j-t*t%1),90+(k+C(j+t*t&a)*k-a**4)/z))for(j=k=150;x.beginPath(x.stroke()),R(i),--j;R(i+1))R(i)

// A mess
for(k=150,c.width=i=-9;i+=.5,i<9;R=a=>x[(i&1?`fill`:`clear`)+`Rect`](k+a*k/(z=j-t*5%1),90+(k+C(j+t*5&a)*k-a**4)/z,w=k/z,w))for(j=40;--j;)R(i)
for(k=150,c.width=i=-9;i+=.5,i<9;R=a=>x[`${i&1?`fill`:`clear`}Rect`](k+a*k/(z=j-t*5%1),90+(k+C(j+t*5&a)*k-a**4)/z,w=k/z,w))for(j=40;--j;)R(i)
