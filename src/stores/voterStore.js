import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { voterReducer } from "../reducers/voterReducer";

export const voterStore = createStore(
  voterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
