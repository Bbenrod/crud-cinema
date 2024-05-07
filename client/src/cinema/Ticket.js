export default function Ticket() {
    return (
      <div className="ticket-container">
        <h2>Resumen</h2>
        <div className="summary">
          <div>
            <h3>Película</h3>
            <p>Avengers: Endgame</p>
          </div>
          <div>
            <h3>Asientos</h3>
            <p>A1, A2, A3, B1, B2</p>
          </div>
          <div>
            <h3>Precio total</h3>
            <p>$75.00</p>
          </div>
        </div>
        <button className="purchase-button">Comprar boletos</button>
      </div>
    );
  }  