/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";


export const ViewResultPage = ({
  election,
}) => {
  console.log( "View Result Page:" + JSON.stringify(election));
  return (
    <>
        
        <table>
            <thead>
            <tr>
                <th colspan="2">{election.questions[0].title}</th>
                <th colspan="2">{election.questions[1].title}</th>
            </tr>
            <tr>
                <th>Yes Vote Count</th>
                <th>No Vote Count</th>
                <th>Yes Vote Count</th>
                <th>No Vote Count</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{election.questions[0].yesvote}</td>
                    <td>{election.questions[0].novote}</td>
                    <td>{election.questions[1].yesvote}</td>
                    <td>{election.questions[1].novote}</td>
                </tr>
            </tbody>
        </table>
    </>
  );
};
