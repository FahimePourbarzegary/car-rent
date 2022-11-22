import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "../Services/carsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { favoritesApi } from "../Services/favoritesApi";
export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware, favoritesApi.middleware),
});
setupListeners(store.dispatch);
