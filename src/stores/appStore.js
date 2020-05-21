import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { appReducers } from "../reducers/appReducers";

export const appStore = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
