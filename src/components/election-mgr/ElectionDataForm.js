import React from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { SectionHeader } from "../blocks/SectionHeader";
import { ContentSection } from "../blocks/ContentSection";
import { ElectionTable } from "../capture-votes/ElectionTable";

export const ElectionDataForm = ({elections, buttonText, onSubmitElectionData }) => {
  const history = useHistory();



  const [electionDataFom, change, resetElectionDataForm] = useForm({
    title: "",
    questions: [],
    voters: [],
    totalvote: 0,
    question2add1: "",
    question2add2: "",
  });

  const selectandRedirect = () => {
    history.push("/createElection/viewResult");
  };

  const submitElectionData = () => {
    console.log(JSON.stringify(electionDataFom));
    if (electionDataFom.question2add1 !== null) {
      let question1 = {
        title: electionDataFom.question2add1,
        yesvote: 0,
        novote: 0,
        id: 1,
      };
      electionDataFom.questions.push(question1);
    }
    if (electionDataFom.question2add2 !== null) {
      let question2 = {
        title: electionDataFom.question2add2,
        yesvote: 0,
        novote: 0,
        id: 2,
      };
      electionDataFom.questions.push(question2);
    }
    delete electionDataFom.question2add1;
    delete electionDataFom.question2add2;

    onSubmitElectionData({ ...electionDataFom });
    resetElectionDataForm();
  };

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                <label htmlFor="election-title-input">Election Title:</label>
                <input
                  type="text"
                  id="election-title-input"
                  name="title"
                  value={electionDataFom.title}
                  onChange={change}
                />
              </div>
              <div>
                <label htmlFor="election-question1-input">Question1:</label>
                <input
                  type="text"
                  id="election-question1-input"
                  name="question2add1"
                  value={electionDataFom.question2add1}
                  onChange={change}
                />
              </div>
              <div>
                <label htmlFor="election-question2-input">Question2:</label>
                <input
                  type="text"
                  id="election-question2-input"
                  name="question2add2"
                  value={electionDataFom.question2add2}
                  onChange={change}
                />
              </div>

              <button type="button" onClick={submitElectionData}>
                {buttonText}
              </button>
            </td>
            <td>{/* list the Questions here */}</td>
          </tr>
        </tbody>
      </table>
      <SectionHeader headerText="Active Election List" />
      <ContentSection headerText="List">
        <ElectionTable elections={elections} onSelect={selectandRedirect} buttonText="View Results" />
      </ContentSection>
    </form>
  );
};

ElectionDataForm.defaultProps = {
  buttonText: "Save Election Data",
};
