import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Cards from '../Cards/Cards';
import Chart from '../Chart/Chart';
import { fetchAsyncGetDaily, selectDaily } from '../covidSlice';
import PieChart from '../PieChart/PieChart';
import SwitchCountry from '../SwitchCountry/SwitchCountry';
import styles from './DashBoard.module.css';

const useStyles = makeStyles((theme) => ({
  title: {
    // 対象の要素に対して100%幅で表示。
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));

const DashBoard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const daily = useSelector(selectDaily);

  // 起動時にapiの値を取得。初期値はjapanとする。
  useEffect(() => {
    dispatch(fetchAsyncGetDaily("japan"));
  }, [dispatch]);

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live Dashboard
          </Typography>
          <div>
            <Typography variant="body1">
              {new Date(daily[daily.length - 1].Date).toDateString()}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <Container className={classes.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashBoard;
