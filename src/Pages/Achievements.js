import React from 'react';
import './Pages.css';

function Achievements() {
  return (
    <div className="page">
      <h1>My Achievements</h1>

      <section className="achievement-section">
        <h2>Sports Achievements</h2>
        <ul>
          <li>🥇 Completed 1st year of IT in Salymbekov University </li>
          <li>🥈 2nd place - football cup Bishkek </li>
          <li>🥉 Awarded 3</li>
        </ul>
      </section>

      <section className="achievement-section">
        <h2>IT Achievements</h2>
        <ul>
          <li>🏆 Participated on hackaton</li>
          <li>💻 Completed personal portfolio</li>

        </ul>
      </section>
    </div>
  );
}

export default Achievements;
