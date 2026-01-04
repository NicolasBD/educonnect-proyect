import React from 'react'
import './Home.css';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router";

// Images
import BannerEduconnect from '../../../assets/banner-educonnect.png';
import TopCarreras from '../../../assets/top-carreras.jpg';
import ImgHabilidades from '../../../assets/habilidades.webp';
import ImgSede from '../../../assets/sede.avif'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
        
        <Navbar/>

        <h1 id='inicio'>EduConnect</h1>

        <div className="banner-intro">
            <img src={BannerEduconnect} alt="banner"/>
                <h2>Descubre tu potencial, transforma el mundo</h2>
                <p>EduConnect es una plataforma educativa que conecta a estudiantes, docentes y profesionales de diversas áreas
                para fomentar el aprendizaje colaborativo y el intercambio de conocimientos. Nuestro objetivo es crear un
                espacio donde la educación sea accesible, inclusiva y de alta calidad, impulsando el desarrollo personal y
                profesional de todos los participantes.</p>
                    <a href="contacto.html">
                        <button>Contactanos</button>
                    </a>
        </div>

        <h2 id="publicaciones">Publicaciones Recientes</h2>

        <div className="publicaciones">

        <div className="publicacion1">

            <h3>Top mejores Carreras 2025</h3>
            <img src={TopCarreras} alt="Publicación 1"/>
            <p>En el mundo universitario, existen diversas carreras con gran potencial y demanda. Medicina, ingenierías (especialmente las relacionadas con tecnología y datos), y administración de empresas son algunas de las opciones más destacadas, según diversos análisis sobre el mercado laboral. Además, carreras como científico de datos, especialista en ciberseguridad y desarrollador de software están experimentando un auge significativo debido al avance tecnológico. <br/>
                <a className='detalleButton' href="http://princetonreview.com/college-advice/top-ten-college-majors" target="_blank">Conocelas a detalle</a>
            </p>

        </div>

        <div className="publicacion2">

            <h3>Tener un mejor desempeño</h3>

            <img src={ImgHabilidades} alt="Publicación 2"/>

            <p>Para un mejor desempeño universitario, es crucial desarrollar habilidades blandas como la comunicación
                efectiva, la gestión del tiempo, la resolución de problemas, el trabajo en equipo y la adaptabilidad.
                Estas habilidades facilitan la interacción con compañeros y profesores, la organización de tareas y el
                cumplimiento de objetivos, además de fomentar la capacidad de afrontar desafíos y adaptarse a nuevas
                situaciones.
            </p>

        </div>

        <div className="publicacion3">

            <h3>Conoce nuestra nueva sede</h3>

            <img src={ImgSede} alt="Publicación 3"/>

            <p>Nuestra nueva sede es un edificio de once pisos con 5,100 metros cuadrados construidos. Ofrece 19
                salones, 7 salas de sistemas, 2 laboratorios, cocina, panadería, biblioteca, plazoleta de cafeterías,
                terraza deportiva, cancha multinacional, zona de esparcimiento, auditorio para 243 personas, con 7 salas
                de sistemas, provistas con equipos actualizados y conexión a internet de alta velocidad, facilitando así
                el aprendizaje práctico en áreas relacionadas con la informática, el diseño y otras disciplinas
                tecnológicas.</p>

            </div>

        </div>

        <h2>Testimonios</h2>


    <div className="testimonios">


        <p>"EduConnect ha sido una experiencia transformadora para mí. He aprendido tanto de mis compañeros y
            profesores, y he podido aplicar mis conocimientos en proyectos reales que impactan a la comunidad."<br/> <b> - Ana, Egresada de EduConnect.</b>
        </p>

        <br/>

        <p>"Estudiar en EduConnect ha sido una experiencia transformadora. La calidad de la enseñanza, especialmente en
            el área de Tecnología, me ha brindado conocimientos sólidos y herramientas prácticas que sé que me serán
            útiles en mi futuro profesional" <br/> <b> - Dylan, Estudiante de Ingeniería.</b></p>


    </div>


    <footer>

        <div className="redes">
            <h3>Siguenos en nuestras redes</h3>
            <FontAwesomeIcon className="fa-brands fa-facebook" icon={faFacebook} />
            <FontAwesomeIcon className="fa-brands fa-instagram" icon={faInstagram} />
            <FontAwesomeIcon className="fa-brands fa-linkedin" icon={faLinkedin} />
            <FontAwesomeIcon className="fa-brands fa-twitter" icon={faTwitter} />
        </div>
        <br/>
        <p className="derechos"> &copy; 2025 EduConnect. Todos los derechos reservados Enyoi.co</p>

    </footer>

    </div>

    
    
  )
}
