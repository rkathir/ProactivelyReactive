
export const REFRESH_ELECTION_REQUEST_ACTION = 'REFRESH_ELECTION_REQUEST';
export const REFRESH_ELECTION_DONE_ACTION = 'REFRESH_ELECTION_DONE';
export const ADD_ELECTION_REQUEST_ACTION = 'ADD_ELECTION_REQUEST';
export const DELETE_ELECTION_REQUEST_ACTION = 'DELETE_ELECTION_REQUEST';

export const createRefreshElectionRequestAction = () => ({ type: REFRESH_ELECTION_REQUEST_ACTION });
export const createRefreshElectionDoneAction = (electiondata) => ({ type: REFRESH_ELECTION_DONE_ACTION, electiondata });
export const createAddElectionRequestAction = electiondata => ({ type: ADD_ELECTION_REQUEST_ACTION, electiondata });
export const createDeleteElectionRequestAction = electiondata => ({ type: DELETE_ELECTION_REQUEST_ACTION, electiondata });

export const refreshElection = () => {
  return dispatch => {
    dispatch(createRefreshElectionRequestAction());
    return fetch('http://localhost:3060/electiondata')
      .then(res => res.json())
      .then(electiondata => dispatch(createRefreshElectionDoneAction(electiondata)));
  };

};

export const addElection = electiondata => {
  return dispatch => {
    dispatch(createAddElectionRequestAction(electiondata));
    return fetch('http://localhost:3060/electiondata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(electiondata),
    })
      .then(() => dispatch(refreshElection()));
  };
};

export const deleteElection = electionId => {
  return dispatch => {
    dispatch(createDeleteElectionRequestAction(electionId));
    return fetch('http://localhost:3060/electiondata/' + encodeURIComponent(electionId), {
      method: 'DELETE',
    })
      .then(() => dispatch(refreshElection()));
  };
};