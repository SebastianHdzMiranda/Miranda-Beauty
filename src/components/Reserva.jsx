import { Link } from "react-router-dom"

function Reserva() {
    return(
        <div className="reserva">
            <div className="reserva__contenido contenedor">
                <h2 className="reserva__heading">Calidez, Calidad y Belleza en cada visita</h2>
                <Link to='https://wa.me/message/PT6DTZPIUFYNJ1' className="reserva__enlace" target="_blank">Reservar</Link>
            </div>
        </div>
    )
}

export default Reserva