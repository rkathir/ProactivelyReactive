import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
    addElection,
    refreshElection,
} from '../../actions/electionActions';

import { ElectionDataPage } from '../pages/ElectionDataPage';

export const ViewResultPageContainer = () => {

  const electionData = useSelector((state) => state.electionData);

  const dispatchProps = bindActionCreators({
    onSubmitElectionData: addElection,
    onRefreshElectionData: refreshElection,
  }, useDispatch());
  return <ElectionDataPage {...dispatchProps} elections={electionData} />;
};