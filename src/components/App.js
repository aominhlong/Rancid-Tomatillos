import React, {Component} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import MovieContainer from './MovieContainer';
import MovieDetailsContainer from './MovieDetailsContainer';
import NavBar from './NavBar';
import '../styles/App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
        movies: {},
        searchedMovies: {},
        currentMovie: {},
        error: '',
        searchBarValue: ''
      }
  }

  componentDidMount = () => {
    // fetch('https://httpstat.us/500') 
    // fetch('https://rancid-tomatillos.herokuapp.com/api/v2/moviesbittermelon') 
    console.log('componentDidMount is working')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if(!response.ok) {
        console.log('HTTP request unsuccessful');
        this.setState({error: `Network Error - status ${response.status} at URL: ${response.url}`});
        throw new Error(`status ${response.status} at URL: ${response.url}`)
      } else {
        console.log('HTTP request successful');
      }
      return response;
    })
    .then(response => response.json())
    .then(movies => { 
      return this.setState({ movies: movies })})
    .catch(err => console.log(err));
  }

  loadMovieDetails = (id) => {
    const selectedMovie = this.state.movies.movies.find(movie => movie.id === id);
    this.setState({ currentMovie: selectedMovie, searchBarValue: ''});
  }

  goHome = () => {
    this.setState({ currentMovie: {}, searchedMovies: {}, error: '', searchBarValue: '' });
  }

  handleChange = (event) => {
    this.setState({ searchBarValue: event.target.value, searchedMovies: this.movies})
    const filteredMovies = this.state.movies.movies.filter(movie => {
      return movie.title.toUpperCase().includes(event.target.value.toUpperCase());
    });
    this.setState({ searchedMovies: {movies: filteredMovies}});
  }

  render() {
    return(
      <main className='app-main'>
        <NavBar goHome={this.goHome} handleChange={ this.handleChange } searchBarValue={this.state.searchBarValue}/>
        <h1>{this.state.error}</h1>

        <Switch>
          {/* Load all movies and load searched movies */}
          <Route exact path="/" render={() => {
            if (!Object.keys(this.state.searchedMovies).length) {
              return <MovieContainer movies={this.state.movies} loadMovieDetails={ this.loadMovieDetails }/> 
            } else {
              return <MovieContainer movies={this.state.searchedMovies} loadMovieDetails={ this.loadMovieDetails } />
            }
          }} /> 

          {/* Page load on user clicking on a poster */}
          <Route exact path="/movie/:id" render={({ match }) => {
            return <MovieDetailsContainer movieId={ parseInt(match.params.id) } loadMovieDetails={ this.loadMovieDetails } /> } } />
        </Switch>

      </main>
    )
  }
}

export default App;


