/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { ElectionDataForm } from '../election-mgr/ElectionDataForm';
import './VoterRegistrationPage.css';

export const ElectionDataPage = ({
    onSubmitElectionData: addElection, elections, onRefreshElectionData: refreshElection,onSelectedElection: selectedElection, 
}) => {

  useEffect(() => {
    refreshElection();
  }, []);
  
  const addElectionAndRedirect = (electiondata) => {
    addElection(electiondata);
  }

  return (
    <>
      <SectionHeader headerText="Election Manager Form" />

      <ContentSection headerText="Please fill in the details">
        <ElectionDataForm buttonText="Submit Election Data" onSubmitElectionData={addElectionAndRedirect}  elections={elections} onSelectedElection={selectedElection} />
      </ContentSection>
    </>
  );

};