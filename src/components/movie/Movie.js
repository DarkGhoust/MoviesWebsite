import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getReleaseYear } from "../../functions/functions"
import useMovieApi from "../../functions/useMovieApi"  
import Cast from "./Cast"
import Reviews from "./Reviews"
import Recomendations from "./Recomendations"
import Loader from "../Loader"

function Movie() {

    const { movieId } = useParams()
    const { getMovie } = useMovieApi()
    const navigate = useNavigate()
    const [ movie, setMovie ] = useState(null)

    console.log(movie)

    useEffect(() =>{
        async function fetch(){
            const data = await getMovie(movieId)
            if(data.error){
                navigate("/random")
                return false
            }
            setMovie( data )
        }
        fetch()
    },[movieId])

    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        return `${hours}h ${minutes}m`
    }

    const genres = movie?.genres.map( (item, key) => <label className="border rounded-lg px-2 border-solid border-slate-800 dark:border-slate-200" key={key}>{item.name}</label>)

    return (
        <div className="page">

            { movie === null ? 
                <div>
                    <div className="mb-8">
                        <Loader elements={1} /> 
                    </div>
                    <div className="grid grid-cols-6 gap-4 ">
                        <Loader elements={6} />
                    </div>
                </div>
            : <>
                <section className="flex overflow-hidden relative hero flex-col justify-end rounded-2xl bg-slate-600 pb-5 pt-20 px-7 mb-8 bg-cover"
                style={{backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}")`}}>
                    <div className="z-[2]">
                        <h2 className="text-3xl font-bold mb-1">{movie.title} <span className="text-base">({getReleaseYear(movie)})</span></h2>
                        <i className="mb-3 block text-sm">{movie.tagline}</i>
                        <div className="flex gap-0 mb-3 text-sm">
                            <span className="label rounded">Rating: { movie.popularity }</span>
                            <span className="label rounded">Time: { toHoursAndMinutes(movie.runtime) }</span>
                        </div>
                        <p className="mb-4">{movie.overview}</p>
                        <div className="flex gap-2 text-sm flex-wrap">{genres}</div>
                    </div>
                </section>

                <section className="flex flex-col mb-8">
                    <Cast movieId={movieId} />
                </section>

                <section className="flex flex-col mb-8">
                    <Reviews movieId={movieId} />
                </section>

                <section className="flex flex-col mb-8">
                    <h2 className="text-lg font-medium mb-5">Recomendations</h2>
                    <Recomendations movieId={movieId} />
                </section>
            </>
            }
        </div>
    )
}

export default Movie

