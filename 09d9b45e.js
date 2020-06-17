import{r as t,t as e,E as a,f as s,a as i,c as r,m as o,h as l,o as n,b as d,l as c,d as u,e as h,g as p,i as g,j as v,s as b,k as m,n as y,p as f,q as x,w,u as _,v as k,x as L,y as D}from"./ad7e28d3.js";function E(a){t(1,arguments);var s=e(a);return s.setHours(0,0,0,0),s}const R={url:new URL("./src/services/coronastatusService.js",document.baseURI).href};new class extends a{async getCoronaStatus(t){return!t&&this.__coronastatus||(this.__coronastatus=fetch(new URL("../../data/coronastatus.json",R.url)).then(t=>t.json()),await this.__coronastatus,this.dispatchEvent(new Event("change"))),this.__coronastatus}};const A=new class extends a{constructor(){super(),this.cache={}}async getCountry(t){var e;let{iso2:a,date:r}=t,o=t.startDate,l=t.endDate;if(a=encodeURI(a),o=s(o||i(new Date,-14),"yyyy-MM-dd"),l=s(l||i(new Date,56),"yyyy-MM-dd"),!/^[a-zA-Z]{2}$/.test(a))return;const n=`${a}${o}${l}`;if(t.forceRefresh||this._shouldInvalidate()||"failed"===(null===(e=this.cache[n])||void 0===e?void 0:e.status)||!this.cache[n]){try{this.cache[n]={};const t=await(await fetch(`https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${a}&startDate=${o}&endDate=${l}`)).json();this.cache[n]={status:"success",data:t},this.__lastUpdate=Date.now()}catch{this.cache[n]={status:"failed"}}this.dispatchEvent(new Event("change"))}return this.cache[n]}};const S=new class extends a{constructor(){super(),this.cache={}}async getDetails(t){var e;console.log("---*****-----");let{iso2:a,date:r}=t,o=t.startDate,l=t.endDate;if(a=encodeURI(a),o=s(o||i(new Date,-14),"yyyy-MM-dd"),l=s(l||i(new Date,56),"yyyy-MM-dd"),!/^[a-zA-Z]{2}$/.test(a))return;let n=`${a}${o}${l}`;if(t.forceRefresh||this._shouldInvalidate()||"failed"===(null===(e=this.cache[n])||void 0===e?void 0:e.status)||!this.cache[n])try{this.cache[n]={};const t=await(await fetch(`https://lockdownsnapshots-apim.azure-api.net/status/${a}/${o}/${l}`)).json();this.cache[n]=t}catch(t){this.cache[n]={status:"failed"}}var d=this.cache[n];if("failed"===d.status)return this.dispatchEvent(new Event("change")),d;const c={};var u=d[s(r,"yyyy-MM-dd")];for(const t of["land","flight","sea"])for(const{label:e,value:a}of u.lockdown[t])Array.isArray(c[e])?c[e].push(a):c[e]=[a];var h={status:"success",date:u.lockdown.date,measures:u.lockdown.measure,travel:c,max_gathering:u.lockdown.max_gathering[0].value};return this.__lastUpdate=Date.now(),this.dispatchEvent(new Event("change")),h}},$={url:new URL("./src/services/populationService.js",document.baseURI).href};const j=new class extends a{constructor(){super(),this.cache={}}async getPopulation(t){var e;if(t||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",$.url)).then(t=>t.json())}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(e=this.__population)&&void 0!==e?e:0}}};new class extends a{constructor(){super(),this.cache={}}async getAdvice(t){var e;let{iso2:a}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{this.cache[a]={};const t=await(await fetch("https://www.travel-advisory.info/api?countrycode="+a)).json();return this.cache[a]={status:"success",advice:t.data[a].advisory.message,score:t.data[a].advisory.score+"/5"},this.cache[a]}catch(t){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let C,I,M,N=t=>t;const T=r(C||(C=N`
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
`)),z=r(I||(I=N`
  & {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    & > h3 {
      background-color: rgba(231, 231, 231, 0.227);
      padding: 0.5rem 0.4rem;
      border-radius: 7px;
    }
    & .placeholder {
      @media (max-width: 350px) {
        background: url('src/assets/images/pld-report-sm.png') no-repeat;
        background-size: contain;
        background-position: center;
      }
      @media (max-width: 960px) {
        background: url('src/assets/images/pld-report-med.png') no-repeat;
        background-size: contain;
        background-position: center;
      }
      background: url('src/assets/images/pld-report-lrg.png');
      height: 100%;
      width: 100%;
      position: absolute;
      background-size: cover;
      opacity: 0.3;
      z-index: -1;
    }
  }
`)),U=r(M||(M=N`
  .countryInfo.loader {
    background-color: white !important;
    .dark & {
      background-color: var(--ld-bg) !important;
    }
  }
  & {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 20px 30px 30px 30px;
      @media (max-width: 960px) {
        padding: 5px 15px 15px 15px !important;
      }
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
        font-size: 14px;
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
    flex-wrap: wrap;
    justify-content: space-between;
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
    overflow-x: hidden;
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
  .measure {
    margin-right:10px;
      @media (max-width: 960px) {
        margin-right:10px;
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
`));class K extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","tooltip"),this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this._hide(),this._target=document.querySelector("[aria-describedby="+this.id+"]"),this._target&&(this._target.addEventListener("focus",this._show),this._target.addEventListener("blur",this._hide),this._target.addEventListener("mouseenter",this._show),this._target.addEventListener("mouseleave",this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener("focus",this._show),this._target.removeEventListener("blur",this._hide),this._target.removeEventListener("mouseenter",this._show),this._target.removeEventListener("mouseleave",this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}window.customElements.define("tool-tip",K);const O={1:"YES",2:"PARTIALLY",3:"NO",4:"UNCLEAR",5:"NA"},P={1:"YES",2:"PARTIAL",3:"NO",4:"UNCLEAR"},Y=["Land","Flight","Sea"],F={commerce:{text:"commerce"},foreigners_inbound:{text:"foreignersInbound"},foreigners_outbound:{text:"foreignersOutbound"},local:{text:"local"},nationals_inbound:{text:"nationalsInbound"},nationals_outbound:{text:"nationalsOutbound"},stopovers:{text:"stopovers"},cross_border_workers:{text:"crossBorderWorkers"}},W=[{id:"lockdown_status",label:"Stay Home",translationKey:"home",icon:v},{id:"going_to_shops",label:"Shopping",translationKey:"shopping",icon:b},{id:"city_movement_restriction",label:"Outdoors",translationKey:"outdoors",icon:m},{id:"military_not_deployed",label:"Military",translationKey:"military",icon:y},{id:"attending_religious_sites",label:"Religious Sites",translationKey:"religious",icon:f},{id:"electricity_nominal",label:"Electricity",translationKey:"electricity",icon:x},{id:"going_to_work",label:"Go to Work",translationKey:"work",icon:w},{id:"water_nominal",label:"Water",translationKey:"water",icon:_},{id:"academia_allowed",label:"Go to Schools",translationKey:"schools",icon:k},{id:"internet_nominal",label:"Telecom",translationKey:"internet",icon:L}],V=[{id:1,name:"dailyLife"},{id:2,name:"mobility"},{id:3,name:"reports"}];class H extends o{render(t){var e,a;let{i18n:i}=t,{coronaData:r,populationData:o,countryDetails:n,country:d,date:c}=this.props;return[l("h2",{class:"ld-font-subheader"},l("span",null,d)," ",l("span",null,s(c,"dd/MM/yyyy"))),l("dl",{class:"data"},l("div",{class:"data-entry is-half"},l("dt",null,i.t("tdo.tabs.dailyLife.stats.population")),l("dd",{class:"data-value"},isNaN(Number(null==o?void 0:o.Population))?i.t("tdo.tabs.dailyLife.noResults"):null!==(e=Number(null==o?void 0:o.Population).toLocaleString())&&void 0!==e?e:"Error")),l("div",{class:"data-entry is-half"},l("dt",null,i.t("tdo.tabs.dailyLife.stats.max_assembly")),l("dd",{class:"data-value"},null!==(a=null==n?void 0:n.max_gathering)&&void 0!==a?a:i.t("tdo.tabs.dailyLife.noResults"))),l("div",{class:"data-entry is-third"},l("dt",null,i.t("tdo.tabs.dailyLife.stats.cases")),l("dd",{class:"data-value"},(null==r?void 0:r.total_confirmed)?Number(null==r?void 0:r.total_confirmed).toLocaleString():i.t("tdo.tabs.dailyLife.noResults"))),l("div",{class:"data-entry is-third"},l("dt",null,i.t("tdo.tabs.dailyLife.stats.recoveries")),l("dd",{class:"data-value"},(null==r?void 0:r.total_recovered)?Number(null==r?void 0:r.total_recovered).toLocaleString():i.t("tdo.tabs.dailyLife.noResults"))),l("div",{class:"data-entry is-third"},l("dt",null,i.t("tdo.tabs.dailyLife.stats.deaths")),l("dd",{class:"data-value"},(null==r?void 0:r.total_deaths)?Number(null==r?void 0:r.total_deaths).toLocaleString():i.t("tdo.tabs.dailyLife.noResults")))),l(q,{i18n:i,tab:"dailyLife"}),"success"===n.status?[l("h2",{class:"ld-font-subheader last"},i.t("tdo.tabs.dailyLife.subtitle")),l("ul",{class:"measures"},(u=n.measures,W.map(t=>{var e;const a=null==u?void 0:u.find(e=>e.label===t.id);return{...t,value:null!==(e=P[a.value])&&void 0!==e?e:P[4]}})).map(t=>l("li",null,l("div",{class:"measure-wrapper"},l("div",{"aria-labelledby":"measure-label-"+t.id,class:"measure measure-"+t.value,"aria-label":t.value.toLowerCase()},t.icon),l("span",{id:"measure-label-"+t.id,class:"measure-label"},i.t("tdo.tabs.dailyLife.measures."+t.translationKey))))))]:l("div",{class:"dialog"},l("h2",null,"Measures"),"Failed to get data for this country.")];var u}}class Z extends o{render(t){let{countryDetails:e}=this.props,{i18n:a}=t;return"success"===e.status?[l("br",null),l("br",null),l(q,{i18n:a,tab:"mobility"}),l("h2",{class:"ld-font-subheader last transport"},a.t("tdo.tabs.mobility.subtitle")),l("dl",null,l("div",{class:"ld-travel"},l("dt",null),l("div",{class:"ld-travel--values"},l("dd",{class:"ld-travel--val-icon"},h),l("dd",{class:"ld-travel--val-icon"},p),l("dd",{class:"ld-travel--val-icon"},g))),Object.keys(e.travel).map((t,s)=>l("div",{class:"ld-travel"},l("dt",null,a.t("tdo.tabs.mobility.measures."+F[t].text)),l("div",{class:"ld-travel--values"},e.travel[t].map((t,e)=>{var a,s,i,r,o;return l("dd",{"aria-label":Y[e]+": "+(null!==(a=null===(s=O[t])||void 0===s?void 0:s.toLowerCase())&&void 0!==a?a:O[4].toLowerCase()),"data-tooltip":null!==(i=null===(r=O[t])||void 0===r?void 0:r.toLowerCase())&&void 0!==i?i:O[4].toLowerCase(),class:"ld-travel--symbol ld-travel--val-"+(null!==(o=O[t])&&void 0!==o?o:O[5])})})))))]:[l("div",{class:"dialog"},l("h2",null,"Measures"),"Failed to get data for this country.")," "]}}class q extends o{render(t){let{i18n:e,tab:a}=t;return l("div",{class:"legend ld-font-legend"},l("dl",null,l("div",{class:"legend-item"},l("dt",{class:"legend-green","aria-label":"green"}),l("dd",null,e.t(`tdo.tabs.${a}.measureValues.3`))),l("div",{class:"legend-item"},l("dt",{class:"legend-yellow","aria-label":"yellow"}),l("dd",null,e.t(`tdo.tabs.${a}.measureValues.2`))),l("div",{class:"legend-item"},l("dt",{class:"legend-red","aria-label":"red"}),l("dd",null,e.t(`tdo.tabs.${a}.measureValues.1`))),l("div",{class:"legend-item"},l("dt",{class:"legend-gray","aria-label":"gray"}),l("dd",null,e.t(`tdo.tabs.${a}.measureValues.4`)))))}}class G extends o{render(t){let{i18n:e}=t;return l("div",{class:z},l("h3",null,e.t("tdo.tabs.reports.subtitle")),l("div",{class:"placeholder"}))}}export default class extends o{constructor(t){super(t),this.changeTab=this.changeTab.bind(this),this.state={currentTab:1}}async componentDidUpdate(t){if(this.props.date!==t.date){const{startDate:t,endDate:e}=this.props;this.setState({coronaData:await A.getCountry({iso2:this.props.iso2,date:this.props.date,startDate:t,endDate:e}),countryDetails:await S.getDetails({iso2:this.props.iso2,date:this.props.date,startDate:t,endDate:e})})}}async componentWillMount(){const{startDate:t,endDate:e}=this.props;this.setState({coronaData:await A.getCountry({iso2:this.props.iso2,date:this.props.date,startDate:t,endDate:e}),populationData:await j.getPopulation(),countryDetails:await S.getDetails({iso2:this.props.iso2,date:this.props.date,startDate:t,endDate:e})})}changeTab(t){this.setState({currentTab:t})}render(e,{coronaData:a,populationData:s,countryDetails:i}){var r;let{i18n:o}=this.props;var h;if(!navigator.onLine&&("success"!==(null==a?void 0:a.status)||"success"!==(null==s||null===(h=s.data)||void 0===h?void 0:h.status)||"success"!==(null==i?void 0:i.status)))return l("div",{class:"countryInfo "+d},n,l("b",null,"You are not connected to the internet"),l("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return a||s||i||!navigator.onLine?[l("div",{class:T},V.map(t=>l("div",{onClick:()=>this.changeTab(t.id),class:"tab "+(this.state.currentTab===t.id?"active":"")},e.i18n.t(`tdo.tabs.${t.name}.name`))),l("button",{onClick:this.props.onClose},u)),l("div",{class:"countryInfo "+U},1===this.state.currentTab?l(H,{date:this.props.date,country:this.props.country,coronaData:null===(r=a.data)||void 0===r?void 0:r.find(e=>function(e,a){t(2,arguments);var s=E(e),i=E(a);return s.getTime()===i.getTime()}(new Date(e.last_updated),this.props.date)),populationData:null==s?void 0:s.data[this.props.iso2],countryDetails:i,i18n:o}):2===this.state.currentTab?l(Z,{countryDetails:i,i18n:o}):l(G,{i18n:o}))]:l("div",{class:"countryInfo loader "+c},D)}}
