import { createStore } from "redux";
import reducers from "./reducer";

const configure = () => {
  const store = createStore(reducers);
  return store;
};

export default configure();
