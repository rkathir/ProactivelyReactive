import React from "react";

import { HeaderCell } from "./misc";
import { ElectionListRow } from "./ElectionListRow";

export const ElectionTable = ({
  elections,
  electionsId,
  buttonText,
  onSelect: selectElection,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <HeaderCell>Id</HeaderCell>
          <HeaderCell>Title</HeaderCell>
          <HeaderCell>Action</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {elections.map((election) => (
          <ElectionListRow
            key={election.id}
            election={election}
            buttonText={buttonText}
            onSelect={selectElection}
          />
        ))}
      </tbody>
    </table>
  );
};
