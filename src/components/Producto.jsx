import Animation from './Animation';

function Producto() {
    const nombresProd = ['producto_01', 'producto_02', 'producto_03', 'producto_04'];
    const imageFormats = ['avif', 'webp', 'jpg'];

    return(
        <Animation>
            <div className="productos__grid">
                {nombresProd.map((producto, i)=> 
                    <div key={producto} className="producto">
                        <div className="producto__imgContainer">
                            <picture>
                                {imageFormats.map((format)=> (
                                    <source key={format} srcSet={`img/productos/${producto}.${format}`} type={`image/${format}`} />
                                ))}
                                <img className='producto__img anim' src={`img/productos/${producto}.jpg`} alt={`Imagen de ${producto}`} />
                            </picture>
                        </div>
                        <div className="producto__info">
                            <h3 className="producto__heading">Producto {i+1}</h3>
                            <p className="producto__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="producto__precio">$25</p>
                        </div>
                    </div>
                )}

            </div>
        </Animation>
    )

}

export default Producto