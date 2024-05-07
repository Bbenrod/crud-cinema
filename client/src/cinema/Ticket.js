import React, { useState } from 'react';

const Ticket = ({ selectedMovie, selectedSeats }) => {
  const [purchased, setPurchased] = useState(false); // Estado para controlar si se han comprado los boletos

  // Función para manejar la compra de boletos
  const handlePurchase = () => {
    // Lógica para realizar la compra de los boletos (aquí puedes agregar tu lógica específica)
    // Una vez que se completa la compra, establece el estado purchased en true
    setPurchased(true);
  };

  const selectedSeatsCount = selectedSeats ? selectedSeats.length : 0; // Verifica si selectedSeats es null o undefined

  return (
    <div className="ticket-container">
      <h2>Resumen</h2>
      <div className="summary">
        <div>
          <h3>Película</h3>
          <p>{selectedMovie ? selectedMovie.movie_title : 'Seleccione una película'}</p>
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