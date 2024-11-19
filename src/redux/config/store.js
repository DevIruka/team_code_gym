import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slices/loginSlice'
import userDataReducer from '../slices/userDataSlice'
import languageFilterReducer from '../slices/languageFilterSlice'

const reduxStore = configureStore({
  reducer: {
    login: loginReducer,
    userData: userDataReducer,
    languageFilter: languageFilterReducer,
  },
})

export default reduxStore
