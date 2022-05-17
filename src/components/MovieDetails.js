import React from 'react';
import '../styles/MovieDetails.css'

const MovieDetails = (props) => {
    const {id, title, poster_path, backdrop_path, release_date, 
            overview, average_rating, genres, budget, revenue, 
            runtime, tagline} = props.movieDetails.movie;
            console.log('here', props.movieVideos.videos[0].key)
    const {movieVideos} = props.movieVideos.videos[0].key
            console.log('movie detail props', props)
    return(
        <>
            <header className="showcase">
                <div className="backdrop">
                    <section className="showcase-content" style={{backgroundImage: `url(${backdrop_path})`}}>
                        <div className="showcase-fade">
                            <h1>{title}</h1>
                            <p>{tagline}</p>
                            <p>{overview}</p>
                            <button className="btn btn-play" onClick={() => {console.log(title)}}></button>
                        </div>
                    </section>
                </div>
                <section className="details-content">
                    <img className="movie-poster" src={poster_path} alt={`${title} movie poster`} />
                    <article>
                        <ul className="details-list">
                            <li className="description-header">{`${title} (${release_date.substring(0,4)})`}</li>
                            <li>{`Average Rating: ${Math.round(average_rating)}/10`}</li>
                            <li>{`Release Date: ${release_date.replaceAll("-", "/")}`}</li>
                            <li>{`Runtime: ${runtime} minutes`}</li>
                            <li>{`Genre: ${genres}`}</li>
                            <li>{`Budget: $${budget.toFixed(2)}`}</li>
                            <li>{`Revenue: $${revenue.toFixed(2)}`}</li>
                        </ul>
                        <iframe 
                            src={`https://www.youtube.com/embed/${movieVideos}`} 
                            width="420" 
                            height="315"
                            frameBorder='0'
                            allow='autoplay; encryped-media'
                            allowFullScreen
                            title={title} 
                        />
                    </article>
                </section>
            </header>
        </>
    )
}

export default MovieDetails;