import { createSlice } from "@reduxjs/toolkit";
import { fetchlastReleases } from "./lastReleaseThunk";
import { LAST_RELEASE_DATA_TYPE } from "../action-data";

const lastReleaseSlice = createSlice({
  name: "lastRelease",
  initialState: {
    [LAST_RELEASE_DATA_TYPE]: [],
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addlastReleaseToFavorites: (state, action) => {
      const { id } = action.payload;
      const itemToAdd = state[LAST_RELEASE_DATA_TYPE].find(
        (item) => item.id === id,
      );
      if (itemToAdd) {
        state.favorites.push(itemToAdd);
      }
    },
    removelastReleaseFromFavorites: (state, action) => {
      const { id } = action.payload;
      const index = state.favorites.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchlastReleases.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchlastReleases.fulfilled, (state, action) => {
        state.status = "succeeded";
        state[LAST_RELEASE_DATA_TYPE] = [
          ...state[LAST_RELEASE_DATA_TYPE],
          ...action.payload,
        ];
      })
      .addCase(fetchlastReleases.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addlastReleaseToFavorites, removelastReleaseFromFavorites } =
  lastReleaseSlice.actions;
export default lastReleaseSlice.reducer;
