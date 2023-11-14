import Genres from "./Genres"
import DualRange from "./DualRange"

function Filters (){
    const currentYear = new Date().getFullYear()

    return (
        <div className="flex col">
            years:
            <DualRange 
                fromName="primary_release_date.gte" 
                toName="primary_release_date.lte" 
                min={1970} 
                max={currentYear} 
            />

            Genres:
            <Genres />

            Rating:
            <DualRange 
                fromName="vote_average.gte" 
                toName="vote_average.lte" 
                min={0} 
                max={10} 
                step={0.1} 
            />

            Votes:
            <DualRange 
                fromName="vote_count.gte" 
                toName="vote_count.lte" 
                min={0} 
                max={1000} 
            />
        </div>
    )
}

export default Filters