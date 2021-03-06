import { combineReducers } from "redux";

import {
    REFRESH_VOTERS_DONE_ACTION,
    EDIT_VOTER_REQUEST_ACTION,
    CANCEL_VOTER_REQUEST_ACTION
  } from '../actions/voterActions';
  
export const voterReducer = (voters = [], action) => {
  if (action.type === REFRESH_VOTERS_DONE_ACTION) {
    return action.voters;
  }
  return voters;
};

export const editVoterIdReducer = (editVoterId = -1, action) => {
  if (action.type === EDIT_VOTER_REQUEST_ACTION) {
    return action.voterId;
  }
  if (
    action.type === REFRESH_VOTERS_DONE_ACTION ||
    action.type === CANCEL_VOTER_REQUEST_ACTION
  ) {
    return -1;
  }
  return editVoterId;
};

export const appReducer = combineReducers({
  voters: voterReducer,
  editVoterId: editVoterIdReducer,
});