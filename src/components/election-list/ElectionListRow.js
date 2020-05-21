import React from "react";

import { DataCell } from "./misc";

export const ElectionListRow = ({ elections, onSelect: selectElection }) => {
  return (
    <tr>
      <DataCell>{elections.id}</DataCell>
      <DataCell>{elections.title}</DataCell>
      <DataCell>
        <button type="button" onClick={() => selectElection(elections.id)}>
          Select
        </button>
      </DataCell>
    </tr>
  );
};
