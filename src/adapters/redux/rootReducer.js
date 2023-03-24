import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movie: movieReducer,
  series: seriesReducer,
  actor: actorReducer,
  animation: animationReducer,
  chat: chatReducer,
  user: userReducer,
  likes: likeReducer,
  online: onlineReducer,
});

export default rootReducer;
