import React, { useEffect } from 'react';
import './App.css';

function App() {

  // App.jsxのfunction App()の最初に追加
  const tours = [
    {
      id: 1,
      title: "Victoria Falls Adventure",
      description: "Experience the magnificent Victoria Falls, one of the Seven Wonders of the World.",
      duration: 3,
      type: "adventure",
      category: "natural",
      image: "/images/tours/Tour of the falls-12.jpg"
    },
    {
      id: 2,
      title: "Hwange Safari",
      description: "Explore Zimbabwe's largest national park and witness incredible wildlife.",
      duration: 5,
      type: "wildlife",
      category: "safari",
      image: "/images/tours/Game Drive-2.jpg"
    },
    {
      id: 3,
      title: "Traditional Village Tour",
      description: "Discover the ancient city and learn about Zimbabwe's rich history.",
      duration: 2,
      type: "cultural",
      category: "history",
      image: "/images/tours/Traditional Village tour-3.jpg"
    }
  ];

  // フィルター機能のためのstateを追加
  const [selectedFilter, setSelectedFilter] = React.useState('all');

  // タイトルの更新
  useEffect(() => {
    document.title = `Zimbabwe Tours - ${selectedFilter}`;
  }, [selectedFilter]);



  // フィルタリング関数
  const filteredTours = tours.filter(tour => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'short') return tour.duration <= 3;
    if (selectedFilter === 'long') return tour.duration >= 5;
    return tour.type === selectedFilter;
  });

  //アニメーション効果
  useEffect(() => {
    const cards = document.querySelectorAll('.tour-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 200);
    });
  }, [filteredTours]);

  return (
    <div className="App">
      <header className="header">
        <img
          src="/images/tours/Vicfalls15.jpg"
          alt="ジンバブエの美しい風景"
          className="header-bg"
        />
        <div className="header-content">
          <h1>🇿🇼 Zimbabwe Adventure Tours</h1>
          <p>Discover the Beauty of Zimbabwe</p>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Experience Amazing Zimbabwe</h2>
          <p>Join us for unforgettable adventures through Zimbabwe's stunning landscapes, wildlife, and culture.</p>
        </section>

        <section className="tours">
          <h3>Popular Tours</h3>

          {/* フィルターボタンを追加 */}
          <div className="filter-buttons">
            <button
              className={selectedFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedFilter('all')}
            >
              All Tours
            </button>
            <button
              className={selectedFilter === 'short' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedFilter('short')}
            >
              Short (≤3 days)
            </button>
            <button
              className={selectedFilter === 'long' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedFilter('long')}
            >
              Long (≥5 days)
            </button>
            <button
              className={selectedFilter === 'adventure' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedFilter('adventure')}
            >
              Adventure
            </button>
            <button
              className={selectedFilter === 'wildlife' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedFilter('wildlife')}
            >
              Wildlife
            </button>
            <button
              className={selectedFilter === 'cultural' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedFilter('cultural')}
            >
              Cultural
            </button>
          </div>
        </section>

        <div className="tour-grid">
          {filteredTours.map(tour => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.title} />
              <h4>{tour.title}</h4>
              <p>{tour.description}</p>
              <p><strong>Duration:</strong> {tour.duration} days</p>
              <p><strong>Type:</strong> {tour.type}</p>
            </div>
          ))}
        </div>


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
    </div >
  );
}

export default App;