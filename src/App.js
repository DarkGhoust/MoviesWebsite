import { HashRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Page from "./components/home/Page"
import Footer from "./components/Footer"
import Movie from "./components/movie/Movie"
import Search from "./components/search/Search"
import Discover from "./components/search/Discover"
import Random from "./components/movie/Random"
import About from "./components/About"
import Aside from "./components/Aside"


function App() {
    return (
        <>
            <HashRouter>
                <Aside />
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
