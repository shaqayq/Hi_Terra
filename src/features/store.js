
import { configureStore } from '@reduxjs/toolkit';
import { terraApi } from './apiSlice';

export const store = configureStore({
  reducer: {
    [terraApi.reducerPath]: terraApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(terraApi.middleware),
});
