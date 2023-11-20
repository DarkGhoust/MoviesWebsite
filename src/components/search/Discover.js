import { useState, useEffect } from "react"
import useSearchApi from "../../functions/useSearchApi"
import MovieList from "../MovieList"
import Filters from "./Filters"
import Loader from "../Loader"
import { FilterContext } from "./FiltersContext"

function Discover() {

    const { getMovies } = useSearchApi()
    const [data, setData] = useState(null)
    const [filters, setFilters] = useState({
        sort_by: "popularity.desc",
        with_genres: "",
        "primary_release_date.gte": 1970,
        "primary_release_date.lte": 2023,
        "vote_average.gte": 0,
        "vote_average.lte": 10,
    })
    
    const fetchFilter = ( page ) =>{
        setData(null)
        async function fetch(){
            setData( await getMovies(filters, page) )
        }
        fetch()
    }

    // console.log({...filters.sort_by})
    
    useEffect( () =>{
        console.log("sadsad")
        fetchFilter(1)
    }, [filters.sort_by])
    
    const handleSort = (e) =>{
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setFilters({...filters, sort_by: value})
    }

    const loadMore = () =>{
        async function fetch(){
            const fetchedResults = await getMovies(filters, data.page + 1)

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
            <section className="mb-8">
                <h2 className="text-lg font-medium mb-4">Filters</h2>
                <FilterContext.Provider value={[filters, setFilters]}>
                    <form onSubmit={ (e) => { 
                        e.preventDefault()
                        fetchFilter(1)
                    }}>
                        <Filters />
                        <button className="text-slate-50 bg-teal-400 dark:bg-orange-600 rounded-2xl py-1 px-4">Filter</button>
                    </form>
                </FilterContext.Provider>
            </section>

            <section className="flex flex-col">
                <div className="mb-5 flex gap-3 items-center justify-between">
                    <h2 className="text-lg font-medium">Discovered results</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex gap-2 items-center">
                        Sort By
                        <select onChange={ handleSort }
                            className="rounded-xl bg-slate-200 dark:bg-slate-800 py-1 px-3 "
                            name="sort" value={ filters.sort_by }>
                            <option value="primary_release_date.desc">Newest</option>
                            <option value="primary_release_date.asc">Oldest</option>
                            <option value="popularity.desc">Popularity</option>
                            <option value="vote_average.desc">Rating</option>
                            <option value="vote_count.desc">Voting count</option>
                        </select>
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    { data === null ? <Loader elements={4} /> : <MovieList data={data}/> }
                </div>
                { data?.total_pages > 1 && data?.page !== data?.total_pages 
                    ? <button className="bg-slate-200  dark:bg-slate-600 rounded-2xl py-1 px-4 mt-4 w-fit ml-auto text-sm" onClick={loadMore}>More results</button> : "" }
            </section>
        </div>
    )
}

export default Discover
