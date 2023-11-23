import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Home1stPage from '../pages/Home1stpart'
import Navigation from "../components/Navigation"
const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home1stPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}
export default WebRouting
