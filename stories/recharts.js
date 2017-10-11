import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  LineChart,
  Line,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

import data from './data';
import RollingData from './RollingData';
import styles from './styles.css';

storiesOf('recharts', module)
.add('LineSeries - simple', () => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="y" stroke="#8884d8" />
  </LineChart>
))
.add('LineSeries - axes', () => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="y" stroke="#8884d8" />
    <XAxis dataKey="x" />
    <YAxis />
  </LineChart>
))
.add('LineSeries - with grid lines', () => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="y" stroke="#8884d8" />
    <XAxis dataKey="x" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
  </LineChart>
))
.add('LineSeries - with legend', () => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="y" stroke="#8884d8" />
    <XAxis dataKey="x" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Legend />
  </LineChart>
))
.add('LineSeries - with tooltip', () => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="y" stroke="#8884d8" />
    <XAxis dataKey="x" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Legend />
    <Tooltip />
  </LineChart>
))
.add('Barchart - simple', () => (
  <BarChart width={600} height={300} data={data}>
    <Bar dataKey="y" fill="#8884d8" />
  </BarChart>
))
.add('Barchart - with grid & legend & tooltip', () => (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="x" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Legend />
    <Tooltip />
    <Bar dataKey="y" fill="#8884d8" />
  </BarChart>
))
.add('Custom style', () => (
  <BarChart width={600} height={300} data={data} style={{ 'font-family': 'sans-serif' }} >
    <YAxis />
    <CartesianGrid stroke="rgba(0,0,0,0.1)" vertical={false} />
    <Tooltip />
    <Bar dataKey="y" fill="#ff3d3d" />
  </BarChart>
))
