import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterForm } from '../voter-tool/VoterForm';
import './VoterRegistrationPage.css';

export const VoterRegistrationPage = ({
  onAddVoter: addVoter,
}) => {

  return (
    <>
      <SectionHeader headerText="Voter Registration Form" />

      <ContentSection headerText="Please fill in the details">
        <VoterForm buttonText="Complete Registration" onSubmitVoter={addVoter} />
      </ContentSection>
    </>
  );

};