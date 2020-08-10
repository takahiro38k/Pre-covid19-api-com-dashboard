/**
 * 参照元API
 * https://covid19api.com/
 *
 * 参照データ - By Country Total All Status
 * https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#6fbc46d6-0ddf-400b-a743-a149e9bba381
 *
 * !!!!! WARNING !!!!!
 * 日本時間の13:00〜15:00頃にメンテナンスが実施され、データ取得ができない場合あり。
 */

import './App.css';

import React from 'react';

import DashBoard from './features/covid/DashBoard/DashBoard';

function App() {
  return <DashBoard />;
}

export default App;
