import Servicio from "./Servicio";

function Servicios() {
    

    return(
        <section className="servicios contenedor" id="servicios">
            <h2 className="servicios__heading">Nuestros Servicios de Calidad</h2>
            <p className="servicios__texto">La satisfacción del cliente es nuestro objetivo</p>
            
            <Servicio />
        </section>
    );
}

export default Servicios