import React from 'react';

import { useForm } from '../../hooks/useForm';

 
export const ElectionDataForm = ({ buttonText, onSubmitElectionData }) => {

  const [ electionDataFom, change, resetElectionDataForm ] = useForm({
    title: '', questions: [], voters: [], totalvote: 0, question2add1: '', question2add2: ''
  });

  const submitElectionData = () => {
    console.log(JSON.stringify(electionDataFom));
    if (electionDataFom.question2add1 !== null) {
      let question1 = {title: electionDataFom.question2add1, yesvote: 0, novote: 0, id: 1};
      electionDataFom.questions.push(question1); 
    }
    if (electionDataFom.question2add2 !== null) {
      let question2 = {title: electionDataFom.question2add2, yesvote: 0, novote: 0, id: 2};
      electionDataFom.questions.push(question2); 
    }

    onSubmitElectionData({ ...electionDataFom });
    resetElectionDataForm();
  };

  return (
    <form>
      <table>
        <tr><td>
      <div>
        <label htmlFor="election-title-input">Election Title:</label>
        <input type="text" id="election-title-input"
          name="title" value={electionDataFom.title} onChange={change} />
      </div>
      <div>
        <label htmlFor="election-question1-input">Question1:</label>
        <input type="text" id="election-question1-input"
          name="question2add1" value={electionDataFom.question2add1} onChange={change} />
      </div>
      <div>
        <label htmlFor="election-question2-input">Question2:</label>
        <input type="text" id="election-question2-input"
          name="question2add2" value={electionDataFom.question2add2} onChange={change} />
      </div>      
   
      <button type="button" onClick={submitElectionData}>{buttonText}</button>
      </td>
        <td>
        </td>
      </tr>
      </table>
    </form>
  );

};

ElectionDataForm.defaultProps = {
  buttonText: 'Submit Election Data',
};