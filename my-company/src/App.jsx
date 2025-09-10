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
      
        <Route path="/" Component={<Home />} />
        <Route path="/about" Component={<About />} />
        <Route path="/contact" Component={<Contact />} />
        <Route path="/Services" Component={<Services />} /> 
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
