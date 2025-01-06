import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Navegacion from './Navegacion'
import { useEffect, useState } from 'react';
import { enlaces } from '../data';

function Header() {
    const [menuActivo, setMenuActivo] = useState(false);

    // aplica overflow al body
    useEffect(() => {
      if (menuActivo) {
        document.body.style.overflowY = 'hidden';
      }
      else {
        document.body.style.overflowY = 'auto';
      }
    }, [menuActivo])

    const mostrarNav = () => setMenuActivo(!menuActivo);

    return (
        <>
            <header className="header">
                <Link to='/' className="header__link">
                    <img className="header__logo" src={logo} alt="logo" />
                </Link>
            
                <button
                    className={`header__iconMenu hamburger hamburger--slider ${menuActivo ? 'is-active' : ''}`}
                    type="button"
                    onClick={mostrarNav}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>


                <Navegacion enlaces={enlaces} menuActivo={menuActivo} setMenuActivo={setMenuActivo}/>
                
            </header>
        </>
    )
}

export default Header