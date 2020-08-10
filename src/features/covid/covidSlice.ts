import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
// jsonを型注釈に利用。jsonの中身はapiのデータを貼り付けしたもの。
import dataDaily from './apiDataDaily.json';

const apiUrl = "https://api.covid19api.com/total/country";

type DataDaily = typeof dataDaily;

type covidState = {
  daily: DataDaily;
  country: string;
};

const initialState: covidState = {
  daily: dataDaily,
  country: "Japan",
};

export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async (country: string) => {
    const { data } = await axios.get<DataDaily>(`${apiUrl}/${country}`);
    return { data: data, country: country };
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
      return {
        ...state,
        daily: action.payload.data,
        country: action.payload.country,
      };
    });
  },
});

// useSelectorのargとして利用。
export const selectDaily = (state: RootState) => state.covid.daily;
export const selectCountry = (state: RootState) => state.covid.country;

export default covidSlice.reducer;
