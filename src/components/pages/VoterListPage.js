import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterList } from '../voter-tool/VoterList';

export const VoterListPage = ({
  voters,
  onDeleteVoter: deleteVoter,
  onRefreshVoters: refreshVoters,
}) => {

  return (
    <>
      <SectionHeader headerText="Voter List" />

      <ContentSection>
        <VoterList voters={voters} onDeleteVoter={deleteVoter} />
      </ContentSection>

    </>
  );

};