import React from 'react';
import { FaBell, FaQuestionCircle, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="icons">
        <FaBell className="icon black-white-icon" />
        <FaQuestionCircle className="icon black-white-icon" />
        <NavLink to="/profile">
          <FaUser className="icon black-white-icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default TopBar;
