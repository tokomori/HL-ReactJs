import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const { registerUser, logout } = userSlice.actions;
export default userSlice.reducer;
