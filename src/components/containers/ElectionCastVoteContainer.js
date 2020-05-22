import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  refreshElection,
  saveElection
} from "../../actions/electionActions";

import { ElectionCastVotePage } from '../pages/ElectionCastVotePage';

export const ElectionCastVoteContainer = () => {
  const electionData = useSelector((state) => state.electionData);
  const selectElectionId = useSelector((state) => state.selectElectionId)

  const dispatchProps = bindActionCreators(
    {
      onRefreshElection: refreshElection,
      onSaveElection: saveElection,
    },
    useDispatch()
  );
  return <ElectionCastVotePage {...dispatchProps} elections={electionData} selectedElectionId={selectElectionId} />;
};