import { Link } from "react-router-dom";

function Navegacion({enlaces, menuActivo}) {
  return (
    <nav className={`navegacion ${menuActivo ? 'navegacion--activo' : 'navegacion--cerrado'}`}>
        {enlaces.map((enlace, i)=>
            <Link key={i} to='https://github.com/SebastianHdzMiranda/Miranda-Salon' target="_blank" className={`navegacion__enlace ${!menuActivo && 'navegacion__enlace--cerrado'}`}>
                {enlace.titulo}
            </Link>
        )}
    </nav>
  )
}

export default Navegacion