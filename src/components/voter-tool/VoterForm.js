import React from 'react';

import { useForm } from '../../hooks/useForm';
 
export const VoterForm = ({ buttonText, onSubmitVoter }) => {

  const [ voterForm, change, resetVoterForm ] = useForm({
    firstName: '', lastName: '', address: '', city: '', birthdate: '', email: '', phone: ''
  });

  const submitVoter = () => {
    onSubmitVoter({ ...voterForm });
    resetVoterForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="voter-firstname-input">First Name:</label>
        <input type="text" id="voter-firstname-input"
          name="firstName" value={voterForm.firstName} onChange={change} />
      </div>
      <div>
        <label htmlFor="voter-lastname-input">Last Name:</label>
        <input type="text" id="voter-lastname-input"
          name="lastName" value={voterForm.lastName} onChange={change} />
      </div>
      <div>
        <label htmlFor="voter-address-input">Address:</label>
        <input type="text" id="voter-address-input"
          name="address" value={voterForm.address} onChange={change} />
      </div>
      <div>
        <label htmlFor="voter-city-input">City:</label>
        <input type="text" id="voter-city-input"
          name="city" value={voterForm.city} onChange={change} />
      </div>
      <div>
        <label htmlFor="voter-birthdate-input">Birthdate:</label>
        <input type="text" id="voter-birthdate-input"
          name="birthdate" value={voterForm.birthdate} onChange={change} />
      </div>
      <div>
        <label htmlFor="voter-email-input">Email:</label>
        <input type="text" id="voter-email-input"
          name="email" value={voterForm.email} onChange={change} />
      </div>
      <div>
        <label htmlFor="voter-phone-input">Phone:</label>
        <input type="text" id="voter-phone-input"
          name="phone" value={voterForm.phone} onChange={change} />
      </div>
      <button type="button" onClick={submitVoter}>{buttonText}</button>
    </form>
  );

};

VoterForm.defaultProps = {
  buttonText: 'Submit Voter',
};