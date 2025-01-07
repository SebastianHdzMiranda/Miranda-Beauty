import Advertisement from '../components/Advertisement'
import Formulario from '../components/Formulario'
import Hero from '../components/Hero'
import Listado_Servicios from '../components/Listado_Servicios'
import { listadoServicioLashes } from '../data'

function Servicio_lashes() {
  return (
    <>
      <Advertisement />
      <Hero info={{img: 'lashes', title: 'Pestañas'}}/>
      <Listado_Servicios serviciosListado={listadoServicioLashes}/>
      <Formulario />
    </>
  )
}

export default Servicio_lashes