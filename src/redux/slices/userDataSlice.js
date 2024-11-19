import { createSlice } from '@reduxjs/toolkit'

const userDataSlice = createSlice({
  name: 'userData',
  initialState: '',
  reducers: {
    getUserData: (state, action) => {
      // console.log(action.payload)
      // 객체 타입이나 부수적인 부분까지 같이 담아져 나와서 action.payload로 userId만 뽑아 내도록 바꿨습니다.
      return action.payload
    },
  },
})

export const { getUserData } = userDataSlice.actions
export default userDataSlice.reducer
