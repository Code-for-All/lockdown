var t,n,a,r,o,i={},s=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(t,e){for(var n in e)t[n]=e[n];return t}function d(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n){var a,r,o,i=arguments,s={};for(o in e)"key"==o?a=e[o]:"ref"==o?r=e[o]:s[o]=e[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(i[o]);if(null!=n&&(s.children=n),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===s[o]&&(s[o]=t.defaultProps[o]);return u(t,s,a,r,null)}function u(e,n,a,r,o){var i={type:e,props:n,key:a,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++t.__v:o};return null!=t.vnode&&t.vnode(i),i}function p(t){return t.children}function f(t,e){this.props=t,this.context=e}function g(t,e){if(null==e)return t.__?g(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?g(t):null}function m(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return m(t)}}function b(e){(!e.__d&&(e.__d=!0)&&n.push(e)&&!w.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||a)(w)}function w(){for(var t;w.__r=n.length;)t=n.sort((function(t,e){return t.__v.__b-e.__v.__b})),n=[],t.some((function(t){var e,n,a,r,o,i;t.__d&&(o=(r=(e=t).__v).__e,(i=e.__P)&&(n=[],(a=c({},r)).__v=r.__v+1,S(i,r,a,e.__n,void 0!==i.ownerSVGElement,null!=r.__h?[o]:null,n,null==o?g(r):o,r.__h),D(n,r),r.__e!=o&&m(r)))}))}function v(t,e,n,a,r,o,l,c,h,f){var m,b,w,v,x,y,k,M=a&&a.__k||s,L=M.length;for(h==i&&(h=null!=l?l[0]:L?g(a,0):null),n.__k=[],m=0;m<e.length;m++)if(null!=(v=n.__k[m]=null==(v=e[m])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?u(null,v,null,null,v):Array.isArray(v)?u(p,{children:v},null,null,null):v.__b>0?u(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(w=M[m])||w&&v.key==w.key&&v.type===w.type)M[m]=void 0;else for(b=0;b<L;b++){if((w=M[b])&&v.key==w.key&&v.type===w.type){M[b]=void 0;break}w=null}S(t,v,w=w||i,r,o,l,c,h,f),x=v.__e,(b=v.ref)&&w.ref!=b&&(k||(k=[]),w.ref&&k.push(w.ref,null,v),k.push(b,v.__c||x,v)),null!=x?(null==y&&(y=x),"function"==typeof v.type&&null!=v.__k&&v.__k===w.__k?v.__d=h=C(v,h,t):h=_(t,v,w,M,l,x,h),f||"option"!==n.type?"function"==typeof n.type&&(n.__d=h):t.value=""):h&&w.__e==h&&h.parentNode!=t&&(h=g(w))}if(n.__e=y,null!=l&&"function"!=typeof n.type)for(m=l.length;m--;)null!=l[m]&&d(l[m]);for(m=L;m--;)null!=M[m]&&("function"==typeof n.type&&null!=M[m].__e&&M[m].__e==n.__d&&(n.__d=g(a,m+1)),z(M[m],M[m]));if(k)for(m=0;m<k.length;m++)T(k[m],k[++m],k[++m])}function C(t,e,n){var a,r;for(a=0;a<t.__k.length;a++)(r=t.__k[a])&&(r.__=t,e="function"==typeof r.type?C(r,e,n):_(n,r,r,t.__k,null,r.__e,e));return e}function x(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){x(t,e)})):e.push(t)),e}function _(t,e,n,a,r,o,i){var s,l,c;if(void 0!==e.__d)s=e.__d,e.__d=void 0;else if(r==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),s=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<a.length;c+=2)if(l==o)break t;t.insertBefore(o,i),s=i}return void 0!==s?s:o.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||l.test(e)?n:n+"px"}function k(t,e,n,a,r){var o,i,s;if(r&&"className"==e&&(e="class"),"style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof a&&(t.style.cssText=a=""),a)for(e in a)n&&e in n||y(t.style,e,"");if(n)for(e in n)a&&n[e]===a[e]||y(t.style,e,n[e])}else"o"===e[0]&&"n"===e[1]?(o=e!==(e=e.replace(/Capture$/,"")),(i=e.toLowerCase())in t&&(e=i),e=e.slice(2),t.l||(t.l={}),t.l[e+o]=n,s=o?L:M,n?a||t.addEventListener(e,s,o):t.removeEventListener(e,s,o)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&"href"!==e&&"contentEditable"!==e&&!r&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function M(e){this.l[e.type+!1](t.event?t.event(e):e)}function L(e){this.l[e.type+!0](t.event?t.event(e):e)}function S(e,n,a,r,o,i,s,l,d){var h,u,g,m,b,w,C,x,_,y,k,M=n.type;if(void 0!==n.constructor)return null;null!=a.__h&&(d=a.__h,l=n.__e=a.__e,n.__h=null,i=[l]),(h=t.__b)&&h(n);try{t:if("function"==typeof M){if(x=n.props,_=(h=M.contextType)&&r[h.__c],y=h?_?_.props.value:h.__:r,a.__c?C=(u=n.__c=a.__c).__=u.__E:("prototype"in M&&M.prototype.render?n.__c=u=new M(x,y):(n.__c=u=new f(x,y),u.constructor=M,u.render=H),_&&_.sub(u),u.props=x,u.state||(u.state={}),u.context=y,u.__n=r,g=u.__d=!0,u.__h=[]),null==u.__s&&(u.__s=u.state),null!=M.getDerivedStateFromProps&&(u.__s==u.state&&(u.__s=c({},u.__s)),c(u.__s,M.getDerivedStateFromProps(x,u.__s))),m=u.props,b=u.state,g)null==M.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),null!=u.componentDidMount&&u.__h.push(u.componentDidMount);else{if(null==M.getDerivedStateFromProps&&x!==m&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(x,y),!u.__e&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(x,u.__s,y)||n.__v===a.__v){u.props=x,u.state=u.__s,n.__v!==a.__v&&(u.__d=!1),u.__v=n,n.__e=a.__e,n.__k=a.__k,u.__h.length&&s.push(u);break t}null!=u.componentWillUpdate&&u.componentWillUpdate(x,u.__s,y),null!=u.componentDidUpdate&&u.__h.push((function(){u.componentDidUpdate(m,b,w)}))}u.context=y,u.props=x,u.state=u.__s,(h=t.__r)&&h(n),u.__d=!1,u.__v=n,u.__P=e,h=u.render(u.props,u.state,u.context),u.state=u.__s,null!=u.getChildContext&&(r=c(c({},r),u.getChildContext())),g||null==u.getSnapshotBeforeUpdate||(w=u.getSnapshotBeforeUpdate(m,b)),k=null!=h&&h.type===p&&null==h.key?h.props.children:h,v(e,Array.isArray(k)?k:[k],n,a,r,o,i,s,l,d),u.base=n.__e,n.__h=null,u.__h.length&&s.push(u),C&&(u.__E=u.__=null),u.__e=!1}else null==i&&n.__v===a.__v?(n.__k=a.__k,n.__e=a.__e):n.__e=P(a.__e,n,a,r,o,i,s,d);(h=t.diffed)&&h(n)}catch(e){n.__v=null,(d||null!=i)&&(n.__e=l,n.__h=!!d,i[i.indexOf(l)]=null),t.__e(e,n,a)}}function D(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function P(t,e,n,a,r,o,l,c){var d,h,u,p,f,g=n.props,m=e.props;if(r="svg"===e.type||r,null!=o)for(d=0;d<o.length;d++)if(null!=(h=o[d])&&((null===e.type?3===h.nodeType:h.localName===e.type)||t==h)){t=h,o[d]=null;break}if(null==t){if(null===e.type)return document.createTextNode(m);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,m.is&&{is:m.is}),o=null,c=!1}if(null===e.type)g===m||c&&t.data===m||(t.data=m);else{if(null!=o&&(o=s.slice.call(t.childNodes)),u=(g=n.props||i).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!c){if(null!=o)for(g={},f=0;f<t.attributes.length;f++)g[t.attributes[f].name]=t.attributes[f].value;(p||u)&&(p&&(u&&p.__html==u.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}(function(t,e,n,a,r){var o;for(o in n)"children"===o||"key"===o||o in e||k(t,o,null,n[o],a);for(o in e)r&&"function"!=typeof e[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===e[o]||k(t,o,e[o],n[o],a)})(t,m,g,r,c),p?e.__k=[]:(d=e.props.children,v(t,Array.isArray(d)?d:[d],e,n,a,"foreignObject"!==e.type&&r,o,l,i,c)),c||("value"in m&&void 0!==(d=m.value)&&(d!==t.value||"progress"===e.type&&!d)&&k(t,"value",d,g.value,!1),"checked"in m&&void 0!==(d=m.checked)&&d!==t.checked&&k(t,"checked",d,g.checked,!1))}return t}function T(e,n,a){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,a)}}function z(e,n,a){var r,o,i;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||T(r,null,n)),a||"function"==typeof e.type||(a=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&z(r[i],n,a);null!=o&&d(o)}function H(t,e,n){return this.constructor(t,n)}t={__e:function(t,e){for(var n,a,r,o=e.__h;e=e.__;)if((n=e.__c)&&!n.__)try{if((a=n.constructor)&&null!=a.getDerivedStateFromError&&(n.setState(a.getDerivedStateFromError(t)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),r=n.__d),r)return e.__h=o,n.__E=n}catch(e){t=e}throw t},__v:0},f.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof t&&(t=t(c({},n),this.props)),t&&c(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),b(this))},f.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),b(this))},f.prototype.render=p,n=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,w.__r=0,o=i;var A=function t(e,n,a,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var s=n[i++],l=n[i]?(n[0]|=s?1:2,a[n[i++]]):n[++i];3===s?r[0]=l:4===s?r[1]=Object.assign(r[1]||{},l):5===s?(r[1]=r[1]||{})[n[++i]]=l:6===s?r[1][n[++i]]+=l+"":s?(o=e.apply(l,t(e,l,a,["",null])),r.push(o),l[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(l)}return r},E=new Map;(function(t){var e=E.get(this);return e||(e=new Map,E.set(this,e)),(e=A(this,e.get(t)||(e.set(t,e=function(t){for(var e,n,a=1,r="",o="",i=[0],s=function(t){1===a&&(t||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,t,r):3===a&&(t||r)?(i.push(3,t,r),a=2):2===a&&"..."===r&&t?i.push(4,t,0):2===a&&r&&!t?i.push(5,0,!0,r):a>=5&&((r||!t&&5===a)&&(i.push(a,0,r,n),a=6),t&&(i.push(a,t,0,n),a=6)),r=""},l=0;l<t.length;l++){l&&(1===a&&s(),s(l));for(var c=0;c<t[l].length;c++)e=t[l][c],1===a?"<"===e?(s(),i=[i],a=3):r+=e:4===a?"--"===r&&">"===e?(a=1,r=""):r=e+r[0]:o?e===o?o="":r+=e:'"'===e||"'"===e?o=e:">"===e?(s(),a=1):a&&("="===e?(a=5,n=r,r=""):"/"===e&&(a<5||">"===t[l][c+1])?(s(),3===a&&(i=i[0]),a=i,(i=i[0]).push(2,0,a),a=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(s(),a=2):r+=e),3===a&&"!--"===r&&(a=4,i=i[0])}return s(),i}(t)),e),arguments,[])).length>1?e:e[0]}).bind(h);const U=(t,e)=>{let n=window.matchMedia(t);n.addListener(t=>e(t.matches)),e(n.matches)};var j=t=>{var n=/^\0+/g,a=/[\0\r\f]/g,r=/: */g,o=/zoo|gra/,i=/([,: ])(transform)/g,s=/,+\s*(?![^(]*[)])/g,l=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,d=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,m=/:(read-only)/g,b=/\s+(?=[{\];=:>])/g,w=/([[}=:>])\s+/g,v=/(\{[^{]+?);(?=\})/g,C=/\s{2,}/g,x=/([^\(])(:+) */g,_=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,M=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,D=/([^-])(image-set\()/,P="-webkit-",T="-moz-",z="-ms-",H=59,A=125,E=123,U=40,j=41,W=10,R=13,O=32,V=45,I=42,B=44,N=58,F=47,Z=1,$=1,q=0,Y=1,G=1,X=1,K=0,Q=0,J=0,tt=[],et=[],nt=0,at=null,rt=0,ot=1,it="",st="",lt="";function ct(t,e,r,o,i){for(var s,l,d=0,h=0,u=0,p=0,b=0,w=0,v=0,C=0,_=0,k=0,M=0,L=0,S=0,D=0,T=0,z=0,K=0,et=0,at=0,ht=r.length,bt=ht-1,wt="",vt="",Ct="",xt="",_t="",yt="";T<ht;){if(v=r.charCodeAt(T),T===bt&&h+p+u+d!==0&&(0!==h&&(v=h===F?W:F),p=u=d=0,ht++,bt++),h+p+u+d===0){if(T===bt&&(z>0&&(vt=vt.replace(a,"")),vt.trim().length>0)){switch(v){case O:case 9:case H:case R:case W:break;default:vt+=r.charAt(T)}v=H}if(1===K)switch(v){case E:case A:case H:case 34:case 39:case U:case j:case B:K=0;case 9:case R:case W:case O:break;default:for(K=0,at=T,b=v,T--,v=H;at<ht;)switch(r.charCodeAt(at++)){case W:case R:case H:++T,v=b,at=ht;break;case N:z>0&&(++T,v=b);case E:at=ht}}switch(v){case E:for(b=(vt=vt.trim()).charCodeAt(0),M=1,at=++T;T<ht;){switch(v=r.charCodeAt(T)){case E:M++;break;case A:M--;break;case F:switch(w=r.charCodeAt(T+1)){case I:case F:T=mt(w,T,bt,r)}break;case 91:v++;case U:v++;case 34:case 39:for(;T++<bt&&r.charCodeAt(T)!==v;);}if(0===M)break;T++}switch(Ct=r.substring(at,T),0===b&&(b=(vt=vt.replace(n,"").trim()).charCodeAt(0)),b){case 64:switch(z>0&&(vt=vt.replace(a,"")),w=vt.charCodeAt(1)){case 100:case 109:case 115:case V:s=e;break;default:s=tt}if(at=(Ct=ct(e,s,Ct,w,i+1)).length,J>0&&0===at&&(at=vt.length),nt>0&&(l=gt(3,Ct,s=dt(tt,vt,et),e,$,Z,at,w,i,o),vt=s.join(""),void 0!==l&&0===(at=(Ct=l.trim()).length)&&(w=0,Ct="")),at>0)switch(w){case 115:vt=vt.replace(y,ft);case 100:case 109:case V:Ct=vt+"{"+Ct+"}";break;case 107:Ct=(vt=vt.replace(f,"$1 $2"+(ot>0?it:"")))+"{"+Ct+"}",Ct=1===G||2===G&&pt("@"+Ct,3)?"@"+P+Ct+"@"+Ct:"@"+Ct;break;default:Ct=vt+Ct,112===o&&(xt+=Ct,Ct="")}else Ct="";break;default:Ct=ct(e,dt(e,vt,et),Ct,o,i+1)}_t+=Ct,L=0,K=0,D=0,z=0,et=0,S=0,vt="",Ct="",v=r.charCodeAt(++T);break;case A:case H:if((at=(vt=(z>0?vt.replace(a,""):vt).trim()).length)>1)switch(0===D&&((b=vt.charCodeAt(0))===V||b>96&&b<123)&&(at=(vt=vt.replace(" ",":")).length),nt>0&&void 0!==(l=gt(1,vt,e,t,$,Z,xt.length,o,i,o))&&0===(at=(vt=l.trim()).length)&&(vt="\0\0"),b=vt.charCodeAt(0),w=vt.charCodeAt(1),b){case 0:break;case 64:if(105===w||99===w){yt+=vt+r.charAt(T);break}default:if(vt.charCodeAt(at-1)===N)break;xt+=ut(vt,b,w,vt.charCodeAt(2))}L=0,K=0,D=0,z=0,et=0,vt="",v=r.charCodeAt(++T)}}switch(v){case R:case W:if(h+p+u+d+Q===0)switch(k){case j:case 39:case 34:case 64:case 126:case 62:case I:case 43:case F:case V:case N:case B:case H:case E:case A:break;default:D>0&&(K=1)}h===F?h=0:Y+L===0&&107!==o&&vt.length>0&&(z=1,vt+="\0"),nt*rt>0&&gt(0,vt,e,t,$,Z,xt.length,o,i,o),Z=1,$++;break;case H:case A:if(h+p+u+d===0){Z++;break}default:switch(Z++,wt=r.charAt(T),v){case 9:case O:if(p+d+h===0)switch(C){case B:case N:case 9:case O:wt="";break;default:v!==O&&(wt=" ")}break;case 0:wt="\\0";break;case 12:wt="\\f";break;case 11:wt="\\v";break;case 38:p+h+d===0&&Y>0&&(et=1,z=1,wt="\f"+wt);break;case 108:if(p+h+d+q===0&&D>0)switch(T-D){case 2:112===C&&r.charCodeAt(T-3)===N&&(q=C);case 8:111===_&&(q=_)}break;case N:p+h+d===0&&(D=T);break;case B:h+u+p+d===0&&(z=1,wt+="\r");break;case 34:case 39:0===h&&(p=p===v?0:0===p?v:p);break;case 91:p+h+u===0&&d++;break;case 93:p+h+u===0&&d--;break;case j:p+h+d===0&&u--;break;case U:if(p+h+d===0){if(0===L)switch(2*C+3*_){case 533:break;default:M=0,L=1}u++}break;case 64:h+u+p+d+D+S===0&&(S=1);break;case I:case F:if(p+d+u>0)break;switch(h){case 0:switch(2*v+3*r.charCodeAt(T+1)){case 235:h=F;break;case 220:at=T,h=I}break;case I:v===F&&C===I&&at+2!==T&&(33===r.charCodeAt(at+2)&&(xt+=r.substring(at,T+1)),wt="",h=0)}}if(0===h){if(Y+p+d+S===0&&107!==o&&v!==H)switch(v){case B:case 126:case 62:case 43:case j:case U:if(0===L){switch(C){case 9:case O:case W:case R:wt+="\0";break;default:wt="\0"+wt+(v===B?"":"\0")}z=1}else switch(v){case U:D+7===T&&108===C&&(D=0),L=++M;break;case j:0==(L=--M)&&(z=1,wt+="\0")}break;case 9:case O:switch(C){case 0:case E:case A:case H:case B:case 12:case 9:case O:case W:case R:break;default:0===L&&(z=1,wt+="\0")}}vt+=wt,v!==O&&9!==v&&(k=v)}}_=C,C=v,T++}if(at=xt.length,J>0&&0===at&&0===_t.length&&0===e[0].length==0&&(109!==o||1===e.length&&(Y>0?st:lt)===e[0])&&(at=e.join(",").length+2),at>0){if(s=0===Y&&107!==o?function(t){for(var e,n,r=0,o=t.length,i=Array(o);r<o;++r){for(var s=t[r].split(c),l="",d=0,h=0,u=0,p=0,f=s.length;d<f;++d)if(!(0===(h=(n=s[d]).length)&&f>1)){if(u=l.charCodeAt(l.length-1),p=n.charCodeAt(0),e="",0!==d)switch(u){case I:case 126:case 62:case 43:case O:case U:break;default:e=" "}switch(p){case 38:n=e+st;case 126:case 62:case 43:case O:case j:case U:break;case 91:n=e+n+st;break;case N:switch(2*n.charCodeAt(1)+3*n.charCodeAt(2)){case 530:if(X>0){n=e+n.substring(8,h-1);break}default:(d<1||s[d-1].length<1)&&(n=e+st+n)}break;case B:e="";default:n=h>1&&n.indexOf(":")>0?e+n.replace(x,"$1"+st+"$2"):e+n+st}l+=n}i[r]=l.replace(a,"").trim()}return i}(e):e,nt>0&&void 0!==(l=gt(2,xt,s,t,$,Z,at,o,i,o))&&0===(xt=l).length)return yt+xt+_t;if(xt=s.join(",")+"{"+xt+"}",G*q!=0){switch(2!==G||pt(xt,2)||(q=0),q){case 111:xt=xt.replace(m,":-moz-$1")+xt;break;case 112:xt=xt.replace(g,"::"+P+"input-$1")+xt.replace(g,"::-moz-$1")+xt.replace(g,":-ms-input-$1")+xt}q=0}}return yt+xt+_t}function dt(t,e,n){var a=e.trim().split(d),r=a,o=a.length,i=t.length;switch(i){case 0:case 1:for(var s=0,l=0===i?"":t[0]+" ";s<o;++s)r[s]=ht(l,r[s],n,i).trim();break;default:s=0;var c=0;for(r=[];s<o;++s)for(var h=0;h<i;++h)r[c++]=ht(t[h]+" ",a[s],n,i).trim()}return r}function ht(t,e,n,a){var r=e,o=r.charCodeAt(0);switch(o<33&&(o=(r=r.trim()).charCodeAt(0)),o){case 38:switch(Y+a){case 0:case 1:if(0===t.trim().length)break;default:return r.replace(h,"$1"+t.trim())}break;case N:switch(r.charCodeAt(1)){case 103:if(X>0&&Y>0)return r.replace(u,"$1").replace(h,"$1"+lt);break;default:return t.trim()+r.replace(h,"$1"+t.trim())}default:if(n*Y>0&&r.indexOf("\f")>0)return r.replace(h,(t.charCodeAt(0)===N?"":"$1")+t.trim())}return t+r}function ut(t,e,n,a){var c,d=0,h=t+";",u=2*e+3*n+4*a;if(944===u)return function(t){var e=t.length,n=t.indexOf(":",9)+1,a=t.substring(0,n).trim(),r=t.substring(n,e-1).trim();switch(t.charCodeAt(9)*ot){case 0:break;case V:if(110!==t.charCodeAt(10))break;default:var o=r.split((r="",s)),i=0;for(n=0,e=o.length;i<e;n=0,++i){for(var c=o[i],d=c.split(l);c=d[n];){var h=c.charCodeAt(0);if(1===ot&&(h>64&&h<90||h>96&&h<123||95===h||h===V&&c.charCodeAt(1)!==V))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=it}}d[n++]=c}r+=(0===i?"":",")+d.join(" ")}}return r=a+r+";",1===G||2===G&&pt(r,1)?P+r+r:r}(h);if(0===G||2===G&&!pt(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?P+h+h:h;case 951:return 116===h.charCodeAt(3)?P+h+h:h;case 963:return 110===h.charCodeAt(5)?P+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return P+h+h;case 978:return P+h+T+h+h;case 1019:case 983:return P+h+T+h+z+h+h;case 883:return h.charCodeAt(8)===V?P+h+h:h.indexOf("image-set(",11)>0?h.replace(D,"$1"+P+"$2")+h:h;case 932:if(h.charCodeAt(4)===V)switch(h.charCodeAt(5)){case 103:return P+"box-"+h.replace("-grow","")+P+h+z+h.replace("grow","positive")+h;case 115:return P+h+z+h.replace("shrink","negative")+h;case 98:return P+h+z+h.replace("basis","preferred-size")+h}return P+h+z+h+h;case 964:return P+h+z+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return c=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),P+"box-pack"+c+P+h+z+"flex-pack"+c+h;case 1005:return o.test(h)?h.replace(r,":"+P)+h.replace(r,":"+T)+h:h;case 1e3:switch(d=(c=h.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(d)){case 226:c=h.replace(_,"tb");break;case 232:c=h.replace(_,"tb-rl");break;case 220:c=h.replace(_,"lr");break;default:return h}return P+h+z+c+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(d=(h=t).length-10,u=(c=(33===h.charCodeAt(d)?h.substring(0,d):h).substring(t.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:h=h.replace(c,P+c)+";"+h;break;case 207:case 102:h=h.replace(c,P+(u>102?"inline-":"")+"box")+";"+h.replace(c,P+c)+";"+h.replace(c,z+c+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===V)switch(h.charCodeAt(6)){case 105:return c=h.replace("-items",""),P+h+P+"box-"+c+z+"flex-"+c+h;case 115:return P+h+z+"flex-item-"+h.replace(M,"")+h;default:return P+h+z+"flex-line-pack"+h.replace("align-content","").replace(M,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==V||122===h.charCodeAt(4))break;case 931:case 953:if(!0===S.test(t))return 115===(c=t.substring(t.indexOf(":")+1)).charCodeAt(0)?ut(t.replace("stretch","fill-available"),e,n,a).replace(":fill-available",":stretch"):h.replace(c,P+c)+h.replace(c,T+c.replace("fill-",""))+h;break;case 962:if(h=P+h+(102===h.charCodeAt(5)?z+h:"")+h,n+a===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+P+"$2")+h}return h}function pt(t,e){var n=t.indexOf(1===e?":":"{"),a=t.substring(0,3!==e?n:10),r=t.substring(n+1,t.length-1);return at(2!==e?a:a.replace(L,"$1"),r,e)}function ft(t,e){var n=ut(e,e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2));return n!==e+";"?n.replace(k," or ($1)").substring(4):"("+e+")"}function gt(t,e,n,a,r,o,i,s,l,c){for(var d,h=0,u=e;h<nt;++h)switch(d=et[h].call(wt,t,u,n,a,r,o,i,s,l,c)){case void 0:case!1:case!0:case null:break;default:u=d}if(u!==e)return u}function mt(t,e,n,a){for(var r=e+1;r<n;++r)switch(a.charCodeAt(r)){case F:if(t===I&&a.charCodeAt(r-1)===I&&e+2!==r)return r+1;break;case W:if(t===F)return r+1}return r}function bt(t){for(var e in t){var n=t[e];switch(e){case"keyframe":ot=0|n;break;case"global":X=0|n;break;case"cascade":Y=0|n;break;case"compress":K=0|n;break;case"semicolon":Q=0|n;break;case"preserve":J=0|n;break;case"prefix":at=null,n?"function"!=typeof n?G=1:(G=2,at=n):G=0}}return bt}function wt(t,n){if(void 0!==this&&this.constructor===wt)return e(t);var r=t,o=r.charCodeAt(0);o<33&&(o=(r=r.trim()).charCodeAt(0)),ot>0&&(it=r.replace(p,91===o?"":"-")),o=1,1===Y?lt=r:st=r;var i,s=[lt];nt>0&&void 0!==(i=gt(-1,n,s,s,$,Z,0,0,0,0))&&"string"==typeof i&&(n=i);var l=ct(tt,s,n,0,0);return nt>0&&void 0!==(i=gt(-2,l,s,s,$,Z,l.length,0,0,0))&&"string"!=typeof(l=i)&&(o=0),it="",lt="",st="",q=0,$=1,Z=1,K*o==0?l:l.replace(a,"").replace(b,"").replace(w,"$1").replace(v,"$1").replace(C," ")}return wt.use=function t(e){switch(e){case void 0:case null:nt=et.length=0;break;default:if("function"==typeof e)et[nt++]=e;else if("object"==typeof e)for(var n=0,a=e.length;n<a;++n)t(e[n]);else rt=0|!!e}return t},wt.set=bt,void 0!==t&&bt(t),wt};const W={},R=document.createElement("style");document.head.appendChild(R);const O=t=>`.${t}{display:none}`,V=t=>/^(\/|https?:\/\/)/.test(t.trim()),I=t=>e=>n=>{R.innerHTML+=(W[t]={hash:e,rules:j()("."+e,n)}).rules,V(t)&&(t=>{R.innerHTML=R.innerHTML.replace(O(t),"")})(e)};var B=(t,...e)=>{const n=t[0].startsWith("/")?t[0]:t.reduce((t,n,a)=>t+(n+(null==e[a]?"":e[a])),"");if(W[n])return W[n].hash;const a="csz-"+Math.random().toString(36).replace("0.",""),r=I(n)(a);return V(n)?((t=>{R.innerHTML=O(t)+R.innerHTML})(a),fetch(n).then(t=>t.text()).then(r)):r(n),a};function N(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function F(t){N(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function Z(t){N(1,arguments);var e=F(t);return!isNaN(e)}var $={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function q(t,e,n){var a;return n=n||{},a="string"==typeof $[t]?$[t]:1===e?$[t].one:$[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a}function Y(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var G={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function K(t,e,n,a){return X[t]}function Q(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=r.width?String(r.width):o;a=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,l=r.width?String(r.width):t.defaultWidth;a=t.values[l]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}var J={ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function tt(t){return function(e,n){var a=String(e),r=n||{},o=a.match(t.matchPattern);if(!o)return null;var i=o[0],s=a.match(t.parsePattern);if(!s)return null;var l=t.valueCallback?t.valueCallback(s[0]):s[0];return{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(i.length)}}}function et(t){return function(e,n){var a=String(e),r=n||{},o=r.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],s=a.match(i);if(!s)return null;var l,c=s[0],d=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(c.length)}}}var nt={ordinalNumber:tt({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:et({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:et({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:et({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:et({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:et({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},at={code:"en-US",formatDistance:q,formatLong:G,formatRelative:K,localize:J,match:nt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function rt(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function ot(t,e){N(2,arguments);var n=F(t).getTime(),a=rt(e);return new Date(n+a)}function it(t,e){N(2,arguments);var n=rt(e);return ot(t,-n)}function st(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var lt=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return st("yy"===e?a%100:a,e.length)},ct=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):st(n+1,2)},dt=function(t,e){return st(t.getUTCDate(),e.length)},ht=function(t,e){return st(t.getUTCHours()%12||12,e.length)},ut=function(t,e){return st(t.getUTCHours(),e.length)},pt=function(t,e){return st(t.getUTCMinutes(),e.length)},ft=function(t,e){return st(t.getUTCSeconds(),e.length)},gt=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return st(Math.floor(a*Math.pow(10,n-3)),e.length)};function mt(t){N(1,arguments);var e=1,n=F(t),a=n.getUTCDay(),r=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function bt(t){N(1,arguments);var e=F(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=mt(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=mt(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function wt(t){N(1,arguments);var e=bt(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=mt(n);return a}function vt(t,e){N(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,o=null==r?0:rt(r),i=null==n.weekStartsOn?o:rt(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=F(t),l=s.getUTCDay(),c=(l<i?7:0)+l-i;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function Ct(t,e){N(1,arguments);var n=F(t,e),a=n.getUTCFullYear(),r=e||{},o=r.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:rt(i),l=null==r.firstWeekContainsDate?s:rt(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(a+1,0,l),c.setUTCHours(0,0,0,0);var d=vt(c,e),h=new Date(0);h.setUTCFullYear(a,0,l),h.setUTCHours(0,0,0,0);var u=vt(h,e);return n.getTime()>=d.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}function xt(t,e){N(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:rt(r),i=null==n.firstWeekContainsDate?o:rt(n.firstWeekContainsDate),s=Ct(t,e),l=new Date(0);l.setUTCFullYear(s,0,i),l.setUTCHours(0,0,0,0);var c=vt(l,e);return c}var _t="midnight",yt="noon",kt="morning",Mt="afternoon",Lt="evening",St="night",Dt={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return lt(t,e)},Y:function(t,e,n,a){var r=Ct(t,a),o=r>0?r:1-r;return"YY"===e?st(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):st(o,e.length)},R:function(t,e){return st(bt(t),e.length)},u:function(t,e){return st(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return st(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return st(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return ct(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return st(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=function(t,e){N(1,arguments);var n=F(t),a=vt(n,e).getTime()-xt(n,e).getTime();return Math.round(a/6048e5)+1}(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):st(r,e.length)},I:function(t,e,n){var a=function(t){N(1,arguments);var e=F(t),n=mt(e).getTime()-wt(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):st(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):dt(t,e)},D:function(t,e,n){var a=function(t){N(1,arguments);var e=F(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):st(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return st(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return st(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return st(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?yt:0===r?_t:r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?Lt:r>=12?Mt:r>=4?kt:St,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return ht(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):ut(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):st(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):st(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):pt(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):ft(t,e)},S:function(t,e){return gt(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Tt(r);case"XXXX":case"XX":return zt(r);case"XXXXX":case"XXX":default:return zt(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return Tt(r);case"xxxx":case"xx":return zt(r);case"xxxxx":case"xxx":default:return zt(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Pt(r,":");case"OOOO":default:return"GMT"+zt(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Pt(r,":");case"zzzz":default:return"GMT"+zt(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return st(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return st((a._originalDate||t).getTime(),e.length)}};function Pt(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+st(o,2)}function Tt(t,e){return t%60==0?(t>0?"-":"+")+st(Math.abs(t)/60,2):zt(t,e)}function zt(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+st(Math.floor(r/60),2)+n+st(r%60,2)}function Ht(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function At(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var Et={p:At,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return Ht(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Ht(r,e)).replace("{{time}}",At(o,e))}};function Ut(t){return t.getTime()%6e4}function jt(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+Ut(e))%6e4:Ut(e))}var Wt=["D","DD"],Rt=["YY","YYYY"];function Ot(t){return-1!==Wt.indexOf(t)}function Vt(t){return-1!==Rt.indexOf(t)}function It(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Bt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ft=/^'([^]*?)'?$/,Zt=/''/g,$t=/[a-zA-Z]/;function qt(t,e,n){N(2,arguments);var a=String(e),r=n||{},o=r.locale||at,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:rt(i),l=null==r.firstWeekContainsDate?s:rt(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:rt(c),h=null==r.weekStartsOn?d:rt(r.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var u=F(t);if(!Z(u))throw new RangeError("Invalid time value");var p=jt(u),f=it(u,p),g={firstWeekContainsDate:l,weekStartsOn:h,locale:o,_originalDate:u},m=a.match(Nt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Et[e])(t,o.formatLong,g):t})).join("").match(Bt).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return Yt(n);var i=Dt[a];if(i)return!r.useAdditionalWeekYearTokens&&Vt(n)&&It(n,e,t),!r.useAdditionalDayOfYearTokens&&Ot(n)&&It(n,e,t),i(f,n,o.localize,g);if(a.match($t))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return m}function Yt(t){return t.match(Ft)[1].replace(Zt,"'")}class Gt{constructor(){const t=document.createDocumentFragment();this.addEventListener=t.addEventListener.bind(t),this.dispatchEvent=t.dispatchEvent.bind(t),this.removeEventListener=t.removeEventListener.bind(t),this.__lastUpdate=Date.now()}_shouldInvalidate(){return new Date-this.__lastUpdate>3e5}}const Xt=new class extends Gt{constructor(){super(),window.addEventListener("click",this.__onClick.bind(this),!0),window.addEventListener("popstate",this.__onPathChanged.bind(this)),this.url=new URL(location)}setPath(t){window.history.pushState(null,"",t),this.__onPathChanged()}setSearchParam(t,e){const n=new URLSearchParams(location.search);e?n.set(t,e):n.delete(t);const a=n.toString();this.setPath(`${location.pathname}${a?"?"+a:""}`)}__onPathChanged(){this.url=new URL(location),this.dispatchEvent(new Event("path-changed")),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(t=>{t&&t.update()})}__onClick(t){if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(t=>"A"===t.tagName);if(!e||!e.href)return;if(e.hasAttribute("download")||e.href.includes("mailto:"))return;const n=e.getAttribute("target");if(n&&""!==n&&"_self"!==n)return;const a=new URL(e.href);a.hash||a.href.startsWith(document.baseURI)&&(t.preventDefault(),this.setPath(a.pathname))}};const Kt=new class extends Gt{close(t){this.dispatchEvent(new CustomEvent("close",{detail:t}))}};function Qt(t,e){N(2,arguments);var n=F(t),a=rt(e);return isNaN(a)?new Date(NaN):a?(n.setDate(n.getDate()+a),n):n}const Jt=h("svg",{class:"icon icon-tabler icon-tabler-info-circle","aria-labelledby":"srInfo",width:"28",height:"29",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M13.9965 0C11.2277 0.000685575 8.52133 0.822415 6.2195 2.36131C3.91766 3.9002 2.12379 6.08714 1.06469 8.6456C0.00559705 11.2041 -0.271147 14.0192 0.269437 16.7349C0.810022 19.4507 2.14366 21.9451 4.10174 23.9029C6.05981 25.8606 8.55437 27.1938 11.27 27.7337C13.9857 28.2737 16.8004 27.9962 19.3584 26.9364C21.9163 25.8766 24.1026 24.082 25.6408 21.7796C27.179 19.4772 28 16.7703 28 14.0013C27.9991 10.2876 26.5233 6.72631 23.8973 4.10066C21.2712 1.47502 17.7099 -1.13766e-07 13.9965 0ZM13.9965 6.21201C14.4655 6.21201 14.9238 6.35106 15.3137 6.6116C15.7036 6.87214 16.0075 7.24246 16.1869 7.67572C16.3664 8.10898 16.4133 8.5857 16.3219 9.04565C16.2304 9.5056 16.0046 9.92809 15.673 10.2597C15.3414 10.5913 14.919 10.8172 14.4591 10.9086C13.9992 11.0001 13.5225 10.9532 13.0892 10.7737C12.656 10.5942 12.2857 10.2903 12.0252 9.90039C11.7647 9.51046 11.6257 9.05205 11.6257 8.5831C11.6257 7.95424 11.8754 7.35112 12.3201 6.90646C12.7647 6.46179 13.3677 6.21201 13.9965 6.21201ZM17.1577 20.5495C17.1577 20.7334 17.0847 20.9097 16.9547 21.0397C16.8247 21.1698 16.6483 21.2428 16.4645 21.2428H11.5147C11.3309 21.2428 11.1545 21.1698 11.0245 21.0397C10.8945 20.9097 10.8215 20.7334 10.8215 20.5495V19.1976C10.8215 19.0137 10.8945 18.8374 11.0245 18.7073C11.1545 18.5773 11.3309 18.5043 11.5147 18.5043H12.1906V14.906H11.5147C11.3309 14.906 11.1545 14.833 11.0245 14.7029C10.8945 14.5729 10.8215 14.3966 10.8215 14.2127V12.8573C10.8215 12.6734 10.8945 12.4971 11.0245 12.3671C11.1545 12.237 11.3309 12.164 11.5147 12.164H15.1265C15.3104 12.164 15.4867 12.237 15.6167 12.3671C15.7467 12.4971 15.8198 12.6734 15.8198 12.8573V18.5043H16.4749C16.6587 18.5043 16.8351 18.5773 16.9651 18.7073C17.0951 18.8374 17.1681 19.0137 17.1681 19.1976L17.1577 20.5495Z",fill:"currentColor"})),te=(h("svg",{role:"img","aria-labelledby":"srSettings",xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"40",height:"40",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("title",{id:"srSettings"},"settings"),h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h("circle",{cx:"12",cy:"12",r:"3"})),h("svg",{class:"icon icon-tabler icon-tabler-settings","aria-labelledby":"srSettings",stroke:"currentColor",width:"28",height:"30",viewBox:"0 0 28 30",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M27.6411 18.7033L25.1277 17.2543C25.3828 15.8863 25.3828 14.4829 25.1277 13.1148L27.6411 11.6624C27.7807 11.5817 27.8887 11.4559 27.9474 11.3057C28.0062 11.1556 28.012 10.9898 27.9642 10.8359C27.3155 8.76067 26.2143 6.85542 24.7399 5.25758C24.6307 5.13999 24.4851 5.06262 24.3265 5.03793C24.1679 5.01325 24.0056 5.04268 23.8658 5.12151L21.3524 6.57392C20.2981 5.66454 19.082 4.96178 17.7677 4.50244V1.60783C17.7659 1.44842 17.7101 1.29436 17.6094 1.17078C17.5087 1.04721 17.369 0.961429 17.2133 0.927552C15.093 0.456441 12.8952 0.456441 10.775 0.927552C10.6192 0.961429 10.4795 1.04721 10.3788 1.17078C10.2781 1.29436 10.2223 1.44842 10.2206 1.60783V4.50924C8.90953 4.97569 7.69468 5.67768 6.63584 6.58069L4.12922 5.12832C3.9901 5.04702 3.8272 5.01614 3.66798 5.04092C3.50877 5.0657 3.36297 5.14461 3.25514 5.26435C1.77801 6.86015 0.676367 8.7661 0.0308698 10.8427C-0.0168644 10.9985 -0.00904608 11.1661 0.0529779 11.3168C0.115002 11.4676 0.227389 11.5921 0.370981 11.6692L2.88441 13.1182C2.62933 14.4874 2.62933 15.8919 2.88441 17.2611L0.370981 18.7101C0.228293 18.7882 0.1167 18.9128 0.0548046 19.0633C-0.00709105 19.2137 -0.0155458 19.3808 0.0308698 19.5367C0.679519 21.6119 1.78078 23.5172 3.25514 25.115C3.36402 25.2331 3.50971 25.3109 3.66844 25.3356C3.82717 25.3603 3.98959 25.3305 4.12922 25.251L6.63924 23.7987C7.69529 24.7074 8.91238 25.41 10.2274 25.8701V28.7715C10.2292 28.9309 10.2849 29.085 10.3857 29.2086C10.4864 29.3321 10.626 29.4179 10.7818 29.4518C12.902 29.9229 15.0998 29.9229 17.2201 29.4518C17.3753 29.4168 17.5143 29.3307 17.6148 29.2074C17.7153 29.0841 17.7715 28.9306 17.7745 28.7715V25.8701C19.0855 25.4037 20.3004 24.7017 21.3592 23.7987L23.8727 25.251C24.0103 25.3354 24.1735 25.368 24.333 25.3431C24.4925 25.3181 24.638 25.2373 24.7433 25.115C26.2214 23.5193 27.3242 21.6134 27.971 19.5367C28.0162 19.3809 28.0084 19.2144 27.9487 19.0635C27.8889 18.9127 27.7807 18.7859 27.6411 18.7033ZM13.9924 19.9006C13.0593 19.8999 12.1473 19.6225 11.3718 19.1034C10.5964 18.5843 9.99227 17.8469 9.63595 16.9843C9.27963 16.1218 9.1871 15.173 9.37005 14.2579C9.55301 13.3428 10.0032 12.5025 10.6638 11.8433C11.3243 11.1841 12.1655 10.7357 13.0809 10.5547C13.9964 10.3737 14.9449 10.4683 15.8066 10.8265C16.6682 11.1847 17.4043 11.7905 17.9217 12.5671C18.4391 13.3438 18.7145 14.2564 18.7132 15.1897C18.7096 16.4398 18.2107 17.6375 17.3259 18.5205C16.4411 19.4034 15.2424 19.8997 13.9924 19.9006Z",fill:"currentColor"}))),ee=h("svg",{class:"icon icon-tabler icon-tabler-refresh","aria-labelledby":"srTicker",width:"28",height:"29",viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M20.4855 7.74409C19.2786 6.61667 17.7987 5.82335 16.1917 5.44237C14.5847 5.06139 12.9062 5.10592 11.3217 5.57155C9.7372 6.03718 8.30142 6.90782 7.15597 8.09762C6.01052 9.28743 5.19496 10.7553 4.78975 12.3565C4.75274 12.5029 4.66826 12.633 4.54951 12.7264C4.43075 12.8199 4.28441 12.8713 4.13334 12.8727H0.892313C0.791845 12.8742 0.692292 12.8535 0.600732 12.8121C0.509171 12.7707 0.427852 12.7097 0.36257 12.6333C0.297287 12.5569 0.249644 12.4671 0.223023 12.3702C0.196403 12.2733 0.19146 12.1717 0.208552 12.0727C0.6785 9.59459 1.80827 7.28924 3.47876 5.39961C5.14926 3.50999 7.29859 2.10611 9.70017 1.33597C12.1018 0.565828 14.6666 0.45796 17.1244 1.02373C19.5821 1.58951 21.8417 2.80795 23.665 4.55064L25.6855 2.52996C25.8773 2.34574 26.1186 2.22145 26.38 2.1723C26.6413 2.12314 26.9113 2.15127 27.157 2.25322C27.4026 2.35518 27.6131 2.52653 27.7629 2.74633C27.9126 2.96612 27.995 3.22482 28 3.49073V11.0674C28 11.4302 27.8559 11.778 27.5995 12.0345C27.343 12.291 26.9952 12.4351 26.6325 12.4351H19.0735C18.8076 12.4301 18.549 12.3477 18.3292 12.198C18.1094 12.0482 17.938 11.8376 17.8361 11.592C17.7341 11.3464 17.706 11.0763 17.7552 10.8149C17.8043 10.5536 17.9286 10.3122 18.1128 10.1204L20.4855 7.74409ZM1.34018 16.9415H8.91624C9.18281 16.9458 9.4423 17.028 9.66277 17.178C9.88324 17.3279 10.0551 17.539 10.1572 17.7853C10.2592 18.0316 10.2871 18.3024 10.2373 18.5643C10.1875 18.8263 10.0623 19.0679 9.87693 19.2596L7.51453 21.6188C8.72103 22.7472 10.2009 23.5414 11.8082 23.923C13.4154 24.3045 15.0943 24.2602 16.6792 23.7945C18.2641 23.3288 19.7001 22.4577 20.8455 21.2672C21.9908 20.0768 22.8059 18.6082 23.2103 17.0064C23.2473 16.8599 23.3317 16.7298 23.4505 16.6364C23.5692 16.543 23.7156 16.4916 23.8667 16.4902H27.1077C27.2085 16.4886 27.3084 16.5093 27.4003 16.5509C27.4921 16.5925 27.5736 16.6539 27.639 16.7307C27.7043 16.8075 27.7519 16.8978 27.7782 16.9951C27.8046 17.0924 27.8091 17.1944 27.7914 17.2936C27.3215 19.7717 26.1917 22.0771 24.5212 23.9667C22.8507 25.8563 20.7014 27.2602 18.2998 28.0303C15.8982 28.8005 13.3334 28.9083 10.8756 28.3426C8.41787 27.7768 6.15828 26.5583 4.33505 24.8156L2.31454 26.8329C2.12294 27.017 1.8819 27.1412 1.62085 27.1905C1.35981 27.2398 1.09005 27.2119 0.844559 27.1104C0.59907 27.0089 0.388469 26.838 0.238486 26.6187C0.0885027 26.3994 0.00563247 26.1412 0 25.8756V18.3023C0.00260067 17.946 0.14411 17.6048 0.394402 17.3513C0.644694 17.0978 0.984015 16.952 1.34018 16.9449V16.9415Z",fill:"currentColor"})),ne=h("svg",{class:"icon icon-tabler icon-tabler-circle-plus","aria-labelledby":"srContribute",width:"28",height:"24",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M26.6002 11.3254H22.3817V7.10655C22.3817 6.96109 22.3239 6.82158 22.2211 6.71873C22.1182 6.61588 21.9787 6.55811 21.8333 6.55811H19.2938C19.1483 6.55811 19.0088 6.61588 18.906 6.71873C18.8031 6.82158 18.7454 6.96109 18.7454 7.10655V11.3254H14.5269C14.3815 11.3254 14.242 11.3831 14.1391 11.486C14.0363 11.5888 13.9785 11.7283 13.9785 11.8738V14.4304C13.9785 14.5758 14.0363 14.7153 14.1391 14.8182C14.242 14.9211 14.3815 14.9788 14.5269 14.9788H18.7454V19.1976C18.7454 19.3431 18.8031 19.4826 18.906 19.5854C19.0088 19.6883 19.1483 19.7461 19.2938 19.7461H21.8502C21.9956 19.7461 22.1351 19.6883 22.2379 19.5854C22.3408 19.4826 22.3986 19.3431 22.3986 19.1976V14.9788H26.617C26.7625 14.9788 26.902 14.9211 27.0048 14.8182C27.1076 14.7153 27.1654 14.5758 27.1654 14.4304V11.8738C27.1655 11.8003 27.1507 11.7276 27.1221 11.6599C27.0935 11.5923 27.0516 11.5311 26.9989 11.4799C26.9462 11.4287 26.8837 11.3887 26.8152 11.3621C26.7467 11.3356 26.6736 11.3231 26.6002 11.3254Z",fill:"currentColor"}),h("path",{d:"M20.5722 25.0283C27.1305 25.0283 32.4471 19.7113 32.4471 13.1523C32.4471 6.59343 27.1305 1.27637 20.5722 1.27637C14.0139 1.27637 8.69727 6.59343 8.69727 13.1523C8.69727 19.7113 14.0139 25.0283 20.5722 25.0283Z",stroke:"currentColor","stroke-width":"2","stroke-miterlimit":"10"}),h("path",{d:"M39.3186 22.0245C38.9062 21.6746 38.383 21.4825 37.8422 21.4825C37.3013 21.4825 36.7781 21.6746 36.3657 22.0245L29.9916 27.1251C29.207 27.7516 28.2325 28.0923 27.2285 28.0912H19.0785C18.7853 28.0912 18.5042 27.9747 18.297 27.7674C18.0897 27.5601 17.9732 27.279 17.9732 26.9859C17.9732 26.6927 18.0897 26.4116 18.297 26.2043C18.5042 25.997 18.7853 25.8805 19.0785 25.8805H24.4823C25.0196 25.8916 25.5437 25.714 25.9637 25.3788C26.3837 25.0435 26.673 24.5717 26.7814 24.0453C26.8354 23.728 26.8195 23.4027 26.7348 23.0922C26.6501 22.7816 26.4986 22.4934 26.2909 22.2475C26.0832 22.0016 25.8243 21.804 25.5323 21.6686C25.2403 21.5332 24.9223 21.4631 24.6004 21.4634H13.5607C11.6981 21.4632 9.89231 22.1054 8.44798 23.2817L5.24617 25.8805H1.42425C1.13186 25.8816 0.851805 25.9986 0.645445 26.2057C0.439085 26.4129 0.32324 26.6934 0.323242 26.9859V33.6094C0.32324 33.9019 0.439085 34.1824 0.645445 34.3895C0.851805 34.5967 1.13186 34.7137 1.42425 34.7148H26.0431C27.0458 34.7156 28.0189 34.3748 28.802 33.7486L39.2385 25.3996C39.4887 25.1979 39.6919 24.9442 39.8341 24.6559C39.9762 24.3677 40.0538 24.0519 40.0614 23.7306C40.0691 23.4093 40.0065 23.0903 39.8783 22.7956C39.75 22.5009 39.559 22.2378 39.3186 22.0245Z",fill:"currentColor"})),ae=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},h("path",{d:"M0 0h24v24H0V0z",fill:"none"}),h("path",{d:"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",fill:"currentColor"})),re=(h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h("polyline",{points:"20 6 9 17 4 12"})),h("svg",{style:"fill: var(--ld-text); display: block; margin-left:auto; margin-right:auto;",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"auto",height:"auto",viewBox:"0 0 710.000000 115.000000",preserveAspectRatio:"xMidYMid meet"},h("g",{transform:"translate(0.000000,115.000000) scale(0.100000,-0.100000)",fill:"var(--ld-text)",stroke:"none"},h("path",{d:"M895 1134 c-48 -18 -102 -67 -121 -111 -9 -21 -14 -70 -14 -139 l0 -106 -47 -52 c-25 -28 -60 -80 -77 -116 -29 -61 -31 -73 -31 -176 0 -107 1 -112 37 -185 46 -93 112 -158 206 -202 63 -30 74 -32 177 -32 103 0 114 2 177 32 94 44 160 109 206 202 36 73 37 78 37 185 0 105 -2 115 -32 177 -18 37 -53 89 -78 117 l-45 50 0 103 c0 79 -5 114 -19 145 -22 49 -78 97 -130 113 -53 15 -198 13 -246 -5z m246 -100 c17 -8 37 -30 45 -49 15 -36 20 -155 7 -155 -5 0 -30 7 -57 15 -27 8 -77 15 -111 15 -34 0 -84 -7 -111 -15 -27 -8 -52 -15 -56 -15 -5 0 -8 28 -8 63 0 72 22 125 60 144 37 19 194 17 231 -3z m-258 -335 c-13 -33 -30 -99 -36 -145 l-11 -84 -79 0 -79 0 7 37 c16 88 92 190 172 232 21 11 41 20 44 21 4 0 -4 -27 -18 -61z m184 22 c28 -42 50 -112 59 -191 l7 -60 -107 0 -106 0 0 33 c0 43 26 151 46 190 39 76 64 83 101 28z m121 20 c81 -41 161 -147 177 -234 l7 -37 -79 0 -79 0 -12 85 c-6 46 -22 112 -35 145 -14 33 -23 60 -20 60 2 0 21 -9 41 -19z m-344 -412 c8 -65 42 -186 58 -207 21 -25 -17 -12 -70 24 -57 38 -107 100 -134 167 -30 75 -28 77 61 77 l78 0 7 -61z m282 7 c-13 -114 -63 -226 -101 -226 -38 0 -88 111 -101 220 l-7 60 108 0 108 0 -7 -54z m239 22 c-9 -41 -39 -103 -72 -146 -25 -33 -119 -102 -139 -102 -7 0 -3 22 13 60 13 33 29 96 35 140 l12 80 79 0 79 0 -7 -32z"}),h("path",{d:"M1850 835 c-186 -53 -300 -204 -302 -401 -2 -183 94 -328 262 -396 45 -18 75 -22 165 -22 130 0 197 21 267 84 l43 39 -36 36 -36 37 -47 -36 c-101 -77 -253 -80 -368 -7 -219 139 -164 494 87 562 104 29 233 3 298 -58 l27 -27 35 34 c19 19 35 39 35 44 -1 18 -85 76 -142 98 -71 27 -213 34 -288 13z"}),h("path",{d:"M4445 836 c-261 -64 -392 -344 -276 -592 99 -211 375 -296 604 -185 213 103 286 390 155 603 -90 146 -295 220 -483 174z m250 -121 c71 -31 120 -77 152 -143 24 -49 28 -69 28 -142 0 -73 -4 -93 -28 -142 -51 -105 -154 -169 -274 -170 -84 0 -135 13 -195 51 -128 82 -174 261 -104 405 72 148 264 212 421 141z"}),h("path",{d:"M0 430 l0 -410 280 0 280 0 0 50 0 50 -220 0 -220 0 0 360 0 360 -60 0 -60 0 0 -410z"}),h("path",{d:"M2430 430 l0 -410 60 0 60 0 0 108 0 108 75 74 c45 45 78 70 83 65 5 -6 75 -88 156 -182 l148 -173 64 0 c35 0 64 3 64 6 0 3 -81 104 -181 225 l-181 220 129 135 c70 74 148 157 171 185 l44 49 -64 0 -63 1 -222 -228 -222 -228 -1 228 0 227 -60 0 -60 0 0 -410z"}),h("path",{d:"M3250 430 l0 -412 233 4 c211 3 237 6 288 26 174 69 261 197 261 382 0 185 -87 313 -261 382 -51 20 -77 23 -288 26 l-233 4 0 -412z m506 270 c46 -24 79 -49 101 -78 69 -91 81 -229 29 -337 -31 -63 -70 -98 -146 -134 -50 -23 -70 -25 -212 -29 l-158 -4 0 312 0 312 159 -4 c159 -4 160 -4 227 -38z"}),h("path",{d:"M5042 828 c3 -7 65 -192 137 -410 l133 -398 63 0 63 0 70 202 c38 112 87 256 108 321 21 64 41 117 44 117 3 0 55 -144 115 -320 l108 -320 63 0 62 0 133 398 c72 218 134 403 137 410 3 10 -9 12 -53 10 l-58 -3 -110 -329 c-68 -205 -113 -324 -117 -315 -5 8 -56 157 -115 332 l-108 317 -52 0 -53 0 -30 -82 c-16 -46 -66 -192 -112 -326 -45 -133 -86 -242 -89 -242 -4 0 -54 145 -112 322 l-105 323 -63 3 c-49 2 -62 0 -59 -10z"}),h("path",{d:"M6390 430 l0 -410 60 0 60 0 2 302 3 302 243 -302 243 -302 49 0 50 0 0 410 0 410 -60 0 -60 0 -2 -302 -3 -302 -243 302 -243 302 -49 0 -50 0 0 -410z"})))),oe=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.76 45.17"},h("defs",null,h("style",null,".cls-1 {\n          fill: #828282;\n          fill-rule: evenodd;\n        }")),h("title",null,"Asset 2"),h("g",{id:"Layer_2","data-name":"Layer 2"},h("g",{id:"Layer_1-2","data-name":"Layer 1"},h("path",{class:"cls-1",d:"M11,0,7.47,3.51l6.9,6.9h-1a14.93,14.93,0,0,0,1.62,29.78H44.15l5,5,3.51-3.51ZM59.76,27.74A12.39,12.39,0,0,0,48.18,15.39,18.58,18.58,0,0,0,20.79,2.76L24.5,6.47a13.47,13.47,0,0,1,5.38-1.14A13.69,13.69,0,0,1,43.58,19v1.25h3.73a7.46,7.46,0,0,1,4.46,13.45l3.51,3.51A12.39,12.39,0,0,0,59.76,27.74ZM5,25.25a10,10,0,0,0,10,10H39.17L19.25,15.29H14.94A10,10,0,0,0,5,25.25Z"})))),ie=h("svg",{viewBox:"25 25 50 50"},h("circle",{cx:"50",cy:"50",r:"20"})),se=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),le=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 24 24",width:"20"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"})),ce=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"20"},h("g",null,h("path",{d:"M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"}),h("path",{d:"M0,0h24v24H0V0z",fill:"none"}))),de=h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"})),he=h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"})),ue=h("svg",{width:"22",height:"14",viewBox:"0 0 22 14",fill:"currentColor",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},h("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.5 2.33333V0H21.5V2.33333H0.5ZM0.5 8.16667H21.5V5.83333H0.5V8.16667ZM0.5 14H21.5V11.6667H0.5V14Z",fill:"currentColor","fill-opacity":"1"})),pe=(h("svg",{width:"46",height:"107",viewBox:"0 0 46 107",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("g",{filter:"url(#filter0_d)"},h("path",{d:"M48 99V0L18.0997 11.176C14.745 12.43 11.7528 14.4949 9.39021 17.1866C5.91586 21.1449 4 26.2318 4 31.4987V69.4519C4 72.4131 4.74691 75.3265 6.17162 77.9224C8.13247 81.4953 11.2721 84.2772 15.0551 85.7936L48 99Z",fill:"currentColor"})),h("defs",null,h("filter",{id:"filter0_d",x:"0",y:"0",width:"52",height:"107",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},h("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),h("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),h("feOffset",{dy:"4"}),h("feGaussianBlur",{stdDeviation:"2"}),h("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),h("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),h("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))),h("svg",{width:"64",height:"104",viewBox:"0 0 64 104",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("g",{filter:"url(#filter0_d)"},h("path",{d:"M4 96V0L43.7854 11.3302C46.9295 12.2256 49.8387 13.8004 52.3075 15.9433C57.1936 20.1847 60 26.3368 60 32.8071V66.1812C60 69.785 58.8666 73.2976 56.7603 76.2217C54.565 79.2694 51.4314 81.5136 47.8392 82.6107L4 96Z",fill:"currentColor"})),h("defs",null,h("filter",{id:"filter0_d",x:"0",y:"0",width:"64",height:"104",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"},h("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),h("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),h("feOffset",{dy:"4"}),h("feGaussianBlur",{stdDeviation:"2"}),h("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),h("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),h("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))),[" ",h("svg",{width:"33",height:"30",viewBox:"0 0 33 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M2.95234 13.7899C4.58287 13.7899 5.90468 12.4681 5.90468 10.8376C5.90468 9.20706 4.58287 7.88525 2.95234 7.88525C1.32181 7.88525 0 9.20706 0 10.8376C0 12.4681 1.32181 13.7899 2.95234 13.7899Z",fill:"#F2994A"}),h("path",{d:"M2.95432 5.89301C4.58163 5.89301 5.90082 4.57381 5.90082 2.9465C5.90082 1.3192 4.58163 0 2.95432 0C1.32701 0 0.0078125 1.3192 0.0078125 2.9465C0.0078125 4.57381 1.32701 5.89301 2.95432 5.89301Z",fill:"#6FCF97"}),h("path",{d:"M2.95234 29.6054C4.58287 29.6054 5.90468 28.2836 5.90468 26.653C5.90468 25.0225 4.58287 23.7007 2.95234 23.7007C1.32181 23.7007 0 25.0225 0 26.653C0 28.2836 1.32181 29.6054 2.95234 29.6054Z",fill:"#CCCCCC"}),h("path",{d:"M2.95334 21.7075C4.58065 21.7075 5.89984 20.3883 5.89984 18.761C5.89984 17.1336 4.58065 15.8145 2.95334 15.8145C1.32603 15.8145 0.00683594 17.1336 0.00683594 18.761C0.00683594 20.3883 1.32603 21.7075 2.95334 21.7075Z",fill:"#EB5757"}),h("path",{d:"M28.4379 4.21792H10.686C10.5167 4.2261 10.3476 4.19983 10.1888 4.14069C10.03 4.08156 9.88488 3.9908 9.76221 3.87392C9.63954 3.75703 9.54188 3.61646 9.47516 3.46071C9.40843 3.30496 9.37402 3.13728 9.37402 2.96784C9.37402 2.7984 9.40843 2.63073 9.47516 2.47498C9.54188 2.31923 9.63954 2.17865 9.76221 2.06177C9.88488 1.94488 10.03 1.85413 10.1888 1.79499C10.3476 1.73586 10.5167 1.70959 10.686 1.71777H28.4379C28.759 1.73328 29.0618 1.87176 29.2836 2.1045C29.5054 2.33723 29.629 2.64637 29.629 2.96784C29.629 3.28931 29.5054 3.59846 29.2836 3.83119C29.0618 4.06393 28.759 4.2024 28.4379 4.21792Z",fill:"currentColor"}),h("path",{d:"M25.0217 12.0514H10.686C10.5167 12.0596 10.3476 12.0333 10.1888 11.9742C10.03 11.9151 9.88488 11.8243 9.76221 11.7074C9.63954 11.5905 9.54188 11.45 9.47516 11.2942C9.40843 11.1385 9.37402 10.9708 9.37402 10.8013C9.37402 10.6319 9.40843 10.4642 9.47516 10.3085C9.54188 10.1527 9.63954 10.0121 9.76221 9.89526C9.88488 9.77838 10.03 9.68762 10.1888 9.62849C10.3476 9.56936 10.5167 9.54309 10.686 9.55126H25.0217C25.3428 9.56678 25.6456 9.70526 25.8674 9.93799C26.0892 10.1707 26.2129 10.4799 26.2129 10.8013C26.2129 11.1228 26.0892 11.432 25.8674 11.6647C25.6456 11.8974 25.3428 12.0359 25.0217 12.0514Z",fill:"currentColor"}),h("path",{d:"M31.6878 19.9689H10.683C10.5138 19.9771 10.3447 19.9508 10.1859 19.8917C10.0271 19.8325 9.88195 19.7418 9.75928 19.6249C9.63661 19.508 9.53895 19.3674 9.47223 19.2117C9.4055 19.0559 9.37109 18.8883 9.37109 18.7188C9.37109 18.5494 9.4055 18.3817 9.47223 18.226C9.53895 18.0702 9.63661 17.9296 9.75928 17.8127C9.88195 17.6959 10.0271 17.6051 10.1859 17.546C10.3447 17.4868 10.5138 17.4606 10.683 17.4687H31.6878C31.8571 17.4606 32.0262 17.4868 32.185 17.546C32.3438 17.6051 32.4889 17.6959 32.6116 17.8127C32.7342 17.9296 32.8319 18.0702 32.8986 18.226C32.9654 18.3817 32.9998 18.5494 32.9998 18.7188C32.9998 18.8883 32.9654 19.0559 32.8986 19.2117C32.8319 19.3674 32.7342 19.508 32.6116 19.6249C32.4889 19.7418 32.3438 19.8325 32.185 19.8917C32.0262 19.9508 31.8571 19.9771 31.6878 19.9689Z",fill:"currentColor"}),h("path",{d:"M27.271 27.8864H10.686C10.5167 27.8946 10.3476 27.8683 10.1888 27.8092C10.03 27.75 9.88488 27.6593 9.76221 27.5424C9.63954 27.4255 9.54188 27.2849 9.47516 27.1292C9.40843 26.9734 9.37402 26.8057 9.37402 26.6363C9.37402 26.4669 9.40843 26.2992 9.47516 26.1434C9.54188 25.9877 9.63954 25.8471 9.76221 25.7302C9.88488 25.6133 10.03 25.5226 10.1888 25.4635C10.3476 25.4043 10.5167 25.378 10.686 25.3862H27.271C27.5921 25.4017 27.8949 25.5402 28.1167 25.773C28.3384 26.0057 28.4621 26.3148 28.4621 26.6363C28.4621 26.9578 28.3384 27.2669 28.1167 27.4996C27.8949 27.7324 27.5921 27.8709 27.271 27.8864Z",fill:"currentColor"}))]),fe=(h("svg",{width:"19",height:"15",viewBox:"0 0 19 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M4.22683 6.56174L14.9585 14.8559C14.7667 14.9505 14.5556 14.9998 14.3417 15H4.0297C3.65643 15 3.29844 14.8517 3.0345 14.5878C2.77055 14.3238 2.62227 13.9659 2.62227 13.5926V7.96708C2.62227 7.78235 2.65869 7.59943 2.72945 7.42879C2.80021 7.25815 2.90391 7.10314 3.03463 6.97262C3.16535 6.8421 3.32052 6.73863 3.49127 6.66813C3.66202 6.59763 3.84498 6.56146 4.0297 6.56174H4.22683ZM18.4029 13.9678L17.8349 14.699C17.7976 14.7469 17.7512 14.787 17.6984 14.817C17.6456 14.8469 17.5875 14.8662 17.5272 14.8737C17.467 14.8812 17.4059 14.8767 17.3474 14.8605C17.2889 14.8444 17.2341 14.8169 17.1863 14.7796L16.6606 14.3726C16.6413 14.3462 16.6185 14.3227 16.5928 14.3026L15.7449 13.6498L12.93 11.473L5.49013 5.70757V5.71813L4.73767 5.13735L3.39806 4.10087C3.37171 4.08087 3.34238 4.06514 3.31115 4.05425L0.178338 1.63152C0.0814905 1.55582 0.0186169 1.44478 0.00351715 1.32279C-0.0115826 1.2008 0.0223233 1.07781 0.0977905 0.980781L0.66585 0.25164C0.702989 0.203595 0.74923 0.163295 0.801937 0.133135C0.854643 0.102975 0.91278 0.0835265 0.973018 0.0758491C1.03326 0.0681716 1.09441 0.072448 1.153 0.0884241C1.21159 0.1044 1.26645 0.131751 1.31446 0.168945L4.01274 2.25468V2.24195L4.98354 2.99231C5.32847 1.99803 6.01455 1.15814 6.91998 0.621696C7.82541 0.0852517 8.89163 -0.113044 9.92938 0.0620322C10.9671 0.237108 11.9093 0.774211 12.5886 1.57801C13.2679 2.38182 13.6405 3.4003 13.6401 4.45271V6.57234H14.3438C14.5286 6.57206 14.7115 6.60824 14.8823 6.67874C15.053 6.74924 15.2082 6.85271 15.3389 6.98323C15.4696 7.11375 15.5733 7.26876 15.6441 7.43939C15.7148 7.61003 15.7513 7.79296 15.7513 7.97769V11.3415L18.3224 13.3298C18.416 13.4048 18.4768 13.5134 18.4918 13.6324C18.5069 13.7515 18.475 13.8718 18.4029 13.9678ZM9.58738 6.56174H11.2958V4.4421C11.3238 4.14814 11.29 3.85159 11.1967 3.57143C11.1034 3.29127 10.9526 3.0337 10.7539 2.81522C10.5553 2.59675 10.3131 2.4222 10.0431 2.30276C9.77303 2.18331 9.481 2.12163 9.18571 2.12163C8.89042 2.12163 8.59839 2.18331 8.32833 2.30276C8.05828 2.4222 7.81616 2.59675 7.6175 2.81522C7.41884 3.0337 7.26801 3.29127 7.1747 3.57143C7.08138 3.85159 7.04763 4.14814 7.07561 4.4421V4.60532L9.58738 6.56174Z",fill:"#CCCCCC"}),h("path",{d:"M4.22683 6.56174L14.9585 14.8559C14.7667 14.9505 14.5556 14.9998 14.3417 15H4.0297C3.65643 15 3.29844 14.8517 3.0345 14.5878C2.77055 14.3238 2.62227 13.9659 2.62227 13.5926V7.96708C2.62227 7.78235 2.65869 7.59943 2.72945 7.42879C2.80021 7.25815 2.90391 7.10314 3.03463 6.97262C3.16535 6.8421 3.32052 6.73863 3.49127 6.66813C3.66202 6.59763 3.84498 6.56146 4.0297 6.56174H4.22683ZM18.4029 13.9678L17.8349 14.699C17.7976 14.7469 17.7512 14.787 17.6984 14.817C17.6456 14.8469 17.5875 14.8662 17.5272 14.8737C17.467 14.8812 17.4059 14.8767 17.3474 14.8605C17.2889 14.8444 17.2341 14.8169 17.1863 14.7796L16.6606 14.3726C16.6413 14.3462 16.6185 14.3227 16.5928 14.3026L15.7449 13.6498L12.93 11.473L5.49013 5.70757V5.71813L4.73767 5.13735L3.39806 4.10087C3.37171 4.08087 3.34238 4.06514 3.31115 4.05425L0.178338 1.63152C0.0814905 1.55582 0.0186169 1.44478 0.00351715 1.32279C-0.0115826 1.2008 0.0223233 1.07781 0.0977905 0.980781L0.66585 0.25164C0.702989 0.203595 0.74923 0.163295 0.801937 0.133135C0.854643 0.102975 0.91278 0.0835265 0.973018 0.0758491C1.03326 0.0681716 1.09441 0.072448 1.153 0.0884241C1.21159 0.1044 1.26645 0.131751 1.31446 0.168945L4.01274 2.25468V2.24195L4.98354 2.99231C5.32847 1.99803 6.01455 1.15814 6.91998 0.621696C7.82541 0.0852517 8.89163 -0.113044 9.92938 0.0620322C10.9671 0.237108 11.9093 0.774211 12.5886 1.57801C13.2679 2.38182 13.6405 3.4003 13.6401 4.45271V6.57234H14.3438C14.5286 6.57206 14.7115 6.60824 14.8823 6.67874C15.053 6.74924 15.2082 6.85271 15.3389 6.98323C15.4696 7.11375 15.5733 7.26876 15.6441 7.43939C15.7148 7.61003 15.7513 7.79296 15.7513 7.97769V11.3415L18.3224 13.3298C18.416 13.4048 18.4768 13.5134 18.4918 13.6324C18.5069 13.7515 18.475 13.8718 18.4029 13.9678ZM9.58738 6.56174H11.2958V4.4421C11.3238 4.14814 11.29 3.85159 11.1967 3.57143C11.1034 3.29127 10.9526 3.0337 10.7539 2.81522C10.5553 2.59675 10.3131 2.4222 10.0431 2.30276C9.77303 2.18331 9.481 2.12163 9.18571 2.12163C8.89042 2.12163 8.59839 2.18331 8.32833 2.30276C8.05828 2.4222 7.81616 2.59675 7.6175 2.81522C7.41884 3.0337 7.26801 3.29127 7.1747 3.57143C7.08138 3.85159 7.04763 4.14814 7.07561 4.4421V4.60532L9.58738 6.56174Z",fill:"#CCCCCC"}),h("path",{d:"M4.22683 6.56174L14.9585 14.8559C14.7667 14.9505 14.5556 14.9998 14.3417 15H4.0297C3.65643 15 3.29844 14.8517 3.0345 14.5878C2.77055 14.3238 2.62227 13.9659 2.62227 13.5926V7.96708C2.62227 7.78235 2.65869 7.59943 2.72945 7.42879C2.80021 7.25815 2.90391 7.10314 3.03463 6.97262C3.16535 6.8421 3.32052 6.73863 3.49127 6.66813C3.66202 6.59763 3.84498 6.56146 4.0297 6.56174H4.22683ZM18.4029 13.9678L17.8349 14.699C17.7976 14.7469 17.7512 14.787 17.6984 14.817C17.6456 14.8469 17.5875 14.8662 17.5272 14.8737C17.467 14.8812 17.4059 14.8767 17.3474 14.8605C17.2889 14.8444 17.2341 14.8169 17.1863 14.7796L16.6606 14.3726C16.6413 14.3462 16.6185 14.3227 16.5928 14.3026L15.7449 13.6498L12.93 11.473L5.49013 5.70757V5.71813L4.73767 5.13735L3.39806 4.10087C3.37171 4.08087 3.34238 4.06514 3.31115 4.05425L0.178338 1.63152C0.0814905 1.55582 0.0186169 1.44478 0.00351715 1.32279C-0.0115826 1.2008 0.0223233 1.07781 0.0977905 0.980781L0.66585 0.25164C0.702989 0.203595 0.74923 0.163295 0.801937 0.133135C0.854643 0.102975 0.91278 0.0835265 0.973018 0.0758491C1.03326 0.0681716 1.09441 0.072448 1.153 0.0884241C1.21159 0.1044 1.26645 0.131751 1.31446 0.168945L4.01274 2.25468V2.24195L4.98354 2.99231C5.32847 1.99803 6.01455 1.15814 6.91998 0.621696C7.82541 0.0852517 8.89163 -0.113044 9.92938 0.0620322C10.9671 0.237108 11.9093 0.774211 12.5886 1.57801C13.2679 2.38182 13.6405 3.4003 13.6401 4.45271V6.57234H14.3438C14.5286 6.57206 14.7115 6.60824 14.8823 6.67874C15.053 6.74924 15.2082 6.85271 15.3389 6.98323C15.4696 7.11375 15.5733 7.26876 15.6441 7.43939C15.7148 7.61003 15.7513 7.79296 15.7513 7.97769V11.3415L18.3224 13.3298C18.416 13.4048 18.4768 13.5134 18.4918 13.6324C18.5069 13.7515 18.475 13.8718 18.4029 13.9678ZM9.58738 6.56174H11.2958V4.4421C11.3238 4.14814 11.29 3.85159 11.1967 3.57143C11.1034 3.29127 10.9526 3.0337 10.7539 2.81522C10.5553 2.59675 10.3131 2.4222 10.0431 2.30276C9.77303 2.18331 9.481 2.12163 9.18571 2.12163C8.89042 2.12163 8.59839 2.18331 8.32833 2.30276C8.05828 2.4222 7.81616 2.59675 7.6175 2.81522C7.41884 3.0337 7.26801 3.29127 7.1747 3.57143C7.08138 3.85159 7.04763 4.14814 7.07561 4.4421V4.60532L9.58738 6.56174Z",fill:"#CCCCCC"})),h("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M11.7185 6.5609H11.0147V4.45167C11.0147 3.86707 10.8995 3.28818 10.6758 2.74808C10.4521 2.20798 10.1242 1.71726 9.71083 1.30389C9.29745 0.890513 8.80671 0.562602 8.26661 0.338885C7.7265 0.115168 7.14762 0 6.56302 0C5.97842 0 5.39955 0.115168 4.85945 0.338885C4.31935 0.562602 3.82859 0.890513 3.41522 1.30389C3.00184 1.71726 2.67394 2.20798 2.45023 2.74808C2.22651 3.28818 2.11135 3.86707 2.11135 4.45167V6.5609H1.40756C1.03462 6.5609 0.67692 6.70893 0.413009 6.97245C0.149099 7.23596 0.000561664 7.59344 0 7.96638V13.5924C0 13.9658 0.148288 14.3238 0.412259 14.5877C0.67623 14.8517 1.03425 15 1.40756 15H11.7227C11.9075 15 12.0904 14.9636 12.2611 14.8928C12.4317 14.8221 12.5867 14.7184 12.7173 14.5876C12.8478 14.4569 12.9513 14.3017 13.0218 14.1309C13.0923 13.9602 13.1285 13.7772 13.1282 13.5924V7.96638C13.1282 7.78146 13.0917 7.59831 13.0208 7.42752C12.9499 7.25672 12.846 7.10161 12.715 6.97105C12.5841 6.84048 12.4286 6.73706 12.2576 6.66668C12.0866 6.5963 11.9034 6.56034 11.7185 6.5609ZM8.67014 6.5609H4.45167V4.45167C4.42208 4.15691 4.4546 3.85922 4.54713 3.5778C4.63966 3.29639 4.79014 3.03748 4.98887 2.8178C5.18761 2.59811 5.43019 2.42255 5.70096 2.30238C5.97172 2.1822 6.26466 2.1201 6.5609 2.1201C6.85714 2.1201 7.15009 2.1822 7.42086 2.30238C7.69162 2.42255 7.93419 2.59811 8.13293 2.8178C8.33166 3.03748 8.48215 3.29639 8.57468 3.5778C8.66721 3.85922 8.69973 4.15691 8.67014 4.45167V6.5609Z",fill:"currentColor"})),h("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M15.0663 7.10837H14.3906C14.0417 7.10822 13.7008 7.00336 13.4108 6.80701C13.1208 6.61066 12.8949 6.33163 12.7616 6.00527C12.6282 5.67891 12.5935 5.31988 12.6617 4.97354C12.73 4.62719 12.8982 4.30908 13.145 4.0595L13.6157 3.58066C13.7662 3.41049 13.8467 3.18845 13.8405 2.96013C13.8344 2.73181 13.7422 2.5145 13.5828 2.35285C13.4234 2.1912 13.209 2.09746 12.9835 2.09085C12.7579 2.08424 12.5385 2.16528 12.3701 2.31733L11.8971 2.79623C11.6504 3.04625 11.3361 3.21651 10.9937 3.28554C10.6514 3.35456 10.2966 3.3192 9.97411 3.18393C9.65166 3.04866 9.37609 2.81957 9.18231 2.52566C8.98854 2.23175 8.88526 1.88626 8.88556 1.5329V0.848789C8.87413 0.619818 8.77622 0.404043 8.6121 0.246074C8.44798 0.0881059 8.23019 0 8.00373 0C7.77727 0 7.55946 0.0881059 7.39534 0.246074C7.23121 0.404043 7.13331 0.619818 7.12188 0.848789V1.5329C7.12218 1.88626 7.0189 2.23175 6.82513 2.52566C6.63135 2.81957 6.3558 3.04866 6.03334 3.18393C5.71088 3.3192 5.35603 3.35456 5.01371 3.28554C4.67139 3.21651 4.357 3.04625 4.11034 2.79623L3.63732 2.31733C3.46988 2.1598 3.24862 2.07414 3.02007 2.07838C2.79153 2.08262 2.57352 2.17641 2.41189 2.34004C2.25026 2.50368 2.15761 2.72441 2.15342 2.95579C2.14924 3.18716 2.23384 3.41114 2.38945 3.58066L2.86247 4.0595C3.10929 4.30908 3.27746 4.62719 3.34571 4.97354C3.41396 5.31988 3.37922 5.67891 3.24588 6.00527C3.11255 6.33163 2.88661 6.61066 2.59664 6.80701C2.30668 7.00336 1.96571 7.10822 1.61685 7.10837H0.941114C0.821947 7.10041 0.702421 7.11699 0.589771 7.15714C0.477121 7.19729 0.373689 7.26019 0.285728 7.34197C0.197767 7.42376 0.127107 7.5227 0.0780236 7.63292C0.0289404 7.74314 0.00244941 7.86233 0.00016196 7.98321C-0.00212549 8.1041 0.0198383 8.22419 0.0647155 8.33624C0.109593 8.44828 0.176454 8.54996 0.261256 8.63509C0.346059 8.72022 0.44704 8.78702 0.558089 8.8315C0.669137 8.87599 0.787947 8.89725 0.907328 8.89391H1.60784C1.95689 8.89361 2.29817 8.99815 2.58848 9.19432C2.8788 9.3905 3.10509 9.66945 3.2387 9.9959C3.37232 10.3224 3.40724 10.6816 3.33906 11.0282C3.27088 11.3747 3.10267 11.693 2.85571 11.9427L2.38269 12.4216C2.23251 12.5921 2.15246 12.8142 2.15899 13.0425C2.16552 13.2709 2.25813 13.488 2.4178 13.6493C2.57748 13.8107 2.7921 13.9041 3.01763 13.9103C3.24315 13.9165 3.46247 13.835 3.63056 13.6827L4.10358 13.2038C4.35024 12.9538 4.66462 12.7834 5.00694 12.7144C5.34926 12.6454 5.70412 12.6808 6.02658 12.8161C6.34903 12.9513 6.6246 13.1804 6.81838 13.4743C7.01215 13.7682 7.11543 14.1137 7.11513 14.4671V15.1512C7.12656 15.3802 7.22445 15.596 7.38857 15.7539C7.5527 15.9119 7.7705 16 7.99696 16C8.22342 16 8.44123 15.9119 8.60535 15.7539C8.76947 15.596 8.86738 15.3802 8.87881 15.1512V14.4671C8.87958 14.1142 8.98349 13.7694 9.17744 13.4762C9.3714 13.183 9.64672 12.9545 9.96874 12.8194C10.2908 12.6843 10.6451 12.6487 10.987 12.7171C11.329 12.7855 11.6433 12.9549 11.8904 13.2038L12.3634 13.6827C12.5285 13.8499 12.7526 13.9438 12.9862 13.9438C13.2198 13.9438 13.4438 13.8499 13.609 13.6827C13.7742 13.5154 13.867 13.2886 13.867 13.0521C13.867 12.8156 13.7742 12.5888 13.609 12.4216L13.136 11.9427C12.889 11.693 12.7208 11.3747 12.6526 11.0282C12.5844 10.6816 12.6194 10.3224 12.753 9.9959C12.8866 9.66945 13.1129 9.3905 13.4032 9.19432C13.6935 8.99815 14.0348 8.89361 14.3838 8.89391H15.0596C15.1788 8.90178 15.2983 8.88507 15.411 8.84481C15.5236 8.80455 15.627 8.74154 15.7149 8.65964C15.8029 8.57774 15.8734 8.47867 15.9224 8.36836C15.9714 8.25805 15.9977 8.13877 15.9999 8.01784C16.002 7.89692 15.9799 7.77684 15.9348 7.66482C15.8898 7.55281 15.8228 7.45122 15.7378 7.36619C15.6528 7.28117 15.5517 7.21448 15.4406 7.17017C15.3294 7.12585 15.2105 7.10482 15.0911 7.10837C15.0807 7.10609 15.07 7.10609 15.0596 7.10837H15.0663ZM7.01827 8.50398C6.7238 8.50398 6.43593 8.41557 6.19108 8.24994C5.94624 8.08432 5.75541 7.84889 5.64272 7.57346C5.53003 7.29804 5.50054 6.99496 5.55799 6.70257C5.61544 6.41018 5.75724 6.14158 5.96547 5.93078C6.17369 5.71998 6.43899 5.57646 6.72781 5.5183C7.01662 5.46014 7.31598 5.48995 7.58804 5.60403C7.8601 5.71812 8.09262 5.91133 8.25622 6.1592C8.41982 6.40708 8.50715 6.69852 8.50715 6.99664C8.50715 7.3964 8.35028 7.77982 8.07106 8.06249C7.79184 8.34517 7.41315 8.50398 7.01827 8.50398ZM9.49599 10.2621C9.34853 10.2621 9.20438 10.2179 9.08177 10.1349C8.95916 10.052 8.8636 9.93407 8.80717 9.79615C8.75074 9.65823 8.73598 9.50648 8.76474 9.36006C8.79351 9.21364 8.86452 9.07914 8.96879 8.97358C9.07306 8.86802 9.20591 8.79616 9.35053 8.76703C9.49516 8.73791 9.64506 8.75283 9.7813 8.80996C9.91753 8.86709 10.034 8.96386 10.1159 9.08799C10.1978 9.21211 10.2416 9.35803 10.2416 9.50732C10.2416 9.70711 10.1633 9.89873 10.024 10.0402C9.88464 10.1817 9.69559 10.2615 9.49824 10.2621H9.49599Z",fill:"currentColor"})),h("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.57028 7.2737H2.89689C2.66119 7.2737 2.43514 7.36948 2.26847 7.53995C2.10181 7.71042 2.00818 7.94164 2.00818 8.18272C2.00818 8.4238 2.10181 8.65502 2.26847 8.82549C2.43514 8.99596 2.66119 9.09169 2.89689 9.09169H3.57028C3.92152 9.09254 4.26466 9.1997 4.55649 9.39963C4.84831 9.59956 5.07578 9.88335 5.21023 10.2153C5.34467 10.5471 5.38009 10.9123 5.31203 11.2647C5.24397 11.6172 5.07547 11.9412 4.82775 12.1958L4.35133 12.6832C4.1876 12.8491 4.09332 13.0736 4.08838 13.3093C4.08344 13.5451 4.16824 13.7735 4.32487 13.9465C4.4815 14.1195 4.69771 14.2234 4.92787 14.2364C5.15802 14.2494 5.38411 14.1705 5.55841 14.0162C5.57444 14.0021 5.59047 13.9834 5.60651 13.967L6.08293 13.4797C6.33151 13.2252 6.64832 13.0518 6.99328 12.9816C7.33823 12.9113 7.69582 12.9473 8.02076 13.085C8.3457 13.2227 8.62338 13.4559 8.81866 13.7551C9.01395 14.0543 9.11805 14.4061 9.11779 14.7659V15.4547C9.11779 15.6958 9.21143 15.9269 9.3781 16.0974C9.54476 16.2679 9.7708 16.3636 10.0065 16.3636C10.2422 16.3636 10.4682 16.2679 10.6349 16.0974C10.8016 15.9269 10.8952 15.6958 10.8952 15.4547V14.7659C10.8929 14.3889 11.0073 14.0208 11.2221 13.7144C11.4369 13.408 11.741 13.1791 12.0908 13.0604L4.44982 7.02072C4.18372 7.18324 3.8802 7.27051 3.57028 7.2737ZM19.812 14.6417L14.7065 10.6121C14.7669 10.1875 14.9755 9.79954 15.2938 9.52003C15.6121 9.24052 16.0186 9.08836 16.4381 9.09169H17.1115C17.3472 9.09169 17.5733 8.99596 17.7399 8.82549C17.9066 8.65502 18.0002 8.4238 18.0002 8.18272C18.0002 7.94164 17.9066 7.71042 17.7399 7.53995C17.5733 7.36948 17.3472 7.2737 17.1115 7.2737H16.4358C16.0843 7.2735 15.7407 7.1667 15.4486 6.96678C15.1564 6.76686 14.9287 6.48279 14.7944 6.15053C14.66 5.81827 14.625 5.45273 14.6938 5.10012C14.7625 4.74751 14.932 4.42365 15.1807 4.16953L15.6548 3.68228C15.8139 3.51045 15.9013 3.28188 15.8982 3.04522C15.8952 2.80857 15.8021 2.58249 15.6386 2.41498C15.4751 2.24747 15.2542 2.15174 15.0229 2.14821C14.7915 2.14469 14.5679 2.23365 14.3996 2.3961L13.9232 2.88336C13.6746 3.13788 13.3578 3.31128 13.0128 3.38154C12.6679 3.4518 12.3103 3.41578 11.9854 3.27807C11.6604 3.14036 11.3827 2.90711 11.1875 2.6079C10.9922 2.30869 10.8881 1.95694 10.8883 1.59718V0.913114C10.8883 0.672034 10.7947 0.44081 10.628 0.27034C10.4614 0.0998712 10.2353 0.00414837 9.99963 0.00414837C9.76393 0.00414837 9.53788 0.0998712 9.37122 0.27034C9.20456 0.44081 9.11093 0.672034 9.11093 0.913114V1.60187C9.11119 1.96163 9.00708 2.31338 8.8118 2.61259C8.61651 2.9118 8.33882 3.14505 8.01388 3.28276C7.68894 3.42047 7.33137 3.45649 6.98641 3.38623C6.64146 3.31597 6.32464 3.14257 6.07606 2.88805L5.59964 2.40079C5.43304 2.23083 5.20735 2.13534 4.97205 2.13534C4.73675 2.13534 4.51106 2.23083 4.34446 2.40079C4.34446 2.40079 4.34446 2.41246 4.34446 2.41715L1.42182 0.107216C1.31669 0.0240621 1.18359 -0.0130395 1.05175 0.00409117C0.919915 0.0212218 0.800112 0.0911592 0.718647 0.198559L0.104803 1.00446C0.0235055 1.11199 -0.0127469 1.24813 0.00400129 1.38298C0.0207495 1.51783 0.0891328 1.64038 0.194135 1.7237L18.5774 16.2488C18.6823 16.3323 18.8152 16.3697 18.947 16.3531C19.0788 16.3364 19.1988 16.2669 19.2806 16.1598L19.8945 15.3515C19.9349 15.2986 19.9648 15.238 19.9822 15.1732C19.9996 15.1084 20.0043 15.0407 19.996 14.974C19.9877 14.9074 19.9666 14.8431 19.9338 14.7848C19.901 14.7266 19.8573 14.6756 19.8051 14.6347L19.812 14.6417ZM10.4898 7.27135L8.52457 5.71813C8.67926 5.65892 8.84271 5.62725 9.00785 5.62444C9.40535 5.62506 9.78635 5.78698 10.0672 6.07469C10.3481 6.3624 10.5058 6.75233 10.5058 7.1589C10.5058 7.19873 10.4921 7.23855 10.4898 7.27135Z",fill:"#CCCCCC"})),h("svg",{version:"1.0",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 32 32",style:"enable-background:new 0 0 32 32;"},h("style",{type:"text/css"},".st0 {\n      fill: #ff5c00;\n    }\n    .st1 {\n      fill: currentColor;\n    }"),h("path",{class:"st0",d:"M18.59,11.76l-1.07,1.23l-0.65,0.75l-7.2,8.21l-1,3.64L7.99,28l2.23-0.89l3.37-1.35l7.2-8.21l0.65-0.75\nl1.07-1.23c1-1.14,0.94-2.93-0.15-3.98C21.28,10.54,19.59,10.62,18.59,11.76z M9.86,26.76l-0.85-0.82l0.96-3.48l0.25,0.04l2.76,2.68\nl0.08,0.31L9.86,26.76z M21.12,16.49l-3.29-3.2l0.78-0.89l3.29,3.2L21.12,16.49z"}),h("path",{class:"st1",d:"M28.38,2.15h-1.07c0.03-0.09,0.06-0.17,0.06-0.26c0-0.49-0.41-0.88-0.92-0.88c-0.51,0-0.92,0.39-0.92,0.88\nc0,0.09,0.03,0.18,0.06,0.26h-3.5c0.03-0.09,0.06-0.17,0.06-0.26c0-0.49-0.41-0.88-0.92-0.88c-0.5,0-0.92,0.39-0.92,0.88\nc0,0.09,0.03,0.18,0.06,0.26h-3.5c0.03-0.09,0.06-0.17,0.06-0.26C16.92,1.39,16.51,1,16,1s-0.92,0.39-0.92,0.88\nc0,0.09,0.03,0.18,0.06,0.26h-3.5c0.03-0.09,0.06-0.17,0.06-0.26c0-0.49-0.41-0.88-0.92-0.88c-0.51,0-0.92,0.39-0.92,0.88\nc0,0.09,0.03,0.18,0.06,0.26h-3.5c0.03-0.09,0.06-0.17,0.06-0.26C6.47,1.39,6.06,1,5.55,1S4.64,1.39,4.64,1.88\nc0,0.09,0.03,0.18,0.06,0.26H3.62C2.17,2.15,1,3.27,1,4.66v23.82C1,29.87,2.17,31,3.62,31h21.8L31,25.64V4.66\nC31,3.27,29.83,2.15,28.38,2.15z M3.62,29.63c-0.66,0-1.19-0.51-1.19-1.15V9.24h27.14v15.82l-0.3,0.28h-2.24\nc-1.05,0-1.9,0.82-1.9,1.83v2.16l-0.3,0.28H3.62z"}))),ge=(h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"})),h("svg",{style:"width:24px;height:24px",viewBox:"0 0 24 24"},h("path",{fill:"currentColor",d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"})),[" ",h("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M12.8927 5.82258C12.3372 2.40181 11.0268 0 9.50191 0C7.97701 0 6.66667 2.40181 6.11111 5.82258H12.8927ZM5.82375 9.5C5.82375 10.3504 5.86973 11.1663 5.95019 11.9516H13.0498C13.1303 11.1663 13.1762 10.3504 13.1762 9.5C13.1762 8.6496 13.1303 7.83367 13.0498 7.04839H5.95019C5.86973 7.83367 5.82375 8.6496 5.82375 9.5ZM18.2644 5.82258C17.1686 3.22157 14.9502 1.21048 12.2107 0.398387C13.1456 1.69315 13.7893 3.64294 14.1264 5.82258H18.2644ZM6.78927 0.398387C4.05364 1.21048 1.83142 3.22157 0.739464 5.82258H4.87739C5.21073 3.64294 5.85441 1.69315 6.78927 0.398387ZM18.6743 7.04839H14.2797C14.3602 7.85282 14.4061 8.67641 14.4061 9.5C14.4061 10.3236 14.3602 11.1472 14.2797 11.9516H18.6705C18.8812 11.1663 19 10.3504 19 9.5C19 8.6496 18.8812 7.83367 18.6743 7.04839ZM4.5977 9.5C4.5977 8.67641 4.64368 7.85282 4.72414 7.04839H0.329502C0.122605 7.83367 0 8.6496 0 9.5C0 10.3504 0.122605 11.1663 0.329502 11.9516H4.72031C4.64368 11.1472 4.5977 10.3236 4.5977 9.5ZM6.11111 13.1774C6.66667 16.5982 7.97701 19 9.50191 19C11.0268 19 12.3372 16.5982 12.8927 13.1774H6.11111ZM12.2146 18.6016C14.9502 17.7895 17.1724 15.7784 18.2682 13.1774H14.1303C13.7931 15.3571 13.1494 17.3069 12.2146 18.6016ZM0.739464 13.1774C1.83525 15.7784 4.05364 17.7895 6.7931 18.6016C5.85824 17.3069 5.21456 15.3571 4.87739 13.1774H0.739464Z",fill:"currentColor"}))]),me=h("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M20.7198 17.57L16.7698 13.62C16.5869 13.4437 16.3438 13.3436 16.0898 13.34H15.4498C16.7476 11.6961 17.3699 9.6193 17.1898 7.53263C17.0097 5.44596 16.0408 3.50644 14.4806 2.10923C12.9203 0.712023 10.886 -0.0377609 8.79221 0.0126396C6.69839 0.0630401 4.70255 0.909833 3.21132 2.3805C1.72009 3.85116 0.845662 5.83504 0.766187 7.92796C0.686712 10.0209 1.40817 12.0654 2.78358 13.6449C4.15898 15.2244 6.08485 16.2201 8.16882 16.4292C10.2528 16.6382 12.3381 16.0449 13.9998 14.77V15.41C14.0034 15.664 14.1035 15.9071 14.2798 16.09L18.2498 20C18.4335 20.1658 18.6723 20.2576 18.9198 20.2576C19.1673 20.2576 19.406 20.1658 19.5898 20L20.7198 18.88C20.8774 18.6982 20.9642 18.4656 20.9642 18.225C20.9642 17.9844 20.8774 17.7518 20.7198 17.57ZM8.93979 13.34C7.93422 13.344 6.9501 13.0494 6.11207 12.4936C5.27404 11.9378 4.61981 11.1458 4.23225 10.2179C3.84469 9.29003 3.74123 8.26799 3.93498 7.28125C4.12873 6.29451 4.61097 5.38748 5.32061 4.67502C6.03026 3.96257 6.93539 3.47676 7.92136 3.27912C8.90732 3.08148 9.92976 3.18091 10.8592 3.5648C11.7886 3.9487 12.5832 4.5998 13.1423 5.43563C13.7013 6.27146 13.9998 7.25442 13.9998 8.25999C14.0011 8.9258 13.8713 9.58534 13.6177 10.201C13.3641 10.8166 12.9918 11.3762 12.5219 11.848C12.052 12.3197 11.4939 12.6942 10.8792 12.9502C10.2646 13.2062 9.6056 13.3387 8.93979 13.34Z",fill:"currentColor"})),be=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",d:"M9.61 22.116v-7.14h4.78v7.14h5.974v-9.521h3.584L12.001 1.885.052 12.594h3.584v9.52H9.61z"}))),we=h("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"none",d:"M-1-1h26v26H-1z"}),h("g",null,h("path",{stroke:"null",d:"M14.153 5.566l-4.037 5.362 3.068 4.074-1.722 1.287c-1.82-2.413-4.845-6.434-4.845-6.434L.158 18.434h23.684L14.153 5.566z"}))),ve=h("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M216.329 17.722c-12.189 0-22.68 9.076-24.447 21.128L159.86 289.871a14.968 14.968 0 01-5.427 9.736l-31.619 25.601 55.48 56.361 55.972-55.972a22.97 22.97 0 006.771-16.347V42.429c0-13.623-11.084-24.707-24.708-24.707zM175.336 421.223l-96.549-98.081L5.827 379.4c-6.974 5.378-7.819 15.585-1.823 22.036l81.848 88.066c5.793 6.233 15.612 6.387 21.597.337zM389.186 325.208l-31.619-25.601a14.968 14.968 0 01-5.427-9.736L320.117 38.849c-1.766-12.051-12.258-21.128-24.447-21.128-13.624 0-24.708 11.084-24.708 24.708v266.82a22.97 22.97 0 006.771 16.347l55.972 55.972zM433.213 323.142l-96.549 98.081 67.888 68.616c5.985 6.049 15.804 5.896 21.597-.337l81.848-88.066c5.995-6.451 5.151-16.658-1.823-22.036z"})),Ce=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})),xe=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("path",{d:"M393.784 100.106l-95.207-13.834L256 0l-42.577 86.272-95.207 13.834 68.893 67.153-16.264 94.822L256 217.312l85.155 44.769-16.263-94.822z"}),h("path",{d:"M256 315.219l-153.945-61.762v87.726l154.843 62.123 153.047-62.17v-87.679z"}),h("path",{d:"M256 423.914l-153.945-61.762v87.726L256.898 512l153.047-62.169v-87.679z"})),_e=h("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},h("g",null,h("rect",{fill:"none",height:"24",width:"24"})),h("g",null,h("g",null),h("g",null,h("path",{d:"M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"}),h("g",null,h("path",{d:"M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"}),h("path",{d:"M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"}),h("path",{d:"M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"}))))),ye=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),ke=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})),Me=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},h("path",{d:"M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z",fill:"none"}),h("path",{d:"M17.7 8L12 2.3 6.3 8C4.8 9.6 4 11.6 4 13.6s.8 4.1 2.3 5.7 3.6 2.4 5.7 2.4 4.1-.8 5.7-2.4 2.3-3.7 2.3-5.7-.8-4-2.3-5.6z"})),Le=h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"}));let Se;const De=B(Se||(Se=(t=>t)`
  #blank {
    display: none;
  }
  & {
    height: 50px;
    min-width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 125px;
    left: 2.5vw;
    z-index: 1;
    background: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    transition: width 1s;
    .dark & {
      background-color: #333333;
      color: white;
      & .icon-provider {
        color: white;
      }
      & .countryInput {
        color: white;
      }
    }
    &:hover {
      cursor: pointer;
    }
    & .icon-provider {
      color: #333333;
    }
    &.show {
      border-radius: 25px;
      padding-left: 15.6px;
      & .icon-provider {
        margin-right: 20.04px;
      }
      & > div {
        display: flex;
      }
    }
    & > div {
      position: relative;
      display: none;
      align-items: center;
      & .placeholder {
        position: absolute;
        left: 0px;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: -1;
        background: transparent;
        border: 0px;
      }
      & .countryInput {
        background: transparent;
        border: 0px;
      }
    }
  }
`));class Pe extends f{constructor(){super(),this.state={showSearchInput:!1,geocoder:{},results:"",geoResult:{},parsedText:"",mouseHover:!1},this.openSearchInput=this.openSearchInput.bind(this),this.onClick=this.onClick.bind(this),this.onSearch=this.onSearch.bind(this),this.onGetResult=this.onGetResult.bind(this),this.onConfirm=this.onConfirm.bind(this),this.onPressKey=this.onPressKey.bind(this),this.onLanguageChange=this.onLanguageChange.bind(this),this.closeComponent=this.closeComponent.bind(this),this.onToogleMouseState=this.onToogleMouseState.bind(this)}componentWillMount(){const{i18n:t}=this.props;let e=new window.MapboxGeocoder({accessToken:"pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrODcwb29vajBjMDkzbWxqZHh6ZDU5aHUifQ.BjT63Mdh-P2myNvygIhSpw",language:t?t.locale:"en-US, en-US",mapboxgl:window.mapboxgl,types:"country"});window.geoCoder=e,e.on("results",this.onGetResult),this.setState({geocoder:e})}componentWillUnmount(){window.removeEventListener("keydown",this.onPressKey),document.removeEventListener("click",this.closeComponent)}componentDidMount(){this.state.geocoder.addTo("#blank"),window.addEventListener("keydown",this.onPressKey),document.addEventListener("click",this.closeComponent)}componentDidUpdate(t,e,n){t.i18n!==this.props.i18n&&this.onLanguageChange()}onLanguageChange(){const{i18n:t}=this.props,{geocoder:e}=this.state;e.setLanguage(t.locale)}onPressKey(t){"Enter"===t.code&&this.state.showSearchInput?(t.preventDefault(),this.onConfirm()):"Escape"===t.code&&this.state.showSearchInput&&(t.preventDefault(),this.openSearchInput())}onConfirm(){let{geoResult:t}=this.state;t.center&&(this.openSearchInput(),this.setState({results:"",geoResult:{},parsedText:""}),this.props.map.flyTo({center:t.center,maxDuration:500}),setTimeout(()=>{Xt.setSearchParam("country",t.place_name),Xt.setSearchParam("iso2",t.properties.short_code.toUpperCase()),Xt.setSearchParam("wikidata",t.properties.wikidata)},501))}onSearch(t){let e=t.target.value,{geocoder:n}=this.state;n.query(e),this.setState({parsedText:e.toUpperCase()})}openSearchInput(){this.setState({showSearchInput:!this.state.showSearchInput})}closeComponent(){let{mouseHover:t,showSearchInput:e}=this.state;t||!e||e&&this.openSearchInput()}onGetResult(t){let{features:e}=t;if(e[0]){let t=e[0].text.toUpperCase();this.setState({results:t,geoResult:e[0]})}else this.setState({results:"",geoResult:{}})}onClick(){this.state.showSearchInput||this.openSearchInput()}onToogleMouseState(t){this.setState({mouseHover:t})}render(t,{showSearchInput:e,results:n,parsedText:a}){return h("div",{onMouseOver:()=>this.onToogleMouseState(!0),onMouseOut:()=>this.onToogleMouseState(!1),onClick:this.onClick,class:De+" "+(e?"show":"")},h("span",{class:"icon-provider"}," ",me," "),h("div",null,h("input",{class:"placeholder",value:n,disabled:!0}),h("input",{class:"countryInput",onInput:this.onSearch,value:a})),h("span",{id:"blank"}))}}var Te={apiEndpoint:"https://lockdownsnapshots.azurewebsites.net"};function ze(){return(ze=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function He(t){return class extends f{constructor(t){super(t),this.state={isMobile:!1,daysRange:70}}componentWillMount(){let t=!1,e=80;(window.innerWidth||window.clientWidth)<=960&&(t=!0,e=70),this.setState({isMobile:t,daysRange:e})}render(e){return h(t,ze({isMobile:this.state.isMobile,daysRange:this.state.daysRange},this.props))}}}let Ae,Ee,Ue=t=>t;const je={url:new URL("./src/components/WorldMap.js",document.baseURI).href},{apiEndpoint:We}=Te,Re="pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrODcwb29vajBjMDkzbWxqZHh6ZDU5aHUifQ.BjT63Mdh-P2myNvygIhSpw",Oe=B(Ae||(Ae=Ue`
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
`)),Ve=B(Ee||(Ee=Ue`
  & {
    display: none;
  }
`)),Ie={asia:{lng:105.04,lat:20.13,zoom:2.04},eu:{lng:26.81,lat:55.71,zoom:2.12},us:{lng:-98.22,lat:37.68,zoom:2.7},africa:{lng:14.63,lat:2.61,zoom:1.88},lat:{lng:-36,lat:-20.2,zoom:1.56},me:{lng:53.39,lat:26.28,zoom:3.19}},Be={asia:{lng:89.9,lat:36.2,zoom:1.15},eu:{lng:21.5,lat:50.4,zoom:1.52},us:{lng:-98.37,lat:43.09,zoom:2},africa:{lng:26.4,lat:14.4,zoom:1.43},lat:{lng:-63.6,lat:-16.4,zoom:1.44},me:{lng:53.4,lat:22,zoom:1.08}};function Ne(t){let e;switch(t){case"1":e="#eb5757";break;case"2":e="#f2994a";break;case"3":e="#6fcf97";break;default:e="#ccc"}return e}function Fe(t){let e={};for(let n in t)for(let a in t[n].data)for(let r in t[n].data[a]){let o=t[n].data[a][r];"all"!==a&&"US"!==a||(e[o.unit_code]=o)}return e}var Ze=He(class extends f{constructor(){super(),this.__handleSelect=this.__handleSelect.bind(this),this.initMap=this.initMap.bind(this),this.updateMap=this.updateMap.bind(this),this.updateMapLanguage=this.updateMapLanguage.bind(this),this.onMapClick=this.onMapClick.bind(this),this.onGetResult=this.onGetResult.bind(this);let t={lng:40.7,lat:25,zoom:1.06},e=t;e=screen.width<=699?Be:Ie;let n=window.location.href,a=!1;for(let r in e)-1!=n.indexOf("lockdown."+r)&&(t=e[r],a=!0);this.state={lng:t.lng,lat:t.lat,zoom:t.zoom,countries:[],mapData:{},lookupTable:{},isMapReady:!1,isLocationSet:a,geocoder:{},lastCountry:{}}}setMapState(t,e=[],n){const a={};e.forEach(t=>a[t.lockdown.iso]=t),Object.keys(n).forEach(e=>{var r,o,i=n[e],s=a[e];t.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:i.feature_id},{kind:null==s||null===(r=s.lockdown)||void 0===r||null===(o=r.measure[0])||void 0===o?void 0:o.value,name:e})})}async initMap(t,e){window.mapboxgl||(console.log("check the map"),await((t=100)=>new Promise(e=>{setTimeout(()=>{e()},t)}))(),await this.initMap(t,e)),"loaded"!==mapboxgl.getRTLTextPluginStatus()&&mapboxgl.setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",null,!0);let n=new window.mapboxgl.Map({accessToken:Re,container:this.ref,style:"mapbox://styles/jfqueralt/ckavedmnk253z1iphmsy39s3r?optimize=true",center:[this.state.lng,this.state.lat],zoom:this.state.zoom,keyboard:!1,pitchWithRotate:!1,hash:!0}),a=new window.MapboxGeocoder({accessToken:Re,language:this.props.currentLanguage?this.props.currentLanguage.locale:"es",mapboxgl:window.mapboxgl,types:"country"});a.on("results",this.onGetResult),a.addTo("#mapBlank"),window.map=n;const r=t[this.props.selectedDate];n.on("style.load",()=>{let t=null,e=this.props.currentLanguage.locale;e&&(e=e.includes("zh-")?e.includes("-CN")?"zh-Hans":"zh-Hant":e.split("-")[0]),n.setLayoutProperty("water-line-label","text-field",["get","name_"+e]),n.setLayoutProperty("country-label","text-field",["get","name_"+e]),n.setLayoutProperty("water-point-label","text-field",["get","name_"+e]),n.on("mousemove","admin-0-fill",(function(e){var a=n.queryRenderedFeatures(e.point,{layers:["admin-0-fill"]});e.features.length>0&&(t&&n.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:t},{hover:!1}),t=a[0].id,n.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:t},{hover:!0}))})),n.on("click","admin-0-fill",this.onMapClick),console.log("the style is loaded")}),n.on("load",(function(){console.log("map is loaded"),o(e)}));const o=t=>{n.addSource("admin-0",{type:"vector",url:"mapbox://mapbox.boundaries-adm0-v3"});const e=Fe(t);n.addLayer({id:"admin-0-fill",type:"fill",source:"admin-0","source-layer":"boundaries_admin_0",filter:["all",["any",["==","all",["get","worldview"]],["in","US",["get","worldview"]]],["!",["has","dispute"]]],paint:{"fill-color":["case",["!=",["feature-state","kind"],null],["match",["feature-state","kind"],"1",Ne("1"),"2",Ne("2"),"3",Ne("3"),"4",Ne("4"),Ne("0")],["==",["feature-state","kind"],null],Ne("0"),["case",["boolean",["feature-state","hover"],!1],"rgba(204,204,204,0.5)","rgba(204,204,204,0)"]],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.7,1]}},"admin-1-boundary-bg"),n.setPaintProperty("country-label","text-color","hsl(0, 0%, 10%)"),n.setPaintProperty("country-label","text-halo-color","hsla(0, 0%, 100%,0.6)"),n.setPaintProperty("country-label","text-halo-width",1),n.setPaintProperty("state-label","text-color","hsl(0, 0%, 30%)"),n.setPaintProperty("state-label","text-halo-width",0),n.setPaintProperty("admin-0-boundary","line-color","hsla(0, 0%, 90%, 0.8)"),n.setPaintProperty("admin-0-boundary-disputed","line-color","hsla(0, 0%, 90%, 0.5)"),n.setPaintProperty("admin-0-boundary-bg","line-color","hsla(0, 0%, 84%, 0.3)"),n.setPaintProperty("admin-1-boundary","line-color","hsla(0, 0%, 90%, 0.6)"),n.setPaintProperty("settlement-major-label","text-halo-width",0),n.setPaintProperty("settlement-minor-label","text-halo-width",0),n.setPaintProperty("water","fill-color","#e0e0e0");const a=t=>{r.forEach((function(t){n.setFeatureState({source:"admin-0",sourceLayer:"boundaries_admin_0",id:e[t.lockdown.iso].feature_id},{kind:t.lockdown.measure[0].value,name:t.lockdown.iso})})),this.setState({isMapReady:!0})};n.isSourceLoaded("admin-0")?a():n.on("sourcedata",(function t(e){"admin-0"===e.sourceId&&e.isSourceLoaded&&(a(),n.off("sourcedata",t))}))};return this.setState({map:n,geocoder:a}),n}async updateMap(t,e,n){const{daysRange:a}=this.props,r=Fe(e);let o=t[n];if(void 0===o){let{startDate:e,endDate:i}=this.props;e=qt(e||Qt(new Date,-14),"yyyy-MM-dd"),i=qt(i||Qt(new Date,a-14),"yyyy-MM-dd");let[s]=await Promise.all([fetch(new URL(`${We}/status/world/${e}/${i}`,je.url)).then(t=>t.json())]);o=s[n],t=s,this.setState({mapData:t},()=>this.setMapState(this.state.map,o,r))}else this.setMapState(this.state.map,o,r)}updateMapLanguage(t){let e=t.locale;this.state.geocoder.setLanguage(e),e.includes("zh-")&&(e=e.includes("-CN")?"zh-Hans":"zh-Hant"),this.state.map.setLayoutProperty("water-line-label","text-field",["get","name_"+e]),this.state.map.setLayoutProperty("water-point-label","text-field",["get","name_"+e]);this.state.map.setLayoutProperty("country-label","text-field",["get","name_"+e])}async componentDidMount(){const{daysRange:t}=this.props;Kt.addEventListener("close",t=>{t.detail.countryDialogClosed&&form.focus()});let{startDate:e,endDate:n}=this.props;e=qt(e||Qt(new Date,-14),"yyyy-MM-dd"),n=qt(n||Qt(new Date,t-14),"yyyy-MM-dd");const[a,r]=await Promise.all([fetch(new URL(`${We}/status/world/${e}/${n}`,je.url)).then(t=>t.json()),fetch(new URL("./../../data/boundaries-adm0-v3.json",je.url)).then(t=>t.json())]),o=Object.values[r];this.setState({countries:o,mapData:a,lookupTable:r}),await this.initMap(a,r)}onMapClick(t){let{map:e,lookupTable:n}=this.state;const a=e.queryRenderedFeatures(t.point,{layers:["admin-0-fill"]});this.state.geocoder.query(n.adm0.data.all[a[0].properties.iso_3166_1].name),this.setState({lastCountry:{country:n.adm0.data.all[a[0].properties.iso_3166_1].name,iso2:a[0].properties.iso_3166_1}})}componentWillUnmount(){this.state.map&&this.state.map.remove()}componentDidUpdate(t,e,n){this.state.isMapReady&&(this.updateMap(this.state.mapData,this.state.lookupTable,this.props.selectedDate),t.currentLanguage!==this.props.currentLanguage&&this.updateMapLanguage(this.props.currentLanguage))}__handleSelect(t){t.preventDefault();const[e,n]=this.selectRef.value.split(",");Xt.setSearchParam("country",n),Xt.setSearchParam("iso2",e)}__resetFocus(){this.countrySelectRef.focus()}onGetResult(t){let{features:e}=t;if(e[0]){let t=e[0].text,n=e[0].properties.wikidata;Xt.setSearchParam("wikidata",n),Xt.setSearchParam("country",t),Xt.setSearchParam("iso2",this.state.lastCountry.iso2)}else Xt.setSearchParam("country",this.state.lastCountry.country),Xt.setSearchParam("iso2",this.state.lastCountry.iso2)}render({currentLanguage:t}){var e;return[h("div",{class:Oe},h("form",{id:"form",tabindex:"-1",onSubmit:this.__handleSelect},h("label",{for:"countries"},"Choose a country:"),h("select",{ref:t=>this.selectRef=t,id:"countries"},null===(e=this.state.countries)||void 0===e?void 0:e.map(t=>h("option",{value:t.ISO+","+t.name},t.name))),h("input",{type:"submit",value:"View country details"}))),h(Pe,{i18n:t,map:this.state.map}),h("div",{class:"map-container",ref:t=>this.ref=t}),h("span",{id:"mapBlank",class:Ve})]}});const $e={url:new URL("./src/services/totalsService.js",document.baseURI).href},{apiEndpoint:qe}=Te;const Ye=new class extends Gt{constructor(){super(),this.cache={},this.corona={},fetch(new URL("../../data/totals.json",$e.url)).then(t=>t.json()).then(t=>{this.corona=t.corona})}async getTotals(t){var e;let{date:n,daysRange:a}=t,r=t.startDate,o=t.endDate;r=qt(r||Qt(new Date,-14),"yyyy-MM-dd"),o=qt(o||Qt(new Date,a),"yyyy-MM-dd");const i=`${r}${o}`;if(t.forceRefresh||"failed"===(null===(e=this.cache[i])||void 0===e?void 0:e.status)||!this.cache[i]){try{const t=await(await fetch(`${qe}/totals/lockdown/${r}/${o}`)).json();this.cache[i]=t}catch(t){this.cache[i]={status:"failed"}}var s=this.cache[i];if("failed"===s.status)return this.dispatchEvent(new Event("change")),s}return{status:"success",corona:this.corona,territories:this.cache[i][n]}}};let Ge;const Xe=B(Ge||(Ge=(t=>t)`
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
    width: 150px;
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
`));var Ke=He(class extends f{constructor(){super(),this.state={totals:{}}}async componentDidUpdate(t){if(this.props.selectedDate!==t.selectedDate){const{startDate:t,endDate:e,selectedDate:n,daysRange:a}=this.props;this.setState({totals:await Ye.getTotals({date:n,startDate:t,endDate:e,daysRange:a})})}}async componentDidMount(){U("(min-width: 900px)",t=>{this.setState({desktop:t})});const{daysRange:t}=this.props,e=await Ye.getTotals({date:this.props.selectedDate,startDate:this.props.startDate,endDate:this.props.endDate,daysRange:t});this.setState({totals:e})}render({selectedDate:t,i18n:e},{totals:n,desktop:a}){var r,o;const i=[{description:e.t("header.totals.territoriesLockdown"),value:Number((null===(r=n.territories)||void 0===r?void 0:r.lockdown)||0).toLocaleString()},{description:e.t("header.totals.peopleAffected"),value:Number((null===(o=n.territories)||void 0===o?void 0:o.affected)||0).toLocaleString()}];return h("div",{class:Xe},h("dl",null,(a?i:i.slice(0,2)).map(t=>h("div",null,h("dt",{class:"ld-font-light"},t.description),h("dd",{class:"ld-font-front"},t.value)))))}});let Qe;const Je=B(Qe||(Qe=(t=>t)`
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
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
    animation: 1s fadeInDown forwards;
    @media (max-width: 899px) {
      &.hide{
        animation: 1s fadeOutUp forwards;
      }
    }
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
    width: 320px;
    & a svg{
      width: 100%
      height: 100%
    }
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
`)),tn=t=>[h("a",{class:"skiplink",href:"#main"},"Go to main content"),h("header",{class:Je+" "+(t.show?"":"hide")},h("div",{class:"ld-logo-wrapper"},h("a",{href:"","aria-current":"page"},re)),h("div",{class:"totals"},h(Ke,{selectedDate:t.selectedDate,startDate:t.startDate,endDate:t.endDate,i18n:t.i18n})))];var en,nn,an,rn=0,on=[],sn=t.__b,ln=t.__r,cn=t.diffed,dn=t.__c,hn=t.unmount;function un(e,n){t.__h&&t.__h(nn,e,rn||n),rn=0;var a=nn.__H||(nn.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function pn(t){return rn=1,function(t,e,n){var a=un(en++,2);return a.t=t,a.__c||(a.__=[n?n(e):xn(void 0,e),function(t){var e=a.t(a.__[0],t);a.__[0]!==e&&(a.__=[e,a.__[1]],a.__c.setState({}))}],a.__c=nn),a.__}(xn,t)}function fn(e,n){var a=un(en++,3);!t.__s&&Cn(a.__H,n)&&(a.__=e,a.__H=n,nn.__H.__h.push(a))}function gn(t){return rn=5,function(t,e){var n=un(en++,7);return Cn(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}((function(){return{current:t}}),[])}function mn(){on.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(wn),e.__H.__h.forEach(vn),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}})),on=[]}t.__b=function(t){nn=null,sn&&sn(t)},t.__r=function(t){ln&&ln(t),en=0;var e=(nn=t.__c).__H;e&&(e.__h.forEach(wn),e.__h.forEach(vn),e.__h=[])},t.diffed=function(e){cn&&cn(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==on.push(n)&&an===t.requestAnimationFrame||((an=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(a),bn&&cancelAnimationFrame(e),setTimeout(t)},a=setTimeout(n,100);bn&&(e=requestAnimationFrame(n))})(mn)),nn=void 0},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(wn),e.__h=e.__h.filter((function(t){return!t.__||vn(t)}))}catch(a){n.some((function(t){t.__h&&(t.__h=[])})),n=[],t.__e(a,e.__v)}})),dn&&dn(e,n)},t.unmount=function(e){hn&&hn(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(wn)}catch(e){t.__e(e,n.__v)}};var bn="function"==typeof requestAnimationFrame;function wn(t){var e=nn;"function"==typeof t.__c&&t.__c(),nn=e}function vn(t){var e=nn;t.__c=t.__(),nn=e}function Cn(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function xn(t,e){return"function"==typeof e?e(t):e}function _n(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var a in e)if("__source"!==a&&t[a]!==e[a])return!0;return!1}function yn(t){this.props=t}(yn.prototype=new f).isPureReactComponent=!0,yn.prototype.shouldComponentUpdate=function(t,e){return _n(this.props,t)||_n(this.state,e)};var kn=t.__b;t.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),kn&&kn(t)};var Mn=t.__e;function Ln(){this.__u=0,this.t=null,this.__b=null}function Sn(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function Dn(){this.o=null,this.u=null}t.__e=function(t,e,n){if(t.then)for(var a,r=e;r=r.__;)if((a=r.__c)&&a.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),a.__c(t,e);Mn(t,e,n)},(Ln.prototype=new f).__c=function(t,e){var n=e.__c,a=this;null==a.t&&(a.t=[]),a.t.push(n);var r=Sn(a.__v),o=!1,i=function(){o||(o=!0,n.componentWillUnmount=n.__c,r?r(s):s())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){i(),n.__c&&n.__c()};var s=function(){if(!--a.__u){if(a.state.__e){var t=a.state.__e;a.__v.__k[0]=function t(e,n,a){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return t(e,n,a)})),e.__c&&e.__c.__P===n&&(e.__e&&a.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=a)),e}(t,t.__c.__P,t.__c.__O)}var e;for(a.setState({__e:a.__b=null});e=a.t.pop();)e.forceUpdate()}},l=!0===e.__h;a.__u++||l||a.setState({__e:a.__b=a.__v.__k[0]}),t.then(i,i)},Ln.prototype.componentWillUnmount=function(){this.t=[]},Ln.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,n,a){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),e.__c.__H=null),null!=(e=function(t,e){for(var n in e)t[n]=e[n];return t}({},e)).__c&&(e.__c.__P===a&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return t(e,n,a)}))),e}(this.__b,n,a.__O=a.__P)}this.__b=null}var r=e.__e&&h(p,null,t.fallback);return r&&(r.__h=null),[h(p,null,e.__e?null:t.children),r]};var Pn=function(t,e,n){if(++n[1]===n[0]&&t.u.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.u.size))for(n=t.o;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.o=n=n[2]}};(Dn.prototype=new f).__e=function(t){var e=this,n=Sn(e.__v),a=e.u.get(t);return a[0]++,function(r){var o=function(){e.props.revealOrder?(a.push(r),Pn(e,t,a)):r()};n?n(o):o()}},Dn.prototype.render=function(t){this.o=null,this.u=new Map;var e=x(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.u.set(e[n],this.o=[1,0,this.o]);return t.children},Dn.prototype.componentDidUpdate=Dn.prototype.componentDidMount=function(){var t=this;this.u.forEach((function(e,n){Pn(t,n,e)}))};var Tn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,zn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Hn=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(t)};f.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(f.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var An=t.event;function En(){}function Un(){return this.cancelBubble}function jn(){return this.defaultPrevented}t.event=function(t){return An&&(t=An(t)),t.persist=En,t.isPropagationStopped=Un,t.isDefaultPrevented=jn,t.nativeEvent=t};var Wn={configurable:!0,get:function(){return this.class}},Rn=t.vnode;t.vnode=function(t){var e=t.type,n=t.props,a=n;if("string"==typeof e){for(var r in a={},n){var o=n[r];"defaultValue"===r&&"value"in n&&null==n.value?r="value":"download"===r&&!0===o?o="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+e)&&!Hn(n.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():zn.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),a[r]=o}"select"==e&&a.multiple&&Array.isArray(a.value)&&(a.value=x(n.children).forEach((function(t){t.props.selected=-1!=a.value.indexOf(t.props.value)}))),"select"==e&&null!=a.defaultValue&&(a.value=x(n.children).forEach((function(t){t.props.selected=a.multiple?-1!=a.defaultValue.indexOf(t.props.value):a.defaultValue==t.props.value}))),t.props=a}e&&n.class!=n.className&&(Wn.enumerable="className"in n,null!=n.className&&(a.class=n.className),Object.defineProperty(a,"className",Wn)),t.$$typeof=Tn,Rn&&Rn(t)};var On=t.__r;t.__r=function(t){On&&On(t),t.__c};"object"==typeof performance&&"function"==typeof performance.now&&performance.now.bind(performance);let Vn;function In(t){const[e,n]=pn(!1),a=gn(null);return fn(()=>{e&&a.current.focus({preventScroll:!0})},[e]),fn(()=>{t.currentDropdown!==t.toggle&&n(!1)},[t.currentDropdown]),h("div",{class:Bn},h("div",{class:"ld-expandable"},h("button",{onClick:()=>{t.onDropDown(!e&&t.toggle),n(!e)},class:"ld-expandable--toggle","aria-expanded":e},h("div",{class:"ld-expandable--icon"},e?Fn:Nn),h("div",{class:"ld-expandable--toggle-content"},h("h2",null,t.toggle))),h("div",{ref:a,class:"ld-expandable--detail "+(e?"ld-expandable--expanded":"ld-expandable--closed"),role:"region",tabindex:"-1"},t.detail)))}const Bn=B(Vn||(Vn=(t=>t)`
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
`)),Nn=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"9 6 15 12 9 18"})),Fn=h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevron-down",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},h("path",{stroke:"none",d:"M0 0h24v24H0z"}),h("polyline",{points:"6 9 12 15 18 9"})),Zn={url:new URL("./src/services/updatesService.js",document.baseURI).href};const $n=new class extends Gt{async getUpdates(t){if(t||!this.updates)try{this.updates=await fetch(new URL("../../data/updates.json",Zn.url)).then(t=>t.json()),await this.updates}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:this.updates}}};let qn,Yn,Gn=t=>t;const Xn=B(qn||(qn=Gn`
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
`)),Kn=B(Yn||(Yn=Gn`
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
`));let Qn;const Jn={new_entry:"new entry",announcement:"announcement",rectification:"rectification",promoting_project:"project promotion",promoting_petition:"petition"};function ta(){var t,e;const[n,a]=pn(void 0);return fn(async()=>{const t=await $n.getUpdates();a(t)},[]),navigator.onLine||"success"===(null==n?void 0:n.status)?!n&&navigator.onLine?[" ",h("div",{class:Xn},ie)," "]:"failed"===n.status&&navigator.onLine?h("div",{style:"margin-top: 14px;"},"An error occured while fetching updates."):h("div",{class:ea},h("ul",null,null==n||null===(t=n.data)||void 0===t||null===(e=t.updates)||void 0===e?void 0:e.map(t=>h("li",null,h("div",{class:"ld-ticker--bar"},h("div",{class:"ld-ticker--dot-container"},h("div",{"aria-label":Jn[t.type.toLowerCase()],class:"ld-ticker--dot "+t.type.toLowerCase()})),h("div",{class:"ld-ticker--line"})),h("div",{class:"ld-ticker--content"},h("div",{class:"ld-ticker--title"},t.title),h("div",{class:"ld-ticker--content"},t.content),t.link?h("div",{class:"ld-ticker--link"},h("a",{target:"_blank",rel:"noopener noreferer",href:t.link},"Source")):"",h("div",{class:"ld-ticker--date"},t.date)))))):h("div",{class:Kn},oe,h("b",null,"You are not connected to the internet"),h("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}const ea=B(Qn||(Qn=(t=>t)`
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
`));function na(t){let e;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration().then(n=>{n&&(n.addEventListener("updatefound",()=>{e=n.installing,e.addEventListener("statechange",()=>{"installed"===e.state&&navigator.serviceWorker.controller&&t(!0)})}),n.waiting&&navigator.serviceWorker.controller&&(t(!0),e=n.waiting))})}function aa(t){const[e,n]=[...document.querySelectorAll("link[rel='icon']")],a=document.querySelector("link[rel='manifest']"),r=document.querySelector("meta[name='theme-color']");t?(a.href="/manifest-dark.json",e.href="src/assets/favicon-32x32-dark.png",n.href="src/assets/favicon-16x16-dark.png",r.setAttribute("content","#303136")):(a.href="/manifest.json",e.href="src/assets/favicon-32x32.png",n.href="src/assets/favicon-16x16.png",r.setAttribute("content","#ffffff")),document.getElementsByTagName("head")[0].appendChild(a),document.getElementsByTagName("head")[0].appendChild(e),document.getElementsByTagName("head")[0].appendChild(n),document.getElementsByTagName("head")[0].appendChild(r)}let ra,oa;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),oa=!0,ra=t});class ia extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>Install</button></slot>"}connectedCallback(){this.setAttribute("hidden",""),this.addEventListener("click",this._handlePrompt.bind(this)),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),ra=t,this.removeAttribute("hidden"),this.dispatchEvent(new CustomEvent("pwa-installable",{detail:!0}))}),oa&&this.removeAttribute("hidden")}async _handlePrompt(t){t.preventDefault(),ra.prompt();const{outcome:e}=await ra.userChoice;"accepted"===e?(this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!0})),this.setAttribute("hidden",""),ra=null):this.dispatchEvent(new CustomEvent("pwa-installed",{detail:!1}))}}customElements.define("pwa-install-button",ia);class sa extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}).innerHTML="<slot><button>New update available!</button></slot>",this._refreshing=!1}async connectedCallback(){this.addEventListener("click",this._postMessage.bind(this)),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._refreshing||(window.location.reload(),this._refreshing=!0)})}async _postMessage(t){t.preventDefault();(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"})}}customElements.define("pwa-update-available",sa);let la;const ca=B(la||(la=(t=>t)`
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
  & .select-css {
    display: block;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--ld-button-text);
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 70%;
    max-width: 70%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0px 15%;
    border: 1px solid #aaa;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #e0e0e0;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #e0e0e0 0%, #e0e0e0 100%);
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right 0.7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: 0.65em auto, 100%;
    .dark & {
      background-color: #4f4f4f;
      background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #4f4f4f 0%, #4f4f4f 100%);
    }
  }
  /* Hide arrow icon in IE browsers */
  & .select-css::-ms-expand {
    display: none;
  }
  /* Hover style */
  & .select-css:hover {
    border-color: #888;
  }
  /* Focus style */
  & .select-css:focus {
    border-color: #aaa;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: var(--ld-button-text);
    outline: none;
  }

  /* Set options to normal weight */
  & .select-css option {
    font-weight: normal;
  }

  /* Support for rtl text, explicit support for Arabic and Hebrew */
  *[dir='rtl'] .select-css,
  :root:lang(ar) .select-css,
  :root:lang(iw) .select-css {
    background-position: left 0.7em top 50%, 0 0;
    padding: 0.6em 0.8em 0.5em 1.4em;
  }

  /* Disabled styles */
  .select-css:disabled,
  .select-css[aria-disabled='true'] {
    color: graytext;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  }

  .select-css:disabled:hover,
  .select-css[aria-disabled='true'] {
    border-color: #aaa;
  }
`));function da({onClose:t,locale:e}){const[n,a]=pn(!1),[r,o]=pn(!1);return fn(async()=>{na(t=>{a(t)});let t=localStorage.getItem("darkmode");t="false"!==t&&null!==t,o(t)},[]),h("div",{class:ca},h("button",{onClick:function(){document.getElementsByTagName("html")[0].classList.contains("dark")?(document.getElementsByTagName("html")[0].classList.remove("dark"),localStorage.setItem("darkmode","false"),aa(!1),o(!1),t()):(document.getElementsByTagName("html")[0].classList.add("dark"),localStorage.setItem("darkmode","true"),aa(!0),o(!0),t())},class:"ld-button"},e.t("menu.userPreferenceSection.theme.action"),r?e.t("menu.userPreferenceSection.theme.light"):e.t("menu.userPreferenceSection.theme.dark")),n?h("pwa-update-available",null,h("button",{onClick:()=>t(),class:"ld-button"},e.t("menu.userPreferenceSection.app.update"))):"")}const ha={info:Jt,settings:te,updates:ee,contribute:ne};class ua extends f{constructor(){super(),this.state={updateAvailable:!1,index:0},this.tabRefs={},this.__onFocusMove=this.__onFocusMove.bind(this),this.__onTabClick=this.__onTabClick.bind(this)}componentDidMount(){U("(min-width: 960px)",t=>{this.setState({isMobile:!t})}),Kt.addEventListener("close",t=>{t.detail.menuDialogClosed&&this.tabRefs["tab"+this.state.index].focus()}),na(t=>{this.setState({updateAvailable:t})})}updateIndex(t,e){"settings"===e&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.setState({index:t}),this.tabRefs["tab"+t].focus(),this.state.isMobile||this.commit(e)}__onTabClick(t,e){this.updateIndex(t,e),this.commit(e)}commit(t){this.props.switchContent(t.toLowerCase())}__onFocusMove(t){const e=this.state.index;switch(t.keyCode){case 37:0!==e&&this.updateIndex(e-1,this.tabRefs["tab"+(e-1)].getAttribute("data-label").toLowerCase());break;case 39:e!==this.props.children.length-1&&this.updateIndex(e+1,this.tabRefs["tab"+(e+1)].getAttribute("data-label").toLowerCase())}}render(t,{index:e}){return h("ul",{class:"ld-menu--tabs",role:"tablist"},this.props.children.map((t,n)=>h("li",{role:"presentation",key:n,class:n>1?"hide":""},h("button",{role:"tab",ref:t=>this.tabRefs["tab"+n]=t,tabindex:e===n?"0":"-1","aria-selected":e===n?"true":"false",class:e===n?"ld-menu--active":"","data-label":t.props.id,onKeyUp:this.__onFocusMove,onClick:()=>this.__onTabClick(n,t.props.id)},"settings"===t.props.id&&this.state.updateAvailable?[" ",h("div",{class:"ld-menu--notification"})," "]:"",ha[t.props.id],h("p",{class:e===n?"ld-menu--active":""},t.props.id.toUpperCase())))))}}let pa,fa,ga,ma,ba,wa,va=t=>t;B(pa||(pa=va`
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
`));const Ca=B(fa||(fa=va`
  .ld-menu--content {
    display: block;
    top: 0px;
    right: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    width: 700px;
    border-radius: 0px 0px 0px 0px;
    -moz-border-radius: 0px 0px 0px 0px;
    -webkit-border-radius: 0px 0px 0px 0px;
    overflow: auto;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    @media (max-width: 960px) {
      border-radius: 0px;
      width: calc(100vw - 100%);
      left: calc(100% - 100vw);
    }
    .dark & {
      background-color: #333333 !important;
    }
  }
`)),xa=B(ga||(ga=va`
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
      width: 56px;
      top: 0px;
      height: 100%;
      animation: fadeInRightM 1s;
    }
    height: 100%;
    @media (min-width: 960px) {
      animation: fadeInRight 1s;
    }
    top: 0;
    bottom: 0;
    width: 56px;
    max-width: 56px;
    position: absolute;
    padding: 0;
    right: 0px;
    background-color: #f2f2f2;
    z-index: 1100;
    .dark & {
      background-color: var(--ld-gray-2) !important;
    }
    & .link-container {
      display: flex;
      justify-content: space-between;
      padding: 25px 0px;
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
            &.hide {
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
              background-color: transparent;
              .dark & {
                background-color: transparent !important;
                color: white !important;
              }
              & svg {
                .dark & {
                  color: #f2f2f2;
                }
                color: #828282;
              }
              &::before {
                position: absolute;
                left: -1px;
                top: 7px;
                height: 15px;
                width: 10px;
                z-index: -1;
                content: ' ';
                border-radius: 0% 100% 100% 69% / 0% 50% 51% 0%;
                border: 0px;
                /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
                background-color: transparent;
                z-index: 2000;
                border-width: 10px 0 10px 10px;
                border-style: solid;
                border-color: transparent transparent transparent #ffffff;
                .dark & {
                  background-color: transparent !important;
                  border-color: transparent transparent transparent #333333;
                }
              }
            }
            & svg {
              color: #bdbdbd;
              .dark & {
                color: #bdbdbd;
              }
            }
          }
        }
      }
    }
  }
