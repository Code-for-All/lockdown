import{r as i,t as r,E as e,f as t,a as o,c as a,m as s,h as n,o as d,b as l,l as c,d as g,e as y,g as u,i as h,j as p,s as m,k as Q,n as A,p as f,q as b,w as v,u as x,v as S,x as w,y as E}from"./b6f1b118.js";function M(e){i(1,arguments);var t=r(e);return t.setHours(0,0,0,0),t}const C={url:new URL("./src/services/coronastatusService.js",document.baseURI).href};new class extends e{async getCoronaStatus(i){return!i&&this.__coronastatus||(this.__coronastatus=fetch(new URL("../../data/coronastatus.json",C.url)).then(i=>i.json()),await this.__coronastatus,this.dispatchEvent(new Event("change"))),this.__coronastatus}};const N=new class extends e{constructor(){super(),this.cache={}}async getCountry(i){var r;let{iso2:e,date:a}=i,s=i.startDate,n=i.endDate;if(e=encodeURI(e),s=t(s||o(new Date,-14),"yyyy-MM-dd"),n=t(n||o(new Date,56),"yyyy-MM-dd"),!/^[a-zA-Z]{2}$/.test(e))return;const d=`${e}${s}${n}`;if(i.forceRefresh||this._shouldInvalidate()||"failed"===(null===(r=this.cache[d])||void 0===r?void 0:r.status)||!this.cache[d]){try{this.cache[d]={};const i=await(await fetch(`https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${e}&startDate=${s}&endDate=${n}`)).json();this.cache[d]={status:"success",data:i},this.__lastUpdate=Date.now()}catch{this.cache[d]={status:"failed"}}this.dispatchEvent(new Event("change"))}return this.cache[d]}};const k=new class extends e{constructor(){super(),this.cache={}}async getDetails(i){var r;console.log("---*****-----");let{iso2:e,date:a}=i,s=i.startDate,n=i.endDate;if(e=encodeURI(e),s=t(s||o(new Date,-14),"yyyy-MM-dd"),n=t(n||o(new Date,56),"yyyy-MM-dd"),!/^[a-zA-Z]{2}$/.test(e))return;let d=`${e}${s}${n}`;if(i.forceRefresh||this._shouldInvalidate()||"failed"===(null===(r=this.cache[d])||void 0===r?void 0:r.status)||!this.cache[d])try{this.cache[d]={};const i=await(await fetch(`https://lockdownsnapshots-apim.azure-api.net/status/${e}/${s}/${n}`)).json();this.cache[d]=i}catch(i){this.cache[d]={status:"failed"}}var l=this.cache[d];if("failed"===l.status)return this.dispatchEvent(new Event("change")),l;const c={};var g=l[t(a,"yyyy-MM-dd")];for(const i of["land","flight","sea"])for(const{label:r,value:e}of g.lockdown[i])Array.isArray(c[r])?c[r].push(e):c[r]=[e];var y={status:"success",date:g.lockdown.date,measures:g.lockdown.measure,travel:c,max_gathering:g.lockdown.max_gathering[0].value};return this.__lastUpdate=Date.now(),this.dispatchEvent(new Event("change")),y}},U={url:new URL("./src/services/populationService.js",document.baseURI).href};const L=new class extends e{constructor(){super(),this.cache={}}async getPopulation(i){var r;if(i||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",U.url)).then(i=>i.json())}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(r=this.__population)&&void 0!==r?r:0}}};new class extends e{constructor(){super(),this.cache={}}async getAdvice(i){var r;let{iso2:e}=i;if(e=encodeURI(e),/^[a-zA-Z]{2}$/.test(e)){if(i.forceRefresh||"failed"===(null===(r=this.cache[e])||void 0===r?void 0:r.status)||!this.cache[e]){try{this.cache[e]={};const i=await(await fetch("https://www.travel-advisory.info/api?countrycode="+e)).json();return this.cache[e]={status:"success",advice:i.data[e].advisory.message,score:i.data[e].advisory.score+"/5"},this.cache[e]}catch(i){this.cache[e]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[e]}return this.cache[e]}}};let I,_,D,T=i=>i;const P=a(I||(I=T`
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
`)),R=a(_||(_=T`
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
`)),G=a(D||(D=T`
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
    & .link-container{
      display: flex;
      justify-content: space-between;
      padding: 25px 0px;
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
`));class B extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","tooltip"),this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this._hide(),this._target=document.querySelector("[aria-describedby="+this.id+"]"),this._target&&(this._target.addEventListener("focus",this._show),this._target.addEventListener("blur",this._hide),this._target.addEventListener("mouseenter",this._show),this._target.addEventListener("mouseleave",this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener("focus",this._show),this._target.removeEventListener("blur",this._hide),this._target.removeEventListener("mouseenter",this._show),this._target.removeEventListener("mouseleave",this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}window.customElements.define("tool-tip",B);var K={Q889:{iso2:"AF",region:"Asia",id:"1404284038",territory:"Afghanistan"},Q222:{iso2:"AL",region:"Europe",id:"1901288739",territory:"Albania"},Q262:{iso2:"DZ",region:"Africa",id:"1408503297",territory:"Algeria"},Q16641:{iso2:"AS",region:"Pacific",id:"833886950",territory:"American Samoa"},Q228:{iso2:"AD",region:"Europe",id:"1109668779",territory:"Andorra"},Q916:{iso2:"AO",region:"Africa",id:"1932001250",territory:"Angola"},Q25228:{iso2:"AI",region:"Americas",id:"1998938385",territory:"Anguilla"},Q51:{iso2:"AQ",region:"Antartica",id:"1923261830",territory:"Antarctica"},Q781:{iso2:"AG",region:"Americas",id:"1440324253",territory:"Antigua and Barbuda"},Q414:{iso2:"AR",region:"Americas",id:"451904591",territory:"Argentina"},Q399:{iso2:"AM",region:"Asia",id:"1431726223",territory:"Armenia"},Q21203:{iso2:"AW",region:"Americas",id:"87613003",territory:"Aruba"},Q408:{iso2:"AU",region:"Pacific",id:"1757908207",territory:"Australia"},Q40:{iso2:"AT",region:"Europe",id:"1764765499",territory:"Austria"},Q227:{iso2:"AZ",region:"Asia",id:"1365782890",territory:"Azerbaijan"},Q778:{iso2:"BS",region:"Americas",id:"1114448269",territory:"Bahamas (the)"},Q398:{iso2:"BH",region:"Middle East",id:"1927247682",territory:"Bahrain"},Q902:{iso2:"BD",region:"Asia",id:"466316881",territory:"Bangladesh"},Q244:{iso2:"BB",region:"Americas",id:"611626942",territory:"Barbados"},Q184:{iso2:"BY",region:"Europe",id:"1264995043",territory:"Belarus"},Q31:{iso2:"BE",region:"Europe",id:"1484207640",territory:"Belgium"},Q242:{iso2:"BZ",region:"Americas",id:"2055591770",territory:"Belize"},Q962:{iso2:"BJ",region:"Africa",id:"337423854",territory:"Benin"},Q23635:{iso2:"BM",region:"Americas",id:"839436512",territory:"Bermuda"},Q917:{iso2:"BT",region:"Asia",id:"1344224031",territory:"Bhutan"},Q750:{iso2:"BO",region:"Americas",id:"584616411",territory:"Bolivia (Plurinational State of)"},Q27561:{iso2:"BQ",region:"Americas",id:"2056720508",territory:"'Bonaire, Sint Eustatius and Saba'"},Q225:{iso2:"BA",region:"Europe",id:"648842907",territory:"Bosnia and Herzegovina"},Q963:{iso2:"BW",region:"Africa",id:"1202363730",territory:"Botswana"},Q23408:{iso2:"BV",region:"Antartica",id:"1410375042",territory:"Bouvet Island"},Q155:{iso2:"BR",region:"Americas",id:"25534281",territory:"Brazil"},Q43448:{iso2:"IO",region:"Americas",id:"1577453241",territory:"British Indian Ocean Territory (the)"},Q921:{iso2:"BN",region:"Asia",id:"48450270",territory:"Brunei Darussalam"},Q219:{iso2:"BG",region:"Europe",id:"157844109",territory:"Bulgaria"},Q965:{iso2:"BF",region:"Africa",id:"2140081127",territory:"Burkina Faso"},Q967:{iso2:"BI",region:"Africa",id:"1131628556",territory:"Burundi"},Q1011:{iso2:"CV",region:"Africa",id:"2113968519",territory:"Cabo Verde"},Q424:{iso2:"KH",region:"Asia",id:"85177677",territory:"Cambodia"},Q1009:{iso2:"CM",region:"Africa",id:"1683368766",territory:"Cameroon"},Q16:{iso2:"CA",region:"Americas",id:"1820842937",territory:"Canada"},Q5785:{iso2:"KY",region:"Americas",id:"1195458243",territory:"Cayman Islands (the)"},Q929:{iso2:"CF",region:"Africa",id:"986054904",territory:"Central African Republic (the)"},Q657:{iso2:"TD",region:"Africa",id:"1261193522",territory:"Chad"},Q298:{iso2:"CL",region:"Americas",id:"2009906874",territory:"Chile"},Q148:{iso2:"CN",region:"Asia",id:"1196435111",territory:"China"},Q31063:{iso2:"CX",region:"Asia",id:"1722170992",territory:"Christmas Island"},Q36004:{iso2:"CC",region:"Asia",id:"343570013",territory:"Cocos (Keeling) Islands (the)"},Q739:{iso2:"CO",region:"Americas",id:"1826312808",territory:"Colombia"},Q970:{iso2:"KM",region:"Africa",id:"685370317",territory:"Comoros (the)"},Q974:{iso2:"CD",region:"Africa",id:"1765554087",territory:"Congo (the Democratic Republic of the)"},Q971:{iso2:"CG",region:"Africa",id:"553448368",territory:"Congo (the)"},Q26988:{iso2:"CK",region:"Pacific",id:"1795851162",territory:"Cook Islands (the)"},Q800:{iso2:"CR",region:"Americas",id:"1361015364",territory:"Costa Rica"},Q224:{iso2:"HR",region:"Europe",id:"1146553400",territory:"Croatia"},Q241:{iso2:"CU",region:"Americas",id:"1075376645",territory:"Cuba"},Q25279:{iso2:"CW",region:"Americas",id:"112639688",territory:"Curaçao"},Q229:{iso2:"CY",region:"Europe",id:"1456791969",territory:"Cyprus"},Q213:{iso2:"CZ",region:"Europe",id:"1038279024",territory:"Czechia"},Q1008:{iso2:"CI",region:"Africa",id:"1755647007",territory:"Côte d'Ivoire"},Q35:{iso2:"DK",region:"Europe",id:"1230154914",territory:"Denmark"},Q977:{iso2:"DJ",region:"Africa",id:"80609239",territory:"Djibouti"},Q784:{iso2:"DM",region:"Americas",id:"1972641394",territory:"Dominica"},Q786:{iso2:"DO",region:"Americas",id:"150622402",territory:"Dominican Republic (the)"},Q736:{iso2:"EC",region:"Americas",id:"1578702981",territory:"Ecuador"},Q79:{iso2:"EG",region:"Africa",id:"1637007725",territory:"Egypt"},Q792:{iso2:"SV",region:"Americas",id:"1356172667",territory:"El Salvador"},Q983:{iso2:"GQ",region:"Africa",id:"1888529434",territory:"Equatorial Guinea"},Q986:{iso2:"ER",region:"Africa",id:"796320847",territory:"Eritrea"},Q191:{iso2:"EE",region:"Europe",id:"1191652556",territory:"Estonia"},Q1050:{iso2:"SZ",region:"Africa",id:"1090870175",territory:"Eswatini"},Q115:{iso2:"ET",region:"Africa",id:"1589189091",territory:"Ethiopia"},Q9648:{iso2:"FK",region:"Americas",id:"2074969390",territory:"Falkland Islands (the) [Malvinas]"},Q4628:{iso2:"FO",region:"Europe",id:"1726984936",territory:"Faroe Islands (the)"},Q712:{iso2:"FJ",region:"Pacific",id:"1256503164",territory:"Fiji"},Q33:{iso2:"FI",region:"Europe",id:"455054903",territory:"Finland"},Q142:{iso2:"FR",region:"Europe",id:"870041429",territory:"France"},Q3769:{iso2:"GF",region:"Americas",id:"794815125",territory:"French Guiana"},Q30971:{iso2:"PF",region:"Pacific",id:"91631707",territory:"French Polynesia"},Q129003:{iso2:"TF",region:"Antartica",id:"1668601426",territory:"French Southern Territories (the)"},Q1000:{iso2:"GA",region:"Africa",id:"487613343",territory:"Gabon"},Q1005:{iso2:"GM",region:"Africa",id:"1064787889",territory:"Gambia (the)"},Q230:{iso2:"GE",region:"Europe",id:"428835792",territory:"Georgia"},Q183:{iso2:"DE",region:"Europe",id:"599369144",territory:"Germany"},Q117:{iso2:"GH",region:"Africa",id:"989882437",territory:"Ghana"},Q1410:{iso2:"GI",region:"Africa",id:"550549388",territory:"Gibraltar"},Q41:{iso2:"GR",region:"Europe",id:"417605658",territory:"Greece"},Q223:{iso2:"GL",region:"Europe",id:"1582386107",territory:"Greenland"},Q769:{iso2:"GD",region:"Americas",id:"1605119739",territory:"Grenada"},Q17012:{iso2:"GP",region:"Americas",id:"619460198",territory:"Guadeloupe"},Q16635:{iso2:"GU",region:"Americas",id:"1739708471",territory:"Guam"},Q774:{iso2:"GT",region:"Americas",id:"1259416410",territory:"Guatemala"},Q25230:{iso2:"GG",region:"Europe",id:"1387564804",territory:"Guernsey"},Q1006:{iso2:"GN",region:"Africa",id:"873094686",territory:"Guinea"},Q1007:{iso2:"GW",region:"Africa",id:"780249493",territory:"Guinea-Bissau"},Q734:{iso2:"GY",region:"Americas",id:"289421544",territory:"Guyana"},Q790:{iso2:"HT",region:"Americas",id:"1365622184",territory:"Haiti"},Q131198:{iso2:"HM",region:"Antartica",id:"416882437",territory:"Heard Island and McDonald Islands"},Q237:{iso2:"VA",region:"Europe",id:"499506038",territory:"Holy See (the)"},Q783:{iso2:"HN",region:"Americas",id:"1474197036",territory:"Honduras"},none:{iso2:"HK",region:"Asia",id:"1418814149",territory:"Hong Kong"},Q28:{iso2:"HU",region:"Europe",id:"1636469744",territory:"Hungary"},Q189:{iso2:"IS",region:"Europe",id:"1856805315",territory:"Iceland"},Q668:{iso2:"IN",region:"Asia",id:"1360254136",territory:"India"},Q252:{iso2:"ID",region:"Asia",id:"9094812",territory:"Indonesia"},Q794:{iso2:"IR",region:"Middle East",id:"377060258",territory:"Iran (Islamic Republic of)"},Q796:{iso2:"IQ",region:"Middle East",id:"683566721",territory:"Iraq"},Q27:{iso2:"IE",region:"Europe",id:"22452290",territory:"Ireland"},Q9676:{iso2:"IM",region:"Europe",id:"117178719",territory:"Isle of Man"},Q801:{iso2:"IL",region:"Middle East",id:"1749059663",territory:"Israel"},Q38:{iso2:"IT",region:"Europe",id:"1012108912",territory:"Italy"},Q766:{iso2:"JM",region:"Americas",id:"165541282",territory:"Jamaica"},Q17:{iso2:"JP",region:"Asia",id:"917573456",territory:"Japan"},Q785:{iso2:"JE",region:"Europe",id:"1730228477",territory:"Jersey"},Q810:{iso2:"JO",region:"Middle East",id:"578879418",territory:"Jordan"},Q232:{iso2:"KZ",region:"Asia",id:"244132451",territory:"Kazakhstan"},Q114:{iso2:"KE",region:"Africa",id:"841307086",territory:"Kenya"},Q710:{iso2:"KI",region:"Pacific",id:"44307742",territory:"Kiribati"},Q423:{iso2:"KP",region:"Asia",id:"861970400",territory:"Korea (the Democratic People's Republic of)"},Q884:{iso2:"KR",region:"Asia",id:"1913954408",territory:"Korea (the Republic of)"},Q817:{iso2:"KW",region:"Middle East",id:"1839119942",territory:"Kuwait"},Q813:{iso2:"KG",region:"Asia",id:"278661974",territory:"Kyrgyzstan"},Q819:{iso2:"LA",region:"Asia",id:"1223124044",territory:"Lao People's Democratic Republic (the)"},Q211:{iso2:"LV",region:"Europe",id:"693195515",territory:"Latvia"},Q822:{iso2:"LB",region:"Middle East",id:"1785563765",territory:"Lebanon"},Q1013:{iso2:"LS",region:"Africa",id:"1495910809",territory:"Lesotho"},Q1014:{iso2:"LR",region:"Africa",id:"1732892122",territory:"Liberia"},Q1016:{iso2:"LY",region:"Africa",id:"1169109313",territory:"Libya"},Q347:{iso2:"LI",region:"Europe",id:"386146074",territory:"Liechtenstein"},Q37:{iso2:"LT",region:"Europe",id:"262726808",territory:"Lithuania"},Q32:{iso2:"LU",region:"Europe",id:"1411002353",territory:"Luxembourg"},none3:{iso2:"MO",region:"Asia",id:"2020356326",territory:"Macao"},Q1019:{iso2:"MG",region:"Africa",id:"828732498",territory:"Madagascar"},Q1020:{iso2:"MW",region:"Africa",id:"1031255762",territory:"Malawi"},Q833:{iso2:"MY",region:"Asia",id:"1934124346",territory:"Malaysia"},Q826:{iso2:"MV",region:"Asia",id:"1548467023",territory:"Maldives"},Q912:{iso2:"ML",region:"Africa",id:"825996006",territory:"Mali"},Q233:{iso2:"MT",region:"Europe",id:"1733779786",territory:"Malta"},Q709:{iso2:"MH",region:"Pacific",id:"1854518140",territory:"Marshall Islands (the)"},Q17054:{iso2:"MQ",region:"Americas",id:"430308000",territory:"Martinique"},Q1025:{iso2:"MR",region:"Africa",id:"171537358",territory:"Mauritania"},Q1027:{iso2:"MU",region:"Africa",id:"367843726",territory:"Mauritius"},Q17063:{iso2:"YT",region:"Africa",id:"1329947969",territory:"Mayotte"},Q96:{iso2:"MX",region:"Americas",id:"1226032731",territory:"Mexico"},Q702:{iso2:"FM",region:"Pacific",id:"1897029042",territory:"Micronesia (Federated States of)"},Q217:{iso2:"MD",region:"Europe",id:"879211925",territory:"Moldova (the Republic of)"},Q235:{iso2:"MC",region:"Europe",id:"1043231517",territory:"Monaco"},Q711:{iso2:"MN",region:"Asia",id:"511724584",territory:"Mongolia"},Q236:{iso2:"ME",region:"Europe",id:"1930888894",territory:"Montenegro"},Q13353:{iso2:"MS",region:"Americas",id:"648717118",territory:"Montserrat"},Q1028:{iso2:"MA",region:"Africa",id:"493124000",territory:"Morocco"},Q1029:{iso2:"MZ",region:"Africa",id:"9332067",territory:"Mozambique"},Q836:{iso2:"MM",region:"Asia",id:"21667178",territory:"Myanmar"},Q1030:{iso2:"NA",region:"Africa",id:"1616394105",territory:"Namibia"},Q697:{iso2:"NR",region:"Pacific",id:"1895487548",territory:"Nauru"},Q837:{iso2:"NP",region:"Asia",id:"1636149654",territory:"Nepal"},Q55:{iso2:"NL",region:"Europe",id:"1280964758",territory:"Netherlands (the)"},Q33788:{iso2:"NC",region:"Pacific",id:"1189661948",territory:"New Caledonia"},Q664:{iso2:"NZ",region:"Pacific",id:"1187497648",territory:"New Zealand"},Q811:{iso2:"NI",region:"Americas",id:"1819145042",territory:"Nicaragua"},Q1032:{iso2:"NE",region:"Africa",id:"1713843562",territory:"Niger (the)"},Q1033:{iso2:"NG",region:"Africa",id:"1028396112",territory:"Nigeria"},Q34020:{iso2:"NU",region:"Pacific",id:"1371524908",territory:"Niue"},Q31057:{iso2:"NF",region:"Pacific",id:"391687131",territory:"Norfolk Island"},Q16644:{iso2:"MP",region:"Pacific",id:"671911458",territory:"Northern Mariana Islands (the)"},Q20:{iso2:"NO",region:"Europe",id:"544222390",territory:"Norway"},Q842:{iso2:"OM",region:"Middle East",id:"624031041",territory:"Oman"},Q843:{iso2:"PK",region:"Asia",id:"615226547",territory:"Pakistan"},Q695:{iso2:"PW",region:"Pacific",id:"1790121441",territory:"Palau"},Q219060:{iso2:"PS",region:"Middle East",id:"878029775",territory:"'Palestine, State of'"},Q804:{iso2:"PA",region:"Americas",id:"1588678782",territory:"Panama"},Q691:{iso2:"PG",region:"Pacific",id:"470258159",territory:"Papua New Guinea"},Q733:{iso2:"PY",region:"Americas",id:"536690823",territory:"Paraguay"},Q419:{iso2:"PE",region:"Americas",id:"784845277",territory:"Peru"},Q928:{iso2:"PH",region:"Asia",id:"906562777",territory:"Philippines (the)"},Q35672:{iso2:"PN",region:"Pacific",id:"1683176585",territory:"Pitcairn"},Q36:{iso2:"PL",region:"Europe",id:"933880855",territory:"Poland"},Q45:{iso2:"PT",region:"Europe",id:"843936232",territory:"Portugal"},Q1183:{iso2:"PR",region:"Americas",id:"1185874047",territory:"Puerto Rico"},Q846:{iso2:"QA",region:"Middle East",id:"397758341",territory:"Qatar"},Q221:{iso2:"MK",region:"Europe",id:"1108841607",territory:"Republic of North Macedonia"},Q218:{iso2:"RO",region:"Europe",id:"1716002800",territory:"Romania"},Q159:{iso2:"RU",region:"Europe",id:"1603566244",territory:"Russian Federation (the)"},Q1037:{iso2:"RW",region:"Africa",id:"112555650",territory:"Rwanda"},Q17070:{iso2:"RE",region:"Africa",id:"54571058",territory:"Réunion"},Q25362:{iso2:"BL",region:"Americas",id:"1825111804",territory:"Saint Barthélemy"},Q34497:{iso2:"SH",region:"Africa",id:"1933738909",territory:"Saint Helena, Ascension and Tristan da Cunha"},Q763:{iso2:"KN",region:"Americas",id:"1976754931",territory:"Saint Kitts and Nevis"},Q760:{iso2:"LC",region:"Americas",id:"196320161",territory:"Saint Lucia"},Q25596:{iso2:"MF",region:"Americas",id:"1288924366",territory:"Saint Martin (French part)"},Q34617:{iso2:"PM",region:"Americas",id:"1854190821",territory:"Saint Pierre and Miquelon"},Q757:{iso2:"VC",region:"Americas",id:"1094227893",territory:"Saint Vincent and the Grenadines"},Q683:{iso2:"WS",region:"Pacific",id:"65264465",territory:"Samoa"},Q238:{iso2:"SM",region:"Europe",id:"1488154269",territory:"San Marino"},Q1039:{iso2:"ST",region:"Africa",id:"1339915561",territory:"Sao Tome and Principe"},Q851:{iso2:"SA",region:"Middle East",id:"2058415942",territory:"Saudi Arabia"},Q1041:{iso2:"SN",region:"Africa",id:"553652649",territory:"Senegal"},Q403:{iso2:"RS",region:"Europe",id:"1484673559",territory:"Serbia"},Q1042:{iso2:"SC",region:"Africa",id:"1367194514",territory:"Seychelles"},Q1044:{iso2:"SL",region:"Africa",id:"2134375272",territory:"Sierra Leone"},Q334:{iso2:"SG",region:"Asia",id:"1854044586",territory:"Singapore"},Q26273:{iso2:"SX",region:"Americas",id:"2074753449",territory:"Sint Maarten (Dutch part)"},Q214:{iso2:"SK",region:"Europe",id:"1060476870",territory:"Slovakia"},Q215:{iso2:"SI",region:"Europe",id:"507363016",territory:"Slovenia"},Q685:{iso2:"SB",region:"Pacific",id:"1634443899",territory:"Solomon Islands"},Q1045:{iso2:"SO",region:"Africa",id:"1756043637",territory:"Somalia"},Q258:{iso2:"ZA",region:"Africa",id:"230387331",territory:"South Africa"},Q35086:{iso2:"GS",region:"Antartica",id:"1661690264",territory:"South Georgia and the South Sandwich Islands"},Q958:{iso2:"SS",region:"Africa",id:"1570283964",territory:"South Sudan"},Q29:{iso2:"ES",region:"Europe",id:"1192092567",territory:"Spain"},Q854:{iso2:"LK",region:"Asia",id:"303403602",territory:"Sri Lanka"},Q1049:{iso2:"SD",region:"Africa",id:"401744671",territory:"Sudan (the)"},Q730:{iso2:"SR",region:"Americas",id:"607019063",territory:"Suriname"},Q25231:{iso2:"SJ",region:"Europe",id:"21439910",territory:"Svalbard and Jan Mayen"},Q34:{iso2:"SE",region:"Europe",id:"1777249176",territory:"Sweden"},Q39:{iso2:"CH",region:"Europe",id:"1608881701",territory:"Switzerland"},Q858:{iso2:"SY",region:"Middle East",id:"1848882357",territory:"Syrian Arab Republic"},Q865:{iso2:"TW",region:"Asia",id:"748126611",territory:"Taiwan"},Q863:{iso2:"TJ",region:"Asia",id:"526596677",territory:"Tajikistan"},Q924:{iso2:"TZ",region:"Africa",id:"885236275",territory:"'Tanzania, United Republic of'"},Q869:{iso2:"TH",region:"Asia",id:"445196062",territory:"Thailand"},Q574:{iso2:"TL",region:"Asia",id:"1606292971",territory:"Timor-Leste"},Q945:{iso2:"TG",region:"Africa",id:"1319591668",territory:"Togo"},Q36823:{iso2:"TK",region:"Pacific",id:"60547144",territory:"Tokelau"},Q678:{iso2:"TO",region:"Pacific",id:"1305626726",territory:"Tonga"},Q754:{iso2:"TT",region:"Americas",id:"6775544",territory:"Trinidad and Tobago"},Q948:{iso2:"TN",region:"Africa",id:"847317949",territory:"Tunisia"},Q43:{iso2:"TR",region:"Middle East",id:"440824454",territory:"Turkey"},Q874:{iso2:"TM",region:"Asia",id:"707136951",territory:"Turkmenistan"},Q18221:{iso2:"TC",region:"Americas",id:"1112645204",territory:"Turks and Caicos Islands (the)"},Q672:{iso2:"TV",region:"Pacific",id:"1819992630",territory:"Tuvalu"},Q1036:{iso2:"UG",region:"Africa",id:"1221188289",territory:"Uganda"},Q212:{iso2:"UA",region:"Europe",id:"1468069409",territory:"Ukraine"},Q878:{iso2:"AE",region:"Middle East",id:"434172370",territory:"United Arab Emirates (the)"},Q145:{iso2:"GB",region:"Europe",id:"62521046",territory:"United Kingdom of Great Britain and Northern Ireland (the)"},Q16645:{iso2:"UM",region:"Americas",id:"673218176",territory:"United States Minor Outlying Islands (the)"},Q30:{iso2:"US",region:"Americas",id:"2035264055",territory:"United States of America (the)"},Q77:{iso2:"UY",region:"Americas",id:"53596000",territory:"Uruguay"},Q265:{iso2:"UZ",region:"Asia",id:"940797451",territory:"Uzbekistan"},Q686:{iso2:"VU",region:"Pacific",id:"786632419",territory:"Vanuatu"},Q717:{iso2:"VE",region:"Americas",id:"462050243",territory:"Venezuela (Bolivarian Republic of)"},Q881:{iso2:"VN",region:"Asia",id:"2116165974",territory:"Viet Nam"},Q25305:{iso2:"VG",region:"Americas",id:"1683650988",territory:"Virgin Islands (British)"},Q26262:{iso2:"VI",region:"Americas",id:"1348286543",territory:"Virgin Islands (U.S.)"},Q35555:{iso2:"WF",region:"Pacific",id:"2047261831",territory:"Wallis and Futuna"},Q6250:{iso2:"EH",region:"Africa",id:"200536514",territory:"Western Sahara"},Q805:{iso2:"YE",region:"Middle East",id:"841421464",territory:"Yemen"},Q953:{iso2:"ZM",region:"Africa",id:"682356459",territory:"Zambia"},Q954:{iso2:"ZW",region:"Africa",id:"628699682",territory:"Zimbabwe"},none1:{iso2:"AX",region:"Europe",id:"1911812748",territory:"Åland Islands"},Q956:{iso2:"CN",region:"Asia",id:"1078904954",territory:"Beijing"},Q11736:{iso2:"CN",region:"Asia",id:"1235932526",territory:"Tianjin"},Q21208:{iso2:"CN",region:"Asia",id:"2043599118",territory:"Hebei"},Q46913:{iso2:"CN",region:"Asia",id:"1950539128",territory:"Shanxi"},Q41079:{iso2:"CN",region:"Asia",id:"179490197",territory:"Neimenggu"},Q43934:{iso2:"CN",region:"Asia",id:"882679000",territory:"Liaoning"},Q45208:{iso2:"CN",region:"Asia",id:"2140657374",territory:"Jilin"},Q19206:{iso2:"CN",region:"Asia",id:"458326895",territory:"Heilongjiang"},Q8686:{iso2:"CN",region:"Asia",id:"425765574",territory:"Shanghai"},Q16963:{iso2:"CN",region:"Asia",id:"1947033235",territory:"Jiangsu"},Q16967:{iso2:"CN",region:"Asia",id:"338729213",territory:"Zhejiang"},Q40956:{iso2:"CN",region:"Asia",id:"1246259090",territory:"Anhui"},Q41705:{iso2:"CN",region:"Asia",id:"545322474",territory:"Fujian"},Q57052:{iso2:"CN",region:"Asia",id:"278662686",territory:"Jiangxi"},Q43407:{iso2:"CN",region:"Asia",id:"901526513",territory:"Shandong"},Q43684:{iso2:"CN",region:"Asia",id:"834241233",territory:"Henan"},Q46862:{iso2:"CN",region:"Asia",id:"846147830",territory:"Hubei"},Q45761:{iso2:"CN",region:"Asia",id:"668447035",territory:"Hunan"},Q15175:{iso2:"CN",region:"Asia",id:"952330738",territory:"Guangdong"},Q15176:{iso2:"CN",region:"Asia",id:"441728354",territory:"Guangxi"},Q42200:{iso2:"CN",region:"Asia",id:"969105546",territory:"Hainan"},Q11725:{iso2:"CN",region:"Asia",id:"1654071564",territory:"Chongqing"},Q19770:{iso2:"CN",region:"Asia",id:"1166415091",territory:"Sichuan"},Q47097:{iso2:"CN",region:"Asia",id:"2118901621",territory:"Guizhou"},Q43194:{iso2:"CN",region:"Asia",id:"509707501",territory:"Yunnan"},Q17269:{iso2:"CN",region:"Asia",id:"1913223997",territory:"Xizang"},Q47974:{iso2:"CN",region:"Asia",id:"2139848679",territory:"Shaanxi"},Q42392:{iso2:"CN",region:"Asia",id:"1066204419",territory:"Gansu"},Q45833:{iso2:"CN",region:"Asia",id:"1241602948",territory:"Qinghai"},Q57448:{iso2:"CN",region:"Asia",id:"2000326679",territory:"Ningxia Huizu"},Q34800:{iso2:"CN",region:"Asia",id:"982766584",territory:"Xinjiang"},Q173:{iso2:"US",region:"Americas",id:"829349041",territory:"Alabama"},Q797:{iso2:"US",region:"Americas",id:"652137773",territory:"Alaska"},Q816:{iso2:"US",region:"Americas",id:"1171573484",territory:"Arizona"},Q1612:{iso2:"US",region:"Americas",id:"617939164",territory:"Arkansas"},Q99:{iso2:"US",region:"Americas",id:"451969564",territory:"California"},Q1261:{iso2:"US",region:"Americas",id:"143342268",territory:"Colorado"},Q779:{iso2:"US",region:"Americas",id:"399315994",territory:"Connecticut"},Q1393:{iso2:"US",region:"Americas",id:"1422201926",territory:"Delaware"},Q3551781:{iso2:"US",region:"Americas",id:"1144117229",territory:"District of Columbia"},Q812:{iso2:"US",region:"Americas",id:"684244799",territory:"Florida"},Q1428:{iso2:"US",region:"Americas",id:"509455389",territory:"Georgia"},Q782:{iso2:"US",region:"Americas",id:"696101150",territory:"Hawaii"},Q1221:{iso2:"US",region:"Americas",id:"447719464",territory:"Idaho"},Q1204:{iso2:"US",region:"Americas",id:"1216244220",territory:"Illinois"},Q1415:{iso2:"US",region:"Americas",id:"223918726",territory:"Indiana"},Q1546:{iso2:"US",region:"Americas",id:"1028592639",territory:"Iowa"},Q1558:{iso2:"US",region:"Americas",id:"70817417",territory:"Kansas"},Q1603:{iso2:"US",region:"Americas",id:"288866569",territory:"Kentucky"},Q1588:{iso2:"US",region:"Americas",id:"1336991689",territory:"Louisiana"},Q724:{iso2:"US",region:"Americas",id:"1193313710",territory:"Maine"},Q1391:{iso2:"US",region:"Americas",id:"1129860959",territory:"Maryland"},Q771:{iso2:"US",region:"Americas",id:"606616245",territory:"Massachusetts"},Q1166:{iso2:"US",region:"Americas",id:"1393864828",territory:"Michigan"},Q1527:{iso2:"US",region:"Americas",id:"720299219",territory:"Minnesota"},Q1494:{iso2:"US",region:"Americas",id:"1497317423",territory:"Mississippi"},Q1581:{iso2:"US",region:"Americas",id:"1551304456",territory:"Missouri"},Q1212:{iso2:"US",region:"Americas",id:"1704099264",territory:"Montana"},Q1553:{iso2:"US",region:"Americas",id:"993055685",territory:"Nebraska"},Q1227:{iso2:"US",region:"Americas",id:"1245177279",territory:"Nevada"},Q759:{iso2:"US",region:"Americas",id:"1167896753",territory:"New Hampshire"},Q1408:{iso2:"US",region:"Americas",id:"244769832",territory:"New Jersey"},Q1522:{iso2:"US",region:"Americas",id:"635932286",territory:"New Mexico"},Q1384:{iso2:"US",region:"Americas",id:"862197920",territory:"New York"},Q1454:{iso2:"US",region:"Americas",id:"1892973932",territory:"North Carolina"},Q1207:{iso2:"US",region:"Americas",id:"1919663024",territory:"North Dakota"},Q1397:{iso2:"US",region:"Americas",id:"2030591831",territory:"Ohio"},Q1649:{iso2:"US",region:"Americas",id:"1257898979",territory:"Oklahoma"},Q824:{iso2:"US",region:"Americas",id:"314764697",territory:"Oregon"},Q1400:{iso2:"US",region:"Americas",id:"297940926",territory:"Pennsylvania"},Q1387:{iso2:"US",region:"Americas",id:"825294765",territory:"Rhode Island"},Q1456:{iso2:"US",region:"Americas",id:"1118931876",territory:"South Carolina"},Q1211:{iso2:"US",region:"Americas",id:"1048772307",territory:"South Dakota"},Q1509:{iso2:"US",region:"Americas",id:"27410066",territory:"Tennessee"},Q1439:{iso2:"US",region:"Americas",id:"1912496581",territory:"Texas"},Q829:{iso2:"US",region:"Americas",id:"1965179579",territory:"Utah"},Q16551:{iso2:"US",region:"Americas",id:"1358201652",territory:"Vermont"},Q1370:{iso2:"US",region:"Americas",id:"249416566",territory:"Virginia"},Q1223:{iso2:"US",region:"Americas",id:"1704352011",territory:"Washington"},Q1371:{iso2:"US",region:"Americas",id:"122251567",territory:"West Virginia"},Q1537:{iso2:"US",region:"Americas",id:"1808375659",territory:"Wisconsin"},Q1214:{iso2:"US",region:"Americas",id:"1746501554",territory:"Wyoming"}};const z={1:"YES",2:"PARTIALLY",3:"NO",4:"UNCLEAR",5:"NA"},F={1:"YES",2:"PARTIAL",3:"NO",4:"UNCLEAR"},H=["Land","Flight","Sea"],j={commerce:{text:"commerce"},foreigners_inbound:{text:"foreignersInbound"},foreigners_outbound:{text:"foreignersOutbound"},local:{text:"local"},nationals_inbound:{text:"nationalsInbound"},nationals_outbound:{text:"nationalsOutbound"},stopovers:{text:"stopovers"},cross_border_workers:{text:"crossBorderWorkers"}},O=[{id:"lockdown_status",label:"Stay Home",translationKey:"home",icon:p},{id:"going_to_shops",label:"Shopping",translationKey:"shopping",icon:m},{id:"city_movement_restriction",label:"Outdoors",translationKey:"outdoors",icon:Q},{id:"military_not_deployed",label:"Military",translationKey:"military",icon:A},{id:"attending_religious_sites",label:"Religious Sites",translationKey:"religious",icon:f},{id:"electricity_nominal",label:"Electricity",translationKey:"electricity",icon:b},{id:"going_to_work",label:"Go to Work",translationKey:"work",icon:v},{id:"water_nominal",label:"Water",translationKey:"water",icon:x},{id:"academia_allowed",label:"Go to Schools",translationKey:"schools",icon:S},{id:"internet_nominal",label:"Telecom",translationKey:"internet",icon:w}],V=[{id:1,name:"dailyLife"},{id:2,name:"mobility"},{id:3,name:"reports"}];class Y extends s{render(i){var r,e;let{i18n:o}=i,{coronaData:a,populationData:s,countryDetails:d,country:l,date:c}=this.props;return[n("h2",{class:"ld-font-subheader"},n("span",null,l)," ",n("span",null,t(c,"dd/MM/yyyy"))),n("dl",{class:"data"},n("div",{class:"data-entry is-half"},n("dt",null,o.t("tdo.tabs.dailyLife.stats.population")),n("dd",{class:"data-value"},isNaN(Number(null==s?void 0:s.Population))?o.t("tdo.tabs.dailyLife.noResults"):null!==(r=Number(null==s?void 0:s.Population).toLocaleString())&&void 0!==r?r:"Error")),n("div",{class:"data-entry is-half"},n("dt",null,o.t("tdo.tabs.dailyLife.stats.max_assembly")),n("dd",{class:"data-value"},null!==(e=null==d?void 0:d.max_gathering)&&void 0!==e?e:o.t("tdo.tabs.dailyLife.noResults"))),n("div",{class:"data-entry is-third"},n("dt",null,o.t("tdo.tabs.dailyLife.stats.cases")),n("dd",{class:"data-value"},(null==a?void 0:a.total_confirmed)?Number(null==a?void 0:a.total_confirmed).toLocaleString():o.t("tdo.tabs.dailyLife.noResults"))),n("div",{class:"data-entry is-third"},n("dt",null,o.t("tdo.tabs.dailyLife.stats.recoveries")),n("dd",{class:"data-value"},(null==a?void 0:a.total_recovered)?Number(null==a?void 0:a.total_recovered).toLocaleString():o.t("tdo.tabs.dailyLife.noResults"))),n("div",{class:"data-entry is-third"},n("dt",null,o.t("tdo.tabs.dailyLife.stats.deaths")),n("dd",{class:"data-value"},(null==a?void 0:a.total_deaths)?Number(null==a?void 0:a.total_deaths).toLocaleString():o.t("tdo.tabs.dailyLife.noResults")))),n($,{i18n:o,tab:"dailyLife"}),"success"===d.status?[n("h2",{class:"ld-font-subheader last"},o.t("tdo.tabs.dailyLife.subtitle")),n("ul",{class:"measures"},(g=d.measures,O.map(i=>{var r;const e=null==g?void 0:g.find(r=>r.label===i.id);return{...i,value:null!==(r=F[e.value])&&void 0!==r?r:F[4]}})).map(i=>n("li",null,n("div",{class:"measure-wrapper"},n("div",{"aria-labelledby":"measure-label-"+i.id,class:"measure measure-"+i.value,"aria-label":i.value.toLowerCase()},i.icon),n("span",{id:"measure-label-"+i.id,class:"measure-label"},o.t("tdo.tabs.dailyLife.measures."+i.translationKey))))))]:n("div",{class:"dialog"},n("h2",null,"Measures"),"Failed to get data for this country.")];var g}}class W extends s{render(i){let{countryDetails:r}=this.props,{i18n:e}=i;return"success"===r.status?[n("br",null),n("br",null),n($,{i18n:e,tab:"mobility"}),n("h2",{class:"ld-font-subheader last transport"},e.t("tdo.tabs.mobility.subtitle")),n("dl",null,n("div",{class:"ld-travel"},n("dt",null),n("div",{class:"ld-travel--values"},n("dd",{class:"ld-travel--val-icon"},y),n("dd",{class:"ld-travel--val-icon"},u),n("dd",{class:"ld-travel--val-icon"},h))),Object.keys(r.travel).map((i,t)=>n("div",{class:"ld-travel"},n("dt",null,e.t("tdo.tabs.mobility.measures."+j[i].text)),n("div",{class:"ld-travel--values"},r.travel[i].map((i,r)=>{var e,t,o,a,s;return n("dd",{"aria-label":H[r]+": "+(null!==(e=null===(t=z[i])||void 0===t?void 0:t.toLowerCase())&&void 0!==e?e:z[4].toLowerCase()),"data-tooltip":null!==(o=null===(a=z[i])||void 0===a?void 0:a.toLowerCase())&&void 0!==o?o:z[4].toLowerCase(),class:"ld-travel--symbol ld-travel--val-"+(null!==(s=z[i])&&void 0!==s?s:z[5])})})))))]:[n("div",{class:"dialog"},n("h2",null,"Measures"),"Failed to get data for this country.")," "]}}class $ extends s{render(i){let{i18n:r,tab:e}=i;return n("div",{class:"legend ld-font-legend"},n("dl",null,n("div",{class:"legend-item"},n("dt",{class:"legend-green","aria-label":"green"}),n("dd",null,r.t(`tdo.tabs.${e}.measureValues.3`))),n("div",{class:"legend-item"},n("dt",{class:"legend-yellow","aria-label":"yellow"}),n("dd",null,r.t(`tdo.tabs.${e}.measureValues.2`))),n("div",{class:"legend-item"},n("dt",{class:"legend-red","aria-label":"red"}),n("dd",null,r.t(`tdo.tabs.${e}.measureValues.1`))),n("div",{class:"legend-item"},n("dt",{class:"legend-gray","aria-label":"gray"}),n("dd",null,r.t(`tdo.tabs.${e}.measureValues.4`)))))}}class Z extends s{render(i){let{i18n:r}=i;return n("div",{class:R},n("h3",null,r.t("tdo.tabs.reports.subtitle")),n("div",{class:"placeholder"}))}}export default class extends s{constructor(i){super(i),this.changeTab=this.changeTab.bind(this),this.state={currentTab:1}}async componentDidUpdate(i){if(this.props.date!==i.date){const{startDate:i,endDate:r}=this.props;this.setState({coronaData:await N.getCountry({iso2:this.props.iso2,date:this.props.date,startDate:i,endDate:r}),countryDetails:await k.getDetails({iso2:this.props.iso2,date:this.props.date,startDate:i,endDate:r})})}}async componentWillMount(){const{startDate:i,endDate:r}=this.props;this.setState({coronaData:await N.getCountry({iso2:this.props.iso2,date:this.props.date,startDate:i,endDate:r}),populationData:await L.getPopulation(),countryDetails:await k.getDetails({iso2:this.props.iso2,date:this.props.date,startDate:i,endDate:r})})}changeTab(i){this.setState({currentTab:i})}render(r,{coronaData:e,populationData:t,countryDetails:o}){var a;let{i18n:s}=this.props,y=K[this.props.wikidata];var u;if(!navigator.onLine&&("success"!==(null==e?void 0:e.status)||"success"!==(null==t||null===(u=t.data)||void 0===u?void 0:u.status)||"success"!==(null==o?void 0:o.status)))return n("div",{class:"countryInfo "+l},d,n("b",null,"You are not connected to the internet"),n("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return e||t||o||!navigator.onLine?[n("div",{class:P},V.map(i=>n("div",{onClick:()=>this.changeTab(i.id),class:"tab "+(this.state.currentTab===i.id?"active":"")},r.i18n.t(`tdo.tabs.${i.name}.name`))),n("button",{onClick:this.props.onClose},g)),n("div",{class:"countryInfo "+G},1===this.state.currentTab?n(Y,{date:this.props.date,country:this.props.country,coronaData:null===(a=e.data)||void 0===a?void 0:a.find(r=>function(r,e){i(2,arguments);var t=M(r),o=M(e);return t.getTime()===o.getTime()}(new Date(r.last_updated),this.props.date)),populationData:null==t?void 0:t.data[this.props.iso2],countryDetails:o,i18n:s}):2===this.state.currentTab?n(W,{countryDetails:o,i18n:s}):n(Z,{i18n:s}),n("div",{class:"link-container"},n("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:y?"https://docs.google.com/a/theiofoundation.org/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit#gid="+y.id:"tiof.click/LockdownData"},r.i18n.t("tdo.contributionLinks.firstLink")),n("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:`https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform?entry.333088473=${y?y.region:"REGION"}&entry.1690056710=${y?y.territory:"TERRITORY"}`},r.i18n.t("tdo.contributionLinks.secondLink"))))]:n("div",{class:"countryInfo loader "+c},E)}}
