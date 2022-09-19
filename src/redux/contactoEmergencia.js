import {
    createReducer,
    createAsyncThunk,
    createAction,
  } from "@reduxjs/toolkit";

  import axios from "axios";
  
  export const postContactoEmergencia = createAsyncThunk("contactoDeEmergencia", ({ contacto,telefono }) => {
    return axios
      .post(`api/contactoDeEmergencia/addContactoEmergencia`, { contacto,telefono })
      .then((res) => res.data)
      .catch((err) => {
        console.log("error =>", { err });
      });
  });
  const contactoEmergenciaReducer = createReducer([], {
    [postContactoEmergencia.fulfilled]: (state, action) => action.payload,
  });
  
  export default contactoEmergenciaReducer;
  