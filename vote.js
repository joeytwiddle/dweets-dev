s=400+380*S(1.5*C(t/2));
c.width=s
x.font=(s/4)+'px sans-serif';
x.fillText("~\\/0t3*", s/10, s*.4);
c.style.imageRendering=t&1?'pixelated':''

// Less jumpy:
s=40+30*((1-C((t|0)/2))**4)
c.width=s
x.font=(s/4)+'px serif';
x.fillText("~\\/0t3*",s/9,s*.4);
c.style.imageRendering=2*t&1?'pixelated':''
