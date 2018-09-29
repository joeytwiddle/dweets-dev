// HEY I HAVEN'T RELEASED THIS YET SO PLEASE DON'T SHARE OR PUBLISH IT, THANKS!

// Early dominoes dweets:
// - ... (find them!) ...

// Some endless dominoes:
// - https://www.dwitter.net/d/6001
// - https://www.dwitter.net/d/7410

// I guess I had this idea early in 2018 during a domino frenzy on the site, but didn't start implementing it until April or May.  I have been working on it slowly for a long time!

// Remixed from https://www.dwitter.net/d/7839
with(x)for(c.width|=i=0,translate(400,600);i++<9;)translate(100,0),a=t-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillRect(-25,-160,50,200),rotate(-k)
// Last one stays standing :-)
t*=9;with(x)for(c.width|=i=0,translate(400,600);i++<9;)translate(100,0),a=(i<9)*t-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillRect(-25,-160,50,200),rotate(-k)
// WIP using unicode heavy-vertical-bar
t*=9;with(x)for(c.width|=i=0,scale(9,9);i++<9;)translate(i==1?45:5,i==1?60:0),a=(i<9)*t-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('|',0,-1),rotate(-k)
t*=9;with(x)for(c.width=150,i=0;i++<9;)translate(i==1?45:5,i==1?60:0),a=(i<9)*t-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',0,-1),rotate(-k)
t*=9;with(x)for(c.width|=i=0,scale(9,9);i++<9;)translate(i<2?45:5,i<2?60:0),a=(i<9)*t-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('|',0,-1),rotate(-k)
t*=2;with(x)for(c.width|=i=0,scale(15,15);i++<9;)translate(i<2?45:7,i<2?60:0),a=(i<9)*t-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',-6,-3),rotate(-k)
with(x)for(c.width|=i=0,scale(15,15);i++<9;)translate(i<2?35:7,i<2?45:0),a=t*(9-i)-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',-6,-3),rotate(-k)
with(x)for(c.width|=i=0,scale(15,15);i++<9;)translate(i<2?35:7,i<2?45:0),a=t*!!(9-i)-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',-6,-3),rotate(-k)
with(x)for(c.width|=i=0,scale(15,15);i++<9;)translate(7,i<2?45:0),a=t*(i<7)-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',-6,-3),rotate(-k)
with(x)for(c.width|=i=0,scale(20,20);i++<9;)translate(7,i<2?34:0),a=t*(i<7)-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',-6,-3),rotate(-k)
with(x)for(c.width|=i=0;i++<9;)save(),scale(20,20),translate(i*7,34),a=t*(i<7)-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',-6,-3),restore()
with(x)for(c.width|=i=0;i++<9;)setTransform(20,0,0,20,270+i*140,700),a=t*(i<7)-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',-6,-3)
// Complete but no resting blocks 162 (7th block)
with(x)for(c.width|=i=0;i++<9;)setTransform(20,0,0,20,270+i*140,700),a=t*(i<7)-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText('❚',-6,-3),i==7&&fillText('🕶️',-6,-9-99/t)
// Complete but no resting blocks 156 (last block)
with(x)for(c.width|=i=0;i++<9;)(p=i<9)&&setTransform(20,0,0,20,270+i*140,700),a=t*(i<8)-i/3,rotate(k=a<0?0:a<1.5?S(a):1),fillText(p?'❚':'🕶️',-6,-3-99*!p/t)
// Move the rotate inside the setTransform; works but longer!
with(x)for(c.width|=i=0;i++<9;)a=t*(i<8)-i/3,k=a<0?0:a<1.5?S(a):1,(p=i<9)&&setTransform(20*C(k),20*S(k),-20*S(k),20*C(k),270+i*140,700),fillText(p?'❚':'🕶️',-6,-3-99*!p/t)

