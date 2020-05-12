//
if(!t)X=99,o=new IntersectionObserver((e)=>X=entry.intersectionRatio,{root:null,rootMargin:'0px',threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),o.observe(c)
F=a=>x.fillRect(i-a*X,a*50,a/5,h>0?0:h)
for(c.width=512,i=2e3,h=k=0;i--;F(!F(3)),F(5))h+=k=i*i%15<1?S(i**4):k
throw X
//
if(!t)for(i=X=99;i--;)new IntersectionObserver((e)=>X=entry.intersectionRatio,{root:this,rootMargin:'0px',threshold:i/99}).observe(c)
F=a=>x.fillRect(i-a*X,a*50,a/5,h>0?0:h)
for(c.width=512,i=2e3,h=k=0;i--;F(!F(3)),F(5))h+=k=i*i%15<1?S(i**4):k
throw X
//
if(!t)X=99,o=new IntersectionObserver((e)=>X=e.length,e.forEach(n=>X=n.intersectionRatio*99),{root:null,rootMargin:'0px',threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]}),o.observe(c)
F=a=>x.fillRect(i-a*X,a*50,a/5,h>0?0:h)
for(c.width=512,i=2e3,h=k=0;i--;F(!F(3)),F(5))h+=k=i*i%15<1?S(i**4):k
throw X
// We saw something!
// Unfortunately what we are seeing is the amount of c visible inside the iframe
// The canvas is very tall for some reason, so we see 320 / 1198 = 26.29%
if(!t)X=99,o=new IntersectionObserver((e)=>{X=e.length,e.forEach(n=>X=n.intersectionRatio*99)},{root:null,rootMargin:'1px',threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]}),o.observe(c)
F=a=>x.fillRect(i-a*X,a*50,a/5,h>0?0:h)
for(c.width=512,i=2e3,h=k=0;i--;F(!F(3)),F(5))h+=k=i*i%15<1?S(i**4):k
if(X!=99)throw X
//
if(!t){X=99;l=[];for(i=0;i<999;i++)l.push(i/999);new IntersectionObserver((e)=>{X=e.length,e.forEach(n=>X=n.isIntersecting&&n.intersectionRatio*99)},{root:null,rootMargin:'1px',threshold:l}).observe(c.parentNode)}
F=a=>x.fillRect(i-a*X,a*50,a/5,h>0?0:h)
for(c.width=512,i=2e3,h=k=0;i--;F(!F(3)),F(5))h+=k=i*i%15<1?S(i**4):k
if(X!=99)throw X


// Alternatively we can try adding a scrollbar, and detecting when that moves
// I don't think that will work so well.  Inner scrollbars only trigger if the user stops scrolling the outer window, and starts scrolling with their mouse over the dweet iframe.
if(!t){Y=99;l=[];for(i=0;i<999;i++)l.push(i/999);new IntersectionObserver((e)=>{e.forEach(n=>{if(n.isIntersecting)Y=n.intersectionRatio*99})},{root:c.parentNode.parentNode,rootMargin:'1px',threshold:l}).observe(c)}
F=a=>x.fillRect(i-a*Y,a*50,a/5,h>0?0:h)
for(c.width=512,i=2e3,h=k=0;i--;F(!F(3)),F(5))h+=k=i*i%15<1?S(i**4):k
if(Y!=99)throw Y
document.body.style.height='320px';document.body.style.overflow='auto'
