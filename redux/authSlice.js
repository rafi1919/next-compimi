import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for auth
const initialState = {
  username: "",
  userData: {
    username: "",
    instagram: "",
    userId: "",
  },
  password: "",
  isAuthenticated: false,
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, userData, password } = action.payload;
      state.username = username;
      state.userData = userData;
      state.password = password;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = "";
      state.password = "";
      state.userData = "";
      state.isAuthenticated = false;
    },
  },
});

// Export the actions
export const { login, logout } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
