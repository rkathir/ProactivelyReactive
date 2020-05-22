/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from "react";

import {DisplayQuestionsComponent} from '../capture-votes/DisplayQuestionsComponent';

export const ElectionCastVotePage = ({
  elections,
  selectedElectionId,
  onRefreshElection: refreshElection,
  onSaveElection: saveElection,
}) => {

  useEffect(() => {
    refreshElection();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Questions</th>
          <th>Answers</th>
        </tr>
      </thead>
      <tbody>
        {elections.map((election) => (
            election.id === selectedElectionId
            ? <DisplayQuestionsComponent
                key={election.id}
                election={election}
                onSaveElection={saveElection}
              />
              : null
          ))}
      </tbody>
    </table>
  );
};

