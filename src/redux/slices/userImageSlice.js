import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profileImages: '',
}

const userImageSlice = createSlice({
  name: 'userImage',
  initialState,
  reducers: {
    uploadProfileImg: (state, action) => {
      // 혹시몰라서 나둡니다.
      // const { userId, profileImage } = action.payload
      // state.profileImages[userId] = profileImage
      state.profileImages = action.payload;
    },
  },
})

export const { uploadProfileImg } = userImageSlice.actions
export default userImageSlice.reducer
