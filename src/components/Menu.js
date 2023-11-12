import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

function Menu() {
    return (
        <nav className="flex gap-0">
            <Link to="/" >Home</Link>
            <HashLink to="/#top_rated" >Movies</HashLink>
            <HashLink to="/#pricing" >Pricing</HashLink>
        </nav>
    )
}

export default Menu
