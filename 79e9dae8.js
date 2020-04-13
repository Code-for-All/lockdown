var t,a,n,r,o,l,s={},i=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function d(e,t){for(var a in t)e[a]=t[a];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,a){var n,r=arguments,o={};for(n in t)"key"!==n&&"ref"!==n&&(o[n]=t[n]);if(arguments.length>3)for(a=[a],n=3;n<arguments.length;n++)a.push(r[n]);if(null!=a&&(o.children=a),"function"==typeof e&&null!=e.defaultProps)for(n in e.defaultProps)void 0===o[n]&&(o[n]=e.defaultProps[n]);return p(e,o,t&&t.key,t&&t.ref,null)}function p(e,a,n,r,o){var l={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(l.__v=l),t.vnode&&t.vnode(l),l}function f(e){return e.children}function g(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var a;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e)return a.__e;return"function"==typeof e.type?v(e):null}function _(e){var t,a;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e){e.__e=e.__c.base=a.__e;break}return _(e)}}function m(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(b)}function b(){for(var e;n=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,a,n,r,o,l,s;e.__d&&(l=(o=(t=e).__v).__e,(s=t.__P)&&(a=[],(n=d({},o)).__v=n,r=A(s,o,n,t.__n,void 0!==s.ownerSVGElement,null,a,null==l?v(o):l),L(a,o),r!=l&&_(o)))}))}function w(e,t,a,n,r,o,l,c,d){var h,p,f,g,_,m,b,w=a&&a.__k||i,x=w.length;if(c==s&&(c=null!=o?o[0]:x?v(a,0):null),h=0,t.__k=k(t.__k,(function(a){if(null!=a){if(a.__=t,a.__b=t.__b+1,null===(f=w[h])||f&&a.key==f.key&&a.type===f.type)w[h]=void 0;else for(p=0;p<x;p++){if((f=w[p])&&a.key==f.key&&a.type===f.type){w[p]=void 0;break}f=null}if(g=A(e,a,f=f||s,n,r,o,l,c,d),(p=a.ref)&&f.ref!=p&&(b||(b=[]),f.ref&&b.push(f.ref,null,a),b.push(p,a.__c||g,a)),null!=g){var i;if(null==m&&(m=g),void 0!==a.__d)i=a.__d,a.__d=void 0;else if(o==f||g!=c||null==g.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(g),i=null;else{for(_=c,p=0;(_=_.nextSibling)&&p<x;p+=2)if(_==g)break e;e.insertBefore(g,c),i=c}"option"==t.type&&(e.value="")}c=void 0!==i?i:g.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&f.__e==c&&c.parentNode!=e&&(c=v(f))}return h++,a})),t.__e=m,null!=o&&"function"!=typeof t.type)for(h=o.length;h--;)null!=o[h]&&u(o[h]);for(h=x;h--;)null!=w[h]&&M(w[h],w[h]);if(b)for(h=0;h<b.length;h++)z(b[h],b[++h],b[++h])}function k(e,t,a){if(null==a&&(a=[]),null==e||"boolean"==typeof e)t&&a.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)k(e[n],t,a);else a.push(t?t("string"==typeof e||"number"==typeof e?p(null,e,null,null,e):null!=e.__e||null!=e.__c?p(e.type,e.props,e.key,null,e.__v):e):e);return a}function x(e,t,a){"-"===t[0]?e.setProperty(t,a):e[t]="number"==typeof a&&!1===c.test(t)?a+"px":null==a?"":a}function y(e,t,a,n,r){var o,l,s,i,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(o=e.style,"string"==typeof a)o.cssText=a;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(i in n)a&&i in a||x(o,i,"");if(a)for(c in a)n&&a[c]===n[c]||x(o,c,a[c])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),a?(n||e.addEventListener(t,C,l),(e.l||(e.l={}))[t]=a):e.removeEventListener(t,C,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==a?"":a:"function"!=typeof a&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==a||!1===a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),a):null==a||!1===a&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,a))}function C(e){this.l[e.type](t.event?t.event(e):e)}function A(e,a,n,r,o,l,s,i,c){var u,h,p,v,_,m,b,k,x,y,C=a.type;if(void 0!==a.constructor)return null;(u=t.__b)&&u(a);try{e:if("function"==typeof C){if(k=a.props,x=(u=C.contextType)&&r[u.__c],y=u?x?x.props.value:u.__:r,n.__c?b=(h=a.__c=n.__c).__=h.__E:("prototype"in C&&C.prototype.render?a.__c=h=new C(k,y):(a.__c=h=new g(k,y),h.constructor=C,h.render=E),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=y,h.__n=r,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=C.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,C.getDerivedStateFromProps(k,h.__s))),v=h.props,_=h.state,p)null==C.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,y),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,y)||a.__v===n.__v&&!h.__){for(h.props=k,h.state=h.__s,a.__v!==n.__v&&(h.__d=!1),h.__v=a,a.__e=n.__e,a.__k=n.__k,h.__h.length&&s.push(h),u=0;u<a.__k.length;u++)a.__k[u]&&(a.__k[u].__=a);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,y),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(v,_,m)}))}h.context=y,h.props=k,h.state=h.__s,(u=t.__r)&&u(a),h.__d=!1,h.__v=a,h.__P=e,u=h.render(h.props,h.state,h.context),a.__k=null!=u&&u.type==f&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(r=d(d({},r),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(m=h.getSnapshotBeforeUpdate(v,_)),w(e,a,n,r,o,l,s,i,c),h.base=a.__e,h.__h.length&&s.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==l&&a.__v===n.__v?(a.__k=n.__k,a.__e=n.__e):a.__e=S(n.__e,a,n,r,o,l,s,c);(u=t.diffed)&&u(a)}catch(e){a.__v=null,t.__e(e,a,n)}return a.__e}function L(e,a){t.__c&&t.__c(a,e),e.some((function(a){try{e=a.__h,a.__h=[],e.some((function(e){e.call(a)}))}catch(e){t.__e(e,a.__v)}}))}function S(e,t,a,n,r,o,l,c){var d,u,h,p,f,g=a.props,v=t.props;if(r="svg"===t.type||r,null!=o)for(d=0;d<o.length;d++)if(null!=(u=o[d])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,o[d]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),o=null,c=!1}if(null===t.type)g!==v&&e.data!=v&&(e.data=v);else{if(null!=o&&(o=i.slice.call(e.childNodes)),h=(g=a.props||s).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(g===s)for(g={},f=0;f<e.attributes.length;f++)g[e.attributes[f].name]=e.attributes[f].value;(p||h)&&(p&&h&&p.__html==h.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,a,n,r){var o;for(o in a)"children"===o||"key"===o||o in t||y(e,o,null,a[o],n);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||a[o]===t[o]||y(e,o,t[o],a[o],n)})(e,v,g,r,c),t.__k=t.props.children,p||w(e,t,a,n,"foreignObject"!==t.type&&r,o,l,s,c),c||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function z(e,a,n){try{"function"==typeof e?e(a):e.current=a}catch(e){t.__e(e,n)}}function M(e,a,n){var r,o,l;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||z(r,null,a)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,a)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&M(r[l],a,n);null!=o&&u(o)}function E(e,t,a){return this.constructor(e,a)}t={__e:function(e,t){for(var a,n;t=t.__;)if((a=t.__c)&&!a.__)try{if(a.constructor&&null!=a.constructor.getDerivedStateFromError&&(n=!0,a.setState(a.constructor.getDerivedStateFromError(e))),null!=a.componentDidCatch&&(n=!0,a.componentDidCatch(e)),n)return m(a.__E=a)}catch(t){e=t}throw e}},g.prototype.setState=function(e,t){var a;a=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(a,this.props)),e&&d(a,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},g.prototype.render=f,a=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=s;var P=function e(t,a,n,r){var o;a[0]=0;for(var l=1;l<a.length;l++){var s=a[l++],i=a[l]?(a[0]|=s?1:2,n[a[l++]]):a[++l];3===s?r[0]=i:4===s?r[1]=Object.assign(r[1]||{},i):5===s?(r[1]=r[1]||{})[a[++l]]=i:6===s?r[1][a[++l]]+=i+"":s?(o=t.apply(i,e(t,i,n,["",null])),r.push(o),i[0]?a[0]|=2:(a[l-2]=0,a[l]=o)):r.push(i)}return r},j=new Map;(function(e){var t=j.get(this);return t||(t=new Map,j.set(this,t)),(t=P(this,t.get(e)||(t.set(e,t=function(e){for(var t,a,n=1,r="",o="",l=[0],s=function(e){1===n&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,r):3===n&&(e||r)?(l.push(3,e,r),n=2):2===n&&"..."===r&&e?l.push(4,e,0):2===n&&r&&!e?l.push(5,0,!0,r):n>=5&&((r||!e&&5===n)&&(l.push(n,0,r,a),n=6),e&&(l.push(n,e,0,a),n=6)),r=""},i=0;i<e.length;i++){i&&(1===n&&s(),s(i));for(var c=0;c<e[i].length;c++)t=e[i][c],1===n?"<"===t?(s(),l=[l],n=3):r+=t:4===n?"--"===r&&">"===t?(n=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(s(),n=1):n&&("="===t?(n=5,a=r,r=""):"/"===t&&(n<5||">"===e[i][c+1])?(s(),3===n&&(l=l[0]),n=l,(l=l[0]).push(2,0,n),n=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),n=2):r+=t),3===n&&"!--"===r&&(n=4,l=l[0])}return s(),l}(e)),t),arguments,[])).length>1?t:t[0]}).bind(h);const H=(e,t)=>{let a=window.matchMedia(e);a.addListener(e=>t(e.matches)),t(a.matches)};var T=t=>{var a=/^\0+/g,n=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,l=/([,: ])(transform)/g,s=/,+\s*(?![^(]*[)])/g,i=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,d=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,h=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,v=/:(read-only)/g,_=/\s+(?=[{\];=:>])/g,m=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,k=/([^\(])(:+) */g,x=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,A=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,M="-webkit-",E="-moz-",P="-ms-",j=59,H=125,T=123,D=40,I=41,U=10,q=13,N=32,O=45,R=42,V=44,W=58,B=47,$=1,F=1,G=0,Y=1,Z=1,J=1,K=0,Q=0,X=0,ee=[],te=[],ae=0,ne=null,re=0,oe=1,le="",se="",ie="";function ce(e,t,r,o,l){for(var s,i,d=0,u=0,h=0,p=0,_=0,m=0,b=0,w=0,x=0,C=0,A=0,L=0,S=0,z=0,E=0,P=0,K=0,te=0,ne=0,ue=r.length,_e=ue-1,me="",be="",we="",ke="",xe="",ye="";E<ue;){if(b=r.charCodeAt(E),E===_e&&u+p+h+d!==0&&(0!==u&&(b=u===B?U:B),p=h=d=0,ue++,_e++),u+p+h+d===0){if(E===_e&&(P>0&&(be=be.replace(n,"")),be.trim().length>0)){switch(b){case N:case 9:case j:case q:case U:break;default:be+=r.charAt(E)}b=j}if(1===K)switch(b){case T:case H:case j:case 34:case 39:case D:case I:case V:K=0;case 9:case q:case U:case N:break;default:for(K=0,ne=E,_=b,E--,b=j;ne<ue;)switch(r.charCodeAt(ne++)){case U:case q:case j:++E,b=_,ne=ue;break;case W:P>0&&(++E,b=_);case T:ne=ue}}switch(b){case T:for(_=(be=be.trim()).charCodeAt(0),A=1,ne=++E;E<ue;){switch(b=r.charCodeAt(E)){case T:A++;break;case H:A--;break;case B:switch(m=r.charCodeAt(E+1)){case R:case B:E=ve(m,E,_e,r)}break;case 91:b++;case D:b++;case 34:case 39:for(;E++<_e&&r.charCodeAt(E)!==b;);}if(0===A)break;E++}switch(we=r.substring(ne,E),0===_&&(_=(be=be.replace(a,"").trim()).charCodeAt(0)),_){case 64:switch(P>0&&(be=be.replace(n,"")),m=be.charCodeAt(1)){case 100:case 109:case 115:case O:s=t;break;default:s=ee}if(ne=(we=ce(t,s,we,m,l+1)).length,X>0&&0===ne&&(ne=be.length),ae>0&&(i=ge(3,we,s=de(ee,be,te),t,F,$,ne,m,l,o),be=s.join(""),void 0!==i&&0===(ne=(we=i.trim()).length)&&(m=0,we="")),ne>0)switch(m){case 115:be=be.replace(y,fe);case 100:case 109:case O:we=be+"{"+we+"}";break;case 107:we=(be=be.replace(f,"$1 $2"+(oe>0?le:"")))+"{"+we+"}",we=1===Z||2===Z&&pe("@"+we,3)?"@"+M+we+"@"+we:"@"+we;break;default:we=be+we,112===o&&(ke+=we,we="")}else we="";break;default:we=ce(t,de(t,be,te),we,o,l+1)}xe+=we,L=0,K=0,z=0,P=0,te=0,S=0,be="",we="",b=r.charCodeAt(++E);break;case H:case j:if((ne=(be=(P>0?be.replace(n,""):be).trim()).length)>1)switch(0===z&&((_=be.charCodeAt(0))===O||_>96&&_<123)&&(ne=(be=be.replace(" ",":")).length),ae>0&&void 0!==(i=ge(1,be,t,e,F,$,ke.length,o,l,o))&&0===(ne=(be=i.trim()).length)&&(be="\0\0"),_=be.charCodeAt(0),m=be.charCodeAt(1),_){case 0:break;case 64:if(105===m||99===m){ye+=be+r.charAt(E);break}default:if(be.charCodeAt(ne-1)===W)break;ke+=he(be,_,m,be.charCodeAt(2))}L=0,K=0,z=0,P=0,te=0,be="",b=r.charCodeAt(++E)}}switch(b){case q:case U:if(u+p+h+d+Q===0)switch(C){case I:case 39:case 34:case 64:case 126:case 62:case R:case 43:case B:case O:case W:case V:case j:case T:case H:break;default:z>0&&(K=1)}u===B?u=0:Y+L===0&&107!==o&&be.length>0&&(P=1,be+="\0"),ae*re>0&&ge(0,be,t,e,F,$,ke.length,o,l,o),$=1,F++;break;case j:case H:if(u+p+h+d===0){$++;break}default:switch($++,me=r.charAt(E),b){case 9:case N:if(p+d+u===0)switch(w){case V:case W:case 9:case N:me="";break;default:b!==N&&(me=" ")}break;case 0:me="\\0";break;case 12:me="\\f";break;case 11:me="\\v";break;case 38:p+u+d===0&&Y>0&&(te=1,P=1,me="\f"+me);break;case 108:if(p+u+d+G===0&&z>0)switch(E-z){case 2:112===w&&r.charCodeAt(E-3)===W&&(G=w);case 8:111===x&&(G=x)}break;case W:p+u+d===0&&(z=E);break;case V:u+h+p+d===0&&(P=1,me+="\r");break;case 34:case 39:0===u&&(p=p===b?0:0===p?b:p);break;case 91:p+u+h===0&&d++;break;case 93:p+u+h===0&&d--;break;case I:p+u+d===0&&h--;break;case D:if(p+u+d===0){if(0===L)switch(2*w+3*x){case 533:break;default:A=0,L=1}h++}break;case 64:u+h+p+d+z+S===0&&(S=1);break;case R:case B:if(p+d+h>0)break;switch(u){case 0:switch(2*b+3*r.charCodeAt(E+1)){case 235:u=B;break;case 220:ne=E,u=R}break;case R:b===B&&w===R&&ne+2!==E&&(33===r.charCodeAt(ne+2)&&(ke+=r.substring(ne,E+1)),me="",u=0)}}if(0===u){if(Y+p+d+S===0&&107!==o&&b!==j)switch(b){case V:case 126:case 62:case 43:case I:case D:if(0===L){switch(w){case 9:case N:case U:case q:me+="\0";break;default:me="\0"+me+(b===V?"":"\0")}P=1}else switch(b){case D:z+7===E&&108===w&&(z=0),L=++A;break;case I:0==(L=--A)&&(P=1,me+="\0")}break;case 9:case N:switch(w){case 0:case T:case H:case j:case V:case 12:case 9:case N:case U:case q:break;default:0===L&&(P=1,me+="\0")}}be+=me,b!==N&&9!==b&&(C=b)}}x=w,w=b,E++}if(ne=ke.length,X>0&&0===ne&&0===xe.length&&0===t[0].length==0&&(109!==o||1===t.length&&(Y>0?se:ie)===t[0])&&(ne=t.join(",").length+2),ne>0){if(s=0===Y&&107!==o?function(e){for(var t,a,r=0,o=e.length,l=Array(o);r<o;++r){for(var s=e[r].split(c),i="",d=0,u=0,h=0,p=0,f=s.length;d<f;++d)if(!(0===(u=(a=s[d]).length)&&f>1)){if(h=i.charCodeAt(i.length-1),p=a.charCodeAt(0),t="",0!==d)switch(h){case R:case 126:case 62:case 43:case N:case D:break;default:t=" "}switch(p){case 38:a=t+se;case 126:case 62:case 43:case N:case I:case D:break;case 91:a=t+a+se;break;case W:switch(2*a.charCodeAt(1)+3*a.charCodeAt(2)){case 530:if(J>0){a=t+a.substring(8,u-1);break}default:(d<1||s[d-1].length<1)&&(a=t+se+a)}break;case V:t="";default:a=u>1&&a.indexOf(":")>0?t+a.replace(k,"$1"+se+"$2"):t+a+se}i+=a}l[r]=i.replace(n,"").trim()}return l}(t):t,ae>0&&void 0!==(i=ge(2,ke,s,e,F,$,ne,o,l,o))&&0===(ke=i).length)return ye+ke+xe;if(ke=s.join(",")+"{"+ke+"}",Z*G!=0){switch(2!==Z||pe(ke,2)||(G=0),G){case 111:ke=ke.replace(v,":-moz-$1")+ke;break;case 112:ke=ke.replace(g,"::"+M+"input-$1")+ke.replace(g,"::-moz-$1")+ke.replace(g,":-ms-input-$1")+ke}G=0}}return ye+ke+xe}function de(e,t,a){var n=t.trim().split(d),r=n,o=n.length,l=e.length;switch(l){case 0:case 1:for(var s=0,i=0===l?"":e[0]+" ";s<o;++s)r[s]=ue(i,r[s],a,l).trim();break;default:s=0;var c=0;for(r=[];s<o;++s)for(var u=0;u<l;++u)r[c++]=ue(e[u]+" ",n[s],a,l).trim()}return r}function ue(e,t,a,n){var r=t,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(Y+n){case 0:case 1:if(0===e.trim().length)break;default:return r.replace(u,"$1"+e.trim())}break;case W:switch(r.charCodeAt(1)){case 103:if(J>0&&Y>0)return r.replace(h,"$1").replace(u,"$1"+ie);break;default:return e.trim()+r.replace(u,"$1"+e.trim())}default:if(a*Y>0&&r.indexOf("\f")>0)return r.replace(u,(e.charCodeAt(0)===W?"":"$1")+e.trim())}return e+r}function he(e,t,a,n){var c,d=0,u=e+";",h=2*t+3*a+4*n;if(944===h)return function(e){var t=e.length,a=e.indexOf(":",9)+1,n=e.substring(0,a).trim(),r=e.substring(a,t-1).trim();switch(e.charCodeAt(9)*oe){case 0:break;case O:if(110!==e.charCodeAt(10))break;default:var o=r.split((r="",s)),l=0;for(a=0,t=o.length;l<t;a=0,++l){for(var c=o[l],d=c.split(i);c=d[a];){var u=c.charCodeAt(0);if(1===oe&&(u>64&&u<90||u>96&&u<123||95===u||u===O&&c.charCodeAt(1)!==O))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=le}}d[a++]=c}r+=(0===l?"":",")+d.join(" ")}}return r=n+r+";",1===Z||2===Z&&pe(r,1)?M+r+r:r}(u);if(0===Z||2===Z&&!pe(u,1))return u;switch(h){case 1015:return 97===u.charCodeAt(10)?M+u+u:u;case 951:return 116===u.charCodeAt(3)?M+u+u:u;case 963:return 110===u.charCodeAt(5)?M+u+u:u;case 1009:if(100!==u.charCodeAt(4))break;case 969:case 942:return M+u+u;case 978:return M+u+E+u+u;case 1019:case 983:return M+u+E+u+P+u+u;case 883:return u.charCodeAt(8)===O?M+u+u:u.indexOf("image-set(",11)>0?u.replace(z,"$1"+M+"$2")+u:u;case 932:if(u.charCodeAt(4)===O)switch(u.charCodeAt(5)){case 103:return M+"box-"+u.replace("-grow","")+M+u+P+u.replace("grow","positive")+u;case 115:return M+u+P+u.replace("shrink","negative")+u;case 98:return M+u+P+u.replace("basis","preferred-size")+u}return M+u+P+u+u;case 964:return M+u+P+"flex-"+u+u;case 1023:if(99!==u.charCodeAt(8))break;return c=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),M+"box-pack"+c+M+u+P+"flex-pack"+c+u;case 1005:return o.test(u)?u.replace(r,":"+M)+u.replace(r,":"+E)+u:u;case 1e3:switch(d=(c=u.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(d)){case 226:c=u.replace(x,"tb");break;case 232:c=u.replace(x,"tb-rl");break;case 220:c=u.replace(x,"lr");break;default:return u}return M+u+P+c+u;case 1017:if(-1===u.indexOf("sticky",9))return u;case 975:switch(d=(u=e).length-10,h=(c=(33===u.charCodeAt(d)?u.substring(0,d):u).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:u=u.replace(c,M+c)+";"+u;break;case 207:case 102:u=u.replace(c,M+(h>102?"inline-":"")+"box")+";"+u.replace(c,M+c)+";"+u.replace(c,P+c+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===O)switch(u.charCodeAt(6)){case 105:return c=u.replace("-items",""),M+u+M+"box-"+c+P+"flex-"+c+u;case 115:return M+u+P+"flex-item-"+u.replace(A,"")+u;default:return M+u+P+"flex-line-pack"+u.replace("align-content","").replace(A,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==O||122===u.charCodeAt(4))break;case 931:case 953:if(!0===S.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?he(e.replace("stretch","fill-available"),t,a,n).replace(":fill-available",":stretch"):u.replace(c,M+c)+u.replace(c,E+c.replace("fill-",""))+u;break;case 962:if(u=M+u+(102===u.charCodeAt(5)?P+u:"")+u,a+n===211&&105===u.charCodeAt(13)&&u.indexOf("transform",10)>0)return u.substring(0,u.indexOf(";",27)+1).replace(l,"$1"+M+"$2")+u}return u}function pe(e,t){var a=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?a:10),r=e.substring(a+1,e.length-1);return ne(2!==t?n:n.replace(L,"$1"),r,t)}function fe(e,t){var a=he(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return a!==t+";"?a.replace(C," or ($1)").substring(4):"("+t+")"}function ge(e,t,a,n,r,o,l,s,i,c){for(var d,u=0,h=t;u<ae;++u)switch(d=te[u].call(me,e,h,a,n,r,o,l,s,i,c)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==t)return h}function ve(e,t,a,n){for(var r=t+1;r<a;++r)switch(n.charCodeAt(r)){case B:if(e===R&&n.charCodeAt(r-1)===R&&t+2!==r)return r+1;break;case U:if(e===B)return r+1}return r}function _e(e){for(var t in e){var a=e[t];switch(t){case"keyframe":oe=0|a;break;case"global":J=0|a;break;case"cascade":Y=0|a;break;case"compress":K=0|a;break;case"semicolon":Q=0|a;break;case"preserve":X=0|a;break;case"prefix":ne=null,a?"function"!=typeof a?Z=1:(Z=2,ne=a):Z=0}}return _e}function me(t,a){if(void 0!==this&&this.constructor===me)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),oe>0&&(le=r.replace(p,91===o?"":"-")),o=1,1===Y?ie=r:se=r;var l,s=[ie];ae>0&&void 0!==(l=ge(-1,a,s,s,F,$,0,0,0,0))&&"string"==typeof l&&(a=l);var i=ce(ee,s,a,0,0);return ae>0&&void 0!==(l=ge(-2,i,s,s,F,$,i.length,0,0,0))&&"string"!=typeof(i=l)&&(o=0),le="",ie="",se="",G=0,F=1,$=1,K*o==0?i:i.replace(n,"").replace(_,"").replace(m,"$1").replace(b,"$1").replace(w," ")}return me.use=function e(t){switch(t){case void 0:case null:ae=te.length=0;break;default:if("function"==typeof t)te[ae++]=t;else if("object"==typeof t)for(var a=0,n=t.length;a<n;++a)e(t[a]);else re=0|!!t}return e},me.set=_e,void 0!==t&&_e(t),me};const D={},I=document.createElement("style");document.head.appendChild(I);const U=e=>`.${e}{display:none}`,q=e=>/^(\/|https?:\/\/)/.test(e.trim()),N=e=>t=>a=>{I.innerHTML+=(D[e]={hash:t,rules:T()("."+t,a)}).rules,q(e)&&(e=>{I.innerHTML=I.innerHTML.replace(U(e),"")})(t)};var O=(e,...t)=>{const a=e[0].startsWith("/")?e[0]:e.reduce((e,a,n)=>e+(a+(null==t[n]?"":t[n])),"");if(D[a])return D[a].hash;const n="csz-"+Math.random().toString(36).replace("0.",""),r=N(a)(n);return q(a)?((e=>{I.innerHTML=U(e)+I.innerHTML})(n),fetch(a).then(e=>e.text()).then(r)):r(a),n};class R{constructor(){const e=document.createDocumentFragment();this.addEventListener=e.addEventListener.bind(e),this.dispatchEvent=e.dispatchEvent.bind(e),this.removeEventListener=e.removeEventListener.bind(e),this.__lastUpdate=Date.now()}_shouldInvalidate(){return new Date-this.__lastUpdate>3e5}}const V=new class extends R{constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(e){window.history.pushState(null,"",e),this.__onPathChanged()}setSearchParam(e,t){const a=new URLSearchParams(location.search);t?a.set(e,t):a.delete(e);const n=a.toString();this.setPath(`${location.pathname}${n?"?"+n:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed")),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(e=>{e&&e.update()})}__onClick(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find(e=>"A"===e.tagName);if(!t||!t.href)return;if(t.hasAttribute("download")||t.href.includes("mailto:"))return;const a=t.getAttribute("target");if(a&&""!==a&&"_self"!==a)return;const n=new URL(t.href);n.hash||n.href.startsWith(document.baseURI)&&(e.preventDefault(),this.setPath(n.pathname))}};const W=new class extends R{close(e){this.dispatchEvent(new CustomEvent("close",{detail:e}))}};let B;const $={url:new URL("./src/components/WorldMap.js",document.baseURI).href},F=O(B||(B=(e=>e)`
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
`));class G extends g{constructor(){super(),this.__handleSelect=this.__handleSelect.bind(this)}async componentDidMount(){W.addEventListener("close",e=>{e.detail.countryDialogClosed&&form.focus()});const[e,t]=await Promise.all([fetch(new URL("../../data/worldmap.json",$.url)).then(e=>e.json()),import("./785e0d74.js")]),{Map:a,Browser:n,geoJSON:r,layerGroup:o,tileLayer:l}=t,s=new a(this.ref,{center:[0,0],zoom:3,minZoom:2,maxZoom:18,zoomControl:!1});let i,c=o();function d(e){const t=e.target;V.setSearchParam("country",t.feature.properties.NAME),V.setSearchParam("iso2",t.feature.properties.iso2)}function u(e){const t=e.target;i.resetStyle(t)}function h(e){const t=e.target;t.setStyle({fillOpacity:.5,name:"test"}),n.ie||n.opera||n.edge||t.bringToFront()}if(l("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g",{tileSize:512,zoomOffset:-1,attribution:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(s),i=r(e,{style:function(e){let t,a;switch(e.properties.lockdown_status){case"1":t="#9fc184";break;case"2":t="#769de2";break;case"3":t="#d36d6b";break;case"4":t="#ebb577";break;default:t="#828282"}a=navigator.onLine?.1:1;const n={weight:1,opacity:a,color:"#555",fillOpacity:0};return t&&(n.fillColor=t,n.fillOpacity=.5),n},onEachFeature:function(e,t){t.on({mouseover:h,mouseout:u,click:d})}}).addTo(s),c.addTo(s),this.setState({map:s,countries:e.features}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});"granted"===e.state&&navigator.geolocation.getCurrentPosition(e=>{const{latitude:t,longitude:a}=e.coords;this.state.map.setView([t,a])}),e.addEventListener("change",e=>{"granted"===e.target.state?navigator.geolocation.getCurrentPosition(e=>{localStorage.setItem("geolocation","true");const{latitude:t,longitude:a}=e.coords;this.state.map.setView([t,a])}):localStorage.removeItem("geolocation")})}}componentWillUnmount(){this.state.map.remove()}__handleSelect(e){e.preventDefault();const[t,a]=this.selectRef.value.split(",");V.setSearchParam("country",a),V.setSearchParam("iso2",t)}__resetFocus(){this.countrySelectRef.focus()}render(){var e;return[h("div",{class:F},h("form",{id:"form",tabindex:"-1",onSubmit:this.__handleSelect},h("label",{for:"countries"},"Choose a country:"),h("select",{ref:e=>this.selectRef=e,id:"countries"},null===(e=this.state.countries)||void 0===e?void 0:e.map(e=>h("option",{value:e.properties.iso2+","+e.properties.NAME},e.properties.NAME))),h("input",{type:"submit",value:"View country details"}))),h("div",{style:"width: 100%; height: 100%;",ref:e=>this.ref=e})]}}const Y={url:new URL("./src/services/totalsService.js",document.baseURI).href};const Z=new class extends R{async getTotals(e){return!e&&this.__totals||(this.__totals=fetch(new URL("../../data/totals.json",Y.url)).then(e=>e.json()),await this.__totals,this.dispatchEvent(new Event("change"))),this.__totals}};let J;const K=O(J||(J=(e=>e)`
  .key {
    font-size: 10px;
    font-weight: 300;
  }

  .value {
    font-size: 20px;
    font-weight: 700;
  }

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
    font-size: 10px;
    font-weight: 300px;
  }

  dd {
    margin-left: 0px;
    display: block;
    font-weight: 700;
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
`));class Q extends g{constructor(){super(),this.state={items:[]}}async componentWillMount(){H("(min-width: 900px)",e=>{this.setState({desktop:e})});const e=await Z.getTotals(),t=[{description:"Countries in lockdown",value:Number(e.territories.lockdown).toLocaleString()},{description:"People affected",value:"0"},{description:["Reported ",h("br",null),"cases"],value:Number(e.corona.confirmed).toLocaleString()},{description:"Reported deaths",value:Number(e.corona.deaths).toLocaleString()}];this.setState({items:t})}render(e,{items:t,desktop:a}){return h("div",{class:K},h("dl",null,(a?t:t.slice(0,2)).map(e=>h("div",null,h("dt",null,e.description),h("dd",null,e.value)))))}}const X=h("svg",{role:"img","aria-labelledby":"srInfo",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-info-circle",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srInfo"},"info"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}),h("polyline",{points:"11 12 12 12 12 16 13 16"})),ee=(h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"})),h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"}))),te=h("svg",{role:"img","aria-labelledby":"srTicker",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-refresh",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srTicker"},"updates"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"}),h("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"})),ae=h("svg",{role:"img","aria-labelledby":"srContribute",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle-plus",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srContribute"},"contribute"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),h("line",{x1:"12",y1:"9",x2:"12",y2:"15"})),ne=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),re=h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h("polyline",{points:"20 6 9 17 4 12"})),oe=h("svg",{role:"img","aria-labelledby":"srLockdown",style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",width:"180",height:"26",xmlns:"http://www.w3.org/2000/svg"},h("g",null,h("title",{id:"srLockdown"},"lockdown")),h("g",null,h("g",{stroke:"null",id:"svg_27"},h("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_24"},h("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"background"),h("g",{stroke:"null",id:"svg_22",display:"none"},h("rect",{stroke:"null",id:"svg_25",width:"580",height:"400",x:"14.798918",y:"87.143019","stroke-width":"0"}))),h("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_26"},h("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"Layer 1"),h("g",{stroke:"null",id:"svg_19"},h("g",{stroke:"null",id:"svg_20","stroke-linecap":"round","fill-rule":"evenodd","font-size":"9pt","stroke-width":"0.25mm",transform:"matrix(0.4046201041691139,0,0,0.4046201041691139,-2294.6313297135057,-1675.2340553707181) "},h("path",{stroke:"null",d:"m6385.819401,4377.293685l15.5,0l-22.9,70l-17.4,0l-15.4,-47.4l-15.9,47.4l-17.3,0l-23,-70l16.8,0l15.8,49.2l16.5,-49.2l15,0l16,49.6l16.3,-49.6zm74.2,0l16,0l0,70l-13.3,0l-34.9,-42.5l0,42.5l-16,0l0,-70l13.4,0l34.8,42.5l0,-42.5zm-357.6,70l-22.4,-27.5l-9.4,9.8l0,17.7l-16.1,0l0,-70l16.1,0l0,32.7l31,-32.7l18,0l-29,31.2l30.7,38.8l-18.9,0zm-58.8,-58.8l-10.4,9.6a24.073,24.073 0 0 0 -7.386,-5.877a22.434,22.434 0 0 0 -10.214,-2.323q-6.5,0 -11.6,2.85q-5.1,2.85 -7.95,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.95,7.95a22.496,22.496 0 0 0 8.823,2.714a27.717,27.717 0 0 0 2.777,0.136a22.012,22.012 0 0 0 16.47,-7.054a28.649,28.649 0 0 0 1.13,-1.246l10.4,9.6q-5,6.1 -12.4,9.3q-7.4,3.2 -16.5,3.2q-10.7,0 -19.35,-4.65q-8.65,-4.65 -13.6,-12.9a34.983,34.983 0 0 1 -4.891,-16.401a42.286,42.286 0 0 1 -0.059,-2.249q0,-10.4 4.95,-18.65q4.95,-8.25 13.6,-12.9a39.233,39.233 0 0 1 15.476,-4.487a47.549,47.549 0 0 1 3.974,-0.163q9.1,0 16.45,3.2q7.35,3.2 12.35,9.2zm84.9,58.8l0,-70l31.8,0q11.4,0 20.15,4.35a33.27,33.27 0 0 1 10.748,8.304a32.104,32.104 0 0 1 2.852,3.946q4.85,7.9 4.85,18.4q0,10.5 -4.85,18.4q-4.85,7.9 -13.6,12.25a41.232,41.232 0 0 1 -12.626,3.836a53.292,53.292 0 0 1 -7.524,0.514l-31.8,0zm-292.1,0l0,-70l16.2,0l0,56.8l35.1,0l0,13.2l-51.3,0zm82.114,-0.457a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm314.3,0a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm-88.114,-12.843l14.8,0q10.5,0 16.75,-5.85q6.25,-5.85 6.25,-15.85a25.797,25.797 0 0 0 -0.879,-6.915a18.923,18.923 0 0 0 -5.371,-8.935a21.055,21.055 0 0 0 -10.033,-5.159a30.905,30.905 0 0 0 -6.717,-0.691l-14.8,0l0,43.4zm-214,0.7a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027zm314.3,0a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027z",id:"svg_21"}))),h("g",{stroke:"null",id:"svg_13"},h("g",{stroke:"null",id:"svg_17",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},h("path",{stroke:"null",d:"m-77.204981,496.507538c-68.4,0 -124.1,55.7 -124.1,124.1s55.7,124.1 124.1,124.1s124.1,-55.7 124.1,-124.1s-55.6,-124.1 -124.1,-124.1zm108.2,116.3l-56.4,0c-0.8,-27.3 -5.4,-52.8 -13.3,-72.5c-4.3,-10.8 -9.5,-19.3 -15.2,-25.5c46.1,10 81.4,49.6 84.9,98zm-108.2,109.5c-8.1,0 -17,-10.2 -23.8,-27.2c-7.2,-17.9 -11.5,-41.4 -12.2,-66.7l72.1,0c-0.7,25.3 -5,48.7 -12.2,66.7c-6.9,17.1 -15.8,27.2 -23.9,27.2zm-36,-109.5c0.7,-25.3 5,-48.7 12.2,-66.7c6.8,-17 15.7,-27.2 23.8,-27.2s17,10.2 23.8,27.2c7.2,17.9 11.5,41.4 12.2,66.7l-72,0zm12.9,-98.1c-5.7,6.2 -10.9,14.8 -15.2,25.5c-7.9,19.7 -12.6,45.2 -13.3,72.5l-56.5,0c3.5,-48.3 38.8,-87.9 85,-98zm-85,113.8l56.4,0c0.8,27.3 5.4,52.8 13.3,72.5c4.3,10.8 9.5,19.3 15.2,25.5c-46.1,-10.1 -81.4,-49.7 -84.9,-98zm131.3,98c5.7,-6.2 10.9,-14.8 15.2,-25.5c7.9,-19.7 12.6,-45.2 13.3,-72.5l56.4,0c-3.4,48.3 -38.7,87.9 -84.9,98z",id:"svg_18"})),h("g",{stroke:"null",id:"svg_14",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},h("g",{stroke:"null",id:"svg_15"},h("path",{stroke:"null",d:"m-1.004981,525.807538c-1.3,20.1 -1.6,2.5 -1.6,1.6l0.6,-59.9c0,-30.8 -25,-55.7 -55.7,-55.7l-39.7,0c-30.8,0 -55.7,25 -55.7,55.7l0.1,62.3c0,0.4 1.2,-2.2 0.9,-2.2l0,0c-0.4,0 -0.7,0.4 -0.6,0.8c1.3,6.7 -0.4,-2.3 -0.4,3.2c0,0 0,-1.9 0,-3c0,-0.5 0.4,-0.9 -0.7,-1.9l21.8,0c0.3,-1.6 2.4,-0.9 1.9,-1.6c-6.2,-8.9 2.3,-8.2 3.3,-13.8c0.1,-0.4 -2.1,0 -2.4,0l-3.3,1.6c0.2,0 0,-0.8 -0.1,-7l0,-38.4c0,-19.6 15.9,-35.4 35.4,-35.4l39.6,0c19.6,0 35.4,15.9 35.4,35.4l0,38.2c0.2,4.6 -0.5,5.4 -1.4,5.4l0,-1.6c-1.4,3.1 -1.8,-1.5 -1.7,-0.6c0.4,5.6 0.1,15 1.7,9.5c1.5,-5.1 1.6,4.1 2.4,4.1l18.8,5.1c0.9,0 1.6,-0.7 1.5,-1.6c-0.2,-5.8 -0.7,6.4 0,0.6",id:"svg_16"})))))))),le=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.76 45.17"},h("defs",null,h("style",null,".cls-1 {\n          fill: #828282;\n          fill-rule: evenodd;\n        }")),h("title",null,"Asset 2"),h("g",{id:"Layer_2","data-name":"Layer 2"},h("g",{id:"Layer_1-2","data-name":"Layer 1"},h("path",{class:"cls-1",d:"M11,0,7.47,3.51l6.9,6.9h-1a14.93,14.93,0,0,0,1.62,29.78H44.15l5,5,3.51-3.51ZM59.76,27.74A12.39,12.39,0,0,0,48.18,15.39,18.58,18.58,0,0,0,20.79,2.76L24.5,6.47a13.47,13.47,0,0,1,5.38-1.14A13.69,13.69,0,0,1,43.58,19v1.25h3.73a7.46,7.46,0,0,1,4.46,13.45l3.51,3.51A12.39,12.39,0,0,0,59.76,27.74ZM5,25.25a10,10,0,0,0,10,10H39.17L19.25,15.29H14.94A10,10,0,0,0,5,25.25Z"})))),se=h("svg",{viewBox:"25 25 50 50"},h("circle",{cx:"50",cy:"50",r:"20"})),ie=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),ce=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"})),de=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"20"},h("g",null,h("path",{d:"M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"}),h("path",{d:"M0,0h24v24H0V0z",fill:"none"}))),ue=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})),he=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},h("path",{d:"M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),pe=h("svg",{id:"Layer_1","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},h("g",null,h("path",{d:"m216.329 17.722c-12.189 0-22.68 9.076-24.447 21.128l-32.022 251.021c-.488 3.823-2.432 7.31-5.427 9.736l-31.619 25.601 55.48 56.361 55.972-55.972c4.366-4.367 6.771-10.172 6.771-16.347v-266.821c0-13.623-11.084-24.707-24.708-24.707z"}),h("path",{d:"m175.336 421.223-96.549-98.081-72.96 56.258c-6.974 5.378-7.819 15.585-1.823 22.036l81.848 88.066c5.793 6.233 15.612 6.387 21.597.337z"}),h("path",{d:"m389.186 325.208-31.619-25.601c-2.995-2.426-4.939-5.913-5.427-9.736l-32.023-251.022c-1.766-12.051-12.258-21.128-24.447-21.128-13.624 0-24.708 11.084-24.708 24.708v266.82c0 6.175 2.405 11.98 6.771 16.347l55.972 55.972z"}),h("path",{d:"m433.213 323.142-96.549 98.081 67.888 68.616c5.985 6.049 15.804 5.896 21.597-.337l81.848-88.066c5.995-6.451 5.151-16.658-1.823-22.036z"}))),fe=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})),ge=h("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:"enable-background:new 0 0 512 512;","xml:space":"preserve"},h("g",null,h("g",null,h("polygon",{points:"393.784,100.106 298.577,86.272 256,0 213.423,86.272 118.216,100.106 187.109,167.259 170.845,262.081 \n\t\t\t256,217.312 341.155,262.081 324.892,167.259 \t\t"}))),h("g",null,h("g",null,h("polygon",{points:"256,315.219 102.055,253.457 102.055,341.183 256.898,403.306 409.945,341.136 409.945,253.457 \t\t"}))),h("g",null,h("g",null,h("polygon",{points:"256,423.914 102.055,362.152 102.055,449.878 256.898,512 409.945,449.831 409.945,362.152 \t\t"})))),ve=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},h("g",null,h("rect",{fill:"none",height:"24",width:"24"})),h("g",null,h("g",null),h("g",null,h("path",{d:"M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"}),h("g",null,h("path",{d:"M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"}),h("path",{d:"M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"}),h("path",{d:"M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"}))))),_e=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},h("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),me=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},h("path",{d:"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),be=h("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;","xml:space":"preserve"},h("style",{type:"text/css"},".st0 {\n        fill: none;\n      }"),h("path",{class:"st0",d:"M24,0H0v24h24V0z M24,0H0v24h24V0z M0,24h24V0H0V24z"}),h("path",{d:"M17.7,8L12,2.3L6.3,8C4.8,9.6,4,11.6,4,13.6s0.8,4.1,2.3,5.7s3.6,2.4,5.7,2.4s4.1-0.8,5.7-2.4s2.3-3.7,2.3-5.7\n\tS19.2,9.6,17.7,8z"})),we=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"}));let ke;const xe=O(ke||(ke=(e=>e)`
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
`)),ye=()=>[h("a",{class:"skiplink",href:"#main"},"Go to main content"),h("header",{class:xe},h("div",{class:"ld-logo-wrapper"},h("a",{href:"","aria-current":"page"},h("p",null,"ALPHA"),oe)),h("div",{class:"totals"},h(Q,null)))];var Ce,Ae,Le,Se=[],ze=t.__r,Me=t.diffed,Ee=t.__c,Pe=t.unmount;function je(e){t.__h&&t.__h(Ae);var a=Ae.__H||(Ae.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function He(e){return function(e,t,a){var n=je(Ce++);return n.__c||(n.__c=Ae,n.__=[a?a(t):Oe(void 0,t),function(t){var a=e(n.__[0],t);n.__[0]!==a&&(n.__[0]=a,n.__c.setState({}))}]),n.__}(Oe,e)}function Te(e,t){var a=je(Ce++);Ne(a.__H,t)&&(a.__=e,a.__H=t,Ae.__H.__h.push(a))}function De(e){return function(e,t){var a=je(Ce++);return Ne(a.__H,t)?(a.__H=t,a.__h=e,a.__=e()):a.__}((function(){return{current:e}}),[])}function Ie(){Se.some((function(e){if(e.__P)try{e.__H.__h.forEach(Ue),e.__H.__h.forEach(qe),e.__H.__h=[]}catch(a){return e.__H.__h=[],t.__e(a,e.__v),!0}})),Se=[]}function Ue(e){e.t&&e.t()}function qe(e){var t=e.__();"function"==typeof t&&(e.t=t)}function Ne(e,t){return!e||t.some((function(t,a){return t!==e[a]}))}function Oe(e,t){return"function"==typeof t?t(e):t}function Re(e,t){for(var a in e)if("__source"!==a&&!(a in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}t.__r=function(e){ze&&ze(e),Ce=0,(Ae=e.__c).__H&&(Ae.__H.__h.forEach(Ue),Ae.__H.__h.forEach(qe),Ae.__H.__h=[])},t.diffed=function(e){Me&&Me(e);var a=e.__c;if(a){var n=a.__H;n&&n.__h.length&&(1!==Se.push(a)&&Le===t.requestAnimationFrame||((Le=t.requestAnimationFrame)||function(e){var t,a=function(){clearTimeout(n),cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);"undefined"!=typeof window&&(t=requestAnimationFrame(a))})(Ie))}},t.__c=function(e,a){a.some((function(e){try{e.__h.forEach(Ue),e.__h=e.__h.filter((function(e){return!e.__||qe(e)}))}catch(n){a.some((function(e){e.__h&&(e.__h=[])})),a=[],t.__e(n,e.__v)}})),Ee&&Ee(e,a)},t.unmount=function(e){Pe&&Pe(e);var a=e.__c;if(a){var n=a.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){t.__e(e,a.__v)}}};!function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).isPureReactComponent=!0,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.shouldComponentUpdate=function(e,t){return Re(this.props,e)||Re(this.state,t)}}(g);var Ve=t.__b;t.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ve&&Ve(e)};var We=t.__e;function Be(e){return e&&((e=function(e,t){for(var a in t)e[a]=t[a];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(Be)),e}function $e(){this.__u=0,this.o=null,this.__b=null}function Fe(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function Ge(){this.i=null,this.l=null}t.__e=function(e,t,a){if(e.then)for(var n,r=t;r=r.__;)if((n=r.__c)&&n.__c)return n.__c(e,t.__c);We(e,t,a)},($e.prototype=new g).__c=function(e,t){var a=this;null==a.o&&(a.o=[]),a.o.push(t);var n=Fe(a.__v),r=!1,o=function(){r||(r=!0,n?n(l):l())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var l=function(){var e;if(!--a.__u)for(a.__v.__k[0]=a.state.u,a.setState({u:a.__b=null});e=a.o.pop();)e.forceUpdate()};a.__u++||a.setState({u:a.__b=a.__v.__k[0]}),e.then(o,o)},$e.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=Be(this.__b),this.__b=null),[h(g,null,t.u?null:e.children),t.u&&e.fallback]};var Ye=function(e,t,a){if(++a[1]===a[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(a=e.i;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;e.i=a=a[2]}};(Ge.prototype=new g).u=function(e){var t=this,a=Fe(t.__v),n=t.l.get(e);return n[0]++,function(r){var o=function(){t.props.revealOrder?(n.push(r),Ye(t,e,n)):r()};a?a(o):o()}},Ge.prototype.render=function(e){this.i=null,this.l=new Map;var t=k(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var a=t.length;a--;)this.l.set(t[a],this.i=[1,0,this.i]);return e.children},Ge.prototype.componentDidUpdate=Ge.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,a){Ye(e,a,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var Ze=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;g.prototype.isReactComponent={};var Je="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Ke=t.event;function Qe(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}t.event=function(e){Ke&&(e=Ke(e)),e.persist=function(){};var t=!1,a=!1,n=e.stopPropagation;e.stopPropagation=function(){n.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),a=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return a},e.nativeEvent=e};var Xe={configurable:!0,get:function(){return this.class}},et=t.vnode;t.vnode=function(e){e.$$typeof=Je;var t=e.type,a=e.props;if(t){if(a.class!=a.className&&(Xe.enumerable="className"in a,null!=a.className&&(a.class=a.className),Object.defineProperty(a,"className",Xe)),"function"!=typeof t){var n,r,o;for(o in a.defaultValue&&void 0!==a.value&&(a.value||0===a.value||(a.value=a.defaultValue),delete a.defaultValue),Array.isArray(a.value)&&a.multiple&&"select"===t&&(k(a.children).forEach((function(e){-1!=a.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete a.value),a)if(n=Ze.test(o))break;if(n)for(o in r=e.props={},a)r[Ze.test(o)?o.replace(/[A-Z0-9]/,"-$&").toLowerCase():o]=a[o]}!function(t){var a=e.type,n=e.props;if(n&&"string"==typeof a){var r={};for(var o in n)/^on(Ani|Tra|Tou)/.test(o)&&(n[o.toLowerCase()]=n[o],delete n[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onbeforeinput&&(n.onbeforeinput=n[r.onbeforeinput],delete n[r.onbeforeinput]),r.onchange&&("textarea"===a||"input"===a.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var l=r.oninput||"oninput";n[l]||(n[l]=n[r.onchange],delete n[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(Qe(t.prototype,"componentWillMount"),Qe(t.prototype,"componentWillReceiveProps"),Qe(t.prototype,"componentWillUpdate"),t.m=!0)}et&&et(e)};let tt;function at(e){const[t,a]=He(!1),n=De(null);return Te(()=>{t&&n.current.focus({preventScroll:!0})},[t]),h("div",{class:nt},h("div",{class:"ld-expandable"},h("button",{onClick:()=>a(!t),class:"ld-expandable--toggle","aria-expanded":t},h("div",{class:"ld-expandable--icon"},t?ot:rt),h("div",{class:"ld-expandable--toggle-content"},h("h2",null,e.toggle))),h("div",{ref:n,class:"ld-expandable--detail "+(t?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},e.detail)))}const nt=O(tt||(tt=(e=>e)`
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
`)),rt=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"9 6 15 12 9 18"})),ot=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"})),lt={url:new URL("./src/services/updatesService.js",document.baseURI).href};const st=new class extends R{async getUpdates(e){if(e||!this.updates)try{this.updates=await fetch(new URL("../../data/updates.json",lt.url)).then(e=>e.json()),await this.updates}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:this.updates}}};let it;const ct=O(it||(it=(e=>e)`
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

  dd {
    margin-left: 0;
  }

  .data-entry {
    font-variant-numeric: tabular-nums;
    display: flex;
    margin-bottom: 5px;
  }

  .data-entry dl {
    margin: 0 20px 5px 0;
    flex: 1;
  }

  .data-entry dt {
    margin-right: 20px;
    flex: 1;
  }

  .data-entry:last-of-type {
    margin: 0;
  }

  .data-entry dd {
    font-weight: 700;
    color: var(--ld-text);
  }

  ul {
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    list-style: none;
  }

  .ld-travel {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-travel dt {
    flex-basis: 60%;
    flex-shrink: 0;
    font-weight: 300;
    margin-right: 20px;
  }

  .ld-travel dd {
    margin-left: 0;
  }

  .ld-travel--val-icon {
    fill: var(--ld-text);
  }

  .ld-travel--val-YES {
    background-color: #9fc184;
  }
  .ld-travel--val-PARTIALLY {
    background-color: #769de2;
  }
  .ld-travel--val-NO {
    background-color: #d36d6b;
  }
  .ld-travel--val-UNCLEAR {
    background-color: #ebb577;
  }
  .ld-travel--val-NA {
    background-color: #828282;
  }

  .sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  .ld-travel--values {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .ld-travel--symbol {
    position: relative;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .data-value {
    color: grey;
    word-break: break-all;
    text-align: right;
  }

  .travel-advice {
    padding: 16px;
  }

  .ld-contribute {
    text-align: center;
  }

  .ld-measures-wrapper {
    position: relative;
    display: flex;
  }
  .ld-measures-wrapper dd {
    margin-left: auto;
  }

  .ld-measures {
    display: flex;
    margin-bottom: 5px;
  }

  .ld-measures-YES {
    background-color: #9fc184;
  }
  .ld-measures-PARTIAL {
    background-color: #769de2;
  }
  .ld-measures-NO {
    background-color: #d36d6b;
  }
  .ld-measures-UNCLEAR {
    background-color: #828282;
  }

  .ld-measures-key {
    flex: 1;
    margin-right: 20px;
  }

  .ld-measures-icon svg {
    margin-right: 20px;
    width: 20px;
    height: 20px;
    fill: var(--ld-text);
  }

  .ld-measures-value {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`));let dt;const ut=O(dt||(dt=(e=>e)`
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
`));let ht;const pt=O(ht||(ht=(e=>e)`
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
`));let ft;const gt={new_entry:"new entry",announcement:"announcement",rectification:"rectification",promoting_project:"project promotion",promoting_petition:"petition"};function vt(){var e,t;const[a,n]=He(void 0);return Te(async()=>{const e=await st.getUpdates();n(e)},[]),navigator.onLine||"success"===(null==a?void 0:a.status)?!a&&navigator.onLine?h("div",{class:ut},se):"failed"===a.status&&navigator.onLine?h("div",{style:"margin-top: 14px;"},"An error occured while fetching updates."):h("div",{class:_t},h("ul",null,null==a||null===(e=a.data)||void 0===e||null===(t=e.updates)||void 0===t?void 0:t.map(e=>h("li",null,h("div",{class:"ld-ticker--bar"},h("div",{class:"ld-ticker--dot-container"},h("div",{"aria-label":gt[e.type.toLowerCase()],class:"ld-ticker--dot "+e.type.toLowerCase()})),h("div",{class:"ld-ticker--line"})),h("div",{class:"ld-ticker--content"},h("div",{class:"ld-ticker--title"},e.title),h("div",{class:"ld-ticker--content"},e.content),e.link?h("div",{class:"ld-ticker--link"},h("a",{target:"_blank",rel:"noopener noreferer",href:e.link},"Source")):"",h("div",{class:"ld-ticker--date"},e.date)))))):h("div",{class:pt},le,h("b",null,"You are not connected to the internet"),h("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}const _t=O(ft||(ft=(e=>e)`
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
`));function mt(e){let t;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(a=>{a&&(a.addEventListener("updatefound",()=>{t=a.installing,t.addEventListener("statechange",()=>{"installed"===t.state&&navigator.serviceWorker.controller&&e(!0)})}),a.waiting&&navigator.serviceWorker.controller&&(e(!0),t=a.waiting))})}function bt(e){const[t,a]=[...document.querySelectorAll("link[rel='icon']")],n=document.querySelector("link[rel='manifest']"),r=document.querySelector("meta[name='theme-color']");e?(n.href="/manifest-dark.json",t.href="src/assets/favicon-32x32-dark.png",a.href="src/assets/favicon-16x16-dark.png",r.setAttribute("content","#303136")):(n.href="/manifest.json",t.href="src/assets/favicon-32x32.png",a.href="src/assets/favicon-16x16.png",r.setAttribute("content","#ffffff")),document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(t),document.getElementsByTagName("head")[0].appendChild(a),document.getElementsByTagName("head")[0].appendChild(r)}let wt,kt;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),kt=!0,wt=e});class xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),wt=e,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))}),kt&&this.removeAttribute("hidden")}async _handlePrompt(e){e.preventDefault(),wt.prompt();const{outcome:t}=await wt.userChoice;"accepted"===t?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),wt=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",xt);class yt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){this.addEventListener("click",this._postMessage.bind(this)),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)})}async _postMessage(e){e.preventDefault(),(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",yt);let Ct;const At=O(Ct||(Ct=(e=>e)`
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
`));function Lt(){const[e,t]=He(!1),[a,n]=He(!1);return Te(async()=>{if(mt(e=>{n(e)}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});if("true"===localStorage.getItem("geolocation"))return void t(!1);"granted"!==e.state&&t(!0)}},[]),h("div",{class:At},h("button",{onClick:function(){document.getElementsByTagName("html")[0].classList.contains("dark")?(document.getElementsByTagName("html")[0].classList.remove("dark"),localStorage.setItem("darkmode","false"),bt(!1)):(document.getElementsByTagName("html")[0].classList.add("dark"),localStorage.setItem("darkmode","true"),bt(!0))},class:"ld-button"},"Toggle darkmode"),e?[" ",h("button",{onClick:function(){navigator.permissions&&navigator.geolocation.getCurrentPosition(()=>{t(!1)})},class:"ld-button"},"Allow geolocation")," "]:"",h("pwa-install-button",null,h("button",{class:"ld-button"},"Install app")),a?h("pwa-update-available",null,h("button",{class:"ld-button"},"Update app")):"")}const St={info:X,settings:ee,updates:te,contribute:ae};class zt extends g{constructor(){super(),this.state={updateAvailable:!1,index:0},this.tabRefs={},this.__onFocusMove=this.__onFocusMove.bind(this),this.__onTabClick=this.__onTabClick.bind(this)}componentDidMount(){H("(min-width: 960px)",e=>{this.setState({isMobile:!e})}),W.addEventListener("close",e=>{e.detail.menuDialogClosed&&this.tabRefs["tab"+this.state.index].focus()}),mt(e=>{this.setState({updateAvailable:e})})}updateIndex(e,t){"settings"===t&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.setState({index:e}),this.tabRefs["tab"+e].focus(),this.state.isMobile||this.commit(t)}__onTabClick(e,t){this.updateIndex(e,t),this.commit(t)}commit(e){this.props.switchContent(e.toLowerCase())}__onFocusMove(e){const t=this.state.index;switch(e.keyCode){case 37:0!==t&&this.updateIndex(t-1,this.tabRefs["tab"+(t-1)].getAttribute("data-label").toLowerCase());break;case 39:t!==this.props.children.length-1&&this.updateIndex(t+1,this.tabRefs["tab"+(t+1)].getAttribute("data-label").toLowerCase())}}render(e,{index:t}){return h("ul",{class:"ld-menu--tabs",role:"tablist"},this.props.children.map((e,a)=>h("li",{role:"presentation",key:a},h("button",{role:"tab",ref:e=>this.tabRefs["tab"+a]=e,tabindex:t===a?"0":"-1","aria-selected":t===a?"true":"false",class:t===a?"ld-menu--active":"","data-label":e.props.id,onKeyUp:this.__onFocusMove,onClick:()=>this.__onTabClick(a,e.props.id)},"settings"===e.props.id&&this.state.updateAvailable?[" ",h("div",{class:"ld-menu--notification"})," "]:"",St[e.props.id],h("p",{class:t===a?"ld-menu--active":""},e.props.id.toUpperCase())))))}}let Mt;const Et=O(Mt||(Mt=(e=>e)`
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
    background: #bdbdbd;
  }
  .blue {
    background: #6c9eeb;
  }
  .red {
    background: #df6666;
  }
  .yellow {
    background: #f5b26a;
  }
  .green {
    background: #92c47c;
  }
`)),Pt=e=>{switch(e){case"info":return{title:"info",template:[h("h1",null,"Lockdown"),h("p",{class:"ld-alpha"},"Project lockdown is currently in alpha. Not all data may be available yet."),h("p",null,h("b",null,"Project Lockdown")," aims to map the different lockdowns around the world, offering the public a number of relevant metrics\n            in order to provide an overview of the restrictions applied worldwide. We hope this will help evaluate the seriousness of the\n            COVID-19 pandemic and help journalists and Human Rights defenders in their reporting and overseeing tasks."),h(at,{toggle:"About",detail:h("p",null,"While lockdowns generally help countries to flatten the curve, and prevent COVID-19 from spreading, countries with a\n                dictatorial nature may see this as an opportunity to increase their grasp over a country, and even potentially lead to\n                martial law type scenarios. Governments may unnecesarily prolong lockdowns or not stick to their announced end dates for\n                political gain. ",h("b",null,"Project Lockdown")," aims to visualize these situations.")}),h(at,{toggle:"Legend",detail:[h("p",null,"The map shows two parameters for territories:"),h("ol",null,h("li",null,"If the country is under any type of lockdown"),h("li",null,"If there are covid cases in the country")),h("table",{class:Et},h("tr",null,h("th",{scope:"col"}),h("th",{scope:"col"},"Lockdown"),h("th",{scope:"col"},"COVID-19")),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"blue",class:"blue circle"})),h("td",null,h("div",{"aria-label":"no"},ne)),h("td",null,h("div",{"aria-label":"no"},ne))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"green",class:"green circle"})),h("td",null,h("div",{"aria-label":"no"},ne)),h("td",null,h("div",{"aria-label":"yes"},re))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"yellow",class:"yellow circle"})),h("td",null,h("div",{"aria-label":"yes"},re)),h("td",null,h("div",{"aria-label":"no"},ne))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"red",class:"red circle"})),h("td",null,h("div",{"aria-label":"yes"},re)),h("td",null,h("div",{"aria-label":"yes"},re))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"gray",class:"default circle"})),h("td",null,"No Data",h("p",{class:"note"},"(please contribute)")),h("td",null,"No Data",h("p",{class:"note"},"(please contribute)"))))]}),h(at,{toggle:"Sources",detail:h("p",null,h("b",null,"Project Lockdown")," uses a variety of sources to compile all the information showcased. We make sure to only consider sources that are reliable and verifiable.\n                You can check all the ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"sources")," employed here:",h("ul",{class:"ld-sources"},h("li",null,h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://api.coronatracker.com/"},"Coronatracker API"),h("br",null),"Recognized by ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.who.int/bulletin/online_first/COVID-19/en/"},"WHO")),h("li",null,"For reference data see the ",h("b",null,"Data Sources")," Tab."),h("li",null,"For country data see the ",h("b",null,"Find the Countries")," Tab by it's ISO Alpha 3 code.\n                    (Quick find through Global Tab)")),"If you find any errors, please help us and report it ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Code-for-All/lockdown/issues"},"by creating an issue here"),".")}),h(at,{toggle:"Credits",detail:h("p",null,h("b",null,"Project Lockdown")," is a Civic Tech initiative from a number of organizations and individuals. You can find the",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"list of project members")," here\n                under the ",h("b",null,"Credits")," tab.")}),h(at,{toggle:"Data & Privacy",detail:[h("p",null,"We do not collect any information from our visitors."),h("p",null,"All information from any project member shown anywhere in the application is under their prior consent.")]})]};case"settings":return{title:"settings",template:[" ",h(Lt,null)," "]};case"contribute":return{title:"contribute",template:[h("p",null,h("b",null,"Project Lockdown")," is made possible by the contribution of many individuals who are giving their time to make possible that everyone has access to the right information."),h("p",null,"Do you have any information you want to contribute? Please follow this link:"),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Submit data"),h("p",null,"Additionally, you can become part of the project by joining one of the following teams:",h("ul",null,h("li",null,"Editors"),h("li",null,"Devs"),h("li",null,"UI/UX"))),h("p",null,"Contact us via Telegram at:",h("br",null),h("a",{class:"ld-link"},"@ProjectLockdown"))]};case"updates":return{title:"updates",template:[" ",h(vt,null)," "]};default:return{title:"",template:void 0}}};class jt extends g{constructor(e){super(e),this.state={activeItem:"info"},this.switchContent=this.switchContent.bind(this)}componentDidMount(){let e=0;H("(min-width: 960px)",t=>{this.setState({isMobile:!t}),t&&e>0&&(e++,this.props.close())})}switchContent(e){if("settings"===e&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.state.isMobile&&this.props.opened&&e===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.props.changeRoute(Pt(e)),this.prevVal=e,this.setState({activeItem:e})}render(e,{activeItem:t,updateAvailable:a}){return h("main",{id:"main",class:"ld-menu"},h("div",{class:"ld-menu-nav"},h("nav",null,h(zt,{switchContent:this.switchContent},h("button",{id:"info"},"info"),h("button",{id:"settings"},"settings"),h("button",{id:"updates"},"updates"),h("button",{id:"contribute"},"contribute")))),h("div",{class:"ld-menu--content"},h("div",{class:"mb-only"},h("div",{class:"ld-menu--header"},h("h1",null,t))),Pt(t).template))}}class Ht extends g{async componentWillMount(){const e=await this.props.component(),t=e.default||e;this.setState({Component:t})}render({props:e},{Component:t}){return h(t,e)}}var Tt="object"==typeof global&&global&&global.Object===Object&&global,Dt="object"==typeof self&&self&&self.Object===Object&&self,It=Tt||Dt||Function("return this")(),Ut=It.Symbol,qt=Object.prototype,Nt=qt.hasOwnProperty,Ot=qt.toString,Rt=Ut?Ut.toStringTag:void 0;var Vt=Object.prototype.toString;var Wt=Ut?Ut.toStringTag:void 0;function Bt(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Wt&&Wt in Object(e)?function(e){var t=Nt.call(e,Rt),a=e[Rt];try{e[Rt]=void 0;var n=!0}catch(e){}var r=Ot.call(e);return n&&(t?e[Rt]=a:delete e[Rt]),r}(e):function(e){return Vt.call(e)}(e)}function $t(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var Ft=/^\s+|\s+$/g,Gt=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,Zt=/^0o[0-7]+$/i,Jt=parseInt;function Kt(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==Bt(e)}(e))return NaN;if($t(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=$t(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ft,"");var a=Yt.test(e);return a||Zt.test(e)?Jt(e.slice(2),a?2:8):Gt.test(e)?NaN:+e}var Qt=function(){return It.Date.now()},Xt=Math.max,ea=Math.min;let ta;const aa=function(e,t,a){var n,r,o,l,s,i,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var a=n,o=r;return n=r=void 0,c=t,l=e.apply(o,a)}function f(e){return c=e,s=setTimeout(v,t),d?p(e):l}function g(e){var a=e-i;return void 0===i||a>=t||a<0||u&&e-c>=o}function v(){var e=Qt();if(g(e))return _(e);s=setTimeout(v,function(e){var a=t-(e-i);return u?ea(a,o-(e-c)):a}(e))}function _(e){return s=void 0,h&&n?p(e):(n=r=void 0,l)}function m(){var e=Qt(),a=g(e);if(n=arguments,r=this,i=e,a){if(void 0===s)return f(i);if(u)return clearTimeout(s),s=setTimeout(v,t),p(i)}return void 0===s&&(s=setTimeout(v,t)),l}return t=Kt(t)||0,$t(a)&&(d=!!a.leading,o=(u="maxWait"in a)?Xt(Kt(a.maxWait)||0,t):o,h="trailing"in a?!!a.trailing:h),m.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=i=r=s=void 0},m.flush=function(){return void 0===s?l:_(Qt())},m}(()=>{let e={menuDialogClosed:!1,countryDialogClosed:!1};const t=new URLSearchParams(location.search);t.has("country")||t.has("iso2")?e.countryDialogClosed=!0:e.menuDialogClosed=!0,W.close(e)},10,{leading:!0,trailing:!1}),na=O(ta||(ta=(e=>e)`
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
`));("requestIdleCallback"in window?window.requestIdleCallback:e=>setTimeout(e,1e3))(()=>{import("./457501ac.js"),import("./66160b07.js")}),console.log("🌐 Project Lockdown, version: 0.0.0"),window.addEventListener("appinstalled",()=>{window.location.reload()}),H("(prefers-color-scheme: dark)",e=>{const t=localStorage.getItem("darkmode");null!==t?"true"===t&&(document.documentElement.classList.add("dark"),bt(!0)):e?(document.documentElement.classList.add("dark"),bt(!0)):(document.documentElement.classList.remove("dark"),bt(!1))}),function(e,a,n){var r,o,c;t.__&&t.__(e,a),o=(r=n===l)?null:n&&n.__k||a.__k,e=h(f,null,[e]),c=[],A(a,(r?a:n||a).__k=e,o||s,s,void 0!==a.ownerSVGElement,n&&!r?[n]:o?null:i.slice.call(a.childNodes),c,n||s,r),L(c,e)}([" ",h(class extends g{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""}},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__showDialog=this.__showDialog.bind(this),this.__showDialogRoute=this.__showDialogRoute.bind(this)}async componentDidMount(){this.__onPathChanged(),H("(min-width: 960px)",e=>{this.setState({isMobile:!e})})}componentWillMount(){V.addEventListener("path-changed",this.__onPathChanged)}componentWillUnmount(){V.removeEventListener("path-changed",this.__onPathChanged)}render(){return[h(ye,null),h("div",{class:na},h(Q,null)),h(jt,{opened:this.state.dialog.opened,changeRoute:this.__showDialogRoute,close:this.__closeDialog}),h(G,null),this.state.dialog.opened?h(Ht,{component:()=>import("./457501ac.js"),props:{...this.state.dialog,onClose:this.__closeDialog}}):""]}__showDialogRoute({template:e,title:t}){const a=V.url.searchParams.get("country");a?V.setPath(`${t}?country=${a}`):V.setPath(t),this.state.isMobile&&(V.setSearchParam("country",null),this.__showDialog({template:e,title:t}))}__onPathChanged(){const e=V.url.searchParams.get("country"),t=V.url.searchParams.get("iso2");e&&t&&this.setState({dialog:{opened:!0,template:[" ",h(Ht,{component:()=>import("./66160b07.js"),props:{country:e,iso2:t}})," "],title:e}})}__showDialog({template:e,title:t}){this.setState({dialog:{opened:!0,template:e,title:t}})}__closeCountryInfo(){V.setSearchParam("country",void 0),V.setSearchParam("iso2",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),aa(),this.__closeCountryInfo()}},null)," "],document.getElementById("app"));export{R as E,ne as a,he as b,O as c,pe as d,ge as e,ve as f,me as g,h,be as i,we as j,pt as k,ue as l,g as m,ut as n,le as o,ct as p,se as q,V as r,_e as s,ce as t,de as u,ie as v,fe as w};
