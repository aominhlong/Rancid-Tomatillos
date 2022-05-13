import React, {Component} from 'react';
import MovieContainer from './MovieContainer';
import MovieDetailsContainer from './MovieDetailsContainer';
import movieData from '../movieData';
import '../styles/App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
        movies: movieData.movies,
        currentMovie: {}
      }
  }

  loadMovieDetails = (id) => {
    // console.log(Object.keys(this.state.currentMovie).length)
    const selectedMovie = this.state.movies.find( movie => {
      // console.log('movie', movie)
      return movie.id === id
    })
    console.log('selectedMove: ', selectedMovie)
    this.setState({ currentMovie: selectedMovie })
  }

  render() {
      return(
        <main className='container'>
          {!Object.keys(this.state.currentMovie).length && <MovieContainer movies={this.state.movies} loadMovieDetails={this.loadMovieDetails} />}
          {Object.keys(this.state.currentMovie).length && <MovieDetailsContainer movie={this.state.currentMovie} />}
        </main>
      )
  }
}

export default App;
