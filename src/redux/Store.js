import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usersReducer from "./users";

const Store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: usersReducer,
  },
});

export default Store;