import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterForm } from '../voter-tool/VoterForm';
import './VoterRegistrationPage.css';

export const VoterRegistrationPage = ({
  voters,
  onAddVoter: addVoter,
  onDeleteVoter: deleteVoter,
  onRefreshVoters: refreshVoters,
}) => {

//   useEffect(() => {
//     refreshVoters();
//   }, []);

  return (
    <>
      <SectionHeader headerText="Voter Registration Form" />

      <ContentSection headerText="Please fill in the details">
        <VoterForm buttonText="Add Voter" onSubmitVoter={addVoter} />
      </ContentSection>
    </>
  );

};