import {
    REFRESH_VOTERS_DONE_ACTION,
  } from '../actions/voterActions';
  
  export const voterReducer = (voters = [], action) => {
  
    if (action.type === REFRESH_VOTERS_DONE_ACTION) {
      return action.voters;
    }
    return voters;
  
  };
  