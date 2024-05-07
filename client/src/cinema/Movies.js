import React from 'react';

export default function Movies({ functions }) {
  return (
    <div className="movies-container">
      <h2>Películas</h2>
      {functions.map(movie => (
        <a
          key={movie._id}
          href="#"
          className="movie-button"
        >
          {movie.movie_title}
        </a>
      ))}
    </div>
  );
}