import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slices/loginSlice'
import userDataReducer from '../slices/userDataSlice'

const reduxStore = configureStore({
  reducer: {
    login: loginReducer,
    userData: userDataReducer,
  },
})

export default reduxStore
