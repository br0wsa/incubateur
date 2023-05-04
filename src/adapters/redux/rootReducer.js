import { combineReducers } from "redux";
import actorReducer from "../../domain/redux/actor/actorSlice";
import animationReducer from "../../domain/redux/animation/animationSlice";
import lastReleaseReducer from "../../domain/redux/lastrelease/lastReleaseSlice";
import movieReducer from "../../domain/redux/movie/movieSlice";
import serieReducer from "../../domain/redux/series/serieSlice";

const rootReducer = combineReducers({
  actor: actorReducer,
  animation: animationReducer,
  lastRelease: lastReleaseReducer,
  movie: movieReducer,
  serie: serieReducer,
});

export default rootReducer;
