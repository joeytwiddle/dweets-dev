// Unpublished
// Remix of https://www.dwitter.net/d/4841 copying some of New_Core's approach
// This does something weird on Firefox
for(c.width=99,i=9;i--;x.fillRect(40+35*S(t-i),19-14*C(t*i),2,2))c.style.filter='blur(25px)brightness(50%)contrast(9999%)'
// --- Looks pretty in Firefox ---
for(c.width=99,i=9;i--;x.fillRect(47+35*S(t*i/9),25-14*C(t-i),3,3))c.style.filter='blur(35px)brightness(51%)contrast(9999%)'
// But in Chrome, we need something more extreme
for(c.width=99,i=9;i--;x.fillRect(47+35*S(t*i/9),25-14*C(t-i),2,2))c.style.filter='blur(35px)brightness(50%)contrast(9999%)'
