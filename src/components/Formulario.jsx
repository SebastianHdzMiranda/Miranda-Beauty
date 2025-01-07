import React from 'react'

function Formulario() {
  return (
    <div className="contacto contenedor">
        <form className='formulario' id="formulario">
            
            <div className="formulario__campo">
                <label className='formulario__label' for="nombre">Nombre:</label>
                <input className='formulario__input' type="text" id='nombre' placeholder='Tu nombre' />
            </div>

            <div className="formulario__campo">
                <label className='formulario__label' for="email">Email:</label>
                <input className='formulario__input' type="email" id="email" placeholder="Tu Email" />
            </div>
            
            <div className="formulario__campo">
                <label className='formulario__label' for="fecha">Fecha:</label>
                <input className='formulario__input' type="date" id="fecha" />
            </div>

            <div className="formulario__campo">
                <label className='formulario__label' for="hora">Hora:</label>
                <input className='formulario__input' type="time" id="hora" min="09:00" max="22:00" />
            </div>
            <input class="formulario__boton" type="submit" value="Enviar" />
            
        </form>
    </div>
  )
}

export default Formulario