`)),_a=B(ma||(ma=va`
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
    bottom: 150px;
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
`)),ya=B(ba||(ba=va`
  & {
    position: absolute !important;
    color: white;
    background-color: transparent;
    padding: 0px !important;
    top: 90px;
    width: 39px !important;
    height: 39px !important;
    right: 0;
    left: 0;
    margin-right: auto !important;
    margin-left: auto !important;
    border-radius: 50% !important;
    /*box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);*/
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
    background-color: transparent;
    padding: 0px;
    top: 10%;
    width: 39px;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
    /*box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);*/
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 960px) {
      background: transparent !important;
      box-shadow: none;
      border-radius: 0px;
    }
  }
`)),ka=B(wa||(wa=va`
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
`)),Ma=(t,e,n,a,r,o)=>{switch(t){case"info":return{title:"info",template:[h("h1",null,"Project Lockdown"),h("p",{class:"ld-alpha"},o.t("menu.informationSection.banner")),h("p",null,h("b",null,o.t("menu.informationSection.main.name")),o.t("menu.informationSection.main.text")),h(In,{toggle:o.t("menu.informationSection.about.title"),currentDropdown:n,onDropDown:a,detail:h("p",null,o.t("menu.informationSection.about.text.p1"),h("b",null,o.t("menu.informationSection.main.name")),o.t("menu.informationSection.about.text.p2"),h("b",null,o.t("menu.informationSection.main.name")),o.t("menu.informationSection.about.text.p3"))}),h(In,{toggle:o.t("menu.informationSection.sources.title"),currentDropdown:n,onDropDown:a,detail:[h("p",null,h("b",null,o.t("menu.informationSection.main.name")),o.t("menu.informationSection.sources.subtitle"),h("ul",{class:"ld-sources"},h("li",null,h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://TIOF.Click/LockdownData"}," ",o.t("menu.informationSection.sources.linksList.first.linkTitle")),h("br",null),o.t("menu.informationSection.sources.linksList.first.text")),h("li",null,h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://covid19api.com/"},o.t("menu.informationSection.sources.linksList.second.linkTitle")),h("br",null),o.t("menu.informationSection.sources.linksList.second.text")," ",h("a",{href:"https://systems.jhu.edu/",target:"_blank"},o.t("menu.informationSection.sources.linksList.second.highlight")),h("br",null))),o.t("menu.informationSection.sources.issues.text")," ",h("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Code-for-All/lockdown/issues"},o.t("menu.informationSection.sources.issues.highlight")),"."),h("div",{class:"link-container"},h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://tiof.click/LockdownData"},o.t("menu.contribution.contributionLinks.firstLink")),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://tiof.click/pldpsf"},o.t("menu.contribution.contributionLinks.secondLink")))]}),h(In,{toggle:o.t("menu.informationSection.credits.title"),currentDropdown:n,onDropDown:a,detail:h("p",null,h("b",null,o.t("menu.informationSection.main.name")),o.t("menu.informationSection.credits.text"),h("a",{href:"https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit?ts=5e74ac83#gid=634415797",target:"_blank"},o.t("menu.informationSection.credits.highlight")),".")}),h(In,{toggle:o.t("menu.informationSection.dataPrivacity.title"),currentDropdown:n,onDropDown:a,detail:[h("p",null,o.t("menu.informationSection.dataPrivacity.paragraphs.p1")),h("p",null,o.t("menu.informationSection.dataPrivacity.paragraphs.p2"))]})]};case"settings":return{title:"settings",template:[" ",h(da,{onClose:e,onLocateChange:r,locale:o})," "]};case"contribute":return{title:"contribute",template:[h("p",null,"Do you have any NPI source you would want to share with us? Please follow this link:"),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Submit data"),h("p",null,"Additionally, you can become part of the project by joining one of the following teams:",h("ul",null,h("li",null,"Editors"),h("li",null,"Devs"),h("li",null,"UI/UX"))),h("p",null,"Contact us via Telegram at:",h("br",null),h("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://t.me/ProjectLockdown"}," @ProjectLockdown"))]};case"updates":return{title:"updates",template:[" ",h(ta,null)," "]};default:return{title:"",template:void 0}}};class La extends f{constructor(t){super(t),this.state={activeItem:"info",showLateralMenu:!1,showMenu:!1,currentDropdown:1},this.showSideBar=this.showSideBar.bind(this),this.closeNavbar=this.closeNavbar.bind(this),this.switchContent=this.switchContent.bind(this),this.onDropDown=this.onDropDown.bind(this)}componentDidMount(){let t=0;U("(min-width: 960px)",e=>{this.setState({isMobile:!e}),e&&t>0&&(t++,this.props.close())})}showSideBar(){this.setState({showLateralMenu:!0,showMenu:!0})}switchContent(t){if("settings"===t&&this.state.updateAvailable&&this.setState({updateAvailable:!1}),this.state.isMobile&&this.props.opened&&t===this.prevVal)return this.props.close(),this.setState({activeItem:this.prevVal}),void(this.prevVal="");this.prevVal=t,this.setState({activeItem:t,showLateralMenu:t!==this.state.activeItem})}closeNavbar(){this.setState({showLateralMenu:!1,showSideBar:!1,activeItem:"info"})}onDropDown(t){this.setState({currentDropdown:t})}render(t,{activeItem:e,updateAvailable:n,currentDropdown:a}){return this.state.showLateralMenu||!0===this.props.isMobile?[h("div",{class:"menu-overlay "+ka}),h("main",{id:"main",class:"ld-menu "+xa+" "+(this.state.showLateralMenu?Ca:"")},h("div",{class:"ld-menu-nav"},h("button",{class:ya,onClick:this.closeNavbar},ae),h("nav",null,h(ua,{onClose:this.closeNavbar,switchContent:this.switchContent},h("button",{id:"info"},"info"),h("button",{id:"settings"},"settings"),h("button",{id:"updates"},"updates"),h("button",{id:"contribute"},"contribute")))),h("div",{class:"ld-menu--content"},h("div",{class:"mb-only"},h("div",{class:"ld-menu--header"},h("h1",null,e))),Ma(e,this.closeNavbar,a,this.onDropDown,t.onLocateChange,t.locale).template))]:h("button",{onClick:this.showSideBar,class:_a},ue)}}class Sa extends f{async componentWillMount(){const t=await this.props.component(),e=t.default||t;this.setState({Component:e})}render({props:t},{Component:e}){return h(e,t)}}var Da="object"==typeof global&&global&&global.Object===Object&&global,Pa="object"==typeof self&&self&&self.Object===Object&&self,Ta=Da||Pa||Function("return this")(),za=Ta.Symbol,Ha=Object.prototype,Aa=Ha.hasOwnProperty,Ea=Ha.toString,Ua=za?za.toStringTag:void 0;var ja=Object.prototype.toString;var Wa=za?za.toStringTag:void 0;function Ra(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Wa&&Wa in Object(t)?function(t){var e=Aa.call(t,Ua),n=t[Ua];try{t[Ua]=void 0;var a=!0}catch(t){}var r=Ea.call(t);return a&&(e?t[Ua]=n:delete t[Ua]),r}(t):function(t){return ja.call(t)}(t)}function Oa(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var Va=/^\s+|\s+$/g,Ia=/^[-+]0x[0-9a-f]+$/i,Ba=/^0b[01]+$/i,Na=/^0o[0-7]+$/i,Fa=parseInt;function Za(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==Ra(t)}(t))return NaN;if(Oa(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Oa(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Va,"");var n=Ba.test(t);return n||Na.test(t)?Fa(t.slice(2),n?2:8):Ia.test(t)?NaN:+t}var $a=function(){return Ta.Date.now()},qa=Math.max,Ya=Math.min;let Ga,Xa,Ka=t=>t;const Qa=B(Ga||(Ga=Ka`
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
`)),Ja=B(Xa||(Xa=Ka`
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
`)),tr=["S","M","T","W","T","F","S"],er=["January","February","March","April","May","June","July","August","September","October","November","December"];class nr extends f{constructor(){super(),this.state={days:[],currentMonth:(new Date).getMonth(),lastSelection:!1,currentYear:2020,allMonthsDate:new Array(12),enableArrows:!1},this.onPressKey=this.onPressKey.bind(this),this.getMonthData=this.getMonthData.bind(this),this.fillAllMonths=this.fillAllMonths.bind(this),this.chooseDay=this.chooseDay.bind(this),this.changeMonth=this.changeMonth.bind(this)}componentDidMount(){window.addEventListener("keydown",this.onPressKey);const{currentMonth:t,allMonthsDate:e}=this.state;let n=new Date(2020,t,1),a=new Date(2020,t+1,0),r=this.getMonthData(n,a),o=e;o[t]=r,this.setState({days:r,allMonthsDate:o},this.fillAllMonths)}componentWillUnmount(){window.removeEventListener("keydown",this.onPressKey)}onPressKey(t){"Escape"===t.code&&this.props.show&&this.props.close()}getMonthData(t,e){let n=e.getDate(),a=7-(t.getDay()+1),r=n+a,o=r/7,i=0;r%7>0&&(i=7-r%7,r+=7-r%7,o=r/7);let s=[],l=0;for(let t=0;t<o;t++){s.push([]);for(let e=0;e<7;e++)0===t&&e<a||t===o-1&&i>0&&e>7-i-1?s[t].push({day:null,label:tr[e]}):(l++,s[t].push({day:l,label:tr[e]}))}return s}fillAllMonths(){const t=this.state.currentMonth;let e,n,a=this.state.allMonthsDate;for(let r=0;r<12;r++)if(r!==t){e=new Date(2020,r,1),n=new Date(2020,r+1,0);let t=this.getMonthData(e,n);a[r]=t}this.setState({allMonthsDate:a,enableArrows:!0})}chooseDay(t,e,n){let a=this.state.days;!1!==this.state.lastSelection&&(a[this.state.lastSelection[0]][this.state.lastSelection[1]].selected=!1),t.selected=!0,a[e][n]=t,this.props.onSelect(new Date(this.state.currentYear,this.state.currentMonth,t.day)),this.setState({days:a,lastSelection:[e,n]})}changeMonth(t){const{enableArrows:e,currentMonth:n,allMonthsDate:a}=this.state;if(e){let e,r;(n>0||t)&&(n<11||!t)&&(t?(r=n+1,e=a[r]):(r=n-1,e=a[r]),this.setState({days:e,currentMonth:r}))}}render(t){return[h("div",{class:"overlay "+Ja+" "+(this.props.show?"show":""),onClick:this.props.close}),h("div",{class:"calendar "+Qa+" "+(this.props.show?"show":"")+" "+this.props.customClass},h("div",{class:"calendar actions"},h("span",{onClick:()=>this.changeMonth(!1)}," ",de," "),h("h3",null,er[this.state.currentMonth]," ",this.state.currentYear),h("span",{onClick:()=>this.changeMonth(!0)}," ",he," ")),h("div",{class:"calendar header"},tr.map(t=>h("div",{class:"header item"},t))),h("div",{class:"calendar container"},this.state.days.map((t,e)=>h("div",{class:"week"},t.map((t,n)=>h("div",{onClick:()=>this.chooseDay(t,e,n),class:`day ${null===t.day?"empty":""} ${t.selected?"selected":""}`},h("span",null,t.day)))))))]}}const ar=t=>{if("object"==typeof t){let e={};return Object.keys(t).forEach(n=>{let a=function t(e,n){if("object"!=typeof e||Array.isArray(e)){let t={};return t[n]=e.replace(/{(.*?)}/g,""),t}{let a=[];for(let r in e){let o;if(o=t(e[r],n?`${n}_${r}`:r),Array.isArray(o)){let t={};for(let e of o)t={...t,...e};o=t}a.push(o)}return a}}(t[n],n);if(Array.isArray(a)){let t={};for(let e of a)t={...t,...e};a=t}e={...e,...a}}),e}return t};let rr,or,ir,sr,lr,cr,dr=t=>t;const hr=[7.5,16,24.5,33,41.5,50,58.5,67,75.5,84,94];let ur=!1;function pr(t,e){let n=e;return void 0!==e?(n=e.replace("-",""),"ar"===n&&(n="arSA"),"zhHK"===n&&(n="zhTW"),void 0!==ur[n]&&null!==ur[n]||(n=e.split("-")[0],void 0!==ur[n]&&null!==ur[n]||(n="enUS"))):n="enUS",qt(t,"dd MMM",{locale:ur?ur[n]:at})}function fr(t,e){let n=e;return e?(n=e.replace("-",""),"ar"===n&&(n="arSA"),"zhHK"===n&&(n="zhTW"),void 0!==ur[n]&&null!==ur[n]||(n=e.split("-")[0],void 0!==ur[n]&&null!==ur[n]||(n="enUS"))):n="enUS",qt(t,"dd MMMM yyyy",{locale:ur?ur[n]:at})}const gr=B(rr||(rr=dr`
  & {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 720px;
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
      max-height: calc(100vh - 110px);
      height: 600px;
      transition: max-height 0.25s ease-in;
      @media (max-width: 960px) {
        /*max-height: calc(100vh - 45px);*/
        max-height: 90%;
      }
    }
    /*padding: 0px 6%;*/
    @media (max-width: 960px) {
      /*bottom: 30px;*/
      bottom: 5%;
      left: 0;
      right: 0;
      width: 90vw;
      max-width: 450px;
    }
    & > div.countryInfo {
      z-index: 10;
      height: 100%;
      @media (max-width: 960px) {
        /*height: calc(100vh - 150px);
        max-height: calc(100vh - 150px);*/
      }
    }
  }
