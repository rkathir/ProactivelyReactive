import React from 'react';

export const VoterViewRow = ({ voterRow, onEditVoter: editVoter, onDeleteVoter: deleteVoter }) => {
  
    return(
        <tr>
            <td>{voterRow.id}</td>
            <td>{voterRow.firstName}</td>
            <td>{voterRow.lastName}</td>
            <td>{voterRow.address}</td>
            <td>{voterRow.city}</td>
            <td>{voterRow.birthdate}</td>
            <td>{voterRow.email}</td>
            <td>{voterRow.phone}</td>
        
            <td>
                <button type="button" onClick={ () => deleteVoter(voterRow.id) }>Delete</button>
                <button type="button" onClick={() => editVoter(voterRow.id)}>Edit</button>
            </td>
        </tr>
    );
}