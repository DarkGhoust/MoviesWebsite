import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useSearchApi from "../../functions/useSearchApi"
import MovieList from "../MovieList"
import Filters from "./Filters"
import Loader from "../Loader"
import { FilterContext } from "./FiltersContext"

function Search() {

    const { query } = useParams()
    const { getMovie } = useSearchApi()
    const [data, setData] = useState(null)

    useEffect( () =>{
        setData(null)
        async function fetch(){
            setData( await getMovie(query, 1) )
        }
        fetch()
    }, [query])

    const loadMore = () =>{
        async function fetch(){
            const fetchedResults = await getMovie(query, data.page + 1)

            setData({
                ...fetchedResults,
                results: [
                    ...data.results,
                    ...fetchedResults.results
                ]
            })
        }
        fetch()
    }

    return (
        <div className="page">
            <section className="flex flex-col">
                <div className="mb-5 flex gap-3 items-center justify-between">
                    <h2 className="text-lg font-medium">Search results of <span className="text-sm text-slate-400">{query}</span></h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    { data === null ? <Loader elements={8} /> : <MovieList data={data}/> }
                </div>
                { data?.total_pages > 1 && data?.page !== data?.total_pages 
                    ? <button className="bg-slate-200 dark:bg-slate-600 rounded-2xl py-1 px-4 mt-4 w-fit ml-auto text-sm" onClick={loadMore}>More results</button> : "" }
            </section>
        </div>
    )
}

export default Search
