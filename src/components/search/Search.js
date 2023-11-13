import { useState } from "react"
import List from "./List"
import Filters from "./Filters"

function Search() {

    const [data, setData] = useState(null)
    const [filters, setFilters] = useState({
        sort: "primary_release_date.desc"
    })

    const sortBy = () =>{
        //cosnt value

        // setFilters({...filters, sort: value})
        // fetchData()
    }

    return (
        <section className="flex hero spacer-2">
            <div className="max-width flex col">
                <Filters />

                Sort By
                <select onChange={ sortBy }>
                    <option value="primary_release_date.desc">Newest</option>
                    <option value="primary_release_date.asc">Oldest</option>
                    <option value="popularity.desc">Popularity</option>
                    <option value="vote_average.desc">Rating</option>
                    <option value="vote_count.desc">Voting count</option>
                </select>
                <div className="list movies_list flex gap-1">
                    <List data={data}/>
                </div>
            </div>
        </section>
    )
}

export default Search
