import React from 'react';
import '../styles/Movie.css'


const Movie = ({ id, poster_path, title, loadMovieDetails }) => {
    
    return(
            <div onClick={ () => loadMovieDetails(id)} onKeyPress={ () => loadMovieDetails(id)} className='movie-card' id={id} tabIndex="0" role="button" aria-pressed="false">
                <img className='movie-poster-img' src={poster_path} alt={title + " movie poster"} />
            </div>
     
    )
}



export default Movie;