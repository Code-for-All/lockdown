import { html } from 'htm/preact';
import { Component,createRef } from 'preact';
import css from 'csz';

import { DateRangePicker } from 'recal';

// Stylesheet for calendar.
// import 'recal/lib/index.css';
// import '@lls/react-light-calendar/dist/index.css';

// import rSlider from 'rslider';
// const {RSlider, RSliderArrowL, RSliderArrowR, RSliderItems, RSliderPagination} = rSlider;

// import rSlider from "../libs/rslider.min";
// import 'rslider/rslider.css';
// import "../../node_modules/rslider/rslider.css"
// const widthSpace = 8.5;

const widthSpaces = [7.5,16,24.5,33,41.5,50,58.5,67,75.5,84,94];

const selectStyles = css`
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
    }
`;
const secondaryPosition = css`
    & {
        @media (max-width: 960px) {
            top: 65vh !important;
            bottom: 0px !important;
        }
    }
`;
const cssStyles = css`
.rs-container * {
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.rs-container {
    font-family: Arial, Helvetica, sans-serif;
    height: 45px;
    position: relative;
}
.rs-container .rs-bg, .rs-container .rs-selected {
    background-color: #eee;
    border: 1px solid #ededed;
    height: 10px;
    left: 0;
    position: absolute;
    top: 5px;
    width: 100%;
    border-radius: 3px;
}
.rs-container .rs-selected {
    /*background-color: #00b3bc;
    border: 1px solid #00969b;*/
    transition: all 0.2s linear;
    width: 0;
    background-color: transparent;
    border: 0px;
}
.rs-container.disabled .rs-selected {
    /*background-color: #ccc;
    border-color: #bbb;*/
    background-color: transparent;
    border: 0px;
}
.rs-container .rs-pointer {
    background-color: #fff;
    border: 1px solid #bbb;
    /*border-radius: 4px;*/
    cursor: pointer;
    /*height: 20px;*/
    height: 30px;
    left: -10px;
    position: absolute;
    /*top: 0;*/
    top: -5px
    transition: all 0.2s linear;
    /*width: 30px;*/
    width: 30px;
    border-radius: 50%;
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    /*box-shadow: inset 0 0 1px #FFF, inset 0 1px 6px #ebebeb, 1px 1px 4px rgba(0, 0, 0, 0.1);*/
}
.rs-container.disabled .rs-pointer {
    border-color: #ccc;
}
.rs-container .rs-pointer::before,
.rs-container .rs-pointer::after {
    /*content: '';*/
    position: absolute;
    width: 1px;
    height: 9px;
    background-color: #ddd;
    left: 12px;
    top: 5px;
}
.rs-container .rs-pointer::after {
    left: auto;
    right: 12px;
}
.rs-container.disabled .rs-pointer {
    cursor: default;
}
.rs-container.sliding .rs-selected,
.rs-container.sliding .rs-pointer {
    transition: none;
}
.rs-container .rs-scale {
    left: 0;
    position: absolute;
    top: 5px;
    white-space: nowrap;
}
.rs-container .rs-scale span {
    float: left;
    position: relative;
}
 .rs-container .rs-scale span{
     &:first-child{
        &::before{
            background-color: white;
            content: "";
            height: 25px;
            left: -12.5px;
            position: absolute;
            top: -7px;
            width: 25px;
            border-radius: 50%;
            -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
            -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
            box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
        }
        & ins{
            position: absolute;
            top: -50px;
            color: rgba(128, 128, 128, 0.637);
        }
    }
     &:last-child{
         width: 27px !important;
        &::before{
            background-color: white;
            content: "";
            height: 25px;
            right: -16.5px;
            position: absolute;
            top: -7px;
            width: 25px;
            border-radius: 50%;
            -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
            -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
            box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
        }
        & ins{
            position: absolute;
            top: -50px;
            right: -30px;
            color: rgba(128, 128, 128, 0.637);
        }
    }
     /*
     &::before {
        background-color: transparent;
        content: "";
        height: 8px;
        left: 0;
        position: absolute;
        top: 10px;
        width: 1px;
    }
     */
}
.rs-container.rs-noscale span::before {
    display: none;
}
.rs-container.rs-noscale span:first-child::before,
.rs-container.rs-noscale span:last-child::before {
    display: block;
}
.rs-container .rs-scale span:last-child {
    margin-left: -1px;
    width: 0px;
}
.rs-container .rs-scale span ins {
    /*color: #333;*/
    color: transparent;
    display: inline-block;
    font-size: 12px;
    margin-top: 20px;
    text-decoration: none;
}
.rs-container.disabled .rs-scale span ins {
    /*color: #999;*/
    color: transparent;
}
.rs-tooltip {
    /*color: #333;*/
    color: rgba(128, 128, 128, 0.637);
    width: auto;
    min-width: 60px;
    height: 30px;
	position: relative;
	background: #fff;
    /*border: 1px solid #00969b;*/
    border: 1.5px solid rgba(128, 128, 128, 0.637);
    border-radius: 20px;
    position: absolute;
    /*transform: translate(-50%, -35px);*/
    transform: translate(-50%, -50px);
    left: 13px;
    text-align: center;
    font-size: 13px;
    padding: 6px 10px 0;
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: rgba(128, 128, 128, 0.637);
        border-bottom: 0;
        margin-left: -10px;
        margin-bottom: -10px;
    }
}
.rs-container.disabled .rs-tooltip {
    border-color: #ccc;
    color: #999;
}
`;

