import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './cinema/Movies';
import Seats from './cinema/Seats';
import Ticket from './cinema/Ticket';

const App = () => {
  const [functions, setFunctions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/functions')
      .then(response => response.json())
      .then(data => setFunctions(data))
      .catch(error => console.error('Error fetching functions:', error));
  }, []);

  return (
    <div className="container">
      <Movies functions={functions} setSelectedMovie={setSelectedMovie} />
      <Seats selectedMovie={selectedMovie} />
      <Ticket />
    </div>
  );
};

export default App;