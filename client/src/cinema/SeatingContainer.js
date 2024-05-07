import React from 'react';

const SeatingContainer = ({ rows, seatsPerRow, reservedSeats, toggleSeatSelection }) => {
  const generateSeatsHTML = () => {
    let html = '';
    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatKey = `${row}-${seat}`;
        const isReserved = reservedSeats.includes(seatKey);
        const seatClass = isReserved ? 'seat reserved' : 'seat';
        html += (
          <div key={seatKey} className={seatClass} onClick={() => toggleSeatSelection(seatKey)}>
            <span className="seat-info">{row}{String.fromCharCode(64 + seat)}</span>
          </div>
        );
      }
    }
    return html;
  };

  return (
    <div className="seating-container">
      <h2 className="screen">Pantalla</h2>
      <div className="seating">
        {generateSeatsHTML()}
      </div>
      <button id="reserve-btn">Reservar Asientos</button>
    </div>
  );
};

export default SeatingContainer;