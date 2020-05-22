import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { appReducer } from "../reducers/voterReducer";

export const voterStore = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
