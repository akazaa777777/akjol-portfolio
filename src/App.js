// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Achievements from './Pages/Achievements';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en'); // Global language state

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  return (
    <div>
      <Navbar toggleLanguage={toggleLanguage} language={language} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/achievements" element={<Achievements language={language} />} />
        <Route path="/projects" element={<Projects language={language} />} />
      </Routes>
      <Footer language={language} />
    </div>
  );
}

export default App;
