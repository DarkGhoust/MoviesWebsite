import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "./Icons"

function SearchBar() {
    
    const navigate = useNavigate()
    const [text, setText] = useState("")
    
    const handleTextChange = (e) =>{
        const value = e.target.value    
        setText(value)
    }

    const goToSearch = (e) =>{
        e.preventDefault()
        setText("")
        navigate( "/search/" + text )
    }

    return (
        <form className="w-full relative" onSubmit={ (e) => { goToSearch(e) } }>
            <input className="w-full bg-gray-200 dark:bg-slate-800 rounded-2xl px-5 py-2 focus-visible:border-0" 
                type="text" 
                value={text} 
                placeholder="Search by title"
                onChange={ handleTextChange } />
            <button className="absolute right-2 top-2"><Search customClass="fill-slate-700 dark:fill-slate-100 w-6 h-6 inline mr-1" /></button>
        </form>
    )
}

export default SearchBar
