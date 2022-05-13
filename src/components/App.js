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
        currentMovie: {},
        error: ''
      }
  }

  componentDidMount = () => {
    // fetch('https://rancid-tomatillos.herokuapp.com/api/v2/mo')
    fetch('https://httpstat.us/500')
    .then(response => {
      // console.log(response);
      // if(response.status >= 400) {
      //   console.log('HTTP request unsuccessful 400');
      // }
      if(!response.ok) {
        console.log('HTTP request unsuccessful');
        console.log('Error: ', response.status);
        throw new Error(`status ${response.status} at URL: ${response.url}`)
      } else {
        console.log('HTTP request successful');
      }
      
      return response;
    })
    .then(response => response.json())
    .then(movies => this.setState({ movies: movies }))
    .catch(err => console.log(err));
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
