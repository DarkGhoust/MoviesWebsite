import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Page from "./components/home/Page"
import Footer from "./components/Footer"
import Movie from "./components/movie/Movie"
import Search from "./components/search/Search"

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/search/:name" element={<Search />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
