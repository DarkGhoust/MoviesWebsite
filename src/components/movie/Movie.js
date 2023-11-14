import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useMovieApi from "../../functions/useMovieApi"  
import Cast from "./Cast"
import Reviews from "./Reviews"
import Recomendations from "./Recomendations"
import "../../css/page.css"

function Movie() {

    const { movieId } = useParams()
    const { getMovie } = useMovieApi()
    const [ movie, setMovie ] = useState(null)

    console.log(movie)

    useEffect(() =>{
        async function fetch(){
            setMovie( await getMovie(movieId) )
        }
        fetch()
    },[movieId])

    const getReleaseDate = () =>{
        const date = movie.release_date
        return new Date(date).getFullYear()
    }

    const genres = movie?.genres.map( (item, key) => <label style={{padding: "0.3em 1em"}} className="genres rounded bg-light" key={key}>{item.name}</label>)

    return (
        <main className="glass-reflection">
            <section className="flex hero overlay spacer-2"  id="hero"
                style={{backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}")`}}>
                <div className="max-width flex gap-1">

                    { movie === null ? "Loading..." : 
                    <>
                        <div style={{width: "50%"}}>
                            <img className="spacer-1" alt="episode" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path} />
                        </div>
                        <div style={{width: "50%"}}>
                            <h2>{movie.title} ({ getReleaseDate() })</h2>
                            <i>{movie.tagline}</i>

                            <div className="flex gap-0">
                                <span>Rating: {movie.popularity}</span>
                                <span>Time: {movie.runtime}</span>
                            </div>

                            <p>{movie.overview}</p>
                            <p><b>Genres</b></p>
                            <div className="flex gap-0">{genres}</div>
                            
                        </div>
                    </>
                    }
                    
                </div>
            </section>

            <section className="flex" id="top_rated">
                <div className="max-width flex col">
                    <h2 className="spacer-1">Top Billed Cast</h2>
                    <Cast movieId={movieId} />
                    <Reviews movieId={movieId} />
                </div>
            </section>

            <section className="flex" id="top_rated">
                <div className="max-width flex col">
                    <h2 className="spacer-1">Recomendations</h2>
                    <Recomendations movieId={movieId} />
                </div>
            </section>

        </main>
    )
}

export default Movie

