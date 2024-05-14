import React, { useState } from 'react';

const Ticket = ({ selectedMovie, selectedSeats, functions }) => {
  const [purchased, setPurchased] = useState(false);
  const [error, setError] = useState(null);

  // Función para manejar la compra de boletos
  const handlePurchase = async () => {
    if (selectedSeats.length === 0) {
      setError("Por favor, seleccione al menos un asiento antes de comprar.");
      return;
    }

    const functionId = selectedMovie;
    const requestBody = {
      seat_ids: selectedSeats
    };

    try {
      const response = await fetch(`http://localhost:8080/api/functions/${functionId}/seats/buy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        setPurchased(true);
        window.alert('¡Boletos comprados con éxito!');
        // Reinicia la página después de cerrar el mensaje emergente
        window.location.reload();
      } else {
        setError("Hubo un error al comprar los boletos. Por favor, inténtelo de nuevo más tarde.");
      }
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      setError("Hubo un error al comprar los boletos. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  // Función para obtener el nombre de la película a partir del ID de la función
  const getMovieTitle = functionId => {
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
          <p>{selectedMovie ? getMovieTitle(selectedMovie) : 'Seleccione una película'}</p>
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
      {error && <p className="error">{error}</p>}
      <button className="purchase-button" onClick={handlePurchase} disabled={purchased}>Comprar boletos</button>
    </div>
  );
};

export default Ticket;