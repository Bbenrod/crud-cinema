import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './cinema/Movies'; // Importa el componente Movies
import Seats from './cinema/Seats'; // Importa el componente Seats
import Ticket from './cinema/Ticket'; // Importa el componente Ticket

const App = () => {
  const [functions, setFunctions] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API para obtener las funciones disponibles
    fetch('http://localhost:8080/api/functions')
      .then(response => response.json())
      .then(data => setFunctions(data))
      .catch(error => console.error('Error fetching functions:', error));
  }, []);

  return (
    <div className="container">
      <Movies functions={functions} />
      <Seats />
      <Ticket />
    </div>
  );
};

export default App;