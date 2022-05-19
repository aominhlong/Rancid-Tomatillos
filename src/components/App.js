import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MovieContainer from './MovieContainer';
import MovieDetailsContainer from './MovieDetailsContainer';
import NavBar from './NavBar';
import '../styles/App.css';

const Pizza = () => {
  return (
    <div>
      <h2>PIZZA PIZZA PIZZA</h2>
    </div>
  )
}

class App extends Component {
  constructor() {
      super()
      this.state = {
        movies: {},
        searchedMovies: {},
        currentMovie: {},
        error: ''
      }
  }

  componentDidMount = () => {
    // fetch('https://httpstat.us/500') 
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/moviesbittermelon') 
    // fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
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
    .then(movies => this.setState({ movies: movies }))
    .catch(err => console.log(err));
  }

  loadMovieDetails = (id) => {
    const selectedMovie = this.state.movies.movies.find(movie => movie.id === id);
    this.setState({ currentMovie: selectedMovie });
  }

  goHome = () => {
    this.setState({ currentMovie: {}, searchedMovies: {}, error: '' });
  }

  handleChange = (event) => {
    const filteredMovies = this.state.movies.movies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({ searchedMovies: {movies: filteredMovies}});
  }

  render() {
      return(
        <main className='app-main'>
          <NavBar goHome={ this.goHome } handleChange={ this.handleChange }/>
          <h2 className='error-msg'>{this.state.error}</h2>
          {/* <Switch> */}
          {/* <Route exact path="/" component={() => <MovieContainer movies={ this.state.movies } loadMovieDetails={ this.loadMovieDetails } />} /> */}
          {/* </Switch> */}
          {/* If there is no search, then load all movies */}
          <Route exact path="/pizza" component={Pizza}/>
          {(!Object.keys(this.state.currentMovie).length 
            && Object.keys(this.state.movies).length 
            && !Object.keys(this.state.searchedMovies).length)
            && <Route exact path="/" component={() => <MovieContainer movies={ this.state.movies } loadMovieDetails={ this.loadMovieDetails } />} /> 
          }

          {/* Load search results instead */}
          {(!Object.keys(this.state.currentMovie).length && Object.keys(this.state.searchedMovies).length) 
            && <MovieContainer movies={this.state.searchedMovies} loadMovieDetails={ this.loadMovieDetails } /> 
          }
          
          {/* Page load on user clicking on a poster */}
          {Object.keys(this.state.currentMovie).length && <MovieDetailsContainer movieId={ this.state.currentMovie.id } />}
        </main>
      )
  }
}

export default App;


// render() {
//   return(
//     <main className='app-main'>
//       <NavBar goHome={this.goHome} handleChange={ this.handleChange }/>
//       <h1>{this.state.error}</h1>

//       {/* If there is no search, then load all movies */}
//       {(!Object.keys(this.state.currentMovie).length 
//         && Object.keys(this.state.movies).length 
//         && !Object.keys(this.state.searchedMovies).length)
//         && <MovieContainer movies={this.state.movies} loadMovieDetails={ this.loadMovieDetails } /> 
//       }

//       {/* Load search results instead */}
//       {(!Object.keys(this.state.currentMovie).length && Object.keys(this.state.searchedMovies).length) 
//         && <MovieContainer movies={this.state.searchedMovies} loadMovieDetails={ this.loadMovieDetails } /> 
//       }
      
//       {/* Page load on user clicking on a poster */}
//       {Object.keys(this.state.currentMovie).length && <MovieDetailsContainer movieId={ this.state.currentMovie.id } />}
//     </main>
//   )
// }
// }
