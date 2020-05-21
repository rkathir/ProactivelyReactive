import React from "react";

import { SectionHeader } from "../blocks/SectionHeader";
import { ContentSection } from "../blocks/ContentSection";
import { ElectionTable } from "../election-list/ElectionTable";

export const ElectionListPage = ({ elections, onSelect: selectElection }) => {
  return (
    <>
      <SectionHeader headerText="Active Election List" />
      <ContentSection>
        <ElectionTable elections={elections} onSelect={selectElection} />
      </ContentSection>
    </>
  );
};
