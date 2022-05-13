import React from 'react';
import '../styles/Movie.css'

const Movie = ({ id, poster_path, title, average_rating, loadMovieDetails }) => {
    
    return(
        <div onClick={ () => loadMovieDetails(id)} className='movie-card' id={id}>
            <img className='movie-poster-img' src={poster_path} alt={title + " movie poster"} />
            <h3>{title}</h3>
            <p>Rating: {Math.round(average_rating)} / 10</p>
        </div>
    )
}

export default Movie;