import React, { useState, useEffect } from 'react';

const Seats = ({ selectedMovie }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (selectedMovie) {
      // Realiza la solicitud a la API para obtener los asientos de la película seleccionada
      fetch(`http://localhost:8080/api/functions/${selectedMovie}/seats`)
        .then(response => response.json())
        .then(data => {
          console.log('Asientos recibidos:', data);
          setSeats(data);
        })
        .catch(error => console.error('Error fetching seats:', error));
    }
  }, [selectedMovie]);

  // Función para organizar los asientos por filas
  const organizeSeatsByRows = () => {
    const rows = [];
    for (let i = 0; i < seats.length; i += 7) {
      rows.push(seats.slice(i, i + 7));
    }
    return rows;
  };

  const organizedSeats = organizeSeatsByRows();

  // Función para manejar la selección de asientos
  const handleSeatSelection = seat => {
    if (seat.availability) {
      const updatedSelectedSeats = [...selectedSeats, seat];
      setSelectedSeats(updatedSelectedSeats);
    }
  };

  return (
    <div className="seats-container">
      <h2>Selecciona tus asientos</h2>
      <div className="grid grid-cols-7 gap-2">
        {/* Mapea las filas de asientos y muestra los botones */}
        {organizedSeats.map((row, index) => (
          <div key={index} className="flex justify-center">
            {row.map(seat => (
              <button
                key={seat._id}
                className={`seat-btn ${seat.availability ? 'available' : 'unavailable'} ${selectedSeats.includes(seat) ? 'selected' : ''}`}
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