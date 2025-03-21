import React from 'react'
import './App.css'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from "./component/Navbar.tsx";
import Home from "./page/Home.tsx";
import About from "./page/About.tsx";
import Contact from "./page/Contact.tsx";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
