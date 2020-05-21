import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

export const HomePage = () => {
  const menuItems = [
    { id: 1, url: '/registerVoter', caption: 'Register Voters' },
    { id: 2, url: '/listVoters', caption: 'List Voters' },
    { id: 4, url: '/createElection', caption: 'Create Elections' },
    { id: 3, url: '/CaptureVote', caption: 'Capture Votes' },
  ];

  return (
    <>
      <header>
        <h2>Welcome To Voter Ballot!!</h2>
      </header>

      <section>
        <nav id="home-page-content">
          <ul>
            {menuItems.map(menuItem => <li key={menuItem.id}>
              <Link to={menuItem.url}>{menuItem.caption}</Link>
            </li>)}
          </ul>
        </nav>
      </section>
    </>
  );

};