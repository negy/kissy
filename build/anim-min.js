/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 19 21:48
*/
KISSY.add("anim/base",function(g,j,k,e,l,a,x){function q(b,d,c,f,n,p){if(b=j.get(b)){if(!(this instanceof q))return new q(b,d,c,f,n,p);if(p===x)p=false;var m=g.isPlainObject(c);d=d;this.domEl=b;if(g.isPlainObject(d))d=String(g.param(d,";")).replace(/=/g,":").replace(/%23/g,"#").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var y=d,s=b;b={};var o=i.length,u=s.cloneNode(true);j.insertAfter(u,s);s=u.style;for(v(u,y);o--;){var r=i[o];if(s[r])b[r]=(t[r]||t["*"]).getter(u,r)}y=h(y);for(var A in y)b[A]=
(t[A]||t["*"]).getter(u,A);j.remove(u);this.props=b;this.targetStyle=d;if(m)m=g.merge(C,c);else{m=g.clone(C);if(c)m.duration=parseFloat(c)||1;if(g.isString(f)||g.isFunction(f))m.easing=f;if(g.isFunction(n))m.complete=n;m.nativeSupport=p}if(!g.isEmptyObject(h(d)))m.nativeSupport=false;this.config=m;if(m.nativeSupport&&F()&&g.isString(f=m.easing))if(/cubic-bezier\([\s\d.,]+\)/.test(f)||(f=e.NativeTimeFunction[f])){m.easing=f;this.transitionName=F()}if(g.isFunction(n))this.callback=n}}function B(b,d){return d}
function v(b,d){if(l.ie&&d.indexOf(z)>-1){var c=d.match(/opacity\s*:\s*([^;]+)(;|$)/);c&&j.css(b,z,parseFloat(c[1]))}b.style.cssText+=";"+d;c=h(d);for(var f in c)b[f]=c[f]}function h(b){for(var d={},c=0;c<w.length;c++){var f=w[c].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(f=b.match(RegExp(f+"\\s*:([^;]+)(;|$)")))d[w[c]]=g.trim(f[1])}return d}var i,w,z,C,D;k=k.Target;i="borderBottomWidth borderBottomStyle borderLeftWidth borderLeftStyle borderRightWidth borderRightStyle borderSpacing borderTopWidth borderTopStyle bottom fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
w=[];z="opacity";C={duration:1,easing:"easeNone",nativeSupport:true};q.PROPS=i;q.CUSTOM_ATTRS=w;q.PROP_OPS={"*":{getter:function(b,d){var c=j.css(b,d),f=parseFloat(c);c=(c+"").replace(/^[-\d.]+/,"");if(isNaN(f))return{v:c,u:"",f:B};return{v:f,u:c,f:this.interpolate}},setter:function(b,d,c){return j.css(b,d,c)},interpolate:function(b,d,c){return(b+(d-b)*c).toFixed(3)},eq:function(b,d){return b.v==d.v&&b.u==d.u}}};var t=q.PROP_OPS;g.augment(q,k,{isRunning:false,elapsedTime:0,start:0,finish:0,duration:0,
run:function(){var b=this,d=b.config,c=b.domEl,f,n=b.props,p={},m;if(b.fire("start")!==false){b.stop();f=d.duration*1E3;b.duration=f;if(b.transitionName)setTimeout(function(){b._nativeRun()},10);else{for(m in n)p[m]=(t[m]||t["*"]).getter(c,m);b.source=p;c=g.now();f=c+f;d=d.easing;if(g.isString(d))d=e[d]||e.easeNone;b.start=c;b.finish=f;b.easing=d;a.start(b)}b.isRunning=true;return b}},_complete:function(){this.fire("complete");this.callback&&this.callback()},_runFrame:function(){var b=this.domEl,
d=this.finish,c=this.start,f=this.duration,n=g.now(),p=this.source,m=this.easing,y=this.props,s;c=n-c;f=n>d?1:c/f;var o,u;this.elapsedTime=c;for(s in y){c=p[s];o=y[s];var r;r=o;var A=c,E=t[s];r=E&&E.eq?E.eq(r,A):t["*"].eq(r,A);if(!r){if(o.v===0)o.u=c.u;if(c.u!==o.u){c.v=0;c.u=o.u}r=o.f(c.v,o.v,m(f))+o.u;(t[s]||t["*"]).setter(b,s,r);if(o.f==B){c.v=o.v;c.u=o.u}}}if(this.fire("step")===false||(u=n>d)){this.stop();u&&this._complete()}},_nativeRun:function(){var b=this,d=b.domEl,c=b.duration,f=b.config.easing,
n=b.transitionName,p={};p[n+"Property"]="all";p[n+"Duration"]=c+"ms";p[n+"TimingFunction"]=f;j.css(d,p);setTimeout(function(){v(d,b.targetStyle)},0);g.later(function(){b.stop(true)},c)},stop:function(b){if(this.isRunning){if(this.transitionName)this._nativeStop(b);else{if(b){v(this.domEl,this.targetStyle);this._complete()}a.stop(this)}this.isRunning=false;return this}},_nativeStop:function(b){var d=this.domEl,c=this.props,f;if(b){this._clearNativeProperty();this._complete()}else{for(f in c)j.css(d,
f,j._getComputedStyle(d,f));this._clearNativeProperty()}},_clearNativeProperty:function(){var b={},d=this.domEl,c=this.transitionName;b[c+"Property"]="none";b[c+"Duration"]="";b[c+"TimingFunction"]="";j.css(d,b)}});q.supportTransition=function(){if(D)return D;var b="transition",d,c=document.documentElement;if(c.style[b]!==x)d=b;else g.each(["Webkit","Moz","O"],function(f){if(c.style[b=f+"Transition"]!==x){d=b;return false}});return D=d};var F=q.supportTransition;return q},{requires:["dom","event",
"./easing","ua","./manager"]});
KISSY.add("anim/color",function(g,j,k){function e(h){h=h.toLowerCase();var i;if(i=h.match(x))return[parseInt(i[1]),parseInt(i[2]),parseInt(i[3])];else if(i=h.match(q)){for(h=1;h<i.length;h++)if(i[h].length<2)i[h]+=i[h];return[parseInt(i[1],l),parseInt(i[2],l),parseInt(i[3],l)]}if(a[h])return a[h];return[255,255,255]}var l=16,a={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,
0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},x=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,q=/^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i,B="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),v=k.PROP_OPS;k=k.PROPS;k.push.apply(k,B);v.color={getter:function(h,i){return{v:e(j.css(h,i)),u:"",f:this.interpolate}},setter:v["*"].setter,interpolate:function(h,i,w){var z=
v["*"].interpolate;return"rgb("+[Math.floor(z(h[0],i[0],w)),Math.floor(z(h[1],i[1],w)),Math.floor(z(h[2],i[2],w))].join(", ")+")"},eq:function(h,i){return h.v+""==i.v+""}};g.each(B,function(h){v[h]=v.color})},{requires:["dom","./base"]});
KISSY.add("anim/easing",function(){var g=Math.PI,j=Math.pow,k=Math.sin,e=1.70158,l={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(j(2,10*(a-=1))*k((a-0.075)*2*g/0.3))},
elasticOut:function(a){if(a===0||a===1)return a;return j(2,-10*a)*k((a-0.075)*2*g/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*j(2,10*(a-=1))*k((a-0.1125)*2*g/0.45);return j(2,-10*(a-=1))*k((a-0.1125)*2*g/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((e+1)*a-e)},backOut:function(a){return(a-=1)*a*((e+1)*a+e)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((e*=1.525)+1)*a-e);return 0.5*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)},bounceIn:function(a){return 1-
l.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return l.bounceIn(a*2)*0.5;return l.bounceOut(a*2-1)*0.5+0.5}};l.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};
return l});
KISSY.add("anim/manager",function(g){function j(e){e[k]=e[k]||g.guid("anim-");return e[k]}var k=g.guid("anim-");return{interval:20,runnings:{},timer:null,start:function(e){var l=j(e);if(!this.runnings[l]){this.runnings[l]=e;this.startTimer()}},stop:function(e){this.notRun(e)},notRun:function(e){delete this.runnings[j(e)];g.isEmptyObject(this.runnings)&&this.stopTimer()},pause:function(e){this.notRun(e)},resume:function(e){this.start(e)},startTimer:function(){var e=this;if(!e.timer)e.timer=setTimeout(function(){if(e.runFrames())e.stopTimer();
else{e.timer=null;e.startTimer()}},e.interval)},stopTimer:function(){var e=this.timer;if(e){clearTimeout(e);this.timer=null}},runFrames:function(){var e=true,l=this.runnings,a;for(a in l)if(l.hasOwnProperty(a)){e=false;l[a]._runFrame()}return e}}});KISSY.add("anim/scroll",function(g,j,k){var e=k.PROP_OPS;k.CUSTOM_ATTRS.push("scrollLeft","scrollTop");e.scrollLeft=e.scrollTop={getter:function(l,a){return{v:l[a],u:"",f:e["*"].interpolate}},setter:function(l,a,x){l[a]=x}}},{requires:["dom","./base"]});
KISSY.add("anim",function(g,j,k){j.Easing=k;return j},{requires:["anim/base","anim/easing","anim/color","anim/scroll"]});
