this.onkeyup=e=>{this.a&&a.close();a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),o.frequency.value=55*1.06**e.keyCode}
this.onkeyup=e=>{this.a||(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start()),o.frequency.value=55*1.06**e.keyCode}
this.onkeyup=e=>this.a?o.frequency.value=55*1.06**e.keyCode:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start())

// A piano you can play with your keyboard.  Escape/Space is quieter but reload the page for silence.  G plays something close to middle-C.
this.onkeyup=e=>this.a?o.frequency.value=7*1.06**e.keyCode:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start())

// Always create the context?  But if we start it, it will play 440!
t?this.onkeyup=e=>o.frequency.value=7*1.06**e.keyCode:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start())
t?this.onkeyup=e=>o.frequency.value=7*1.06**e.keyCode:(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),o.start(),console.log(o.frequency))
// We can make o.start() the last thing we do on keyup.  The first time it will work, and the subsequent times it will error.
// We can start it only if we use it, costing 2 chars
t?this.onkeyup=(e=>o.frequency.value=7*1.06**e.keyCode,o.start()):(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination))
// G will play a pretty accurate middle-C
t?this.onkeyup=e=>(o.frequency.value=7.026*1.06**e.keyCode,o.start()):(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination))
// But who cares about accuracy?!
t?this.onkeyup=e=>(o.frequency.value=1.06**e.keyCode,o.start()):(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination))
// Stop the errors from multiple o.start() calls
this.onkeyup=e=>T?(a=new AudioContext,o=a.createOscillator(),o.connect(a.destination),T=o.start()):o.frequency.value=7*1.06**e.keyCode

// Sharp transition
t?this.onkeyup=e=>{a&&a.close();a=new AudioContext;o=a.createOscillator();o.connect(a.destination);o.frequency.value=7*1.06**e.keyCode;o.start()}:a=0
this.onkeyup=e=>{T||a.close();a=new AudioContext;o=a.createOscillator();o.connect(a.destination);o.frequency.value=7*1.06**e.keyCode;T=o.start()}
this.onkeyup=e=>{T||a.close();a=new AudioContext;o=a.createOscillator();o.connect(a.destination);o.frequency.value=7*1.06**e.keyCode;T=o.start()}
// We don't need to use this. when assigning a listener.  That saves 5 chars!
onkeyup=e=>{T||a.close();a=new AudioContext;o=a.createOscillator();o.connect(a.destination);o.frequency.value=7*1.06**e.keyCode;T=o.start()}

Chopsticks: JHA FF JHA LL

Piano:
 # # #   # #   # # #   # #   #
F G A B C D E F G A B C D E F G

Sheet (counting letters each half-line up from C):
 # # #   # #   # # #   # #   #
_ _ A B C D E F G H I J K L M N

Dweetiano:
 A C E   H J   M O Q   T V   Y
@ B D F G I K L N P R S U W X Z

StarT sheet 1: F L L K J I H  H#  A B D# F#
StarT dweet 1: L W W U S R P  Q  D F J  M

Twinkle piano: CCGGAAG FFEEDDC GGFFEEDx2 CCGGAAG FFEEDDC
Twinkle dweet: GGNNPPN LLKKIIG NNLLKKIx2 GGNNPPN LLKKIIG

Silent piano: CDCB CDCB GGE FFC DDFEDCDCAx2 ^GGBbGEF^A FCACB\G\F\F
Silent dweet: G IG D, G IG D, N NK, L LG, (I IL KIG IGD)x2, N NQ NKL P LGDGEB L
(or @)

StarW piano: AAAD? A? GF#E^D A GF#ED A GF#GE A AB BG^FED DEFE BC#  AABB GFED ^AE  AB B .............. AADCBbA_GFbEDA
StarW dweet: DDDI  P  NM KU  P NM KU P NMNK  D DF FNMKI  IKMK FH   D DF FNMKI PK  D DF FNMKI  IKMK FH DDIGE D B_ __D
StarW piano:                                                                                          DDGFEbD CBbAGD
StarW dweet: (IIIN U SRPZ U SRPZ U SRSP)x2 I IK KSRPN NPRP KM, I IK KSRPN UP. I IK KSRPN NPRP KM, IIN LJI GED BI. IKNSP

RR sheet: GHJH LLK, GHJH KKJ, GHJH J KI G GK J
RR dweet: NPSP WWU, NPSP UUS, NPSP S UR N NU S

# This one is foobar
IL sheet: DG FHG DBE C, EH GFE DCB, DG FHG DBE C, HG FHJ FG, IHF EFGEF D,CDE CH GF, ...
IL sheet: IN LPN IFK G, KP NLK IGF, IN LPN IFK G, PN LPS LN, RPL KLNKL I,GIK GP NL, ...

Star Trek intro dweet: R M P H, F KP O-KHMR RV Q T L, J OT S-OLQV VZ
Star Trek main dweet: B-L-KIGFE, C B-N-LKIGF, E-D FGIKLKN Q, P N D, I G (ILPS!)

Other tunes we could consider:
- https://www.youtube.com/watch?v=oyK5UKAQoLo#Take_On_Me_(Piano_Sheet_Music)
- https://www.youtube.com/watch?v=nAqgybJ7bHU#The_Village_People_-_%22YMCA%22_-_Sheet_Music_(Sibelius)

//p=r=>{for(k in Z)if(k.match(r))return k};P=r=>Z[p(r)];c.onclick=e=>{this.Z||(Z=new AudioContext,o=P(/eO/)(),d=P(/de/),Z=o,P(/ct/)(d),o.start());P(/fr/).value=56*1.06**(e.x/9|0)}
//p=r=>Object.keys(Z).find(k=>k.match(r));P=r=>Z[p(r)];c.onclick=e=>{this.Z||(Z=new AudioContext,o=P(/eO/)(),d=P(/de/),Z=o,P(/ct/)(d),o.start());P(/fr/).value=56*1.06**(e.x/9|0)}
//P=r=>{for(k in Z)if(k.match(r))return Z[k]()};c.onclick=e=>{this.Z||(Z=new AudioContext,o=P(/eO/),d=Z.destination,Z=o,P(/ct/)(d),o.start());P(/fr/).value=56*1.06**(e.x/9|0)}
