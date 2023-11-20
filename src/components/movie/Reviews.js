import { useState, useEffect } from "react"
import { tinyReview, getReleaseDate } from "./reviews.functions"
import { Star } from "../Icons"
import useMovieApi from "../../functions/useMovieApi"
import Loader from "../Loader"

function Reviews({movieId}) {

    const [reviews, setReviews] = useState(null)
    const [isLoadMore, setIsLoadMore] = useState(false)
    const { getReviews } = useMovieApi() 
        
    useEffect(() =>{
        setIsLoadMore(false)
        async function fetch(){
            const results = tinyReview( await getReviews( movieId, 1 ) )
            results.less_results = results.results.slice(0, 2)
            setReviews( results )
        }
        fetch()
    },[movieId])

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

    if ( reviews?.total_results === 0 ){
        return <p className="bg-slate-200 dark:bg-slate-800 p-5 w-full text-center rounded-2xl">No reviews found</p>
    }

    return (
        <>
            <h2 className="text-lg font-medium mb-5">Reviews {reviews?.total_results ? <span className="text-slate-400">({reviews.total_results})</span> : ""}</h2>
            <div className="grid grid-cols-1 gap-4">
                { reviews === null ? <Loader elements={1} /> : <List reviews={reviews} setReviews={setReviews} isLoadMore={isLoadMore} /> }
                { reviews?.total_pages > 1 && reviews?.page !== reviews?.total_pages ? <button onClick={loadMore}>Load more</button> : "" }
            </div>
            { !isLoadMore && reviews?.total_results > 2 ? <button className="bg-slate-200 dark:bg-slate-600 rounded-2xl py-1 px-4 mt-4 w-fit ml-auto text-sm" onClick={ () =>{ setIsLoadMore(true) }}>More reviews</button> : "" }
        </>
    )
}

export default Reviews

function List({reviews, setReviews, isLoadMore}){

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

    const mapF = (item, ID) =>
    <div className="flex flex-col rounded-2xl bg-slate-200 dark:bg-slate-800 py-5 px-7" key={ID}>
        <img style={{width: "fit-content"}} className="rounded-xl mb-3" alt="episode" 
            src={ item.author_details.avatar_path ? "https://www.themoviedb.org/t/p/w45_and_h45_face" + item.author_details.avatar_path : "movies_website/img/blank_person_300_300.png"} />
        
        <div className="mb-3 text-slate-400" style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={ !item.isExpanded && item.tinyContent !== false ? { __html: item.tinyContent } : { __html: item.content } } />
        {
            !item.isExpanded && item.tinyContent !== false ? <span className="cursor-pointer underline text-sm mb-3" onClick={ () => { expand(ID) } }>See full</span>: ""
        }
        <p className="text-right text-sm text-slate-600 dark:text-slate-300">
            <label className="inline-flex rounded-md bg-slate-50 dark:bg-slate-900 px-2 py-0.5 mr-2 items-center">
                <Star customClass="fill-slate-600 dark:fill-slate-100 w-4 h-4 inline mr-1" /> {item.author_details.rating}
            </label>
            Written by <b>{item.author_details.name}</b> on <b>{getReleaseDate(item.updated_at)}</b>
        </p>
    </div>

    return !isLoadMore ? reviews.less_results.map( mapF ) : reviews.results.map( mapF )
}