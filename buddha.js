// Some possible approaches:
// - loop Y, and loop angle for polar coords
// - plot a grid of points in a cube, but only those inside the model (Advantage: can do holes, Disadvantage: more data!)
// - something like po1's globe (similar, but only one variable)
// Instead of data, can we mine an expression (e.g. fourier) to express the shape?
// Instead of data, can we provide hashes or checksums, so that the dweet then has to mine/bruteforce to find the model?

// For loop, or map? Same size! But for loop offers a bit more inside the ;)
for(i=c.width=999;i--;)x.fillText('#',[50][0],i)
c.width=999;[50].map((x,i)=>x.fillText('#',x,i))

for(i=c.width=99;i--;)a=i-t,x.fillText('#',[50][0],i)

for(i=c.width=60;i--;)r='Dkyr3199D8AR1IQXWt8GE00BL0iAbjVMhuWnr3RYk1MvsEDOnYGtO8rMkD8SKTzo4g5'.charCodeAt(i),C(a=i-t)>0&&x.fillText('.',25+r*S(a)/5,i/2+9)
// Max length 94
for(i=c.width=99;i--;)r='FfnTeiIBOHlrwHEbT9IqQMwDkyr319D8AR1IQXWt8GE00BL0iAbjVMhuWnr3RYk1MvDOstMAjVq6PVSxWgC2LPBGrgVIot'.charCodeAt(i),C(a=i-t)>0&&x.fillText('.',50+r*S(a)/5,i/2)
for(i=c.width=94;i--;)r='FfnTeiIBOHlrwHEbT9IqQMwDkyr319D8AR1IQXWt8GE00BL0iAbjVMhuWnr3RYk1MvDOstMAjVq6PVSxWgC2LPBGrgVIot'.charCodeAt(i),C(a=i-t)>0&&x.fillText('.',45+r*S(a)/5,i/2)

// Plotting 3D vectors
c.width|=0
V=[[-948,-982,758],[-969,-861,695],[1047,-940,712],[678,-935,684],[-949,-713,664],[-1004,-837,634],[453,-1134,654],[1132,-915,657],[794,-805,584],[1075,-853,631],[1160,-912,569],[-392,-1074,593],[572,-891,475],[-1082,-755,445],[991,-790,398],[-797,-999,412],[459,-928,420],[671,-1122,394],[31,-780,428],[39,-1088,418],[-96,-1186,311],[964,-789,323],[263,192,327],[-50,307,319],[94,-948,293],[170,-1014,347],[-1199,-926,333],[559,-814,312],[-57,476,204],[320,-878,271],[334,-734,210],[3,1200,198],[-1013,-768,187],[-162,1360,182],[-497,178,194],[-818,-685,156],[151,1185,153],[35,1468,172],[463,-479,181],[-214,923,163],[-853,-528,174],[422,166,147],[81,1547,65],[100,1487,113],[346,113,209],[441,-412,124],[-56,1569,85],[-1009,-975,4],[-116,1567,78],[773,-775,40],[23,777,33],[-122,-1033,88],[-624,157,33],[229,-285,81],[-262,947,35],[-320,1207,-2],[321,-105,2],[832,-974,-32],[525,-249,-1],[-855,-347,-25],[793,-981,-56],[713,-148,-21],[716,-1084,-72],[-296,1010,-82],[351,-473,-43],[-331,1126,-103],[-686,-1108,-204],[-793,258,-120],[591,-546,-122],[-83,2005,-122],[681,-968,-161],[-638,-379,-159],[506,-1158,-138],[-628,526,-159],[185,1079,-185],[-262,961,-179],[-419,-377,-232],[586,-361,-224],[708,46,-241],[-268,1575,-217],[583,-847,-235],[252,1409,-227],[138,690,-253],[-4,1859,-237],[-5,1751,-240],[216,1513,-222],[-367,1290,-242],[528,-45,-298],[498,19,-281],[-691,-209,-276],[605,373,-321],[559,-917,-269],[458,509,-291],[415,-1015,-332],[-729,-128,-290],[234,1133,-276],[-586,502,-290],[9,808,-329],[621,117,-344],[619,-44,-327],[648,33,-323],[-65,1638,-315],[592,26,-333],[51,1600,-348],[-246,1016,-373],[207,1088,-330],[529,191,-354],[-171,833,-358],[411,-798,-368],[-356,567,-367],[181,1462,-342],[390,471,-391],[249,-1081,-393],[-257,-472,-421],[51,-188,-416],[-111,978,-428],[50,-118,-423],[-424,-887,-423],[-206,1319,-448],[-140,-506,-440],[161,1193,-426],[109,-736,-453],[-39,-46,-453],[226,312,-466],[41,1395,-460],[-19,1215,-499],[-5,1323,-504]]
s=.2
V.map(v=>x.fillRect(960+s*v[0]*C(t)-s*v[2]*S(t),540-s*v[1],5,5))

