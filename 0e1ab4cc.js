var t,n,a,r,o,i,s={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function d(t,e){for(var n in e)t[n]=e[n];return t}function u(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n){var a,r=arguments,o={};for(a in e)"key"!==a&&"ref"!==a&&(o[a]=e[a]);if(arguments.length>3)for(n=[n],a=3;a<arguments.length;a++)n.push(r[a]);if(null!=n&&(o.children=n),"function"==typeof t&&null!=t.defaultProps)for(a in t.defaultProps)void 0===o[a]&&(o[a]=t.defaultProps[a]);return p(t,o,e&&e.key,e&&e.ref,null)}function p(e,n,a,r,o){var i={type:e,props:n,key:a,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),t.vnode&&t.vnode(i),i}function f(t){return t.children}function g(t,e){this.props=t,this.context=e}function m(t,e){if(null==e)return t.__?m(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?m(t):null}function b(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return b(t)}}function w(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!a++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(v)}function v(){for(var t;a=n.length;)t=n.sort((function(t,e){return t.__v.__b-e.__v.__b})),n=[],t.some((function(t){var e,n,a,r,o,i,s;t.__d&&(i=(o=(e=t).__v).__e,(s=e.__P)&&(n=[],(a=d({},o)).__v=a,r=M(s,o,a,e.__n,void 0!==s.ownerSVGElement,null,n,null==i?m(o):i),D(n,o),r!=i&&b(o)))}))}function C(t,e,n,a,r,o,i,c,d){var h,p,f,g,b,w,v,C=n&&n.__k||l,_=C.length;if(c==s&&(c=null!=o?o[0]:_?m(n,0):null),h=0,e.__k=x(e.__k,(function(n){if(null!=n){if(n.__=e,n.__b=e.__b+1,null===(f=C[h])||f&&n.key==f.key&&n.type===f.type)C[h]=void 0;else for(p=0;p<_;p++){if((f=C[p])&&n.key==f.key&&n.type===f.type){C[p]=void 0;break}f=null}if(g=M(t,n,f=f||s,a,r,o,i,c,d),(p=n.ref)&&f.ref!=p&&(v||(v=[]),f.ref&&v.push(f.ref,null,n),v.push(p,n.__c||g,n)),null!=g){var l;if(null==w&&(w=g),void 0!==n.__d)l=n.__d,n.__d=void 0;else if(o==f||g!=c||null==g.parentNode){t:if(null==c||c.parentNode!==t)t.appendChild(g),l=null;else{for(b=c,p=0;(b=b.nextSibling)&&p<_;p+=2)if(b==g)break t;t.insertBefore(g,c),l=c}"option"==e.type&&(t.value="")}c=void 0!==l?l:g.nextSibling,"function"==typeof e.type&&(e.__d=c)}else c&&f.__e==c&&c.parentNode!=t&&(c=m(f))}return h++,n})),e.__e=w,null!=o&&"function"!=typeof e.type)for(h=o.length;h--;)null!=o[h]&&u(o[h]);for(h=_;h--;)null!=C[h]&&P(C[h],C[h]);if(v)for(h=0;h<v.length;h++)S(v[h],v[++h],v[++h])}function x(t,e,n){if(null==n&&(n=[]),null==t||"boolean"==typeof t)e&&n.push(e(null));else if(Array.isArray(t))for(var a=0;a<t.length;a++)x(t[a],e,n);else n.push(e?e("string"==typeof t||"number"==typeof t?p(null,t,null,null,t):null!=t.__e||null!=t.__c?p(t.type,t.props,t.key,null,t.__v):t):t);return n}function _(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===c.test(e)?n+"px":null==n?"":n}function y(t,e,n,a,r){var o,i,s,l,c;if(r?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(o=t.style,"string"==typeof n)o.cssText=n;else{if("string"==typeof a&&(o.cssText="",a=null),a)for(l in a)n&&l in n||_(o,l,"");if(n)for(c in n)a&&n[c]===a[c]||_(o,c,n[c])}else"o"===e[0]&&"n"===e[1]?(i=e!==(e=e.replace(/Capture$/,"")),s=e.toLowerCase(),e=(s in t?s:e).slice(2),n?(a||t.addEventListener(e,k,i),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,k,i)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!r&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function k(e){this.l[e.type](t.event?t.event(e):e)}function M(e,n,a,r,o,i,s,l,c){var u,h,p,m,b,w,v,x,_,y,k=n.type;if(void 0!==n.constructor)return null;(u=t.__b)&&u(n);try{t:if("function"==typeof k){if(x=n.props,_=(u=k.contextType)&&r[u.__c],y=u?_?_.props.value:u.__:r,a.__c?v=(h=n.__c=a.__c).__=h.__E:("prototype"in k&&k.prototype.render?n.__c=h=new k(x,y):(n.__c=h=new g(x,y),h.constructor=k,h.render=T),_&&_.sub(h),h.props=x,h.state||(h.state={}),h.context=y,h.__n=r,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=k.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,k.getDerivedStateFromProps(x,h.__s))),m=h.props,b=h.state,p)null==k.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==k.getDerivedStateFromProps&&x!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(x,y),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(x,h.__s,y)||n.__v===a.__v&&!h.__){for(h.props=x,h.state=h.__s,n.__v!==a.__v&&(h.__d=!1),h.__v=n,n.__e=a.__e,n.__k=a.__k,h.__h.length&&s.push(h),u=0;u<n.__k.length;u++)n.__k[u]&&(n.__k[u].__=n);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(x,h.__s,y),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(m,b,w)}))}h.context=y,h.props=x,h.state=h.__s,(u=t.__r)&&u(n),h.__d=!1,h.__v=n,h.__P=e,u=h.render(h.props,h.state,h.context),n.__k=null!=u&&u.type==f&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(r=d(d({},r),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(m,b)),C(e,n,a,r,o,i,s,l,c),h.base=n.__e,h.__h.length&&s.push(h),v&&(h.__E=h.__=null),h.__e=!1}else null==i&&n.__v===a.__v?(n.__k=a.__k,n.__e=a.__e):n.__e=L(a.__e,n,a,r,o,i,s,c);(u=t.diffed)&&u(n)}catch(e){n.__v=null,t.__e(e,n,a)}return n.__e}function D(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function L(t,e,n,a,r,o,i,c){var d,u,h,p,f,g=n.props,m=e.props;if(r="svg"===e.type||r,null!=o)for(d=0;d<o.length;d++)if(null!=(u=o[d])&&((null===e.type?3===u.nodeType:u.localName===e.type)||t==u)){t=u,o[d]=null;break}if(null==t){if(null===e.type)return document.createTextNode(m);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,m.is&&{is:m.is}),o=null,c=!1}if(null===e.type)g!==m&&t.data!=m&&(t.data=m);else{if(null!=o&&(o=l.slice.call(t.childNodes)),h=(g=n.props||s).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!c){if(g===s)for(g={},f=0;f<t.attributes.length;f++)g[t.attributes[f].name]=t.attributes[f].value;(p||h)&&(p&&h&&p.__html==h.__html||(t.innerHTML=p&&p.__html||""))}(function(t,e,n,a,r){var o;for(o in n)"children"===o||"key"===o||o in e||y(t,o,null,n[o],a);for(o in e)r&&"function"!=typeof e[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===e[o]||y(t,o,e[o],n[o],a)})(t,m,g,r,c),p?e.__k=[]:(e.__k=e.props.children,C(t,e,n,a,"foreignObject"!==e.type&&r,o,i,s,c)),c||("value"in m&&void 0!==(d=m.value)&&d!==t.value&&y(t,"value",d,g.value,!1),"checked"in m&&void 0!==(d=m.checked)&&d!==t.checked&&y(t,"checked",d,g.checked,!1))}return t}function S(e,n,a){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,a)}}function P(e,n,a){var r,o,i;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,n)),a||"function"==typeof e.type||(a=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],n,a);null!=o&&u(o)}function T(t,e,n){return this.constructor(t,n)}t={__e:function(t,e){for(var n,a;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(a=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(a=!0,n.componentDidCatch(t)),a)return w(n.__E=n)}catch(e){t=e}throw t}},g.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&d(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),w(this))},g.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),w(this))},g.prototype.render=f,n=[],a=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=s;var z=function t(e,n,a,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],l=n[i]?(n[0]|=s?1:2,a[n[i++]]):n[++i];3===s?r[0]=l:4===s?r[1]=Object.assign(r[1]||{},l):5===s?(r[1]=r[1]||{})[n[++i]]=l:6===s?r[1][n[++i]]+=l+"":s?(o=e.apply(l,t(e,l,a,["",null])),r.push(o),l[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(l)}return r},H=new Map;(function(t){var e=H.get(this);return e||(e=new Map,H.set(this,e)),(e=z(this,e.get(t)||(e.set(t,e=function(t){for(var e,n,a=1,r="",o="",i=[0],s=function(t){1===a&&(t||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,t,r):3===a&&(t||r)?(i.push(3,t,r),a=2):2===a&&"..."===r&&t?i.push(4,t,0):2===a&&r&&!t?i.push(5,0,!0,r):a>=5&&((r||!t&&5===a)&&(i.push(a,0,r,n),a=6),t&&(i.push(a,t,0,n),a=6)),r=""},l=0;l<t.length;l++){l&&(1===a&&s(),s(l));for(var c=0;c<t[l].length;c++)e=t[l][c],1===a?"<"===e?(s(),i=[i],a=3):r+=e:4===a?"--"===r&&">"===e?(a=1,r=""):r=e+r[0]:o?e===o?o="":r+=e:'"'===e||"'"===e?o=e:">"===e?(s(),a=1):a&&("="===e?(a=5,n=r,r=""):"/"===e&&(a<5||">"===t[l][c+1])?(s(),3===a&&(i=i[0]),a=i,(i=i[0]).push(2,0,a),a=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(s(),a=2):r+=e),3===a&&"!--"===r&&(a=4,i=i[0])}return s(),i}(t)),e),arguments,[])).length>1?e:e[0]}).bind(h);const A=(t,e)=>{let n=window.matchMedia(t);n.addListener(t=>e(t.matches)),e(n.matches)};var E=t=>{var n=/^\0+/g,a=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,i=/([,: ])(transform)/g,s=/,+\s*(?![^(]*[)])/g,l=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,d=/,\r+?/g,u=/([\t\r\n ])*\f?&/g,h=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,m=/:(read-only)/g,b=/\s+(?=[{\];=:>])/g,w=/([[}=:>])\s+/g,v=/(\{[^{]+?);(?=\})/g,C=/\s{2,}/g,x=/([^\(])(:+) */g,_=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,M=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,S=/([^-])(image-set\()/,P="-webkit-",T="-moz-",z="-ms-",H=59,A=125,E=123,U=40,V=41,W=10,j=13,N=32,O=45,B=42,R=44,I=58,F=47,Y=1,q=1,Z=0,$=1,G=1,X=1,Q=0,K=0,J=0,tt=[],et=[],nt=0,at=null,rt=0,ot=1,it="",st="",lt="";function ct(t,e,r,o,i){for(var s,l,d=0,u=0,h=0,p=0,b=0,w=0,v=0,C=0,_=0,k=0,M=0,D=0,L=0,S=0,T=0,z=0,Q=0,et=0,at=0,ut=r.length,bt=ut-1,wt="",vt="",Ct="",xt="",_t="",yt="";T<ut;){if(v=r.charCodeAt(T),T===bt&&u+p+h+d!==0&&(0!==u&&(v=u===F?W:F),p=h=d=0,ut++,bt++),u+p+h+d===0){if(T===bt&&(z>0&&(vt=vt.replace(a,"")),vt.trim().length>0)){switch(v){case N:case 9:case H:case j:case W:break;default:vt+=r.charAt(T)}v=H}if(1===Q)switch(v){case E:case A:case H:case 34:case 39:case U:case V:case R:Q=0;case 9:case j:case W:case N:break;default:for(Q=0,at=T,b=v,T--,v=H;at<ut;)switch(r.charCodeAt(at++)){case W:case j:case H:++T,v=b,at=ut;break;case I:z>0&&(++T,v=b);case E:at=ut}}switch(v){case E:for(b=(vt=vt.trim()).charCodeAt(0),M=1,at=++T;T<ut;){switch(v=r.charCodeAt(T)){case E:M++;break;case A:M--;break;case F:switch(w=r.charCodeAt(T+1)){case B:case F:T=mt(w,T,bt,r)}break;case 91:v++;case U:v++;case 34:case 39:for(;T++<bt&&r.charCodeAt(T)!==v;);}if(0===M)break;T++}switch(Ct=r.substring(at,T),0===b&&(b=(vt=vt.replace(n,"").trim()).charCodeAt(0)),b){case 64:switch(z>0&&(vt=vt.replace(a,"")),w=vt.charCodeAt(1)){case 100:case 109:case 115:case O:s=e;break;default:s=tt}if(at=(Ct=ct(e,s,Ct,w,i+1)).length,J>0&&0===at&&(at=vt.length),nt>0&&(l=gt(3,Ct,s=dt(tt,vt,et),e,q,Y,at,w,i,o),vt=s.join(""),void 0!==l&&0===(at=(Ct=l.trim()).length)&&(w=0,Ct="")),at>0)switch(w){case 115:vt=vt.replace(y,ft);case 100:case 109:case O:Ct=vt+"{"+Ct+"}";break;case 107:Ct=(vt=vt.replace(f,"$1 $2"+(ot>0?it:"")))+"{"+Ct+"}",Ct=1===G||2===G&&pt("@"+Ct,3)?"@"+P+Ct+"@"+Ct:"@"+Ct;break;default:Ct=vt+Ct,112===o&&(xt+=Ct,Ct="")}else Ct="";break;default:Ct=ct(e,dt(e,vt,et),Ct,o,i+1)}_t+=Ct,D=0,Q=0,S=0,z=0,et=0,L=0,vt="",Ct="",v=r.charCodeAt(++T);break;case A:case H:if((at=(vt=(z>0?vt.replace(a,""):vt).trim()).length)>1)switch(0===S&&((b=vt.charCodeAt(0))===O||b>96&&b<123)&&(at=(vt=vt.replace(" ",":")).length),nt>0&&void 0!==(l=gt(1,vt,e,t,q,Y,xt.length,o,i,o))&&0===(at=(vt=l.trim()).length)&&(vt="\0\0"),b=vt.charCodeAt(0),w=vt.charCodeAt(1),b){case 0:break;case 64:if(105===w||99===w){yt+=vt+r.charAt(T);break}default:if(vt.charCodeAt(at-1)===I)break;xt+=ht(vt,b,w,vt.charCodeAt(2))}D=0,Q=0,S=0,z=0,et=0,vt="",v=r.charCodeAt(++T)}}switch(v){case j:case W:if(u+p+h+d+K===0)switch(k){case V:case 39:case 34:case 64:case 126:case 62:case B:case 43:case F:case O:case I:case R:case H:case E:case A:break;default:S>0&&(Q=1)}u===F?u=0:$+D===0&&107!==o&&vt.length>0&&(z=1,vt+="\0"),nt*rt>0&&gt(0,vt,e,t,q,Y,xt.length,o,i,o),Y=1,q++;break;case H:case A:if(u+p+h+d===0){Y++;break}default:switch(Y++,wt=r.charAt(T),v){case 9:case N:if(p+d+u===0)switch(C){case R:case I:case 9:case N:wt="";break;default:v!==N&&(wt=" ")}break;case 0:wt="\\0";break;case 12:wt="\\f";break;case 11:wt="\\v";break;case 38:p+u+d===0&&$>0&&(et=1,z=1,wt="\f"+wt);break;case 108:if(p+u+d+Z===0&&S>0)switch(T-S){case 2:112===C&&r.charCodeAt(T-3)===I&&(Z=C);case 8:111===_&&(Z=_)}break;case I:p+u+d===0&&(S=T);break;case R:u+h+p+d===0&&(z=1,wt+="\r");break;case 34:case 39:0===u&&(p=p===v?0:0===p?v:p);break;case 91:p+u+h===0&&d++;break;case 93:p+u+h===0&&d--;break;case V:p+u+d===0&&h--;break;case U:if(p+u+d===0){if(0===D)switch(2*C+3*_){case 533:break;default:M=0,D=1}h++}break;case 64:u+h+p+d+S+L===0&&(L=1);break;case B:case F:if(p+d+h>0)break;switch(u){case 0:switch(2*v+3*r.charCodeAt(T+1)){case 235:u=F;break;case 220:at=T,u=B}break;case B:v===F&&C===B&&at+2!==T&&(33===r.charCodeAt(at+2)&&(xt+=r.substring(at,T+1)),wt="",u=0)}}if(0===u){if($+p+d+L===0&&107!==o&&v!==H)switch(v){case R:case 126:case 62:case 43:case V:case U:if(0===D){switch(C){case 9:case N:case W:case j:wt+="\0";break;default:wt="\0"+wt+(v===R?"":"\0")}z=1}else switch(v){case U:S+7===T&&108===C&&(S=0),D=++M;break;case V:0==(D=--M)&&(z=1,wt+="\0")}break;case 9:case N:switch(C){case 0:case E:case A:case H:case R:case 12:case 9:case N:case W:case j:break;default:0===D&&(z=1,wt+="\0")}}vt+=wt,v!==N&&9!==v&&(k=v)}}_=C,C=v,T++}if(at=xt.length,J>0&&0===at&&0===_t.length&&0===e[0].length==0&&(109!==o||1===e.length&&($>0?st:lt)===e[0])&&(at=e.join(",").length+2),at>0){if(s=0===$&&107!==o?function(t){for(var e,n,r=0,o=t.length,i=Array(o);r<o;++r){for(var s=t[r].split(c),l="",d=0,u=0,h=0,p=0,f=s.length;d<f;++d)if(!(0===(u=(n=s[d]).length)&&f>1)){if(h=l.charCodeAt(l.length-1),p=n.charCodeAt(0),e="",0!==d)switch(h){case B:case 126:case 62:case 43:case N:case U:break;default:e=" "}switch(p){case 38:n=e+st;case 126:case 62:case 43:case N:case V:case U:break;case 91:n=e+n+st;break;case I:switch(2*n.charCodeAt(1)+3*n.charCodeAt(2)){case 530:if(X>0){n=e+n.substring(8,u-1);break}default:(d<1||s[d-1].length<1)&&(n=e+st+n)}break;case R:e="";default:n=u>1&&n.indexOf(":")>0?e+n.replace(x,"$1"+st+"$2"):e+n+st}l+=n}i[r]=l.replace(a,"").trim()}return i}(e):e,nt>0&&void 0!==(l=gt(2,xt,s,t,q,Y,at,o,i,o))&&0===(xt=l).length)return yt+xt+_t;if(xt=s.join(",")+"{"+xt+"}",G*Z!=0){switch(2!==G||pt(xt,2)||(Z=0),Z){case 111:xt=xt.replace(m,":-moz-$1")+xt;break;case 112:xt=xt.replace(g,"::"+P+"input-$1")+xt.replace(g,"::-moz-$1")+xt.replace(g,":-ms-input-$1")+xt}Z=0}}return yt+xt+_t}function dt(t,e,n){var a=e.trim().split(d),r=a,o=a.length,i=t.length;switch(i){case 0:case 1:for(var s=0,l=0===i?"":t[0]+" ";s<o;++s)r[s]=ut(l,r[s],n,i).trim();break;default:s=0;var c=0;for(r=[];s<o;++s)for(var u=0;u<i;++u)r[c++]=ut(t[u]+" ",a[s],n,i).trim()}return r}function ut(t,e,n,a){var r=e,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch($+a){case 0:case 1:if(0===t.trim().length)break;default:return r.replace(u,"$1"+t.trim())}break;case I:switch(r.charCodeAt(1)){case 103:if(X>0&&$>0)return r.replace(h,"$1").replace(u,"$1"+lt);break;default:return t.trim()+r.replace(u,"$1"+t.trim())}default:if(n*$>0&&r.indexOf("\f")>0)return r.replace(u,(t.charCodeAt(0)===I?"":"$1")+t.trim())}return t+r}function ht(t,e,n,a){var c,d=0,u=t+";",h=2*e+3*n+4*a;if(944===h)return function(t){var e=t.length,n=t.indexOf(":",9)+1,a=t.substring(0,n).trim(),r=t.substring(n,e-1).trim();switch(t.charCodeAt(9)*ot){case 0:break;case O:if(110!==t.charCodeAt(10))break;default:var o=r.split((r="",s)),i=0;for(n=0,e=o.length;i<e;n=0,++i){for(var c=o[i],d=c.split(l);c=d[n];){var u=c.charCodeAt(0);if(1===ot&&(u>64&&u<90||u>96&&u<123||95===u||u===O&&c.charCodeAt(1)!==O))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=it}}d[n++]=c}r+=(0===i?"":",")+d.join(" ")}}return r=a+r+";",1===G||2===G&&pt(r,1)?P+r+r:r}(u);if(0===G||2===G&&!pt(u,1))return u;switch(h){case 1015:return 97===u.charCodeAt(10)?P+u+u:u;case 951:return 116===u.charCodeAt(3)?P+u+u:u;case 963:return 110===u.charCodeAt(5)?P+u+u:u;case 1009:if(100!==u.charCodeAt(4))break;case 969:case 942:return P+u+u;case 978:return P+u+T+u+u;case 1019:case 983:return P+u+T+u+z+u+u;case 883:return u.charCodeAt(8)===O?P+u+u:u.indexOf("image-set(",11)>0?u.replace(S,"$1"+P+"$2")+u:u;case 932:if(u.charCodeAt(4)===O)switch(u.charCodeAt(5)){case 103:return P+"box-"+u.replace("-grow","")+P+u+z+u.replace("grow","positive")+u;case 115:return P+u+z+u.replace("shrink","negative")+u;case 98:return P+u+z+u.replace("basis","preferred-size")+u}return P+u+z+u+u;case 964:return P+u+z+"flex-"+u+u;case 1023:if(99!==u.charCodeAt(8))break;return c=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),P+"box-pack"+c+P+u+z+"flex-pack"+c+u;case 1005:return o.test(u)?u.replace(r,":"+P)+u.replace(r,":"+T)+u:u;case 1e3:switch(d=(c=u.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(d)){case 226:c=u.replace(_,"tb");break;case 232:c=u.replace(_,"tb-rl");break;case 220:c=u.replace(_,"lr");break;default:return u}return P+u+z+c+u;case 1017:if(-1===u.indexOf("sticky",9))return u;case 975:switch(d=(u=t).length-10,h=(c=(33===u.charCodeAt(d)?u.substring(0,d):u).substring(t.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:u=u.replace(c,P+c)+";"+u;break;case 207:case 102:u=u.replace(c,P+(h>102?"inline-":"")+"box")+";"+u.replace(c,P+c)+";"+u.replace(c,z+c+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===O)switch(u.charCodeAt(6)){case 105:return c=u.replace("-items",""),P+u+P+"box-"+c+z+"flex-"+c+u;case 115:return P+u+z+"flex-item-"+u.replace(M,"")+u;default:return P+u+z+"flex-line-pack"+u.replace("align-content","").replace(M,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==O||122===u.charCodeAt(4))break;case 931:case 953:if(!0===L.test(t))return 115===(c=t.substring(t.indexOf(":")+1)).charCodeAt(0)?ht(t.replace("stretch","fill-available"),e,n,a).replace(":fill-available",":stretch"):u.replace(c,P+c)+u.replace(c,T+c.replace("fill-",""))+u;break;case 962:if(u=P+u+(102===u.charCodeAt(5)?z+u:"")+u,n+a===211&&105===u.charCodeAt(13)&&u.indexOf("transform",10)>0)return u.substring(0,u.indexOf(";",27)+1).replace(i,"$1"+P+"$2")+u}return u}function pt(t,e){var n=t.indexOf(1===e?":":"{"),a=t.substring(0,3!==e?n:10),r=t.substring(n+1,t.length-1);return at(2!==e?a:a.replace(D,"$1"),r,e)}function ft(t,e){var n=ht(e,e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2));return n!==e+";"?n.replace(k," or ($1)").substring(4):"("+e+")"}function gt(t,e,n,a,r,o,i,s,l,c){for(var d,u=0,h=e;u<nt;++u)switch(d=et[u].call(wt,t,h,n,a,r,o,i,s,l,c)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==e)return h}function mt(t,e,n,a){for(var r=e+1;r<n;++r)switch(a.charCodeAt(r)){case F:if(t===B&&a.charCodeAt(r-1)===B&&e+2!==r)return r+1;break;case W:if(t===F)return r+1}return r}function bt(t){for(var e in t){var n=t[e];switch(e){case"keyframe":ot=0|n;break;case"global":X=0|n;break;case"cascade":$=0|n;break;case"compress":Q=0|n;break;case"semicolon":K=0|n;break;case"preserve":J=0|n;break;case"prefix":at=null,n?"function"!=typeof n?G=1:(G=2,at=n):G=0}}return bt}function wt(t,n){if(void 0!==this&&this.constructor===wt)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),ot>0&&(it=r.replace(p,91===o?"":"-")),o=1,1===$?lt=r:st=r;var i,s=[lt];nt>0&&void 0!==(i=gt(-1,n,s,s,q,Y,0,0,0,0))&&"string"==typeof i&&(n=i);var l=ct(tt,s,n,0,0);return nt>0&&void 0!==(i=gt(-2,l,s,s,q,Y,l.length,0,0,0))&&"string"!=typeof(l=i)&&(o=0),it="",lt="",st="",Z=0,q=1,Y=1,Q*o==0?l:l.replace(a,"").replace(b,"").replace(w,"$1").replace(v,"$1").replace(C," ")}return wt.use=function t(e){switch(e){case void 0:case null:nt=et.length=0;break;default:if("function"==typeof e)et[nt++]=e;else if("object"==typeof e)for(var n=0,a=e.length;n<a;++n)t(e[n]);else rt=0|!!e}return t},wt.set=bt,void 0!==t&&bt(t),wt};const U={},V=document.createElement("style");document.head.appendChild(V);const W=t=>`.${t}{display:none}`,j=t=>/^(\/|https?:\/\/)/.test(t.trim()),N=t=>e=>n=>{V.innerHTML+=(U[t]={hash:e,rules:E()("."+e,n)}).rules,j(t)&&(t=>{V.innerHTML=V.innerHTML.replace(W(t),"")})(e)};var O=(t,...e)=>{const n=t[0].startsWith("/")?t[0]:t.reduce((t,n,a)=>t+(n+(null==e[a]?"":e[a])),"");if(U[n])return U[n].hash;const a="csz-"+Math.random().toString(36).replace("0.",""),r=N(n)(a);return j(n)?((t=>{V.innerHTML=W(t)+V.innerHTML})(a),fetch(n).then(t=>t.text()).then(r)):r(n),a};function B(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function R(t){B(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function I(t){B(1,arguments);var e=R(t);return!isNaN(e)}var F={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var q={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Z={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function $(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=r.width?String(r.width):o;a=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,l=r.width?String(r.width):t.defaultWidth;a=t.values[l]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function G(t){return function(e,n){var a=String(e),r=n||{},o=r.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],s=a.match(i);if(!s)return null;var l,c=s[0],d=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(c.length)}}}var X,Q={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof F[t]?F[t]:1===e?F[t].one:F[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:q,formatRelative:function(t,e,n,a){return Z[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:$({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:$({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:$({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:$({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:$({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(X={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(X.matchPattern);if(!r)return null;var o=r[0],i=n.match(X.parsePattern);if(!i)return null;var s=X.valueCallback?X.valueCallback(i[0]):i[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(o.length)}}),era:G({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:G({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:G({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:G({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function K(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function J(t,e){B(2,arguments);var n=R(t).getTime(),a=K(e);return new Date(n+a)}function tt(t,e){B(2,arguments);var n=K(e);return J(t,-n)}function et(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var nt=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return et("yy"===e?a%100:a,e.length)},at=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):et(n+1,2)},rt=function(t,e){return et(t.getUTCDate(),e.length)},ot=function(t,e){return et(t.getUTCHours()%12||12,e.length)},it=function(t,e){return et(t.getUTCHours(),e.length)},st=function(t,e){return et(t.getUTCMinutes(),e.length)},lt=function(t,e){return et(t.getUTCSeconds(),e.length)},ct=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return et(Math.floor(a*Math.pow(10,n-3)),e.length)};function dt(t){B(1,arguments);var e=1,n=R(t),a=n.getUTCDay(),r=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function ut(t){B(1,arguments);var e=R(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=dt(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=dt(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function ht(t){B(1,arguments);var e=ut(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=dt(n);return a}function pt(t,e){B(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,o=null==r?0:K(r),i=null==n.weekStartsOn?o:K(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=R(t),l=s.getUTCDay(),c=(l<i?7:0)+l-i;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function ft(t,e){B(1,arguments);var n=R(t,e),a=n.getUTCFullYear(),r=e||{},o=r.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:K(i),l=null==r.firstWeekContainsDate?s:K(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(a+1,0,l),c.setUTCHours(0,0,0,0);var d=pt(c,e),u=new Date(0);u.setUTCFullYear(a,0,l),u.setUTCHours(0,0,0,0);var h=pt(u,e);return n.getTime()>=d.getTime()?a+1:n.getTime()>=h.getTime()?a:a-1}function gt(t,e){B(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:K(r),i=null==n.firstWeekContainsDate?o:K(n.firstWeekContainsDate),s=ft(t,e),l=new Date(0);l.setUTCFullYear(s,0,i),l.setUTCHours(0,0,0,0);var c=pt(l,e);return c}var mt="midnight",bt="noon",wt="morning",vt="afternoon",Ct="evening",xt="night",_t={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return nt(t,e)},Y:function(t,e,n,a){var r=ft(t,a),o=r>0?r:1-r;return"YY"===e?et(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):et(o,e.length)},R:function(t,e){return et(ut(t),e.length)},u:function(t,e){return et(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return et(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return et(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return at(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return et(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=function(t,e){B(1,arguments);var n=R(t),a=pt(n,e).getTime()-gt(n,e).getTime();return Math.round(a/6048e5)+1}(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):et(r,e.length)},I:function(t,e,n){var a=function(t){B(1,arguments);var e=R(t),n=dt(e).getTime()-ht(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):et(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):rt(t,e)},D:function(t,e,n){var a=function(t){B(1,arguments);var e=R(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):et(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return et(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return et(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return et(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?bt:0===r?mt:r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?Ct:r>=12?vt:r>=4?wt:xt,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return ot(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):it(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):et(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):et(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):st(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):lt(t,e)},S:function(t,e){return ct(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return kt(r);case"XXXX":case"XX":return Mt(r);case"XXXXX":case"XXX":default:return Mt(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return kt(r);case"xxxx":case"xx":return Mt(r);case"xxxxx":case"xxx":default:return Mt(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+yt(r,":");case"OOOO":default:return"GMT"+Mt(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+yt(r,":");case"zzzz":default:return"GMT"+Mt(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return et(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return et((a._originalDate||t).getTime(),e.length)}};function yt(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+et(o,2)}function kt(t,e){return t%60==0?(t>0?"-":"+")+et(Math.abs(t)/60,2):Mt(t,e)}function Mt(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+et(Math.floor(r/60),2)+n+et(r%60,2)}function Dt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Lt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var St={p:Lt,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return Dt(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Dt(r,e)).replace("{{time}}",Lt(o,e))}};function Pt(t){return t.getTime()%6e4}function Tt(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+Pt(e))%6e4:Pt(e))}var zt=["D","DD"],Ht=["YY","YYYY"];function At(t){return-1!==zt.indexOf(t)}function Et(t){return-1!==Ht.indexOf(t)}function Ut(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var Vt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Wt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jt=/^'([^]*?)'?$/,Nt=/''/g,Ot=/[a-zA-Z]/;function Bt(t,e,n){B(2,arguments);var a=String(e),r=n||{},o=r.locale||Q,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:K(i),l=null==r.firstWeekContainsDate?s:K(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:K(c),u=null==r.weekStartsOn?d:K(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var h=R(t);if(!I(h))throw new RangeError("Invalid time value");var p=Tt(h),f=tt(h,p),g={firstWeekContainsDate:l,weekStartsOn:u,locale:o,_originalDate:h},m=a.match(Wt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,St[e])(t,o.formatLong,g):t})).join("").match(Vt).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return Rt(t);var n=_t[e];if(n)return!r.useAdditionalWeekYearTokens&&Et(t)&&Ut(t),!r.useAdditionalDayOfYearTokens&&At(t)&&Ut(t),n(f,t,o.localize,g);if(e.match(Ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return m}function Rt(t){return t.match(jt)[1].replace(Nt,"'")}class It{constructor(){const t=document.createDocumentFragment();this.addEventListener=t.addEventListener.bind(t),this.dispatchEvent=t.dispatchEvent.bind(t),this.removeEventListener=t.removeEventListener.bind(t),this.__lastUpdate=Date.now()}_shouldInvalidate(){return new Date-this.__lastUpdate>3e5}}const Ft=new class extends It{constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(t){window.history.pushState(null,"",t),this.__onPathChanged()}setSearchParam(t,e){const n=new URLSearchParams(location.search);e?n.set(t,e):n.delete(t);const a=n.toString();this.setPath(`${location.pathname}${a?"?"+a:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed")),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(t=>{t&&t.update()})}__onClick(t){if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(t=>"A"===t.tagName);if(!e||!e.href)return;if(e.hasAttribute("download")||e.href.includes("mailto:"))return;const n=e.getAttribute("target");if(n&&""!==n&&"_self"!==n)return;const a=new URL(e.href);a.hash||a.href.startsWith(document.baseURI)&&(t.preventDefault(),this.setPath(a.pathname))}};const Yt=new class extends It{close(t){this.dispatchEvent(new CustomEvent("close",{detail:t}))}};function qt(t,e){B(2,arguments);var n=R(t),a=K(e);return n.setDate(n.getDate()+a),n}let Zt;const $t={url:new URL("./src/components/WorldMap.js",document.baseURI).href},Gt=O(Zt||(Zt=(t=>t)`
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
`)),Xt={asia:{lng:95.955971,lat:21.916222,zoom:2.8},europe:{lng:52.160455,lat:10.371094,zoom:4},usa:{lng:45.089036,lat:-100.898438,zoom:3},africa:{lng:21.525828,lat:4.214943,zoom:3.2}};function Qt(t){let e;switch(t){case"1":e="#eb5757";break;case"2":e="#f2994a";break;case"3":e="#6fcf97";break;case"4":e="#7aaeff";break;default:e="#CCCCCC"}return e}function Kt(t){let e={};for(let n in t)for(let a in t[n].data)for(let r in t[n].data[a]){let o=t[n].data[a][r];"all"!==a&&"US"!==a||(e[o.unit_code]=o)}return e}class Jt extends g{constructor(){super(),this.__handleSelect=this.__handleSelect.bind(this),this.initMap=this.initMap.bind(this),this.updateMap=this.updateMap.bind(this);let t={lng:0,lat:0,zoom:2},e=window.location.href,n=!1;for(let a in Xt)-1!=e.indexOf("lockdown."+a)&&(t=Xt[a],n=!0);this.state={lng:t.lng,lat:t.lat,zoom:t.zoom,countries:[],mapData:{},lookupTable:{},isMapReady:!1,isLocationSet:n}}setMapState(t,e=[],n){e.forEach((function(e){t.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:n[e.lockdown.iso].feature_id},{kind:e.lockdown.measure[0].value,name:e.lockdown.iso})}))}async initMap(t,e){window.mapboxgl||(console.log("check the map"),await((t=100)=>new Promise(e=>{setTimeout(()=>{e()},t)}))(),await this.initMap(t,e));let n=new window.mapboxgl.Map({accessToken:"pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrOWZpZHF3ajBic2YzbHQwYzQ5bGRnaXgifQ.NcQInXQmMy93L47QBMCAfg",container:this.ref,style:"mapbox://styles/jfqueralt/ck9hi7wl616pz1iugty1cpeiv?optimize=true",center:[this.state.lng,this.state.lat],zoom:this.state.zoom,keyboard:!1,pitchWithRotate:!1});window.map=n;const a=t[this.props.selectedDate];n.on("style.load",()=>{let t=null;n.on("mousemove","admin-0-fill",(function(e){var a=n.queryRenderedFeatures(e.point,{layers:["admin-0-fill"]});e.features.length>0&&(t&&n.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:t},{hover:!1}),t=a[0].id,n.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:t},{hover:!0}))})),n.on("click","admin-0-fill",(function(t){const a=n.queryRenderedFeatures(t.point,{layers:["admin-0-fill"]});Ft.setSearchParam("country",e.adm0.data.all[a[0].properties.iso_3166_1].name),Ft.setSearchParam("iso2",a[0].properties.iso_3166_1)})),console.log("the style is loaded")}),n.on("load",(function(){console.log("map is loaded"),r(e)}));const r=t=>{n.addSource("admin-0",{type:"vector",url:"mapbox://mapbox.boundaries-adm0-v3"});const e=Kt(t);n.addLayer({id:"admin-0-fill",type:"fill",source:"admin-0","source-layer":"boundaries_admin_0",filter:["any",["==","all",["get","worldview"]],["in","US",["get","worldview"]]],paint:{"fill-color":["case",["!=",["feature-state","kind"],null],["match",["feature-state","kind"],"1",Qt("1"),"2",Qt("2"),"3",Qt("3"),"4",Qt("4"),"#CCCCCC"],["case",["boolean",["feature-state","hover"],!1],"rgba(204,204,204,0.5)","rgba(204,204,204,0)"]],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.7,1]}},"waterway-label");const r=t=>{a.forEach((function(t){n.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:e[t.lockdown.iso].feature_id},{kind:t.lockdown.measure[0].value,name:t.lockdown.iso})})),this.setState({isMapReady:!0})};n.isSourceLoaded("admin-0")?r():n.on("sourcedata",(function t(e){"admin-0"===e.sourceId&&e.isSourceLoaded&&(r(),n.off("sourcedata",t))}))};return this.setState({map:n}),n}async updateMap(t,e,n){const a=Kt(e);let r=t[n];if(void 0===r){let{startDate:e,endDate:r}=this.props;e=Bt(e||qt(new Date,-14),"yyyy-MM-dd"),r=Bt(r||qt(new Date,56),"yyyy-MM-dd");let[o]=await Promise.all([fetch(new URL(`https://lockdownsnapshots-apim.azure-api.net/status/world/${e}/${r}`,$t.url)).then(t=>t.json())]);console.log(o);let i=o[n];t=o,this.setState({mapData:t},()=>this.setMapState(this.state.map,i,a))}else this.setMapState(this.state.map,r,a)}async componentDidMount(){Yt.addEventListener("close",t=>{t.detail.countryDialogClosed&&form.focus()});let{startDate:t,endDate:e}=this.props;t=Bt(t||qt(new Date,-14),"yyyy-MM-dd"),e=Bt(e||qt(new Date,56),"yyyy-MM-dd");const[n,a]=await Promise.all([fetch(new URL(`https://lockdownsnapshots-apim.azure-api.net/status/world/${t}/${e}`,$t.url)).then(t=>t.json()),fetch(new URL("./../../data/boundaries-adm0-v3.json",$t.url)).then(t=>t.json())]),r=Object.values[a];if(this.setState({countries:r,mapData:n,lookupTable:a}),await this.initMap(n,a),navigator.permissions){const t=await navigator.permissions.query({name:"geolocation"});"granted"!==t.state||this.state.isLocationSet||navigator.geolocation.getCurrentPosition(t=>{const{latitude:e,longitude:n}=t.coords;this.state.map.setCenter([n,e]),this.setState({isLocationSet:!0})}),t.addEventListener("change",t=>{"granted"!==t.target.state||this.state.isLocationSet?localStorage.removeItem("geolocation"):navigator.geolocation.getCurrentPosition(t=>{localStorage.setItem("geolocation","true");const{latitude:e,longitude:n}=t.coords;this.state.map.setCenter([n,e]),this.setState({isLocationSet:!0})})})}}componentWillUnmount(){this.state.map&&this.state.map.remove()}__handleSelect(t){t.preventDefault();const[e,n]=this.selectRef.value.split(",");Ft.setSearchParam("country",n),Ft.setSearchParam("iso2",e)}__resetFocus(){this.countrySelectRef.focus()}render(){var t;return[h("div",{class:Gt},h("form",{id:"form",tabindex:"-1",onSubmit:this.__handleSelect},h("label",{for:"countries"},"Choose a country:"),h("select",{ref:t=>this.selectRef=t,id:"countries"},null===(t=this.state.countries)||void 0===t?void 0:t.map(t=>h("option",{value:t.ISO+","+t.name},t.name))),h("input",{type:"submit",value:"View country details"}))),h("div",{class:"map-container",ref:t=>this.ref=t})]}componentDidUpdate(t,e,n){this.state.isMapReady&&(console.log(this.props.selectedDate),this.updateMap(this.state.mapData,this.state.lookupTable,this.props.selectedDate))}}const te={url:new URL("./src/services/totalsService.js",document.baseURI).href};const ee=new class extends It{constructor(){super(),this.cache={},this.corona={},fetch(new URL("../../data/totals.json",te.url)).then(t=>t.json()).then(t=>{this.corona=t.corona})}async getTotals(t){var e;let{date:n}=t,a=t.startDate,r=t.endDate;a=Bt(a||qt(new Date,-14),"yyyy-MM-dd"),r=Bt(r||qt(new Date,56),"yyyy-MM-dd");const o=`${a}${r}`;if(t.forceRefresh||"failed"===(null===(e=this.cache[o])||void 0===e?void 0:e.status)||!this.cache[o]){try{const t=await(await fetch(`https://lockdownsnapshots-apim.azure-api.net/totals/lockdown/${a}/${r}`)).json();this.cache[o]=t}catch(t){this.cache[o]={status:"failed"}}var i=this.cache[o];if("failed"===i.status)return this.dispatchEvent(new Event("change")),i}return{status:"success",corona:this.corona,territories:this.cache[o][n]}}};let ne;const ae=O(ne||(ne=(t=>t)`
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
    width: auto;
    @media (max-width: 899px) {
      width: 144px;
    }
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
    background-color: #e0e0e0;
  }
`));class re extends g{constructor(){super(),this.state={totals:{}}}async componentDidUpdate(t){if(this.props.selectedDate!==t.selectedDate){const{startDate:t,endDate:e,selectedDate:n}=this.props;this.setState({totals:await ee.getTotals({date:n,startDate:t,endDate:e})})}}async componentDidMount(){A("(min-width: 900px)",t=>{this.setState({desktop:t})});const t=await ee.getTotals({date:this.props.selectedDate,startDate:this.props.startDate,endDate:this.props.endDate});this.setState({totals:t})}render({selectedDate:t},{totals:e,desktop:n}){var a,r,o,i;const s=[{description:"Countries in lockdown",value:Number((null===(a=e.territories)||void 0===a?void 0:a.lockdown)||0).toLocaleString()},{description:"People affected",value:Number((null===(r=e.territories)||void 0===r?void 0:r.affected)||0).toLocaleString()},{description:"Reported cases",value:Number((null===(o=e.corona)||void 0===o?void 0:o.confirmed)||0).toLocaleString()},{description:"Reported deaths",value:Number((null===(i=e.corona)||void 0===i?void 0:i.deaths)||0).toLocaleString()}];return h("div",{class:ae},h("dl",null,(n?s:s.slice(0,2)).map(t=>h("div",null,h("dt",{class:"ld-font-light"},t.description),h("dd",{class:"ld-font-front"},t.value)))))}}const oe=h("svg",{class:"icon icon-tabler icon-tabler-info-circle","aria-labelledby":"srInfo",width:"28",height:"29",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M13.9965 0C11.2277 0.000685575 8.52133 0.822415 6.2195 2.36131C3.91766 3.9002 2.12379 6.08714 1.06469 8.6456C0.00559705 11.2041 -0.271147 14.0192 0.269437 16.7349C0.810022 19.4507 2.14366 21.9451 4.10174 23.9029C6.05981 25.8606 8.55437 27.1938 11.27 27.7337C13.9857 28.2737 16.8004 27.9962 19.3584 26.9364C21.9163 25.8766 24.1026 24.082 25.6408 21.7796C27.179 19.4772 28 16.7703 28 14.0013C27.9991 10.2876 26.5233 6.72631 23.8973 4.10066C21.2712 1.47502 17.7099 -1.13766e-07 13.9965 0ZM13.9965 6.21201C14.4655 6.21201 14.9238 6.35106 15.3137 6.6116C15.7036 6.87214 16.0075 7.24246 16.1869 7.67572C16.3664 8.10898 16.4133 8.5857 16.3219 9.04565C16.2304 9.5056 16.0046 9.92809 15.673 10.2597C15.3414 10.5913 14.919 10.8172 14.4591 10.9086C13.9992 11.0001 13.5225 10.9532 13.0892 10.7737C12.656 10.5942 12.2857 10.2903 12.0252 9.90039C11.7647 9.51046 11.6257 9.05205 11.6257 8.5831C11.6257 7.95424 11.8754 7.35112 12.3201 6.90646C12.7647 6.46179 13.3677 6.21201 13.9965 6.21201ZM17.1577 20.5495C17.1577 20.7334 17.0847 20.9097 16.9547 21.0397C16.8247 21.1698 16.6483 21.2428 16.4645 21.2428H11.5147C11.3309 21.2428 11.1545 21.1698 11.0245 21.0397C10.8945 20.9097 10.8215 20.7334 10.8215 20.5495V19.1976C10.8215 19.0137 10.8945 18.8374 11.0245 18.7073C11.1545 18.5773 11.3309 18.5043 11.5147 18.5043H12.1906V14.906H11.5147C11.3309 14.906 11.1545 14.833 11.0245 14.7029C10.8945 14.5729 10.8215 14.3966 10.8215 14.2127V12.8573C10.8215 12.6734 10.8945 12.4971 11.0245 12.3671C11.1545 12.237 11.3309 12.164 11.5147 12.164H15.1265C15.3104 12.164 15.4867 12.237 15.6167 12.3671C15.7467 12.4971 15.8198 12.6734 15.8198 12.8573V18.5043H16.4749C16.6587 18.5043 16.8351 18.5773 16.9651 18.7073C17.0951 18.8374 17.1681 19.0137 17.1681 19.1976L17.1577 20.5495Z",fill:"currentColor"})),ie=(h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"})),h("svg",{class:"icon icon-tabler icon-tabler-settings","aria-labelledby":"srSettings",stroke:"currentColor",width:"28",height:"30",viewBox:"0 0 28 30",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M27.6411 18.7033L25.1277 17.2543C25.3828 15.8863 25.3828 14.4829 25.1277 13.1148L27.6411 11.6624C27.7807 11.5817 27.8887 11.4559 27.9474 11.3057C28.0062 11.1556 28.012 10.9898 27.9642 10.8359C27.3155 8.76067 26.2143 6.85542 24.7399 5.25758C24.6307 5.13999 24.4851 5.06262 24.3265 5.03793C24.1679 5.01325 24.0056 5.04268 23.8658 5.12151L21.3524 6.57392C20.2981 5.66454 19.082 4.96178 17.7677 4.50244V1.60783C17.7659 1.44842 17.7101 1.29436 17.6094 1.17078C17.5087 1.04721 17.369 0.961429 17.2133 0.927552C15.093 0.456441 12.8952 0.456441 10.775 0.927552C10.6192 0.961429 10.4795 1.04721 10.3788 1.17078C10.2781 1.29436 10.2223 1.44842 10.2206 1.60783V4.50924C8.90953 4.97569 7.69468 5.67768 6.63584 6.58069L4.12922 5.12832C3.9901 5.04702 3.8272 5.01614 3.66798 5.04092C3.50877 5.0657 3.36297 5.14461 3.25514 5.26435C1.77801 6.86015 0.676367 8.7661 0.0308698 10.8427C-0.0168644 10.9985 -0.00904608 11.1661 0.0529779 11.3168C0.115002 11.4676 0.227389 11.5921 0.370981 11.6692L2.88441 13.1182C2.62933 14.4874 2.62933 15.8919 2.88441 17.2611L0.370981 18.7101C0.228293 18.7882 0.1167 18.9128 0.0548046 19.0633C-0.00709105 19.2137 -0.0155458 19.3808 0.0308698 19.5367C0.679519 21.6119 1.78078 23.5172 3.25514 25.115C3.36402 25.2331 3.50971 25.3109 3.66844 25.3356C3.82717 25.3603 3.98959 25.3305 4.12922 25.251L6.63924 23.7987C7.69529 24.7074 8.91238 25.41 10.2274 25.8701V28.7715C10.2292 28.9309 10.2849 29.085 10.3857 29.2086C10.4864 29.3321 10.626 29.4179 10.7818 29.4518C12.902 29.9229 15.0998 29.9229 17.2201 29.4518C17.3753 29.4168 17.5143 29.3307 17.6148 29.2074C17.7153 29.0841 17.7715 28.9306 17.7745 28.7715V25.8701C19.0855 25.4037 20.3004 24.7017 21.3592 23.7987L23.8727 25.251C24.0103 25.3354 24.1735 25.368 24.333 25.3431C24.4925 25.3181 24.638 25.2373 24.7433 25.115C26.2214 23.5193 27.3242 21.6134 27.971 19.5367C28.0162 19.3809 28.0084 19.2144 27.9487 19.0635C27.8889 18.9127 27.7807 18.7859 27.6411 18.7033ZM13.9924 19.9006C13.0593 19.8999 12.1473 19.6225 11.3718 19.1034C10.5964 18.5843 9.99227 17.8469 9.63595 16.9843C9.27963 16.1218 9.1871 15.173 9.37005 14.2579C9.55301 13.3428 10.0032 12.5025 10.6638 11.8433C11.3243 11.1841 12.1655 10.7357 13.0809 10.5547C13.9964 10.3737 14.9449 10.4683 15.8066 10.8265C16.6682 11.1847 17.4043 11.7905 17.9217 12.5671C18.4391 13.3438 18.7145 14.2564 18.7132 15.1897C18.7096 16.4398 18.2107 17.6375 17.3259 18.5205C16.4411 19.4034 15.2424 19.8997 13.9924 19.9006Z",fill:"currentColor"}))),se=h("svg",{class:"icon icon-tabler icon-tabler-refresh","aria-labelledby":"srTicker",width:"28",height:"29",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M20.4855 7.74409C19.2786 6.61667 17.7987 5.82335 16.1917 5.44237C14.5847 5.06139 12.9062 5.10592 11.3217 5.57155C9.7372 6.03718 8.30142 6.90782 7.15597 8.09762C6.01052 9.28743 5.19496 10.7553 4.78975 12.3565C4.75274 12.5029 4.66826 12.633 4.54951 12.7264C4.43075 12.8199 4.28441 12.8713 4.13334 12.8727H0.892313C0.791845 12.8742 0.692292 12.8535 0.600732 12.8121C0.509171 12.7707 0.427852 12.7097 0.36257 12.6333C0.297287 12.5569 0.249644 12.4671 0.223023 12.3702C0.196403 12.2733 0.19146 12.1717 0.208552 12.0727C0.6785 9.59459 1.80827 7.28924 3.47876 5.39961C5.14926 3.50999 7.29859 2.10611 9.70017 1.33597C12.1018 0.565828 14.6666 0.45796 17.1244 1.02373C19.5821 1.58951 21.8417 2.80795 23.665 4.55064L25.6855 2.52996C25.8773 2.34574 26.1186 2.22145 26.38 2.1723C26.6413 2.12314 26.9113 2.15127 27.157 2.25322C27.4026 2.35518 27.6131 2.52653 27.7629 2.74633C27.9126 2.96612 27.995 3.22482 28 3.49073V11.0674C28 11.4302 27.8559 11.778 27.5995 12.0345C27.343 12.291 26.9952 12.4351 26.6325 12.4351H19.0735C18.8076 12.4301 18.549 12.3477 18.3292 12.198C18.1094 12.0482 17.938 11.8376 17.8361 11.592C17.7341 11.3464 17.706 11.0763 17.7552 10.8149C17.8043 10.5536 17.9286 10.3122 18.1128 10.1204L20.4855 7.74409ZM1.34018 16.9415H8.91624C9.18281 16.9458 9.4423 17.028 9.66277 17.178C9.88324 17.3279 10.0551 17.539 10.1572 17.7853C10.2592 18.0316 10.2871 18.3024 10.2373 18.5643C10.1875 18.8263 10.0623 19.0679 9.87693 19.2596L7.51453 21.6188C8.72103 22.7472 10.2009 23.5414 11.8082 23.923C13.4154 24.3045 15.0943 24.2602 16.6792 23.7945C18.2641 23.3288 19.7001 22.4577 20.8455 21.2672C21.9908 20.0768 22.8059 18.6082 23.2103 17.0064C23.2473 16.8599 23.3317 16.7298 23.4505 16.6364C23.5692 16.543 23.7156 16.4916 23.8667 16.4902H27.1077C27.2085 16.4886 27.3084 16.5093 27.4003 16.5509C27.4921 16.5925 27.5736 16.6539 27.639 16.7307C27.7043 16.8075 27.7519 16.8978 27.7782 16.9951C27.8046 17.0924 27.8091 17.1944 27.7914 17.2936C27.3215 19.7717 26.1917 22.0771 24.5212 23.9667C22.8507 25.8563 20.7014 27.2602 18.2998 28.0303C15.8982 28.8005 13.3334 28.9083 10.8756 28.3426C8.41787 27.7768 6.15828 26.5583 4.33505 24.8156L2.31454 26.8329C2.12294 27.017 1.8819 27.1412 1.62085 27.1905C1.35981 27.2398 1.09005 27.2119 0.844559 27.1104C0.59907 27.0089 0.388469 26.838 0.238486 26.6187C0.0885027 26.3994 0.00563247 26.1412 0 25.8756V18.3023C0.00260067 17.946 0.14411 17.6048 0.394402 17.3513C0.644694 17.0978 0.984015 16.952 1.34018 16.9449V16.9415Z",fill:"currentColor"})),le=h("svg",{class:"icon icon-tabler icon-tabler-circle-plus","aria-labelledby":"srContribute",width:"28",height:"24",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M26.6002 11.3254H22.3817V7.10655C22.3817 6.96109 22.3239 6.82158 22.2211 6.71873C22.1182 6.61588 21.9787 6.55811 21.8333 6.55811H19.2938C19.1483 6.55811 19.0088 6.61588 18.906 6.71873C18.8031 6.82158 18.7454 6.96109 18.7454 7.10655V11.3254H14.5269C14.3815 11.3254 14.242 11.3831 14.1391 11.486C14.0363 11.5888 13.9785 11.7283 13.9785 11.8738V14.4304C13.9785 14.5758 14.0363 14.7153 14.1391 14.8182C14.242 14.9211 14.3815 14.9788 14.5269 14.9788H18.7454V19.1976C18.7454 19.3431 18.8031 19.4826 18.906 19.5854C19.0088 19.6883 19.1483 19.7461 19.2938 19.7461H21.8502C21.9956 19.7461 22.1351 19.6883 22.2379 19.5854C22.3408 19.4826 22.3986 19.3431 22.3986 19.1976V14.9788H26.617C26.7625 14.9788 26.902 14.9211 27.0048 14.8182C27.1076 14.7153 27.1654 14.5758 27.1654 14.4304V11.8738C27.1655 11.8003 27.1507 11.7276 27.1221 11.6599C27.0935 11.5923 27.0516 11.5311 26.9989 11.4799C26.9462 11.4287 26.8837 11.3887 26.8152 11.3621C26.7467 11.3356 26.6736 11.3231 26.6002 11.3254Z",fill:"currentColor"}),h("path",{d:"M20.5722 25.0283C27.1305 25.0283 32.4471 19.7113 32.4471 13.1523C32.4471 6.59343 27.1305 1.27637 20.5722 1.27637C14.0139 1.27637 8.69727 6.59343 8.69727 13.1523C8.69727 19.7113 14.0139 25.0283 20.5722 25.0283Z",stroke:"currentColor","stroke-width":"2","stroke-miterlimit":"10"}),h("path",{d:"M39.3186 22.0245C38.9062 21.6746 38.383 21.4825 37.8422 21.4825C37.3013 21.4825 36.7781 21.6746 36.3657 22.0245L29.9916 27.1251C29.207 27.7516 28.2325 28.0923 27.2285 28.0912H19.0785C18.7853 28.0912 18.5042 27.9747 18.297 27.7674C18.0897 27.5601 17.9732 27.279 17.9732 26.9859C17.9732 26.6927 18.0897 26.4116 18.297 26.2043C18.5042 25.997 18.7853 25.8805 19.0785 25.8805H24.4823C25.0196 25.8916 25.5437 25.714 25.9637 25.3788C26.3837 25.0435 26.673 24.5717 26.7814 24.0453C26.8354 23.728 26.8195 23.4027 26.7348 23.0922C26.6501 22.7816 26.4986 22.4934 26.2909 22.2475C26.0832 22.0016 25.8243 21.804 25.5323 21.6686C25.2403 21.5332 24.9223 21.4631 24.6004 21.4634H13.5607C11.6981 21.4632 9.89231 22.1054 8.44798 23.2817L5.24617 25.8805H1.42425C1.13186 25.8816 0.851805 25.9986 0.645445 26.2057C0.439085 26.4129 0.32324 26.6934 0.323242 26.9859V33.6094C0.32324 33.9019 0.439085 34.1824 0.645445 34.3895C0.851805 34.5967 1.13186 34.7137 1.42425 34.7148H26.0431C27.0458 34.7156 28.0189 34.3748 28.802 33.7486L39.2385 25.3996C39.4887 25.1979 39.6919 24.9442 39.8341 24.6559C39.9762 24.3677 40.0538 24.0519 40.0614 23.7306C40.0691 23.4093 40.0065 23.0903 39.8783 22.7956C39.75 22.5009 39.559 22.2378 39.3186 22.0245Z",fill:"currentColor"})),ce=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),de=(h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h("polyline",{points:"20 6 9 17 4 12"})),h("svg",{style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"auto",height:"auto",viewBox:"0 0 710.000000 115.000000",preserveAspectRatio:"xMidYMid meet"},h("g",{transform:"translate(0.000000,115.000000) scale(0.100000,-0.100000)",fill:"var(--ld-text)",stroke:"none"},h("path",{d:"M895 1134 c-48 -18 -102 -67 -121 -111 -9 -21 -14 -70 -14 -139 l0 -106 -47 -52 c-25 -28 -60 -80 -77 -116 -29 -61 -31 -73 -31 -176 0 -107 1 -112 37 -185 46 -93 112 -158 206 -202 63 -30 74 -32 177 -32 103 0 114 2 177 32 94 44 160 109 206 202 36 73 37 78 37 185 0 105 -2 115 -32 177 -18 37 -53 89 -78 117 l-45 50 0 103 c0 79 -5 114 -19 145 -22 49 -78 97 -130 113 -53 15 -198 13 -246 -5z m246 -100 c17 -8 37 -30 45 -49 15 -36 20 -155 7 -155 -5 0 -30 7 -57 15 -27 8 -77 15 -111 15 -34 0 -84 -7 -111 -15 -27 -8 -52 -15 -56 -15 -5 0 -8 28 -8 63 0 72 22 125 60 144 37 19 194 17 231 -3z m-258 -335 c-13 -33 -30 -99 -36 -145 l-11 -84 -79 0 -79 0 7 37 c16 88 92 190 172 232 21 11 41 20 44 21 4 0 -4 -27 -18 -61z m184 22 c28 -42 50 -112 59 -191 l7 -60 -107 0 -106 0 0 33 c0 43 26 151 46 190 39 76 64 83 101 28z m121 20 c81 -41 161 -147 177 -234 l7 -37 -79 0 -79 0 -12 85 c-6 46 -22 112 -35 145 -14 33 -23 60 -20 60 2 0 21 -9 41 -19z m-344 -412 c8 -65 42 -186 58 -207 21 -25 -17 -12 -70 24 -57 38 -107 100 -134 167 -30 75 -28 77 61 77 l78 0 7 -61z m282 7 c-13 -114 -63 -226 -101 -226 -38 0 -88 111 -101 220 l-7 60 108 0 108 0 -7 -54z m239 22 c-9 -41 -39 -103 -72 -146 -25 -33 -119 -102 -139 -102 -7 0 -3 22 13 60 13 33 29 96 35 140 l12 80 79 0 79 0 -7 -32z"}),h("path",{d:"M1850 835 c-186 -53 -300 -204 -302 -401 -2 -183 94 -328 262 -396 45 -18 75 -22 165 -22 130 0 197 21 267 84 l43 39 -36 36 -36 37 -47 -36 c-101 -77 -253 -80 -368 -7 -219 139 -164 494 87 562 104 29 233 3 298 -58 l27 -27 35 34 c19 19 35 39 35 44 -1 18 -85 76 -142 98 -71 27 -213 34 -288 13z"}),h("path",{d:"M4445 836 c-261 -64 -392 -344 -276 -592 99 -211 375 -296 604 -185 213 103 286 390 155 603 -90 146 -295 220 -483 174z m250 -121 c71 -31 120 -77 152 -143 24 -49 28 -69 28 -142 0 -73 -4 -93 -28 -142 -51 -105 -154 -169 -274 -170 -84 0 -135 13 -195 51 -128 82 -174 261 -104 405 72 148 264 212 421 141z"}),h("path",{d:"M0 430 l0 -410 280 0 280 0 0 50 0 50 -220 0 -220 0 0 360 0 360 -60 0 -60 0 0 -410z"}),h("path",{d:"M2430 430 l0 -410 60 0 60 0 0 108 0 108 75 74 c45 45 78 70 83 65 5 -6 75 -88 156 -182 l148 -173 64 0 c35 0 64 3 64 6 0 3 -81 104 -181 225 l-181 220 129 135 c70 74 148 157 171 185 l44 49 -64 0 -63 1 -222 -228 -222 -228 -1 228 0 227 -60 0 -60 0 0 -410z"}),h("path",{d:"M3250 430 l0 -412 233 4 c211 3 237 6 288 26 174 69 261 197 261 382 0 185 -87 313 -261 382 -51 20 -77 23 -288 26 l-233 4 0 -412z m506 270 c46 -24 79 -49 101 -78 69 -91 81 -229 29 -337 -31 -63 -70 -98 -146 -134 -50 -23 -70 -25 -212 -29 l-158 -4 0 312 0 312 159 -4 c159 -4 160 -4 227 -38z"}),h("path",{d:"M5042 828 c3 -7 65 -192 137 -410 l133 -398 63 0 63 0 70 202 c38 112 87 256 108 321 21 64 41 117 44 117 3 0 55 -144 115 -320 l108 -320 63 0 62 0 133 398 c72 218 134 403 137 410 3 10 -9 12 -53 10 l-58 -3 -110 -329 c-68 -205 -113 -324 -117 -315 -5 8 -56 157 -115 332 l-108 317 -52 0 -53 0 -30 -82 c-16 -46 -66 -192 -112 -326 -45 -133 -86 -242 -89 -242 -4 0 -54 145 -112 322 l-105 323 -63 3 c-49 2 -62 0 -59 -10z"}),h("path",{d:"M6390 430 l0 -410 60 0 60 0 2 302 3 302 243 -302 243 -302 49 0 50 0 0 410 0 410 -60 0 -60 0 -2 -302 -3 -302 -243 302 -243 302 -49 0 -50 0 0 -410z"})))),ue=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.76 45.17"},h("defs",null,h("style",null,".cls-1 {\n          fill: #828282;\n          fill-rule: evenodd;\n        }")),h("title",null,"Asset 2"),h("g",{id:"Layer_2","data-name":"Layer 2"},h("g",{id:"Layer_1-2","data-name":"Layer 1"},h("path",{class:"cls-1",d:"M11,0,7.47,3.51l6.9,6.9h-1a14.93,14.93,0,0,0,1.62,29.78H44.15l5,5,3.51-3.51ZM59.76,27.74A12.39,12.39,0,0,0,48.18,15.39,18.58,18.58,0,0,0,20.79,2.76L24.5,6.47a13.47,13.47,0,0,1,5.38-1.14A13.69,13.69,0,0,1,43.58,19v1.25h3.73a7.46,7.46,0,0,1,4.46,13.45l3.51,3.51A12.39,12.39,0,0,0,59.76,27.74ZM5,25.25a10,10,0,0,0,10,10H39.17L19.25,15.29H14.94A10,10,0,0,0,5,25.25Z"})))),he=h("svg",{viewBox:"25 25 50 50"},h("circle",{cx:"50",cy:"50",r:"20"})),pe=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),fe=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"})),ge=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"20"},h("g",null,h("path",{d:"M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"}),h("path",{d:"M0,0h24v24H0V0z",fill:"none"}))),me=h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"})),be=h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"})),we=h("svg",{width:"22",height:"14",viewBox:"0 0 22 14",fill:"currentColor",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},h("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.5 2.33333V0H21.5V2.33333H0.5ZM0.5 8.16667H21.5V5.83333H0.5V8.16667ZM0.5 14H21.5V11.6667H0.5V14Z",fill:"currentColor","fill-opacity":"1"})),ve=(h("svg",{width:"46",height:"107",viewBox:"0 0 46 107",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("g",{filter:"url(#filter0_d)"},h("path",{d:"M48 99V0L18.0997 11.176C14.745 12.43 11.7528 14.4949 9.39021 17.1866C5.91586 21.1449 4 26.2318 4 31.4987V69.4519C4 72.4131 4.74691 75.3265 6.17162 77.9224C8.13247 81.4953 11.2721 84.2772 15.0551 85.7936L48 99Z",fill:"currentColor"})),h("defs",null,h("filter",{id:"filter0_d",x:"0",y:"0",width:"52",height:"107",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},h("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),h("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),h("feOffset",{dy:"4"}),h("feGaussianBlur",{stdDeviation:"2"}),h("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),h("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),h("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))),h("svg",{width:"64",height:"104",viewBox:"0 0 64 104",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("g",{filter:"url(#filter0_d)"},h("path",{d:"M4 96V0L43.7854 11.3302C46.9295 12.2256 49.8387 13.8004 52.3075 15.9433C57.1936 20.1847 60 26.3368 60 32.8071V66.1812C60 69.785 58.8666 73.2976 56.7603 76.2217C54.565 79.2694 51.4314 81.5136 47.8392 82.6107L4 96Z",fill:"currentColor"})),h("defs",null,h("filter",{id:"filter0_d",x:"0",y:"0",width:"64",height:"104",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},h("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),h("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),h("feOffset",{dy:"4"}),h("feGaussianBlur",{stdDeviation:"2"}),h("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),h("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),h("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))),[" ",h("svg",{width:"33",height:"30",viewBox:"0 0 33 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M2.95234 13.7899C4.58287 13.7899 5.90468 12.4681 5.90468 10.8376C5.90468 9.20706 4.58287 7.88525 2.95234 7.88525C1.32181 7.88525 0 9.20706 0 10.8376C0 12.4681 1.32181 13.7899 2.95234 13.7899Z",fill:"#F2994A"}),h("path",{d:"M2.95432 5.89301C4.58163 5.89301 5.90082 4.57381 5.90082 2.9465C5.90082 1.3192 4.58163 0 2.95432 0C1.32701 0 0.0078125 1.3192 0.0078125 2.9465C0.0078125 4.57381 1.32701 5.89301 2.95432 5.89301Z",fill:"#EB5757"}),h("path",{d:"M2.95234 29.6054C4.58287 29.6054 5.90468 28.2836 5.90468 26.653C5.90468 25.0225 4.58287 23.7007 2.95234 23.7007C1.32181 23.7007 0 25.0225 0 26.653C0 28.2836 1.32181 29.6054 2.95234 29.6054Z",fill:"#78AEFC"}),h("path",{d:"M2.95334 21.7075C4.58065 21.7075 5.89984 20.3883 5.89984 18.761C5.89984 17.1336 4.58065 15.8145 2.95334 15.8145C1.32603 15.8145 0.00683594 17.1336 0.00683594 18.761C0.00683594 20.3883 1.32603 21.7075 2.95334 21.7075Z",fill:"#6FCF97"}),h("path",{d:"M28.4379 4.21792H10.686C10.5167 4.2261 10.3476 4.19983 10.1888 4.14069C10.03 4.08156 9.88488 3.9908 9.76221 3.87392C9.63954 3.75703 9.54188 3.61646 9.47516 3.46071C9.40843 3.30496 9.37402 3.13728 9.37402 2.96784C9.37402 2.7984 9.40843 2.63073 9.47516 2.47498C9.54188 2.31923 9.63954 2.17865 9.76221 2.06177C9.88488 1.94488 10.03 1.85413 10.1888 1.79499C10.3476 1.73586 10.5167 1.70959 10.686 1.71777H28.4379C28.759 1.73328 29.0618 1.87176 29.2836 2.1045C29.5054 2.33723 29.629 2.64637 29.629 2.96784C29.629 3.28931 29.5054 3.59846 29.2836 3.83119C29.0618 4.06393 28.759 4.2024 28.4379 4.21792Z",fill:"currentColor"}),h("path",{d:"M25.0217 12.0514H10.686C10.5167 12.0596 10.3476 12.0333 10.1888 11.9742C10.03 11.9151 9.88488 11.8243 9.76221 11.7074C9.63954 11.5905 9.54188 11.45 9.47516 11.2942C9.40843 11.1385 9.37402 10.9708 9.37402 10.8013C9.37402 10.6319 9.40843 10.4642 9.47516 10.3085C9.54188 10.1527 9.63954 10.0121 9.76221 9.89526C9.88488 9.77838 10.03 9.68762 10.1888 9.62849C10.3476 9.56936 10.5167 9.54309 10.686 9.55126H25.0217C25.3428 9.56678 25.6456 9.70526 25.8674 9.93799C26.0892 10.1707 26.2129 10.4799 26.2129 10.8013C26.2129 11.1228 26.0892 11.432 25.8674 11.6647C25.6456 11.8974 25.3428 12.0359 25.0217 12.0514Z",fill:"currentColor"}),h("path",{d:"M31.6878 19.9689H10.683C10.5138 19.9771 10.3447 19.9508 10.1859 19.8917C10.0271 19.8325 9.88195 19.7418 9.75928 19.6249C9.63661 19.508 9.53895 19.3674 9.47223 19.2117C9.4055 19.0559 9.37109 18.8883 9.37109 18.7188C9.37109 18.5494 9.4055 18.3817 9.47223 18.226C9.53895 18.0702 9.63661 17.9296 9.75928 17.8127C9.88195 17.6959 10.0271 17.6051 10.1859 17.546C10.3447 17.4868 10.5138 17.4606 10.683 17.4687H31.6878C31.8571 17.4606 32.0262 17.4868 32.185 17.546C32.3438 17.6051 32.4889 17.6959 32.6116 17.8127C32.7342 17.9296 32.8319 18.0702 32.8986 18.226C32.9654 18.3817 32.9998 18.5494 32.9998 18.7188C32.9998 18.8883 32.9654 19.0559 32.8986 19.2117C32.8319 19.3674 32.7342 19.508 32.6116 19.6249C32.4889 19.7418 32.3438 19.8325 32.185 19.8917C32.0262 19.9508 31.8571 19.9771 31.6878 19.9689Z",fill:"currentColor"}),h("path",{d:"M27.271 27.8864H10.686C10.5167 27.8946 10.3476 27.8683 10.1888 27.8092C10.03 27.75 9.88488 27.6593 9.76221 27.5424C9.63954 27.4255 9.54188 27.2849 9.47516 27.1292C9.40843 26.9734 9.37402 26.8057 9.37402 26.6363C9.37402 26.4669 9.40843 26.2992 9.47516 26.1434C9.54188 25.9877 9.63954 25.8471 9.76221 25.7302C9.88488 25.6133 10.03 25.5226 10.1888 25.4635C10.3476 25.4043 10.5167 25.378 10.686 25.3862H27.271C27.5921 25.4017 27.8949 25.5402 28.1167 25.773C28.3384 26.0057 28.4621 26.3148 28.4621 26.6363C28.4621 26.9578 28.3384 27.2669 28.1167 27.4996C27.8949 27.7324 27.5921 27.8709 27.271 27.8864Z",fill:"currentColor"}))]),Ce=[" ",h("svg",{width:"19",height:"15",viewBox:"0 0 19 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M4.22683 6.56174L14.9585 14.8559C14.7667 14.9505 14.5556 14.9998 14.3417 15H4.0297C3.65643 15 3.29844 14.8517 3.0345 14.5878C2.77055 14.3238 2.62227 13.9659 2.62227 13.5926V7.96708C2.62227 7.78235 2.65869 7.59943 2.72945 7.42879C2.80021 7.25815 2.90391 7.10314 3.03463 6.97262C3.16535 6.8421 3.32052 6.73863 3.49127 6.66813C3.66202 6.59763 3.84498 6.56146 4.0297 6.56174H4.22683ZM18.4029 13.9678L17.8349 14.699C17.7976 14.7469 17.7512 14.787 17.6984 14.817C17.6456 14.8469 17.5875 14.8662 17.5272 14.8737C17.467 14.8812 17.4059 14.8767 17.3474 14.8605C17.2889 14.8444 17.2341 14.8169 17.1863 14.7796L16.6606 14.3726C16.6413 14.3462 16.6185 14.3227 16.5928 14.3026L15.7449 13.6498L12.93 11.473L5.49013 5.70757V5.71813L4.73767 5.13735L3.39806 4.10087C3.37171 4.08087 3.34238 4.06514 3.31115 4.05425L0.178338 1.63152C0.0814905 1.55582 0.0186169 1.44478 0.00351715 1.32279C-0.0115826 1.2008 0.0223233 1.07781 0.0977905 0.980781L0.66585 0.25164C0.702989 0.203595 0.74923 0.163295 0.801937 0.133135C0.854643 0.102975 0.91278 0.0835265 0.973018 0.0758491C1.03326 0.0681716 1.09441 0.072448 1.153 0.0884241C1.21159 0.1044 1.26645 0.131751 1.31446 0.168945L4.01274 2.25468V2.24195L4.98354 2.99231C5.32847 1.99803 6.01455 1.15814 6.91998 0.621696C7.82541 0.0852517 8.89163 -0.113044 9.92938 0.0620322C10.9671 0.237108 11.9093 0.774211 12.5886 1.57801C13.2679 2.38182 13.6405 3.4003 13.6401 4.45271V6.57234H14.3438C14.5286 6.57206 14.7115 6.60824 14.8823 6.67874C15.053 6.74924 15.2082 6.85271 15.3389 6.98323C15.4696 7.11375 15.5733 7.26876 15.6441 7.43939C15.7148 7.61003 15.7513 7.79296 15.7513 7.97769V11.3415L18.3224 13.3298C18.416 13.4048 18.4768 13.5134 18.4918 13.6324C18.5069 13.7515 18.475 13.8718 18.4029 13.9678ZM9.58738 6.56174H11.2958V4.4421C11.3238 4.14814 11.29 3.85159 11.1967 3.57143C11.1034 3.29127 10.9526 3.0337 10.7539 2.81522C10.5553 2.59675 10.3131 2.4222 10.0431 2.30276C9.77303 2.18331 9.481 2.12163 9.18571 2.12163C8.89042 2.12163 8.59839 2.18331 8.32833 2.30276C8.05828 2.4222 7.81616 2.59675 7.6175 2.81522C7.41884 3.0337 7.26801 3.29127 7.1747 3.57143C7.08138 3.85159 7.04763 4.14814 7.07561 4.4421V4.60532L9.58738 6.56174Z",fill:"#CCCCCC"}),h("path",{d:"M4.22683 6.56174L14.9585 14.8559C14.7667 14.9505 14.5556 14.9998 14.3417 15H4.0297C3.65643 15 3.29844 14.8517 3.0345 14.5878C2.77055 14.3238 2.62227 13.9659 2.62227 13.5926V7.96708C2.62227 7.78235 2.65869 7.59943 2.72945 7.42879C2.80021 7.25815 2.90391 7.10314 3.03463 6.97262C3.16535 6.8421 3.32052 6.73863 3.49127 6.66813C3.66202 6.59763 3.84498 6.56146 4.0297 6.56174H4.22683ZM18.4029 13.9678L17.8349 14.699C17.7976 14.7469 17.7512 14.787 17.6984 14.817C17.6456 14.8469 17.5875 14.8662 17.5272 14.8737C17.467 14.8812 17.4059 14.8767 17.3474 14.8605C17.2889 14.8444 17.2341 14.8169 17.1863 14.7796L16.6606 14.3726C16.6413 14.3462 16.6185 14.3227 16.5928 14.3026L15.7449 13.6498L12.93 11.473L5.49013 5.70757V5.71813L4.73767 5.13735L3.39806 4.10087C3.37171 4.08087 3.34238 4.06514 3.31115 4.05425L0.178338 1.63152C0.0814905 1.55582 0.0186169 1.44478 0.00351715 1.32279C-0.0115826 1.2008 0.0223233 1.07781 0.0977905 0.980781L0.66585 0.25164C0.702989 0.203595 0.74923 0.163295 0.801937 0.133135C0.854643 0.102975 0.91278 0.0835265 0.973018 0.0758491C1.03326 0.0681716 1.09441 0.072448 1.153 0.0884241C1.21159 0.1044 1.26645 0.131751 1.31446 0.168945L4.01274 2.25468V2.24195L4.98354 2.99231C5.32847 1.99803 6.01455 1.15814 6.91998 0.621696C7.82541 0.0852517 8.89163 -0.113044 9.92938 0.0620322C10.9671 0.237108 11.9093 0.774211 12.5886 1.57801C13.2679 2.38182 13.6405 3.4003 13.6401 4.45271V6.57234H14.3438C14.5286 6.57206 14.7115 6.60824 14.8823 6.67874C15.053 6.74924 15.2082 6.85271 15.3389 6.98323C15.4696 7.11375 15.5733 7.26876 15.6441 7.43939C15.7148 7.61003 15.7513 7.79296 15.7513 7.97769V11.3415L18.3224 13.3298C18.416 13.4048 18.4768 13.5134 18.4918 13.6324C18.5069 13.7515 18.475 13.8718 18.4029 13.9678ZM9.58738 6.56174H11.2958V4.4421C11.3238 4.14814 11.29 3.85159 11.1967 3.57143C11.1034 3.29127 10.9526 3.0337 10.7539 2.81522C10.5553 2.59675 10.3131 2.4222 10.0431 2.30276C9.77303 2.18331 9.481 2.12163 9.18571 2.12163C8.89042 2.12163 8.59839 2.18331 8.32833 2.30276C8.05828 2.4222 7.81616 2.59675 7.6175 2.81522C7.41884 3.0337 7.26801 3.29127 7.1747 3.57143C7.08138 3.85159 7.04763 4.14814 7.07561 4.4421V4.60532L9.58738 6.56174Z",fill:"#CCCCCC"}),h("path",{d:"M4.22683 6.56174L14.9585 14.8559C14.7667 14.9505 14.5556 14.9998 14.3417 15H4.0297C3.65643 15 3.29844 14.8517 3.0345 14.5878C2.77055 14.3238 2.62227 13.9659 2.62227 13.5926V7.96708C2.62227 7.78235 2.65869 7.59943 2.72945 7.42879C2.80021 7.25815 2.90391 7.10314 3.03463 6.97262C3.16535 6.8421 3.32052 6.73863 3.49127 6.66813C3.66202 6.59763 3.84498 6.56146 4.0297 6.56174H4.22683ZM18.4029 13.9678L17.8349 14.699C17.7976 14.7469 17.7512 14.787 17.6984 14.817C17.6456 14.8469 17.5875 14.8662 17.5272 14.8737C17.467 14.8812 17.4059 14.8767 17.3474 14.8605C17.2889 14.8444 17.2341 14.8169 17.1863 14.7796L16.6606 14.3726C16.6413 14.3462 16.6185 14.3227 16.5928 14.3026L15.7449 13.6498L12.93 11.473L5.49013 5.70757V5.71813L4.73767 5.13735L3.39806 4.10087C3.37171 4.08087 3.34238 4.06514 3.31115 4.05425L0.178338 1.63152C0.0814905 1.55582 0.0186169 1.44478 0.00351715 1.32279C-0.0115826 1.2008 0.0223233 1.07781 0.0977905 0.980781L0.66585 0.25164C0.702989 0.203595 0.74923 0.163295 0.801937 0.133135C0.854643 0.102975 0.91278 0.0835265 0.973018 0.0758491C1.03326 0.0681716 1.09441 0.072448 1.153 0.0884241C1.21159 0.1044 1.26645 0.131751 1.31446 0.168945L4.01274 2.25468V2.24195L4.98354 2.99231C5.32847 1.99803 6.01455 1.15814 6.91998 0.621696C7.82541 0.0852517 8.89163 -0.113044 9.92938 0.0620322C10.9671 0.237108 11.9093 0.774211 12.5886 1.57801C13.2679 2.38182 13.6405 3.4003 13.6401 4.45271V6.57234H14.3438C14.5286 6.57206 14.7115 6.60824 14.8823 6.67874C15.053 6.74924 15.2082 6.85271 15.3389 6.98323C15.4696 7.11375 15.5733 7.26876 15.6441 7.43939C15.7148 7.61003 15.7513 7.79296 15.7513 7.97769V11.3415L18.3224 13.3298C18.416 13.4048 18.4768 13.5134 18.4918 13.6324C18.5069 13.7515 18.475 13.8718 18.4029 13.9678ZM9.58738 6.56174H11.2958V4.4421C11.3238 4.14814 11.29 3.85159 11.1967 3.57143C11.1034 3.29127 10.9526 3.0337 10.7539 2.81522C10.5553 2.59675 10.3131 2.4222 10.0431 2.30276C9.77303 2.18331 9.481 2.12163 9.18571 2.12163C8.89042 2.12163 8.59839 2.18331 8.32833 2.30276C8.05828 2.4222 7.81616 2.59675 7.6175 2.81522C7.41884 3.0337 7.26801 3.29127 7.1747 3.57143C7.08138 3.85159 7.04763 4.14814 7.07561 4.4421V4.60532L9.58738 6.56174Z",fill:"#CCCCCC"}))],xe=[" ",h("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M11.7185 6.5609H11.0147V4.45167C11.0147 3.86707 10.8995 3.28818 10.6758 2.74808C10.4521 2.20798 10.1242 1.71726 9.71083 1.30389C9.29745 0.890513 8.80671 0.562602 8.26661 0.338885C7.7265 0.115168 7.14762 0 6.56302 0C5.97842 0 5.39955 0.115168 4.85945 0.338885C4.31935 0.562602 3.82859 0.890513 3.41522 1.30389C3.00184 1.71726 2.67394 2.20798 2.45023 2.74808C2.22651 3.28818 2.11135 3.86707 2.11135 4.45167V6.5609H1.40756C1.03462 6.5609 0.67692 6.70893 0.413009 6.97245C0.149099 7.23596 0.000561664 7.59344 0 7.96638V13.5924C0 13.9658 0.148288 14.3238 0.412259 14.5877C0.67623 14.8517 1.03425 15 1.40756 15H11.7227C11.9075 15 12.0904 14.9636 12.2611 14.8928C12.4317 14.8221 12.5867 14.7184 12.7173 14.5876C12.8478 14.4569 12.9513 14.3017 13.0218 14.1309C13.0923 13.9602 13.1285 13.7772 13.1282 13.5924V7.96638C13.1282 7.78146 13.0917 7.59831 13.0208 7.42752C12.9499 7.25672 12.846 7.10161 12.715 6.97105C12.5841 6.84048 12.4286 6.73706 12.2576 6.66668C12.0866 6.5963 11.9034 6.56034 11.7185 6.5609ZM8.67014 6.5609H4.45167V4.45167C4.42208 4.15691 4.4546 3.85922 4.54713 3.5778C4.63966 3.29639 4.79014 3.03748 4.98887 2.8178C5.18761 2.59811 5.43019 2.42255 5.70096 2.30238C5.97172 2.1822 6.26466 2.1201 6.5609 2.1201C6.85714 2.1201 7.15009 2.1822 7.42086 2.30238C7.69162 2.42255 7.93419 2.59811 8.13293 2.8178C8.33166 3.03748 8.48215 3.29639 8.57468 3.5778C8.66721 3.85922 8.69973 4.15691 8.67014 4.45167V6.5609Z",fill:"currentColor"}))],_e=h("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M15.0663 7.10837H14.3906C14.0417 7.10822 13.7008 7.00336 13.4108 6.80701C13.1208 6.61066 12.8949 6.33163 12.7616 6.00527C12.6282 5.67891 12.5935 5.31988 12.6617 4.97354C12.73 4.62719 12.8982 4.30908 13.145 4.0595L13.6157 3.58066C13.7662 3.41049 13.8467 3.18845 13.8405 2.96013C13.8344 2.73181 13.7422 2.5145 13.5828 2.35285C13.4234 2.1912 13.209 2.09746 12.9835 2.09085C12.7579 2.08424 12.5385 2.16528 12.3701 2.31733L11.8971 2.79623C11.6504 3.04625 11.3361 3.21651 10.9937 3.28554C10.6514 3.35456 10.2966 3.3192 9.97411 3.18393C9.65166 3.04866 9.37609 2.81957 9.18231 2.52566C8.98854 2.23175 8.88526 1.88626 8.88556 1.5329V0.848789C8.87413 0.619818 8.77622 0.404043 8.6121 0.246074C8.44798 0.0881059 8.23019 0 8.00373 0C7.77727 0 7.55946 0.0881059 7.39534 0.246074C7.23121 0.404043 7.13331 0.619818 7.12188 0.848789V1.5329C7.12218 1.88626 7.0189 2.23175 6.82513 2.52566C6.63135 2.81957 6.3558 3.04866 6.03334 3.18393C5.71088 3.3192 5.35603 3.35456 5.01371 3.28554C4.67139 3.21651 4.357 3.04625 4.11034 2.79623L3.63732 2.31733C3.46988 2.1598 3.24862 2.07414 3.02007 2.07838C2.79153 2.08262 2.57352 2.17641 2.41189 2.34004C2.25026 2.50368 2.15761 2.72441 2.15342 2.95579C2.14924 3.18716 2.23384 3.41114 2.38945 3.58066L2.86247 4.0595C3.10929 4.30908 3.27746 4.62719 3.34571 4.97354C3.41396 5.31988 3.37922 5.67891 3.24588 6.00527C3.11255 6.33163 2.88661 6.61066 2.59664 6.80701C2.30668 7.00336 1.96571 7.10822 1.61685 7.10837H0.941114C0.821947 7.10041 0.702421 7.11699 0.589771 7.15714C0.477121 7.19729 0.373689 7.26019 0.285728 7.34197C0.197767 7.42376 0.127107 7.5227 0.0780236 7.63292C0.0289404 7.74314 0.00244941 7.86233 0.00016196 7.98321C-0.00212549 8.1041 0.0198383 8.22419 0.0647155 8.33624C0.109593 8.44828 0.176454 8.54996 0.261256 8.63509C0.346059 8.72022 0.44704 8.78702 0.558089 8.8315C0.669137 8.87599 0.787947 8.89725 0.907328 8.89391H1.60784C1.95689 8.89361 2.29817 8.99815 2.58848 9.19432C2.8788 9.3905 3.10509 9.66945 3.2387 9.9959C3.37232 10.3224 3.40724 10.6816 3.33906 11.0282C3.27088 11.3747 3.10267 11.693 2.85571 11.9427L2.38269 12.4216C2.23251 12.5921 2.15246 12.8142 2.15899 13.0425C2.16552 13.2709 2.25813 13.488 2.4178 13.6493C2.57748 13.8107 2.7921 13.9041 3.01763 13.9103C3.24315 13.9165 3.46247 13.835 3.63056 13.6827L4.10358 13.2038C4.35024 12.9538 4.66462 12.7834 5.00694 12.7144C5.34926 12.6454 5.70412 12.6808 6.02658 12.8161C6.34903 12.9513 6.6246 13.1804 6.81838 13.4743C7.01215 13.7682 7.11543 14.1137 7.11513 14.4671V15.1512C7.12656 15.3802 7.22445 15.596 7.38857 15.7539C7.5527 15.9119 7.7705 16 7.99696 16C8.22342 16 8.44123 15.9119 8.60535 15.7539C8.76947 15.596 8.86738 15.3802 8.87881 15.1512V14.4671C8.87958 14.1142 8.98349 13.7694 9.17744 13.4762C9.3714 13.183 9.64672 12.9545 9.96874 12.8194C10.2908 12.6843 10.6451 12.6487 10.987 12.7171C11.329 12.7855 11.6433 12.9549 11.8904 13.2038L12.3634 13.6827C12.5285 13.8499 12.7526 13.9438 12.9862 13.9438C13.2198 13.9438 13.4438 13.8499 13.609 13.6827C13.7742 13.5154 13.867 13.2886 13.867 13.0521C13.867 12.8156 13.7742 12.5888 13.609 12.4216L13.136 11.9427C12.889 11.693 12.7208 11.3747 12.6526 11.0282C12.5844 10.6816 12.6194 10.3224 12.753 9.9959C12.8866 9.66945 13.1129 9.3905 13.4032 9.19432C13.6935 8.99815 14.0348 8.89361 14.3838 8.89391H15.0596C15.1788 8.90178 15.2983 8.88507 15.411 8.84481C15.5236 8.80455 15.627 8.74154 15.7149 8.65964C15.8029 8.57774 15.8734 8.47867 15.9224 8.36836C15.9714 8.25805 15.9977 8.13877 15.9999 8.01784C16.002 7.89692 15.9799 7.77684 15.9348 7.66482C15.8898 7.55281 15.8228 7.45122 15.7378 7.36619C15.6528 7.28117 15.5517 7.21448 15.4406 7.17017C15.3294 7.12585 15.2105 7.10482 15.0911 7.10837C15.0807 7.10609 15.07 7.10609 15.0596 7.10837H15.0663ZM7.01827 8.50398C6.7238 8.50398 6.43593 8.41557 6.19108 8.24994C5.94624 8.08432 5.75541 7.84889 5.64272 7.57346C5.53003 7.29804 5.50054 6.99496 5.55799 6.70257C5.61544 6.41018 5.75724 6.14158 5.96547 5.93078C6.17369 5.71998 6.43899 5.57646 6.72781 5.5183C7.01662 5.46014 7.31598 5.48995 7.58804 5.60403C7.8601 5.71812 8.09262 5.91133 8.25622 6.1592C8.41982 6.40708 8.50715 6.69852 8.50715 6.99664C8.50715 7.3964 8.35028 7.77982 8.07106 8.06249C7.79184 8.34517 7.41315 8.50398 7.01827 8.50398ZM9.49599 10.2621C9.34853 10.2621 9.20438 10.2179 9.08177 10.1349C8.95916 10.052 8.8636 9.93407 8.80717 9.79615C8.75074 9.65823 8.73598 9.50648 8.76474 9.36006C8.79351 9.21364 8.86452 9.07914 8.96879 8.97358C9.07306 8.86802 9.20591 8.79616 9.35053 8.76703C9.49516 8.73791 9.64506 8.75283 9.7813 8.80996C9.91753 8.86709 10.034 8.96386 10.1159 9.08799C10.1978 9.21211 10.2416 9.35803 10.2416 9.50732C10.2416 9.70711 10.1633 9.89873 10.024 10.0402C9.88464 10.1817 9.69559 10.2615 9.49824 10.2621H9.49599Z",fill:"currentColor"})),ye=[" ",h("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.57028 7.2737H2.89689C2.66119 7.2737 2.43514 7.36948 2.26847 7.53995C2.10181 7.71042 2.00818 7.94164 2.00818 8.18272C2.00818 8.4238 2.10181 8.65502 2.26847 8.82549C2.43514 8.99596 2.66119 9.09169 2.89689 9.09169H3.57028C3.92152 9.09254 4.26466 9.1997 4.55649 9.39963C4.84831 9.59956 5.07578 9.88335 5.21023 10.2153C5.34467 10.5471 5.38009 10.9123 5.31203 11.2647C5.24397 11.6172 5.07547 11.9412 4.82775 12.1958L4.35133 12.6832C4.1876 12.8491 4.09332 13.0736 4.08838 13.3093C4.08344 13.5451 4.16824 13.7735 4.32487 13.9465C4.4815 14.1195 4.69771 14.2234 4.92787 14.2364C5.15802 14.2494 5.38411 14.1705 5.55841 14.0162C5.57444 14.0021 5.59047 13.9834 5.60651 13.967L6.08293 13.4797C6.33151 13.2252 6.64832 13.0518 6.99328 12.9816C7.33823 12.9113 7.69582 12.9473 8.02076 13.085C8.3457 13.2227 8.62338 13.4559 8.81866 13.7551C9.01395 14.0543 9.11805 14.4061 9.11779 14.7659V15.4547C9.11779 15.6958 9.21143 15.9269 9.3781 16.0974C9.54476 16.2679 9.7708 16.3636 10.0065 16.3636C10.2422 16.3636 10.4682 16.2679 10.6349 16.0974C10.8016 15.9269 10.8952 15.6958 10.8952 15.4547V14.7659C10.8929 14.3889 11.0073 14.0208 11.2221 13.7144C11.4369 13.408 11.741 13.1791 12.0908 13.0604L4.44982 7.02072C4.18372 7.18324 3.8802 7.27051 3.57028 7.2737ZM19.812 14.6417L14.7065 10.6121C14.7669 10.1875 14.9755 9.79954 15.2938 9.52003C15.6121 9.24052 16.0186 9.08836 16.4381 9.09169H17.1115C17.3472 9.09169 17.5733 8.99596 17.7399 8.82549C17.9066 8.65502 18.0002 8.4238 18.0002 8.18272C18.0002 7.94164 17.9066 7.71042 17.7399 7.53995C17.5733 7.36948 17.3472 7.2737 17.1115 7.2737H16.4358C16.0843 7.2735 15.7407 7.1667 15.4486 6.96678C15.1564 6.76686 14.9287 6.48279 14.7944 6.15053C14.66 5.81827 14.625 5.45273 14.6938 5.10012C14.7625 4.74751 14.932 4.42365 15.1807 4.16953L15.6548 3.68228C15.8139 3.51045 15.9013 3.28188 15.8982 3.04522C15.8952 2.80857 15.8021 2.58249 15.6386 2.41498C15.4751 2.24747 15.2542 2.15174 15.0229 2.14821C14.7915 2.14469 14.5679 2.23365 14.3996 2.3961L13.9232 2.88336C13.6746 3.13788 13.3578 3.31128 13.0128 3.38154C12.6679 3.4518 12.3103 3.41578 11.9854 3.27807C11.6604 3.14036 11.3827 2.90711 11.1875 2.6079C10.9922 2.30869 10.8881 1.95694 10.8883 1.59718V0.913114C10.8883 0.672034 10.7947 0.44081 10.628 0.27034C10.4614 0.0998712 10.2353 0.00414837 9.99963 0.00414837C9.76393 0.00414837 9.53788 0.0998712 9.37122 0.27034C9.20456 0.44081 9.11093 0.672034 9.11093 0.913114V1.60187C9.11119 1.96163 9.00708 2.31338 8.8118 2.61259C8.61651 2.9118 8.33882 3.14505 8.01388 3.28276C7.68894 3.42047 7.33137 3.45649 6.98641 3.38623C6.64146 3.31597 6.32464 3.14257 6.07606 2.88805L5.59964 2.40079C5.43304 2.23083 5.20735 2.13534 4.97205 2.13534C4.73675 2.13534 4.51106 2.23083 4.34446 2.40079C4.34446 2.40079 4.34446 2.41246 4.34446 2.41715L1.42182 0.107216C1.31669 0.0240621 1.18359 -0.0130395 1.05175 0.00409117C0.919915 0.0212218 0.800112 0.0911592 0.718647 0.198559L0.104803 1.00446C0.0235055 1.11199 -0.0127469 1.24813 0.00400129 1.38298C0.0207495 1.51783 0.0891328 1.64038 0.194135 1.7237L18.5774 16.2488C18.6823 16.3323 18.8152 16.3697 18.947 16.3531C19.0788 16.3364 19.1988 16.2669 19.2806 16.1598L19.8945 15.3515C19.9349 15.2986 19.9648 15.238 19.9822 15.1732C19.9996 15.1084 20.0043 15.0407 19.996 14.974C19.9877 14.9074 19.9666 14.8431 19.9338 14.7848C19.901 14.7266 19.8573 14.6756 19.8051 14.6347L19.812 14.6417ZM10.4898 7.27135L8.52457 5.71813C8.67926 5.65892 8.84271 5.62725 9.00785 5.62444C9.40535 5.62506 9.78635 5.78698 10.0672 6.07469C10.3481 6.3624 10.5058 6.75233 10.5058 7.1589C10.5058 7.19873 10.4921 7.23855 10.4898 7.27135Z",fill:"#CCCCCC"}))],ke=h("svg",{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M11.4206 2.1649H10.8372V0.998047H9.67032V2.1649H3.83607V0.998047H2.66922V2.1649H2.08579C1.44403 2.1649 0.918945 2.68998 0.918945 3.33175V12.6665C0.918945 13.3083 1.44403 13.8334 2.08579 13.8334H11.4206C12.0624 13.8334 12.5874 13.3083 12.5874 12.6665V3.33175C12.5874 2.68998 12.0624 2.1649 11.4206 2.1649ZM11.4206 12.6665H2.08579V5.08202H11.4206V12.6665Z",fill:"currentColor"})),Me=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",d:"M9.61 22.116v-7.14h4.78v7.14h5.974v-9.521h3.584L12.001 1.885.052 12.594h3.584v9.52H9.61z"}))),De=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",d:"M14.153 5.566l-4.037 5.362 3.068 4.074-1.722 1.287c-1.82-2.413-4.845-6.434-4.845-6.434L.158 18.434h23.684L14.153 5.566z"}))),Le=h("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M216.329 17.722c-12.189 0-22.68 9.076-24.447 21.128L159.86 289.871a14.968 14.968 0 01-5.427 9.736l-31.619 25.601 55.48 56.361 55.972-55.972a22.97 22.97 0 006.771-16.347V42.429c0-13.623-11.084-24.707-24.708-24.707zM175.336 421.223l-96.549-98.081L5.827 379.4c-6.974 5.378-7.819 15.585-1.823 22.036l81.848 88.066c5.793 6.233 15.612 6.387 21.597.337zM389.186 325.208l-31.619-25.601a14.968 14.968 0 01-5.427-9.736L320.117 38.849c-1.766-12.051-12.258-21.128-24.447-21.128-13.624 0-24.708 11.084-24.708 24.708v266.82a22.97 22.97 0 006.771 16.347l55.972 55.972zM433.213 323.142l-96.549 98.081 67.888 68.616c5.985 6.049 15.804 5.896 21.597-.337l81.848-88.066c5.995-6.451 5.151-16.658-1.823-22.036z"})),Se=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})),Pe=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M393.784 100.106l-95.207-13.834L256 0l-42.577 86.272-95.207 13.834 68.893 67.153-16.264 94.822L256 217.312l85.155 44.769-16.263-94.822z"}),h("path",{d:"M256 315.219l-153.945-61.762v87.726l154.843 62.123 153.047-62.17v-87.679z"}),h("path",{d:"M256 423.914l-153.945-61.762v87.726L256.898 512l153.047-62.169v-87.679z"})),Te=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},h("g",null,h("rect",{fill:"none",height:"24",width:"24"})),h("g",null,h("g",null),h("g",null,h("path",{d:"M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"}),h("g",null,h("path",{d:"M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"}),h("path",{d:"M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"}),h("path",{d:"M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"}))))),ze=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),He=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),Ae=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},h("path",{d:"M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z",fill:"none"}),h("path",{d:"M17.7 8L12 2.3 6.3 8C4.8 9.6 4 11.6 4 13.6s.8 4.1 2.3 5.7 3.6 2.4 5.7 2.4 4.1-.8 5.7-2.4 2.3-3.7 2.3-5.7-.8-4-2.3-5.6z"})),Ee=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"}));let Ue;const Ve=O(Ue||(Ue=(t=>t)`
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
    /*height: 60px;*/
    height: 55px;
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
`)),We=t=>[h("a",{class:"skiplink",href:"#main"},"Go to main content"),h("header",{class:Ve},h("div",{class:"ld-logo-wrapper"},h("a",{href:"","aria-current":"page"},h("p",null,"BETA"),de)),h("div",{class:"totals"},h(re,{selectedDate:t.selectedDate,startDate:t.startDate,endDate:t.endDate})))];var je,Ne,Oe,Be=0,Re=[],Ie=t.__r,Fe=t.diffed,Ye=t.__c,qe=t.unmount;function Ze(e,n){t.__h&&t.__h(Ne,e,Be||n),Be=0;var a=Ne.__H||(Ne.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function $e(t){return Be=1,function(t,e,n){var a=Ze(je++,2);return a.__c||(a.__c=Ne,a.__=[n?n(e):en(void 0,e),function(e){var n=t(a.__[0],e);a.__[0]!==n&&(a.__[0]=n,a.__c.setState({}))}]),a.__}(en,t)}function Ge(e,n){var a=Ze(je++,3);!t.__s&&tn(a.__H,n)&&(a.__=e,a.__H=n,Ne.__H.__h.push(a))}function Xe(t){return Be=5,function(t,e){var n=Ze(je++,7);return tn(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}((function(){return{current:t}}),[])}function Qe(){Re.some((function(e){if(e.__P)try{e.__H.__h.forEach(Ke),e.__H.__h.forEach(Je),e.__H.__h=[]}catch(n){return e.__H.__h=[],t.__e(n,e.__v),!0}})),Re=[]}function Ke(t){t.t&&t.t()}function Je(t){var e=t.__();"function"==typeof e&&(t.t=e)}function tn(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function en(t,e){return"function"==typeof e?e(t):e}function nn(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var a in e)if("__source"!==a&&t[a]!==e[a])return!0;return!1}t.__r=function(t){Ie&&Ie(t),je=0,(Ne=t.__c).__H&&(Ne.__H.__h.forEach(Ke),Ne.__H.__h.forEach(Je),Ne.__H.__h=[])},t.diffed=function(e){Fe&&Fe(e);var n=e.__c;if(n){var a=n.__H;a&&a.__h.length&&(1!==Re.push(n)&&Oe===t.requestAnimationFrame||((Oe=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(a),cancelAnimationFrame(e),setTimeout(t)},a=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(Qe))}},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Ke),e.__h=e.__h.filter((function(t){return!t.__||Je(t)}))}catch(a){n.some((function(t){t.__h&&(t.__h=[])})),n=[],t.__e(a,e.__v)}})),Ye&&Ye(e,n)},t.unmount=function(e){qe&&qe(e);var n=e.__c;if(n){var a=n.__H;if(a)try{a.__.forEach((function(t){return t.t&&t.t()}))}catch(e){t.__e(e,n.__v)}}};!function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).isPureReactComponent=!0,n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.shouldComponentUpdate=function(t,e){return nn(this.props,t)||nn(this.state,e)}}(g);var an=t.__b;t.__b=function(t){t.type&&t.type.t&&t.ref&&(t.props.ref=t.ref,t.ref=null),an&&an(t)};var rn=t.__e;function on(t){return t&&((t=function(t,e){for(var n in e)t[n]=e[n];return t}({},t)).__c=null,t.__k=t.__k&&t.__k.map(on)),t}function sn(){this.__u=0,this.o=null,this.__b=null}function ln(t){var e=t.__.__c;return e&&e.u&&e.u(t)}function cn(){this.i=null,this.l=null}t.__e=function(t,e,n){if(t.then)for(var a,r=e;r=r.__;)if((a=r.__c)&&a.__c)return a.__c(t,e.__c);rn(t,e,n)},(sn.prototype=new g).__c=function(t,e){var n=this;null==n.o&&(n.o=[]),n.o.push(e);var a=ln(n.__v),r=!1,o=function(){r||(r=!0,a?a(i):i())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){o(),e.__c&&e.__c()};var i=function(){var t;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});t=n.o.pop();)t.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),t.then(o,o)},sn.prototype.render=function(t,e){return this.__b&&(this.__v.__k[0]=on(this.__b),this.__b=null),[h(g,null,e.u?null:t.children),e.u&&t.fallback]};var dn=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};(cn.prototype=new g).u=function(t){var e=this,n=ln(e.__v),a=e.l.get(t);return a[0]++,function(r){var o=function(){e.props.revealOrder?(a.push(r),dn(e,t,a)):r()};n?n(o):o()}},cn.prototype.render=function(t){this.i=null,this.l=new Map;var e=x(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},cn.prototype.componentDidUpdate=cn.prototype.componentDidMount=function(){var t=this;t.l.forEach((function(e,n){dn(t,n,e)}))};!function(){function t(){}var e=t.prototype;e.getChildContext=function(){return this.props.context},e.render=function(t){return t.children}}();var un=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;g.prototype.isReactComponent={};var hn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,pn=t.event;function fn(t,e){t["UNSAFE_"+e]&&!t[e]&&Object.defineProperty(t,e,{configurable:!1,get:function(){return this["UNSAFE_"+e]},set:function(t){this["UNSAFE_"+e]=t}})}t.event=function(t){pn&&(t=pn(t)),t.persist=function(){};var e=!1,n=!1,a=t.stopPropagation;t.stopPropagation=function(){a.call(t),e=!0};var r=t.preventDefault;return t.preventDefault=function(){r.call(t),n=!0},t.isPropagationStopped=function(){return e},t.isDefaultPrevented=function(){return n},t.nativeEvent=t};var gn={configurable:!0,get:function(){return this.class}},mn=t.vnode;t.vnode=function(t){t.$$typeof=hn;var e=t.type,n=t.props;if(e){if(n.class!=n.className&&(gn.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",gn)),"function"!=typeof e){var a,r,o;for(o in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===e&&(x(n.children).forEach((function(t){-1!=n.value.indexOf(t.props.value)&&(t.props.selected=!0)})),delete n.value),n)if(a=un.test(o))break;if(a)for(o in r=t.props={},n)r[un.test(o)?o.replace(/[A-Z0-9]/,"-$&").toLowerCase():o]=n[o]}!function(e){var n=t.type,a=t.props;if(a&&"string"==typeof n){var r={};for(var o in a)/^on(Ani|Tra|Tou)/.test(o)&&(a[o.toLowerCase()]=a[o],delete a[o]),r[o.toLowerCase()]=o;if(r.ondoubleclick&&(a.ondblclick=a[r.ondoubleclick],delete a[r.ondoubleclick]),r.onbeforeinput&&(a.onbeforeinput=a[r.onbeforeinput],delete a[r.onbeforeinput]),r.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(a.type))){var i=r.oninput||"oninput";a[i]||(a[i]=a[r.onchange],delete a[r.onchange])}}}(),"function"==typeof e&&!e.m&&e.prototype&&(fn(e.prototype,"componentWillMount"),fn(e.prototype,"componentWillReceiveProps"),fn(e.prototype,"componentWillUpdate"),e.m=!0)}mn&&mn(t)};let bn;function wn(t){const[e,n]=$e(!1),a=Xe(null);return Ge(()=>{e&&a.current.focus({preventScroll:!0})},[e]),Ge(()=>{t.currentDropdown!==t.toggle&&n(!1)},[t.currentDropdown]),h("div",{class:vn},h("div",{class:"ld-expandable"},h("button",{onClick:()=>{t.onDropDown(!e&&t.toggle),n(!e)},class:"ld-expandable--toggle","aria-expanded":e},h("div",{class:"ld-expandable--icon"},e?xn:Cn),h("div",{class:"ld-expandable--toggle-content"},h("h2",null,t.toggle))),h("div",{ref:a,class:"ld-expandable--detail "+(e?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},t.detail)))}const vn=O(bn||(bn=(t=>t)`
  .ld-expandable {
    width: 100%;
    height: auto;
    border-bottom: lightgrey solid 1px;
    .dark & {
      border-bottom: var(--ld-gray-2) solid 1px;
    }
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
`)),Cn=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"9 6 15 12 9 18"})),xn=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"})),_n={url:new URL("./src/services/updatesService.js",document.baseURI).href};const yn=new class extends It{async getUpdates(t){if(t||!this.updates)try{this.updates=await fetch(new URL("../../data/updates.json",_n.url)).then(t=>t.json()),await this.updates}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:this.updates}}};let kn,Mn,Dn=t=>t;const Ln=O(kn||(kn=Dn`
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
`)),Sn=O(Mn||(Mn=Dn`
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
`));let Pn;const Tn={new_entry:"new entry",announcement:"announcement",rectification:"rectification",promoting_project:"project promotion",promoting_petition:"petition"};function zn(){var t,e;const[n,a]=$e(void 0);return Ge(async()=>{const t=await yn.getUpdates();a(t)},[]),navigator.onLine||"success"===(null==n?void 0:n.status)?!n&&navigator.onLine?h("div",{class:Ln},he):"failed"===n.status&&navigator.onLine?h("div",{style:"margin-top: 14px;"},"An error occured while fetching updates."):h("div",{class:Hn},h("ul",null,null==n||null===(t=n.data)||void 0===t||null===(e=t.updates)||void 0===e?void 0:e.map(t=>h("li",null,h("div",{class:"ld-ticker--bar"},h("div",{class:"ld-ticker--dot-container"},h("div",{"aria-label":Tn[t.type.toLowerCase()],class:"ld-ticker--dot "+t.type.toLowerCase()})),h("div",{class:"ld-ticker--line"})),h("div",{class:"ld-ticker--content"},h("div",{class:"ld-ticker--title"},t.title),h("div",{class:"ld-ticker--content"},t.content),t.link?h("div",{class:"ld-ticker--link"},h("a",{target:"_blank",rel:"noopener noreferer",href:t.link},"Source")):"",h("div",{class:"ld-ticker--date"},t.date)))))):h("div",{class:Sn},ue,h("b",null,"You are not connected to the internet"),h("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}const Hn=O(Pn||(Pn=(t=>t)`
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
`));function An(t){let e;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(n=>{n&&(n.addEventListener("updatefound",()=>{e=n.installing,e.addEventListener("statechange",()=>{"installed"===e.state&&navigator.serviceWorker.controller&&t(!0)})}),n.waiting&&navigator.serviceWorker.controller&&(t(!0),e=n.waiting))})}function En(t){const[e,n]=[...document.querySelectorAll("link[rel='icon']")],a=document.querySelector("link[rel='manifest']"),r=document.querySelector("meta[name='theme-color']");t?(a.href="/manifest-dark.json",e.href="src/assets/favicon-32x32-dark.png",n.href="src/assets/favicon-16x16-dark.png",r.setAttribute("content","#303136")):(a.href="/manifest.json",e.href="src/assets/favicon-32x32.png",n.href="src/assets/favicon-16x16.png",r.setAttribute("content","#ffffff")),document.getElementsByTagName("head")[0].appendChild(a),document.getElementsByTagName("head")[0].appendChild(e),document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(r)}let Un,Vn;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),Vn=!0,Un=t});class Wn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),Un=t,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))}),Vn&&this.removeAttribute("hidden")}async _handlePrompt(t){t.preventDefault(),Un.prompt();const{outcome:e}=await Un.userChoice;"accepted"===e?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),Un=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",Wn);class jn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){this.addEventListener("click",this._postMessage.bind(this)),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)})}async _postMessage(t){t.preventDefault(),(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",jn);let Nn;const On=O(Nn||(Nn=(t=>t)`
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
    margin: 0 auto;
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
`));function Bn({onClose:t}){const[e,n]=$e(!1),[a,r]=$e(!1),[o,i]=$e(!1);return Ge(async()=>{An(t=>{r(t)});let t=localStorage.getItem("darkmode");if(t="false"!==t&&null!==t,i(t),navigator.permissions){const t=await navigator.permissions.query({name:"geolocation"});if("true"===localStorage.getItem("geolocation"))return void n(!1);"granted"!==t.state&&n(!0)}},[]),h("div",{class:On},h("button",{onClick:function(){document.getElementsByTagName("html")[0].classList.contains("dark")?(document.getElementsByTagName("html")[0].classList.remove("dark"),localStorage.setItem("darkmode","false"),En(!1),i(!1),t()):(document.getElementsByTagName("html")[0].classList.add("dark"),localStorage.setItem("darkmode","true"),En(!0),i(!0),t())},class:"ld-button"},"Toggle ",o?"LightMode":"DarkMode"),e?[" ",h("button",{onClick:function(){navigator.permissions&&navigator.geolocation.getCurrentPosition(()=>{n(!1)})},class:"ld-button"},"Allow geolocation")," "]:"",h("pwa-install-button",null,h("button",{onClick:()=>t(),class:"ld-button"},"Install app")),a?h("pwa-update-available",null,h("button",{onClick:()=>t(),class:"ld-button"},"Update app")):"")}const Rn={info:oe,settings:ie,updates:se,contribute:le};class In extends g{constructor(){super(),this.state={updateAvailable:!1,index:0},this.tabRefs={},this.__onFocusMove=this.__onFocusMove.bind(this),this.__onTabClick=this.__onTabClick.bind(this)}componentDidMount(){A("(min-width: 960px)",t=>{this.setState({isMobile:!t})}),Yt.addEventListener("close",t=>{t.detail.menuDialogClosed&&this.tabRefs["tab"+this.state.index].focus()}),An(t=>{this.setState({updateAvailable:t})})}updateIndex(t,e){"settings"===e&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.setState({index:t}),this.tabRefs["tab"+t].focus(),this.state.isMobile||this.commit(e)}__onTabClick(t,e){this.updateIndex(t,e),this.commit(e)}commit(t){this.props.switchContent(t.toLowerCase())}__onFocusMove(t){const e=this.state.index;switch(t.keyCode){case 37:0!==e&&this.updateIndex(e-1,this.tabRefs["tab"+(e-1)].getAttribute("data-label").toLowerCase());break;case 39:e!==this.props.children.length-1&&this.updateIndex(e+1,this.tabRefs["tab"+(e+1)].getAttribute("data-label").toLowerCase())}}render(t,{index:e}){return h("ul",{class:"ld-menu--tabs",role:"tablist"},this.props.children.map((t,n)=>h("li",{role:"presentation",key:n,class:n>1?"hide":""},h("button",{role:"tab",ref:t=>this.tabRefs["tab"+n]=t,tabindex:e===n?"0":"-1","aria-selected":e===n?"true":"false",class:e===n?"ld-menu--active":"","data-label":t.props.id,onKeyUp:this.__onFocusMove,onClick:()=>this.__onTabClick(n,t.props.id)},"settings"===t.props.id&&this.state.updateAvailable?[" ",h("div",{class:"ld-menu--notification"})," "]:"",Rn[t.props.id],h("p",{class:e===n?"ld-menu--active":""},t.props.id.toUpperCase())))))}}let Fn,Yn,qn,Zn,$n,Gn,Xn=t=>t;O(Fn||(Fn=Xn`
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
`));const Qn=O(Yn||(Yn=Xn`
  .ld-menu--content {
    display: block;
    top: 0px;
    right: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    width: 30vw;
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
`)),Kn=O(qn||(qn=Xn`
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
        background-color: var(--ld-gray-2) !important;
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
              &.hide{
                display: none; /*Just for now*/
              }
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
`)),Jn=O(Zn||(Zn=Xn`
  .dark & {
    background-color: transparent;
    color: white;
    background-image: url(/src/assets/icons/menu/black.svg);
    & svg {
      color: white;
    }
    &:hover {
      cursor: pointer;
    }
  }
  & {
    position: absolute;
    height: 108px;
    width: 50px;
    z-index: 2000;
    top: calc((100vh / 2) - 20px);
    right: -5px;
    border-radius: 100% 0% 0% 100% / 21% 0% 0% 21%;
    border: 0px;
    background-color: transparent;
    background-image: url(/src/assets/icons/menu/white.svg);
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
`)),ta=O($n||($n=Xn`
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
    display: flex;
    align-items: center;
    justify-content: center;
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
`)),ea=O(Gn||(Gn=Xn`
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
`)),na=(t,e,n,a)=>{switch(t){case"info":return{title:"info",template:[h("h1",null,"Lockdown"),h("p",{class:"ld-alpha"},"Project lockdown is currently in beta. Not all data may be available yet."),h("p",null,h("b",null,"Project Lockdown")," provides a mapping of the different NPIs (Non-Pharmaceutical Interventions) enforced by across the globe\n            in response to the COVID-19 crisis to visualize the success of different pandemic response measures, monitor effects on Human\n            and Digital Rights, and clarify evaluation metrics."),h(wn,{toggle:"About",currentDropdown:n,onDropDown:a,detail:h("p",null,"Lockdown, quarantine, and isolation measures have been implemented across the globe to reduce the spread of COVID-19 and\n                reduce the strain on medical infrastructure. ",h("b",null,"Project Lockdown")," empowers citizens, journalists, and Human Rights\n                Defenderes to easily analyze the social and political effects of these measures. Founded on the values of transparency and\n                accountability, ",h("b",null,"Project Lockdown")," is committed to providing citizens of the world with the tools they need to stay\n                safe and informed.")}),h(wn,{toggle:"Sources",currentDropdown:n,onDropDown:a,detail:h("p",null,h("b",null,"Project Lockdown")," combines multiple trusted sources to ensure that the data used is verified and accurate. You can find the full list of sources used here:",h("ul",{class:"ld-sources"},h("li",null,h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://TIOF.Click/LockdownData"}," Project Lockdown's Database"),h("br",null),"(Collected from a number of NPI sources)"),h("li",null,h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://covid19api.com/"},"Coronavirus COVID19 API"),h("br",null),"(Data sourced from ",h("a",{href:"https://systems.jhu.edu/",target:"_blank"},"Johns Hopkins CSSE)"),h("br",null))),"If you find any errors, please help us and report it ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Code-for-All/lockdown/issues"},"by creating an issue here"),".")}),h(wn,{toggle:"Credits",currentDropdown:n,onDropDown:a,detail:h("p",null,h("b",null,"Project Lockdown")," is a Civic Tech initiative made possible by a number of dedicated individuals and organizations.\n                View the list of contributors",h("a",{href:"https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit?ts=5e74ac83#gid=634415797",target:"_blank"},"here"),".")}),h(wn,{toggle:"Data & Privacy",currentDropdown:n,onDropDown:a,detail:[h("p",null,"We do not collect any personal information from our visitors."),h("p",null,"All information on project members is provided with their consent.")]})]};case"settings":return{title:"settings",template:[" ",h(Bn,{onClose:e})," "]};case"contribute":return{title:"contribute",template:[h("p",null,"Do you have any NPI source you would want to share with us? Please follow this link:"),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Submit data"),h("p",null,"Additionally, you can become part of the project by joining one of the following teams:",h("ul",null,h("li",null,"Editors"),h("li",null,"Devs"),h("li",null,"UI/UX"))),h("p",null,"Contact us via Telegram at:",h("br",null),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://t.me/ProjectLockdown"}," @ProjectLockdown"))]};case"updates":return{title:"updates",template:[" ",h(zn,null)," "]};default:return{title:"",template:void 0}}};class aa extends g{constructor(t){super(t),this.state={activeItem:"info",showLateralMenu:!1,showMenu:!1,currentDropdown:1},this.showSideBar=this.showSideBar.bind(this),this.closeNavbar=this.closeNavbar.bind(this),this.switchContent=this.switchContent.bind(this),this.onDropDown=this.onDropDown.bind(this)}componentDidMount(){let t=0;A("(min-width: 960px)",e=>{this.setState({isMobile:!e}),e&&t>0&&(t++,this.props.close())})}showSideBar(){this.setState({showLateralMenu:!0,showMenu:!0})}switchContent(t){if("settings"===t&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.state.isMobile&&this.props.opened&&t===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.prevVal=t,this.setState({activeItem:t,showLateralMenu:t!==this.state.activeItem})}closeNavbar(){this.setState({showLateralMenu:!1,showSideBar:!1,activeItem:"info"})}onDropDown(t){this.setState({currentDropdown:t})}render(t,{activeItem:e,updateAvailable:n,currentDropdown:a}){return this.state.showLateralMenu||!0===this.props.isMobile?[h("div",{class:"menu-overlay "+ea}),h("main",{id:"main",class:"ld-menu "+Kn+" "+(this.state.showLateralMenu?Qn:"")},h("div",{class:"ld-menu-nav"},h("button",{class:ta,onClick:this.closeNavbar},ce),h("nav",null,h(In,{onClose:this.closeNavbar,switchContent:this.switchContent},h("button",{id:"info"},"info"),h("button",{id:"settings"},"settings"),h("button",{id:"updates"},"updates"),h("button",{id:"contribute"},"contribute")))),h("div",{class:"ld-menu--content"},h("div",{class:"mb-only"},h("div",{class:"ld-menu--header"},h("h1",null,e))),na(e,this.closeNavbar,a,this.onDropDown).template))]:h("button",{onClick:this.showSideBar,class:Jn},we)}}class ra extends g{async componentWillMount(){const t=await this.props.component(),e=t.default||t;this.setState({Component:e})}render({props:t},{Component:e}){return h(e,t)}}var oa="object"==typeof global&&global&&global.Object===Object&&global,ia="object"==typeof self&&self&&self.Object===Object&&self,sa=oa||ia||Function("return this")(),la=sa.Symbol,ca=Object.prototype,da=ca.hasOwnProperty,ua=ca.toString,ha=la?la.toStringTag:void 0;var pa=Object.prototype.toString;var fa=la?la.toStringTag:void 0;function ga(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":fa&&fa in Object(t)?function(t){var e=da.call(t,ha),n=t[ha];try{t[ha]=void 0;var a=!0}catch(t){}var r=ua.call(t);return a&&(e?t[ha]=n:delete t[ha]),r}(t):function(t){return pa.call(t)}(t)}function ma(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var ba=/^\s+|\s+$/g,wa=/^[-+]0x[0-9a-f]+$/i,va=/^0b[01]+$/i,Ca=/^0o[0-7]+$/i,xa=parseInt;function _a(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==ga(t)}(t))return NaN;if(ma(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ma(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(ba,"");var n=va.test(t);return n||Ca.test(t)?xa(t.slice(2),n?2:8):wa.test(t)?NaN:+t}var ya=function(){return sa.Date.now()},ka=Math.max,Ma=Math.min;let Da,La,Sa=t=>t;const Pa=O(Da||(Da=Sa`
  & {
    @media (max-width: 960px) {
      max-width: 200px;
    }
    max-width: 300px;
    position: absolute;
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
`)),Ta=O(La||(La=Sa`
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
`)),za=["S","M","T","W","T","F","S"],Ha=["January","February","March","April","May","June","July","August","September","October","November","December"];class Aa extends g{constructor(){super(),this.state={days:[],currentMonth:(new Date).getMonth(),lastSelection:!1,currentYear:2020,allMonthsDate:new Array(12),enableArrows:!1},this.onPressKey=this.onPressKey.bind(this),this.getMonthData=this.getMonthData.bind(this),this.fillAllMonths=this.fillAllMonths.bind(this),this.chooseDay=this.chooseDay.bind(this),this.changeMonth=this.changeMonth.bind(this)}componentDidMount(){window.addEventListener("keydown",this.onPressKey);const{currentMonth:t,allMonthsDate:e}=this.state;let n=new Date(2020,t,1),a=new Date(2020,t+1,0),r=this.getMonthData(n,a),o=e;o[t]=r,this.setState({days:r,allMonthsDate:o},this.fillAllMonths)}componentWillUnmount(){window.removeEventListener("keydown",this.onPressKey)}onPressKey(t){console.log(t),"Escape"===t.code&&this.props.show&&this.props.close()}getMonthData(t,e){let n=e.getDate(),a=7-(t.getDay()+1),r=n+a,o=r/7,i=0;r%7>0&&(i=7-r%7,r+=7-r%7,o=r/7);let s=[],l=0;for(let t=0;t<o;t++){s.push([]);for(let e=0;e<7;e++)0===t&&e<a||t===o-1&&i>0&&e>7-i-1?s[t].push({day:null,label:za[e]}):(l++,s[t].push({day:l,label:za[e]}))}return s}fillAllMonths(){const t=this.state.currentMonth;let e,n,a=this.state.allMonthsDate;for(let r=0;r<12;r++)if(r!==t){e=new Date(2020,r,1),n=new Date(2020,r+1,0);let t=this.getMonthData(e,n);a[r]=t}this.setState({allMonthsDate:a,enableArrows:!0})}chooseDay(t,e,n){let a=this.state.days;!1!==this.state.lastSelection&&(a[this.state.lastSelection[0]][this.state.lastSelection[1]].selected=!1),t.selected=!0,a[e][n]=t,this.props.onSelect(new Date(this.state.currentYear,this.state.currentMonth,t.day)),this.setState({days:a,lastSelection:[e,n]})}changeMonth(t){const{enableArrows:e,currentMonth:n,allMonthsDate:a}=this.state;if(e){let e,r;(n>0||t)&&(n<11||!t)&&(t?(r=n+1,e=a[r]):(r=n-1,e=a[r]),this.setState({days:e,currentMonth:r}))}}render(t){return[h("div",{class:"overlay "+Ta+" "+(this.props.show?"show":""),onClick:this.props.close}),h("div",{class:"calendar "+Pa+" "+(this.props.show?"show":"")+" "+this.props.customClass},h("div",{class:"calendar actions"},h("span",{onClick:()=>this.changeMonth(!1)},me),h("h3",null,Ha[this.state.currentMonth]," ",this.state.currentYear),h("span",{onClick:()=>this.changeMonth(!0)},be)),h("div",{class:"calendar header"},za.map(t=>h("div",{class:"header item"},t))),h("div",{class:"calendar container"},this.state.days.map((t,e)=>h("div",{class:"week"},t.map((t,n)=>h("div",{onClick:()=>this.chooseDay(t,e,n),class:`day ${null===t.day?"empty":""} ${t.selected?"selected":""}`},h("span",null,t.day)))))))]}}let Ea,Ua,Va,Wa,ja,Na,Oa=t=>t;const Ba=[7.5,16,24.5,33,41.5,50,58.5,67,75.5,84,94];function Ra(t){return Bt(t,"dd MMM")}function Ia(t){return Bt(t,"dd MMMM yyyy")}const Fa=O(Ea||(Ea=Oa`
  & {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    z-index: 1000;
    height: fit-content;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 4px 11px 3px rgba(0, 0, 0, 0.39);
    border-radius: 25px;
    transition: max-height 0.25s ease-out;
    max-height: 70px;
    &.open {
      max-height: 90vh;
      transition: max-height 0.25s ease-in;
    }
    /*padding: 0px 6%;*/
    @media (max-width: 960px) {
      bottom: 10px;
      left: 0;
      right: 0;
      width: 90vw;
      max-width: 450px;
    }
    & > div.countryInfo {
      z-index: 10;
      height: calc(100vh - 190px);
      max-height: 475px;
    }
  }
`)),Ya=O(Ua||(Ua=Oa`
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
      background-color: #333333;
    }
    & {
        height: 50px;
        padding: 0px 85px;
        border-radius: 25px;
        background-color: white;
        display:flex
        width: 100%;
        position: relative;
        justify-content: center
        align-items: center
        &.open{
          border-top: 0px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
        @media (max-width: 960px) {
            & {
              padding: 0 85px;
            }
        }
        & > .overlay{
          height: 100vh;
          @media (max-width: 960px) {
            top: calc(-100vh + 100% + 20px);
            left: -6%;
          }
          top: calc(-100vh + 100% + 65px);
          left: calc((100% - 100vw)/ 2);
        }
        & > .calendar{
            bottom: 60px;
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
                    display: table;
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
`)),qa=O(Va||(Va=Oa`
  input {
    background: transparent;
  }
  input[type='range'] {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    margin: 15.6px 0;
    bottom: 0;
    color: #e0e0e0;
    .dark & {
      color: #4f4f4f;
    }
  }
  input[type='range']:focus {
    outline: none;
    box-shadow: 0 0 0px 0px var(--ld-focus) !important;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
    background: #333333;
    .dark & {
      background: #ffffff;
    }
    &::before {
      content: 'Say Cheese';
      color: red;
    }
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #bdbdbd;
    .dark & {
      background: #828282;
    }
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-moz-range-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: #333333;
    .dark & {
      background: #ffffff;
    }
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 3px;
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
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
  }
  input[type='range']::-ms-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: #333333;
    .dark & {
      background: #ffffff;
    }
    cursor: pointer;
    height: 6.8px;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #d6d6d6;
  }
`)),Za=O(Wa||(Wa=Oa`
  .dark & {
    color: white;
  }
  & {
    font-weight: 600;
    font-size: 12px;
    color: #333333;
    position: absolute;
    top: 17px;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 960px) {
      top: 17px;
      &.first {
        left: 17px;
      }
      &.last {
        right: 17px;
      }
    }
    &.first {
      left: 17px;
    }
    &.last {
      right: 17px;
    }
  }
`)),$a=O(ja||(ja=Oa`
  .dark & span {
    color: white;
    background: #333333;
    &::after {
      background-color: #333333;
    }
  }
  & {
    position: absolute;
    @media (max-width: 960px) {
      top: -33px;
      padding: 0;
    }
    top: -33px;
    left: 24.5%;
    z-index: 999;
    width: fit-content;
    transform: translate(-24.5%, 0);
    background: transparent;
    font-size: 1rem;
    padding: 0;
    width: max-content;
    & span {
      border: 0px solid #8c8c8c;
      border-radius: 30px;
      position: relative;
      background: #ffffff;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 600;
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 12px;
        height: 12px;
        background: #ffffff;
        border-right: 0px solid #8c8c8c;
        border-bottom: 0px solid #8c8c8c;
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.3);
      }
    }
  }
`)),Ga=O(Na||(Na=Oa`
  & {
    content: '';
    position: absolute;
    height: 25px;
    width: 25px;
    outline: none;
    border: 0px;
    border-radius: 25px;
    background: #ffffff;
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9;
    bottom: 18px;
    display:none;
    @media (max-width: 960px) {
      bottom: 11px;
    }
    @media (max-width: 960px) and (min-width: 576px) {
      bottom: 11px);
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
      left: calc(0% + 38px);
    }
    &.last {
      @media (max-width: 960px) {
        right: calc(12% + 4px);
      }
      right: calc(0% + 38px);
    }
    &:active {
      background-color: rgb(199, 198, 198);
      outline: none;
    }
  }
`));class Xa extends g{constructor(){super(),this.state={currentDateValue:13,currentPosition:24.5,datePickerPosition:"left",showDatePicker:!1,currentSelectedDay:"",firstDay:"",lastDay:"",currentSliderRange:[]},this.dateRef={},this.range={},this.container={},this.onSliderChange=this.onSliderChange.bind(this),this.onBtnClick=this.onBtnClick.bind(this),this.onChooseDate=this.onChooseDate.bind(this),this.calendarWillClose=this.calendarWillClose.bind(this),this.closeDatePicker=this.closeDatePicker.bind(this),this.submitChanges=this.submitChanges.bind(this),this.onPressKey=this.onPressKey.bind(this)}componentDidMount(){window.addEventListener("keydown",this.onPressKey);let t=new Date,e=[],n=1,a=14;for(let r=1;r<=70;r++){15===r?e.push(t):r<15?(e.push(this.rangePreProcces(t,-1*a)),a--):(e.push(this.rangePreProcces(t,n)),n++);const o=this.dateRef.current,i=this.range.current;let s=(this.container.current.offsetWidth-i.offsetWidth)/2-o.offsetWidth/4,l=i.offsetWidth/70;o.style.left=s+11*l+"px"}this.setState({currentSliderRange:e,currentSelectedDay:Ia(t),firstDay:Ra(e[0]),lastDay:Ra(e[e.length-1])})}componentWillUnmount(){window.removeEventListener("keydown",this.onPressKey)}onPressKey(t){this.range.current;switch(t.code){case"ArrowLeft":t.preventDefault(),this.range.current.value>0&&(this.range.current.value=this.range.current.value-1,this.onSliderChange({target:{value:this.range.current.value}}));break;case"ArrowRight":t.preventDefault(),this.range.current.value<69&&(this.range.current.value=Number(this.range.current.value)+1,this.onSliderChange({target:{value:this.range.current.value}}))}}onSliderChange(t){const{currentDateValue:e,currentSliderRange:n}=this.state,a=this.dateRef.current,r=this.range.current,o=this.container.current;let i=t.target.value,s=(o.offsetWidth-r.offsetWidth)/2-a.offsetWidth/4,l=r.offsetWidth/70,c=Ba[i];a.style.left=s+l*i+"px",this.setState({currentDateValue:i,currentPosition:c,currentSelectedDay:Ia(n[i])},this.submitChanges)}onBtnClick(t){this.setState({showDatePicker:!0,datePickerPosition:t})}onChooseDate(t){const e=this.dateRef.current,n=this.range.current;let a=(this.container.current.offsetWidth-n.offsetWidth)/2-e.offsetWidth/4,r=n.offsetWidth/70;e.style.left=a+r*(.5+("left"===this.state.datePickerPosition?0:69))+"px",this.calendarWillClose();let o=[];if("left"===this.state.datePickerPosition){let e=1;for(let n=1;n<=70;n++)1===n?o.push(t):(o.push(this.rangePreProcces(t,e)),e++)}else{let e=69;for(let n=1;n<=70;n++)70===n?o.push(t):(o.push(this.rangePreProcces(t,-1*e)),e--)}this.setState({currentSliderRange:o,currentSelectedDay:Ia(t),firstDay:Ra(o[0]),lastDay:Ra(o[o.length-1]),currentDateValue:"left"===this.state.datePickerPosition?0:69,currentPosition:24.5},this.submitChanges)}calendarWillClose(){this.setState({datePickerPosition:this.state.datePickerPosition+" hide"},()=>setTimeout(()=>this.closeDatePicker(),400))}closeDatePicker(){this.setState({showDatePicker:!1,datePickerPosition:this.state.datePickerPosition.replace(" hide","")})}rangePreProcces(t,e){let n=new Date(t);return n.setDate(t.getDate()+e),n}submitChanges(){const{currentSliderRange:t,currentDateValue:e}=this.state;this.props.onChange(t[e],t[0],t[t.length-1])}render(t){return h("div",{class:"sliderWrapper "+Fa+" "+(""!==this.props.children?"open":""),ref:this.container},this.props.children,h("div",{class:Ya+" "+qa+" "+(""!==this.props.children?"open":"")},h(Aa,{close:this.calendarWillClose,onSelect:this.onChooseDate,show:this.state.showDatePicker,customClass:this.state.datePickerPosition}),h("div",{class:$a,ref:this.dateRef},h("span",null,this.state.currentSelectedDay)),h("span",{title:"Select Start Date",class:"first "+Za,onClick:t=>this.onBtnClick("left")},h(Qa,null)," ",this.state.firstDay),h("button",{onClick:t=>this.onBtnClick("left"),class:"first "+Ga}),h("input",{ref:this.range,onInput:this.onSliderChange,type:"range",min:"0",max:"69",step:"1",value:this.state.currentDateValue}),h("button",{onClick:t=>this.onBtnClick("right"),class:"last "+Ga}),h("span",{title:"Select End Date",class:"last "+Za,onClick:t=>this.onBtnClick("right")},h(Qa,null)," ",this.state.lastDay)))}}class Qa extends g{render(t){return h("span",null,ke)}}let Ka;const Ja=O(Ka||(Ka=(t=>t)`
  & {
    position: absolute;
    top: 45vh;
    left: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.1);
    display: flex;
    color: #333333;
    justify-content: center;
    align-items: center;
    .dark & {
      background-color: #333333;
      color: white;
      & .dialog {
        background-color: #333333;
        color: white;
        &.right {
          &::after {
            border-left-color: #333333;
          }
        }
        &.left {
          &::after {
            border-right-color: #333333;
          }
        }
      }
    }
    &:hover {
      cursor: pointer;
    }
    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
    & .dialog {
      display: none;
      transition: 0.2s;
      position: absolute;
      padding: 5px 7px;
      background-color: #fff;
      flex-direction: column;
      color: #333333;
      box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      &.top {
        top: -36%;
        &::after {
          top: 30%;
        }
      }
      &.bottom {
        bottom: -36%;
        &::after {
          top: 71%;
        }
      }
      &.left {
        right: -150px;
        &::after {
          left: 0;
          border-right-color: #fff;
          border-left: 0;
          margin-left: -20px;
        }
      }
      &.right {
        left: -150px;
        &::after {
          right: 0;
          border-left-color: #fff;
          border-right: 0;
          margin-right: -20px;
        }
      }
      &.show {
        display: flex;
      }
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        margin-top: -20px;
      }
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 9px 0px;
        padding-bottom: 0px;
        &:nth-child(4) {
          padding-bottom: 7.06px;
        }
        &:last-child {
          padding-bottom: 9px;
          & > span {
            &:last-child {
              margin-right: auto;
            }
          }
        }
        & > span {
          margin: 0px 8px;
          & svg {
            height: 20px;
            width: 20px;
          }
          & .color {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            &.red {
              background-color: #eb5757;
            }
            &.orange {
              background-color: #f2994a;
            }
            &.green {
              background-color: #6fcf97;
            }
            &.blue {
              background-color: #78aefc;
            }
            &.gray {
              background-color: #cccccc;
            }
          }
        }
      }
    }
  }
`));class tr extends g{constructor(){super(),this.state={showDialog:!1,y:"bottom",x:"left"},this.btn={},this.onClick=this.onClick.bind(this),this.initBtn=this.initBtn.bind(this),this.onTouch=this.onTouch.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onDrop=this.onDrop.bind(this)}initBtn(t){this.btn=t,t.addEventListener("touchmove",this.onTouch),t.addEventListener("touchend",this.onTouchEnd),t.addEventListener("dragend",this.onDrop)}onTouch(t){let e=t.targetTouches[0];this.btn.style.left=e.pageX+"px",this.btn.style.top=e.pageY+"px"}onTouchEnd(t){let e=this.state.x,n=this.state.y,a=window.innerWidth||window.clientWidth,r=window.innerHeight||window.clientHeight,o=Number(this.btn.style.top.replace("px","")),i=Number(this.btn.style.left.replace("px",""));o>r/2?(o>=r-150&&(this.btn.style.top=r-150+"px"),n="bottom"):(o<=160&&(this.btn.style.top="160px"),n="top"),i>a/2?(e="right",this.btn.style.left=a-70+"px"):(e="left",this.btn.style.left="10px"),this.setState({x:e,y:n})}onDrop(t){let e=this.state.x,n=this.state.y,a=window.innerWidth||window.clientWidth,r=window.innerHeight||window.clientHeight,o=t.clientY,i=t.clientX;0===o&&0===i&&(i=t.screenX,o=t.screenY),this.btn.style.top=o+"px",o>r/2?(o>=r-150&&(this.btn.style.top=r-150+"px"),n="bottom"):(o<=60&&(this.btn.style.top="70px"),n="top"),i>a/2?(e="right",this.btn.style.left=a-70+"px"):(e="left",this.btn.style.left="10px"),this.setState({x:e,y:n})}onClick(){this.setState({showDialog:!this.state.showDialog})}render(t){return h("div",{onClick:this.onClick,draggable:"true",ref:this.initBtn,class:Ja},ve,h("div",{class:"dialog "+(this.state.showDialog?"show":"")+" "+this.state.y+" "+this.state.x},h("div",null,h("span",null,h("div",{class:"color red"})),h("span",null,ye),h("span",null,xe)),h("div",null,h("span",null,h("div",{class:"color orange"})),h("span",null,_e),h("span",null,xe)),h("div",null,h("span",null,h("div",{class:"color green"})),h("span",null,ye),h("span",null,Ce)),h("div",null,h("span",null,h("div",{class:"color blue"})),h("span",null,_e),h("span",null,Ce)),h("div",null,h("span",null,h("div",{class:"color gray"})),h("span",null,"NO DATA"))))}}let er;const nr=function(t,e,n){var a,r,o,i,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=a,o=r;return a=r=void 0,c=e,i=t.apply(o,n)}function f(t){return c=t,s=setTimeout(m,e),d?p(t):i}function g(t){var n=t-l;return void 0===l||n>=e||n<0||u&&t-c>=o}function m(){var t=ya();if(g(t))return b(t);s=setTimeout(m,function(t){var n=e-(t-l);return u?Ma(n,o-(t-c)):n}(t))}function b(t){return s=void 0,h&&a?p(t):(a=r=void 0,i)}function w(){var t=ya(),n=g(t);if(a=arguments,r=this,l=t,n){if(void 0===s)return f(l);if(u)return clearTimeout(s),s=setTimeout(m,e),p(l)}return void 0===s&&(s=setTimeout(m,e)),i}return e=_a(e)||0,ma(n)&&(d=!!n.leading,o=(u="maxWait"in n)?ka(_a(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=r=s=void 0},w.flush=function(){return void 0===s?i:b(ya())},w}(()=>{let t={menuDialogClosed:!1,countryDialogClosed:!1};const e=new URLSearchParams(location.search);e.has("country")||e.has("iso2")?t.countryDialogClosed=!0:t.menuDialogClosed=!0,Yt.close(t)},10,{leading:!0,trailing:!1}),ar=O(er||(er=(t=>t)`
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
`));function rr(t){return Bt(t,"yyyy-MM-dd")}("requestIdleCallback"in window?window.requestIdleCallback:t=>setTimeout(t,1e3))(()=>{import("./34e525ff.js"),import("./50204daf.js")}),console.log("🌐 Project Lockdown, version: 0.0.0"),window.addEventListener("appinstalled",()=>{window.location.reload()}),A("(prefers-color-scheme: dark)",t=>{const e=localStorage.getItem("darkmode");null!==e?"true"===e&&(document.documentElement.classList.add("dark"),En(!0)):t?(document.documentElement.classList.add("dark"),En(!0)):(document.documentElement.classList.remove("dark"),En(!1))}),function(e,n,a){var r,o,c;t.__&&t.__(e,n),o=(r=a===i)?null:a&&a.__k||n.__k,e=h(f,null,[e]),c=[],M(n,(r?n:a||n).__k=e,o||s,s,void 0!==n.ownerSVGElement,a&&!r?[a]:o?null:l.slice.call(n.childNodes),c,a||s,r),D(c,e)}([" ",h(class extends g{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""},haveSelectedDate:!1,startDate:!1,endDate:!1},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__showDialog=this.__showDialog.bind(this),this.__showDialogRoute=this.__showDialogRoute.bind(this),this.__onSelectDate=this.__onSelectDate.bind(this)}async componentDidMount(){this.__onPathChanged(),A("(min-width: 960px)",t=>{this.setState({isMobile:!getMatchedCSSRules})})}componentWillMount(){Ft.addEventListener("path-changed",this.__onPathChanged),this.setState({showStatsbox:1==Number(Ft.url.searchParams.get("statsbox")||1),showMenu:1==Number(Ft.url.searchParams.get("menu")||1),showSlider:1==Number(Ft.url.searchParams.get("slider")||1)})}componentWillUnmount(){Ft.removeEventListener("path-changed",this.__onPathChanged)}render(){const t=this.state.haveSelectedDate?rr(this.state.haveSelectedDate):rr(new Date);return[this.state.showStatsbox?[h(We,{selectedDate:t,showStatsbox:this.state.showStatsbox,startDate:this.state.startDate,endDate:this.state.endDate}),this.state.dialog.opened?"":h("div",{class:ar},h(re,{selectedDate:t,startDate:this.state.startDate,endDate:this.state.endDate}))]:"",this.state.showMenu?h(aa,{opened:this.state.dialog.opened,isMobile:this.state.isMobile,changeRoute:this.__showDialogRoute,close:this.__closeDialog}):"",h(Jt,{selectedDate:t,startDate:this.state.startDate,endDate:this.state.endDate}),h(tr,null),this.state.showSlider?h(Xa,{onChange:this.__onSelectDate},this.state.dialog.opened?h(ra,{component:()=>import("./50204daf.js"),props:{country:this.state.dialog.title,iso2:this.state.dialog.iso2,date:this.state.haveSelectedDate||new Date,startDate:this.state.startDate,endDate:this.state.endDate,onClose:this.__closeDialog}}):""):""]}__showDialogRoute({template:t,title:e}){const n=Ft.url.searchParams.get("country");n?Ft.setPath(`${e}?country=${n}`):Ft.setPath(e),this.state.isMobile&&(Ft.setSearchParam("country",null),this.__showDialog({template:t,title:e}))}__onPathChanged(){const t=Ft.url.searchParams.get("country"),e=Ft.url.searchParams.get("iso2"),n=this.state.haveSelectedDate||new Date;t&&e&&this.setState({dialog:{opened:!0,template:[" ",h(ra,{component:()=>import("./50204daf.js"),props:{country:t,iso2:e,date:n}})," "],title:t,iso2:e,date:n}},()=>console.log(this.state))}__showDialog({template:t,title:e}){this.setState({dialog:{opened:!0,template:t,title:e}})}__closeCountryInfo(){Ft.setSearchParam("country",void 0),Ft.setSearchParam("iso2",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),nr(),this.__closeCountryInfo()}__onSelectDate(t,e,n){this.setState({haveSelectedDate:t,startDate:e,endDate:n})}},null)," "],document.getElementById("app"));export{It as E,qt as a,Sn as b,O as c,Me as d,De as e,Bt as f,Pe as g,h,Le as i,He as j,Ae as k,Ln as l,g as m,Te as n,ue as o,Ee as p,he as q,B as r,ze as s,R as t,ce as u,fe as v,Se as w,ge as x,pe as y,Ft as z};
