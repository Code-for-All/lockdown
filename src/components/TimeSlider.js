import { html } from 'htm/preact';
import { Component, createRef } from 'preact';
import css from 'csz';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import { enUS } from 'date-fns/locale';

import DatePicker from './DatePicker.js';
import { calendar } from '../assets/icons/icons.js';

import { getAllFNSLanguages } from '../locale/i18nUtils';

const widthSpaces = [7.5, 16, 24.5, 33, 41.5, 50, 58.5, 67, 75.5, 84, 94];

let languages = false;

function toSliderStringShort(date, currentLanguage) {
  let isoLanguage = currentLanguage;
  if (currentLanguage !== undefined) {
    isoLanguage = currentLanguage.replace('-', '');
    if (isoLanguage === 'zhHK') isoLanguage = 'zhTW';
    if (languages[isoLanguage] === undefined || languages[isoLanguage] === null) {
      isoLanguage = currentLanguage.split('-')[0];
      if (languages[isoLanguage] === undefined || languages[isoLanguage] === null) {
        isoLanguage = 'enUS';
      }
    }
  } else {
    isoLanguage = 'enUS';
  }
  return format(date, 'dd MMM', {
    locale: languages ? languages[isoLanguage] : enUS,
  });
}
function toSliderString(date, currentLanguage) {
  let isoLanguage = currentLanguage;
  if (currentLanguage) {
    isoLanguage = currentLanguage.replace('-', '');
    if (languages[isoLanguage] === undefined || languages[isoLanguage] === null) {
      isoLanguage = currentLanguage.split('-')[0];
      if (languages[isoLanguage] === undefined || languages[isoLanguage] === null) {
        isoLanguage = 'enUS';
      }
    }
  } else {
    isoLanguage = 'enUS';
  }
  return format(date, 'dd MMMM yyyy', {
    locale: languages ? languages[isoLanguage] : enUS,
  });
}

