import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import Contato from './Components/Contato'
import NavBar from './Components/NavBar'
import Projetos from './Components/Projetos'
import Sobre from './Components/Sobre'
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  

  return (
    <div>
      <BrowserRouter>
         <AnimatePresence>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Contato" element={<Contato />}/>
          <Route path="/Sobre" element={<Sobre />}/>
          <Route path="/Projetos" element={<Projetos />}/>
        </Routes>
        </AnimatePresence>
      </BrowserRouter>

    </div>
  )
}

export default App