for(i=c.width=94;i--;)r="\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0013\u0000\u0000\u0000\u0000\u0000\u000b\b\u0000\u0003\f AC-$\u001b&DN2&\" ,G.* \u0015\u00164+\u000f\u0002\u0001\u0010AOB\"%VSS}F7HQM`D52rDP8-&tEKe,&.HHT.8?XHgÐ4?jGV¨]F\u0000".charCodeAt(i),C(a=i-t)>0&&x.fillText('.',45+r*S(a)/5,i/2)

// A bit large, but first proof of working!
for(i=c.width=1800;i--;)r="                             *                  )     *                  '                  +     '                  +     +            ,     +            )     ,     &            &     %     %      &     -     %            &     %     +      &     -     -     %$     #     /     #*    #/     !     0)     !      !   &3)   #3-%!!#12(#\"#.4)%#$)5.'$$'43*&%'26-'%'/60)&&,63+(&+46-)')270*((/84,)(.65-*(+480+))183-*)/85-+)-67/-)+392,**194-+)/86/+),680,)+3:3,)*1:6-*).88/+),592,**2:5.*)097.+*-7:0,++4:3.+*1:6/++.98/,++6:1-**3:5/*+/98/,+,790,*+4:2-*+/95/++-88/+++590-++192/++-95/,++680,+*391.++085/+*,76/-,*480-+*-81/+*,71/.+*57/-+*280.+*.72/,*+55.-*)37.-+)-7/.+)+60.-*)45.,*(-6.-*(+5/-+()40-,)(16,,)'-5--*'(42,,('33+,)'-5,,)&-4.,*&&30*,'%/3*+(%,4,+)%'1/)+%$01'+%\"-1)*'\"(1,'!!$10%#!\"/1'!!\",1*#  %2-$  \"11%   .2'\"  &2+#  !20$! !13&\"  /3'\"  &31#! !34%! \"35*\"!\"557%\"#159'##-68/$$)87:&$'97=*%':7;0''589<('-:8A,(+=7?2)*=9;;**7:9D-*1>8C2*-A9>9,,=:;D.+6=:G2,2A9B7-/A:=A/-;<;H3-6@:F7.3D:@</0A;<G3/:=:I7/6C:C:03D:>D31?;;I609?:G906E:@=23C:=H51;<;J918C:A<26E:>?43@;<J828=:H:27E:?<46E:=G63:;:J927B9?;35F9>;55A:;J836:9H:35F9>:46E9<:6449:J92499=834G8=844B9:963289I72298=733F8<@43289J52178<511G8<622C8:831178:300<7;50038;F10188J2//67:30/97;40/E7961//6781/.46:30.27:40./7860..5691/-;6:3/-:79>0..66H0.-3591.-0692/-.67?/--458/.,E6:1/,/78?/--566/-,2590.,;69D/,<67L/-,4580-,16:1.,/79@/,-667/-,3690-+E692.,.78A/,-5680-,36:D.,F79L.,57780-,56:H-,37:C.,D797/,=779P-,57:F-,<7:F.,3889/,277;T-,57;J.,2898/,.87;P,,87;2-,57:6.,>98</,-:7=1-797<4.+999?.,0:8?[,-;7=3-6<8;E.+@:9A./8<8@1/,=8=P;6A::F.8I<8C]82=8@[;,@9=O-*I;9G.+V=8C^+1?8>X++F;;L,*Q<8EY*C?8Aa*EC9=U++M;9JA8\\=7D=6KA8?]79H:;PG)U<8H_1d?7Ad)ED9=WB>N;8L+:^=7D;::A7?_(HH9:R(;V;7G_'d>6Af;3C8<X5EM97KP9];6Cg%c>6>^&:F88P&$S95E&;c;4?&3X?5:V$\"I75I@?Y84@c=!:3;[!9@45%5C 62AV=^61;I=W:2 R?< ".charCodeAt(i)*22-704,C(a=i-t)>0&&x.fillText('+',900+r*S(a)/5,i/2)

