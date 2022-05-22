import React from 'react';
import Movie from './Movie';
import { NavLink } from 'react-router-dom';
import '../styles/MovieContainer.css';

const MovieContainer = ({ movies, loadMovieDetails }) => {
    if (movies) {
        const movieCards = movies.map(movie => {
            return (
                <NavLink to={`/movie/${movie.id}`} key={ movie.id }>
                    <Movie 
                        id={ movie.id }
                        key={ movie.id }
                        poster_path={ movie.poster_path }
                        backdrop_path={ movie.backdrop_path }
                        title={ movie.title }
                        average_rating={ movie.average_rating }
                        release_date={ movie.release_date }
                        loadMovieDetails = { loadMovieDetails }
                    />
                </NavLink>
            )
        })

        return (
            <div className='movie-container'>
                { movieCards }
            </div>
        )
    }
}

export default MovieContainer;