/*
Copyright 2011, KISSY UI Library v1.1.8dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("node",function(a){function i(c,f,k){if(!(this instanceof i))return new i(c,f,k);if(c){if(a.isString(c)){c=p.create(c,f,k);if(c.nodeType===11)return new a.NodeList(c.childNodes)}else if(c instanceof i)return c;else c=c;this[0]=c}else this.length=0}var p=a.DOM;i.TYPE="-ks-Node";a.augment(i,{length:1,getDOMNode:function(){return this[0]},nodeType:i.TYPE});a.one=function(c,f){var k=a.get(c,f);return k?new i(k):null};a.Node=i});
KISSY.add("nodelist",function(a){function i(f){if(!(this instanceof i))return new i(f);p.push.apply(this,a.makeArray(f)||[])}var p=Array.prototype,c=a.DOM._isElementNode;a.mix(i.prototype,{length:0,item:function(f){var k=null,n,g;if(c(f)){n=0;for(g=this.length;n<g;n++)if(f===this[n]){f=n;break}}if(c(this[f]))k=new a.Node(this[f]);return k},getDOMNodes:function(){return p.slice.call(this)},each:function(f,k){var n=this.length,g=0,o;for(o=new a.Node(this[0]);g<n&&f.call(k||o,o,g,this)!==false;o=new a.Node(this[++g]));
return this}});a.all=function(f,k){return new i(a.query(f,k,true))};a.NodeList=i});
KISSY.add("node-attach",function(a,i){function p(b,d,e,h){b=[this[b?v:s]()].concat(a.makeArray(d));if(d[e]===i)return h.apply(g,b);else{h.apply(g,b);return this}}function c(b,d){a.each(b,function(e){a.each([q,w],function(h,l){h[e]=function(j){switch(d){case t:return function(){return p.call(this,l,arguments,1,j)};case r:return function(){return p.call(this,l,arguments,0,j)};case x:return function(){var m=this[l?v:s]();return(m=j.apply(g,[m].concat(a.makeArray(arguments))))?new (a[a.isArray(m)?"NodeList":
"Node"])(m):null};default:return function(){var m=this[l?v:s]();m=j.apply(g,[m].concat(a.makeArray(arguments)));return m===i?this:m}}}(g[e])})})}function f(b,d,e){b&&a.each(this,function(h){var l;if(d||a.isString(b))l=g.create(b);else{if(y(b,1)||y(b,3))l=b;if(B(b))l=b[0]}g[e](l,h)});return this}function k(b,d){if((b=a.get(b))&&b.appendChild)a.each(this,function(e){g[d](e,b)});return this}function n(b,d){b.__wrap=b.__wrap||[];b.__wrap.push(d)}var g=a.DOM,o=a.Event,y=g._nodeTypeIs,B=g._isKSNode,z=a.EventTarget,
u=a.Node,A=a.NodeList,q=u.prototype,w=A.prototype,s="getDOMNode",v=s+"s",t=1,r=2,x=4;a.mix(q,{one:function(b){return a.one(b,this[0])},all:function(b){return a.all(b,this[0])}});c(["data","removeData"],t);c(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);c(["attr","removeAttr"],t);c(["val","text"],r);c(["css"],t);c(["width","height"],r);c(["offset"],r);c(["scrollIntoView"]);c(["parent","next","prev","siblings","children"],x);c(["contains"]);c(["html"],r);c(["remove"]);a.each(["insertBefore",
"insertAfter"],function(b){q[b]=function(d){g[b].call(g,this[0],d);return this}});a.each([q,w],function(b,d){a.each(["append","prepend"],function(e){b[e]=function(h){return f.call(this,h,d,e)};b[e+"To"]=function(h){return k.call(this,h,e)}})});a.augment(u,z,{fire:null,on:function(b,d,e){function h(j){var m=a.makeArray(arguments);m.shift();j.target=new u(j.target);if(j.relatedTarget)j.relatedTarget=new u(j.relatedTarget);m.unshift(j);return d.apply(e||l,m)}var l=this;o.add(this[0],b,h,e);n(d,h);return this},
detach:function(b,d,e){if(a.isFunction(d)){d=d.__wrap||[];for(var h=0;h<d.length;h++)o.remove(this[0],b,d[h],e)}else o.remove(this[0],b,d,e);return this}});a.augment(A,z,{fire:null});q._supportSpecialEvent=true;a.each({on:"add",detach:"remove"},function(b,d){w[d]=function(e,h,l){for(var j=0;j<this.length;j++)this.item(j).on(e,h,l)}})});
