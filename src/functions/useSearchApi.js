import axios from "axios"

function useSearchApi(){
    const apiBaseUrl = "https://api.themoviedb.org/3"
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjRmYTdlOTY2OTQzZTBiYTdiMmZiZjg5ZGY4N2E3ZiIsInN1YiI6IjY1NGNkZWQwMWFjMjkyN2IyZGNmZmY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YmG9UwVyAbNKFVpL9WhiqI_Qg1PuqF8LRGHMNLX_b1g"

    const fetchData = async (url) =>{
        const response = await axios.get( url , {
            headers: {
                'Authorization': `Bearer ${apiToken}` 
            }
        })
        if(response.status === 200){
            return response.data
        }
        return { error: "Error while fetcing data, please reload the page" }
    }   

    const getGenres = async () =>{
        return await fetchData( `${apiBaseUrl}/genre/movie/list?language=en` )        
    }

    const getMovies = async (filters, page) =>{
        const properties = Object.entries(filters).map( item => `${item[0]}=${item[1]}`)
        const params = properties.join('&')

        return await fetchData( `${apiBaseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&${params}` )        
    }

    return {
        getGenres,
        getMovies
    }
}

export default useSearchApi