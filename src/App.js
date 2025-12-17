import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Страницы для каждой страны
import Turkey from './pages/Turkey';
import UAE from './pages/UAE';
import Egypt from './pages/Egypt';
import Thailand from './pages/Thailand';
import Vietnam from './pages/Vietnam';
import Qatar from './pages/Qatar';
import Georgia from './pages/Georgia';
import Japan from './pages/Japan';
import China from './pages/China';

function App() {
  const [showButton, setShowButton] = useState(false);

  // Обработчик прокрутки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Останавливаем отправку формы
    alert('Ваш запрос принят. Спасибо!');
    scrollToTop(); // Возвращаем пользователя наверх страницы
  };

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="header">
          <h1>Туристические Туры</h1>
          <p>Откройте для себя лучшие направления</p>
        </header>

        <nav>
          <ul>
            <li><Link to="/turkey" className="country-link">Турция</Link></li>
            <li><Link to="/uae" className="country-link">ОАЭ</Link></li>
            <li><Link to="/egypt" className="country-link">Египет</Link></li>
            <li><Link to="/thailand" className="country-link">Таиланд</Link></li>
            <li><Link to="/vietnam" className="country-link">Вьетнам</Link></li>
            <li><Link to="/qatar" className="country-link">Катар</Link></li>
            <li><Link to="/georgia" className="country-link">Грузия</Link></li>
            <li><Link to="/japan" className="country-link">Япония</Link></li>
            <li><Link to="/china" className="country-link">Китай</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="main-content">
          <Routes>
            <Route path="/turkey" element={<Turkey />} />
            <Route path="/uae" element={<UAE />} />
            <Route path="/egypt" element={<Egypt />} />
            <Route path="/thailand" element={<Thailand />} />
            <Route path="/vietnam" element={<Vietnam />} />
            <Route path="/qatar" element={<Qatar />} />
            <Route path="/georgia" element={<Georgia />} />
            <Route path="/japan" element={<Japan />} />
            <Route path="/china" element={<China />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <h2>Какие у вас еще остались вопросы?</h2>
          <p>Если есть, напишите свой номер телефона, почту и имя, и оператор обязательно свяжется с вами.</p>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Имя:</label>
              <input type="text" id="name" name="name" placeholder="Введите ваше имя" required />
            </div>
            <div>
              <label htmlFor="phone">Телефон:</label>
              <input type="tel" id="phone" name="phone" placeholder="Введите ваш номер" required />
            </div>
            <div>
              <label htmlFor="email">Почта:</label>
              <input type="email" id="email" name="email" placeholder="Введите вашу почту" required />
            </div>
            <div>
              <label htmlFor="message">Вопрос:</label>
              <textarea id="message" name="message" placeholder="Ваш вопрос"></textarea>
            </div>
            <button type="submit">Отправить</button>
          </form>
        </footer>

        {/* Кнопка "Вернуться наверх" */}
        <button
          className={`back-to-top ${showButton ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          ↑
        </button>
      </div>
    </Router>
  );
}

export default App;







