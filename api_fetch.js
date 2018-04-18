// Using JSONP and a callback
t.ip?x.fillText(t,0,40):t?0:(async()=>eval(await(await fetch('//ipinfo.io?callback=u')).text()))()

// Small dox
t?0:(async()=>x.fillText((await(c.width=500,await fetch('//ipinfo.io?callback=u')).text()).slice(39),0,40))()

t?t%2<.01&&x.fillText(T,-72*t,9+8*t):(async()=>(c.width=300,T=await(await fetch('//ipinfo.io?callback=u')).text()))()

c.width=300,t?x.fillText(T,-40*t,50):(async()=>T=await(await fetch('//ipinfo.io?callback=u')).text())()

c.width=99,t?x.fillText(T,-50*t,30):(async()=>T=await(await fetch('//ipinfo.io?callback=u')).text()+" github.com/toddmotto/public-apis")()

c.width=320,t?x.fillText(T,-50*t,99):(async()=>T=await(await fetch('//ipinfo.io?callback=u')).text()+" github.com/toddmotto/public-apis")()

// Bitcoin banner?
// From: https://www.bitcoin.com/widgets
// Did not work
// Direct injection doesn't work
t?0:(d=document,d.body.innerHTML='<script src="//widgets.bitcoin.com/widget.js"></script>',d.body.className="btcwdgt-news")
// Works!
t?0:(d=document,s=d.createElement('script'),s.src="//widgets.bitcoin.com/widget.js",d.body.appendChild(s),c.parentNode.innerHTML='<div class=btcwdgt-news>')
// Works!
t?0:(d=document,s=d.createElement('script'),s.src="//widgets.bitcoin.com/widget.js",d.body.appendChild(s),c.parentNode.innerHTML='<div class=btcwdgt-price>')
// Works and fits!
t?0:((async()=>eval(await(await fetch('//widgets.bitcoin.com/widget.js')).text()))(),c.parentNode.innerHTML="<div class=btcwdgt-news>")
// Works, --- PUBLISH IT? ---
// "World's most expensive sine wave"
// "Worst sine wave ever"
t?0:((async()=>eval(await(await fetch('//widgets.bitcoin.com/widget.js')).text()))(),c.parentNode.innerHTML="<div class=btcwdgt-chart>")
// This does trigger regular reloads but it doesn't seem to change the chart
// I think the other side might only update every few minutes or few hours or something
t?t%5<.01&&eval(T):((async()=>T=await(await fetch('//widgets.bitcoin.com/widget.js')).text())(),c.parentNode.innerHTML="<div class=btcwdgt-chart>")

