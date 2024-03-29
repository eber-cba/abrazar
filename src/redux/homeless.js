import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const postHomeless = createAsyncThunk("Homeless", ({ form }) => {
  return axios
    .post(`api/homeless/addHomeless`, form)
    .then((res) => res.data)
    .catch((err) => {
      console.log("error =>", { err });
    });
});
export const getHomeless = createAsyncThunk("Homeless", () => {
  return axios
    .get(` http://localhost:8080/api/homeless/allHomeless`)
    .then((res) =>  res.data)
    .catch((err) => {
      console.log("error =>", { err });
    });
});
const homelessReducer = createReducer([], {
  [postHomeless.fulfilled]: (state, action) => action.payload,
  [getHomeless.fulfilled]: (state, action) => action.payload,
});

export default homelessReducer;