// Experiments with translate instead of setTransform
// Testing, without sunglasses
t*=9;with(x)for(c.width|=i=0,translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<8?1.5:i<9?.5:0,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k)
t*=9;with(x)for(c.width|=i=0,translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<5?1.5:[1.2,.8,.4][i-5],rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k)
t*=2;with(x)for(c.width|=i=0,translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<5?1.5:2.7-.3*i,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k)
t*=2;with(x)for(c.width|=i=0,translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<5?1.5:3.6-.4*i,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k)
// Testing
with(x)for(c.width|=i=0,x.font='4em s',translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<5?1.5:3.6-.4*i,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k),i>8&&x.fillText('x🕶️',0,-150-9e5/t**5)
with(x)for(c.width|=i=0,x.font='4em s',translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<5?1.5:3.6-.4*i,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k),i>8&&x.fillText('x🕶️',0,-150-9e7/t**9)
// --- GOOD ---
with(x)for(c.width|=i=0,x.font='7em s',translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<5?1.5:3.6-.4*i,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k),i>8&&x.fillText('🕶️',-54,-125-2e8/t**9)
// Make the 8th block stop, leaving 2 standing
with(x)for(c.width|=i=0,x.font='7em s',translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<4?1.5:i<9?3.2-.4*i:0,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k),i>8&&x.fillText('🕶️',-154,-125-4e7/t**9)
// Make the 7th block stop, leaving 3 standing
with(x)for(c.width|=i=0,x.font='7em s',translate(400,600);i++<9;)translate(100,0),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-25,-160,50,200),rotate(-k),i>8&&x.fillText('🕶️',-254,-125-4e7/t**9)

// Oh dear!  On my work Mac the sunglasses '🕶️' don't render (but they did on Tiffany's new Mac).
// Normal glasses '👓' do appear, but they don't look so good on Mac, because they have arms (and aren't sunglasses).
// Some alternatives which do appear on Mac are: top hat '🎩' and graduation cap '🎓'
// Or we could use: smiling face with sunglasses '😎' or '😏'
// But perhaps by the time I have golfed this down to 140, everyone will have sunglasses on their machine.  :)
// TODO: Use a compressor?
//       See Compression section of tricks.txt

// TESTING: Any good?  Not really, nothing appears!
// Scale down by 5
with(x)for(c.width=384,i=0,scale(5,5),translate(80,120);i++<9;)translate(10,0),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-5,-32,10,40),rotate(-k),i>8&&x.fillText('🕶️',-51,-25-4e7/t**9)

// --- PROGRESS ---
// Back to setTransform
// TODO: Fix the resting angles as below, within 180, and then put it through the compressor.
with(x)for(c.width|=i=0;i++<9;)setTransform(20,0,0,20,270+i*140,700),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),fillText('❚',-6,-3),i==7&&fillText('🕶️',-6,-9-99/t)
with(x)for(c.width|=i=9;i--;)setTransform(20,0,0,20,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),fillText('❚',-6,-3),i==7&&fillText('🕶️',-6,-9-4e3/t**4)
// Cross-platform sunglasses
with(x)for(c.width|=i=9;i--;)setTransform(20,0,0,20,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),fillText('❚',-6,-3),i==7&&fillText('⌐••',-11,-9-4e3/t**4)
// Save 1 char by putting x.F=fillText
with(x)for(c.width|=i=9;i--;)x.F=fillText,setTransform(20,0,0,20,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:a<l?S(a):S(l)),F('❚',-6,-3),i==7&&F('🕶️',-6,-9-4e3/t**4)

// Problem: On Mac these boxes look short and fat, and rotate around an external axis point.
// Above we used 'heavy vertical bar'.  This 'vertical bar' is proportioned a bit more like the default, but now the rotation and touching is very off (fixed later)
// Unfortunately the 'vertical bar' looks a bit too thin on Firefox...
t*=5;with(x)for(c.width|=i=9;i--;)x.F=fillText,setTransform(20,0,0,20,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:a<l?S(a):S(l)),F('❙',-6,-3),i==7&&F('👓',-10,-9-99/t)
t*=5;with(x)for(c.width|=i=9;i--;)x.F=fillText,setTransform(20,0,0,20,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:a<l?S(a):S(l)),F('❙',-6,-3),i==7&&F('👓',-10,-9-1e3/t/t)
// They don't quite touch on landing
// BUG: On Mac, we cannot go larger than 25, or the glasses disappear!
t*=5;with(x)for(c.width|=i=9;i--;)x.F=fillText,setTransform(30,0,0,30,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),F('❙',-3,0),i==7&&F('👓',-6,-9-1e3/t/t)
// Better
t*=5;with(x)for(c.width|=i=9;i--;)x.F=fillText,setTransform(25,0,0,25,500+i*110,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),F('❙',-3,-1),i==7&&F('👓',-7,-7-4e3/t**4)
// --- GOOD FOR CHROME ON MAC ---
// TODO: The glasses are a bit large, but perhaps we can accept that
//with(x)for(c.width|=i=9;i--;)x.F=fillText,setTransform(25,0,0,25,500+i*110,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),F('❙',-3,-1),i==7&&F('🕶️',-7,-7-2e4/t**6)
with(x)for(c.width|=i=9;i--;i==7&&F('🕶️',-7,-7-2e4/t**6))x.F=fillText,setTransform(25,0,0,25,500+i*110,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),F('❙',-3,-1)
// TODO: The glasses sit on top of the target bar, but behind the previous bar.  If we render them last, we can avoid the i==7, but they get the transform of the last (0th) bar
//       We can fix that by reversing the loop (for +2 chars)
with(x)for(c.width|=i=0;i<9;i++)x.F=fillText,setTransform(25,0,0,25,500+i*110,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),F('❙',-3,-1);x.F('🕶️',-11,-7-2e4/t**6)
// Suggestion: Release something like this one above for Chrome on the latest Macs.  But also put a universal version (using fillRect and cross-platform on codegolf.tk)
// TODO: If we map T=translate and R=rotate, then could translate+rotate beat setTransform?  Probably not.  We would still need to set fontSize...

