import '../styles/MovieDetailsContainer.css';
import React, {Component} from 'react';

const MovieDetailsContainer = (prop) => {
  const { id, poster_path, backdrop_path, title, average_rating, release_date } = prop.movie
  console.log('id', title)
  return (
    <div className='movie-details'>
      <img className='movie-poster-img' src={poster_path} alt={title + " movie poster"} />
            <h3>{title}</h3>
            <p>Rating: {Math.round(average_rating)} / 10</p>
    </div>
  )
}

export default MovieDetailsContainer;
