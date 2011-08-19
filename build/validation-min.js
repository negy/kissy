/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 19 21:50
*/
KISSY.add("validation/base",function(g,n,p,e,f,b,a,c){function j(h,l){if(g.isString(h))h=g.get(h);h?this._init(h,l||{}):e.log("\u8bf7\u914d\u7f6e\u6b63\u786e\u7684form ID.")}g.augment(j,g.EventTarget,{_init:function(h,l){this.config=g.merge(f.Config,l);this.form=h;this.fields=new e.storage;this._initfields()},_initfields:function(){var h=this,l=h.config;g.each(h.form.elements,function(d){var k=n.attr(d,l.attrname);k&&h.add(d,e.toJSON(k.replace(/'/g,'"')))})},add:function(h,l){var d=this.fields,k=g.merge(this.config,l);if(g.isObject(h)&&
h instanceof b){d.add(h.id,h);return this}var m=n.get(h)||n.get("#"+h),o=n.attr(m,"id");if(!m||m.form!=this.form)e.log("\u5b57\u6bb5"+h+"\u4e0d\u5b58\u5728\u6216\u4e0d\u5c5e\u4e8e\u8be5form");else{if(!o){o=k.prefix+g.guid();n.attr(m,"id",o)}d.add(o,new b(m,k))}},remove:function(h){this.fields.remove(h)},get:function(h){return this.fields.get(h)},isValid:function(h){var l=this.fields;if(h&&l.get(h))return l.get(h).isValid();var d=true;l.each(function(k,m){if(!m.isValid()){d=false;if(m.single)return false}});return d},submit:function(){this.fire("submit",
this.fields)&&this.isValid()&&this.form.submit()}});g.mix(j,{Util:e,Define:f,Field:b,Warn:a,Rule:c});return j},{requires:["dom","event","./utils","./define","./field","./warn","./rule"]});KISSY.add("validation/define",function(){var g={};g.Config={attrname:"data-valid",prefix:"auth-f",defaultwarn:"alert"};g.Const={enumvalidsign:{error:0,ok:1,hint:2,ignore:3}};return g});
KISSY.add("validation/field",function(g,n,p,e,f,b,a,c){function j(d,k){if(d=g.get(d)){this.el=d;this.rule=new e.storage;this._init(k)}else e.log("\u5b57\u6bb5\u4e0d\u5b58\u5728\u3002")}var h=f.Const.enumvalidsign,l=document;j.Config={required:[true,"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\u3002"],initerror:"data-showerror"};g.augment(j,{_init:function(d){d=g.merge(j.Config,d||{});g.mix(this,d,"label");this._initField();this._initVType(d);this._initWarn(d);n.attr(this.el,d.initerror)&&this.showMessage(false,n.attr(this.el,d.initerror))},_initField:function(){var d=
this.el;if("checkbox,radio".indexOf(n.attr(d,"type"))>-1){var k=d.form;d=n.attr(d,"name");var m=[];g.each(l.getElementsByName(d),function(o){o.form==k&&m.push(o)});this.el=m}},_initVType:function(d){var k=this,m=k.el,o;for(o in d)k.addRule(o,d[o]);if(d.remote){d=g.isArray(d.remote)?{url:d.remote[0]}:d.remote;var q=new a(m,d,function(r,s){k.showMessage(r,s)});k.addRule("ajax",function(r){return q.check(r)})}},_initWarn:function(d){var k=this,m,o={};if(d.warn){m=g.isFunction(d.warn)?d.warn:c.get(d.warn);
o=g.merge(d,{})}if(d.style&&c.getStyle(d.style)){o=c.getStyle(d.style);m=c.get(o.core);o=g.merge(d,o)}if(m){d=new m(k.el,o);d._bindEvent(k.el,d.event,function(){var q=k._validateValue();g.isArray(q)&&q.length==2&&k.showMessage(q[1],q[0])});g.mix(k,{warn:d,single:d.single})}else e.log("\u63d0\u793a\u4fe1\u606f\u7c7b\u914d\u7f6e\u9519\u8bef.")},_validateValue:function(){var d=this.rule,k=this._getValue();d=d.getAll();if(n.attr(this.el,"disabled")||n.hasClass(this.el,"disabled"))return[undefined,h.ignore];if(d.depend&&d.depend.call(this,k)!==true)return[undefined,
h.ignore];for(var m in d){if(m=="required"){var o=d.required.call(this,k);if(o)return this.label?[this.label,h.hint]:[o,h.error];else if(e.isEmpty(k))return["",h.ignore]}if(!("depend".indexOf(m)>-1)){if("ajax".indexOf(m)>-1)break;o=d[m].call(this,k);if(!e.isEmpty(o)){this._ajaxtimer&&this._ajaxtimer.cancel();return[o,h.error]}}}if(d.ajax)return d.ajax.call(this,k);return[this.okMsg||"OK",h.ok]},_getValue:function(){var d=this.el,k=[];switch(n.attr(d,"type")){case "select-one":k=d[d.selectedIndex].value;
break;case "select-multiple":g.each(d,function(m){m.selected&&k.push(m.value)});break;case "radio":case "checkbox":g.each(d,function(m){m.checked&&k.push(m.value)});break;default:k=n.val(d)}return k},addRule:function(d,k){var m=this.rule;if(g.isFunction(d)){m.add(g.guid(),d);return this}var o=b.get(d,k);if(o){m.add(d,o);return this}},removeRule:function(d){this.rule.remove(d)},showMessage:function(d,k,m){this.warn.showMessage(d,k,m)},isValid:function(){var d=this._validateValue();this.showMessage(d[1],
d[0]);return d[1]!==0}});return j},{requires:["dom","event","./utils","./define","./rule","./rule/remote","./warn"]});KISSY.add("validation/rule",function(g,n,p){return p},{requires:["./utils","./rule/base","./rule/normal"]});
KISSY.add("validation/rule/base",function(g,n,p,e){return new function(){var f=new e.storage;this.add=function(b,a,c){g.isFunction(c)&&f.add(b,{name:b,fun:c,text:a})};this.get=function(b,a){var c=f.get(b);if(!c)return null;var j=c.fun;c=c.text;var h=j.length-1,l=[];if(a)if(g.isArray(a))if(a.length>=h){l.push(a[a.length-1]);l=l.concat(a.slice(0,-1))}else{l.push(c);l=l.concat(a)}else if(h>0){l.push(c);l.push(a)}else l.push(c);else l=[c];return function(d){return j.apply(this,[d].concat(l))}};this.toString=
function(b,a){var c=f.get(b);a=a||"\u3010\u89c4\u5219\u540d\u3011\n {0}\n\n\u3010\u9ed8\u8ba4\u63d0\u793a\u4fe1\u606f\u3011\n {1}\n\n\u3010\u51fd\u6570\u4f53\u3011\n {2}";if(c)return e.format(a,c.name,c.text,c.fun.toString())}}},{requires:["dom","event","../utils"]});
KISSY.add("validation/rule/normal",function(g,n,p,e,f){f.add("func","\u6821\u9a8c\u5931\u8d25\u3002",function(b,a,c){b=c.call(this,b);if(b===false)return a;if(!e.isEmpty(b))return b});f.add("regex","\u6821\u9a8c\u5931\u8d25\u3002",function(b,a,c){if(!RegExp(c).test(b))return a});f.add("depend","\u8be5\u5b57\u6bb5\u65e0\u9700\u6821\u9a8c",function(b,a,c){return c.call(this,b)});f.add("ajax","\u6821\u9a8c\u5931\u8d25\u3002",function(b,a,c){return c.call(this,b)});f.add("required","\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\u3002",function(b,a,c){if(g.isArray(b)&&b.length==0)return a;if(e.isEmpty(b)&&c)return a});f.add("equalTo","\u4e24\u6b21\u8f93\u5165\u4e0d\u4e00\u81f4\u3002",function(b,
a,c){if(b!==n.val(g.get(c)))return a});f.add("length","\u5b57\u7b26\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e{0},\u4e14\u4e0d\u80fd\u5927\u4e8e{1}",function(b,a,c,j,h){b=e.getStrLen(b,h);c=e.toNumber(c);j=e.toNumber(j);if(!(b>=c&&b<=j))return e.format(a,c,j)});f.add("minLength","\u4e0d\u80fd\u5c0f\u4e8e{0}\u4e2a\u5b57\u7b26\u3002",function(b,a,c,j){b=e.getStrLen(b,j);c=e.toNumber(c);if(b<c)return e.format(a,c)});f.add("maxLength","\u4e0d\u80fd\u5927\u4e8e{0}\u4e2a\u5b57\u7b26\u3002",function(b,a,c,j){b=e.getStrLen(b,j);c=e.toNumber(c);if(b>c)return e.format(a,c)});f.add("fiter","\u5141\u8bb8\u7684\u683c\u5f0f{0}\u3002",function(b,a,c){if(!RegExp("^.+.(?=EXT)(EXT)$".replace(/EXT/g,
c.split(/\s*,\s*/).join("|")),"gi").test(b))return e.format(a,c)});f.add("range","\u53ea\u80fd\u5728{0}\u81f3{1}\u4e4b\u95f4\u3002",function(b,a,c,j){c=e.toNumber(c);j=e.toNumber(j);if(b<c||b>j)return e.format(a,c,j)});f.add("group","\u53ea\u80fd\u5728{0}\u81f3{1}\u4e4b\u95f4\u3002",function(b,a,c,j){if(g.isArray(b)){b=b.length;if(!(b>=c&&b<=j))return e.format(a,c,j)}});f.add("trim","\u4e24\u7aef\u4e0d\u80fd\u542b\u6709\u7a7a\u683c\u3002",function(b,a){if(/(^\s+)|(\s+$)/g.test(b))return a});f.add("ltrim","\u5b57\u7b26\u4e32\u6700\u524d\u9762\u4e0d\u80fd\u5305\u542b\u7a7a\u683c",function(b,a){if(/^\s+/g.test(b))return a});f.add("rtrim","\u5b57\u7b26\u4e32\u672b\u5c3e\u4e0d\u80fd\u5305\u542b\u7a7a\u683c",function(b,a){if(/\s+$/g.test(b))return a});
f.add("card","\u8eab\u4efd\u8bc1\u53f7\u7801\u4e0d\u6b63\u786e",function(b,a){var c=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],j=0;for(i=0;i<17;i++)j+=parseInt(b.charAt(i))*c[i];c=(12-j%11)%11;if(c==10)c="x";if(b.charAt(17).toLowerCase()!=c)return a});g.each([["chinese",/^[\u0391-\uFFE5]+$/,"\u53ea\u80fd\u8f93\u5165\u4e2d\u6587"],["english",/^[A-Za-z]+$/,"\u53ea\u80fd\u8f93\u5165\u82f1\u6587\u5b57\u6bcd"],["currency",/^\d+(\.\d+)?$/,"\u91d1\u989d\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"],["phone",/^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/,"\u7535\u8bdd\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"],["mobile",/^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$/,"\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"],
["url",/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]':+!]*([^<>""])*$/,"url\u683c\u5f0f\u4e0d\u6b63\u786e\u3002"],["email",/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,"\u8bf7\u8f93\u5165\u6b63\u786e\u7684email\u683c\u5f0f"]],function(b){f.add(b[0],b[2],function(a,c){if(!RegExp(b[1]).test(a))return c})})},{requires:["dom","event","../utils","./base"]});
KISSY.add("validation/rule/remote",function(g,n,p,e){return function(f,b,a){function c(m){return function(o,q,r){if(o&&(o.state===true||o.state===false)){a(o.state,o.message);o.state&&l.add(m,{est:o.state,msg:o.message})}else a(0,"failure");g.isFunction(b.success)&&b.success.call(this,o,q,r);h=null}}var j=null,h=null,l=new e.storage,d=n.attr(f,"name"),k={loading:"loading",type:"POST",dataType:"json",data:{}};g.mix(k,b);k.error=function(m,o,q){g.isFunction(b.error)&&b.success.call(this,m,o,q)};this.check=
function(m){var o=l.get(m);if(o)return[o.msg,o.est];j&&j.cancel();j=g.later(function(){h&&h.abort();k.data[d]=m;k.success=c(m);h=g.io(k)},500);return[k.loading,0]}}},{requires:["dom","event","../utils"]});
KISSY.add("validation/utils",function(g,n){var p={log:g.log,toJSON:function(e){try{eval("var result="+e)}catch(f){return{}}return result},isEmpty:function(e){return e===null||e===n||e===""},format:function(e){var f=Array.prototype.slice.call(arguments,1);return e.replace(/\{(\d+)\}/g,function(b,a){return f[a]})},toNumber:function(e){e=new String(e);e=e.indexOf(".")>-1?parseFloat(e):parseInt(e);return isNaN(e)?0:e},getStrLen:function(e,f){return f?e.replace(/[^\x00-\xFF]/g,"**").length:e.length},storage:function(){this.cache=
{}}};g.augment(p.storage,{add:function(e,f,b){var a=this.cache;if(!a[e]||a[e]&&(b==null||b))a[e]=f},remove:function(e){var f=this.cache;f[e]&&delete f[e]},get:function(e){var f=this.cache;return f[e]?f[e]:null},getAll:function(){return this.cache},each:function(e){var f=this.cache,b;for(b in f)if(e.call(this,b,f[b])===false)break}});return p});
KISSY.add("validation/warn",function(g,n,p,e,f,b,a){p.extend("Alert",f);p.extend("Static",b);p.extend("Float",a);p.BaseClass=e;return p},{requires:["./utils","./warn/base","./warn/baseclass","./warn/alert","./warn/static","./warn/float"]});
KISSY.add("validation/warn/alert",function(g,n,p,e,f){var b=f.Const.enumvalidsign;return function(){return{init:function(){this.single=true},showMessage:function(a,c){if(a==b.error){this.invalidClass&&n.addClass(this.target,this.invalidClass);alert(c);this.target.focus();return false}else this.invalidClass&&n.removeClass(this.target,this.invalidClass)},style:{alert:{invalidClass:"vailInvalid"}}}}},{requires:["dom","event","../utils","../define"]});
KISSY.add("validation/warn/base",function(g,n,p,e,f){var b=new e.storage,a=new e.storage;return{extend:function(c,j){var h=function(k,m){h.superclass.constructor.call(this,k,m)},l=g.isFunction(j)?j():j;if(l.style){for(var d in l.style)this.addStyle(d,g.merge(l.style[d],{core:c}));delete l.style}g.extend(h,f,l);b.add(c,h);return h},addStyle:function(c,j){a.add(c,j)},getStyle:function(c){return a.get(c)},get:function(c){return b.get(c)}}},{requires:["dom","event","../utils","./baseclass"]});
KISSY.add("validation/warn/baseclass",function(g,n,p){function e(f,b){this.target=g.isArray(f)?f[f.length-1]:f;this.el=f;this.single=false;g.mix(this,b||{});this.init()}g.augment(e,g.EventTarget,{init:function(){},_bindEvent:function(f,b,a){switch((n.attr(f,"type")||"input").toLowerCase()){case "radio":case "checkbox":p.on(f,"click",a);break;case "select":case "select-multi":case "file":p.on(f,"change",a);break;default:p.on(f,b,a)}},showMessage:function(){evttype=1}});return e},{requires:["dom","event"]});
KISSY.add("validation/warn/float",function(g,n,p,e,f){var b=f.Const.enumvalidsign;return function(){return{invalidCls:"J_Invalid",init:function(){var a=this,c=a.target,j=n.create(a.template),h=n.get("div.msg",j);g.ready(function(){document.body.appendChild(j)});g.mix(a,{panel:g.one(j),msg:g.one(h)});p.on(a.el,"focus",function(l){n.hasClass(c,a.invalidCls)&&a._toggleError(true,l.target)});p.on(a.el,"blur",function(){a._toggleError(false)})},showMessage:function(a,c,j,h){var l=this.target,d=this.msg;
if(b.ok==a){n.removeClass(l,this.invalidClass);d.html("OK")}else{j!="submit"&&this._toggleError(true,h);n.addClass(l,this.invalidClass);d.html(c)}},_pos:function(a){a=n.offset(a||this.target);var c=this.panel.height();c=a.top-c-20;this.panel.css("left",a.left-10).css("top",c)},_toggleError:function(a,c){var j=this.panel;if(a){n.show(j);this._pos(c)}else n.hide(j)},style:{"float":{template:'<div class="valid-float" style="display:none;"><div class="msg">&nbsp;</div><s>\u25e5\u25e4</s></div>',event:"focus blur",
invalidClass:"vailInvalid"}}}}},{requires:["dom","event","../utils","../define"]});
KISSY.add("validation/warn/static",function(g,n,p,e){var f=e.Const.enumvalidsign,b=n.all;return function(){return{init:function(){var a=b(this.target);if(a=a.attr("data-message")?b(a.attr("data-messagebox")):this.messagebox?b(this.messagebox):n(this.template).appendTo(a.parent())){this.panel=a;this.estate=a.one(".estate");this.label=a.one(".label");this.estate&&this.label&&a.hide()}},showMessage:function(a,c){var j=b(this.el),h=this.panel,l=this.estate,d=this.label,k=g.isNumber(this.anim)?this.anim:
0.1;if(this.invalidClass)a==f.ignore&&a==f.ok?j.removeClass(this.invalidClass):j.addClass(this.invalidClass);j=h.css("display")=="none"?false:true;if(a==f.ignore)j&&h.hide(k);else{l.removeClass("ok tip error");if(a==f.error){l.addClass("error");d.html(c);j||h.show(k)}else if(a==f.ok)if(this.isok===false)j&&h.hide(k);else{j||h.show(k);l.addClass("ok");d.html(this.oktext?this.oktext:c)}else if(a==f.hint){l.addClass("tip");d.html(c);j||h.show(k)}}},style:{text:{template:'<label class="valid-text"><span class="estate"><em class="label"></em></span></label>',
event:"focus blur keyup"},under:{template:'<div class="valid-under"><p class="estate"><span class="label"></span></p></div>',event:"focus blur keyup"}}}}},{requires:["node","../utils","../define"]});KISSY.add("validation",function(g,n){return g.Validation=n},{requires:["validation/base","validation/assets/base.css"]});
