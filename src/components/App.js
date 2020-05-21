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
import { AboutPage } from './pages/AboutPage';

import { colorStore } from '../stores/colorStore';
import { ColorToolPageContainer } from './containers/ColorToolPageContainer';


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
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/color-tool">
              <Provider store={colorStore}>
                <ColorToolPageContainer />
              </Provider>
            </Route>            
          </Switch>
        </Content>
        <PageFooter />
      </PageLayout>
  );
};