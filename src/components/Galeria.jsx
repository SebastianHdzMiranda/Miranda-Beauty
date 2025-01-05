import Animation from "./Animation";

const nombresImg = ['galeria_1', 'galeria_2', 'galeria_3', 'galeria_4', 'galeria_5', 'galeria_6', 'galeria_7', 'galeria_8', 'galeria_9', 'galeria_10', 'galeria_11', 'galeria_12'];


function Galeria() {
    return (
        <Animation>
            <section className="galeria">
                <div className="galeria__grid">
                    {nombresImg.map((nombreImg) => (
                        <div key={nombreImg} className="galeria__imgContainer">
                            {/* <picture>
                                <source type="image/avif" srcSet={`img/galery/${nombreImg}.avif`} />
                                <source type="image/webp" srcSet={`img/galery/${nombreImg}.webp`} /> */}
                                <img className="galeria__img anim" src={`img/galery/${nombreImg}.jpg`} alt={`Imagen de ${nombreImg}`} />
                            {/* </picture> */}
                        </div>
                    ))}
                </div>
            </section>
        </Animation>
    );

}

export default Galeria