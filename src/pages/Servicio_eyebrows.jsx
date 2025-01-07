import React from 'react'
import Advertisement from '../components/Advertisement'
import { listadoServicioEyebrows } from '../data'
import Hero from '../components/Hero'
import Listado_Servicios from '../components/Listado_Servicios'
import Formulario from '../components/Formulario'

function Servicio_eyebrows() {
  return (
    <>
      <Advertisement />
      <Hero info={{img: 'eyebrows', title: 'Cejas'}}/>
      <Listado_Servicios serviciosListado={listadoServicioEyebrows}/>
      <Formulario />
    </>
  )
}

export default Servicio_eyebrows