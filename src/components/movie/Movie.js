import Cast from "./Cast"
import Reviews from "./Reviews"
import "../../css/page.css"

const movie = {
    "adult": false,
    "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    "belongs_to_collection": null,
    "budget": 11363000,
    "genres": [
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "https://www.parasite-movie.com/",
    "id": 496243,
    "imdb_id": "tt6751668",
    "original_language": "ko",
    "original_title": "기생충",
    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    "popularity": 74.751,
    "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "production_companies": [
        {
            "id": 4399,
            "logo_path": "/7bWmbWfxFNSGTCjLHkHn3UjspZS.png",
            "name": "Barunson E&A",
            "origin_country": "KR"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "KR",
            "name": "South Korea"
        }
    ],
    "release_date": "2019-05-30",
    "revenue": 257591776,
    "runtime": 133,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "German",
            "iso_639_1": "de",
            "name": "Deutsch"
        },
        {
            "english_name": "Korean",
            "iso_639_1": "ko",
            "name": "한국어/조선말"
        }
    ],
    "status": "Released",
    "tagline": "Act like you own the place.",
    "title": "Parasite",
    "video": false,
    "vote_average": 8.515,
    "vote_count": 16628
  }

function Movie() {

    

    const getReleaseDate = () =>{
        const date = movie.release_date
        
        return new Date(date).getFullYear()
    }

    const genres = movie.genres.map( (item, key) => <label style={{padding: "0.3em 1em"}} className="genres rounded bg-light" key={key}>{item.name}</label>)

    return (
        <main className="glass-reflection">
            <section className="flex hero spacer-2" 
                style={{backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}")`}}>
                <div className="max-width flex gap-1">
                    
                    <div style={{width: "50%"}}>
                        <img className="spacer-1" alt="episode" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path} />
                    </div>
                    <div style={{width: "50%"}}>
                        <h2>{movie.title} ({ getReleaseDate() })</h2>
                        <i>{movie.tagline}</i>

                        <div className="flex gap-0">
                            <span>Rating: {movie.popularity}</span>
                            <span>Time: {movie.runtime}</span>
                        </div>

                        <p>{movie.overview}</p>
                        <p><b>Genres</b></p>
                        <div className="flex gap-0">{genres}</div>
                        
                    </div>
                    
                </div>
            </section>

            <section className="flex" id="top_rated">
                <div className="max-width flex col">
                    <h2 className="spacer-1">Top Billed Cast</h2>
                    <Cast />
                    <Reviews />
                </div>
            </section>

        </main>
    )
}

export default Movie

