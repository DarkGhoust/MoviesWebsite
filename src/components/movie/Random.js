import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Random(){
    const navigate = useNavigate()

    const generateRandom = () =>{
        const randNubmer = Math.floor(Math.random() * (50000 - 15 + 1) + 15)
        return randNubmer
    }

    useEffect(() =>{
        navigate("/movie/" + generateRandom())
    },[])

    return 
}

export default Random