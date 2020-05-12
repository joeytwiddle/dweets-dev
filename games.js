// Horizontal solitaire pong, golfed as a group effort.  https://discordapp.com/channels/395956681793863690/396027698985828354/483474673787469835
t||(v=V=y=18,w=W=.5);onmousemove=e=>y=e.y/9;c.width|=a=30;x[f='fillRect'](9,y*a,a,210);z=(V-y-3)/3;Z=z*z<1;w=v>63|v<0&Z?-w:w;W=V>a|V<0?-W:v<0&Z?z:W;v=v<-2?-a:v+w;V+=W;x[f](v*a,V*a,a,a)
