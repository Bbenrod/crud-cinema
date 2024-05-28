import React, { useState, useEffect } from 'react';

const Seats = ({ selectedMovie, setSelectedSeats, selectedSeats, onReturn, onProceedToTicket }) => {
  const [seats, setSeats] = useState([]);
  const [canProceed, setCanProceed] = useState(false); // Agregar estado para controlar si se pueden comprar boletos

  useEffect(() => {
    setSelectedSeats([]); // Restablecer los asientos seleccionados al cambiar la película seleccionada
    if (selectedMovie) {
      fetch(`http://localhost:8080/api/functions/${selectedMovie}/seats`)
        .then(response => response.json())
        .then(data => {
          console.log('Asientos recibidos:', data);
          setSeats(data);
        })
        .catch(error => console.error('Error fetching seats:', error));
    }
  }, [selectedMovie, setSelectedSeats]);

  useEffect(() => {
    // Verificar si se han seleccionado asientos
    setCanProceed(selectedSeats.length > 0);
  }, [selectedSeats]);

  const organizeSeatsByRows = () => {
    const rows = [];
    for (let i = 0; i < seats.length; i += 7) {
      rows.push(seats.slice(i, i + 7));
    }
    return rows;
  };

  const organizedSeats = organizeSeatsByRows();

  const handleSeatSelection = seat => {
    if (seat.availability) {
      setSelectedSeats(prevSelectedSeats => {
        if (prevSelectedSeats.includes(seat.seat_id)) {
          // Si el asiento ya está seleccionado, lo eliminamos de la lista
          return prevSelectedSeats.filter(selectedSeat => selectedSeat !== seat.seat_id);
        } else {
          // Si el asiento no está seleccionado, lo agregamos a la lista
          return [...prevSelectedSeats, seat.seat_id];
        }
      });
    }
  };

  const handleProceedToTicket = () => {
    console.log("Se ha intentado proceder a comprar boletos.");
    console.log("canProceed:", canProceed);
    if (canProceed) {
      console.log("Proceder a la pantalla de Ticket.");
      // Aquí deberías cambiar a la pantalla de Ticket
      onProceedToTicket(); // Llamar a la función proporcionada por el padre
    } else {
      console.log("No se pueden comprar boletos porque no se han seleccionado asientos.");
    }
  };

  return (
    <div className="seats-container">
      <h2>Selecciona tus asientos</h2>
       
      <div className="grid grid-cols-7 gap-2">
        <div className="screen"></div>
        {organizedSeats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center">
            {row.map(seat => (
              <button
                key={seat._id}
                className={`seat-btn ${seat.availability ? 'available' : 'unavailable'} ${selectedSeats.includes(seat.seat_id) ? 'selected' : ''}`}
                disabled={!seat.availability}
                onClick={() => handleSeatSelection(seat)}
              >
                {seat.seat_id}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="buttons-container">
        <button className="return-button" onClick={onReturn}>Regresar</button>
        <button className="buy-button" onClick={handleProceedToTicket} disabled={!canProceed}>Comprar</button>
      </div>
    </div>
  );
};

export default Seats;