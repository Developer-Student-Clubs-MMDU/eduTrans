import React, { useEffect, useState } from 'react';
import './Profile.css';

const languagesAPI = 'https://restcountries.com/v3.1/all'; // API to get languages

function Profile() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch(languagesAPI)
      .then(response => response.json())
      .then(data => {
        const languageSet = new Set();
        data.forEach(country => {
          if (country.languages) {
            Object.values(country.languages).forEach(lang => languageSet.add(lang));
          }
        });
        setLanguages(Array.from(languageSet).sort());
      });
  }, []);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="profile">
       <h1>Profile</h1>
      <div className="profile-container name-container">
        <h2>Name</h2>
        <p>John Doe</p> {/* Replace with dynamic user name */}
      </div>
      <div className="profile-container email-container">
        <h2>Email</h2>
        <p>john.doe@example.com</p> {/* Replace with dynamic user email */}
      </div>
      <div className="profile-container language-container">
        <h2>Language Preferences</h2>
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languages.map((lang, index) => (
            <option key={index} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Profile;
