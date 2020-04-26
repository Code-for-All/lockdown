import{m as t,r as e,h as i,c as s,a as n}from"./7e62e28e.js";function o(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&"false"!==t.getAttribute("aria-hidden")||"none"===t.style.display||"0"===t.style.opacity||"hidden"===t.style.visibility||"collapse"===t.style.visibility}function a(t){return"-1"!==t.getAttribute("tabindex")&&!o(t)&&!function(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&"false"!==t.getAttribute("aria-disabled")}(t)&&(t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement)}const d=new Map;const r=document.createElement("template");r.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';class l extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1;const t=this.attachShadow({mode:"open"});t.appendChild(r.content.cloneNode(!0)),this.$backup=t.querySelector("#backup"),this.$start=t.querySelector("#start"),this.$end=t.querySelector("#end"),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(t){t?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return function t(e,i,s,n=20,o=0){let a=[];if(o>=n)return a;const d=e=>{const a=e.assignedNodes().filter(t=>1===t.nodeType);return a.length>0?t(a[0].parentElement,i,s,n,o+1):[]},r=Array.from(e.children||[]);for(const e of r)i(e)||(s(e)&&a.push(e),null!=e.shadowRoot?a.push(...t(e.shadowRoot,i,s,n,o+1)):"SLOT"===e.tagName?a.push(...d(e)):a.push(...t(e,i,s,n,o+1)));return a}(this,o,a)}trapFocus(t){if(this.inactive)return;let e=this.getFocusableElements();e.length>0?(t?e[e.length-1].focus():e[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(t){!function(t,e,i){const s=d.get(i);null!=s&&window.clearTimeout(s),d.set(i,window.setTimeout(()=>{t(),d.delete(i)},e))}(()=>{this.focused!==t&&(this._focused=t,this.render())},0,this.debounceId)}render(){this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused")}}window.customElements.define("focus-trap",l);let c;const h=s(c||(c=(t=>t)`
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
    max-width: 440px;
    left: calc(50% + 200px);
    top: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    border-radius: 40px;
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
    height: calc(100% - 60px);
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
    border-radius: 5px;
  }

  @media (max-width: 960px) {
    & {
      top: 60px;
      margin-top: 0px;
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
`));export default class extends t{constructor(){super(),this.__onClick=this.__onClick.bind(this),this.__closeDialog=this.__closeDialog.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this)}componentWillMount(){window.addEventListener("keydown",this.__onKeyDown,!0)}componentDidMount(){let t=location.href;e.addEventListener("path-changed",()=>{t!==location.href&&this.dialogRef&&(this.dialogRef.setAttribute("tabindex","-1"),this.dialogRef.focus(),this.dialogRef.removeAttribute("tabindex"),t=location.href)}),this.dialogRef.setAttribute("tabindex","-1"),this.dialogRef.focus(),this.dialogRef.removeAttribute("tabindex")}componentWillUnmount(){window.removeEventListener("keydown",this.__onKeyDown,!0)}render(){return i("div",{class:h,onClick:this.__onClick},i("div",{role:"dialog","aria-labelledby":"dialogtitle",ref:t=>this.dialogRef=t,class:"ld-dialog--container"},i("focus-trap",null,i("div",{class:"ld-dialog--header"},i("h1",{id:"dialogtitle"},this.props.title),i("div",{class:"ld-dialog--close-cont"},i("button",{onClick:this.__closeDialog,class:"ld-dialog--close","aria-labelledby":"button-name"},i("span",{id:"button-name",hidden:!0},"close"),n))),i("div",{class:"ld-dialog--content"},this.props.template))))}__onClick(t){!t.composedPath().includes(this.dialogRef)&&this.__closeDialog()}__closeDialog(){this.props.onClose()}__onKeyDown(t){27===t.keyCode&&this.__closeDialog()}}
