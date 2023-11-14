import { useState, useEffect } from "react"
import useMovieApi from "../../functions/useMovieApi"

function Cast({movieId}) {

	const [credits, setCredits] = useState(null)
    const { getCast } = useMovieApi() 

	useEffect(() =>{
        async function fetch(){
            setCredits( await getCast(movieId) )
        }
        fetch()
    },[])

    return (
        <div>
            <div className="list top-rated flex gap-1">
				{ credits === null ? "Loading..." : <List credits={credits} /> }
            </div>
        </div>
    )
}

export default Cast


function List ({credits}){
	return credits.cast.map((item, ID) =>
		<div className="list_item" key={ID}>
			<img className="spacer-1" alt="cast" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + item.profile_path} />
			<h4 className="spacer-0">{item.name}</h4>
			<p>{item.character}</p>
		</div>
	)
}