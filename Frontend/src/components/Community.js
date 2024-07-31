import React from 'react';
import { FaPlus, FaEllipsisH, FaCircle } from 'react-icons/fa';

function Community() {
  return (
    <div className="community">
      <h1>Community</h1>
      <div className="chat-and-progress">
        <div className="chat-bot">
          <div className="chat-bot-header">
            <span>Community Chat Bot</span>
            <div className="chat-bot-icons">
              <FaPlus className="chat-icon" />
              <FaEllipsisH className="chat-icon" />
            </div>
          </div>
          <div className="chat-bot-content">
            {/* This is where your chat bot would be integrated */}
            <p>Chat bot content goes here.</p>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-header">
            <span>Learning Courses</span>
            <div className="chat-bot-icons">
              <FaPlus className="chat-icon" />
              <FaEllipsisH className="chat-icon" />
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-item">
              <FaCircle className="red-dot-icon" />
              <div className="progress-text">
                <span className="progress-title">IN PROGRESS</span>
                <span className="progress-subtitle">Implement design screens</span>
                <span className="progress-description">In this lesson, we will implement UI series.</span>
              </div>
              <FaEllipsisH className="progress-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
