import React from 'react';

const Movies = ({ functions, setSelectedMovie, selectedMovie }) => {
  return (
    <div className="movies-container">
      <h2>Películas</h2>
      {functions.map(movie => (
        <button
          key={movie._id}
          className={`movie-button ${selectedMovie === movie.function_id ? 'selected' : ''}`}
          onClick={() => setSelectedMovie(movie.function_id)}
        >
          {movie.movie_title}
        </button>
      ))}
    </div>
  );
};

export default Movies;