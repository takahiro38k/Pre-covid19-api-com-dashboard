import React from 'react';
import CountUp from 'react-countup';
import { AiFillLike } from 'react-icons/ai';
import { GiHastyGrave } from 'react-icons/gi';
import { MdLocalHospital } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { selectDaily } from '../covidSlice';
import styles from './Cards.module.css';

const Cards: React.FC = () => {
  const daily = useSelector(selectDaily);
  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={3} component={Card} className={styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              Infected persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                // daily配列の末尾の要素に最新日のデータが格納されている。
                // なので、末尾のindexのConfirmedを指定することで、
                // 最新の感染者数を取得できる。
                end={daily[daily.length - 1].Confirmed}
                // 数字のアニメーション
                // startからendまでのcount upを1.5sかけて実行する。
                duration={1.5}
                // 3桁ごとに","区切り。
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <AiFillLike /> Recovered persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Recovered}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <GiHastyGrave />
              Dead persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={daily[daily.length - 1].Deaths}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
