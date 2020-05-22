import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
    addElection,
    refreshElection,
    createSelectElectionRequestAction,
} from '../../actions/electionActions';

import { ElectionDataPage } from '../pages/ElectionDataPage';

export const ElectionRegistrationContainer = () => {

  const electionData = useSelector((state) => state.electionData);

  const dispatchProps = bindActionCreators({
    onSubmitElectionData: addElection,
    onRefreshElectionData: refreshElection,
    onSelectedElection: createSelectElectionRequestAction,
  }, useDispatch());
  return <ElectionDataPage {...dispatchProps} elections={electionData} />;
};