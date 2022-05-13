import React, {Component} from 'react';
import MovieContainer from './MovieContainer';
import MovieDetailsContainer from './MovieDetailsContainer';
import movieData from '../movieData';
import '../styles/App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
        movies: movieData.movies
      }
  }

  loadMovieDetails = (title) => {
    console.log(title)
  }

  render() {
      return(
        <main className='container'>
          <MovieContainer movies={this.state.movies} loadMovieDetails={this.loadMovieDetails} />
        </main>
      )
  }
}

export default App;
