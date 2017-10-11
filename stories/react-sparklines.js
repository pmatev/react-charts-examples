import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesBars,
} from 'react-sparklines';

import data from './data';
import RollingData from './RollingData';

const values = data.map(({ y }) => y);


storiesOf('react-sparklines', module)
.add('Line', () => (
  <div style={{ width: 200 }}>
    <Sparklines data={values} width={200} height={50} margin={5}>
      <SparklinesLine />
    </Sparklines>
  </div>
))
.add('Spots', () => (
  <div style={{ width: 200 }}>
    <Sparklines data={values} width={200} height={50} margin={5}>
      <SparklinesLine />
      <SparklinesSpots size={4}
          style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
    </Sparklines>
  </div>
))
.add('Bars', () => (
  <div style={{ width: 200 }}>
    <Sparklines data={values} width={200} height={50} margin={5}>
      <SparklinesBars />
    </Sparklines>
  </div>
))
.add('Bars & Lines', () => (
  <div style={{ width: 200 }}>
    <Sparklines data={values} width={200} height={50} margin={5}>
      <SparklinesBars />
      <SparklinesLine />
    </Sparklines>
  </div>
))
.add('Live data', () => (
  <div style={{ width: 200 }}>
    <RollingData>
    { data => (
      <Sparklines data={data.map(({ y }) => y)} width={200} height={50} margin={5}>
        <SparklinesBars />
        <SparklinesLine />
      </Sparklines>
    )}
    </RollingData>
  </div>
))
