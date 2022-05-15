import React from 'react';
import '../styles/MovieDetails.css'

const MovieDetails = (props) => {
    const {id, title, poster_path, backdrop_path, release_date, 
            overview, average_rating, genres, budget, revenue, 
            runtime, tagline} = props.movieDetails.movie;
    return(
        <>
            <header className="showcase">
                <div className="backdrop">
                    <section className="showcase-content" style={{backgroundImage: `url(${backdrop_path})`}}>
                        <div className="showcase-fade">
                            <h1>{title}</h1>
                            <p>{tagline}</p>
                            <p>{overview}</p>
                            <button className="btn btn-play"></button>
                        </div>
                    </section>
                </div>
                <section className="details">
                    <article>
                        <ul>
                            <li>{`${title} | ${release_date}`}</li>
                            <li>{release_date}</li>
                            <li>{average_rating}</li>
                            <li>{}</li>
                            <li>{overview}</li>
                            <li>{overview}</li>
                        </ul>
                    </article>
                </section>
            </header>
        </>
    )
}

export default MovieDetails;