import { useState, useEffect } from "react"
import { HashLink } from 'react-router-hash-link'
import useMovieApi from "../../functions/useMovieApi"

function Recomendations({movieId}) {

    const [recomendations, setReviews] = useState(null)
    const { getRecomendations } = useMovieApi() 
        
    useEffect(() =>{
        async function fetch(){
            setReviews( await getRecomendations(movieId, 1) )
        }
        fetch()
    },[])

    const loadMore = () =>{
        async function fetch(){
            const fetchedRecomendations = await getRecomendations(movieId, recomendations.page + 1)
            fetchedRecomendations.results.shift()

            setReviews({
                ...fetchedRecomendations,
                results: [
                    ...recomendations.results,
                    ...fetchedRecomendations.results
                ]
            })
        }
        fetch()
    }

    return (
        <div>
            <div className="list top-rated flex gap-1">
                { recomendations === null ? "Loading..." : <List recomendations={recomendations} setReviews={setReviews} /> }
                { recomendations?.total_pages > 1 && recomendations?.page !== recomendations?.total_pages ? <button onClick={loadMore}>Load more</button> : "" }
            </div>
        </div>
    )
}

export default Recomendations

function List({recomendations}){

    return recomendations.results.map((item, ID) =>
        <HashLink to={`/movie/${item.id}#`} className="list_item" key={ID}>
            <img className="spacer-1" alt="recomendation" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + item.poster_path} />
            <h4 className="spacer-0">{item.title}</h4>
            <p className="rating">{item.vote_average}</p>
        </HashLink>
    )
    
}