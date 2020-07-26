// configure store in a separate file and then export it, just easier

import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);

  return store;
};
