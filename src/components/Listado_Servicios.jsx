import React from 'react'

function Listado_Servicios({serviciosListado}) {
  return (
    <section className="listado-servicios contenedor">
        {serviciosListado.map( (servicio, i) =>
            <div key={i} className="listado-servicios__servicio">
                <div className="listado-servicios__header">
                    <h2 className="listado-servicios__heading">{servicio.heading}</h2>
                    <p className="listado-servicios__precio">{servicio.price}</p>
                </div>
                <p className="listado-servicios__texto">{servicio.description}</p>
            </div>
        )}
    </section>
  )
}

export default Listado_Servicios;