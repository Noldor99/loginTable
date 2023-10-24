import {
  ICreateTable,
  ITable,
  ITables,
  IUpadteTable,
} from "../../model/tableModel"
import { baseApi } from "./baseApi"

export const tableApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTable: builder.mutation<ITable, ICreateTable>({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Table"],
    }),
    getTablesWithPagination: builder.query<
      ITables,
      { offset?: number; limit?: number }
    >({
      query: ({ offset = 1, limit = 4 }) => ({
        url: `/?offset=${offset}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Table"],
    }),
    getTable: builder.query<ITable, number>({
      query: (id) => ({
        url: `/${id}/`,
        method: "GET",
      }),
      providesTags: ["Table"],
    }),
    updateTable: builder.mutation<ITable, { id: string; data: IUpadteTable }>({
      query: ({ id, data }) => ({
        url: `/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Table"],
    }),
    deleteTable: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Table"],
    }),
  }),
})

export const {
  useCreateTableMutation,
  useGetTablesWithPaginationQuery,
  useLazyGetTablesWithPaginationQuery,
  useGetTableQuery,
  useUpdateTableMutation,
  useDeleteTableMutation,
} = tableApi
