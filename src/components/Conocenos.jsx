import { generateImageUrl } from "../data/generateImageUrls";

function Conocenos() {

    const bannerImg = generateImageUrl('salon_i77qy5');

    return(
        <section className="conocenos">
            <div className="conocenos__info">
                <h2 className="conocenos__heading">Ven a Conocernos</h2>

                <p className="conocenos__descripcion">
                    Acércate y descubre el lugar perfecto para consentirte. En nuestro salón, encontrarás servicios de alta calidad en uñas y pestañas, acompañados de un trato cálido y profesional. ¡Haz de tu visita una experiencia relajante y revitalizante!
                </p>
            </div>
            <div className="conocenos__img" style={{ backgroundImage: `url(${bannerImg})` }}></div>
        </section>
    )
}

export default Conocenos