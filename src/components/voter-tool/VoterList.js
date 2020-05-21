import React from 'react';

import voterToolPageStyles from './VoterList.module.css';


export const VoterList = ({ voters, onDeleteVoter }) => {

  return (
    <ul className={voterToolPageStyles.colorList}>
      {voters.map(c => <li key={c.id}>
        {c.firstName} {c.lastName} -
        <button type="button" onClick={() => onDeleteVoter(c.id)}>X</button>
      </li>)}
    </ul>
  );

};