import '../styles/MovieDetailsContainer.css';
import React, {Component} from 'react';

class MovieDetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentMovieDetails: {}
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
      <div className='movie-container'>
        {Object.keys(this.state.currentMovieDetails).length && console.log("NOT EMPTY!")}
      </div>
    )
  }
}
// The issue is that we're not rendering the movie details in full



// const MovieDetailsContainer = (prop) => {
//   const { id, poster_path, backdrop_path, title, average_rating, release_date } = prop.movie
//   return (
//     <div className='movie-details'>
//       <img className='movie-poster-img' src={poster_path} alt={title + " movie poster"} />
//             <h3>{title}</h3>
//             <p>Rating: {Math.round(average_rating)} / 10</p>
//     </div>
//   )
// }

export default MovieDetailsContainer;
