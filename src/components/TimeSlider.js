import { html } from 'htm/preact';
import { Component, createRef } from 'preact';
import css from 'csz';
import format from 'date-fns/format';

import DatePicker from './DatePicker.js';

const widthSpaces = [7.5, 16, 24.5, 33, 41.5, 50, 58.5, 67, 75.5, 84, 94];

function toSliderStringShort(date) {
  return format(date, 'dd MMM');
}
function toSliderString(date) {
  return format(date, 'dd MMMM yyyy');
}

const sliderWrapper = css`
  & {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 450px;
    z-index: 1000;
    height: fit-content;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 4px 11px 3px rgba(0, 0, 0, 0.39);
    border-radius: 25px;
    /*padding: 0px 6%;*/
    @media (max-width: 960px) {
      bottom: 10px;
      left: 0;
      right: 0;
      width: 90vw;
      max-width:450px;
    }
    & > div.countryInfo {
      z-index: 10;
      transition: 0.5s;
      height: calc(100vh - 190px);
      max-height: 420px;
    }
  }
`;

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
    .dark &{
      background-color: #333333;
    }
    & {
        height: 50px;
        padding: 0px 85px;
        border-radius: 25px;
        background-color: white;
        display:flex
        width: 100%;
        position: relative;
        justify-content: center
        align-items: center
        &.open{
          border-top: 0px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
        @media (max-width: 960px) {
            & {
              padding: 0 85px;
            }
        }
        & > .overlay{
          height: 100vh;
          @media (max-width: 960px) {
            top: calc(-100vh + 100% + 20px);
            left: -6%;
          }
          top: calc(-100vh + 100% + 80px);
          left: -17%;
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
    bottom: 0;
  }
  input[type='range']:focus {
    outline: none;
    box-shadow: 0 0 0px 0px var(--ld-focus) !important;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: rgba(201, 201, 201, 0.733);
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: #333333;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
    .dark & {
      background: #ffffff;
    }
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
    height: 3px;
    cursor: pointer;
    background: rgba(201, 201, 201, 0.733);
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type='range']::-moz-range-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: #333333;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #bcbcbc;
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
  }
  input[type='range']::-ms-fill-upper {
    background: rgba(201, 201, 201, 0.733);
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
  }
  input[type='range']::-ms-thumb {
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9999;
    position: relative;

    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: #333333;
    cursor: pointer;
    height: 6.8px;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: rgba(201, 201, 201, 0.733);
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #d6d6d6;
  }
`;
const tooltipCss = css`
  .dark & {
    color: white;
  }
  & {
    font-weight: 600;
    font-size: 12px;
    color: #333333;
    position: absolute;
    top: 17px;
    @media (max-width: 960px) {
      top: 17px;
      &.first {
        left: 25px;
      }
      &.last {
        right: 25px;
      }
    }
    &.first {
      left: 25px;
    }
    &.last {
      right: 25px;
    }
  }
`;
const sliderSelector = css`
  .dark & span {
    color: white;
    background: #333333;
    &::after {
      background-color: #333333;
    }
  }
  & {
    position: absolute;
    @media (max-width: 960px) {
      top: -27px;
    }
    top: -27px;
    left: 24.5%;
    z-index: 999;
    width: fit-content;
    transform: translate(-24.5%, 0);
    background: transparent;
    font-size: 1rem;
    padding: 0 29px 0 21px;
    & span {
      border: 0px solid #8c8c8c;
      border-radius: 30px;
      position: relative;
      background: #ffffff;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 600;
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 12px;
        height: 12px;
        background: #ffffff;
        border-right: 0px solid #8c8c8c;
        border-bottom: 0px solid #8c8c8c;
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
const popBtn = css`
  & {
    content: '';
    position: absolute;
    height: 25px;
    width: 25px;
    outline: none;
    border: 0px;
    border-radius: 25px;
    background: #ffffff;
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.45);
    z-index: 9;
    bottom: 18px;
    display:none;
    @media (max-width: 960px) {
      bottom: 11px;
    }
    @media (max-width: 960px) and (min-width: 576px) {
      bottom: 11px);
      &.first {
        left: calc(12% + 11px) !important;
      }
      &.last {
        right: calc(12% + 11px) !important;
      }
    }
    &.first {
      @media (max-width: 960px) {
        left: calc(12% + 4px);
      }
      left: calc(0% + 38px);
    }
    &.last {
      @media (max-width: 960px) {
        right: calc(12% + 4px);
      }
      right: calc(0% + 38px);
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
    console.log(this.props.children);
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
      currentSelectedDay: toSliderString(date),
      firstDay: toSliderStringShort(days[0]),
      lastDay: toSliderStringShort(days[days.length - 1]),
    });
  }
  onSliderChange(e) {
    const { currentDateValue, currentSliderRange } = this.state;
    const sliderDOM = this.dateRef.current;
    const newValue = Number(e.target.value);
    let newPosition = widthSpaces[newValue];
    sliderDOM.style.left = `${newPosition}%`;
    sliderDOM.style.transform = `translate(-${newPosition}%, 0)`;
    this.setState(
      {
        currentDateValue: newValue,
        currentPosition: newPosition,
        currentSelectedDay: toSliderString(currentSliderRange[newValue]),
      },
      this.submitChanges
    );
  }
  onBtnClick(range) {
    // ? I disabled the calendar just for the hackaton period
    /*
    this.setState({
      showDatePicker: true,
      datePickerPosition: range,
    });
    */
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
      currentSelectedDay: toSliderString(date),
      firstDay: toSliderStringShort(days[0]),
      lastDay: toSliderStringShort(days[days.length - 1]),
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
      <div class="sliderWrapper ${sliderWrapper}">
        ${this.props.children}
        <div class="${selectStyles} ${rangeStyles} ${this.props.children !== '' ? 'open' : ''}">
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
      </div>
    `;
  }
}
