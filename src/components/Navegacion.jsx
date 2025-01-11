import { Link } from "react-router-dom";

function Navegacion({enlaces, menuActivo, setMenuActivo}) {
    
  const handleClick = () => setMenuActivo(!menuActivo);

  return (
    <nav className={`navegacion ${menuActivo ? 'navegacion--activo' : 'navegacion--cerrado'}`}>
        {enlaces.map((enlace, i)=>
            <Link key={i} to={enlace.to} className={`navegacion__enlace ${!menuActivo && 'navegacion__enlace--cerrado'}`} target={`${enlace.to === 'https://wa.me/message/PT6DTZPIUFYNJ1' ? '_blank' : '_self' }`} onClick={handleClick}>
                {enlace.titulo}
            </Link>
        )}
    </nav>
  )
}

export default Navegacion