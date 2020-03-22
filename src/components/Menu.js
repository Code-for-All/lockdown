import { html } from 'htm/preact';


const info = new URL('../assets/icons/info.svg', import.meta.url).href;
const settings = new URL('../assets/icons/settings.svg', import.meta.url).href;
const refresh = new URL('../assets/icons/refresh.svg', import.meta.url).href;
const add = new URL('../assets/icons/circle-plus.svg', import.meta.url).href;

export const Menu = () => html`
  <div id="menu">
    <div id="desktopMenu">
      i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu i am the menu 
    </div>
    <div id="mobileMenu">
      <img src="${info}" alt="info"/>
      <img src="${settings}" alt="info"/>
      <img src="${refresh}" alt="info"/>
      <img src="${add}" alt="info"/>
    </div>
  </div>
`;