// First compressible version
for(i=c.width=99;i--;)r="#$$%%%''+*,-.051/100440//,25,-+)*5*)(***+5.0@68E31A?<?6048<95.0H85G--246L0-4A6P4.4DB`>/1EIPM0-9eFW ".charCodeAt(i)-32,x.fillText('+',48+r*S(i-t)/4,7+i/2)
for(i=c.width=98;i--;)r="++.-2248>97879?:9876@?753/7=0/,..1.1/8B9@O8;VHJZ=:QMLG?6=CHC>47]B?[54=>Ab94>TBA@5?a?~O6:X]hb72B~Zo".charCodeAt(i)-32,x.fillText('+',48+r*S(i-t)/5,7+i/2)

// Squaring the y-axis, so we get more points at the bottom
for(i=c.width=98;i--;)r="+/787789>87542?1.+.018N99ULKY?8BFJD?5:WD><35[?A]85@PBA>5@^TVI6=_XmY77Px_r<3B~6~@08m^~E-/Hj_R,+<~Zo".charCodeAt(i)-32,x.fillText('+',48+r*S(i-t)/5,7+i**.5*5)
// Abandoned

// Minor golf
// Published at https://dwitter.net/d/27385
for(i=c.width=99;i--;)x.fillText('+',48+("++.-2248>97879?::986@?753/7>0/,..1.0/6?8?N8;VGJZ=:QNLH?7>CHD>48]C?[54<>Ba94>TBA?5>\\S~N7:X^hc83E~Zs+".charCodeAt(i)-32)*S(i-t)/5,7+i/2)

// My first digital carving of the graceful lord buddha
// MFDCotGLB

// Using fillRect for "fake transparency" (back side fades away)
for(i=c.width=94;i--;)x.fillRect(48+("48>97879?::986@?753/7>0/,..1.0/6?8?N8;VGJZ=:QNLH?7>CHD>48]C?[54<>Ba94>TBA?5>\\S~N7:X^hc83E~Zs+".charCodeAt(i)-32)*S(a=i-t)/5,3+i/2,W=1+C(a),W)
// Squared
// Published: https://dwitter.net/d/27386
for(i=c.width=92;i--;)x.fillRect(45+("088:>86330>0.-0<9?U;:XNMX>7?CGA=39XC>=46X?AA85CQBc@5Bu>~K5=dZoY66Mz]n91?~Y~<-5h^~A+-Ei_P".charCodeAt(i)-32)*S(a=i-t)/5,2+i**.5*5,W=1+C(a),W)
// Similar, but larger resolution (less chunky rectangles) and not squared
// Published at https://dwitter.net/d/27397
for(i=c.width=184;i--;)x.fillRect(90+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a=i-t)/3,5+i,W=1+C(a),W)
// Squared (worse somehow)
for(i=c.width=180;i--;)x.fillRect(88+("-3<;>B;9652B20/4F@F]?>`US`B:CGLE@5<`GBA79\\DEG<8IWYuE8G~A~P8@na{`88R~bw:2B~a~>.7of~D,.Cr".charCodeAt(i)-32)*S(a=i-t)/3,9+i**.5*9,W=1+C(a),W)
// Weird +/- version (not great)
for(i=c.width=184;i--;x.fillText('-+'[1+C(a)|0],90+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a)/3,9+i))a=i-t

// Experiment: More points through interpolation
g=i=>",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32
for(i=c.width=184;i-=.5;)T=i%1,x.fillRect(90+((1-T)*g(i)+T*g(i+1))*S(a=i-t)/3,5+i,W=1+C(a),W)

// "Wavelet analysis is well-suited for signals with localized features, while Fourier analysis is well-suited for signals with global periodicity."

