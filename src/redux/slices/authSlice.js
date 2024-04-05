import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isLoadig: false,
  error: null,
  message: "",
  responseStatus: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoadig = action.payload;
    },
    setError(state, action) {
      state.isLoadig = false;
      state.error = action.payload;
    },
    signUpSuccess(state, action) {
      state.isLoadig = false;
      state.userData = action.payload;
      state.error = null;
    },
    logInSuccess(state, action) {
      state.isLoadig = false;
      state.userData = action.payload;
      state.error = null;
    },
    logoutSuccess() {
      return initialState;
    },
  },
});

// reducer
export default slice.reducer;

// actions
export const {
  setLoading,
  setError,
  logoutSuccess,
  signUpSuccess,
  logInSuccess,
} = slice.actions;
