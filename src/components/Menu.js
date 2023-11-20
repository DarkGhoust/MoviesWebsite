import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import { Home, Discover, About, Random } from "./Icons"

function Menu() {

    return (
        <nav className="flex flex-col text-slate-800 dark:text-slate-200">
            <Link className="px-8 py-3 relative fill-slate-800 dark:fill-slate-100 dark:hover:fill-orange-600 hover:fill-teal-400" to="/" >
                <Home customClass="w-5 h-5 inline mr-3"/>Home
            </Link>
            <Link className="px-8 py-3 relative fill-slate-800 dark:fill-slate-100 dark:hover:fill-orange-600 hover:fill-teal-400" to="/discover" >
                <Discover customClass="w-5 h-5 inline mr-3"/>Discover
            </Link>
            <Link className="px-8 py-3 relative fill-slate-800 dark:fill-slate-100 dark:hover:fill-orange-600 hover:fill-teal-400 cursor-pointer" to="/random" >
                <Random customClass="w-5 h-5 inline mr-3"/>Random movie
            </Link>
            <Link className="px-8 py-3 relative fill-slate-800 dark:fill-slate-100 dark:hover:fill-orange-600 hover:fill-teal-400" to="/about" >
                <About customClass="w-5 h-5 inline mr-3"/>About
            </Link>
        </nav>
    )
}

export default Menu
