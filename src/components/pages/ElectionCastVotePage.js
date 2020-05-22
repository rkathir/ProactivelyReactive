/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from "react";

import {DisplayQuestionsComponent} from '../capture-votes/DisplayQuestionsComponent';

export const ElectionCastVotePage = ({
  election,
  selectedElectionId,
  onSaveElection: saveElection,
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Questions</th>
          <th>Answers</th>
        </tr>
      </thead>
      <tbody>
          <DisplayQuestionsComponent
              key={election.id}
              election={election}
              onSaveElection={saveElection}
            />
      </tbody>
    </table>
  );
};

