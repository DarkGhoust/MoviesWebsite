import { useState } from "react"
import { TMDB, Burger } from "./Icons"
import Menu from "./Menu"
import DarkModeSwitcher from "./DarkModeSwitcher"

function Aside() {
    const [isMenuOpened, setIsMenuOpened] = useState(false) 

    return (
        <>
            <aside className={ isMenuOpened ? "w-full h-screen top-0 fixed flex flex-col justify-between z-40" : "w-64 h-screen sticky top-0 hidden sm:flex flex-col justify-between" }>
                <div onClick={ () => { setIsMenuOpened(false) } }>
                    <img className="mx-auto px-8 w-full mb-8 mt-10" src="./img/moviesLogo.png" alt="logo"/>
                    <DarkModeSwitcher />
                    <Menu />
                </div>
                <footer className="mx-auto w-fit mb-10 px-8">
                    <p className="text-sm text-center mb-2 texet-slate-600 dark:text-slate-400">Powered by</p>
                    <TMDB customClass="w-full" />
                </footer>
            </aside>
            <div onClick={ () => { setIsMenuOpened(true) } } className="sm:hidden flex pr-4 pt-4 ml-auto"> 
                <Burger customClass="w-10 h-10 fill-slate-800 dark:fill-slate-100" /> 
            </div>
        </>
    )
}

export default Aside
