import Menu from "./Menu"
import SearchBar from "./SearchBar"

function Header() {
    return (
        <header className="flex sticky py-4 top-0 bg-gray-50 dark:bg-slate-900 z-30">
            <SearchBar />
        </header>
    )
}

export default Header
