import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpSuccess(state, action) {
      state.userData = action.payload;
      state.error = null;
    },
    logInSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    logoutSuccess(state, action) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// reducer
export default slice.reducer;

// actions
export const {
  logoutSuccess,
  signUpSuccess,
  logInSuccess,
} = slice.actions;
