import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: "",
    name: "",
    email: "",
    role: 0,
    image: ",",
  },
  usAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    console.log();
  },
});

export default userSlice.reducer;
