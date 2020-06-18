import { html } from 'htm/preact';
import { Component, createRef } from 'preact';
import css from 'csz';

import { list, unlock, lock, virus, viruslock } from '../assets/icons/icons.js';

const btnStyle = css`
  & {
    position: absolute;
    bottom: 200px;
    left: 2.5vw;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.1);
    display: flex;
    color: #333333;
    justify-content: center;
    align-items: center;
    padding: 12px;
    .dark & {
      background-color: #333333;
      color: white;
      & .dialog {
        background-color: #333333;
        color: white;
        &.right {
          &::after {
            border-left-color: #333333;
          }
        }
        &.left {
          &::after {
            border-right-color: #333333;
          }
        }
      }
    }
    &:hover {
      cursor: pointer;
    }
    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
    & .dialog {
      display: none;
      transition: 0.2s;
      position: absolute;
      padding: 5px 7px;
      background-color: #fff;
      flex-direction: column;
      color: #333333;
      box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      &.top {
        top: -36%;
        &::after {
          top: 30%;
        }
      }
      &.bottom {
        bottom: -36%;
        &::after {
          top: 71%;
        }
      }
      &.left {
        right: -205px;
        &::after {
          left: 0;
          border-right-color: #fff;
          border-left: 0;
          margin-left: -20px;
        }
      }
      &.right {
        left: -205px;
        &::after {
          right: 0;
          border-left-color: #fff;
          border-right: 0;
          margin-right: -20px;
        }
      }
      &.show {
        display: flex;
      }
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        margin-top: -20px;
      }
      & > div {
        display: flex;
        /*justify-content: space-between;*/
        font-weight: 500;
        align-items: center;
        padding: 9px 0px;
        padding-bottom: 0px;
        &:nth-child(4) {
          padding-bottom: 7.06px;
        }
        &:last-child {
          padding-bottom: 9px;
          & > span {
            &:last-child {
              margin-right: auto;
            }
          }
        }
        & > span {
          margin: 0px 8px;
          & svg {
            height: 20px;
            width: 20px;
          }
          & .color {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            &.red {
              background-color: #eb5757;
            }
            &.orange {
              background-color: #f2994a;
            }
            &.green {
              background-color: #6fcf97;
            }
            &.blue {
              background-color: #78aefc;
            }
            &.gray {
              background-color: #cccccc;
            }
            &.covidstripes {
              background-color: #828282;
              background-image: url(/src/assets/images/stripes-pattern-2.png);
            }
          }
        }
      }
    }
  }
`;

class Legend extends Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
      y: 'bottom',
      x: 'left',
    };
    this.btn = createRef();
    this.onClick = this.onClick.bind(this);
    // ? Add listeners
    this.initBtn = this.initBtn.bind(this);
    // ? Mobile
    this.onTouch = this.onTouch.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  initBtn(ref) {
    this.btn = ref;
    ref.addEventListener('touchmove', this.onTouch);
    ref.addEventListener('touchend', this.onTouchEnd);
  }
  // Mobile
  onTouch(e) {
    let touchLocation = e.targetTouches[0];
    this.btn.style.left = touchLocation.pageX + 'px';
    this.btn.style.top = touchLocation.pageY + 'px';
  }
  onTouchEnd(e) {
    let side = this.state.x;
    let vertical = this.state.y;
    let x = window.innerWidth || window.clientWidth;
    let y = window.innerHeight || window.clientHeight;
    let currentVertical = Number(this.btn.style.top.replace('px', ''));
    let currentSide = Number(this.btn.style.left.replace('px', ''));

    if (currentVertical > y / 2) {
      if (currentVertical >= y - 150) {
        this.btn.style.top = y - 150 + 'px';
      }
      vertical = 'bottom';
    } else {
      if (currentVertical <= 160) {
        this.btn.style.top = 160 + 'px';
      }
      vertical = 'top';
    }
    if (currentSide > x / 2) {
      side = 'right';
      this.btn.style.left = x - 70 + 'px';
    } else {
      side = 'left';
      this.btn.style.left = '10px';
    }
    this.setState({
      x: side,
      y: vertical,
    });
  }

  onClick() {
    this.setState({
      showDialog: !this.state.showDialog,
    });
  }
  render({ i18n }) {
    return html`<div onClick=${this.onClick} draggable="true" ref=${this.initBtn} class="${btnStyle}">
      ${list}
      <div class="dialog ${this.state.showDialog ? 'show' : ''} ${this.state.y} ${this.state.x}">
        <!--Row-->
        <div>
          <span>
            <div class="color green" />
          </span>
          <span>
            ${i18n.t('mapLegend.no')}
          </span>
        </div>
        <!--Row-->
        <div>
          <span>
            <div class="color orange" />
          </span>
          <span>
            ${i18n.t('mapLegend.partial')}
          </span>
        </div>
        <!--Row-->
        <div>
          <span>
            <div class="color red" />
          </span>
          <span>
            ${i18n.t('mapLegend.full')}
          </span>
        </div>
        <!--Row-->
        <div>
          <span>
            <div class="color gray" />
          </span>
          <span>
            ${i18n.t('mapLegend.noData')}
          </span>
        </div>
        <!--Row-->
        <!-- <div>
          <span>
            <div class="color covidstripes" />
          </span>
          <span>
            ${i18n.t('mapLegend.cases')}
          </span>
        </div> -->
      </div>
    </div>`;
  }
}

export default Legend;
