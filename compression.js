// ETHproductions demonstrating a 184 char compressed dweet: https://www.dwitter.net/d/7629
// cantelope's technique
// https://codegolf.tk/a/160
//eval(String.fromCharCode(..."⠀쀀㴀搀漀挀甀洀攀渀琀⤀⸀栀攀愀搀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀开㴀쀀⸀挀爀攀愀琀攀䔀氀攀洀攀渀琀怀猀挀爀椀瀀琀怀⤀Ⰰ开⸀猀爀挀㴀怀⼀⼀稀砀渀洀⸀挀昀怀".split``.map(v=>v.charCodeAt()>>8)))
// https://codegolf.tk/a/165
//eval(String.fromCharCode(...[...`ŀḀǨ̠͸̘Ψ̨ͨͰΠňŲ̠̋̀̈Ű̈΀΀̨Ͱ̠Ș͈̠̀͠ŀ˸ǨḀŰ̘ΐ̨̈Π̨Ȩ̨̨ͨ͠ͰΠ̀Θ̘ΐ͈΀Π̀ňŠ˸ŰΘΐ̘Ǩ̀ŸŸϐπͰͨŰ̘̰ŸƐ̀`].map(v=>v.charCodeAt()>>3)))

// --- POPULAR TECHNIQUE ---
// (Scroll down for the best known technique, limit 194 with emojis)
// The popular technique can compress 184 chars into 140 bytes.  Here is an example output:
//eval(unescape(escape`挮睩摴桼㵰㴰㭸⹦潮琽❢潬搠㘰灸⁭潮潳灡捥✻景爨愠潦≌潯欠䵡Ⱐ䤠捡渠晩琠ㄸ㐠批瑥猠潦⁣潤攠楮瑯⁡⁳楮杬攠摷敥琡∩砮晩汬呥硴⡡Ⱳ㴨瀫㴳㈩⭓⡴ⴽ⸲⤪ㄸⱱ㴴〰⭓⡴⨲⤪㤩ⱸ⹦楬汔數琨✮✬爬焫㐰⤻`.replace(/u(..)/g,"$1%")))

// An implementation by MrM@_S https://www.dwitter.net/d/9094
// t||(c.outerHTML="<input id=o>",o.onchange=e=>{o.value=(u+0).split`\n`[1].replace(/[^\0-~]+/,unescape([...o.value].map((e,g)=>[g%2?``:`%u`]+e.charCodeAt().toString(16)).join``))})
// Improved (can deal with odd char counts): https://www.dwitter.net/d/9207
// Max 184!
//eval(unescape(escape`瑼簨挮潵瑥版呍䰽⊻㱩湰畴⁩搽漾ꬢⱯ⹯湢汵爽昽㹯⹶慬略㴨甫〩⹳灬楴恜湠嬱崮牥灬慣攨⽛帡⵾崫⼬却物湧⹦牯浃桡牃潤攨⸮⸨漮癡汵攫∻∩⹭慴捨⠯⸮⽧⤮浡瀨攽㹥学㴢捨慲䍯摥䅴≝⠩㰼㡼敛晝⠱⤩⤩⤻`.replace(/u(..)/g,"$1%")))

// An example dweet which mixes compressions and emojis:
// https://www.dwitter.net/d/17954
// s="🔥🔥🔥🚒🏠";eval(unescape(escape`𩡯𬠨𭀥🐸𛁣𛡷𪑤𭁨𯀽𪐽𝐻𪐭𛐻𮀮𩡩𫁬𥁥𮁴𚁛𛠮𛡳𧑛𪑝𛀴𜀰𚰨𪐽🐳𚐪𚀶𜠰𚰲𜀰𚠨𝠭𭀩𚠪𝐩𚰨𪐼𜰩𚠨𭀼𜐫𪑼𭀾𝐮𝰿𜡥𜰺𜰵𜀫𚁩𙠱𚐪𜐵𜀫𤰨𭀪𞐫𪐩𚠹𚐬𞀵𜀫𚁩🀳𚐪𚁃𚁩𚐪𜐸𜀭𝀰𜀩𚐩𮀮𩡯𫡴🐸𚰨𪐦𝀩𚠴𚰧𨱭𘠧`.replace(/u../g,'')))

// My implementation:

