import React from "react";
import { Link } from "react-router-dom";

import "./MainMenu.css";

export const MainMenu = () => {
  // ui model data
  const menuItems = [
    { id: 1, url: "/", caption: "Home" },
    { id: 2, url: "/registerVoter", caption: "Register Voters" },
    { id: 3, url: "/listVoters", caption: "List Voters" },
    { id: 4, url: "/createElection", caption: "Create Elections" },
    { id: 5, url: "/electionList", caption: "Capture Votes" },
  ];

  return (
    <nav id="main-menu">
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <Link to={menuItem.url}>{menuItem.caption}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
