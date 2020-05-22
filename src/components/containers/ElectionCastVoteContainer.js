import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  saveElection
} from "../../actions/electionActions";

import { ElectionCastVotePage } from '../pages/ElectionCastVotePage';

export const ElectionCastVoteContainer = () => {
  const electionData = useSelector((state) => {
    return state.electionData.find(e => e.id === state.selectElectionId);
  });

  const selectElectionId = useSelector((state) => state.selectElectionId)

  const dispatchProps = bindActionCreators(
    {
      onSaveElection: saveElection,
    },
    useDispatch()
  );
  return <ElectionCastVotePage {...dispatchProps} election={electionData} selectedElectionId={selectElectionId} />;
};