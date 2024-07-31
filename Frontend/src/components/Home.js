import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import course1Image from '../assets/course1.png'; 
import course2Image from '../assets/course2.png'; // Ensure this path is correct based on your directory structure

function Home() {
  return (
    <div className="home">
      <div className="courses-section">
        <h2>Courses</h2>
        <div className="courses-tabs">
          <div className="tab active">All Courses</div>
          <div className="tab">Programming</div>
          <div className="tab">Data Science</div>
          <div className="tab">Web Development</div>
          {/* Add more tabs as needed */}
        </div>
        <div className="courses-list">
          <Link to="/course/1" className="course-link">
            <div className="course-item">
              <img src={course1Image} alt="Data Structures and Algorithms" className="course-image" />
              <div className="course-info">
                <h3 className="course-title">Data Structures and Algorithms</h3>
                <p className="course-description">
                  Hello and welcome to my channel, Vishal Gupta Computer Science! Here, we will delve into the fascinating world of data structures and algorithms. I am a passionate assistant professor dedicated to computer science education, and I am thrilled to impart my knowledge to you. In this video, we will cover the syllabus for your university and competitive exams. You will discover valuable insights and practical examples here. 🔔 Make sure to subscribe to my channel.
                </p>
              </div>
              <div className="course-meta">
                <div className="course-videos">
                  <p>57 Videos</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/course/2" className="course-link">
            <div className="course-item">
              <img src={course2Image} alt="Theory of Computation and Formal Languages" className="course-image" />
              <div className="course-info">
                <h3 className="course-title">Theory of Computation and Formal Languages</h3>
                <p className="course-description">
                  Join us on this channel as we delve into the fascinating realm of Theory of Computation and Formal Languages. We'll uncover the foundational principles and theories that drive the world of computing. If you're eager to explore the theoretical underpinnings of Computer Science, subscribe and enable notifications to stay up-to-date. Let's embark on this exciting journey together and delve into the illuminating world of theoretical computing!
                </p>
              </div>
              <div className="course-meta">
                <div className="course-videos">
                  <p>15 Videos</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
