var t,a,n,r,o,s,i={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function d(e,t){for(var a in t)e[a]=t[a];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,a){var n,r=arguments,o={};for(n in t)"key"!==n&&"ref"!==n&&(o[n]=t[n]);if(arguments.length>3)for(a=[a],n=3;n<arguments.length;n++)a.push(r[n]);if(null!=a&&(o.children=a),"function"==typeof e&&null!=e.defaultProps)for(n in e.defaultProps)void 0===o[n]&&(o[n]=e.defaultProps[n]);return h(e,o,t&&t.key,t&&t.ref,null)}function h(e,a,n,r,o){var s={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(s.__v=s),t.vnode&&t.vnode(s),s}function f(e){return e.children}function _(e,t){this.props=e,this.context=t}function g(e,t){if(null==t)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var a;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e)return a.__e;return"function"==typeof e.type?g(e):null}function v(e){var t,a;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e){e.__e=e.__c.base=a.__e;break}return v(e)}}function m(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(b)}function b(){for(var e;n=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,a,n,r,o,s,i;e.__d&&(s=(o=(t=e).__v).__e,(i=t.__P)&&(a=[],(n=d({},o)).__v=n,r=A(i,o,n,t.__n,void 0!==i.ownerSVGElement,null,a,null==s?g(o):s),S(a,o),r!=s&&v(o)))}))}function w(e,t,a,n,r,o,s,c,d){var p,h,f,_,v,m,b,w=a&&a.__k||l,y=w.length;if(c==i&&(c=null!=o?o[0]:y?g(a,0):null),p=0,t.__k=k(t.__k,(function(a){if(null!=a){if(a.__=t,a.__b=t.__b+1,null===(f=w[p])||f&&a.key==f.key&&a.type===f.type)w[p]=void 0;else for(h=0;h<y;h++){if((f=w[h])&&a.key==f.key&&a.type===f.type){w[h]=void 0;break}f=null}if(_=A(e,a,f=f||i,n,r,o,s,c,d),(h=a.ref)&&f.ref!=h&&(b||(b=[]),f.ref&&b.push(f.ref,null,a),b.push(h,a.__c||_,a)),null!=_){var l;if(null==m&&(m=_),void 0!==a.__d)l=a.__d,a.__d=void 0;else if(o==f||_!=c||null==_.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(_),l=null;else{for(v=c,h=0;(v=v.nextSibling)&&h<y;h+=2)if(v==_)break e;e.insertBefore(_,c),l=c}"option"==t.type&&(e.value="")}c=void 0!==l?l:_.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&f.__e==c&&c.parentNode!=e&&(c=g(f))}return p++,a})),t.__e=m,null!=o&&"function"!=typeof t.type)for(p=o.length;p--;)null!=o[p]&&u(o[p]);for(p=y;p--;)null!=w[p]&&P(w[p],w[p]);if(b)for(p=0;p<b.length;p++)E(b[p],b[++p],b[++p])}function k(e,t,a){if(null==a&&(a=[]),null==e||"boolean"==typeof e)t&&a.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)k(e[n],t,a);else a.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null,e):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null,e.__v):e):e);return a}function y(e,t,a){"-"===t[0]?e.setProperty(t,a):e[t]="number"==typeof a&&!1===c.test(t)?a+"px":null==a?"":a}function x(e,t,a,n,r){var o,s,i,l,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(o=e.style,"string"==typeof a)o.cssText=a;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(l in n)a&&l in a||y(o,l,"");if(a)for(c in a)n&&a[c]===n[c]||y(o,c,a[c])}else"o"===t[0]&&"n"===t[1]?(s=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase(),t=(i in e?i:t).slice(2),a?(n||e.addEventListener(t,C,s),(e.l||(e.l={}))[t]=a):e.removeEventListener(t,C,s)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==a?"":a:"function"!=typeof a&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==a||!1===a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),a):null==a||!1===a&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,a))}function C(e){this.l[e.type](t.event?t.event(e):e)}function A(e,a,n,r,o,s,i,l,c){var u,p,h,g,v,m,b,k,y,x,C=a.type;if(void 0!==a.constructor)return null;(u=t.__b)&&u(a);try{e:if("function"==typeof C){if(k=a.props,y=(u=C.contextType)&&r[u.__c],x=u?y?y.props.value:u.__:r,n.__c?b=(p=a.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?a.__c=p=new C(k,x):(a.__c=p=new _(k,x),p.constructor=C,p.render=j),y&&y.sub(p),p.props=k,p.state||(p.state={}),p.context=x,p.__n=r,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=d({},p.__s)),d(p.__s,C.getDerivedStateFromProps(k,p.__s))),g=p.props,v=p.state,h)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==g&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,x)||a.__v===n.__v&&!p.__){for(p.props=k,p.state=p.__s,a.__v!==n.__v&&(p.__d=!1),p.__v=a,a.__e=n.__e,a.__k=n.__k,p.__h.length&&i.push(p),u=0;u<a.__k.length;u++)a.__k[u]&&(a.__k[u].__=a);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(g,v,m)}))}p.context=x,p.props=k,p.state=p.__s,(u=t.__r)&&u(a),p.__d=!1,p.__v=a,p.__P=e,u=p.render(p.props,p.state,p.context),a.__k=null!=u&&u.type==f&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=p.getChildContext&&(r=d(d({},r),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(g,v)),w(e,a,n,r,o,s,i,l,c),p.base=a.__e,p.__h.length&&i.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==s&&a.__v===n.__v?(a.__k=n.__k,a.__e=n.__e):a.__e=L(n.__e,a,n,r,o,s,i,c);(u=t.diffed)&&u(a)}catch(e){a.__v=null,t.__e(e,a,n)}return a.__e}function S(e,a){t.__c&&t.__c(a,e),e.some((function(a){try{e=a.__h,a.__h=[],e.some((function(e){e.call(a)}))}catch(e){t.__e(e,a.__v)}}))}function L(e,t,a,n,r,o,s,c){var d,u,p,h,f,_=a.props,g=t.props;if(r="svg"===t.type||r,null!=o)for(d=0;d<o.length;d++)if(null!=(u=o[d])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,o[d]=null;break}if(null==e){if(null===t.type)return document.createTextNode(g);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,g.is&&{is:g.is}),o=null,c=!1}if(null===t.type)_!==g&&e.data!=g&&(e.data=g);else{if(null!=o&&(o=l.slice.call(e.childNodes)),p=(_=a.props||i).dangerouslySetInnerHTML,h=g.dangerouslySetInnerHTML,!c){if(_===i)for(_={},f=0;f<e.attributes.length;f++)_[e.attributes[f].name]=e.attributes[f].value;(h||p)&&(h&&p&&h.__html==p.__html||(e.innerHTML=h&&h.__html||""))}(function(e,t,a,n,r){var o;for(o in a)"children"===o||"key"===o||o in t||x(e,o,null,a[o],n);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||a[o]===t[o]||x(e,o,t[o],a[o],n)})(e,g,_,r,c),t.__k=t.props.children,h||w(e,t,a,n,"foreignObject"!==t.type&&r,o,s,i,c),c||("value"in g&&void 0!==g.value&&g.value!==e.value&&(e.value=null==g.value?"":g.value),"checked"in g&&void 0!==g.checked&&g.checked!==e.checked&&(e.checked=g.checked))}return e}function E(e,a,n){try{"function"==typeof e?e(a):e.current=a}catch(e){t.__e(e,n)}}function P(e,a,n){var r,o,s;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||E(r,null,a)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,a)}r.base=r.__P=null}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&P(r[s],a,n);null!=o&&u(o)}function j(e,t,a){return this.constructor(e,a)}t={__e:function(e,t){for(var a,n;t=t.__;)if((a=t.__c)&&!a.__)try{if(a.constructor&&null!=a.constructor.getDerivedStateFromError&&(n=!0,a.setState(a.constructor.getDerivedStateFromError(e))),null!=a.componentDidCatch&&(n=!0,a.componentDidCatch(e)),n)return m(a.__E=a)}catch(t){e=t}throw e}},_.prototype.setState=function(e,t){var a;a=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(a,this.props)),e&&d(a,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},_.prototype.render=f,a=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=i;var M=function e(t,a,n,r){var o;a[0]=0;for(var s=1;s<a.length;s++){var i=a[s++],l=a[s]?(a[0]|=i?1:2,n[a[s++]]):a[++s];3===i?r[0]=l:4===i?r[1]=Object.assign(r[1]||{},l):5===i?(r[1]=r[1]||{})[a[++s]]=l:6===i?r[1][a[++s]]+=l+"":i?(o=t.apply(l,e(t,l,n,["",null])),r.push(o),l[0]?a[0]|=2:(a[s-2]=0,a[s]=o)):r.push(l)}return r},D=new Map;(function(e){var t=D.get(this);return t||(t=new Map,D.set(this,t)),(t=M(this,t.get(e)||(t.set(e,t=function(e){for(var t,a,n=1,r="",o="",s=[0],i=function(e){1===n&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,e,r):3===n&&(e||r)?(s.push(3,e,r),n=2):2===n&&"..."===r&&e?s.push(4,e,0):2===n&&r&&!e?s.push(5,0,!0,r):n>=5&&((r||!e&&5===n)&&(s.push(n,0,r,a),n=6),e&&(s.push(n,e,0,a),n=6)),r=""},l=0;l<e.length;l++){l&&(1===n&&i(),i(l));for(var c=0;c<e[l].length;c++)t=e[l][c],1===n?"<"===t?(i(),s=[s],n=3):r+=t:4===n?"--"===r&&">"===t?(n=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(i(),n=1):n&&("="===t?(n=5,a=r,r=""):"/"===t&&(n<5||">"===e[l][c+1])?(i(),3===n&&(s=s[0]),n=s,(s=s[0]).push(2,0,n),n=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(i(),n=2):r+=t),3===n&&"!--"===r&&(n=4,s=s[0])}return i(),s}(e)),t),arguments,[])).length>1?t:t[0]}).bind(p);const T=(e,t)=>{let a=window.matchMedia(e);a.addListener(e=>t(e.matches)),t(a.matches)};var z=t=>{var a=/^\0+/g,n=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,s=/([,: ])(transform)/g,i=/,+\s*(?![^(]*[)])/g,l=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,d=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,p=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,h=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,g=/:(read-only)/g,v=/\s+(?=[{\];=:>])/g,m=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,k=/([^\(])(:+) */g,y=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,A=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,P="-webkit-",j="-moz-",M="-ms-",D=59,T=125,z=123,I=40,U=41,q=10,R=13,O=32,H=45,N=42,W=44,$=58,F=47,B=1,V=1,G=0,Y=1,Z=1,J=1,K=0,Q=0,X=0,ee=[],te=[],ae=0,ne=null,re=0,oe=1,se="",ie="",le="";function ce(e,t,r,o,s){for(var i,l,d=0,u=0,p=0,h=0,v=0,m=0,b=0,w=0,y=0,C=0,A=0,S=0,L=0,E=0,j=0,M=0,K=0,te=0,ne=0,ue=r.length,ve=ue-1,me="",be="",we="",ke="",ye="",xe="";j<ue;){if(b=r.charCodeAt(j),j===ve&&u+h+p+d!==0&&(0!==u&&(b=u===F?q:F),h=p=d=0,ue++,ve++),u+h+p+d===0){if(j===ve&&(M>0&&(be=be.replace(n,"")),be.trim().length>0)){switch(b){case O:case 9:case D:case R:case q:break;default:be+=r.charAt(j)}b=D}if(1===K)switch(b){case z:case T:case D:case 34:case 39:case I:case U:case W:K=0;case 9:case R:case q:case O:break;default:for(K=0,ne=j,v=b,j--,b=D;ne<ue;)switch(r.charCodeAt(ne++)){case q:case R:case D:++j,b=v,ne=ue;break;case $:M>0&&(++j,b=v);case z:ne=ue}}switch(b){case z:for(v=(be=be.trim()).charCodeAt(0),A=1,ne=++j;j<ue;){switch(b=r.charCodeAt(j)){case z:A++;break;case T:A--;break;case F:switch(m=r.charCodeAt(j+1)){case N:case F:j=ge(m,j,ve,r)}break;case 91:b++;case I:b++;case 34:case 39:for(;j++<ve&&r.charCodeAt(j)!==b;);}if(0===A)break;j++}switch(we=r.substring(ne,j),0===v&&(v=(be=be.replace(a,"").trim()).charCodeAt(0)),v){case 64:switch(M>0&&(be=be.replace(n,"")),m=be.charCodeAt(1)){case 100:case 109:case 115:case H:i=t;break;default:i=ee}if(ne=(we=ce(t,i,we,m,s+1)).length,X>0&&0===ne&&(ne=be.length),ae>0&&(l=_e(3,we,i=de(ee,be,te),t,V,B,ne,m,s,o),be=i.join(""),void 0!==l&&0===(ne=(we=l.trim()).length)&&(m=0,we="")),ne>0)switch(m){case 115:be=be.replace(x,fe);case 100:case 109:case H:we=be+"{"+we+"}";break;case 107:we=(be=be.replace(f,"$1 $2"+(oe>0?se:"")))+"{"+we+"}",we=1===Z||2===Z&&he("@"+we,3)?"@"+P+we+"@"+we:"@"+we;break;default:we=be+we,112===o&&(ke+=we,we="")}else we="";break;default:we=ce(t,de(t,be,te),we,o,s+1)}ye+=we,S=0,K=0,E=0,M=0,te=0,L=0,be="",we="",b=r.charCodeAt(++j);break;case T:case D:if((ne=(be=(M>0?be.replace(n,""):be).trim()).length)>1)switch(0===E&&((v=be.charCodeAt(0))===H||v>96&&v<123)&&(ne=(be=be.replace(" ",":")).length),ae>0&&void 0!==(l=_e(1,be,t,e,V,B,ke.length,o,s,o))&&0===(ne=(be=l.trim()).length)&&(be="\0\0"),v=be.charCodeAt(0),m=be.charCodeAt(1),v){case 0:break;case 64:if(105===m||99===m){xe+=be+r.charAt(j);break}default:if(be.charCodeAt(ne-1)===$)break;ke+=pe(be,v,m,be.charCodeAt(2))}S=0,K=0,E=0,M=0,te=0,be="",b=r.charCodeAt(++j)}}switch(b){case R:case q:if(u+h+p+d+Q===0)switch(C){case U:case 39:case 34:case 64:case 126:case 62:case N:case 43:case F:case H:case $:case W:case D:case z:case T:break;default:E>0&&(K=1)}u===F?u=0:Y+S===0&&107!==o&&be.length>0&&(M=1,be+="\0"),ae*re>0&&_e(0,be,t,e,V,B,ke.length,o,s,o),B=1,V++;break;case D:case T:if(u+h+p+d===0){B++;break}default:switch(B++,me=r.charAt(j),b){case 9:case O:if(h+d+u===0)switch(w){case W:case $:case 9:case O:me="";break;default:b!==O&&(me=" ")}break;case 0:me="\\0";break;case 12:me="\\f";break;case 11:me="\\v";break;case 38:h+u+d===0&&Y>0&&(te=1,M=1,me="\f"+me);break;case 108:if(h+u+d+G===0&&E>0)switch(j-E){case 2:112===w&&r.charCodeAt(j-3)===$&&(G=w);case 8:111===y&&(G=y)}break;case $:h+u+d===0&&(E=j);break;case W:u+p+h+d===0&&(M=1,me+="\r");break;case 34:case 39:0===u&&(h=h===b?0:0===h?b:h);break;case 91:h+u+p===0&&d++;break;case 93:h+u+p===0&&d--;break;case U:h+u+d===0&&p--;break;case I:if(h+u+d===0){if(0===S)switch(2*w+3*y){case 533:break;default:A=0,S=1}p++}break;case 64:u+p+h+d+E+L===0&&(L=1);break;case N:case F:if(h+d+p>0)break;switch(u){case 0:switch(2*b+3*r.charCodeAt(j+1)){case 235:u=F;break;case 220:ne=j,u=N}break;case N:b===F&&w===N&&ne+2!==j&&(33===r.charCodeAt(ne+2)&&(ke+=r.substring(ne,j+1)),me="",u=0)}}if(0===u){if(Y+h+d+L===0&&107!==o&&b!==D)switch(b){case W:case 126:case 62:case 43:case U:case I:if(0===S){switch(w){case 9:case O:case q:case R:me+="\0";break;default:me="\0"+me+(b===W?"":"\0")}M=1}else switch(b){case I:E+7===j&&108===w&&(E=0),S=++A;break;case U:0==(S=--A)&&(M=1,me+="\0")}break;case 9:case O:switch(w){case 0:case z:case T:case D:case W:case 12:case 9:case O:case q:case R:break;default:0===S&&(M=1,me+="\0")}}be+=me,b!==O&&9!==b&&(C=b)}}y=w,w=b,j++}if(ne=ke.length,X>0&&0===ne&&0===ye.length&&0===t[0].length==0&&(109!==o||1===t.length&&(Y>0?ie:le)===t[0])&&(ne=t.join(",").length+2),ne>0){if(i=0===Y&&107!==o?function(e){for(var t,a,r=0,o=e.length,s=Array(o);r<o;++r){for(var i=e[r].split(c),l="",d=0,u=0,p=0,h=0,f=i.length;d<f;++d)if(!(0===(u=(a=i[d]).length)&&f>1)){if(p=l.charCodeAt(l.length-1),h=a.charCodeAt(0),t="",0!==d)switch(p){case N:case 126:case 62:case 43:case O:case I:break;default:t=" "}switch(h){case 38:a=t+ie;case 126:case 62:case 43:case O:case U:case I:break;case 91:a=t+a+ie;break;case $:switch(2*a.charCodeAt(1)+3*a.charCodeAt(2)){case 530:if(J>0){a=t+a.substring(8,u-1);break}default:(d<1||i[d-1].length<1)&&(a=t+ie+a)}break;case W:t="";default:a=u>1&&a.indexOf(":")>0?t+a.replace(k,"$1"+ie+"$2"):t+a+ie}l+=a}s[r]=l.replace(n,"").trim()}return s}(t):t,ae>0&&void 0!==(l=_e(2,ke,i,e,V,B,ne,o,s,o))&&0===(ke=l).length)return xe+ke+ye;if(ke=i.join(",")+"{"+ke+"}",Z*G!=0){switch(2!==Z||he(ke,2)||(G=0),G){case 111:ke=ke.replace(g,":-moz-$1")+ke;break;case 112:ke=ke.replace(_,"::"+P+"input-$1")+ke.replace(_,"::-moz-$1")+ke.replace(_,":-ms-input-$1")+ke}G=0}}return xe+ke+ye}function de(e,t,a){var n=t.trim().split(d),r=n,o=n.length,s=e.length;switch(s){case 0:case 1:for(var i=0,l=0===s?"":e[0]+" ";i<o;++i)r[i]=ue(l,r[i],a,s).trim();break;default:i=0;var c=0;for(r=[];i<o;++i)for(var u=0;u<s;++u)r[c++]=ue(e[u]+" ",n[i],a,s).trim()}return r}function ue(e,t,a,n){var r=t,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(Y+n){case 0:case 1:if(0===e.trim().length)break;default:return r.replace(u,"$1"+e.trim())}break;case $:switch(r.charCodeAt(1)){case 103:if(J>0&&Y>0)return r.replace(p,"$1").replace(u,"$1"+le);break;default:return e.trim()+r.replace(u,"$1"+e.trim())}default:if(a*Y>0&&r.indexOf("\f")>0)return r.replace(u,(e.charCodeAt(0)===$?"":"$1")+e.trim())}return e+r}function pe(e,t,a,n){var c,d=0,u=e+";",p=2*t+3*a+4*n;if(944===p)return function(e){var t=e.length,a=e.indexOf(":",9)+1,n=e.substring(0,a).trim(),r=e.substring(a,t-1).trim();switch(e.charCodeAt(9)*oe){case 0:break;case H:if(110!==e.charCodeAt(10))break;default:var o=r.split((r="",i)),s=0;for(a=0,t=o.length;s<t;a=0,++s){for(var c=o[s],d=c.split(l);c=d[a];){var u=c.charCodeAt(0);if(1===oe&&(u>64&&u<90||u>96&&u<123||95===u||u===H&&c.charCodeAt(1)!==H))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=se}}d[a++]=c}r+=(0===s?"":",")+d.join(" ")}}return r=n+r+";",1===Z||2===Z&&he(r,1)?P+r+r:r}(u);if(0===Z||2===Z&&!he(u,1))return u;switch(p){case 1015:return 97===u.charCodeAt(10)?P+u+u:u;case 951:return 116===u.charCodeAt(3)?P+u+u:u;case 963:return 110===u.charCodeAt(5)?P+u+u:u;case 1009:if(100!==u.charCodeAt(4))break;case 969:case 942:return P+u+u;case 978:return P+u+j+u+u;case 1019:case 983:return P+u+j+u+M+u+u;case 883:return u.charCodeAt(8)===H?P+u+u:u.indexOf("image-set(",11)>0?u.replace(E,"$1"+P+"$2")+u:u;case 932:if(u.charCodeAt(4)===H)switch(u.charCodeAt(5)){case 103:return P+"box-"+u.replace("-grow","")+P+u+M+u.replace("grow","positive")+u;case 115:return P+u+M+u.replace("shrink","negative")+u;case 98:return P+u+M+u.replace("basis","preferred-size")+u}return P+u+M+u+u;case 964:return P+u+M+"flex-"+u+u;case 1023:if(99!==u.charCodeAt(8))break;return c=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),P+"box-pack"+c+P+u+M+"flex-pack"+c+u;case 1005:return o.test(u)?u.replace(r,":"+P)+u.replace(r,":"+j)+u:u;case 1e3:switch(d=(c=u.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(d)){case 226:c=u.replace(y,"tb");break;case 232:c=u.replace(y,"tb-rl");break;case 220:c=u.replace(y,"lr");break;default:return u}return P+u+M+c+u;case 1017:if(-1===u.indexOf("sticky",9))return u;case 975:switch(d=(u=e).length-10,p=(c=(33===u.charCodeAt(d)?u.substring(0,d):u).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:u=u.replace(c,P+c)+";"+u;break;case 207:case 102:u=u.replace(c,P+(p>102?"inline-":"")+"box")+";"+u.replace(c,P+c)+";"+u.replace(c,M+c+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===H)switch(u.charCodeAt(6)){case 105:return c=u.replace("-items",""),P+u+P+"box-"+c+M+"flex-"+c+u;case 115:return P+u+M+"flex-item-"+u.replace(A,"")+u;default:return P+u+M+"flex-line-pack"+u.replace("align-content","").replace(A,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==H||122===u.charCodeAt(4))break;case 931:case 953:if(!0===L.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?pe(e.replace("stretch","fill-available"),t,a,n).replace(":fill-available",":stretch"):u.replace(c,P+c)+u.replace(c,j+c.replace("fill-",""))+u;break;case 962:if(u=P+u+(102===u.charCodeAt(5)?M+u:"")+u,a+n===211&&105===u.charCodeAt(13)&&u.indexOf("transform",10)>0)return u.substring(0,u.indexOf(";",27)+1).replace(s,"$1"+P+"$2")+u}return u}function he(e,t){var a=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?a:10),r=e.substring(a+1,e.length-1);return ne(2!==t?n:n.replace(S,"$1"),r,t)}function fe(e,t){var a=pe(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return a!==t+";"?a.replace(C," or ($1)").substring(4):"("+t+")"}function _e(e,t,a,n,r,o,s,i,l,c){for(var d,u=0,p=t;u<ae;++u)switch(d=te[u].call(me,e,p,a,n,r,o,s,i,l,c)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function ge(e,t,a,n){for(var r=t+1;r<a;++r)switch(n.charCodeAt(r)){case F:if(e===N&&n.charCodeAt(r-1)===N&&t+2!==r)return r+1;break;case q:if(e===F)return r+1}return r}function ve(e){for(var t in e){var a=e[t];switch(t){case"keyframe":oe=0|a;break;case"global":J=0|a;break;case"cascade":Y=0|a;break;case"compress":K=0|a;break;case"semicolon":Q=0|a;break;case"preserve":X=0|a;break;case"prefix":ne=null,a?"function"!=typeof a?Z=1:(Z=2,ne=a):Z=0}}return ve}function me(t,a){if(void 0!==this&&this.constructor===me)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),oe>0&&(se=r.replace(h,91===o?"":"-")),o=1,1===Y?le=r:ie=r;var s,i=[le];ae>0&&void 0!==(s=_e(-1,a,i,i,V,B,0,0,0,0))&&"string"==typeof s&&(a=s);var l=ce(ee,i,a,0,0);return ae>0&&void 0!==(s=_e(-2,l,i,i,V,B,l.length,0,0,0))&&"string"!=typeof(l=s)&&(o=0),se="",le="",ie="",G=0,V=1,B=1,K*o==0?l:l.replace(n,"").replace(v,"").replace(m,"$1").replace(b,"$1").replace(w," ")}return me.use=function e(t){switch(t){case void 0:case null:ae=te.length=0;break;default:if("function"==typeof t)te[ae++]=t;else if("object"==typeof t)for(var a=0,n=t.length;a<n;++a)e(t[a]);else re=0|!!t}return e},me.set=ve,void 0!==t&&ve(t),me};const I={},U=document.createElement("style");document.head.appendChild(U);const q=e=>`.${e}{display:none}`,R=e=>/^(\/|https?:\/\/)/.test(e.trim()),O=e=>t=>a=>{U.innerHTML+=(I[e]={hash:t,rules:z()("."+t,a)}).rules,R(e)&&(e=>{U.innerHTML=U.innerHTML.replace(q(e),"")})(t)};var H=(e,...t)=>{const a=e[0].startsWith("/")?e[0]:e.reduce((e,a,n)=>e+(a+(null==t[n]?"":t[n])),"");if(I[a])return I[a].hash;const n="csz-"+Math.random().toString(36).replace("0.",""),r=O(a)(n);return R(a)?((e=>{U.innerHTML=q(e)+U.innerHTML})(n),fetch(a).then(e=>e.text()).then(r)):r(a),n};class N{constructor(){const e=document.createDocumentFragment();this.addEventListener=e.addEventListener.bind(e),this.dispatchEvent=e.dispatchEvent.bind(e),this.removeEventListener=e.removeEventListener.bind(e)}}const W=new class extends N{constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(e){window.history.pushState(null,"",e),this.__onPathChanged()}setSearchParam(e,t){const a=new URLSearchParams(location.search);t?a.set(e,t):a.delete(e);const n=a.toString();this.setPath(`${location.pathname}${n?"?"+n:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed")),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(e=>{e&&e.update()})}__onClick(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find(e=>"A"===e.tagName);if(!t||!t.href)return;if(t.hasAttribute("download")||t.href.includes("mailto:"))return;const a=t.getAttribute("target");if(a&&""!==a&&"_self"!==a)return;const n=new URL(t.href);n.hash||n.href.startsWith(document.baseURI)&&(e.preventDefault(),this.setPath(n.pathname))}};const $=new class extends N{close(e){this.dispatchEvent(new CustomEvent("close",{detail:e}))}};let F;const B={url:new URL("./src/components/WorldMap.js",document.baseURI).href},V=H(F||(F=(e=>e)`
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
`));class G extends _{constructor(){super(),this.__handleSelect=this.__handleSelect.bind(this)}async componentDidMount(){$.addEventListener("close",e=>{e.detail.countryDialogClosed&&form.focus()});const[e,t]=await Promise.all([fetch(new URL("../../data/worldmap.json",B.url)).then(e=>e.json()),import("./785e0d74.js")]),{Map:a,Browser:n,geoJSON:r,layerGroup:o,tileLayer:s}=t,i=new a(this.ref,{center:[0,0],zoom:3,minZoom:2,maxZoom:18,zoomControl:!1});let l,c=o();function d(e){const t=e.target;W.setSearchParam("country",t.feature.properties.NAME),W.setSearchParam("iso2",t.feature.properties.iso2)}function u(e){const t=e.target;l.resetStyle(t)}function p(e){const t=e.target;t.setStyle({fillOpacity:.5,name:"test"}),n.ie||n.opera||n.edge||t.bringToFront()}if(s("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g",{tileSize:512,zoomOffset:-1,attribution:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(i),l=r(e,{style:function(e){let t,a;switch(e.properties.lockdown_status){case"1":t="#9fc184";break;case"2":t="#769de2";break;case"3":t="#d36d6b";break;case"4":t="#ebb577";break;default:t="#828282"}a=navigator.onLine?.1:1;const n={weight:1,opacity:a,color:"#555",fillOpacity:0};return t&&(n.fillColor=t,n.fillOpacity=.5),n},onEachFeature:function(e,t){t.on({mouseover:p,mouseout:u,click:d})}}).addTo(i),c.addTo(i),this.setState({map:i,countries:e.features}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});"granted"===e.state&&navigator.geolocation.getCurrentPosition(e=>{const{latitude:t,longitude:a}=e.coords;this.state.map.setView([t,a])}),e.addEventListener("change",e=>{"granted"===e.target.state?navigator.geolocation.getCurrentPosition(e=>{localStorage.setItem("geolocation","true");const{latitude:t,longitude:a}=e.coords;this.state.map.setView([t,a])}):localStorage.removeItem("geolocation")})}}componentWillUnmount(){this.state.map.remove()}__handleSelect(e){e.preventDefault();const[t,a]=this.selectRef.value.split(",");W.setSearchParam("country",a),W.setSearchParam("iso2",t)}__resetFocus(){this.countrySelectRef.focus()}render(){var e;return[p("div",{class:V},p("form",{id:"form",tabindex:"-1",onSubmit:this.__handleSelect},p("label",{for:"countries"},"Choose a country:"),p("select",{ref:e=>this.selectRef=e,id:"countries"},null===(e=this.state.countries)||void 0===e?void 0:e.map(e=>p("option",{value:e.properties.iso2+","+e.properties.NAME},e.properties.NAME))),p("input",{type:"submit",value:"View country details"}))),p("div",{style:"width: 100%; height: 100%;",ref:e=>this.ref=e})]}}const Y={url:new URL("./src/services/totalsService.js",document.baseURI).href};const Z=new class extends N{async getTotals(e){return!e&&this.__totals||(this.__totals=fetch(new URL("../../data/totals.json",Y.url)).then(e=>e.json()),await this.__totals,this.dispatchEvent(new Event("change"))),this.__totals}};let J;const K=H(J||(J=(e=>e)`
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
`));class Q extends _{constructor(){super(),this.state={items:[]}}async componentWillMount(){T("(min-width: 900px)",e=>{this.setState({desktop:e})});const e=await Z.getTotals(),t=[{description:"Countries in lockdown",value:e.territories.lockdown},{description:"People affected",value:"0"},{description:"Confirmed cases",value:e.corona.confirmed},{description:"Confirmed deaths",value:e.corona.deaths}];this.setState({items:t})}render(e,{items:t,desktop:a}){return p("div",{class:K},p("dl",null,(a?t:t.slice(0,2)).map(e=>p("div",null,p("dt",null,e.description),p("dd",null,e.value)))))}}const X=p("svg",{role:"img","aria-labelledby":"srInfo",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-info-circle",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srInfo"},"info"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("circle",{cx:"12",cy:"12",r:"9"}),p("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}),p("polyline",{points:"11 12 12 12 12 16 13 16"})),ee=(p("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srSettings"},"settings"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),p("circle",{cx:"12",cy:"12",r:"3"})),p("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srSettings"},"settings"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),p("circle",{cx:"12",cy:"12",r:"3"}))),te=p("svg",{role:"img","aria-labelledby":"srTicker",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-refresh",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srTicker"},"updates"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"}),p("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"})),ae=p("svg",{role:"img","aria-labelledby":"srContribute",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle-plus",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srContribute"},"contribute"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("circle",{cx:"12",cy:"12",r:"9"}),p("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),p("line",{x1:"12",y1:"9",x2:"12",y2:"15"})),ne=p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),p("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),re=p("svg",{role:"img","aria-labelledby":"srLockdown",style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",width:"180",height:"26",xmlns:"http://www.w3.org/2000/svg"},p("g",null,p("title",{id:"srLockdown"},"lockdown")),p("g",null,p("g",{stroke:"null",id:"svg_27"},p("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_24"},p("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"background"),p("g",{stroke:"null",id:"svg_22",display:"none"},p("rect",{stroke:"null",id:"svg_25",width:"580",height:"400",x:"14.798918",y:"87.143019","stroke-width":"0"}))),p("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_26"},p("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"Layer 1"),p("g",{stroke:"null",id:"svg_19"},p("g",{stroke:"null",id:"svg_20","stroke-linecap":"round","fill-rule":"evenodd","font-size":"9pt","stroke-width":"0.25mm",transform:"matrix(0.4046201041691139,0,0,0.4046201041691139,-2294.6313297135057,-1675.2340553707181) "},p("path",{stroke:"null",d:"m6385.819401,4377.293685l15.5,0l-22.9,70l-17.4,0l-15.4,-47.4l-15.9,47.4l-17.3,0l-23,-70l16.8,0l15.8,49.2l16.5,-49.2l15,0l16,49.6l16.3,-49.6zm74.2,0l16,0l0,70l-13.3,0l-34.9,-42.5l0,42.5l-16,0l0,-70l13.4,0l34.8,42.5l0,-42.5zm-357.6,70l-22.4,-27.5l-9.4,9.8l0,17.7l-16.1,0l0,-70l16.1,0l0,32.7l31,-32.7l18,0l-29,31.2l30.7,38.8l-18.9,0zm-58.8,-58.8l-10.4,9.6a24.073,24.073 0 0 0 -7.386,-5.877a22.434,22.434 0 0 0 -10.214,-2.323q-6.5,0 -11.6,2.85q-5.1,2.85 -7.95,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.95,7.95a22.496,22.496 0 0 0 8.823,2.714a27.717,27.717 0 0 0 2.777,0.136a22.012,22.012 0 0 0 16.47,-7.054a28.649,28.649 0 0 0 1.13,-1.246l10.4,9.6q-5,6.1 -12.4,9.3q-7.4,3.2 -16.5,3.2q-10.7,0 -19.35,-4.65q-8.65,-4.65 -13.6,-12.9a34.983,34.983 0 0 1 -4.891,-16.401a42.286,42.286 0 0 1 -0.059,-2.249q0,-10.4 4.95,-18.65q4.95,-8.25 13.6,-12.9a39.233,39.233 0 0 1 15.476,-4.487a47.549,47.549 0 0 1 3.974,-0.163q9.1,0 16.45,3.2q7.35,3.2 12.35,9.2zm84.9,58.8l0,-70l31.8,0q11.4,0 20.15,4.35a33.27,33.27 0 0 1 10.748,8.304a32.104,32.104 0 0 1 2.852,3.946q4.85,7.9 4.85,18.4q0,10.5 -4.85,18.4q-4.85,7.9 -13.6,12.25a41.232,41.232 0 0 1 -12.626,3.836a53.292,53.292 0 0 1 -7.524,0.514l-31.8,0zm-292.1,0l0,-70l16.2,0l0,56.8l35.1,0l0,13.2l-51.3,0zm82.114,-0.457a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm314.3,0a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm-88.114,-12.843l14.8,0q10.5,0 16.75,-5.85q6.25,-5.85 6.25,-15.85a25.797,25.797 0 0 0 -0.879,-6.915a18.923,18.923 0 0 0 -5.371,-8.935a21.055,21.055 0 0 0 -10.033,-5.159a30.905,30.905 0 0 0 -6.717,-0.691l-14.8,0l0,43.4zm-214,0.7a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027zm314.3,0a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027z",id:"svg_21"}))),p("g",{stroke:"null",id:"svg_13"},p("g",{stroke:"null",id:"svg_17",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},p("path",{stroke:"null",d:"m-77.204981,496.507538c-68.4,0 -124.1,55.7 -124.1,124.1s55.7,124.1 124.1,124.1s124.1,-55.7 124.1,-124.1s-55.6,-124.1 -124.1,-124.1zm108.2,116.3l-56.4,0c-0.8,-27.3 -5.4,-52.8 -13.3,-72.5c-4.3,-10.8 -9.5,-19.3 -15.2,-25.5c46.1,10 81.4,49.6 84.9,98zm-108.2,109.5c-8.1,0 -17,-10.2 -23.8,-27.2c-7.2,-17.9 -11.5,-41.4 -12.2,-66.7l72.1,0c-0.7,25.3 -5,48.7 -12.2,66.7c-6.9,17.1 -15.8,27.2 -23.9,27.2zm-36,-109.5c0.7,-25.3 5,-48.7 12.2,-66.7c6.8,-17 15.7,-27.2 23.8,-27.2s17,10.2 23.8,27.2c7.2,17.9 11.5,41.4 12.2,66.7l-72,0zm12.9,-98.1c-5.7,6.2 -10.9,14.8 -15.2,25.5c-7.9,19.7 -12.6,45.2 -13.3,72.5l-56.5,0c3.5,-48.3 38.8,-87.9 85,-98zm-85,113.8l56.4,0c0.8,27.3 5.4,52.8 13.3,72.5c4.3,10.8 9.5,19.3 15.2,25.5c-46.1,-10.1 -81.4,-49.7 -84.9,-98zm131.3,98c5.7,-6.2 10.9,-14.8 15.2,-25.5c7.9,-19.7 12.6,-45.2 13.3,-72.5l56.4,0c-3.4,48.3 -38.7,87.9 -84.9,98z",id:"svg_18"})),p("g",{stroke:"null",id:"svg_14",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},p("g",{stroke:"null",id:"svg_15"},p("path",{stroke:"null",d:"m-1.004981,525.807538c-1.3,20.1 -1.6,2.5 -1.6,1.6l0.6,-59.9c0,-30.8 -25,-55.7 -55.7,-55.7l-39.7,0c-30.8,0 -55.7,25 -55.7,55.7l0.1,62.3c0,0.4 1.2,-2.2 0.9,-2.2l0,0c-0.4,0 -0.7,0.4 -0.6,0.8c1.3,6.7 -0.4,-2.3 -0.4,3.2c0,0 0,-1.9 0,-3c0,-0.5 0.4,-0.9 -0.7,-1.9l21.8,0c0.3,-1.6 2.4,-0.9 1.9,-1.6c-6.2,-8.9 2.3,-8.2 3.3,-13.8c0.1,-0.4 -2.1,0 -2.4,0l-3.3,1.6c0.2,0 0,-0.8 -0.1,-7l0,-38.4c0,-19.6 15.9,-35.4 35.4,-35.4l39.6,0c19.6,0 35.4,15.9 35.4,35.4l0,38.2c0.2,4.6 -0.5,5.4 -1.4,5.4l0,-1.6c-1.4,3.1 -1.8,-1.5 -1.7,-0.6c0.4,5.6 0.1,15 1.7,9.5c1.5,-5.1 1.6,4.1 2.4,4.1l18.8,5.1c0.9,0 1.6,-0.7 1.5,-1.6c-0.2,-5.8 -0.7,6.4 0,0.6",id:"svg_16"})))))))),oe=p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.76 45.17"},p("defs",null,p("style",null,".cls-1 {\n          fill: #828282;\n          fill-rule: evenodd;\n        }")),p("title",null,"Asset 2"),p("g",{id:"Layer_2","data-name":"Layer 2"},p("g",{id:"Layer_1-2","data-name":"Layer 1"},p("path",{class:"cls-1",d:"M11,0,7.47,3.51l6.9,6.9h-1a14.93,14.93,0,0,0,1.62,29.78H44.15l5,5,3.51-3.51ZM59.76,27.74A12.39,12.39,0,0,0,48.18,15.39,18.58,18.58,0,0,0,20.79,2.76L24.5,6.47a13.47,13.47,0,0,1,5.38-1.14A13.69,13.69,0,0,1,43.58,19v1.25h3.73a7.46,7.46,0,0,1,4.46,13.45l3.51,3.51A12.39,12.39,0,0,0,59.76,27.74ZM5,25.25a10,10,0,0,0,10,10H39.17L19.25,15.29H14.94A10,10,0,0,0,5,25.25Z"})))),se=p("svg",{viewBox:"25 25 50 50"},p("circle",{cx:"50",cy:"50",r:"20"}));let ie;const le=H(ie||(ie=(e=>e)`
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
`)),ce=()=>[p("a",{class:"skiplink",href:"#main"},"Go to main content"),p("header",{class:le},p("div",{class:"ld-logo-wrapper"},p("a",{href:"","aria-current":"page"},p("p",null,"ALPHA"),re)),p("div",{class:"totals"},p(Q,null)))];var de,ue,pe,he=[],fe=t.__r,_e=t.diffed,ge=t.__c,ve=t.unmount;function me(e){t.__h&&t.__h(ue);var a=ue.__H||(ue.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function be(e){return function(e,t,a){var n=me(de++);return n.__c||(n.__c=ue,n.__=[a?a(t):Se(void 0,t),function(t){var a=e(n.__[0],t);n.__[0]!==a&&(n.__[0]=a,n.__c.setState({}))}]),n.__}(Se,e)}function we(e,t){var a=me(de++);Ae(a.__H,t)&&(a.__=e,a.__H=t,ue.__H.__h.push(a))}function ke(e){return function(e,t){var a=me(de++);return Ae(a.__H,t)?(a.__H=t,a.__h=e,a.__=e()):a.__}((function(){return{current:e}}),[])}function ye(){he.some((function(e){if(e.__P)try{e.__H.__h.forEach(xe),e.__H.__h.forEach(Ce),e.__H.__h=[]}catch(a){return e.__H.__h=[],t.__e(a,e.__v),!0}})),he=[]}function xe(e){e.t&&e.t()}function Ce(e){var t=e.__();"function"==typeof t&&(e.t=t)}function Ae(e,t){return!e||t.some((function(t,a){return t!==e[a]}))}function Se(e,t){return"function"==typeof t?t(e):t}function Le(e,t){for(var a in e)if("__source"!==a&&!(a in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}t.__r=function(e){fe&&fe(e),de=0,(ue=e.__c).__H&&(ue.__H.__h.forEach(xe),ue.__H.__h.forEach(Ce),ue.__H.__h=[])},t.diffed=function(e){_e&&_e(e);var a=e.__c;if(a){var n=a.__H;n&&n.__h.length&&(1!==he.push(a)&&pe===t.requestAnimationFrame||((pe=t.requestAnimationFrame)||function(e){var t,a=function(){clearTimeout(n),cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);"undefined"!=typeof window&&(t=requestAnimationFrame(a))})(ye))}},t.__c=function(e,a){a.some((function(e){try{e.__h.forEach(xe),e.__h=e.__h.filter((function(e){return!e.__||Ce(e)}))}catch(n){a.some((function(e){e.__h&&(e.__h=[])})),a=[],t.__e(n,e.__v)}})),ge&&ge(e,a)},t.unmount=function(e){ve&&ve(e);var a=e.__c;if(a){var n=a.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){t.__e(e,a.__v)}}};!function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).isPureReactComponent=!0,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.shouldComponentUpdate=function(e,t){return Le(this.props,e)||Le(this.state,t)}}(_);var Ee=t.__b;t.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ee&&Ee(e)};var Pe=t.__e;function je(e){return e&&((e=function(e,t){for(var a in t)e[a]=t[a];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(je)),e}function Me(){this.__u=0,this.o=null,this.__b=null}function De(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function Te(){this.i=null,this.l=null}t.__e=function(e,t,a){if(e.then)for(var n,r=t;r=r.__;)if((n=r.__c)&&n.__c)return n.__c(e,t.__c);Pe(e,t,a)},(Me.prototype=new _).__c=function(e,t){var a=this;null==a.o&&(a.o=[]),a.o.push(t);var n=De(a.__v),r=!1,o=function(){r||(r=!0,n?n(s):s())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var s=function(){var e;if(!--a.__u)for(a.__v.__k[0]=a.state.u,a.setState({u:a.__b=null});e=a.o.pop();)e.forceUpdate()};a.__u++||a.setState({u:a.__b=a.__v.__k[0]}),e.then(o,o)},Me.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=je(this.__b),this.__b=null),[p(_,null,t.u?null:e.children),t.u&&e.fallback]};var ze=function(e,t,a){if(++a[1]===a[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(a=e.i;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;e.i=a=a[2]}};(Te.prototype=new _).u=function(e){var t=this,a=De(t.__v),n=t.l.get(e);return n[0]++,function(r){var o=function(){t.props.revealOrder?(n.push(r),ze(t,e,n)):r()};a?a(o):o()}},Te.prototype.render=function(e){this.i=null,this.l=new Map;var t=k(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var a=t.length;a--;)this.l.set(t[a],this.i=[1,0,this.i]);return e.children},Te.prototype.componentDidUpdate=Te.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,a){ze(e,a,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var Ie=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;_.prototype.isReactComponent={};var Ue="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,qe=t.event;function Re(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}t.event=function(e){qe&&(e=qe(e)),e.persist=function(){};var t=!1,a=!1,n=e.stopPropagation;e.stopPropagation=function(){n.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),a=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return a},e.nativeEvent=e};var Oe={configurable:!0,get:function(){return this.class}},He=t.vnode;t.vnode=function(e){e.$$typeof=Ue;var t=e.type,a=e.props;if(t){if(a.class!=a.className&&(Oe.enumerable="className"in a,null!=a.className&&(a.class=a.className),Object.defineProperty(a,"className",Oe)),"function"!=typeof t){var n,r,o;for(o in a.defaultValue&&void 0!==a.value&&(a.value||0===a.value||(a.value=a.defaultValue),delete a.defaultValue),Array.isArray(a.value)&&a.multiple&&"select"===t&&(k(a.children).forEach((function(e){-1!=a.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete a.value),a)if(n=Ie.test(o))break;if(n)for(o in r=e.props={},a)r[Ie.test(o)?o.replace(/[A-Z0-9]/,"-$&").toLowerCase():o]=a[o]}!function(t){var a=e.type,n=e.props;if(n&&"string"==typeof a){var r={};for(var o in n)/^on(Ani|Tra|Tou)/.test(o)&&(n[o.toLowerCase()]=n[o],delete n[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onbeforeinput&&(n.onbeforeinput=n[r.onbeforeinput],delete n[r.onbeforeinput]),r.onchange&&("textarea"===a||"input"===a.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var s=r.oninput||"oninput";n[s]||(n[s]=n[r.onchange],delete n[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(Re(t.prototype,"componentWillMount"),Re(t.prototype,"componentWillReceiveProps"),Re(t.prototype,"componentWillUpdate"),t.m=!0)}He&&He(e)};let Ne;function We(e){const[t,a]=be(!1),n=ke(null);return we(()=>{t&&n.current.focus({preventScroll:!0})},[t]),p("div",{class:$e},p("div",{class:"ld-expandable"},p("button",{onClick:()=>a(!t),class:"ld-expandable--toggle","aria-expanded":t},p("div",{class:"ld-expandable--icon"},t?Be:Fe),p("div",{class:"ld-expandable--toggle-content"},p("h2",null,e.toggle))),p("div",{ref:n,class:"ld-expandable--detail "+(t?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},e.detail)))}const $e=H(Ne||(Ne=(e=>e)`
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
`)),Fe=p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("polyline",{points:"9 6 15 12 9 18"})),Be=p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("polyline",{points:"6 9 12 15 18 9"})),Ve={url:new URL("./src/services/updatesService.js",document.baseURI).href};const Ge=new class extends N{async getUpdates(e){if(e||!this.updates)try{this.updates=await fetch(new URL("../../data/updates.json",Ve.url)).then(e=>e.json()),await this.updates}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:this.updates}}};const Ye=new class extends N{constructor(){super(),this.cache={}}async getCountry(e){var t;let{iso2:a}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{var n,r,o,s,i,l;this.cache[a]={};const e=await(await fetch("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="+a)).json();return this.cache[a]={status:"success",totalConfirmed:null!==(n=null===(r=e[0])||void 0===r?void 0:r.totalConfirmed)&&void 0!==n?n:0,totalDeaths:null!==(o=null===(s=e[0])||void 0===s?void 0:s.totalDeaths)&&void 0!==o?o:0,totalRecovered:null!==(i=null===(l=e[0])||void 0===l?void 0:l.totalRecovered)&&void 0!==i?i:0},this.cache[a]}catch{this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},Ze={url:new URL("./src/services/populationService.js",document.baseURI).href};const Je=new class extends N{constructor(){super(),this.cache={}}async getPopulation(e){var t;if(e||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",Ze.url)).then(e=>e.json()),await this.__population}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(t=this.__population)&&void 0!==t?t:0}}};let Ke,Qe,Xe,et=e=>e;const tt=H(Ke||(Ke=et`
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
`)),at=H(Qe||(Qe=et`
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
`)),nt=H(Xe||(Xe=et`
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
`));var rt=Object.freeze({__proto__:null,offlineStyles:at,loadingStyles:nt,default:class extends _{async componentWillMount(){this.setState({coronaData:await Ye.getCountry({iso2:this.props.iso2}),populationData:await Je.getPopulation()})}render(e,{coronaData:t,populationData:a}){var n,r,o,s,i,l,c;if(!navigator.onLine&&("success"!==(null==t?void 0:t.status)||"success"!==(null==a||null===(c=a.data)||void 0===c?void 0:c.status)))return p("div",{class:at},oe,p("b",null,"You are not connected to the internet"),p("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return t||a||!navigator.onLine?p("div",{class:tt},p("div",{class:"dialog"},p("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Improve this data")),p("hr",null),p("div",{class:"dialog"},p("h2",null,"Stats"),p("div",{class:"data-entry"},p("p",null,"Population:"),p("p",{class:"data-value"},null!==(n=null==a||null===(r=a.data)||void 0===r||null===(o=r[this.props.iso2])||void 0===o?void 0:o.Population)&&void 0!==n?n:"Error")),p("div",{class:"data-entry"},p("p",null,"Confirmed cases:"),p("p",{class:"data-value"},null!==(s=null==t?void 0:t.totalConfirmed)&&void 0!==s?s:"Error")),p("div",{class:"data-entry"},p("p",null,"Confirmed deaths:"),p("p",{class:"data-value"},null!==(i=null==t?void 0:t.totalDeaths)&&void 0!==i?i:"Error")),p("div",{class:"data-entry"},p("p",null,"Confirmed recoveries:"),p("p",{class:"data-value"},null!==(l=null==t?void 0:t.totalRecovered)&&void 0!==l?l:"Error"))),p("hr",null)):p("div",{class:nt},se)}}});let ot;const st={new_entry:"new entry",announcement:"announcement",rectification:"rectification",promoting_project:"project promotion",promoting_petition:"petition"};function it(){var e,t;const[a,n]=be(void 0);return we(async()=>{const e=await Ge.getUpdates();n(e)},[]),navigator.onLine||"success"===(null==a?void 0:a.status)?!a&&navigator.onLine?p("div",{class:nt},se):"failed"===a.status&&navigator.onLine?p("div",{style:"margin-top: 14px;"},"An error occured while fetching updates."):p("div",{class:lt},p("ul",null,null==a||null===(e=a.data)||void 0===e||null===(t=e.updates)||void 0===t?void 0:t.map(e=>p("li",null,p("div",{class:"ld-ticker--bar"},p("div",{class:"ld-ticker--dot-container"},p("div",{"aria-label":st[e.type.toLowerCase()],class:"ld-ticker--dot "+e.type.toLowerCase()})),p("div",{class:"ld-ticker--line"})),p("div",{class:"ld-ticker--content"},p("div",{class:"ld-ticker--title"},e.title),p("div",{class:"ld-ticker--content"},e.content),e.link?p("div",{class:"ld-ticker--link"},p("a",{target:"_blank",rel:"noopener noreferer",href:e.link},"Source")):"",p("div",{class:"ld-ticker--date"},e.date)))))):p("div",{class:at},oe,p("b",null,"You are not connected to the internet"),p("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}const lt=H(ot||(ot=(e=>e)`
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
`));function ct(e){let t;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(a=>{a&&(a.addEventListener("updatefound",()=>{t=a.installing,t.addEventListener("statechange",()=>{"installed"===t.state&&navigator.serviceWorker.controller&&e(!0)})}),a.waiting&&navigator.serviceWorker.controller&&(e(!0),t=a.waiting))})}function dt(e){const[t,a]=[...document.querySelectorAll("link[rel='icon']")],n=document.querySelector("link[rel='manifest']"),r=document.querySelector("meta[name='theme-color']");e?(n.href="/manifest-dark.json",t.href="src/assets/favicon-32x32-dark.png",a.href="src/assets/favicon-16x16-dark.png",r.setAttribute("content","#303136")):(n.href="/manifest.json",t.href="src/assets/favicon-32x32.png",a.href="src/assets/favicon-16x16.png",r.setAttribute("content","#ffffff")),document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(t),document.getElementsByTagName("head")[0].appendChild(a),document.getElementsByTagName("head")[0].appendChild(r)}let ut,pt;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),pt=!0,ut=e});class ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),ut=e,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))}),pt&&this.removeAttribute("hidden")}async _handlePrompt(e){e.preventDefault(),ut.prompt();const{outcome:t}=await ut.userChoice;"accepted"===t?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),ut=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",ht);class ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){this.addEventListener("click",this._postMessage.bind(this)),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)})}async _postMessage(e){e.preventDefault(),(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",ft);let _t;const gt=H(_t||(_t=(e=>e)`
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
`));function vt(){const[e,t]=be(!1),[a,n]=be(!1);return we(async()=>{if(ct(e=>{n(e)}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});if("true"===localStorage.getItem("geolocation"))return void t(!1);"granted"!==e.state&&t(!0)}},[]),p("div",{class:gt},p("button",{onClick:function(){document.getElementsByTagName("html")[0].classList.contains("dark")?(document.getElementsByTagName("html")[0].classList.remove("dark"),localStorage.setItem("darkmode","false"),dt(!1)):(document.getElementsByTagName("html")[0].classList.add("dark"),localStorage.setItem("darkmode","true"),dt(!0))},class:"ld-button"},"Toggle darkmode"),e?[" ",p("button",{onClick:function(){navigator.permissions&&navigator.geolocation.getCurrentPosition(()=>{t(!1)})},class:"ld-button"},"Allow geolocation")," "]:"",p("pwa-install-button",null,p("button",{class:"ld-button"},"Install app")),a?p("pwa-update-available",null,p("button",{class:"ld-button"},"Update app")):"")}const mt={info:X,settings:ee,updates:te,contribute:ae};class bt extends _{constructor(){super(),this.state={updateAvailable:!1,index:0},this.tabRefs={},this.__onFocusMove=this.__onFocusMove.bind(this),this.__onTabClick=this.__onTabClick.bind(this)}componentDidMount(){T("(min-width: 960px)",e=>{this.setState({isMobile:!e})}),$.addEventListener("close",e=>{e.detail.menuDialogClosed&&this.tabRefs["tab"+this.state.index].focus()}),ct(e=>{this.setState({updateAvailable:e})})}updateIndex(e,t){"settings"===t&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.setState({index:e}),this.tabRefs["tab"+e].focus(),this.state.isMobile||this.commit(t)}__onTabClick(e,t){this.updateIndex(e,t),this.commit(t)}commit(e){this.props.switchContent(e.toLowerCase())}__onFocusMove(e){const t=this.state.index;switch(e.keyCode){case 37:0!==t&&this.updateIndex(t-1,this.tabRefs["tab"+(t-1)].getAttribute("data-label").toLowerCase());break;case 39:t!==this.props.children.length-1&&this.updateIndex(t+1,this.tabRefs["tab"+(t+1)].getAttribute("data-label").toLowerCase())}}render(e,{index:t}){return p("ul",{class:"ld-menu--tabs",role:"tablist"},this.props.children.map((e,a)=>p("li",{role:"presentation",key:a},p("button",{role:"tab",ref:e=>this.tabRefs["tab"+a]=e,tabindex:t===a?"0":"-1","aria-selected":t===a?"true":"false","aria-controls":e.props.id,class:t===a?"ld-menu--active":"","data-label":e.props.id,onKeyUp:this.__onFocusMove,onClick:()=>this.__onTabClick(a,e.props.id)},"settings"===e.props.id&&this.state.updateAvailable?[" ",p("div",{class:"ld-menu--notification"})," "]:"",mt[e.props.id],p("p",{class:t===a?"ld-menu--active":""},e.props.id.toUpperCase())))))}}const wt=e=>{switch(e){case"info":return{title:"info",template:[p("h1",null,"Lockdown"),p("p",{class:"ld-alpha"},"Project lockdown is currently in alpha. Not all data may be available yet."),p("p",null,p("b",null,"Project Lockdown")," aims to map the different lockdowns around the world, offering the public a number of relevant metrics\n            in order to provide an overview of the restrictions applied worldwide. We hope this will help evaluate the seriousness of the\n            COVID-19 pandemic and help journalists and Human Rights defenders in their reporting and overseeing tasks."),p(We,{toggle:"About",detail:p("p",null,"While lockdowns generally help countries to flatten the curve, and prevent COVID-19 from spreading, countries with a\n                dictatorial nature may see this as an opportunity to increase their grasp over a country, and even potentially lead to\n                martial law type scenarios. Governments may unnecesarily prolong lockdowns or not stick to their announced end dates for\n                political gain. ",p("b",null,"Project Lockdown")," aims to visualize these situations.")}),p(We,{toggle:"Sources",detail:p("p",null,p("b",null,"Project Lockdown")," uses a variety of sources to compile all the information showcased. We make sure to only consider sources that are reliable and verifiable.\n                You can check all the ",p("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"sources")," employed here:",p("ul",{class:"ld-sources"},p("li",null,p("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.travel-advisory.info/"},"Travel-advisory API")),p("li",null,p("a",{rel:"noopener noreferrer",target:"_blank",href:"https://api.coronatracker.com/"},"Coronatracker API"),p("br",null),"Recognized by ",p("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.who.int/bulletin/online_first/COVID-19/en/"},"WHO")),p("li",null,"For reference data see the ",p("b",null,"Data Sources")," Tab."),p("li",null,"For country data see the ",p("b",null,"Find the Countries")," Tab by it's ISO Alpha 3 code.\n                    (Quick find through Global Tab)")),"If you find any errors, please help us and report it ",p("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Code-for-All/lockdown/issues"},"by creating an issue here"),".")}),p(We,{toggle:"Credits",detail:p("p",null,p("b",null,"Project Lockdown")," is a Civic Tech initiative from a number of organizations and individuals. You can find the",p("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"list of project members")," here\n                under the ",p("b",null,"Credits")," tab.")}),p(We,{toggle:"Data & Privacy",detail:[p("p",null,"We do not collect any information from our visitors."),p("p",null,"All information from any project member shown anywhere in the application is under their prior consent.")]})]};case"settings":return{title:"settings",template:[" ",p(vt,null)," "]};case"contribute":return{title:"contribute",template:[p("p",null,p("b",null,"Project Lockdown")," is made possible by the contribution of many individuals who are giving their time to make possible that everyone has access to the right information."),p("p",null,"Do you have any information you want to contribute? Please follow this link:"),p("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Submit data"),p("p",null,"Additionally, you can become part of the project by joining one of the following teams:",p("ul",null,p("li",null,"Editors"),p("li",null,"Devs"),p("li",null,"UI/UX"))),p("p",null,"Contact us via Telegram at:",p("br",null),p("a",{class:"ld-link"},"@ProjectLockdown"))]};case"updates":return{title:"updates",template:[" ",p(it,null)," "]};default:return{title:"",template:void 0}}};class kt extends _{constructor(e){super(e),this.state={activeItem:"info"},this.switchContent=this.switchContent.bind(this)}componentDidMount(){let e=0;T("(min-width: 960px)",t=>{this.setState({isMobile:!t}),t&&e>0&&(e++,this.props.close())})}switchContent(e){if("settings"===e&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.state.isMobile&&this.props.opened&&e===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.props.changeRoute(wt(e)),this.prevVal=e,this.setState({activeItem:e})}render(e,{activeItem:t,updateAvailable:a}){return p("main",{id:"main",class:"ld-menu"},p("div",{class:"ld-menu-nav"},p("nav",null,p(bt,{switchContent:this.switchContent},p("button",{id:"info"},"info"),p("button",{id:"settings"},"settings"),p("button",{id:"updates"},"updates"),p("button",{id:"contribute"},"contribute")))),p("div",{class:"ld-menu--content"},p("div",{class:"mb-only"},p("div",{class:"ld-menu--header"},p("h1",null,t))),wt(t).template))}}class yt extends _{async componentWillMount(){const e=await this.props.component(),t=e.default||e;this.setState({Component:t})}render({props:e},{Component:t}){return p(t,e)}}var xt="object"==typeof global&&global&&global.Object===Object&&global,Ct="object"==typeof self&&self&&self.Object===Object&&self,At=xt||Ct||Function("return this")(),St=At.Symbol,Lt=Object.prototype,Et=Lt.hasOwnProperty,Pt=Lt.toString,jt=St?St.toStringTag:void 0;var Mt=Object.prototype.toString;var Dt=St?St.toStringTag:void 0;function Tt(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Dt&&Dt in Object(e)?function(e){var t=Et.call(e,jt),a=e[jt];try{e[jt]=void 0;var n=!0}catch(e){}var r=Pt.call(e);return n&&(t?e[jt]=a:delete e[jt]),r}(e):function(e){return Mt.call(e)}(e)}function zt(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var It=/^\s+|\s+$/g,Ut=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Rt=/^0o[0-7]+$/i,Ot=parseInt;function Ht(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==Tt(e)}(e))return NaN;if(zt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=zt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(It,"");var a=qt.test(e);return a||Rt.test(e)?Ot(e.slice(2),a?2:8):Ut.test(e)?NaN:+e}var Nt=function(){return At.Date.now()},Wt=Math.max,$t=Math.min;let Ft;const Bt=function(e,t,a){var n,r,o,s,i,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var a=n,o=r;return n=r=void 0,c=t,s=e.apply(o,a)}function f(e){return c=e,i=setTimeout(g,t),d?h(e):s}function _(e){var a=e-l;return void 0===l||a>=t||a<0||u&&e-c>=o}function g(){var e=Nt();if(_(e))return v(e);i=setTimeout(g,function(e){var a=t-(e-l);return u?$t(a,o-(e-c)):a}(e))}function v(e){return i=void 0,p&&n?h(e):(n=r=void 0,s)}function m(){var e=Nt(),a=_(e);if(n=arguments,r=this,l=e,a){if(void 0===i)return f(l);if(u)return clearTimeout(i),i=setTimeout(g,t),h(l)}return void 0===i&&(i=setTimeout(g,t)),s}return t=Ht(t)||0,zt(a)&&(d=!!a.leading,o=(u="maxWait"in a)?Wt(Ht(a.maxWait)||0,t):o,p="trailing"in a?!!a.trailing:p),m.cancel=function(){void 0!==i&&clearTimeout(i),c=0,n=l=r=i=void 0},m.flush=function(){return void 0===i?s:v(Nt())},m}(()=>{let e={menuDialogClosed:!1,countryDialogClosed:!1};const t=new URLSearchParams(location.search);t.has("country")||t.has("iso2")?e.countryDialogClosed=!0:e.menuDialogClosed=!0,$.close(e)},10,{leading:!0,trailing:!1}),Vt=H(Ft||(Ft=(e=>e)`
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
`));("requestIdleCallback"in window?window.requestIdleCallback:e=>setTimeout(e,1e3))(()=>{import("./51eaecd8.js"),Promise.resolve().then((function(){return rt}))}),console.log("🌐 Project Lockdown, version: 0.0.0"),window.addEventListener("appinstalled",()=>{window.location.reload()}),T("(prefers-color-scheme: dark)",e=>{const t=localStorage.getItem("darkmode");null!==t?"true"===t&&(document.documentElement.classList.add("dark"),dt(!0)):e?(document.documentElement.classList.add("dark"),dt(!0)):(document.documentElement.classList.remove("dark"),dt(!1))}),function(e,a,n){var r,o,c;t.__&&t.__(e,a),o=(r=n===s)?null:n&&n.__k||a.__k,e=p(f,null,[e]),c=[],A(a,(r?a:n||a).__k=e,o||i,i,void 0!==a.ownerSVGElement,n&&!r?[n]:o?null:l.slice.call(a.childNodes),c,n||i,r),S(c,e)}([" ",p(class extends _{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""}},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__showDialog=this.__showDialog.bind(this),this.__showDialogRoute=this.__showDialogRoute.bind(this)}async componentDidMount(){this.__onPathChanged(),T("(min-width: 960px)",e=>{this.setState({isMobile:!e})})}componentWillMount(){W.addEventListener("path-changed",this.__onPathChanged)}componentWillUnmount(){W.removeEventListener("path-changed",this.__onPathChanged)}render(){return[p(ce,null),p("div",{class:Vt},p(Q,null)),p(kt,{opened:this.state.dialog.opened,changeRoute:this.__showDialogRoute,close:this.__closeDialog}),p(G,null),this.state.dialog.opened?p(yt,{component:()=>import("./51eaecd8.js"),props:{...this.state.dialog,onClose:this.__closeDialog}}):""]}__showDialogRoute({template:e,title:t}){const a=W.url.searchParams.get("country");a?W.setPath(`${t}?country=${a}`):W.setPath(t),this.state.isMobile&&(W.setSearchParam("country",null),this.__showDialog({template:e,title:t}))}__onPathChanged(){const e=W.url.searchParams.get("country"),t=W.url.searchParams.get("iso2");e&&t&&this.setState({dialog:{opened:!0,template:[" ",p(yt,{component:()=>Promise.resolve().then((function(){return rt})),props:{country:e,iso2:t}})," "],title:e}})}__showDialog({template:e,title:t}){this.setState({dialog:{opened:!0,template:e,title:t}})}__closeCountryInfo(){W.setSearchParam("country",void 0),W.setSearchParam("iso2",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),Bt(),this.__closeCountryInfo()}},null)," "],document.getElementById("app"));export{ne as a,H as c,p as h,_ as m,W as r};
