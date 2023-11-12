import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Page from "./components/home/Page"
import Footer from "./components/Footer"
import Movie from "./components/movie/Movie"

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path="/movie/:id" element={<Movie />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
