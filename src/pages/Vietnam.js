import React, { useState, useEffect } from 'react';
import './CountryPage.css';
import vietnamData from '../data/vietnamData.json'; // Убедитесь, что путь правильный

const Vietnam = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(vietnamData); // Устанавливаем данные из JSON
  }, []);

  const renderSection = (id) => {
    const section = data[id];
    if (!section) return null;

    return (
      <div className="tour-detail" id={id}>
        <h2>{section.title}</h2>
        <img src={section.image} alt={section.title} className="section-image" />
        {section.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="country-page">
      <nav>
        <ul className="navigation">
          <li><a href="#aviaperelet">Авиаперелет</a></li>
          <li><a href="#prozhivanie">Проживание</a></li>
          <li><a href="#pitanye">Питание</a></li>
          <li><a href="#transfer">Трансфер</a></li>
          <li><a href="#ekskursii">Экскурсии</a></li>
          <li><a href="#dopolnitelnie_uslugi">Дополнительные услуги</a></li>
        </ul>
      </nav>
      {renderSection('aviaperelet')}
      {renderSection('prozhivanie')}
      {renderSection('pitanye')}
      {renderSection('transfer')}
      {renderSection('ekskursii')}
      {renderSection('dopolnitelnie_uslugi')}
    </div>
  );
};

export default Vietnam;



