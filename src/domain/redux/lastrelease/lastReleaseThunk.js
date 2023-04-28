import { createAsyncThunk } from "@reduxjs/toolkit";
import LastReleaseService from "./lastReleaseService";

export const fetchlastReleases = createAsyncThunk(
  "lastRelease/fetchlastReleases",
  async (page) => {
    const lastReleaseService = new LastReleaseService();
    const lastReleases = await lastReleaseService.findAll(page);
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
