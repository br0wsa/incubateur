import { createAsyncThunk } from "@reduxjs/toolkit";
import LastReleaseService from "./lastReleaseService";

export const fetchlastReleases = createAsyncThunk(
  "lastRealease/fetchlastReleases",
  async () => {
    const lastReleaseService = new LastReleaseService();
    const lastReleases = await lastReleaseService.findAll();
    // to make data serializable for Redux
    const lastReleasesJson = lastReleases.map((lastRelease) => {
      return {
        ...lastRelease,
        //   knownFor: JSON.stringify(actor.knownFor),
      };
    });
    return lastReleasesJson;
  },
);
