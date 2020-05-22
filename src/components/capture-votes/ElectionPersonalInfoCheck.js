import React from "react";

import { useHistory } from "react-router-dom";
import { SectionHeader } from "../blocks/SectionHeader";
import { ContentSection } from "../blocks/ContentSection";

export const ElectionPersonalInfoCheck = () => {
  const history = useHistory();

  const submitInfo = () => {
    var voterData = ["05121980", "02101988", "01031980"];
    var formData = document.getElementById("model-input-dob").value;

    // comapring dob with voterData array
    for (var i = 0; i < voterData.length; i++)
      if (voterData[i] === formData) {
        return history.push("/captureVotes/checkPersonalInfo/castVote");
      } else {
        return console.log("failure");
      }
  };

  return (
    <>
      <SectionHeader headerText="Validate Personal Info" />
      <ContentSection headerText="Please enter your information:">
        <form>
          <div>
            <label htmlFor="make-input">First Name:</label>
            <input type="text" id="make-input" name="First Name" />
          </div>
          <div>
            <label htmlFor="model-input">Date Of Birth:</label>
            <input type="text" id="model-input-dob" name="Date Of Birth" />
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
