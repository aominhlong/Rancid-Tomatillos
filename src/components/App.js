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
  render() {
      return(
        <main>
          <MovieContainer movies={this.state.movies} />
        </main>
      )
  }
}

export default App;
