import React from "react";

import { SectionHeader } from "../blocks/SectionHeader";
import { ContentSection } from "../blocks/ContentSection";
import { ElectionTable } from "../capture-votes/ElectionTable";

export const ElectionListPage = ({ elections, onSelect: checkPersonalnfo }) => {
  const history = useHistory();

  const addVoterAndRedirect = (voter) => {
    addVoter(voter).then(() => {
      history.push("/");
    });
  };
  return (
    <>
      <SectionHeader headerText="Active Election List" />
      <ContentSection headerText="Select your choice of election">
        <ElectionTable elections={elections} onSelect={checkPersonalnfo} />
      </ContentSection>
    </>
  );
};
