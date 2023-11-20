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

    console.log(filters.with_genres)

    const handleClick = (id) =>{

        const selectedGenres = filters.with_genres.split(",")

        if(!selectedGenres.includes(id.toString())){        
            selectedGenres.push(id);               
        }else{
            selectedGenres.splice(selectedGenres.indexOf(id.toString()), 1);  //deleting
        }
        if(selectedGenres[0] === ''){
            selectedGenres.shift()
        }

        setFilters({...filters, with_genres: selectedGenres.join(",")})
    }

    const list = genres?.genres.map(item => {
            return <p className={ filters.with_genres.split(",").includes( item.id.toString() )
            ? "rounded-xl bg-orange-600 py-1 px-3 text-sm text-slate-100 cursor-pointer" 
            : "rounded-xl bg-slate-50 dark:bg-slate-900 py-1 px-3 text-sm cursor-pointer" }
                value={item.id}
                onClick={() =>{ handleClick( item.id ) }}
            >
                {item.name}
            </p>
        }
    )

    return (
        <div className="flex gap-2 flex-wrap" >
            {list}
        </div>
    )
}

export default Genres