const rangeStyles = css`
input[type=range] {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    margin: 15.6px 0;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    background: rgba(201, 201, 201, 0.733);
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type=range]::-webkit-slider-thumb {
    /*box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;*/
    /*border: 1.8px solid #00001e;*/
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
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
        content: "Say Cheese";
        color: red;
    }
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #d6d6d6;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    background: rgba(201, 201, 201, 0.733);
    border-radius: 0px;
    border: 0px solid rgba(1, 1, 1, 0);
  }
  input[type=range]::-moz-range-thumb {
    /*box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;*/
    /*border: 1.8px solid #00001e;*/
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    z-index: 9999;
    position: relative;

    height: 38px;
    width: 38px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 6.8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #bcbcbc;
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
  }
  input[type=range]::-ms-fill-upper {
    background: rgba(201, 201, 201, 0.733);
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 0px;
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
  }
  input[type=range]::-ms-thumb {
    /*box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;*/
    /*border: 1.8px solid #00001e;*/
    -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
    z-index: 9999;
    position: relative;

    height: 38px;
    width: 38px;
    border-radius: 38px;
    background: #ffffff;
    cursor: pointer;
    height: 6.8px;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: rgba(201, 201, 201, 0.733);
  }
  input[type=range]:focus::-ms-fill-upper {
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
        color: #8C8C8C;
        position: absolute;
        top: 40%;
        &.first{
            left: calc(12% - 15px);
        }
        &.last {
            right: calc(12% - 15px);
        }
    }
  `;
    const sliderSelector = css`
    &{
        position: absolute;
        top: 20%;
        left: 50%;
        z-index: 999;
        width: fit-content;
        transform: translate(-50%, 0);
        background: #FFFFFF;
        & span{
            border: 2px solid #8C8C8C;
            border-radius: 7px;
            position: relative;
            background: #FFFFFF;
            padding: 10px 5px;
            &::after{
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
                background: #FFFFFF;
                border-right: 2px solid #8C8C8C;
                border-bottom: 2px solid #8C8C8C;
                -moz-transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
            }
        }
    }
    `;
    const popBtn = css`
        & {
            content: "";
            position: absolute;
            height: 38px;
            width: 38px;
            bottom: calc(10% - 1px);
            outline: none;
            border: 0px;
            border-radius: 38px;
            background: #ffffff;
            cursor: pointer;
            -webkit-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
            -moz-box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
            box-shadow: 0px 1px 5px 2.5px rgba(0,0,0,0.45);
            z-index: 9;
            &.first{
                left: calc(12% + 4px);
            }
            &.last{
                right: calc(12% + 4px);
            }
            &:active{
                background-color: rgb(199, 198, 198);
                outline: none;
            }
        }
    `;
export default class CountryInfo extends Component {
    constructor() {
        super();
        this.state = {
            currentDateValue: 5,
            currentPosition: 50
        }
        this.dateRef = createRef();
        this.onSliderChange = this.onSliderChange.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
      }
    /*
    var mySlider = new rSlider({
        target: '#sampleSlider',
        values: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        range: true,
        tooltip: true,
        scale: true,
        labels: true,
        set: [2010, 2013]
    });
    */
   componentDidMount() {
    //    let navigator = window.navigator.userAgent;
    //    let useTop = false;
    //    alert(window.navigator.userAgent);
    //    if(navigator.contains() (/\bAndroid 9|\bChrome|\bMobile/g)){
    //        useTop = true;
    //        alert("true");
    //    }else{
    //     alert("false");
    //    }
    //    this.setState({useTop: useTop},console.log(this.state));
    // var mySlider = new rSlider({
    //     target: '#sampleSlider',
    //     values: ["03/10/2008", "03/10/2009", "03/10/2010", "03/10/2011", "03/10/2012", "03/10/2013", "03/10/2014", "03/10/2015","03/10/2016","03/10/2017","03/10/2018"],
    //     range: false,
    //     tooltip: true,
    //     scale: true,
    //     labels: false,
    //     set: ["03/10/2012"]
    // });
    // function onSliderChange(values){
    //     alert("hi");
    //     console.log(values);
    // }
    // mySlider.onChange((values)=>alert("hi"));
    // this.setState({slider:mySlider});
    
   }
   onSliderChange(e){
    //    debugger;
    const {currentDateValue} = this.state;
    const sliderDOM = this.dateRef.current;
    const newValue = Number(e.target.value);
    console.log(`State : ${currentDateValue} -- ${newValue}`)
    let newPosition = widthSpaces[newValue];
    sliderDOM.style.left = `${newPosition}%`;
    sliderDOM.style.transform = `translate(-${newPosition}%, 0)`;
    this.setState({currentDateValue:newValue,currentPosition:newPosition});
   }
   onBtnClick(range){
    alert(range);
   }
   onChange = (startDate, endDate) => this.setState({ startDate, endDate })
    render(_) {
        return html`
            <div class="${selectStyles} ${/*cssStyles*/rangeStyles}">
                <!-- <input class="${selectStyles}" type="text" id="sampleSlider" /> -->
                <div class="${sliderSelector}" ref="${this.dateRef}" ><span>17/04/2020</span></div>
                <span class="first ${tooltipCss}">03/04/2020</span>
                <button onClick=${(e)=>this.onBtnClick("begin")} class="first ${popBtn}"></button>
                <input onInput=${this.onSliderChange} type="range" min="0" max="10" step="1" value=${this.state.currentDateValue}/>
                <button onClick=${(e)=>this.onBtnClick("end")} class="last ${popBtn}"></button>
                <span class="last ${tooltipCss}">29/04/2020</span>
                <${DateRangePicker} startDate=${ this.state.startDate } endDate=${ this.state.endDate } onStartDateSelected=${ ()=>console.log("1") } onEndDateSelected=${ ()=>console.log('2') } />
            </div>
        `;
    }
}