
"use client";
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user:null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log(action,"action")
      state.user = action.payload.data;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.data));
    },
    clearUser: (state) => {
      localStorage.removeItem("userInfo");
      state.user = null;
    }
  }
});

export const { setUserData, clearUser } = userSlice.actions;

export default userSlice.reducer;