`)),mr=B(or||(or=dr`
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
  .dark & {
    background-color: #333333;
  }
  & {
    height: 50px;
    padding: 0px 110px;
    @media (max-width: 960px) {
      padding: 0px 85px;
    }
    border-radius: 25px;
    background-color: white;
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    &.open {
      border-top: 0px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    @media (max-width: 960px) {
      & {
        padding: 0 85px;
      }
    }
    & > .overlay {
      height: 100vh;
      @media (max-width: 960px) {
        top: calc(-100vh + 100% + 20px);
        left: -6%;
      }
      top: calc(-100vh + 100% + 65px);
      left: calc((100% - 100vw) / 2);
    }
    & > .calendar {
      bottom: 60px;
      width: 300px;
      height: fit-content;
      display: none;
      tansition: 0.3s;
      &.left {
        left: 0;
        &.hide {
          animation: fadeOutLeft 0.3s forwards !important;
          animation-delay: 0.1s !important;
        }
        &.show {
          animation: fadeInLeft 0.3s;
          display: table;
        }
      }
      &.right {
        right: 0;
        &.hide {
          animation: fadeOutRight 0.3s forwards !important;
          animation-delay: 0.1s !important;
        }
        &.show {
          animation: fadeInRight 0.3s;
        }
      }
    }
  }
`)),br=B(ir||(ir=dr`
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
`)),wr=B(sr||(sr=dr`
  .dark & {
    color: white;
  }
  & {
    font-weight: 600;
    font-size: 12px;
    color: #333333;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    margin: auto;
    & span:first-child {
      margin-right: 5px;
    }
    & svg {
      height: 18px;
    }
    &:hover {
      cursor: pointer;
    }
    &.last {
      /*top: 17px !important;*/
    }
    @media (max-width: 960px) {
      top: 0;
      &.first {
        left: 17px !important;
      }
      &.last {
        right: 38px !important;
      }
    }
    &.first {
      left: 40px;
    }
    &.last {
      right: 57px;
    }
  }
`)),vr=B(lr||(lr=dr`
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
`)),Cr=B(cr||(cr=dr`
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
`));class xr extends f{render(t){return h("span",null," ",fe," ")}}var _r=He(class extends f{constructor(){super(),this.state={currentDateValue:35,currentPosition:24.5,datePickerPosition:"left",showDatePicker:!1,currentSelectedDay:"",firstDay:"",lastDay:"",currentSliderRange:[],CurrentRange:70},this.dateRef={current:null},this.range={current:null},this.container={current:null},this.onSliderChange=this.onSliderChange.bind(this),this.onBtnClick=this.onBtnClick.bind(this),this.onChooseDate=this.onChooseDate.bind(this),this.calendarWillClose=this.calendarWillClose.bind(this),this.closeDatePicker=this.closeDatePicker.bind(this),this.submitChanges=this.submitChanges.bind(this),this.onPressKey=this.onPressKey.bind(this),this.updateDates=this.updateDates.bind(this)}async componentWillMount(){ur=await(async t=>({...await import("./8c344edb.js")}))()}componentDidMount(){const{isMobile:t}=this.props;let{CurrentRange:e}=this.state;e=t?70:80,window.addEventListener("keydown",this.onPressKey);let n=[],a=Qt(new Date,-35),r=e;for(let t=1;t<=r;t++)n.push(a),a=Qt(a,1);const o=this.dateRef.current,i=this.range.current;let s=(this.container.current.offsetWidth-i.offsetWidth)/2-o.offsetWidth/4,l=i.offsetWidth/e;o.style.left=s+32*l+"px",this.setState({currentSliderRange:n,currentSelectedDay:fr(new Date,this.props.i18n.locale),firstDay:pr(n[0],this.props.i18n.locale),lastDay:pr(n[n.length-1],this.props.i18n.locale),CurrentRange:e})}componentWillUnmount(){window.removeEventListener("keydown",this.onPressKey)}componentDidUpdate(t,e,n){t.i18n!==this.props.i18n&&this.updateDates(e)}onPressKey(t){this.range.current;let{CurrentRange:e}=this.state;switch(t.code){case"ArrowLeft":t.preventDefault(),this.range.current.value>0&&(this.range.current.value=this.range.current.value-1,this.onSliderChange({target:{value:this.range.current.value}}));break;case"ArrowRight":t.preventDefault(),this.range.current.value<e-1&&(this.range.current.value=Number(this.range.current.value)+1,this.onSliderChange({target:{value:this.range.current.value}}))}}onSliderChange(t){let{CurrentRange:e}=this.state;const{currentDateValue:n,currentSliderRange:a}=this.state,r=this.dateRef.current,o=this.range.current,i=this.container.current;let s=t.target.value,l=(i.offsetWidth-o.offsetWidth)/2-r.offsetWidth/4,c=o.offsetWidth/e,d=hr[s];r.style.left=l+c*s+"px",this.setState({currentDateValue:s,currentPosition:d,currentSelectedDay:fr(a[s],this.props.i18n.locale)},this.submitChanges)}onBtnClick(t){this.setState({showDatePicker:!0,datePickerPosition:t})}onChooseDate(t){let{CurrentRange:e}=this.state;const n=this.dateRef.current,a=this.range.current;let r=(this.container.current.offsetWidth-a.offsetWidth)/2-n.offsetWidth/4,o=a.offsetWidth/e;n.style.left=r+o*(.5+("left"===this.state.datePickerPosition?0:e-1))+"px",this.calendarWillClose();let i=[];if("left"===this.state.datePickerPosition){let n=1;for(let a=1;a<=e;a++)1===a?i.push(t):(i.push(this.rangePreProcces(t,n)),n++)}else{let n=e-1;for(let a=1;a<=e;a++)a===e?i.push(t):(i.push(this.rangePreProcces(t,-1*n)),n--)}this.setState({currentSliderRange:i,currentSelectedDay:fr(t,this.props.i18n.locale),firstDay:pr(i[0],this.props.i18n.locale),lastDay:pr(i[i.length-1],this.props.i18n.locale),currentDateValue:"left"===this.state.datePickerPosition?0:e-1,currentPosition:24.5},this.submitChanges)}updateDates(t){const{currentDateValue:e,currentSliderRange:n}=t;this.setState({currentSelectedDay:fr(n[e],this.props.i18n.locale),firstDay:pr(n[0],this.props.i18n.locale),lastDay:pr(n[n.length-1],this.props.i18n.locale)})}calendarWillClose(){this.setState({datePickerPosition:this.state.datePickerPosition+" hide"},()=>setTimeout(()=>this.closeDatePicker(),400))}closeDatePicker(){this.setState({showDatePicker:!1,datePickerPosition:this.state.datePickerPosition.replace(" hide","")})}rangePreProcces(t,e){let n=new Date(t);return n.setDate(t.getDate()+e),n}submitChanges(){const{currentSliderRange:t,currentDateValue:e}=this.state;this.props.onChange(t[e],t[0],t[t.length-1])}render(t){let{CurrentRange:e}=this.state;return h("div",{class:"sliderWrapper "+gr+" "+(""!==this.props.children?"open":""),ref:this.container},this.props.children,h("div",{class:mr+" "+br+" "+(""!==this.props.children?"open":"")},h(nr,{close:this.calendarWillClose,onSelect:this.onChooseDate,show:this.state.showDatePicker,customClass:this.state.datePickerPosition}),h("div",{class:vr,ref:this.dateRef},h("span",null,this.state.currentSelectedDay)),h("span",{title:"Select Start Date",class:"first "+wr,onClick:t=>this.onBtnClick("left")},h(xr,null)," ",this.state.firstDay),h("button",{onClick:t=>this.onBtnClick("left"),class:"first "+Cr}),h("input",{ref:this.range,onInput:this.onSliderChange,type:"range",min:"0",max:e-1,step:"1",value:this.state.currentDateValue}),h("span",{title:"Select End Date",class:"last "+wr}," ",this.state.lastDay)))}});let yr;const kr=B(yr||(yr=(t=>t)`
  & {
    position: absolute;
    bottom: 200px;
    left: 2.5vw;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.1);
    display: flex;
    color: #333333;
    justify-content: center;
    align-items: center;
    padding: 12px;
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
        right: -205px;
        &::after {
          left: 0;
          border-right-color: #fff;
          border-left: 0;
          margin-left: -20px;
        }
      }
      &.right {
        left: -205px;
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
        /*justify-content: space-between;*/
        font-weight: 500;
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
            &.covidstripes {
              background-color: #828282;
              background-image: url(/src/assets/images/stripes-pattern-2.png);
            }
          }
        }
      }
    }
  }
