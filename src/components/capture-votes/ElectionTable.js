import React from "react";

import { HeaderCell } from "./misc";
import { ElectionListRow } from "./ElectionListRow";

export const ElectionTable = ({
  elections,
  electionsId,
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
            onSelect={selectElection}
          />
        ))}
      </tbody>
    </table>
  );
};
