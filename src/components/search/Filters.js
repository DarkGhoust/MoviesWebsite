import DualRange from "./DualRange"

function Filters ({setSelectedCategory, selectedCategory}){
    
    const currentYear = new Date().getFullYear()

    return (
        <div className="flex col">
            years:
            <DualRange min={1980} max={currentYear} />

            Genres:

            Rating:
            <DualRange min={0} max={10} step={0.1} />

            Votes:
            <DualRange min={0} max={1000} />
        </div>
    )
}

export default Filters

const arrayRange = (start, stop, step) => {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    )
}

const genres = {
    
    "genres": [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
    ]
      
}