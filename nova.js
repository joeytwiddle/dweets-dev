x.font='320px s';x.fillText('NOVA',200,500);x.transform(1,0,0,1.02,0,-8);x.globalAlpha*=.9

// rainbow loud
x.font='480px s';x.fillText('NOVA',260,700);x.transform(1,0,0,1.02,0,-10);x.globalAlpha*=.9;x.fillStyle=`hsl(${888*t},99%,50%`
// rainbow subtle
x.font='480px s';x.fillText('NOVA',260,700);x.transform(1,0,0,1.02,0,-10);x.globalAlpha*=.9;x.fillStyle=`hsl(${888*t},50%,50%`
x.font='480px s';x.fillText('NOVA',260,700);x.transform(1,0,0,1.02,0,-10);x.fillStyle=`hsla(${888*t},50%,50%,${.001**t}`
// 3d rainbow
x.font='480px s';x.fillText('NOVA',260,700);x.transform(1.01,0,0,1.02,-8,-10);x.fillStyle=`hsla(${888*t},50%,50%,${.001**t}`

// greyscale
x.font='480px s';x.fillText('NOVA',260,700);x.transform(1,0,0,1.02,0,-10);x.globalAlpha=.2**(t+2)
x.font='480px s';x.fillText('NOVA',260,700);x.transform(1,0,0,1.01,0,-5);x.globalAlpha=.2**(t+2)

// fade curve
x.fillStyle=R(255,255,255,0.1);x.fillRect(0,0,2e3,1e3);x.fillStyle='black';x.font='480px s';x.fillText('NOVA',260,700);x.drawImage(c,9*S(t),9*C(t))

// wavy trail
x.fillStyle=R(255,255,255,0.1);x.fillRect(0,0,2e3,1e3);x.fillStyle='black';x.font='480px s';x.fillText('NOVA',260,700);x.drawImage(c,9*S(3*t),9)
// golfed
x.fillStyle=R(k=260,k,k,.1);x.fillRect(0,0,2e3,1e3);x.fillStyle='#000';x.font='480px s';x.fillText('NOVA',k,700);x.drawImage(c,9*S(t),7)

// pulsing
h=2e3;x.fillStyle=R(0,0,0,0.1);x.fillRect(0,0,2e3,1e3);x.fillStyle=`hsl(${99*t},99%,${25+25*C(9*t)}%`;x.font='480px s';x.fillText('NOVA',260,700);x.drawImage(c,9*S(3*t),9)

// wavy
t||(k=c.cloneNode(),y=k.getContext('2d'),y.font='480px s',y.fillText('NOVA',260,700))
c.width|=0
for(i=0;i<2e3;i+=20)for(j=0;j<1e3;j+=20)x.drawImage(k,i+55*S(9*t+i/99),j+55*C(9*t+i/99),20,20,i,j,20,20)

// wavy from small
t||(k=c.cloneNode(),y=k.getContext('2d'),y.fillText('NOVA',10,70))
c.width|=0
for(i=0;i<99;i+=2)for(j=0;j<99;j+=2)x.drawImage(k,i+5*S(9*t+i/9),j+5*C(9*t+i/9),2,2,i*10,j*10,20,20)
