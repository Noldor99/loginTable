import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userApi } from "./api/userApi"
import { baseApi } from "./api/baseApi"
import { authReducer } from "./slice/authSlice"
import { tableReducer } from "./slice/tableSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  table: tableReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }).concat(userApi.middleware, baseApi.middleware, userApi.middleware),
  devTools: true,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
