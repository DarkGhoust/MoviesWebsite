import { useEffect, useState } from "react"

function DarkModeSwitcher() {
    const [mode, setMode] = useState("light")
    console.log(mode)

    useEffect(() =>{
        document.querySelector("html").className = mode
    },[mode])

    return (
        <div className="rounded-lg bg-gray-300 dark:bg-slate-700 mx-8 py-1 flex mb-6">
            <a 
                onClick={ () => setMode("light") }
                className="px-1 mx-1 block text-sm cursor-pointer flex-1 bg-gray-50 dark:bg-slate-700 rounded-md text-center">Light</a>
            <a 
                onClick={ () => setMode("dark") }
                className="px-1 mx-1 block text-sm cursor-pointer flex-1 bg-gray-300 dark:bg-slate-900 rounded-md text-center">Dark</a>
        </div>
    )
}

export default DarkModeSwitcher
