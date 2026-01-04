import './Registro.css'

export default function Registro() {
  return (
    <body class="auth-body">
    <div class="auth-container">
        <h2>Crear Cuenta</h2>

        <form id="registerForm">
            <label>Nombre Completo</label>
            <input type="text" id="name" required/>

            <label>Email</label>
            <input type="email" id="email" required/>

            <label>Contraseña</label>
            <input type="password" id="password" required/>

            <label>Universidad</label>
            <input type="text" id="university"/>

            <label>Rol</label>
            <select id="role">
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
                <option value="investigador">Investigador</option>
            </select>

            <button type="submit">Registrarme</button>
        </form>

        <p>¿Ya tienes cuenta? <a href="login.html">Inicia sesión</a></p>
    </div>
  </body>
  )
}