const sliderWrapper = css`
  & {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 720px;
    z-index: 1000;
    height: fit-content;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.39);
    box-shadow: 0px 4px 11px 3px rgba(0, 0, 0, 0.39);
    border-radius: 25px;
    transition: max-height 0.25s ease-out;
    max-height: 70px;
    &.open {
      max-height: calc(100vh - 110px);
      height: 600px;
      transition: max-height 0.25s ease-in;
      @media (max-width: 960px) {
        /*max-height: calc(100vh - 45px);*/
        max-height: 90%;
      }
    }
    /*padding: 0px 6%;*/
    @media (max-width: 960px) {
      /*bottom: 30px;*/
      bottom: 5%;
      left: 0;
      right: 0;
      width: 90vw;
      max-width: 450px;
    }
    & > div.countryInfo {
      z-index: 10;
      height: 100%;
      @media (max-width: 960px) {
        /*height: calc(100vh - 150px);
        max-height: calc(100vh - 150px);*/
      }
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
  .dark & {
    background-color: #333333;
  }
  & {
    height: 50px;
    padding: 0px 110px;
    @media (max-width: 960px) {
      padding: 0px 85px;
    }
    border-radius: 25px;
    background-color: white;
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    &.open {
      border-top: 0px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    @media (max-width: 960px) {
      & {
        padding: 0 85px;
      }
    }
    & > .overlay {
      height: 100vh;
      @media (max-width: 960px) {
        top: calc(-100vh + 100% + 20px);
        left: -6%;
      }
      top: calc(-100vh + 100% + 65px);
      left: calc((100% - 100vw) / 2);
    }
    & > .calendar {
      bottom: 60px;
      width: 300px;
      height: fit-content;
      display: none;
      tansition: 0.3s;
      &.left {
        left: 0;
        &.hide {
          animation: fadeOutLeft 0.3s forwards !important;
          animation-delay: 0.1s !important;
        }
        &.show {
          animation: fadeInLeft 0.3s;
          display: table;
        }
      }
      &.right {
        right: 0;
        &.hide {
          animation: fadeOutRight 0.3s forwards !important;
          animation-delay: 0.1s !important;
        }
        &.show {
          animation: fadeInRight 0.3s;
        }
      }
    }
  }
`;
const rangeStyles = css`
  input {
    background: transparent;
  }
  input[type='range'] {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    margin: 15.6px 0;
    bottom: 0;
    color: #e0e0e0;
    .dark & {
      color: #4f4f4f;
    }
  }
  input[type='range']:focus {
    outline: none;
    box-shadow: 0 0 0px 0px var(--ld-focus) !important;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
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
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
    background: #333333;
    .dark & {
      background: #ffffff;
    }
    &::before {
      content: 'Say Cheese';
      color: red;
    }
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #bdbdbd;
    .dark & {
      background: #828282;
    }
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
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
    .dark & {
      background: #ffffff;
    }
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
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
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
    .dark & {
      background: #ffffff;
    }
    cursor: pointer;
    height: 6.8px;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #e0e0e0;
    .dark & {
      background: #4f4f4f;
    }
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
    display: flex;
    align-items: center;
    top: 12px;
    & span:first-child {
      margin-right: 5px;
    }
    & svg {
      height: 18px;
    }
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 960px) {
      top: 12px;
      &.first {
        left: 17px !important;
      }
      &.last {
        right: 17px !important;
      }
    }
    &.first {
      left: 40px;
    }
    &.last {
      right: 40px;
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
      top: -33px;
      padding: 0;
    }
    top: -33px;
    left: 24.5%;
    z-index: 999;
    width: fit-content;
    transform: translate(-24.5%, 0);
    background: transparent;
    font-size: 1rem;
    padding: 0;
    width: max-content;
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

const firstDayDefaultOffset = 7 * 5;

export default class CountryInfo extends Component {
  constructor() {
    super();
    this.state = {
      currentDateValue: firstDayDefaultOffset,
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
    this.container = createRef();
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onChooseDate = this.onChooseDate.bind(this);
    this.calendarWillClose = this.calendarWillClose.bind(this);
    this.closeDatePicker = this.closeDatePicker.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
    this.onPressKey = this.onPressKey.bind(this);
    this.updateDates = this.updateDates.bind(this);
  }
  async componentWillMount() {
    languages = await getAllFNSLanguages();
  }
  componentDidMount() {
    window.addEventListener('keydown', this.onPressKey);
    let days = [];
    let date = addDays(new Date(), -firstDayDefaultOffset);
    let totalDays = 70;

    for (let i = 1; i <= totalDays; i++) {
      days.push(date);
      date = addDays(date, 1);
    }

    const sliderDOM = this.dateRef.current;
    const rangeDOM = this.range.current;
    const containerDOM = this.container.current;
    let basicWidth = containerDOM.offsetWidth - rangeDOM.offsetWidth;
    let finalWidth = basicWidth / 2 - sliderDOM.offsetWidth / 4;
    let stepsWidth = rangeDOM.offsetWidth / 70;
    sliderDOM.style.left = `${finalWidth + stepsWidth * (firstDayDefaultOffset - 3)}px`;

    this.setState({
      currentSliderRange: days,
      currentSelectedDay: toSliderString(new Date(), this.props.i18n.locale),
      firstDay: toSliderStringShort(days[0], this.props.i18n.locale),
      lastDay: toSliderStringShort(days[days.length - 1], this.props.i18n.locale),
    });
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onPressKey);
  }
  componentDidUpdate(previousProps, previousState, snapshot) {
    if (previousProps.i18n !== this.props.i18n) {
      this.updateDates(previousState);
    }
  }
  onPressKey(e) {
    let inputRange = this.range.current;
    switch (e.code) {
      case 'ArrowLeft':
        e.preventDefault();
        if (this.range.current.value > 0) {
          this.range.current.value = this.range.current.value - 1;
          this.onSliderChange({ target: { value: this.range.current.value } });
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (this.range.current.value < 69) {
          this.range.current.value = Number(this.range.current.value) + 1;
          this.onSliderChange({ target: { value: this.range.current.value } });
        }
        break;
      default:
        break;
    }
  }
  onSliderChange(e) {
    const { currentDateValue, currentSliderRange } = this.state;
    const sliderDOM = this.dateRef.current;
    const rangeDOM = this.range.current;
    const containerDOM = this.container.current;
    let newValue = e.target.value;
    let basicWidth = containerDOM.offsetWidth - rangeDOM.offsetWidth;
    let finalWidth = basicWidth / 2 - sliderDOM.offsetWidth / 4;
    let stepsWidth = rangeDOM.offsetWidth / 70;
    let newPosition = widthSpaces[newValue];
    sliderDOM.style.left = `${finalWidth + stepsWidth * newValue}px`;
    // sliderDOM.style.transform = `translate(-${finalWidth + stepsWidth * (newValue+1)}px, 0)`;
    this.setState(
      {
        currentDateValue: newValue,
        currentPosition: newPosition,
        currentSelectedDay: toSliderString(currentSliderRange[newValue], this.props.i18n.locale),
      },
      this.submitChanges
    );
  }
  onBtnClick(range) {
    this.setState({
      showDatePicker: true,
      datePickerPosition: range,
    });
  }
  onChooseDate(date) {
    const sliderDOM = this.dateRef.current;
    const rangeDOM = this.range.current;
    const containerDOM = this.container.current;
    let basicWidth = containerDOM.offsetWidth - rangeDOM.offsetWidth;
    let finalWidth = basicWidth / 2 - sliderDOM.offsetWidth / 4;
    let stepsWidth = rangeDOM.offsetWidth / 70;
    sliderDOM.style.left = `${finalWidth + stepsWidth * ((this.state.datePickerPosition === 'left' ? 0 : 69) + 0.5)}px`;
    this.calendarWillClose();
    let days = [];
    if (this.state.datePickerPosition === 'left') {
      let plusDays = 1;
      for (let i = 1; i <= 70; i++) {
        if (i === 1) {
          days.push(date);
        } else {
          days.push(this.rangePreProcces(date, plusDays));
          plusDays++;
        }
      }
    } else {
      let lessDays = 69;
      for (let i = 1; i <= 70; i++) {
        if (i === 70) {
          days.push(date);
        } else {
          days.push(this.rangePreProcces(date, -1 * lessDays));
          lessDays--;
        }
      }
    }
    this.setState(
      {
        currentSliderRange: days,
        currentSelectedDay: toSliderString(date, this.props.i18n.locale),
        firstDay: toSliderStringShort(days[0], this.props.i18n.locale),
        lastDay: toSliderStringShort(days[days.length - 1], this.props.i18n.locale),
        currentDateValue: this.state.datePickerPosition === 'left' ? 0 : 69,
        currentPosition: 24.5,
      },
      this.submitChanges
    );
  }
  updateDates(previousState) {
    const { currentDateValue, currentSliderRange } = previousState;
    this.setState({
      currentSelectedDay: toSliderString(currentSliderRange[currentDateValue], this.props.i18n.locale),
      firstDay: toSliderStringShort(currentSliderRange[0], this.props.i18n.locale),
      lastDay: toSliderStringShort(currentSliderRange[currentSliderRange.length - 1], this.props.i18n.locale),
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
    let newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }
  submitChanges() {
    const { currentSliderRange, currentDateValue } = this.state;
    this.props.onChange(currentSliderRange[currentDateValue], currentSliderRange[0], currentSliderRange[currentSliderRange.length - 1]);
  }
  render(_) {
    return html`
      <div class="sliderWrapper ${sliderWrapper} ${this.props.children !== '' ? 'open' : ''}" ref=${this.container}>
        ${this.props.children}
        <div class="${selectStyles} ${rangeStyles} ${this.props.children !== '' ? 'open' : ''}">
          <${DatePicker}
            close=${this.calendarWillClose}
            onSelect=${this.onChooseDate}
            show=${this.state.showDatePicker}
            customClass=${this.state.datePickerPosition}
          />
          <div class="${sliderSelector}" ref="${this.dateRef}"><span>${this.state.currentSelectedDay}</span></div>
          <span title="Select Start Date" class="first ${tooltipCss}" onClick=${(e) => this.onBtnClick('left')}>
            <${IconBtn} /> ${this.state.firstDay}</span
          >
          <button onClick=${(e) => this.onBtnClick('left')} class="first ${popBtn}"></button>
          <input
            ref=${this.range}
            onInput=${this.onSliderChange}
            type="range"
            min="0"
            max="69"
            step="1"
            value=${this.state.currentDateValue}
          />
          <span class="last ${popBtn}"></span>
          <span title="Select End Date" class="last ${tooltipCss}"> ${this.state.lastDay}</span>
        </div>
      </div>
    `;
  }
}

class IconBtn extends Component {
  render(_) {
    return html`<span>
      ${calendar}
    </span>`;
  }
}
