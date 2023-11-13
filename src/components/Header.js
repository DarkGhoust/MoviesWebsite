import Menu from "./Menu"
import SearchBar from "./SearchBar"
import "../css/header.css"

function Header() {
    return (
        <header className="flex">
            <img className="logo" alt="logo" src="logo192.png"/>
            <SearchBar />
            <Menu />
        </header>
    )
}

export default Header
