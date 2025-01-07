import { Link } from "react-router-dom"

function Reserva() {
    return(
        <div className="reserva">
            <div className="reserva__contenido contenedor">
                <h2 className="reserva__heading">Enjoy the Juniper difference</h2>
                <Link to='/reservar' className="reserva__enlace">Reservar</Link>
            </div>
        </div>
    )
}

export default Reserva