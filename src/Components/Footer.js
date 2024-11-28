// Footer.js
import React from 'react';
import './Footer.css';

function Footer({ language }) {
  const texts = {
    en: '© 2024 Created by: Sharshenbekov Akjol',
    ru: '© 2024 Создано: Шаршенбеков Акжол',
  };

  return (
    <footer className="footer">
      {texts[language]}
    </footer>
  );
}

export default Footer;
