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
  AreaSeries,
} from 'react-vis';

import data from './data';
import RollingData from './RollingData';


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
.add('Sparklines~ish', () => (
  <RollingData>
  { newData => {
    const smallData = newData.slice(5);
    return <div>
      <XYPlot height={50} width={64} margin={{ top: 0, left: 0, bottom: 0, right: 0 }}>
        <VerticalBarSeries data={smallData} animation />
      </XYPlot>
      <XYPlot height={50} width={64} margin={{ top: 0, left: 0, bottom: 0, right: 0 }}>
        <AreaSeries data={newData} animation fill="#00ccbc" opacity={0.5} />
        <LineSeries data={newData} animation stroke="#00ccbc" />
      </XYPlot>
    </div>
    } }
  </RollingData>
))
.add('Sparklines~ish - with custom domain scale', () => (
  <RollingData>
  { newData => {
    return <div>
      <XYPlot height={50} width={64} margin={{ top: 0, left: 0, bottom: 0, right: 0 }} yDomain={[-1, 4]}>
        <VerticalBarSeries data={newData} animation />
      </XYPlot>
      <XYPlot height={50} width={64} margin={{ top: 0, left: 0, bottom: 0, right: 0 }} yDomain={[-1, 4]}>
        <AreaSeries data={newData} animation fill="#00ccbc" opacity={0.5} />
        <LineSeries data={newData} animation stroke="#00ccbc" />
      </XYPlot>
    </div>
    } }
  </RollingData>
))
