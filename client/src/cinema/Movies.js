import React from 'react';

const Movies = ({ functions, setSelectedMovie }) => {
  return (
    <div className="movies-container">
      <h2>Películas</h2>
      {functions.map(movie => (
        <button
          key={movie._id}
          className="movie-button"
          onClick={() => setSelectedMovie(movie.function_id)} // Cambio aquí
        >
          {movie.movie_title}
        </button>
      ))}
    </div>
  );
};

export default Movies;