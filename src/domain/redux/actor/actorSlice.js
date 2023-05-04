import { createSlice } from "@reduxjs/toolkit";
import { fetchActors } from "./actorThunk";
import { ACTOR_DATA_TYPE } from "../action-data";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    [ACTOR_DATA_TYPE]: [],
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addActorToFavorites: (state, action) => {
      const { id } = action.payload;
      const itemToAdd = state[ACTOR_DATA_TYPE].find((item) => item.id === id);
      if (itemToAdd) {
        state.favorites.push(itemToAdd);
      }
    },
    removeActorFromFavorites: (state, action) => {
      const { id } = action.payload;
      const index = state.favorites.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
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
