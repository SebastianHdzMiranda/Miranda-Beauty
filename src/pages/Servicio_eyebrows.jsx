import React from 'react'
import Advertisement from '../components/Advertisement'
import { listadoServicioEyebrows } from '../data'
import Hero from '../components/Hero'
import Listado_Servicios from '../components/Listado_Servicios'
import Formulario from '../components/Formulario'
import { generateImageUrl } from '../data/generateImageUrls'

function Servicio_eyebrows() {

  const eyebrowsImg = generateImageUrl('eyebrows-banner_ccccjq')

  return (
    <>
      <Advertisement />
      <Hero info={{img: eyebrowsImg, title: 'Cejas'}}/>
      <Listado_Servicios serviciosListado={listadoServicioEyebrows}/>
      <Formulario />
    </>
  )
}

export default Servicio_eyebrows