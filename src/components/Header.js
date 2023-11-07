import Menu from "./Menu"
import "../css/header.css"

function Header() {
    return (
        <header className="flex">
            <img className="logo" alt="logo" src="logo192.png"/>
            <Menu />
            
        </header>
    )
}

export default Header
