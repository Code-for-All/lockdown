import { Component, h } from 'preact';

export class Lazy extends Component {
  async componentWillMount() {
    const module = await this.props.component();
    const Component = module.default || module;
    this.setState({ Component });
  }

  render({ props }, { Component }) {
    return h(Component, props);
  }
}
