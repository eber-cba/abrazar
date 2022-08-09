import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("Register", ({ form }) => {
  return axios
    .post(`http://localhost:8080/api/usuarios/register`, form)
    .then((res) => res.data)
    .catch((err) => {
      console.log("error =>", { err });
    });
});
export const login = createAsyncThunk("Login", ({ form }) => {
  return axios
    .post(`http://localhost:8080/api/usuarios/login`, form)
    .then((res) => res.data)
    .catch((err) => {
      console.log("error =>", { err });
    });
});

const usersReducer = createReducer([], {
  [register.fulfilled]: (state, action) => action.payload,
  [login.fulfilled]: (state, action) => action.payload,
});

export default usersReducer;
