import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import NetProIcon from "../components/netProIcon"
import HomeCustomers from "../components/HomeCustomers"
import React from 'react'
import ProductSingle from "../pages/ProductSingle"
import Products from "../pages/Products"
import GalleryBlog from "../pages/GalleryBlog"
import BlogSingle from "../pages/BlogSingle"

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/icon" element={<NetProIcon />} />
                <Route path="/homecustomers" element={<HomeCustomers />} />
                <Route path="/products/:slug" element={<ProductSingle />} />
                <Route path="/gallery-blog" element={<GalleryBlog />} />
                <Route path="/gallery-blog/blog/:slug" element={<BlogSingle/>}/>
            </Routes>
        </>
    )
}
export default WebRouting
