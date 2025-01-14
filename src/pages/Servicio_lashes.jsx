import Advertisement from '../components/Advertisement'
import Formulario from '../components/Formulario'
import Hero from '../components/Hero'
import Listado_Servicios from '../components/Listado_Servicios'
import { listadoServicioLashes } from '../data'
import { generateImageUrl } from '../data/generateImageUrls'

function Servicio_lashes() {

    const lashesImg = generateImageUrl('eyelash-banner_xb0rvb');

  return (
    <>
      <Advertisement />
      <Hero info={{img: lashesImg, title: 'Pestañas'}}/>
      <Listado_Servicios serviciosListado={listadoServicioLashes}/>
      <Formulario />
    </>
  )
}

export default Servicio_lashes