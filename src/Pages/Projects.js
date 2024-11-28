import React from 'react';
import './Pages.css';
import Footer from '../Components/Footer';

function Projects({ language }) {
  const texts = {
    en: {
      title: 'My Projects',
      description: 'This is one of my projects: an online sneaker store!',
    },
    ru: {
      title: 'Мои проекты',
      description: 'Это один из моих проектов: онлайн-магазин кроссовок!',
    },
  };

  return (
    <div className="page">
      <h1>{texts[language].title}</h1>
      <p>{texts[language].description}</p>
      {/* Фиксированное изображение проекта */}
      <div className="project-image-container">
        <img
          src="/Images/проект.jpeg" /* путь к изображению */
          alt="Project Screenshot"
          className="project-image-fixed"
        />
      </div>
      <Footer language={language} />
    </div>
  );
}

export default Projects;
