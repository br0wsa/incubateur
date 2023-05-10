import { createSlice } from "@reduxjs/toolkit";
import { fetchActors } from "./actorThunk";
import { ACTOR_DATA_TYPE, ACTOR_LIKES } from "../action-data";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    [ACTOR_DATA_TYPE]: [],
    [ACTOR_LIKES]: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addActorToFavorites: (state, action) => {
      const { id } = action.payload;
      const itemToAdd = state[ACTOR_DATA_TYPE].find((item) => item.id === id);
      if (itemToAdd) {
        state[ACTOR_LIKES].push(itemToAdd);
      }
    },
    removeActorFromFavorites: (state, action) => {
      const { id } = action.payload;
      const index = state[ACTOR_LIKES].findIndex((item) => item.id === id);
      if (index !== -1) {
        state[ACTOR_LIKES].splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchActors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state[ACTOR_DATA_TYPE] = [...state[ACTOR_DATA_TYPE], ...action.payload];
      })
      .addCase(fetchActors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addActorToFavorites, removeActorFromFavorites } =
  actorSlice.actions;
export default actorSlice.reducer;
