import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    isLogIn: (state) => {
      return true
    },
    isLogout: (state) => {
      return false
    },
  },
})

export const { isLogIn, isLogout } = loginSlice.actions
export default loginSlice.reducer