`));class Mr extends f{constructor(){super(),this.state={showDialog:!1,y:"bottom",x:"left"},this.btn={current:null},this.onClick=this.onClick.bind(this),this.initBtn=this.initBtn.bind(this),this.onTouch=this.onTouch.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}initBtn(t){this.btn=t,t.addEventListener("touchmove",this.onTouch),t.addEventListener("touchend",this.onTouchEnd)}onTouch(t){let e=t.targetTouches[0];this.btn.style.left=e.pageX+"px",this.btn.style.top=e.pageY+"px"}onTouchEnd(t){let e=this.state.x,n=this.state.y,a=window.innerWidth||window.clientWidth,r=window.innerHeight||window.clientHeight,o=Number(this.btn.style.top.replace("px","")),i=Number(this.btn.style.left.replace("px",""));o>r/2?(o>=r-150&&(this.btn.style.top=r-150+"px"),n="bottom"):(o<=160&&(this.btn.style.top="160px"),n="top"),i>a/2?(e="right",this.btn.style.left=a-70+"px"):(e="left",this.btn.style.left="10px"),this.setState({x:e,y:n})}onClick(){this.setState({showDialog:!this.state.showDialog})}render({i18n:t}){return h("div",{onClick:this.onClick,draggable:"true",ref:this.initBtn,class:kr},pe,h("div",{class:"dialog "+(this.state.showDialog?"show":"")+" "+this.state.y+" "+this.state.x},h("div",null,h("span",null,h("div",{class:"color green"})),h("span",null," ",t.t("mapLegend.no")," ")),h("div",null,h("span",null,h("div",{class:"color orange"})),h("span",null," ",t.t("mapLegend.partial")," ")),h("div",null,h("span",null,h("div",{class:"color red"})),h("span",null," ",t.t("mapLegend.full")," ")),h("div",null,h("span",null,h("div",{class:"color gray"})),h("span",null," ",t.t("mapLegend.noData")," "))))}}let Lr,Sr,Dr=t=>t;const Pr=B(Lr||(Lr=Dr`
  & {
    position: absolute;
    top: 25vh;
    right: 2.5vw;
    height: 30px;
    min-width: 30px;
    padding: 0px;
    padding-left: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    color: #333333;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.05em;
    &:hover {
      cursor: pointer;
    }
    .dark & {
      background-color: #333333;
      color: #fff;
    }
    & .circleBtn {
      margin-left: 5px;
      height: 30px;
      min-width: 30px;
      border-radius: 50%;
      color: #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.05em;
      .dark & {
        background-color: #333333;
        color: #fff;
      }
    }
  }
