/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Nov 29 14:31
*/
KISSY.add("htmlparser/Parser",function(j,o,l,k){function g(c,m){this.lexer=new l(c);this.opts=m||{};this.document=new k}g.prototype={elements:function(){var c,m,q=this.lexer;do if(c=q.nextNode()){this.document.appendChild(c);if(c.nodeType==1&&!c.isEndTag())(m=c.scanner)&&m.scan(c,q,this.opts)}while(c);return this.document.childNodes},parse:function(){return this.elements()}};return g},{requires:["./lexer/Cursor","./lexer/Lexer","./nodes/Document"]});
KISSY.add("htmlparser/Utils",function(){return{collapseWhitespace:function(j){return j.replace(/[\s\xa0]+/g," ")},isLetter:function(j){return"a"<=j&&"z">=j||"A"<=j&&"Z">=j},isWhitespace:function(j){return/^[\s\xa0]$/.test(j)}}});
KISSY.add("htmlparser/dtd",function(j){j=j.merge;var o={isindex:1,fieldset:1},l={input:1,button:1,select:1,textarea:1,label:1},k=j({a:1},l),g=j({iframe:1},k),c={hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1},m={ins:1,del:1,script:1,style:1},q=j({b:1,acronym:1,bdo:1,"var":1,"#":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1},m),p=j({sub:1,img:1,object:1,sup:1,
basefont:1,map:1,applet:1,font:1,big:1,small:1},q),n=j({p:1},p);l=j({iframe:1},p,l);p={img:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,
address:1,q:1,pre:1,p:1,em:1,dfn:1};var d=j({a:1},l),f={tr:1},b={"#":1},a=j({param:1},p),e=j({form:1},o,g,c,n),h={li:1},i={base:1,link:1,meta:1,title:1},s=j(i,{style:1,script:1}),r={head:1,body:1},t={address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1},u={$nonBodyContent:j({html:1},r,i),$block:t,$blockLimit:{body:1,div:1,td:1,th:1,caption:1,form:1},$inline:d,$body:j({script:1,style:1},t),$cdata:{script:1,
style:1},$empty:{area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1},$listItem:{dd:1,dt:1,li:1},$list:{ul:1,ol:1,dl:1},$nonEditable:{applet:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,script:1,textarea:1,param:1},$removeEmpty:{abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},
$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},html:r,head:s,style:b,body:e,base:{},link:{},meta:{},title:b,col:{},tr:{td:1,th:1},img:{},colgroup:{col:1},noscript:e,td:e,br:{},th:e,center:e,kbd:d,button:j(n,c),basefont:{},h5:d,h4:d,samp:d,h6:d,ol:h,h1:d,h3:d,option:b,h2:d,form:j(o,g,c,n),select:{optgroup:1,option:1},font:d,ins:d,menu:h,abbr:d,label:d,table:{thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1},code:d,script:b,tfoot:f,cite:d,li:e,input:{},iframe:e,
strong:d,textarea:b,noframes:e,big:d,small:d,span:d,hr:{},dt:d,sub:d,optgroup:{option:1},param:{},bdo:d,"var":d,div:e,object:a,sup:d,dd:e,strike:d,area:{},dir:h,map:j({area:1,form:1,p:1},o,m,c),applet:a,dl:{dt:1,dd:1},del:d,isindex:{},fieldset:j({legend:1},p),thead:f,ul:h,acronym:d,b:d,a:l,blockquote:e,caption:d,i:d,u:d,tbody:f,s:d,address:j(g,n),tt:d,legend:d,q:d,pre:j(q,k),p:d,em:d,dfn:d};(function(){var v,w=["article","figure","nav","aside","section","footer"],x;for(x in u)for(var y in u[x])if(y==
"div")for(v=0;v<w.length;v++)u[x][w[v]]=u[x][y];for(v=0;v<w.length;v++)u[w[v]]=u.div;u.$empty["!doctype"]=1})();return u});KISSY.add("htmlparser/lexer/Cursor",function(){function j(o){this.position=o||0}j.prototype={advance:function(){this.position++},retreat:function(){this.position=Math.max(--this.position,0)}};return j});
KISSY.add("htmlparser/lexer/Index",function(){function j(){this.lineCursors=[]}function o(k,g){for(var c=0;c<k.length;c++)if(k[c].position===g.position)return c;return-1}function l(k,g){for(var c=0;c<k.length;c++)if(k[c].position>g.position)break;return c}j.prototype={add:function(k){o(this.lineCursors,k)==-1&&this.lineCursors.splice(l(this.lineCursors,k),0,k)},remove:function(k){var g=this.lineCursors;k=o(this.lineCursors,k);k!=-1&&g.splice(k,1)},row:function(k){return l(this.lineCursors,k)-1},col:function(k){var g=
l(this.lineCursors,k)-1;return k.position-this.lineCursors[g]}};return j});
KISSY.add("htmlparser/lexer/Lexer",function(j,o,l,k,g,c,m,q,p){function n(d){this.page=new l(d);this.cursor=new o;this.nodeFactory=this}n.prototype={setPosition:function(d){this.cursor.position=d},getPosition:function(){return this.cursor.position},nextNode:function(d){var f,b,a=this.cursor,e=this.page;f=a.position;b=e.getChar(a);switch(b){case -1:d=null;break;case "<":b=e.getChar(a);if(b==-1)d=this.makeString(f,a.position);else if(b=="/"||c.isLetter(b)){e.ungetChar(a);d=this.parseTag(f)}else if("!"==
b){b=e.getChar(a);if(b==-1)d=this.makeString(f,a.position);else if(">"==b)d=this.makeComment(f,a.position);else{e.ungetChar(a);if("-"==b)d=this.parseComment(f,d);else{e.ungetChar(a);d=this.parseTag(f)}}}else{e.ungetChar(a);d=this.parseString(f,d)}break;default:e.ungetChar(a);d=this.parseString(f,d)}return d},makeComment:function(d,f){var b;b=f-d;if(0!=b){if(2>b)return this.makeString(d,f);b=this.nodeFactory.createCommentNode(this.page,d,f)}else b=null;return b},makeString:function(d,f){var b=null;
if(f-d>0)b=this.nodeFactory.createStringNode(this.page,d,f);return b},makeCData:function(d,f){var b=null;if(f-d>0)b=this.nodeFactory.createCDataNode(this.page,d,f);return b},makeTag:function(d,f,b){var a;a=f-d;if(0!=a){if(2>a)return this.makeString(d,f);d=this.nodeFactory.createTagNode(this.page,d,f,b)}else d=null;return d},createTagNode:function(d,f,b,a){return new q(d,f,b,a)},createStringNode:function(d,f,b){return new k(d,f,b)},createCDataNode:function(d,f,b){return new g(d,f,b)},createCommentNode:function(d,
f,b){return new p(d,f,b)},parseTag:function(d){var f,b=[],a=[],e,h=this.page,i=0,s=this.cursor;for(b[0]=s.position;!f;){b[i+1]=s.position;e=h.getChar(s);switch(i){case 0:if(e==-1||">"==e||"<"==e){if("<"==e){h.ungetChar(s);b[i+1]=s.position}f=true}else c.isWhitespace(e)||(i=1);break;case 1:if(-1==e||">"==e||"<"==e){if("<"==e){h.ungetChar(s);b[i+1]=s.getPosition}this.standalone(a,b);f=true}else if(c.isWhitespace(e)){b[6]=b[2];i=6}else if("="==e)i=2;break;case 2:if(-1==e||">"==e){this.standalone(a,b);
f=true}else if("'"==e){i=4;b[4]=b[3]}else if('"'==e){i=5;b[5]=b[3]}else c.isWhitespace(e)||(i=3);break;case 3:if(-1==e||">"==e){this.naked(a,b);f=true}else if(c.isWhitespace(e)){this.naked(a,b);b[0]=b[4];i=0}break;case 4:if(-1==e){this.single_quote(a,b);f=true}else if("'"==e){this.single_quote(a,b);b[0]=b[5]+1;i=0}break;case 5:if(-1==e){this.double_quote(a,b);f=true}else if('"'==e){this.double_quote(a,b);b[0]=b[6]+1;i=0}break;case 6:if(-1==e){this.standalone(a,b);b[0]=b[6];h.ungetChar(s);i=0}else if(!c.isWhitespace(e))if("="==
e){b[2]=b[6];b[3]=b[7];i=2}else{this.standalone(a,b);b[0]=b[6];h.ungetChar(s);i=0}break;default:throw Error("how ** did we get in state "+i);}}return this.makeTag(d,s.position,a)},parseComment:function(d,f){var b,a,e=this.page,h=this.cursor,i;b=false;for(i=0;!b;){a=e.getChar(h);if(-1==a)b=true;else switch(i){case 0:if(">"==a)b=true;if("-"==a)i=1;else return this.parseString(d,f);break;case 1:if("-"==a){a=e.getChar(h);if(-1==a)b=true;else if(">"==a)b=true;else{e.ungetChar(h);i=2}}else return this.parseString(d,
f);break;case 2:if("-"==a)i=3;else if(-1==a)return this.parseString(d,f);break;case 3:i="-"==a?4:2;break;case 4:if(">"==a)b=true;else c.isWhitespace(a)||(i=2);break;default:throw Error("how ** did we get in state "+i);}}return this.makeComment(d,h.position)},parseString:function(d,f){for(var b=0,a,e=this.page,h=this.cursor,i=0;!b;){a=e.getChar(h);if(-1==a)b=1;else if(f&&0==i&&("'"==a||'"'==a))i=a;else if(f&&0!=i&&"\\"==a){a=e.getChar(h);-1!=a&&"\\"!=a&&a!=i&&e.ungetChar(h)}else if(f&&a==i)i=0;else if(f&&
0==i&&a=="/"){a=e.getChar(h);if(-1==a)b=1;else if("/"==a){do a=e.getChar(h);while(-1!=a&&"\n"!=a)}else if("*"==a){do{do a=e.getChar(h);while(-1!=a&&"*"!=a);a=e.getChar(h);a=="*"&&e.ungetChar(h)}while(-1!=a&&"/"!=a)}else e.ungetChar(h)}else if(0==i&&"<"==a){a=e.getChar(h);if(-1==a)b=1;else{if("/"==a||c.isLetter(a)||"!"==a){b=1;e.ungetChar(h)}e.ungetChar(h)}}}return this.makeString(d,h.position)},parseCDATA:function(d,f){var b,a,e,h,i,s,r=this.cursor,t=this.page;b=r.position;a=0;e=false;h="";for(s=
false;!e;){i=t.getChar(r);switch(a){case 0:switch(i){case -1:e=true;break;case "'":if(d&&!s)if(""==h)h="'";else if("'"==h)h="";break;case '"':if(d&&!s)if(""==h)h='"';else if('"'==h)h="";break;case "\\":if(d)if(""!=h){i=t.getChar(r);if(-1==i)e=true;else i!="\\"&&i!=h&&t.ungetChar(r)}break;case "/":if(d)if(""==h){i=t.getChar(r);if(-1==i)e=true;else if("/"==i)s=true;else if("*"==i){do{do i=t.getChar(r);while(-1!=i&&"*"!=i);i=t.getChar(r);i=="*"&&t.ungetChar(r)}while(-1!=i&&"/"!=i)}else t.ungetChar(r)}break;
case "\n":s=false;break;case "<":if(d){if(""==h)a=1}else a=1}break;case 1:switch(i){case -1:e=true;break;case "/":a=!f||t.getText(r.position,r.position+f.length)===f&&!t.getText(r.position+f.length,r.position+f.length+1).match(/\w/)?2:0;break;case "!":i=t.getChar(r);if(-1==i)e=true;else if("-"==i){i=t.getChar(r);if(-1==i)e=true;else a="-"==i?3:0}else a=0;break;default:a=0}break;case 2:s=false;if(-1==i)e=true;else if(c.isLetter(i)){e=true;t.ungetChar(r);t.ungetChar(r);t.ungetChar(r)}else a=0;break;
case 3:s=false;if(-1==i)e=true;else if("-"==i){i=t.getChar(r);if(-1==i)e=true;else if("-"==i){i=t.getChar(r);if(-1==i)e=true;else if(">"==i)a=0;else{t.ungetChar(r);t.ungetChar(r)}}else t.ungetChar(r)}break;default:throw Error("unexpected "+a);}}return this.makeCData(b,r.position)},single_quote:function(d,f){var b=this.page;d.push(new m(b.getText(f[1],f[2]),"=",b.getText(f[4]+1,f[5]),"'"))},double_quote:function(d,f){var b=this.page;d.push(new m(b.getText(f[1],f[2]),"=",b.getText(f[5]+1,f[6]),'"'))},
standalone:function(d,f){d.push(new m(this.page.getText(f[1],f[2])))},naked:function(d,f){var b=this.page;d.push(new m(b.getText(f[1],f[2]),"=",b.getText(f[3],f[4])))}};return n},{requires:["./Cursor","./Page","../nodes/Text","../nodes/CData","../Utils","../nodes/Attribute","../nodes/Tag","../nodes/Comment"]});
KISSY.add("htmlparser/lexer/Page",function(j,o){function l(k){this.source=k;this.lineIndex=new o}l.prototype={getChar:function(k){var g=this.source,c=k.position;if(c>=g.length)return-1;var m=g.charAt(c);k.advance();if("\r"===m){m="\n";c=k.position;g.charAt(c)==="\n"&&k.advance()}"\n"===m&&this.lineIndex.add(k);return m},ungetChar:function(k){var g=this.source;k.retreat();var c=k.position,m=g.charAt(c);if(m==="\n"&&0!=c){m=g.charAt(c-1);"\r"===m&&k.retreat()}},getText:function(k,g){return this.source.slice(k,
g)},row:function(k){return this.lineIndex.row(k)},col:function(k){return this.lineIndex.col(k)}};return l},{requires:["./Index"]});KISSY.add("htmlparser/nodes/Attribute",function(j){function o(l,k,g,c){this.nodeType=2;this.name=l;this.assignMent=k;this.value=g;this.quote=c}j.augment(o,{clone:function(){var l=new o;j.mix(l,this);return l},equals:function(l){return this.name==l.name&&this.value==l.value&&this.nodeType==l.nodeType}});o.prototype.clone=function(){var l=new o;j.mix(l,this);return l};return o});
KISSY.add("htmlparser/nodes/CData",function(j,o){function l(){l.superclass.constructor.apply(this,arguments);this.nodeType=4;this.nodeName="#cdata"}j.extend(l,o,{writeHtml:function(k,g){var c=this.toHtml();if(!g||g.onCData(this)!==false)k.cdata(c)}});return l},{requires:["./Text"]});
KISSY.add("htmlparser/nodes/Comment",function(j,o){function l(){l.superclass.constructor.apply(this,arguments);this.nodeType=8;this.nodeName="#comment"}j.extend(l,o,{writeHtml:function(k,g){var c=this.toHtml();if(!g||g.onComment(this)!==false)k.comment(c)}});return l},{requires:["./Tag"]});KISSY.add("htmlparser/nodes/Document",function(j,o){function l(){this.childNodes=[];this.nodeType=9;this.nodeName="#document"}j.extend(l,o,{writeHtml:function(k,g){this._writeChildrenHtml(k,g)}});return l},{requires:["./Tag"]});
KISSY.add("htmlparser/nodes/Node",function(j){function o(l,k,g){this.parentNode=null;this.page=l;this.startPosition=k;this.endPosition=g;this.nextSibling=this.previousSibling=this.nodeName=null;if(j.Config.debug)this.toHtmlContent=this.toHtml()}o.prototype={toHtml:function(){if(this.page)return this.page.getText(this.startPosition,this.endPosition)},toString:function(){var l=[];l.push(this.nodeName+"  ["+this.startPosition+":"+this.endPosition+"]\n");l.push(this.toHtml());return l.join("")}};return o});
KISSY.add("htmlparser/nodes/Tag",function(j,o,l,k,g,c,m){function q(a,e,h,i){q.superclass.constructor.apply(this,arguments);this.childNodes=[];this.lastChild=this.firstChild=null;this.attributes=i||[];this.nodeType=1;i=this.attributes;if(i[0]){this.nodeName=i[0].name.toLowerCase();this.tagName=this.nodeName.replace(/\//,"");this.isEmptyXmlTag=!!m.$empty[this.nodeName];if(!this.isEmptyXmlTag)this.isEmptyXmlTag=/\/$/.test(this.nodeName);i.splice(0,1)}var s=i[i.length-1];if(s=!!(s&&/\/$/.test(s.name)))i.length-=
1;this.closed=this.isEmptyXmlTag=this.isEmptyXmlTag||s;this.closedEndPosition=this.closedStartPosition=-1;this.scanner=f[this.nodeName]||l}function p(a){var e=a.childNodes;a.firstChild=e[0];a.lastChild=e[e.length-1];if(e.length>=1){e[0].nextSibling=e[0].nextSibling=null;e[0].parentNode=a}if(e.length>1){for(var h=0;h<e.length-1;h++){e[h].nextSibling=e[h+1];e[h+1].previousSibling=e[h];e[h+1].parentNode=a}e[e.length-1].nextSibling=null}}function n(a,e){for(var h=0;h<a.length;h++)if(a[h].name==e)return a[h];
return null}var d=m.$cdata,f={textarea:g},b;for(b in d)f[b]=k;j.extend(q,o,{clone:function(){var a=new q,e=[];j.each(this.attributes,function(h){e.push(h.clone())});j.mix(a,{childNodes:[],firstChild:null,lastChild:null,attributes:e,nodeType:this.nodeType,nodeName:this.nodeName,tagName:this.tagName,isEmptyXmlTag:this.isEmptyXmlTag,scanner:this.scanner,closed:this.closed,closedStartPosition:this.closedStartPosition,closedEndPosition:this.closedEndPosition});return a},equals:function(a){if(!a||this.nodeName!=
a.nodeName)return 0;if(this.nodeType!=a.nodeType)return 0;if(this.attributes.length!=a.attributes.length)return 0;for(var e=0;e<this.attributes.length;e++)if(!this.attributes[e].equals(a.attributes[e]))return 0;return 1},isEndTag:function(){return/^\//.test(this.nodeName)},appendChild:function(a){this.childNodes.push(a);p(this)},insertBefore:function(a){var e=a.parentNode.childNodes,h=j.indexOf(a,e);e.splice(h,0,this);p(a.parentNode)},insertAfter:function(a){var e=a.parentNode.childNodes,h=j.indexOf(a,
e);h==e.length-1?a.parentNode.appendChild(this):this.insertBefore(a.parentNode.childNodes[[h+1]])},empty:function(){this.childNodes=[];p(this)},removeChild:function(a){var e=a.parentNode.childNodes,h=j.indexOf(a,e);e.splice(h,1);p(a.parentNode)},getAttribute:function(a){return(a=n(this.attributes,a))&&a.value},setAttribute:function(a,e){var h=n(this.attributes,a);if(h)h.value=e;else this.attributes.push(new c(a,"=",e,'"'))},removeAttribute:function(a){(a=n(this.attributes,a))&&this.attributes.splice(j.indexOf(a,
this.attributes),1)},writeHtml:function(a,e){var h=this,i;i=h.tagName;if(i=="!doctype")a.append(this.toHtml());else{if(e){if(!(i=e.onTagName(i)))return;h.tagName=i;i=e.onTag(h);if(i===false)return;if(i)h=i;if(h.nodeType!==1){h.writeHtml(a,e);return}if(!h.tagName){j.each(h.childNodes,function(u){u.writeHtml(a,e)});return}}a.openTag(h);for(var s=h.attributes,r=0;r<s.length;r++){var t=s[r];i=t.name;if(e){if(!(i=e.onAttributeName(i)))continue;if(e.onAttribute(t)===false)continue}a.attribute(t,h)}a.openTagClose(h);
if(!h.isEmptyXmlTag){this._writeChildrenHtml(a,e);a.closeTag(h)}}},_writeChildrenHtml:function(a,e){j.each(this.childNodes,function(h){h.writeHtml(a,e)})}});return q},{requires:["./Node","../scanners/TagScanner","../scanners/QuoteCdataScanner","../scanners/TextareaScanner","./Attribute","../dtd"]});
KISSY.add("htmlparser/nodes/Text",function(j,o){function l(){l.superclass.constructor.apply(this,arguments);this.nodeType=3;this.nodeName="#text"}j.extend(l,o,{writeHtml:function(k,g){var c=this.toHtml();if(!g||g.onText(this)!==false)k.text(c)}});return l},{requires:["./Node"]});
KISSY.add("htmlparser/scanners/CdataScanner",function(){return{scan:function(j,o,l){l=o.parseCDATA(l.quoteSmart,j.nodeName);var k=o.getPosition(),g=o.nextNode();if(g)if(g.nodeType!=1||!(g.isEndTag()&&g.tagName==j.tagName))o.setPosition(k);j.closed=true;l&&j.appendChild(l)}}});KISSY.add("htmlparser/scanners/QuoteCdataScanner",function(j,o){return{scan:function(l,k,g){g=g||{};g.quoteSmart=1;o.scan(l,k,g);g.quoteSmart=0}}},{requires:["./CdataScanner"]});
KISSY.add("htmlparser/scanners/TagScanner",function(j,o){function l(c,m){c.closed=1;if(!m.fixByDtd)return 0;var q=1,p=[].concat(c.childNodes);j.each(p,function(b){if(!k(c,b)){q=0;return false}});if(q)return 0;var n=c.clone(),d=c,f=[];j.each(p,function(b){if(k(n,b))n.appendChild(b);else{if(n.childNodes.length){n.insertAfter(d);d=n;n=c.clone()}if(b.equals(n)){b.insertAfter(d);d=b}else if(k(b,n)){n=c.clone();j.each(b.childNodes,function(a){n.appendChild(a)});b.empty();b.insertAfter(d);d=b;b.appendChild(n);
f.push(n);n=c.clone()}else{b.insertAfter(d);d=b}}});n.childNodes.length&&n.insertAfter(d);c.parentNode.removeChild(c);j.each(f,function(b){l(b,m)});return 1}function k(c,m){if(c.nodeType==9)return 1;if(m.nodeType==8)return 1;var q=m.tagName||m.nodeName;if(m.nodeType==3)q="#";return!!o[c.tagName][q]}var g={scan:function(c,m,q){var p,n,d;d=q.stack=q.stack||[];if(c.isEmptyXmlTag)c.closed=true;else{do{if(p=m.nextNode())if(p.nodeType===1)if(p.isEndTag()&&p.tagName==c.tagName)p=null;else if(p.isEndTag()){if(p.isEndTag()){var f=
-1;for(n=d.length-1;n>=0;n--)if(d[n].tagName===p.tagName){f=n;break}if(f!=-1){d[d.length-1].appendChild(c);l(c,q);for(n=d.length-1;n>f;n--){c=d[n];d[n-1].appendChild(c);l(c,q)}c=d[f];d.length=f;p=null}}}else if(n=p.scanner)if(n===g)if(p.isEmptyXmlTag)c.appendChild(p);else{d.push(c);c=p}else{n.scan(p,m,q);c.appendChild(p)}else c.appendChild(p);else c.appendChild(p);if(p==null)if(d.length>0){p=d[d.length-1];if(p.nodeType==1)if(p.scanner===g){d.length-=1;p.appendChild(c);l(c,q);c=p}else p=null;else p=
null}}while(p);l(c,q)}}};return g},{requires:["../dtd"]});KISSY.add("htmlparser/scanners/TextareaScanner",function(j,o){return{scan:function(l,k,g){g=g||{};o.scan(l,k,g)}}},{requires:["./CdataScanner"]});
KISSY.add("htmlparser/writer/basic",function(){function j(){this.output=[]}j.prototype={append:function(){for(var o=this.output,l=arguments,k,g=0;g<l.length;g++){k=l[g];if(k.length>1)for(var c=0;c<k.length;c++)o.push(k.charAt(c));else o.push(k)}return this},openTag:function(o){this.append("<",o.tagName)},openTagClose:function(o){o.isEmptyXmlTag&&this.append(" ","/");this.append(">")},closeTag:function(o){this.append("</",o.tagName,">")},attribute:function(o){this.append(" ",o.name,'="',(o.value||
o.name).replace(/"/g,"&quote;"),'"')},text:function(o){this.append(o)},cdata:function(o){this.append(o)},comment:function(o){this.append(o)},getHtml:function(){return this.output.join("")}};return j});
KISSY.add("htmlparser/writer/beautify",function(j,o,l,k){function g(){g.superclass.constructor.apply(this,arguments);this.inPre=0;this.indentChar="\t";this.allowIndent=this.indentLevel=0;this.rules={};for(var c in j.merge(l.$nonBodyContent,l.$block,l.$listItem,l.$tableContent,{select:1,script:1,style:1}))this.setRules(c,{allowIndent:1,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});this.setRules("option",{breakBeforeOpen:1});this.setRules("optiongroup",{breakBeforeOpen:1});
this.setRules("br",{breakAfterOpen:1});this.setRules("title",{allowIndent:0,breakBeforeClose:0,breakAfterOpen:0});this.setRules("pre",{allowIndent:0})}j.extend(g,o,{indentation:function(){this.inPre||this.append(Array(this.indentLevel+1).join(this.indentChar));this.allowIndent=0},lineBreak:function(){var c=this.output;if(!this.inPre&&c.length){for(var m=c.length-1;m>=0;m--)if(!/[\r\n\t ]/.test(c[m]))break;c.length=m+1;this.append("\n")}this.allowIndent=1},setRules:function(c,m){this.rules[c]||(this.rules[c]=
{});j.mix(this.rules[c],m)},openTag:function(c){var m=this.rules[c.tagName]||{};if(this.allowIndent)this.indentation();else if(m.breakBeforeOpen){this.lineBreak();this.indentation()}g.superclass.openTag.apply(this,arguments)},openTagClose:function(c){var m=c.tagName,q=this.rules[m]||{};if(c.isEmptyXmlTag)this.append(" />");else{this.append(">");q.allowIndent&&this.indentLevel++}q.breakAfterOpen&&this.lineBreak();if(m==="pre")this.inPre=1},closeTag:function(c){var m=c.tagName,q=this.rules[m]||{};q.allowIndent&&
this.indentLevel--;if(this.allowIndent)this.indentation();else if(q.breakBeforeClose){this.lineBreak();this.indentation()}g.superclass.closeTag.apply(this,arguments);if(m==="pre")this.inPre=0;q.breakAfterClose&&this.lineBreak()},text:function(c){this.allowIndent&&this.indentation();this.inPre||(c=k.collapseWhitespace(c));this.append(c)},comment:function(c){this.allowIndent&&this.indentation();this.append(c)},cdata:function(c){this.allowIndent&&this.indentation();this.append(c)}});return g},{requires:["./basic",
"../dtd","../Utils"]});
KISSY.add("htmlparser/writer/filter",function(j){function o(){this.tagNames=[];this.attributeNames=[];this.tags=[];this.comments=[];this.texts=[];this.cdatas=[];this.attributes=[]}function l(g,c){for(var m=0;m<g.length;m++)j.each(g[m].value,function(q){c=c.replace(q[0],q[1])});return c}function k(g,c,m){for(var q=0;q<g.length;q++)if(g[q].value.apply(null,c)===false)return false;return m}o.prototype={addRules:function(g,c){c=c||10;for(var m in g){var q=this[m],p;a:{for(p=0;p<q.length;p++)if(q[p].priority>
c){p=p;break a}p=q.length}q.splice(p,0,{value:g[m],priority:c})}},onTagName:function(g){return l(this.tagNames,g)},onAttributeName:function(g){return l(this.attributeNames,g)},onText:function(g){return k(this.texts,[g.toHtml(),g],g)},onCData:function(g){return k(this.cdatas,[g.toHtml(),g],g)},onAttribute:function(g,c){return k(this.attributes,[c,g],c)},onComment:function(g){return k(this.comments,[g.toHtml(),g],g)},onNode:function(g){var c=g.nodeType;if(c===1)return this.onTag(g);else if(c===3)return this.onText(g.toHtml(),
g);else if(c===8)return this.onComment(g.toHtml(),g)},onTag:function(g){for(var c=["^",g.tagName,"$"],m=this.tags,q,p=0;p<c.length;p++)for(var n=c[p],d=0;d<m.length;d++){var f=m[d].value;if(f[n]){if((q=f[n](g))===false)return false;if(q&&q!=f)return this.onNode(q);if(!g.name)return g}}return g}};return o});
KISSY.add("htmlparser/writer/minify",function(j,o,l){function k(n){return n.replace(/"/g,"&quote;")}function g(n,d){var f=n.nodeName,b=d.name,a=d.value||"";if(/^on[a-z]+/.test(b))a=m(a).replace(/^javascript:[\s\xa0]*/i,"").replace(/[\s\xa0]*;$/,"");else if(b==="class")a=q(m(a));else if(/^(?:a|area|link|base)$/.test(f)&&b==="href"||f==="img"&&/^(?:src|longdesc|usemap)$/.test(b)||f==="object"&&/^(?:classid|codebase|data|usemap)$/.test(b)||f==="q"&&b==="cite"||f==="blockquote"&&b==="cite"||(f==="ins"||
f==="del")&&b==="cite"||f==="form"&&b==="action"||f==="input"&&(b==="src"||b==="usemap")||f==="head"&&b==="profile"||f==="script"&&(b==="src"||b==="for")||/^(?:a|area|object|button)$/.test(f)&&b==="tabindex"||f==="input"&&(b==="maxlength"||b==="tabindex")||f==="select"&&(b==="size"||b==="tabindex")||f==="textarea"&&/^(?:rows|cols|tabindex)$/.test(b)||f==="colgroup"&&b==="span"||f==="col"&&b==="span"||(f==="th"||f=="td")&&(b==="rowspan"||b==="colspan"))a=m(a);else if(b==="style")a=m(a).replace(/[\s\xa0]*;[\s\xa0]*$/,
"");return a}function c(){c.superclass.constructor.apply(this,arguments);this.inPre=0}var m=j.trim,q=l.collapseWhitespace,p=RegExp("^(?:class|id|style|title|lang|dir|on(?:focus|blur|change|click|dblclick|mouse(?:down|up|over|move|out)|key(?:press|down|up)))$");j.extend(c,o,{comment:function(n){if(/\[if[^\]]+\]/.test(n)){n=n.replace(/^(\[[^\]]+\]>)[\s\xa0]*/,"$1").replace(/[\s\xa0]*(<!\[endif\])$/,"$1");c.superclass.comment.call(this,n)}},openTag:function(n){if(n.tagName=="pre")this.inPre=1;c.superclass.openTag.apply(this,
arguments)},closeTag:function(n){if(n.tagName=="pre")this.inPre=0;c.superclass.closeTag.apply(this,arguments)},cdata:function(n){n=m(n).replace(/^(?:[\s\xa0]*\/\*[\s\xa0]*<!\[CDATA\[[\s\xa0]*\*\/|[\s\xa0]*\/\/[\s\xa0]*<!\[CDATA\[.*)/,"").replace(/(?:\/\*[\s\xa0]*\]\]>[\s\xa0]*\*\/|\/\/[\s\xa0]*\]\]>)[\s\xa0]*$/,"");c.superclass.cdata.call(this,n)},attribute:function(n,d){var f=n.name,b=n.value||"",a;a=n.name;a=m(n.value||"")?0:d==="input"&&a==="value"||p.test(a);if(!(a=a)){a=d.nodeName;var e=n.name,
h=n.value||"";h=m(h.toLowerCase());a=a==="script"&&e==="language"&&h==="javascript"||a==="form"&&e==="method"&&h==="get"||a==="input"&&e==="type"&&h==="text"||a==="script"&&e==="type"&&h==="text/javascript"||a==="style"&&e==="type"&&h==="text/css"||a==="area"&&e==="shape"&&h==="rect"}if(!a)if(/^(?:checked|disabled|selected|readonly|defer|multiple|nohref|noshape|nowrap|noresize|compact|ismap)$/i.test(f))this.append(" ",f);else/^[a-zA-Z0-9-._:]+$/.test(b)?this.append(" ",f,"=",k(g(d,n))):this.append(" ",
f,'="',k(g(d,n)),'"')},text:function(n){this.inPre||this.append(q(n))}});return c},{requires:["./basic","../Utils"]});KISSY.add("htmlparser",function(j,o,l,k,g,c,m){return{Lexer:o,Parser:l,BasicWriter:k,BeautifyWriter:g,MinifyWriter:c,Filter:m}},{requires:["htmlparser/lexer/Lexer","htmlparser/Parser","htmlparser/writer/basic","htmlparser/writer/beautify","htmlparser/writer/minify","htmlparser/writer/filter"]});
