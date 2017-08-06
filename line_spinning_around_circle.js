W=1000;H=500
//x.fillStyle='#000';x.fillRect(0,0,2*W,2*H)
x.strokeStyle=`hsl(${0*t},99%,50%`
x.beginPath()
x.moveTo(W,H);x.lineTo(W+H*C(t),H+H*S(t))
x.stroke()

W=1000;H=500
//x.fillStyle='#000';x.fillRect(0,0,2*W,2*H)
x.strokeStyle=`hsl(${0*t},99%,50%`
x.setTransform(C(t),S(t),-C(t),S(t),W,H)
x.beginPath()
x.moveTo(0,0);x.lineTo(H,0)
x.stroke()

W=1000;H=500
//x.fillStyle='#000';x.fillRect(0,0,2*W,2*H)
x.fillStyle=`hsl(${0*t},99%,50%`
x.setTransform(C(t),S(t),-C(t),S(t),W,H)
x.fillRect(0,0,H,2)

// My first squirgy zoomer
W=1000;H=500
//x.fillStyle='#000';x.fillRect(-W,-H,2*W,2*H)
x.fillStyle=`hsl(${9*t},99%,50%`
x.setTransform(C(t),S(t),-C(t),S(t),W,H)
x.fillRect(0,0,H,2)
x.setTransform(1,0,0,1,0,0)
x.drawImage(c,-4,-4,c.width+8,c.height+8)

