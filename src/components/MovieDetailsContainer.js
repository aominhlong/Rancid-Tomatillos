import '../styles/MovieDetailsContainer.css';
import React, { Component } from 'react';
import fetchResponse from '../apiCalls';
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

  componentDidMount = () => {
    const movieDetails = fetchResponse(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`);
    const videos = fetchResponse(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}/videos`);

    Promise.all([movieDetails, videos])
    .then((movieData) => {
      this.setState({ currentMovieDetails: movieData[0] });
      this.setState({ currentMovieVideos: movieData[1] });
    })
    .catch(err => {
      console.log(err);              
      this.setState({error: `${err}`});
    });
  }

  render() {
    return (
      <div className='movie-details-container'>
        { this.state.error.length && <h1 className='error-msg'>{ this.state.error }</h1> }
        {Object.keys(this.state.currentMovieDetails).length 
          && Object.keys(this.state.currentMovieVideos).length 
          && <MovieDetails movieDetails={ this.state.currentMovieDetails } movieVideos={ this.state.currentMovieVideos } />}
      </div>
    )
  }
}

export default MovieDetailsContainer;
