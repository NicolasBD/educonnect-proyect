import React from 'react'
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import EduconnectLogo from '../../../src/assets/Educonnect-logo.png';


export default function Navbar() {
  return (
    <header className="app-header">
        <nav className="navbar">
            <a href="#inicio">Inicio</a>
            <a href="#publicaciones">Publicaciones</a>
            <Link to='/registrarme'>Registrarme</Link>
            <Link to="/ingresar">Ingresar</Link>
            
        </nav>
        
        <img src={EduconnectLogo} alt="Logo de la universidad" />

        <p> <b> Formando líderes con visión global y compromiso social</b></p>

    </header>
  )
}