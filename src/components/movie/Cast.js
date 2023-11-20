import { useState, useEffect } from "react"
import useMovieApi from "../../functions/useMovieApi"
import Loader from "../Loader"

function Cast({movieId}) {

	const [credits, setCredits] = useState(null)
    const [isLoadMore, setIsLoadMore] = useState(false)
    const { getCast } = useMovieApi() 

	useEffect(() =>{
        setIsLoadMore(false)
        async function fetch(){
            const cast = await getCast(movieId)
            cast.less_results = cast.cast.slice(0, 6)
            setCredits( cast )
        }
        fetch()
    },[movieId])

    if ( credits?.total_results === 0 ){
        return <p className="bg-slate-200 dark:bg-slate-800 p-5 w-full text-center rounded-2xl">Cast unknown</p>
    }

    return (
        <>
            <h2 className="text-lg font-medium mb-5">Top Billed Cast</h2>
            <div className="grid grid-cols-6 gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
                { credits === null ? <Loader elements={6} /> : <List credits={credits} isLoadMore={isLoadMore} /> }
            </div>
            { !isLoadMore ? <button className="bg-slate-200 dark:bg-slate-600 rounded-2xl py-1 px-4 mt-4 w-fit ml-auto text-sm" onClick={ () =>{ setIsLoadMore(true) }}>More cast</button> : "" }
            
        </>

    )
}

export default Cast


function List ({credits, isLoadMore}){

    const mapF = (item, ID) =>
    <div className="list_item" key={ID}>
        <img className="rounded-2xl mb-3" alt="cast" 
            src={ item.profile_path ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + item.profile_path : "movies_website/img/blank_person_300_450.png"} />
        <h4 className="mb-1">{item.name}</h4>
        <p className="text-sm text-slate-400">{item.character}</p>
    </div>
    
    return !isLoadMore ? credits.less_results.map( mapF ) : credits.cast.map( mapF )
}