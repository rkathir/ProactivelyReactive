/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { VoterList } from '../voter-tool/VoterList';

export const VoterListPage = ({
  voters, editVoterId, 
  onDeleteVoter: deleteVoter,
  onRefreshVoters: refreshVoters,
  onEditVoter: editVoter,
  onSaveVoter: saveVoter,
  onCancelVoter: cancelVoter
}) => {
  
  useEffect(() => {
    refreshVoters();
  }, []);

  return (
    <>
      <SectionHeader headerText="Voter List" />

      <ContentSection>
        <VoterList voters={voters} onDeleteVoter={deleteVoter} onEditVoter={editVoter} 
          editVoterId={editVoterId} onSaveVoter={saveVoter} onCancelVoter={cancelVoter}
        />
      </ContentSection>

    </>
  );

};