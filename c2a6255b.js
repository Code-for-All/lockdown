import{E as t,m as e,h as a,o,c as n,l as s}from"./fc63aa3d.js";const i=new class extends t{constructor(){super(),this.cache={}}async getCountry(t){var e;let{iso2:a}=t;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(t.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{var o,n,s,i,r,l;this.cache[a]={};const t=await(await fetch("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="+a)).json();return this.cache[a]={status:"success",totalConfirmed:null!==(o=null===(n=t[0])||void 0===n?void 0:n.totalConfirmed)&&void 0!==o?o:0,totalDeaths:null!==(s=null===(i=t[0])||void 0===i?void 0:i.totalDeaths)&&void 0!==s?s:0,totalRecovered:null!==(r=null===(l=t[0])||void 0===l?void 0:l.totalRecovered)&&void 0!==r?r:0},this.cache[a]}catch{this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}},r={url:new URL("./src/services/populationService.js",document.baseURI).href};const l=new class extends t{constructor(){super(),this.cache={}}async getPopulation(t){var e;if(t||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",r.url)).then(t=>t.json()),await this.__population}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(e=this.__population)&&void 0!==e?e:0}}};let c,d,u,h=t=>t;const p=n(c||(c=h`
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
`)),v=n(d||(d=h`
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
`)),f=n(u||(u=h`
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
`));export default class extends e{async componentWillMount(){this.setState({coronaData:await i.getCountry({iso2:this.props.iso2}),populationData:await l.getPopulation()})}render(t,{coronaData:e,populationData:n}){var i,r,l,c,d,u,h;if(!navigator.onLine&&("success"!==(null==e?void 0:e.status)||"success"!==(null==n||null===(h=n.data)||void 0===h?void 0:h.status)))return a("div",{class:v},o,a("b",null,"You are not connected to the internet"),a("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return e||n||!navigator.onLine?a("div",{class:p},a("div",{class:"dialog"},a("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"},"Improve this data")),a("hr",null),a("div",{class:"dialog"},a("h2",null,"Stats"),a("div",{class:"data-entry"},a("p",null,"Population:"),a("p",{class:"data-value"},null!==(i=null==n||null===(r=n.data)||void 0===r||null===(l=r[this.props.iso2])||void 0===l?void 0:l.Population)&&void 0!==i?i:"Error")),a("div",{class:"data-entry"},a("p",null,"Confirmed cases:"),a("p",{class:"data-value"},null!==(c=null==e?void 0:e.totalConfirmed)&&void 0!==c?c:"Error")),a("div",{class:"data-entry"},a("p",null,"Confirmed deaths:"),a("p",{class:"data-value"},null!==(d=null==e?void 0:e.totalDeaths)&&void 0!==d?d:"Error")),a("div",{class:"data-entry"},a("p",null,"Confirmed recoveries:"),a("p",{class:"data-value"},null!==(u=null==e?void 0:e.totalRecovered)&&void 0!==u?u:"Error"))),a("hr",null)):a("div",{class:f},s)}}
