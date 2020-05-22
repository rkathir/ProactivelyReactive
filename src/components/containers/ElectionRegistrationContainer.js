import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import {
    addElection,
    refreshElection,
} from '../../actions/electionActions';

import { ElectionDataPage } from '../pages/ElectionDataPage';

export const ElectionRegistrationContainer = () => {

  const dispatchProps = bindActionCreators({
    onSubmitElectionData: addElection,
    onRefreshElectionData: refreshElection,
  }, useDispatch());
  return <ElectionDataPage {...dispatchProps} />;
};