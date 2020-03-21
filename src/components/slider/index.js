import { h, Component } from 'preact';
import { add, format } from 'date-fns';
import './rslider.min.js';
import style from './style';

const today = new Date().getTime();

const values = [
  'today',
  format(add(today, { days: 1 }), 'yyyy-mm-dd'),
  format(add(today, { days: 2 }), 'yyyy-mm-dd'),
  format(add(today, { days: 3 }), 'yyyy-mm-dd'),
  format(add(today, { days: 4 }), 'yyyy-mm-dd'),
  format(add(today, { days: 5 }), 'yyyy-mm-dd'),
  format(add(today, { days: 6 }), 'yyyy-mm-dd'),
  format(add(today, { weeks: 1 }), 'yyyy-mm-dd'),
  format(add(today, { weeks: 2 }), 'yyyy-mm-dd'),
  format(add(today, { weeks: 3 }), 'yyyy-mm-dd'),
  format(add(today, { months: 1 }), 'yyyy-mm-dd'),
  format(add(today, { months: 2 }), 'yyyy-mm-dd')
];

class Slider extends Component {
  componentDidMount() {
    const slider = new rSlider({
      target: '#slider',
      values: values,
      range: true,
      set: [values[1], values[3]],
      onChange: function(vals) {
        console.log(vals);
      }
    });
  }

  render() {
    return (
      <div class={style.sliderContainer}>
        <div class="card">
          <div class="card-content">
            <input type="text" id="slider" class="slider" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
