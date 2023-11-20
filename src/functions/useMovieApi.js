import axios from "axios"

function useMovieApi(){
    const apiBaseUrl = "https://api.themoviedb.org/3"
    const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjRmYTdlOTY2OTQzZTBiYTdiMmZiZjg5ZGY4N2E3ZiIsInN1YiI6IjY1NGNkZWQwMWFjMjkyN2IyZGNmZmY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YmG9UwVyAbNKFVpL9WhiqI_Qg1PuqF8LRGHMNLX_b1g"

    const fetchData = async (url) =>{
        try{
            const response = await axios.get( url , {
                headers: {
                    'Authorization': `Bearer ${apiToken}` 
                }
            })
            return response.data
            
        }
        catch(e){
            return { error: "Error while fetcing data, please reload the page" }
        }
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

    const getPopular = async () =>{
        return await fetchData( `${apiBaseUrl}/movie/popular?language=en-US&page=1` )
    }

    

    return {
        getReviews,
        getMovie,
        getCast,
        getRecomendations,
        getPopular
    }
}

export default useMovieApi