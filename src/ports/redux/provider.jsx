import { Provider } from "react-redux";
import store from "../../domain/store/store.js";

export const AppProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
