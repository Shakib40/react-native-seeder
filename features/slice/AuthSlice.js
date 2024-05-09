import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "authentication",
  initialState: {
    userDetails: null,
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = true;
    },
    setIsLoggedOut(state, action) {
      state.isLoggedIn = false;
    },
    setAuthDetails(state, action) {
      state.userDetails = action.payload;
    },
    setDeleteToken(state) {
      state.token = null;
    },
    setDeleteAuthDetails(state) {
      state.userDetails = null;
    },
  },
});

export const {
  setToken,
  setAuthDetails,
  setDeleteToken,
  setDeleteAuthDetails,
  setIsLoggedIn,
  setIsLoggedOut,
} = AuthSlice.actions;
export default AuthSlice.reducer;
