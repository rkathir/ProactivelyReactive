import React from 'react';
import { useHistory } from 'react-router-dom';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterForm } from '../voter-tool/VoterForm';
import './VoterRegistrationPage.css';

export const VoterRegistrationPage = ({
  onAddVoter: addVoter,
}) => {

  const history = useHistory();
  
  const addVoterAndRedirect = (voter) => {
      addVoter(voter).then(() => {
      history.push('/');
    })
  }

  return (
    <>
      <SectionHeader headerText="Voter Registration Form" />

      <ContentSection headerText="Please fill in the details">
        <VoterForm buttonText="Complete Registration" onSubmitVoter={addVoterAndRedirect} />
      </ContentSection>
    </>
  );

};