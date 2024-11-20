import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profileImages: {},
}

const userImageSlice = createSlice({
  name: 'useImage',
  initialState,
  reducers: {
    uploadProfileImg: (state, action) => {
      const { userId, profileImage } = action.payload
      state.profileImages[userId] = profileImage
    },
  },
})

export const { uploadProfileImg } = userImageSlice.actions
export default userImageSlice.reducer
