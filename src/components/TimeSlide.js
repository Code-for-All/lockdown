import { html } from 'htm/preact';
import { Component, createRef } from 'preact';
import css from 'csz';

import DatePicker from './DateRangePicker.js';

const widthSpaces = [7.5, 16, 24.5, 33, 41.5, 50, 58.5, 67, 75.5, 84, 94];
Date.prototype.toSliderString = function () {
  let oldDate = this.toISOString().split('T')[0];
  let newDate = oldDate.split('-');
  let year = newDate[0];
  newDate[0] = newDate[2];
  newDate[2] = year;
  return newDate.join('/');
};

const selectStyles = css`
    @keyframes fadeOutLeft {
        from {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
        }
    }
    @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translate3d(-100%, 0, 0);
        }
      
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    @keyframes fadeOutRight {
        from {
          opacity: 1;
        }
      
        to {
          opacity: 0;
          transform: translate3d(100%, 0, 0);
        }
      }
    @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translate3d(100%, 0, 0);
        }
      
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    & {
        position: absolute;
        bottom: 80px;
        left: calc(((100vw - (80vw - 400px))/2) + 200px);
        margin-left:auto;
        margin-right:auto;
        z-index: 1000;
        width: calc(80vw - 400px);
        min-height: 10vh;
        background-color: white;
        padding: 0px 6%
        padding-top: 6%;
        padding-bottom: 1.5%;
        border-radius: 20px;
        display:flex
        justify-content: center
        align-items: center
        -webkit-box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.39);
        -moz-box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.39);
        box-shadow: 0px 4px 5px 2px rgba(0,0,0,0.39);
        @media (max-width: 960px) {
            & {
              /*top: 65vh;*/
              bottom: 80px;
              left:0;
              right:0;
              width: 90vw;
              padding: 0px 12%;
              padding-top: 11vh;
              padding-bottom: 3%;
            }
        & > .overlay{
          height: 100vh;
          top: calc(-100vh + 100% + 20px);
          left: -6%;
        }
        & > .calendar{
            top: 0;
            bottom: calc(300% + 10px);
            width: 300px;
            height: fit-content;
            display: none;
            tansition: 0.3s;
            &.left{
                left: 0;
                &.hide{
                  animation: fadeOutLeft 0.3s forwards !important;
                  animation-delay: 0.1s !important;
                }
                &.show{
                    animation: fadeInLeft 0.3s;
                }
            }
            &.right{
                right: 0;
                &.hide{
                  animation: fadeOutRight 0.3s forwards !important;
                  animation-delay: 0.1s !important;
                }
                &.show{
                  animation: fadeInRight 0.3s;
                }
            }
        }
    }
`;
const rangeStyles = css`
  input[type='range'] {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    margin: 15.6px 0;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    background: rgba(201, 201, 201, 0.733);
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-webkit-slider-thumb {
    /*box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;*/
    /*border: 1.8px solid #00001e;*/
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 38px;
    width: 38px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -15.6px;
    &::before {
      content: 'Say Cheese';
      color: red;
    }
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #d6d6d6;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    background: rgba(201, 201, 201, 0.733);
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-moz-range-thumb {
    /*box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;*/
    /*border: 1.8px solid #00001e;*/
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 38px;
    width: 38px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #bcbcbc;
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
  }
  input[type='range']::-ms-fill-upper {
    background: rgba(201, 201, 201, 0.733);
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
  }
  input[type='range']::-ms-thumb {
    /*box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;*/
    /*border: 1.8px solid #00001e;*/
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 38px;
    width: 38px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
    height: 6.8px;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: rgba(201, 201, 201, 0.733);
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #d6d6d6;
  }
  /*input[type=range]::before{
      content: "";
      position: absolute;
      height: 38px;
      width: 38px;
      top: -16px;
      border-radius: 38px;
      background: #ffffff;
      cursor: pointer;
      -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
      -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
      box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
      pointer-events: none;
  }
  input[type=range]::after{
    content: "";
    position: absolute;
    height: 38px;
    width: 38px;
    top: -16px;
    right: 0px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    pointer-events: none;
  }*/
`;
const tooltipCss = css`
  & {
    font-weight: bold;
    font-size: 14px;
    color: #8c8c8c;
    position: absolute;
    top: 40%;
    &.first {
      left: calc(12% - 15px);
    }
    &.last {
      right: calc(12% - 15px);
    }
  }
`;
const sliderSelector = css`
  & {
    position: absolute;
    top: 20%;
    left: 24.5%;
    z-index: 999;
    width: fit-content;
    transform: translate(-24.5%, 0);
    background: #ffffff;
    & span {
      border: 2px solid #8c8c8c;
      border-radius: 7px;
      position: relative;
      background: #ffffff;
      padding: 10px 5px;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -9px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 15px;
        height: 15px;
        background: #ffffff;
        border-right: 2px solid #8c8c8c;
        border-bottom: 2px solid #8c8c8c;
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    }
  }
`;
const popBtn = css`
  & {
    content: '';
    position: absolute;
    height: 38px;
    width: 38px;
    bottom: calc(10% - 1px);
    outline: none;
    border: 0px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9;
    &.first {
      left: calc(12% + 4px);
    }
    &.last {
      right: calc(12% + 4px);
    }
    &:active {
      background-color: rgb(199, 198, 198);
      outline: none;
    }
  }
`;
export default class CountryInfo extends Component {
  constructor() {
    super();
    this.state = {
      currentDateValue: 2,
      currentPosition: 24.5,
      datePickerPosition: 'left',
      showDatePicker: false,
      currentSelectedDay: '',
      firstDay: '',
      lastDay: '',
      currentSliderRange: [],
    };
    this.dateRef = createRef();
    this.range = createRef();
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onChooseDate = this.onChooseDate.bind(this);
    this.calendarWillClose = this.calendarWillClose.bind(this);
    this.closeDatePicker = this.closeDatePicker.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }
  componentDidMount() {
    let date = new Date();
    let days = [];
    let plusDays = 7;
    for (let i = 0; i < 11; i++) {
      if (i < 2) {
        days.push(this.rangePreProcces(date, i == 0 ? -13 : -7));
      } else if (i !== 2) {
        days.push(this.rangePreProcces(date, plusDays));
        plusDays += 7;
      } else {
        days.push(date);
      }
    }
    this.setState({
      currentSliderRange: days,
      currentSelectedDay: date.toSliderString(),
      firstDay: days[0].toSliderString(),
      lastDay: days[days.length - 1].toSliderString(),
    });
  }
  onSliderChange(e) {
    const { currentDateValue, currentSliderRange } = this.state;
    const sliderDOM = this.dateRef.current;
    const newValue = Number(e.target.value);
    let newPosition = widthSpaces[newValue];
    sliderDOM.style.left = `${newPosition}%`;
    sliderDOM.style.transform = `translate(-${newPosition}%, 0)`;
    this.setState({
      currentDateValue: newValue,
      currentPosition: newPosition,
      currentSelectedDay: currentSliderRange[newValue].toSliderString(),
    });
  }
  onBtnClick(range) {
    this.setState({
      showDatePicker: true,
      datePickerPosition: range,
    });
  }
  onChooseDate(date) {
    const sliderDOM = this.dateRef.current;
    this.calendarWillClose();
    let days = [];
    let plusDays = 7;
    for (let i = 0; i < 11; i++) {
      if (i < 2) {
        days.push(this.rangePreProcces(date, i == 0 ? -13 : -7));
      } else if (i !== 2) {
        days.push(this.rangePreProcces(date, plusDays));
        plusDays += 7;
      } else {
        days.push(date);
      }
    }
    sliderDOM.style.left = `${24.5}%`;
    sliderDOM.style.transform = `translate(-${24.5}%, 0)`;
    this.setState({
      currentSliderRange: days,
      currentSelectedDay: date.toSliderString(),
      firstDay: days[0].toSliderString(),
      lastDay: days[days.length - 1].toSliderString(),
      currentDateValue: 2,
      currentPosition: 24.5,
    });
  }
  calendarWillClose() {
    this.setState(
      {
        datePickerPosition: this.state.datePickerPosition + ' hide',
      },
      () => setTimeout(() => this.closeDatePicker(), 400)
    );
  }
  closeDatePicker() {
    this.setState({
      showDatePicker: false,
      datePickerPosition: this.state.datePickerPosition.replace(' hide', ''),
    });
  }
  rangePreProcces(date, days) {
    let newDate = new Date();
    newDate.setDate(date.getDate() + days);
    return newDate;
  }
  submitChanges() {
    const { currentSliderRange, currentDateValue } = this.state;
    this.props.onChange(currentSliderRange[currentDateValue], currentSliderRange[0], currentSliderRange[currentSliderRange.length - 1]);
  }
  render(_) {
    return html`
      <div class="${selectStyles} ${/*cssStyles*/ rangeStyles}">
        <${DatePicker}
          close=${this.calendarWillClose}
          onSelect=${this.onChooseDate}
          show=${this.state.showDatePicker}
          customClass=${this.state.datePickerPosition}
        />
        <div class="${sliderSelector}" ref="${this.dateRef}"><span>${this.state.currentSelectedDay}</span></div>
        <span class="first ${tooltipCss}">${this.state.firstDay}</span>
        <button onClick=${(e) => this.onBtnClick('left')} class="first ${popBtn}"></button>
        <input
          ref=${this.range}
          onChange=${this.submitChanges}
          onInput=${this.onSliderChange}
          type="range"
          min="0"
          max="10"
          step="1"
          value=${this.state.currentDateValue}
        />
        <button onClick=${(e) => this.onBtnClick('right')} class="last ${popBtn}"></button>
        <span class="last ${tooltipCss}">${this.state.lastDay}</span>
      </div>
    `;
  }
}
