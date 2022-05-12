import React from 'react';
import '../styles/Movie.css'

const Movie = ({ id, poster_path, backdrop_path, title, average_rating, release_date }) => {
    return(
        <div className='movie-card' id={id}>
            <img className='movie-poster-img' src={poster_path} alt={title + " movie poster"} />
            <h3>{title}</h3>
            <p>{average_rating}</p>
        </div>
    )
}

export default Movie;