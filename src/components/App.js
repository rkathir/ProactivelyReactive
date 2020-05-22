import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { PageLayout } from "./blocks/PageLayout";
import { PageHeader } from "./blocks/PageHeader";
import { PageFooter } from "./blocks/PageFooter";
import { MainMenu } from "./blocks/MainMenu";
import { Content } from "./blocks/Content";
import { HomePage } from "./pages/HomePage";
import { VoterRegistrationPageContainer } from "./containers/VoterRegistrationPageContainer";
import { VoterListPageContainer } from "./containers/VoterListPageContainer";
import { ElectionListPage } from "./pages/ElectionListPage";
import { ElectionPersonalInfoCheck } from "../components/capture-votes/ElectionPersonalInfoCheck";
import { ElectionCastVotePage } from "../components/capture-votes/ElectionCastVotePage";
import { SideBar } from "./blocks/Sidebar";

import { colorStore } from "../stores/colorStore";
import { voterStore } from "../stores/voterStore";
import { ColorToolPageContainer } from "./containers/ColorToolPageContainer";

const activeElectionList = [
  {
    id: 1,
    title: "Congress Vote",
  },
  {
    id: 2,
    title: "Favorite Fruit",
  },
  {
    id: 3,
    title: "Favorite Car",
  },
];

export const App = () => {
  return (
    <PageLayout>
      <PageHeader />
      <MainMenu />
      <Content>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/registerVoter">
            <Provider store={voterStore}>
              <VoterRegistrationPageContainer />
            </Provider>
          </Route>
          <Route path="/listVoters">
            <Provider store={voterStore}>
              <VoterListPageContainer />
            </Provider>
          </Route>
          <Route path="/createElection"></Route>
          <Route path="/captureVotes" exact>
            <ElectionListPage elections={activeElectionList} />
          </Route>
          <Route path="/captureVotes/checkPersonalInfo" exact>
            <ElectionPersonalInfoCheck />
          </Route>
          <Route path="/captureVotes/checkPersonalInfo/castVote">
            <ElectionCastVotePage />
          </Route>
          <Route path="/color-tool">
            <Provider store={colorStore}>
              <ColorToolPageContainer />
            </Provider>
          </Route>
        </Switch>
      </Content>
      <Switch>
        <Route path="/">
          <SideBar />
        </Route>
      </Switch>
      <PageFooter />
    </PageLayout>
  );
};
