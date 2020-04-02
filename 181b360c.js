var t,a,n,r,o,s,l={},i=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function d(e,t){for(var a in t)e[a]=t[a];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,a){var n,r=arguments,o={};for(n in t)"key"!==n&&"ref"!==n&&(o[n]=t[n]);if(arguments.length>3)for(a=[a],n=3;n<arguments.length;n++)a.push(r[n]);if(null!=a&&(o.children=a),"function"==typeof e&&null!=e.defaultProps)for(n in e.defaultProps)void 0===o[n]&&(o[n]=e.defaultProps[n]);return p(e,o,t&&t.key,t&&t.ref)}function p(e,a,n,r){var o={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return t.vnode&&t.vnode(o),o}function f(e){return e.children}function g(e,t){this.props=e,this.context=t}function _(e,t){if(null==t)return e.__?_(e.__,e.__.__k.indexOf(e)+1):null;for(var a;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e)return a.__e;return"function"==typeof e.type?_(e):null}function m(e){var t,a;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e){e.__e=e.__c.base=a.__e;break}return m(e)}}function v(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(b)}function b(){for(var e;n=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,a,n,r,o,s;e.__d&&(o=(r=(t=e).__v).__e,(s=t.__P)&&(a=[],n=A(s,r,d({},r),t.__n,void 0!==s.ownerSVGElement,null,a,null==o?_(r):o),S(a,r),n!=o&&m(r)))}))}function w(e,t,a,n,r,o,s,c,d){var h,p,f,g,m,v,b,w=a&&a.__k||i,y=w.length;if(c==l&&(c=null!=o?o[0]:y?_(a,0):null),h=0,t.__k=k(t.__k,(function(a){if(null!=a){if(a.__=t,a.__b=t.__b+1,null===(f=w[h])||f&&a.key==f.key&&a.type===f.type)w[h]=void 0;else for(p=0;p<y;p++){if((f=w[p])&&a.key==f.key&&a.type===f.type){w[p]=void 0;break}f=null}if(g=A(e,a,f=f||l,n,r,o,s,c,d),(p=a.ref)&&f.ref!=p&&(b||(b=[]),f.ref&&b.push(f.ref,null,a),b.push(p,a.__c||g,a)),null!=g){var i;if(null==v&&(v=g),void 0!==a.__d)i=a.__d,a.__d=void 0;else if(o==f||g!=c||null==g.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(g),i=null;else{for(m=c,p=0;(m=m.nextSibling)&&p<y;p+=2)if(m==g)break e;e.insertBefore(g,c),i=c}"option"==t.type&&(e.value="")}c=void 0!==i?i:g.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&f.__e==c&&c.parentNode!=e&&(c=_(f))}return h++,a})),t.__e=v,null!=o&&"function"!=typeof t.type)for(h=o.length;h--;)null!=o[h]&&u(o[h]);for(h=y;h--;)null!=w[h]&&P(w[h],w[h]);if(b)for(h=0;h<b.length;h++)L(b[h],b[++h],b[++h])}function k(e,t,a){if(null==a&&(a=[]),null==e||"boolean"==typeof e)t&&a.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)k(e[n],t,a);else a.push(t?t("string"==typeof e||"number"==typeof e?p(null,e,null,null):null!=e.__e||null!=e.__c?p(e.type,e.props,e.key,null):e):e);return a}function y(e,t,a){"-"===t[0]?e.setProperty(t,a):e[t]="number"==typeof a&&!1===c.test(t)?a+"px":null==a?"":a}function x(e,t,a,n,r){var o,s,l,i,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(o=e.style,"string"==typeof a)o.cssText=a;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(s in n)a&&s in a||y(o,s,"");if(a)for(l in a)n&&a[l]===n[l]||y(o,l,a[l])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),a?(n||e.addEventListener(t,C,i),(e.l||(e.l={}))[t]=a):e.removeEventListener(t,C,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==a?"":a:"function"!=typeof a&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==a||!1===a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),a):null==a||!1===a&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,a))}function C(e){this.l[e.type](t.event?t.event(e):e)}function A(e,a,n,r,o,s,l,i,c){var u,h,p,_,m,v,b,k,y,x,C=a.type;if(void 0!==a.constructor)return null;(u=t.__b)&&u(a);try{e:if("function"==typeof C){if(k=a.props,y=(u=C.contextType)&&r[u.__c],x=u?y?y.props.value:u.__:r,n.__c?b=(h=a.__c=n.__c).__=h.__E:("prototype"in C&&C.prototype.render?a.__c=h=new C(k,x):(a.__c=h=new g(k,x),h.constructor=C,h.render=M),y&&y.sub(h),h.props=k,h.state||(h.state={}),h.context=x,h.__n=r,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=C.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,C.getDerivedStateFromProps(k,h.__s))),_=h.props,m=h.state,p)null==C.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==_&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,x)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=a,a.__e=n.__e,a.__k=n.__k,h.__h.length&&l.push(h),u=0;u<a.__k.length;u++)a.__k[u]&&(a.__k[u].__=a);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,x),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(_,m,v)}))}h.context=x,h.props=k,h.state=h.__s,(u=t.__r)&&u(a),h.__d=!1,h.__v=a,h.__P=e,u=h.render(h.props,h.state,h.context),a.__k=null!=u&&u.type==f&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(r=d(d({},r),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(v=h.getSnapshotBeforeUpdate(_,m)),w(e,a,n,r,o,s,l,i,c),h.base=a.__e,h.__h.length&&l.push(h),b&&(h.__E=h.__=null),h.__e=!1}else a.__e=E(n.__e,a,n,r,o,s,l,c);(u=t.diffed)&&u(a)}catch(e){t.__e(e,a,n)}return a.__e}function S(e,a){t.__c&&t.__c(a,e),e.some((function(a){try{e=a.__h,a.__h=[],e.some((function(e){e.call(a)}))}catch(e){t.__e(e,a.__v)}}))}function E(e,t,a,n,r,o,s,c){var d,u,h,p,f,g=a.props,_=t.props;if(r="svg"===t.type||r,null!=o)for(d=0;d<o.length;d++)if(null!=(u=o[d])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,o[d]=null;break}if(null==e){if(null===t.type)return document.createTextNode(_);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,_.is&&{is:_.is}),o=null}if(null===t.type)g!==_&&e.data!=_&&(e.data=_);else if(t!==a){if(null!=o&&(o=i.slice.call(e.childNodes)),h=(g=a.props||l).dangerouslySetInnerHTML,p=_.dangerouslySetInnerHTML,!c){if(g===l)for(g={},f=0;f<e.attributes.length;f++)g[e.attributes[f].name]=e.attributes[f].value;(p||h)&&(p&&h&&p.__html==h.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,a,n,r){var o;for(o in a)o in t||x(e,o,null,a[o],n);for(o in t)r&&"function"!=typeof t[o]||"value"===o||"checked"===o||a[o]===t[o]||x(e,o,t[o],a[o],n)})(e,_,g,r,c),t.__k=t.props.children,p||w(e,t,a,n,"foreignObject"!==t.type&&r,o,s,l,c),c||("value"in _&&void 0!==_.value&&_.value!==e.value&&(e.value=null==_.value?"":_.value),"checked"in _&&void 0!==_.checked&&_.checked!==e.checked&&(e.checked=_.checked))}return e}function L(e,a,n){try{"function"==typeof e?e(a):e.current=a}catch(e){t.__e(e,n)}}function P(e,a,n){var r,o,s;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||L(r,null,a)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,a)}r.base=r.__P=null}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&P(r[s],a,n);null!=o&&u(o)}function M(e,t,a){return this.constructor(e,a)}t={__e:function(e,t){for(var a,n;t=t.__;)if((a=t.__c)&&!a.__)try{if(a.constructor&&null!=a.constructor.getDerivedStateFromError&&(n=!0,a.setState(a.constructor.getDerivedStateFromError(e))),null!=a.componentDidCatch&&(n=!0,a.componentDidCatch(e)),n)return v(a.__E=a)}catch(t){e=t}throw e}},g.prototype.setState=function(e,t){var a;a=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(a,this.props)),e&&d(a,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},g.prototype.render=f,a=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=l;var z=function e(t,a,n,r){var o;a[0]=0;for(var s=1;s<a.length;s++){var l=a[s++],i=a[s]?(a[0]|=l?1:2,n[a[s++]]):a[++s];3===l?r[0]=i:4===l?r[1]=Object.assign(r[1]||{},i):5===l?(r[1]=r[1]||{})[a[++s]]=i:6===l?r[1][a[++s]]+=i+"":l?(o=t.apply(i,e(t,i,n,["",null])),r.push(o),i[0]?a[0]|=2:(a[s-2]=0,a[s]=o)):r.push(i)}return r},D=new Map;(function(e){var t=D.get(this);return t||(t=new Map,D.set(this,t)),(t=z(this,t.get(e)||(t.set(e,t=function(e){for(var t,a,n=1,r="",o="",s=[0],l=function(e){1===n&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,e,r):3===n&&(e||r)?(s.push(3,e,r),n=2):2===n&&"..."===r&&e?s.push(4,e,0):2===n&&r&&!e?s.push(5,0,!0,r):n>=5&&((r||!e&&5===n)&&(s.push(n,0,r,a),n=6),e&&(s.push(n,e,0,a),n=6)),r=""},i=0;i<e.length;i++){i&&(1===n&&l(),l(i));for(var c=0;c<e[i].length;c++)t=e[i][c],1===n?"<"===t?(l(),s=[s],n=3):r+=t:4===n?"--"===r&&">"===t?(n=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(l(),n=1):n&&("="===t?(n=5,a=r,r=""):"/"===t&&(n<5||">"===e[i][c+1])?(l(),3===n&&(s=s[0]),n=s,(s=s[0]).push(2,0,n),n=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(l(),n=2):r+=t),3===n&&"!--"===r&&(n=4,s=s[0])}return l(),s}(e)),t),arguments,[])).length>1?t:t[0]}).bind(h);var T=t=>{var a=/^\0+/g,n=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,s=/([,: ])(transform)/g,l=/,+\s*(?![^(]*[)])/g,i=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,d=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,h=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,m=/\s+(?=[{\];=:>])/g,v=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,k=/([^\(])(:+) */g,y=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,A=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,P="-webkit-",M="-moz-",z="-ms-",D=59,T=125,j=123,I=40,U=41,q=10,R=13,N=32,H=45,O=42,W=44,$=58,B=47,F=1,V=1,Z=0,G=1,Y=1,K=1,J=0,Q=0,X=0,ee=[],te=[],ae=0,ne=null,re=0,oe=1,se="",le="",ie="";function ce(e,t,r,o,s){for(var l,i,d=0,u=0,h=0,p=0,m=0,v=0,b=0,w=0,y=0,C=0,A=0,S=0,E=0,L=0,M=0,z=0,J=0,te=0,ne=0,ue=r.length,me=ue-1,ve="",be="",we="",ke="",ye="",xe="";M<ue;){if(b=r.charCodeAt(M),M===me&&u+p+h+d!==0&&(0!==u&&(b=u===B?q:B),p=h=d=0,ue++,me++),u+p+h+d===0){if(M===me&&(z>0&&(be=be.replace(n,"")),be.trim().length>0)){switch(b){case N:case 9:case D:case R:case q:break;default:be+=r.charAt(M)}b=D}if(1===J)switch(b){case j:case T:case D:case 34:case 39:case I:case U:case W:J=0;case 9:case R:case q:case N:break;default:for(J=0,ne=M,m=b,M--,b=D;ne<ue;)switch(r.charCodeAt(ne++)){case q:case R:case D:++M,b=m,ne=ue;break;case $:z>0&&(++M,b=m);case j:ne=ue}}switch(b){case j:for(m=(be=be.trim()).charCodeAt(0),A=1,ne=++M;M<ue;){switch(b=r.charCodeAt(M)){case j:A++;break;case T:A--;break;case B:switch(v=r.charCodeAt(M+1)){case O:case B:M=_e(v,M,me,r)}break;case 91:b++;case I:b++;case 34:case 39:for(;M++<me&&r.charCodeAt(M)!==b;);}if(0===A)break;M++}switch(we=r.substring(ne,M),0===m&&(m=(be=be.replace(a,"").trim()).charCodeAt(0)),m){case 64:switch(z>0&&(be=be.replace(n,"")),v=be.charCodeAt(1)){case 100:case 109:case 115:case H:l=t;break;default:l=ee}if(ne=(we=ce(t,l,we,v,s+1)).length,X>0&&0===ne&&(ne=be.length),ae>0&&(i=ge(3,we,l=de(ee,be,te),t,V,F,ne,v,s,o),be=l.join(""),void 0!==i&&0===(ne=(we=i.trim()).length)&&(v=0,we="")),ne>0)switch(v){case 115:be=be.replace(x,fe);case 100:case 109:case H:we=be+"{"+we+"}";break;case 107:we=(be=be.replace(f,"$1 $2"+(oe>0?se:"")))+"{"+we+"}",we=1===Y||2===Y&&pe("@"+we,3)?"@"+P+we+"@"+we:"@"+we;break;default:we=be+we,112===o&&(ke+=we,we="")}else we="";break;default:we=ce(t,de(t,be,te),we,o,s+1)}ye+=we,S=0,J=0,L=0,z=0,te=0,E=0,be="",we="",b=r.charCodeAt(++M);break;case T:case D:if((ne=(be=(z>0?be.replace(n,""):be).trim()).length)>1)switch(0===L&&((m=be.charCodeAt(0))===H||m>96&&m<123)&&(ne=(be=be.replace(" ",":")).length),ae>0&&void 0!==(i=ge(1,be,t,e,V,F,ke.length,o,s,o))&&0===(ne=(be=i.trim()).length)&&(be="\0\0"),m=be.charCodeAt(0),v=be.charCodeAt(1),m){case 0:break;case 64:if(105===v||99===v){xe+=be+r.charAt(M);break}default:if(be.charCodeAt(ne-1)===$)break;ke+=he(be,m,v,be.charCodeAt(2))}S=0,J=0,L=0,z=0,te=0,be="",b=r.charCodeAt(++M)}}switch(b){case R:case q:if(u+p+h+d+Q===0)switch(C){case U:case 39:case 34:case 64:case 126:case 62:case O:case 43:case B:case H:case $:case W:case D:case j:case T:break;default:L>0&&(J=1)}u===B?u=0:G+S===0&&107!==o&&be.length>0&&(z=1,be+="\0"),ae*re>0&&ge(0,be,t,e,V,F,ke.length,o,s,o),F=1,V++;break;case D:case T:if(u+p+h+d===0){F++;break}default:switch(F++,ve=r.charAt(M),b){case 9:case N:if(p+d+u===0)switch(w){case W:case $:case 9:case N:ve="";break;default:b!==N&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:p+u+d===0&&G>0&&(te=1,z=1,ve="\f"+ve);break;case 108:if(p+u+d+Z===0&&L>0)switch(M-L){case 2:112===w&&r.charCodeAt(M-3)===$&&(Z=w);case 8:111===y&&(Z=y)}break;case $:p+u+d===0&&(L=M);break;case W:u+h+p+d===0&&(z=1,ve+="\r");break;case 34:case 39:0===u&&(p=p===b?0:0===p?b:p);break;case 91:p+u+h===0&&d++;break;case 93:p+u+h===0&&d--;break;case U:p+u+d===0&&h--;break;case I:if(p+u+d===0){if(0===S)switch(2*w+3*y){case 533:break;default:A=0,S=1}h++}break;case 64:u+h+p+d+L+E===0&&(E=1);break;case O:case B:if(p+d+h>0)break;switch(u){case 0:switch(2*b+3*r.charCodeAt(M+1)){case 235:u=B;break;case 220:ne=M,u=O}break;case O:b===B&&w===O&&ne+2!==M&&(33===r.charCodeAt(ne+2)&&(ke+=r.substring(ne,M+1)),ve="",u=0)}}if(0===u){if(G+p+d+E===0&&107!==o&&b!==D)switch(b){case W:case 126:case 62:case 43:case U:case I:if(0===S){switch(w){case 9:case N:case q:case R:ve+="\0";break;default:ve="\0"+ve+(b===W?"":"\0")}z=1}else switch(b){case I:L+7===M&&108===w&&(L=0),S=++A;break;case U:0==(S=--A)&&(z=1,ve+="\0")}break;case 9:case N:switch(w){case 0:case j:case T:case D:case W:case 12:case 9:case N:case q:case R:break;default:0===S&&(z=1,ve+="\0")}}be+=ve,b!==N&&9!==b&&(C=b)}}y=w,w=b,M++}if(ne=ke.length,X>0&&0===ne&&0===ye.length&&0===t[0].length==0&&(109!==o||1===t.length&&(G>0?le:ie)===t[0])&&(ne=t.join(",").length+2),ne>0){if(l=0===G&&107!==o?function(e){for(var t,a,r=0,o=e.length,s=Array(o);r<o;++r){for(var l=e[r].split(c),i="",d=0,u=0,h=0,p=0,f=l.length;d<f;++d)if(!(0===(u=(a=l[d]).length)&&f>1)){if(h=i.charCodeAt(i.length-1),p=a.charCodeAt(0),t="",0!==d)switch(h){case O:case 126:case 62:case 43:case N:case I:break;default:t=" "}switch(p){case 38:a=t+le;case 126:case 62:case 43:case N:case U:case I:break;case 91:a=t+a+le;break;case $:switch(2*a.charCodeAt(1)+3*a.charCodeAt(2)){case 530:if(K>0){a=t+a.substring(8,u-1);break}default:(d<1||l[d-1].length<1)&&(a=t+le+a)}break;case W:t="";default:a=u>1&&a.indexOf(":")>0?t+a.replace(k,"$1"+le+"$2"):t+a+le}i+=a}s[r]=i.replace(n,"").trim()}return s}(t):t,ae>0&&void 0!==(i=ge(2,ke,l,e,V,F,ne,o,s,o))&&0===(ke=i).length)return xe+ke+ye;if(ke=l.join(",")+"{"+ke+"}",Y*Z!=0){switch(2!==Y||pe(ke,2)||(Z=0),Z){case 111:ke=ke.replace(_,":-moz-$1")+ke;break;case 112:ke=ke.replace(g,"::"+P+"input-$1")+ke.replace(g,"::-moz-$1")+ke.replace(g,":-ms-input-$1")+ke}Z=0}}return xe+ke+ye}function de(e,t,a){var n=t.trim().split(d),r=n,o=n.length,s=e.length;switch(s){case 0:case 1:for(var l=0,i=0===s?"":e[0]+" ";l<o;++l)r[l]=ue(i,r[l],a,s).trim();break;default:l=0;var c=0;for(r=[];l<o;++l)for(var u=0;u<s;++u)r[c++]=ue(e[u]+" ",n[l],a,s).trim()}return r}function ue(e,t,a,n){var r=t,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(G+n){case 0:case 1:if(0===e.trim().length)break;default:return r.replace(u,"$1"+e.trim())}break;case $:switch(r.charCodeAt(1)){case 103:if(K>0&&G>0)return r.replace(h,"$1").replace(u,"$1"+ie);break;default:return e.trim()+r.replace(u,"$1"+e.trim())}default:if(a*G>0&&r.indexOf("\f")>0)return r.replace(u,(e.charCodeAt(0)===$?"":"$1")+e.trim())}return e+r}function he(e,t,a,n){var c,d=0,u=e+";",h=2*t+3*a+4*n;if(944===h)return function(e){var t=e.length,a=e.indexOf(":",9)+1,n=e.substring(0,a).trim(),r=e.substring(a,t-1).trim();switch(e.charCodeAt(9)*oe){case 0:break;case H:if(110!==e.charCodeAt(10))break;default:var o=r.split((r="",l)),s=0;for(a=0,t=o.length;s<t;a=0,++s){for(var c=o[s],d=c.split(i);c=d[a];){var u=c.charCodeAt(0);if(1===oe&&(u>64&&u<90||u>96&&u<123||95===u||u===H&&c.charCodeAt(1)!==H))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=se}}d[a++]=c}r+=(0===s?"":",")+d.join(" ")}}return r=n+r+";",1===Y||2===Y&&pe(r,1)?P+r+r:r}(u);if(0===Y||2===Y&&!pe(u,1))return u;switch(h){case 1015:return 97===u.charCodeAt(10)?P+u+u:u;case 951:return 116===u.charCodeAt(3)?P+u+u:u;case 963:return 110===u.charCodeAt(5)?P+u+u:u;case 1009:if(100!==u.charCodeAt(4))break;case 969:case 942:return P+u+u;case 978:return P+u+M+u+u;case 1019:case 983:return P+u+M+u+z+u+u;case 883:return u.charCodeAt(8)===H?P+u+u:u.indexOf("image-set(",11)>0?u.replace(L,"$1"+P+"$2")+u:u;case 932:if(u.charCodeAt(4)===H)switch(u.charCodeAt(5)){case 103:return P+"box-"+u.replace("-grow","")+P+u+z+u.replace("grow","positive")+u;case 115:return P+u+z+u.replace("shrink","negative")+u;case 98:return P+u+z+u.replace("basis","preferred-size")+u}return P+u+z+u+u;case 964:return P+u+z+"flex-"+u+u;case 1023:if(99!==u.charCodeAt(8))break;return c=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),P+"box-pack"+c+P+u+z+"flex-pack"+c+u;case 1005:return o.test(u)?u.replace(r,":"+P)+u.replace(r,":"+M)+u:u;case 1e3:switch(d=(c=u.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(d)){case 226:c=u.replace(y,"tb");break;case 232:c=u.replace(y,"tb-rl");break;case 220:c=u.replace(y,"lr");break;default:return u}return P+u+z+c+u;case 1017:if(-1===u.indexOf("sticky",9))return u;case 975:switch(d=(u=e).length-10,h=(c=(33===u.charCodeAt(d)?u.substring(0,d):u).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:u=u.replace(c,P+c)+";"+u;break;case 207:case 102:u=u.replace(c,P+(h>102?"inline-":"")+"box")+";"+u.replace(c,P+c)+";"+u.replace(c,z+c+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===H)switch(u.charCodeAt(6)){case 105:return c=u.replace("-items",""),P+u+P+"box-"+c+z+"flex-"+c+u;case 115:return P+u+z+"flex-item-"+u.replace(A,"")+u;default:return P+u+z+"flex-line-pack"+u.replace("align-content","").replace(A,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==H||122===u.charCodeAt(4))break;case 931:case 953:if(!0===E.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?he(e.replace("stretch","fill-available"),t,a,n).replace(":fill-available",":stretch"):u.replace(c,P+c)+u.replace(c,M+c.replace("fill-",""))+u;break;case 962:if(u=P+u+(102===u.charCodeAt(5)?z+u:"")+u,a+n===211&&105===u.charCodeAt(13)&&u.indexOf("transform",10)>0)return u.substring(0,u.indexOf(";",27)+1).replace(s,"$1"+P+"$2")+u}return u}function pe(e,t){var a=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?a:10),r=e.substring(a+1,e.length-1);return ne(2!==t?n:n.replace(S,"$1"),r,t)}function fe(e,t){var a=he(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return a!==t+";"?a.replace(C," or ($1)").substring(4):"("+t+")"}function ge(e,t,a,n,r,o,s,l,i,c){for(var d,u=0,h=t;u<ae;++u)switch(d=te[u].call(ve,e,h,a,n,r,o,s,l,i,c)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==t)return h}function _e(e,t,a,n){for(var r=t+1;r<a;++r)switch(n.charCodeAt(r)){case B:if(e===O&&n.charCodeAt(r-1)===O&&t+2!==r)return r+1;break;case q:if(e===B)return r+1}return r}function me(e){for(var t in e){var a=e[t];switch(t){case"keyframe":oe=0|a;break;case"global":K=0|a;break;case"cascade":G=0|a;break;case"compress":J=0|a;break;case"semicolon":Q=0|a;break;case"preserve":X=0|a;break;case"prefix":ne=null,a?"function"!=typeof a?Y=1:(Y=2,ne=a):Y=0}}return me}function ve(t,a){if(void 0!==this&&this.constructor===ve)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),oe>0&&(se=r.replace(p,91===o?"":"-")),o=1,1===G?ie=r:le=r;var s,l=[ie];ae>0&&void 0!==(s=ge(-1,a,l,l,V,F,0,0,0,0))&&"string"==typeof s&&(a=s);var i=ce(ee,l,a,0,0);return ae>0&&void 0!==(s=ge(-2,i,l,l,V,F,i.length,0,0,0))&&"string"!=typeof(i=s)&&(o=0),se="",ie="",le="",Z=0,V=1,F=1,J*o==0?i:i.replace(n,"").replace(m,"").replace(v,"$1").replace(b,"$1").replace(w," ")}return ve.use=function e(t){switch(t){case void 0:case null:ae=te.length=0;break;default:if("function"==typeof t)te[ae++]=t;else if("object"==typeof t)for(var a=0,n=t.length;a<n;++a)e(t[a]);else re=0|!!t}return e},ve.set=me,void 0!==t&&me(t),ve};const j={},I=document.createElement("style");document.head.appendChild(I);const U=e=>`.${e}{display:none}`,q=e=>/^(\/|https?:\/\/)/.test(e.trim()),R=e=>t=>a=>{I.innerHTML+=(j[e]={hash:t,rules:T()(`.${t}`,a)}).rules,q(e)&&(e=>{I.innerHTML=I.innerHTML.replace(U(e),"")})(t)};var N=(e,...t)=>{const a=e[0].startsWith("/")?e[0]:e.reduce((e,a,n)=>e+(a+(null==t[n]?"":t[n])),"");if(j[a])return j[a].hash;const n="csz-"+Math.random().toString(36).replace("0.",""),r=R(a)(n);return q(a)?((e=>{I.innerHTML=U(e)+I.innerHTML})(n),fetch(a).then(e=>e.text()).then(r)):r(a),n};const H=(e,t)=>{let a=window.matchMedia(e);a.addListener(e=>t(e.matches)),t(a.matches)};class O{constructor(){const e=document.createDocumentFragment();this.addEventListener=e.addEventListener.bind(e),this.dispatchEvent=e.dispatchEvent.bind(e),this.removeEventListener=e.removeEventListener.bind(e)}}const W={url:new URL("./src/services/totalsService.js",document.baseURI).href};const $=new class extends O{async getTotals(e){return!e&&this.__totals||(this.__totals=fetch(new URL("../../data/totals.json",W.url)).then(e=>e.json()),await this.__totals,this.dispatchEvent(new Event("change"))),this.__totals}};let B;const F=N(B||(B=(e=>e)`
  .key {
    font-size: 10px;
    font-weight: 300;
  }

  .value {
    font-size: 20px;
    font-weight: 700;
  }

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 126px;
    padding: 0 16px;
    margin: 5px 0;
  }

  li:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: lightgrey;
  }
`));class V extends g{constructor(){super(),this.state={items:[]}}async componentWillMount(){H("(min-width: 900px)",e=>{this.setState({desktop:e})});const e=await $.getTotals(),t=[{description:"Countries in lockdown",value:"0"},{description:"People affected",value:"0"},{description:"Confirmed cases",value:e.confirmed},{description:"Confirmed deaths",value:e.deaths}];this.setState({items:t})}render(e,{items:t,desktop:a}){return h("div",{class:F},h("ul",null,(a?t:t.slice(0,2)).map(e=>h("li",null,h("div",{class:"key"},e.description),h("div",{class:"value"},e.value)))))}}const Z=h("svg",{role:"img","aria-labelledby":"srInfo",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-info-circle",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srInfo"},"info"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}),h("polyline",{points:"11 12 12 12 12 16 13 16"})),G=(h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"})),h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"}))),Y=h("svg",{role:"img","aria-labelledby":"srTicker",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-refresh",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srTicker"},"ticker"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"}),h("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"})),K=h("svg",{role:"img","aria-labelledby":"srContribute",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle-plus",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srContribute"},"contribute"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),h("line",{x1:"12",y1:"9",x2:"12",y2:"15"})),J=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Q=h("svg",{role:"img","aria-labelledby":"srLockdown",style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",width:"180",height:"26",xmlns:"http://www.w3.org/2000/svg"},h("g",null,h("title",{id:"srLockdown"},"lockdown")),h("g",null,h("g",{stroke:"null",id:"svg_27"},h("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_24"},h("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"background"),h("g",{stroke:"null",id:"svg_22",display:"none"},h("rect",{stroke:"null",id:"svg_25",width:"580",height:"400",x:"14.798918",y:"87.143019","stroke-width":"0"}))),h("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_26"},h("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"Layer 1"),h("g",{stroke:"null",id:"svg_19"},h("g",{stroke:"null",id:"svg_20","stroke-linecap":"round","fill-rule":"evenodd","font-size":"9pt","stroke-width":"0.25mm",transform:"matrix(0.4046201041691139,0,0,0.4046201041691139,-2294.6313297135057,-1675.2340553707181) "},h("path",{stroke:"null",d:"m6385.819401,4377.293685l15.5,0l-22.9,70l-17.4,0l-15.4,-47.4l-15.9,47.4l-17.3,0l-23,-70l16.8,0l15.8,49.2l16.5,-49.2l15,0l16,49.6l16.3,-49.6zm74.2,0l16,0l0,70l-13.3,0l-34.9,-42.5l0,42.5l-16,0l0,-70l13.4,0l34.8,42.5l0,-42.5zm-357.6,70l-22.4,-27.5l-9.4,9.8l0,17.7l-16.1,0l0,-70l16.1,0l0,32.7l31,-32.7l18,0l-29,31.2l30.7,38.8l-18.9,0zm-58.8,-58.8l-10.4,9.6a24.073,24.073 0 0 0 -7.386,-5.877a22.434,22.434 0 0 0 -10.214,-2.323q-6.5,0 -11.6,2.85q-5.1,2.85 -7.95,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.95,7.95a22.496,22.496 0 0 0 8.823,2.714a27.717,27.717 0 0 0 2.777,0.136a22.012,22.012 0 0 0 16.47,-7.054a28.649,28.649 0 0 0 1.13,-1.246l10.4,9.6q-5,6.1 -12.4,9.3q-7.4,3.2 -16.5,3.2q-10.7,0 -19.35,-4.65q-8.65,-4.65 -13.6,-12.9a34.983,34.983 0 0 1 -4.891,-16.401a42.286,42.286 0 0 1 -0.059,-2.249q0,-10.4 4.95,-18.65q4.95,-8.25 13.6,-12.9a39.233,39.233 0 0 1 15.476,-4.487a47.549,47.549 0 0 1 3.974,-0.163q9.1,0 16.45,3.2q7.35,3.2 12.35,9.2zm84.9,58.8l0,-70l31.8,0q11.4,0 20.15,4.35a33.27,33.27 0 0 1 10.748,8.304a32.104,32.104 0 0 1 2.852,3.946q4.85,7.9 4.85,18.4q0,10.5 -4.85,18.4q-4.85,7.9 -13.6,12.25a41.232,41.232 0 0 1 -12.626,3.836a53.292,53.292 0 0 1 -7.524,0.514l-31.8,0zm-292.1,0l0,-70l16.2,0l0,56.8l35.1,0l0,13.2l-51.3,0zm82.114,-0.457a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm314.3,0a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm-88.114,-12.843l14.8,0q10.5,0 16.75,-5.85q6.25,-5.85 6.25,-15.85a25.797,25.797 0 0 0 -0.879,-6.915a18.923,18.923 0 0 0 -5.371,-8.935a21.055,21.055 0 0 0 -10.033,-5.159a30.905,30.905 0 0 0 -6.717,-0.691l-14.8,0l0,43.4zm-214,0.7a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027zm314.3,0a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027z",id:"svg_21"}))),h("g",{stroke:"null",id:"svg_13"},h("g",{stroke:"null",id:"svg_17",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},h("path",{stroke:"null",d:"m-77.204981,496.507538c-68.4,0 -124.1,55.7 -124.1,124.1s55.7,124.1 124.1,124.1s124.1,-55.7 124.1,-124.1s-55.6,-124.1 -124.1,-124.1zm108.2,116.3l-56.4,0c-0.8,-27.3 -5.4,-52.8 -13.3,-72.5c-4.3,-10.8 -9.5,-19.3 -15.2,-25.5c46.1,10 81.4,49.6 84.9,98zm-108.2,109.5c-8.1,0 -17,-10.2 -23.8,-27.2c-7.2,-17.9 -11.5,-41.4 -12.2,-66.7l72.1,0c-0.7,25.3 -5,48.7 -12.2,66.7c-6.9,17.1 -15.8,27.2 -23.9,27.2zm-36,-109.5c0.7,-25.3 5,-48.7 12.2,-66.7c6.8,-17 15.7,-27.2 23.8,-27.2s17,10.2 23.8,27.2c7.2,17.9 11.5,41.4 12.2,66.7l-72,0zm12.9,-98.1c-5.7,6.2 -10.9,14.8 -15.2,25.5c-7.9,19.7 -12.6,45.2 -13.3,72.5l-56.5,0c3.5,-48.3 38.8,-87.9 85,-98zm-85,113.8l56.4,0c0.8,27.3 5.4,52.8 13.3,72.5c4.3,10.8 9.5,19.3 15.2,25.5c-46.1,-10.1 -81.4,-49.7 -84.9,-98zm131.3,98c5.7,-6.2 10.9,-14.8 15.2,-25.5c7.9,-19.7 12.6,-45.2 13.3,-72.5l56.4,0c-3.4,48.3 -38.7,87.9 -84.9,98z",id:"svg_18"})),h("g",{stroke:"null",id:"svg_14",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},h("g",{stroke:"null",id:"svg_15"},h("path",{stroke:"null",d:"m-1.004981,525.807538c-1.3,20.1 -1.6,2.5 -1.6,1.6l0.6,-59.9c0,-30.8 -25,-55.7 -55.7,-55.7l-39.7,0c-30.8,0 -55.7,25 -55.7,55.7l0.1,62.3c0,0.4 1.2,-2.2 0.9,-2.2l0,0c-0.4,0 -0.7,0.4 -0.6,0.8c1.3,6.7 -0.4,-2.3 -0.4,3.2c0,0 0,-1.9 0,-3c0,-0.5 0.4,-0.9 -0.7,-1.9l21.8,0c0.3,-1.6 2.4,-0.9 1.9,-1.6c-6.2,-8.9 2.3,-8.2 3.3,-13.8c0.1,-0.4 -2.1,0 -2.4,0l-3.3,1.6c0.2,0 0,-0.8 -0.1,-7l0,-38.4c0,-19.6 15.9,-35.4 35.4,-35.4l39.6,0c19.6,0 35.4,15.9 35.4,35.4l0,38.2c0.2,4.6 -0.5,5.4 -1.4,5.4l0,-1.6c-1.4,3.1 -1.8,-1.5 -1.7,-0.6c0.4,5.6 0.1,15 1.7,9.5c1.5,-5.1 1.6,4.1 2.4,4.1l18.8,5.1c0.9,0 1.6,-0.7 1.5,-1.6c-0.2,-5.8 -0.7,6.4 0,0.6",id:"svg_16"})))))))),X=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.76 45.17"},h("defs",null,h("style",null,".cls-1 {\n          fill: #828282;\n          fill-rule: evenodd;\n        }")),h("title",null,"Asset 2"),h("g",{id:"Layer_2","data-name":"Layer 2"},h("g",{id:"Layer_1-2","data-name":"Layer 1"},h("path",{class:"cls-1",d:"M11,0,7.47,3.51l6.9,6.9h-1a14.93,14.93,0,0,0,1.62,29.78H44.15l5,5,3.51-3.51ZM59.76,27.74A12.39,12.39,0,0,0,48.18,15.39,18.58,18.58,0,0,0,20.79,2.76L24.5,6.47a13.47,13.47,0,0,1,5.38-1.14A13.69,13.69,0,0,1,43.58,19v1.25h3.73a7.46,7.46,0,0,1,4.46,13.45l3.51,3.51A12.39,12.39,0,0,0,59.76,27.74ZM5,25.25a10,10,0,0,0,10,10H39.17L19.25,15.29H14.94A10,10,0,0,0,5,25.25Z"}))));let ee;const te=N(ee||(ee=(e=>e)`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    /* needs to be higher than the map */
    z-index: 1100;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
  }

  a {
    width: 400px;
    display: block;
    flex-shrink: 0;
  }

  .totals {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 899px) {
    .totals {
      display: none;
    }
  }
