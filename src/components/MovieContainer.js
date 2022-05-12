import React from 'react';
import Movie from './Movie';
import '../styles/MovieContainer.css'

const MovieContainer = ({movies}) => {
    // id, poster_path, backdrop_path, title, average_rating, release_date
    
    const movieCards = movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                title={movie.title}
                average_rating={movie.average_rating}
                release_date={movie.release_date}
            />
        )
    })

    return(
        <div>
            { movieCards }
        </div>
    )
}

export default MovieContainer;