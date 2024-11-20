import { createSlice } from '@reduxjs/toolkit'

const searchQuerySlice = createSlice({
  name: 'languageFilter',
  initialState: {
    query: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
  },
})

export const { setQuery } = searchQuerySlice.actions
export default searchQuerySlice.reducer