`));const ae=new class extends O{constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(e){window.history.pushState(null,"",e),this.__onPathChanged()}setSearchParam(e,t){const a=new URLSearchParams(location.search);t?a.set(e,t):a.delete(e);const n=a.toString();this.setPath(`${location.pathname}${n?`?${n}`:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed")),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(e=>{e&&e.update()})}__onClick(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find(e=>"A"===e.tagName);if(!t||!t.href)return;if(t.hasAttribute("download")||t.href.includes("mailto:"))return;const a=t.getAttribute("target");if(a&&""!==a&&"_self"!==a)return;const n=new URL(t.href);n.startsWith(document.baseURI)&&(e.preventDefault(),this.setPath(n.pathname))}},ne={url:new URL("./src/services/locksdownsService.js",document.baseURI).href};const re=new class extends O{async getLockdowns(e){return!e&&this.__lockdowns||(this.__lockdowns=fetch(new URL("../../data/datafile.json",ne.url)).then(e=>e.json()),await this.__lockdowns,this.dispatchEvent(new Event("change"))),this.__lockdowns}},oe={url:new URL("./src/components/WorldMap.js",document.baseURI).href},se=new Date;class le extends g{async componentDidMount(){const[e,t,a]=await Promise.all([re.getLockdowns(),fetch(new URL("../../data/worldmap.json",oe.url)).then(e=>e.json()),import("./785e0d74.js")]),{Map:n,Browser:r,geoJSON:o,layerGroup:s,tileLayer:l}=a,i=new n(this.ref,{center:[0,0],zoom:3,minZoom:2,maxZoom:18,zoomControl:!1});let c,d=s();function u(e){const t=e.target;ae.setSearchParam("country",t.feature.properties.NAME),ae.setSearchParam("iso2",t.feature.properties.iso2)}function h(e){const t=e.target;c.resetStyle(t)}function p(e){const t=e.target;t.setStyle({fillOpacity:.5,name:"test"}),r.ie||r.opera||r.edge||t.bringToFront()}l("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g",{tileSize:512,zoomOffset:-1,attribution:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(i);for(const a of t.features)e[a.properties.NAME]&&(a.properties.data=e[a.properties.NAME]);if(c=o(t,{style:function(e){let t,a="grey";if(e.properties.data&&e.properties.data.lockdowns){0===e.properties.data.lockdowns.length&&(a="green");for(const t of e.properties.data.lockdowns)a=!(new Date(t.start)>=se&&t.end)||new Date(t.end)<se?"red":"green"}t=navigator.onLine?.1:1;const n={weight:1,opacity:t,color:"#555",fillOpacity:0};return a&&(n.fillColor=a,n.fillOpacity=.5),n},onEachFeature:function(e,t){t.on({mouseover:p,mouseout:h,click:u})}}).addTo(i),d.addTo(i),this.setState({map:i}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});"granted"===e.state&&navigator.geolocation.getCurrentPosition(e=>{const{latitude:t,longitude:a}=e.coords;this.state.map.setView([t,a])}),e.addEventListener("change",e=>{"granted"===e.target.state?navigator.geolocation.getCurrentPosition(e=>{localStorage.setItem("geolocation","true");const{latitude:t,longitude:a}=e.coords;this.state.map.setView([t,a])}):localStorage.removeItem("geolocation")})}}componentWillUnmount(){this.state.map.remove()}render(){return h("div",{style:"width: 100%; height: 100%;",ref:e=>{this.ref=e}})}}const ie=new class extends O{constructor(){super(),this.cache={}}async getAdvice(e){var t;let{iso2:a}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{this.cache[a]={};const e=await(await fetch(`https://www.travel-advisory.info/api?countrycode=${a}`)).json();return this.cache[a]={status:"success",advice:e.data[a].advisory.message,score:`${e.data[a].advisory.score}/5`},this.cache[a]}catch(e){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};const ce=new class extends O{constructor(){super(),this.cache={}}async getCountry(e){var t;let{iso2:a}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{var n,r,o,s,l,i;this.cache[a]={};const e=await(await fetch(`https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${a}`)).json();return this.cache[a]={status:"success",totalConfirmed:null!==(n=null===(r=e[0])||void 0===r?void 0:r.totalConfirmed)&&void 0!==n?n:0,totalDeaths:null!==(o=null===(s=e[0])||void 0===s?void 0:s.totalDeaths)&&void 0!==o?o:0,totalRecovered:null!==(l=null===(i=e[0])||void 0===i?void 0:i.totalRecovered)&&void 0!==l?l:0},this.cache[a]}catch{this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},de={url:new URL("./src/services/populationService.js",document.baseURI).href};const ue=new class extends O{constructor(){super(),this.cache={}}async getPopulation(e){var t;let{iso2:a}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{var n;this.cache[a]={};const e=await fetch(new URL("../../data/population.json",de.url)).then(e=>e.json());return this.cache[a]={status:"success",totalPopulation:null!==(n=e.data[a].Population)&&void 0!==n?n:0},this.cache[a]}catch(e){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let he,pe,fe=e=>e;const ge=N(he||(he=fe`
  & {
    align-items: center;
  }

  .dialog {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 16px;
    border-radius: 8px;
    width: 100%;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }

  h2 {
    margin-top: 0px;
  }

  .data-entry {
    display: flex;
  }

  p {
    margin: 0;
  }

  p:first-of-type {
    flex: 1;
  }

  p:last-of-type {
    font-weight: 700;
    color: var(--ld-text);
  }

  .data-value {
    color: grey;
  }

  .travel-advice {
    padding: 16px;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`)),_e=N(pe||(pe=fe`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    height: calc(100% - 60px);
  }

  svg {
    width: 120px;
    margin-bottom: 20px;
  }
`));class me extends g{async componentWillMount(){this.setState({lockdowns:await re.getLockdowns(),travelAdvice:await ie.getAdvice({iso2:this.props.iso2}),coronaData:await ce.getCountry({iso2:this.props.iso2}),populationData:await ue.getPopulation({iso2:this.props.iso2})})}render(e,{lockdowns:t,travelAdvice:a,coronaData:n,populationData:r}){var o,s,l,i;return navigator.onLine||"success"===(null==a?void 0:a.status)&&"success"===(null==n?void 0:n.status)&&"success"===(null==r?void 0:r.status)?t||a||n||r||!navigator.onLine?h("div",{class:ge},h("div",{class:"dialog"},h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Improve this data")),h("hr",null),h("div",{class:"dialog"},h("h2",null,"Stats"),h("div",{class:"data-entry"},h("p",null,"Population:"),h("p",{class:"data-value"},null!==(o=null==r?void 0:r.totalPopulation)&&void 0!==o?o:"Error")),h("div",{class:"data-entry"},h("p",null,"Confirmed cases:"),h("p",{class:"data-value"},null!==(s=null==n?void 0:n.totalConfirmed)&&void 0!==s?s:"Error")),h("div",{class:"data-entry"},h("p",null,"Confirmed deaths:"),h("p",{class:"data-value"},null!==(l=null==n?void 0:n.totalDeaths)&&void 0!==l?l:"Error")),h("div",{class:"data-entry"},h("p",null,"Confirmed recoveries:"),h("p",{class:"data-value"},null!==(i=null==n?void 0:n.totalRecovered)&&void 0!==i?i:"Error")),h("div",{class:"data-entry"},h("p",null,"Lockdown start:"),h("p",{class:"data-value"},"-")),h("div",{class:"data-entry"},h("p",null,"Lockdown end:"),h("p",{class:"data-value"},"-"))),h("hr",null),h("div",{class:"dialog"},h("h2",null,"Travel advice"),"success"===a.status?h("span",null,h("b",null,a.score),h("br",null),a.advice):"Error")):"Loading...":h("div",{class:_e},X,h("b",null,"You are not connected to the internet"),h("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}}var ve,be,we,ke=[],ye=t.__r,xe=t.diffed,Ce=t.__c,Ae=t.unmount;function Se(e){t.__h&&t.__h(be);var a=be.__H||(be.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function Ee(e){return function(e,t,a){var n=Se(ve++);return n.__c||(n.__c=be,n.__=[a?a(t):je(void 0,t),function(t){var a=e(n.__[0],t);n.__[0]!==a&&(n.__[0]=a,n.__c.setState({}))}]),n.__}(je,e)}function Le(e,t){var a=Se(ve++);Te(a.__H,t)&&(a.__=e,a.__H=t,be.__H.__h.push(a))}function Pe(e){return function(e,t){var a=Se(ve++);return Te(a.__H,t)?(a.__H=t,a.__h=e,a.__=e()):a.__}((function(){return{current:e}}),[])}function Me(){ke.some((function(e){if(e.__P)try{e.__H.__h.forEach(ze),e.__H.__h.forEach(De),e.__H.__h=[]}catch(a){return t.__e(a,e.__v),!0}})),ke=[]}function ze(e){e.t&&e.t()}function De(e){var t=e.__();"function"==typeof t&&(e.t=t)}function Te(e,t){return!e||t.some((function(t,a){return t!==e[a]}))}function je(e,t){return"function"==typeof t?t(e):t}function Ie(e,t){for(var a in e)if("__source"!==a&&!(a in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}t.__r=function(e){ye&&ye(e),ve=0,(be=e.__c).__H&&(be.__H.__h.forEach(ze),be.__H.__h.forEach(De),be.__H.__h=[])},t.diffed=function(e){xe&&xe(e);var a=e.__c;if(a){var n=a.__H;n&&n.__h.length&&(1!==ke.push(a)&&we===t.requestAnimationFrame||((we=t.requestAnimationFrame)||function(e){var t,a=function(){clearTimeout(n),cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);"undefined"!=typeof window&&(t=requestAnimationFrame(a))})(Me))}},t.__c=function(e,a){a.some((function(e){try{e.__h.forEach(ze),e.__h=e.__h.filter((function(e){return!e.__||De(e)}))}catch(n){a.some((function(e){e.__h&&(e.__h=[])})),a=[],t.__e(n,e.__v)}})),Ce&&Ce(e,a)},t.unmount=function(e){Ae&&Ae(e);var a=e.__c;if(a){var n=a.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){t.__e(e,a.__v)}}};!function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).isPureReactComponent=!0,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.shouldComponentUpdate=function(e,t){return Ie(this.props,e)||Ie(this.state,t)}}(g);var Ue=t.__b;t.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ue&&Ue(e)};var qe=t.__e;function Re(e){return e&&((e=function(e,t){for(var a in t)e[a]=t[a];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(Re)),e}function Ne(e){this.__u=0,this.o=null,this.__b=null}function He(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function Oe(){this.i=null,this.l=null}t.__e=function(e,t,a){if(e.then)for(var n,r=t;r=r.__;)if((n=r.__c)&&n.__c)return n.__c(e,t.__c);qe(e,t,a)},(Ne.prototype=new g).__c=function(e,t){var a=this;null==a.o&&(a.o=[]),a.o.push(t);var n=He(a.__v),r=!1,o=function(){r||(r=!0,n?n(s):s())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var s=function(){var e;if(!--a.__u)for(a.__v.__k[0]=a.state.u,a.setState({u:a.__b=null});e=a.o.pop();)e.forceUpdate()};a.__u++||a.setState({u:a.__b=a.__v.__k[0]}),e.then(o,o)},Ne.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=Re(this.__b),this.__b=null),[h(g,null,t.u?null:e.children),t.u&&e.fallback]};var We=function(e,t,a){if(++a[1]===a[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(a=e.i;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;e.i=a=a[2]}};(Oe.prototype=new g).u=function(e){var t=this,a=He(t.__v),n=t.l.get(e);return n[0]++,function(r){var o=function(){t.props.revealOrder?(n.push(r),We(t,e,n)):r()};a?a(o):o()}},Oe.prototype.render=function(e){this.i=null,this.l=new Map;var t=k(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var a=t.length;a--;)this.l.set(t[a],this.i=[1,0,this.i]);return e.children},Oe.prototype.componentDidUpdate=Oe.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,a){We(e,a,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var $e=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;g.prototype.isReactComponent={};var Be="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Fe=t.event;function Ve(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}t.event=function(e){Fe&&(e=Fe(e)),e.persist=function(){};var t=!1,a=!1,n=e.stopPropagation;e.stopPropagation=function(){n.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),a=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return a},e.nativeEvent=e};var Ze={configurable:!0,get:function(){return this.class}},Ge=t.vnode;t.vnode=function(e){e.$$typeof=Be;var t=e.type,a=e.props;if(a.class!=a.className&&(Ze.enumerable="className"in a,null!=a.className&&(a.class=a.className),Object.defineProperty(a,"className",Ze)),"function"!=typeof t){var n,r,o;for(o in a.defaultValue&&void 0!==a.value&&(a.value||0===a.value||(a.value=a.defaultValue),delete a.defaultValue),Array.isArray(a.value)&&a.multiple&&"select"===t&&(k(a.children).forEach((function(e){-1!=a.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete a.value),a)if(n=$e.test(o))break;if(n)for(o in r=e.props={},a)r[$e.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=a[o]}!function(t){var a=e.type,n=e.props;if(n&&"string"==typeof a){var r={};for(var o in n)/^on(Ani|Tra|Tou)/.test(o)&&(n[o.toLowerCase()]=n[o],delete n[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onbeforeinput&&(n.onbeforeinput=n[r.onbeforeinput],delete n[r.onbeforeinput]),r.onchange&&("textarea"===a||"input"===a.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var s=r.oninput||"oninput";n[s]||(n[s]=n[r.onchange],delete n[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(Ve(t.prototype,"componentWillMount"),Ve(t.prototype,"componentWillReceiveProps"),Ve(t.prototype,"componentWillUpdate"),t.m=!0),Ge&&Ge(e)};let Ye;function Ke(e){const[t,a]=Ee(!1),n=Pe(null);Le(()=>{t&&n.current.focus({preventScroll:!0})},[t]);const r=(""+Math.random()).substring(2,9);return h("div",{class:Je},h("div",{class:"ld-expandable"},h("button",{onClick:()=>a(!t),class:"ld-expandable--toggle","aria-controls":"expandable-id--"+r,"aria-expanded":t},h("div",{class:"ld-expandable--icon"},t?Xe:Qe),h("div",{class:"ld-expandable--toggle-content"},h("h2",null,e.toggle))),h("div",{ref:n,id:"expandable-id--"+r,class:"ld-expandable--detail "+(t?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},e.detail)))}const Je=N(Ye||(Ye=(e=>e)`
  .ld-expandable {
    width: 100%;
    height: auto;
    border-bottom: lightgrey solid 1px;
  }

  .ld-expandable a {
    color: var(--ld-active);
  }

  .ld-expandable--icon {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .ld-expandable--toggle-content {
    flex: 1;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    height: 60px;
  }

  .ld-expandable button {
    color: var(--ld-text);
    text-align: left;
    width: 100%;
    display: flex;

    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    background: transparent;
  }

  .ld-expandable--toggle {
    height: 60px;
  }

  .ld-expandable--toggle:hover {
    background-color: var(--ld-hover);
  }

  .ld-expandable--detail {
  }

  .ld-expandable--expanded {
    display: block;
    padding: 10px;
  }

  .ld-expandable--closed {
    display: none;
  }
`)),Qe=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"9 6 15 12 9 18"})),Xe=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"}));let et;function tt(){const[e,t]=Ee([{type:"New",date:"19-22-2020, 22:01",text:"Some information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or something"},{type:"Rectification",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"},{type:"Petition",date:"19-22-2020, 22:01",text:"Some information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or something"},{type:"Announcement",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"},{type:"Promotion",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"}]);return Le(()=>{}),h("div",{class:at},h("ul",null,e.map(({date:e,text:t,type:a})=>h("li",null,h("div",{class:"ld-ticker--bar"},h("div",{class:"ld-ticker--dot-container"},h("div",{class:"ld-ticker--dot "+a.toLowerCase()})),h("div",{class:"ld-ticker--line"})),h("div",{class:"ld-ticker--content"},h("div",{class:"ld-ticker--date"},e),h("div",{class:"ld-ticker--text"},t))))))}const at=N(et||(et=(e=>e)`
  & ul {
    list-style: none;
    margin: 0;
    padding: 20px 0 0 0;
    font-family: 'Montserrat', sans-serif;
  }

  & li {
    display: flex;
    margin-bottom: 20px;
  }

  .new {
    background-color: #769de2;
  }
  .promotion {
    background-color: #ebb577;
  }
  .rectification {
    background-color: #d36d6b;
  }
  .petition {
    background-color: #ba87f0;
  }
  .announcement {
    background-color: #9fc184;
  }

  .ld-ticker {
    width: 100%;
  }

  .ld-ticker--bar {
    width: 15px;
    display: flex;
    margin-right: 20px;
    flex-direction: column;
  }

  .ld-ticker--dot-container {
    display: flex;
    justify-content: center;
    width: 15px;
    height: 20px;
  }

  .ld-ticker--dot {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }

  .ld-ticker--line {
    width: 15px;
    height: 100%;
    position: relative;
  }

  .ld-ticker--line::after {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 50%;
    border-left: 1px solid lightgrey;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }

  .ld-ticker--content {
  }
  .ld-ticker--date {
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  .ld-ticker--text {
    font-size: 14px;
  }
`));function nt(e){let t;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(a=>{a&&(a.addEventListener("updatefound",()=>{t=a.installing,t.addEventListener("statechange",()=>{"installed"===t.state&&navigator.serviceWorker.controller&&e(!0)})}),a.waiting&&navigator.serviceWorker.controller&&(e(!0),t=a.waiting))})}function rt(e){const[t,a]=[...document.querySelectorAll("link[rel='icon']")],n=document.querySelector("link[rel='manifest']"),r=document.querySelector("meta[name='theme-color']");e?(n.href="/manifest-dark.json",t.href="src/assets/favicon-32x32-dark.png",a.href="src/assets/favicon-16x16-dark.png",r.setAttribute("content","#303136")):(n.href="/manifest.json",t.href="src/assets/favicon-32x32.png",a.href="src/assets/favicon-16x16.png",r.setAttribute("content","#ffffff")),document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(t),document.getElementsByTagName("head")[0].appendChild(a),document.getElementsByTagName("head")[0].appendChild(r)}let ot,st;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),st=!0,ot=e});class lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),ot=e,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))}),st&&this.removeAttribute("hidden")}async _handlePrompt(e){e.preventDefault(),ot.prompt();const{outcome:t}=await ot.userChoice;"accepted"===t?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),ot=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",lt);class it extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){this.addEventListener("click",this._postMessage.bind(this)),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)})}async _postMessage(e){e.preventDefault(),(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",it);let ct;const dt=N(ct||(ct=(e=>e)`
  & {
    padding-top: 20px;
  }

  label {
    user-select: none;
  }

  input {
    margin-right: 10px;
  }

  .ld-button {
    font-weight: 700;
    display: block;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    border: none;
    padding: 15px;
    overflow: visible;
    background: transparent;
    background-color: #769de2;
    color: var(--ld-text);
    font-size: 16px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  }

  .ld-button:hover,
  .ld-button:active {
    background-color: #89aff3;
  }
`));function ut(){const[e,t]=Ee(!1),[a,n]=Ee(!1);return Le(async()=>{if(nt(e=>{n(e)}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});if("true"===localStorage.getItem("geolocation"))return void t(!1);"granted"!==e.state&&t(!0)}},[]),h("div",{class:dt},h("button",{onClick:function(){document.getElementsByTagName("html")[0].classList.contains("dark")?(document.getElementsByTagName("html")[0].classList.remove("dark"),localStorage.setItem("darkmode","false"),rt(!1)):(document.getElementsByTagName("html")[0].classList.add("dark"),localStorage.setItem("darkmode","true"),rt(!0))},class:"ld-button"},"Toggle darkmode"),e?h("button",{onClick:function(){navigator.permissions&&navigator.geolocation.getCurrentPosition(()=>{t(!1)})},class:"ld-button"},"Allow geolocation"):"",h("pwa-install-button",null,h("button",{class:"ld-button"},"Install app")),a?h("pwa-update-available",null,h("button",{class:"ld-button"},"Update app")):"")}const ht=e=>{switch(e){case"info":return{title:"info",template:[h("h1",null,"Lockdown"),h("p",null,h("b",null,"Project Lockdown")," aims to map the different lockdowns around the world, offering the public a number of relevant metrics\n            in order to provide an overview of the restrictions applied worldwide. We hope this will help evaluate the seriousness of the\n            COVID-19 pandemic and help journalists and Human Rights defenders in their reporting and overseeing tasks."),h(Ke,{toggle:"About",detail:h("p",null,"While lockdowns generally help countries to flatten the curve, and prevent COVID-19 from spreading, countries with a\n                dictatorial nature may see this as an opportunity to increase their grasp over a country, and even potentially lead to\n                martial law type scenarios. Governments may unnecesarily prolong lockdowns or not stick to their announced end dates for\n                political gain. ",h("b",null,"Project Lockdown")," aims to visualize these situations.")}),h(Ke,{toggle:"Sources",detail:h("p",null,h("b",null,"Project Lockdown")," uses a variety of sources to compile all the information showcased. We make sure to only consider sources that are reliable and verifiable.\n                You can check all the ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"sources")," employed here:",h("ul",{class:"ld-sources"},h("li",null,h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.travel-advisory.info/"},"Travel-advisory API")),h("li",null,h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://api.coronatracker.com/"},"Coronatracker API"),h("br",null),"Recognized by ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.who.int/bulletin/online_first/COVID-19/en/"},"WHO")),h("li",null,"For reference data see the ",h("b",null,"Data Sources")," Tab."),h("li",null,"For country data see the ",h("b",null,"Find the Countries")," Tab by it's ISO Alpha 3 code.\n                    (Quick find through Global Tab)")),"If you find any errors, please help us and report it ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Code-for-All/lockdown/issues"},"by creating an issue here"),".")}),h(Ke,{toggle:"Credits",detail:h("p",null,h("b",null,"Project Lockdown")," is a Civic Tech initiative from a number of organizations and individuals. You can find the",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"list of project members here"),"under the ",h("b",null,"Credits")," tab.")}),h(Ke,{toggle:"Data & Privacy",detail:[h("p",null,"We do not collect any information from our visitors."),h("p",null,"All information from any project member shown anywhere in the application is under their prior consent.")]})]};case"settings":return{title:"settings",template:h(ut,null)};case"contribute":return{title:"contribute",template:[h("p",null,h("b",null,"Project Lockdown")," is made possible by the contribution of many individuals who are giving their time to make possible that everyone has access to the right information."),h("p",null,"Do you have any information you want to contribute? Please follow this link:"),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Submit data"),h("p",null,"Additionally, you can become part of the project by joining one of the following teams:",h("ul",null,h("li",null,"Editors"),h("li",null,"Devs"),h("li",null,"UI/UX"))),h("p",null,"Contact us via Telegram at:",h("br",null),h("a",{class:"ld-link"},"@ProjectLockdown"))]};case"updates":return{title:"updates",template:h(tt,null)};default:return{title:"",template:void 0}}};class pt extends g{constructor(e){super(e),this.state={updateAvailable:!1,activeItem:"info"}}componentDidMount(){H("(min-width: 960px)",e=>{this.setState({isMobile:!e}),e&&this.props.close()}),nt(e=>{this.setState({updateAvailable:e})})}switchContent(e){if("settings"===e&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.state.isMobile&&this.props.opened&&e===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.props.changeRoute(ht(e)),this.prevVal=e,this.setState({activeItem:e})}render(e,{activeItem:t,updateAvailable:a}){return h("div",{class:"ld-menu"},h("div",{class:"ld-menu-nav"},h("nav",null,h("ul",null,h("li",null,h("button",{onClick:()=>this.switchContent("info")},Z,h("p",{class:"info"===t?"ld-menu--active":""},"INFO"))),h("li",null,h("button",{onClick:()=>this.switchContent("settings")},a?h("div",{class:"ld-menu--notification"}):"",G,h("p",{class:"settings"===t?"ld-menu--active":""},"SETTINGS"))),h("li",null,h("button",{onClick:()=>this.switchContent("updates")},Y,h("p",{class:"updates"===t?"ld-menu--active":""},"UPDATES"))),h("li",null,h("button",{onClick:()=>this.switchContent("contribute")},K,h("p",{class:"contribute"===t?"ld-menu--active":""},"CONTRIBUTE")))))),h("div",{class:"ld-menu--content"},h("div",{class:"mb-only"},h("div",{class:"ld-menu--header"},h("h1",null,t))),ht(t).template))}}let ft,gt,_t=e=>e;const mt=N(ft||(ft=_t`
  & {
    position: fixed;
    z-index: 1100;
    top: 74px;
    left: 50%;
    margin: 0 auto;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    transform: translateX(-50%);
    border-radius: 12px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
  }

  @media (min-width: 900px) {
    & {
      display: none;
    }
  }
`)),vt=N(gt||(gt=_t`
  & {
    position: fixed;
    margin-left: 400px;
    margin-top: 60px;
    width: 100%;
    height: 100%;
    z-index: 1100;
  }

  .ld-dialog--container {
    overflow: hidden;
    position: fixed;
    width: 90%;
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 400px;
    left: calc(50% + 200px);
    top: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    border-radius: 5px;
  }

  .ld-dialog--header {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .ld-dialog--header h1 {
    margin-top: 0;
    margin-left: 24px;
    margin-bottom: 0;
    flex: 1;
  }

  .ld-dialog--content {
    overflow: auto;
    height: calc(100% - 40px);
    padding: 0 20px 20px 20px;
  }

  .ld-dialog--close-cont button {
    display: flex;
    padding: 0;
    width: 30px;
    border: none;
    overflow: visible;
    background: transparent;
    height: 30px;
    align-items: center;
    justify-content: center;
    color: var(--ld-text);
  }

  .ld-dialog--close-cont button:hover {
    background-color: var(--ld-hover);
    border-radius: 50%;
  }

  @media (max-width: 960px) {
    & {
      margin-bottom: 60px;
      margin-top: 60px;
      position: fixed;
      width: 100%;
      height: calc(100% - 120px);
      z-index: 1100;
      margin-left: 0;
    }

    .ld-dialog--container {
      width: 90%;
      max-width: 400px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: calc(100% - 140px);
    }
  }
`));console.log("🌐 Project Lockdown, version: 0.0.0"),window.addEventListener("appinstalled",()=>{window.location.reload()}),function(e,a,n){var r,o,c;t.__&&t.__(e,a),o=(r=n===s)?null:n&&n.__k||a.__k,e=h(f,null,[e]),c=[],A(a,(r?a:n||a).__k=e,o||l,l,void 0!==a.ownerSVGElement,n&&!r?[n]:o?null:i.slice.call(a.childNodes),c,n||l,r),S(c,e)}([h(()=>h("header",{class:te},h("a",{href:""},Q),h("div",{class:"totals"},h(V,null))),null),h(class extends g{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""}},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__change=this.__change.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onClick=this.__onClick.bind(this),this.__changeRoute=this.__changeRoute.bind(this)}async componentDidMount(){this.__onPathChanged(),H("(prefers-color-scheme: dark)",e=>{const t=localStorage.getItem("darkmode");null!==t?"true"===t&&(document.getElementsByTagName("html")[0].classList.add("dark"),rt(!0)):e?(document.getElementsByTagName("html")[0].classList.add("dark"),rt(!0)):(document.getElementsByTagName("html")[0].classList.remove("dark"),rt(!1))}),H("(min-width: 960px)",e=>{this.setState({isMobile:!e})})}componentWillMount(){window.addEventListener("keydown",this.__onKeyDown,!0),ae.addEventListener("path-changed",this.__onPathChanged)}componentWillUnmount(){window.removeEventListener("keydown",this.__onKeyDown,!0),ae.removeEventListener("path-changed",this.__onPathChanged)}render(){return[h("div",{class:mt},h(V,null)),h(le,null),h(pt,{opened:this.state.dialog.opened,changeRoute:this.__changeRoute,close:this.__closeDialog}),this.state.dialog.opened?h("div",{class:vt,onClick:this.__onClick},h("div",{ref:e=>this.dialogRef=e,class:"ld-dialog--container"},h("div",{class:"ld-dialog--header"},h("h1",null,this.state.dialog.title),h("div",{class:"ld-dialog--close-cont"},h("button",{onClick:this.__closeDialog,class:"ld-dialog--close"},J))),h("div",{class:"ld-dialog--content"},this.state.dialog.template))):""]}__changeRoute({template:e,title:t}){const a=ae.url.searchParams.get("country");a?ae.setPath(`${t}?country=${a}`):ae.setPath(t),this.state.isMobile&&(ae.setSearchParam("country",null),this.__change({template:e,title:t}))}__onPathChanged(){const e=ae.url.searchParams.get("country"),t=ae.url.searchParams.get("iso2");e&&t&&this.setState({dialog:{opened:!0,template:h(me,{country:e,iso2:t}),title:e}})}__onKeyDown(e){27===e.keyCode&&this.__closeDialog()}__change({template:e,title:t}){this.setState({dialog:{opened:!0,template:e,title:t}})}__onClick(e){!e.composedPath().includes(this.dialogRef)&&this.__closeDialog()}__closeCountryInfo(){ae.setSearchParam("country",void 0),ae.setSearchParam("iso2",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),this.__closeCountryInfo()}},null)],document.getElementById("app"));
