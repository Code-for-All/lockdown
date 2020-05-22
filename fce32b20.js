import{r as t,t as e,E as a,f as s,a as r,c as i,m as o,h as l,o as n,b as d,l as c,d as u,e as h,g as p,i as g,j as v,s as b,k as y,n as m,p as f,q as x,w,u as _,v as k,x as D,y as L}from"./467cf099.js";function E(a){t(1,arguments);var s=e(a);return s.setHours(0,0,0,0),s}const A={url:new URL("./src/services/coronastatusService.js",document.baseURI).href};new class extends a{async getCoronaStatus(t){return!t&&this.__coronastatus||(this.__coronastatus=fetch(new URL("../../data/coronastatus.json",A.url)).then(t=>t.json()),await this.__coronastatus,this.dispatchEvent(new Event("change"))),this.__coronastatus}};const C=new class extends a{constructor(){super(),this.cache={}}async getCountry(t){var e;let{iso2:a,date:i}=t,o=t.startDate,l=t.endDate;if(a=encodeURI(a),o=s(o||r(new Date,-14),"yyyy-MM-dd"),l=s(l||r(new Date,56),"yyyy-MM-dd"),!/^[a-zA-Z]{2}$/.test(a))return;const n=`${a}${o}${l}`;if(t.forceRefresh||this._shouldInvalidate()||"failed"===(null===(e=this.cache[n])||void 0===e?void 0:e.status)||!this.cache[n]){try{this.cache[n]={};const t=await(await fetch(`https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${a}&startDate=${o}&endDate=${l}`)).json();this.cache[n]={status:"success",data:t},this.__lastUpdate=Date.now()}catch{this.cache[n]={status:"failed"}}this.dispatchEvent(new Event("change"))}return this.cache[n]}};const R=new class extends a{constructor(){super(),this.cache={}}async getDetails(t){var e;console.log("---*****-----");let{iso2:a,date:i}=t,o=t.startDate,l=t.endDate;if(a=encodeURI(a),o=s(o||r(new Date,-14),"yyyy-MM-dd"),l=s(l||r(new Date,56),"yyyy-MM-dd"),!/^[a-zA-Z]{2}$/.test(a))return;let n=`${a}${o}${l}`;if(t.forceRefresh||this._shouldInvalidate()||"failed"===(null===(e=this.cache[n])||void 0===e?void 0:e.status)||!this.cache[n])try{this.cache[n]={};const t=await(await fetch(`https://lockdownsnapshots-apim.azure-api.net/status/${a}/${o}/${l}`)).json();this.cache[n]=t}catch(t){this.cache[n]={status:"failed"}}var d=this.cache[n];if("failed"===d.status)return this.dispatchEvent(new Event("change")),d;const c={};var u=d[s(i,"yyyy-MM-dd")];for(const t of["land","flight","sea"])for(const{label:e,value:a}of u.lockdown[t])Array.isArray(c[e])?c[e].push(a):c[e]=[a];var h={status:"success",date:u.lockdown.date,measures:u.lockdown.measure,travel:c,max_gathering:u.lockdown.max_gathering[0].value};return this.__lastUpdate=Date.now(),this.dispatchEvent(new Event("change")),h}},S={url:new URL("./src/services/populationService.js",document.baseURI).href};const N=new class extends a{constructor(){super(),this.cache={}}async getPopulation(t){var e;if(t||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",S.url)).then(t=>t.json())}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(e=this.__population)&&void 0!==e?e:0}}};new class extends a{constructor(){super(),this.cache={}}async getAdvice(t){var e;let{iso2:a}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{this.cache[a]={};const t=await(await fetch("https://www.travel-advisory.info/api?countrycode="+a)).json();return this.cache[a]={status:"success",advice:t.data[a].advisory.message,score:t.data[a].advisory.score+"/5"},this.cache[a]}catch(t){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let M,T,j,I=t=>t;const U=i(M||(M=I`
  &{
    width: 100%;
    display: flex;
    position: relative;
    & > button{
      & {
        position: absolute !important;
        color: var(--ld-gray-3);
        background-color: transparent;
        padding: 0px !important;
        top: 10px;
        width: 30px !important;
        height: 30px !important;
        right: 5px;
        border: 0px;
        border-radius: 50% !important;
        &:hover {
          cursor: pointer;
        }
        
      }
      .dark & {
        position: absolute !important;
        color: var(--ld-gray-5);
        background-color: transparent;
        padding: 0px;
        top: 10px;
        width: 30px;
        right: 5px;
        border-radius: 50%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    & .tab{
      width: 35%;
      background-color: var(--ld-gray-6);
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      padding: 5px;
      color: var(--ld-gray-3);
      border: var(--ld-gray-5) 1px solid;
      border-top: 0px;
      transition: 0.5s;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      min-height: 50px;
      letter-spacing:.5px;
      .dark & {
        background-color: var(--ld-gray-2);
        color: var(--ld-gray-5);
        border: var(--ld-gray-3) 1px solid;
      }
      &:hover{
        cursor: pointer;
      }
      &.active{
        border-bottom: 0px;
        background-color: #FFF 
        border: 0px;
        color: var(--ld-gray-1);
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
        padding-right: 35px;
      }
      &:nth-child(2){
        width: 30%;
      }
    }
  }
`)),$=i(T||(T=I`
  & {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`)),z=i(j||(j=I`
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
    overflow-y: auto;
    &::-webkit-scrollbar {
      padding-left: 1.5%;
      padding-right: 1.5%;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 7px;
      border: 4px solid white;
    }
    & .ld-font-subheader {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.02em;
      & span:first-child {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.05em;
        padding-right: 7px;
      }
    }
  }

  .countryInfo dl {
    margin-top: -27px;
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
    margin-top: 10px;
    padding-bottom: 5px;
    border-bottom: 7px;
    margin-bottom: 2px;
    &.last {
      padding: 0px;
      padding-top: 8px;
      border-top: 1px solid var(--ld-gray-5);
      border-bottom: 0px;
      margin-top:7px;
      .dark &{
        border-top: 1px solid var(--ld-gray-2);
      }
      &.transport {
        margin-bottom: -20px;
      }
    }
  }

  .data {
    display: flex;
    flex-wrap: wrap;
  }

  .data-entry {
    font-variant-numeric: tabular-nums;
    margin-bottom: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid var(--ld-gray-5);
    width: 100%;
    .dark &{
      border-bottom 1px solid var(--ld-gray-2);
    }
    &.is-half {
      width: 50%;
    }
    &.is-third {
      width: 33.33%;
    }
  }

  .data-entry dt {
    font-size: 12px;
    font-weight: 400;
  }

  .data dd {
    margin-left: 0;
    font-size: 12px;
    text-align: left;
    font-weight: 600;
  }

  .legend dl {
    display: flex;
  }

  .legend-item {
    display: flex;
  }

  .legend-item dt {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .legend-item dd {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.02em;
    margin-inline-start: 0;
    margin-right: 8px;
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
    padding: 5px 0 0 3%;
    margin: 0 0px 0;
  }

  .measures > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 0px;
    text-align: left;
  }

  .measure-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .measure svg {
    width: 22px;
    height: 22px;
  }

  .measure-label {
    padding: 6px;
    border-radius: 20px;
    color: var(--ld-gray-1);
    pointer-events: none;
    transition: opacity 300ms ease-in-out;
    font-size: 12px;
    font-weight:400;
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
    flex-basis: 62%;
    flex-shrink: 0;
    font-weight: 300;
    margin-right: 20px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    .dark & {
      color: var(--ld-text);
    }
  }

  .ld-travel dd {
    margin-left: 0;
  }

  .ld-travel--val-icon {
    fill: var(--ld-text);
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
`));class P extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","tooltip"),this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this._hide(),this._target=document.querySelector("[aria-describedby="+this.id+"]"),this._target&&(this._target.addEventListener("focus",this._show),this._target.addEventListener("blur",this._hide),this._target.addEventListener("mouseenter",this._show),this._target.addEventListener("mouseleave",this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener("focus",this._show),this._target.removeEventListener("blur",this._hide),this._target.removeEventListener("mouseenter",this._show),this._target.removeEventListener("mouseleave",this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}window.customElements.define("tool-tip",P);const F={1:"YES",2:"PARTIALLY",3:"NO",4:"UNCLEAR",5:"NA"},O={1:"YES",2:"PARTIAL",3:"NO",4:"UNCLEAR"},Y=["Land","Flight","Sea"],W={commerce:{text:"Commerce"},foreigners_inbound:{text:"Foreigners (in)"},foreigners_outbound:{text:"Foreigners (out)"},local:{text:"In between cities"},nationals_inbound:{text:"Nationals (in)"},nationals_outbound:{text:"Nationals (out)"},stopovers:{text:"Stopovers"},cross_border_workers:{text:"Cross border workers"}},H=[{id:"lockdown_status",label:"Stay Home",icon:v},{id:"going_to_shops",label:"Shopping",icon:b},{id:"city_movement_restriction",label:"Outdoors",icon:y},{id:"military_not_deployed",label:"Military",icon:m},{id:"attending_religious_sites",label:"Religious Sites",icon:f},{id:"electricity_nominal",label:"Electricity",icon:x},{id:"going_to_work",label:"Go to Work",icon:w},{id:"water_nominal",label:"Water",icon:_},{id:"academia_allowed",label:"Go to Schools",icon:k},{id:"internet_nominal",label:"Telecom",icon:D}],Z=[{id:1,name:"Daily Life"},{id:2,name:"Mobility"},{id:3,name:"Reports"}];class q extends o{render(t){var e,a;let{coronaData:r,populationData:i,countryDetails:o,country:n,date:d}=this.props;return[l("h2",{class:"ld-font-subheader"},l("span",null,n)," ",l("span",null,s(d,"dd/MM/yyyy"))),l("dl",{class:"data"},l("div",{class:"data-entry is-half"},l("dt",null,"Population"),l("dd",{class:"data-value"},null!==(e=Number(null==i?void 0:i.Population).toLocaleString())&&void 0!==e?e:"Error")),l("div",{class:"data-entry is-half"},l("dt",null,"Max assembly"),l("dd",{class:"data-value"},null!==(a=null==o?void 0:o.max_gathering)&&void 0!==a?a:"Unknown")),l("div",{class:"data-entry is-third"},l("dt",null,"Cases"),l("dd",{class:"data-value"},(null==r?void 0:r.total_confirmed)?Number(null==r?void 0:r.total_confirmed).toLocaleString():"N/A")),l("div",{class:"data-entry is-third"},l("dt",null,"Recoveries"),l("dd",{class:"data-value"},(null==r?void 0:r.total_recovered)?Number(null==r?void 0:r.total_recovered).toLocaleString():"N/A")),l("div",{class:"data-entry is-third"},l("dt",null,"Deaths"),l("dd",{class:"data-value"},(null==r?void 0:r.total_deaths)?Number(null==r?void 0:r.total_deaths).toLocaleString():"N/A"))),l(B,null),"success"===o.status?[l("h2",{class:"ld-font-subheader last"},"Daily life (restrictions)"),l("ul",{class:"measures"},(c=o.measures,H.map(t=>{var e;const a=null==c?void 0:c.find(e=>e.label===t.id);return{...t,value:null!==(e=O[a.value])&&void 0!==e?e:O[4]}})).map(t=>l("li",null,l("div",{class:"measure-wrapper"},l("div",{"aria-labelledby":"measure-label-"+t.id,class:"measure measure-"+t.value,"aria-label":t.value.toLowerCase()},t.icon),l("span",{id:"measure-label-"+t.id,class:"measure-label"},t.label)))))]:l("div",{class:"dialog"},l("h2",null,"Measures"),"Failed to get data for this country.")];var c}}class G extends o{render(t){let{countryDetails:e}=this.props;return"success"===e.status?[l("br",null),l("br",null),l(B,null),l("h2",{class:"ld-font-subheader last transport"},"Transport (restrictions)"),l("dl",null,l("div",{class:"ld-travel"},l("dt",null),l("div",{class:"ld-travel--values"},l("dd",{class:"ld-travel--val-icon"},h),l("dd",{class:"ld-travel--val-icon"},p),l("dd",{class:"ld-travel--val-icon"},g))),Object.keys(e.travel).map((t,a)=>l("div",{class:"ld-travel"},l("dt",null,W[t].text),l("div",{class:"ld-travel--values"},e.travel[t].map((t,e)=>{var a,s,r,i,o;return l("dd",{"aria-label":Y[e]+": "+(null!==(a=null===(s=F[t])||void 0===s?void 0:s.toLowerCase())&&void 0!==a?a:F[4].toLowerCase()),"data-tooltip":null!==(r=null===(i=F[t])||void 0===i?void 0:i.toLowerCase())&&void 0!==r?r:F[4].toLowerCase(),class:"ld-travel--symbol ld-travel--val-"+(null!==(o=F[t])&&void 0!==o?o:F[5])})})))))]:[l("div",{class:"dialog"},l("h2",null,"Measures"),"Failed to get data for this country.")," "]}}class B extends o{render(t){return l("div",{class:"legend ld-font-legend"},l("dl",null,l("div",{class:"legend-item"},l("dt",{class:"legend-green","aria-label":"green"}),l("dd",null,"None")),l("div",{class:"legend-item"},l("dt",{class:"legend-yellow","aria-label":"yellow"}),l("dd",null,"Partial")),l("div",{class:"legend-item"},l("dt",{class:"legend-red","aria-label":"red"}),l("dd",null,"Total")),l("div",{class:"legend-item"},l("dt",{class:"legend-gray","aria-label":"gray"}),l("dd",null,"Unclear"))))}}class J extends o{render(t){return l("div",{class:$},l("h3",null,"Coming Soon"))}}export default class extends o{constructor(t){super(t),this.changeTab=this.changeTab.bind(this),this.state={currentTab:1}}async componentDidUpdate(t){if(this.props.date!==t.date){const{startDate:t,endDate:e}=this.props;this.setState({coronaData:await C.getCountry({iso2:this.props.iso2,date:this.props.date,startDate:t,endDate:e}),countryDetails:await R.getDetails({iso2:this.props.iso2,date:this.props.date,startDate:t,endDate:e})})}}async componentWillMount(){const{startDate:t,endDate:e}=this.props;this.setState({coronaData:await C.getCountry({iso2:this.props.iso2,date:this.props.date,startDate:t,endDate:e}),populationData:await N.getPopulation(),countryDetails:await R.getDetails({iso2:this.props.iso2,date:this.props.date,startDate:t,endDate:e})})}changeTab(t){this.setState({currentTab:t})}render(e,{coronaData:a,populationData:s,countryDetails:r}){var i,o;if(!navigator.onLine&&("success"!==(null==a?void 0:a.status)||"success"!==(null==s||null===(o=s.data)||void 0===o?void 0:o.status)||"success"!==(null==r?void 0:r.status)))return l("div",{class:"countryInfo "+d},n,l("b",null,"You are not connected to the internet"),l("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return a||s||r||!navigator.onLine?[l("div",{class:U},Z.map(t=>l("div",{onClick:()=>this.changeTab(t.id),class:"tab "+(this.state.currentTab===t.id?"active":"")},t.name)),l("button",{onClick:this.props.onClose},u)),l("div",{class:"countryInfo "+z},1===this.state.currentTab?l(q,{date:this.props.date,country:this.props.country,coronaData:null===(i=a.data)||void 0===i?void 0:i.find(e=>function(e,a){t(2,arguments);var s=E(e),r=E(a);return s.getTime()===r.getTime()}(new Date(e.last_updated),this.props.date)),populationData:null==s?void 0:s.data[this.props.iso2],countryDetails:r}):2===this.state.currentTab?l(G,{countryDetails:r}):l(J,null))]:l("div",{class:"countryInfo loader "+c},L)}}
