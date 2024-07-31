import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUsers, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { MdQuiz } from 'react-icons/md';
import SidebarIcon from '../assets/logo.jpg'; // Adjust path as needed

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout operations if needed
    navigate('/signin');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={SidebarIcon} alt="Sidebar Icon" className="sidebar-icon" />
        <b><h2>EDUTRANS</h2></b>
      </div>
      <ul>
        <li>
          <NavLink to="/" className="sidebar-link" end>
            <FaHome className="icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/community" className="sidebar-link">
            <FaUsers className="icon" /> Community
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="sidebar-link">
            <FaUser className="icon" /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz" className="sidebar-link">
          <MdQuiz className="icon" /> Quiz
          </NavLink>
        </li>
      </ul>
      
      <div className="sidebar-footer">
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt className="logout-icon" /> Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
