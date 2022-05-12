import React from 'react';
import Movie from './Movie';
import '../styles/MovieContainer.css'

const MovieContainer = ({movies}) => {
    
    const movieCards = movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                key={movie.id}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                title={movie.title}
                average_rating={movie.average_rating}
                release_date={movie.release_date}
            />
        )
    })

    return (
        <div className='movie-container'>
            { movieCards }
        </div>
    )
}

export default MovieContainer;