import '../styles/MovieDetailsContainer.css';
import React, { Component } from 'react';
import fetchResponse from '../apiCalls'
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
    fetchResponse(url)
    .then(movieDetails => this.setState({ currentMovieDetails: movieDetails }))
    .catch(err => {
      console.log(err);              
      this.setState({error: `${err}`})
    });
  }

  getVideoResponse = (url) => {
    fetchResponse(url)
    .then(movieVideos => this.setState({ currentMovieVideos: movieVideos }))
    .catch(err => {
      console.log(err);              
      this.setState({error: `${err}`})
    });
  }

  componentDidMount = () => {
    this.getMovieResponse(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
    this.getVideoResponse(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}/videos`)
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