var src = 'for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(600*i-i*i)**.5\nfor(j=9;j--;x.fillRect(960-500*C(2*t)-s*(j-4)/3,400-s*S(80*t)*((j-4)**2)**.5/2.9-s/2+80*S(4*t),s,s))s=9+T(t/5||8)**8';
var src = `with(x)for(c.width|=i=0;i<9;i++)x.F=fillText,setTransform(25,0,0,25,500+i*110,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),F('            ',-3,-1);x.F('____________',-11,-7-2e4/t**6)`;
var src = `with(x)for(c.width|=i=9;i--;i==7&&fillText('^oooooooooooooo',-14,-23-1e5/t**6))setTransform(9,0,0,9,500+i*120,640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)`;
// Yonatan's banana.  For some reason this one does not work!
//var src = `c.width=200;for(d=i=1700;j=i--/d;x.fillRect(99+(i-1e3)*S(t)/9+S(i)*(r-a/4),S(3*j)*75+C(i)*r,6,6))r=j>.9?2:30*S(3*j+.3),x.fillStyle=R(b=7*(a=r-S(i*2)**8*15)-S(i**8)**8*30,b*.8)`;
var src = `with(x)for(c.width|=i=12;i--;fillRect(0,0,i==9?12:-6,q?i>9?4:1:-22))setTransform(9,0,q=i>8,9,500+40*i*(3-q),q?390-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l))`;
// Knot
var src = `c.style.filter='invert(1)';for(c.width=k=316;k--;x.fillRect(157+X*C(t)+d*S(t),86+r*C(4*T),s=k/50,s))T=k/40+t,x.fillStyle=R(r=40+20*S(T*3),X=r*S(4*T),d=60*C(T*3),.7+(X*S(t)-d*C(t))/99)`;
var src = 'for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(600*i-i*i)**.5;for(j=9;j--;x.fillRect(960-500*C(2*t)-s*(j-4)/3,400-s*S(80*t)*((j-4)**2)**.5/2.9-s/2+80*S(4*t),s,s))s=9+T(t/5||8)**8';
var src = 't*=.7;for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(600*i-i*i)**.5;for(j=9;j--;x.fillRect(960-500*C(2*t)-s*(j-4)/3,400-s*S(80*t)*((j-4)**2)**.5/2.9-s/2+80*S(4*t),s,s))s=9+T(t/5||8)**8';

var out = '';
for (var i = 0; i < src.length; i += 2) {
  //out += String.fromCharCode((src.charCodeAt(i) << 8) + (src.charCodeAt(i + 1) || 0));
  // TODO: We might need to look out for newlines
  var firstChar = src.charCodeAt(i);
  var secondChar = src.charCodeAt(i + 1);
  out += String.fromCharCode(secondChar ? (firstChar << 8) + secondChar : firstChar);
}
console.log('eval(unescape(escape`' + out + '`.replace(/u(..)/g,"$1%")))');

// Did not work with my compressor
// eval(unescape(escape`睩瑨⡸⥦潲⡣⹷楤瑨簽椽㤻椭ⴻ椽㴷☦晩汬呥硴⠧幯⌐●●漧ⰭㄴⰭ㈳ⴱ攵⽴⨪㘩⥳整呲慮獦潲洨㤬〬〬㤬㔰〫椪ㄲ〬㘴〩ⱡ㵴⵩⼳ⱬ㵩㰳㼱⸵㩩㰸㼲⸸⴮㐪椺〬牯瑡瑥⡡㸰☦匨愼氿愺氩⤬晩汬剥捴⠰ⰰⰭ㘬ⴲ㈩`.replace(/u(..)/g,"$1%")))
// Yonatan's banana compressed by MrM@_S's compressor, and working
// eval(unescape(escape`挮睩摴栽㈰〻景爨搽椽ㄷ〰㭪㵩ⴭ⽤㭸⹦楬汒散琨㤹⬨椭ㅥ㌩⩓⡴⤯㤫匨椩⨨爭愯㐩ⱓ⠳⩪⤪㜵⭃⡩⤪爬㘬㘩⥲㵪㸮㤿㈺㌰⩓⠳⩪⬮㌩ⱸ⹦楬汓瑹汥㵒⡢㴷⨨愽爭匨椪㈩⨪㠪ㄵ⤭匨椪⨸⤪⨸⨳〬截⸸⤻`.replace(/u(..)/g,"$1%")))

// Compress a dweet online: https://prplz.github.io/dwitpack/

// --- BETTER COMPRESSION! ---
//
// prplz said: there's a better method but it causes js to count it wrong
// http://xem.github.io/golfing/#jstweet_en
//
// The upper limit with this method is 194.  The output may contain emojis.
//
// But to post it on Dwitter, you may need to remove the 'disabled' attribute from the Post button!
//
// Compressor implemented here by metamo: https://www.dwitter.net/d/11852 and here by KilledByAPixel: https://www.dwitter.net/d/14282

// Recently people have been working on new compression methods, like this one: https://www.dwitter.net/d/15796

// KBAP's 240-char compressor (limited to 32 unique chars)
// https://www.dwitter.net/d/15787

// On https://prplz.github.io/dwitpack/ prplz attributes:
// 2 char unicode method by xem and subzey. https://xem.github.io/golfing/#jstweet_en
// 3 char unicode method by Román Cortés. http://www.romancortes.com/v2/javascript-code-golf.html
// That page also has Roman Cortés's "minimal dictionary coder"
> `0 1, or not 0 1`.replace(/\d/g,i=>`to|be`.split`|`[i])
"to be, or not to be"
// It works only for strings that doesn't contain arabic numerals
