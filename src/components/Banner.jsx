import { Link } from "react-router-dom"
import Animation from "./Animation"

// import AnimationContainer from "../Animaciones/animaciones";
function Banner() {
  return (
    <Animation>
        <section className="bienvenida anim">
            <div className="bienvenida__contenido contenedor">
                <h1 className="bienvenida__heading">Llevando la moda a tu alcance.</h1>
                <p className="bienvenida__texto">Realza tu belleza con nuestros servicios especializados en uñas y pestañas</p>

                <Link to='/nosotros' className="bienvenida__enlace">Leer Más</Link>
            </div>
        </section>
    </Animation>
  )
}

export default Banner