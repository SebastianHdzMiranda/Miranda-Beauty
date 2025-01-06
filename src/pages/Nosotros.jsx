import React from 'react'
import Banner from '../components/nosotros/Banner'
import Conocenos from '../components/nosotros/Conocenos'
import Footer from '../components/Footer'
import { equipo } from '../data'
function Nosotros() {
  return (
    <>
      <Banner />
      <Conocenos />
      <div className="content">
          <div className="content__contenido contenedor">
              <p className="content__texto">creemos en</p>
              <h2 className="content__heading">Crear un entorno que mejore la calidad de vida de nuestros clientes.</h2>
          </div>
      </div>
      <section className="equipo contenedor">
          <h2 className="equipo__heading">Nuestro equipo</h2>
          { equipo.map ( integrante => 
            <div key={integrante.nombre} className="equipo__integrante">
                <p className="equipo__nombre">{integrante.nombre}</p>
                <div className="equipo__texto">{integrante.presentacion}</div>
            </div>
          )}
      </section>
      <Footer />
    </>
  )
}

export default Nosotros