import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import NetProIcon from "../components/netProIcon"
import HomeCustomers from "../components/HomeCustomers"
import React from 'react'
import Products from "../pages/Products"

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/icon" element={<NetProIcon />} />
                <Route path="/homecustomers" element={<HomeCustomers/>}/>
            </Routes>
        </>
    )
}
export default WebRouting
