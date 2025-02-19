"use client";

import { authApi } from "./services/authApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";


const contentOfReducer = { [authApi.reducerPath]: authApi.reducer };

const appReducer = combineReducers(contentOfReducer);

const rootReducer = (state, action) => {
  if (action.type === "redux/clearRedux") {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

setupListeners(store.dispatch);
