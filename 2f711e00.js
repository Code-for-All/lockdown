import{E as t,f as e,c as a,m as s,h as o,o as i,a as l,l as r,b as n,s as d,d as c,e as u,r as h,g as p,w as v,i as g,j as b,k as m,n as f,p as x,t as y,q as w,u as _}from"./7a094670.js";const k={url:new URL("./src/services/coronastatusService.js",document.baseURI).href};new class extends t{async getCoronaStatus(t){return!t&&this.__coronastatus||(this.__coronastatus=fetch(new URL("../../data/coronastatus.json",k.url)).then(t=>t.json()),await this.__coronastatus,this.dispatchEvent(new Event("change"))),this.__coronastatus}};const E=new class extends t{constructor(){super(),this.cache={}}async getCountry(t){var e;let{iso2:a,date:s}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||this._shouldInvalidate()||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{var o,i,l,r,n,d;this.cache[a]={};const t=await(await fetch("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="+a)).json();return this.cache[a]={status:"success",totalConfirmed:null!==(o=null===(i=t[0])||void 0===i?void 0:i.totalConfirmed)&&void 0!==o?o:0,totalDeaths:null!==(l=null===(r=t[0])||void 0===r?void 0:r.totalDeaths)&&void 0!==l?l:0,totalRecovered:null!==(n=null===(d=t[0])||void 0===d?void 0:d.totalRecovered)&&void 0!==n?n:0},this.__lastUpdate=Date.now(),this.cache[a]}catch{this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},L={url:new URL("./src/services/countryDetailService.js",document.baseURI).href};const C=new class extends t{constructor(){super(),this.cache={}}async getDetails(t){var a,s;let{iso2:o,date:i}=t;if(o=encodeURI(o),!/^[a-zA-Z]{2}$/.test(o))return;let l=""+o;if(t.forceRefresh||this._shouldInvalidate()||"failed"===(null===(a=this.cache[l])||void 0===a?void 0:a.status)||!this.cache[l])try{this.cache[l]={};const t=await(await fetch(new URL(`../../data/territories/${o}.json`,L.url))).json();this.cache[l]=t}catch(t){this.cache[l]={status:"failed"}}var r=this.cache[l];if("failed"===r.status)return this.dispatchEvent(new Event("change")),r;const n={};var d=r[e(i,"yyyy-MM-dd")];for(const t of Object.keys(d.lockdown.travel))for(const{label:e,value:a}of d.lockdown.travel[t])Array.isArray(n[e])?n[e].push(a):n[e]=[a];var c={status:"success",date:d.lockdown.date,measures:d.lockdown.measures,travel:n,max_gathering:null===(s=d.lockdown.measures.find(t=>"max_gathering"==t.label))||void 0===s?void 0:s.value};return this.__lastUpdate=Date.now(),this.dispatchEvent(new Event("change")),c}},D={url:new URL("./src/services/populationService.js",document.baseURI).href};const R=new class extends t{constructor(){super(),this.cache={}}async getPopulation(t){var e;if(t||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",D.url)).then(t=>t.json())}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(e=this.__population)&&void 0!==e?e:0}}};new class extends t{constructor(){super(),this.cache={}}async getAdvice(t){var e;let{iso2:a}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{this.cache[a]={};const t=await(await fetch("https://www.travel-advisory.info/api?countrycode="+a)).json();return this.cache[a]={status:"success",advice:t.data[a].advisory.message,score:t.data[a].advisory.score+"/5"},this.cache[a]}catch(t){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let A,S,j,U=t=>t;const T=a(A||(A=U`
  &{
    width: 100%;
    display: flex;
    position: relative;
    & > button{
      & {
        position: absolute !important;
        color: #7C7C7C;
        background-color: white;
        padding: 0px !important;
        top: -10px;
        width: 39px !important;
        height: 39px !important;
        right: -12px;
        border: 0px;
        border-radius: 50% !important;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
        &:hover {
          cursor: pointer;
        }
        
      }
      .dark & {
        position: absolute !important;
        color: white;
        background-color: var(--ld-hover);
        padding: 0px;
        top: -10px;
        width: 39px;
        right: -12px;
        border-radius: 50%;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
        &:hover {
          cursor: pointer;
        }
      }
    }
    & .tab{
      width: 40%;
      background-color: #E5E5E5;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      padding: 10px 0px;
      color: #7C7C7C;
      border: 1px solid #999999;
      border-top: 0px;
      transition: 0.5s;
      &.active{
        border-bottom: 0px;
        background-color: #FFF 
        border: 0px;
        .dark &{
          background-color: var(--ld-bg);
          color: white;
        }
      }
      &:first-child{
        border-top-left-radius: 19px;
      }
      &:last-child{
        border-top-right-radius: 19px;
      }
      &:nth-child(3){
        border-top-right-radius: 19px;
      }
      &:nth-child(2){
        width: 20%;
      }
    }
  }
`)),I=a(S||(S=U`
  & {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`)),N=a(j||(j=U`
  .countryInfo.loader {
    background-color: white !important;
    .dark & {
      background-color: var(--ld-bg) !important;
    }
  }
  & {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 0 16px 16px 16px;
    width: 100%;
    & .ld-font-subheader {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.02em;
      & span:first-child {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.05em;
      }
    }
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
    &.last {
      padding: 0px;
      padding-top: 4px;
      border-top: 1px solid var(--ld-gray-5);
      border-bottom: 0px;
    }
  }

  .data {
    display: flex;
    flex-wrap: wrap;
  }

  .data-entry {
    font-variant-numeric: tabular-nums;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ld-gray-5);
    width: 100%;
    &.is-half {
      width: 50%;
    }
    &.is-third {
      width: 33.33%;
    }
  }

  .data-entry dt {
    color: #949494;
    font-size: 14px;
    font-weight: 700;
  }

  .data dd {
    margin-left: 0;
    color: #949494;
    font-size: 16px;
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
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .legend-item dd {
    font-size: 14px;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.02em;
    margin-inline-start: 0;
    .dark & {
      color: var(--ld-text);
    }
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
    grid-template-columns: 1fr 1fr;
    list-style: none;
    padding: 0;
    margin: 0 24px 0;
  }

  .measures > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 5px;
    text-align: left;
  }

  .measure-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .measure svg {
    width: 24px;
    height: 24px;
  }

  .measure-label {
    padding: 8px;
    border-radius: 20px;
    color: var(--ld-gray-1);
    pointer-events: none;
    transition: opacity 300ms ease-in-out;
    font-size: 12px;
    .dark & {
      color: var(--ld-text);
    }
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
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    .dark & {
      color: var(--ld-text);
    }
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
`));class z extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","tooltip"),this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this._hide(),this._target=document.querySelector("[aria-describedby="+this.id+"]"),this._target&&(this._target.addEventListener("focus",this._show),this._target.addEventListener("blur",this._hide),this._target.addEventListener("mouseenter",this._show),this._target.addEventListener("mouseleave",this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener("focus",this._show),this._target.removeEventListener("blur",this._hide),this._target.removeEventListener("mouseenter",this._show),this._target.removeEventListener("mouseleave",this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}window.customElements.define("tool-tip",z);const P={1:"YES",2:"PARTIALLY",3:"NO",4:"UNCLEAR",5:"NA"},M={1:"YES",2:"PARTIAL",3:"NO",4:"UNCLEAR"},O=["Land","Flight","Sea"],F={commerce:{text:"Commerce"},foreigners_inbound:{text:"Foreigners (in)"},foreigners_outbound:{text:"Foreigners (out)"},local:{text:"In between cities"},nationals_inbound:{text:"Nationals (in)"},nationals_outbound:{text:"Nationals (out)"},stopovers:{text:"Stopovers"},cross_border_workers:{text:"Cross border workers"}},Y=[{id:"lockdown_status",label:"Stay Home",icon:n},{id:"going_to_shops",label:"Shopping",icon:d},{id:"city_movement_restriction",label:"Outdoors",icon:c},{id:"military_not_deployed",label:"Military",icon:u},{id:"attending_religious_sites",label:"Religious Sites",icon:h},{id:"electricity_nominal",label:"Electricity",icon:p},{id:"going_to_work",label:"Go to Work",icon:v},{id:"water_nominal",label:"Water",icon:g},{id:"academia_allowed",label:"Go to Schools",icon:b},{id:"internet_nominal",label:"Telecom",icon:m}],W=[{id:1,name:"Common Details"},{id:2,name:"Travel Details"},{id:3,name:"Reports"}];class $ extends s{render(t){var a,s,i,l,r;let{coronaData:n,populationData:d,countryDetails:c,country:u,date:h}=this.props;return[o("h2",{class:"ld-font-subheader"},o("span",null,u)," ",o("span",null,e(h,"dd/mm/yyyy"))),o("dl",{class:"data"},o("div",{class:"data-entry is-half"},o("dt",null,"Population"),o("dd",{class:"data-value"},null!==(a=Number(null==d?void 0:d.Population).toLocaleString())&&void 0!==a?a:"Error")),o("div",{class:"data-entry is-half"},o("dt",null,"Max assembly"),o("dd",{class:"data-value"},null!==(s=null==c?void 0:c.max_gathering)&&void 0!==s?s:"Unknown")),o("div",{class:"data-entry is-third"},o("dt",null,"Cases"),o("dd",{class:"data-value"},null!==(i=Number(null==n?void 0:n.totalConfirmed).toLocaleString())&&void 0!==i?i:"Error")),o("div",{class:"data-entry is-third"},o("dt",null,"Recoveries"),o("dd",{class:"data-value"},null!==(l=Number(null==n?void 0:n.totalRecovered).toLocaleString())&&void 0!==l?l:"Error")),o("div",{class:"data-entry is-third"},o("dt",null,"Deaths"),o("dd",{class:"data-value"},null!==(r=Number(null==n?void 0:n.totalDeaths).toLocaleString())&&void 0!==r?r:"Error"))),o(q,null),"success"===c.status?[o("h2",{class:"ld-font-subheader last"},"Daily life (restrictions)"),o("ul",{class:"measures"},(p=c.measures,Y.map(t=>{var e;const a=null==p?void 0:p.find(e=>e.label===t.id);return{...t,value:null!==(e=M[a.value])&&void 0!==e?e:M[4]}})).map(t=>o("li",null,o("div",{class:"measure-wrapper"},o("div",{"aria-labelledby":"measure-label-"+t.id,class:"measure measure-"+t.value,"aria-label":t.value.toLowerCase()},t.icon),o("span",{id:"measure-label-"+t.id,class:"measure-label"},t.label)))))]:o("div",{class:"dialog"},o("h2",null,"Measures"),"Failed to get data for this country.")];var p}}class Z extends s{render(t){let{countryDetails:e}=this.props;return"success"===e.status?[o("br",null),o("br",null),o(q,null),o("h2",{class:"ld-font-subheader last"},"Transport (restrictions)"),o("dl",null,o("div",{class:"ld-travel"},o("dt",null),o("div",{class:"ld-travel--values"},o("dd",{class:"ld-travel--val-icon"},_),o("dd",{class:"ld-travel--val-icon"},w),o("dd",{class:"ld-travel--val-icon"},y))),Object.keys(e.travel).map((t,a)=>o("div",{class:"ld-travel"},o("dt",null,F[t].text),o("div",{class:"ld-travel--values"},e.travel[t].map((t,e)=>{var a,s,i,l,r;return o("dd",{"aria-label":O[e]+": "+(null!==(a=null===(s=P[t])||void 0===s?void 0:s.toLowerCase())&&void 0!==a?a:P[4].toLowerCase()),"data-tooltip":null!==(i=null===(l=P[t])||void 0===l?void 0:l.toLowerCase())&&void 0!==i?i:P[4].toLowerCase(),class:"ld-travel--symbol ld-travel--val-"+(null!==(r=P[t])&&void 0!==r?r:P[5])})})))))]:[o("div",{class:"dialog"},o("h2",null,"Measures"),"Failed to get data for this country.")," "]}}class q extends s{render(t){return o("div",{class:"legend ld-font-legend"},o("dl",null,o("div",{class:"legend-item"},o("dt",{class:"legend-green","aria-label":"green"}),o("dd",null,"None")),o("div",{class:"legend-item"},o("dt",{class:"legend-yellow","aria-label":"yellow"}),o("dd",null,"Partial")),o("div",{class:"legend-item"},o("dt",{class:"legend-red","aria-label":"red"}),o("dd",null,"Total")),o("div",{class:"legend-item"},o("dt",{class:"legend-gray","aria-label":"gray"}),o("dd",null,"Unclear"))))}}class G extends s{render(t){return o("div",{class:I},o("h3",null,"Coming Soon.."))}}export default class extends s{constructor(t){super(t),this.changeTab=this.changeTab.bind(this),this.state={currentTab:1}}async componentDidUpdate(t){this.props.date!==t.date&&this.setState({countryDetails:await C.getDetails({iso2:this.props.iso2,date:this.props.date})})}async componentWillMount(){this.setState({coronaData:await E.getCountry({iso2:this.props.iso2}),populationData:await R.getPopulation(),countryDetails:await C.getDetails({iso2:this.props.iso2,date:this.props.date})})}changeTab(t){this.setState({currentTab:t})}render(t,{coronaData:e,populationData:a,countryDetails:s}){var n;if(!navigator.onLine&&("success"!==(null==e?void 0:e.status)||"success"!==(null==a||null===(n=a.data)||void 0===n?void 0:n.status)||"success"!==(null==s?void 0:s.status)))return o("div",{class:"countryInfo "+l},i,o("b",null,"You are not connected to the internet"),o("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return e||a||s||!navigator.onLine?[o("div",{class:T},W.map(t=>o("div",{onClick:()=>this.changeTab(t.id),class:"tab "+(this.state.currentTab===t.id?"active":"")},t.name)),o("button",{onClick:this.props.onClose},x)),o("div",{class:"countryInfo "+N},1===this.state.currentTab?o($,{date:this.props.date,country:this.props.country,coronaData:e,populationData:null==a?void 0:a.data[this.props.iso2],countryDetails:s}):2===this.state.currentTab?o(Z,{countryDetails:s}):o(G,null))]:o("div",{class:"countryInfo loader "+r},f)}}
