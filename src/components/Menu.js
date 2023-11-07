import { Link } from "react-router-dom"

function Menu() {
    return (
        <nav className="flex gap-0">
            <Link to="/" >Home</Link>
            <Link to="/movies" >Movies</Link>
            <Link to="/categories" >Categories</Link>
            <Link to="/pricing" >Pricing</Link>
            <Link to="/about" >About</Link>
        </nav>
    )
}

export default Menu
