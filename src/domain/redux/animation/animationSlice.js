import { createSlice } from "@reduxjs/toolkit";
import { fetchAnimations } from "./animationThunk";
import { ANIMATION_DATA_TYPE } from "../action-data";

const animationSlice = createSlice({
  name: "animation",
  initialState: {
    [ANIMATION_DATA_TYPE]: [],
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
        state[ANIMATION_DATA_TYPE] = [
          ...state[ANIMATION_DATA_TYPE],
          ...action.payload,
        ];
      })
      .addCase(fetchAnimations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default animationSlice.reducer;