// Cross-platform version
with(x)for(c.width|=i=9;i--;)setTransform(10,0,0,10,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),fillRect(-6,-24,6,24),i==7&&fillText('⌐••',-11,-24-4e4/t**6)
with(x)for(c.width|=i=9;i--;)setTransform(10,0,0,10,406+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),fillRect(0,0,-6,-24),i==7&&fillText('⌐••',-11,-24-4e4/t**6)
// Golf 4 chars to reach 180
//with(x)for(c.width|=i=9;i--;)setTransform(12,0,0,12,410+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),fillRect(0,0,-5,-20),i==7&&fillText('⌐••',-12,-20-8e4/t**6)
//with(x)for(c.width|=i=9;i--;)setTransform(9,0,0,9,410+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:S(a<l?a:l)),fillRect(0,0,-7,-25),i==7&&fillText('⌐••',-13,-25-8e4/t**6)
// Move the fillText to the third loop clause, and use boolean multiplication inside the rotate
with(x)for(c.width|=i=9;i--;i==7&&fillText('⌐••',-13,-25-8e4/t**6))setTransform(9,0,0,9,410+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-7,-25)
with(x)for(c.width|=i=9;i--;i==7&&fillText('⌐••',-13,-30-8e4/t**6))setTransform(9,0,0,9,410+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-7,-28)
// Closer to the default, but doesn't look great
//with(x)for(c.width|=i=9;i--;i==7&&fillText('⌐••',-13,-22-8e4/t**6))setTransform(9,0,0,9,550+i*100,620),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)
// But this looks ok, and is close enough (wider spacing)
with(x)for(c.width|=i=9;i--;i==7&&fillText('⌐••',-13,-22-8e4/t**6))setTransform(9,0,0,9,500+i*120,640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)
// On Mac though these lenses appear too small.  Here are some medium sized lenses:
// (Either way, on Mac, the lenses appear lower than the handle)
// Looks good on Mac, but on Linux, the glasses appear offset to the right
with(x)for(c.width|=i=9;i--;i==7&&fillText('⌐●●',-14,-22-9e4/t**6))setTransform(9,0,0,9,500+i*120,640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)
// It looks fine on Linux.  Although the glasses land a bit to the right.  -15 or ideally -16 looks better.  Also -23 for Y stops them from touching.
// Another option, square glasses: (•_•) ( •_•)>⌐■-■ (⌐■_■)
// You can find a few variations here: http://www.fastemoji.com/(%E2%80%A2_%E2%80%A2)-(-%E2%80%A2_%E2%80%A2)%3E%E2%8C%90%E2%96%A0-%E2%96%A0-(%E2%8C%90%E2%96%A0_%E2%96%A0)-Meaning-Emoji-Emoticon-Deal-With-It-Ascii-Art-C.s.i.-YEEEEAAAHHH-PlayStation-3-Japanese-Kaomoji-Smileys-295.html

