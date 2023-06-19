import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setHomeless = createAction("SET_HOMELESS");

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
    .then((res) => res.data)
    .catch((err) => {
      console.log("error =>", { err });
    });
});
const homelessReducer = createReducer([], {
  [setHomeless]: (state, action) => action.payload,
  [postHomeless.fulfilled]: (state, action) => action.payload,
  [getHomeless.fulfilled]: (state, action) => action.payload,
});

export default homelessReducer;
