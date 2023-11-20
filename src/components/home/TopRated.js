import { useState, useEffect } from "react"
import Loader from "../Loader"
import MovieList from "../MovieList"
import useMovieApi from "../../functions/useMovieApi"

function TopRated() {

    const { getPopular } = useMovieApi()
    const [recomendations, setReviews] = useState(null)
        
    useEffect(() =>{
        async function fetch(){
            const results = await getPopular()
            // results.total_results = 15
            // results.page = 1
            // console.log(results)
            setReviews( results )
        }
        fetch()
    },[])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            { recomendations === null ? <Loader elements={4} /> : <MovieList data={recomendations} /> }
        </div>
    )
}

export default TopRated
