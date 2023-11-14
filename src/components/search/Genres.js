import { useState, useEffect } from "react"
import useSearchApi from "../../functions/useSearchApi"

function Genres ({setSelectedCategory, selectedCategory}){
    const { getGenres } = useSearchApi()
    const [genres, setGenres] = useState(null)

    useEffect(() =>{
        async function fetch(){
            setGenres( await getGenres() )
        }
        fetch()
    },[])
 
    const list = genres?.genres.map(item => <option value={item.id}>{item.name}</option>)

    return (
        <select name="with_genres" >
            {list}
        </select>
    )
}

export default Genres