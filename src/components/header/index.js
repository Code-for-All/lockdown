import { h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/images/lockdown.png';
import style from './style';
import twitterIcon from '../../assets/icons/twitter.svg';
import downloadIcon from '../../assets/icons/download.svg';

const Header = () => (
  <header class={style.header}>
    <a href="">
      <img src={logo} alt="Lockdown, information about current lockdown state of different countries" width="112" height="28" />
    </a>

    <h1 class={style.heading}>COVID-19 WORLD LOCKDOWNS</h1>
  </header>
);

export default Header;
