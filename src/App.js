import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovieHandler = () => {
    fetch('https://swapi.dev/api/films/').then(response => {
      return response.json();
    }).then( data => {
      console.log(data);
      const transformedMovies = data.results.map(moviesData => {
        return {
          id: moviesData.episode_id,
          title:moviesData.title,
          openingText:moviesData.opening_crawl,
          releaseDate:moviesData.release_date
        }
      });
      setMovies(transformedMovies);
    })
    
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;