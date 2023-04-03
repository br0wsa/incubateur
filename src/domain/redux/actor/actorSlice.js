import { createSlice } from "@reduxjs/toolkit";
import { fetchActors } from "./actorThunk";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    actors: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchActors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.actors = action.payload;
      })
      .addCase(fetchActors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default actorSlice.reducer;
