/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SectionHeader } from "../blocks/SectionHeader";
import { ContentSection } from "../blocks/ContentSection";
import { ElectionTable } from "../capture-votes/ElectionTable";

export const ElectionListPage = ({
  elections,
  onRefreshElection: refreshElection,
  onSelectedElection: selectedElection,
}) => {
  const history = useHistory();

  useEffect(() => {
    refreshElection();
  }, []);

  const selectandRedirect = (electionId) => {
    selectedElection(electionId);
    history.push("/captureVotes/checkPersonalInfo");
  };

  return (
    <>
      <SectionHeader headerText="Active Election List" />
      <ContentSection headerText="Select your choice of election">
        <ElectionTable elections={elections} onSelect={selectandRedirect} buttonText="Vote" />
      </ContentSection>
    </>
  );
};
