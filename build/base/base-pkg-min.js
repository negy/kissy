/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Dec 3 16:44
*/
KISSY.add("attribute",function(d,h){function f(){this.__attrs={};this.__attrVals={}}function g(a){a+="";return a.charAt(0).toUpperCase()+a.substring(1)}d.augment(f,{__getDefAttrs:function(){return d.clone(this.__attrs)},addAttr:function(a,b){this.__attrs[a]=d.clone(b||{});return this},addAttrs:function(a,b){var c=this;d.each(a,function(e,i){if(i in b)e.value=b[i];c.addAttr(i,e)});return c},hasAttr:function(a){return a&&a in(this.__attrs||{})},removeAttr:function(a){if(this.hasAttr(a)){delete this.__attrs[a];
delete this.__attrVals[a]}return this},set:function(a,b){var c=this.get(a);if(c!==b)if(false!==this.__fireAttrChange("before",a,c,b)){this.__set(a,b);this.__fireAttrChange("after",a,c,this.__attrVals[a]);return this}},__fireAttrChange:function(a,b,c,e){return this.fire(a+g(b)+"Change",{attrName:b,prevVal:c,newVal:e})},__set:function(a,b){var c,e=this.__attrs[a];if(e=e&&e.setter)c=e.call(this,b);if(c!==h)b=c;this.__attrVals[a]=b},get:function(a){var b;b=(b=this.__attrs[a])&&b.getter;a=a in this.__attrVals?
this.__attrVals[a]:this.__getDefAttrVal(a);if(b)a=b.call(this,a);return a},__getDefAttrVal:function(a){a=this.__attrs[a];var b;if(a){if(b=a.valueFn){b=b.call(this);if(b!==h)a.value=b;delete a.valueFn}return a.value}},reset:function(a){if(this.hasAttr(a))return this.set(a,this.__getDefAttrVal(a));for(a in this.__attrs)this.hasAttr(a)&&this.reset(a);return this}});d.Attribute=f;f.__capitalFirst=g});
KISSY.add("base",function(d){function h(f){d.Attribute.call(this);for(var g=this.constructor;g;){var a=g.ATTRS;if(a){var b=void 0;for(b in a)a.hasOwnProperty(b)&&!this.hasAttr(b)&&this.addAttr(b,a[b])}g=g.superclass?g.superclass.constructor:null}if(f)for(var c in f)f.hasOwnProperty(c)&&this.__set(c,f[c])}d.augment(h,d.EventTarget,d.Attribute);d.Base=h});
