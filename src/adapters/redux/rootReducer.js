import { combineReducers } from "redux";
import actorReducer from "../../domain/redux/actor/actorSlice";

const rootReducer = combineReducers({
  actor: actorReducer,
  // movie: movieReducer,
  // series: seriesReducer,
  // animation: animationReducer,
  // lastRealease: lastRealeaseReducer,
});

export default rootReducer;
