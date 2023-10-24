import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITable } from "../../model/tableModel"

import { tableApi } from "../api/tableApi"

interface tableSliceProps {
  tables: ITable[] | []
  totalPage: number
  currentPage: number
}

const initialState: tableSliceProps = {
  tables: [],
  totalPage: 2,
  currentPage: 1,
}

const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setTables: (state, action: PayloadAction<ITable[]>) => {
      state.tables = action.payload
    },
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPage = action.payload
    },
    setCurrentPageAction: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      tableApi.endpoints.getTablesWithPagination.matchFulfilled,
      (state, { payload }) => {
        state.tables = payload.results
        state.totalPage = Math.ceil(payload.count / 4)
      }
    )
  },
})

export const tableActions = tableSlice.actions
export const tableReducer = tableSlice.reducer
