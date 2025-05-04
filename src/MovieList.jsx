import Movie from "./Movie";

export default function MovieList({ movies, handleSelectedMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          handleSelectedMovie={handleSelectedMovie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}
