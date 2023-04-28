import { createAsyncThunk } from "@reduxjs/toolkit";
import TvShowsService from "./serieService";

export const fetchSeries = createAsyncThunk("serie/fetchSeries", async (page) => {
  const seriesService = new TvShowsService();
  const series = await seriesService.findAll(page);
  // to make data serializable for Redux
  const seriesJson = series.map((serie) => {
    return {
      ...serie,
      //   knownFor: JSON.stringify(actor.knownFor),
    };
  });
  return seriesJson;
});
