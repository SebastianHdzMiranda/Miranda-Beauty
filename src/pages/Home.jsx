import Banner from "../components/Banner"
import Conocenos from "../components/Conocenos"
import Footer from "../components/Footer"
import Galeria from "../components/Galeria"
import Productos from "../components/Productos"
import Reserva from "../components/Reserva"
import Servicios from "../components/Servicios"
import Testimoniales from "../components/Testimoniales"

function Home() {
  return (
    <>
      <Banner />
      <Servicios />
      <Testimoniales />
      <Conocenos />
      <Reserva />
      <Galeria />
      {/* <Productos /> */}
      <Footer />
    </>
  )
}

export default Home