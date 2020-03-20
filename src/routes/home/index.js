import { h } from 'preact';
import WorldMap from '../../components/world-map';
import style from './style';

const Home = () => (
  <div class={style.home}>
    <WorldMap />
  </div>
);

export default Home;
