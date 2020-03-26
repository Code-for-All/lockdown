var t,a,n,r,o,i,s={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function u(e,t){for(var a in t)e[a]=t[a];return e}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,a){var n,r=arguments,o={};for(n in t)"key"!==n&&"ref"!==n&&(o[n]=t[n]);if(arguments.length>3)for(a=[a],n=3;n<arguments.length;n++)a.push(r[n]);if(null!=a&&(o.children=a),"function"==typeof e&&null!=e.defaultProps)for(n in e.defaultProps)void 0===o[n]&&(o[n]=e.defaultProps[n]);return h(e,o,t&&t.key,t&&t.ref)}function h(e,a,n,r){var o={type:e,props:a,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return t.vnode&&t.vnode(o),o}function f(e){return e.children}function _(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var a;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e)return a.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,a;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(a=e.__k[t])&&null!=a.__e){e.__e=e.__c.base=a.__e;break}return g(e)}}function v(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(b)}function b(){for(var e;n=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,a,n,r,o,i;e.__d&&(o=(r=(t=e).__v).__e,(i=t.__P)&&(a=[],n=q(i,r,u({},r),t.__n,void 0!==i.ownerSVGElement,null,a,null==o?m(r):o),A(a,r),n!=o&&g(r)))}))}function k(e,t,a,n,r,o,i,c,u){var p,h,f,_,g,v,b,k=a&&a.__k||l,x=k.length;if(c==s&&(c=null!=o?o[0]:x?m(a,0):null),p=0,t.__k=w(t.__k,(function(a){if(null!=a){if(a.__=t,a.__b=t.__b+1,null===(f=k[p])||f&&a.key==f.key&&a.type===f.type)k[p]=void 0;else for(h=0;h<x;h++){if((f=k[h])&&a.key==f.key&&a.type===f.type){k[h]=void 0;break}f=null}if(_=q(e,a,f=f||s,n,r,o,i,c,u),(h=a.ref)&&f.ref!=h&&(b||(b=[]),f.ref&&b.push(f.ref,null,a),b.push(h,a.__c||_,a)),null!=_){var l;if(null==v&&(v=_),void 0!==a.__d)l=a.__d,a.__d=void 0;else if(o==f||_!=c||null==_.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(_),l=null;else{for(g=c,h=0;(g=g.nextSibling)&&h<x;h+=2)if(g==_)break e;e.insertBefore(_,c),l=c}"option"==t.type&&(e.value="")}c=void 0!==l?l:_.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&f.__e==c&&c.parentNode!=e&&(c=m(f))}return p++,a})),t.__e=v,null!=o&&"function"!=typeof t.type)for(p=o.length;p--;)null!=o[p]&&d(o[p]);for(p=x;p--;)null!=k[p]&&P(k[p],k[p]);if(b)for(p=0;p<b.length;p++)L(b[p],b[++p],b[++p])}function w(e,t,a){if(null==a&&(a=[]),null==e||"boolean"==typeof e)t&&a.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)w(e[n],t,a);else a.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null):e):e);return a}function x(e,t,a){"-"===t[0]?e.setProperty(t,a):e[t]="number"==typeof a&&!1===c.test(t)?a+"px":null==a?"":a}function y(e,t,a,n,r){var o,i,s,l,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(o=e.style,"string"==typeof a)o.cssText=a;else{if("string"==typeof n&&(o.cssText="",n=null),n)for(i in n)a&&i in a||x(o,i,"");if(a)for(s in a)n&&a[s]===n[s]||x(o,s,a[s])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),a?(n||e.addEventListener(t,C,l),(e.l||(e.l={}))[t]=a):e.removeEventListener(t,C,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==a?"":a:"function"!=typeof a&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==a||!1===a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),a):null==a||!1===a&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,a))}function C(e){this.l[e.type](t.event?t.event(e):e)}function q(e,a,n,r,o,i,s,l,c){var d,p,h,m,g,v,b,w,x,y,C=a.type;if(void 0!==a.constructor)return null;(d=t.__b)&&d(a);try{e:if("function"==typeof C){if(w=a.props,x=(d=C.contextType)&&r[d.__c],y=d?x?x.props.value:d.__:r,n.__c?b=(p=a.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?a.__c=p=new C(w,y):(a.__c=p=new _(w,y),p.constructor=C,p.render=z),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=y,p.__n=r,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=u({},p.__s)),u(p.__s,C.getDerivedStateFromProps(w,p.__s))),m=p.props,g=p.state,h)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&w!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,y),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,y)){for(p.props=w,p.state=p.__s,p.__d=!1,p.__v=a,a.__e=n.__e,a.__k=n.__k,p.__h.length&&s.push(p),d=0;d<a.__k.length;d++)a.__k[d]&&(a.__k[d].__=a);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,y),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,g,v)}))}p.context=y,p.props=w,p.state=p.__s,(d=t.__r)&&d(a),p.__d=!1,p.__v=a,p.__P=e,d=p.render(p.props,p.state,p.context),a.__k=null!=d&&d.type==f&&null==d.key?d.props.children:Array.isArray(d)?d:[d],null!=p.getChildContext&&(r=u(u({},r),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(v=p.getSnapshotBeforeUpdate(m,g)),k(e,a,n,r,o,i,s,l,c),p.base=a.__e,p.__h.length&&s.push(p),b&&(p.__E=p.__=null),p.__e=!1}else a.__e=S(n.__e,a,n,r,o,i,s,c);(d=t.diffed)&&d(a)}catch(e){t.__e(e,a,n)}return a.__e}function A(e,a){t.__c&&t.__c(a,e),e.some((function(a){try{e=a.__h,a.__h=[],e.some((function(e){e.call(a)}))}catch(e){t.__e(e,a.__v)}}))}function S(e,t,a,n,r,o,i,c){var u,d,p,h,f,_=a.props,m=t.props;if(r="svg"===t.type||r,null!=o)for(u=0;u<o.length;u++)if(null!=(d=o[u])&&((null===t.type?3===d.nodeType:d.localName===t.type)||e==d)){e=d,o[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,m.is&&{is:m.is}),o=null}if(null===t.type)_!==m&&e.data!=m&&(e.data=m);else if(t!==a){if(null!=o&&(o=l.slice.call(e.childNodes)),p=(_=a.props||s).dangerouslySetInnerHTML,h=m.dangerouslySetInnerHTML,!c){if(_===s)for(_={},f=0;f<e.attributes.length;f++)_[e.attributes[f].name]=e.attributes[f].value;(h||p)&&(h&&p&&h.__html==p.__html||(e.innerHTML=h&&h.__html||""))}(function(e,t,a,n,r){var o;for(o in a)o in t||y(e,o,null,a[o],n);for(o in t)r&&"function"!=typeof t[o]||"value"===o||"checked"===o||a[o]===t[o]||y(e,o,t[o],a[o],n)})(e,m,_,r,c),t.__k=t.props.children,h||k(e,t,a,n,"foreignObject"!==t.type&&r,o,i,s,c),c||("value"in m&&void 0!==m.value&&m.value!==e.value&&(e.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==e.checked&&(e.checked=m.checked))}return e}function L(e,a,n){try{"function"==typeof e?e(a):e.current=a}catch(e){t.__e(e,n)}}function P(e,a,n){var r,o,i;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||L(r,null,a)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,a)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],a,n);null!=o&&d(o)}function z(e,t,a){return this.constructor(e,a)}t={__e:function(e,t){for(var a,n;t=t.__;)if((a=t.__c)&&!a.__)try{if(a.constructor&&null!=a.constructor.getDerivedStateFromError&&(n=!0,a.setState(a.constructor.getDerivedStateFromError(e))),null!=a.componentDidCatch&&(n=!0,a.componentDidCatch(e)),n)return v(a.__E=a)}catch(t){e=t}throw e}},_.prototype.setState=function(e,t){var a;a=this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(a,this.props)),e&&u(a,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},_.prototype.render=f,a=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=s;var E=function e(t,a,n,r){var o;a[0]=0;for(var i=1;i<a.length;i++){var s=a[i++],l=a[i]?(a[0]|=s?1:2,n[a[i++]]):a[++i];3===s?r[0]=l:4===s?r[1]=Object.assign(r[1]||{},l):5===s?(r[1]=r[1]||{})[a[++i]]=l:6===s?r[1][a[++i]]+=l+"":s?(o=t.apply(l,e(t,l,n,["",null])),r.push(o),l[0]?a[0]|=2:(a[i-2]=0,a[i]=o)):r.push(l)}return r},M=new Map;(function(e){var t=M.get(this);return t||(t=new Map,M.set(this,t)),(t=E(this,t.get(e)||(t.set(e,t=function(e){for(var t,a,n=1,r="",o="",i=[0],s=function(e){1===n&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===n&&(e||r)?(i.push(3,e,r),n=2):2===n&&"..."===r&&e?i.push(4,e,0):2===n&&r&&!e?i.push(5,0,!0,r):n>=5&&((r||!e&&5===n)&&(i.push(n,0,r,a),n=6),e&&(i.push(n,e,0,a),n=6)),r=""},l=0;l<e.length;l++){l&&(1===n&&s(),s(l));for(var c=0;c<e[l].length;c++)t=e[l][c],1===n?"<"===t?(s(),i=[i],n=3):r+=t:4===n?"--"===r&&">"===t?(n=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(s(),n=1):n&&("="===t?(n=5,a=r,r=""):"/"===t&&(n<5||">"===e[l][c+1])?(s(),3===n&&(i=i[0]),n=i,(i=i[0]).push(2,0,n),n=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),n=2):r+=t),3===n&&"!--"===r&&(n=4,i=i[0])}return s(),i}(e)),t),arguments,[])).length>1?t:t[0]}).bind(p);var U=t=>{var a=/^\0+/g,n=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,i=/([,: ])(transform)/g,s=/,+\s*(?![^(]*[)])/g,l=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,u=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,p=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,h=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,m=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,v=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,k=/\s{2,}/g,w=/([^\(])(:+) */g,x=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,q=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,P="-webkit-",z="-moz-",E="-ms-",M=59,U=125,D=123,N=40,T=41,j=10,H=13,I=32,O=45,$=42,R=44,W=58,F=47,B=1,V=1,K=0,G=1,Z=1,J=1,Q=0,X=0,Y=0,ee=[],te=[],ae=0,ne=null,re=0,oe=1,ie="",se="",le="";function ce(e,t,r,o,i){for(var s,l,u=0,d=0,p=0,h=0,g=0,v=0,b=0,k=0,x=0,C=0,q=0,A=0,S=0,L=0,z=0,E=0,Q=0,te=0,ne=0,de=r.length,ge=de-1,ve="",be="",ke="",we="",xe="",ye="";z<de;){if(b=r.charCodeAt(z),z===ge&&d+h+p+u!==0&&(0!==d&&(b=d===F?j:F),h=p=u=0,de++,ge++),d+h+p+u===0){if(z===ge&&(E>0&&(be=be.replace(n,"")),be.trim().length>0)){switch(b){case I:case 9:case M:case H:case j:break;default:be+=r.charAt(z)}b=M}if(1===Q)switch(b){case D:case U:case M:case 34:case 39:case N:case T:case R:Q=0;case 9:case H:case j:case I:break;default:for(Q=0,ne=z,g=b,z--,b=M;ne<de;)switch(r.charCodeAt(ne++)){case j:case H:case M:++z,b=g,ne=de;break;case W:E>0&&(++z,b=g);case D:ne=de}}switch(b){case D:for(g=(be=be.trim()).charCodeAt(0),q=1,ne=++z;z<de;){switch(b=r.charCodeAt(z)){case D:q++;break;case U:q--;break;case F:switch(v=r.charCodeAt(z+1)){case $:case F:z=me(v,z,ge,r)}break;case 91:b++;case N:b++;case 34:case 39:for(;z++<ge&&r.charCodeAt(z)!==b;);}if(0===q)break;z++}switch(ke=r.substring(ne,z),0===g&&(g=(be=be.replace(a,"").trim()).charCodeAt(0)),g){case 64:switch(E>0&&(be=be.replace(n,"")),v=be.charCodeAt(1)){case 100:case 109:case 115:case O:s=t;break;default:s=ee}if(ne=(ke=ce(t,s,ke,v,i+1)).length,Y>0&&0===ne&&(ne=be.length),ae>0&&(l=_e(3,ke,s=ue(ee,be,te),t,V,B,ne,v,i,o),be=s.join(""),void 0!==l&&0===(ne=(ke=l.trim()).length)&&(v=0,ke="")),ne>0)switch(v){case 115:be=be.replace(y,fe);case 100:case 109:case O:ke=be+"{"+ke+"}";break;case 107:ke=(be=be.replace(f,"$1 $2"+(oe>0?ie:"")))+"{"+ke+"}",ke=1===Z||2===Z&&he("@"+ke,3)?"@"+P+ke+"@"+ke:"@"+ke;break;default:ke=be+ke,112===o&&(we+=ke,ke="")}else ke="";break;default:ke=ce(t,ue(t,be,te),ke,o,i+1)}xe+=ke,A=0,Q=0,L=0,E=0,te=0,S=0,be="",ke="",b=r.charCodeAt(++z);break;case U:case M:if((ne=(be=(E>0?be.replace(n,""):be).trim()).length)>1)switch(0===L&&((g=be.charCodeAt(0))===O||g>96&&g<123)&&(ne=(be=be.replace(" ",":")).length),ae>0&&void 0!==(l=_e(1,be,t,e,V,B,we.length,o,i,o))&&0===(ne=(be=l.trim()).length)&&(be="\0\0"),g=be.charCodeAt(0),v=be.charCodeAt(1),g){case 0:break;case 64:if(105===v||99===v){ye+=be+r.charAt(z);break}default:if(be.charCodeAt(ne-1)===W)break;we+=pe(be,g,v,be.charCodeAt(2))}A=0,Q=0,L=0,E=0,te=0,be="",b=r.charCodeAt(++z)}}switch(b){case H:case j:if(d+h+p+u+X===0)switch(C){case T:case 39:case 34:case 64:case 126:case 62:case $:case 43:case F:case O:case W:case R:case M:case D:case U:break;default:L>0&&(Q=1)}d===F?d=0:G+A===0&&107!==o&&be.length>0&&(E=1,be+="\0"),ae*re>0&&_e(0,be,t,e,V,B,we.length,o,i,o),B=1,V++;break;case M:case U:if(d+h+p+u===0){B++;break}default:switch(B++,ve=r.charAt(z),b){case 9:case I:if(h+u+d===0)switch(k){case R:case W:case 9:case I:ve="";break;default:b!==I&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:h+d+u===0&&G>0&&(te=1,E=1,ve="\f"+ve);break;case 108:if(h+d+u+K===0&&L>0)switch(z-L){case 2:112===k&&r.charCodeAt(z-3)===W&&(K=k);case 8:111===x&&(K=x)}break;case W:h+d+u===0&&(L=z);break;case R:d+p+h+u===0&&(E=1,ve+="\r");break;case 34:case 39:0===d&&(h=h===b?0:0===h?b:h);break;case 91:h+d+p===0&&u++;break;case 93:h+d+p===0&&u--;break;case T:h+d+u===0&&p--;break;case N:if(h+d+u===0){if(0===A)switch(2*k+3*x){case 533:break;default:q=0,A=1}p++}break;case 64:d+p+h+u+L+S===0&&(S=1);break;case $:case F:if(h+u+p>0)break;switch(d){case 0:switch(2*b+3*r.charCodeAt(z+1)){case 235:d=F;break;case 220:ne=z,d=$}break;case $:b===F&&k===$&&ne+2!==z&&(33===r.charCodeAt(ne+2)&&(we+=r.substring(ne,z+1)),ve="",d=0)}}if(0===d){if(G+h+u+S===0&&107!==o&&b!==M)switch(b){case R:case 126:case 62:case 43:case T:case N:if(0===A){switch(k){case 9:case I:case j:case H:ve+="\0";break;default:ve="\0"+ve+(b===R?"":"\0")}E=1}else switch(b){case N:L+7===z&&108===k&&(L=0),A=++q;break;case T:0==(A=--q)&&(E=1,ve+="\0")}break;case 9:case I:switch(k){case 0:case D:case U:case M:case R:case 12:case 9:case I:case j:case H:break;default:0===A&&(E=1,ve+="\0")}}be+=ve,b!==I&&9!==b&&(C=b)}}x=k,k=b,z++}if(ne=we.length,Y>0&&0===ne&&0===xe.length&&0===t[0].length==0&&(109!==o||1===t.length&&(G>0?se:le)===t[0])&&(ne=t.join(",").length+2),ne>0){if(s=0===G&&107!==o?function(e){for(var t,a,r=0,o=e.length,i=Array(o);r<o;++r){for(var s=e[r].split(c),l="",u=0,d=0,p=0,h=0,f=s.length;u<f;++u)if(!(0===(d=(a=s[u]).length)&&f>1)){if(p=l.charCodeAt(l.length-1),h=a.charCodeAt(0),t="",0!==u)switch(p){case $:case 126:case 62:case 43:case I:case N:break;default:t=" "}switch(h){case 38:a=t+se;case 126:case 62:case 43:case I:case T:case N:break;case 91:a=t+a+se;break;case W:switch(2*a.charCodeAt(1)+3*a.charCodeAt(2)){case 530:if(J>0){a=t+a.substring(8,d-1);break}default:(u<1||s[u-1].length<1)&&(a=t+se+a)}break;case R:t="";default:a=d>1&&a.indexOf(":")>0?t+a.replace(w,"$1"+se+"$2"):t+a+se}l+=a}i[r]=l.replace(n,"").trim()}return i}(t):t,ae>0&&void 0!==(l=_e(2,we,s,e,V,B,ne,o,i,o))&&0===(we=l).length)return ye+we+xe;if(we=s.join(",")+"{"+we+"}",Z*K!=0){switch(2!==Z||he(we,2)||(K=0),K){case 111:we=we.replace(m,":-moz-$1")+we;break;case 112:we=we.replace(_,"::"+P+"input-$1")+we.replace(_,"::-moz-$1")+we.replace(_,":-ms-input-$1")+we}K=0}}return ye+we+xe}function ue(e,t,a){var n=t.trim().split(u),r=n,o=n.length,i=e.length;switch(i){case 0:case 1:for(var s=0,l=0===i?"":e[0]+" ";s<o;++s)r[s]=de(l,r[s],a,i).trim();break;default:s=0;var c=0;for(r=[];s<o;++s)for(var d=0;d<i;++d)r[c++]=de(e[d]+" ",n[s],a,i).trim()}return r}function de(e,t,a,n){var r=t,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(G+n){case 0:case 1:if(0===e.trim().length)break;default:return r.replace(d,"$1"+e.trim())}break;case W:switch(r.charCodeAt(1)){case 103:if(J>0&&G>0)return r.replace(p,"$1").replace(d,"$1"+le);break;default:return e.trim()+r.replace(d,"$1"+e.trim())}default:if(a*G>0&&r.indexOf("\f")>0)return r.replace(d,(e.charCodeAt(0)===W?"":"$1")+e.trim())}return e+r}function pe(e,t,a,n){var c,u=0,d=e+";",p=2*t+3*a+4*n;if(944===p)return function(e){var t=e.length,a=e.indexOf(":",9)+1,n=e.substring(0,a).trim(),r=e.substring(a,t-1).trim();switch(e.charCodeAt(9)*oe){case 0:break;case O:if(110!==e.charCodeAt(10))break;default:var o=r.split((r="",s)),i=0;for(a=0,t=o.length;i<t;a=0,++i){for(var c=o[i],u=c.split(l);c=u[a];){var d=c.charCodeAt(0);if(1===oe&&(d>64&&d<90||d>96&&d<123||95===d||d===O&&c.charCodeAt(1)!==O))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=ie}}u[a++]=c}r+=(0===i?"":",")+u.join(" ")}}return r=n+r+";",1===Z||2===Z&&he(r,1)?P+r+r:r}(d);if(0===Z||2===Z&&!he(d,1))return d;switch(p){case 1015:return 97===d.charCodeAt(10)?P+d+d:d;case 951:return 116===d.charCodeAt(3)?P+d+d:d;case 963:return 110===d.charCodeAt(5)?P+d+d:d;case 1009:if(100!==d.charCodeAt(4))break;case 969:case 942:return P+d+d;case 978:return P+d+z+d+d;case 1019:case 983:return P+d+z+d+E+d+d;case 883:return d.charCodeAt(8)===O?P+d+d:d.indexOf("image-set(",11)>0?d.replace(L,"$1"+P+"$2")+d:d;case 932:if(d.charCodeAt(4)===O)switch(d.charCodeAt(5)){case 103:return P+"box-"+d.replace("-grow","")+P+d+E+d.replace("grow","positive")+d;case 115:return P+d+E+d.replace("shrink","negative")+d;case 98:return P+d+E+d.replace("basis","preferred-size")+d}return P+d+E+d+d;case 964:return P+d+E+"flex-"+d+d;case 1023:if(99!==d.charCodeAt(8))break;return c=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),P+"box-pack"+c+P+d+E+"flex-pack"+c+d;case 1005:return o.test(d)?d.replace(r,":"+P)+d.replace(r,":"+z)+d:d;case 1e3:switch(u=(c=d.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(u)){case 226:c=d.replace(x,"tb");break;case 232:c=d.replace(x,"tb-rl");break;case 220:c=d.replace(x,"lr");break;default:return d}return P+d+E+c+d;case 1017:if(-1===d.indexOf("sticky",9))return d;case 975:switch(u=(d=e).length-10,p=(c=(33===d.charCodeAt(u)?d.substring(0,u):d).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:d=d.replace(c,P+c)+";"+d;break;case 207:case 102:d=d.replace(c,P+(p>102?"inline-":"")+"box")+";"+d.replace(c,P+c)+";"+d.replace(c,E+c+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===O)switch(d.charCodeAt(6)){case 105:return c=d.replace("-items",""),P+d+P+"box-"+c+E+"flex-"+c+d;case 115:return P+d+E+"flex-item-"+d.replace(q,"")+d;default:return P+d+E+"flex-line-pack"+d.replace("align-content","").replace(q,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==O||122===d.charCodeAt(4))break;case 931:case 953:if(!0===S.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?pe(e.replace("stretch","fill-available"),t,a,n).replace(":fill-available",":stretch"):d.replace(c,P+c)+d.replace(c,z+c.replace("fill-",""))+d;break;case 962:if(d=P+d+(102===d.charCodeAt(5)?E+d:"")+d,a+n===211&&105===d.charCodeAt(13)&&d.indexOf("transform",10)>0)return d.substring(0,d.indexOf(";",27)+1).replace(i,"$1"+P+"$2")+d}return d}function he(e,t){var a=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?a:10),r=e.substring(a+1,e.length-1);return ne(2!==t?n:n.replace(A,"$1"),r,t)}function fe(e,t){var a=pe(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return a!==t+";"?a.replace(C," or ($1)").substring(4):"("+t+")"}function _e(e,t,a,n,r,o,i,s,l,c){for(var u,d=0,p=t;d<ae;++d)switch(u=te[d].call(ve,e,p,a,n,r,o,i,s,l,c)){case void 0:case!1:case!0:case null:break;default:p=u}if(p!==t)return p}function me(e,t,a,n){for(var r=t+1;r<a;++r)switch(n.charCodeAt(r)){case F:if(e===$&&n.charCodeAt(r-1)===$&&t+2!==r)return r+1;break;case j:if(e===F)return r+1}return r}function ge(e){for(var t in e){var a=e[t];switch(t){case"keyframe":oe=0|a;break;case"global":J=0|a;break;case"cascade":G=0|a;break;case"compress":Q=0|a;break;case"semicolon":X=0|a;break;case"preserve":Y=0|a;break;case"prefix":ne=null,a?"function"!=typeof a?Z=1:(Z=2,ne=a):Z=0}}return ge}function ve(t,a){if(void 0!==this&&this.constructor===ve)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),oe>0&&(ie=r.replace(h,91===o?"":"-")),o=1,1===G?le=r:se=r;var i,s=[le];ae>0&&void 0!==(i=_e(-1,a,s,s,V,B,0,0,0,0))&&"string"==typeof i&&(a=i);var l=ce(ee,s,a,0,0);return ae>0&&void 0!==(i=_e(-2,l,s,s,V,B,l.length,0,0,0))&&"string"!=typeof(l=i)&&(o=0),ie="",le="",se="",K=0,V=1,B=1,Q*o==0?l:l.replace(n,"").replace(g,"").replace(v,"$1").replace(b,"$1").replace(k," ")}return ve.use=function e(t){switch(t){case void 0:case null:ae=te.length=0;break;default:if("function"==typeof t)te[ae++]=t;else if("object"==typeof t)for(var a=0,n=t.length;a<n;++a)e(t[a]);else re=0|!!t}return e},ve.set=ge,void 0!==t&&ge(t),ve};const D={},N=document.createElement("style");document.head.appendChild(N);const T=e=>`.${e}{display:none}`,j=e=>/^(\/|https?:\/\/)/.test(e.trim()),H=e=>t=>a=>{N.innerHTML+=(D[e]={hash:t,rules:U()(`.${t}`,a)}).rules,j(e)&&(e=>{N.innerHTML=N.innerHTML.replace(T(e),"")})(t)};var I=(e,...t)=>{const a=e[0].startsWith("/")?e[0]:e.reduce((e,a,n)=>e+(a+(null==t[n]?"":t[n])),"");if(D[a])return D[a].hash;const n="csz-"+Math.random().toString(36).replace("0.",""),r=H(a)(n);return j(a)?((e=>{N.innerHTML=T(e)+N.innerHTML})(n),fetch(a).then(e=>e.text()).then(r)):r(a),n};const O=(e,t)=>{let a=window.matchMedia(e);a.addListener(e=>t(e.matches)),t(a.matches)};class ${constructor(){const e=document.createDocumentFragment();this.addEventListener=e.addEventListener.bind(e),this.dispatchEvent=e.dispatchEvent.bind(e),this.removeEventListener=e.removeEventListener.bind(e)}}const R={url:new URL("./src/services/totalsService.js",document.baseURI).href};const W=new class extends ${async getTotals(e){return!e&&this.__totals||(this.__totals=await(await fetch(new URL("../../data/totals.json",R.url))).json(),this.dispatchEvent(new Event("change"))),this.__totals}};let F;const B=I(F||(F=(e=>e)`
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
`));class V extends _{constructor(){super(),this.state={items:[]}}async componentWillMount(){O("(min-width: 900px)",e=>{this.setState({desktop:e})});const e=await W.getTotals(),t=[{description:"Countries in lockdown",value:"0"},{description:"People affected",value:"0"},{description:"Confirmed cases",value:e.confirmed},{description:"Confirmed deaths",value:e.deaths}];this.setState({items:t})}render(e,{items:t,desktop:a}){return p("div",{class:B},p("ul",null,(a?t:t.slice(0,2)).map(e=>p("li",null,p("div",{class:"key"},e.description),p("div",{class:"value"},e.value)))))}}const K=p("svg",{role:"img","aria-labelledby":"srInfo",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-info-circle",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srInfo"},"info"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("circle",{cx:"12",cy:"12",r:"9"}),p("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}),p("polyline",{points:"11 12 12 12 12 16 13 16"})),G=(p("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srSettings"},"settings"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),p("circle",{cx:"12",cy:"12",r:"3"})),p("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srSettings"},"settings"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),p("circle",{cx:"12",cy:"12",r:"3"}))),Z=p("svg",{role:"img","aria-labelledby":"srTicker",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-refresh",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srTicker"},"ticker"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("path",{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"}),p("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"})),J=p("svg",{role:"img","aria-labelledby":"srContribute",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle-plus",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("title",{id:"srContribute"},"contribute"),p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("circle",{cx:"12",cy:"12",r:"9"}),p("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),p("line",{x1:"12",y1:"9",x2:"12",y2:"15"})),Q=p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),p("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),X=p("svg",{role:"img","aria-labelledby":"srLockdown",style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",width:"180",height:"26",xmlns:"http://www.w3.org/2000/svg"},p("g",null,p("title",{id:"srLockdown"},"lockdown")),p("g",null,p("g",{stroke:"null",id:"svg_27"},p("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_24"},p("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"background"),p("g",{stroke:"null",id:"svg_22",display:"none"},p("rect",{stroke:"null",id:"svg_25",width:"580",height:"400",x:"14.798918",y:"87.143019","stroke-width":"0"}))),p("g",{stroke:"null",transform:"matrix(0.5686664770035428,0,0,0.5686664770035428,-7.765926295118788,-49.59477232097561) ",id:"svg_26"},p("title",{stroke:"null",transform:"translate(0,0.4451851546764374) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(-0.4451851546764374,0) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(0,0.4451851546764374) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-5.6168999671936035,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(-56.169002532958984,0) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-56.169002532958984) translate(0,-5.6168999671936035) translate(1472.2471923828125,0) translate(0,1100.6856689453125) "},"Layer 1"),p("g",{stroke:"null",id:"svg_19"},p("g",{stroke:"null",id:"svg_20","stroke-linecap":"round","fill-rule":"evenodd","font-size":"9pt","stroke-width":"0.25mm",transform:"matrix(0.4046201041691139,0,0,0.4046201041691139,-2294.6313297135057,-1675.2340553707181) "},p("path",{stroke:"null",d:"m6385.819401,4377.293685l15.5,0l-22.9,70l-17.4,0l-15.4,-47.4l-15.9,47.4l-17.3,0l-23,-70l16.8,0l15.8,49.2l16.5,-49.2l15,0l16,49.6l16.3,-49.6zm74.2,0l16,0l0,70l-13.3,0l-34.9,-42.5l0,42.5l-16,0l0,-70l13.4,0l34.8,42.5l0,-42.5zm-357.6,70l-22.4,-27.5l-9.4,9.8l0,17.7l-16.1,0l0,-70l16.1,0l0,32.7l31,-32.7l18,0l-29,31.2l30.7,38.8l-18.9,0zm-58.8,-58.8l-10.4,9.6a24.073,24.073 0 0 0 -7.386,-5.877a22.434,22.434 0 0 0 -10.214,-2.323q-6.5,0 -11.6,2.85q-5.1,2.85 -7.95,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.95,7.95a22.496,22.496 0 0 0 8.823,2.714a27.717,27.717 0 0 0 2.777,0.136a22.012,22.012 0 0 0 16.47,-7.054a28.649,28.649 0 0 0 1.13,-1.246l10.4,9.6q-5,6.1 -12.4,9.3q-7.4,3.2 -16.5,3.2q-10.7,0 -19.35,-4.65q-8.65,-4.65 -13.6,-12.9a34.983,34.983 0 0 1 -4.891,-16.401a42.286,42.286 0 0 1 -0.059,-2.249q0,-10.4 4.95,-18.65q4.95,-8.25 13.6,-12.9a39.233,39.233 0 0 1 15.476,-4.487a47.549,47.549 0 0 1 3.974,-0.163q9.1,0 16.45,3.2q7.35,3.2 12.35,9.2zm84.9,58.8l0,-70l31.8,0q11.4,0 20.15,4.35a33.27,33.27 0 0 1 10.748,8.304a32.104,32.104 0 0 1 2.852,3.946q4.85,7.9 4.85,18.4q0,10.5 -4.85,18.4q-4.85,7.9 -13.6,12.25a41.232,41.232 0 0 1 -12.626,3.836a53.292,53.292 0 0 1 -7.524,0.514l-31.8,0zm-292.1,0l0,-70l16.2,0l0,56.8l35.1,0l0,13.2l-51.3,0zm82.114,-0.457a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm314.3,0a43.559,43.559 0 0 0 12.186,1.657a47.88,47.88 0 0 0 4.01,-0.165a39.352,39.352 0 0 0 15.59,-4.535q8.7,-4.7 13.7,-12.95q5,-8.25 5,-18.55a41.666,41.666 0 0 0 -0.02,-1.28a34.795,34.795 0 0 0 -4.98,-17.27q-5,-8.25 -13.7,-12.95a37.807,37.807 0 0 0 -7.469,-3.054a43.391,43.391 0 0 0 -12.131,-1.646a48.147,48.147 0 0 0 -3.683,0.139a39.772,39.772 0 0 0 -15.967,4.561q-8.75,4.7 -13.7,12.95a34.021,34.021 0 0 0 -2.818,5.914a36.775,36.775 0 0 0 -2.132,12.636a41.898,41.898 0 0 0 0.03,1.597a34.986,34.986 0 0 0 4.92,16.953q4.95,8.25 13.7,12.95a38.226,38.226 0 0 0 7.464,3.043zm-88.114,-12.843l14.8,0q10.5,0 16.75,-5.85q6.25,-5.85 6.25,-15.85a25.797,25.797 0 0 0 -0.879,-6.915a18.923,18.923 0 0 0 -5.371,-8.935a21.055,21.055 0 0 0 -10.033,-5.159a30.905,30.905 0 0 0 -6.717,-0.691l-14.8,0l0,43.4zm-214,0.7a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027zm314.3,0a23.205,23.205 0 0 0 7.536,-1.198a21.185,21.185 0 0 0 3.664,-1.652q5,-2.85 7.85,-7.95a22.496,22.496 0 0 0 2.714,-8.823a27.717,27.717 0 0 0 0.136,-2.777q0,-6.5 -2.85,-11.6q-2.85,-5.1 -7.85,-7.95a21.915,21.915 0 0 0 -10.001,-2.823a26.241,26.241 0 0 0 -1.199,-0.027a23.205,23.205 0 0 0 -7.536,1.198a21.185,21.185 0 0 0 -3.664,1.652q-5,2.85 -7.85,7.95a22.496,22.496 0 0 0 -2.714,8.823a27.717,27.717 0 0 0 -0.136,2.777q0,6.5 2.85,11.6q2.85,5.1 7.85,7.95a21.915,21.915 0 0 0 10.001,2.823a26.241,26.241 0 0 0 1.199,0.027z",id:"svg_21"}))),p("g",{stroke:"null",id:"svg_13"},p("g",{stroke:"null",id:"svg_17",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},p("path",{stroke:"null",d:"m-77.204981,496.507538c-68.4,0 -124.1,55.7 -124.1,124.1s55.7,124.1 124.1,124.1s124.1,-55.7 124.1,-124.1s-55.6,-124.1 -124.1,-124.1zm108.2,116.3l-56.4,0c-0.8,-27.3 -5.4,-52.8 -13.3,-72.5c-4.3,-10.8 -9.5,-19.3 -15.2,-25.5c46.1,10 81.4,49.6 84.9,98zm-108.2,109.5c-8.1,0 -17,-10.2 -23.8,-27.2c-7.2,-17.9 -11.5,-41.4 -12.2,-66.7l72.1,0c-0.7,25.3 -5,48.7 -12.2,66.7c-6.9,17.1 -15.8,27.2 -23.9,27.2zm-36,-109.5c0.7,-25.3 5,-48.7 12.2,-66.7c6.8,-17 15.7,-27.2 23.8,-27.2s17,10.2 23.8,27.2c7.2,17.9 11.5,41.4 12.2,66.7l-72,0zm12.9,-98.1c-5.7,6.2 -10.9,14.8 -15.2,25.5c-7.9,19.7 -12.6,45.2 -13.3,72.5l-56.5,0c3.5,-48.3 38.8,-87.9 85,-98zm-85,113.8l56.4,0c0.8,27.3 5.4,52.8 13.3,72.5c4.3,10.8 9.5,19.3 15.2,25.5c-46.1,-10.1 -81.4,-49.7 -84.9,-98zm131.3,98c5.7,-6.2 10.9,-14.8 15.2,-25.5c7.9,-19.7 12.6,-45.2 13.3,-72.5l56.4,0c-3.4,48.3 -38.7,87.9 -84.9,98z",id:"svg_18"})),p("g",{stroke:"null",id:"svg_14",transform:"matrix(0.12159253629363294,0,0,0.12159253629363294,41.68647124589643,39.52563877112516) "},p("g",{stroke:"null",id:"svg_15"},p("path",{stroke:"null",d:"m-1.004981,525.807538c-1.3,20.1 -1.6,2.5 -1.6,1.6l0.6,-59.9c0,-30.8 -25,-55.7 -55.7,-55.7l-39.7,0c-30.8,0 -55.7,25 -55.7,55.7l0.1,62.3c0,0.4 1.2,-2.2 0.9,-2.2l0,0c-0.4,0 -0.7,0.4 -0.6,0.8c1.3,6.7 -0.4,-2.3 -0.4,3.2c0,0 0,-1.9 0,-3c0,-0.5 0.4,-0.9 -0.7,-1.9l21.8,0c0.3,-1.6 2.4,-0.9 1.9,-1.6c-6.2,-8.9 2.3,-8.2 3.3,-13.8c0.1,-0.4 -2.1,0 -2.4,0l-3.3,1.6c0.2,0 0,-0.8 -0.1,-7l0,-38.4c0,-19.6 15.9,-35.4 35.4,-35.4l39.6,0c19.6,0 35.4,15.9 35.4,35.4l0,38.2c0.2,4.6 -0.5,5.4 -1.4,5.4l0,-1.6c-1.4,3.1 -1.8,-1.5 -1.7,-0.6c0.4,5.6 0.1,15 1.7,9.5c1.5,-5.1 1.6,4.1 2.4,4.1l18.8,5.1c0.9,0 1.6,-0.7 1.5,-1.6c-0.2,-5.8 -0.7,6.4 0,0.6",id:"svg_16"}))))))));let Y;const ee=I(Y||(Y=(e=>e)`
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
`));const te=new class extends ${constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(e){window.history.pushState(null,"",e),this.__onPathChanged()}setSearchParam(e,t){const a=new URLSearchParams(location.search);t?a.set(e,t):a.delete(e);const n=a.toString();this.setPath(`${location.pathname}${n?`?${n}`:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed"))}__onClick(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().find(e=>"A"===e.tagName);if(!t||!t.href)return;if(t.hasAttribute("download")||t.href.includes("mailto:"))return;const a=t.getAttribute("target");if(a&&""!==a&&"_self"!==a)return;const n=new URL(t.href);n.startsWith(document.baseURI)&&(e.preventDefault(),this.setPath(n.pathname))}},ae={url:new URL("./src/services/locksdownsService.js",document.baseURI).href};const ne=new class extends ${async getLockdowns(e){return!e&&this.__lockdowns||(this.__lockdowns=await(await fetch(new URL("../../data/datafile.json",ae.url))).json(),this.dispatchEvent(new Event("change"))),this.__lockdowns}},re={url:new URL("./src/components/WorldMap.js",document.baseURI).href},oe=new Date;class ie extends _{async componentDidMount(){const[e,t,a]=await Promise.all([ne.getLockdowns(),fetch(new URL("../../data/worldmap.json",re.url)).then(e=>e.json()),import("./785e0d74.js")]),{Map:n,Browser:r,geoJSON:o,layerGroup:i,tileLayer:s}=a,l=new n(this.ref,{center:[0,0],zoom:3,minZoom:2,maxZoom:18,zoomControl:!1});let c,u=i();function d(e){const t=e.target;te.setSearchParam("country",t.feature.properties.NAME)}function p(e){const t=e.target;c.resetStyle(t)}function h(e){const t=e.target;t.setStyle({fillOpacity:.5,name:"test"}),r.ie||r.opera||r.edge||t.bringToFront()}s("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g",{tileSize:512,zoomOffset:-1,attribution:'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(l);for(const a of t.features)e[a.properties.NAME]&&(a.properties.data=e[a.properties.NAME]);if(c=o(t,{style:function(e){let t="orange";if(e.properties.data&&e.properties.data.lockdowns){0===e.properties.data.lockdowns.length&&(t="green");for(const a of e.properties.data.lockdowns)t=!(new Date(a.start)>=oe&&a.end)||new Date(a.end)<oe?"red":"green"}const a={weight:1,opacity:.1,color:"#555",fillOpacity:0};return t&&(a.fillColor=t,a.fillOpacity=.5),a},onEachFeature:function(e,t){t.on({mouseover:h,mouseout:p,click:d})}}).addTo(l),u.addTo(l),this.setState({map:l}),navigator.permissions){const e=await navigator.permissions.query({name:"geolocation"});"granted"===e.state&&navigator.geolocation.getCurrentPosition(e=>{const{latitude:t,longitude:a}=e.coords;this.state.map.setView([t,a])}),e.addEventListener("change",e=>{"granted"===e.target.state?navigator.geolocation.getCurrentPosition(e=>{localStorage.setItem("geolocation","true");const{latitude:t,longitude:a}=e.coords;this.state.map.setView([t,a])}):localStorage.removeItem("geolocation")})}}componentWillUnmount(){this.state.map.remove()}render(){return p("div",{style:"width: 100%",ref:e=>{this.ref=e}})}}let se;const le=I(se||(se=(e=>e)`
  & {
    display: flex;
    justify-content: center;
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

  .data-value {
    color: grey;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`));class ce extends _{async componentWillMount(){this.setState({lockdowns:await ne.getLockdowns()})}render(e,{lockdowns:t}){if(t)return p("div",{class:le},p("div",{class:"dialog"},p("div",{class:"data-entry"},"Population: ",p("span",{class:"data-value"},"Unknown")),p("div",{class:"data-entry"},"Confirmed cases: ",p("span",{class:"data-value"},"Unknown")),p("div",{class:"data-entry"},"Confirmed deaths: ",p("span",{class:"data-value"},"Unknown")),p("div",{class:"data-entry"},"Lockdown start: ",p("span",{class:"data-value"},"Unknown")),p("div",{class:"data-entry"},"Lockdown end: ",p("span",{class:"data-value"},"Unknown"))))}}var ue,de,pe,he=[],fe=t.__r,_e=t.diffed,me=t.__c,ge=t.unmount;function ve(e){t.__h&&t.__h(de);var a=de.__H||(de.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function be(e){return function(e,t,a){var n=ve(ue++);return n.__c||(n.__c=de,n.__=[a?a(t):Ae(void 0,t),function(t){var a=e(n.__[0],t);n.__[0]!==a&&(n.__[0]=a,n.__c.setState({}))}]),n.__}(Ae,e)}function ke(e,t){var a=ve(ue++);qe(a.__H,t)&&(a.__=e,a.__H=t,de.__H.__h.push(a))}function we(e){return function(e,t){var a=ve(ue++);return qe(a.__H,t)?(a.__H=t,a.__h=e,a.__=e()):a.__}((function(){return{current:e}}),[])}function xe(){he.some((function(e){if(e.__P)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(Ce),e.__H.__h=[]}catch(a){return t.__e(a,e.__v),!0}})),he=[]}function ye(e){e.t&&e.t()}function Ce(e){var t=e.__();"function"==typeof t&&(e.t=t)}function qe(e,t){return!e||t.some((function(t,a){return t!==e[a]}))}function Ae(e,t){return"function"==typeof t?t(e):t}function Se(e,t){for(var a in e)if("__source"!==a&&!(a in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}t.__r=function(e){fe&&fe(e),ue=0,(de=e.__c).__H&&(de.__H.__h.forEach(ye),de.__H.__h.forEach(Ce),de.__H.__h=[])},t.diffed=function(e){_e&&_e(e);var a=e.__c;if(a){var n=a.__H;n&&n.__h.length&&(1!==he.push(a)&&pe===t.requestAnimationFrame||((pe=t.requestAnimationFrame)||function(e){var t,a=function(){clearTimeout(n),cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(a,100);"undefined"!=typeof window&&(t=requestAnimationFrame(a))})(xe))}},t.__c=function(e,a){a.some((function(e){try{e.__h.forEach(ye),e.__h=e.__h.filter((function(e){return!e.__||Ce(e)}))}catch(n){a.some((function(e){e.__h&&(e.__h=[])})),a=[],t.__e(n,e.__v)}})),me&&me(e,a)},t.unmount=function(e){ge&&ge(e);var a=e.__c;if(a){var n=a.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){t.__e(e,a.__v)}}};!function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).isPureReactComponent=!0,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.shouldComponentUpdate=function(e,t){return Se(this.props,e)||Se(this.state,t)}}(_);var Le=t.__b;t.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),Le&&Le(e)};var Pe=t.__e;function ze(e){return e&&((e=function(e,t){for(var a in t)e[a]=t[a];return e}({},e)).__c=null,e.__k=e.__k&&e.__k.map(ze)),e}function Ee(e){this.__u=0,this.o=null,this.__b=null}function Me(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function Ue(){this.i=null,this.l=null}t.__e=function(e,t,a){if(e.then)for(var n,r=t;r=r.__;)if((n=r.__c)&&n.__c)return n.__c(e,t.__c);Pe(e,t,a)},(Ee.prototype=new _).__c=function(e,t){var a=this;null==a.o&&(a.o=[]),a.o.push(t);var n=Me(a.__v),r=!1,o=function(){r||(r=!0,n?n(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var i=function(){var e;if(!--a.__u)for(a.__v.__k[0]=a.state.u,a.setState({u:a.__b=null});e=a.o.pop();)e.forceUpdate()};a.__u++||a.setState({u:a.__b=a.__v.__k[0]}),e.then(o,o)},Ee.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=ze(this.__b),this.__b=null),[p(_,null,t.u?null:e.children),t.u&&e.fallback]};var De=function(e,t,a){if(++a[1]===a[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(a=e.i;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;e.i=a=a[2]}};(Ue.prototype=new _).u=function(e){var t=this,a=Me(t.__v),n=t.l.get(e);return n[0]++,function(r){var o=function(){t.props.revealOrder?(n.push(r),De(t,e,n)):r()};a?a(o):o()}},Ue.prototype.render=function(e){this.i=null,this.l=new Map;var t=w(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var a=t.length;a--;)this.l.set(t[a],this.i=[1,0,this.i]);return e.children},Ue.prototype.componentDidUpdate=Ue.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,a){De(e,a,t)}))};!function(){function e(){}var t=e.prototype;t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children}}();var Ne=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;_.prototype.isReactComponent={};var Te="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,je=t.event;function He(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}t.event=function(e){je&&(e=je(e)),e.persist=function(){};var t=!1,a=!1,n=e.stopPropagation;e.stopPropagation=function(){n.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),a=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return a},e.nativeEvent=e};var Ie={configurable:!0,get:function(){return this.class}},Oe=t.vnode;t.vnode=function(e){e.$$typeof=Te;var t=e.type,a=e.props;if(a.class!=a.className&&(Ie.enumerable="className"in a,null!=a.className&&(a.class=a.className),Object.defineProperty(a,"className",Ie)),"function"!=typeof t){var n,r,o;for(o in a.defaultValue&&void 0!==a.value&&(a.value||0===a.value||(a.value=a.defaultValue),delete a.defaultValue),Array.isArray(a.value)&&a.multiple&&"select"===t&&(w(a.children).forEach((function(e){-1!=a.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete a.value),a)if(n=Ne.test(o))break;if(n)for(o in r=e.props={},a)r[Ne.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=a[o]}!function(t){var a=e.type,n=e.props;if(n&&"string"==typeof a){var r={};for(var o in n)/^on(Ani|Tra|Tou)/.test(o)&&(n[o.toLowerCase()]=n[o],delete n[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onbeforeinput&&(n.onbeforeinput=n[r.onbeforeinput],delete n[r.onbeforeinput]),r.onchange&&("textarea"===a||"input"===a.toLowerCase()&&!/^fil|che|ra/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=n[r.onchange],delete n[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(He(t.prototype,"componentWillMount"),He(t.prototype,"componentWillReceiveProps"),He(t.prototype,"componentWillUpdate"),t.m=!0),Oe&&Oe(e)};let $e;function Re(e){const[t,a]=be(!1),n=we(null);ke(()=>{t&&n.current.focus({preventScroll:!0})},[t]);const r=(""+Math.random()).substring(2,9);return p("div",{class:We},p("div",{class:"ld-expandable"},p("button",{onClick:()=>a(!t),id:"button1",class:"ld-expandable--toggle","aria-controls":"expandable-id--"+r,"aria-expanded":t},p("div",{class:"ld-expandable--icon"},t?Be:Fe),p("div",{class:"ld-expandable--toggle-content"},p("h2",null,e.toggle))),p("div",{ref:n,id:"expandable-id--"+r,class:"ld-expandable--detail "+(t?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},e.detail)))}const We=I($e||($e=(e=>e)`
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
`)),Fe=p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("polyline",{points:"9 6 15 12 9 18"})),Be=p("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},p("path",{stroke:"none",d:"M0 0h24v24H0z"}),p("polyline",{points:"6 9 12 15 18 9"}));let Ve;function Ke(){const[e,t]=be([{type:"New",date:"19-22-2020, 22:01",text:"Some information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or something"},{type:"Rectification",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"},{type:"Petition",date:"19-22-2020, 22:01",text:"Some information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or something"},{type:"Announcement",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"},{type:"Promotion",date:"19-22-2020, 19:51",text:"Some information message here with a link to a source or something"}]);return ke(()=>{}),p("div",{class:Ge},p("ul",null,e.map(({date:e,text:t,type:a})=>p("li",null,p("div",{class:"ld-ticker--bar"},p("div",{class:"ld-ticker--dot-container"},p("div",{class:"ld-ticker--dot "+a.toLowerCase()})),p("div",{class:"ld-ticker--line"})),p("div",{class:"ld-ticker--content"},p("div",{class:"ld-ticker--date"},e),p("div",{class:"ld-ticker--text"},t))))))}const Ge=I(Ve||(Ve=(e=>e)`
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
`));let Ze;const Je=I(Ze||(Ze=(e=>e)`
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
`));function Qe(){const[e,t]=be(!1);return ke(async()=>{const e=await navigator.permissions.query({name:"geolocation"});"true"!==localStorage.getItem("geolocation")?navigator.permissions&&"granted"!==e.state&&t(!0):t(!1)},[]),p("div",{class:Je},p("button",{onClick:function(){document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("darkmode","false")):(document.body.classList.add("dark"),localStorage.setItem("darkmode","true"))},class:"ld-button"},"Toggle darkmode"),e?p("button",{onClick:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(()=>{t(!1)})},class:"ld-button"},"Allow geolocation"):"","")}const Xe=e=>{switch(e){case"info":return{title:"info",template:[p("h1",null,"Lockdown"),p("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n            in reprehenderit in voluptate velit esse cillum dolore eu."),p(Re,{toggle:"About",detail:p("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}),p(Re,{toggle:"Sources",detail:p("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}),p(Re,{toggle:"Credits",detail:p("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\n                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\n                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\n                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure\n                reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas\n                nulla pariatur?")}),p(Re,{toggle:"Data & Privacy",detail:p("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\n                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\n                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur")})]};case"settings":return{title:"settings",template:p(Qe,null)};case"contribute":return{title:"contribute",template:"contribute"};case"ticker":return{title:"ticker",template:p(Ke,null)};default:return{title:"",template:void 0}}};class Ye extends _{constructor(e){super(e),this.state={activeItem:"info"}}componentDidMount(){O("(min-width: 960px)",e=>{this.setState({isMobile:!e}),e&&this.props.close()})}switchContent(e){if(this.state.isMobile&&this.props.opened&&e===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.props.changeRoute(Xe(e)),this.prevVal=e,this.setState({activeItem:e})}render(e,{activeItem:t}){return p("div",{class:"ld-menu"},p("div",{class:"ld-menu-nav"},p("nav",null,p("ul",null,p("li",null,p("button",{onClick:()=>this.switchContent("info")},K,p("p",{class:"info"===t?"ld-menu--active":""},"INFO"))),p("li",null,p("button",{onClick:()=>this.switchContent("settings")},p("div",{class:"ld-menu--notification"}),G,p("p",{class:"settings"===t?"ld-menu--active":""},"SETTINGS"))),p("li",null,p("button",{onClick:()=>this.switchContent("ticker")},Z,p("p",{class:"ticker"===t?"ld-menu--active":""},"TICKER"))),p("li",null,p("button",{onClick:()=>this.switchContent("contribute")},J,p("p",{class:"contribute"===t?"ld-menu--active":""},"CONTRIBUTE")))))),p("div",{class:"ld-menu--content"},p("div",{class:"mb-only"},p("div",{class:"ld-menu--header"},p("h1",null,t))),Xe(t).template))}}let et,tt,at=e=>e;const nt=I(et||(et=at`
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
`)),rt=I(tt||(tt=at`
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
    background-color: var(--ld-bg);
    color: var(--ld-text);
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
      height: 70%;
    }
  }
`));!function(e,a,n){var r,o,c;t.__&&t.__(e,a),o=(r=n===i)?null:n&&n.__k||a.__k,e=p(f,null,[e]),c=[],q(a,(r?a:n||a).__k=e,o||s,s,void 0!==a.ownerSVGElement,n&&!r?[n]:o?null:l.slice.call(a.childNodes),c,n||s,r),A(c,e)}([p(()=>p("header",{class:ee},p("a",{href:"/lockdown/"},X),p("div",{class:"totals"},p(V,null))),null),p(class extends _{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""}},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__change=this.__change.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onClick=this.__onClick.bind(this),this.__changeRoute=this.__changeRoute.bind(this)}async componentDidMount(){this.__onPathChanged(),O("(prefers-color-scheme: dark)",e=>{const t=localStorage.getItem("darkmode");null!==t?"true"===t&&document.body.classList.add("dark"):e?(localStorage.setItem("darkmode","true"),document.body.classList.add("dark")):localStorage.setItem("darkmode","false")}),O("(min-width: 960px)",e=>{this.setState({isMobile:!e})})}componentWillMount(){window.addEventListener("keydown",this.__onKeyDown,!0),te.addEventListener("path-changed",this.__onPathChanged)}componentWillUnmount(){window.removeEventListener("keydown",this.__onKeyDown,!0),te.removeEventListener("path-changed",this.__onPathChanged)}render(){return[p("div",{class:nt},p(V,null)),p(ie,null),p(Ye,{opened:this.state.dialog.opened,changeRoute:this.__changeRoute,close:this.__closeDialog}),this.state.dialog.opened?p("div",{class:rt,onClick:this.__onClick},p("div",{ref:e=>this.dialogRef=e,class:"ld-dialog--container"},p("div",{class:"ld-dialog--header"},p("h1",null,this.state.dialog.title),p("div",{class:"ld-dialog--close-cont"},p("button",{onClick:this.__closeDialog,class:"ld-dialog--close"},Q))),p("div",{class:"ld-dialog--content"},this.state.dialog.template))):""]}__changeRoute({template:e,title:t}){const a=te.url.searchParams.get("country");a?te.setPath(`${t}?country=${a}`):te.setPath(t),this.state.isMobile&&(te.setSearchParam("country",null),this.__change({template:e,title:t}))}__onPathChanged(){const e=te.url.searchParams.get("country");e&&this.setState({dialog:{opened:!0,template:p(ce,{country:e}),title:e}})}__onKeyDown(e){27===e.keyCode&&this.__closeDialog()}__change({template:e,title:t}){this.setState({dialog:{opened:!0,template:e,title:t}})}__onClick(e){!e.composedPath().includes(this.dialogRef)&&this.__closeDialog()}__closeCountryInfo(){te.setSearchParam("country",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),this.__closeCountryInfo()}},null)],document.getElementById("app"));
