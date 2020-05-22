import { combineReducers } from "redux";
import {
    REFRESH_VOTERS_DONE_ACTION,
  } from '../actions/voterActions';

import {
    REFRESH_ELECTION_DONE_ACTION,
  } from '../actions/electionActions';
  
  export const voterReducer = (voters = [], action) => {
  
    if (action.type === REFRESH_VOTERS_DONE_ACTION) {
      return action.voters;
    }
    return voters;
  
  };
  
  export const electionReducer = (electiondata = [], action) => {
  
    if (action.type === REFRESH_ELECTION_DONE_ACTION) {
      return action.electiondata;
    }
    return electiondata;
  
  };

  export const appReducers = combineReducers({
    voters: voterReducer,
    electiondata: electionReducer,
  });
  