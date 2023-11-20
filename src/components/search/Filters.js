import Genres from "./Genres"
import DualRange from "./DualRange"

function Filters (){
    const currentYear = new Date().getFullYear()

    return (
        <div className="flex flex-col rounded-2xl bg-slate-200 dark:bg-slate-800 py-5 px-7 mb-4 text-slate-600 dark:text-slate-400">
            <div className="flex gap-8 flex-wrap">
                <div className="flex-1">
                    <p className="text-sm mb-2">Years:</p>
                    <DualRange
                        fromName="primary_release_date.gte"
                        toName="primary_release_date.lte"
                        min={1970}
                        max={currentYear}
                    />
                </div>
                <div className="flex-1">
                    <p className="text-sm mb-2">Rating:</p>
                    <DualRange
                        fromName="vote_average.gte"
                        toName="vote_average.lte"
                        min={0}
                        max={10}
                        step={0.1}
                    />
                </div>
            </div>

            <p className="text-sm mb-2">Genres:</p>
            <Genres />
            
        </div>
    )
}

export default Filters