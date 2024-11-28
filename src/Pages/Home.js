// Home.js
import React from 'react';
import './Pages.css';
import Footer from '../Components/Footer';

function Home({ language }) {
  const texts = {
    en: {
      title: 'Welcome to My Portfolio',
      name: 'Sharshenbekov Akjol',
      description: 'I am trying to be a web developer',
    },
    ru: {
      title: 'Добро пожаловать в мое портфолио',
      name: 'Шаршенбеков Акжол',
      description: 'Я пытаюсь стать веб-разработчиком . Я учусь Салымбеков университете 2 курс данный момент занимаюсь с Reac.js  ',
    },
  };

  return (
    <div className="page">
      <h1 className="blinking-text">{texts[language].title}</h1>
      <div className="about-me">
        <img src="/Images/222.jpg" alt="Portfolio" className="navbar-img-face22" />
        <h2>{texts[language].name}</h2>
        <p>{texts[language].description}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
