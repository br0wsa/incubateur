import ActorService from "./serviceActor.js";
import Actor from "../TMDBAggregates/useCaseActor";
import TMDBAdapter from "../../adapters/TMDBAdapter";

const ACTOR_SERVICE = new ActorService();

test("should be an instance of ActorService", () => {
  expect(ACTOR_SERVICE).toBeInstanceOf(ActorService);
});


