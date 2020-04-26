var t,a,n,r,o,s,l={},i=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function d(e,t){for(var a in t)e[a]=t[a];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,a){var n,r=arguments,o={};for(n in t)"key"!==n&&"ref"!==n&&(o[n]=t[n]);if(arguments.length>3)for(a=[a],n=3;n<arguments.length;n++)a.push(r[n]);if(null!=a&&(o.children=a),"function"==typeof e&&null!=e.defaultProps)for(n in e.defaultProps)void 0===o[n]&&(o[n]=e.defaultProps[n]);return p(e,o,t&&t.key,t&&t.ref,null)}function p(e,a,n,r,o){var s={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(s.__v=s),t.vnode&&t.vnode(s),s}function f(e){return e.children}function g(e,t){this.props=e,this.context=t}function _(e,t){if(null==t)return e.__?_(e.__,e.__.__k.indexOf(e)+1):null;for(var a;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e)return a.__e;return"function"==typeof e.type?_(e):null}function v(e){var t,a;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e){e.__e=e.__c.base=a.__e;break}return v(e)}}function m(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(b)}function b(){for(var e;n=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,a,n,r,o,s,l;e.__d&&(s=(o=(t=e).__v).__e,(l=t.__P)&&(a=[],(n=d({},o)).__v=n,r=L(l,o,n,t.__n,void 0!==l.ownerSVGElement,null,a,null==s?_(o):s),A(a,o),r!=s&&v(o)))}))}function w(e,t,a,n,r,o,s,c,d){var h,p,f,g,v,m,b,w=a&&a.__k||i,y=w.length;if(c==l&&(c=null!=o?o[0]:y?_(a,0):null),h=0,t.__k=k(t.__k,(function(a){if(null!=a){if(a.__=t,a.__b=t.__b+1,null===(f=w[h])||f&&a.key==f.key&&a.type===f.type)w[h]=void 0;else for(p=0;p<y;p++){if((f=w[p])&&a.key==f.key&&a.type===f.type){w[p]=void 0;break}f=null}if(g=L(e,a,f=f||l,n,r,o,s,c,d),(p=a.ref)&&f.ref!=p&&(b||(b=[]),f.ref&&b.push(f.ref,null,a),b.push(p,a.__c||g,a)),null!=g){var i;if(null==m&&(m=g),void 0!==a.__d)i=a.__d,a.__d=void 0;else if(o==f||g!=c||null==g.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(g),i=null;else{for(v=c,p=0;(v=v.nextSibling)&&p<y;p+=2)if(v==g)break e;e.insertBefore(g,c),i=c}"option"==t.type&&(e.value="")}c=void 0!==i?i:g.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&f.__e==c&&c.parentNode!=e&&(c=_(f))}return h++,a})),t.__e=m,null!=o&&"function"!=typeof t.type)for(h=o.length;h--;)null!=o[h]&&u(o[h]);for(h=y;h--;)null!=w[h]&&z(w[h],w[h]);if(b)for(h=0;h<b.length;h++)M(b[h],b[++h],b[++h])}function k(e,t,a){if(null==a&&(a=[]),null==e||"boolean"==typeof e)t&&a.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)k(e[n],t,a);else a.push(t?t("string"==typeof e||"number"==typeof e?p(null,e,null,null,e):null!=e.__e||null!=e.__c?p(e.type,e.props,e.key,null,e.__v):e):e);return a}function y(e,t,a){"-"===t[0]?e.setProperty(t,a):e[t]="number"==typeof a&&!1===c.test(t)?a+"px":null==a?"":a}function x(e,t,a,n,r){var o,s,l,i,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(o=e.style,"string"==typeof a)o.cssText=a;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(i in n)a&&i in a||y(o,i,"");if(a)for(c in a)n&&a[c]===n[c]||y(o,c,a[c])}else"o"===t[0]&&"n"===t[1]?(s=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),a?(n||e.addEventListener(t,C,s),(e.l||(e.l={}))[t]=a):e.removeEventListener(t,C,s)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==a?"":a:"function"!=typeof a&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==a||!1===a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),a):null==a||!1===a&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,a))}function C(e){this.l[e.type](t.event?t.event(e):e)}function L(e,a,n,r,o,s,l,i,c){var u,h,p,_,v,m,b,k,y,x,C=a.type;if(void 0!==a.constructor)return null;(u=t.__b)&&u(a);try{e:if("function"==typeof C){if(k=a.props,y=(u=C.contextType)&&r[u.__c],x=u?y?y.props.value:u.__:r,n.__c?b=(h=a.__c=n.__c).__=h.__E:("prototype"in C&&C.prototype.render?a.__c=h=new C(k,x):(a.__c=h=new g(k,x),h.constructor=C,h.render=E),y&&y.sub(h),h.props=k,h.state||(h.state={}),h.context=x,h.__n=r,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=C.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,C.getDerivedStateFromProps(k,h.__s))),_=h.props,v=h.state,p)null==C.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==_&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,x)||a.__v===n.__v&&!h.__){for(h.props=k,h.state=h.__s,a.__v!==n.__v&&(h.__d=!1),h.__v=a,a.__e=n.__e,a.__k=n.__k,h.__h.length&&l.push(h),u=0;u<a.__k.length;u++)a.__k[u]&&(a.__k[u].__=a);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,x),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(_,v,m)}))}h.context=x,h.props=k,h.state=h.__s,(u=t.__r)&&u(a),h.__d=!1,h.__v=a,h.__P=e,u=h.render(h.props,h.state,h.context),a.__k=null!=u&&u.type==f&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(r=d(d({},r),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(m=h.getSnapshotBeforeUpdate(_,v)),w(e,a,n,r,o,s,l,i,c),h.base=a.__e,h.__h.length&&l.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==s&&a.__v===n.__v?(a.__k=n.__k,a.__e=n.__e):a.__e=S(n.__e,a,n,r,o,s,l,c);(u=t.diffed)&&u(a)}catch(e){a.__v=null,t.__e(e,a,n)}return a.__e}function A(e,a){t.__c&&t.__c(a,e),e.some((function(a){try{e=a.__h,a.__h=[],e.some((function(e){e.call(a)}))}catch(e){t.__e(e,a.__v)}}))}function S(e,t,a,n,r,o,s,c){var d,u,h,p,f,g=a.props,_=t.props;if(r="svg"===t.type||r,null!=o)for(d=0;d<o.length;d++)if(null!=(u=o[d])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,o[d]=null;break}if(null==e){if(null===t.type)return document.createTextNode(_);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,_.is&&{is:_.is}),o=null,c=!1}if(null===t.type)g!==_&&e.data!=_&&(e.data=_);else{if(null!=o&&(o=i.slice.call(e.childNodes)),h=(g=a.props||l).dangerouslySetInnerHTML,p=_.dangerouslySetInnerHTML,!c){if(g===l)for(g={},f=0;f<e.attributes.length;f++)g[e.attributes[f].name]=e.attributes[f].value;(p||h)&&(p&&h&&p.__html==h.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,a,n,r){var o;for(o in a)"children"===o||"key"===o||o in t||x(e,o,null,a[o],n);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||a[o]===t[o]||x(e,o,t[o],a[o],n)})(e,_,g,r,c),p?t.__k=[]:(t.__k=t.props.children,w(e,t,a,n,"foreignObject"!==t.type&&r,o,s,l,c)),c||("value"in _&&void 0!==(d=_.value)&&d!==e.value&&x(e,"value",d,g.value,!1),"checked"in _&&void 0!==(d=_.checked)&&d!==e.checked&&x(e,"checked",d,g.checked,!1))}return e}function M(e,a,n){try{"function"==typeof e?e(a):e.current=a}catch(e){t.__e(e,n)}}function z(e,a,n){var r,o,s;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||M(r,null,a)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,a)}r.base=r.__P=null}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&z(r[s],a,n);null!=o&&u(o)}function E(e,t,a){return this.constructor(e,a)}t={__e:function(e,t){for(var a,n;t=t.__;)if((a=t.__c)&&!a.__)try{if(a.constructor&&null!=a.constructor.getDerivedStateFromError&&(n=!0,a.setState(a.constructor.getDerivedStateFromError(e))),null!=a.componentDidCatch&&(n=!0,a.componentDidCatch(e)),n)return m(a.__E=a)}catch(t){e=t}throw e}},g.prototype.setState=function(e,t){var a;a=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(a,this.props)),e&&d(a,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},g.prototype.render=f,a=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=l;var P=function e(t,a,n,r){var o;a[0]=0;for(var s=1;s<a.length;s++){var l=a[s++],i=a[s]?(a[0]|=l?1:2,n[a[s++]]):a[++s];3===l?r[0]=i:4===l?r[1]=Object.assign(r[1]||{},i):5===l?(r[1]=r[1]||{})[a[++s]]=i:6===l?r[1][a[++s]]+=i+"":l?(o=t.apply(i,e(t,i,n,["",null])),r.push(o),i[0]?a[0]|=2:(a[s-2]=0,a[s]=o)):r.push(i)}return r},j=new Map;(function(e){var t=j.get(this);return t||(t=new Map,j.set(this,t)),(t=P(this,t.get(e)||(t.set(e,t=function(e){for(var t,a,n=1,r="",o="",s=[0],l=function(e){1===n&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,e,r):3===n&&(e||r)?(s.push(3,e,r),n=2):2===n&&"..."===r&&e?s.push(4,e,0):2===n&&r&&!e?s.push(5,0,!0,r):n>=5&&((r||!e&&5===n)&&(s.push(n,0,r,a),n=6),e&&(s.push(n,e,0,a),n=6)),r=""},i=0;i<e.length;i++){i&&(1===n&&l(),l(i));for(var c=0;c<e[i].length;c++)t=e[i][c],1===n?"<"===t?(l(),s=[s],n=3):r+=t:4===n?"--"===r&&">"===t?(n=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(l(),n=1):n&&("="===t?(n=5,a=r,r=""):"/"===t&&(n<5||">"===e[i][c+1])?(l(),3===n&&(s=s[0]),n=s,(s=s[0]).push(2,0,n),n=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(l(),n=2):r+=t),3===n&&"!--"===r&&(n=4,s=s[0])}return l(),s}(e)),t),arguments,[])).length>1?t:t[0]}).bind(h);const H=(e,t)=>{let a=window.matchMedia(e);a.addListener(e=>t(e.matches)),t(a.matches)};var D=t=>{var a=/^\0+/g,n=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,s=/([,: ])(transform)/g,l=/,+\s*(?![^(]*[)])/g,i=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,d=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,h=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,v=/\s+(?=[{\];=:>])/g,m=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,k=/([^\(])(:+) */g,y=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,L=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,M=/([^-])(image-set\()/,z="-webkit-",E="-moz-",P="-ms-",j=59,H=125,D=123,T=40,I=41,q=10,U=13,R=32,N=45,O=42,W=44,V=58,$=47,F=1,B=1,Y=0,G=1,Q=1,Z=1,K=0,X=0,J=0,ee=[],te=[],ae=0,ne=null,re=0,oe=1,se="",le="",ie="";function ce(e,t,r,o,s){for(var l,i,d=0,u=0,h=0,p=0,v=0,m=0,b=0,w=0,y=0,C=0,L=0,A=0,S=0,M=0,E=0,P=0,K=0,te=0,ne=0,ue=r.length,ve=ue-1,me="",be="",we="",ke="",ye="",xe="";E<ue;){if(b=r.charCodeAt(E),E===ve&&u+p+h+d!==0&&(0!==u&&(b=u===$?q:$),p=h=d=0,ue++,ve++),u+p+h+d===0){if(E===ve&&(P>0&&(be=be.replace(n,"")),be.trim().length>0)){switch(b){case R:case 9:case j:case U:case q:break;default:be+=r.charAt(E)}b=j}if(1===K)switch(b){case D:case H:case j:case 34:case 39:case T:case I:case W:K=0;case 9:case U:case q:case R:break;default:for(K=0,ne=E,v=b,E--,b=j;ne<ue;)switch(r.charCodeAt(ne++)){case q:case U:case j:++E,b=v,ne=ue;break;case V:P>0&&(++E,b=v);case D:ne=ue}}switch(b){case D:for(v=(be=be.trim()).charCodeAt(0),L=1,ne=++E;E<ue;){switch(b=r.charCodeAt(E)){case D:L++;break;case H:L--;break;case $:switch(m=r.charCodeAt(E+1)){case O:case $:E=_e(m,E,ve,r)}break;case 91:b++;case T:b++;case 34:case 39:for(;E++<ve&&r.charCodeAt(E)!==b;);}if(0===L)break;E++}switch(we=r.substring(ne,E),0===v&&(v=(be=be.replace(a,"").trim()).charCodeAt(0)),v){case 64:switch(P>0&&(be=be.replace(n,"")),m=be.charCodeAt(1)){case 100:case 109:case 115:case N:l=t;break;default:l=ee}if(ne=(we=ce(t,l,we,m,s+1)).length,J>0&&0===ne&&(ne=be.length),ae>0&&(i=ge(3,we,l=de(ee,be,te),t,B,F,ne,m,s,o),be=l.join(""),void 0!==i&&0===(ne=(we=i.trim()).length)&&(m=0,we="")),ne>0)switch(m){case 115:be=be.replace(x,fe);case 100:case 109:case N:we=be+"{"+we+"}";break;case 107:we=(be=be.replace(f,"$1 $2"+(oe>0?se:"")))+"{"+we+"}",we=1===Q||2===Q&&pe("@"+we,3)?"@"+z+we+"@"+we:"@"+we;break;default:we=be+we,112===o&&(ke+=we,we="")}else we="";break;default:we=ce(t,de(t,be,te),we,o,s+1)}ye+=we,A=0,K=0,M=0,P=0,te=0,S=0,be="",we="",b=r.charCodeAt(++E);break;case H:case j:if((ne=(be=(P>0?be.replace(n,""):be).trim()).length)>1)switch(0===M&&((v=be.charCodeAt(0))===N||v>96&&v<123)&&(ne=(be=be.replace(" ",":")).length),ae>0&&void 0!==(i=ge(1,be,t,e,B,F,ke.length,o,s,o))&&0===(ne=(be=i.trim()).length)&&(be="\0\0"),v=be.charCodeAt(0),m=be.charCodeAt(1),v){case 0:break;case 64:if(105===m||99===m){xe+=be+r.charAt(E);break}default:if(be.charCodeAt(ne-1)===V)break;ke+=he(be,v,m,be.charCodeAt(2))}A=0,K=0,M=0,P=0,te=0,be="",b=r.charCodeAt(++E)}}switch(b){case U:case q:if(u+p+h+d+X===0)switch(C){case I:case 39:case 34:case 64:case 126:case 62:case O:case 43:case $:case N:case V:case W:case j:case D:case H:break;default:M>0&&(K=1)}u===$?u=0:G+A===0&&107!==o&&be.length>0&&(P=1,be+="\0"),ae*re>0&&ge(0,be,t,e,B,F,ke.length,o,s,o),F=1,B++;break;case j:case H:if(u+p+h+d===0){F++;break}default:switch(F++,me=r.charAt(E),b){case 9:case R:if(p+d+u===0)switch(w){case W:case V:case 9:case R:me="";break;default:b!==R&&(me=" ")}break;case 0:me="\\0";break;case 12:me="\\f";break;case 11:me="\\v";break;case 38:p+u+d===0&&G>0&&(te=1,P=1,me="\f"+me);break;case 108:if(p+u+d+Y===0&&M>0)switch(E-M){case 2:112===w&&r.charCodeAt(E-3)===V&&(Y=w);case 8:111===y&&(Y=y)}break;case V:p+u+d===0&&(M=E);break;case W:u+h+p+d===0&&(P=1,me+="\r");break;case 34:case 39:0===u&&(p=p===b?0:0===p?b:p);break;case 91:p+u+h===0&&d++;break;case 93:p+u+h===0&&d--;break;case I:p+u+d===0&&h--;break;case T:if(p+u+d===0){if(0===A)switch(2*w+3*y){case 533:break;default:L=0,A=1}h++}break;case 64:u+h+p+d+M+S===0&&(S=1);break;case O:case $:if(p+d+h>0)break;switch(u){case 0:switch(2*b+3*r.charCodeAt(E+1)){case 235:u=$;break;case 220:ne=E,u=O}break;case O:b===$&&w===O&&ne+2!==E&&(33===r.charCodeAt(ne+2)&&(ke+=r.substring(ne,E+1)),me="",u=0)}}if(0===u){if(G+p+d+S===0&&107!==o&&b!==j)switch(b){case W:case 126:case 62:case 43:case I:case T:if(0===A){switch(w){case 9:case R:case q:case U:me+="\0";break;default:me="\0"+me+(b===W?"":"\0")}P=1}else switch(b){case T:M+7===E&&108===w&&(M=0),A=++L;break;case I:0==(A=--L)&&(P=1,me+="\0")}break;case 9:case R:switch(w){case 0:case D:case H:case j:case W:case 12:case 9:case R:case q:case U:break;default:0===A&&(P=1,me+="\0")}}be+=me,b!==R&&9!==b&&(C=b)}}y=w,w=b,E++}if(ne=ke.length,J>0&&0===ne&&0===ye.length&&0===t[0].length==0&&(109!==o||1===t.length&&(G>0?le:ie)===t[0])&&(ne=t.join(",").length+2),ne>0){if(l=0===G&&107!==o?function(e){for(var t,a,r=0,o=e.length,s=Array(o);r<o;++r){for(var l=e[r].split(c),i="",d=0,u=0,h=0,p=0,f=l.length;d<f;++d)if(!(0===(u=(a=l[d]).length)&&f>1)){if(h=i.charCodeAt(i.length-1),p=a.charCodeAt(0),t="",0!==d)switch(h){case O:case 126:case 62:case 43:case R:case T:break;default:t=" "}switch(p){case 38:a=t+le;case 126:case 62:case 43:case R:case I:case T:break;case 91:a=t+a+le;break;case V:switch(2*a.charCodeAt(1)+3*a.charCodeAt(2)){case 530:if(Z>0){a=t+a.substring(8,u-1);break}default:(d<1||l[d-1].length<1)&&(a=t+le+a)}break;case W:t="";default:a=u>1&&a.indexOf(":")>0?t+a.replace(k,"$1"+le+"$2"):t+a+le}i+=a}s[r]=i.replace(n,"").trim()}return s}(t):t,ae>0&&void 0!==(i=ge(2,ke,l,e,B,F,ne,o,s,o))&&0===(ke=i).length)return xe+ke+ye;if(ke=l.join(",")+"{"+ke+"}",Q*Y!=0){switch(2!==Q||pe(ke,2)||(Y=0),Y){case 111:ke=ke.replace(_,":-moz-$1")+ke;break;case 112:ke=ke.replace(g,"::"+z+"input-$1")+ke.replace(g,"::-moz-$1")+ke.replace(g,":-ms-input-$1")+ke}Y=0}}return xe+ke+ye}function de(e,t,a){var n=t.trim().split(d),r=n,o=n.length,s=e.length;switch(s){case 0:case 1:for(var l=0,i=0===s?"":e[0]+" ";l<o;++l)r[l]=ue(i,r[l],a,s).trim();break;default:l=0;var c=0;for(r=[];l<o;++l)for(var u=0;u<s;++u)r[c++]=ue(e[u]+" ",n[l],a,s).trim()}return r}function ue(e,t,a,n){var r=t,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(G+n){case 0:case 1:if(0===e.trim().length)break;default:return r.replace(u,"$1"+e.trim())}break;case V:switch(r.charCodeAt(1)){case 103:if(Z>0&&G>0)return r.replace(h,"$1").replace(u,"$1"+ie);break;default:return e.trim()+r.replace(u,"$1"+e.trim())}default:if(a*G>0&&r.indexOf("\f")>0)return r.replace(u,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+r}function he(e,t,a,n){var c,d=0,u=e+";",h=2*t+3*a+4*n;if(944===h)return function(e){var t=e.length,a=e.indexOf(":",9)+1,n=e.substring(0,a).trim(),r=e.substring(a,t-1).trim();switch(e.charCodeAt(9)*oe){case 0:break;case N:if(110!==e.charCodeAt(10))break;default:var o=r.split((r="",l)),s=0;for(a=0,t=o.length;s<t;a=0,++s){for(var c=o[s],d=c.split(i);c=d[a];){var u=c.charCodeAt(0);if(1===oe&&(u>64&&u<90||u>96&&u<123||95===u||u===N&&c.charCodeAt(1)!==N))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=se}}d[a++]=c}r+=(0===s?"":",")+d.join(" ")}}return r=n+r+";",1===Q||2===Q&&pe(r,1)?z+r+r:r}(u);if(0===Q||2===Q&&!pe(u,1))return u;switch(h){case 1015:return 97===u.charCodeAt(10)?z+u+u:u;case 951:return 116===u.charCodeAt(3)?z+u+u:u;case 963:return 110===u.charCodeAt(5)?z+u+u:u;case 1009:if(100!==u.charCodeAt(4))break;case 969:case 942:return z+u+u;case 978:return z+u+E+u+u;case 1019:case 983:return z+u+E+u+P+u+u;case 883:return u.charCodeAt(8)===N?z+u+u:u.indexOf("image-set(",11)>0?u.replace(M,"$1"+z+"$2")+u:u;case 932:if(u.charCodeAt(4)===N)switch(u.charCodeAt(5)){case 103:return z+"box-"+u.replace("-grow","")+z+u+P+u.replace("grow","positive")+u;case 115:return z+u+P+u.replace("shrink","negative")+u;case 98:return z+u+P+u.replace("basis","preferred-size")+u}return z+u+P+u+u;case 964:return z+u+P+"flex-"+u+u;case 1023:if(99!==u.charCodeAt(8))break;return c=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),z+"box-pack"+c+z+u+P+"flex-pack"+c+u;case 1005:return o.test(u)?u.replace(r,":"+z)+u.replace(r,":"+E)+u:u;case 1e3:switch(d=(c=u.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(d)){case 226:c=u.replace(y,"tb");break;case 232:c=u.replace(y,"tb-rl");break;case 220:c=u.replace(y,"lr");break;default:return u}return z+u+P+c+u;case 1017:if(-1===u.indexOf("sticky",9))return u;case 975:switch(d=(u=e).length-10,h=(c=(33===u.charCodeAt(d)?u.substring(0,d):u).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:u=u.replace(c,z+c)+";"+u;break;case 207:case 102:u=u.replace(c,z+(h>102?"inline-":"")+"box")+";"+u.replace(c,z+c)+";"+u.replace(c,P+c+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===N)switch(u.charCodeAt(6)){case 105:return c=u.replace("-items",""),z+u+z+"box-"+c+P+"flex-"+c+u;case 115:return z+u+P+"flex-item-"+u.replace(L,"")+u;default:return z+u+P+"flex-line-pack"+u.replace("align-content","").replace(L,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==N||122===u.charCodeAt(4))break;case 931:case 953:if(!0===S.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?he(e.replace("stretch","fill-available"),t,a,n).replace(":fill-available",":stretch"):u.replace(c,z+c)+u.replace(c,E+c.replace("fill-",""))+u;break;case 962:if(u=z+u+(102===u.charCodeAt(5)?P+u:"")+u,a+n===211&&105===u.charCodeAt(13)&&u.indexOf("transform",10)>0)return u.substring(0,u.indexOf(";",27)+1).replace(s,"$1"+z+"$2")+u}return u}function pe(e,t){var a=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?a:10),r=e.substring(a+1,e.length-1);return ne(2!==t?n:n.replace(A,"$1"),r,t)}function fe(e,t){var a=he(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return a!==t+";"?a.replace(C," or ($1)").substring(4):"("+t+")"}function ge(e,t,a,n,r,o,s,l,i,c){for(var d,u=0,h=t;u<ae;++u)switch(d=te[u].call(me,e,h,a,n,r,o,s,l,i,c)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==t)return h}function _e(e,t,a,n){for(var r=t+1;r<a;++r)switch(n.charCodeAt(r)){case $:if(e===O&&n.charCodeAt(r-1)===O&&t+2!==r)return r+1;break;case q:if(e===$)return r+1}return r}function ve(e){for(var t in e){var a=e[t];switch(t){case"keyframe":oe=0|a;break;case"global":Z=0|a;break;case"cascade":G=0|a;break;case"compress":K=0|a;break;case"semicolon":X=0|a;break;case"preserve":J=0|a;break;case"prefix":ne=null,a?"function"!=typeof a?Q=1:(Q=2,ne=a):Q=0}}return ve}function me(t,a){if(void 0!==this&&this.constructor===me)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),oe>0&&(se=r.replace(p,91===o?"":"-")),o=1,1===G?ie=r:le=r;var s,l=[ie];ae>0&&void 0!==(s=ge(-1,a,l,l,B,F,0,0,0,0))&&"string"==typeof s&&(a=s);var i=ce(ee,l,a,0,0);return ae>0&&void 0!==(s=ge(-2,i,l,l,B,F,i.length,0,0,0))&&"string"!=typeof(i=s)&&(o=0),se="",ie="",le="",Y=0,B=1,F=1,K*o==0?i:i.replace(n,"").replace(v,"").replace(m,"$1").replace(b,"$1").replace(w," ")}return me.use=function e(t){switch(t){case void 0:case null:ae=te.length=0;break;default:if("function"==typeof t)te[ae++]=t;else if("object"==typeof t)for(var a=0,n=t.length;a<n;++a)e(t[a]);else re=0|!!t}return e},me.set=ve,void 0!==t&&ve(t),me};const T={},I=document.createElement("style");document.head.appendChild(I);const q=e=>`.${e}{display:none}`,U=e=>/^(\/|https?:\/\/)/.test(e.trim()),R=e=>t=>a=>{I.innerHTML+=(T[e]={hash:t,rules:D()("."+t,a)}).rules,U(e)&&(e=>{I.innerHTML=I.innerHTML.replace(q(e),"")})(t)};var N=(e,...t)=>{const a=e[0].startsWith("/")?e[0]:e.reduce((e,a,n)=>e+(a+(null==t[n]?"":t[n])),"");if(T[a])return T[a].hash;const n="csz-"+Math.random().toString(36).replace("0.",""),r=R(a)(n);return U(a)?((e=>{I.innerHTML=q(e)+I.innerHTML})(n),fetch(a).then(e=>e.text()).then(r)):r(a),n};class O{constructor(){const e=document.createDocumentFragment();this.addEventListener=e.addEventListener.bind(e),this.dispatchEvent=e.dispatchEvent.bind(e),this.removeEventListener=e.removeEventListener.bind(e),this.__lastUpdate=Date.now()}_shouldInvalidate(){return new Date-this.__lastUpdate>3e5}}const W=new class extends O{constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(e){window.history.pushState(null,"",e),this.__onPathChanged()}setSearchParam(e,t){const a=new URLSearchParams(location.search);t?a.set(e,t):a.delete(e);const n=a.toString();this.setPath(`${location.pathname}${n?"?"+n:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed")),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(e=>{e&&e.update()})}__onClick(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find(e=>"A"===e.tagName);if(!t||!t.href)return;if(t.hasAttribute("download")||t.href.includes("mailto:"))return;const a=t.getAttribute("target");if(a&&""!==a&&"_self"!==a)return;const n=new URL(t.href);n.hash||n.href.startsWith(document.baseURI)&&(e.preventDefault(),this.setPath(n.pathname))}};const V=new class extends O{close(e){this.dispatchEvent(new CustomEvent("close",{detail:e}))}};let $;const F={url:new URL("./src/components/WorldMap.js",document.baseURI).href},B=N($||($=(e=>e)`
  & {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`)),Y={asia:[21.943046,96.240234],europe:[52.160455,10.371094],usa:[45.089036,-100.898438]};function G(e){let t;switch(e){case"1":t="#6fcf97";break;case"2":t="#7aaeff";break;case"3":t="#eb5757";break;case"4":t="#f2994a";break;default:t="#CCCCCC"}return t}class Q extends g{constructor(){super(),this.__handleSelect=this.__handleSelect.bind(this),this.initMap=this.initMap.bind(this);let e=[0,0],t=2,a=window.location.href,n=!1;for(let r in Y)-1!=a.indexOf("lockdown."+r)&&(e=Y[r],t=4,n=!0);this.state={lng:e[1],lat:e[0],zoom:t,islocationSet:n}}async initMap(e,t){window.mapboxgl||(console.log("check the map"),await((e=100)=>new Promise(t=>{setTimeout(()=>{t()},e)}))(),await this.initMap(e,t));let a=new window.mapboxgl.Map({accessToken:"pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrOWZpZHF3ajBic2YzbHQwYzQ5bGRnaXgifQ.NcQInXQmMy93L47QBMCAfg",container:this.ref,style:"mapbox://styles/jfqueralt/ck9hi7wl616pz1iugty1cpeiv?optimize=true",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});window.map=a;const n=e;return a.on("style.load",()=>{let e=null;a.on("mousemove","admin-0-fill",(function(t){var n=a.queryRenderedFeatures(t.point,{layers:["admin-0-fill"]});t.features.length>0&&(e&&a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:e},{hover:!1}),e=n[0].id,a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:e},{hover:!0}))})),a.on("click","admin-0-fill",(function(e){const t=a.queryRenderedFeatures(e.point,{layers:["admin-0-fill"]});W.setSearchParam("country",t[0].state.name),W.setSearchParam("iso2",t[0].properties.iso_3166_1)}))}),a.on("load",(function(){console.log("map is loaded"),function(e){a.addSource("admin-0",{type:"vector",url:"mapbox://mapbox.boundaries-adm0-v3"});const t=function(e){let t={};for(let a in e)for(let n in e[a].data)for(let r in e[a].data[n]){let o=e[a].data[n][r];"all"!==n&&"US"!==n||(t[o.unit_code]=o)}return t}(e);function r(e){n.forEach((function(e){a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:t[e.ISO].feature_id},{kind:e.lockdown_status,name:e.name})}))}a.addLayer({id:"admin-0-fill",type:"fill",source:"admin-0","source-layer":"boundaries_admin_0",filter:["any",["==","all",["get","worldview"]],["in","US",["get","worldview"]]],paint:{"fill-color":["case",["!=",["feature-state","kind"],null],["match",["feature-state","kind"],"1",G("1"),"2",G("2"),"3",G("3"),"4",G("4"),"#CCCCCC"],["case",["boolean",["feature-state","hover"],!1],"rgba(204,204,204,0.5)","rgba(204,204,204,0)"]],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.7,1]}},"waterway-label"),a.isSourceLoaded("admin-0")?r():a.on("sourcedata",(function e(t){"admin-0"===t.sourceId&&t.isSourceLoaded&&(r(),a.off("sourcedata",e))}))}(t)})),this.setState({map:a}),a}async componentDidMount(){V.addEventListener("close",e=>{e.detail.countryDialogClosed&&form.focus()});const[e,t]=await Promise.all([fetch(new URL("../../data/worldmap_small.json",F.url)).then(e=>e.json()),fetch(new URL("./../../data/boundaries-adm0-v3.json",F.url)).then(e=>e.json())]);if(this.setState({countries:e}),await this.initMap(e,t),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});"granted"===e.state&&navigator.geolocation.getCurrentPosition(e=>{const{latitude:t,longitude:a}=e.coords;this.state.map.setCenter([a,t]),this.setState({islocationSet:!0})}),e.addEventListener("change",e=>{"granted"===e.target.state?navigator.geolocation.getCurrentPosition(e=>{localStorage.setItem("geolocation","true");const{latitude:t,longitude:a}=e.coords;this.state.map.setCenter([a,t]),this.setState({islocationSet:!0})}):localStorage.removeItem("geolocation")})}}componentWillUnmount(){this.state.map&&this.state.map.remove()}__handleSelect(e){e.preventDefault();const[t,a]=this.selectRef.value.split(",");W.setSearchParam("country",a),W.setSearchParam("iso2",t)}__resetFocus(){this.countrySelectRef.focus()}render(){var e;return[h("div",{class:B},h("form",{id:"form",tabindex:"-1",onSubmit:this.__handleSelect},h("label",{for:"countries"},"Choose a country:"),h("select",{ref:e=>this.selectRef=e,id:"countries"},null===(e=this.state.countries)||void 0===e?void 0:e.map(e=>h("option",{value:e.ISO+","+e.name},e.name))),h("input",{type:"submit",value:"View country details"}))),h("div",{class:"map-container",ref:e=>this.ref=e})]}}const Z={url:new URL("./src/services/totalsService.js",document.baseURI).href};const K=new class extends O{async getTotals(e){return!e&&this.__totals||(this.__totals=fetch(new URL("../../data/totals.json",Z.url)).then(e=>e.json()),await this.__totals,this.dispatchEvent(new Event("change"))),this.__totals}};let X;const J=N(X||(X=(e=>e)`
  dl {
    display: flex;
    height: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }

  dl div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 126px;
    padding: 0 16px;
    margin: 5px 0;
  }

  dt {
    display: block;
  }

  dd {
    margin-left: 0px;
    display: block;
  }

  div:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: lightgrey;
  }
`));class ee extends g{constructor(){super(),this.state={items:[]}}async componentWillMount(){H("(min-width: 900px)",e=>{this.setState({desktop:e})});const e=await K.getTotals(),t=[{description:"Countries in lockdown",value:Number(e.territories.lockdown).toLocaleString()},{description:"People affected",value:"0"},{description:["Reported ",h("br",null),"cases"],value:Number(e.corona.confirmed).toLocaleString()},{description:"Reported deaths",value:Number(e.corona.deaths).toLocaleString()}];this.setState({items:t})}render(e,{items:t,desktop:a}){return h("div",{class:J},h("dl",null,(a?t:t.slice(0,2)).map(e=>h("div",null,h("dt",{class:"ld-font-light"},e.description),h("dd",{class:"ld-font-front"},e.value)))))}}const te=h("svg",{role:"img","aria-labelledby":"srInfo",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-info-circle",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srInfo"},"info"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}),h("polyline",{points:"11 12 12 12 12 16 13 16"})),ae=(h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"})),h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"}))),ne=h("svg",{role:"img","aria-labelledby":"srTicker",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-refresh",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srTicker"},"updates"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"}),h("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"})),re=h("svg",{role:"img","aria-labelledby":"srContribute",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle-plus",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srContribute"},"contribute"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),h("line",{x1:"12",y1:"9",x2:"12",y2:"15"})),oe=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),se=h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h("polyline",{points:"20 6 9 17 4 12"})),le=h("svg",{role:"img","aria-labelledby":"srLockdown",style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",width:"180",height:"26",xmlns:"http://www.w3.org/2000/svg"},h("g",null,h("title",{id:"srLockdown"},"lockdown")),h("g",null,h("g",{stroke:"null",id:"svg_27"},h("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_24"},h("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"background"),h("g",{stroke:"null",id:"svg_22",display:"none"},h("rect",{stroke:"null",id:"svg_25",width:"580",height:"400",x:"14.798918",y:"87.143019","stroke-width":"0"}))),h("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_26"},h("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"Layer 1"),h("g",{stroke:"null",id:"svg_19"},h("g",{stroke:"null",id:"svg_20","stroke-linecap":"round","fill-rule":"evenodd","font-size":"9pt","stroke-width":"0.25mm",transform:"matrix(0.4046201041691139,0,0,0.4046201041691139,-2294.6313297135057,-1675.2340553707181) "},h("path",{stroke:"null",d:"m6385.819401,4377.293685l15.5,0l-22.9,70l-17.4,0l-15.4,-47.4l-15.9,47.4l-17.3,0l-23,-70l16.8,0l15.8,49.2l16.5,-49.2l15,0l16,49.6l16.3,-49.6zm74.2,0l16,0l0,70l-13.3,0l-34.9,-42.5l0,42.5l-16,0l0,-70l13.4,0l34.8,42.5l0,-42.5zm-357.6,70l-22.4,-27.5l-9.4,9.8l0,17.7l-16.1,0l0,-70l16.1,0l0,32.7l31,-32.7l18,0l-29,31.2l30.7,38.8l-18.9,0zm-58.8,-58.8l-10.4,9.6a24.073,24.073 0 0 0 -7.386,-5.877a22.434,22.434 0 0 0 -10.214,-2.323q-6.5,0 -11.6,2.85q-5.1,2.85 -7.95,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.95,7.95a22.496,22.496 0 0 0 8.823,2.714a27.717,27.717 0 0 0 2.777,0.136a22.012,22.012 0 0 0 16.47,-7.054a28.649,28.649 0 0 0 1.13,-1.246l10.4,9.6q-5,6.1 -12.4,9.3q-7.4,3.2 -16.5,3.2q-10.7,0 -19.35,-4.65q-8.65,-4.65 -13.6,-12.9a34.983,34.983 0 0 1 -4.891,-16.401a42.286,42.286 0 0 1 -0.059,-2.249q0,-10.4 4.95,-18.65q4.95,-8.25 13.6,-12.9a39.233,39.233 0 0 1 15.476,-4.487a47.549,47.549 0 0 1 3.974,-0.163q9.1,0 16.45,3.2q7.35,3.2 12.35,9.2zm84.9,58.8l0,-70l31.8,0q11.4,0 20.15,4.35a33.27,33.27 0 0 1 10.748,8.304a32.104,32.104 0 0 1 2.852,3.946q4.85,7.9 4.85,18.4q0,10.5 -4.85,18.4q-4.85,7.9 -13.6,12.25a41.232,41.232 0 0 1 -12.626,3.836a53.292,53.292 0 0 1 -7.524,0.514l-31.8,0zm-292.1,0l0,-70l16.2,0l0,56.8l35.1,0l0,13.2l-51.3,0zm82.114,-0.457a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm314.3,0a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm-88.114,-12.843l14.8,0q10.5,0 16.75,-5.85q6.25,-5.85 6.25,-15.85a25.797,25.797 0 0 0 -0.879,-6.915a18.923,18.923 0 0 0 -5.371,-8.935a21.055,21.055 0 0 0 -10.033,-5.159a30.905,30.905 0 0 0 -6.717,-0.691l-14.8,0l0,43.4zm-214,0.7a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027zm314.3,0a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027z",id:"svg_21"}))),h("g",{stroke:"null",id:"svg_13"},h("g",{stroke:"null",id:"svg_17",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},h("path",{stroke:"null",d:"m-77.204981,496.507538c-68.4,0 -124.1,55.7 -124.1,124.1s55.7,124.1 124.1,124.1s124.1,-55.7 124.1,-124.1s-55.6,-124.1 -124.1,-124.1zm108.2,116.3l-56.4,0c-0.8,-27.3 -5.4,-52.8 -13.3,-72.5c-4.3,-10.8 -9.5,-19.3 -15.2,-25.5c46.1,10 81.4,49.6 84.9,98zm-108.2,109.5c-8.1,0 -17,-10.2 -23.8,-27.2c-7.2,-17.9 -11.5,-41.4 -12.2,-66.7l72.1,0c-0.7,25.3 -5,48.7 -12.2,66.7c-6.9,17.1 -15.8,27.2 -23.9,27.2zm-36,-109.5c0.7,-25.3 5,-48.7 12.2,-66.7c6.8,-17 15.7,-27.2 23.8,-27.2s17,10.2 23.8,27.2c7.2,17.9 11.5,41.4 12.2,66.7l-72,0zm12.9,-98.1c-5.7,6.2 -10.9,14.8 -15.2,25.5c-7.9,19.7 -12.6,45.2 -13.3,72.5l-56.5,0c3.5,-48.3 38.8,-87.9 85,-98zm-85,113.8l56.4,0c0.8,27.3 5.4,52.8 13.3,72.5c4.3,10.8 9.5,19.3 15.2,25.5c-46.1,-10.1 -81.4,-49.7 -84.9,-98zm131.3,98c5.7,-6.2 10.9,-14.8 15.2,-25.5c7.9,-19.7 12.6,-45.2 13.3,-72.5l56.4,0c-3.4,48.3 -38.7,87.9 -84.9,98z",id:"svg_18"})),h("g",{stroke:"null",id:"svg_14",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},h("g",{stroke:"null",id:"svg_15"},h("path",{stroke:"null",d:"m-1.004981,525.807538c-1.3,20.1 -1.6,2.5 -1.6,1.6l0.6,-59.9c0,-30.8 -25,-55.7 -55.7,-55.7l-39.7,0c-30.8,0 -55.7,25 -55.7,55.7l0.1,62.3c0,0.4 1.2,-2.2 0.9,-2.2l0,0c-0.4,0 -0.7,0.4 -0.6,0.8c1.3,6.7 -0.4,-2.3 -0.4,3.2c0,0 0,-1.9 0,-3c0,-0.5 0.4,-0.9 -0.7,-1.9l21.8,0c0.3,-1.6 2.4,-0.9 1.9,-1.6c-6.2,-8.9 2.3,-8.2 3.3,-13.8c0.1,-0.4 -2.1,0 -2.4,0l-3.3,1.6c0.2,0 0,-0.8 -0.1,-7l0,-38.4c0,-19.6 15.9,-35.4 35.4,-35.4l39.6,0c19.6,0 35.4,15.9 35.4,35.4l0,38.2c0.2,4.6 -0.5,5.4 -1.4,5.4l0,-1.6c-1.4,3.1 -1.8,-1.5 -1.7,-0.6c0.4,5.6 0.1,15 1.7,9.5c1.5,-5.1 1.6,4.1 2.4,4.1l18.8,5.1c0.9,0 1.6,-0.7 1.5,-1.6c-0.2,-5.8 -0.7,6.4 0,0.6",id:"svg_16"})))))))),ie=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.76 45.17"},h("defs",null,h("style",null,".cls-1 {\n          fill: #828282;\n          fill-rule: evenodd;\n        }")),h("title",null,"Asset 2"),h("g",{id:"Layer_2","data-name":"Layer 2"},h("g",{id:"Layer_1-2","data-name":"Layer 1"},h("path",{class:"cls-1",d:"M11,0,7.47,3.51l6.9,6.9h-1a14.93,14.93,0,0,0,1.62,29.78H44.15l5,5,3.51-3.51ZM59.76,27.74A12.39,12.39,0,0,0,48.18,15.39,18.58,18.58,0,0,0,20.79,2.76L24.5,6.47a13.47,13.47,0,0,1,5.38-1.14A13.69,13.69,0,0,1,43.58,19v1.25h3.73a7.46,7.46,0,0,1,4.46,13.45l3.51,3.51A12.39,12.39,0,0,0,59.76,27.74ZM5,25.25a10,10,0,0,0,10,10H39.17L19.25,15.29H14.94A10,10,0,0,0,5,25.25Z"})))),ce=h("svg",{viewBox:"25 25 50 50"},h("circle",{cx:"50",cy:"50",r:"20"})),de=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),ue=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"})),he=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"20"},h("g",null,h("path",{d:"M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"}),h("path",{d:"M0,0h24v24H0V0z",fill:"none"}))),pe=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",fill:"#828282",d:"M9.61 22.116v-7.14h4.78v7.14h5.974v-9.521h3.584L12.001 1.885.052 12.594h3.584v9.52H9.61z"}))),fe=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",fill:"#828282",d:"M14.153 5.566l-4.037 5.362 3.068 4.074-1.722 1.287c-1.82-2.413-4.845-6.434-4.845-6.434L.158 18.434h23.684L14.153 5.566z"}))),ge=h("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M216.329 17.722c-12.189 0-22.68 9.076-24.447 21.128L159.86 289.871a14.968 14.968 0 01-5.427 9.736l-31.619 25.601 55.48 56.361 55.972-55.972a22.97 22.97 0 006.771-16.347V42.429c0-13.623-11.084-24.707-24.708-24.707zM175.336 421.223l-96.549-98.081L5.827 379.4c-6.974 5.378-7.819 15.585-1.823 22.036l81.848 88.066c5.793 6.233 15.612 6.387 21.597.337zM389.186 325.208l-31.619-25.601a14.968 14.968 0 01-5.427-9.736L320.117 38.849c-1.766-12.051-12.258-21.128-24.447-21.128-13.624 0-24.708 11.084-24.708 24.708v266.82a22.97 22.97 0 006.771 16.347l55.972 55.972zM433.213 323.142l-96.549 98.081 67.888 68.616c5.985 6.049 15.804 5.896 21.597-.337l81.848-88.066c5.995-6.451 5.151-16.658-1.823-22.036z"})),_e=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})),ve=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M393.784 100.106l-95.207-13.834L256 0l-42.577 86.272-95.207 13.834 68.893 67.153-16.264 94.822L256 217.312l85.155 44.769-16.263-94.822z"}),h("path",{d:"M256 315.219l-153.945-61.762v87.726l154.843 62.123 153.047-62.17v-87.679z"}),h("path",{d:"M256 423.914l-153.945-61.762v87.726L256.898 512l153.047-62.169v-87.679z"})),me=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},h("g",null,h("rect",{fill:"none",height:"24",width:"24"})),h("g",null,h("g",null),h("g",null,h("path",{d:"M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"}),h("g",null,h("path",{d:"M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"}),h("path",{d:"M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"}),h("path",{d:"M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"}))))),be=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),we=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),ke=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},h("path",{d:"M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z",fill:"none"}),h("path",{d:"M17.7 8L12 2.3 6.3 8C4.8 9.6 4 11.6 4 13.6s.8 4.1 2.3 5.7 3.6 2.4 5.7 2.4 4.1-.8 5.7-2.4 2.3-3.7 2.3-5.7-.8-4-2.3-5.6z"})),ye=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"}));let xe;const Ce=N(xe||(xe=(e=>e)`
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
    width: 100%;
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
    position: relative;
    display: block;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: auto;
  }

  a p {
    position: absolute;
    color: var(--ld-active);
    top: -4px;
    right: -45px;
    margin: 0;
    font-size: 12px;
  }

  .totals {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .ld-logo-wrapper {
    display: flex;
    width: 400px;
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
`)),Le=()=>[h("a",{class:"skiplink",href:"#main"},"Go to main content"),h("header",{class:Ce},h("div",{class:"ld-logo-wrapper"},h("a",{href:"","aria-current":"page"},h("p",null,"ALPHA"),le)),h("div",{class:"totals"},h(ee,null)))];var Ae,Se,Me,ze=0,Ee=[],Pe=t.__r,je=t.diffed,He=t.__c,De=t.unmount;function Te(e,a){t.__h&&t.__h(Se,e,ze||a),ze=0;var n=Se.__H||(Se.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ie(e){return ze=1,function(e,t,a){var n=Te(Ae++,2);return n.__c||(n.__c=Se,n.__=[a?a(t):Ve(void 0,t),function(t){var a=e(n.__[0],t);n.__[0]!==a&&(n.__[0]=a,n.__c.setState({}))}]),n.__}(Ve,e)}function qe(e,a){var n=Te(Ae++,3);!t.__s&&We(n.__H,a)&&(n.__=e,n.__H=a,Se.__H.__h.push(n))}function Ue(e){return ze=5,function(e,t){var a=Te(Ae++,7);return We(a.__H,t)?(a.__H=t,a.__h=e,a.__=e()):a.__}((function(){return{current:e}}),[])}function Re(){Ee.some((function(e){if(e.__P)try{e.__H.__h.forEach(Ne),e.__H.__h.forEach(Oe),e.__H.__h=[]}catch(a){return e.__H.__h=[],t.__e(a,e.__v),!0}})),Ee=[]}function Ne(e){e.t&&e.t()}function Oe(e){var t=e.__();"function"==typeof t&&(e.t=t)}function We(e,t){return!e||t.some((function(t,a){return t!==e[a]}))}function Ve(e,t){return"function"==typeof t?t(e):t}function $e(e,t){for(var a in e)if("__source"!==a&&!(a in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}t.__r=function(e){Pe&&Pe(e),Ae=0,(Se=e.__c).__H&&(Se.__H.__h.forEach(Ne),Se.__H.__h.forEach(Oe),Se.__H.__h=[])},t.diffed=function(e){je&&je(e);var a=e.__c;if(a){var n=a.__H;n&&n.__h.length&&(1!==Ee.push(a)&&Me===t.requestAnimationFrame||((Me=t.requestAnimationFrame)||function(e){var t,a=function(){clearTimeout(n),cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);"undefined"!=typeof window&&(t=requestAnimationFrame(a))})(Re))}},t.__c=function(e,a){a.some((function(e){try{e.__h.forEach(Ne),e.__h=e.__h.filter((function(e){return!e.__||Oe(e)}))}catch(n){a.some((function(e){e.__h&&(e.__h=[])})),a=[],t.__e(n,e.__v)}})),He&&He(e,a)},t.unmount=function(e){De&&De(e);var a=e.__c;if(a){var n=a.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){t.__e(e,a.__v)}}};!function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).isPureReactComponent=!0,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.shouldComponentUpdate=function(e,t){return $e(this.props,e)||$e(this.state,t)}}(g);var Fe=t.__b;t.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Fe&&Fe(e)};var Be=t.__e;function Ye(e){return e&&((e=function(e,t){for(var a in t)e[a]=t[a];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(Ye)),e}function Ge(){this.__u=0,this.o=null,this.__b=null}function Qe(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function Ze(){this.i=null,this.l=null}t.__e=function(e,t,a){if(e.then)for(var n,r=t;r=r.__;)if((n=r.__c)&&n.__c)return n.__c(e,t.__c);Be(e,t,a)},(Ge.prototype=new g).__c=function(e,t){var a=this;null==a.o&&(a.o=[]),a.o.push(t);var n=Qe(a.__v),r=!1,o=function(){r||(r=!0,n?n(s):s())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var s=function(){var e;if(!--a.__u)for(a.__v.__k[0]=a.state.u,a.setState({u:a.__b=null});e=a.o.pop();)e.forceUpdate()};a.__u++||a.setState({u:a.__b=a.__v.__k[0]}),e.then(o,o)},Ge.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=Ye(this.__b),this.__b=null),[h(g,null,t.u?null:e.children),t.u&&e.fallback]};var Ke=function(e,t,a){if(++a[1]===a[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(a=e.i;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;e.i=a=a[2]}};(Ze.prototype=new g).u=function(e){var t=this,a=Qe(t.__v),n=t.l.get(e);return n[0]++,function(r){var o=function(){t.props.revealOrder?(n.push(r),Ke(t,e,n)):r()};a?a(o):o()}},Ze.prototype.render=function(e){this.i=null,this.l=new Map;var t=k(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var a=t.length;a--;)this.l.set(t[a],this.i=[1,0,this.i]);return e.children},Ze.prototype.componentDidUpdate=Ze.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,a){Ke(e,a,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var Xe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;g.prototype.isReactComponent={};var Je="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,et=t.event;function tt(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}t.event=function(e){et&&(e=et(e)),e.persist=function(){};var t=!1,a=!1,n=e.stopPropagation;e.stopPropagation=function(){n.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),a=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return a},e.nativeEvent=e};var at={configurable:!0,get:function(){return this.class}},nt=t.vnode;t.vnode=function(e){e.$$typeof=Je;var t=e.type,a=e.props;if(t){if(a.class!=a.className&&(at.enumerable="className"in a,null!=a.className&&(a.class=a.className),Object.defineProperty(a,"className",at)),"function"!=typeof t){var n,r,o;for(o in a.defaultValue&&void 0!==a.value&&(a.value||0===a.value||(a.value=a.defaultValue),delete a.defaultValue),Array.isArray(a.value)&&a.multiple&&"select"===t&&(k(a.children).forEach((function(e){-1!=a.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete a.value),a)if(n=Xe.test(o))break;if(n)for(o in r=e.props={},a)r[Xe.test(o)?o.replace(/[A-Z0-9]/,"-$&").toLowerCase():o]=a[o]}!function(t){var a=e.type,n=e.props;if(n&&"string"==typeof a){var r={};for(var o in n)/^on(Ani|Tra|Tou)/.test(o)&&(n[o.toLowerCase()]=n[o],delete n[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onbeforeinput&&(n.onbeforeinput=n[r.onbeforeinput],delete n[r.onbeforeinput]),r.onchange&&("textarea"===a||"input"===a.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var s=r.oninput||"oninput";n[s]||(n[s]=n[r.onchange],delete n[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(tt(t.prototype,"componentWillMount"),tt(t.prototype,"componentWillReceiveProps"),tt(t.prototype,"componentWillUpdate"),t.m=!0)}nt&&nt(e)};let rt;function ot(e){const[t,a]=Ie(!1),n=Ue(null);return qe(()=>{t&&n.current.focus({preventScroll:!0})},[t]),h("div",{class:st},h("div",{class:"ld-expandable"},h("button",{onClick:()=>a(!t),class:"ld-expandable--toggle","aria-expanded":t},h("div",{class:"ld-expandable--icon"},t?it:lt),h("div",{class:"ld-expandable--toggle-content"},h("h2",null,e.toggle))),h("div",{ref:n,class:"ld-expandable--detail "+(t?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},e.detail)))}const st=N(rt||(rt=(e=>e)`
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
`)),lt=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"9 6 15 12 9 18"})),it=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"})),ct={url:new URL("./src/services/updatesService.js",document.baseURI).href};const dt=new class extends O{async getUpdates(e){if(e||!this.updates)try{this.updates=await fetch(new URL("../../data/updates.json",ct.url)).then(e=>e.json()),await this.updates}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:this.updates}}};let ut,ht,pt=e=>e;const ft=N(ut||(ut=pt`
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
    height: 120px;
    animation: rotate 2000ms linear infinite;
    transform-origin: center center;
    margin: auto;
  }

  circle {
    stroke-dasharray: 85, 200;
    /* 0px is requires for edge 15 and lower */
    stroke-dashoffset: 0px;
    animation: dash 2000ms ease-in-out infinite;
    stroke-linecap: round;
    stroke-width: var(--spinner-stroke-width, 4px);
    stroke-miterlimit: 10;
    fill: none;
    stroke: #828282;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      /* 0px is requires for edge 15 and lower */
      stroke-dashoffset: 0px;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  /* Animating SVG does not work on IE11. Use a fallback animation. */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    svg {
      animation-duration: 1500ms;
    }

    circle {
      stroke-linecap: square;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation-duration: 20000ms;
    }

    circle {
      animation: dash 20000ms ease-in-out infinite;
    }
  }
`)),gt=N(ht||(ht=pt`
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
`));let _t;const vt={new_entry:"new entry",announcement:"announcement",rectification:"rectification",promoting_project:"project promotion",promoting_petition:"petition"};function mt(){var e,t;const[a,n]=Ie(void 0);return qe(async()=>{const e=await dt.getUpdates();n(e)},[]),navigator.onLine||"success"===(null==a?void 0:a.status)?!a&&navigator.onLine?h("div",{class:ft},ce):"failed"===a.status&&navigator.onLine?h("div",{style:"margin-top: 14px;"},"An error occured while fetching updates."):h("div",{class:bt},h("ul",null,null==a||null===(e=a.data)||void 0===e||null===(t=e.updates)||void 0===t?void 0:t.map(e=>h("li",null,h("div",{class:"ld-ticker--bar"},h("div",{class:"ld-ticker--dot-container"},h("div",{"aria-label":vt[e.type.toLowerCase()],class:"ld-ticker--dot "+e.type.toLowerCase()})),h("div",{class:"ld-ticker--line"})),h("div",{class:"ld-ticker--content"},h("div",{class:"ld-ticker--title"},e.title),h("div",{class:"ld-ticker--content"},e.content),e.link?h("div",{class:"ld-ticker--link"},h("a",{target:"_blank",rel:"noopener noreferer",href:e.link},"Source")):"",h("div",{class:"ld-ticker--date"},e.date)))))):h("div",{class:gt},ie,h("b",null,"You are not connected to the internet"),h("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}const bt=N(_t||(_t=(e=>e)`
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

  .new_entry {
    background-color: #769de2;
  }
  .promoting_project {
    background-color: #ebb577;
  }
  .rectification {
    background-color: #d36d6b;
  }
  .promoting_petition {
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

  .ld-ticker--title {
    font-weight: 700;
    margin-bottom: 10px;
  }
  .ld-ticker--content {
    margin-bottom: 10px;
  }
  .ld-ticker--link {
    margin-bottom: 10px;
  }
  .ld-ticker--link a {
    color: var(--ld-active);
  }
  .ld-ticker--date {
    font-size: 12px;
    letter-spacing: 1px;
  }
  .ld-ticker--text {
    font-size: 14px;
  }
`));function wt(e){let t;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(a=>{a&&(a.addEventListener("updatefound",()=>{t=a.installing,t.addEventListener("statechange",()=>{"installed"===t.state&&navigator.serviceWorker.controller&&e(!0)})}),a.waiting&&navigator.serviceWorker.controller&&(e(!0),t=a.waiting))})}function kt(e){const[t,a]=[...document.querySelectorAll("link[rel='icon']")],n=document.querySelector("link[rel='manifest']"),r=document.querySelector("meta[name='theme-color']");e?(n.href="/manifest-dark.json",t.href="src/assets/favicon-32x32-dark.png",a.href="src/assets/favicon-16x16-dark.png",r.setAttribute("content","#303136")):(n.href="/manifest.json",t.href="src/assets/favicon-32x32.png",a.href="src/assets/favicon-16x16.png",r.setAttribute("content","#ffffff")),document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(t),document.getElementsByTagName("head")[0].appendChild(a),document.getElementsByTagName("head")[0].appendChild(r)}let yt,xt;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),xt=!0,yt=e});class Ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),yt=e,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))}),xt&&this.removeAttribute("hidden")}async _handlePrompt(e){e.preventDefault(),yt.prompt();const{outcome:t}=await yt.userChoice;"accepted"===t?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),yt=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",Ct);class Lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){this.addEventListener("click",this._postMessage.bind(this)),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)})}async _postMessage(e){e.preventDefault(),(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",Lt);let At;const St=N(At||(At=(e=>e)`
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
    color: var(--ld-button-text);
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
`));function Mt(){const[e,t]=Ie(!1),[a,n]=Ie(!1);return qe(async()=>{if(wt(e=>{n(e)}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});if("true"===localStorage.getItem("geolocation"))return void t(!1);"granted"!==e.state&&t(!0)}},[]),h("div",{class:St},h("button",{onClick:function(){document.getElementsByTagName("html")[0].classList.contains("dark")?(document.getElementsByTagName("html")[0].classList.remove("dark"),localStorage.setItem("darkmode","false"),kt(!1)):(document.getElementsByTagName("html")[0].classList.add("dark"),localStorage.setItem("darkmode","true"),kt(!0))},class:"ld-button"},"Toggle darkmode"),e?[" ",h("button",{onClick:function(){navigator.permissions&&navigator.geolocation.getCurrentPosition(()=>{t(!1)})},class:"ld-button"},"Allow geolocation")," "]:"",h("pwa-install-button",null,h("button",{class:"ld-button"},"Install app")),a?h("pwa-update-available",null,h("button",{class:"ld-button"},"Update app")):"")}const zt={info:te,settings:ae,updates:ne,contribute:re};class Et extends g{constructor(){super(),this.state={updateAvailable:!1,index:0},this.tabRefs={},this.__onFocusMove=this.__onFocusMove.bind(this),this.__onTabClick=this.__onTabClick.bind(this)}componentDidMount(){H("(min-width: 960px)",e=>{this.setState({isMobile:!e})}),V.addEventListener("close",e=>{e.detail.menuDialogClosed&&this.tabRefs["tab"+this.state.index].focus()}),wt(e=>{this.setState({updateAvailable:e})})}updateIndex(e,t){"settings"===t&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.setState({index:e}),this.tabRefs["tab"+e].focus(),this.state.isMobile||this.commit(t)}__onTabClick(e,t){this.updateIndex(e,t),this.commit(t)}commit(e){this.props.switchContent(e.toLowerCase())}__onFocusMove(e){const t=this.state.index;switch(e.keyCode){case 37:0!==t&&this.updateIndex(t-1,this.tabRefs["tab"+(t-1)].getAttribute("data-label").toLowerCase());break;case 39:t!==this.props.children.length-1&&this.updateIndex(t+1,this.tabRefs["tab"+(t+1)].getAttribute("data-label").toLowerCase())}}render(e,{index:t}){return h("ul",{class:"ld-menu--tabs",role:"tablist"},this.props.children.map((e,a)=>h("li",{role:"presentation",key:a},h("button",{role:"tab",ref:e=>this.tabRefs["tab"+a]=e,tabindex:t===a?"0":"-1","aria-selected":t===a?"true":"false",class:t===a?"ld-menu--active":"","data-label":e.props.id,onKeyUp:this.__onFocusMove,onClick:()=>this.__onTabClick(a,e.props.id)},"settings"===e.props.id&&this.state.updateAvailable?[" ",h("div",{class:"ld-menu--notification"})," "]:"",zt[e.props.id],h("p",{class:t===a?"ld-menu--active":""},e.props.id.toUpperCase())))))}}let Pt;const jt=N(Pt||(Pt=(e=>e)`
  & {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    border-collapse: collapse;
  }

  th {
    border-top: transparent;
    padding: 15px;
  }
  th:nth-child(1),
  th:nth-child(2) {
    border-left: transparent;
    border-right: 1px solid var(--ld-text);
    border-bottom: 1px solid var(--ld-text);
  }

  th:nth-child(3) {
    border-bottom: 1px solid var(--ld-text);
  }

  td:nth-child(1) {
    border-left: transparent;
    border-right: 1px solid var(--ld-text);
  }

  td:nth-child(2) {
    border-right: 1px solid var(--ld-text);
  }

  th,
  td:nth-child(3) {
    border-right: transparent;
  }
  td:nth-child(3),
  td:nth-child(2),
  td:nth-child(1) {
    border-bottom: 1px solid var(--ld-text);
  }
  tr {
    font-weight: 600;
    font-size: 14px;
    padding: 15px;
    border-top: transparent;
  }

  tr:last-of-type {
    td {
      border-bottom: transparent;
    }
  }

  .note {
    font-weight: 100;
    font-size: 12px;
  }

  td {
    text-align: center;
    padding: 15px;
    svg {
      stroke: var(--ld-text);
    }
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .default {
    background: #cccccc;
  }
  .blue {
    background: #7aaeff;
  }
  .red {
    background: #eb5757;
  }
  .yellow {
    background: #f2994a;
  }
  .green {
    background: #6fcf97;
  }
`)),Ht=e=>{switch(e){case"info":return{title:"info",template:[h("h1",null,"Lockdown"),h("p",{class:"ld-alpha"},"Project lockdown is currently in alpha. Not all data may be available yet."),h("p",null,h("b",null,"Project Lockdown")," aims to map the different lockdowns around the world, offering the public a number of relevant metrics\n            in order to provide an overview of the restrictions applied worldwide. We hope this will help evaluate the seriousness of the\n            COVID-19 pandemic and help journalists and Human Rights defenders in their reporting and overseeing tasks."),h(ot,{toggle:"About",detail:h("p",null,"While lockdowns generally help countries to flatten the curve, and prevent COVID-19 from spreading, countries with a\n                dictatorial nature may see this as an opportunity to increase their grasp over a country, and even potentially lead to\n                martial law type scenarios. Governments may unnecesarily prolong lockdowns or not stick to their announced end dates for\n                political gain. ",h("b",null,"Project Lockdown")," aims to visualize these situations.")}),h(ot,{toggle:"Legend",detail:[h("p",null,"The map shows two parameters for territories:"),h("ol",null,h("li",null,"If the country is under any type of lockdown"),h("li",null,"If there are covid cases in the country")),h("table",{class:jt},h("tr",null,h("th",{scope:"col"}),h("th",{scope:"col"},"Lockdown"),h("th",{scope:"col"},"COVID-19")),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"blue",class:"blue circle"})),h("td",null,h("div",{"aria-label":"no"},oe)),h("td",null,h("div",{"aria-label":"no"},oe))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"green",class:"green circle"})),h("td",null,h("div",{"aria-label":"no"},oe)),h("td",null,h("div",{"aria-label":"yes"},se))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"yellow",class:"yellow circle"})),h("td",null,h("div",{"aria-label":"yes"},se)),h("td",null,h("div",{"aria-label":"no"},oe))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"red",class:"red circle"})),h("td",null,h("div",{"aria-label":"yes"},se)),h("td",null,h("div",{"aria-label":"yes"},se))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"gray",class:"default circle"})),h("td",null,"No Data",h("p",{class:"note"},"(please contribute)")),h("td",null,"No Data",h("p",{class:"note"},"(please contribute)"))))]}),h(ot,{toggle:"Sources",detail:h("p",null,h("b",null,"Project Lockdown")," uses a variety of sources to compile all the information showcased. We make sure to only consider sources that are reliable and verifiable.\n                You can check all the ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"sources")," employed here:",h("ul",{class:"ld-sources"},h("li",null,h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://api.coronatracker.com/"},"Coronatracker API"),h("br",null),"Recognized by ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.who.int/bulletin/online_first/COVID-19/en/"},"WHO")),h("li",null,"For reference data see the ",h("b",null,"Data Sources")," Tab."),h("li",null,"For country data see the ",h("b",null,"Find the Countries")," Tab by it's ISO Alpha 3 code.\n                    (Quick find through Global Tab)")),"If you find any errors, please help us and report it ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Code-for-All/lockdown/issues"},"by creating an issue here"),".")}),h(ot,{toggle:"Credits",detail:h("p",null,h("b",null,"Project Lockdown")," is a Civic Tech initiative from a number of organizations and individuals. You can find the",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"list of project members")," here\n                under the ",h("b",null,"Credits")," tab.")}),h(ot,{toggle:"Data & Privacy",detail:[h("p",null,"We do not collect any information from our visitors."),h("p",null,"All information from any project member shown anywhere in the application is under their prior consent.")]})]};case"settings":return{title:"settings",template:[" ",h(Mt,null)," "]};case"contribute":return{title:"contribute",template:[h("p",null,h("b",null,"Project Lockdown")," is made possible by the contribution of many individuals who are giving their time to make possible that everyone has access to the right information."),h("p",null,"Do you have any information you want to contribute? Please follow this link:"),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Submit data"),h("p",null,"Additionally, you can become part of the project by joining one of the following teams:",h("ul",null,h("li",null,"Editors"),h("li",null,"Devs"),h("li",null,"UI/UX"))),h("p",null,"Contact us via Telegram at:",h("br",null),h("a",{class:"ld-link"},"@ProjectLockdown"))]};case"updates":return{title:"updates",template:[" ",h(mt,null)," "]};default:return{title:"",template:void 0}}};class Dt extends g{constructor(e){super(e),this.state={activeItem:"info"},this.switchContent=this.switchContent.bind(this)}componentDidMount(){let e=0;H("(min-width: 960px)",t=>{this.setState({isMobile:!t}),t&&e>0&&(e++,this.props.close())})}switchContent(e){if("settings"===e&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.state.isMobile&&this.props.opened&&e===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.props.changeRoute(Ht(e)),this.prevVal=e,this.setState({activeItem:e})}render(e,{activeItem:t,updateAvailable:a}){return h("main",{id:"main",class:"ld-menu"},h("div",{class:"ld-menu-nav"},h("nav",null,h(Et,{switchContent:this.switchContent},h("button",{id:"info"},"info"),h("button",{id:"settings"},"settings"),h("button",{id:"updates"},"updates"),h("button",{id:"contribute"},"contribute")))),h("div",{class:"ld-menu--content"},h("div",{class:"mb-only"},h("div",{class:"ld-menu--header"},h("h1",null,t))),Ht(t).template))}}class Tt extends g{async componentWillMount(){const e=await this.props.component(),t=e.default||e;this.setState({Component:t})}render({props:e},{Component:t}){return h(t,e)}}var It="object"==typeof global&&global&&global.Object===Object&&global,qt="object"==typeof self&&self&&self.Object===Object&&self,Ut=It||qt||Function("return this")(),Rt=Ut.Symbol,Nt=Object.prototype,Ot=Nt.hasOwnProperty,Wt=Nt.toString,Vt=Rt?Rt.toStringTag:void 0;var $t=Object.prototype.toString;var Ft=Rt?Rt.toStringTag:void 0;function Bt(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ft&&Ft in Object(e)?function(e){var t=Ot.call(e,Vt),a=e[Vt];try{e[Vt]=void 0;var n=!0}catch(e){}var r=Wt.call(e);return n&&(t?e[Vt]=a:delete e[Vt]),r}(e):function(e){return $t.call(e)}(e)}function Yt(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var Gt=/^\s+|\s+$/g,Qt=/^[-+]0x[0-9a-f]+$/i,Zt=/^0b[01]+$/i,Kt=/^0o[0-7]+$/i,Xt=parseInt;function Jt(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==Bt(e)}(e))return NaN;if(Yt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Yt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Gt,"");var a=Zt.test(e);return a||Kt.test(e)?Xt(e.slice(2),a?2:8):Qt.test(e)?NaN:+e}var ea=function(){return Ut.Date.now()},ta=Math.max,aa=Math.min;let na;const ra=function(e,t,a){var n,r,o,s,l,i,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var a=n,o=r;return n=r=void 0,c=t,s=e.apply(o,a)}function f(e){return c=e,l=setTimeout(_,t),d?p(e):s}function g(e){var a=e-i;return void 0===i||a>=t||a<0||u&&e-c>=o}function _(){var e=ea();if(g(e))return v(e);l=setTimeout(_,function(e){var a=t-(e-i);return u?aa(a,o-(e-c)):a}(e))}function v(e){return l=void 0,h&&n?p(e):(n=r=void 0,s)}function m(){var e=ea(),a=g(e);if(n=arguments,r=this,i=e,a){if(void 0===l)return f(i);if(u)return clearTimeout(l),l=setTimeout(_,t),p(i)}return void 0===l&&(l=setTimeout(_,t)),s}return t=Jt(t)||0,Yt(a)&&(d=!!a.leading,o=(u="maxWait"in a)?ta(Jt(a.maxWait)||0,t):o,h="trailing"in a?!!a.trailing:h),m.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=i=r=l=void 0},m.flush=function(){return void 0===l?s:v(ea())},m}(()=>{let e={menuDialogClosed:!1,countryDialogClosed:!1};const t=new URLSearchParams(location.search);t.has("country")||t.has("iso2")?e.countryDialogClosed=!0:e.menuDialogClosed=!0,V.close(e)},10,{leading:!0,trailing:!1}),oa=N(na||(na=(e=>e)`
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
`));("requestIdleCallback"in window?window.requestIdleCallback:e=>setTimeout(e,1e3))(()=>{import("./7aa05de2.js"),import("./526a0b7a.js")}),console.log("🌐 Project Lockdown, version: 0.0.0"),window.addEventListener("appinstalled",()=>{window.location.reload()}),H("(prefers-color-scheme: dark)",e=>{const t=localStorage.getItem("darkmode");null!==t?"true"===t&&(document.documentElement.classList.add("dark"),kt(!0)):e?(document.documentElement.classList.add("dark"),kt(!0)):(document.documentElement.classList.remove("dark"),kt(!1))}),function(e,a,n){var r,o,c;t.__&&t.__(e,a),o=(r=n===s)?null:n&&n.__k||a.__k,e=h(f,null,[e]),c=[],L(a,(r?a:n||a).__k=e,o||l,l,void 0!==a.ownerSVGElement,n&&!r?[n]:o?null:i.slice.call(a.childNodes),c,n||l,r),A(c,e)}([" ",h(class extends g{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""}},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__showDialog=this.__showDialog.bind(this),this.__showDialogRoute=this.__showDialogRoute.bind(this)}async componentDidMount(){this.__onPathChanged(),H("(min-width: 960px)",e=>{this.setState({isMobile:!e})})}componentWillMount(){W.addEventListener("path-changed",this.__onPathChanged)}componentWillUnmount(){W.removeEventListener("path-changed",this.__onPathChanged)}render(){return[h(Le,null),h("div",{class:oa},h(ee,null)),h(Dt,{opened:this.state.dialog.opened,changeRoute:this.__showDialogRoute,close:this.__closeDialog}),h(Q,null),this.state.dialog.opened?h(Tt,{component:()=>import("./7aa05de2.js"),props:{...this.state.dialog,onClose:this.__closeDialog}}):""]}__showDialogRoute({template:e,title:t}){const a=W.url.searchParams.get("country");a?W.setPath(`${t}?country=${a}`):W.setPath(t),this.state.isMobile&&(W.setSearchParam("country",null),this.__showDialog({template:e,title:t}))}__onPathChanged(){const e=W.url.searchParams.get("country"),t=W.url.searchParams.get("iso2");e&&t&&this.setState({dialog:{opened:!0,template:[" ",h(Tt,{component:()=>import("./526a0b7a.js"),props:{country:e,iso2:t}})," "],title:e}})}__showDialog({template:e,title:t}){this.setState({dialog:{opened:!0,template:e,title:t}})}__closeCountryInfo(){W.setSearchParam("country",void 0),W.setSearchParam("iso2",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),ra(),this.__closeCountryInfo()}},null)," "],document.getElementById("app"));export{O as E,oe as a,gt as b,N as c,pe as d,fe as e,ge as f,ve as g,h,me as i,we as j,ke as k,ft as l,g as m,ye as n,ie as o,ce as p,he as q,W as r,be as s,ue as t,de as u,_e as w};
