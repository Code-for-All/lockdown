import { html } from 'htm/preact';
import { Component } from 'preact';
import { add, format } from 'date-fns';
import rSlider from '../libs/rslider.min.js';

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
      onChange: function(vals) {}
    });
  }

  render() {
    return html`
      <div class="ld-slider">
        <input type="text" id="slider" class="slider" />
      </div>
    `;
  }
}

export default Slider;
