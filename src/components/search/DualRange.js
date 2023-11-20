import { useState, useContext } from "react"
import { FilterContext } from "./FiltersContext"
import "./DualRange.css"

function DualRange ({fromName, toName, min, max, step = 1}){

    const [filters, setFilters] = useContext(FilterContext)
    const thumbLeft = 100 * ( filters[fromName] - min ) / (max - min)
    const thumbRight = 100 * ( filters[toName] - min ) / (max - min) 

    const handleChange = (event) => {
		const name = event.target.name
		const buttonValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value

        if ( name === toName && buttonValue < filters[fromName] ){
            setFilters(values => ({...values, [name]: parseInt(filters[fromName])}))
            return
        }
        if ( name === fromName && buttonValue > filters[toName] ){
            setFilters(values => ({...values, [name]: parseInt(filters[toName])}))
            return
        }
        
		setFilters(values => ({...values, [name]: parseInt(buttonValue)}))
	}

    return (
        <div className="dual_range text-sm mb-4">
            <div className="range_control flex flex-col mb-2">
                <div className="dual_range_line"
                    style={{background: `linear-gradient(90deg, white ${thumbLeft}%, var(--accent-color) ${thumbLeft}%, 
                    var(--accent-color) ${thumbRight}%, white ${thumbRight}%)`}}
                >
                    <span style={{left: `${thumbLeft}%`}} className="dual_range_thumb thumb-left"></span>
                    <span style={{left: `${thumbRight}%`}} className="dual_range_thumb thumb-right"></span>
                </div>

                <input type="range"
                    onChange={ handleChange }
                    name={fromName}
                    value={filters[fromName]}
                    min={min}
                    max={max}
                    step={step}/>
                <input type="range"
                    onChange={ handleChange }
                    name={toName}
                    value={filters[toName]}
                    min={min}
                    max={max}
                    step={step}/>
            </div>
            <div class="range_input flex gap-3">
                <div className="flex gap-2 items-center">
                    <input type="number"
                        className="rounded-xl bg-slate-50 dark:bg-slate-900 py-1 px-3"
                        onChange={ handleChange }
                        name={fromName}
                        value={filters[fromName]}
                        min={min}
                        max={max}/>
                </div>
                <div className="flex gap-2 items-center">
                    <input type="number"
                        className="rounded-xl bg-slate-50 dark:bg-slate-900 py-1 px-3 text-right" 
                        onChange={ handleChange }
                        name={toName}
                        value={filters[toName]}
                        min={min}
                        max={max}/>
                </div>
            </div>
        </div>
    )
}

export default DualRange
