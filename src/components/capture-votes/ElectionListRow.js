import React from "react";

import { DataCell } from "./misc";

export const ElectionListRow = ({ elections, onSelect: checkPersonalnfo }) => {
  return (
    <tr>
      <DataCell>{elections.id}</DataCell>
      <DataCell>{elections.title}</DataCell>
      <DataCell>
        <button type="button" onClick={() => checkPersonalnfo(elections.id)}>
          Select
        </button>
      </DataCell>
    </tr>
  );
};
