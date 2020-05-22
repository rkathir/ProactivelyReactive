import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { refreshVoters } from "../../actions/voterActions";
import { ElectionPersonalInfoCheck } from "../capture-votes/ElectionPersonalInfoCheck";

export const ElectionPersonalInfoCheckContainer = () => {
  const voters = useSelector((state) => state.voters);

  const dispatchProps = bindActionCreators(
    {
      onRefreshVoter: refreshVoters,
    },
    useDispatch()
  );
  return <ElectionPersonalInfoCheck {...dispatchProps} voters={voters} />;
};
