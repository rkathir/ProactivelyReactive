import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { ElectionDataForm } from '../election-mgr/ElectionDataForm';
import './VoterRegistrationPage.css';

export const ElectionDataPage = ({
    onSubmitElectionData: addElection, elections, onRefreshElectionData: refreshElection
}) => {

  const history = useHistory();

  useEffect(() => {
    console.log('refresh called');
    refreshElection();
  }, []);
  
  const addElectionAndRedirect = (electiondata) => {
    addElection(electiondata);
    /*
    addElection(electiondata).then(() => {
      history.push('/');
    })
    */
  }

  return (
    <>
      <SectionHeader headerText="Election Manager Form" />

      <ContentSection headerText="Please fill in the details">
        <ElectionDataForm buttonText="Submit Election Data" onSubmitElectionData={addElectionAndRedirect}  elections={elections} />
      </ContentSection>
    </>
  );

};