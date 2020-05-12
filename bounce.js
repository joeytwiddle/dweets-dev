// An excellent bouncing ball, with compresion: https://www.dwitter.net/d/244

// NewCore's bouncing ball https://www.dwitter.net/d/2754
t?c.width|=0:d=a=y=0;y+=9*a;a-=.01;b=y<1?-20*a:20*a+20;y<0?(y=0,b>29?a=1:T):T;x.ellipse(960,840-y,b*C(t*9)+200,b*S(t*9)+200,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=1;y+=9*a;a-=.01;y<0?(y=-1,b=-20*a,b>29?a=y=1:T):b=20*a+20;x.ellipse(960,840-y,b*C(t*9)+200,b*S(t*9)+200,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=1;y+=9*a;a-=.01;y<0?(y=0,b=-20*a,b>29?a=y=1:T):b=20*a+20;h=b*S(t*9);x.ellipse(960,840-y-(y>0?0:h),200+b*C(t*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=1;y+=9*a;a-=.01;y<0?(y=0,b=-20*a,T||(T=t),b>29?(a=y=1,T=0):T):b=20*a+20;l=t-T;h=b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*C(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=1;y+=9*a;a-=.01;y<0?(y=0,b=-20*a,T||(T=t),b>29?(a=y=1,T=0):T):b=20*a+20;l=t-T-1.57;h=b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*C(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T-.087;y+=9*a;a-=.01;y<0?(y=0,b=40,T?l>1.5?(a=y=1,T=0):u:T=t):b=20*a+20;h=b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*C(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T-.087;y+=9*a;a-=.01;y<0?(T||(T=t),l=.087+t-T,y=0,b=40,l>.43?(a=y=1,T=0):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<0?(F||(F=T=t),l=.087+t-T,y=0,b=40,l>.43?(a=1,y=28,F=0):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<-28?(F||(F=T=t),l=.087+t-T,y=-28,b=40,l>.43?(a=1,y=28,F=0):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill();
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<-28?(F||(F=T=t),l=.087+(t-T)/2,y=-28,b=40,l>.43?(a=1,y=28,F=0,T+=(t-T)/2):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill();
// Presumably it should slow down in the depth of the squash, but not at the beginning or end of the squash
// Correction for smooth landing and take-off
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<-28?(F||(F=T=t),l=.0+(t-T)/2,y=-28,b=40,l>.43?(a=1,y=1,F=0,T+=(t-T)/2):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill()
// Squish at 1x speed
t?c.width|=0:d=a=y=F=T=0;l=t-T+.087;y+=9*a;a-=.01;y<-28?(F||(F=T=t),l=.0+t-T,y=-28,b=40,l>.43?(a=1,y=1,F=0,T+=0):u):b=20*a+20;h=-b*S(l*9);x.ellipse(960,840-y-(y>0?0:h),200+b*S(l*9),200+h,0,0,7);x.fill()

// We can shave 2 bytes off NewCore's original
t?c.width|=0:d=a=1;a=a<0?0:a-.1;d<5?a=20:0;x.ellipse(960,840-(d=Math.abs(500*S(t))),a*S(t*9)+200,a*C(t*9)+200,0,0,7);x.fill()
// And 4 more
t?c.width|=0:d=a=1;a=d<5?20:a<0?0:a-.1;x.ellipse(960,840-(d=Math.abs(500*S(t))),a*S(t*9)+200,a*C(t*9)+200,0,0,7);x.fill()
// And 2 more
t?c.width|=0:a=1;d=Math.abs(500*S(t));a=d<5?20:a<0?0:a-.1;x.ellipse(960,840-d,a*S(t*9)+200,a*C(t*9)+200,0,0,7);x.fill()
// Bouncing off the walls
// === RELEASED === https://www.dwitter.net/d/11968
P=200;A=Math.abs;t?c.width|=0:a=1;d=A(500*S(t));a=d<5?20:a<0?0:a-.1;x.ellipse(P+A(P*t%3040-1520),840-d,a*S(t*9)+P,a*C(t*9)+P,0,0,7);x.fill()

// Reattempted the same remix in 2019, this time from scratch
c.width|=0;o=t%6.28-22/7;w=99*S((o<0)*t);j=o>0;x.ellipse(960,850-j*600*S(o)+w,200+w,200-w,0,0,7);x.fill()
c.width|=0;o=t*2%6.28-22/7;w=99*S((o<0)*t*2);j=o>0;x.ellipse(960,850-j*600*S(o)+w,200+w,200-w,0,0,7);x.fill()
c.width|=0;o=t*2%6.28-22/7;j=o>0;w=(99-j*80-j*o*7)*S(!j*t*2-j*t*20);x.ellipse(960,850-j*600*S(o)+w,200+w,200-w,0,0,7);x.fill()
c.width|=0;o=t*4%6.28-22/7;j=o>0;w=(99-j*80-j*o*7)*S(!j*t*4-j*t*30);x.ellipse(960,850-j*600*S(o)+w,200+w,200-w,0,0,7);x.fill()
c.width|=0;o=t*4%9.42-22/7;j=o>0;w=(99-j*80-j*o*3)*S(-!j*o-j*t*20);x.ellipse(960,850-j*600*S(o/2)+w,200+w,200-w,0,0,7);x.fill()
c.width|=0;o=t*4%9.42-22/7;j=o>0;w=(99-j*70-j*o*5)*S(!j*o+j*o*5);x.ellipse(920,850-j*600*S(o/2)-w,200-w,200+w,0,0,7);x.fill()
// Good
c.width|=0;o=t*5%9.42-22/7;j=o>0;w=(99-j*80-j*o*3)*S(!j*o+j*o*5);x.ellipse(920,850-j*600*S(o/2)-w,200-w,200+w,0,0,7);x.fill()
// Change speeds again
// === RELEASED === https://www.dwitter.net/d/11969
c.width|=0;o=t*7%15.7-22/7;j=o>0;w=(99-j*80-j*o*1.6)*S(!j*o+j*o*4);x.ellipse(920,850-j*600*S(o/4)-w,200-w,200+w,0,0,7);x.fill()
// And again (allows for golfing, but then tweak numbers for beauty)
c.width|=0;o=t*9%22-22/7;j=o>0;w=(99-j*80-j*o)*S(!j*o+j*o*3);x.ellipse(920,850-j*600*S(o/6)-w,200-w,200+w,0,0,7);x.fill()
c.width|=0;o=t*9%22-22/7;j=o>0;w=(99-j*80-j*o*1.2)*S(!j*o+j*o*3.2);x.ellipse(920,850-j*600*S(o/6)-w,200-w,200+w,0,0,7);x.fill()
c.width|=0;o=t*10%22-22/7;j=o>0;w=(99-j*80-j*o)*S(!j*o+j*o*2.6);x.ellipse(920,850-j*600*S(o/6)-w,200-w,200+w,0,0,7);x.fill()
c.width|=0;o=t*10%22-22/7;j=o>0;w=(99-j*80-j*o*1.1)*S(!j*o+j*o*2.8);x.ellipse(920,850-j*600*S(o/6)-w,200-w,200+w,0,0,7);x.fill()
// Wall bounce
P=200;c.width|=0;o=t*7%15.7-22/7;j=o>0;w=(99-j*80-j*o*1.6)*S(!j*o+j*o*4);x.ellipse(P+Math.abs(P*t%3040-1520),850-j*600*S(o/4)-w,P-w,P+w,0,0,7);x.fill()
