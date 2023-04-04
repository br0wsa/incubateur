import { createSlice } from "@reduxjs/toolkit";
import { fetchAnimations } from "./animationThunk";

const animationSlice = createSlice({
  name: "animation",
  initialState: {
    animations: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animations = action.payload;
      })
      .addCase(fetchAnimations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default animationSlice.reducer;
