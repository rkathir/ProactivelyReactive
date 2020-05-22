import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  refreshElection
} from "../../actions/electionActions";

import { ViewResultPage } from '../pages/ViewResultPage';

export const ViewResultPageContainer = () => {
  const electionData = useSelector((state) => {

    return state.electionData.find(e => e.id === state.selectElectionId);
  });



  const dispatchProps = bindActionCreators(
    {
      onRefreshElection: refreshElection
    },
    useDispatch()
  );
  return <ViewResultPage {...dispatchProps} election={electionData} />;
};