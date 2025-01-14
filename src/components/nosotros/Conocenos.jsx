import { generateImageUrl } from "../../data/generateImageUrls";

function Conocenos() {
    const nosotrosImg = generateImageUrl('manicure-banner_f6duzs');
    
    return (
        <div className="nosotros contenedor">
            <h2 className="nosotros__heading">Conoce</h2>
            <h2 className="nosotros__subHeading">Nuestro objetivo</h2>
            <p className="nosotros__texto">En nuestro salón, buscamos ofrecer un espacio donde cada visita se convierta en una experiencia única de belleza y cuidado personal. Con la pasión por realzar lo mejor de ti, nos dedicamos a brindar servicios de alta calidad y atención personalizada en un ambiente acogedor y relajante. Creemos que el autocuidado es esencial y queremos ser el lugar donde puedas desconectarte del estrés y disfrutar de un servicio que resalte tu estilo. Cada detalle ha sido pensado para que te sientas renovada. ¡Nos encantaría ser parte de tu rutina de belleza!</p>
            <div className="nosotros__img">
                <img loading="lazy" decoding="async" src={nosotrosImg} width="500" height="300" alt="img nosotros"></img>
            </div>

        </div>
    )
}

export default Conocenos;