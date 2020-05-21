import React from "react";

import voterToolPageStyles from "./VoterList.module.css";

export const VoterList = ({ voters, onEditVoter, onDeleteVoter }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>City</th>
          <th>BirthDate</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody className={voterToolPageStyles.colorList}>
        {voters.map((c) => (
          <tr key={c.id}>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
            <td>{c.address}</td>
            <td>{c.city}</td>
            <td>{c.birthdate}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>
              <button type="button" onClick={() => onEditVoter(c.id)}>Edit</button>
              <button type="button" onClick={() => onDeleteVoter(c.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
