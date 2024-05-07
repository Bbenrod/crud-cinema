import React, { useState } from 'react';

const Movies = ({ functions }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Función para manejar la selección de la película
  const handleMovieSelection = (movieId) => {
    setSelectedMovie(movieId);
  };

  console.log(functions); // Verifica los datos de entrada

  return (
    <div className="movies-container">
      <h2>Películas</h2>
      {functions.map(movie => (
        <button
          key={movie._id}
          className={`movie-button ${selectedMovie === movie._id ? 'selected' : ''}`}
          onClick={() => handleMovieSelection(movie._id)}
        >
          {movie.movie_title}
        </button>
      ))}
    </div>
  );
};

export default Movies;