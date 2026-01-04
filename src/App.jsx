import './App.css'
import React from 'react';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";

// Componente global (Home)
import Home from './pages/public/Home/Home';
import Registro from './pages/public/Registro/Registro';
// import Ingresar from './pages/public/Ingresar/Ingresar';




function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrarme" element={<Registro />} />
          {/* <Route path="/ingresar" element={<Ingresar />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
