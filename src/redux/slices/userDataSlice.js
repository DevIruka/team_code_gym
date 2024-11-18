import { createSlice } from '@reduxjs/toolkit'

const userDataSlice = createSlice({
  name: 'userData',
  initialState: '',
  reducers: {
    getUserData: (state, payload) => {
      return payload
    },
  },
})

export const { getUserData } = userDataSlice.actions
export default userDataSlice.reducer
