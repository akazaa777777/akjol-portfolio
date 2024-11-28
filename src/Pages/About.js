import React from 'react';
import './About.css'; // CSS для страницы About
import Footer from '../Components/Footer';

function About({ language }) {
  const texts = {
    en: {
      aboutTitle: 'About Me',
      aboutText: 'My name is Akzhol Sharshenbekov, I study at Salymbekov University in a creative program. I am a web developer and want to become a programmer. I am from Naryn, At-Bashi. My hobbies include playing computer games.',
      skillsTitle: 'My Skills',
    },
    ru: {
      aboutTitle: 'Обо мне',
      aboutText: 'Меня зовут Акжол Шаршенбеков, я учусь в Университете Салымбекова на творческом направлении. Я веб-разработчик и хочу стать программистом. Я из Нарына, Ат-Баши. Моё хобби — играть в компьютерные игры.',
      skillsTitle: 'Мои навыки',
    },
  };

  const content = texts[language];

  return (
    <div className="about-page">
      <h1>{content.aboutTitle}</h1>
      <p>{content.aboutText}</p>

      <div className="skills-section">
        <h3>{content.skillsTitle}</h3>
        <div className="skills">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Python'].map((skill, index) => (
            <div className="skill" key={index} style={{ '--skill-index': index }}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
