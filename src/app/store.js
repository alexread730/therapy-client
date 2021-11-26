import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counterSlice'
import { clientsApi } from '../services/clients'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [clientsApi.reducerPath]: clientsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clientsApi.middleware),
})
