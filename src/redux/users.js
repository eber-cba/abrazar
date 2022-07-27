import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios"; 

export const register = createAsyncThunk(
  "Register",
  ({ form }) => {
    return axios
      .post(`http://localhost:8080/api/usuarios`,form)
      .then((res) => res.data)
      .catch((err) => {
        console.log({ err });
      });
  }
);

const usersReducer = createReducer({}, {
  [register.fulfilled]:  (state, action) => (state = {}),
});
 
export default usersReducer;
