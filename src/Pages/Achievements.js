// Achievements.js
import React from 'react';
import './Pages.css';
import Footer from '../Components/Footer';

function Achievements({ language }) {
  const texts = {
    en: {
      title: 'My Achievements',
      sports: 'Sports Achievements',
      it: 'IT Achievements',
      sportsAchievements: [
        '🥇 Completed 1st year of IT in Salymbekov University',
        '🥈 2nd place - football cup Bishkek',
        '🥉 Awarded 3rd place in a local tournament',
      ],
      itAchievements: [
        '🏆 Participated in hackathon',
        '💻 Completed personal portfolio',
      ],
    },
    ru: {
      title: 'Мои достижения',
      sports: 'Спортивные достижения',
      it: 'IT достижения',
      sportsAchievements: [
        '🥇 Завершил 1-й курс ИТ в университете Салымбекова',
        '🥈 2-е место - футбольный кубок Бишкек',
        '🥉 Награждён 3-м местом на местном турнире',
      ],
      itAchievements: [
        '🏆 Участвовал в хакатоне',
        '💻 Создал личное портфолио',
      ],
    },
  };

  return (
    <div className="page">
      <h1 className="blinking-text">{texts[language].title}</h1>
      <section className="achievement-section">
        <h2 className="blinking-text">{texts[language].sports}</h2>
        <ul className='fon'>
          {texts[language].sportsAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
      <section className="achievement-section">
        <h2 className="blinking-text">{texts[language].it}</h2>
        <ul className='fon2'>
          {texts[language].itAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Achievements;
