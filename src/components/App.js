import React, {Component} from 'react';
import MovieContainer from './MovieContainer';
import MovieDetailsContainer from './MovieDetailsContainer';
import movieData from '../movieData';
import NavBar from './NavBar';
import '../styles/App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
        movies: {},
        currentMovie: {}
      }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(movies => this.setState({ movies: movies }))
    .catch(err => console.log('Error: ', err));
  }

  loadMovieDetails = (id) => {
    const selectedMovie = this.state.movies.movies.find( movie => {
      return movie.id === id
    })
    this.setState({ currentMovie: selectedMovie })
  }

  goHome = () => {
    this.setState({ currentMovie: {} })
  }

  render() {
      return(
        <main className='container'>
          <NavBar goHome={this.goHome}/>
          {(!Object.keys(this.state.currentMovie).length && Object.keys(this.state.movies).length) && <MovieContainer movies={this.state.movies} loadMovieDetails={this.loadMovieDetails} />}
          {/* <MovieContainer movies={this.state.movies} loadMovieDetails={this.loadMovieDetails} /> */}
          {Object.keys(this.state.currentMovie).length && <MovieDetailsContainer movie={this.state.currentMovie} />}
        </main>
      )
  }
}

export default App;
