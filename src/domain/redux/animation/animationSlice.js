import { createSlice } from "@reduxjs/toolkit";
import { fetchAnimations } from "./animationThunk";
import { ANIMATION_DATA_TYPE } from "../action-data";

const animationSlice = createSlice({
  name: "animation",
  initialState: {
    [ANIMATION_DATA_TYPE]: [],
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addAnimationToFavorites: (state, action) => {
      const { id } = action.payload;
      const itemToAdd = state[ANIMATION_DATA_TYPE].find(
        (item) => item.id === id,
      );
      if (itemToAdd) {
        state.favorites.push(itemToAdd);
      }
    },
    removeAnimationFromFavorites: (state, action) => {
      const { id } = action.payload;
      const index = state.favorites.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
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

export const { addAnimationToFavorites, removeAnimationFromFavorites } =
  animationSlice.actions;
export default animationSlice.reducer;
