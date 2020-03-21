import { h } from 'preact';
import WorldMap from '../../components/world-map';
import Totals from '../../components/totals';
import style from './style';

const Home = () => (
  <div class={style.home}>
    <WorldMap />
    <Totals />
  </div>
);

export default Home;
