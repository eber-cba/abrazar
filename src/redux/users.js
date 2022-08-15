import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("Register", ({ form }) => {
  return axios
    .post(`api/usuarios/register`, form)
    .then((res) => res.data)
    .catch((err) => {
      console.log("error =>", { err });
    });
});
export const login = createAsyncThunk("Login", ({ form }) => {
  return axios
    .post(`api/usuarios/login`, form)
    .then((res) => res.data)
    .catch((err) => {
      console.log("error =>", { err });
    });
});

export const afterLogin = createAsyncThunk("after_Login", () => {
  return axios
  .get("api/usuarios/me")
  .then((info) => info.data)
  .catch(() => console.log("Sin iniciar sesion"));
})

export const logout = createAsyncThunk("logout", () => {
  return axios
  .post("http://localhost:8080/api/usuarios/logout")
  .then(res => res.data)
  .catch(err => console.log({ err }))
})

const usersReducer = createReducer([], {
  [afterLogin.fulfilled]: (state, action) => (state = action.payload),
  [register.fulfilled]: (state, action) => action.payload,
  [login.fulfilled]: (state, action) => action.payload,
  [logout.fulfilled]: (state, action) => action.payload,
});

export default usersReducer;
