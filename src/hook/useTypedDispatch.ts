import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { authActions } from "../store/slice/authSlice"
import { tableActions } from "../store/slice/tableSlice"

const actions = {
  // ...authActions,
  ...authActions,
  ...tableActions,
}

export const useTypedDispatch = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
