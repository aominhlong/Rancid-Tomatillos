import React from 'react';
import '../styles/MovieDetails.css'

const MovieDetails = (props) => {
    const {id, title, poster_path, backdrop_path, release_date, 
            overview, average_rating, genres, budget, revenue, 
            runtime, tagline} = props.movieDetails.movie;
    return(
        <div>
            <img src={backdrop_path} />
        </div>
    )
}

export default MovieDetails;