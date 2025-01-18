import React from 'react'
import Conocenos from '../components/nosotros/Conocenos'
import { equipo } from '../data'
import Hero from '../components/Hero'
import { generateImageUrl } from '../data/generateImageUrls'
function Nosotros() {

  const nosotrosImg = generateImageUrl('b8shmdjvny1yda0cy9q7');

  return (
    <>
      <Hero info={{img: nosotrosImg, title: 'Sobre Nosotros'}}/>
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
    </>
  )
}

export default Nosotros