import{E as e,f as t,c as a,m as s,h as l,o as i,b as o,l as r,d as n,e as d,g as c,w as u,i as h,j as v,s as p,k as g,n as m,p as b,q as f,t as y,u as w,v as x}from"./73177c37.js";const _={url:new URL("./src/services/coronastatusService.js",document.baseURI).href};new class extends e{async getCoronaStatus(e){return!e&&this.__coronastatus||(this.__coronastatus=fetch(new URL("../../data/coronastatus.json",_.url)).then(e=>e.json()),await this.__coronastatus,this.dispatchEvent(new Event("change"))),this.__coronastatus}};const L=new class extends e{constructor(){super(),this.cache={}}async getCountry(e){var t;let{iso2:a,date:s}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||this._shouldInvalidate()||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{var l,i,o,r,n,d;this.cache[a]={};const e=await(await fetch("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="+a)).json();return this.cache[a]={status:"success",totalConfirmed:null!==(l=null===(i=e[0])||void 0===i?void 0:i.totalConfirmed)&&void 0!==l?l:0,totalDeaths:null!==(o=null===(r=e[0])||void 0===r?void 0:r.totalDeaths)&&void 0!==o?o:0,totalRecovered:null!==(n=null===(d=e[0])||void 0===d?void 0:d.totalRecovered)&&void 0!==n?n:0},this.__lastUpdate=Date.now(),this.cache[a]}catch{this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},E={url:new URL("./src/services/countryDetailService.js",document.baseURI).href};const k=new class extends e{constructor(){super(),this.cache={}}async getDetails(e){var a;let{iso2:s,date:l}=e;if(s=encodeURI(s),!/^[a-zA-Z]{2}$/.test(s))return;let i=""+s;if(e.forceRefresh||this._shouldInvalidate()||"failed"===(null===(a=this.cache[i])||void 0===a?void 0:a.status)||!this.cache[i])try{this.cache[i]={};const e=await(await fetch(new URL(`../../data/territories/${s}.json`,E.url))).json();this.cache[i]=e}catch(e){this.cache[i]={status:"failed"}}var o=this.cache[i];if("failed"===o.status)return this.dispatchEvent(new Event("change")),o;const r={};var n=o[t(l,"yyyy-MM-dd")];for(const e of Object.keys(n.lockdown.travel))for(const{label:t,value:a}of n.lockdown.travel[e])Array.isArray(r[t])?r[t].push(a):r[t]=[a];var d={status:"success",date:n.lockdown.date,measures:n.lockdown.measures,travel:r,max_gathering:n.lockdown.max_gathering};return this.__lastUpdate=Date.now(),this.dispatchEvent(new Event("change")),d}},R={url:new URL("./src/services/populationService.js",document.baseURI).href};const A=new class extends e{constructor(){super(),this.cache={}}async getPopulation(e){var t;if(e||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",R.url)).then(e=>e.json()),await this.__population}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(t=this.__population)&&void 0!==t?t:0}}};new class extends e{constructor(){super(),this.cache={}}async getAdvice(e){var t;let{iso2:a}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{this.cache[a]={};const e=await(await fetch("https://www.travel-advisory.info/api?countrycode="+a)).json();return this.cache[a]={status:"success",advice:e.data[a].advisory.message,score:e.data[a].advisory.score+"/5"},this.cache[a]}catch(e){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let C;const U=a(C||(C=(e=>e)`
  & {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 0 16px 16px 16px;
    border-radius: 8px;
    width: 100%;
  }

  dl {
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }

  h2 {
    margin-top: 16px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--ld-gray-5);
  }

  .data {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .data-entry {
    font-variant-numeric: tabular-nums;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ld-gray-5);
  }

  .data-entry dt {
    font-weight: 700;
  }

  .data dd {
    margin-left: 0;
    text-align: left;
  }

  .legend dl {
    display: flex;
    justify-content: space-between;
  }

  .legend-item {
    display: flex;
    align-items: center;
  }

  .legend-item dt {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .legend-item dd {
    margin-inline-start: 0;
  }

  .legend-green {
    background-color: var(--ld-green-1);
  }

  .legend-yellow {
    background-color: var(--ld-yellow-1);
  }

  .legend-red {
    background-color: var(--ld-red-1);
  }

  .legend-gray {
    background-color: var(--ld-gray-3);
  }

  .measures {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    list-style: none;
    padding: 0;
    margin: 0 24px 0;
  }

  .measures > li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 16px;
    text-align: center;
  }

  .measure-wrapper {
    position: relative;
  }

  .measure svg {
    width: 24px;
    height: 24px;
  }

  .measure-label {
    position: absolute;
    top: -36px;
    left: 0;
    background-color: #7ffbc6;
    padding: 8px;
    border-radius: 20px;
    color: var(--ld-gray-1);
    pointer-events: none;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    white-space: nowrap;
  }

  .measure-label::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;

    border-width: 6px;
    border-style: solid;
    border-color: #7ffbc6 transparent transparent transparent;
    left: 16px;

    bottom: -12px;
  }

  .measure:hover ~ .measure-label {
    opacity: 1;
  }

  .measure-YES {
    fill: var(--ld-green-1);
  }

  .measure-PARTIAL {
    fill: var(--ld-yellow-1);
  }

  .measure-NO {
    fill: var(--ld-red-1);
  }

  .measure-UNCLEAR {
    fill: var(--ld-gray-3);
  }

  .ld-travel {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-travel dt {
    flex-basis: 50%;
    flex-shrink: 0;
    font-weight: 300;
    margin-right: 20px;
  }

  .ld-travel dd {
    margin-left: 0;
  }

  .ld-travel--val-icon {
    fill: var(--ld-gray-3);
  }

  .ld-travel--val-YES {
    background-color: var(--ld-green-1);
  }

  .ld-travel--val-PARTIALLY {
    background-color: var(--ld-yellow-1);
  }

  .ld-travel--val-NO {
    background-color: var(--ld-red-1);
  }

  .ld-travel--val-UNCLEAR {
    background-color: var(--ld-gray-3);
  }

  .ld-travel--val-NA {
    /* TODO: What to color NA? */
    background-color: var(--ld-gray-3);
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
    display: flex;
    justify-content: space-around;
  }

  .ld-travel--symbol {
    position: relative;
    text-align: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  /* .ld-travel--symbol::after {
    position: absolute;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    content: attr(data-tooltip);
  }

  .ld-travel--symbol:hover::after {
    opacity: 1;
  } */
`));class j extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","tooltip"),this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this._hide(),this._target=document.querySelector("[aria-describedby="+this.id+"]"),this._target&&(this._target.addEventListener("focus",this._show),this._target.addEventListener("blur",this._hide),this._target.addEventListener("mouseenter",this._show),this._target.addEventListener("mouseleave",this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener("focus",this._show),this._target.removeEventListener("blur",this._hide),this._target.removeEventListener("mouseenter",this._show),this._target.removeEventListener("mouseleave",this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}window.customElements.define("tool-tip",j);const N={1:"YES",2:"PARTIALLY",3:"NO",4:"UNCLEAR",5:"NA"},D={1:"YES",2:"PARTIAL",3:"NO",4:"UNCLEAR"},S=["Land","Flight","Sea"],I={commerce:{text:"Commerce"},foreigners_inbound:{text:"Foreigners (in)"},foreigners_outbound:{text:"Foreigners (out)"},local:{text:"In between cities"},nationals_inbound:{text:"Nationals (in)"},nationals_outbound:{text:"Nationals (out)"},stopovers:{text:"Stopovers"},cross_border_workers:{text:"Cross border workers"}},P=[{id:"lockdown_status",label:"Home reclusion",icon:n},{id:"city_movement_restriction",label:"Outdoor activities",icon:d},{id:"attending_religious_sites",label:"Access to religious sites",icon:c},{id:"going_to_work",label:"Access to work",icon:u},{id:"military_not_deployed",label:"Military",icon:h},{id:"academia_allowed",label:"Access to schools",icon:v},{id:"going_to_shops",label:"Shopping",icon:p},{id:"electricity_nominal",label:"Electricity",icon:g},{id:"water_nominal",label:"Water",icon:m},{id:"internet_nominal",label:"Telecom",icon:b}];export default class extends s{async componentWillMount(){this.setState({coronaData:await L.getCountry({iso2:this.props.iso2}),populationData:await A.getPopulation(),countryDetails:await k.getDetails({iso2:this.props.iso2,date:this.props.date})})}render(e,{coronaData:t,populationData:a,countryDetails:s}){var n,d,c,u,h,v,p,g,m;if(!navigator.onLine&&("success"!==(null==t?void 0:t.status)||"success"!==(null==a||null===(g=a.data)||void 0===g?void 0:g.status)||"success"!==(null==s?void 0:s.status)))return l("div",{class:o},i,l("b",null,"You are not connected to the internet"),l("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return t||a||s||!navigator.onLine?l("div",{class:U},l("dl",{class:"data"},l("div",{class:"data-entry"},l("dt",null,"Date"),l("dd",{class:"data-value"},s.date)),l("div",{class:"data-entry"},l("dt",null,"Population"),l("dd",{class:"data-value"},null!==(n=Number(null==a||null===(d=a.data)||void 0===d||null===(c=d[this.props.iso2])||void 0===c?void 0:c.Population).toLocaleString())&&void 0!==n?n:"Error")),l("div",{class:"data-entry"},l("dt",null,"Max assembly"),l("dd",{class:"data-value"},null!==(u=null==s?void 0:s.max_gathering)&&void 0!==u?u:"Unknown")),l("div",{class:"data-entry"},l("dt",null,"Reported cases"),l("dd",{class:"data-value"},null!==(h=Number(null==t?void 0:t.totalConfirmed).toLocaleString())&&void 0!==h?h:"Error")),l("div",{class:"data-entry"},l("dt",null,"Reported recoveries"),l("dd",{class:"data-value"},null!==(v=Number(null==t?void 0:t.totalRecovered).toLocaleString())&&void 0!==v?v:"Error")),l("div",{class:"data-entry"},l("dt",null,"Reported deaths"),l("dd",{class:"data-value"},null!==(p=Number(null==t?void 0:t.totalDeaths).toLocaleString())&&void 0!==p?p:"Error"))),l("div",{class:"legend ld-font-legend"},l("dl",null,l("div",{class:"legend-item"},l("dt",{class:"legend-green","aria-label":"green"}),l("dd",null,"None")),l("div",{class:"legend-item"},l("dt",{class:"legend-yellow","aria-label":"yellow"}),l("dd",null,"Partial")),l("div",{class:"legend-item"},l("dt",{class:"legend-red","aria-label":"red"}),l("dd",null,"Total")),l("div",{class:"legend-item"},l("dt",{class:"legend-gray","aria-label":"gray"}),l("dd",null,"Unclear")))),"success"===s.status?[l("h2",{class:"ld-font-subheader"},"Daily life (restrictions)"),l("ul",{class:"measures"},(m=s.measures,P.map(e=>{var t;const a=null==m?void 0:m.find(t=>t.label===e.id);return{...e,value:null!==(t=D[a.value])&&void 0!==t?t:D[4]}})).map(e=>l("li",null,l("div",{class:"measure-wrapper"},l("div",{"aria-labelledby":"measure-label-"+e.id,class:"measure measure-"+e.value,"aria-label":e.value.toLowerCase()},e.icon),l("span",{id:"measure-label-"+e.id,class:"measure-label"},e.label))))),l("h2",{class:"ld-font-subheader"},"Transport (restrictions)"),l("dl",null,l("div",{class:"ld-travel"},l("dt",null),l("div",{class:"ld-travel--values"},l("dd",{class:"ld-travel--val-icon"},x),l("dd",{class:"ld-travel--val-icon"},w),l("dd",{class:"ld-travel--val-icon"},y))),Object.keys(s.travel).map((e,t)=>l("div",{class:"ld-travel"},l("dt",null,I[e].text),l("div",{class:"ld-travel--values"},s.travel[e].map((e,t)=>{var a,s,i,o,r;return l("dd",{"aria-label":S[t]+": "+(null!==(a=null===(s=N[e])||void 0===s?void 0:s.toLowerCase())&&void 0!==a?a:N[4].toLowerCase()),"data-tooltip":null!==(i=null===(o=N[e])||void 0===o?void 0:o.toLowerCase())&&void 0!==i?i:N[4].toLowerCase(),class:"ld-travel--symbol ld-travel--val-"+(null!==(r=N[e])&&void 0!==r?r:N[5])})})))))]:l("div",{class:"dialog"},l("h2",null,"Measures"),"Failed to get data for this country.")):l("div",{class:r},f)}}
