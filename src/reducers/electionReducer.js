import {
    REFRESH_ELECTION_DONE_ACTION,
  } from '../actions/electionActions';
  
  export const electionReducer = (electiondata = [], action) => {
  
    if (action.type === REFRESH_ELECTION_DONE_ACTION) {
      return action.electiondata;
    }
    return electiondata;
  
  };
  