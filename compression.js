// Claims 184
//eval(unescape(escape`挮睩摴桼㵰㴰㭸⹦潮琽❢潬搠㘰灸⁭潮潳灡捥✻景爨愠潦≌潯欠䵡Ⱐ䤠捡渠晩琠ㄸ㐠批瑥猠潦⁣潤攠楮瑯⁡⁳楮杬攠摷敥琡∩砮晩汬呥硴⡡Ⱳ㴨瀫㴳㈩⭓⡴ⴽ⸲⤪ㄸⱱ㴴〰⭓⡴⨲⤪㤩ⱸ⹦楬汔數琨✮✬爬焫㐰⤻`.replace(/u(..)/g,"$1%")))

var src = 'for(i=600;i--;x.clearRect(960-W,99+i,2*W,1))W=(600*i-i*i)**.5\nfor(j=9;j--;x.fillRect(960-500*C(2*t)-s*(j-4)/3,400-s*S(80*t)*((j-4)**2)**.5/2.9-s/2+80*S(4*t),s,s))s=9+T(t/5||8)**8'

var out = '';
for (var i = 0; i < src.length; i += 2) {
  out += String.fromCharCode((src.charCodeAt(i) << 8) + (src.charCodeAt(i + 1) || 0));
}
console.log('eval(unescape(escape`' + out + '`.replace(/u(..)/g,"$1%")))');
