const Movies = ({ functions, setSelectedMovie, selectedMovie }) => {
  const handleMovieSelection = (movieId) => {
    setSelectedMovie(movieId);
  };

  return (
    <div className="movies-container">
      <h2>Películas</h2>
      {functions.map(movie => (
        <button
          key={movie._id}
          className={`movie-button ${selectedMovie === movie.function_id ? 'selected' : ''}`}
          onClick={() => handleMovieSelection(movie.function_id)} // Usar movie.function_id en lugar de movie._id
        >
          {movie.movie_title}
        </button>
      ))}
    </div>
  );
};

export default Movies;