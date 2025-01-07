import React from 'react'
import Servicios from '../components/Servicios'
import Hero from '../components/Hero'

function ServiciosPage() {
  return (
    <> 
        <Hero info={{img: 'servicios', title: 'Servicios'}} />
        <Servicios />
    </>
  )
}

export default ServiciosPage