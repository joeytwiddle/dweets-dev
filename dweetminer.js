// Expression miner: Generates random Expressions of length L, and when it finds an expression that produces the Desired outputs, it stores it in T

D=[5,3,9,7]
for(e='',j=30;j--;)e+=String.fromCharCode(Math.random()*128)
if(D.every((o,i)=>{try{eval(e);return 1}catch(e){}}))E=e;
throw E

D=[5]
for(e='',j=10;j--;)e+=String.fromCharCode(Math.random()*128)
if(D.every((o,i)=>{try{eval(e);return 1}catch(e){}}))T=e;
throw T+e

D=[5]
for(e='',j=10;j--;)e+=String.fromCharCode(Math.random()*128)
try{if(D.every((o,i)=>eval(e)==o))T=e}catch(r){}
throw T+e

// If we use just 'o' then it tends to find solutions that simply return 'o'!
// I don't think '__o' will be much better.  We need something hidden.  We could generate results before we check them.
D=[7,3]
for(e='',j=5;j--;)e+=String.fromCharCode(Math.random()*128)
try{if(D.every((__o,i)=>eval(e)==__o))T=e}catch(r){}
throw T+e

// If we select the input strings, we don't need to worry about the 'o' variable
// === RELEASED === https://www.dwitter.net/d/18733
D=[5,4,3]
for(E='',L=3;L--;)E+='i0123456789*/+-&|^~'[Math.random()*19|0]
try{if(D.every((o,i)=>eval(E)==o))T=E}catch(r){}
throw T+','+E

// Faster version
D=[5,4,3]
for(i=999;i--;){
for(E='',L=3;L--;)E+='i0123456789*/+-&|^~'[Math.random()*19|0]
try{if(D.every((o,i)=>eval(E)==o))T=E}catch(r){}
}throw T+','+E

// tomxor's version
// https://www.dwitter.net/d/18737

// Recursive bruteforcer
// This would work, if alert wasn't blocked by sandbox
D=[5,4,3]
g=(n=3,s='')=>n?[...'X0123456789*/+-&|^~'].map(c=>g(n-1,s+c)):q(s)
q=E=>{try{D.every((Y,X)=>Y==eval(E))&&alert(E)}catch{}}
t||g()
// Works but over limit
D=[5,4,3]
g=(n=3,s='')=>n?[...'X0123456789*/+-&|^~'].map(c=>g(n-1,s+c)):q(s)
q=E=>{try{D.every((Y,X)=>Y==eval(E))&&(S=E)}catch{}}
t||g();throw S
// Works but I had to remove some numbers! === RELEASED ===
D=[5,4,3]
g=(n=3,s='')=>n?[...'X012345*/+-&|^~'].map(c=>g(n-1,s+c)):q(s)
q=E=>{try{D.every((Y,X)=>Y==eval(E))&&(S=E)}catch{}}
t||g();throw S
// [5,4,7] is a good test, should produce 5^X
