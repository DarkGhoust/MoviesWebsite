import { useState, useEffect, useContext } from "react"
import { FilterContext } from "./FiltersContext"
import useSearchApi from "../../functions/useSearchApi"

function Genres (){
    const { getGenres } = useSearchApi()
    const [filters, setFilters] = useContext(FilterContext)
    const [genres, setGenres] = useState(null)

    useEffect(() =>{
        async function fetch(){
            setGenres( await getGenres() )
        }
        fetch()
    },[])

    const handleChange = (e) =>{
        const name = e.target.name
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setFilters({...filters, [name]: value})
    }
 
    const list = genres?.genres.map(item => <option value={item.id}>{item.name}</option>)

    return (
        <select name="with_genres" onChange={handleChange} value={filters.with_genres} >
            {list}
        </select>
    )
}

export default Genres