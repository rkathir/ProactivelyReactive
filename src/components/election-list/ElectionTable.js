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
        {elections.map((elections) => (
          <ElectionListRow key={elections.id} elections={elections} />
        ))}
      </tbody>
    </table>
  );
};
