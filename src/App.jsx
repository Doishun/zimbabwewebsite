import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>🇿🇼 Zimbabwe Adventure Tours</h1>
        <p>Discover the Beauty of Zimbabwe</p>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Experience Amazing Zimbabwe</h2>
          <p>Join us for unforgettable adventures through Zimbabwe's stunning landscapes, wildlife, and culture.</p>
        </section>

        <section className="tours">
          <h3>Popular Tours</h3>
          <div className="tour-grid">
            <div className="tour-card">
              <h4>Victoria Falls Adventure</h4>
              <p>Experience the magnificent Victoria Falls, one of the Seven Wonders of the World.</p>
              <p><strong>Duration:</strong> 3 days</p>
            </div>
            <div className="tour-card">
              <h4>Hwange Safari</h4>
              <p>Explore Zimbabwe's largest national park and witness incredible wildlife.</p>
              <p><strong>Duration:</strong> 5 days</p>
            </div>
            <div className="tour-card">
              <h4>Great Zimbabwe Ruins</h4>
              <p>Discover the ancient stone city and learn about Zimbabwe's rich history.</p>
              <p><strong>Duration:</strong> 2 days</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h3>Ready to Book?</h3>
          <p>Contact us to plan your perfect Zimbabwe adventure!</p>
          <a 
            href="https://forms.google.com/your-form-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="book-button"
          >
            Book Your Tour
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;