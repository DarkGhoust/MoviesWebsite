import { HashLink } from "react-router-hash-link"
import { Star } from "./Icons"
import { getReleaseYear } from "../functions/functions"

function MovieList ({data}){

    if (data.total_results === 0){
        return <p className="bg-slate-200 dark:bg-slate-800 p-5 w-full text-center rounded-2xl">No data found</p>
    }

    return data.results.map((item, ID) =>{
        const voteRounded = Math.round(item.vote_average * 10) / 10
        return <HashLink to={`/movie/${item.id}#`} className="relative" key={ID}>
                <img className="rounded-2xl mb-3" alt="episode" 
                    src={ item.poster_path ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + item.poster_path : "movies_website/img/film_blank.png"} />
                <h4 className="mb-1">{item.title} <span className="text-sm text-slate-400">{getReleaseYear(item)}</span></h4>
                <label className="inline-flex rounded-xl bg-slate-200 dark:bg-slate-800 px-2 py-0.5 items-center text-sm absolute top-1 right-1">
                    <Star customClass="fill-slate-600 dark:fill-slate-100 w-4 h-4 inline mr-1" /> {voteRounded}
                </label>
            </HashLink>
        }
    )
}

export default MovieList