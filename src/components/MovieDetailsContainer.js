import '../styles/MovieDetailsContainer.css';
import React, {Component} from 'react';
import MovieDetails from './MovieDetails';

class MovieDetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentMovieDetails: {},
      error: ''
    }
  }

  componentDidMount = () => {
    console.log(this.props.movieId);
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
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
    .then(movieDetails => this.setState({ currentMovieDetails: movieDetails }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='movie-details-container'>
        {Object.keys(this.state.currentMovieDetails).length && <MovieDetails movieDetails={this.state.currentMovieDetails} />}
      </div>
    )
  }
}

export default MovieDetailsContainer;
