import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import NetProIcon from "../components/netProIcon"
import HomeCustomers from "../components/HomeCustomers"
import React from 'react'

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/icon" element={<NetProIcon />} />
                <Route path="/homecustomers" element={<HomeCustomers />} />
            </Routes>
        </>
    )
}
export default WebRouting
