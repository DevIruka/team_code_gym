import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  JavaScript: false,
  Java: false,
  Python: false,
  'C++': false,
  'C#': false,
}

const languageFilterSlice = createSlice({
  name: 'languageFilter',
  initialState: initialState,
  reducers: {
    // Tag 선택
		selectTag: (state, action) => {
			const selected = action.payload;

			if (!state[selected]) {
				state[selected] = true;
			} 

		},

		removeTag: (state, action) => {
			// Tag 해제
			const deselected = action.payload;

			if (state[deselected]) {
				state[deselected] = false;
			}
		}
  },
})

export const { selectTag, removeTag } = languageFilterSlice.actions
export default languageFilterSlice.reducer