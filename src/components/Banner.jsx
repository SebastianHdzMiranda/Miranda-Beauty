import Animation from "./Animation"

// import AnimationContainer from "../Animaciones/animaciones";
function Banner() {
  return (
    <Animation>
        <section className="bienvenida anim">
            <div className="bienvenida__contenido contenedor">
                <h1 className="bienvenida__heading">Llevando la moda a tu alcance.</h1>
                <p className="bienvenida__texto">Te sentirás como nueva(o) con nuestros masajistas profesionales</p>
                <a href="#" className="bienvenida__enlace">
                    Leer Mas
                </a>
            </div>
        </section>
    </Animation>
  )
}

export default Banner