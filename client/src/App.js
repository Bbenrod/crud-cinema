import React, { useState, useEffect } from 'react';
import './App.css';
import MovieContainer from './cinema/MovieContainer'; // Importa MovieContainer
import SeatingContainer from './cinema/SeatingContainer';

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
      <MovieContainer functions={functions} /> {/* Usa MovieContainer */}
      <SeatingContainer />
    </div>
  );
};

export default App;