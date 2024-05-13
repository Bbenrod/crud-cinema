import React, { useState } from 'react';

const Ticket = ({ selectedMovie, selectedSeats, functions }) => {
  const [purchased, setPurchased] = useState(false);

  // Función para manejar la compra de boletos
  const handlePurchase = () => {
    setPurchased(true);
  };

  // Función para obtener el nombre de la película a partir del ID de la función
  const getMovieTitle = (functionId) => {
    const movie = functions.find(movie => movie.function_id === functionId);
    return movie ? movie.movie_title : 'Seleccione una película';
  };

  const selectedSeatsCount = selectedSeats ? selectedSeats.length : 0;

  return (
    <div className="ticket-container">
      <h2>Resumen</h2>
      <div className="summary">
        <div>
          <h3>Película</h3>
          <p>{selectedMovie ? getMovieTitle(selectedMovie) : 'Seleccione una película'}</p> {/* Utilizar la función getMovieTitle para obtener el nombre de la película */}
        </div>
        <div>
          <h3>Asientos</h3>
          <p>{selectedSeatsCount > 0 ? selectedSeats.join(', ') : 'Seleccione asientos'}</p>
        </div>
        <div>
          <h3>Precio total</h3>
          <p>${selectedSeatsCount * 60}</p>
        </div>
      </div>
      {!purchased && <button className="purchase-button" onClick={handlePurchase}>Comprar boletos</button>}
      {purchased && <p>¡Boletos comprados con éxito!</p>}
    </div>
  );
};

export default Ticket;