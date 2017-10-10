import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineSeries,
  LineMarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
} from 'react-vis';

const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];

class RollingData extends Component {
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

storiesOf('react-vis', module)
.add('LineSeries - simple', () => (
    <XYPlot height={300} width={600}>
      <LineSeries data={data} />
    </XYPlot>
))
.add('LineSeries - with axis', () => (
  <XYPlot height={300} width={600}>
    <XAxis />
    <YAxis />
    <LineSeries data={data} />
  </XYPlot>
))
.add('LineSeries - with grid lines', () => (
  <XYPlot height={300} width={600}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <LineSeries data={data} />
  </XYPlot>
))
.add('VerticalBarSeries', () => (
  <XYPlot height={300} width={600}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <VerticalBarSeries data={data} />
  </XYPlot>
))
.add('Multi-series', () => (
  <XYPlot height={300} width={600}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <VerticalBarSeries data={data} />
    <LineSeries data={data} />
  </XYPlot>
))
.add('Custom style', () => (
  <XYPlot height={300} width={600}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <VerticalBarSeries data={data} style={{ strokeWidth: 3, fill: '#ffad93' }} />
    <LineMarkSeries
      strokeStyle="dashed"
      style={{ stroke: "rgba(115, 63, 138, 0.5)", mark: { fill: 'white' } }}
      data={data}
    />
    <LineMarkSeries color="red" data={data.map(i => ({ x: i.x, y: i.y + 1 }))} />
  </XYPlot>
))
.add('Live data', () => (
  <RollingData>
  { newData => (
      <XYPlot height={300} width={600}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={newData} />
        <LineSeries data={newData} />
      </XYPlot>
    ) }
  </RollingData>
))
.add('Live data with animation', () => (
  <RollingData>
  { newData => (
      <XYPlot height={300} width={600}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={newData} animation />
        <LineSeries data={newData} animation />
      </XYPlot>
    ) }
  </RollingData>
))
