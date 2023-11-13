import { useState } from "react"
import "./DualRange.css"

function DualRange ({min = 1980, max = 2023, step = 1}){

    const [value, setValue] = useState({from: min, to: max})
    const thumbLeft = 100 * ( value.from - min ) / (max - min)
    const thumbRight = 100 * ( value.to - min ) / (max - min) 

    const handleChange = (event) => {
		const name = event.target.name
		const buttonValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        
        console.log(buttonValue, name)

        if ( name === "to" && buttonValue < value.from ){
            setValue(values => ({...values, [name]: parseInt(value.from)}))
            return
        }
        if ( name === "from" && buttonValue > value.to ){
            setValue(values => ({...values, [name]: parseInt(value.to)}))
            return
        }
        
		setValue(values => ({...values, [name]: parseInt(buttonValue)}))
	}

    return (
        <div className="dual_range">
            <div className="range_control flex col spacer-0">
                <div className="dual_range_line"
                    style={{background: `linear-gradient(90deg, white ${thumbLeft}%, var(--accent-color) ${thumbLeft}%, 
                    var(--accent-color) ${thumbRight}%, white ${thumbRight}%)`}}
                >
                    <span style={{left: `${thumbLeft}%`}} className="dual_range_thumb thumb-left"></span>
                    <span style={{left: `${thumbRight}%`}} className="dual_range_thumb thumb-right"></span>
                </div>

                <input type="range"
                    onChange={ handleChange }
                    name="from"
                    value={value.from}
                    min={min}
                    max={max}
                    step={step}/>
                <input type="range"
                    onChange={ handleChange }
                    name="to"
                    value={value.to}
                    min={min}
                    max={max}
                    step={step}/>
            </div>
            <div class="range_input flex gap-1">
                <div className="flex gap-0">
                    <p class="form_control_container__time">Min</p>
                    <input type="number"
                        onChange={ handleChange }
                        name="from"
                        value={value.from}
                        min={min}
                        max={max}/>
                </div>
                <div className="flex gap-0">
                    <input type="number" 
                        onChange={ handleChange }
                        name="to"
                        value={value.to}
                        min={min}
                        max={max}/>
                    <p class="form_control_container__time">Max</p>
                </div>
            </div>
        </div>
    )
}

export default DualRange
