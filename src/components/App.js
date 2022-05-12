import '../styles/App.css';
import React, {Component} from 'react';
import MovieDetailsContainer from './MovieDetailsContainer';
import movieData from '../movieData';


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

        </main>
      )
  }
}

export default App;
