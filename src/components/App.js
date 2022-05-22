import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import fetchResponse from '../apiCalls';
import MovieContainer from './MovieContainer';
import MovieDetailsContainer from './MovieDetailsContainer';
import NavBar from './NavBar';
import '../styles/App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
        movies: [],
        searchedMovies: [],
        currentMovie: [],
        error: '',
        searchBarValue: ''
      }
  }

  componentDidMount = () => {
    fetchResponse('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(movies => {this.setState({ movies: movies.movies })})
    .catch(err => {
      console.log(err);              
      this.setState({error: `${err}. Things don't seem to be working out right now, try again later!`});
    });
  }

  loadMovieDetails = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ currentMovie: selectedMovie, searchBarValue: '' });
  }

  goHome = () => {
    this.setState({ currentMovie: [], searchedMovies: [], error: '', searchBarValue: '' });
  }

  handleChange = (event) => {
    this.setState({ searchBarValue: event.target.value, searchedMovies: this.movies });
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.title.toUpperCase().includes(event.target.value.toUpperCase());
    });
    this.setState({ searchedMovies: filteredMovies });
  }

  render() {
    return(
      <main className='app-main'>
        <NavBar goHome={ this.goHome } handleChange={ this.handleChange } searchBarValue={ this.state.searchBarValue }/>
        { this.state.error.length && <h1 className='error-msg'>{ this.state.error }</h1> }
        <Switch>
          <Route exact path="/" render={() => {
            if (!Object.keys(this.state.searchedMovies).length) {
              return <MovieContainer movies={ this.state.movies } loadMovieDetails={ this.loadMovieDetails }/> 
            } else {
              return <MovieContainer movies={ this.state.searchedMovies } loadMovieDetails={ this.loadMovieDetails } />
            }
          }} /> 
          <Route exact path="/movie/:id" render={({ match }) => {
            return <MovieDetailsContainer movieId={ parseInt(match.params.id) } loadMovieDetails={ this.loadMovieDetails } /> } } />
        </Switch>
      </main>
    )
  }
}

export default App;