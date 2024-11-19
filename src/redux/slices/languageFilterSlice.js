import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  All: true,
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
      const selected = action.payload

      if (selected === 'All') {
        Object.keys(state).forEach((key) => (state[key] = false))
        state['All'] = true
      } else if (!state[selected]) {
        state[selected] = true
        // 전체 보기 해제
        state['All'] = false
      }
    },

    removeTag: (state, action) => {
      // Tag 해제
      const deselected = action.payload

      if (state[deselected]) {
        state[deselected] = false
      }

      // 모든 코드 언어 해제된 경우
      // 다시 모두 보기로
      if (!Object.values(state).includes(true)) {
        state['All'] = true
      }
    },
  },
})

export const { selectTag, removeTag } = languageFilterSlice.actions
export default languageFilterSlice.reducer
