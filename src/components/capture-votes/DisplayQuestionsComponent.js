import React from "react";
import { useHistory } from "react-router-dom";

export const DisplayQuestionsComponent = ({
  election,
  onSaveElection: saveElection,
}) => {

  const history = useHistory();

  const castVote = () => {
      console.log(election);
    // const newElection = election.concat(); // TODO: concat not working
    election.questions.map( question => (  //TODO: this is changing state directly, need to fix this
        (document.getElementById(question.questionid).checked)
        ? question.yesvote = question.yesvote+1
        : question.novote = question.novote+1
    ));
    saveElection(election).then(() => {
      history.push("/captureVotes/checkPersonalInfo/castVote/success");
    });
  };

  return (
    <>
      {election.questions.map((question) => (
        <tr key={Math.random()}>
          <td>{question.title}</td>
          <td>
            <form>
              <input
                type="checkbox"
                id={question.questionid}
                name={question.questionid}
                value={question.questionid}
              />
            </form>
          </td>
        </tr>
      ))}
      <tr>
        <td>
          <button type="button" onClick={castVote}>
            Cast Vote
          </button>
        </td>
      </tr>
    </>
  );
};
