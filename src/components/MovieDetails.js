import React from 'react';
import '../styles/MovieDetails.css'

const MovieDetails = (props) => {
    const {id, title, poster_path, backdrop_path, release_date, 
            overview, average_rating, genres, budget, revenue, 
            runtime, tagline} = props.movieDetails.movie;
    return(
        <>
            <header className="showcase">
                <section className="showcase-content" style={{backgroundImage: `url(${backdrop_path})`}}>
                    <h1>{title}</h1>
                    <p>{tagline}</p>
                    <button className="btn btn-rounded btn-large">Play Preview</button>
                </section>
                <section className="details">
                </section>
            </header>
        </>
    )
}

export default MovieDetails;