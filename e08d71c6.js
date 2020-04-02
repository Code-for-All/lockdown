import{E as t,m as a,l as e,h as s,o,c}from"./6c84b8b1.js";const i=new class extends t{constructor(){super(),this.cache={}}async getAdvice(t){var a;let{iso2:e}=t;if(e=encodeURI(e),/^[a-zA-Z]{2}$/.test(e)){if(t.forceRefresh||"failed"===(null===(a=this.cache[e])||void 0===a?void 0:a.status)||!this.cache[e]){try{this.cache[e]={};const t=await(await fetch(`https://www.travel-advisory.info/api?countrycode=${e}`)).json();return this.cache[e]={status:"success",advice:t.data[e].advisory.message,score:`${t.data[e].advisory.score}/5`},this.cache[e]}catch(t){this.cache[e]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[e]}return this.cache[e]}}};const n=new class extends t{constructor(){super(),this.cache={}}async getCountry(t){var a;let{iso2:e}=t;if(e=encodeURI(e),/^[a-zA-Z]{2}$/.test(e)){if(t.forceRefresh||"failed"===(null===(a=this.cache[e])||void 0===a?void 0:a.status)||!this.cache[e]){try{var s,o,c,i,n,l;this.cache[e]={};const t=await(await fetch(`https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${e}`)).json();return this.cache[e]={status:"success",totalConfirmed:null!==(s=null===(o=t[0])||void 0===o?void 0:o.totalConfirmed)&&void 0!==s?s:0,totalDeaths:null!==(c=null===(i=t[0])||void 0===i?void 0:i.totalDeaths)&&void 0!==c?c:0,totalRecovered:null!==(n=null===(l=t[0])||void 0===l?void 0:l.totalRecovered)&&void 0!==n?n:0},this.cache[e]}catch{this.cache[e]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[e]}return this.cache[e]}}},l={url:new URL("./src/services/populationService.js",document.baseURI).href};const r=new class extends t{constructor(){super(),this.cache={}}async getPopulation(t){var a;let{iso2:e}=t;if(e=encodeURI(e),/^[a-zA-Z]{2}$/.test(e)){if(t.forceRefresh||"failed"===(null===(a=this.cache[e])||void 0===a?void 0:a.status)||!this.cache[e]){try{var s;this.cache[e]={};const t=await fetch(new URL("../../data/population.json",l.url)).then(t=>t.json());return this.cache[e]={status:"success",totalPopulation:null!==(s=t.data[e].Population)&&void 0!==s?s:0},this.cache[e]}catch(t){this.cache[e]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[e]}return this.cache[e]}}};let d,u,h=t=>t;const v=c(d||(d=h`
  & {
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

  h2 {
    margin-top: 0px;
  }

  .data-entry {
    display: flex;
  }

  p {
    margin: 0;
  }

  p:first-of-type {
    flex: 1;
  }

  p:last-of-type {
    font-weight: 700;
    color: var(--ld-text);
  }

  .data-value {
    color: grey;
  }

  .travel-advice {
    padding: 16px;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`)),p=c(u||(u=h`
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
`));export default class extends a{async componentWillMount(){this.setState({lockdowns:await e.getLockdowns(),travelAdvice:await i.getAdvice({iso2:this.props.iso2}),coronaData:await n.getCountry({iso2:this.props.iso2}),populationData:await r.getPopulation({iso2:this.props.iso2})})}render(t,{lockdowns:a,travelAdvice:e,coronaData:c,populationData:i}){var n,l,r,d;return navigator.onLine||"success"===(null==e?void 0:e.status)&&"success"===(null==c?void 0:c.status)&&"success"===(null==i?void 0:i.status)?a||e||c||i||!navigator.onLine?s("div",{class:v},s("div",{class:"dialog"},s("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Improve this data")),s("hr",null),s("div",{class:"dialog"},s("h2",null,"Stats"),s("div",{class:"data-entry"},s("p",null,"Population:"),s("p",{class:"data-value"},null!==(n=null==i?void 0:i.totalPopulation)&&void 0!==n?n:"Error")),s("div",{class:"data-entry"},s("p",null,"Confirmed cases:"),s("p",{class:"data-value"},null!==(l=null==c?void 0:c.totalConfirmed)&&void 0!==l?l:"Error")),s("div",{class:"data-entry"},s("p",null,"Confirmed deaths:"),s("p",{class:"data-value"},null!==(r=null==c?void 0:c.totalDeaths)&&void 0!==r?r:"Error")),s("div",{class:"data-entry"},s("p",null,"Confirmed recoveries:"),s("p",{class:"data-value"},null!==(d=null==c?void 0:c.totalRecovered)&&void 0!==d?d:"Error")),s("div",{class:"data-entry"},s("p",null,"Lockdown start:"),s("p",{class:"data-value"},"-")),s("div",{class:"data-entry"},s("p",null,"Lockdown end:"),s("p",{class:"data-value"},"-"))),s("hr",null),s("div",{class:"dialog"},s("h2",null,"Travel advice"),"success"===e.status?s("span",null,s("b",null,e.score),s("br",null),e.advice):"Error")):"Loading...":s("div",{class:p},o,s("b",null,"You are not connected to the internet"),s("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}}
