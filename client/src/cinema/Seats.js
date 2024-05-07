import React, { useState, useEffect } from 'react';

const Seats = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API para obtener los asientos de la función 1
    fetch('http://localhost:8080/api/functions/1/seats')
      .then(response => response.json())
      .then(data => {
        console.log('Asientos recibidos:', data);
        setSeats(data);
      })
      .catch(error => console.error('Error fetching seats:', error));
  }, []);

  // Función para organizar los asientos por filas
  const organizeSeatsByRows = () => {
    const rows = [];
    for (let i = 0; i < seats.length; i += 7) {
      rows.push(seats.slice(i, i + 7));
    }
    return rows;
  };

  const organizedSeats = organizeSeatsByRows();

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
                className={`seat-btn ${seat.availability ? 'available' : 'unavailable'}`}
                disabled={!seat.availability}
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