// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleDarkMode, darkMode, toggleLanguage, language }) {
  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      achievements: 'Achievements',
     
    },
    ru: {
      home: 'Главная',
      about: 'Обо мне',
      projects: 'Проекты',
      achievements: 'Достижения',
    
    },
  };

  const t = translations[language];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <img src="/Images/akjol22.jpg" alt="Portfolio" className="navbar-img-face" />
        <li><Link to="/">{t.home}</Link></li>
        <li><Link to="/about">{t.about}</Link></li>
        <li><Link to="/projects">{t.projects}</Link></li>
        <li><Link to="/achievements">{t.achievements}</Link></li>
      </ul>
      
      <button className="language-toggle-btn" onClick={toggleLanguage}>
        {language === 'en' ? 'Русский' : 'English'}
      </button>
    </nav>
  );
}

export default Navbar;
