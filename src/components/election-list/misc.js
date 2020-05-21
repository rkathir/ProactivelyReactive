import React from "react";

import electionListPageStyles from "./misc.module.css";

export const HeaderCell = ({ children }) => (
  <th className={electionListPageStyles.electionTableHeaderCell}>{children}</th>
);

export const DataCell = ({ children }) => (
  <td className={electionListPageStyles.electionTableHeaderCell}>{children}</td>
);
