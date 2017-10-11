import React, { Component } from 'react';
import data from './data';

export default class RollingData extends Component {
  state = {
    data,
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState({
        data: this.state.data.map(item => ({ x: item.x, y: Math.random() })),
      });
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    return this.props.children(this.state.data);
  }
}
