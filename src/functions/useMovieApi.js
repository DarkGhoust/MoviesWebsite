import axios from "axios"

function useMovieApi(){
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

    const getReviews = async (movieId, page) =>{
        return await fetchData( `${apiBaseUrl}/movie/${movieId}/reviews?language=en-US&page=${page}` )        
    }

    const getMovie = async (movieId) =>{
        return await fetchData( `${apiBaseUrl}/movie/${movieId}?language=en-US` )
    }

    const getCast = async (movieId) =>{
        return await fetchData( `${apiBaseUrl}/movie/${movieId}/credits?language=en-US` )
    }

    const getRecomendations = async (movieId, page) =>{
        return await fetchData( `${apiBaseUrl}/movie/${movieId}/recommendations?language=en-US&page=${page}` )
    }

    return {
        getReviews,
        getMovie,
        getCast,
        getRecomendations
    }
}

export default useMovieApi