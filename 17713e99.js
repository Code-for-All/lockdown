var t,a,n,r,o,i,s={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function d(e,t){for(var a in t)e[a]=t[a];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,a){var n,r=arguments,o={};for(n in t)"key"!==n&&"ref"!==n&&(o[n]=t[n]);if(arguments.length>3)for(a=[a],n=3;n<arguments.length;n++)a.push(r[n]);if(null!=a&&(o.children=a),"function"==typeof e&&null!=e.defaultProps)for(n in e.defaultProps)void 0===o[n]&&(o[n]=e.defaultProps[n]);return p(e,o,t&&t.key,t&&t.ref,null)}function p(e,a,n,r,o){var i={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),t.vnode&&t.vnode(i),i}function f(e){return e.children}function g(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var a;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e)return a.__e;return"function"==typeof e.type?m(e):null}function b(e){var t,a;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e){e.__e=e.__c.base=a.__e;break}return b(e)}}function v(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(w)}function w(){for(var e;n=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,a,n,r,o,i,s;e.__d&&(i=(o=(t=e).__v).__e,(s=t.__P)&&(a=[],(n=d({},o)).__v=n,r=M(s,o,n,t.__n,void 0!==s.ownerSVGElement,null,a,null==i?m(o):i),S(a,o),r!=i&&b(o)))}))}function _(e,t,a,n,r,o,i,c,d){var h,p,f,g,b,v,w,_=a&&a.__k||l,y=_.length;if(c==s&&(c=null!=o?o[0]:y?m(a,0):null),h=0,t.__k=x(t.__k,(function(a){if(null!=a){if(a.__=t,a.__b=t.__b+1,null===(f=_[h])||f&&a.key==f.key&&a.type===f.type)_[h]=void 0;else for(p=0;p<y;p++){if((f=_[p])&&a.key==f.key&&a.type===f.type){_[p]=void 0;break}f=null}if(g=M(e,a,f=f||s,n,r,o,i,c,d),(p=a.ref)&&f.ref!=p&&(w||(w=[]),f.ref&&w.push(f.ref,null,a),w.push(p,a.__c||g,a)),null!=g){var l;if(null==v&&(v=g),void 0!==a.__d)l=a.__d,a.__d=void 0;else if(o==f||g!=c||null==g.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(g),l=null;else{for(b=c,p=0;(b=b.nextSibling)&&p<y;p+=2)if(b==g)break e;e.insertBefore(g,c),l=c}"option"==t.type&&(e.value="")}c=void 0!==l?l:g.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&f.__e==c&&c.parentNode!=e&&(c=m(f))}return h++,a})),t.__e=v,null!=o&&"function"!=typeof t.type)for(h=o.length;h--;)null!=o[h]&&u(o[h]);for(h=y;h--;)null!=_[h]&&P(_[h],_[h]);if(w)for(h=0;h<w.length;h++)L(w[h],w[++h],w[++h])}function x(e,t,a){if(null==a&&(a=[]),null==e||"boolean"==typeof e)t&&a.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)x(e[n],t,a);else a.push(t?t("string"==typeof e||"number"==typeof e?p(null,e,null,null,e):null!=e.__e||null!=e.__c?p(e.type,e.props,e.key,null,e.__v):e):e);return a}function y(e,t,a){"-"===t[0]?e.setProperty(t,a):e[t]="number"==typeof a&&!1===c.test(t)?a+"px":null==a?"":a}function k(e,t,a,n,r){var o,i,s,l,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(o=e.style,"string"==typeof a)o.cssText=a;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(l in n)a&&l in a||y(o,l,"");if(a)for(c in a)n&&a[c]===n[c]||y(o,c,a[c])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),a?(n||e.addEventListener(t,C,i),(e.l||(e.l={}))[t]=a):e.removeEventListener(t,C,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==a?"":a:"function"!=typeof a&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==a||!1===a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),a):null==a||!1===a&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,a))}function C(e){this.l[e.type](t.event?t.event(e):e)}function M(e,a,n,r,o,i,s,l,c){var u,h,p,m,b,v,w,x,y,k,C=a.type;if(void 0!==a.constructor)return null;(u=t.__b)&&u(a);try{e:if("function"==typeof C){if(x=a.props,y=(u=C.contextType)&&r[u.__c],k=u?y?y.props.value:u.__:r,n.__c?w=(h=a.__c=n.__c).__=h.__E:("prototype"in C&&C.prototype.render?a.__c=h=new C(x,k):(a.__c=h=new g(x,k),h.constructor=C,h.render=T),y&&y.sub(h),h.props=x,h.state||(h.state={}),h.context=k,h.__n=r,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=C.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,C.getDerivedStateFromProps(x,h.__s))),m=h.props,b=h.state,p)null==C.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==C.getDerivedStateFromProps&&x!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(x,k),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(x,h.__s,k)||a.__v===n.__v&&!h.__){for(h.props=x,h.state=h.__s,a.__v!==n.__v&&(h.__d=!1),h.__v=a,a.__e=n.__e,a.__k=n.__k,h.__h.length&&s.push(h),u=0;u<a.__k.length;u++)a.__k[u]&&(a.__k[u].__=a);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(x,h.__s,k),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(m,b,v)}))}h.context=k,h.props=x,h.state=h.__s,(u=t.__r)&&u(a),h.__d=!1,h.__v=a,h.__P=e,u=h.render(h.props,h.state,h.context),a.__k=null!=u&&u.type==f&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(r=d(d({},r),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(v=h.getSnapshotBeforeUpdate(m,b)),_(e,a,n,r,o,i,s,l,c),h.base=a.__e,h.__h.length&&s.push(h),w&&(h.__E=h.__=null),h.__e=!1}else null==i&&a.__v===n.__v?(a.__k=n.__k,a.__e=n.__e):a.__e=D(n.__e,a,n,r,o,i,s,c);(u=t.diffed)&&u(a)}catch(e){a.__v=null,t.__e(e,a,n)}return a.__e}function S(e,a){t.__c&&t.__c(a,e),e.some((function(a){try{e=a.__h,a.__h=[],e.some((function(e){e.call(a)}))}catch(e){t.__e(e,a.__v)}}))}function D(e,t,a,n,r,o,i,c){var d,u,h,p,f,g=a.props,m=t.props;if(r="svg"===t.type||r,null!=o)for(d=0;d<o.length;d++)if(null!=(u=o[d])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,o[d]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,m.is&&{is:m.is}),o=null,c=!1}if(null===t.type)g!==m&&e.data!=m&&(e.data=m);else{if(null!=o&&(o=l.slice.call(e.childNodes)),h=(g=a.props||s).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!c){if(g===s)for(g={},f=0;f<e.attributes.length;f++)g[e.attributes[f].name]=e.attributes[f].value;(p||h)&&(p&&h&&p.__html==h.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,a,n,r){var o;for(o in a)"children"===o||"key"===o||o in t||k(e,o,null,a[o],n);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||a[o]===t[o]||k(e,o,t[o],a[o],n)})(e,m,g,r,c),p?t.__k=[]:(t.__k=t.props.children,_(e,t,a,n,"foreignObject"!==t.type&&r,o,i,s,c)),c||("value"in m&&void 0!==(d=m.value)&&d!==e.value&&k(e,"value",d,g.value,!1),"checked"in m&&void 0!==(d=m.checked)&&d!==e.checked&&k(e,"checked",d,g.checked,!1))}return e}function L(e,a,n){try{"function"==typeof e?e(a):e.current=a}catch(e){t.__e(e,n)}}function P(e,a,n){var r,o,i;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||L(r,null,a)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,a)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],a,n);null!=o&&u(o)}function T(e,t,a){return this.constructor(e,a)}t={__e:function(e,t){for(var a,n;t=t.__;)if((a=t.__c)&&!a.__)try{if(a.constructor&&null!=a.constructor.getDerivedStateFromError&&(n=!0,a.setState(a.constructor.getDerivedStateFromError(e))),null!=a.componentDidCatch&&(n=!0,a.componentDidCatch(e)),n)return v(a.__E=a)}catch(t){e=t}throw e}},g.prototype.setState=function(e,t){var a;a=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(a,this.props)),e&&d(a,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},g.prototype.render=f,a=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=s;var z=function e(t,a,n,r){var o;a[0]=0;for(var i=1;i<a.length;i++){var s=a[i++],l=a[i]?(a[0]|=s?1:2,n[a[i++]]):a[++i];3===s?r[0]=l:4===s?r[1]=Object.assign(r[1]||{},l):5===s?(r[1]=r[1]||{})[a[++i]]=l:6===s?r[1][a[++i]]+=l+"":s?(o=t.apply(l,e(t,l,n,["",null])),r.push(o),l[0]?a[0]|=2:(a[i-2]=0,a[i]=o)):r.push(l)}return r},A=new Map;(function(e){var t=A.get(this);return t||(t=new Map,A.set(this,t)),(t=z(this,t.get(e)||(t.set(e,t=function(e){for(var t,a,n=1,r="",o="",i=[0],s=function(e){1===n&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===n&&(e||r)?(i.push(3,e,r),n=2):2===n&&"..."===r&&e?i.push(4,e,0):2===n&&r&&!e?i.push(5,0,!0,r):n>=5&&((r||!e&&5===n)&&(i.push(n,0,r,a),n=6),e&&(i.push(n,e,0,a),n=6)),r=""},l=0;l<e.length;l++){l&&(1===n&&s(),s(l));for(var c=0;c<e[l].length;c++)t=e[l][c],1===n?"<"===t?(s(),i=[i],n=3):r+=t:4===n?"--"===r&&">"===t?(n=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(s(),n=1):n&&("="===t?(n=5,a=r,r=""):"/"===t&&(n<5||">"===e[l][c+1])?(s(),3===n&&(i=i[0]),n=i,(i=i[0]).push(2,0,n),n=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),n=2):r+=t),3===n&&"!--"===r&&(n=4,i=i[0])}return s(),i}(e)),t),arguments,[])).length>1?t:t[0]}).bind(h);const E=(e,t)=>{let a=window.matchMedia(e);a.addListener(e=>t(e.matches)),t(a.matches)};var H=t=>{var a=/^\0+/g,n=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,i=/([,: ])(transform)/g,s=/,+\s*(?![^(]*[)])/g,l=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,d=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,h=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,m=/:(read-only)/g,b=/\s+(?=[{\];=:>])/g,v=/([[}=:>])\s+/g,w=/(\{[^{]+?);(?=\})/g,_=/\s{2,}/g,x=/([^\(])(:+) */g,y=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,M=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,P="-webkit-",T="-moz-",z="-ms-",A=59,E=125,H=123,U=40,j=41,N=10,W=13,O=32,R=45,I=42,V=44,B=58,F=47,Y=1,q=1,$=0,Q=1,X=1,G=1,Z=0,J=0,K=0,ee=[],te=[],ae=0,ne=null,re=0,oe=1,ie="",se="",le="";function ce(e,t,r,o,i){for(var s,l,d=0,u=0,h=0,p=0,b=0,v=0,w=0,_=0,y=0,C=0,M=0,S=0,D=0,L=0,T=0,z=0,Z=0,te=0,ne=0,ue=r.length,be=ue-1,ve="",we="",_e="",xe="",ye="",ke="";T<ue;){if(w=r.charCodeAt(T),T===be&&u+p+h+d!==0&&(0!==u&&(w=u===F?N:F),p=h=d=0,ue++,be++),u+p+h+d===0){if(T===be&&(z>0&&(we=we.replace(n,"")),we.trim().length>0)){switch(w){case O:case 9:case A:case W:case N:break;default:we+=r.charAt(T)}w=A}if(1===Z)switch(w){case H:case E:case A:case 34:case 39:case U:case j:case V:Z=0;case 9:case W:case N:case O:break;default:for(Z=0,ne=T,b=w,T--,w=A;ne<ue;)switch(r.charCodeAt(ne++)){case N:case W:case A:++T,w=b,ne=ue;break;case B:z>0&&(++T,w=b);case H:ne=ue}}switch(w){case H:for(b=(we=we.trim()).charCodeAt(0),M=1,ne=++T;T<ue;){switch(w=r.charCodeAt(T)){case H:M++;break;case E:M--;break;case F:switch(v=r.charCodeAt(T+1)){case I:case F:T=me(v,T,be,r)}break;case 91:w++;case U:w++;case 34:case 39:for(;T++<be&&r.charCodeAt(T)!==w;);}if(0===M)break;T++}switch(_e=r.substring(ne,T),0===b&&(b=(we=we.replace(a,"").trim()).charCodeAt(0)),b){case 64:switch(z>0&&(we=we.replace(n,"")),v=we.charCodeAt(1)){case 100:case 109:case 115:case R:s=t;break;default:s=ee}if(ne=(_e=ce(t,s,_e,v,i+1)).length,K>0&&0===ne&&(ne=we.length),ae>0&&(l=ge(3,_e,s=de(ee,we,te),t,q,Y,ne,v,i,o),we=s.join(""),void 0!==l&&0===(ne=(_e=l.trim()).length)&&(v=0,_e="")),ne>0)switch(v){case 115:we=we.replace(k,fe);case 100:case 109:case R:_e=we+"{"+_e+"}";break;case 107:_e=(we=we.replace(f,"$1 $2"+(oe>0?ie:"")))+"{"+_e+"}",_e=1===X||2===X&&pe("@"+_e,3)?"@"+P+_e+"@"+_e:"@"+_e;break;default:_e=we+_e,112===o&&(xe+=_e,_e="")}else _e="";break;default:_e=ce(t,de(t,we,te),_e,o,i+1)}ye+=_e,S=0,Z=0,L=0,z=0,te=0,D=0,we="",_e="",w=r.charCodeAt(++T);break;case E:case A:if((ne=(we=(z>0?we.replace(n,""):we).trim()).length)>1)switch(0===L&&((b=we.charCodeAt(0))===R||b>96&&b<123)&&(ne=(we=we.replace(" ",":")).length),ae>0&&void 0!==(l=ge(1,we,t,e,q,Y,xe.length,o,i,o))&&0===(ne=(we=l.trim()).length)&&(we="\0\0"),b=we.charCodeAt(0),v=we.charCodeAt(1),b){case 0:break;case 64:if(105===v||99===v){ke+=we+r.charAt(T);break}default:if(we.charCodeAt(ne-1)===B)break;xe+=he(we,b,v,we.charCodeAt(2))}S=0,Z=0,L=0,z=0,te=0,we="",w=r.charCodeAt(++T)}}switch(w){case W:case N:if(u+p+h+d+J===0)switch(C){case j:case 39:case 34:case 64:case 126:case 62:case I:case 43:case F:case R:case B:case V:case A:case H:case E:break;default:L>0&&(Z=1)}u===F?u=0:Q+S===0&&107!==o&&we.length>0&&(z=1,we+="\0"),ae*re>0&&ge(0,we,t,e,q,Y,xe.length,o,i,o),Y=1,q++;break;case A:case E:if(u+p+h+d===0){Y++;break}default:switch(Y++,ve=r.charAt(T),w){case 9:case O:if(p+d+u===0)switch(_){case V:case B:case 9:case O:ve="";break;default:w!==O&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:p+u+d===0&&Q>0&&(te=1,z=1,ve="\f"+ve);break;case 108:if(p+u+d+$===0&&L>0)switch(T-L){case 2:112===_&&r.charCodeAt(T-3)===B&&($=_);case 8:111===y&&($=y)}break;case B:p+u+d===0&&(L=T);break;case V:u+h+p+d===0&&(z=1,ve+="\r");break;case 34:case 39:0===u&&(p=p===w?0:0===p?w:p);break;case 91:p+u+h===0&&d++;break;case 93:p+u+h===0&&d--;break;case j:p+u+d===0&&h--;break;case U:if(p+u+d===0){if(0===S)switch(2*_+3*y){case 533:break;default:M=0,S=1}h++}break;case 64:u+h+p+d+L+D===0&&(D=1);break;case I:case F:if(p+d+h>0)break;switch(u){case 0:switch(2*w+3*r.charCodeAt(T+1)){case 235:u=F;break;case 220:ne=T,u=I}break;case I:w===F&&_===I&&ne+2!==T&&(33===r.charCodeAt(ne+2)&&(xe+=r.substring(ne,T+1)),ve="",u=0)}}if(0===u){if(Q+p+d+D===0&&107!==o&&w!==A)switch(w){case V:case 126:case 62:case 43:case j:case U:if(0===S){switch(_){case 9:case O:case N:case W:ve+="\0";break;default:ve="\0"+ve+(w===V?"":"\0")}z=1}else switch(w){case U:L+7===T&&108===_&&(L=0),S=++M;break;case j:0==(S=--M)&&(z=1,ve+="\0")}break;case 9:case O:switch(_){case 0:case H:case E:case A:case V:case 12:case 9:case O:case N:case W:break;default:0===S&&(z=1,ve+="\0")}}we+=ve,w!==O&&9!==w&&(C=w)}}y=_,_=w,T++}if(ne=xe.length,K>0&&0===ne&&0===ye.length&&0===t[0].length==0&&(109!==o||1===t.length&&(Q>0?se:le)===t[0])&&(ne=t.join(",").length+2),ne>0){if(s=0===Q&&107!==o?function(e){for(var t,a,r=0,o=e.length,i=Array(o);r<o;++r){for(var s=e[r].split(c),l="",d=0,u=0,h=0,p=0,f=s.length;d<f;++d)if(!(0===(u=(a=s[d]).length)&&f>1)){if(h=l.charCodeAt(l.length-1),p=a.charCodeAt(0),t="",0!==d)switch(h){case I:case 126:case 62:case 43:case O:case U:break;default:t=" "}switch(p){case 38:a=t+se;case 126:case 62:case 43:case O:case j:case U:break;case 91:a=t+a+se;break;case B:switch(2*a.charCodeAt(1)+3*a.charCodeAt(2)){case 530:if(G>0){a=t+a.substring(8,u-1);break}default:(d<1||s[d-1].length<1)&&(a=t+se+a)}break;case V:t="";default:a=u>1&&a.indexOf(":")>0?t+a.replace(x,"$1"+se+"$2"):t+a+se}l+=a}i[r]=l.replace(n,"").trim()}return i}(t):t,ae>0&&void 0!==(l=ge(2,xe,s,e,q,Y,ne,o,i,o))&&0===(xe=l).length)return ke+xe+ye;if(xe=s.join(",")+"{"+xe+"}",X*$!=0){switch(2!==X||pe(xe,2)||($=0),$){case 111:xe=xe.replace(m,":-moz-$1")+xe;break;case 112:xe=xe.replace(g,"::"+P+"input-$1")+xe.replace(g,"::-moz-$1")+xe.replace(g,":-ms-input-$1")+xe}$=0}}return ke+xe+ye}function de(e,t,a){var n=t.trim().split(d),r=n,o=n.length,i=e.length;switch(i){case 0:case 1:for(var s=0,l=0===i?"":e[0]+" ";s<o;++s)r[s]=ue(l,r[s],a,i).trim();break;default:s=0;var c=0;for(r=[];s<o;++s)for(var u=0;u<i;++u)r[c++]=ue(e[u]+" ",n[s],a,i).trim()}return r}function ue(e,t,a,n){var r=t,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(Q+n){case 0:case 1:if(0===e.trim().length)break;default:return r.replace(u,"$1"+e.trim())}break;case B:switch(r.charCodeAt(1)){case 103:if(G>0&&Q>0)return r.replace(h,"$1").replace(u,"$1"+le);break;default:return e.trim()+r.replace(u,"$1"+e.trim())}default:if(a*Q>0&&r.indexOf("\f")>0)return r.replace(u,(e.charCodeAt(0)===B?"":"$1")+e.trim())}return e+r}function he(e,t,a,n){var c,d=0,u=e+";",h=2*t+3*a+4*n;if(944===h)return function(e){var t=e.length,a=e.indexOf(":",9)+1,n=e.substring(0,a).trim(),r=e.substring(a,t-1).trim();switch(e.charCodeAt(9)*oe){case 0:break;case R:if(110!==e.charCodeAt(10))break;default:var o=r.split((r="",s)),i=0;for(a=0,t=o.length;i<t;a=0,++i){for(var c=o[i],d=c.split(l);c=d[a];){var u=c.charCodeAt(0);if(1===oe&&(u>64&&u<90||u>96&&u<123||95===u||u===R&&c.charCodeAt(1)!==R))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=ie}}d[a++]=c}r+=(0===i?"":",")+d.join(" ")}}return r=n+r+";",1===X||2===X&&pe(r,1)?P+r+r:r}(u);if(0===X||2===X&&!pe(u,1))return u;switch(h){case 1015:return 97===u.charCodeAt(10)?P+u+u:u;case 951:return 116===u.charCodeAt(3)?P+u+u:u;case 963:return 110===u.charCodeAt(5)?P+u+u:u;case 1009:if(100!==u.charCodeAt(4))break;case 969:case 942:return P+u+u;case 978:return P+u+T+u+u;case 1019:case 983:return P+u+T+u+z+u+u;case 883:return u.charCodeAt(8)===R?P+u+u:u.indexOf("image-set(",11)>0?u.replace(L,"$1"+P+"$2")+u:u;case 932:if(u.charCodeAt(4)===R)switch(u.charCodeAt(5)){case 103:return P+"box-"+u.replace("-grow","")+P+u+z+u.replace("grow","positive")+u;case 115:return P+u+z+u.replace("shrink","negative")+u;case 98:return P+u+z+u.replace("basis","preferred-size")+u}return P+u+z+u+u;case 964:return P+u+z+"flex-"+u+u;case 1023:if(99!==u.charCodeAt(8))break;return c=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),P+"box-pack"+c+P+u+z+"flex-pack"+c+u;case 1005:return o.test(u)?u.replace(r,":"+P)+u.replace(r,":"+T)+u:u;case 1e3:switch(d=(c=u.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(d)){case 226:c=u.replace(y,"tb");break;case 232:c=u.replace(y,"tb-rl");break;case 220:c=u.replace(y,"lr");break;default:return u}return P+u+z+c+u;case 1017:if(-1===u.indexOf("sticky",9))return u;case 975:switch(d=(u=e).length-10,h=(c=(33===u.charCodeAt(d)?u.substring(0,d):u).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:u=u.replace(c,P+c)+";"+u;break;case 207:case 102:u=u.replace(c,P+(h>102?"inline-":"")+"box")+";"+u.replace(c,P+c)+";"+u.replace(c,z+c+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===R)switch(u.charCodeAt(6)){case 105:return c=u.replace("-items",""),P+u+P+"box-"+c+z+"flex-"+c+u;case 115:return P+u+z+"flex-item-"+u.replace(M,"")+u;default:return P+u+z+"flex-line-pack"+u.replace("align-content","").replace(M,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==R||122===u.charCodeAt(4))break;case 931:case 953:if(!0===D.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?he(e.replace("stretch","fill-available"),t,a,n).replace(":fill-available",":stretch"):u.replace(c,P+c)+u.replace(c,T+c.replace("fill-",""))+u;break;case 962:if(u=P+u+(102===u.charCodeAt(5)?z+u:"")+u,a+n===211&&105===u.charCodeAt(13)&&u.indexOf("transform",10)>0)return u.substring(0,u.indexOf(";",27)+1).replace(i,"$1"+P+"$2")+u}return u}function pe(e,t){var a=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?a:10),r=e.substring(a+1,e.length-1);return ne(2!==t?n:n.replace(S,"$1"),r,t)}function fe(e,t){var a=he(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return a!==t+";"?a.replace(C," or ($1)").substring(4):"("+t+")"}function ge(e,t,a,n,r,o,i,s,l,c){for(var d,u=0,h=t;u<ae;++u)switch(d=te[u].call(ve,e,h,a,n,r,o,i,s,l,c)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==t)return h}function me(e,t,a,n){for(var r=t+1;r<a;++r)switch(n.charCodeAt(r)){case F:if(e===I&&n.charCodeAt(r-1)===I&&t+2!==r)return r+1;break;case N:if(e===F)return r+1}return r}function be(e){for(var t in e){var a=e[t];switch(t){case"keyframe":oe=0|a;break;case"global":G=0|a;break;case"cascade":Q=0|a;break;case"compress":Z=0|a;break;case"semicolon":J=0|a;break;case"preserve":K=0|a;break;case"prefix":ne=null,a?"function"!=typeof a?X=1:(X=2,ne=a):X=0}}return be}function ve(t,a){if(void 0!==this&&this.constructor===ve)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),oe>0&&(ie=r.replace(p,91===o?"":"-")),o=1,1===Q?le=r:se=r;var i,s=[le];ae>0&&void 0!==(i=ge(-1,a,s,s,q,Y,0,0,0,0))&&"string"==typeof i&&(a=i);var l=ce(ee,s,a,0,0);return ae>0&&void 0!==(i=ge(-2,l,s,s,q,Y,l.length,0,0,0))&&"string"!=typeof(l=i)&&(o=0),ie="",le="",se="",$=0,q=1,Y=1,Z*o==0?l:l.replace(n,"").replace(b,"").replace(v,"$1").replace(w,"$1").replace(_," ")}return ve.use=function e(t){switch(t){case void 0:case null:ae=te.length=0;break;default:if("function"==typeof t)te[ae++]=t;else if("object"==typeof t)for(var a=0,n=t.length;a<n;++a)e(t[a]);else re=0|!!t}return e},ve.set=be,void 0!==t&&be(t),ve};const U={},j=document.createElement("style");document.head.appendChild(j);const N=e=>`.${e}{display:none}`,W=e=>/^(\/|https?:\/\/)/.test(e.trim()),O=e=>t=>a=>{j.innerHTML+=(U[e]={hash:t,rules:H()("."+t,a)}).rules,W(e)&&(e=>{j.innerHTML=j.innerHTML.replace(N(e),"")})(t)};var R=(e,...t)=>{const a=e[0].startsWith("/")?e[0]:e.reduce((e,a,n)=>e+(a+(null==t[n]?"":t[n])),"");if(U[a])return U[a].hash;const n="csz-"+Math.random().toString(36).replace("0.",""),r=O(a)(n);return W(a)?((e=>{j.innerHTML=N(e)+j.innerHTML})(n),fetch(a).then(e=>e.text()).then(r)):r(a),n};function I(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function V(e){I(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function B(e){I(1,arguments);var t=V(e);return!isNaN(t)}var F={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var q={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},$={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Q(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;n=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[s]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function X(e){return function(t,a){var n=String(t),r=a||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],s=n.match(i);if(!s)return null;var l,c=s[0],d=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(d,(function(e){return e.test(c)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(d,(function(e){return e.test(c)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:n.slice(c.length)}}}var G,Z={code:"en-US",formatDistance:function(e,t,a){var n;return a=a||{},n="string"==typeof F[e]?F[e]:1===t?F[e].one:F[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"in "+n:n+" ago":n},formatLong:q,formatRelative:function(e,t,a,n){return $[e]},localize:{ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:Q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(G={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var a=String(e),n=t||{},r=a.match(G.matchPattern);if(!r)return null;var o=r[0],i=a.match(G.parsePattern);if(!i)return null;var s=G.valueCallback?G.valueCallback(i[0]):i[0];return{value:s=n.valueCallback?n.valueCallback(s):s,rest:a.slice(o.length)}}),era:X({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:X({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:X({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:X({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:X({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function J(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function K(e,t){I(2,arguments);var a=V(e).getTime(),n=J(t);return new Date(a+n)}function ee(e,t){I(2,arguments);var a=J(t);return K(e,-a)}function te(e,t){for(var a=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return a+n}var ae=function(e,t){var a=e.getUTCFullYear(),n=a>0?a:1-a;return te("yy"===t?n%100:n,t.length)},ne=function(e,t){var a=e.getUTCMonth();return"M"===t?String(a+1):te(a+1,2)},re=function(e,t){return te(e.getUTCDate(),t.length)},oe=function(e,t){return te(e.getUTCHours()%12||12,t.length)},ie=function(e,t){return te(e.getUTCHours(),t.length)},se=function(e,t){return te(e.getUTCMinutes(),t.length)},le=function(e,t){return te(e.getUTCSeconds(),t.length)},ce=function(e,t){var a=t.length,n=e.getUTCMilliseconds();return te(Math.floor(n*Math.pow(10,a-3)),t.length)};function de(e){I(1,arguments);var t=1,a=V(e),n=a.getUTCDay(),r=(n<t?7:0)+n-t;return a.setUTCDate(a.getUTCDate()-r),a.setUTCHours(0,0,0,0),a}function ue(e){I(1,arguments);var t=V(e),a=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(a+1,0,4),n.setUTCHours(0,0,0,0);var r=de(n),o=new Date(0);o.setUTCFullYear(a,0,4),o.setUTCHours(0,0,0,0);var i=de(o);return t.getTime()>=r.getTime()?a+1:t.getTime()>=i.getTime()?a:a-1}function he(e){I(1,arguments);var t=ue(e),a=new Date(0);a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0);var n=de(a);return n}function pe(e,t){I(1,arguments);var a=t||{},n=a.locale,r=n&&n.options&&n.options.weekStartsOn,o=null==r?0:J(r),i=null==a.weekStartsOn?o:J(a.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=V(e),l=s.getUTCDay(),c=(l<i?7:0)+l-i;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function fe(e,t){I(1,arguments);var a=V(e,t),n=a.getUTCFullYear(),r=t||{},o=r.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:J(i),l=null==r.firstWeekContainsDate?s:J(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(n+1,0,l),c.setUTCHours(0,0,0,0);var d=pe(c,t),u=new Date(0);u.setUTCFullYear(n,0,l),u.setUTCHours(0,0,0,0);var h=pe(u,t);return a.getTime()>=d.getTime()?n+1:a.getTime()>=h.getTime()?n:n-1}function ge(e,t){I(1,arguments);var a=t||{},n=a.locale,r=n&&n.options&&n.options.firstWeekContainsDate,o=null==r?1:J(r),i=null==a.firstWeekContainsDate?o:J(a.firstWeekContainsDate),s=fe(e,t),l=new Date(0);l.setUTCFullYear(s,0,i),l.setUTCHours(0,0,0,0);var c=pe(l,t);return c}var me="midnight",be="noon",ve="morning",we="afternoon",_e="evening",xe="night",ye={G:function(e,t,a){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if("yo"===t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return a.ordinalNumber(r,{unit:"year"})}return ae(e,t)},Y:function(e,t,a,n){var r=fe(e,n),o=r>0?r:1-r;return"YY"===t?te(o%100,2):"Yo"===t?a.ordinalNumber(o,{unit:"year"}):te(o,t.length)},R:function(e,t){return te(ue(e),t.length)},u:function(e,t){return te(e.getUTCFullYear(),t.length)},Q:function(e,t,a){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return te(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return te(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){var n=e.getUTCMonth();switch(t){case"M":case"MM":return ne(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return te(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){var r=function(e,t){I(1,arguments);var a=V(e),n=pe(a,t).getTime()-ge(a,t).getTime();return Math.round(n/6048e5)+1}(e,n);return"wo"===t?a.ordinalNumber(r,{unit:"week"}):te(r,t.length)},I:function(e,t,a){var n=function(e){I(1,arguments);var t=V(e),a=de(t).getTime()-he(t).getTime();return Math.round(a/6048e5)+1}(e);return"Io"===t?a.ordinalNumber(n,{unit:"week"}):te(n,t.length)},d:function(e,t,a){return"do"===t?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):re(e,t)},D:function(e,t,a){var n=function(e){I(1,arguments);var t=V(e),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),r=a-n;return Math.floor(r/864e5)+1}(e);return"Do"===t?a.ordinalNumber(n,{unit:"dayOfYear"}):te(n,t.length)},E:function(e,t,a){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){var r=e.getUTCDay(),o=(r-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return te(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){var r=e.getUTCDay(),o=(r-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return te(o,t.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){var n=e.getUTCDay(),r=0===n?7:n;switch(t){case"i":return String(r);case"ii":return te(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,a){var n,r=e.getUTCHours();switch(n=12===r?be:0===r?me:r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,a){var n,r=e.getUTCHours();switch(n=r>=17?_e:r>=12?we:r>=4?ve:xe,t){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,a){if("ho"===t){var n=e.getUTCHours()%12;return 0===n&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return oe(e,t)},H:function(e,t,a){return"Ho"===t?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):ie(e,t)},K:function(e,t,a){var n=e.getUTCHours()%12;return"Ko"===t?a.ordinalNumber(n,{unit:"hour"}):te(n,t.length)},k:function(e,t,a){var n=e.getUTCHours();return 0===n&&(n=24),"ko"===t?a.ordinalNumber(n,{unit:"hour"}):te(n,t.length)},m:function(e,t,a){return"mo"===t?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):se(e,t)},s:function(e,t,a){return"so"===t?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):le(e,t)},S:function(e,t){return ce(e,t)},X:function(e,t,a,n){var r=(n._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return Ce(r);case"XXXX":case"XX":return Me(r);case"XXXXX":case"XXX":default:return Me(r,":")}},x:function(e,t,a,n){var r=(n._originalDate||e).getTimezoneOffset();switch(t){case"x":return Ce(r);case"xxxx":case"xx":return Me(r);case"xxxxx":case"xxx":default:return Me(r,":")}},O:function(e,t,a,n){var r=(n._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ke(r,":");case"OOOO":default:return"GMT"+Me(r,":")}},z:function(e,t,a,n){var r=(n._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ke(r,":");case"zzzz":default:return"GMT"+Me(r,":")}},t:function(e,t,a,n){var r=n._originalDate||e;return te(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,a,n){return te((n._originalDate||e).getTime(),t.length)}};function ke(e,t){var a=e>0?"-":"+",n=Math.abs(e),r=Math.floor(n/60),o=n%60;if(0===o)return a+String(r);var i=t||"";return a+String(r)+i+te(o,2)}function Ce(e,t){return e%60==0?(e>0?"-":"+")+te(Math.abs(e)/60,2):Me(e,t)}function Me(e,t){var a=t||"",n=e>0?"-":"+",r=Math.abs(e);return n+te(Math.floor(r/60),2)+a+te(r%60,2)}function Se(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function De(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var Le={p:De,P:function(e,t){var a,n=e.match(/(P+)(p+)?/),r=n[1],o=n[2];if(!o)return Se(e,t);switch(r){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",Se(r,t)).replace("{{time}}",De(o,t))}};function Pe(e){return e.getTime()%6e4}function Te(e){var t=new Date(e.getTime()),a=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*a+(a>0?(6e4+Pe(t))%6e4:Pe(t))}var ze=["D","DD"],Ae=["YY","YYYY"];function Ee(e){return-1!==ze.indexOf(e)}function He(e){return-1!==Ae.indexOf(e)}function Ue(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var je=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ne=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,We=/^'([^]*?)'?$/,Oe=/''/g,Re=/[a-zA-Z]/;function Ie(e,t,a){I(2,arguments);var n=String(t),r=a||{},o=r.locale||Z,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:J(i),l=null==r.firstWeekContainsDate?s:J(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:J(c),u=null==r.weekStartsOn?d:J(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var h=V(e);if(!B(h))throw new RangeError("Invalid time value");var p=Te(h),f=ee(h,p),g={firstWeekContainsDate:l,weekStartsOn:u,locale:o,_originalDate:h},m=n.match(Ne).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Le[t])(e,o.formatLong,g):e})).join("").match(je).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return Ve(e);var a=ye[t];if(a)return!r.useAdditionalWeekYearTokens&&He(e)&&Ue(e),!r.useAdditionalDayOfYearTokens&&Ee(e)&&Ue(e),a(f,e,o.localize,g);if(t.match(Re))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return m}function Ve(e){return e.match(We)[1].replace(Oe,"'")}class Be{constructor(){const e=document.createDocumentFragment();this.addEventListener=e.addEventListener.bind(e),this.dispatchEvent=e.dispatchEvent.bind(e),this.removeEventListener=e.removeEventListener.bind(e),this.__lastUpdate=Date.now()}_shouldInvalidate(){return new Date-this.__lastUpdate>3e5}}const Fe=new class extends Be{constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(e){window.history.pushState(null,"",e),this.__onPathChanged()}setSearchParam(e,t){const a=new URLSearchParams(location.search);t?a.set(e,t):a.delete(e);const n=a.toString();this.setPath(`${location.pathname}${n?"?"+n:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed")),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(e=>{e&&e.update()})}__onClick(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find(e=>"A"===e.tagName);if(!t||!t.href)return;if(t.hasAttribute("download")||t.href.includes("mailto:"))return;const a=t.getAttribute("target");if(a&&""!==a&&"_self"!==a)return;const n=new URL(t.href);n.hash||n.href.startsWith(document.baseURI)&&(e.preventDefault(),this.setPath(n.pathname))}};const Ye=new class extends Be{close(e){this.dispatchEvent(new CustomEvent("close",{detail:e}))}};let qe;const $e={url:new URL("./src/components/WorldMap.js",document.baseURI).href},Qe=R(qe||(qe=(e=>e)`
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
`)),Xe={asia:[21.943046,96.240234],europe:[52.160455,10.371094],usa:[45.089036,-100.898438]};function Ge(e){let t;switch(e){case"1":t="#6fcf97";break;case"2":t="#7aaeff";break;case"3":t="#eb5757";break;case"4":t="#f2994a";break;default:t="#CCCCCC"}return t}function Ze(e){let t={};for(let a in e)for(let n in e[a].data)for(let r in e[a].data[n]){let o=e[a].data[n][r];"all"!==n&&"US"!==n||(t[o.unit_code]=o)}return t}class Je extends g{constructor(){super(),this.__handleSelect=this.__handleSelect.bind(this),this.initMap=this.initMap.bind(this),this.updateMap=this.updateMap.bind(this);let e=window.location.href;for(let t in Xe)e.indexOf("lockdown."+t);this.state={lng:0,lat:0,zoom:2,countries:[],mapData:{},lookupTable:{},isMapReady:!1}}setMapState(e,t=[],a){t.forEach((function(t){e.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:a[t.ISO].feature_id},{kind:t.lockdown_status,name:t.name})}))}async initMap(e,t){window.mapboxgl||(console.log("check the map"),await((e=100)=>new Promise(t=>{setTimeout(()=>{t()},e)}))(),await this.initMap(e,t));let a=new window.mapboxgl.Map({accessToken:"pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrOWZpZHF3ajBic2YzbHQwYzQ5bGRnaXgifQ.NcQInXQmMy93L47QBMCAfg",container:this.ref,style:"mapbox://styles/jfqueralt/ck9hi7wl616pz1iugty1cpeiv?optimize=true",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});window.map=a;const n=e[this.props.selectedDate];a.on("style.load",()=>{let e=null;a.on("mousemove","admin-0-fill",(function(t){var n=a.queryRenderedFeatures(t.point,{layers:["admin-0-fill"]});t.features.length>0&&(e&&a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:e},{hover:!1}),e=n[0].id,a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:e},{hover:!0}))})),a.on("click","admin-0-fill",(function(e){const t=a.queryRenderedFeatures(e.point,{layers:["admin-0-fill"]});Fe.setSearchParam("country",t[0].state.name),Fe.setSearchParam("iso2",t[0].properties.iso_3166_1)})),console.log("the style is loaded")}),a.on("load",(function(){console.log("map is loaded"),r(t)}));const r=e=>{a.addSource("admin-0",{type:"vector",url:"mapbox://mapbox.boundaries-adm0-v3"});const t=Ze(e);a.addLayer({id:"admin-0-fill",type:"fill",source:"admin-0","source-layer":"boundaries_admin_0",filter:["any",["==","all",["get","worldview"]],["in","US",["get","worldview"]]],paint:{"fill-color":["case",["!=",["feature-state","kind"],null],["match",["feature-state","kind"],"1",Ge("1"),"2",Ge("2"),"3",Ge("3"),"4",Ge("4"),"#CCCCCC"],["case",["boolean",["feature-state","hover"],!1],"rgba(204,204,204,0.5)","rgba(204,204,204,0)"]],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.7,1]}},"waterway-label");const r=e=>{n.forEach((function(e){a.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:t[e.ISO].feature_id},{kind:e.lockdown_status,name:e.name})})),this.setState({isMapReady:!0})};a.isSourceLoaded("admin-0")?r():a.on("sourcedata",(function e(t){"admin-0"===t.sourceId&&t.isSourceLoaded&&(r(),a.off("sourcedata",e))}))};return this.setState({map:a}),a}updateMap(e,t,a){const n=Ze(t),r=e[a];this.setMapState(this.state.map,r,n)}async componentDidMount(){Ye.addEventListener("close",e=>{e.detail.countryDialogClosed&&form.focus()});const[e,t]=await Promise.all([fetch(new URL("../../data/lockdown.json",$e.url)).then(e=>e.json()),fetch(new URL("./../../data/boundaries-adm0-v3.json",$e.url)).then(e=>e.json())]),a=e["2020-04-26"];if(this.setState({countries:a,mapData:e,lookupTable:t}),await this.initMap(e,t),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});"granted"===e.state&&navigator.geolocation.getCurrentPosition(e=>{const{latitude:t,longitude:a}=e.coords;this.state.map.setCenter([a,t]),this.setState({islocationSet:!0})}),e.addEventListener("change",e=>{"granted"===e.target.state?navigator.geolocation.getCurrentPosition(e=>{localStorage.setItem("geolocation","true");const{latitude:t,longitude:a}=e.coords;this.state.map.setCenter([a,t]),this.setState({islocationSet:!0})}):localStorage.removeItem("geolocation")})}}componentWillUnmount(){this.state.map&&this.state.map.remove()}__handleSelect(e){e.preventDefault();const[t,a]=this.selectRef.value.split(",");Fe.setSearchParam("country",a),Fe.setSearchParam("iso2",t)}__resetFocus(){this.countrySelectRef.focus()}render(){var e;return[h("div",{class:Qe},h("form",{id:"form",tabindex:"-1",onSubmit:this.__handleSelect},h("label",{for:"countries"},"Choose a country:"),h("select",{ref:e=>this.selectRef=e,id:"countries"},null===(e=this.state.countries)||void 0===e?void 0:e.map(e=>h("option",{value:e.ISO+","+e.name},e.name))),h("input",{type:"submit",value:"View country details"}))),h("div",{class:"map-container",ref:e=>this.ref=e})]}componentDidUpdate(e,t,a){this.state.isMapReady&&this.updateMap(this.state.mapData,this.state.lookupTable,this.props.selectedDate)}}const Ke={url:new URL("./src/services/totalsService.js",document.baseURI).href};const et=new class extends Be{async getTotals(e){return!e&&this.__totals||(this.__totals=fetch(new URL("../../data/totals.json",Ke.url)).then(e=>e.json()),await this.__totals,this.dispatchEvent(new Event("change"))),this.__totals}};let tt;const at=R(tt||(tt=(e=>e)`
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
    width: 140px;
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
`));class nt extends g{constructor(){super(),this.state={totals:{}}}async componentWillMount(){E("(min-width: 900px)",e=>{this.setState({desktop:e})});const e=await et.getTotals();this.setState({totals:e})}render({selectedDate:e},{totals:t,desktop:a}){const n=t[e],r=[{description:"Countries in lockdown",value:Number((null==n?void 0:n.territories.lockdown)||0).toLocaleString()},{description:"People affected",value:Number((null==n?void 0:n.territories.affected)||0).toLocaleString()},{description:["Reported ",h("br",null),"cases"],value:Number((null==n?void 0:n.corona.confirmed)||0).toLocaleString()},{description:"Reported deaths",value:Number((null==n?void 0:n.corona.deaths)||0).toLocaleString()}];return h("div",{class:at},h("dl",null,(a?r:r.slice(0,2)).map(e=>h("div",null,h("dt",{class:"ld-font-light"},e.description),h("dd",{class:"ld-font-front"},e.value)))))}}const rt=h("svg",{class:"icon icon-tabler icon-tabler-info-circle","aria-labelledby":"srInfo",width:"28",height:"29",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M13.9965 0C11.2277 0.000685575 8.52133 0.822415 6.2195 2.36131C3.91766 3.9002 2.12379 6.08714 1.06469 8.6456C0.00559705 11.2041 -0.271147 14.0192 0.269437 16.7349C0.810022 19.4507 2.14366 21.9451 4.10174 23.9029C6.05981 25.8606 8.55437 27.1938 11.27 27.7337C13.9857 28.2737 16.8004 27.9962 19.3584 26.9364C21.9163 25.8766 24.1026 24.082 25.6408 21.7796C27.179 19.4772 28 16.7703 28 14.0013C27.9991 10.2876 26.5233 6.72631 23.8973 4.10066C21.2712 1.47502 17.7099 -1.13766e-07 13.9965 0ZM13.9965 6.21201C14.4655 6.21201 14.9238 6.35106 15.3137 6.6116C15.7036 6.87214 16.0075 7.24246 16.1869 7.67572C16.3664 8.10898 16.4133 8.5857 16.3219 9.04565C16.2304 9.5056 16.0046 9.92809 15.673 10.2597C15.3414 10.5913 14.919 10.8172 14.4591 10.9086C13.9992 11.0001 13.5225 10.9532 13.0892 10.7737C12.656 10.5942 12.2857 10.2903 12.0252 9.90039C11.7647 9.51046 11.6257 9.05205 11.6257 8.5831C11.6257 7.95424 11.8754 7.35112 12.3201 6.90646C12.7647 6.46179 13.3677 6.21201 13.9965 6.21201ZM17.1577 20.5495C17.1577 20.7334 17.0847 20.9097 16.9547 21.0397C16.8247 21.1698 16.6483 21.2428 16.4645 21.2428H11.5147C11.3309 21.2428 11.1545 21.1698 11.0245 21.0397C10.8945 20.9097 10.8215 20.7334 10.8215 20.5495V19.1976C10.8215 19.0137 10.8945 18.8374 11.0245 18.7073C11.1545 18.5773 11.3309 18.5043 11.5147 18.5043H12.1906V14.906H11.5147C11.3309 14.906 11.1545 14.833 11.0245 14.7029C10.8945 14.5729 10.8215 14.3966 10.8215 14.2127V12.8573C10.8215 12.6734 10.8945 12.4971 11.0245 12.3671C11.1545 12.237 11.3309 12.164 11.5147 12.164H15.1265C15.3104 12.164 15.4867 12.237 15.6167 12.3671C15.7467 12.4971 15.8198 12.6734 15.8198 12.8573V18.5043H16.4749C16.6587 18.5043 16.8351 18.5773 16.9651 18.7073C17.0951 18.8374 17.1681 19.0137 17.1681 19.1976L17.1577 20.5495Z",fill:"currentColor"})),ot=(h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"})),h("svg",{class:"icon icon-tabler icon-tabler-settings","aria-labelledby":"srSettings",stroke:"currentColor",width:"28",height:"30",viewBox:"0 0 28 30",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M27.6411 18.7033L25.1277 17.2543C25.3828 15.8863 25.3828 14.4829 25.1277 13.1148L27.6411 11.6624C27.7807 11.5817 27.8887 11.4559 27.9474 11.3057C28.0062 11.1556 28.012 10.9898 27.9642 10.8359C27.3155 8.76067 26.2143 6.85542 24.7399 5.25758C24.6307 5.13999 24.4851 5.06262 24.3265 5.03793C24.1679 5.01325 24.0056 5.04268 23.8658 5.12151L21.3524 6.57392C20.2981 5.66454 19.082 4.96178 17.7677 4.50244V1.60783C17.7659 1.44842 17.7101 1.29436 17.6094 1.17078C17.5087 1.04721 17.369 0.961429 17.2133 0.927552C15.093 0.456441 12.8952 0.456441 10.775 0.927552C10.6192 0.961429 10.4795 1.04721 10.3788 1.17078C10.2781 1.29436 10.2223 1.44842 10.2206 1.60783V4.50924C8.90953 4.97569 7.69468 5.67768 6.63584 6.58069L4.12922 5.12832C3.9901 5.04702 3.8272 5.01614 3.66798 5.04092C3.50877 5.0657 3.36297 5.14461 3.25514 5.26435C1.77801 6.86015 0.676367 8.7661 0.0308698 10.8427C-0.0168644 10.9985 -0.00904608 11.1661 0.0529779 11.3168C0.115002 11.4676 0.227389 11.5921 0.370981 11.6692L2.88441 13.1182C2.62933 14.4874 2.62933 15.8919 2.88441 17.2611L0.370981 18.7101C0.228293 18.7882 0.1167 18.9128 0.0548046 19.0633C-0.00709105 19.2137 -0.0155458 19.3808 0.0308698 19.5367C0.679519 21.6119 1.78078 23.5172 3.25514 25.115C3.36402 25.2331 3.50971 25.3109 3.66844 25.3356C3.82717 25.3603 3.98959 25.3305 4.12922 25.251L6.63924 23.7987C7.69529 24.7074 8.91238 25.41 10.2274 25.8701V28.7715C10.2292 28.9309 10.2849 29.085 10.3857 29.2086C10.4864 29.3321 10.626 29.4179 10.7818 29.4518C12.902 29.9229 15.0998 29.9229 17.2201 29.4518C17.3753 29.4168 17.5143 29.3307 17.6148 29.2074C17.7153 29.0841 17.7715 28.9306 17.7745 28.7715V25.8701C19.0855 25.4037 20.3004 24.7017 21.3592 23.7987L23.8727 25.251C24.0103 25.3354 24.1735 25.368 24.333 25.3431C24.4925 25.3181 24.638 25.2373 24.7433 25.115C26.2214 23.5193 27.3242 21.6134 27.971 19.5367C28.0162 19.3809 28.0084 19.2144 27.9487 19.0635C27.8889 18.9127 27.7807 18.7859 27.6411 18.7033ZM13.9924 19.9006C13.0593 19.8999 12.1473 19.6225 11.3718 19.1034C10.5964 18.5843 9.99227 17.8469 9.63595 16.9843C9.27963 16.1218 9.1871 15.173 9.37005 14.2579C9.55301 13.3428 10.0032 12.5025 10.6638 11.8433C11.3243 11.1841 12.1655 10.7357 13.0809 10.5547C13.9964 10.3737 14.9449 10.4683 15.8066 10.8265C16.6682 11.1847 17.4043 11.7905 17.9217 12.5671C18.4391 13.3438 18.7145 14.2564 18.7132 15.1897C18.7096 16.4398 18.2107 17.6375 17.3259 18.5205C16.4411 19.4034 15.2424 19.8997 13.9924 19.9006Z",fill:"currentColor"}))),it=h("svg",{class:"icon icon-tabler icon-tabler-refresh","aria-labelledby":"srTicker",width:"28",height:"29",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M20.4855 7.74409C19.2786 6.61667 17.7987 5.82335 16.1917 5.44237C14.5847 5.06139 12.9062 5.10592 11.3217 5.57155C9.7372 6.03718 8.30142 6.90782 7.15597 8.09762C6.01052 9.28743 5.19496 10.7553 4.78975 12.3565C4.75274 12.5029 4.66826 12.633 4.54951 12.7264C4.43075 12.8199 4.28441 12.8713 4.13334 12.8727H0.892313C0.791845 12.8742 0.692292 12.8535 0.600732 12.8121C0.509171 12.7707 0.427852 12.7097 0.36257 12.6333C0.297287 12.5569 0.249644 12.4671 0.223023 12.3702C0.196403 12.2733 0.19146 12.1717 0.208552 12.0727C0.6785 9.59459 1.80827 7.28924 3.47876 5.39961C5.14926 3.50999 7.29859 2.10611 9.70017 1.33597C12.1018 0.565828 14.6666 0.45796 17.1244 1.02373C19.5821 1.58951 21.8417 2.80795 23.665 4.55064L25.6855 2.52996C25.8773 2.34574 26.1186 2.22145 26.38 2.1723C26.6413 2.12314 26.9113 2.15127 27.157 2.25322C27.4026 2.35518 27.6131 2.52653 27.7629 2.74633C27.9126 2.96612 27.995 3.22482 28 3.49073V11.0674C28 11.4302 27.8559 11.778 27.5995 12.0345C27.343 12.291 26.9952 12.4351 26.6325 12.4351H19.0735C18.8076 12.4301 18.549 12.3477 18.3292 12.198C18.1094 12.0482 17.938 11.8376 17.8361 11.592C17.7341 11.3464 17.706 11.0763 17.7552 10.8149C17.8043 10.5536 17.9286 10.3122 18.1128 10.1204L20.4855 7.74409ZM1.34018 16.9415H8.91624C9.18281 16.9458 9.4423 17.028 9.66277 17.178C9.88324 17.3279 10.0551 17.539 10.1572 17.7853C10.2592 18.0316 10.2871 18.3024 10.2373 18.5643C10.1875 18.8263 10.0623 19.0679 9.87693 19.2596L7.51453 21.6188C8.72103 22.7472 10.2009 23.5414 11.8082 23.923C13.4154 24.3045 15.0943 24.2602 16.6792 23.7945C18.2641 23.3288 19.7001 22.4577 20.8455 21.2672C21.9908 20.0768 22.8059 18.6082 23.2103 17.0064C23.2473 16.8599 23.3317 16.7298 23.4505 16.6364C23.5692 16.543 23.7156 16.4916 23.8667 16.4902H27.1077C27.2085 16.4886 27.3084 16.5093 27.4003 16.5509C27.4921 16.5925 27.5736 16.6539 27.639 16.7307C27.7043 16.8075 27.7519 16.8978 27.7782 16.9951C27.8046 17.0924 27.8091 17.1944 27.7914 17.2936C27.3215 19.7717 26.1917 22.0771 24.5212 23.9667C22.8507 25.8563 20.7014 27.2602 18.2998 28.0303C15.8982 28.8005 13.3334 28.9083 10.8756 28.3426C8.41787 27.7768 6.15828 26.5583 4.33505 24.8156L2.31454 26.8329C2.12294 27.017 1.8819 27.1412 1.62085 27.1905C1.35981 27.2398 1.09005 27.2119 0.844559 27.1104C0.59907 27.0089 0.388469 26.838 0.238486 26.6187C0.0885027 26.3994 0.00563247 26.1412 0 25.8756V18.3023C0.00260067 17.946 0.14411 17.6048 0.394402 17.3513C0.644694 17.0978 0.984015 16.952 1.34018 16.9449V16.9415Z",fill:"currentColor"})),st=h("svg",{class:"icon icon-tabler icon-tabler-circle-plus","aria-labelledby":"srContribute",width:"28",height:"24",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M26.6002 11.3254H22.3817V7.10655C22.3817 6.96109 22.3239 6.82158 22.2211 6.71873C22.1182 6.61588 21.9787 6.55811 21.8333 6.55811H19.2938C19.1483 6.55811 19.0088 6.61588 18.906 6.71873C18.8031 6.82158 18.7454 6.96109 18.7454 7.10655V11.3254H14.5269C14.3815 11.3254 14.242 11.3831 14.1391 11.486C14.0363 11.5888 13.9785 11.7283 13.9785 11.8738V14.4304C13.9785 14.5758 14.0363 14.7153 14.1391 14.8182C14.242 14.9211 14.3815 14.9788 14.5269 14.9788H18.7454V19.1976C18.7454 19.3431 18.8031 19.4826 18.906 19.5854C19.0088 19.6883 19.1483 19.7461 19.2938 19.7461H21.8502C21.9956 19.7461 22.1351 19.6883 22.2379 19.5854C22.3408 19.4826 22.3986 19.3431 22.3986 19.1976V14.9788H26.617C26.7625 14.9788 26.902 14.9211 27.0048 14.8182C27.1076 14.7153 27.1654 14.5758 27.1654 14.4304V11.8738C27.1655 11.8003 27.1507 11.7276 27.1221 11.6599C27.0935 11.5923 27.0516 11.5311 26.9989 11.4799C26.9462 11.4287 26.8837 11.3887 26.8152 11.3621C26.7467 11.3356 26.6736 11.3231 26.6002 11.3254Z",fill:"currentColor"}),h("path",{d:"M20.5722 25.0283C27.1305 25.0283 32.4471 19.7113 32.4471 13.1523C32.4471 6.59343 27.1305 1.27637 20.5722 1.27637C14.0139 1.27637 8.69727 6.59343 8.69727 13.1523C8.69727 19.7113 14.0139 25.0283 20.5722 25.0283Z",stroke:"currentColor","stroke-width":"2","stroke-miterlimit":"10"}),h("path",{d:"M39.3186 22.0245C38.9062 21.6746 38.383 21.4825 37.8422 21.4825C37.3013 21.4825 36.7781 21.6746 36.3657 22.0245L29.9916 27.1251C29.207 27.7516 28.2325 28.0923 27.2285 28.0912H19.0785C18.7853 28.0912 18.5042 27.9747 18.297 27.7674C18.0897 27.5601 17.9732 27.279 17.9732 26.9859C17.9732 26.6927 18.0897 26.4116 18.297 26.2043C18.5042 25.997 18.7853 25.8805 19.0785 25.8805H24.4823C25.0196 25.8916 25.5437 25.714 25.9637 25.3788C26.3837 25.0435 26.673 24.5717 26.7814 24.0453C26.8354 23.728 26.8195 23.4027 26.7348 23.0922C26.6501 22.7816 26.4986 22.4934 26.2909 22.2475C26.0832 22.0016 25.8243 21.804 25.5323 21.6686C25.2403 21.5332 24.9223 21.4631 24.6004 21.4634H13.5607C11.6981 21.4632 9.89231 22.1054 8.44798 23.2817L5.24617 25.8805H1.42425C1.13186 25.8816 0.851805 25.9986 0.645445 26.2057C0.439085 26.4129 0.32324 26.6934 0.323242 26.9859V33.6094C0.32324 33.9019 0.439085 34.1824 0.645445 34.3895C0.851805 34.5967 1.13186 34.7137 1.42425 34.7148H26.0431C27.0458 34.7156 28.0189 34.3748 28.802 33.7486L39.2385 25.3996C39.4887 25.1979 39.6919 24.9442 39.8341 24.6559C39.9762 24.3677 40.0538 24.0519 40.0614 23.7306C40.0691 23.4093 40.0065 23.0903 39.8783 22.7956C39.75 22.5009 39.559 22.2378 39.3186 22.0245Z",fill:"currentColor"})),lt=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),ct=h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h("polyline",{points:"20 6 9 17 4 12"})),dt=h("svg",{style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"auto",height:"auto",viewBox:"0 0 710.000000 115.000000",preserveAspectRatio:"xMidYMid meet"},h("g",{transform:"translate(0.000000,115.000000) scale(0.100000,-0.100000)",fill:"var(--ld-text)",stroke:"none"},h("path",{d:"M895 1134 c-48 -18 -102 -67 -121 -111 -9 -21 -14 -70 -14 -139 l0 -106 -47 -52 c-25 -28 -60 -80 -77 -116 -29 -61 -31 -73 -31 -176 0 -107 1 -112 37 -185 46 -93 112 -158 206 -202 63 -30 74 -32 177 -32 103 0 114 2 177 32 94 44 160 109 206 202 36 73 37 78 37 185 0 105 -2 115 -32 177 -18 37 -53 89 -78 117 l-45 50 0 103 c0 79 -5 114 -19 145 -22 49 -78 97 -130 113 -53 15 -198 13 -246 -5z m246 -100 c17 -8 37 -30 45 -49 15 -36 20 -155 7 -155 -5 0 -30 7 -57 15 -27 8 -77 15 -111 15 -34 0 -84 -7 -111 -15 -27 -8 -52 -15 -56 -15 -5 0 -8 28 -8 63 0 72 22 125 60 144 37 19 194 17 231 -3z m-258 -335 c-13 -33 -30 -99 -36 -145 l-11 -84 -79 0 -79 0 7 37 c16 88 92 190 172 232 21 11 41 20 44 21 4 0 -4 -27 -18 -61z m184 22 c28 -42 50 -112 59 -191 l7 -60 -107 0 -106 0 0 33 c0 43 26 151 46 190 39 76 64 83 101 28z m121 20 c81 -41 161 -147 177 -234 l7 -37 -79 0 -79 0 -12 85 c-6 46 -22 112 -35 145 -14 33 -23 60 -20 60 2 0 21 -9 41 -19z m-344 -412 c8 -65 42 -186 58 -207 21 -25 -17 -12 -70 24 -57 38 -107 100 -134 167 -30 75 -28 77 61 77 l78 0 7 -61z m282 7 c-13 -114 -63 -226 -101 -226 -38 0 -88 111 -101 220 l-7 60 108 0 108 0 -7 -54z m239 22 c-9 -41 -39 -103 -72 -146 -25 -33 -119 -102 -139 -102 -7 0 -3 22 13 60 13 33 29 96 35 140 l12 80 79 0 79 0 -7 -32z"}),h("path",{d:"M1850 835 c-186 -53 -300 -204 -302 -401 -2 -183 94 -328 262 -396 45 -18 75 -22 165 -22 130 0 197 21 267 84 l43 39 -36 36 -36 37 -47 -36 c-101 -77 -253 -80 -368 -7 -219 139 -164 494 87 562 104 29 233 3 298 -58 l27 -27 35 34 c19 19 35 39 35 44 -1 18 -85 76 -142 98 -71 27 -213 34 -288 13z"}),h("path",{d:"M4445 836 c-261 -64 -392 -344 -276 -592 99 -211 375 -296 604 -185 213 103 286 390 155 603 -90 146 -295 220 -483 174z m250 -121 c71 -31 120 -77 152 -143 24 -49 28 -69 28 -142 0 -73 -4 -93 -28 -142 -51 -105 -154 -169 -274 -170 -84 0 -135 13 -195 51 -128 82 -174 261 -104 405 72 148 264 212 421 141z"}),h("path",{d:"M0 430 l0 -410 280 0 280 0 0 50 0 50 -220 0 -220 0 0 360 0 360 -60 0 -60 0 0 -410z"}),h("path",{d:"M2430 430 l0 -410 60 0 60 0 0 108 0 108 75 74 c45 45 78 70 83 65 5 -6 75 -88 156 -182 l148 -173 64 0 c35 0 64 3 64 6 0 3 -81 104 -181 225 l-181 220 129 135 c70 74 148 157 171 185 l44 49 -64 0 -63 1 -222 -228 -222 -228 -1 228 0 227 -60 0 -60 0 0 -410z"}),h("path",{d:"M3250 430 l0 -412 233 4 c211 3 237 6 288 26 174 69 261 197 261 382 0 185 -87 313 -261 382 -51 20 -77 23 -288 26 l-233 4 0 -412z m506 270 c46 -24 79 -49 101 -78 69 -91 81 -229 29 -337 -31 -63 -70 -98 -146 -134 -50 -23 -70 -25 -212 -29 l-158 -4 0 312 0 312 159 -4 c159 -4 160 -4 227 -38z"}),h("path",{d:"M5042 828 c3 -7 65 -192 137 -410 l133 -398 63 0 63 0 70 202 c38 112 87 256 108 321 21 64 41 117 44 117 3 0 55 -144 115 -320 l108 -320 63 0 62 0 133 398 c72 218 134 403 137 410 3 10 -9 12 -53 10 l-58 -3 -110 -329 c-68 -205 -113 -324 -117 -315 -5 8 -56 157 -115 332 l-108 317 -52 0 -53 0 -30 -82 c-16 -46 -66 -192 -112 -326 -45 -133 -86 -242 -89 -242 -4 0 -54 145 -112 322 l-105 323 -63 3 c-49 2 -62 0 -59 -10z"}),h("path",{d:"M6390 430 l0 -410 60 0 60 0 2 302 3 302 243 -302 243 -302 49 0 50 0 0 410 0 410 -60 0 -60 0 -2 -302 -3 -302 -243 302 -243 302 -49 0 -50 0 0 -410z"}))),ut=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.76 45.17"},h("defs",null,h("style",null,".cls-1 {\n          fill: #828282;\n          fill-rule: evenodd;\n        }")),h("title",null,"Asset 2"),h("g",{id:"Layer_2","data-name":"Layer 2"},h("g",{id:"Layer_1-2","data-name":"Layer 1"},h("path",{class:"cls-1",d:"M11,0,7.47,3.51l6.9,6.9h-1a14.93,14.93,0,0,0,1.62,29.78H44.15l5,5,3.51-3.51ZM59.76,27.74A12.39,12.39,0,0,0,48.18,15.39,18.58,18.58,0,0,0,20.79,2.76L24.5,6.47a13.47,13.47,0,0,1,5.38-1.14A13.69,13.69,0,0,1,43.58,19v1.25h3.73a7.46,7.46,0,0,1,4.46,13.45l3.51,3.51A12.39,12.39,0,0,0,59.76,27.74ZM5,25.25a10,10,0,0,0,10,10H39.17L19.25,15.29H14.94A10,10,0,0,0,5,25.25Z"})))),ht=h("svg",{viewBox:"25 25 50 50"},h("circle",{cx:"50",cy:"50",r:"20"})),pt=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),ft=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"})),gt=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"20"},h("g",null,h("path",{d:"M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"}),h("path",{d:"M0,0h24v24H0V0z",fill:"none"}))),mt=h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"})),bt=h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"})),vt=h("svg",{width:"22",height:"14",viewBox:"0 0 22 14",fill:"currentColor",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},h("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.5 2.33333V0H21.5V2.33333H0.5ZM0.5 8.16667H21.5V5.83333H0.5V8.16667ZM0.5 14H21.5V11.6667H0.5V14Z",fill:"currentColor","fill-opacity":"0.54"})),wt=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",fill:"#828282",d:"M9.61 22.116v-7.14h4.78v7.14h5.974v-9.521h3.584L12.001 1.885.052 12.594h3.584v9.52H9.61z"}))),_t=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",fill:"#828282",d:"M14.153 5.566l-4.037 5.362 3.068 4.074-1.722 1.287c-1.82-2.413-4.845-6.434-4.845-6.434L.158 18.434h23.684L14.153 5.566z"}))),xt=h("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M216.329 17.722c-12.189 0-22.68 9.076-24.447 21.128L159.86 289.871a14.968 14.968 0 01-5.427 9.736l-31.619 25.601 55.48 56.361 55.972-55.972a22.97 22.97 0 006.771-16.347V42.429c0-13.623-11.084-24.707-24.708-24.707zM175.336 421.223l-96.549-98.081L5.827 379.4c-6.974 5.378-7.819 15.585-1.823 22.036l81.848 88.066c5.793 6.233 15.612 6.387 21.597.337zM389.186 325.208l-31.619-25.601a14.968 14.968 0 01-5.427-9.736L320.117 38.849c-1.766-12.051-12.258-21.128-24.447-21.128-13.624 0-24.708 11.084-24.708 24.708v266.82a22.97 22.97 0 006.771 16.347l55.972 55.972zM433.213 323.142l-96.549 98.081 67.888 68.616c5.985 6.049 15.804 5.896 21.597-.337l81.848-88.066c5.995-6.451 5.151-16.658-1.823-22.036z"})),yt=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})),kt=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M393.784 100.106l-95.207-13.834L256 0l-42.577 86.272-95.207 13.834 68.893 67.153-16.264 94.822L256 217.312l85.155 44.769-16.263-94.822z"}),h("path",{d:"M256 315.219l-153.945-61.762v87.726l154.843 62.123 153.047-62.17v-87.679z"}),h("path",{d:"M256 423.914l-153.945-61.762v87.726L256.898 512l153.047-62.169v-87.679z"})),Ct=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},h("g",null,h("rect",{fill:"none",height:"24",width:"24"})),h("g",null,h("g",null),h("g",null,h("path",{d:"M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"}),h("g",null,h("path",{d:"M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"}),h("path",{d:"M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"}),h("path",{d:"M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"}))))),Mt=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),St=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),Dt=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},h("path",{d:"M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z",fill:"none"}),h("path",{d:"M17.7 8L12 2.3 6.3 8C4.8 9.6 4 11.6 4 13.6s.8 4.1 2.3 5.7 3.6 2.4 5.7 2.4 4.1-.8 5.7-2.4 2.3-3.7 2.3-5.7-.8-4-2.3-5.6z"})),Lt=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"}));let Pt;const Tt=R(Pt||(Pt=(e=>e)`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    /* needs to be higher than the map */
    z-index: 1200;
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
    max-width: 65%;
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
`)),zt=e=>[h("a",{class:"skiplink",href:"#main"},"Go to main content"),h("header",{class:Tt},h("div",{class:"ld-logo-wrapper"},h("a",{href:"","aria-current":"page"},h("p",null,"BETA"),dt)),h("div",{class:"totals"},h(nt,{selectedDate:e.selectedDate})))];var At,Et,Ht,Ut=0,jt=[],Nt=t.__r,Wt=t.diffed,Ot=t.__c,Rt=t.unmount;function It(e,a){t.__h&&t.__h(Et,e,Ut||a),Ut=0;var n=Et.__H||(Et.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Vt(e){return Ut=1,function(e,t,a){var n=It(At++,2);return n.__c||(n.__c=Et,n.__=[a?a(t):Xt(void 0,t),function(t){var a=e(n.__[0],t);n.__[0]!==a&&(n.__[0]=a,n.__c.setState({}))}]),n.__}(Xt,e)}function Bt(e,a){var n=It(At++,3);!t.__s&&Qt(n.__H,a)&&(n.__=e,n.__H=a,Et.__H.__h.push(n))}function Ft(e){return Ut=5,function(e,t){var a=It(At++,7);return Qt(a.__H,t)?(a.__H=t,a.__h=e,a.__=e()):a.__}((function(){return{current:e}}),[])}function Yt(){jt.some((function(e){if(e.__P)try{e.__H.__h.forEach(qt),e.__H.__h.forEach($t),e.__H.__h=[]}catch(a){return e.__H.__h=[],t.__e(a,e.__v),!0}})),jt=[]}function qt(e){e.t&&e.t()}function $t(e){var t=e.__();"function"==typeof t&&(e.t=t)}function Qt(e,t){return!e||t.some((function(t,a){return t!==e[a]}))}function Xt(e,t){return"function"==typeof t?t(e):t}function Gt(e,t){for(var a in e)if("__source"!==a&&!(a in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}t.__r=function(e){Nt&&Nt(e),At=0,(Et=e.__c).__H&&(Et.__H.__h.forEach(qt),Et.__H.__h.forEach($t),Et.__H.__h=[])},t.diffed=function(e){Wt&&Wt(e);var a=e.__c;if(a){var n=a.__H;n&&n.__h.length&&(1!==jt.push(a)&&Ht===t.requestAnimationFrame||((Ht=t.requestAnimationFrame)||function(e){var t,a=function(){clearTimeout(n),cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);"undefined"!=typeof window&&(t=requestAnimationFrame(a))})(Yt))}},t.__c=function(e,a){a.some((function(e){try{e.__h.forEach(qt),e.__h=e.__h.filter((function(e){return!e.__||$t(e)}))}catch(n){a.some((function(e){e.__h&&(e.__h=[])})),a=[],t.__e(n,e.__v)}})),Ot&&Ot(e,a)},t.unmount=function(e){Rt&&Rt(e);var a=e.__c;if(a){var n=a.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){t.__e(e,a.__v)}}};!function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).isPureReactComponent=!0,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.shouldComponentUpdate=function(e,t){return Gt(this.props,e)||Gt(this.state,t)}}(g);var Zt=t.__b;t.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Zt&&Zt(e)};var Jt=t.__e;function Kt(e){return e&&((e=function(e,t){for(var a in t)e[a]=t[a];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(Kt)),e}function ea(){this.__u=0,this.o=null,this.__b=null}function ta(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function aa(){this.i=null,this.l=null}t.__e=function(e,t,a){if(e.then)for(var n,r=t;r=r.__;)if((n=r.__c)&&n.__c)return n.__c(e,t.__c);Jt(e,t,a)},(ea.prototype=new g).__c=function(e,t){var a=this;null==a.o&&(a.o=[]),a.o.push(t);var n=ta(a.__v),r=!1,o=function(){r||(r=!0,n?n(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var i=function(){var e;if(!--a.__u)for(a.__v.__k[0]=a.state.u,a.setState({u:a.__b=null});e=a.o.pop();)e.forceUpdate()};a.__u++||a.setState({u:a.__b=a.__v.__k[0]}),e.then(o,o)},ea.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=Kt(this.__b),this.__b=null),[h(g,null,t.u?null:e.children),t.u&&e.fallback]};var na=function(e,t,a){if(++a[1]===a[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(a=e.i;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;e.i=a=a[2]}};(aa.prototype=new g).u=function(e){var t=this,a=ta(t.__v),n=t.l.get(e);return n[0]++,function(r){var o=function(){t.props.revealOrder?(n.push(r),na(t,e,n)):r()};a?a(o):o()}},aa.prototype.render=function(e){this.i=null,this.l=new Map;var t=x(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var a=t.length;a--;)this.l.set(t[a],this.i=[1,0,this.i]);return e.children},aa.prototype.componentDidUpdate=aa.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,a){na(e,a,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var ra=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;g.prototype.isReactComponent={};var oa="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ia=t.event;function sa(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}t.event=function(e){ia&&(e=ia(e)),e.persist=function(){};var t=!1,a=!1,n=e.stopPropagation;e.stopPropagation=function(){n.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),a=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return a},e.nativeEvent=e};var la={configurable:!0,get:function(){return this.class}},ca=t.vnode;t.vnode=function(e){e.$$typeof=oa;var t=e.type,a=e.props;if(t){if(a.class!=a.className&&(la.enumerable="className"in a,null!=a.className&&(a.class=a.className),Object.defineProperty(a,"className",la)),"function"!=typeof t){var n,r,o;for(o in a.defaultValue&&void 0!==a.value&&(a.value||0===a.value||(a.value=a.defaultValue),delete a.defaultValue),Array.isArray(a.value)&&a.multiple&&"select"===t&&(x(a.children).forEach((function(e){-1!=a.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete a.value),a)if(n=ra.test(o))break;if(n)for(o in r=e.props={},a)r[ra.test(o)?o.replace(/[A-Z0-9]/,"-$&").toLowerCase():o]=a[o]}!function(t){var a=e.type,n=e.props;if(n&&"string"==typeof a){var r={};for(var o in n)/^on(Ani|Tra|Tou)/.test(o)&&(n[o.toLowerCase()]=n[o],delete n[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onbeforeinput&&(n.onbeforeinput=n[r.onbeforeinput],delete n[r.onbeforeinput]),r.onchange&&("textarea"===a||"input"===a.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=n[r.onchange],delete n[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(sa(t.prototype,"componentWillMount"),sa(t.prototype,"componentWillReceiveProps"),sa(t.prototype,"componentWillUpdate"),t.m=!0)}ca&&ca(e)};let da;function ua(e){const[t,a]=Vt(!1),n=Ft(null);return Bt(()=>{t&&n.current.focus({preventScroll:!0})},[t]),h("div",{class:ha},h("div",{class:"ld-expandable"},h("button",{onClick:()=>a(!t),class:"ld-expandable--toggle","aria-expanded":t},h("div",{class:"ld-expandable--icon"},t?fa:pa),h("div",{class:"ld-expandable--toggle-content"},h("h2",null,e.toggle))),h("div",{ref:n,class:"ld-expandable--detail "+(t?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},e.detail)))}const ha=R(da||(da=(e=>e)`
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
`)),pa=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"9 6 15 12 9 18"})),fa=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"})),ga={url:new URL("./src/services/updatesService.js",document.baseURI).href};const ma=new class extends Be{async getUpdates(e){if(e||!this.updates)try{this.updates=await fetch(new URL("../../data/updates.json",ga.url)).then(e=>e.json()),await this.updates}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:this.updates}}};let ba,va,wa=e=>e;const _a=R(ba||(ba=wa`
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
`)),xa=R(va||(va=wa`
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
`));let ya;const ka={new_entry:"new entry",announcement:"announcement",rectification:"rectification",promoting_project:"project promotion",promoting_petition:"petition"};function Ca(){var e,t;const[a,n]=Vt(void 0);return Bt(async()=>{const e=await ma.getUpdates();n(e)},[]),navigator.onLine||"success"===(null==a?void 0:a.status)?!a&&navigator.onLine?h("div",{class:_a},ht):"failed"===a.status&&navigator.onLine?h("div",{style:"margin-top: 14px;"},"An error occured while fetching updates."):h("div",{class:Ma},h("ul",null,null==a||null===(e=a.data)||void 0===e||null===(t=e.updates)||void 0===t?void 0:t.map(e=>h("li",null,h("div",{class:"ld-ticker--bar"},h("div",{class:"ld-ticker--dot-container"},h("div",{"aria-label":ka[e.type.toLowerCase()],class:"ld-ticker--dot "+e.type.toLowerCase()})),h("div",{class:"ld-ticker--line"})),h("div",{class:"ld-ticker--content"},h("div",{class:"ld-ticker--title"},e.title),h("div",{class:"ld-ticker--content"},e.content),e.link?h("div",{class:"ld-ticker--link"},h("a",{target:"_blank",rel:"noopener noreferer",href:e.link},"Source")):"",h("div",{class:"ld-ticker--date"},e.date)))))):h("div",{class:xa},ut,h("b",null,"You are not connected to the internet"),h("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}const Ma=R(ya||(ya=(e=>e)`
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
`));function Sa(e){let t;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(a=>{a&&(a.addEventListener("updatefound",()=>{t=a.installing,t.addEventListener("statechange",()=>{"installed"===t.state&&navigator.serviceWorker.controller&&e(!0)})}),a.waiting&&navigator.serviceWorker.controller&&(e(!0),t=a.waiting))})}function Da(e){const[t,a]=[...document.querySelectorAll("link[rel='icon']")],n=document.querySelector("link[rel='manifest']"),r=document.querySelector("meta[name='theme-color']");e?(n.href="/manifest-dark.json",t.href="src/assets/favicon-32x32-dark.png",a.href="src/assets/favicon-16x16-dark.png",r.setAttribute("content","#303136")):(n.href="/manifest.json",t.href="src/assets/favicon-32x32.png",a.href="src/assets/favicon-16x16.png",r.setAttribute("content","#ffffff")),document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(t),document.getElementsByTagName("head")[0].appendChild(a),document.getElementsByTagName("head")[0].appendChild(r)}let La,Pa;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Pa=!0,La=e});class Ta extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),La=e,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))}),Pa&&this.removeAttribute("hidden")}async _handlePrompt(e){e.preventDefault(),La.prompt();const{outcome:t}=await La.userChoice;"accepted"===t?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),La=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",Ta);class za extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){this.addEventListener("click",this._postMessage.bind(this)),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)})}async _postMessage(e){e.preventDefault(),(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",za);let Aa;const Ea=R(Aa||(Aa=(e=>e)`
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
    background-color: #e0e0e0;
    color: var(--ld-button-text);
    font-size: 16px;
    border-radius: 25px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
    .dark & {
      background-color: #4f4f4f;
    }
  }

  .ld-button:hover,
  .ld-button:active {
    background-color: rgb(204, 204, 204);
    cursor: pointer;
    .dark & {
      background-color: rgb(63, 63, 63);
    }
  }
`));function Ha(){const[e,t]=Vt(!1),[a,n]=Vt(!1);return Bt(async()=>{if(Sa(e=>{n(e)}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});if("true"===localStorage.getItem("geolocation"))return void t(!1);"granted"!==e.state&&t(!0)}},[]),h("div",{class:Ea},h("button",{onClick:function(){document.getElementsByTagName("html")[0].classList.contains("dark")?(document.getElementsByTagName("html")[0].classList.remove("dark"),localStorage.setItem("darkmode","false"),Da(!1)):(document.getElementsByTagName("html")[0].classList.add("dark"),localStorage.setItem("darkmode","true"),Da(!0))},class:"ld-button"},"Toggle darkmode"),e?[" ",h("button",{onClick:function(){navigator.permissions&&navigator.geolocation.getCurrentPosition(()=>{t(!1)})},class:"ld-button"},"Allow geolocation")," "]:"",h("pwa-install-button",null,h("button",{class:"ld-button"},"Install app")),a?h("pwa-update-available",null,h("button",{class:"ld-button"},"Update app")):"")}const Ua={info:rt,settings:ot,updates:it,contribute:st};class ja extends g{constructor(){super(),this.state={updateAvailable:!1,index:0},this.tabRefs={},this.__onFocusMove=this.__onFocusMove.bind(this),this.__onTabClick=this.__onTabClick.bind(this)}componentDidMount(){E("(min-width: 960px)",e=>{this.setState({isMobile:!e})}),Ye.addEventListener("close",e=>{e.detail.menuDialogClosed&&this.tabRefs["tab"+this.state.index].focus()}),Sa(e=>{this.setState({updateAvailable:e})})}updateIndex(e,t){"settings"===t&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.setState({index:e}),this.tabRefs["tab"+e].focus(),this.state.isMobile||this.commit(t)}__onTabClick(e,t){this.updateIndex(e,t),this.commit(t)}commit(e){this.props.switchContent(e.toLowerCase())}__onFocusMove(e){const t=this.state.index;switch(e.keyCode){case 37:0!==t&&this.updateIndex(t-1,this.tabRefs["tab"+(t-1)].getAttribute("data-label").toLowerCase());break;case 39:t!==this.props.children.length-1&&this.updateIndex(t+1,this.tabRefs["tab"+(t+1)].getAttribute("data-label").toLowerCase())}}render(e,{index:t}){return h("ul",{class:"ld-menu--tabs",role:"tablist"},this.props.children.map((e,a)=>h("li",{role:"presentation",key:a},h("button",{role:"tab",ref:e=>this.tabRefs["tab"+a]=e,tabindex:t===a?"0":"-1","aria-selected":t===a?"true":"false",class:t===a?"ld-menu--active":"","data-label":e.props.id,onKeyUp:this.__onFocusMove,onClick:()=>this.__onTabClick(a,e.props.id)},"settings"===e.props.id&&this.state.updateAvailable?[" ",h("div",{class:"ld-menu--notification"})," "]:"",Ua[e.props.id],h("p",{class:t===a?"ld-menu--active":""},e.props.id.toUpperCase())))))}}let Na,Wa,Oa,Ra,Ia,Va,Ba=e=>e;const Fa=R(Na||(Na=Ba`
  & {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    border-collapse: collapse;
  }

  th {
    border-top: transparent;
    padding: 12px;
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
    padding: 5px;
    svg {
      stroke: var(--ld-text);
      & svg {
        .dark & {
          stroke: white !important;
        }
      }
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
`)),Ya=R(Wa||(Wa=Ba`
  .ld-menu--content {
    display: block;
    top: 0px;
    left: calc(500% - 100vw);
    height: 100%;
    position: absolute;
    background-color: white;
    width: calc(100vw - 500%);
    border-radius: 20px 0px 0px 20px;
    -moz-border-radius: 20px 0px 0px 20px;
    -webkit-border-radius: 20px 0px 0px 20px;
    overflow: auto;
    @media (max-width: 960px) {
      border-radius: 0px;
      width: calc(100vw - 100%);
      left: calc(100% - 100vw);
    }
    .dark & {
      background-color: #333333 !important;
    }
  }
`)),qa=R(Oa||(Oa=Ba`
    @keyframes fadeInRight {
      from {
        opacity: 0;
        width: 0%;
      }

      to {
        opacity: 1;
        width: 8%;
      }
    }
    @keyframes fadeInRightM {
      from {
        opacity: 0;
        width: 0%;
      }

      to {
        opacity: 1;
        width: 23%;
      }
    }
    & {
      @media (max-width: 960px) {
        width: 20%;
        top: 0px;
        height: 100%;
        animation: fadeInRightM 1s;
      }
      height: 75%;
      @media (min-width: 960px) {
        animation: fadeInRight 1s;
      }
      top: 5%
      bottom: 20%;
      width: 5%;
      max-width: 60px;
      position: absolute;
      padding: 0;
      right: 0px;
      background-color: #f2f2f2;
      z-index: 1100;
      .dark & {
        background-color: #54555a !important;
      }
      & .ld-menu-nav {
        display: flex;
        height: 100%;
        width: 100%;
        & nav {
          width: 100%;
          padding: 10px 0px 10px 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          & ul {
            padding: 0;
            justify-content: flex-start;
            align-items: left;
            min-height: 50%;
            display: flex;
            flex-direction: column;
            & li {
              margin-bottom: 29%;
              & button {
                background-color: transparent;
              }
              & .ld-menu--active {
                &:focus:not(.leaflet-container) {
                  box-shadow: none !important;
                }
                position: relative;
                background-color: white;
                .dark & {
                  background-color: #333333 !important;
                  color: white !important;
                }
                & svg {
                  .dark & {
                    stroke: white;
                  }
                }
                &::before {
                  position: absolute;
                  left: -20%;
                  top: -40%;
                  height: 180%;
                  width: 120%;
                  z-index: -1;
                  content: ' ';
                  .dark & {
                    background-color: #333333 !important;
                  }
                  border-radius: 0% 100% 100% 69% / 0% 50% 51% 0%;
                  border: 0px;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  background-color: #ffffff;
                }
              }
              & svg {
                color: #999999;
                .dark & {
                  color: white;
                  stroke: white;
                }
              }
            }
          }
        }
      }
    }
`)),$a=R(Ra||(Ra=Ba`
  .dark & {
    background-color: #333333;
    strock: white;
    color: white;
    & svg {
      color: white;
    }
    &:hover {
      cursor: pointer;
    }
  }
  & {
    position: absolute;
    height: 80px;
    width: 50px;
    z-index: 2000;
    top: calc((100vh / 2) - 20px);
    right: 0px;
    position: absolute;
    border-radius: 100% 0% 0% 100% / 21% 0% 0% 21%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0px;
    background-color: white;
    &:focus:not(.leaflet-container) {
      box-shadow: none !important;
    }
    & svg {
      color: #333333;
    }
    &:hover {
      cursor: pointer;
    }
  }
`)),Qa=R(Ia||(Ia=Ba`
  & {
    position: absolute !important;
    color: white;
    background-color: var(--ld-hover);
    padding: 0px !important;
    top: 10%;
    width: 39px !important;
    height: 39px !important;
    right: 0;
    left: 0;
    margin-right: auto !important;
    margin-left: auto !important;
    border-radius: 50% !important;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 960px) {
      background: transparent !important;
      box-shadow: none;
      border-radius: 0px;
    }
  }
  .dark & {
    position: absolute !important;
    color: white;
    background-color: var(--ld-hover);
    padding: 0px;
    top: 10%;
    width: 39px;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 960px) {
      background: transparent !important;
      box-shadow: none;
      border-radius: 0px;
    }
  }
`)),Xa=R(Va||(Va=Ba`
  & {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1100;
    background-color: rgba(40, 40, 40, 0.8);
    width: 100%;
    height: 100%;
    @media (max-width: 960px) {
      display: none;
    }
  }
`)),Ga=e=>{switch(e){case"info":return{title:"info",template:[h("h1",null,"Lockdown"),h("p",{class:"ld-alpha"},"Project lockdown is currently in beta. Not all data may be available yet."),h("p",null,h("b",null,"Project Lockdown")," provides a mapping of the different NPIs (Non-Pharmaceutical Interventions) enforced by across the globe\n            in response to the COVID-19 crisis to visualize the success of different pandemic response measures, monitor effects on Human\n            and Digital Rights, and clarify evaluation metrics."),h(ua,{toggle:"About",detail:h("p",null,"Lockdown, quarantine, and isolation measures have been implemented across the globe to reduce the spread of COVID-19 and\n                reduce the strain on medical infrastructure. ",h("b",null,"Project Lockdown")," empowers citizens, journalists, and Human Rights\n                Defenderes to easily analyze the social and political effects of these measures. Founded on the values of transparency and\n                accountability, ",h("b",null,"Project Lockdown")," is committed to providing citizens of the world with the tools they need to stay\n                safe and informed.")}),h(ua,{toggle:"Legend",detail:[h("p",null,"The map shows two parameters for territories:"),h("ol",null,h("li",null,"If the country is under any type of lockdown"),h("li",null,"If there are covid cases in the country")),h("table",{class:Fa},h("tr",null,h("th",{scope:"col"}),h("th",{scope:"col"},"Lockdown"),h("th",{scope:"col"},"COVID-19")),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"blue",class:"blue circle"})),h("td",null,h("div",{"aria-label":"no"},lt)),h("td",null,h("div",{"aria-label":"no"},lt))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"green",class:"green circle"})),h("td",null,h("div",{"aria-label":"no"},lt)),h("td",null,h("div",{"aria-label":"yes"},ct))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"yellow",class:"yellow circle"})),h("td",null,h("div",{"aria-label":"yes"},ct)),h("td",null,h("div",{"aria-label":"no"},lt))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"red",class:"red circle"})),h("td",null,h("div",{"aria-label":"yes"},ct)),h("td",null,h("div",{"aria-label":"yes"},ct))),h("tr",null,h("td",{scope:"row"},h("div",{"aria-label":"gray",class:"default circle"})),h("td",null,"No Data",h("p",{class:"note"},"(please contribute)")),h("td",null,"No Data",h("p",{class:"note"},"(please contribute)"))))]}),h(ua,{toggle:"Sources",detail:h("p",null,h("b",null,"Project Lockdown")," combines multiple trusted sources to ensure that the data used is verified and accurate. You can find the full list of sources used here:",h("ul",{class:"ld-sources"},h("li",null,h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://TIOF.Click/LockdownData"}," Project Lockdown's Database"),h("br",null),"(Collected from a number of NPI sources)"),h("li",null,h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://covid19api.com/"},"Coronavirus COVID19 API"),h("br",null),"(Data sourced from ",h("a",{href:"https://systems.jhu.edu/",target:"_blank"},"Johns Hopkins CSSE)"),h("br",null))),"If you find any errors, please help us and report it ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Code-for-All/lockdown/issues"},"by creating an issue here"),".")}),h(ua,{toggle:"Credits",detail:h("p",null,h("b",null,"Project Lockdown")," is a Civic Tech initiative made possible by a number of dedicated individuals and organizations.\n                View the list of contributors",h("a",{href:"https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit?ts=5e74ac83#gid=634415797",target:"_blank"},"here"),".")}),h(ua,{toggle:"Data & Privacy",detail:[h("p",null,"We do not collect any personal information from our visitors."),h("p",null,"All information on project members is provided with their consent.")]})]};case"settings":return{title:"settings",template:[" ",h(Ha,null)," "]};case"contribute":return{title:"contribute",template:[h("p",null,"Do you have any NPI source you would want to share with us? Please follow this link:"),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Submit data"),h("p",null,"Additionally, you can become part of the project by joining one of the following teams:",h("ul",null,h("li",null,"Editors"),h("li",null,"Devs"),h("li",null,"UI/UX"))),h("p",null,"Contact us via Telegram at:",h("br",null),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://t.me/ProjectLockdown"}," @ProjectLockdown"))]};case"updates":return{title:"updates",template:[" ",h(Ca,null)," "]};default:return{title:"",template:void 0}}};class Za extends g{constructor(e){super(e),this.state={activeItem:"info",showLateralMenu:!1,showMenu:!1},this.showSideBar=this.showSideBar.bind(this),this.closeNavbar=this.closeNavbar.bind(this),this.switchContent=this.switchContent.bind(this)}componentDidMount(){let e=0;E("(min-width: 960px)",t=>{this.setState({isMobile:!t}),t&&e>0&&(e++,this.props.close())})}showSideBar(){this.setState({showLateralMenu:!0,showMenu:!0})}switchContent(e){if("settings"===e&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.state.isMobile&&this.props.opened&&e===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.props.changeRoute(Ga(e)),this.prevVal=e,this.setState({activeItem:e,showLateralMenu:e!==this.state.activeItem})}closeNavbar(){this.setState({showLateralMenu:!1,showSideBar:!1})}render(e,{activeItem:t,updateAvailable:a}){return this.state.showLateralMenu||!0===this.props.isMobile?[h("div",{class:"menu-overlay "+Xa}),h("main",{id:"main",class:"ld-menu "+qa+" "+(this.state.showLateralMenu?Ya:"")},h("div",{class:"ld-menu-nav"},h("button",{class:Qa,onClick:this.closeNavbar},lt),h("nav",null,h(ja,{switchContent:this.switchContent},h("button",{id:"info"},"info"),h("button",{id:"settings"},"settings"),h("button",{id:"updates"},"updates"),h("button",{id:"contribute"},"contribute")))),h("div",{class:"ld-menu--content"},h("div",{class:"mb-only"},h("div",{class:"ld-menu--header"},h("h1",null,t))),Ga(t).template))]:h("button",{onClick:this.showSideBar,class:$a},vt)}}class Ja extends g{async componentWillMount(){const e=await this.props.component(),t=e.default||e;this.setState({Component:t})}render({props:e},{Component:t}){return h(t,e)}}var Ka="object"==typeof global&&global&&global.Object===Object&&global,en="object"==typeof self&&self&&self.Object===Object&&self,tn=Ka||en||Function("return this")(),an=tn.Symbol,nn=Object.prototype,rn=nn.hasOwnProperty,on=nn.toString,sn=an?an.toStringTag:void 0;var ln=Object.prototype.toString;var cn=an?an.toStringTag:void 0;function dn(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":cn&&cn in Object(e)?function(e){var t=rn.call(e,sn),a=e[sn];try{e[sn]=void 0;var n=!0}catch(e){}var r=on.call(e);return n&&(t?e[sn]=a:delete e[sn]),r}(e):function(e){return ln.call(e)}(e)}function un(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var hn=/^\s+|\s+$/g,pn=/^[-+]0x[0-9a-f]+$/i,fn=/^0b[01]+$/i,gn=/^0o[0-7]+$/i,mn=parseInt;function bn(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==dn(e)}(e))return NaN;if(un(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=un(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(hn,"");var a=fn.test(e);return a||gn.test(e)?mn(e.slice(2),a?2:8):pn.test(e)?NaN:+e}var vn=function(){return tn.Date.now()},wn=Math.max,_n=Math.min;let xn,yn,kn=e=>e;const Cn=R(xn||(xn=kn`
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
`)),Mn=R(yn||(yn=kn`
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
`)),Sn=["S","M","T","W","T","F","S"],Dn=["January","February","March","April","May","June","July","August","September","October","November","December"];class Ln extends g{constructor(){super(),this.state={days:[],currentMonth:(new Date).getMonth(),lastSelection:!1,currentYear:2020,allMonthsDate:new Array(12),enableArrows:!1},this.getMonthData=this.getMonthData.bind(this),this.fillAllMonths=this.fillAllMonths.bind(this),this.chooseDay=this.chooseDay.bind(this),this.changeMonth=this.changeMonth.bind(this)}componentDidMount(){const{currentMonth:e,allMonthsDate:t}=this.state;let a=new Date(2020,e,1),n=new Date(2020,e+1,0),r=this.getMonthData(a,n),o=t;o[e]=r,this.setState({days:r,allMonthsDate:o},this.fillAllMonths)}getMonthData(e,t){let a=t.getDate(),n=7-(e.getDay()+1),r=a+n,o=r/7,i=0;r%7>0&&(i=7-r%7,r+=7-r%7,o=r/7);let s=[],l=0;for(let e=0;e<o;e++){s.push([]);for(let t=0;t<7;t++)0===e&&t<n||e===o-1&&i>0&&t>7-i-1?s[e].push({day:null,label:Sn[t]}):(l++,s[e].push({day:l,label:Sn[t]}))}return s}fillAllMonths(){const e=this.state.currentMonth;let t,a,n=this.state.allMonthsDate;for(let r=0;r<12;r++)if(r!==e){t=new Date(2020,r,1),a=new Date(2020,r+1,0);let e=this.getMonthData(t,a);n[r]=e}this.setState({allMonthsDate:n,enableArrows:!0})}chooseDay(e,t,a){let n=this.state.days;!1!==this.state.lastSelection&&(n[this.state.lastSelection[0]][this.state.lastSelection[1]].selected=!1),e.selected=!0,n[t][a]=e,this.props.onSelect(new Date(this.state.currentYear,this.state.currentMonth,e.day)),this.setState({days:n,lastSelection:[t,a]})}changeMonth(e){const{enableArrows:t,currentMonth:a,allMonthsDate:n}=this.state;if(t){let t,r;(a>0||e)&&(a<11||!e)&&(e?(r=a+1,t=n[r]):(r=a-1,t=n[r]),this.setState({days:t,currentMonth:r}))}}render(e){return[h("div",{class:"overlay "+Mn+" "+(this.props.show?"show":""),onClick:this.props.close}),h("div",{class:"calendar "+Cn+" "+(this.props.show?"show":"")+" "+this.props.customClass},h("div",{class:"calendar actions"},h("span",{onClick:()=>this.changeMonth(!1)},mt),h("h3",null,Dn[this.state.currentMonth]," ",this.state.currentYear),h("span",{onClick:()=>this.changeMonth(!0)},bt)),h("div",{class:"calendar header"},Sn.map(e=>h("div",{class:"header item"},e))),h("div",{class:"calendar container"},this.state.days.map((e,t)=>h("div",{class:"week"},e.map((e,a)=>h("div",{onClick:()=>this.chooseDay(e,t,a),class:`day ${null===e.day?"empty":""} ${e.selected?"selected":""}`},h("span",null,e.day)))))))]}}let Pn,Tn,zn,An,En,Hn=e=>e;const Un=[7.5,16,24.5,33,41.5,50,58.5,67,75.5,84,94];function jn(e){return Ie(e,"dd/MM/yyyy")}const Nn=R(Pn||(Pn=Hn`
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
        bottom: 40px;
        left: 0;
        right: 0;
        margin-left:auto;
        margin-right:auto;
        z-index: 1000;
        width: calc(80vw - 400px);
        min-height: 10vh;
        background-color: white;
        padding: 0px 6%;
        padding-top: 4%;
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
              bottom: 10px;
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
`)),Wn=R(Tn||(Tn=Hn`
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
`)),On=R(zn||(zn=Hn`
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
`)),Rn=R(An||(An=Hn`
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
    top: 18%;
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
`)),In=R(En||(En=Hn`
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
`));class Vn extends g{constructor(){super(),this.state={currentDateValue:2,currentPosition:24.5,datePickerPosition:"left",showDatePicker:!1,currentSelectedDay:"",firstDay:"",lastDay:"",currentSliderRange:[]},this.dateRef={},this.range={},this.onSliderChange=this.onSliderChange.bind(this),this.onBtnClick=this.onBtnClick.bind(this),this.onChooseDate=this.onChooseDate.bind(this),this.calendarWillClose=this.calendarWillClose.bind(this),this.closeDatePicker=this.closeDatePicker.bind(this),this.submitChanges=this.submitChanges.bind(this)}componentDidMount(){let e=new Date,t=[],a=7;for(let n=0;n<11;n++)n<2?t.push(this.rangePreProcces(e,0==n?-13:-7)):2!==n?(t.push(this.rangePreProcces(e,a)),a+=7):t.push(e);this.setState({currentSliderRange:t,currentSelectedDay:jn(e),firstDay:jn(t[0]),lastDay:jn(t[t.length-1])})}onSliderChange(e){const{currentDateValue:t,currentSliderRange:a}=this.state,n=this.dateRef.current,r=Number(e.target.value);let o=Un[r];n.style.left=o+"%",n.style.transform=`translate(-${o}%, 0)`,this.setState({currentDateValue:r,currentPosition:o,currentSelectedDay:jn(a[r])},this.submitChanges)}onBtnClick(e){}onChooseDate(e){const t=this.dateRef.current;this.calendarWillClose();let a=[],n=7;for(let t=0;t<11;t++)t<2?a.push(this.rangePreProcces(e,0==t?-13:-7)):2!==t?(a.push(this.rangePreProcces(e,n)),n+=7):a.push(e);t.style.left="24.5%",t.style.transform="translate(-24.5%, 0)",this.setState({currentSliderRange:a,currentSelectedDay:jn(e),firstDay:jn(a[0]),lastDay:jn(a[a.length-1]),currentDateValue:2,currentPosition:24.5})}calendarWillClose(){this.setState({datePickerPosition:this.state.datePickerPosition+" hide"},()=>setTimeout(()=>this.closeDatePicker(),400))}closeDatePicker(){this.setState({showDatePicker:!1,datePickerPosition:this.state.datePickerPosition.replace(" hide","")})}rangePreProcces(e,t){let a=new Date;return a.setDate(e.getDate()+t),a}submitChanges(){const{currentSliderRange:e,currentDateValue:t}=this.state;this.props.onChange(e[t],e[0],e[e.length-1])}render(e){return h("div",{class:Nn+" "+Wn},h(Ln,{close:this.calendarWillClose,onSelect:this.onChooseDate,show:this.state.showDatePicker,customClass:this.state.datePickerPosition}),h("div",{class:Rn,ref:this.dateRef},h("span",null,this.state.currentSelectedDay)),h("span",{class:"first "+On},this.state.firstDay),h("button",{onClick:e=>this.onBtnClick("left"),class:"first "+In}),h("input",{ref:this.range,onInput:this.onSliderChange,type:"range",min:"0",max:"10",step:"1",value:this.state.currentDateValue}),h("button",{onClick:e=>this.onBtnClick("right"),class:"last "+In}),h("span",{class:"last "+On},this.state.lastDay))}}let Bn;const Fn=function(e,t,a){var n,r,o,i,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var a=n,o=r;return n=r=void 0,c=t,i=e.apply(o,a)}function f(e){return c=e,s=setTimeout(m,t),d?p(e):i}function g(e){var a=e-l;return void 0===l||a>=t||a<0||u&&e-c>=o}function m(){var e=vn();if(g(e))return b(e);s=setTimeout(m,function(e){var a=t-(e-l);return u?_n(a,o-(e-c)):a}(e))}function b(e){return s=void 0,h&&n?p(e):(n=r=void 0,i)}function v(){var e=vn(),a=g(e);if(n=arguments,r=this,l=e,a){if(void 0===s)return f(l);if(u)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),i}return t=bn(t)||0,un(a)&&(d=!!a.leading,o=(u="maxWait"in a)?wn(bn(a.maxWait)||0,t):o,h="trailing"in a?!!a.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=r=s=void 0},v.flush=function(){return void 0===s?i:b(vn())},v}(()=>{let e={menuDialogClosed:!1,countryDialogClosed:!1};const t=new URLSearchParams(location.search);t.has("country")||t.has("iso2")?e.countryDialogClosed=!0:e.menuDialogClosed=!0,Ye.close(e)},10,{leading:!0,trailing:!1}),Yn=R(Bn||(Bn=(e=>e)`
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
`));function qn(e){return Ie(e,"yyyy-MM-dd")}("requestIdleCallback"in window?window.requestIdleCallback:e=>setTimeout(e,1e3))(()=>{import("./a7a13bd6.js"),import("./1cece91a.js")}),console.log("🌐 Project Lockdown, version: 0.0.0"),window.addEventListener("appinstalled",()=>{window.location.reload()}),E("(prefers-color-scheme: dark)",e=>{const t=localStorage.getItem("darkmode");null!==t?"true"===t&&(document.documentElement.classList.add("dark"),Da(!0)):e?(document.documentElement.classList.add("dark"),Da(!0)):(document.documentElement.classList.remove("dark"),Da(!1))}),function(e,a,n){var r,o,c;t.__&&t.__(e,a),o=(r=n===i)?null:n&&n.__k||a.__k,e=h(f,null,[e]),c=[],M(a,(r?a:n||a).__k=e,o||s,s,void 0!==a.ownerSVGElement,n&&!r?[n]:o?null:l.slice.call(a.childNodes),c,n||s,r),S(c,e)}([" ",h(class extends g{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""},haveSelectedDate:!1},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__showDialog=this.__showDialog.bind(this),this.__showDialogRoute=this.__showDialogRoute.bind(this),this.__onSelectDate=this.__onSelectDate.bind(this)}async componentDidMount(){this.__onPathChanged(),E("(min-width: 960px)",e=>{this.setState({isMobile:!getMatchedCSSRules})})}componentWillMount(){Fe.addEventListener("path-changed",this.__onPathChanged),this.setState({showStatsbox:1==Number(Fe.url.searchParams.get("statsbox")||1),showMenu:1==Number(Fe.url.searchParams.get("menu")||1),showSlider:1==Number(Fe.url.searchParams.get("slider")||1)})}componentWillUnmount(){Fe.removeEventListener("path-changed",this.__onPathChanged)}render(){const e=this.state.haveSelectedDate?qn(this.state.haveSelectedDate):qn(new Date);return[this.state.showStatsbox?[h(zt,{selectedDate:e,showStatsbox:this.state.showStatsbox}),h("div",{class:Yn},h(nt,{selectedDate:e}))]:"",this.state.showMenu?h(Za,{opened:this.state.dialog.opened,isMobile:this.state.isMobile,changeRoute:this.__showDialogRoute,close:this.__closeDialog}):"",h(Je,{selectedDate:e}),this.state.showSlider?h(Vn,{onChange:this.__onSelectDate}):"",this.state.dialog.opened?h(Ja,{component:()=>import("./a7a13bd6.js"),props:{...this.state.dialog,onClose:this.__closeDialog}}):""]}__showDialogRoute({template:e,title:t}){const a=Fe.url.searchParams.get("country");a?Fe.setPath(`${t}?country=${a}`):Fe.setPath(t),this.state.isMobile&&(Fe.setSearchParam("country",null),this.__showDialog({template:e,title:t}))}__onPathChanged(){const e=Fe.url.searchParams.get("country"),t=Fe.url.searchParams.get("iso2"),a=this.state.haveSelectedDate||new Date;e&&t&&this.setState({dialog:{opened:!0,template:[" ",h(Ja,{component:()=>import("./1cece91a.js"),props:{country:e,iso2:t,date:a}})," "],title:e}})}__showDialog({template:e,title:t}){this.setState({dialog:{opened:!0,template:e,title:t}})}__closeCountryInfo(){Fe.setSearchParam("country",void 0),Fe.setSearchParam("iso2",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),Fn(),this.__closeCountryInfo()}__onSelectDate(e){this.setState({haveSelectedDate:e})}},null)," "],document.getElementById("app"));export{Be as E,lt as a,xa as b,R as c,wt as d,_t as e,Ie as f,xt as g,h,kt as i,Ct as j,St as k,_a as l,g as m,Dt as n,ut as o,Lt as p,ht as q,Fe as r,Mt as s,ft as t,gt as u,pt as v,yt as w};
