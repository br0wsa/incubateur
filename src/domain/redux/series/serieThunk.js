import { createAsyncThunk } from "@reduxjs/toolkit";
import TvShowsService from "./serieService";

export const fetchSeries = createAsyncThunk("serie/fetchSeries", async () => {
  const seriesService = new TvShowsService();
  const series = await seriesService.findAll();
  // to make data serializable for Redux
  const seriesJson = series.map((serie) => {
    return {
      ...serie,
      //   knownFor: JSON.stringify(actor.knownFor),
    };
  });
  return seriesJson;
});