`)),Tr=B(Sr||(Sr=Dr`
  & {
    background: transparent;
    display: flex;
    align-items: center;
    position: absolute;
    top: calc(25vh + 37px);
    right: 5vw;
    max-width: 0px;
    overflow: hidden;
    transition: 0.5s;
    padding: 5px 0px;
    flex-wrap: no-wrap;
    &.show {
      max-width: 50vw;
      flex-wrap: wrap;
    }
    & .langOpt {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: #fff;
      color: #333333;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      overflow: hidden;
      margin-left: 10px;
      font-weight: 500;
      margin-bottom: 10px;
      &:hover {
        cursor: pointer;
        border: 0px solid rgba(51, 51, 51, 0.5);
        background-color: #e0e0e0;
      }
      &.active {
        border: 0px solid #333333;
        background-color: #e0e0e0;
      }
      .dark &.active {
        border: 0px solid #fff;
        background-color: #828282;
      }
      .dark & {
        background-color: #333333;
        color: #fff;
      }
      .dark &:hover {
        background-color: #828282;
      }
    }
  }
`));class zr extends f{constructor(){super(),this.state={showLangOpt:!1},this.toggleLangOpts=this.toggleLangOpts.bind(this),this.changeCurrentLanguage=this.changeCurrentLanguage.bind(this)}toggleLangOpts(){this.setState({showLangOpt:!this.state.showLangOpt})}changeCurrentLanguage(t){this.toggleLangOpts(),this.props.onLocateChange(t)}render({i18n:t,languages:e},{showLangOpt:n}){var a;return[h("div",{class:Pr,onClick:this.toggleLangOpts},null===(a=t.locale)||void 0===a?void 0:a.toUpperCase(),h("div",{class:"circleBtn"},ge)),h("div",{class:`${Tr} ${n?"show":""}`},e.map(e=>h("div",{class:"langOpt "+(e===t.locale?"active":""),onClick:()=>this.changeCurrentLanguage(e)},null==e?void 0:e.toUpperCase().replace("-","\n"))))]}}var Hr=["ar","en","en-US","es","es-ES","es-MX","it","pt","pt-BR","ru","zh-CN","zh-HK"];let Ar;const Er=function(t,e,n){var a,r,o,i,s,l,c=0,d=!1,h=!1,u=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=a,o=r;return a=r=void 0,c=e,i=t.apply(o,n)}function f(t){return c=t,s=setTimeout(m,e),d?p(t):i}function g(t){var n=t-l;return void 0===l||n>=e||n<0||h&&t-c>=o}function m(){var t=$a();if(g(t))return b(t);s=setTimeout(m,function(t){var n=e-(t-l);return h?Ya(n,o-(t-c)):n}(t))}function b(t){return s=void 0,u&&a?p(t):(a=r=void 0,i)}function w(){var t=$a(),n=g(t);if(a=arguments,r=this,l=t,n){if(void 0===s)return f(l);if(h)return clearTimeout(s),s=setTimeout(m,e),p(l)}return void 0===s&&(s=setTimeout(m,e)),i}return e=Za(e)||0,Oa(n)&&(d=!!n.leading,o=(h="maxWait"in n)?qa(Za(n.maxWait)||0,e):o,u="trailing"in n?!!n.trailing:u),w.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=r=s=void 0},w.flush=function(){return void 0===s?i:b($a())},w}(()=>{let t={menuDialogClosed:!1,countryDialogClosed:!1};const e=new URLSearchParams(location.search);e.has("country")||e.has("iso2")?t.countryDialogClosed=!0:t.menuDialogClosed=!0,Kt.close(t)},10,{leading:!0,trailing:!1}),Ur=B(Ar||(Ar=(t=>t)`
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
`));function jr(t){return qt(t,"yyyy-MM-dd")}("requestIdleCallback"in window?window.requestIdleCallback:t=>setTimeout(t,1e3))(()=>{import("./34c112cb.js"),import("./545b271e.js")}),console.log("🌐 Project Lockdown, version: 0.0.0"),window.addEventListener("appinstalled",()=>{window.location.reload()}),U("(prefers-color-scheme: dark)",t=>{const e=localStorage.getItem("darkmode");null!==e?"true"===e&&(document.documentElement.classList.add("dark"),aa(!0)):t?(document.documentElement.classList.add("dark"),aa(!0)):(document.documentElement.classList.remove("dark"),aa(!1))}),function(e,n,a){var r,l,c;t.__&&t.__(e,n),l=(r=a===o)?null:a&&a.__k||n.__k,e=h(p,null,[e]),c=[],S(n,(r?n:a||n).__k=e,l||i,i,void 0!==n.ownerSVGElement,a&&!r?[a]:l?null:n.childNodes.length?s.slice.call(n.childNodes):null,c,a||i,r),D(c,e)}([" ",h(class extends f{constructor(){super(),this.state={dialog:{opened:!1,template:{},title:""},haveSelectedDate:!1,startDate:!1,endDate:!1,currentLanguage:{t:t=>t},languages:[],baseLanguages:[]},this.__onPathChanged=this.__onPathChanged.bind(this),this.__closeCountryInfo=this.__closeCountryInfo.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__showDialog=this.__showDialog.bind(this),this.__showDialogRoute=this.__showDialogRoute.bind(this),this.__onSelectDate=this.__onSelectDate.bind(this),this.__initi18n=this.__initi18n.bind(this),this.__getTranslation=this.__getTranslation.bind(this),this.__onLocateChange=this.__onLocateChange.bind(this)}async componentDidMount(){this.__onPathChanged()}componentWillMount(){Xt.addEventListener("path-changed",this.__onPathChanged),window.i18n?this.__initi18n():setTimeout(this.__initi18n,300),this.setState({showStatsbox:1==Number(Xt.url.searchParams.get("statsbox")||1),showMenu:1==Number(Xt.url.searchParams.get("menu")||1),showSlider:1==Number(Xt.url.searchParams.get("slider")||1)})}componentWillUnmount(){Xt.removeEventListener("path-changed",this.__onPathChanged)}render(){const t=this.state.haveSelectedDate?jr(this.state.haveSelectedDate):jr(new Date);return[this.state.showStatsbox?[h(tn,{selectedDate:t,showStatsbox:this.state.showStatsbox,startDate:this.state.startDate,endDate:this.state.endDate,show:!this.state.dialog.opened,i18n:this.state.currentLanguage}),this.state.dialog.opened?"":h("div",{class:Ur},h(Ke,{selectedDate:t,startDate:this.state.startDate,endDate:this.state.endDate,i18n:this.state.currentLanguage,onLocateChange:this.__onLocateChange}))]:"",this.state.showMenu?h(La,{opened:this.state.dialog.opened,isMobile:this.state.isMobile,changeRoute:this.__showDialogRoute,close:this.__closeDialog,locale:this.state.currentLanguage,onLocateChange:this.__onLocateChange}):"",h(Ze,{selectedDate:t,startDate:this.state.startDate,endDate:this.state.endDate,currentLanguage:this.state.currentLanguage}),h(Mr,{i18n:this.state.currentLanguage}),h(zr,{i18n:this.state.currentLanguage,languages:this.state.baseLanguages,onLocateChange:this.__onLocateChange}),this.state.showSlider?h(_r,{onChange:this.__onSelectDate,i18n:this.state.currentLanguage},this.state.dialog.opened?h(Sa,{component:()=>import("./545b271e.js"),props:{country:this.state.dialog.title,iso2:this.state.dialog.iso2,wikidata:this.state.dialog.wikidata,date:this.state.haveSelectedDate||new Date,i18n:this.state.currentLanguage,startDate:this.state.startDate,endDate:this.state.endDate,onClose:this.__closeDialog}}):""):""]}async __initi18n(){let t=navigator.language||navigator.userLanguage,e=window.i18n,n=await(async()=>{let t={},e=0;for(let n=0;n<Hr.length;n++)try{let e=await import("./translations/"+Hr[n]+"/index.js");if(e=e.default,e.languageId===Hr[n]?t[Hr[n]]=ar(e):console.warn(`The iso value of ${Hr[n]} not match`),n===Hr.length-1)return t}catch(a){if(console.log(a),e++,n===Hr.length-1)return t;continue}if(e===Hr-1)return console.log(t),t})(),a=Object.keys(n),r={},o=[];a.forEach(t=>{t.includes("-")?t.includes("zh-")&&o.push(t):o.push(t),r[t]={t:this.__getTranslation,i18n:e.create({values:n[t]}),locale:t}});let i=function(t,e){e.indexOf(t);{let n=t.split("-")[0];if(e.indexOf(n)>=0)return n;{if(t.includes("-TW")||t.includes("-tw"))return"zh-HK";let a=e.filter(t=>t.split("-")[0].includes(n));return a.length>0?a[0]:"en"}}}(t,a);this.setState({i18nLanguages:r,currentLanguage:r[i],languages:a,baseLanguages:o})}__getTranslation(t){let e=t.split(".").join("_");return this.state.currentLanguage.i18n(e)}__showDialogRoute({template:t,title:e}){const n=Xt.url.searchParams.get("country");n?Xt.setPath(`${e}?country=${n}`):Xt.setPath(e),this.state.isMobile&&(Xt.setSearchParam("country",null),this.__showDialog({template:t,title:e}))}__onPathChanged(){const t=Xt.url.searchParams.get("country"),e=Xt.url.searchParams.get("iso2"),n=Xt.url.searchParams.get("wikidata"),a=this.state.haveSelectedDate||new Date;t&&e&&this.setState({dialog:{opened:!0,template:h(Sa,{component:()=>import("./545b271e.js"),props:{country:t,iso2:e,date:a,wikidata:n}}),title:t,iso2:e,date:a,wikidata:n}})}__showDialog({template:t,title:e}){this.setState({dialog:{opened:!0,template:t,title:e}})}__closeCountryInfo(){Xt.setSearchParam("country",void 0),Xt.setSearchParam("iso2",void 0),Xt.setSearchParam("wikidata",void 0)}__closeDialog(){this.setState({dialog:{opened:!1,template:"",title:""}}),Er(),this.__closeCountryInfo()}__onSelectDate(t,e,n){this.setState({haveSelectedDate:t,startDate:e,endDate:n})}__onLocateChange(t){"ar"===t.substring(0,2)?document.getElementById("app").className="rtl":document.getElementById("app").className="",this.state.i18nLanguages[t]&&this.setState({currentLanguage:this.state.i18nLanguages[t]})}},null)," "],document.getElementById("app"));export{Xn as A,Xt as B,Y as C,Q as D,Gt as E,tt as F,et as G,vt as H,q as I,K as J,J as K,nt as L,at as M,Qt as a,B as b,Te as c,f as d,Kn as e,qt as f,ae as g,se as h,ce as i,le as j,be as k,we as l,xe as m,ve as n,oe as o,ke as p,Ce as q,N as r,ye as s,F as t,Me as u,h as v,He as w,_e as x,Le as y,ie as z};
