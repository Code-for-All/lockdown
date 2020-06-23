import{r as i,t as e,E as a,f as r,a as n,c as t,m as o,h as s,o as d,b as l,l as c,d as g,e as u,g as p,i as h,j as m,s as A,k as f,n as b,p as v,q as y,w as x,u as w,v as E,x as k,y as _}from"./ea42c22c.js";function L(a){i(1,arguments);var r=e(a);return r.setHours(0,0,0,0),r}const S={url:new URL("./src/services/coronastatusService.js",document.baseURI).href};new class extends a{async getCoronaStatus(i){return!i&&this.__coronastatus||(this.__coronastatus=fetch(new URL("../../data/coronastatus.json",S.url)).then(i=>i.json()),await this.__coronastatus,this.dispatchEvent(new Event("change"))),this.__coronastatus}};const M=new class extends a{constructor(){super(),this.cache={}}async getCountry(i){var e;let{iso2:a,date:t}=i,o=i.startDate,s=i.endDate;if(a=encodeURI(a),o=r(o||n(new Date,-14),"yyyy-MM-dd"),s=r(s||n(new Date,56),"yyyy-MM-dd"),!/^[a-zA-Z]{2}$/.test(a))return;const d=`${a}${o}${s}`;if(i.forceRefresh||this._shouldInvalidate()||"failed"===(null===(e=this.cache[d])||void 0===e?void 0:e.status)||!this.cache[d]){try{this.cache[d]={};const i=await(await fetch(`https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${a}&startDate=${o}&endDate=${s}`)).json();this.cache[d]={status:"success",data:i},this.__lastUpdate=Date.now()}catch{this.cache[d]={status:"failed"}}this.dispatchEvent(new Event("change"))}return this.cache[d]}};const D=new class extends a{constructor(){super(),this.cache={}}async getDetails(i){var e;console.log("---*****-----");let{iso2:a,date:t}=i,o=i.startDate,s=i.endDate;if(a=encodeURI(a),o=r(o||n(new Date,-14),"yyyy-MM-dd"),s=r(s||n(new Date,56),"yyyy-MM-dd"),!/^[a-zA-Z]{2}$/.test(a))return;let d=`${a}${o}${s}`;if(i.forceRefresh||this._shouldInvalidate()||"failed"===(null===(e=this.cache[d])||void 0===e?void 0:e.status)||!this.cache[d])try{this.cache[d]={};const i=await(await fetch(`https://lockdownsnapshots-apim.azure-api.net/status/${a}/${o}/${s}`)).json();this.cache[d]=i}catch(i){this.cache[d]={status:"failed"}}var l=this.cache[d];if("failed"===l.status)return this.dispatchEvent(new Event("change")),l;const c={};var g=l[r(t,"yyyy-MM-dd")];for(const i of["land","flight","sea"])for(const{label:e,value:a}of g.lockdown[i])Array.isArray(c[e])?c[e].push(a):c[e]=[a];var u={status:"success",date:g.lockdown.date,measures:g.lockdown.measure,travel:c,max_gathering:g.lockdown.max_gathering[0].value};return this.__lastUpdate=Date.now(),this.dispatchEvent(new Event("change")),u}},I={url:new URL("./src/services/populationService.js",document.baseURI).href};const C=new class extends a{constructor(){super(),this.cache={}}async getPopulation(i){var e;if(i||!this.__population)try{this.__population=await fetch(new URL("../../data/population.json",I.url)).then(i=>i.json())}catch{return{status:"failed"}}return this.dispatchEvent(new Event("change")),{status:"success",data:null!==(e=this.__population)&&void 0!==e?e:0}}};new class extends a{constructor(){super(),this.cache={}}async getAdvice(i){var e;let{iso2:a}=i;if(a=encodeURI(a),/^[a-zA-Z]{2}$/.test(a)){if(i.forceRefresh||"failed"===(null===(e=this.cache[a])||void 0===e?void 0:e.status)||!this.cache[a]){try{this.cache[a]={};const i=await(await fetch("https://www.travel-advisory.info/api?countrycode="+a)).json();return this.cache[a]={status:"success",advice:i.data[a].advisory.message,score:i.data[a].advisory.score+"/5"},this.cache[a]}catch(i){this.cache[a]={status:"failed"}}return this.dispatchEvent(new Event("change")),this.cache[a]}return this.cache[a]}}};let P,N,R,T=i=>i;const z=t(P||(P=T`
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
`)),j=t(N||(N=T`
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
`)),G=t(R||(R=T`
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
`));class U extends HTMLElement{constructor(){super(),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","tooltip"),this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this._hide(),this._target=document.querySelector("[aria-describedby="+this.id+"]"),this._target&&(this._target.addEventListener("focus",this._show),this._target.addEventListener("blur",this._hide),this._target.addEventListener("mouseenter",this._show),this._target.addEventListener("mouseleave",this._hide))}disconnectedCallback(){this._target&&(this._target.removeEventListener("focus",this._show),this._target.removeEventListener("blur",this._hide),this._target.removeEventListener("mouseenter",this._show),this._target.removeEventListener("mouseleave",this._hide),this._target=null)}_show(){this.hidden=!1}_hide(){this.hidden=!0}}window.customElements.define("tool-tip",U);var B={Afghanistan:{id:"1404284038",region:"Asia"},Albania:{id:"1901288739",region:"Europe"},Algeria:{id:"1408503297",region:"Africa"},"American Samoa":{id:"833886950",region:"Pacific"},Andorra:{id:"1109668779",region:"Europe"},Angola:{id:"1932001250",region:"Africa"},Anguilla:{id:"1998938385",region:"Americas"},Antarctica:{id:"1923261830",region:"Antartica"},"Antigua and Barbuda":{id:"1440324253",region:"Americas"},Argentina:{id:"451904591",region:"Americas"},Armenia:{id:"1431726223",region:"Asia"},Aruba:{id:"87613003",region:"Americas"},Australia:{id:"1757908207",region:"Pacific"},Austria:{id:"1764765499",region:"Europe"},Azerbaijan:{id:"1365782890",region:"Asia"},"Bahamas ":{id:"1114448269",region:"Americas"},"Bahrain Middle":{id:"1927247682",region:"East"},Bangladesh:{id:"466316881",region:"Asia"},Barbados:{id:"611626942",region:"Americas"},Belarus:{id:"1264995043",region:"Europe"},Belgium:{id:"1484207640",region:"Europe"},Belize:{id:"2055591770",region:"Americas"},Benin:{id:"337423854",region:"Africa"},Bermuda:{id:"839436512",region:"Americas"},Bhutan:{id:"1344224031",region:"Asia"},"Bolivia (Plurinational State of)":{id:"584616411",region:"Americas"},"Bonaire, Sint Eustatius and Saba":{id:"2056720508",region:"Americas"},"Bosnia and Herzegovina":{id:"648842907",region:"Europe"},Botswana:{id:"1202363730",region:"Africa"},"Bouvet Island":{id:"1410375042",region:"Antartica"},Brazil:{id:"25534281",region:"Americas"},"British Indian Ocean Territory ":{id:"1577453241",region:"Americas"},"Brunei Darussalam":{id:"48450270",region:"Asia"},Bulgaria:{id:"157844109",region:"Europe"},"Burkina Faso":{id:"2140081127",region:"Africa"},Burundi:{id:"1131628556",region:"Africa"},"Cabo Verde":{id:"2113968519",region:"Africa"},Cambodia:{id:"85177677",region:"Asia"},Cameroon:{id:"1683368766",region:"Africa"},Canada:{id:"1820842937",region:"Americas"},"Cayman Islands ":{id:"1195458243",region:"Americas"},"Central African Republic ":{id:"986054904",region:"Africa"},Chad:{id:"1261193522",region:"Africa"},Chile:{id:"2009906874",region:"Americas"},China:{id:"1196435111",region:"Asia"},"Christmas Island":{id:"1722170992",region:"Asia"},"Cocos (Keeling) Islands ":{id:"343570013",region:"Asia"},Colombia:{id:"1826312808",region:"Americas"},"Comoros ":{id:"685370317",region:"Africa"},"Congo (the Democratic Republic of the)":{id:"1765554087",region:"Africa"},"Congo ":{id:"553448368",region:"Africa"},"Cook Islands ":{id:"1795851162",region:"Pacific"},"Costa Rica":{id:"1361015364",region:"Americas"},Croatia:{id:"1146553400",region:"Europe"},Cuba:{id:"1075376645",region:"Americas"},"Curaçao":{id:"112639688",region:"Americas"},Cyprus:{id:"1456791969",region:"Europe"},Czechia:{id:"1038279024",region:"Europe"},"Côte d'Ivoire":{id:"1755647007",region:"Africa"},Denmark:{id:"1230154914",region:"Europe"},Djibouti:{id:"80609239",region:"Africa"},Dominica:{id:"1972641394",region:"Americas"},"Dominican Republic ":{id:"150622402",region:"Americas"},Ecuador:{id:"1578702981",region:"Americas"},Egypt:{id:"1637007725",region:"Africa"},"El Salvador":{id:"1356172667",region:"Americas"},"Equatorial Guinea":{id:"1888529434",region:"Africa"},Eritrea:{id:"796320847",region:"Africa"},Estonia:{id:"1191652556",region:"Europe"},Eswatini:{id:"1090870175",region:"Africa"},Ethiopia:{id:"1589189091",region:"Africa"},"Falkland Islands  [Malvinas]":{id:"2074969390",region:"Americas"},"Faroe Islands ":{id:"1726984936",region:"Europe"},Fiji:{id:"1256503164",region:"Pacific"},Finland:{id:"455054903",region:"Europe"},France:{id:"870041429",region:"Europe"},"French Guiana":{id:"794815125",region:"Americas"},"French Polynesia":{id:"91631707",region:"Pacific"},"French Southern Territories ":{id:"1668601426",region:"Antartica"},Gabon:{id:"487613343",region:"Africa"},"Gambia ":{id:"1064787889",region:"Africa"},Georgia:{id:"428835792",region:"Europe"},Germany:{id:"599369144",region:"Europe"},Ghana:{id:"989882437",region:"Africa"},Gibraltar:{id:"550549388",region:"Africa"},Greece:{id:"417605658",region:"Europe"},Greenland:{id:"1582386107",region:"Europe"},Grenada:{id:"1605119739",region:"Americas"},Guadeloupe:{id:"619460198",region:"Americas"},Guam:{id:"1739708471",region:"Americas"},Guatemala:{id:"1259416410",region:"Americas"},Guernsey:{id:"1387564804",region:"Europe"},Guinea:{id:"873094686",region:"Africa"},"Guinea-Bissau":{id:"780249493",region:"Africa"},Guyana:{id:"289421544",region:"Americas"},Haiti:{id:"1365622184",region:"Americas"},"Heard Island and McDonald Islands":{id:"416882437",region:"Antartica"},"Holy See ":{id:"499506038",region:"Europe"},Honduras:{id:"1474197036",region:"Americas"},"Hong Kong":{id:"1418814149",region:"Asia"},Hungary:{id:"1636469744",region:"Europe"},Iceland:{id:"1856805315",region:"Europe"},India:{id:"1360254136",region:"Asia"},Indonesia:{id:"9094812",region:"Asia"},"Iran (Islamic Republic of Middle)":{id:"377060258",region:"East"},Iraq:{id:"683566721",region:"East"},Ireland:{id:"22452290",region:"Europe"},"Isle of Man":{id:"117178719",region:"Europe"},Israel:{id:"1749059663",region:"East"},Italy:{id:"1012108912",region:"Europe"},Jamaica:{id:"165541282",region:"Americas"},Japan:{id:"917573456",region:"Asia"},Jersey:{id:"1730228477",region:"Europe"},Jordan:{id:"578879418",region:"East"},Kazakhstan:{id:"244132451",region:"Asia"},Kenya:{id:"841307086",region:"Africa"},Kiribati:{id:"44307742",region:"Pacific"},"Korea (the Democratic People's Republic of)":{id:"861970400",region:"Asia"},"Korea (the Republic of)":{id:"1913954408",region:"Asia"},Kuwait:{id:"1839119942",region:"East"},Kyrgyzstan:{id:"278661974",region:"Asia"},"Lao People's Democratic Republic ":{id:"1223124044",region:"Asia"},Latvia:{id:"693195515",region:"Europe"},Lebanon:{id:"1785563765",region:"East"},Lesotho:{id:"1495910809",region:"Africa"},Liberia:{id:"1732892122",region:"Africa"},Libya:{id:"1169109313",region:"Africa"},Liechtenstein:{id:"386146074",region:"Europe"},Lithuania:{id:"262726808",region:"Europe"},Luxembourg:{id:"1411002353",region:"Europe"},Macao:{id:"2020356326",region:"Asia"},Madagascar:{id:"828732498",region:"Africa"},Malawi:{id:"1031255762",region:"Africa"},Malaysia:{id:"1934124346",region:"Asia"},Maldives:{id:"1548467023",region:"Asia"},Mali:{id:"825996006",region:"Africa"},Malta:{id:"1733779786",region:"Europe"},"Marshall Islands ":{id:"1854518140",region:"Pacific"},Martinique:{id:"430308000",region:"Americas"},Mauritania:{id:"171537358",region:"Africa"},Mauritius:{id:"367843726",region:"Africa"},Mayotte:{id:"1329947969",region:"Africa"},Mexico:{id:"1226032731",region:"Americas"},"Micronesia (Federated States of)":{id:"1897029042",region:"Pacific"},"Moldova (the Republic of)":{id:"879211925",region:"Europe"},Monaco:{id:"1043231517",region:"Europe"},Mongolia:{id:"511724584",region:"Asia"},Montenegro:{id:"1930888894",region:"Europe"},Montserrat:{id:"648717118",region:"Americas"},Morocco:{id:"493124000",region:"Africa"},Mozambique:{id:"9332067",region:"Africa"},Myanmar:{id:"21667178",region:"Asia"},Namibia:{id:"1616394105",region:"Africa"},Nauru:{id:"1895487548",region:"Pacific"},Nepal:{id:"1636149654",region:"Asia"},"Netherlands ":{id:"1280964758",region:"Europe"},"New Caledonia":{id:"1189661948",region:"Pacific"},"New Zealand":{id:"1187497648",region:"Pacific"},Nicaragua:{id:"1819145042",region:"Americas"},"Niger ":{id:"1713843562",region:"Africa"},Nigeria:{id:"1028396112",region:"Africa"},Niue:{id:"1371524908",region:"Pacific"},"Norfolk Island":{id:"391687131",region:"Pacific"},"Northern Mariana Islands ":{id:"671911458",region:"Pacific"},Norway:{id:"544222390",region:"Europe"},"Oman\t624031041":{id:"Middle",region:"East"},Pakistan:{id:"615226547",region:"Asia"},Palau:{id:"1790121441",region:"Pacific"},Palestine:{id:"878029775",region:"East"},Panama:{id:"1588678782",region:"Americas"},"Papua New Guinea":{id:"470258159",region:"Pacific"},Paraguay:{id:"536690823",region:"Americas"},Peru:{id:"784845277",region:"Americas"},"Philippines ":{id:"906562777",region:"Asia"},Pitcairn:{id:"1683176585",region:"Pacific"},Poland:{id:"933880855",region:"Europe"},Portugal:{id:"843936232",region:"Europe"},"Puerto Rico":{id:"1185874047",region:"Americas"},Qatar:{id:"397758341",region:"East"},"Republic of North Macedonia":{id:"1108841607",region:"Europe"},Romania:{id:"1716002800",region:"Europe"},"Russian Federation":{id:"1603566244",region:"Europe"},Rwanda:{id:"112555650",region:"Africa"},"Réunion":{id:"54571058",region:"Africa"},"Saint Barthélemy":{id:"1825111804",region:"Americas"},"Saint Helena, Ascension and Tristan da Cunha":{id:"1933738909",region:"Africa"},"Saint Kitts and Nevis":{id:"1976754931",region:"Americas"},"Saint Lucia":{id:"196320161",region:"Americas"},"Saint Martin (French part)":{id:"1288924366",region:"Americas"},"Saint Pierre and Miquelon":{id:"1854190821",region:"Americas"},"Saint Vincent and the Grenadines":{id:"1094227893",region:"Americas"},Samoa:{id:"65264465",region:"Pacific"},"San Marino":{id:"1488154269",region:"Europe"},"Sao Tome and Principe":{id:"1339915561",region:"Africa"},"Saudi Arabia":{id:"2058415942",region:"East"},Senegal:{id:"553652649",region:"Africa"},Serbia:{id:"1484673559",region:"Europe"},Seychelles:{id:"1367194514",region:"Africa"},"Sierra Leone":{id:"2134375272",region:"Africa"},Singapore:{id:"1854044586",region:"Asia"},"Sint Maarten (Dutch part)":{id:"2074753449",region:"Americas"},Slovakia:{id:"1060476870",region:"Europe"},Slovenia:{id:"507363016",region:"Europe"},"Solomon Islands":{id:"1634443899",region:"Pacific"},Somalia:{id:"1756043637",region:"Africa"},"South Africa":{id:"230387331",region:"Africa"},"South Georgia and the South Sandwich Islands":{id:"1661690264",region:"Antartica"},"South Sudan":{id:"1570283964",region:"Africa"},Spain:{id:"1192092567",region:"Europe"},"Sri Lanka":{id:"303403602",region:"Asia"},"Sudan ":{id:"401744671",region:"Africa"},Suriname:{id:"607019063",region:"Americas"},"Svalbard and Jan Mayen":{id:"21439910",region:"Europe"},Sweden:{id:"1777249176",region:"Europe"},Switzerland:{id:"1608881701",region:"Europe"},"Syrian Arab Republic":{id:"1848882357",region:"East"},Taiwan:{id:"748126611",region:"Asia"},Tajikistan:{id:"526596677",region:"Asia"},"Tanzania, United Republic of":{id:"885236275",region:"Africa"},Thailand:{id:"445196062",region:"Asia"},"Timor-Leste":{id:"1606292971",region:"Asia"},Togo:{id:"1319591668",region:"Africa"},Tokelau:{id:"60547144",region:"Pacific"},Tonga:{id:"1305626726",region:"Pacific"},"Trinidad and Tobago":{id:"6775544",region:"Americas"},Tunisia:{id:"847317949",region:"Africa"},Turkey:{id:"440824454",region:"East"},Turkmenistan:{id:"707136951",region:"Asia"},"Turks and Caicos Islands ":{id:"1112645204",region:"Americas"},Tuvalu:{id:"1819992630",region:"Pacific"},Uganda:{id:"1221188289",region:"Africa"},Ukraine:{id:"1468069409",region:"Europe"},"United Arab Emirates ":{id:"434172370",region:"East"},"United Kingdom of Great Britain and Northern Ireland ":{id:"62521046",region:"Europe"},"United States Minor Outlying Islands ":{id:"673218176",region:"Americas"},"United States of America ":{id:"2035264055",region:"Americas"},Uruguay:{id:"53596000",region:"Americas"},Uzbekistan:{id:"940797451",region:"Asia"},Vanuatu:{id:"786632419",region:"Pacific"},Venezuela:{id:"462050243",region:"Americas"},"Viet Nam":{id:"2116165974",region:"Asia"},"Virgin Islands (British)":{id:"1683650988",region:"Americas"},"Virgin Islands (U.S.)":{id:"1348286543",region:"Americas"},"Wallis and Futuna":{id:"2047261831",region:"Pacific"},"Western Sahara":{id:"200536514",region:"Africa"},Yemen:{id:"841421464",region:"East"},Zambia:{id:"682356459",region:"Africa"},Zimbabwe:{id:"628699682",region:"Africa"},"Åland Islands":{id:"1911812748",region:"Europe"},Beijing:{id:"1078904954",region:"Asia"},Tianjin:{id:"1235932526",region:"Asia"},Hebei:{id:"2043599118",region:"Asia"},Shanxi:{id:"1950539128",region:"Asia"},Neimenggu:{id:"179490197",region:"Asia"},Liaoning:{id:"882679000",region:"Asia"},Jilin:{id:"2140657374",region:"Asia"},Heilongjiang:{id:"458326895",region:"Asia"},Shanghai:{id:"425765574",region:"Asia"},Jiangsu:{id:"1947033235",region:"Asia"},Zhejiang:{id:"338729213",region:"Asia"},Anhui:{id:"1246259090",region:"Asia"},Fujian:{id:"545322474",region:"Asia"},Jiangxi:{id:"278662686",region:"Asia"},Shandong:{id:"901526513",region:"Asia"},Henan:{id:"834241233",region:"Asia"},Hubei:{id:"846147830",region:"Asia"},Hunan:{id:"668447035",region:"Asia"},Guangdong:{id:"952330738",region:"Asia"},Guangxi:{id:"441728354",region:"Asia"},Hainan:{id:"969105546",region:"Asia"},Chongqing:{id:"1654071564",region:"Asia"},Sichuan:{id:"1166415091",region:"Asia"},Guizhou:{id:"2118901621",region:"Asia"},Yunnan:{id:"509707501",region:"Asia"},Xizang:{id:"1913223997",region:"Asia"},Shaanxi:{id:"2139848679",region:"Asia"},Gansu:{id:"1066204419",region:"Asia"},Qinghai:{id:"1241602948",region:"Asia"},"Ningxia Huizu":{id:"2000326679",region:"Asia"},Xinjiang:{id:"982766584",region:"Asia"},Alabama:{id:"829349041",region:"Americas"},Alaska:{id:"652137773",region:"Americas"},Arizona:{id:"1171573484",region:"Americas"},Arkansas:{id:"617939164",region:"Americas"},California:{id:"451969564",region:"Americas"},Colorado:{id:"143342268",region:"Americas"},Connecticut:{id:"399315994",region:"Americas"},Delaware:{id:"1422201926",region:"Americas"},"District of Columbia":{id:"1144117229",region:"Americas"},Florida:{id:"684244799",region:"Americas"},Georgia:{id:"509455389",region:"Americas"},Hawaii:{id:"696101150",region:"Americas"},Idaho:{id:"447719464",region:"Americas"},Illinois:{id:"1216244220",region:"Americas"},Indiana:{id:"223918726",region:"Americas"},Iowa:{id:"1028592639",region:"Americas"},Kansas:{id:"70817417",region:"Americas"},Kentucky:{id:"288866569",region:"Americas"},Louisiana:{id:"1336991689",region:"Americas"},Maine:{id:"1193313710",region:"Americas"},Maryland:{id:"1129860959",region:"Americas"},Massachusetts:{id:"606616245",region:"Americas"},Michigan:{id:"1393864828",region:"Americas"},Minnesota:{id:"720299219",region:"Americas"},Mississippi:{id:"1497317423",region:"Americas"},Missouri:{id:"1551304456",region:"Americas"},Montana:{id:"1704099264",region:"Americas"},Nebraska:{id:"993055685",region:"Americas"},Nevada:{id:"1245177279",region:"Americas"},"New Hampshire":{id:"1167896753",region:"Americas"},"New Jersey":{id:"244769832",region:"Americas"},"New Mexico":{id:"635932286",region:"Americas"},"New York":{id:"862197920",region:"Americas"},"North Carolina":{id:"1892973932",region:"Americas"},"North Dakota":{id:"1919663024",region:"Americas"},Ohio:{id:"2030591831",region:"Americas"},Oklahoma:{id:"1257898979",region:"Americas"},Oregon:{id:"314764697",region:"Americas"},Pennsylvania:{id:"297940926",region:"Americas"},"Rhode Island":{id:"825294765",region:"Americas"},"South Carolina":{id:"1118931876",region:"Americas"},"South Dakota":{id:"1048772307",region:"Americas"},Tennessee:{id:"27410066",region:"Americas"},Texas:{id:"1912496581",region:"Americas"},Utah:{id:"1965179579",region:"Americas"},Vermont:{id:"1358201652",region:"Americas"},Virginia:{id:"249416566",region:"Americas"},Washington:{id:"1704352011",region:"Americas"},"West Virginia":{id:"122251567",region:"Americas"},Wisconsin:{id:"1808375659",region:"Americas"},Wyoming:{id:"1746501554",region:"Americas"}};const K={1:"YES",2:"PARTIALLY",3:"NO",4:"UNCLEAR",5:"NA"},F={1:"YES",2:"PARTIAL",3:"NO",4:"UNCLEAR"},$=["Land","Flight","Sea"],H={commerce:{text:"commerce"},foreigners_inbound:{text:"foreignersInbound"},foreigners_outbound:{text:"foreignersOutbound"},local:{text:"local"},nationals_inbound:{text:"nationalsInbound"},nationals_outbound:{text:"nationalsOutbound"},stopovers:{text:"stopovers"},cross_border_workers:{text:"crossBorderWorkers"}},O=[{id:"lockdown_status",label:"Stay Home",translationKey:"home",icon:m},{id:"going_to_shops",label:"Shopping",translationKey:"shopping",icon:A},{id:"city_movement_restriction",label:"Outdoors",translationKey:"outdoors",icon:f},{id:"military_not_deployed",label:"Military",translationKey:"military",icon:b},{id:"attending_religious_sites",label:"Religious Sites",translationKey:"religious",icon:v},{id:"electricity_nominal",label:"Electricity",translationKey:"electricity",icon:y},{id:"going_to_work",label:"Go to Work",translationKey:"work",icon:x},{id:"water_nominal",label:"Water",translationKey:"water",icon:w},{id:"academia_allowed",label:"Go to Schools",translationKey:"schools",icon:E},{id:"internet_nominal",label:"Telecom",translationKey:"internet",icon:k}],V=[{id:1,name:"dailyLife"},{id:2,name:"mobility"},{id:3,name:"reports"}];class Y extends o{render(i){var e,a;let{i18n:n}=i,{coronaData:t,populationData:o,countryDetails:d,country:l,date:c}=this.props;return[s("h2",{class:"ld-font-subheader"},s("span",null,l)," ",s("span",null,r(c,"dd/MM/yyyy"))),s("dl",{class:"data"},s("div",{class:"data-entry is-half"},s("dt",null,n.t("tdo.tabs.dailyLife.stats.population")),s("dd",{class:"data-value"},isNaN(Number(null==o?void 0:o.Population))?n.t("tdo.tabs.dailyLife.noResults"):null!==(e=Number(null==o?void 0:o.Population).toLocaleString())&&void 0!==e?e:"Error")),s("div",{class:"data-entry is-half"},s("dt",null,n.t("tdo.tabs.dailyLife.stats.max_assembly")),s("dd",{class:"data-value"},null!==(a=null==d?void 0:d.max_gathering)&&void 0!==a?a:n.t("tdo.tabs.dailyLife.noResults"))),s("div",{class:"data-entry is-third"},s("dt",null,n.t("tdo.tabs.dailyLife.stats.cases")),s("dd",{class:"data-value"},(null==t?void 0:t.total_confirmed)?Number(null==t?void 0:t.total_confirmed).toLocaleString():n.t("tdo.tabs.dailyLife.noResults"))),s("div",{class:"data-entry is-third"},s("dt",null,n.t("tdo.tabs.dailyLife.stats.recoveries")),s("dd",{class:"data-value"},(null==t?void 0:t.total_recovered)?Number(null==t?void 0:t.total_recovered).toLocaleString():n.t("tdo.tabs.dailyLife.noResults"))),s("div",{class:"data-entry is-third"},s("dt",null,n.t("tdo.tabs.dailyLife.stats.deaths")),s("dd",{class:"data-value"},(null==t?void 0:t.total_deaths)?Number(null==t?void 0:t.total_deaths).toLocaleString():n.t("tdo.tabs.dailyLife.noResults")))),s(J,{i18n:n,tab:"dailyLife"}),"success"===d.status?[s("h2",{class:"ld-font-subheader last"},n.t("tdo.tabs.dailyLife.subtitle")),s("ul",{class:"measures"},(g=d.measures,O.map(i=>{var e;const a=null==g?void 0:g.find(e=>e.label===i.id);return{...i,value:null!==(e=F[a.value])&&void 0!==e?e:F[4]}})).map(i=>s("li",null,s("div",{class:"measure-wrapper"},s("div",{"aria-labelledby":"measure-label-"+i.id,class:"measure measure-"+i.value,"aria-label":i.value.toLowerCase()},i.icon),s("span",{id:"measure-label-"+i.id,class:"measure-label"},n.t("tdo.tabs.dailyLife.measures."+i.translationKey))))))]:s("div",{class:"dialog"},s("h2",null,"Measures"),"Failed to get data for this country.")];var g}}class W extends o{render(i){let{countryDetails:e}=this.props,{i18n:a}=i;return"success"===e.status?[s("br",null),s("br",null),s(J,{i18n:a,tab:"mobility"}),s("h2",{class:"ld-font-subheader last transport"},a.t("tdo.tabs.mobility.subtitle")),s("dl",null,s("div",{class:"ld-travel"},s("dt",null),s("div",{class:"ld-travel--values"},s("dd",{class:"ld-travel--val-icon"},u),s("dd",{class:"ld-travel--val-icon"},p),s("dd",{class:"ld-travel--val-icon"},h))),Object.keys(e.travel).map((i,r)=>s("div",{class:"ld-travel"},s("dt",null,a.t("tdo.tabs.mobility.measures."+H[i].text)),s("div",{class:"ld-travel--values"},e.travel[i].map((i,e)=>{var a,r,n,t,o;return s("dd",{"aria-label":$[e]+": "+(null!==(a=null===(r=K[i])||void 0===r?void 0:r.toLowerCase())&&void 0!==a?a:K[4].toLowerCase()),"data-tooltip":null!==(n=null===(t=K[i])||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:K[4].toLowerCase(),class:"ld-travel--symbol ld-travel--val-"+(null!==(o=K[i])&&void 0!==o?o:K[5])})})))))]:[s("div",{class:"dialog"},s("h2",null,"Measures"),"Failed to get data for this country.")," "]}}class J extends o{render(i){let{i18n:e,tab:a}=i;return s("div",{class:"legend ld-font-legend"},s("dl",null,s("div",{class:"legend-item"},s("dt",{class:"legend-green","aria-label":"green"}),s("dd",null,e.t(`tdo.tabs.${a}.measureValues.3`))),s("div",{class:"legend-item"},s("dt",{class:"legend-yellow","aria-label":"yellow"}),s("dd",null,e.t(`tdo.tabs.${a}.measureValues.2`))),s("div",{class:"legend-item"},s("dt",{class:"legend-red","aria-label":"red"}),s("dd",null,e.t(`tdo.tabs.${a}.measureValues.1`))),s("div",{class:"legend-item"},s("dt",{class:"legend-gray","aria-label":"gray"}),s("dd",null,e.t(`tdo.tabs.${a}.measureValues.4`)))))}}class q extends o{render(i){let{i18n:e}=i;return s("div",{class:j},s("h3",null,e.t("tdo.tabs.reports.subtitle")),s("div",{class:"placeholder"}))}}export default class extends o{constructor(i){super(i),this.changeTab=this.changeTab.bind(this),this.state={currentTab:1}}async componentDidUpdate(i){if(this.props.date!==i.date){const{startDate:i,endDate:e}=this.props;this.setState({coronaData:await M.getCountry({iso2:this.props.iso2,date:this.props.date,startDate:i,endDate:e}),countryDetails:await D.getDetails({iso2:this.props.iso2,date:this.props.date,startDate:i,endDate:e})})}}async componentWillMount(){const{startDate:i,endDate:e}=this.props;this.setState({coronaData:await M.getCountry({iso2:this.props.iso2,date:this.props.date,startDate:i,endDate:e}),populationData:await C.getPopulation(),countryDetails:await D.getDetails({iso2:this.props.iso2,date:this.props.date,startDate:i,endDate:e})})}changeTab(i){this.setState({currentTab:i})}render(e,{coronaData:a,populationData:r,countryDetails:n}){var t;let{i18n:o}=this.props,u=B[this.props.territory];var p;if(!navigator.onLine&&("success"!==(null==a?void 0:a.status)||"success"!==(null==r||null===(p=r.data)||void 0===p?void 0:p.status)||"success"!==(null==n?void 0:n.status)))return s("div",{class:"countryInfo "+l},d,s("b",null,"You are not connected to the internet"),s("p",null,"Information for this country can't be displayed because you are currently offline. Please check your internet connection."));return a||r||n||!navigator.onLine?[s("div",{class:z},V.map(i=>s("div",{onClick:()=>this.changeTab(i.id),class:"tab "+(this.state.currentTab===i.id?"active":"")},e.i18n.t(`tdo.tabs.${i.name}.name`))),s("button",{onClick:this.props.onClose},g)),s("div",{class:"countryInfo "+G},1===this.state.currentTab?s(Y,{date:this.props.date,country:this.props.country,coronaData:null===(t=a.data)||void 0===t?void 0:t.find(e=>function(e,a){i(2,arguments);var r=L(e),n=L(a);return r.getTime()===n.getTime()}(new Date(e.last_updated),this.props.date)),populationData:null==r?void 0:r.data[this.props.iso2],countryDetails:n,i18n:o}):2===this.state.currentTab?s(W,{countryDetails:n,i18n:o}):s(q,{i18n:o}),s("div",{class:"link-container"},s("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:u?"https://docs.google.com/a/theiofoundation.org/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit#gid="+u.id:"tiof.click/LockdownData"},e.i18n.t("tdo.contributionLinks.firstLink")),s("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:`https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform?entry.333088473=${u?u.region:"REGION"}&entry.1690056710=${this.props.territory}`},e.i18n.t("tdo.contributionLinks.secondLink")),s("a",{class:"ld-link",target:"_blank",rel:"noopener noreferrer",href:"#"},e.i18n.t("tdo.contributionLinks.thirdLink"))))]:s("div",{class:"countryInfo loader "+c},_)}}
