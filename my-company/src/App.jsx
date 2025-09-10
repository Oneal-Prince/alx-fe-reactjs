import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css'
import NavBar from './components/Navbar';

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} /> 
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
