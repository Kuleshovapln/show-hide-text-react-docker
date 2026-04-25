import { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleText() {
    setIsVisible(!isVisible);
  }

  return (
    <main className="app">
      <section className="card">
        <p className="student-name"></p>
        <h1>Кнопка «Показать/скрыть текст»</h1>
        <p className="description">
          Кулешов Денис ВД-1-23
        </p>

        <button className="toggle-button" onClick={toggleText}>
          {isVisible ? 'Скрыть текст' : 'Показать текст'}
        </button>

        {isVisible && (
          <p className="hidden-text">
            Здравствуйте, Андрей Николаевич.
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
