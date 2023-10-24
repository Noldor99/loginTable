import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL_SERVER } from "../../constants/url"

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL_SERVER}/table`,
  }),
  tagTypes: ["Table"],
  endpoints: () => ({}),
})
