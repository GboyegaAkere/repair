import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Buy from "./pages/Buy"
import AddBalance from "./pages/AddBalance"
import Contact from "./pages/Contact"
import Faq from "./pages/Faq"
import Limiteds from "./pages/Limiteds"
import Sell from "./pages/Sell"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer"
import Repairs from "./pages/Repairs"


export default function App() {
  return (
    <div className="mb-10 w-screen flex flex-col min-h-screen">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy" element={<Buy/>}/>
          <Route path="/balance" element={<AddBalance/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/repair" element={<Repairs/>}/>
          <Route path="/sell" element={<Sell/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  
  )
}