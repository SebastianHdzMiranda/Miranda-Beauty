import { sociales } from '../data';
import Animation from './Animation';

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__grid contenedor">

                <div className="footer__seccion">
                    <h3 className="footer__heading">Horario</h3>
                    <p className="footer__texto">Lun-Vie: 9AM - 7PM</p>
                    <p className="footer__texto">Sábado: 9AM - 2PM</p>
                    <p className="footer__texto">Domingo: Cerrado</p>
                </div>
                <Animation>
                    <div className="footer__seccion">
                        <h3 className="footer__heading">Contactos</h3>
                        {/* <p className="footer__texto">C. Amapolas 17</p> */}
                        <nav className="sociales">

                            {sociales.map( (social) => 
                                <a key={social.nombre} href={social.href} target="_blank" className="sociales__enlace anim">
                                    <span className="sociales__accesible">{social.nombre}</span>
                                </a>  
                            )}
                            
                        </nav>
                    </div>
                </Animation>


                <div className='footer__ubicacion'>
                    <div className="footer__iframeContainer">
                        <iframe className="footer__iframe"  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d941.2334364578695!2d-99.16430086050971!3d19.3286810673808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1736046692969!5m2!1ses-419!2smx" width="600" height="450" loading="lazy"  style={{border: 'none'}}></iframe>

                    </div>
                    <a href="https://maps.app.goo.gl/mineooY5Lbq46ktw7" target='_blank' className='footer__direccion'>Ir</a>
                </div>
            </div>
            <div className="copyright">
                <p className="copyright__texto">
                    &copy; Miranda Beauty / Nails & Lashes. Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
}

export default Footer