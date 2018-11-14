import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalRectSeries
} from 'react-vis';

const timestamp = new Date('Nov 08 2018').getTime();
const ONE_DAY = 86400000;
const margin = ONE_DAY/2;

export default function BarChart(props) {
  const DATA = props.hours.map((ele, index)=>({
    x0: ONE_DAY * index, x: (ONE_DAY * index+1) - margin, y: ele
  })).map(el => ({x0: el.x0+timestamp, x: el.x+timestamp, y: el.y}));
  return (
    <XYPlot
      xDomain={[timestamp, timestamp + 9 * ONE_DAY]}
      yDomain={[1, 15]}
      xType="time"
      width={window.screen.width < 768 ? window.screen.width-50:500}
      height={300}
      tickSize={1}
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
        <VerticalRectSeries animation data={DATA} style={{stroke: '#fff'}} />
    </XYPlot>
  );
}