// But wait.  Oh no!  If we use the compressor, we can't put in Unicode chars!
// So we either post on codegolf.tk, or we release an ASCII-only compressed version.
with(x)for(c.width|=i=9;i--;i==7&&fillText('^oo',-14,-22-8e4/t**6))setTransform(9,0,0,9,500+i*120,640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)
// Linux prefers -23, I also delayed and slowed the fall a bit
with(x)for(c.width|=i=9;i--;i==7&&fillText('^oo',-14,-23-1e5/t**6))setTransform(9,0,0,9,500+i*120,640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)
// === CONSIDER RELEASING === ASCII arm, on Linux (works in Chrome and Firefox) and on Mac (Chrome)
t*=9;with(x)for(c.width|=i=9;i--;i==7&&fillText('oo¬',-9,-23-1e5/t**6))setTransform(9,0,0,9,500+i*120,640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)
// But these two DO NOT WORK in Firefox, and DO NOT WORK on OS X Yosemite:
t*=9;with(x)for(c.width|=i=9;i--;i==7&&fillText('¬',-13,-23-1e5/t**6))setTransform(9,0,0,9,500+i*120,640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)
t*=9;with(x)for(c.width|=i=9;i--;i==7&&fillText('',-18,-23-1e5/t**6))setTransform(9,0,0,9,500+i*120,640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(0,0,-6,-22)

// Render the sunglasses using rects (just needs a little golfing)
t*=9;with(x)for(c.width|=i=12;i--;)setTransform(9,0,0,9,500+i*120,i>8?375-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(i>8?-4.5*i:0,0,-6,i>8?i>9?6:2:-22)
t*=9;with(x)for(c.width|=i=12;i--;)setTransform(9,0,0,9,500+i*120,640-(q=i>8)*(280+8e5/t**6)),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(-4.5*i*q,0,-6,q?i>9?6:2:-22)
t*=9;with(x)for(c.width|=i=12;i--;)setTransform(9,0,0,9,500+i*120,(q=i>8)?375-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l)),fillRect(-4.5*i*q,0,-6,q?i>9?6:2:-22)
t*=9;with(x)for(c.width|=i=12;i--;fillRect(-4.5*i*q,0,-6,q?i>9?6:2:-22))setTransform(9,0,0,9,500+i*120,(q=i>8)?375-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l))
// === OK === Shave two chars and get slanted glasses by moving the q= into an argument
t*=9;with(x)for(c.width|=i=12;i--;fillRect(-4.5*i*q,0,-6,q?i>9?4:2:-22))setTransform(9,0,q=i>8,9,500+i*120,q?390-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l))
// === GOOD === With connected bridge, but we still need to shave 4!
t*=9;with(x)for(c.width|=i=12;i--;fillRect(-4.5*i*q,0,i==9?12:-6,q?i>9?4:1:-22))setTransform(9,0,0,9,500+i*120,(q=i>8)?390-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l))
// Sunglasses from a cos wave (too long)
t*=9;with(x)for(c.width|=i=40;i--;fillRect(0,0,5*q-6,q?5*C(i/5)**2:-22))setTransform(9,0,q=i>8,9,q?1200+i*5:500+i*120,q?385-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l))
// Slanted glasses, 2 to golf
t*=9;with(x)for(c.width|=i=12;i--;fillRect(0,0,i==9?14:-6,q?i>9?4:1:-22))setTransform(9,0,q=i>8,9,500+i*(120-40*q),q?390-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l))
// === TO RELEASE ===
t*=9;with(x)for(c.width|=i=12;i--;fillRect(0,0,i==9?12:-6,q?i>9?4:1:-22))setTransform(9,0,q=i>8,9,500+40*i*(3-q),q?390-8e5/t**6:640),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a>0&&S(a<l?a:l))
// Compressed
eval(unescape(escape`睩瑨⡸⥦潲⡣⹷楤瑨簽椽ㄲ㭩ⴭ㭦楬汒散琨〬〬椽㴹㼱㈺ⴶⱱ㽩㸹㼴㨱㨭㈲⤩獥瑔牡湳景牭⠹ⰰⱱ㵩㸸ⰹⰵ〰⬴〪椪⠳⵱⤬焿㌹〭㡥㔯琪⨶㨶㐰⤬愽琭椯㌬氽椼㌿ㄮ㔺椼㠿㈮㠭⸴⩩㨰Ⱳ潴慴攨愾〦♓⡡㱬㽡㩬⤩`.replace(/u(..)/g,"$1%")))

// #dominoes #dominoesnt #dealwithit #thuglife

// Or can we hack the compressed version?  No, not easily.
//eval(unescape(escape`睩瑨⡸⥦潲⡣⹷楤瑨簽椽〻椼㤻椫⬩砮䘽晩汬呥硴ⱳ整呲慮獦潲洨㈵ⰰⰰⰲ㔬㔰〫椪ㄱ〬㜲〩ⱡ㵴⵩⼳ⱬ㵩㰳㼱⸵㩩㰸㼲⸸⴮㐪椺〬牯瑡瑥⡡㰰㼰㩓⡡㱬㽡㩬⤩ⱆ⠧❙✬ⴳⰭㄩ㭸⹆⠧👓✬ⴱㄬⴷⴲ攴⽴⨪㘩`.replace(/u(..)/g,"$1%")))

// TODO: OK new plan.  Release a pure ASCII version on Dwitter, and on codegolf release a version that downloads a Twitter sunglasses emoji lol.

