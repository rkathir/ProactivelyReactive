import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import {
  addVoter,
  refreshVoters,
} from '../../actions/voterActions';

import { VoterRegistrationPage } from '../pages/VoterRegistrationPage';

export const VoterRegistrationPageContainer = () => {

  const dispatchProps = bindActionCreators({
    onAddVoter: addVoter,
    onRefreshVoters: refreshVoters,
  }, useDispatch());
  return <VoterRegistrationPage {...dispatchProps} />;
};