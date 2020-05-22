import React from 'react';

import { useForm } from '../../hooks/useForm';
 
export const QuestionForm = ({ buttonText, onAddQuestion }) => {

  const [ questionForm, change, resetQuestionForm ] = useForm({
    title: '', yesvote: 0, novote: 0
  });

  const submitQuestion = () => {
    onAddQuestion({ ...questionForm });
    resetQuestionForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="election-questions-input1">Election Question:</label>
        <input type="text" id="election-questions-input1"
          name="questions" value={questionForm.questions} onChange={change} />
      </div>
   
      <button type="button" onClick={submitQuestion}>{buttonText}</button>
    </form>
  );

};

ElectionDataForm.defaultProps = {
  buttonText: 'Submit Election Data',
};