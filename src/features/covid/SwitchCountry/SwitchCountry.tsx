import React from "react";
import { useDispatch } from "react-redux";

import { FormControl, NativeSelect } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { fetchAsyncGetDaily } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // 下記apiの"Slug"property から馴染みのある国を抽出。
  // 他国を追加することも可能。
  // https://api.covid19api.com/countries
  const countries = [
    "japan",
    "china",
    "us",
    "france",
    "italy",
    "spain",
    "united kingdom",
    "germany",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
    "india",
  ];

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        {/* countriesからmap()で国名を抽出し、<option>に埋め込んで選択肢を作成。 */}
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
