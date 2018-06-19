// HEY I HAVEN'T RELEASED THIS YET SO PLEASE DON'T SHARE OR PUBLISH IT, THANKS!

// Existing: https://www.dwitter.net/d/6001

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

// --- GREAT ---
// Back to setTransform
// TODO: Fix the resting angles as below, within 180, and then put it through the compressor.
with(x)for(c.width|=i=0;i++<9;)setTransform(20,0,0,20,270+i*140,700),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:a<l?S(a):S(l)),fillText('❚',-6,-3),i==7&&fillText('🕶️',-6,-9-99/t)
with(x)for(c.width|=i=9;i--;)setTransform(20,0,0,20,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:a<l?S(a):S(l)),fillText('❚',-6,-3),i==7&&fillText('🕶️',-6,-9-4e3/t**4)
// Cross-platform sunglasses
with(x)for(c.width|=i=9;i--;)setTransform(20,0,0,20,400+i*140,720),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(a<0?0:a<l?S(a):S(l)),fillText('❚',-6,-3),i==7&&fillText('⌐••',-11,-9-4e3/t**4)

// Oh dear!  On my work Mac the sunglasses don't render (but they did on Tiffany's new Mac).
// Normal glasses '👓' do appear, but they don't look good on Mac, because they have arms.
// Some alternatives which do appear on Mac are: top hat '🎩' and graduation cap '🎓'
// Or we could use: smiling face with sunglasses '😎' or '😏'
// But perhaps by the time I have golfed this down to 140, everyone will have sunglasses on their machine.  :)
// TODO: Use a compressor?
//       See Compression section of tricks.txt

// TESTING: Any good?  Not really, nothing appears!
// Scale down by 5
with(x)for(c.width=384,i=0,scale(5,5),translate(80,120);i++<9;)translate(10,0),a=t-i/3,l=i<3?1.5:i<8?2.8-.4*i:0,rotate(k=a<0?0:a<l?S(a):S(l)),fillRect(-5,-32,10,40),rotate(-k),i>8&&x.fillText('🕶️',-51,-25-4e7/t**9)
