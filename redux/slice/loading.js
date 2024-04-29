import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    homeLoading: false,
    expenseLoading: false,
  },
  reducers: {
      setHomeLoading: (state, action) => {
          state.homeLoading = action.payload;
      },
      setExpenseLoading: (state, action) => {
          state.expenseLoading = action.payload;
      }
  }
})

// Action creators are generated for each case reducer function
export const { setHomeLoading, setExpenseLoading} = loadingSlice.actions

export default loadingSlice.reducer