import React, { useState } from 'react';
import './App.css';
import MoviesContainer from './MoviesContainer';
import SeatingContainer from './SeatingContainer';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [reservedSeats, setReservedSeats] = useState([]);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const toggleSeatSelection = (seatKey) => {
    if (!reservedSeats.includes(seatKey)) {
      setReservedSeats(prevSeats => [...prevSeats, seatKey]);
    }
  };

  const reserveSeats = () => {
    alert('Los asientos han sido reservados correctamente.');
    // Aquí puedes agregar la lógica para enviar la reserva al servidor
    setReservedSeats([]);
  };

  return (
    <div className="container">
      <MoviesContainer movies={['Titanic', 'El Padrino', 'Forrest Gump']} selectMovie={selectMovie} />
      <SeatingContainer
        rows={6}
        seatsPerRow={10}
        reservedSeats={reservedSeats}
        toggleSeatSelection={toggleSeatSelection}
      />
      <button id="reserve-btn" onClick={reserveSeats}>Reservar Asientos</button>
    </div>
  );
};

export default App;