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
import { ElectionRegistrationContainer } from "./containers/ElectionRegistrationContainer";
import { VoterListPageContainer } from "./containers/VoterListPageContainer";
import { ElectionListPageContainer } from "./containers/ElectionListPageContainer";
import { ElectionPersonalInfoCheckContainer } from "./containers/ElectionPersonalInfoCheckContainer";
import { ElectionCastVoteContainer } from "./containers/ElectionCastVoteContainer";
import { ViewResultPageContainer } from "./containers/ViewResultPageContainer";
import { SuccessPage } from "./pages/SuccessPage";
import { SideBar } from "./blocks/Sidebar";

import { appStore } from "../stores/appStore";

export const App = () => {
  return (
    <Provider store={appStore}>
    <PageLayout>
      <PageHeader />
      <MainMenu />
      <Content>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/registerVoter">
              <VoterRegistrationPageContainer />
          </Route>
          <Route path="/listVoters">
              <VoterListPageContainer />
          </Route>
          <Route path="/createElection" exact>
              <ElectionRegistrationContainer />
          </Route>
          <Route path="/createElection/viewResult">
                <ViewResultPageContainer/>
          </Route>
          <Route path="/captureVotes" exact>
              <ElectionListPageContainer />
          </Route>
          <Route path="/captureVotes/checkPersonalInfo" exact>
              <ElectionPersonalInfoCheckContainer />
          </Route>
          <Route path="/captureVotes/checkPersonalInfo/castVote" exact>
              <ElectionCastVoteContainer />
          </Route>
          <Route path="/captureVotes/checkPersonalInfo/castVote/success">
            <SuccessPage />
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
    </Provider>
  );
};
