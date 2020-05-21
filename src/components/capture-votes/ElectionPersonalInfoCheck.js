import React from "react";

import { useForm } from "../../hooks/useForm";

export const ElectionPersonalInfoCheck = ({ buttonText, onSubmitInfo }) => {
  const [voterForm, change] = useForm({
    firstName: "",
    birthdate: "",
  });

  const submitInfo = () => {
    onSubmitInfo({ ...voterForm });
  };

  return (
    <form>
      <div>
        <label htmlFor="make-input">First Name:</label>
        <input
          type="text"
          id="make-input"
          name="First Name"
          value={voterForm.firstName}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="model-input">Date Of Birth:</label>
        <input
          type="text"
          id="model-input"
          name="Date Of Birth"
          value={voterForm.birthdate}
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitInfo}>
        {buttonText}
      </button>
    </form>
  );
};

ElectionPersonalInfoCheck.defaultProps = {
  buttonText: "Submit",
};
