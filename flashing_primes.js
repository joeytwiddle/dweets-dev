// Prettier name: Transient Primes

// Smiley1000's powers of 2: https://dwitter.net/d/24953
// My flashing version
x.fillStyle='#0001'
x.fillRect(0,0,2e3,2e3)
x.fillStyle='#fff'
x.font="5em'"
s=(t*3)|0
n=2**s
x.fillText(n,(n*n)%1700,99+n*7%999)

// Smiley1000's primes: https://dwitter.net/d/24954
// My first golf
x.font="9em'"
ps=[];s=(t*3|0)+1
for(n=2;ps.length<s;n++){
b=0,ps.map(p=>b=b||n%p==0)
if(!b)ps.push(n)
}x.fillText(ps.pop(),0,50*s)
// My second golf
P=t?P:{}
s=(t*3|0)+1
for(p=1,n=2;n<s;n++)p=p&&(!P[n]||s%n>0)
x.font="9em'"
p&&x.fillText(s,P[n]=1,50*s)
// Flashing
P=t?P:{},s=t*3|0
for(p=1,n=2;n<s;n++)p=p&&(!P[n]||s%n>0)
x.font="9em'"
x.fillStyle='#fff'
p&&x.fillText(s,P[n]=1,50*s)
x.fillStyle='#0001'
x.fillRect(0,0,2e3,2e3)
// Collect primes in array instead of object
// Published at https://www.dwitter.net/d/25025
// We could clear the screen a little faster with: x.fillText(p?s:'#####',...
// Or even stronger: s+!p*t
P=t?P:[],s=2+(t*3|0)
p=1;P.map(n=>p=p&&s%n)
x.font="9em'"
x.fillStyle='#fff'
p&&x.fillText(s,P[s]=s,50*s)
x.fillStyle='#0001'
x.fillRect(0,0,2e3,2e3)
// Don't use fillRect
P=t?P:[],s=2+(t*5|0)
p=1;P.map(n=>p=p&&s%n)
P[s]=s
x.font="9em'"
x.fillStyle=p?'#fff':'#0006'
x.fillText(s,9*s*t*t%1700,99+50*9*t*t%999)
// Tweaked
P=t?P:[],s=2+(t*6|0)
p=1;P.map(n=>p=p&&s%n)
P[s]=s
x.font="9em'"
x.fillStyle=p?'#fff':'#0007'
x.fillText(s,9*s*t*t%1700,99+50*9*t*t%999)
// Tweakes and published https://www.dwitter.net/d/25027
P=t?P:[],p=s=2+(t*6|0)
P.map(n=>p=p&&s%n),P[s]=s
x.font="9em'",x.fillStyle=p?'#fff':'#0002'
x.fillText(s+!p*t,9*s*t*t%1700,99+50*9*t*t%999)
// Should have just done: p?s:t
