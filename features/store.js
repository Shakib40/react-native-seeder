import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import AuthSlice from "./slice/AuthSlice";
const store = configureStore({
  reducer: {
    authentication: AuthSlice, // authentication is slice name
  },
});

setupListeners(store.dispatch);

export default store;
