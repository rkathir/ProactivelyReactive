/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { SectionHeader } from "../blocks/SectionHeader";
import { ContentSection } from "../blocks/ContentSection";

export const ElectionPersonalInfoCheck = ({
  voters,
  onRefreshVoter: refreshVoters,
}) => {
  useEffect(() => {
    refreshVoters();
  }, []);

  const [piForm, change, resetPIForm] = useForm({
    firstName: "",
    birthdate: "",
  });

  const history = useHistory();

  const submitInfo = () => {
    var formData = document.getElementById("voter-birthdate-input").value;

    // comapring dob with voterData array
    for (var i = 0; i < voters.length; i++)
      if (voters[i].birthdate === formData) {
        return history.push("/captureVotes/checkPersonalInfo/castVote");
      } else {
        alert("Faliure");
        resetPIForm();
      }
  };

  return (
    <>
      <SectionHeader headerText="Validate Personal Info" />
      <ContentSection headerText="Please enter your information:">
        <form>
          <div>
            <label htmlFor="voter-firstname-input">First Name:</label>
            <input
              type="text"
              id="voter-firstname-input"
              name="firstName"
              value={piForm.firstName}
              onChange={change}
            />
          </div>

          <div>
            <label htmlFor="voter-birthdate-input">Birthdate:</label>
            <input
              type="text"
              id="voter-birthdate-input"
              name="birthdate"
              value={piForm.birthdate}
              onChange={change}
            />
          </div>
          <button type="button" onClick={submitInfo}>
            Submit
          </button>
        </form>
        <div>{/* // error page */}</div>
      </ContentSection>
    </>
  );
};

ElectionPersonalInfoCheck.defaultProps = {
  buttonText: "Submit",
};
