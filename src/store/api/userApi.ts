import { ILogin, IUserInfo } from "../../model/userModel"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<IUserInfo, ILogin>({
      query: (data) => ({
        url: `/login/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = userApi
