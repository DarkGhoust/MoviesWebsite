import { HashRouter, Route, Routes } from "react-router-dom"
import {TMDB } from "./components/Icons"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Page from "./components/home/Page"
import Footer from "./components/Footer"
import Movie from "./components/movie/Movie"
import Search from "./components/search/Search"
import Discover from "./components/search/Discover"
import Random from "./components/movie/Random"
import About from "./components/About"
import DarkModeSwitcher from "./components/DarkModeSwitcher"

function App() {
    return (
        <>
            <HashRouter>
                <aside className="w-64 h-screen sticky top-0 hidden sm:flex flex-col justify-between s">
                    <div>
                        <img className="mx-auto px-8 w-full mb-8 mt-10" src="./img/moviesLogo.png" alt="logo"/>
                        <DarkModeSwitcher />
                        <Menu />
                    </div>
                    <footer className="mx-auto w-fit mb-10 px-8">
                        <p className="text-sm text-center mb-2 texet-slate-600 dark:text-slate-400">Powered by</p>
                        <TMDB customClass="w-full" />
                    </footer>
                </aside>
                <main className="relative flex-1 flex flex-col place-content-between px-4 md:px-8 pb-8 gap-8 max-w-5xl mx-auto">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Page />} />
                        <Route path="/movie/:movieId" element={<Movie />} />
                        <Route path="/discover" element={<Discover />} />
                        <Route path="/random" element={<Random />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/search/:query" element={<Search />} />
                    </Routes>
                    <Footer />
                </main>
            </HashRouter>
        </>
    )
}

export default App
