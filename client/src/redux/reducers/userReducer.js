import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutUser(state) {
      state.loggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
