import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import '../styles/MovieDetails.css'

const MovieDetails = (props) => {
    // ({ movieDetails:movie, movieVideos:videos })  take props and movie'x'

    const { id, title, poster_path, backdrop_path, release_date, 
            overview, average_rating, genres, budget, revenue, 
            runtime, tagline } = props.movieDetails.movie;
    const movieVideos = props.movieVideos.videos
    
    const [hiddenStatus, setHiddenStatus] = useState(true)
    const [backdropStatus, setBackdropStatus] = useState(false)
    const [playingStatus, setPlayingStatus] = useState(false)

    return(
        <>
            <header className="showcase">
                <div className="backdrop">
                    <section className="showcase-content" style={{backgroundImage: `url(${backdrop_path})`}}>
                        <div hidden={hiddenStatus}>
                            {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${movieVideos[0].key}&autoplay=1&mute=1`} */}
                            {/* width='1100px'
                            height='500px' 
                            playing={playingStatus}/> */}
                        </div>
                        <div className="showcase-fade" hidden={backdropStatus}>
                            <h1>{title}</h1>
                            <p>{tagline}</p>
                            <p>{overview}</p>
                            <button className="btn btn-play" onClick={() => 
                                {
                                    setHiddenStatus(false) 
                                    setBackdropStatus(true)
                                    setPlayingStatus(true)
                                }}>
                            </button>
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
                    </article>
                </section>
            </header>
        </>
    )
}

export default MovieDetails;