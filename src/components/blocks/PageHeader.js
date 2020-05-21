import React from 'react';

import './PageHeader.css';

export const PageHeader = () => {

  return (
    <header id="page-header">
      <h1>
        <img alt="logo" src="images/team_logo.png"></img>
        <div>ProactivelyReactive</div>
        <p id="subtext">If we can't, who can?</p>
      </h1>
    </header>
  );
};