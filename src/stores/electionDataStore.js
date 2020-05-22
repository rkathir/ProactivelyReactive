import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { electionReducer } from "../reducers/electionReducer";

export const electionDataStore = createStore(
  electionReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
