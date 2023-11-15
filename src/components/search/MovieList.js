import { HashLink } from "react-router-hash-link"

function MovieList ({data}){

    return data.results.map((item, ID) =>
            <HashLink to={`/movie/${item.id}#`} className="list_item" key={ID}>
                <img className="spacer-1" alt="recomendation" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + item.poster_path} />
                <h4 className="spacer-0">{item.title}</h4>
                <p className="rating">{item.vote_average}</p>
            </HashLink>
    )
}

export default MovieList