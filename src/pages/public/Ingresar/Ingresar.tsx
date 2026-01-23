import React from 'react'
import './Ingresar.css'

export default function Ingreso() {
  return (       
    <body className="auth-body">

    <div className="auth-container">
        <h2>Iniciar Sesión</h2>

        <form id="loginForm">
            <label>Email</label>
            <input type="email" id="email" required/>

            <label>Contraseña</label>
            <input type="password" id="password" required/>

            <button type="submit">Entrar</button>
        </form>

        <p>¿No tienes cuenta? <a href="registro.html">Regístrate aquí</a></p>
    </div>

</body>
  )
}
