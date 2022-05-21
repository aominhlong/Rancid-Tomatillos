import '../styles/MovieDetailsContainer.css';
import React, {Component} from 'react';
import MovieDetails from './MovieDetails';

class MovieDetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentMovieDetails: {},
      currentMovieVideos: {},
      error: ''
    }
  }
  
  getMovieResponse = (url) => {
    fetch(url)
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

  getVideoResponse = (url) => {
    fetch(url)
    .then(response => {
      if(!response.ok) {
        console.log('HTTP request unsuccessful');
        this.setState({error: `Network Error - status ${response.status} at URL: ${response.url} for videos`});
        throw new Error(`status ${response.status} at URL: ${response.url}`)
      } else {
        console.log('HTTP request successful');
      }
      return response;
    })
    .then(response => response.json())
    .then(movieDetails => this.setState({ currentMovieVideos: movieDetails }))
    .catch(err => console.log(err));
  }

  componentDidMount = () => {
    // why doesn't promise all work here
    this.getMovieResponse(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
    this.getVideoResponse(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}/videos`)
  }

  render() {
    return (
      <div className='movie-details-container'>
        <h2 className='error-msg'>{ this.state.error }</h2>
        {Object.keys(this.state.currentMovieDetails).length 
          && Object.keys(this.state.currentMovieVideos).length 
          && <MovieDetails movieDetails={ this.state.currentMovieDetails } movieVideos={ this.state.currentMovieVideos } />}
      </div>
    )
  }
}

export default MovieDetailsContainer;
