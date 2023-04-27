import { createSlice } from "@reduxjs/toolkit";
import { fetchActors } from "./actorThunk";
import { ACTOR_DATA_TYPE } from "../action-data";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    [ACTOR_DATA_TYPE]: [],
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
        state[ACTOR_DATA_TYPE] = [
          ...state[ACTOR_DATA_TYPE],
          ...action.payload,
        ];
      })
      .addCase(fetchActors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default actorSlice.reducer;
