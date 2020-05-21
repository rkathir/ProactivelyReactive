import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch, Route,
} from 'react-router-dom';


import { PageLayout } from './blocks/PageLayout';
import { PageHeader } from './blocks/PageHeader';
import { PageFooter } from './blocks/PageFooter';
import { MainMenu } from './blocks/MainMenu';
import { Content } from './blocks/Content';
import { HomePage } from './pages/HomePage';
import { VoterRegistrationPage } from './pages/VoterRegistrationPage';
import { VoterListPage } from './pages/VoterListPage';
import { SideBar } from './blocks/Sidebar'

import { colorStore } from '../stores/colorStore';
import { ColorToolPageContainer } from './containers/ColorToolPageContainer';

const initialVoterList = [
  { id: 1, firstName: 'bob', lastName: 'smith', address: '1232 Laurel St', city: 'Sunnyvale', birthdate: '05/12/1980', email: 'a@test.com', phone: '1243124221' },
  { id: 2, firstName: 'laura', lastName: 'diaz', address: '432 Marine Way', city: 'Mountain View', birthdate: '05/12/1980', email: 'b@test.com', phone: '213412424' },
  { id: 3, firstName: 'john', lastName: 'doe', address: '214 Cassie Ave', city: 'Mountain View', birthdate: '05/12/1980', email: 'c@test.com', phone: '12341242421' },
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
              <VoterRegistrationPage voters={initialVoterList} />
            </Route>
            <Route path="/listVoters">
              <VoterListPage voters={initialVoterList} />
            </Route>
            <Route path="/createElection">
              
            </Route>
            <Route path="/CaptureVote">
              
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