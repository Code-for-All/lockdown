import{E as e,c as t,m as a,h as s,o as l,b as i,l as o,d as r,e as n,f as d,w as c,g as u,i as h,s as v,j as p,k as g,n as m,p as b,t as f,q as y,u as w}from"./18221455.js";const x={url:new URL("./src/services/coronastatusService.js",document.baseURI).href};new class extends e{async getCoronaStatus(e){return!e&&this.__coronastatus||(this.__coronastatus=fetch(new URL("../../data/coronastatus.json",x.url)).then(e=>e.json()),await this.__coronastatus,this.dispatchEvent(new Event("change"))),this.__coronastatus}};const _=new class extends e{constructor(){super(),this.cache={}}async getCountry(e){var t;let{iso2:a}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||this._shouldInvalidate()||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{var s,l,i,o,r,n;this.cache[a]={};const e=await(await fetch("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="+a)).json();return this.cache[a]={status:"success",totalConfirmed:null!==(s=null===(l=e[0])||void 0===l?void 0:l.totalConfirmed)&&void 0!==s?s:0,totalDeaths:null!==(i=null===(o=e[0])||void 0===o?void 0:o.totalDeaths)&&void 0!==i?i:0,totalRecovered:null!==(r=null===(n=e[0])||void 0===n?void 0:n.totalRecovered)&&void 0!==r?r:0},this.__lastUpdate=Date.now(),this.cache[a]}catch{this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},L={url:new URL("./src/services/countryDetailService.js",document.baseURI).href};const E=new class extends e{constructor(){super(),this.cache={}}async getDetails(e){var t;let{iso2:a}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||this._shouldInvalidate()||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{this.cache[a]={};const e=await(await fetch(new URL(`../../data/territories/${a}.json`,L.url))).json(),t={};for(const a of Object.keys(e.lockdown.travel))for(const{label:s,value:l}of e.lockdown.travel[a])Array.isArray(t[s])?t[s].push(l):t[s]=[l];return this.cache[a]={status:"success",date:e.lockdown.date,measures:e.lockdown.measures,travel:t,max_gathering:e.lockdown.max_gathering},this.__lastUpdate=Date.now(),this.cache[a]}catch(e){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},k={url:new URL("./src/services/populationService.js",document.baseURI).href};const R=new class extends e{constructor(){super(),this.cache={}}async getPopulation(e){var t;if(e||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",k.url)).then(e=>e.json()),await this.__population}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(t=this.__population)&&void 0!==t?t:0}}};new class extends e{constructor(){super(),this.cache={}}async getAdvice(e){var t;let{iso2:a}=e;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(e.forceRefresh||"failed"===(null===(t=this.cache[a])||void 0===t?void 0:t.status)||!this.cache[a]){try{this.cache[a]={};const e=await(await fetch("https://www.travel-advisory.info/api?countrycode="+a)).json();return this.cache[a]={status:"success",advice:e.data[a].advisory.message,score:e.data[a].advisory.score+"/5"},this.cache[a]}catch(e){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let A;const C=t(A||(A=(e=>e)`
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
`));class U extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","tooltip"),this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this._hide(),this._target=document.querySelector("[aria-describedby="+this.id+"]"),this._target&&(this._target.addEventListener("focus",this._show),this._target.addEventListener("blur",this._hide),this._target.addEventListener("mouseenter",this._show),this._target.addEventListener("mouseleave",this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener("focus",this._show),this._target.removeEventListener("blur",this._hide),this._target.removeEventListener("mouseenter",this._show),this._target.removeEventListener("mouseleave",this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}window.customElements.define("tool-tip",U);const j={1:"YES",2:"PARTIALLY",3:"NO",4:"UNCLEAR",5:"NA"},N={1:"YES",2:"PARTIAL",3:"NO",4:"UNCLEAR"},D=["Land","Flight","Sea"],S={commerce:{text:"Commerce"},foreigners_inbound:{text:"Foreigners (in)"},foreigners_outbound:{text:"Foreigners (out)"},local:{text:"In between cities"},nationals_inbound:{text:"Nationals (in)"},nationals_outbound:{text:"Nationals (out)"},stopovers:{text:"Stopovers"},cross_border_workers:{text:"Cross border workers"}},I=[{id:"lockdown_status",label:"Home reclusion",icon:r},{id:"city_movement_restriction",label:"Outdoor activities",icon:n},{id:"attending_religious_sites",label:"Access to religious sites",icon:d},{id:"going_to_work",label:"Access to work",icon:c},{id:"military_not_deployed",label:"Military",icon:u},{id:"academia_allowed",label:"Access to schools",icon:h},{id:"going_to_shops",label:"Shopping",icon:v},{id:"electricity_nominal",label:"Electricity",icon:p},{id:"water_nominal",label:"Water",icon:g},{id:"internet_nominal",label:"Telecom",icon:m}];export default class extends a{async componentWillMount(){this.setState({coronaData:await _.getCountry({iso2:this.props.iso2}),populationData:await R.getPopulation(),countryDetails:await E.getDetails({iso2:this.props.iso2})})}render(e,{coronaData:t,populationData:a,countryDetails:r}){var n,d,c,u,h,v,p,g,m;if(!navigator.onLine&&("success"!==(null==t?void 0:t.status)||"success"!==(null==a||null===(g=a.data)||void 0===g?void 0:g.status)||"success"!==(null==r?void 0:r.status)))return s("div",{class:i},l,s("b",null,"You are not connected to the internet"),s("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return t||a||r||!navigator.onLine?s("div",{class:C},s("dl",{class:"data"},s("div",{class:"data-entry"},s("dt",null,"Date"),s("dd",{class:"data-value"},r.date)),s("div",{class:"data-entry"},s("dt",null,"Population"),s("dd",{class:"data-value"},null!==(n=Number(null==a||null===(d=a.data)||void 0===d||null===(c=d[this.props.iso2])||void 0===c?void 0:c.Population).toLocaleString())&&void 0!==n?n:"Error")),s("div",{class:"data-entry"},s("dt",null,"Max assembly"),s("dd",{class:"data-value"},null!==(u=null==r?void 0:r.max_gathering)&&void 0!==u?u:"Unknown")),s("div",{class:"data-entry"},s("dt",null,"Reported cases"),s("dd",{class:"data-value"},null!==(h=Number(null==t?void 0:t.totalConfirmed).toLocaleString())&&void 0!==h?h:"Error")),s("div",{class:"data-entry"},s("dt",null,"Reported recoveries"),s("dd",{class:"data-value"},null!==(v=Number(null==t?void 0:t.totalRecovered).toLocaleString())&&void 0!==v?v:"Error")),s("div",{class:"data-entry"},s("dt",null,"Reported deaths"),s("dd",{class:"data-value"},null!==(p=Number(null==t?void 0:t.totalDeaths).toLocaleString())&&void 0!==p?p:"Error"))),s("div",{class:"legend ld-font-legend"},s("dl",null,s("div",{class:"legend-item"},s("dt",{class:"legend-green","aria-label":"green"}),s("dd",null,"None")),s("div",{class:"legend-item"},s("dt",{class:"legend-yellow","aria-label":"yellow"}),s("dd",null,"Partial")),s("div",{class:"legend-item"},s("dt",{class:"legend-red","aria-label":"red"}),s("dd",null,"Total")),s("div",{class:"legend-item"},s("dt",{class:"legend-gray","aria-label":"gray"}),s("dd",null,"Unclear")))),"success"===r.status?[s("h2",{class:"ld-font-subheader"},"Daily life (restrictions)"),s("ul",{class:"measures"},(m=r.measures,I.map(e=>{var t;const a=null==m?void 0:m.find(t=>t.label===e.id);return{...e,value:null!==(t=N[a.value])&&void 0!==t?t:N[4]}})).map(e=>s("li",null,s("div",{class:"measure-wrapper"},s("div",{"aria-labelledby":"measure-label-"+e.id,class:"measure measure-"+e.value,"aria-label":e.value.toLowerCase()},e.icon),s("span",{id:"measure-label-"+e.id,class:"measure-label"},e.label))))),s("h2",{class:"ld-font-subheader"},"Transport (restrictions)"),s("dl",null,s("div",{class:"ld-travel"},s("dt",null),s("div",{class:"ld-travel--values"},s("dd",{class:"ld-travel--val-icon"},w),s("dd",{class:"ld-travel--val-icon"},y),s("dd",{class:"ld-travel--val-icon"},f))),Object.keys(r.travel).map((e,t)=>s("div",{class:"ld-travel"},s("dt",null,S[e].text),s("div",{class:"ld-travel--values"},r.travel[e].map((e,t)=>{var a,l,i,o,r;return s("dd",{"aria-label":D[t]+": "+(null!==(a=null===(l=j[e])||void 0===l?void 0:l.toLowerCase())&&void 0!==a?a:j[4].toLowerCase()),"data-tooltip":null!==(i=null===(o=j[e])||void 0===o?void 0:o.toLowerCase())&&void 0!==i?i:j[4].toLowerCase(),class:"ld-travel--symbol ld-travel--val-"+(null!==(r=j[e])&&void 0!==r?r:j[5])})})))))]:s("div",{class:"dialog"},s("h2",null,"Measures"),"Failed to get data for this country.")):s("div",{class:o},b)}}
