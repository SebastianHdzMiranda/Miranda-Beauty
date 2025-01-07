import React from 'react'
import Hero from '../components/Hero';
import Advertisement from '../components/Advertisement';
import Listado_Servicios from '../components/Listado_Servicios';
import { listadoServicioNails } from '../data';
import Formulario from '../components/Formulario';

function Servicio_nails() {
  return (
    <>
        <Advertisement />
        <Hero info={{img: 'nails', title: 'Nails'}}/>
        <Listado_Servicios serviciosListado={listadoServicioNails}/>
        <Formulario />
    </>
  )
}

export default Servicio_nails;