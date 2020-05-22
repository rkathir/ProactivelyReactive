import React from "react";

import { DataCell } from "./misc";

export const ElectionListRow = ({ election, onSelect: checkPersonalnfo }) => {
  return (
    <tr>
      <td>{election.id}</td>
      <td>{election.title}</td>
      <td>
        <button type="button" onClick={() => checkPersonalnfo(election.id)}>
          Select
        </button>
      </td>
    </tr>
  );
};
