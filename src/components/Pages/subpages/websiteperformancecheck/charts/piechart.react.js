/* eslint-disable no-shadow */
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 25, color: 'rgb(255, 0, 0,0.8)' },
  { name: 'B', value: 45, color: '#3081D0' },
  { name: 'C', value: 30, color: 'rgb(0, 104, 74,0.9)' },
];
const cx = 200;
const cy = 200;
const iR = 70;
const oR = 90;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, needleColor) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;
  
    return [
      <circle cx={x0} cy={y0} r={r} fill={needleColor} stroke="none" />,
      <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={needleColor} />,
    ];
  };
  
  export const Piechart = () => {
    return (
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, 'rgb(35, 61, 77,0.8)')} {/* Change '#ff0000' to your desired needle color */}
      </PieChart>
    );
  };
  