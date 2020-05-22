import React from 'react';

import { useForm } from '../../hooks/useForm';

export const VoterEditRow = ({ voterRow, onSaveVoter, onCancelVoter: cancelVoter }) => {

    const [ voterForm, change ] = useForm({
        ...voterRow
      });
    
    const saveVoter = () => {
        onSaveVoter({
            ...voterForm,
            id: voterRow.id,
        });
    };

    return(
        <tr>
        <td>{voterRow.id}</td>
        <td>
            <input type="text" id="voter-firstname-input" name="firstName" value={voterForm.firstName} onChange={change} />
        </td>
        <td>
            <input type="text" id="voter-lastname-input" name="lastname" value={ voterForm.lastName } onChange={change} />
        </td>
        <td>
            <input type="text" id="voter-address-input" name="address" value={ voterForm.address } onChange={change} />
        </td>
        <td>
            <input type="text" id="voter-city-input" name="city" value={ voterForm.city } onChange={change} />
        </td>
        <td>
            <input type="text" id="voter-birthdate-input" name="birthdate" value={ voterForm.birthdate } onChange={change} />
        </td>
        <td>
            <input type="text" id="voter-email-input" name="email" value={ voterForm.email } onChange={change} />
        </td>
        <td>
            <input type="text" id="voter-phone-input" name="phone" value={ voterForm.phone } onChange={change} />
        </td>
        <td>
            <button type="button" onClick={ saveVoter }>Save</button>
            <button type="button" onClick={ cancelVoter }>Cancel</button>
        </td>
    </tr>
    );
}