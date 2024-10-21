import React from 'react';
import './Pages.css';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Portfolio</h1>
      <img src="/Images/1.png" alt="Portfolio" className="portfolio-img" />
      <div className="about-me">
        <h2>Sharshenbekov Akjol</h2>
        <p>I am tryinig to be a webdeveloper</p>
      </div>
    </div>
  );
}

export default Home;
