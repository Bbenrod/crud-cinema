import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './cinema/Movies';
import Seats from './cinema/Seats';
import Ticket from './cinema/Ticket';

const App = () => {
  const [functions, setFunctions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]); // Agrega estado para los asientos seleccionados

  useEffect(() => {
    fetch('http://localhost:8080/api/functions')
      .then(response => response.json())
      .then(data => setFunctions(data))
      .catch(error => console.error('Error fetching functions:', error));
  }, []);

  return (
    <div className="container">
      <Movies functions={functions} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} />
      <Seats selectedMovie={selectedMovie} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} />
      <Ticket selectedMovie={selectedMovie} selectedSeats={selectedSeats} functions={functions} /> {/* Pasa selectedSeats como prop */}
    </div>
  );
};

export default App;