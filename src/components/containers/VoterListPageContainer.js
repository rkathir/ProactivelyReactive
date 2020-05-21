import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteVoter,
  refreshVoters,
  editVoter,
} from '../../actions/voterActions';

import { VoterListPage } from '../pages/VoterListPage';

export const VoterListPageContainer = () => {

  const voters = useSelector(state => state.voters);

  const dispatchProps = bindActionCreators({
    onDeleteVoter: deleteVoter,
    onRefreshVoters: refreshVoters,
    onEditVoters: editVoter,
  }, useDispatch());


  return <VoterListPage {...dispatchProps} voters={voters} />;
};