import { Link } from "react-router-dom";
import { servicios } from "../data";

function Servicio() {
    return (
        <div className="servicios__grid">
            {servicios.map((servicios, i)=>
                <div key={i} className="card">
                    <div className={`card__imgContainer`} style={{ backgroundImage: `url(${servicios.img})` }}></div>

                    <div className="card__info">
                        <h3 className="card__heading">Servicio de <span className="card__span">{servicios.titulo}</span></h3>
                        <Link to={servicios.to} className="card__btn">Leer Más</Link>
                    </div>
                </div>
            )}
        </div>
    );
}
// backgroundimage: url(../assets/img/servicio_1.jpg);

export default Servicio