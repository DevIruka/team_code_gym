import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slices/loginSlice'
import userDataReducer from '../slices/userDataSlice'
import languageFilterReducer from '../slices/languageFilterSlice'
import userImageReducer from '../slices/userImageSlice'

const reduxStore = configureStore({
  reducer: {
    login: loginReducer,
    userData: userDataReducer,
    userImage: userImageReducer,
    languageFilter: languageFilterReducer,
  },
})

export default reduxStore
