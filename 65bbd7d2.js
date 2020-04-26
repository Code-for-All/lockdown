var t,a,n,r,o,i,s={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function d(t,e){for(var a in e)t[a]=e[a];return t}function u(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,a){var n,r=arguments,o={};for(n in e)"key"!==n&&"ref"!==n&&(o[n]=e[n]);if(arguments.length>3)for(a=[a],n=3;n<arguments.length;n++)a.push(r[n]);if(null!=a&&(o.children=a),"function"==typeof t&&null!=t.defaultProps)for(n in t.defaultProps)void 0===o[n]&&(o[n]=t.defaultProps[n]);return p(t,o,e&&e.key,e&&e.ref,null)}function p(e,a,n,r,o){var i={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),t.vnode&&t.vnode(i),i}function f(t){return t.children}function g(t,e){this.props=t,this.context=e}function m(t,e){if(null==e)return t.__?m(t.__,t.__.__k.indexOf(t)+1):null;for(var a;e<t.__k.length;e++)if(null!=(a=t.__k[e])&&null!=a.__e)return a.__e;return"function"==typeof t.type?m(t):null}function b(t){var e,a;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(a=t.__k[e])&&null!=a.__e){t.__e=t.__c.base=a.__e;break}return b(t)}}function v(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(w)}function w(){for(var t;n=a.length;)t=a.sort((function(t,e){return t.__v.__b-e.__v.__b})),a=[],t.some((function(t){var e,a,n,r,o,i,s;t.__d&&(i=(o=(e=t).__v).__e,(s=e.__P)&&(a=[],(n=d({},o)).__v=n,r=M(s,o,n,e.__n,void 0!==s.ownerSVGElement,null,a,null==i?m(o):i),S(a,o),r!=i&&b(o)))}))}function _(t,e,a,n,r,o,i,c,d){var h,p,f,g,b,v,w,_=a&&a.__k||l,x=_.length;if(c==s&&(c=null!=o?o[0]:x?m(a,0):null),h=0,e.__k=y(e.__k,(function(a){if(null!=a){if(a.__=e,a.__b=e.__b+1,null===(f=_[h])||f&&a.key==f.key&&a.type===f.type)_[h]=void 0;else for(p=0;p<x;p++){if((f=_[p])&&a.key==f.key&&a.type===f.type){_[p]=void 0;break}f=null}if(g=M(t,a,f=f||s,n,r,o,i,c,d),(p=a.ref)&&f.ref!=p&&(w||(w=[]),f.ref&&w.push(f.ref,null,a),w.push(p,a.__c||g,a)),null!=g){var l;if(null==v&&(v=g),void 0!==a.__d)l=a.__d,a.__d=void 0;else if(o==f||g!=c||null==g.parentNode){t:if(null==c||c.parentNode!==t)t.appendChild(g),l=null;else{for(b=c,p=0;(b=b.nextSibling)&&p<x;p+=2)if(b==g)break t;t.insertBefore(g,c),l=c}"option"==e.type&&(t.value="")}c=void 0!==l?l:g.nextSibling,"function"==typeof e.type&&(e.__d=c)}else c&&f.__e==c&&c.parentNode!=t&&(c=m(f))}return h++,a})),e.__e=v,null!=o&&"function"!=typeof e.type)for(h=o.length;h--;)null!=o[h]&&u(o[h]);for(h=x;h--;)null!=_[h]&&T(_[h],_[h]);if(w)for(h=0;h<w.length;h++)P(w[h],w[++h],w[++h])}function y(t,e,a){if(null==a&&(a=[]),null==t||"boolean"==typeof t)e&&a.push(e(null));else if(Array.isArray(t))for(var n=0;n<t.length;n++)y(t[n],e,a);else a.push(e?e("string"==typeof t||"number"==typeof t?p(null,t,null,null,t):null!=t.__e||null!=t.__c?p(t.type,t.props,t.key,null,t.__v):t):t);return a}function x(t,e,a){"-"===e[0]?t.setProperty(e,a):t[e]="number"==typeof a&&!1===c.test(e)?a+"px":null==a?"":a}function k(t,e,a,n,r){var o,i,s,l,c;if(r?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(o=t.style,"string"==typeof a)o.cssText=a;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(l in n)a&&l in a||x(o,l,"");if(a)for(c in a)n&&a[c]===n[c]||x(o,c,a[c])}else"o"===e[0]&&"n"===e[1]?(i=e!==(e=e.replace(/Capture$/,"")),s=e.toLowerCase(),e=(s in t?s:e).slice(2),a?(n||t.addEventListener(e,C,i),(t.l||(t.l={}))[e]=a):t.removeEventListener(e,C,i)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!r&&e in t?t[e]=null==a?"":a:"function"!=typeof a&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==a||!1===a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),a):null==a||!1===a&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,a))}function C(e){this.l[e.type](t.event?t.event(e):e)}function M(e,a,n,r,o,i,s,l,c){var u,h,p,m,b,v,w,y,x,k,C=a.type;if(void 0!==a.constructor)return null;(u=t.__b)&&u(a);try{t:if("function"==typeof C){if(y=a.props,x=(u=C.contextType)&&r[u.__c],k=u?x?x.props.value:u.__:r,n.__c?w=(h=a.__c=n.__c).__=h.__E:("prototype"in C&&C.prototype.render?a.__c=h=new C(y,k):(a.__c=h=new g(y,k),h.constructor=C,h.render=L),x&&x.sub(h),h.props=y,h.state||(h.state={}),h.context=k,h.__n=r,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=C.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,C.getDerivedStateFromProps(y,h.__s))),m=h.props,b=h.state,p)null==C.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==C.getDerivedStateFromProps&&y!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(y,k),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(y,h.__s,k)||a.__v===n.__v&&!h.__){for(h.props=y,h.state=h.__s,a.__v!==n.__v&&(h.__d=!1),h.__v=a,a.__e=n.__e,a.__k=n.__k,h.__h.length&&s.push(h),u=0;u<a.__k.length;u++)a.__k[u]&&(a.__k[u].__=a);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(y,h.__s,k),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(m,b,v)}))}h.context=k,h.props=y,h.state=h.__s,(u=t.__r)&&u(a),h.__d=!1,h.__v=a,h.__P=e,u=h.render(h.props,h.state,h.context),a.__k=null!=u&&u.type==f&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(r=d(d({},r),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(v=h.getSnapshotBeforeUpdate(m,b)),_(e,a,n,r,o,i,s,l,c),h.base=a.__e,h.__h.length&&s.push(h),w&&(h.__E=h.__=null),h.__e=!1}else null==i&&a.__v===n.__v?(a.__k=n.__k,a.__e=n.__e):a.__e=D(n.__e,a,n,r,o,i,s,c);(u=t.diffed)&&u(a)}catch(e){a.__v=null,t.__e(e,a,n)}return a.__e}function S(e,a){t.__c&&t.__c(a,e),e.some((function(a){try{e=a.__h,a.__h=[],e.some((function(t){t.call(a)}))}catch(e){t.__e(e,a.__v)}}))}function D(t,e,a,n,r,o,i,c){var d,u,h,p,f,g=a.props,m=e.props;if(r="svg"===e.type||r,null!=o)for(d=0;d<o.length;d++)if(null!=(u=o[d])&&((null===e.type?3===u.nodeType:u.localName===e.type)||t==u)){t=u,o[d]=null;break}if(null==t){if(null===e.type)return document.createTextNode(m);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,m.is&&{is:m.is}),o=null,c=!1}if(null===e.type)g!==m&&t.data!=m&&(t.data=m);else{if(null!=o&&(o=l.slice.call(t.childNodes)),h=(g=a.props||s).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!c){if(g===s)for(g={},f=0;f<t.attributes.length;f++)g[t.attributes[f].name]=t.attributes[f].value;(p||h)&&(p&&h&&p.__html==h.__html||(t.innerHTML=p&&p.__html||""))}(function(t,e,a,n,r){var o;for(o in a)"children"===o||"key"===o||o in e||k(t,o,null,a[o],n);for(o in e)r&&"function"!=typeof e[o]||"children"===o||"key"===o||"value"===o||"checked"===o||a[o]===e[o]||k(t,o,e[o],a[o],n)})(t,m,g,r,c),p?e.__k=[]:(e.__k=e.props.children,_(t,e,a,n,"foreignObject"!==e.type&&r,o,i,s,c)),c||("value"in m&&void 0!==(d=m.value)&&d!==t.value&&k(t,"value",d,g.value,!1),"checked"in m&&void 0!==(d=m.checked)&&d!==t.checked&&k(t,"checked",d,g.checked,!1))}return t}function P(e,a,n){try{"function"==typeof e?e(a):e.current=a}catch(e){t.__e(e,n)}}function T(e,a,n){var r,o,i;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,a)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,a)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&T(r[i],a,n);null!=o&&u(o)}function L(t,e,a){return this.constructor(t,a)}t={__e:function(t,e){for(var a,n;e=e.__;)if((a=e.__c)&&!a.__)try{if(a.constructor&&null!=a.constructor.getDerivedStateFromError&&(n=!0,a.setState(a.constructor.getDerivedStateFromError(t))),null!=a.componentDidCatch&&(n=!0,a.componentDidCatch(t)),n)return v(a.__E=a)}catch(e){t=e}throw t}},g.prototype.setState=function(t,e){var a;a=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof t&&(t=t(a,this.props)),t&&d(a,t),null!=t&&this.__v&&(e&&this.__h.push(e),v(this))},g.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),v(this))},g.prototype.render=f,a=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=s;var z=function t(e,a,n,r){var o;a[0]=0;for(var i=1;i<a.length;i++){var s=a[i++],l=a[i]?(a[0]|=s?1:2,n[a[i++]]):a[++i];3===s?r[0]=l:4===s?r[1]=Object.assign(r[1]||{},l):5===s?(r[1]=r[1]||{})[a[++i]]=l:6===s?r[1][a[++i]]+=l+"":s?(o=e.apply(l,t(e,l,n,["",null])),r.push(o),l[0]?a[0]|=2:(a[i-2]=0,a[i]=o)):r.push(l)}return r},A=new Map;(function(t){var e=A.get(this);return e||(e=new Map,A.set(this,e)),(e=z(this,e.get(t)||(e.set(t,e=function(t){for(var e,a,n=1,r="",o="",i=[0],s=function(t){1===n&&(t||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,t,r):3===n&&(t||r)?(i.push(3,t,r),n=2):2===n&&"..."===r&&t?i.push(4,t,0):2===n&&r&&!t?i.push(5,0,!0,r):n>=5&&((r||!t&&5===n)&&(i.push(n,0,r,a),n=6),t&&(i.push(n,t,0,a),n=6)),r=""},l=0;l<t.length;l++){l&&(1===n&&s(),s(l));for(var c=0;c<t[l].length;c++)e=t[l][c],1===n?"<"===e?(s(),i=[i],n=3):r+=e:4===n?"--"===r&&">"===e?(n=1,r=""):r=e+r[0]:o?e===o?o="":r+=e:'"'===e||"'"===e?o=e:">"===e?(s(),n=1):n&&("="===e?(n=5,a=r,r=""):"/"===e&&(n<5||">"===t[l][c+1])?(s(),3===n&&(i=i[0]),n=i,(i=i[0]).push(2,0,n),n=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(s(),n=2):r+=e),3===n&&"!--"===r&&(n=4,i=i[0])}return s(),i}(t)),e),arguments,[])).length>1?e:e[0]}).bind(h);const E=(t,e)=>{let a=window.matchMedia(t);a.addListener(t=>e(t.matches)),e(a.matches)};var U=t=>{var a=/^\0+/g,n=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,i=/([,: ])(transform)/g,s=/,+\s*(?![^(]*[)])/g,l=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,d=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,h=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,m=/:(read-only)/g,b=/\s+(?=[{\];=:>])/g,v=/([[}=:>])\s+/g,w=/(\{[^{]+?);(?=\})/g,_=/\s{2,}/g,y=/([^\(])(:+) */g,x=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,M=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,P=/([^-])(image-set\()/,T="-webkit-",L="-moz-",z="-ms-",A=59,E=125,U=123,j=40,H=41,W=10,q=13,O=32,N=45,R=42,I=44,F=58,B=47,Y=1,V=1,$=0,Q=1,G=1,X=1,J=0,Z=0,K=0,tt=[],et=[],at=0,nt=null,rt=0,ot=1,it="",st="",lt="";function ct(t,e,r,o,i){for(var s,l,d=0,u=0,h=0,p=0,b=0,v=0,w=0,_=0,x=0,C=0,M=0,S=0,D=0,P=0,L=0,z=0,J=0,et=0,nt=0,ut=r.length,bt=ut-1,vt="",wt="",_t="",yt="",xt="",kt="";L<ut;){if(w=r.charCodeAt(L),L===bt&&u+p+h+d!==0&&(0!==u&&(w=u===B?W:B),p=h=d=0,ut++,bt++),u+p+h+d===0){if(L===bt&&(z>0&&(wt=wt.replace(n,"")),wt.trim().length>0)){switch(w){case O:case 9:case A:case q:case W:break;default:wt+=r.charAt(L)}w=A}if(1===J)switch(w){case U:case E:case A:case 34:case 39:case j:case H:case I:J=0;case 9:case q:case W:case O:break;default:for(J=0,nt=L,b=w,L--,w=A;nt<ut;)switch(r.charCodeAt(nt++)){case W:case q:case A:++L,w=b,nt=ut;break;case F:z>0&&(++L,w=b);case U:nt=ut}}switch(w){case U:for(b=(wt=wt.trim()).charCodeAt(0),M=1,nt=++L;L<ut;){switch(w=r.charCodeAt(L)){case U:M++;break;case E:M--;break;case B:switch(v=r.charCodeAt(L+1)){case R:case B:L=mt(v,L,bt,r)}break;case 91:w++;case j:w++;case 34:case 39:for(;L++<bt&&r.charCodeAt(L)!==w;);}if(0===M)break;L++}switch(_t=r.substring(nt,L),0===b&&(b=(wt=wt.replace(a,"").trim()).charCodeAt(0)),b){case 64:switch(z>0&&(wt=wt.replace(n,"")),v=wt.charCodeAt(1)){case 100:case 109:case 115:case N:s=e;break;default:s=tt}if(nt=(_t=ct(e,s,_t,v,i+1)).length,K>0&&0===nt&&(nt=wt.length),at>0&&(l=gt(3,_t,s=dt(tt,wt,et),e,V,Y,nt,v,i,o),wt=s.join(""),void 0!==l&&0===(nt=(_t=l.trim()).length)&&(v=0,_t="")),nt>0)switch(v){case 115:wt=wt.replace(k,ft);case 100:case 109:case N:_t=wt+"{"+_t+"}";break;case 107:_t=(wt=wt.replace(f,"$1 $2"+(ot>0?it:"")))+"{"+_t+"}",_t=1===G||2===G&&pt("@"+_t,3)?"@"+T+_t+"@"+_t:"@"+_t;break;default:_t=wt+_t,112===o&&(yt+=_t,_t="")}else _t="";break;default:_t=ct(e,dt(e,wt,et),_t,o,i+1)}xt+=_t,S=0,J=0,P=0,z=0,et=0,D=0,wt="",_t="",w=r.charCodeAt(++L);break;case E:case A:if((nt=(wt=(z>0?wt.replace(n,""):wt).trim()).length)>1)switch(0===P&&((b=wt.charCodeAt(0))===N||b>96&&b<123)&&(nt=(wt=wt.replace(" ",":")).length),at>0&&void 0!==(l=gt(1,wt,e,t,V,Y,yt.length,o,i,o))&&0===(nt=(wt=l.trim()).length)&&(wt="\0\0"),b=wt.charCodeAt(0),v=wt.charCodeAt(1),b){case 0:break;case 64:if(105===v||99===v){kt+=wt+r.charAt(L);break}default:if(wt.charCodeAt(nt-1)===F)break;yt+=ht(wt,b,v,wt.charCodeAt(2))}S=0,J=0,P=0,z=0,et=0,wt="",w=r.charCodeAt(++L)}}switch(w){case q:case W:if(u+p+h+d+Z===0)switch(C){case H:case 39:case 34:case 64:case 126:case 62:case R:case 43:case B:case N:case F:case I:case A:case U:case E:break;default:P>0&&(J=1)}u===B?u=0:Q+S===0&&107!==o&&wt.length>0&&(z=1,wt+="\0"),at*rt>0&&gt(0,wt,e,t,V,Y,yt.length,o,i,o),Y=1,V++;break;case A:case E:if(u+p+h+d===0){Y++;break}default:switch(Y++,vt=r.charAt(L),w){case 9:case O:if(p+d+u===0)switch(_){case I:case F:case 9:case O:vt="";break;default:w!==O&&(vt=" ")}break;case 0:vt="\\0";break;case 12:vt="\\f";break;case 11:vt="\\v";break;case 38:p+u+d===0&&Q>0&&(et=1,z=1,vt="\f"+vt);break;case 108:if(p+u+d+$===0&&P>0)switch(L-P){case 2:112===_&&r.charCodeAt(L-3)===F&&($=_);case 8:111===x&&($=x)}break;case F:p+u+d===0&&(P=L);break;case I:u+h+p+d===0&&(z=1,vt+="\r");break;case 34:case 39:0===u&&(p=p===w?0:0===p?w:p);break;case 91:p+u+h===0&&d++;break;case 93:p+u+h===0&&d--;break;case H:p+u+d===0&&h--;break;case j:if(p+u+d===0){if(0===S)switch(2*_+3*x){case 533:break;default:M=0,S=1}h++}break;case 64:u+h+p+d+P+D===0&&(D=1);break;case R:case B:if(p+d+h>0)break;switch(u){case 0:switch(2*w+3*r.charCodeAt(L+1)){case 235:u=B;break;case 220:nt=L,u=R}break;case R:w===B&&_===R&&nt+2!==L&&(33===r.charCodeAt(nt+2)&&(yt+=r.substring(nt,L+1)),vt="",u=0)}}if(0===u){if(Q+p+d+D===0&&107!==o&&w!==A)switch(w){case I:case 126:case 62:case 43:case H:case j:if(0===S){switch(_){case 9:case O:case W:case q:vt+="\0";break;default:vt="\0"+vt+(w===I?"":"\0")}z=1}else switch(w){case j:P+7===L&&108===_&&(P=0),S=++M;break;case H:0==(S=--M)&&(z=1,vt+="\0")}break;case 9:case O:switch(_){case 0:case U:case E:case A:case I:case 12:case 9:case O:case W:case q:break;default:0===S&&(z=1,vt+="\0")}}wt+=vt,w!==O&&9!==w&&(C=w)}}x=_,_=w,L++}if(nt=yt.length,K>0&&0===nt&&0===xt.length&&0===e[0].length==0&&(109!==o||1===e.length&&(Q>0?st:lt)===e[0])&&(nt=e.join(",").length+2),nt>0){if(s=0===Q&&107!==o?function(t){for(var e,a,r=0,o=t.length,i=Array(o);r<o;++r){for(var s=t[r].split(c),l="",d=0,u=0,h=0,p=0,f=s.length;d<f;++d)if(!(0===(u=(a=s[d]).length)&&f>1)){if(h=l.charCodeAt(l.length-1),p=a.charCodeAt(0),e="",0!==d)switch(h){case R:case 126:case 62:case 43:case O:case j:break;default:e=" "}switch(p){case 38:a=e+st;case 126:case 62:case 43:case O:case H:case j:break;case 91:a=e+a+st;break;case F:switch(2*a.charCodeAt(1)+3*a.charCodeAt(2)){case 530:if(X>0){a=e+a.substring(8,u-1);break}default:(d<1||s[d-1].length<1)&&(a=e+st+a)}break;case I:e="";default:a=u>1&&a.indexOf(":")>0?e+a.replace(y,"$1"+st+"$2"):e+a+st}l+=a}i[r]=l.replace(n,"").trim()}return i}(e):e,at>0&&void 0!==(l=gt(2,yt,s,t,V,Y,nt,o,i,o))&&0===(yt=l).length)return kt+yt+xt;if(yt=s.join(",")+"{"+yt+"}",G*$!=0){switch(2!==G||pt(yt,2)||($=0),$){case 111:yt=yt.replace(m,":-moz-$1")+yt;break;case 112:yt=yt.replace(g,"::"+T+"input-$1")+yt.replace(g,"::-moz-$1")+yt.replace(g,":-ms-input-$1")+yt}$=0}}return kt+yt+xt}function dt(t,e,a){var n=e.trim().split(d),r=n,o=n.length,i=t.length;switch(i){case 0:case 1:for(var s=0,l=0===i?"":t[0]+" ";s<o;++s)r[s]=ut(l,r[s],a,i).trim();break;default:s=0;var c=0;for(r=[];s<o;++s)for(var u=0;u<i;++u)r[c++]=ut(t[u]+" ",n[s],a,i).trim()}return r}function ut(t,e,a,n){var r=e,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(Q+n){case 0:case 1:if(0===t.trim().length)break;default:return r.replace(u,"$1"+t.trim())}break;case F:switch(r.charCodeAt(1)){case 103:if(X>0&&Q>0)return r.replace(h,"$1").replace(u,"$1"+lt);break;default:return t.trim()+r.replace(u,"$1"+t.trim())}default:if(a*Q>0&&r.indexOf("\f")>0)return r.replace(u,(t.charCodeAt(0)===F?"":"$1")+t.trim())}return t+r}function ht(t,e,a,n){var c,d=0,u=t+";",h=2*e+3*a+4*n;if(944===h)return function(t){var e=t.length,a=t.indexOf(":",9)+1,n=t.substring(0,a).trim(),r=t.substring(a,e-1).trim();switch(t.charCodeAt(9)*ot){case 0:break;case N:if(110!==t.charCodeAt(10))break;default:var o=r.split((r="",s)),i=0;for(a=0,e=o.length;i<e;a=0,++i){for(var c=o[i],d=c.split(l);c=d[a];){var u=c.charCodeAt(0);if(1===ot&&(u>64&&u<90||u>96&&u<123||95===u||u===N&&c.charCodeAt(1)!==N))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=it}}d[a++]=c}r+=(0===i?"":",")+d.join(" ")}}return r=n+r+";",1===G||2===G&&pt(r,1)?T+r+r:r}(u);if(0===G||2===G&&!pt(u,1))return u;switch(h){case 1015:return 97===u.charCodeAt(10)?T+u+u:u;case 951:return 116===u.charCodeAt(3)?T+u+u:u;case 963:return 110===u.charCodeAt(5)?T+u+u:u;case 1009:if(100!==u.charCodeAt(4))break;case 969:case 942:return T+u+u;case 978:return T+u+L+u+u;case 1019:case 983:return T+u+L+u+z+u+u;case 883:return u.charCodeAt(8)===N?T+u+u:u.indexOf("image-set(",11)>0?u.replace(P,"$1"+T+"$2")+u:u;case 932:if(u.charCodeAt(4)===N)switch(u.charCodeAt(5)){case 103:return T+"box-"+u.replace("-grow","")+T+u+z+u.replace("grow","positive")+u;case 115:return T+u+z+u.replace("shrink","negative")+u;case 98:return T+u+z+u.replace("basis","preferred-size")+u}return T+u+z+u+u;case 964:return T+u+z+"flex-"+u+u;case 1023:if(99!==u.charCodeAt(8))break;return c=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),T+"box-pack"+c+T+u+z+"flex-pack"+c+u;case 1005:return o.test(u)?u.replace(r,":"+T)+u.replace(r,":"+L)+u:u;case 1e3:switch(d=(c=u.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(d)){case 226:c=u.replace(x,"tb");break;case 232:c=u.replace(x,"tb-rl");break;case 220:c=u.replace(x,"lr");break;default:return u}return T+u+z+c+u;case 1017:if(-1===u.indexOf("sticky",9))return u;case 975:switch(d=(u=t).length-10,h=(c=(33===u.charCodeAt(d)?u.substring(0,d):u).substring(t.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:u=u.replace(c,T+c)+";"+u;break;case 207:case 102:u=u.replace(c,T+(h>102?"inline-":"")+"box")+";"+u.replace(c,T+c)+";"+u.replace(c,z+c+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===N)switch(u.charCodeAt(6)){case 105:return c=u.replace("-items",""),T+u+T+"box-"+c+z+"flex-"+c+u;case 115:return T+u+z+"flex-item-"+u.replace(M,"")+u;default:return T+u+z+"flex-line-pack"+u.replace("align-content","").replace(M,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==N||122===u.charCodeAt(4))break;case 931:case 953:if(!0===D.test(t))return 115===(c=t.substring(t.indexOf(":")+1)).charCodeAt(0)?ht(t.replace("stretch","fill-available"),e,a,n).replace(":fill-available",":stretch"):u.replace(c,T+c)+u.replace(c,L+c.replace("fill-",""))+u;break;case 962:if(u=T+u+(102===u.charCodeAt(5)?z+u:"")+u,a+n===211&&105===u.charCodeAt(13)&&u.indexOf("transform",10)>0)return u.substring(0,u.indexOf(";",27)+1).replace(i,"$1"+T+"$2")+u}return u}function pt(t,e){var a=t.indexOf(1===e?":":"{"),n=t.substring(0,3!==e?a:10),r=t.substring(a+1,t.length-1);return nt(2!==e?n:n.replace(S,"$1"),r,e)}function ft(t,e){var a=ht(e,e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2));return a!==e+";"?a.replace(C," or ($1)").substring(4):"("+e+")"}function gt(t,e,a,n,r,o,i,s,l,c){for(var d,u=0,h=e;u<at;++u)switch(d=et[u].call(vt,t,h,a,n,r,o,i,s,l,c)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==e)return h}function mt(t,e,a,n){for(var r=e+1;r<a;++r)switch(n.charCodeAt(r)){case B:if(t===R&&n.charCodeAt(r-1)===R&&e+2!==r)return r+1;break;case W:if(t===B)return r+1}return r}function bt(t){for(var e in t){var a=t[e];switch(e){case"keyframe":ot=0|a;break;case"global":X=0|a;break;case"cascade":Q=0|a;break;case"compress":J=0|a;break;case"semicolon":Z=0|a;break;case"preserve":K=0|a;break;case"prefix":nt=null,a?"function"!=typeof a?G=1:(G=2,nt=a):G=0}}return bt}function vt(t,a){if(void 0!==this&&this.constructor===vt)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),ot>0&&(it=r.replace(p,91===o?"":"-")),o=1,1===Q?lt=r:st=r;var i,s=[lt];at>0&&void 0!==(i=gt(-1,a,s,s,V,Y,0,0,0,0))&&"string"==typeof i&&(a=i);var l=ct(tt,s,a,0,0);return at>0&&void 0!==(i=gt(-2,l,s,s,V,Y,l.length,0,0,0))&&"string"!=typeof(l=i)&&(o=0),it="",lt="",st="",$=0,V=1,Y=1,J*o==0?l:l.replace(n,"").replace(b,"").replace(v,"$1").replace(w,"$1").replace(_," ")}return vt.use=function t(e){switch(e){case void 0:case null:at=et.length=0;break;default:if("function"==typeof e)et[at++]=e;else if("object"==typeof e)for(var a=0,n=e.length;a<n;++a)t(e[a]);else rt=0|!!e}return t},vt.set=bt,void 0!==t&&bt(t),vt};const j={},H=document.createElement("style");document.head.appendChild(H);const W=t=>`.${t}{display:none}`,q=t=>/^(\/|https?:\/\/)/.test(t.trim()),O=t=>e=>a=>{H.innerHTML+=(j[t]={hash:e,rules:U()("."+e,a)}).rules,q(t)&&(t=>{H.innerHTML=H.innerHTML.replace(W(t),"")})(e)};var N=(t,...e)=>{const a=t[0].startsWith("/")?t[0]:t.reduce((t,a,n)=>t+(a+(null==e[n]?"":e[n])),"");if(j[a])return j[a].hash;const n="csz-"+Math.random().toString(36).replace("0.",""),r=O(a)(n);return q(a)?((t=>{H.innerHTML=W(t)+H.innerHTML})(n),fetch(a).then(t=>t.text()).then(r)):r(a),n};function R(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function I(t){R(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function F(t){R(1,arguments);var e=I(t);return!isNaN(e)}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return function(e){var a=e||{},n=a.width?String(a.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var V={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},$={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Q(t){return function(e,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=r.width?String(r.width):o;n=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,l=r.width?String(r.width):t.defaultWidth;n=t.values[l]||t.values[s]}return n[t.argumentCallback?t.argumentCallback(e):e]}}function G(t){return function(e,a){var n=String(e),r=a||{},o=r.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],s=n.match(i);if(!s)return null;var l,c=s[0],d=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}(d,(function(t){return t.test(c)})):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}(d,(function(t){return t.test(c)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:n.slice(c.length)}}}var X,J={code:"en-US",formatDistance:function(t,e,a){var n;return a=a||{},n="string"==typeof B[t]?B[t]:1===e?B[t].one:B[t].other.replace("{{count}}",e),a.addSuffix?a.comparison>0?"in "+n:n+" ago":n},formatLong:V,formatRelative:function(t,e,a,n){return $[t]},localize:{ordinalNumber:function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:Q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(X={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var a=String(t),n=e||{},r=a.match(X.matchPattern);if(!r)return null;var o=r[0],i=a.match(X.parsePattern);if(!i)return null;var s=X.valueCallback?X.valueCallback(i[0]):i[0];return{value:s=n.valueCallback?n.valueCallback(s):s,rest:a.slice(o.length)}}),era:G({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:G({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:G({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:G({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Z(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function K(t,e){R(2,arguments);var a=I(t).getTime(),n=Z(e);return new Date(a+n)}function tt(t,e){R(2,arguments);var a=Z(e);return K(t,-a)}function et(t,e){for(var a=t<0?"-":"",n=Math.abs(t).toString();n.length<e;)n="0"+n;return a+n}var at=function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return et("yy"===e?n%100:n,e.length)},nt=function(t,e){var a=t.getUTCMonth();return"M"===e?String(a+1):et(a+1,2)},rt=function(t,e){return et(t.getUTCDate(),e.length)},ot=function(t,e){return et(t.getUTCHours()%12||12,e.length)},it=function(t,e){return et(t.getUTCHours(),e.length)},st=function(t,e){return et(t.getUTCMinutes(),e.length)},lt=function(t,e){return et(t.getUTCSeconds(),e.length)},ct=function(t,e){var a=e.length,n=t.getUTCMilliseconds();return et(Math.floor(n*Math.pow(10,a-3)),e.length)};function dt(t){R(1,arguments);var e=1,a=I(t),n=a.getUTCDay(),r=(n<e?7:0)+n-e;return a.setUTCDate(a.getUTCDate()-r),a.setUTCHours(0,0,0,0),a}function ut(t){R(1,arguments);var e=I(t),a=e.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(a+1,0,4),n.setUTCHours(0,0,0,0);var r=dt(n),o=new Date(0);o.setUTCFullYear(a,0,4),o.setUTCHours(0,0,0,0);var i=dt(o);return e.getTime()>=r.getTime()?a+1:e.getTime()>=i.getTime()?a:a-1}function ht(t){R(1,arguments);var e=ut(t),a=new Date(0);a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0);var n=dt(a);return n}function pt(t,e){R(1,arguments);var a=e||{},n=a.locale,r=n&&n.options&&n.options.weekStartsOn,o=null==r?0:Z(r),i=null==a.weekStartsOn?o:Z(a.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=I(t),l=s.getUTCDay(),c=(l<i?7:0)+l-i;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function ft(t,e){R(1,arguments);var a=I(t,e),n=a.getUTCFullYear(),r=e||{},o=r.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:Z(i),l=null==r.firstWeekContainsDate?s:Z(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(n+1,0,l),c.setUTCHours(0,0,0,0);var d=pt(c,e),u=new Date(0);u.setUTCFullYear(n,0,l),u.setUTCHours(0,0,0,0);var h=pt(u,e);return a.getTime()>=d.getTime()?n+1:a.getTime()>=h.getTime()?n:n-1}function gt(t,e){R(1,arguments);var a=e||{},n=a.locale,r=n&&n.options&&n.options.firstWeekContainsDate,o=null==r?1:Z(r),i=null==a.firstWeekContainsDate?o:Z(a.firstWeekContainsDate),s=ft(t,e),l=new Date(0);l.setUTCFullYear(s,0,i),l.setUTCHours(0,0,0,0);var c=pt(l,e);return c}var mt="midnight",bt="noon",vt="morning",wt="afternoon",_t="evening",yt="night",xt={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if("yo"===e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return at(t,e)},Y:function(t,e,a,n){var r=ft(t,n),o=r>0?r:1-r;return"YY"===e?et(o%100,2):"Yo"===e?a.ordinalNumber(o,{unit:"year"}):et(o,e.length)},R:function(t,e){return et(ut(t),e.length)},u:function(t,e){return et(t.getUTCFullYear(),e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return et(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return et(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return nt(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return et(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var r=function(t,e){R(1,arguments);var a=I(t),n=pt(a,e).getTime()-gt(a,e).getTime();return Math.round(n/6048e5)+1}(t,n);return"wo"===e?a.ordinalNumber(r,{unit:"week"}):et(r,e.length)},I:function(t,e,a){var n=function(t){R(1,arguments);var e=I(t),a=dt(e).getTime()-ht(e).getTime();return Math.round(a/6048e5)+1}(t);return"Io"===e?a.ordinalNumber(n,{unit:"week"}):et(n,e.length)},d:function(t,e,a){return"do"===e?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):rt(t,e)},D:function(t,e,a){var n=function(t){R(1,arguments);var e=I(t),a=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var n=e.getTime(),r=a-n;return Math.floor(r/864e5)+1}(t);return"Do"===e?a.ordinalNumber(n,{unit:"dayOfYear"}):et(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var r=t.getUTCDay(),o=(r-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return et(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var r=t.getUTCDay(),o=(r-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return et(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),r=0===n?7:n;switch(e){case"i":return String(r);case"ii":return et(r,e.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n,r=t.getUTCHours();switch(n=12===r?bt:0===r?mt:r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n,r=t.getUTCHours();switch(n=r>=17?_t:r>=12?wt:r>=4?vt:yt,e){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,a){if("ho"===e){var n=t.getUTCHours()%12;return 0===n&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return ot(t,e)},H:function(t,e,a){return"Ho"===e?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):it(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return"Ko"===e?a.ordinalNumber(n,{unit:"hour"}):et(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return 0===n&&(n=24),"ko"===e?a.ordinalNumber(n,{unit:"hour"}):et(n,e.length)},m:function(t,e,a){return"mo"===e?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):st(t,e)},s:function(t,e,a){return"so"===e?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):lt(t,e)},S:function(t,e){return ct(t,e)},X:function(t,e,a,n){var r=(n._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Ct(r);case"XXXX":case"XX":return Mt(r);case"XXXXX":case"XXX":default:return Mt(r,":")}},x:function(t,e,a,n){var r=(n._originalDate||t).getTimezoneOffset();switch(e){case"x":return Ct(r);case"xxxx":case"xx":return Mt(r);case"xxxxx":case"xxx":default:return Mt(r,":")}},O:function(t,e,a,n){var r=(n._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+kt(r,":");case"OOOO":default:return"GMT"+Mt(r,":")}},z:function(t,e,a,n){var r=(n._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+kt(r,":");case"zzzz":default:return"GMT"+Mt(r,":")}},t:function(t,e,a,n){var r=n._originalDate||t;return et(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,a,n){return et((n._originalDate||t).getTime(),e.length)}};function kt(t,e){var a=t>0?"-":"+",n=Math.abs(t),r=Math.floor(n/60),o=n%60;if(0===o)return a+String(r);var i=e||"";return a+String(r)+i+et(o,2)}function Ct(t,e){return t%60==0?(t>0?"-":"+")+et(Math.abs(t)/60,2):Mt(t,e)}function Mt(t,e){var a=e||"",n=t>0?"-":"+",r=Math.abs(t);return n+et(Math.floor(r/60),2)+a+et(r%60,2)}function St(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Dt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var Pt={p:Dt,P:function(t,e){var a,n=t.match(/(P+)(p+)?/),r=n[1],o=n[2];if(!o)return St(t,e);switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",St(r,e)).replace("{{time}}",Dt(o,e))}};function Tt(t){return t.getTime()%6e4}function Lt(t){var e=new Date(t.getTime()),a=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*a+(a>0?(6e4+Tt(e))%6e4:Tt(e))}var zt=["D","DD"],At=["YY","YYYY"];function Et(t){return-1!==zt.indexOf(t)}function Ut(t){return-1!==At.indexOf(t)}function jt(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var Ht=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Wt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,qt=/^'([^]*?)'?$/,Ot=/''/g,Nt=/[a-zA-Z]/;function Rt(t,e,a){R(2,arguments);var n=String(e),r=a||{},o=r.locale||J,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:Z(i),l=null==r.firstWeekContainsDate?s:Z(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:Z(c),u=null==r.weekStartsOn?d:Z(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var h=I(t);if(!F(h))throw new RangeError("Invalid time value");var p=Lt(h),f=tt(h,p),g={firstWeekContainsDate:l,weekStartsOn:u,locale:o,_originalDate:h},m=n.match(Wt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Pt[e])(t,o.formatLong,g):t})).join("").match(Ht).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return It(t);var a=xt[e];if(a)return!r.useAdditionalWeekYearTokens&&Ut(t)&&jt(t),!r.useAdditionalDayOfYearTokens&&Et(t)&&jt(t),a(f,t,o.localize,g);if(e.match(Nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return m}function It(t){return t.match(qt)[1].replace(Ot,"'")}class Ft{constructor(){const t=document.createDocumentFragment();this.addEventListener=t.addEventListener.bind(t),this.dispatchEvent=t.dispatchEvent.bind(t),this.removeEventListener=t.removeEventListener.bind(t),this.__lastUpdate=Date.now()}_shouldInvalidate(){return new Date-this.__lastUpdate>3e5}}const Bt=new class extends Ft{constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(t){window.history.pushState(null,"",t),this.__onPathChanged()}setSearchParam(t,e){const a=new URLSearchParams(location.search);e?a.set(t,e):a.delete(t);const n=a.toString();this.setPath(`${location.pathname}${n?"?"+n:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed")),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(t=>{t&&t.update()})}__onClick(t){if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(t=>"A"===t.tagName);if(!e||!e.href)return;if(e.hasAttribute("download")||e.href.includes("mailto:"))return;const a=e.getAttribute("target");if(a&&""!==a&&"_self"!==a)return;const n=new URL(e.href);n.hash||n.href.startsWith(document.baseURI)&&(t.preventDefault(),this.setPath(n.pathname))}};const Yt=new class extends Ft{close(t){this.dispatchEvent(new CustomEvent("close",{detail:t}))}};let Vt;const $t={url:new URL("./src/components/WorldMap.js",document.baseURI).href},Qt=N(Vt||(Vt=(t=>t)`
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
`)),Gt={asia:[21.943046,96.240234],europe:[52.160455,10.371094],usa:[45.089036,-100.898438]};function Xt(t){let e;switch(t){case"1":e="#6fcf97";break;case"2":e="#7aaeff";break;case"3":e="#eb5757";break;case"4":e="#f2994a";break;default:e="#CCCCCC"}return e}function Jt(t){let e={};for(let a in t)for(let n in t[a].data)for(let r in t[a].data[n]){let o=t[a].data[n][r];"all"!==n&&"US"!==n||(e[o.unit_code]=o)}return e}class Zt extends g{constructor(){super(),this.__handleSelect=this.__handleSelect.bind(this),this.initMap=this.initMap.bind(this),this.updateMap=this.updateMap.bind(this);let t=window.location.href;for(let e in Gt)t.indexOf("lockdown."+e);this.state={lng:0,lat:0,zoom:2,countries:[],mapData:{},lookupTable:{},isMapReady:!1}}setMapState(t,e=[],a){e.forEach((function(e){t.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:a[e.ISO].feature_id},{kind:e.lockdown_status,name:e.name})}))}async initMap(t,e){window.mapboxgl||(console.log("check the map"),await((t=100)=>new Promise(e=>{setTimeout(()=>{e()},t)}))(),await this.initMap(t,e));let a=new window.mapboxgl.Map({accessToken:"pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrOWZpZHF3ajBic2YzbHQwYzQ5bGRnaXgifQ.NcQInXQmMy93L47QBMCAfg",container:this.ref,style:"mapbox://styles/jfqueralt/ck9hi7wl616pz1iugty1cpeiv?optimize=true",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});window.map=a;const n=t[this.props.selectedDate];a.on("style.load",()=>{let t=null;a.on("mousemove","admin-0-fill",(function(e){var n=a.queryRenderedFeatures(e.point,{layers:["admin-0-fill"]});e.features.length>0&&(t&&a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:t},{hover:!1}),t=n[0].id,a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:t},{hover:!0}))})),a.on("click","admin-0-fill",(function(t){const e=a.queryRenderedFeatures(t.point,{layers:["admin-0-fill"]});Bt.setSearchParam("country",e[0].state.name),Bt.setSearchParam("iso2",e[0].properties.iso_3166_1)})),console.log("the style is loaded")}),a.on("load",(function(){console.log("map is loaded"),r(e)}));const r=t=>{a.addSource("admin-0",{type:"vector",url:"mapbox://mapbox.boundaries-adm0-v3"});const e=Jt(t);a.addLayer({id:"admin-0-fill",type:"fill",source:"admin-0","source-layer":"boundaries_admin_0",filter:["any",["==","all",["get","worldview"]],["in","US",["get","worldview"]]],paint:{"fill-color":["case",["!=",["feature-state","kind"],null],["match",["feature-state","kind"],"1",Xt("1"),"2",Xt("2"),"3",Xt("3"),"4",Xt("4"),"#CCCCCC"],["case",["boolean",["feature-state","hover"],!1],"rgba(204,204,204,0.5)","rgba(204,204,204,0)"]],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.7,1]}},"waterway-label");const r=t=>{n.forEach((function(t){a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:e[t.ISO].feature_id},{kind:t.lockdown_status,name:t.name})})),this.setState({isMapReady:!0})};a.isSourceLoaded("admin-0")?r():a.on("sourcedata",(function t(e){"admin-0"===e.sourceId&&e.isSourceLoaded&&(r(),a.off("sourcedata",t))}))};return this.setState({map:a}),a}updateMap(t,e,a){const n=Jt(e),r=t[a];this.setMapState(this.state.map,r,n)}async componentDidMount(){Yt.addEventListener("close",t=>{t.detail.countryDialogClosed&&form.focus()});const[t,e]=await Promise.all([fetch(new URL("../../data/lockdown.json",$t.url)).then(t=>t.json()),fetch(new URL("./../../data/boundaries-adm0-v3.json",$t.url)).then(t=>t.json())]),a=t["2020-04-26"];if(this.setState({countries:a,mapData:t,lookupTable:e}),await this.initMap(t,e),navigator.permissions){const t=await navigator.permissions.query({name:"geolocation"});"granted"===t.state&&navigator.geolocation.getCurrentPosition(t=>{const{latitude:e,longitude:a}=t.coords;this.state.map.setCenter([a,e]),this.setState({islocationSet:!0})}),t.addEventListener("change",t=>{"granted"===t.target.state?navigator.geolocation.getCurrentPosition(t=>{localStorage.setItem("geolocation","true");const{latitude:e,longitude:a}=t.coords;this.state.map.setCenter([a,e]),this.setState({islocationSet:!0})}):localStorage.removeItem("geolocation")})}}componentWillUnmount(){this.state.map&&this.state.map.remove()}__handleSelect(t){t.preventDefault();const[e,a]=this.selectRef.value.split(",");Bt.setSearchParam("country",a),Bt.setSearchParam("iso2",e)}__resetFocus(){this.countrySelectRef.focus()}render(){var t;return[h("div",{class:Qt},h("form",{id:"form",tabindex:"-1",onSubmit:this.__handleSelect},h("label",{for:"countries"},"Choose a country:"),h("select",{ref:t=>this.selectRef=t,id:"countries"},null===(t=this.state.countries)||void 0===t?void 0:t.map(t=>h("option",{value:t.ISO+","+t.name},t.name))),h("input",{type:"submit",value:"View country details"}))),h("div",{class:"map-container",ref:t=>this.ref=t})]}componentDidUpdate(t,e,a){this.state.isMapReady&&this.updateMap(this.state.mapData,this.state.lookupTable,this.props.selectedDate)}}const Kt={url:new URL("./src/services/totalsService.js",document.baseURI).href};const te=new class extends Ft{async getTotals(t){return!t&&this.__totals||(this.__totals=fetch(new URL("../../data/totals.json",Kt.url)).then(t=>t.json()),await this.__totals,this.dispatchEvent(new Event("change"))),this.__totals}};let ee;const ae=N(ee||(ee=(t=>t)`
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
`));class ne extends g{constructor(){super(),this.state={totals:{}}}async componentWillMount(){E("(min-width: 900px)",t=>{this.setState({desktop:t})});const t=await te.getTotals();this.setState({totals:t})}render({selectedDate:t},{totals:e,desktop:a}){const n=e[t],r=[{description:"Countries in lockdown",value:Number((null==n?void 0:n.territories.lockdown)||0).toLocaleString()},{description:"People affected",value:Number((null==n?void 0:n.territories.affected)||0).toLocaleString()},{description:["Reported ",h("br",null),"cases"],value:Number((null==n?void 0:n.corona.confirmed)||0).toLocaleString()},{description:"Reported deaths",value:Number((null==n?void 0:n.corona.deaths)||0).toLocaleString()}];return h("div",{class:ae},h("dl",null,(a?r:r.slice(0,2)).map(t=>h("div",null,h("dt",{class:"ld-font-light"},t.description),h("dd",{class:"ld-font-front"},t.value)))))}}const re=h("svg",{role:"img","aria-labelledby":"srInfo",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-info-circle",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srInfo"},"info"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}),h("polyline",{points:"11 12 12 12 12 16 13 16"})),oe=(h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"})),h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"}))),ie=h("svg",{role:"img","aria-labelledby":"srTicker",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-refresh",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srTicker"},"updates"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"}),h("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"})),se=h("svg",{role:"img","aria-labelledby":"srContribute",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle-plus",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srContribute"},"contribute"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),h("line",{x1:"12",y1:"9",x2:"12",y2:"15"})),le=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),ce=h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h("polyline",{points:"20 6 9 17 4 12"})),de=h("svg",{role:"img","aria-labelledby":"srLockdown",style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",width:"180",height:"26",xmlns:"http://www.w3.org/2000/svg"},h("g",null,h("title",{id:"srLockdown"},"lockdown")),h("g",null,h("g",{stroke:"null",id:"svg_27"},h("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_24"},h("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"background"),h("g",{stroke:"null",id:"svg_22",display:"none"},h("rect",{stroke:"null",id:"svg_25",width:"580",height:"400",x:"14.798918",y:"87.143019","stroke-width":"0"}))),h("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_26"},h("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"Layer 1"),h("g",{stroke:"null",id:"svg_19"},h("g",{stroke:"null",id:"svg_20","stroke-linecap":"round","fill-rule":"evenodd","font-size":"9pt","stroke-width":"0.25mm",transform:"matrix(0.4046201041691139,0,0,0.4046201041691139,-2294.6313297135057,-1675.2340553707181) "},h("path",{stroke:"null",d:"m6385.819401,4377.293685l15.5,0l-22.9,70l-17.4,0l-15.4,-47.4l-15.9,47.4l-17.3,0l-23,-70l16.8,0l15.8,49.2l16.5,-49.2l15,0l16,49.6l16.3,-49.6zm74.2,0l16,0l0,70l-13.3,0l-34.9,-42.5l0,42.5l-16,0l0,-70l13.4,0l34.8,42.5l0,-42.5zm-357.6,70l-22.4,-27.5l-9.4,9.8l0,17.7l-16.1,0l0,-70l16.1,0l0,32.7l31,-32.7l18,0l-29,31.2l30.7,38.8l-18.9,0zm-58.8,-58.8l-10.4,9.6a24.073,24.073 0 0 0 -7.386,-5.877a22.434,22.434 0 0 0 -10.214,-2.323q-6.5,0 -11.6,2.85q-5.1,2.85 -7.95,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.95,7.95a22.496,22.496 0 0 0 8.823,2.714a27.717,27.717 0 0 0 2.777,0.136a22.012,22.012 0 0 0 16.47,-7.054a28.649,28.649 0 0 0 1.13,-1.246l10.4,9.6q-5,6.1 -12.4,9.3q-7.4,3.2 -16.5,3.2q-10.7,0 -19.35,-4.65q-8.65,-4.65 -13.6,-12.9a34.983,34.983 0 0 1 -4.891,-16.401a42.286,42.286 0 0 1 -0.059,-2.249q0,-10.4 4.95,-18.65q4.95,-8.25 13.6,-12.9a39.233,39.233 0 0 1 15.476,-4.487a47.549,47.549 0 0 1 3.974,-0.163q9.1,0 16.45,3.2q7.35,3.2 12.35,9.2zm84.9,58.8l0,-70l31.8,0q11.4,0 20.15,4.35a33.27,33.27 0 0 1 10.748,8.304a32.104,32.104 0 0 1 2.852,3.946q4.85,7.9 4.85,18.4q0,10.5 -4.85,18.4q-4.85,7.9 -13.6,12.25a41.232,41.232 0 0 1 -12.626,3.836a53.292,53.292 0 0 1 -7.524,0.514l-31.8,0zm-292.1,0l0,-70l16.2,0l0,56.8l35.1,0l0,13.2l-51.3,0zm82.114,-0.457a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm314.3,0a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm-88.114,-12.843l14.8,0q10.5,0 16.75,-5.85q6.25,-5.85 6.25,-15.85a25.797,25.797 0 0 0 -0.879,-6.915a18.923,18.923 0 0 0 -5.371,-8.935a21.055,21.055 0 0 0 -10.033,-5.159a30.905,30.905 0 0 0 -6.717,-0.691l-14.8,0l0,43.4zm-214,0.7a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027zm314.3,0a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027z",id:"svg_21"}))),h("g",{stroke:"null",id:"svg_13"},h("g",{stroke:"null",id:"svg_17",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},h("path",{stroke:"null",d:"m-77.204981,496.507538c-68.4,0 -124.1,55.7 -124.1,124.1s55.7,124.1 124.1,124.1s124.1,-55.7 124.1,-124.1s-55.6,-124.1 -124.1,-124.1zm108.2,116.3l-56.4,0c-0.8,-27.3 -5.4,-52.8 -13.3,-72.5c-4.3,-10.8 -9.5,-19.3 -15.2,-25.5c46.1,10 81.4,49.6 84.9,98zm-108.2,109.5c-8.1,0 -17,-10.2 -23.8,-27.2c-7.2,-17.9 -11.5,-41.4 -12.2,-66.7l72.1,0c-0.7,25.3 -5,48.7 -12.2,66.7c-6.9,17.1 -15.8,27.2 -23.9,27.2zm-36,-109.5c0.7,-25.3 5,-48.7 12.2,-66.7c6.8,-17 15.7,-27.2 23.8,-27.2s17,10.2 23.8,27.2c7.2,17.9 11.5,41.4 12.2,66.7l-72,0zm12.9,-98.1c-5.7,6.2 -10.9,14.8 -15.2,25.5c-7.9,19.7 -12.6,45.2 -13.3,72.5l-56.5,0c3.5,-48.3 38.8,-87.9 85,-98zm-85,113.8l56.4,0c0.8,27.3 5.4,52.8 13.3,72.5c4.3,10.8 9.5,19.3 15.2,25.5c-46.1,-10.1 -81.4,-49.7 -84.9,-98zm131.3,98c5.7,-6.2 10.9,-14.8 15.2,-25.5c7.9,-19.7 12.6,-45.2 13.3,-72.5l56.4,0c-3.4,48.3 -38.7,87.9 -84.9,98z",id:"svg_18"})),h("g",{stroke:"null",id:"svg_14",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},h("g",{stroke:"null",id:"svg_15"},h("path",{stroke:"null",d:"m-1.004981,525.807538c-1.3,20.1 -1.6,2.5 -1.6,1.6l0.6,-59.9c0,-30.8 -25,-55.7 -55.7,-55.7l-39.7,0c-30.8,0 -55.7,25 -55.7,55.7l0.1,62.3c0,0.4 1.2,-2.2 0.9,-2.2l0,0c-0.4,0 -0.7,0.4 -0.6,0.8c1.3,6.7 -0.4,-2.3 -0.4,3.2c0,0 0,-1.9 0,-3c0,-0.5 0.4,-0.9 -0.7,-1.9l21.8,0c0.3,-1.6 2.4,-0.9 1.9,-1.6c-6.2,-8.9 2.3,-8.2 3.3,-13.8c0.1,-0.4 -2.1,0 -2.4,0l-3.3,1.6c0.2,0 0,-0.8 -0.1,-7l0,-38.4c0,-19.6 15.9,-35.4 35.4,-35.4l39.6,0c19.6,0 35.4,15.9 35.4,35.4l0,38.2c0.2,4.6 -0.5,5.4 -1.4,5.4l0,-1.6c-1.4,3.1 -1.8,-1.5 -1.7,-0.6c0.4,5.6 0.1,15 1.7,9.5c1.5,-5.1 1.6,4.1 2.4,4.1l18.8,5.1c0.9,0 1.6,-0.7 1.5,-1.6c-0.2,-5.8 -0.7,6.4 0,0.6",id:"svg_16"})))))))),ue=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.76 45.17"},h("defs",null,h("style",null,".cls-1 {\n          fill: #828282;\n          fill-rule: evenodd;\n        }")),h("title",null,"Asset 2"),h("g",{id:"Layer_2","data-name":"Layer 2"},h("g",{id:"Layer_1-2","data-name":"Layer 1"},h("path",{class:"cls-1",d:"M11,0,7.47,3.51l6.9,6.9h-1a14.93,14.93,0,0,0,1.62,29.78H44.15l5,5,3.51-3.51ZM59.76,27.74A12.39,12.39,0,0,0,48.18,15.39,18.58,18.58,0,0,0,20.79,2.76L24.5,6.47a13.47,13.47,0,0,1,5.38-1.14A13.69,13.69,0,0,1,43.58,19v1.25h3.73a7.46,7.46,0,0,1,4.46,13.45l3.51,3.51A12.39,12.39,0,0,0,59.76,27.74ZM5,25.25a10,10,0,0,0,10,10H39.17L19.25,15.29H14.94A10,10,0,0,0,5,25.25Z"})))),he=h("svg",{viewBox:"25 25 50 50"},h("circle",{cx:"50",cy:"50",r:"20"})),pe=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),fe=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"})),ge=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"20"},h("g",null,h("path",{d:"M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"}),h("path",{d:"M0,0h24v24H0V0z",fill:"none"}))),me=h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"})),be=h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"})),ve=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",fill:"#828282",d:"M9.61 22.116v-7.14h4.78v7.14h5.974v-9.521h3.584L12.001 1.885.052 12.594h3.584v9.52H9.61z"}))),we=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",fill:"#828282",d:"M14.153 5.566l-4.037 5.362 3.068 4.074-1.722 1.287c-1.82-2.413-4.845-6.434-4.845-6.434L.158 18.434h23.684L14.153 5.566z"}))),_e=h("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M216.329 17.722c-12.189 0-22.68 9.076-24.447 21.128L159.86 289.871a14.968 14.968 0 01-5.427 9.736l-31.619 25.601 55.48 56.361 55.972-55.972a22.97 22.97 0 006.771-16.347V42.429c0-13.623-11.084-24.707-24.708-24.707zM175.336 421.223l-96.549-98.081L5.827 379.4c-6.974 5.378-7.819 15.585-1.823 22.036l81.848 88.066c5.793 6.233 15.612 6.387 21.597.337zM389.186 325.208l-31.619-25.601a14.968 14.968 0 01-5.427-9.736L320.117 38.849c-1.766-12.051-12.258-21.128-24.447-21.128-13.624 0-24.708 11.084-24.708 24.708v266.82a22.97 22.97 0 006.771 16.347l55.972 55.972zM433.213 323.142l-96.549 98.081 67.888 68.616c5.985 6.049 15.804 5.896 21.597-.337l81.848-88.066c5.995-6.451 5.151-16.658-1.823-22.036z"})),ye=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})),xe=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M393.784 100.106l-95.207-13.834L256 0l-42.577 86.272-95.207 13.834 68.893 67.153-16.264 94.822L256 217.312l85.155 44.769-16.263-94.822z"}),h("path",{d:"M256 315.219l-153.945-61.762v87.726l154.843 62.123 153.047-62.17v-87.679z"}),h("path",{d:"M256 423.914l-153.945-61.762v87.726L256.898 512l153.047-62.169v-87.679z"})),ke=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},h("g",null,h("rect",{fill:"none",height:"24",width:"24"})),h("g",null,h("g",null),h("g",null,h("path",{d:"M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"}),h("g",null,h("path",{d:"M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"}),h("path",{d:"M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"}),h("path",{d:"M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"}))))),Ce=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),Me=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),Se=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},h("path",{d:"M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z",fill:"none"}),h("path",{d:"M17.7 8L12 2.3 6.3 8C4.8 9.6 4 11.6 4 13.6s.8 4.1 2.3 5.7 3.6 2.4 5.7 2.4 4.1-.8 5.7-2.4 2.3-3.7 2.3-5.7-.8-4-2.3-5.6z"})),De=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"}));let Pe;const Te=N(Pe||(Pe=(t=>t)`
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
`)),Le=t=>[h("a",{class:"skiplink",href:"#main"},"Go to main content"),h("header",{class:Te},h("div",{class:"ld-logo-wrapper"},h("a",{href:"","aria-current":"page"},h("p",null,"ALPHA"),de)),t.showStatsbox?[h("div",{class:"totals"},h(ne,{selectedDate:t.selectedDate}))," "]:"")];var ze,Ae,Ee,Ue=0,je=[],He=t.__r,We=t.diffed,qe=t.__c,Oe=t.unmount;function Ne(e,a){t.__h&&t.__h(Ae,e,Ue||a),Ue=0;var n=Ae.__H||(Ae.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Re(t){return Ue=1,function(t,e,a){var n=Ne(ze++,2);return n.__c||(n.__c=Ae,n.__=[a?a(e):Qe(void 0,e),function(e){var a=t(n.__[0],e);n.__[0]!==a&&(n.__[0]=a,n.__c.setState({}))}]),n.__}(Qe,t)}function Ie(e,a){var n=Ne(ze++,3);!t.__s&&$e(n.__H,a)&&(n.__=e,n.__H=a,Ae.__H.__h.push(n))}function Fe(t){return Ue=5,function(t,e){var a=Ne(ze++,7);return $e(a.__H,e)?(a.__H=e,a.__h=t,a.__=t()):a.__}((function(){return{current:t}}),[])}function Be(){je.some((function(e){if(e.__P)try{e.__H.__h.forEach(Ye),e.__H.__h.forEach(Ve),e.__H.__h=[]}catch(a){return e.__H.__h=[],t.__e(a,e.__v),!0}})),je=[]}function Ye(t){t.t&&t.t()}function Ve(t){var e=t.__();"function"==typeof e&&(t.t=e)}function $e(t,e){return!t||e.some((function(e,a){return e!==t[a]}))}function Qe(t,e){return"function"==typeof e?e(t):e}function Ge(t,e){for(var a in t)if("__source"!==a&&!(a in e))return!0;for(var n in e)if("__source"!==n&&t[n]!==e[n])return!0;return!1}t.__r=function(t){He&&He(t),ze=0,(Ae=t.__c).__H&&(Ae.__H.__h.forEach(Ye),Ae.__H.__h.forEach(Ve),Ae.__H.__h=[])},t.diffed=function(e){We&&We(e);var a=e.__c;if(a){var n=a.__H;n&&n.__h.length&&(1!==je.push(a)&&Ee===t.requestAnimationFrame||((Ee=t.requestAnimationFrame)||function(t){var e,a=function(){clearTimeout(n),cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(a,100);"undefined"!=typeof window&&(e=requestAnimationFrame(a))})(Be))}},t.__c=function(e,a){a.some((function(e){try{e.__h.forEach(Ye),e.__h=e.__h.filter((function(t){return!t.__||Ve(t)}))}catch(n){a.some((function(t){t.__h&&(t.__h=[])})),a=[],t.__e(n,e.__v)}})),qe&&qe(e,a)},t.unmount=function(e){Oe&&Oe(e);var a=e.__c;if(a){var n=a.__H;if(n)try{n.__.forEach((function(t){return t.t&&t.t()}))}catch(e){t.__e(e,a.__v)}}};!function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).isPureReactComponent=!0,a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.shouldComponentUpdate=function(t,e){return Ge(this.props,t)||Ge(this.state,e)}}(g);var Xe=t.__b;t.__b=function(t){t.type&&t.type.t&&t.ref&&(t.props.ref=t.ref,t.ref=null),Xe&&Xe(t)};var Je=t.__e;function Ze(t){return t&&((t=function(t,e){for(var a in e)t[a]=e[a];return t}({},t)).__c=null,t.__k=t.__k&&t.__k.map(Ze)),t}function Ke(){this.__u=0,this.o=null,this.__b=null}function ta(t){var e=t.__.__c;return e&&e.u&&e.u(t)}function ea(){this.i=null,this.l=null}t.__e=function(t,e,a){if(t.then)for(var n,r=e;r=r.__;)if((n=r.__c)&&n.__c)return n.__c(t,e.__c);Je(t,e,a)},(Ke.prototype=new g).__c=function(t,e){var a=this;null==a.o&&(a.o=[]),a.o.push(e);var n=ta(a.__v),r=!1,o=function(){r||(r=!0,n?n(i):i())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){o(),e.__c&&e.__c()};var i=function(){var t;if(!--a.__u)for(a.__v.__k[0]=a.state.u,a.setState({u:a.__b=null});t=a.o.pop();)t.forceUpdate()};a.__u++||a.setState({u:a.__b=a.__v.__k[0]}),t.then(o,o)},Ke.prototype.render=function(t,e){return this.__b&&(this.__v.__k[0]=Ze(this.__b),this.__b=null),[h(g,null,e.u?null:t.children),e.u&&t.fallback]};var aa=function(t,e,a){if(++a[1]===a[0]&&t.l.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.l.size))for(a=t.i;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;t.i=a=a[2]}};(ea.prototype=new g).u=function(t){var e=this,a=ta(e.__v),n=e.l.get(t);return n[0]++,function(r){var o=function(){e.props.revealOrder?(n.push(r),aa(e,t,n)):r()};a?a(o):o()}},ea.prototype.render=function(t){this.i=null,this.l=new Map;var e=y(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var a=e.length;a--;)this.l.set(e[a],this.i=[1,0,this.i]);return t.children},ea.prototype.componentDidUpdate=ea.prototype.componentDidMount=function(){var t=this;t.l.forEach((function(e,a){aa(t,a,e)}))};!function(){function t(){}var e=t.prototype;e.getChildContext=function(){return this.props.context},e.render=function(t){return t.children}}();var na=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;g.prototype.isReactComponent={};var ra="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,oa=t.event;function ia(t,e){t["UNSAFE_"+e]&&!t[e]&&Object.defineProperty(t,e,{configurable:!1,get:function(){return this["UNSAFE_"+e]},set:function(t){this["UNSAFE_"+e]=t}})}t.event=function(t){oa&&(t=oa(t)),t.persist=function(){};var e=!1,a=!1,n=t.stopPropagation;t.stopPropagation=function(){n.call(t),e=!0};var r=t.preventDefault;return t.preventDefault=function(){r.call(t),a=!0},t.isPropagationStopped=function(){return e},t.isDefaultPrevented=function(){return a},t.nativeEvent=t};var sa={configurable:!0,get:function(){return this.class}},la=t.vnode;t.vnode=function(t){t.$$typeof=ra;var e=t.type,a=t.props;if(e){if(a.class!=a.className&&(sa.enumerable="className"in a,null!=a.className&&(a.class=a.className),Object.defineProperty(a,"className",sa)),"function"!=typeof e){var n,r,o;for(o in a.defaultValue&&void 0!==a.value&&(a.value||0===a.value||(a.value=a.defaultValue),delete a.defaultValue),Array.isArray(a.value)&&a.multiple&&"select"===e&&(y(a.children).forEach((function(t){-1!=a.value.indexOf(t.props.value)&&(t.props.selected=!0)})),delete a.value),a)if(n=na.test(o))break;if(n)for(o in r=t.props={},a)r[na.test(o)?o.replace(/[A-Z0-9]/,"-$&").toLowerCase():o]=a[o]}!function(e){var a=t.type,n=t.props;if(n&&"string"==typeof a){var r={};for(var o in n)/^on(Ani|Tra|Tou)/.test(o)&&(n[o.toLowerCase()]=n[o],delete n[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onbeforeinput&&(n.onbeforeinput=n[r.onbeforeinput],delete n[r.onbeforeinput]),r.onchange&&("textarea"===a||"input"===a.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=n[r.onchange],delete n[r.onchange])}}}(),"function"==typeof e&&!e.m&&e.prototype&&(ia(e.prototype,"componentWillMount"),ia(e.prototype,"componentWillReceiveProps"),ia(e.prototype,"componentWillUpdate"),e.m=!0)}la&&la(t)};let ca;function da(t){const[e,a]=Re(!1),n=Fe(null);return Ie(()=>{e&&n.current.focus({preventScroll:!0})},[e]),h("div",{class:ua},h("div",{class:"ld-expandable"},h("button",{onClick:()=>a(!e),class:"ld-expandable--toggle","aria-expanded":e},h("div",{class:"ld-expandable--icon"},e?pa:ha),h("div",{class:"ld-expandable--toggle-content"},h("h2",null,t.toggle))),h("div",{ref:n,class:"ld-expandable--detail "+(e?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},t.detail)))}const ua=N(ca||(ca=(t=>t)`
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
`)),ha=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"9 6 15 12 9 18"})),pa=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"})),fa={url:new URL("./src/services/updatesService.js",document.baseURI).href};const ga=new class extends Ft{async getUpdates(t){if(t||!this.updates)try{this.updates=await fetch(new URL("../../data/updates.json",fa.url)).then(t=>t.json()),await this.updates}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:this.updates}}};let ma,ba,va=t=>t;const wa=N(ma||(ma=va`
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
`)),_a=N(ba||(ba=va`
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
`));let ya;const xa={new_entry:"new entry",announcement:"announcement",rectification:"rectification",promoting_project:"project promotion",promoting_petition:"petition"};function ka(){var t,e;const[a,n]=Re(void 0);return Ie(async()=>{const t=await ga.getUpdates();n(t)},[]),navigator.onLine||"success"===(null==a?void 0:a.status)?!a&&navigator.onLine?h("div",{class:wa},he):"failed"===a.status&&navigator.onLine?h("div",{style:"margin-top: 14px;"},"An error occured while fetching updates."):h("div",{class:Ca},h("ul",null,null==a||null===(t=a.data)||void 0===t||null===(e=t.updates)||void 0===e?void 0:e.map(t=>h("li",null,h("div",{class:"ld-ticker--bar"},h("div",{class:"ld-ticker--dot-container"},h("div",{"aria-label":xa[t.type.toLowerCase()],class:"ld-ticker--dot "+t.type.toLowerCase()})),h("div",{class:"ld-ticker--line"})),h("div",{class:"ld-ticker--content"},h("div",{class:"ld-ticker--title"},t.title),h("div",{class:"ld-ticker--content"},t.content),t.link?h("div",{class:"ld-ticker--link"},h("a",{target:"_blank",rel:"noopener noreferer",href:t.link},"Source")):"",h("div",{class:"ld-ticker--date"},t.date)))))):h("div",{class:_a},ue,h("b",null,"You are not connected to the internet"),h("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}const Ca=N(ya||(ya=(t=>t)`
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
`));function Ma(t){let e;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(a=>{a&&(a.addEventListener("updatefound",()=>{e=a.installing,e.addEventListener("statechange",()=>{"installed"===e.state&&navigator.serviceWorker.controller&&t(!0)})}),a.waiting&&navigator.serviceWorker.controller&&(t(!0),e=a.waiting))})}function Sa(t){const[e,a]=[...document.querySelectorAll("link[rel='icon']")],n=document.querySelector("link[rel='manifest']"),r=document.querySelector("meta[name='theme-color']");t?(n.href="/manifest-dark.json",e.href="src/assets/favicon-32x32-dark.png",a.href="src/assets/favicon-16x16-dark.png",r.setAttribute("content","#303136")):(n.href="/manifest.json",e.href="src/assets/favicon-32x32.png",a.href="src/assets/favicon-16x16.png",r.setAttribute("content","#ffffff")),document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(e),document.getElementsByTagName("head")[0].appendChild(a),document.getElementsByTagName("head")[0].appendChild(r)}let Da,Pa;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),Pa=!0,Da=t});class Ta extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),Da=t,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))}),Pa&&this.removeAttribute("hidden")}async _handlePrompt(t){t.preventDefault(),Da.prompt();const{outcome:e}=await Da.userChoice;"accepted"===e?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),Da=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",Ta);class La extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){this.addEventListener("click",this._postMessage.bind(this)),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)})}async _postMessage(t){t.preventDefault(),(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",La);let za;const Aa=N(za||(za=(t=>t)`
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
`));function Ea(){const[t,e]=Re(!1),[a,n]=Re(!1);return Ie(async()=>{if(Ma(t=>{n(t)}),navigator.permissions){const t=await navigator.permissions.query({name:"geolocation"});if("true"===localStorage.getItem("geolocation"))return void e(!1);"granted"!==t.state&&e(!0)}},[]),h("div",{class:Aa},h("button",{onClick:function(){document.getElementsByTagName("html")[0].classList.contains("dark")?(document.getElementsByTagName("html")[0].classList.remove("dark"),localStorage.setItem("darkmode","false"),Sa(!1)):(document.getElementsByTagName("html")[0].classList.add("dark"),localStorage.setItem("darkmode","true"),Sa(!0))},class:"ld-button"},"Toggle darkmode"),t?[" ",h("button",{onClick:function(){navigator.permissions&&navigator.geolocation.getCurrentPosition(()=>{e(!1)})},class:"ld-button"},"Allow geolocation")," "]:"",h("pwa-install-button",null,h("button",{class:"ld-button"},"Install app")),a?h("pwa-update-available",null,h("button",{class:"ld-button"},"Update app")):"")}const Ua={info:re,settings:oe,updates:ie,contribute:se};class ja extends g{constructor(){super(),this.state={updateAvailable:!1,index:0},this.tabRefs={},this.__onFocusMove=this.__onFocusMove.bind(this),this.__onTabClick=this.__onTabClick.bind(this)}componentDidMount(){E("(min-width: 960px)",t=>{this.setState({isMobile:!t})}),Yt.addEventListener("close",t=>{t.detail.menuDialogClosed&&this.tabRefs["tab"+this.state.index].focus()}),Ma(t=>{this.setState({updateAvailable:t})})}updateIndex(t,e){"settings"===e&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.setState({index:t}),this.tabRefs["tab"+t].focus(),this.state.isMobile||this.commit(e)}__onTabClick(t,e){this.updateIndex(t,e),this.commit(e)}commit(t){this.props.switchContent(t.toLowerCase())}__onFocusMove(t){const e=this.state.index;switch(t.keyCode){case 37:0!==e&&this.updateIndex(e-1,this.tabRefs["tab"+(e-1)].getAttribute("data-label").toLowerCase());break;case 39:e!==this.props.children.length-1&&this.updateIndex(e+1,this.tabRefs["tab"+(e+1)].getAttribute("data-label").toLowerCase())}}render(t,{index:e}){return h("ul",{class:"ld-menu--tabs",role:"tablist"},this.props.children.map((t,a)=>h("li",{role:"presentation",key:a},h("button",{role:"tab",ref:t=>this.tabRefs["tab"+a]=t,tabindex:e===a?"0":"-1","aria-selected":e===a?"true":"false",class:e===a?"ld-menu--active":"","data-label":t.props.id,onKeyUp:this.__onFocusMove,onClick:()=>this.__onTabClick(a,t.props.id)},"settings"===t.props.id&&this.state.updateAvailable?[" ",h("div",{class:"ld-menu--notification"})," "]:"",Ua[t.props.id],h("p",{class:e===a?"ld-menu--active":""},t.props.id.toUpperCase())))))}}let Ha;const Wa=N(Ha||(Ha=(t=>t)`
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
`)),qa=t=>{switch(t){case"info":return{title:"info",template:[h("h1",null,"Lockdown"),h("p",{class:"ld-alpha"},"Project lockdown is currently in alpha. Not all data may be available yet."),h("p",null,h("b",null,"Project Lockdown")," aims to map the different lockdowns around the world, offering the public a number of relevant metrics\n            in order to provide an overview of the restrictions applied worldwide. We hope this will help evaluate the seriousness of the\n            COVID-19 pandemic and help journalists and Human Rights defenders in their reporting and overseeing tasks."),h(da,{toggle:"About",detail:h("p",null,"While lockdowns generally help countries to flatten the curve, and prevent COVID-19 from spreading, countries with a\n                dictatorial nature may see this as an opportunity to increase their grasp over a country, and even potentially lead to\n                martial law type scenarios. Governments may unnecesarily prolong lockdowns or not stick to their announced end dates for\n                political gain. ",h("b",null,"Project Lockdown")," aims to visualize these situations.")}),h(da,{toggle:"Legend",detail:[h("p",null,"The map shows two parameters for territories:"),h("ol",null,h("li",null,"If the country is under any type of lockdown"),h("li",null,"If there are covid cases in the country")),h("table",{class:Wa},h("tr",null,h("th",{scope:"col"}),h("th",{scope:"col"},"Lockdown"),h("th",{scope:"col"},"COVID-19")),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"blue",class:"blue circle"})),h("td",null,h("div",{"aria-label":"no"},le)),h("td",null,h("div",{"aria-label":"no"},le))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"green",class:"green circle"})),h("td",null,h("div",{"aria-label":"no"},le)),h("td",null,h("div",{"aria-label":"yes"},ce))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"yellow",class:"yellow circle"})),h("td",null,h("div",{"aria-label":"yes"},ce)),h("td",null,h("div",{"aria-label":"no"},le))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"red",class:"red circle"})),h("td",null,h("div",{"aria-label":"yes"},ce)),h("td",null,h("div",{"aria-label":"yes"},ce))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"gray",class:"default circle"})),h("td",null,"No Data",h("p",{class:"note"},"(please contribute)")),h("td",null,"No Data",h("p",{class:"note"},"(please contribute)"))))]}),h(da,{toggle:"Sources",detail:h("p",null,h("b",null,"Project Lockdown")," uses a variety of sources to compile all the information showcased. We make sure to only consider sources that are reliable and verifiable.\n                You can check all the ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"sources")," employed here:",h("ul",{class:"ld-sources"},h("li",null,h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://api.coronatracker.com/"},"Coronatracker API"),h("br",null),"Recognized by ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.who.int/bulletin/online_first/COVID-19/en/"},"WHO")),h("li",null,"For reference data see the ",h("b",null,"Data Sources")," Tab."),h("li",null,"For country data see the ",h("b",null,"Find the Countries")," Tab by it's ISO Alpha 3 code.\n                    (Quick find through Global Tab)")),"If you find any errors, please help us and report it ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Code-for-All/lockdown/issues"},"by creating an issue here"),".")}),h(da,{toggle:"Credits",detail:h("p",null,h("b",null,"Project Lockdown")," is a Civic Tech initiative from a number of organizations and individuals. You can find the",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.TIOF.Click/LockdownData"},"list of project members")," here\n                under the ",h("b",null,"Credits")," tab.")}),h(da,{toggle:"Data & Privacy",detail:[h("p",null,"We do not collect any information from our visitors."),h("p",null,"All information from any project member shown anywhere in the application is under their prior consent.")]})]};case"settings":return{title:"settings",template:[" ",h(Ea,null)," "]};case"contribute":return{title:"contribute",template:[h("p",null,h("b",null,"Project Lockdown")," is made possible by the contribution of many individuals who are giving their time to make possible that everyone has access to the right information."),h("p",null,"Do you have any information you want to contribute? Please follow this link:"),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Submit data"),h("p",null,"Additionally, you can become part of the project by joining one of the following teams:",h("ul",null,h("li",null,"Editors"),h("li",null,"Devs"),h("li",null,"UI/UX"))),h("p",null,"Contact us via Telegram at:",h("br",null),h("a",{class:"ld-link"},"@ProjectLockdown"))]};case"updates":return{title:"updates",template:[" ",h(ka,null)," "]};default:return{title:"",template:void 0}}};class Oa extends g{constructor(t){super(t),this.state={activeItem:"info"},this.switchContent=this.switchContent.bind(this)}componentDidMount(){let t=0;E("(min-width: 960px)",e=>{this.setState({isMobile:!e}),e&&t>0&&(t++,this.props.close())})}switchContent(t){if("settings"===t&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.state.isMobile&&this.props.opened&&t===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.props.changeRoute(qa(t)),this.prevVal=t,this.setState({activeItem:t})}render(t,{activeItem:e,updateAvailable:a}){return h("main",{id:"main",class:"ld-menu"},h("div",{class:"ld-menu-nav"},h("nav",null,h(ja,{switchContent:this.switchContent},h("button",{id:"info"},"info"),h("button",{id:"settings"},"settings"),h("button",{id:"updates"},"updates"),h("button",{id:"contribute"},"contribute")))),h("div",{class:"ld-menu--content"},h("div",{class:"mb-only"},h("div",{class:"ld-menu--header"},h("h1",null,e))),qa(e).template))}}class Na extends g{async componentWillMount(){const t=await this.props.component(),e=t.default||t;this.setState({Component:e})}render({props:t},{Component:e}){return h(e,t)}}var Ra="object"==typeof global&&global&&global.Object===Object&&global,Ia="object"==typeof self&&self&&self.Object===Object&&self,Fa=Ra||Ia||Function("return this")(),Ba=Fa.Symbol,Ya=Object.prototype,Va=Ya.hasOwnProperty,$a=Ya.toString,Qa=Ba?Ba.toStringTag:void 0;var Ga=Object.prototype.toString;var Xa=Ba?Ba.toStringTag:void 0;function Ja(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Xa&&Xa in Object(t)?function(t){var e=Va.call(t,Qa),a=t[Qa];try{t[Qa]=void 0;var n=!0}catch(t){}var r=$a.call(t);return n&&(e?t[Qa]=a:delete t[Qa]),r}(t):function(t){return Ga.call(t)}(t)}function Za(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var Ka=/^\s+|\s+$/g,tn=/^[-+]0x[0-9a-f]+$/i,en=/^0b[01]+$/i,an=/^0o[0-7]+$/i,nn=parseInt;function rn(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==Ja(t)}(t))return NaN;if(Za(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Za(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ka,"");var a=en.test(t);return a||an.test(t)?nn(t.slice(2),a?2:8):tn.test(t)?NaN:+t}var on=function(){return Fa.Date.now()},sn=Math.max,ln=Math.min;let cn,dn,un=t=>t;const hn=N(cn||(cn=un`
  & {
    @media (max-width: 960px) {
      max-width: 200px;
    }
    max-width: 300px;
    position: absolute;
    top: calc(50% - 110px);
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 999999;
    background-color: white;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.37);
    border-radius: 9px;
    overflow: hidden;
    padding-top: 1.5%;
    padding-bottom: 3%;
    &.show {
      display: block !important;
    }
    & > .calendar {
      padding: 3% 7%;
      &.header {
        background-color: rgb(250, 250, 250);
        display: flex;
        & .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(100% / 7);
          height: 20px;
        }
      }
      &.actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & h3 {
          margin: 0px;
          color: rgb(43, 42, 47);
          font-size: 0.9rem;
        }
        & svg {
          &:active {
            color: rgb(85, 170, 173);
          }
          transition: 0.3s;
          color: rgb(70, 168, 171);
          width: 30px;
        }
      }
    }
    & .week {
      display: flex;
      & .day {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% / 7);
        padding-top: calc(100% / 7);
        //height: 20px;
        position: relative;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
          &::before {
            content: ' ';
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgb(202, 201, 201, 0.2);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
          }
        }
        &.selected {
          &::before {
            content: ' ';
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgb(34, 182, 184);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
          }
          & span {
            color: white;
          }
        }
        & span {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgb(82, 82, 82);
        }
        &.empty::before {
          content: ' ';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: rgb(228, 228, 228);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`)),pn=N(dn||(dn=un`
  & {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 99998;
    top: 0px;
    left: 0px;
    background-color: rgba(40, 40, 40, 0.8);
    display: none;
    &.show {
      display: block;
    }
  }
`)),fn=["S","M","T","W","T","F","S"],gn=["January","February","March","April","May","June","July","August","September","October","November","December"];class mn extends g{constructor(){super(),this.state={days:[],currentMonth:(new Date).getMonth(),lastSelection:!1,currentYear:2020,allMonthsDate:new Array(12),enableArrows:!1},this.getMonthData=this.getMonthData.bind(this),this.fillAllMonths=this.fillAllMonths.bind(this),this.chooseDay=this.chooseDay.bind(this),this.changeMonth=this.changeMonth.bind(this)}componentDidMount(){const{currentMonth:t,allMonthsDate:e}=this.state;let a=new Date(2020,t,1),n=new Date(2020,t+1,0),r=this.getMonthData(a,n),o=e;o[t]=r,this.setState({days:r,allMonthsDate:o},this.fillAllMonths)}getMonthData(t,e){let a=e.getDate(),n=7-(t.getDay()+1),r=a+n,o=r/7,i=0;r%7>0&&(i=7-r%7,r+=7-r%7,o=r/7);let s=[],l=0;for(let t=0;t<o;t++){s.push([]);for(let e=0;e<7;e++)0===t&&e<n||t===o-1&&i>0&&e>7-i-1?s[t].push({day:null,label:fn[e]}):(l++,s[t].push({day:l,label:fn[e]}))}return s}fillAllMonths(){const t=this.state.currentMonth;let e,a,n=this.state.allMonthsDate;for(let r=0;r<12;r++)if(r!==t){e=new Date(2020,r,1),a=new Date(2020,r+1,0);let t=this.getMonthData(e,a);n[r]=t}this.setState({allMonthsDate:n,enableArrows:!0})}chooseDay(t,e,a){let n=this.state.days;!1!==this.state.lastSelection&&(n[this.state.lastSelection[0]][this.state.lastSelection[1]].selected=!1),t.selected=!0,n[e][a]=t,this.props.onSelect(new Date(this.state.currentYear,this.state.currentMonth,t.day)),this.setState({days:n,lastSelection:[e,a]})}changeMonth(t){const{enableArrows:e,currentMonth:a,allMonthsDate:n}=this.state;if(e){let e,r;(a>0||t)&&(a<11||!t)&&(t?(r=a+1,e=n[r]):(r=a-1,e=n[r]),this.setState({days:e,currentMonth:r}))}}render(t){return[h("div",{class:"overlay "+pn+" "+(this.props.show?"show":""),onClick:this.props.close}),h("div",{class:"calendar "+hn+" "+(this.props.show?"show":"")+" "+this.props.customClass},h("div",{class:"calendar actions"},h("span",{onClick:()=>this.changeMonth(!1)},me),h("h3",null,gn[this.state.currentMonth]," ",this.state.currentYear),h("span",{onClick:()=>this.changeMonth(!0)},be)),h("div",{class:"calendar header"},fn.map(t=>h("div",{class:"header item"},t))),h("div",{class:"calendar container"},this.state.days.map((t,e)=>h("div",{class:"week"},t.map((t,a)=>h("div",{onClick:()=>this.chooseDay(t,e,a),class:`day ${null===t.day?"empty":""} ${t.selected?"selected":""}`},h("span",null,t.day)))))))]}}let bn,vn,wn,_n,yn,xn=t=>t;const kn=[7.5,16,24.5,33,41.5,50,58.5,67,75.5,84,94];function Cn(t){return Rt(t,"dd/MM/yyyy")}const Mn=N(bn||(bn=xn`
    @keyframes fadeOutLeft {
        from {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
        }
    }
    @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translate3d(-100%, 0, 0);
        }
      
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    @keyframes fadeOutRight {
        from {
          opacity: 1;
        }
      
        to {
          opacity: 0;
          transform: translate3d(100%, 0, 0);
        }
      }
    @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translate3d(100%, 0, 0);
        }
      
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    .dark &{
      background-color: rgb(48, 49, 54);
    }
    & {
        position: absolute;
        bottom: 80px;
        left: calc(((100vw - (80vw - 400px))/2) + 200px);
        margin-left:auto;
        margin-right:auto;
        z-index: 1000;
        width: calc(80vw - 400px);
        min-height: 10vh;
        background-color: white;
        padding: 0px 6%;
        padding-top: 6%;
        padding-bottom: 1.5%;
        border-radius: 20px;
        display:flex
        justify-content: center
        align-items: center
        -webkit-box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.39);
        -moz-box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.39);
        box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.39);
        @media (max-width: 960px) {
            & {
              bottom: 80px;
              left:0;
              right:0;
              width: 90vw;
              padding: 0px 12%;
              padding-top: 11vh;
              padding-bottom: 3%;
            }
        }
        & > .overlay{
          height: 100vh;
          @media (max-width: 960px) {
            top: calc(-100vh + 100% + 20px);
            left: -6%;
          }
          top: calc(-100vh + 100% + 80px);
          left: -17%;
        }
        & > .calendar{
            top: 0;
            bottom: calc(300% + 10px);
            width: 300px;
            height: fit-content;
            display: none;
            tansition: 0.3s;
            &.left{
                left: 0;
                &.hide{
                  animation: fadeOutLeft 0.3s forwards !important;
                  animation-delay: 0.1s !important;
                }
                &.show{
                    animation: fadeInLeft 0.3s;
                }
            }
            &.right{
                right: 0;
                &.hide{
                  animation: fadeOutRight 0.3s forwards !important;
                  animation-delay: 0.1s !important;
                }
                &.show{
                  animation: fadeInRight 0.3s;
                }
            }
        }
    }
`)),Sn=N(vn||(vn=xn`
  input[type='range'] {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    margin: 15.6px 0;
  }
  input[type='range']:focus {
    outline: none;
    box-shadow: 0 0 0px 0px var(--ld-focus) !important;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    background: rgba(201, 201, 201, 0.733);
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 38px;
    width: 38px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -15.6px;
    &::before {
      content: 'Say Cheese';
      color: red;
    }
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #d6d6d6;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    background: rgba(201, 201, 201, 0.733);
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-moz-range-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 38px;
    width: 38px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #bcbcbc;
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
  }
  input[type='range']::-ms-fill-upper {
    background: rgba(201, 201, 201, 0.733);
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
  }
  input[type='range']::-ms-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 38px;
    width: 38px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
    height: 6.8px;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: rgba(201, 201, 201, 0.733);
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #d6d6d6;
  }
`)),Dn=N(wn||(wn=xn`
  .dark & {
    color: white;
  }
  & {
    font-weight: bold;
    font-size: 14px;
    color: #8c8c8c;
    position: absolute;
    top: 42%;
    @media (max-width: 960px) {
      top: 40%;
      &.first {
        left: calc(12% - 15px);
      }
      &.last {
        right: calc(12% - 15px);
      }
    }
    &.first {
      left: calc(10% - 15px);
    }
    &.last {
      right: calc(10% - 15px);
    }
  }
`)),Pn=N(_n||(_n=xn`
  .dark & span {
    color: white;
    background: rgb(48, 49, 54);
    &::after {
      background-color: rgb(48, 49, 54);
    }
  }
  & {
    position: absolute;
    @media (max-width: 960px) {
      top: 20%;
    }
    top: 30%;
    left: 24.5%;
    z-index: 999;
    width: fit-content;
    transform: translate(-24.5%, 0);
    background: #ffffff;
    font-size: 1rem;
    & span {
      border: 2px solid #8c8c8c;
      border-radius: 7px;
      position: relative;
      background: #ffffff;
      padding: 10px 5px;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -9px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 15px;
        height: 15px;
        background: #ffffff;
        border-right: 2px solid #8c8c8c;
        border-bottom: 2px solid #8c8c8c;
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    }
  }
`)),Tn=N(yn||(yn=xn`
  & {
    content: '';
    position: absolute;
    height: 38px;
    width: 38px;
    outline: none;
    border: 0px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9;
    bottom: calc(16% - 1px);
    @media (max-width: 960px) {
      bottom: calc(10% - 1px);
    }
    @media (max-width: 960px) and (min-width: 576px) {
      bottom: calc(17% - 1px);
      &.first {
        left: calc(12% + 11px) !important;
      }
      &.last {
        right: calc(12% + 11px) !important;
      }
    }
    &.first {
      @media (max-width: 960px) {
        left: calc(12% + 4px);
      }
      left: calc(6% + 38px);
    }
    &.last {
      @media (max-width: 960px) {
        right: calc(12% + 4px);
      }
      right: calc(6% + 38px);
    }
    &:active {
      background-color: rgb(199, 198, 198);
      outline: none;
    }
  }
`));class Ln extends g{constructor(){super(),this.state={currentDateValue:2,currentPosition:24.5,datePickerPosition:"left",showDatePicker:!1,currentSelectedDay:"",firstDay:"",lastDay:"",currentSliderRange:[]},this.dateRef={},this.range={},this.onSliderChange=this.onSliderChange.bind(this),this.onBtnClick=this.onBtnClick.bind(this),this.onChooseDate=this.onChooseDate.bind(this),this.calendarWillClose=this.calendarWillClose.bind(this),this.closeDatePicker=this.closeDatePicker.bind(this),this.submitChanges=this.submitChanges.bind(this)}componentDidMount(){let t=new Date,e=[],a=7;for(let n=0;n<11;n++)n<2?e.push(this.rangePreProcces(t,0==n?-13:-7)):2!==n?(e.push(this.rangePreProcces(t,a)),a+=7):e.push(t);this.setState({currentSliderRange:e,currentSelectedDay:Cn(t),firstDay:Cn(e[0]),lastDay:Cn(e[e.length-1])})}onSliderChange(t){const{currentDateValue:e,currentSliderRange:a}=this.state,n=this.dateRef.current,r=Number(t.target.value);let o=kn[r];n.style.left=o+"%",n.style.transform=`translate(-${o}%, 0)`,this.setState({currentDateValue:r,currentPosition:o,currentSelectedDay:Cn(a[r])},this.submitChanges)}onBtnClick(t){}onChooseDate(t){const e=this.dateRef.current;this.calendarWillClose();let a=[],n=7;for(let e=0;e<11;e++)e<2?a.push(this.rangePreProcces(t,0==e?-13:-7)):2!==e?(a.push(this.rangePreProcces(t,n)),n+=7):a.push(t);e.style.left="24.5%",e.style.transform="translate(-24.5%, 0)",this.setState({currentSliderRange:a,currentSelectedDay:Cn(t),firstDay:Cn(a[0]),lastDay:Cn(a[a.length-1]),currentDateValue:2,currentPosition:24.5})}calendarWillClose(){this.setState({datePickerPosition:this.state.datePickerPosition+" hide"},()=>setTimeout(()=>this.closeDatePicker(),400))}closeDatePicker(){this.setState({showDatePicker:!1,datePickerPosition:this.state.datePickerPosition.replace(" hide","")})}rangePreProcces(t,e){let a=new Date;return a.setDate(t.getDate()+e),a}submitChanges(){const{currentSliderRange:t,currentDateValue:e}=this.state;this.props.onChange(t[e],t[0],t[t.length-1])}render(t){return h("div",{class:Mn+" "+Sn},h(mn,{close:this.calendarWillClose,onSelect:this.onChooseDate,show:this.state.showDatePicker,customClass:this.state.datePickerPosition}),h("div",{class:Pn,ref:this.dateRef},h("span",null,this.state.currentSelectedDay)),h("span",{class:"first "+Dn},this.state.firstDay),h("button",{onClick:t=>this.onBtnClick("left"),class:"first "+Tn}),h("input",{ref:this.range,onInput:this.onSliderChange,type:"range",min:"0",max:"10",step:"1",value:this.state.currentDateValue}),h("button",{onClick:t=>this.onBtnClick("right"),class:"last "+Tn}),h("span",{class:"last "+Dn},this.state.lastDay))}}let zn;const An=function(t,e,a){var n,r,o,i,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var a=n,o=r;return n=r=void 0,c=e,i=t.apply(o,a)}function f(t){return c=t,s=setTimeout(m,e),d?p(t):i}function g(t){var a=t-l;return void 0===l||a>=e||a<0||u&&t-c>=o}function m(){var t=on();if(g(t))return b(t);s=setTimeout(m,function(t){var a=e-(t-l);return u?ln(a,o-(t-c)):a}(t))}function b(t){return s=void 0,h&&n?p(t):(n=r=void 0,i)}function v(){var t=on(),a=g(t);if(n=arguments,r=this,l=t,a){if(void 0===s)return f(l);if(u)return clearTimeout(s),s=setTimeout(m,e),p(l)}return void 0===s&&(s=setTimeout(m,e)),i}return e=rn(e)||0,Za(a)&&(d=!!a.leading,o=(u="maxWait"in a)?sn(rn(a.maxWait)||0,e):o,h="trailing"in a?!!a.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=r=s=void 0},v.flush=function(){return void 0===s?i:b(on())},v}(()=>{let t={menuDialogClosed:!1,countryDialogClosed:!1};const e=new URLSearchParams(location.search);e.has("country")||e.has("iso2")?t.countryDialogClosed=!0:t.menuDialogClosed=!0,Yt.close(t)},10,{leading:!0,trailing:!1}),En=N(zn||(zn=(t=>t)`
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
`));function Un(t){return Rt(t,"yyyy-MM-dd")}("requestIdleCallback"in window?window.requestIdleCallback:t=>setTimeout(t,1e3))(()=>{import("./fea96408.js"),import("./3d65cc4a.js")}),console.log("🌐 Project Lockdown, version: 0.0.0"),window.addEventListener("appinstalled",()=>{window.location.reload()}),E("(prefers-color-scheme: dark)",t=>{const e=localStorage.getItem("darkmode");null!==e?"true"===e&&(document.documentElement.classList.add("dark"),Sa(!0)):t?(document.documentElement.classList.add("dark"),Sa(!0)):(document.documentElement.classList.remove("dark"),Sa(!1))}),function(e,a,n){var r,o,c;t.__&&t.__(e,a),o=(r=n===i)?null:n&&n.__k||a.__k,e=h(f,null,[e]),c=[],M(a,(r?a:n||a).__k=e,o||s,s,void 0!==a.ownerSVGElement,n&&!r?[n]:o?null:l.slice.call(a.childNodes),c,n||s,r),S(c,e)}([" ",h(class extends g{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""},haveSelectedDate:!1},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__showDialog=this.__showDialog.bind(this),this.__showDialogRoute=this.__showDialogRoute.bind(this),this.__onSelectDate=this.__onSelectDate.bind(this)}async componentDidMount(){this.__onPathChanged(),E("(min-width: 960px)",t=>{this.setState({isMobile:!getMatchedCSSRules})})}componentWillMount(){Bt.addEventListener("path-changed",this.__onPathChanged),this.setState({showStatsbox:1==Number(Bt.url.searchParams.get("statsbox")||1),showMenu:1==Number(Bt.url.searchParams.get("menu")||1),showSlider:1==Number(Bt.url.searchParams.get("slider")||1)})}componentWillUnmount(){Bt.removeEventListener("path-changed",this.__onPathChanged)}render(){const t=this.state.haveSelectedDate?Un(this.state.haveSelectedDate):Un(new Date);return[h(Le,{selectedDate:t,showStatsbox:this.state.showStatsbox}),this.state.showStatsbox?h("div",{class:En},h(ne,null)):"",h("div",{class:En},h(ne,{selectedDate:t})),this.state.showMenu?h(Oa,{opened:this.state.dialog.opened,changeRoute:this.__showDialogRoute,close:this.__closeDialog}):"",h(Zt,{selectedDate:t}),this.state.showSlider?h(Ln,{onChange:this.__onSelectDate}):"",this.state.dialog.opened?h(Na,{component:()=>import("./fea96408.js"),props:{...this.state.dialog,onClose:this.__closeDialog}}):""]}__showDialogRoute({template:t,title:e}){const a=Bt.url.searchParams.get("country");a?Bt.setPath(`${e}?country=${a}`):Bt.setPath(e),this.state.isMobile&&(Bt.setSearchParam("country",null),this.__showDialog({template:t,title:e}))}__onPathChanged(){const t=Bt.url.searchParams.get("country"),e=Bt.url.searchParams.get("iso2"),a=this.state.haveSelectedDate||new Date;t&&e&&this.setState({dialog:{opened:!0,template:[" ",h(Na,{component:()=>import("./3d65cc4a.js"),props:{country:t,iso2:e,date:a}})," "],title:t}})}__showDialog({template:t,title:e}){this.setState({dialog:{opened:!0,template:t,title:e}})}__closeCountryInfo(){Bt.setSearchParam("country",void 0),Bt.setSearchParam("iso2",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),An(),this.__closeCountryInfo()}__onSelectDate(t){this.setState({haveSelectedDate:t})}},null)," "],document.getElementById("app"));export{Ft as E,le as a,_a as b,N as c,ve as d,we as e,Rt as f,_e as g,h,xe as i,ke as j,Me as k,wa as l,g as m,Se as n,ue as o,De as p,he as q,Bt as r,Ce as s,fe as t,ge as u,pe as v,ye as w};
