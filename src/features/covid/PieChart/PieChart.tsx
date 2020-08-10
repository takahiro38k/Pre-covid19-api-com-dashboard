import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';

import { selectDaily } from '../covidSlice';

const PieChart: React.FC = () => {
  const daily = useSelector(selectDaily);

  const mortality =
    // %表示のための計算
    // daily[]の末尾要素が最新の日付なので、末尾のindexを指定。
    (100 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;

  const pieChart = daily[0] && (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [
              daily[daily.length - 1].Confirmed,
              daily[daily.length - 1].Recovered,
              daily[daily.length - 1].Deaths,
            ],
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "#008080",
              "rgba(255, 0, 0, 0.5)",
            ],
            hoverBackgroundColor: ["#36A2EB", "#3cb371", "#FF6384"],
            borderColor: ["transparent", "transparent", "transparent"],
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 15,
          },
        },
      }}
    />
  );

  return (
    <>
      <Typography align="center" color="textSecondary" gutterBottom>
        Mortality {mortality.toFixed(2)} [%]
      </Typography>
      {pieChart}
    </>
  );
};

export default PieChart;
