import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    userLoading: null,
    snackVisible: false,
  },
  reducers: {

    setUser: (state, action) => {
        state.user = action.payload;
    },

    setUserLoading: (state, action) => {
        state.userLoading=action.payload;
    },
     
    setSnackVisible: (state, action) => {
        state.snackVisible=action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { setUser, setUserLoading, setSnackVisible } = userSlice.actions

export default userSlice.reducer