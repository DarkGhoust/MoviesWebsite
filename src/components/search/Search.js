import { useState, useEffect } from "react"
import useSearchApi from "../../functions/useSearchApi"
import MovieList from "./MovieList"
import Filters from "./Filters"
import Loader from "../Loader"
import { FilterContext } from "./FiltersContext"

function Search() {

    const { getMovies } = useSearchApi()
    const [data, setData] = useState(null)
    const [filters, setFilters] = useState({
        sort_by: "primary_release_date.desc"
    })
    
    const fetchData = () =>{
        setData(null)
        async function fetch(){
            setData( await getMovies(filters) )
        }
        fetch()
    }
    
    useEffect( () =>{
        fetchData()
    }, [filters.sort])
    
    const handleSort = (e) =>{
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setFilters({...filters, sort_by: value})
        fetchData()
    }

    return (
        <section className="flex hero spacer-2">
            <div className="max-width flex col">
                <FilterContext.Provider value={[filters, setFilters]}>
                    <form onSubmit={ fetchData }>
                        <Filters />
                        <button>Filter</button>
                    </form>
                </FilterContext.Provider>

                Sort By
                <select onChange={ handleSort } name="sort" value={ filters.sort_by }>
                    <option value="primary_release_date.desc">Newest</option>
                    <option value="primary_release_date.asc">Oldest</option>
                    <option value="popularity.desc">Popularity</option>
                    <option value="vote_average.desc">Rating</option>
                    <option value="vote_count.desc">Voting count</option>
                </select>
                <div className="list movies_list flex gap-1">
                    { data === null ? <Loader elements={4} /> : <MovieList data={data}/> }
                </div>
            </div>
        </section>
    )
}

export default Search
