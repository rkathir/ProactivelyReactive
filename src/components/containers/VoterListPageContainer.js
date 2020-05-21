import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteVoter,
  refreshVoters,
} from '../../actions/voterActions';

import { VoterListPage } from '../pages/VoterListPage';

export const VoterListPageContainer = () => {

  const voters = useSelector(state => state);

  const dispatchProps = bindActionCreators({
    onDeleteVoter: deleteVoter,
    onRefreshVoters: refreshVoters,
  }, useDispatch());


  return <VoterListPage {...dispatchProps} voters={voters} />;
};