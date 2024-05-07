import React from 'react';

const MoviesContainer = ({ movies, selectMovie }) => {
  return (
    <div className="movies-container">
      <h2>Películas</h2>
      {movies.map((movie, index) => (
        <div key={index} className="movie" onClick={() => selectMovie(movie)}>
          {movie}
        </div>
      ))}
    </div>
  );
};

export default MoviesContainer;
