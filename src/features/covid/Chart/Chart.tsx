import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectDaily } from '../covidSlice';
import styles from './Chart.module.css';

const Chart: React.FC = () => {
  const daily = useSelector(selectDaily);
  // daily配列の各要素の日付(Date)を分割代入し、日付だけの配列を作成。
  const dates = daily.map(({ Date }) => Date);

  const lineChart = daily[0] && (
    <Line
      data={{
        // toDateString()で日付を読みやすいフォーマットに変更。
        labels: dates.map((date) => new Date(date).toDateString()),

        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            showLine: false,
          },
          {
            data: daily.map((data) => data.Recovered),
            label: "Recovered",
            borderColor: "green",
            showLine: false,
          },
          {
            data: daily.map((data) => data.Deaths),
            label: "Deaths",
            borderColor: "#ff3370",
            showLine: false,
          },
        ],
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
