import React, { useState, useEffect } from 'react';

const Seats = ({ selectedMovie, setSelectedSeats, selectedSeats }) => {
  const [seats, setSeats] = useState([]);

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

  return (
    <div className="seats-container">
      <h2>Selecciona tus asientos</h2>
      <div className="grid grid-cols-7 gap-2">
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
    </div>
  );
};

export default Seats;