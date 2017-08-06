c.onclick=()=>speechSynthesis.speak(new SpeechSynthesisUtterance(`Hello Dwitter, do u like code? Here is some code: ${u} Hope you enjoyed`))

c.onclick=()=>speechSynthesis.speak(new SpeechSynthesisUtterance(`Hello Dwitter, I heard u like code, so I put some code in your code: `+u))

c.onclick=()=>speechSynthesis.speak(new SpeechSynthesisUtterance([`The time is ${Date()}`,`Your browser is ${navigator.userAgent}`][t&1]))

// If the message is too long, the synthesiser stops and won't work again until I close the tab!
c.onclick=()=>[`The time is ${Date()}`,`${navigator.appVersion}`,u].forEach(t=>speechSynthesis.speak(new SpeechSynthesisUtterance(t)))
// This prevents that by splitting up the utterances, but it doesn't speak the time to nicely
c.onclick=()=>`Time ${Date()}. Browser ${navigator.userAgent}`.split(' ').forEach(t=>speechSynthesis.speak(new SpeechSynthesisUtterance(t)))

// These fun long sentences break if we add the +u
c.onclick=()=>speechSynthesis.speak(new SpeechSynthesisUtterance(`This dweet can speak, that makes it leet. Here are the deets: `+u))
c.onclick=()=>speechSynthesis.speak(new SpeechSynthesisUtterance(`This dweet can speak, that makes it leet. Quite a feat. Now hold your seat. Here are the deets: `+u))
c.onclick=()=>speechSynthesis.speak(new SpeechSynthesisUtterance(`We heard you like code, so: `+u))
c.onclick=()=>speechSynthesis.speak(new SpeechSynthesisUtterance(`If u want to make a dweet that speaks, copy me, here are the deets: `+u))

// --- PUBLISHED --- //
c.onclick=()=>speechSynthesis.speak(new SpeechSynthesisUtterance(`This dweet can speak. Here are the deets: `+u))

// --- PUBLISHED but then deleted --- //
s=speechSynthesis
V=s.getVoices()
c.onclick=l=()=>(U=new SpeechSynthesisUtterance(l),U.voice=V[t%V.length|0],U.pitch=1+S(t)/2,s.speak(U))

// --- PUBLISHED --- //
...

// Counting 0 to 20
s=speechSynthesis
V=s.getVoices()
c.onclick=()=>(U=new SpeechSynthesisUtterance(Array(21).fill().map((_,i)=>i).join(', ')),U.voice=V[t%V.length|0],s.speak(U))
