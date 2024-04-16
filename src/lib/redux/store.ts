import { configureStore } from "@reduxjs/toolkit";

const reducer = {};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat

      // rtk store
      // auth.middleware,
      (),
  // devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
