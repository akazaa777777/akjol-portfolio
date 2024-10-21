import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Achievements from './Pages/Achievements';


import './App.css';

function App() {
  return (
    <>
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
        </div>
 
        <Footer />
      </>
   
  );
}

export default App;
