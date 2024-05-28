import React from 'react';

const Movies = ({ functions, setSelectedMovie, selectedMovie }) => {
  const handleMovieSelection = (movieId) => {
    setSelectedMovie(movieId);
  };

  return (
    <div className="movies-container">
      <h2>Películas</h2>
      <div className="movie-buttons-container">
        {functions.map(movie => (
          <button
            key={movie.function_id}
            className={`movie-button ${selectedMovie === movie.function_id ? 'selected' : ''}`}
            onClick={() => handleMovieSelection(movie.function_id)}
          >
            <img
              src={movie.movie_poster_url}
              alt={movie.movie_title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h3>{movie.movie_title}</h3>
              <p>{movie.movie_description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Movies;