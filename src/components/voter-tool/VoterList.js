import React from "react";

import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

import voterToolPageStyles from "./VoterList.module.css";

export const VoterList = ({ 
  voters, editVoterId,
  onEditVoter: editVoter, onDeleteVoter: deleteVoter,
  onSaveVoter: saveVoter, onCancelVoter: cancelVoter,
  }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>City</th>
          <th>BirthDate</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className={voterToolPageStyles.voterList}>
        {voters.map((voter) => editVoterId === voter.id
          ? <VoterEditRow key={voter.id} voterRow={voter} onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
          : <VoterViewRow key={voter.id} voterRow={voter} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />
        )}
      </tbody>
    </table>
  );
};
