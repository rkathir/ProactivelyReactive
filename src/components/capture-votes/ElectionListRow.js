import React from "react";

export const ElectionListRow = ({ election, buttonText, onSelect: selectViewElection }) => {

  
  return (
    <tr>
      <td>{election.id}</td>
      <td>{election.title}</td>
      <td>
        <button type="button" onClick={() => selectViewElection(election.id)}>
          {buttonText}
        </button>
      </td>
    </tr>
  );
};
