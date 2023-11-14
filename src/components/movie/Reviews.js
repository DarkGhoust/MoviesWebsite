import { useState, useEffect } from "react"
import { tinyReview, getReleaseDate } from "./reviews.functions"
import useMovieApi from "../../functions/useMovieApi"

function Reviews({movieId}) {

    const [reviews, setReviews] = useState(null)
    const { getReviews } = useMovieApi() 
        
    useEffect(() =>{
        async function fetch(){
            const fetchedReviews = await getReviews(movieId, 1)
            setReviews( tinyReview(fetchedReviews) )
        }
        fetch()
    },[])

    const loadMore = () =>{
        async function fetch(){
            const fetchedReviews = await getReviews(movieId, reviews.page + 1)
            const tiny = tinyReview(fetchedReviews)
            tiny.results.shift()

            setReviews({
                ...tiny,
                results: [
                    ...reviews.results,
                    ...tiny.results
                ]
            })
        }
        fetch()
    }

    return (
        <div>
            <div className="list top-rated flex col gap-1">
                <h3>Reviews {reviews?.total_results ? `(${reviews.total_results})` : ""}</h3>
                { reviews === null ? "Loading..." : <List reviews={reviews} setReviews={setReviews} /> }
                { reviews?.total_pages > 1 && reviews?.page !== reviews?.total_pages ? <button onClick={loadMore}>Load more</button> : "" }
            </div>
        </div>
    )
}

export default Reviews

function List({reviews, setReviews}){

    const expand = (reviewId) =>{
        setReviews(oldReviews => {
            const results = [ ...oldReviews.results ]
            results[reviewId].isExpanded = true

            return {
                ...oldReviews,
                results
            }
        })
    }

    return reviews.results.map((item, ID) =>
        <div className="rounded bg-light glow" key={ID}>
            <img style={{width: "fit-content"}} className="spacer-1" alt="episode" src={"https://www.themoviedb.org/t/p/w45_and_h45_face" + item.author_details.avatar_path} />
            
            <div style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={ !item.isExpanded && item.tinyContent !== false ? { __html: item.tinyContent } : { __html: item.content } } />
            {
                !item.isExpanded && item.tinyContent !== false ? <button onClick={ () => { expand(ID) } }>See full</button>: ""
            }
            <p>
                <label style={{padding: "0.3em 1em"}} className="genres rounded bg-light">
                * {item.author_details.rating}
                </label>
                Written by <b>{item.author_details.name}</b> on <b>{getReleaseDate(item.updated_at)}</b>
            </p>
        </div>
    )
}