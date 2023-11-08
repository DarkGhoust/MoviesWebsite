import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Page from "./components/Page"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Page />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
