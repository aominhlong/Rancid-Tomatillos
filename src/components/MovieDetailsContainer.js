import React, { Component } from 'react';
import fetchResponse from '../apiCalls';
import MovieDetails from './MovieDetails';
import '../styles/MovieDetailsContainer.css';

class MovieDetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentMovieDetails: [],
      currentMovieVideoKey: '',
      error: ''
    }
  }

  componentDidMount = () => {
    const movieDetails = fetchResponse(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`);
    const videos = fetchResponse(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}/videos`);

    Promise.all([movieDetails, videos])
    .then((movieData) => {
      this.setState({ currentMovieDetails: movieData[0].movie });
      this.setState({ currentMovieVideoKey: movieData[1].videos[0].key });
    })
    .catch(err => {
      console.log(err);              
      this.setState({error: `${err}. Things don't seem to be working out right now, try again later!`});
    });
  }

  render() {
    return (
      <div className='movie-details-container'>
        { !!this.state.error.length && <h1 className='error-msg'>{ this.state.error }</h1> }
        { !!Object.keys(this.state.currentMovieDetails).length 
          && this.state.currentMovieVideoKey 
          && <MovieDetails movieDetails={ this.state.currentMovieDetails } movieVideoKey={ this.state.currentMovieVideoKey } />}
      </div>
    )
  }
}

export default MovieDetailsContainer;
