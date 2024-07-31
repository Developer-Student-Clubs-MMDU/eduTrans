import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Community from './components/Community';
import Profile from './components/Profile';
import TopBar from './components/TopBar';
import SignInSignUpForm from './components/SignInSignUpForm';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CourseDetails from './components/CourseDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <MainContent />
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const hideSidebarRoutes = ['/signin'];

  const isSidebarVisible = !hideSidebarRoutes.includes(location.pathname);

  return (
    <>
      {isSidebarVisible && <Sidebar />}
      <div className="content">
        {isSidebarVisible && <TopBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/signin" element={<SignInSignUpForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
