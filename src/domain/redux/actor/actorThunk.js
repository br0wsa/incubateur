import { createAsyncThunk } from "@reduxjs/toolkit";
import ActorService from "./actorService";

export const fetchActors = createAsyncThunk("actor/fetchActors", async (page) => {
  const actorService = new ActorService();
  const actors = await actorService.findAll(page);
  // to make data serializable for Redux
  const actorsJson = actors.map((actor) => {
    return {
      ...actor,
      knownFor: JSON.stringify(actor.knownFor),
    };
  });
  return actorsJson;
});
