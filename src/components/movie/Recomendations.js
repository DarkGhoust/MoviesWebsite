import { useState, useEffect } from "react"
import MovieList from "../MovieList"
import useMovieApi from "../../functions/useMovieApi"
import Loader from "../Loader"

function Recomendations({movieId}) {

    const [recomendations, setRecomendations] = useState(null)
    const { getRecomendations } = useMovieApi() 
        
    useEffect(() =>{
        async function fetch(){
            setRecomendations( await getRecomendations(movieId, 1) )
        }
        fetch()
    },[movieId])

    const loadMore = () =>{
        async function fetch(){
            const fetchedRecomendations = await getRecomendations(movieId, recomendations.page + 1)
            fetchedRecomendations.results.shift()

            setRecomendations({
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
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                { recomendations === null ? <Loader elements={4} /> : <MovieList data={recomendations} /> }
            </div>
            { recomendations?.total_pages > 1 && recomendations?.page !== recomendations?.total_pages 
                ? <button className="bg-slate-200 dark:bg-slate-600 rounded-2xl py-1 px-4 mt-4 w-fit ml-auto text-sm" onClick={loadMore}>More recomendations</button> : "" }
        </>
    )
}

export default Recomendations
