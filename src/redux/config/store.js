import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slices/loginSlice'
import userDataReducer from '../slices/userDataSlice'
import languageFilterReducer from '../slices/languageFilterSlice'
import searchQueryReducer from '../slices/searchQuerySlice'

const reduxStore = configureStore({
  reducer: {
    login: loginReducer,
    userData: userDataReducer,
    languageFilter: languageFilterReducer,
    searchQuery: searchQueryReducer,
  },
})

export default reduxStore
