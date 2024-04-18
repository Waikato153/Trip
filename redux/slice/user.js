import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    userLoading: null
  },
  reducers: {

    setUser: (status, action) => {
        state.user = action.payload;
    },

    setUserLoading: (state, action) => {
        state.userLoading=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setUserLoading } = userSlice.actions

export default userSlice.reducer