import React from "react";

import { DataCell } from "./misc";

export const ElectionListRow = ({ elections, onSelect: checkPersonalnfo }) => {
  return (
    <tr>
      <td>{elections.id}</td>
      <td>{elections.title}</td>
      <td>
        <button type="button" onClick={() => checkPersonalnfo(elections.id)}>
          Select
        </button>
      </td>
    </tr>
  );
};
