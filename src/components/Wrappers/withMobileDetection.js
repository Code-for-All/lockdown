import { Component } from 'preact';
import { html } from 'htm/preact';

export default function withMobileDetection(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isMobile: false,
        daysRange: 70,
      };
    }

    componentWillMount() {
      let width = window.innerWidth || window.clientWidth;
      let isMobile = false;
      let daysRange = 80;
      if (width <= 960) {
        isMobile = true;
        daysRange = 70;
      }
      this.setState({
        isMobile,
        daysRange,
      });
    }

    render(_) {
      return html`<${WrappedComponent} isMobile=${this.state.isMobile} daysRange=${this.state.daysRange} ...${this.props} />`;
    }
  };
}
