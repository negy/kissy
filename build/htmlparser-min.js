/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Nov 16 20:19
*/
KISSY.add("htmlparser/Parser",function(j,l,m){function f(d){this.lexer=d}function g(d){this.lexer=new m(d)}f.prototype={nextNode:function(){var d,i,o,q=this.lexer;if(d=q.nextNode())if(d.nodeType==1)if(d.isEndTag())return this.nextNode();else if(o=d.scanner){i=[];d=o.scan(d,q,i)}return d}};g.prototype={elements:function(){return new f(this.lexer)},parse:function(){for(var d=[],i,o=this.elements();i=o.nextNode();)d.push(i);return d}};return g},{requires:["./lexer/Cursor","./lexer/Lexer"]});
KISSY.add("htmlparser/Utils",function(){return{collapseWhitespace:function(j){return j.replace(/[\s\xa0]+/g," ")},isLetter:function(j){return"a"<=j&&"z">=j||"A"<=j&&"Z">=j},isWhitespace:function(j){return/^[\s\xa0]$/.test(j)}}});
KISSY.add("htmlparser/dtd",function(j){j=j.merge;var l={isindex:1,fieldset:1},m={input:1,button:1,select:1,textarea:1,label:1},f=j({a:1},m),g=j({iframe:1},f),d={hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1},i={ins:1,del:1,script:1,style:1},o=j({b:1,acronym:1,bdo:1,"var":1,"#":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1},i),q=j({sub:1,img:1,object:1,sup:1,
basefont:1,map:1,applet:1,font:1,big:1,small:1},o),p=j({p:1},q);m=j({iframe:1},q,m);q={img:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,
address:1,q:1,pre:1,p:1,em:1,dfn:1};var e=j({a:1},m),c={tr:1},a={"#":1},b=j({param:1},q),h=j({form:1},l,g,d,p),n={li:1},k={base:1,link:1,meta:1,title:1},s=j(k,{style:1,script:1}),r={head:1,body:1},t={address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1},v={$nonBodyContent:j({html:1},r,k),$block:t,$blockLimit:{body:1,div:1,td:1,th:1,caption:1,form:1},$inline:e,$body:j({script:1,style:1},t),$cdata:{script:1,
style:1},$empty:{area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1},$listItem:{dd:1,dt:1,li:1},$list:{ul:1,ol:1,dl:1},$nonEditable:{applet:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,script:1,textarea:1,param:1},$removeEmpty:{abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},
$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},html:r,head:s,style:a,body:h,base:{},link:{},meta:{},title:a,col:{},tr:{td:1,th:1},img:{},colgroup:{col:1},noscript:h,td:h,br:{},th:h,center:h,kbd:e,button:j(p,d),basefont:{},h5:e,h4:e,samp:e,h6:e,ol:n,h1:e,h3:e,option:a,h2:e,form:j(l,g,d,p),select:{optgroup:1,option:1},font:e,ins:e,menu:n,abbr:e,label:e,table:{thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1},code:e,script:a,tfoot:c,cite:e,li:h,input:{},iframe:h,
strong:e,textarea:a,noframes:h,big:e,small:e,span:e,hr:{},dt:e,sub:e,optgroup:{option:1},param:{},bdo:e,"var":e,div:h,object:b,sup:e,dd:h,strike:e,area:{},dir:n,map:j({area:1,form:1,p:1},l,i,d),applet:b,dl:{dt:1,dd:1},del:e,isindex:{},fieldset:j({legend:1},q),thead:c,ul:n,acronym:e,b:e,a:m,blockquote:h,caption:e,i:e,u:e,tbody:c,s:e,address:j(g,p),tt:e,legend:e,q:e,pre:j(o,f),p:e,em:e,dfn:e};(function(){var u,w=["article","figure","nav","aside","section","footer"],x;for(x in v)for(var y in v[x])if(y==
"div")for(u=0;u<w.length;u++)v[x][w[u]]=v[x][y];for(u=0;u<w.length;u++)v[w[u]]=v.div})();return v});KISSY.add("htmlparser/lexer/Cursor",function(){function j(l){this.position=l||0}j.prototype={advance:function(){this.position++},retreat:function(){this.position=Math.max(--this.position,0)}};return j});
KISSY.add("htmlparser/lexer/Index",function(){function j(){this.lineCursors=[]}function l(f,g){for(var d=0;d<f.length;d++)if(f[d].position===g.position)return d;return-1}function m(f,g){for(var d=0;d<f.length;d++)if(f[d].position>g.position)break;return d}j.prototype={add:function(f){l(this.lineCursors,f)==-1&&this.lineCursors.splice(m(this.lineCursors,f),0,f)},remove:function(f){var g=this.lineCursors;f=l(this.lineCursors,f);f!=-1&&g.splice(f,1)},row:function(f){return m(this.lineCursors,f)-1},col:function(f){var g=
m(this.lineCursors,f)-1;return f.position-this.lineCursors[g]}};return j});
KISSY.add("htmlparser/lexer/Lexer",function(j,l,m,f,g,d,i,o,q){function p(e){this.page=new m(e);this.cursor=new l;this.nodeFactory=this}p.prototype={setPosition:function(e){this.cursor.position=e},getPosition:function(){return this.cursor.position},nextNode:function(e){var c,a,b=this.cursor,h=this.page;c=b.position;a=h.getChar(b);switch(a){case -1:e=null;break;case "<":a=h.getChar(b);if(a==-1)e=this.makeString(c,b.position);else if(a=="/"||d.isLetter(a)){h.ungetChar(b);e=this.parseTag(c)}else if("!"==
a){a=h.getChar(b);if(a==-1)e=this.makeString(c,b.position);else if(">"==a)e=this.makeComment(c,b.position);else{h.ungetChar(b);if("-"==a)e=this.parseComment(c,e);else{h.ungetChar(b);e=this.parseTag(c)}}}else{h.ungetChar(b);e=this.parseString(c,e)}break;default:h.ungetChar(b);e=this.parseString(c,e)}return e},makeComment:function(e,c){var a;a=c-e;if(0!=a){if(2>a)return this.makeString(e,c);a=this.nodeFactory.createCommentNode(this.page,e,c)}else a=null;return a},makeString:function(e,c){var a=null;
if(c-e>0)a=this.nodeFactory.createStringNode(this.page,e,c);return a},makeCData:function(e,c){var a=null;if(c-e>0)a=this.nodeFactory.createCDataNode(this.page,e,c);return a},makeTag:function(e,c,a){var b;b=c-e;if(0!=b){if(2>b)return this.makeString(e,c);e=this.nodeFactory.createTagNode(this.page,e,c,a)}else e=null;return e},createTagNode:function(e,c,a,b){return new o(e,c,a,b)},createStringNode:function(e,c,a){return new f(e,c,a)},createCDataNode:function(e,c,a){return new g(e,c,a)},createCommentNode:function(e,
c,a){return new q(e,c,a)},parseTag:function(e){var c,a=[],b=[],h,n=this.page,k=0,s=this.cursor;for(a[0]=s.position;!c;){a[k+1]=s.position;h=n.getChar(s);switch(k){case 0:if(h==-1||">"==h||"<"==h){if("<"==h){n.ungetChar(s);a[k+1]=s.position}c=true}else d.isWhitespace(h)||(k=1);break;case 1:if(-1==h||">"==h||"<"==h){if("<"==h){n.ungetChar(s);a[k+1]=s.getPosition}this.standalone(b,a);c=true}else if(d.isWhitespace(h)){a[6]=a[2];k=6}else if("="==h)k=2;break;case 2:if(-1==h||">"==h){this.standalone(b,a);
c=true}else if("'"==h){k=4;a[4]=a[3]}else if('"'==h){k=5;a[5]=a[3]}else d.isWhitespace(h)||(k=3);break;case 3:if(-1==h||">"==h){this.naked(b,a);c=true}else if(d.isWhitespace(h)){this.naked(b,a);a[0]=a[4];k=0}break;case 4:if(-1==h){this.single_quote(b,a);c=true}else if("'"==h){this.single_quote(b,a);a[0]=a[5]+1;k=0}break;case 5:if(-1==h){this.double_quote(b,a);c=true}else if('"'==h){this.double_quote(b,a);a[0]=a[6]+1;k=0}break;case 6:if(-1==h){this.standalone(b,a);a[0]=a[6];n.ungetChar(s);k=0}else if(!d.isWhitespace(h))if("="==
h){a[2]=a[6];a[3]=a[7];k=2}else{this.standalone(b,a);a[0]=a[6];n.ungetChar(s);k=0}break;default:throw Error("how ** did we get in state "+k);}}return this.makeTag(e,s.position,b)},parseComment:function(e,c){var a,b,h=this.page,n=this.cursor,k;a=false;for(k=0;!a;){b=h.getChar(n);if(-1==b)a=true;else switch(k){case 0:if(">"==b)a=true;if("-"==b)k=1;else return this.parseString(e,c);break;case 1:if("-"==b){b=h.getChar(n);if(-1==b)a=true;else if(">"==b)a=true;else{h.ungetChar(n);k=2}}else return this.parseString(e,
c);break;case 2:if("-"==b)k=3;else if(-1==b)return this.parseString(e,c);break;case 3:k="-"==b?4:2;break;case 4:if(">"==b)a=true;else d.isWhitespace(b)||(k=2);break;default:throw Error("how ** did we get in state "+k);}}return this.makeComment(e,n.position)},parseString:function(e,c){for(var a=0,b,h=this.page,n=this.cursor,k=0;!a;){b=h.getChar(n);if(-1==b)a=1;else if(c&&0==k&&("'"==b||'"'==b))k=b;else if(c&&0!=k&&"\\"==b){b=h.getChar(n);-1!=b&&"\\"!=b&&b!=k&&h.ungetChar(n)}else if(c&&b==k)k=0;else if(c&&
0==k&&b=="/"){b=h.getChar(n);if(-1==b)a=1;else if("/"==b){do b=h.getChar(n);while(-1!=b&&"\n"!=b)}else if("*"==b){do{do b=h.getChar(n);while(-1!=b&&"*"!=b);b=h.getChar(n);b=="*"&&h.ungetChar(n)}while(-1!=b&&"/"!=b)}else h.ungetChar(n)}else if(0==k&&"<"==b){b=h.getChar(n);if(-1==b)a=1;else{if("/"==b||d.isLetter(b)||"!"==b){a=1;h.ungetChar(n)}h.ungetChar(n)}}}return this.makeString(e,n.position)},parseCDATA:function(e,c){var a,b,h,n,k,s,r=this.cursor,t=this.page;a=r.position;b=0;h=false;n="";for(s=
false;!h;){k=t.getChar(r);switch(b){case 0:switch(k){case -1:h=true;break;case "'":if(e&&!s)if(""==n)n="'";else if("'"==n)n="";break;case '"':if(e&&!s)if(""==n)n='"';else if('"'==n)n="";break;case "\\":if(e)if(""!=n){k=t.getChar(r);if(-1==k)h=true;else k!="\\"&&k!=n&&t.ungetChar(r)}break;case "/":if(e)if(""==n){k=t.getChar(r);if(-1==k)h=true;else if("/"==k)s=true;else if("*"==k){do{do k=t.getChar(r);while(-1!=k&&"*"!=k);k=t.getChar(r);k=="*"&&t.ungetChar(r)}while(-1!=k&&"/"!=k)}else t.ungetChar(r)}break;
case "\n":s=false;break;case "<":if(e){if(""==n)b=1}else b=1}break;case 1:switch(k){case -1:h=true;break;case "/":b=!c||t.getText(r.position,r.position+c.length)===c&&!t.getText(r.position+c.length,r.position+c.length+1).match(/\w/)?2:0;break;case "!":k=t.getChar(r);if(-1==k)h=true;else if("-"==k){k=t.getChar(r);if(-1==k)h=true;else b="-"==k?3:0}else b=0;break;default:b=0}break;case 2:s=false;if(-1==k)h=true;else if(d.isLetter(k)){h=true;t.ungetChar(r);t.ungetChar(r);t.ungetChar(r)}else b=0;break;
case 3:s=false;if(-1==k)h=true;else if("-"==k){k=t.getChar(r);if(-1==k)h=true;else if("-"==k){k=t.getChar(r);if(-1==k)h=true;else if(">"==k)b=0;else{t.ungetChar(r);t.ungetChar(r)}}else t.ungetChar(r)}break;default:throw Error("unexpected "+b);}}return this.makeCData(a,r.position)},single_quote:function(e,c){var a=this.page;e.push(new i(a.getText(c[1],c[2]),"=",a.getText(c[4]+1,c[5]),"'"))},double_quote:function(e,c){var a=this.page;e.push(new i(a.getText(c[1],c[2]),"=",a.getText(c[5]+1,c[6]),'"'))},
standalone:function(e,c){e.push(new i(this.page.getText(c[1],c[2])))},naked:function(e,c){var a=this.page;e.push(new i(a.getText(c[1],c[2]),"=",a.getText(c[3],c[4])))}};return p},{requires:["./Cursor","./Page","../nodes/Text","../nodes/CData","../Utils","../nodes/Attribute","../nodes/Tag","../nodes/Comment"]});
KISSY.add("htmlparser/lexer/Page",function(j,l){function m(f){this.source=f;this.lineIndex=new l}m.prototype={getChar:function(f){var g=this.source,d=f.position;if(d>=g.length)return-1;var i=g.charAt(d);f.advance();if("\r"===i){i="\n";d=f.position;g.charAt(d)==="\n"&&f.advance()}"\n"===i&&this.lineIndex.add(f);return i},ungetChar:function(f){var g=this.source;f.retreat();var d=f.position,i=g.charAt(d);if(i==="\n"&&0!=d){i=g.charAt(d-1);"\r"===i&&f.retreat()}},getText:function(f,g){return this.source.slice(f,
g)},row:function(f){return this.lineIndex.row(f)},col:function(f){return this.lineIndex.col(f)}};return m},{requires:["./Index"]});KISSY.add("htmlparser/nodes/Attribute",function(){return function(j,l,m,f){this.nodeType=2;this.name=j;this.assignMent=l;this.value=m;this.quote=f}});
KISSY.add("htmlparser/nodes/CData",function(j,l){function m(){m.superclass.constructor.apply(this,arguments);this.nodeType=4;this.nodeName="#cdata"}j.extend(m,l,{writeHtml:function(f,g){var d=this.toHtml();if(!g||g.onCData(this)!==false)f.cdata(d)}});return m},{requires:["./Text"]});
KISSY.add("htmlparser/nodes/Comment",function(j,l){function m(){m.superclass.constructor.apply(this,arguments);this.nodeType=8;this.nodeName="#comment"}j.extend(m,l,{writeHtml:function(f,g){var d=this.toHtml();if(!g||g.onComment(this)!==false)f.comment(d)}});return m},{requires:["./Tag"]});
KISSY.add("htmlparser/nodes/Node",function(j){function l(m,f,g){this.parentNode=null;this.page=m;this.startPosition=f;this.endPosition=g;this.nextSibling=this.previousSibling=this.nodeName=null;if(j.Config.debug)this.toHtmlContent=this.toHtml()}l.prototype={toHtml:function(){if(this.page)return this.page.getText(this.startPosition,this.endPosition)},toString:function(){var m=[];m.push(this.nodeName+"  ["+this.startPosition+":"+this.endPosition+"]\n");m.push(this.toHtml());return m.join("")}};return l});
KISSY.add("htmlparser/nodes/Tag",function(j,l,m,f,g,d,i){function o(c,a,b,h){o.superclass.constructor.apply(this,arguments);this.childNodes=[];this.lastChild=this.firstChild=null;this.attributes=h||[];this.nodeType=1;h=this.attributes;if(h[0]){this.nodeName=h[0].name.toLowerCase();this.tagName=this.nodeName.replace(/\//,"");this.isEmptyXmlTag=!!i.$empty[this.nodeName];if(!this.isEmptyXmlTag)this.isEmptyXmlTag=/\/$/.test(this.nodeName);h.splice(0,1)}var n=h[h.length-1];if(n=!!(n&&/\/$/.test(n.name)))h.length-=
1;this.closed=this.isEmptyXmlTag=this.isEmptyXmlTag||n;this.closedEndPosition=this.closedStartPosition=-1;this.scanner=e[this.nodeName]||m}function q(c){var a=c.childNodes;c.firstChild=a[0];c.lastChild=a[a.length-1];if(a.length>=1){a[0].nextSibling=a[0].nextSibling=null;a[0].parentNode=c}if(a.length>1){for(var b=0;b<a.length-1;b++){a[b].nextSibling=a[b+1];a[b+1].previousSibling=a[b];a[b+1].parentNode=c}a[a.length-1].nextSibling=null}}function p(c,a){for(var b=0;b<c.length;b++)if(c[b].name==a)return c[b];
return null}var e={style:f,script:f,textarea:g};j.extend(o,l,{isEndTag:function(){return/^\//.test(this.nodeName)},appendChild:function(c){this.childNodes.push(c);q(this)},insertBefore:function(c){var a=c.parentNode.childNodes,b=j.indexOf(c,a);a.splice(b,0,this);q(c.parentNode)},removeChild:function(c){var a=c.parentNode.childNodes,b=j.indexOf(c,a);a.splice(b,1);q(c.parentNode)},getAttribute:function(c){return(c=p(this.attributes,c))&&c.value},setAttribute:function(c,a){var b=p(this.attributes,c);
if(b)b.value=a;else this.attributes.push(new d(c,"=",a,'"'))},removeAttribute:function(c){(c=p(this.attributes,c))&&this.attributes.splice(j.indexOf(c,this.attributes),1)},writeHtml:function(c,a){var b=this,h;h=b.tagName;if(a){if(!(h=a.onTagName(h)))return;b.tagName=h;h=a.onTag(b);if(h===false)return;if(h)b=h;if(b.nodeType!==1){b.writeHtml(c,a);return}if(!b.tagName){j.each(b.childNodes,function(r){r.writeHtml(c,a)});return}}c.openTag(b);for(var n=b.attributes,k=0;k<n.length;k++){var s=n[k];h=s.name;
if(a){if(!(h=a.onAttributeName(h)))continue;if(a.onAttribute(s)===false)continue}c.attribute(s,b)}c.openTagClose(b);if(!b.isEmptyXmlTag){j.each(b.childNodes,function(r){r.writeHtml(c,a)});c.closeTag(b)}}});return o},{requires:["./Node","../scanners/TagScanner","../scanners/QuoteCdataScanner","../scanners/TextareaScanner","./Attribute","../dtd"]});
KISSY.add("htmlparser/nodes/Text",function(j,l){function m(){m.superclass.constructor.apply(this,arguments);this.nodeType=3;this.nodeName="#text"}j.extend(m,l,{writeHtml:function(f,g){var d=this.toHtml();if(!g||g.onText(this)!==false)f.text(d)}});return m},{requires:["./Node"]});
KISSY.add("htmlparser/scanners/CdataScanner",function(){return{scan:function(j,l,m,f){m=l.parseCDATA(f,j.nodeName);f=l.getPosition();var g=l.nextNode();if(g)if(g.nodeType!=1||!(g.isEndTag()&&g.tagName==j.tagName))l.setPosition(f);j.closed=true;m&&j.appendChild(m);return j}}});KISSY.add("htmlparser/scanners/QuoteCdataScanner",function(j,l){return{scan:function(m,f,g){return l.scan(m,f,g,true)}}},{requires:["./CdataScanner"]});
KISSY.add("htmlparser/scanners/TagScanner",function(j,l){var m={scan:function(f,g,d){var i,o;if(f.isEmptyXmlTag)f.closed=true;else{do{if(i=g.nextNode())if(i.nodeType===1)if(i.isEndTag()&&i.tagName==f.tagName){f.closed=true;i=null}else if(!i.isEndTag()&&!this.canHasNodeAsChild(f,i)){g.setPosition(i.startPosition);i=null}else if(i.isEndTag()){var q=-1;for(o=d.length-1;o>=0;o--){var p=d[o];if(p.tagName===i.tagName){q=o;break}else if(!this.canHasNodeAsChild(p,i)){q=o;break}}if(q!=-1){f.closed=true;d[d.length-
1].appendChild(f);for(o=d.length-1;o>q;o--){f=d[o];i=d[o-1];f.closed=true;i.appendChild(f)}f=d[q];d.length=q;i=null}}else if(o=i.scanner)if(o===m)if(i.isEmptyXmlTag)f.appendChild(i);else{d.push(f);f=i}else{i=o.scan(i,g,d);f.appendChild(i)}else f.appendChild(i);else f.appendChild(i);if(i==null)if(d.length>0){i=d[d.length-1];if(i.nodeType==1)if(i.scanner===m){d.length-=1;f.closed=true;i.appendChild(f);f=i}else i=null;else i=null}}while(i);f.closed=true}return f},canHasNodeAsChild:function(f,g){var d=
g.nodeName;if(g.nodeType==3)d="#";return!!l[f.tagName][d]}};return m},{requires:["../dtd"]});KISSY.add("htmlparser/scanners/TextareaScanner",function(j,l){return{scan:function(m,f,g){return l.scan(m,f,g,false)}}},{requires:["./CdataScanner"]});
KISSY.add("htmlparser/writer/basic",function(){function j(){this.output=[]}j.prototype={append:function(){for(var l=this.output,m=arguments,f,g=0;g<m.length;g++){f=m[g];if(f.length>1)for(var d=0;d<f.length;d++)l.push(f.charAt(d));else l.push(f)}return this},openTag:function(l){this.append("<",l.tagName)},openTagClose:function(l){l.isEmptyXmlTag&&this.append(" ","/");this.append(">")},closeTag:function(l){this.append("</",l.tagName,">")},attribute:function(l){this.append(" ",l.name,'="',(l.value||
l.name).replace(/"/g,"&quote;"),'"')},text:function(l){this.append(l)},cdata:function(l){this.append(l)},comment:function(l){this.append(l)},getHtml:function(){return this.output.join("")}};return j});
KISSY.add("htmlparser/writer/beautify",function(j,l,m,f){function g(){g.superclass.constructor.apply(this,arguments);this.inPre=0;this.indentChar="\t";this.allowIndent=this.indentLevel=0;this.rules={};for(var d in j.merge(m.$nonBodyContent,m.$block,m.$listItem,m.$tableContent,{select:1,script:1,style:1}))this.setRules(d,{allowIndent:1,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});this.setRules("option",{breakBeforeOpen:1});this.setRules("optiongroup",{breakBeforeOpen:1});
this.setRules("br",{breakAfterOpen:1});this.setRules("title",{allowIndent:0,breakBeforeClose:0,breakAfterOpen:0});this.setRules("pre",{allowIndent:0})}j.extend(g,l,{indentation:function(){this.inPre||this.append(Array(this.indentLevel+1).join(this.indentChar));this.allowIndent=0},lineBreak:function(){var d=this.output;if(!this.inPre&&d.length){for(var i=d.length-1;i>=0;i--)if(!/[\r\n\t ]/.test(d[i]))break;d.length=i+1;this.append("\n")}this.allowIndent=1},setRules:function(d,i){this.rules[d]||(this.rules[d]=
{});j.mix(this.rules[d],i)},openTag:function(d){var i=this.rules[d.tagName]||{};if(this.allowIndent)this.indentation();else if(i.breakBeforeOpen){this.lineBreak();this.indentation()}g.superclass.openTag.apply(this,arguments)},openTagClose:function(d){var i=d.tagName,o=this.rules[i]||{};if(d.isEmptyXmlTag)this.append(" />");else{this.append(">");o.allowIndent&&this.indentLevel++}o.breakAfterOpen&&this.lineBreak();if(i==="pre")this.inPre=1},closeTag:function(d){var i=d.tagName,o=this.rules[i]||{};o.allowIndent&&
this.indentLevel--;if(this.allowIndent)this.indentation();else if(o.breakBeforeClose){this.lineBreak();this.indentation()}g.superclass.closeTag.apply(this,arguments);if(i==="pre")this.inPre=0;o.breakAfterClose&&this.lineBreak()},text:function(d){this.allowIndent&&this.indentation();this.inPre||(d=f.collapseWhitespace(d));this.append(d)},comment:function(d){this.allowIndent&&this.indentation();this.append(d)},cdata:function(d){this.allowIndent&&this.indentation();this.append(d)}});return g},{requires:["./basic",
"../dtd","../Utils"]});
KISSY.add("htmlparser/writer/filter",function(j){function l(){this.tagNames=[];this.attributeNames=[];this.tags=[];this.comments=[];this.texts=[];this.cdatas=[];this.attributes=[]}function m(g,d){for(var i=0;i<g.length;i++)j.each(g[i].value,function(o){d=d.replace(o[0],o[1])});return d}function f(g,d,i){for(var o=0;o<g.length;o++)if(g[o].value.apply(null,d)===false)return false;return i}l.prototype={addRules:function(g,d){d=d||10;for(var i in g){var o=this[i],q;a:{for(q=0;q<o.length;q++)if(o[q].priority>
d){q=q;break a}q=o.length}o.splice(q,0,{value:g[i],priority:d})}},onTagName:function(g){return m(this.tagNames,g)},onAttributeName:function(g){return m(this.attributeNames,g)},onText:function(g){return f(this.texts,[g.toHtml(),g],g)},onCData:function(g){return f(this.cdatas,[g.toHtml(),g],g)},onAttribute:function(g,d){return f(this.attributes,[d,g],d)},onComment:function(g){return f(this.comments,[g.toHtml(),g],g)},onNode:function(g){var d=g.nodeType;if(d===1)return this.onTag(g);else if(d===3)return this.onText(g.toHtml(),
g);else if(d===8)return this.onComment(g.toHtml(),g)},onTag:function(g){for(var d=["^",g.tagName,"$"],i=this.tags,o,q=0;q<d.length;q++)for(var p=d[q],e=0;e<i.length;e++){var c=i[e].value;if(c[p]){if((o=c[p](g))===false)return false;if(o&&o!=c)return this.onNode(o);if(!g.name)return g}}return g}};return l});
KISSY.add("htmlparser/writer/minify",function(j,l,m){function f(p){return p.replace(/"/g,"&quote;")}function g(p,e){var c=p.nodeName,a=e.name,b=e.value||"";if(/^on[a-z]+/.test(a))b=i(b).replace(/^javascript:[\s\xa0]*/i,"").replace(/[\s\xa0]*;$/,"");else if(a==="class")b=o(i(b));else if(/^(?:a|area|link|base)$/.test(c)&&a==="href"||c==="img"&&/^(?:src|longdesc|usemap)$/.test(a)||c==="object"&&/^(?:classid|codebase|data|usemap)$/.test(a)||c==="q"&&a==="cite"||c==="blockquote"&&a==="cite"||(c==="ins"||
c==="del")&&a==="cite"||c==="form"&&a==="action"||c==="input"&&(a==="src"||a==="usemap")||c==="head"&&a==="profile"||c==="script"&&(a==="src"||a==="for")||/^(?:a|area|object|button)$/.test(c)&&a==="tabindex"||c==="input"&&(a==="maxlength"||a==="tabindex")||c==="select"&&(a==="size"||a==="tabindex")||c==="textarea"&&/^(?:rows|cols|tabindex)$/.test(a)||c==="colgroup"&&a==="span"||c==="col"&&a==="span"||(c==="th"||c=="td")&&(a==="rowspan"||a==="colspan"))b=i(b);else if(a==="style")b=i(b).replace(/[\s\xa0]*;[\s\xa0]*$/,
"");return b}function d(){d.superclass.constructor.apply(this,arguments);this.inPre=0}var i=j.trim,o=m.collapseWhitespace,q=RegExp("^(?:class|id|style|title|lang|dir|on(?:focus|blur|change|click|dblclick|mouse(?:down|up|over|move|out)|key(?:press|down|up)))$");j.extend(d,l,{comment:function(p){if(/\[if[^\]]+\]/.test(p)){p=p.replace(/^(\[[^\]]+\]>)[\s\xa0]*/,"$1").replace(/[\s\xa0]*(<!\[endif\])$/,"$1");d.superclass.comment.call(this,p)}},openTag:function(p){if(p.tagName=="pre")this.inPre=1;d.superclass.openTag.apply(this,
arguments)},closeTag:function(p){if(p.tagName=="pre")this.inPre=0;d.superclass.closeTag.apply(this,arguments)},cdata:function(p){p=i(p).replace(/^(?:[\s\xa0]*\/\*[\s\xa0]*<!\[CDATA\[[\s\xa0]*\*\/|[\s\xa0]*\/\/[\s\xa0]*<!\[CDATA\[.*)/,"").replace(/(?:\/\*[\s\xa0]*\]\]>[\s\xa0]*\*\/|\/\/[\s\xa0]*\]\]>)[\s\xa0]*$/,"");d.superclass.cdata.call(this,p)},attribute:function(p,e){var c=p.name,a=p.value||"",b;b=p.name;b=i(p.value||"")?0:e==="input"&&b==="value"||q.test(b);if(!(b=b)){b=e.nodeName;var h=p.name,
n=p.value||"";n=i(n.toLowerCase());b=b==="script"&&h==="language"&&n==="javascript"||b==="form"&&h==="method"&&n==="get"||b==="input"&&h==="type"&&n==="text"||b==="script"&&h==="type"&&n==="text/javascript"||b==="style"&&h==="type"&&n==="text/css"||b==="area"&&h==="shape"&&n==="rect"}if(!b)if(/^(?:checked|disabled|selected|readonly)$/i.test(c))this.append(" ",c);else/^[a-zA-Z0-9-._:]+$/.test(a)?this.append(" ",c,"=",f(g(e,p))):this.append(" ",c,'="',f(g(e,p)),'"')},text:function(p){this.inPre||this.append(o(p))}});
return d},{requires:["./basic","../Utils"]});KISSY.add("htmlparser",function(j,l,m,f,g,d,i){return{Lexer:l,Parser:m,BasicWriter:f,BeautifyWriter:g,MinifyWriter:d,Filter:i}},{requires:["htmlparser/lexer/Lexer","htmlparser/Parser","htmlparser/writer/basic","htmlparser/writer/beautify","htmlparser/writer/minify","htmlparser/writer/filter"]});
