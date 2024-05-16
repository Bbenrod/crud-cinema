import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './cinema/Movies';
import Seats from './cinema/Seats';
import Ticket from './cinema/Ticket';

const App = () => {
  const [functions, setFunctions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('Movies');

  useEffect(() => {
    fetch('http://localhost:8080/api/functions')
      .then(response => response.json())
      .then(data => setFunctions(data))
      .catch(error => console.error('Error fetching functions:', error));
  }, []);

  const handleMovieSelection = (movieId) => {
    setSelectedMovie(movieId);
    setCurrentScreen('Seats');
  };

  const handleReturnToMovies = () => {
    setCurrentScreen('Movies');
  };

  const handleProceedToTicket = () => {
    setCurrentScreen('Ticket');
  };

  return (
    <div className="container">
      {currentScreen === 'Movies' && (
        <Movies functions={functions} setSelectedMovie={handleMovieSelection} selectedMovie={selectedMovie} />
      )}
      {currentScreen === 'Seats' && (
        <Seats
          selectedMovie={selectedMovie}
          setSelectedSeats={setSelectedSeats}
          selectedSeats={selectedSeats}
          onReturn={handleReturnToMovies}
          onProceedToTicket={handleProceedToTicket} // Pasar la función handleProceedToTicket como prop onProceedToTicket
        />
      )}
      {currentScreen === 'Ticket' && (
        <Ticket
          selectedMovie={selectedMovie}
          selectedSeats={selectedSeats}
          functions={functions}
          onReturn={handleReturnToMovies}
        />
      )}
    </div>
  );
};

export default App;