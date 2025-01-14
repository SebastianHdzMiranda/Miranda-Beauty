import React from 'react'
import Servicios from '../components/Servicios'
import Hero from '../components/Hero'
import { generateImageUrl } from '../data/generateImageUrls'

function ServiciosPage() {

  const serviciosImg = generateImageUrl('serviciosHero_h5ch0i')

  return (
    <> 
        <Hero info={{img: serviciosImg, title: 'Servicios'}} />
        <Servicios />
    </>
  )
}

export default ServiciosPage