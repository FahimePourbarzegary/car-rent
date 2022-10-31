import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "../Services/carsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});
setupListeners(store.dispatch);
