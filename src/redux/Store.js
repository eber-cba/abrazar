import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usersReducer from "./users";
import homelessReducer from "./homeless";
import regionesReducer from "./regiones"
import contactoEmergenciaReducer from "./contactoEmergencia"
const Store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: usersReducer,
    homeless:homelessReducer,
    regiones:regionesReducer,
    contactoDeEmergencia:contactoEmergenciaReducer
  },
});

export default Store;