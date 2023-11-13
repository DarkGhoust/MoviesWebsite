import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchBar() {
    
    const navigate = useNavigate()
    const [text, setText] = useState("")
    
    const handleTextChange = (e) =>{
        const value = e.target.value    
        setText(value)
    }

    const goToSearch = (e) =>{
        e.preventDefault()
        navigate( "/search/" + text )
    }

    return (
        <form onSubmit={ (e) => { goToSearch(e) } }>
            <input type="text" value={text} onChange={ handleTextChange } />
            <button>Search</button>
        </form>
    )
}

export default SearchBar
