import{E as t,m as e,l as a,h as s,o,c as i,b as n}from"./5c8177ab.js";const r=new class extends t{constructor(){super(),this.cache={}}async getAdvice(t){var e;let{iso2:a}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{this.cache[a]={};const t=await(await fetch(`https://www.travel-advisory.info/api?countrycode=${a}`)).json();return this.cache[a]={status:"success",advice:t.data[a].advisory.message,score:`${t.data[a].advisory.score}/5`},this.cache[a]}catch(t){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};const c=new class extends t{constructor(){super(),this.cache={}}async getCountry(t){var e;let{iso2:a}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{var s,o,i,n,r,c;this.cache[a]={};const t=await(await fetch(`https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${a}`)).json();return this.cache[a]={status:"success",totalConfirmed:null!==(s=null===(o=t[0])||void 0===o?void 0:o.totalConfirmed)&&void 0!==s?s:0,totalDeaths:null!==(i=null===(n=t[0])||void 0===n?void 0:n.totalDeaths)&&void 0!==i?i:0,totalRecovered:null!==(r=null===(c=t[0])||void 0===c?void 0:c.totalRecovered)&&void 0!==r?r:0},this.cache[a]}catch{this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},l={url:new URL("./src/services/populationService.js",document.baseURI).href};const d=new class extends t{constructor(){super(),this.cache={}}async getPopulation(t){var e;let{iso2:a}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{var s;this.cache[a]={};const t=await fetch(new URL("../../data/population.json",l.url)).then(t=>t.json());return this.cache[a]={status:"success",totalPopulation:null!==(s=t.data[a].Population)&&void 0!==s?s:0},this.cache[a]}catch(t){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let h,u,v,p=t=>t;const f=i(h||(h=p`
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
`)),m=i(u||(u=p`
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
`)),g=i(v||(v=p`
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
`));export default class extends e{async componentWillMount(){this.setState({lockdowns:await a.getLockdowns(),travelAdvice:await r.getAdvice({iso2:this.props.iso2}),coronaData:await c.getCountry({iso2:this.props.iso2}),populationData:await d.getPopulation({iso2:this.props.iso2})})}render(t,{lockdowns:e,travelAdvice:a,coronaData:i,populationData:r}){var c,l,d,h;return navigator.onLine||"success"===(null==a?void 0:a.status)&&"success"===(null==i?void 0:i.status)&&"success"===(null==r?void 0:r.status)?e||a||i||r||!navigator.onLine?s("div",{class:f},s("div",{class:"dialog"},s("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Improve this data")),s("hr",null),s("div",{class:"dialog"},s("h2",null,"Stats"),s("div",{class:"data-entry"},s("p",null,"Population:"),s("p",{class:"data-value"},null!==(c=null==r?void 0:r.totalPopulation)&&void 0!==c?c:"Error")),s("div",{class:"data-entry"},s("p",null,"Confirmed cases:"),s("p",{class:"data-value"},null!==(l=null==i?void 0:i.totalConfirmed)&&void 0!==l?l:"Error")),s("div",{class:"data-entry"},s("p",null,"Confirmed deaths:"),s("p",{class:"data-value"},null!==(d=null==i?void 0:i.totalDeaths)&&void 0!==d?d:"Error")),s("div",{class:"data-entry"},s("p",null,"Confirmed recoveries:"),s("p",{class:"data-value"},null!==(h=null==i?void 0:i.totalRecovered)&&void 0!==h?h:"Error")),s("div",{class:"data-entry"},s("p",null,"Lockdown start:"),s("p",{class:"data-value"},"-")),s("div",{class:"data-entry"},s("p",null,"Lockdown end:"),s("p",{class:"data-value"},"-"))),s("hr",null),s("div",{class:"dialog"},s("h2",null,"Travel advice"),"success"===a.status?s("span",null,s("b",null,a.score),s("br",null),a.advice):"Error")):s("div",{class:g},n):s("div",{class:m},o,s("b",null,"You are not connected to the internet"),s("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."))}}