// 27397 with some added perspective
for(i=c.width=184;i--;)Z=1-C(a=i-t*3)/9,x.fillRect(90+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a)/3/Z,54+(i-48)/Z,W=1+C(a),W)
// Golfed a bit, and with only vertical perspective (not horizontal)
for(i=c.width=184;i--;)x.fillRect(90+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a=i-t)/3,54+(i-48)/(1-C(a)/9),W=1+C(a),W)
//
// ISSUE: When we add perspective vertically, the back points, which are no longer have integer Y, don't fully disappear
// Here is a dirty way to hide the back dots
for(i=c.width=184;i--;)x.fillRect(90+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a=i-3*t)/3,54+(i-48)/(1-C(a)/9),W=1.5+C(a)|0,W)
// And another way to partially hide them
for(i=c.width=184;i--;)x.fillRect(90+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a=i-3*t)/3,54+(i-48)/(1-C(a)/9),W=(1+C(a))**2/2,W)
// This may not be a concern in future, if we are able to use a higher resolution
for(i=c.width=268;i--;)x.fillRect(140+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a=i-3*t)/2,78+(i-48)/(1-C(a)/9)*1.5,W=2+2*C(a),W)
//
// Looking upwards.  Not golfed.
for(i=c.width=184;i--;)Z=1-C(a=i-t*3)/15,x.fillRect(90+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a)/3,99+(i-88)/Z,W=1+C(a),W)
// More extremely looking upwards.  Not golfed.
for(i=c.width=184;i--;)Z=1-C(a=i-t*3)/55,x.fillRect(90+(",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW".charCodeAt(i)-32)*S(a)/3,280+(i-270)/Z,W=1+C(a),W)
// Probably the first is the clearest.  Viewers may expect to see the model, rather than a tall statue above them.

// TODO: How about something like RLE encoding. with interpolation?
// - Interpolation code would be costly
// - But if some parts of the code can change linearly
// Would bezier be shorter to write?  Given the savings it might produce...

// ChatGPT gave me this code for bezier with y-points only
g=(p,t)=>p.reduce((a,b,i)=>a+b*t**i*(1-t)**(p.length-1-i),0)
// "This function g takes an array p of control points and a parameter t, and returns the y coordinate of the interpolated point on the Bezier curve at the given parameter value. The function uses a reduce function to iterate over all the control points and accumulate the contribution of each control point using the Bernstein polynomial formula. The reduce function returns a single number representing the y coordinate of the interpolated point."
// I'm not sure it's actually correct!  I think it's missing the binomial coefficients.  Ahh, ChatGPT had golfed them out!  When queried, it suggested baking them into the array data!  (But that might exceed our storage range.)
//
// We can use [..."abc"].map() to convert our string into an array of numbers.
// Although probably better to use [..."abc"].reduce() and do the conversion maths inside.
//
// Trying it
for(c.width=184,i=1e3;i--;)T=i/93,Z=1-C(a=i-t*3)/9,x.fillRect(90+[...",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW"].reduce((a,b,i)=>a+(b.charCodeAt(0)-32)*T**i*(1-T)**(92-i),0)*S(a)/3/Z,54+(i-48)/Z,W=1+C(a),W)
//
// Fixed with binomial coefficients
for(c.width=184,i=1e3;i--;)T=i/1e3,Z=1-C(a=93*T-t*3)/9,x.fillRect(90+[...",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW"].reduce((a,b,i)=>a+bin(92,i)*(b.charCodeAt(0)-32)*T**i*(1-T)**(92-i),0)*S(a)/3/Z,54+(93e-3*i-48)/Z,W=1+C(a),W)
function bin(n,k){let r=1;for(let i=0;i<k;i++)r*=(n-i)/(i+1);return r}
// But it's too smooth.  Perhaps because Bezier doesn't actually touch every control point.
// We may need to generate more extreme control points, which will reproduce the original curve when interpolated.
// Or ... use a Hermite or Catmull-Rom spline instead of a Bezier curve.

// Here is a Catmull-Rom spline.  I didn't adjust the input data, so the data does not distinguish between control points and interpolating points
// At least we got an interesting visual out of it
p=[...",10567;D=:<;<D><;:8DB86418@1/.1/36?7@RDL[=?aRTcA<HMPGA7?DKD@5:fECa99ECFG?8I\\\\~J8D~^~U69WvfW"].map(c=>c.charCodeAt(0)-32)
g=T=>((a,b,c,d)=>(.5*(2*b+(c-a)*T+(2*a-5*b+4*c-d)*T*T+(-a+3*b-3*c+d)*T**3)))(...p.slice(k-1,k+3))
for(c.width=184,i=1e3;i--;)T=i/1e3,Z=1-C(a=93*T-t*3)/9,k=Math.floor(T*93)+1,x.fillRect(90+g(T)*S(a)/3/Z,54+(93e-3*i-48)/Z,W=1+C(a),W)
// It jumps about a bit.  It's not interpolating!  The Math.floor() seems to be redundant.
