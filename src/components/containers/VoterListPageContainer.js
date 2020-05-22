import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteVoter,
  refreshVoters,
  createEditVoterRequestAction,
  saveVoter,
  createCancelVoterRequestAction,

} from '../../actions/voterActions';

import { VoterListPage } from '../pages/VoterListPage';

export const VoterListPageContainer = () => {

  const voters = useSelector(state => state.voters);
  const editVoterId = useSelector(state => state.editVoterId);

  const dispatchProps = bindActionCreators({
    onDeleteVoter: deleteVoter,
    onRefreshVoters: refreshVoters,
    onEditVoter: createEditVoterRequestAction,
    onCancelVoter: createCancelVoterRequestAction,
    onSaveVoter: saveVoter,
  }, useDispatch());


  return <VoterListPage {...dispatchProps} voters={voters} editVoterId={editVoterId} />;
};