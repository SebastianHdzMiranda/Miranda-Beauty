import React from 'react'
import Hero from '../components/Hero'
import Formulario from '../components/Formulario'

function Reservar() {
  return (
    <>
      <Hero info={{img: 'reservar', title: 'Realiza una Reservacion'}}/>
      <Formulario />
    </>
  )
}

export default Reservar