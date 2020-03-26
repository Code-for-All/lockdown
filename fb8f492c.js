var t,n,a,r,o,i,s={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n){var a,r=arguments,o={};for(a in t)"key"!==a&&"ref"!==a&&(o[a]=t[a]);if(arguments.length>3)for(n=[n],a=3;a<arguments.length;a++)n.push(r[a]);if(null!=n&&(o.children=n),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===o[a]&&(o[a]=e.defaultProps[a]);return p(e,o,t&&t.key,t&&t.ref)}function p(e,n,a,r){var o={type:e,props:n,key:a,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return t.vnode&&t.vnode(o),o}function f(e){return e.children}function _(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function v(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!a++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(b)}function b(){for(var e;a=n.length;)e=n.sort((function(e,t){return e.__v.__b-t.__v.__b})),n=[],e.some((function(e){var t,n,a,r,o,i;e.__d&&(o=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],a=A(i,r,u({},r),t.__n,void 0!==i.ownerSVGElement,null,n,null==o?m(r):o),S(n,r),a!=o&&g(r)))}))}function w(e,t,n,a,r,o,i,c,u){var h,p,f,_,g,v,b,w=n&&n.__k||l,y=w.length;if(c==s&&(c=null!=o?o[0]:y?m(n,0):null),h=0,t.__k=k(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(f=w[h])||f&&n.key==f.key&&n.type===f.type)w[h]=void 0;else for(p=0;p<y;p++){if((f=w[p])&&n.key==f.key&&n.type===f.type){w[p]=void 0;break}f=null}if(_=A(e,n,f=f||s,a,r,o,i,c,u),(p=n.ref)&&f.ref!=p&&(b||(b=[]),f.ref&&b.push(f.ref,null,n),b.push(p,n.__c||_,n)),null!=_){var l;if(null==v&&(v=_),void 0!==n.__d)l=n.__d,n.__d=void 0;else if(o==f||_!=c||null==_.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(_),l=null;else{for(g=c,p=0;(g=g.nextSibling)&&p<y;p+=2)if(g==_)break e;e.insertBefore(_,c),l=c}"option"==t.type&&(e.value="")}c=void 0!==l?l:_.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&f.__e==c&&c.parentNode!=e&&(c=m(f))}return h++,n})),t.__e=v,null!=o&&"function"!=typeof t.type)for(h=o.length;h--;)null!=o[h]&&d(o[h]);for(h=y;h--;)null!=w[h]&&L(w[h],w[h]);if(b)for(h=0;h<b.length;h++)U(b[h],b[++h],b[++h])}function k(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var a=0;a<e.length;a++)k(e[a],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?p(null,e,null,null):null!=e.__e||null!=e.__c?p(e.type,e.props,e.key,null):e):e);return n}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===c.test(t)?n+"px":null==n?"":n}function x(e,t,n,a,r){var o,i,s,l,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(o=e.style,"string"==typeof n)o.cssText=n;else{if("string"==typeof a&&(o.cssText="",a=null),a)for(i in a)n&&i in n||y(o,i,"");if(n)for(s in n)a&&n[s]===a[s]||y(o,s,n[s])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(a||e.addEventListener(t,C,l),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,C,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function C(e){this.l[e.type](t.event?t.event(e):e)}function A(e,n,a,r,o,i,s,l,c){var d,h,p,m,g,v,b,k,y,x,C=n.type;if(void 0!==n.constructor)return null;(d=t.__b)&&d(n);try{e:if("function"==typeof C){if(k=n.props,y=(d=C.contextType)&&r[d.__c],x=d?y?y.props.value:d.__:r,a.__c?b=(h=n.__c=a.__c).__=h.__E:("prototype"in C&&C.prototype.render?n.__c=h=new C(k,x):(n.__c=h=new _(k,x),h.constructor=C,h.render=M),y&&y.sub(h),h.props=k,h.state||(h.state={}),h.context=x,h.__n=r,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=C.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=u({},h.__s)),u(h.__s,C.getDerivedStateFromProps(k,h.__s))),m=h.props,g=h.state,p)null==C.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,x)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=n,n.__e=a.__e,n.__k=a.__k,h.__h.length&&s.push(h),d=0;d<n.__k.length;d++)n.__k[d]&&(n.__k[d].__=n);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,x),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(m,g,v)}))}h.context=x,h.props=k,h.state=h.__s,(d=t.__r)&&d(n),h.__d=!1,h.__v=n,h.__P=e,d=h.render(h.props,h.state,h.context),n.__k=null!=d&&d.type==f&&null==d.key?d.props.children:Array.isArray(d)?d:[d],null!=h.getChildContext&&(r=u(u({},r),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(v=h.getSnapshotBeforeUpdate(m,g)),w(e,n,a,r,o,i,s,l,c),h.base=n.__e,h.__h.length&&s.push(h),b&&(h.__E=h.__=null),h.__e=!1}else n.__e=P(a.__e,n,a,r,o,i,s,c);(d=t.diffed)&&d(n)}catch(e){t.__e(e,n,a)}return n.__e}function S(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function P(e,t,n,a,r,o,i,c){var u,d,h,p,f,_=n.props,m=t.props;if(r="svg"===t.type||r,null!=o)for(u=0;u<o.length;u++)if(null!=(d=o[u])&&((null===t.type?3===d.nodeType:d.localName===t.type)||e==d)){e=d,o[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,m.is&&{is:m.is}),o=null}if(null===t.type)_!==m&&e.data!=m&&(e.data=m);else if(t!==n){if(null!=o&&(o=l.slice.call(e.childNodes)),h=(_=n.props||s).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!c){if(_===s)for(_={},f=0;f<e.attributes.length;f++)_[e.attributes[f].name]=e.attributes[f].value;(p||h)&&(p&&h&&p.__html==h.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,a,r){var o;for(o in n)o in t||x(e,o,null,n[o],a);for(o in t)r&&"function"!=typeof t[o]||"value"===o||"checked"===o||n[o]===t[o]||x(e,o,t[o],n[o],a)})(e,m,_,r,c),t.__k=t.props.children,p||w(e,t,n,a,"foreignObject"!==t.type&&r,o,i,s,c),c||("value"in m&&void 0!==m.value&&m.value!==e.value&&(e.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==e.checked&&(e.checked=m.checked))}return e}function U(e,n,a){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,a)}}function L(e,n,a){var r,o,i;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||U(r,null,n)),a||"function"==typeof e.type||(a=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&L(r[i],n,a);null!=o&&d(o)}function M(e,t,n){return this.constructor(e,n)}t={__e:function(e,t){for(var n,a;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(a=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(a=!0,n.componentDidCatch(e)),a)return v(n.__E=n)}catch(t){e=t}throw e}},_.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},_.prototype.render=f,n=[],a=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=s;var E=function e(t,n,a,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],l=n[i]?(n[0]|=s?1:2,a[n[i++]]):n[++i];3===s?r[0]=l:4===s?r[1]=Object.assign(r[1]||{},l):5===s?(r[1]=r[1]||{})[n[++i]]=l:6===s?r[1][n[++i]]+=l+"":s?(o=t.apply(l,e(t,l,a,["",null])),r.push(o),l[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(l)}return r},D=new Map;(function(e){var t=D.get(this);return t||(t=new Map,D.set(this,t)),(t=E(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,a=1,r="",o="",i=[0],s=function(e){1===a&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===a&&(e||r)?(i.push(3,e,r),a=2):2===a&&"..."===r&&e?i.push(4,e,0):2===a&&r&&!e?i.push(5,0,!0,r):a>=5&&((r||!e&&5===a)&&(i.push(a,0,r,n),a=6),e&&(i.push(a,e,0,n),a=6)),r=""},l=0;l<e.length;l++){l&&(1===a&&s(),s(l));for(var c=0;c<e[l].length;c++)t=e[l][c],1===a?"<"===t?(s(),i=[i],a=3):r+=t:4===a?"--"===r&&">"===t?(a=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(s(),a=1):a&&("="===t?(a=5,n=r,r=""):"/"===t&&(a<5||">"===e[l][c+1])?(s(),3===a&&(i=i[0]),a=i,(i=i[0]).push(2,0,a),a=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),a=2):r+=t),3===a&&"!--"===r&&(a=4,i=i[0])}return s(),i}(e)),t),arguments,[])).length>1?t:t[0]}).bind(h);var R=t=>{var n=/^\0+/g,a=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,i=/([,: ])(transform)/g,s=/,+\s*(?![^(]*[)])/g,l=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,u=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,h=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,m=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,v=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,k=/([^\(])(:+) */g,y=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,A=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,U=/([^-])(image-set\()/,L="-webkit-",M="-moz-",E="-ms-",D=59,R=125,q=123,j=40,H=41,N=10,T=13,z=32,O=45,$=42,I=44,W=58,F=47,B=1,K=1,V=0,G=1,Z=1,J=1,Q=0,X=0,Y=0,ee=[],te=[],ne=0,ae=null,re=0,oe=1,ie="",se="",le="";function ce(e,t,r,o,i){for(var s,l,u=0,d=0,h=0,p=0,g=0,v=0,b=0,w=0,y=0,C=0,A=0,S=0,P=0,U=0,M=0,E=0,Q=0,te=0,ae=0,de=r.length,ge=de-1,ve="",be="",we="",ke="",ye="",xe="";M<de;){if(b=r.charCodeAt(M),M===ge&&d+p+h+u!==0&&(0!==d&&(b=d===F?N:F),p=h=u=0,de++,ge++),d+p+h+u===0){if(M===ge&&(E>0&&(be=be.replace(a,"")),be.trim().length>0)){switch(b){case z:case 9:case D:case T:case N:break;default:be+=r.charAt(M)}b=D}if(1===Q)switch(b){case q:case R:case D:case 34:case 39:case j:case H:case I:Q=0;case 9:case T:case N:case z:break;default:for(Q=0,ae=M,g=b,M--,b=D;ae<de;)switch(r.charCodeAt(ae++)){case N:case T:case D:++M,b=g,ae=de;break;case W:E>0&&(++M,b=g);case q:ae=de}}switch(b){case q:for(g=(be=be.trim()).charCodeAt(0),A=1,ae=++M;M<de;){switch(b=r.charCodeAt(M)){case q:A++;break;case R:A--;break;case F:switch(v=r.charCodeAt(M+1)){case $:case F:M=me(v,M,ge,r)}break;case 91:b++;case j:b++;case 34:case 39:for(;M++<ge&&r.charCodeAt(M)!==b;);}if(0===A)break;M++}switch(we=r.substring(ae,M),0===g&&(g=(be=be.replace(n,"").trim()).charCodeAt(0)),g){case 64:switch(E>0&&(be=be.replace(a,"")),v=be.charCodeAt(1)){case 100:case 109:case 115:case O:s=t;break;default:s=ee}if(ae=(we=ce(t,s,we,v,i+1)).length,Y>0&&0===ae&&(ae=be.length),ne>0&&(l=_e(3,we,s=ue(ee,be,te),t,K,B,ae,v,i,o),be=s.join(""),void 0!==l&&0===(ae=(we=l.trim()).length)&&(v=0,we="")),ae>0)switch(v){case 115:be=be.replace(x,fe);case 100:case 109:case O:we=be+"{"+we+"}";break;case 107:we=(be=be.replace(f,"$1 $2"+(oe>0?ie:"")))+"{"+we+"}",we=1===Z||2===Z&&pe("@"+we,3)?"@"+L+we+"@"+we:"@"+we;break;default:we=be+we,112===o&&(ke+=we,we="")}else we="";break;default:we=ce(t,ue(t,be,te),we,o,i+1)}ye+=we,S=0,Q=0,U=0,E=0,te=0,P=0,be="",we="",b=r.charCodeAt(++M);break;case R:case D:if((ae=(be=(E>0?be.replace(a,""):be).trim()).length)>1)switch(0===U&&((g=be.charCodeAt(0))===O||g>96&&g<123)&&(ae=(be=be.replace(" ",":")).length),ne>0&&void 0!==(l=_e(1,be,t,e,K,B,ke.length,o,i,o))&&0===(ae=(be=l.trim()).length)&&(be="\0\0"),g=be.charCodeAt(0),v=be.charCodeAt(1),g){case 0:break;case 64:if(105===v||99===v){xe+=be+r.charAt(M);break}default:if(be.charCodeAt(ae-1)===W)break;ke+=he(be,g,v,be.charCodeAt(2))}S=0,Q=0,U=0,E=0,te=0,be="",b=r.charCodeAt(++M)}}switch(b){case T:case N:if(d+p+h+u+X===0)switch(C){case H:case 39:case 34:case 64:case 126:case 62:case $:case 43:case F:case O:case W:case I:case D:case q:case R:break;default:U>0&&(Q=1)}d===F?d=0:G+S===0&&107!==o&&be.length>0&&(E=1,be+="\0"),ne*re>0&&_e(0,be,t,e,K,B,ke.length,o,i,o),B=1,K++;break;case D:case R:if(d+p+h+u===0){B++;break}default:switch(B++,ve=r.charAt(M),b){case 9:case z:if(p+u+d===0)switch(w){case I:case W:case 9:case z:ve="";break;default:b!==z&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:p+d+u===0&&G>0&&(te=1,E=1,ve="\f"+ve);break;case 108:if(p+d+u+V===0&&U>0)switch(M-U){case 2:112===w&&r.charCodeAt(M-3)===W&&(V=w);case 8:111===y&&(V=y)}break;case W:p+d+u===0&&(U=M);break;case I:d+h+p+u===0&&(E=1,ve+="\r");break;case 34:case 39:0===d&&(p=p===b?0:0===p?b:p);break;case 91:p+d+h===0&&u++;break;case 93:p+d+h===0&&u--;break;case H:p+d+u===0&&h--;break;case j:if(p+d+u===0){if(0===S)switch(2*w+3*y){case 533:break;default:A=0,S=1}h++}break;case 64:d+h+p+u+U+P===0&&(P=1);break;case $:case F:if(p+u+h>0)break;switch(d){case 0:switch(2*b+3*r.charCodeAt(M+1)){case 235:d=F;break;case 220:ae=M,d=$}break;case $:b===F&&w===$&&ae+2!==M&&(33===r.charCodeAt(ae+2)&&(ke+=r.substring(ae,M+1)),ve="",d=0)}}if(0===d){if(G+p+u+P===0&&107!==o&&b!==D)switch(b){case I:case 126:case 62:case 43:case H:case j:if(0===S){switch(w){case 9:case z:case N:case T:ve+="\0";break;default:ve="\0"+ve+(b===I?"":"\0")}E=1}else switch(b){case j:U+7===M&&108===w&&(U=0),S=++A;break;case H:0==(S=--A)&&(E=1,ve+="\0")}break;case 9:case z:switch(w){case 0:case q:case R:case D:case I:case 12:case 9:case z:case N:case T:break;default:0===S&&(E=1,ve+="\0")}}be+=ve,b!==z&&9!==b&&(C=b)}}y=w,w=b,M++}if(ae=ke.length,Y>0&&0===ae&&0===ye.length&&0===t[0].length==0&&(109!==o||1===t.length&&(G>0?se:le)===t[0])&&(ae=t.join(",").length+2),ae>0){if(s=0===G&&107!==o?function(e){for(var t,n,r=0,o=e.length,i=Array(o);r<o;++r){for(var s=e[r].split(c),l="",u=0,d=0,h=0,p=0,f=s.length;u<f;++u)if(!(0===(d=(n=s[u]).length)&&f>1)){if(h=l.charCodeAt(l.length-1),p=n.charCodeAt(0),t="",0!==u)switch(h){case $:case 126:case 62:case 43:case z:case j:break;default:t=" "}switch(p){case 38:n=t+se;case 126:case 62:case 43:case z:case H:case j:break;case 91:n=t+n+se;break;case W:switch(2*n.charCodeAt(1)+3*n.charCodeAt(2)){case 530:if(J>0){n=t+n.substring(8,d-1);break}default:(u<1||s[u-1].length<1)&&(n=t+se+n)}break;case I:t="";default:n=d>1&&n.indexOf(":")>0?t+n.replace(k,"$1"+se+"$2"):t+n+se}l+=n}i[r]=l.replace(a,"").trim()}return i}(t):t,ne>0&&void 0!==(l=_e(2,ke,s,e,K,B,ae,o,i,o))&&0===(ke=l).length)return xe+ke+ye;if(ke=s.join(",")+"{"+ke+"}",Z*V!=0){switch(2!==Z||pe(ke,2)||(V=0),V){case 111:ke=ke.replace(m,":-moz-$1")+ke;break;case 112:ke=ke.replace(_,"::"+L+"input-$1")+ke.replace(_,"::-moz-$1")+ke.replace(_,":-ms-input-$1")+ke}V=0}}return xe+ke+ye}function ue(e,t,n){var a=t.trim().split(u),r=a,o=a.length,i=e.length;switch(i){case 0:case 1:for(var s=0,l=0===i?"":e[0]+" ";s<o;++s)r[s]=de(l,r[s],n,i).trim();break;default:s=0;var c=0;for(r=[];s<o;++s)for(var d=0;d<i;++d)r[c++]=de(e[d]+" ",a[s],n,i).trim()}return r}function de(e,t,n,a){var r=t,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(G+a){case 0:case 1:if(0===e.trim().length)break;default:return r.replace(d,"$1"+e.trim())}break;case W:switch(r.charCodeAt(1)){case 103:if(J>0&&G>0)return r.replace(h,"$1").replace(d,"$1"+le);break;default:return e.trim()+r.replace(d,"$1"+e.trim())}default:if(n*G>0&&r.indexOf("\f")>0)return r.replace(d,(e.charCodeAt(0)===W?"":"$1")+e.trim())}return e+r}function he(e,t,n,a){var c,u=0,d=e+";",h=2*t+3*n+4*a;if(944===h)return function(e){var t=e.length,n=e.indexOf(":",9)+1,a=e.substring(0,n).trim(),r=e.substring(n,t-1).trim();switch(e.charCodeAt(9)*oe){case 0:break;case O:if(110!==e.charCodeAt(10))break;default:var o=r.split((r="",s)),i=0;for(n=0,t=o.length;i<t;n=0,++i){for(var c=o[i],u=c.split(l);c=u[n];){var d=c.charCodeAt(0);if(1===oe&&(d>64&&d<90||d>96&&d<123||95===d||d===O&&c.charCodeAt(1)!==O))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=ie}}u[n++]=c}r+=(0===i?"":",")+u.join(" ")}}return r=a+r+";",1===Z||2===Z&&pe(r,1)?L+r+r:r}(d);if(0===Z||2===Z&&!pe(d,1))return d;switch(h){case 1015:return 97===d.charCodeAt(10)?L+d+d:d;case 951:return 116===d.charCodeAt(3)?L+d+d:d;case 963:return 110===d.charCodeAt(5)?L+d+d:d;case 1009:if(100!==d.charCodeAt(4))break;case 969:case 942:return L+d+d;case 978:return L+d+M+d+d;case 1019:case 983:return L+d+M+d+E+d+d;case 883:return d.charCodeAt(8)===O?L+d+d:d.indexOf("image-set(",11)>0?d.replace(U,"$1"+L+"$2")+d:d;case 932:if(d.charCodeAt(4)===O)switch(d.charCodeAt(5)){case 103:return L+"box-"+d.replace("-grow","")+L+d+E+d.replace("grow","positive")+d;case 115:return L+d+E+d.replace("shrink","negative")+d;case 98:return L+d+E+d.replace("basis","preferred-size")+d}return L+d+E+d+d;case 964:return L+d+E+"flex-"+d+d;case 1023:if(99!==d.charCodeAt(8))break;return c=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),L+"box-pack"+c+L+d+E+"flex-pack"+c+d;case 1005:return o.test(d)?d.replace(r,":"+L)+d.replace(r,":"+M)+d:d;case 1e3:switch(u=(c=d.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(u)){case 226:c=d.replace(y,"tb");break;case 232:c=d.replace(y,"tb-rl");break;case 220:c=d.replace(y,"lr");break;default:return d}return L+d+E+c+d;case 1017:if(-1===d.indexOf("sticky",9))return d;case 975:switch(u=(d=e).length-10,h=(c=(33===d.charCodeAt(u)?d.substring(0,u):d).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:d=d.replace(c,L+c)+";"+d;break;case 207:case 102:d=d.replace(c,L+(h>102?"inline-":"")+"box")+";"+d.replace(c,L+c)+";"+d.replace(c,E+c+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===O)switch(d.charCodeAt(6)){case 105:return c=d.replace("-items",""),L+d+L+"box-"+c+E+"flex-"+c+d;case 115:return L+d+E+"flex-item-"+d.replace(A,"")+d;default:return L+d+E+"flex-line-pack"+d.replace("align-content","").replace(A,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==O||122===d.charCodeAt(4))break;case 931:case 953:if(!0===P.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?he(e.replace("stretch","fill-available"),t,n,a).replace(":fill-available",":stretch"):d.replace(c,L+c)+d.replace(c,M+c.replace("fill-",""))+d;break;case 962:if(d=L+d+(102===d.charCodeAt(5)?E+d:"")+d,n+a===211&&105===d.charCodeAt(13)&&d.indexOf("transform",10)>0)return d.substring(0,d.indexOf(";",27)+1).replace(i,"$1"+L+"$2")+d}return d}function pe(e,t){var n=e.indexOf(1===t?":":"{"),a=e.substring(0,3!==t?n:10),r=e.substring(n+1,e.length-1);return ae(2!==t?a:a.replace(S,"$1"),r,t)}function fe(e,t){var n=he(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(C," or ($1)").substring(4):"("+t+")"}function _e(e,t,n,a,r,o,i,s,l,c){for(var u,d=0,h=t;d<ne;++d)switch(u=te[d].call(ve,e,h,n,a,r,o,i,s,l,c)){case void 0:case!1:case!0:case null:break;default:h=u}if(h!==t)return h}function me(e,t,n,a){for(var r=t+1;r<n;++r)switch(a.charCodeAt(r)){case F:if(e===$&&a.charCodeAt(r-1)===$&&t+2!==r)return r+1;break;case N:if(e===F)return r+1}return r}function ge(e){for(var t in e){var n=e[t];switch(t){case"keyframe":oe=0|n;break;case"global":J=0|n;break;case"cascade":G=0|n;break;case"compress":Q=0|n;break;case"semicolon":X=0|n;break;case"preserve":Y=0|n;break;case"prefix":ae=null,n?"function"!=typeof n?Z=1:(Z=2,ae=n):Z=0}}return ge}function ve(t,n){if(void 0!==this&&this.constructor===ve)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),oe>0&&(ie=r.replace(p,91===o?"":"-")),o=1,1===G?le=r:se=r;var i,s=[le];ne>0&&void 0!==(i=_e(-1,n,s,s,K,B,0,0,0,0))&&"string"==typeof i&&(n=i);var l=ce(ee,s,n,0,0);return ne>0&&void 0!==(i=_e(-2,l,s,s,K,B,l.length,0,0,0))&&"string"!=typeof(l=i)&&(o=0),ie="",le="",se="",V=0,K=1,B=1,Q*o==0?l:l.replace(a,"").replace(g,"").replace(v,"$1").replace(b,"$1").replace(w," ")}return ve.use=function e(t){switch(t){case void 0:case null:ne=te.length=0;break;default:if("function"==typeof t)te[ne++]=t;else if("object"==typeof t)for(var n=0,a=t.length;n<a;++n)e(t[n]);else re=0|!!t}return e},ve.set=ge,void 0!==t&&ge(t),ve};const q={},j=document.createElement("style");document.head.appendChild(j);const H=e=>`.${e}{display:none}`,N=e=>/^(\/|https?:\/\/)/.test(e.trim()),T=e=>t=>n=>{j.innerHTML+=(q[e]={hash:t,rules:R()(`.${t}`,n)}).rules,N(e)&&(e=>{j.innerHTML=j.innerHTML.replace(H(e),"")})(t)};var z=(e,...t)=>{const n=e[0].startsWith("/")?e[0]:e.reduce((e,n,a)=>e+(n+(null==t[a]?"":t[a])),"");if(q[n])return q[n].hash;const a="csz-"+Math.random().toString(36).replace("0.",""),r=T(n)(a);return N(n)?((e=>{j.innerHTML=H(e)+j.innerHTML})(a),fetch(n).then(e=>e.text()).then(r)):r(n),a};const O=(e,t)=>{let n=window.matchMedia(e);n.addListener(e=>t(e.matches)),t(n.matches)};class ${constructor(){const e=document.createDocumentFragment();this.addEventListener=e.addEventListener.bind(e),this.dispatchEvent=e.dispatchEvent.bind(e),this.removeEventListener=e.removeEventListener.bind(e)}}const I={url:new URL("./src/services/totalsService.js",document.baseURI).href};const W=new class extends ${async getTotals(e){return!e&&this.__totals||(this.__totals=await(await fetch(new URL("../../data/totals.json",I.url))).json(),this.dispatchEvent(new Event("change"))),this.__totals}};let F;const B=z(F||(F=(e=>e)`
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
`));class K extends _{constructor(){super(),this.state={items:[]}}async componentWillMount(){O("(min-width: 900px)",e=>{this.setState({desktop:e})});const e=await W.getTotals(),t=[{description:"Countries in lockdown",value:"0"},{description:"People affected",value:"0"},{description:"Confirmed cases",value:e.confirmed},{description:"Confirmed deaths",value:e.deaths}];this.setState({items:t})}render(e,{items:t,desktop:n}){return h("div",{class:B},h("ul",null,(n?t:t.slice(0,2)).map(e=>h("li",null,h("div",{class:"key"},e.description),h("div",{class:"value"},e.value)))))}}let V;const G={url:new URL("./src/components/Header.js",document.baseURI).href},Z=new URL("../assets/lockdown-logo.svg",G.url).href,J=z(V||(V=(e=>e)`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
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
`));const Q=new class extends ${constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(e){window.history.pushState(null,"",e),this.__onPathChanged()}setSearchParam(e,t){const n=new URLSearchParams(location.search);t?n.set(e,t):n.delete(e);const a=n.toString();this.setPath(`${location.pathname}${a?`?${a}`:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed"))}__onClick(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find(e=>"A"===e.tagName);if(!t||!t.href)return;if(t.hasAttribute("download")||t.href.includes("mailto:"))return;const n=t.getAttribute("target");if(n&&""!==n&&"_self"!==n)return;const a=new URL(t.href);a.startsWith(document.baseURI)&&(e.preventDefault(),this.setPath(a.pathname))}},X={url:new URL("./src/services/locksdownsService.js",document.baseURI).href};const Y=new class extends ${async getLockdowns(e){return!e&&this.__lockdowns||(this.__lockdowns=await(await fetch(new URL("../../data/datafile.json",X.url))).json(),this.dispatchEvent(new Event("change"))),this.__lockdowns}},ee={url:new URL("./src/components/WorldMap.js",document.baseURI).href},te=new Date;class ne extends _{async componentDidMount(){const[e,t,n]=await Promise.all([Y.getLockdowns(),fetch(new URL("../../data/worldmap.json",ee.url)).then(e=>e.json()),import("./785e0d74.js")]),{Map:a,Browser:r,geoJSON:o,layerGroup:i,tileLayer:s}=n,l=new a(this.ref,{center:[0,0],zoom:3,minZoom:2,maxZoom:18,zoomControl:!1});let c,u=i();function d(e){const t=e.target;Q.setSearchParam("country",t.feature.properties.NAME)}function h(e){const t=e.target;c.resetStyle(t)}function p(e){const t=e.target;t.setStyle({fillOpacity:.5,name:"test"}),r.ie||r.opera||r.edge||t.bringToFront()}s("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g",{tileSize:512,zoomOffset:-1,attribution:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(l);for(const n of t.features)e[n.properties.NAME]&&(n.properties.data=e[n.properties.NAME]);c=o(t,{style:function(e){let t="orange";if(e.properties.data&&e.properties.data.lockdowns){0===e.properties.data.lockdowns.length&&(t="green");for(const n of e.properties.data.lockdowns)t=!(new Date(n.start)>=te&&n.end)||new Date(n.end)<te?"red":"green"}const n={weight:1,opacity:.1,color:"#555",fillOpacity:0};return t&&(n.fillColor=t,n.fillOpacity=.5),n},onEachFeature:function(e,t){t.on({mouseover:p,mouseout:h,click:d})}}).addTo(l),u.addTo(l),this.setState({map:l})}componentWillUnmount(){this.state.map.remove()}render(){return h("div",{style:"width: 100%",ref:e=>{this.ref=e}})}}let ae;const re=z(ae||(ae=(e=>e)`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog {
    background-color: white;
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

  .data-value {
    color: grey;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`));class oe extends _{async componentWillMount(){this.setState({lockdowns:await Y.getLockdowns()})}render(e,{lockdowns:t}){if(t)return h("div",{class:re},h("div",{class:"dialog"},h("div",{class:"data-entry"},"Population: ",h("span",{class:"data-value"},"Unknown")),h("div",{class:"data-entry"},"Confirmed cases: ",h("span",{class:"data-value"},"Unknown")),h("div",{class:"data-entry"},"Confirmed deaths: ",h("span",{class:"data-value"},"Unknown")),h("div",{class:"data-entry"},"Lockdown start: ",h("span",{class:"data-value"},"Unknown")),h("div",{class:"data-entry"},"Lockdown end: ",h("span",{class:"data-value"},"Unknown"))))}}var ie,se,le,ce=[],ue=t.__r,de=t.diffed,he=t.__c,pe=t.unmount;function fe(e){t.__h&&t.__h(se);var n=se.__H||(se.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function _e(e){return function(e,t,n){var a=fe(ie++);return a.__c||(a.__c=se,a.__=[n?n(t):ye(void 0,t),function(t){var n=e(a.__[0],t);a.__[0]!==n&&(a.__[0]=n,a.__c.setState({}))}]),a.__}(ye,e)}function me(e,t){var n=fe(ie++);ke(n.__H,t)&&(n.__=e,n.__H=t,se.__H.__h.push(n))}function ge(e){return function(e,t){var n=fe(ie++);return ke(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}((function(){return{current:e}}),[])}function ve(){ce.some((function(e){if(e.__P)try{e.__H.__h.forEach(be),e.__H.__h.forEach(we),e.__H.__h=[]}catch(n){return t.__e(n,e.__v),!0}})),ce=[]}function be(e){e.t&&e.t()}function we(e){var t=e.__();"function"==typeof t&&(e.t=t)}function ke(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function ye(e,t){return"function"==typeof t?t(e):t}function xe(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var a in t)if("__source"!==a&&e[a]!==t[a])return!0;return!1}t.__r=function(e){ue&&ue(e),ie=0,(se=e.__c).__H&&(se.__H.__h.forEach(be),se.__H.__h.forEach(we),se.__H.__h=[])},t.diffed=function(e){de&&de(e);var n=e.__c;if(n){var a=n.__H;a&&a.__h.length&&(1!==ce.push(n)&&le===t.requestAnimationFrame||((le=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(a),cancelAnimationFrame(t),setTimeout(e)},a=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(ve))}},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(be),e.__h=e.__h.filter((function(e){return!e.__||we(e)}))}catch(a){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(a,e.__v)}})),he&&he(e,n)},t.unmount=function(e){pe&&pe(e);var n=e.__c;if(n){var a=n.__H;if(a)try{a.__.forEach((function(e){return e.t&&e.t()}))}catch(e){t.__e(e,n.__v)}}};!function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.shouldComponentUpdate=function(e,t){return xe(this.props,e)||xe(this.state,t)}}(_);var Ce=t.__b;t.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ce&&Ce(e)};var Ae=t.__e;function Se(e){return e&&((e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(Se)),e}function Pe(e){this.__u=0,this.o=null,this.__b=null}function Ue(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function Le(){this.i=null,this.l=null}t.__e=function(e,t,n){if(e.then)for(var a,r=t;r=r.__;)if((a=r.__c)&&a.__c)return a.__c(e,t.__c);Ae(e,t,n)},(Pe.prototype=new _).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var a=Ue(n.__v),r=!1,o=function(){r||(r=!0,a?a(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var i=function(){var e;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(o,o)},Pe.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=Se(this.__b),this.__b=null),[h(_,null,t.u?null:e.children),t.u&&e.fallback]};var Me=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(Le.prototype=new _).u=function(e){var t=this,n=Ue(t.__v),a=t.l.get(e);return a[0]++,function(r){var o=function(){t.props.revealOrder?(a.push(r),Me(t,e,a)):r()};n?n(o):o()}},Le.prototype.render=function(e){this.i=null,this.l=new Map;var t=k(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Le.prototype.componentDidUpdate=Le.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){Me(e,n,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var Ee=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;_.prototype.isReactComponent={};var De="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Re=t.event;function qe(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}t.event=function(e){Re&&(e=Re(e)),e.persist=function(){};var t=!1,n=!1,a=e.stopPropagation;e.stopPropagation=function(){a.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var je={configurable:!0,get:function(){return this.class}},He=t.vnode;t.vnode=function(e){e.$$typeof=De;var t=e.type,n=e.props;if(n.class!=n.className&&(je.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",je)),"function"!=typeof t){var a,r,o;for(o in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(k(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),n)if(a=Ee.test(o))break;if(a)for(o in r=e.props={},n)r[Ee.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=n[o]}!function(t){var n=e.type,a=e.props;if(a&&"string"==typeof n){var r={};for(var o in a)/^on(Ani|Tra|Tou)/.test(o)&&(a[o.toLowerCase()]=a[o],delete a[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(a.ondblclick=a[r.ondoubleclick],delete a[r.ondoubleclick]),r.onbeforeinput&&(a.onbeforeinput=a[r.onbeforeinput],delete a[r.onbeforeinput]),r.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(a.type))){var i=r.oninput||"oninput";a[i]||(a[i]=a[r.onchange],delete a[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(qe(t.prototype,"componentWillMount"),qe(t.prototype,"componentWillReceiveProps"),qe(t.prototype,"componentWillUpdate"),t.m=!0),He&&He(e)};let Ne;function Te(e){const[t,n]=_e(!1),a=ge(null);me(()=>{t&&a.current.focus({preventScroll:!0})},[t]);const r=(""+Math.random()).substring(2,9);return h("div",{class:ze},h("div",{class:"ld-expandable"},h("button",{onClick:()=>n(!t),id:"button1",class:"ld-expandable--toggle","aria-controls":"expandable-id--"+r,"aria-expanded":t},h("div",{class:"ld-expandable--icon"},t?$e:Oe),h("div",{class:"ld-expandable--toggle-content"},h("h2",null,e.toggle))),h("div",{ref:a,id:"expandable-id--"+r,class:"ld-expandable--detail "+(t?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},e.detail)))}const ze=z(Ne||(Ne=(e=>e)`
  .ld-expandable {
    width: 100%;
    height: auto;
    border-bottom: lightgrey solid 1px;
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
    background-color: rgb(247, 247, 247);
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
`)),Oe=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"9 6 15 12 9 18"})),$e=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"}));let Ie;function We(){const[e,t]=_e([{type:"New",date:"19-22-2020, 22:01",text:"Some information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or something"},{type:"Rectification",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"},{type:"Petition",date:"19-22-2020, 22:01",text:"Some information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or something"},{type:"Announcement",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"},{type:"Promotion",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"}]);return me(()=>{}),h("div",{class:Fe},h("ul",null,e.map(({date:e,text:t,type:n})=>h("li",null,h("div",{class:"ld-ticker--bar"},h("div",{class:"ld-ticker--dot-container"},h("div",{class:"ld-ticker--dot "+n.toLowerCase()})),h("div",{class:"ld-ticker--line"})),h("div",{class:"ld-ticker--content"},h("div",{class:"ld-ticker--date"},e),h("div",{class:"ld-ticker--text"},t))))))}const Fe=z(Ie||(Ie=(e=>e)`
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
    width: 40px;
    display: flex;
    /* height: 100px; */
    flex-direction: column;
  }

  .ld-ticker--dot-container {
    display: flex;
    justify-content: center;
    width: 40px;
    height: 20px;
    /* background-color: lavenderblush; */
  }

  .ld-ticker--dot {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }

  .ld-ticker--line {
    width: 40px;
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
    font-size: 12px;
  }
`)),Be=h("svg",{role:"img","aria-labelledby":"srInfo",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-info-circle",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srInfo"},"info"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}),h("polyline",{points:"11 12 12 12 12 16 13 16"})),Ke=(h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"})),h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"}))),Ve=h("svg",{role:"img","aria-labelledby":"srTicker",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-refresh",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srTicker"},"ticker"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"}),h("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"})),Ge=h("svg",{role:"img","aria-labelledby":"srContribute",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle-plus",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srContribute"},"contribute"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("circle",{cx:"12",cy:"12",r:"9"}),h("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),h("line",{x1:"12",y1:"9",x2:"12",y2:"15"})),Ze=e=>{switch(e){case"info":return{title:"info",template:[h("h1",null,"Lockdown"),h("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n            in reprehenderit in voluptate velit esse cillum dolore eu."),h(Te,{toggle:"Sources",detail:h("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}),h(Te,{toggle:"Credits",detail:h("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\n                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\n                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure\n                reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas\n                nulla pariatur?")})]};case"settings":return{title:"settings",template:"settings"};case"contribute":return{title:"contribute",template:"contribute"};case"ticker":return{title:"ticker",template:h(We,null)};default:return{title:"",template:void 0}}};class Je extends _{constructor(e){super(e),this.state={activeItem:"info"}}componentDidMount(){O("(min-width: 960px)",e=>{this.setState({isMobile:!e}),e&&this.props.close()})}switchContent(e){if(this.state.isMobile&&this.props.opened&&e===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.props.changeRoute(Ze(e)),this.prevVal=e,this.setState({activeItem:e})}render(e,{activeItem:t}){return h("div",{class:"ld-menu"},h("div",{class:"ld-menu-nav"},h("nav",null,h("ul",null,h("li",null,h("button",{onClick:()=>this.switchContent("info")},Be,h("p",{class:"info"===t?"ld-menu--active":""},"INFO"))),h("li",null,h("button",{onClick:()=>this.switchContent("settings")},Ke,h("p",{class:"settings"===t?"ld-menu--active":""},"SETTINGS"))),h("li",null,h("button",{onClick:()=>this.switchContent("ticker")},Ve,h("p",{class:"ticker"===t?"ld-menu--active":""},"TICKER"))),h("li",null,h("button",{onClick:()=>this.switchContent("contribute")},Ge,h("p",{class:"contribute"===t?"ld-menu--active":""},"CONTRIBUTE")))))),h("div",{class:"ld-menu--content"},h("div",{class:"mb-only"},h("div",{class:"ld-menu--header"},h("h1",null,t))),Ze(t).template))}}let Qe,Xe,Ye=e=>e;const et={url:new URL("./src/pages/MainPage.js",document.baseURI).href},tt=new URL("../assets/icons/x.svg",et.url).href,nt=z(Qe||(Qe=Ye`
  & {
    position: fixed;
    z-index: 1100;
    top: 74px;
    left: 50%;
    margin: 0 auto;
    background-color: white;
    transform: translateX(-50%);
    border-radius: 12px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
  }

  @media (min-width: 900px) {
    & {
      display: none;
    }
  }
`)),at=z(Xe||(Xe=Ye`
  & {
    position: fixed;
    margin-left: 400px;
    margin-top: 60px;
    width: 100%;
    height: 100%;
    z-index: 1100;
  }

  .ld-dialog--container {
    overflow: auto;
    position: fixed;
    width: 90%;
    padding: 20px;
    max-width: 400px;
    left: calc(50% + 200px);
    top: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    background-color: white;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    border-radius: 5px;
  }

  .ld-dialog--header {
    display: flex;
    text-align: center;
  }

  .ld-dialog--header h1 {
    margin-top: 0;
    margin-left: 24px;
    flex: 1;
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
  }

  .ld-dialog--close-cont button:hover {
    background-color: rgb(247, 247, 247);
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
      height: 70%;
    }
  }
`));!function(e,n,a){var r,o,c;t.__&&t.__(e,n),o=(r=a===i)?null:a&&a.__k||n.__k,e=h(f,null,[e]),c=[],A(n,(r?n:a||n).__k=e,o||s,s,void 0!==n.ownerSVGElement,a&&!r?[a]:o?null:l.slice.call(n.childNodes),c,a||s,r),S(c,e)}([h(()=>h("header",{class:J},h("a",{href:"/lockdown/"},h("img",{src:Z,width:"180"})),h("div",{class:"totals"},h(K,null))),null),h(class extends _{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""}},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__change=this.__change.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onClick=this.__onClick.bind(this),this.__changeRoute=this.__changeRoute.bind(this)}async componentDidMount(){this.__onPathChanged(),O("(min-width: 960px)",e=>{this.setState({isMobile:!e})})}componentWillMount(){window.addEventListener("keydown",this.__onKeyDown,!0),Q.addEventListener("path-changed",this.__onPathChanged)}componentWillUnmount(){window.removeEventListener("keydown",this.__onKeyDown,!0),Q.removeEventListener("path-changed",this.__onPathChanged)}render(){return[h("div",{class:nt},h(K,null)),h(ne,null),h(Je,{opened:this.state.dialog.opened,changeRoute:this.__changeRoute,close:this.__closeDialog}),this.state.dialog.opened?h("div",{class:at,onClick:this.__onClick},h("div",{ref:e=>this.dialogRef=e,class:"ld-dialog--container"},h("div",{class:"ld-dialog--header"},h("h1",null,this.state.dialog.title),h("div",{class:"ld-dialog--close-cont"},h("button",{onClick:this.__closeDialog,class:"ld-dialog--close"},h("img",{src:tt,alt:"close"})))),h("div",{class:"ld-dialog--content"},this.state.dialog.template))):""]}__changeRoute({template:e,title:t}){const n=Q.url.searchParams.get("country");n?Q.setPath(`${t}?country=${n}`):Q.setPath(t),this.state.isMobile&&(Q.setSearchParam("country",null),this.__change({template:e,title:t}))}__onPathChanged(){const e=Q.url.searchParams.get("country");e&&this.setState({dialog:{opened:!0,template:h(oe,{country:e}),title:e}})}__onKeyDown(e){27===e.keyCode&&this.__closeDialog()}__change({template:e,title:t}){this.setState({dialog:{opened:!0,template:e,title:t}})}__onClick(e){!e.composedPath().includes(this.dialogRef)&&this.__closeDialog()}__closeCountryInfo(){Q.setSearchParam("country",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),this.__closeCountryInfo()}},null)],document.getElementById("app"));
