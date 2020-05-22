import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  addElection,
  refreshElection,
  createSelectElectionRequestAction
} from "../../actions/electionActions";

import { ElectionListPage } from "../pages/ElectionListPage";
export const ElectionListPageContainer = () => {
  const electionData = useSelector((state) => state.electionData);

  const dispatchProps = bindActionCreators(
    {
      onAddElection: addElection,
      onRefreshElection: refreshElection,
      onSelectedElection: createSelectElectionRequestAction,
    },
    useDispatch()
  );
  return <ElectionListPage {...dispatchProps} elections={electionData} />;
};