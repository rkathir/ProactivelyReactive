
export const REFRESH_ELECTION_REQUEST_ACTION = 'REFRESH_ELECTION_REQUEST';
export const REFRESH_ELECTION_DONE_ACTION = 'REFRESH_ELECTION_DONE';
export const ADD_ELECTION_REQUEST_ACTION = 'ADD_ELECTION_REQUEST';
export const SELECT_ELECTION_REQUEST_ACTION = 'SELECT_ELECTION_REQUEST';

export const createRefreshElectionRequestAction = () => ({ type: REFRESH_ELECTION_REQUEST_ACTION });
export const createRefreshElectionDoneAction = (electionData) => ({ type: REFRESH_ELECTION_DONE_ACTION, electionData });
export const createAddElectionRequestAction = electionData => ({ type: ADD_ELECTION_REQUEST_ACTION, electionData });
export const createSelectElectionRequestAction = electionId => ({ type: SELECT_ELECTION_REQUEST_ACTION, electionId });

export const refreshElection = () => {
  return dispatch => {
    dispatch(createRefreshElectionRequestAction());
    return fetch('http://localhost:3060/electiondata')
      .then(res => res.json())
      .then(electionData => dispatch(createRefreshElectionDoneAction(electionData)));
  };

};

export const addElection = electionData => {
  return dispatch => {
    dispatch(createAddElectionRequestAction(electionData));
    return fetch('http://localhost:3060/electiondata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(electionData),
    })
      .then(() => dispatch(refreshElection()));
  };
};