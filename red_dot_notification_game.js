c.width=innerWidth
X=Math.random()*innerWidth,Y=Math.random()*innerHeight
D=t?D:[]
D.map(({X,Y})=>x.fillText('🔴',X,Y))
t%1<.01?D.push({X,Y}):0
