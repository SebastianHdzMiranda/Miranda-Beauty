import { useForm } from "react-hook-form"
import Error from "./Error";
import { useState } from "react";
import { listadoServicioEyebrows, listadoServicioLashes, listadoServicioNails } from "../data";
function Formulario() {
    const [servicios, setServicios] = useState('');

    const { register, handleSubmit, formState: {errors}, clearErrors} = useForm()

    const handleServices = (e)  => {
        setServicios(e.target.value);
        clearErrors("servicios");
    }

    const ServiceListType = () => {
        if (servicios === 'nails') {
            return(
                listadoServicioNails.map( (servicio,i) => 
                    <option key={i} value={servicio.heading}>{servicio.heading}--{servicio.price}</option>
                )
            )
        } 
        if (servicios === 'lashes') {
            return(
                listadoServicioLashes.map( (servicio,i) => 
                    <option key={i} value={servicio.heading}>{servicio.heading}--{servicio.price}</option>
                )
            )
        } 

        if (servicios === 'eyebrows') {
            return(
                listadoServicioEyebrows.map( (servicio,i) => 
                    <option key={i} value={servicio.heading}>{servicio.heading}--{servicio.price}</option>
                )
            )
        } 
        if (servicios === '') {
            return (<option >-- Elige el servicio --</option>);
        } 
    }

    const registerReserv = () => {
        console.log('Nueva reservacion');
    }

    return (
        <div className="contacto contenedor">
            <form 
                className='formulario' id="formulario"
                onSubmit={handleSubmit(registerReserv)}
            >
                <div className="formulario__campo">
                    <label className='formulario__label' htmlFor="servicios">Servicio de:</label>
                    <select
                        className={`formulario__input ${errors.servicios && 'formulario__input--error'}`}
                        id="servicios"
                        {...register('servicios', {
                            required: '*El tipo de servicio es obligatorio'
                        })}
                        value={servicios}   
                        onChange={handleServices}
                    >
                        <option value='' disabled hidden>-- Elige el tipo de servicio --</option>
                        <option value="nails">Uñas</option>
                        <option value="lashes">Pestañas</option>
                        <option value="eyebrows">Cejas</option>
                    </select>
                    {errors.servicios &&
                        <Error>{errors.servicios?.message}</Error>
                    }
                </div>


                <div className="formulario__campo">
                    <label className='formulario__label' htmlFor="aplicacion">Aplicacion De:</label>
                    <select
                        className={`formulario__input ${errors.aplicacion && 'formulario__input--error'}`}
                        id="aplicacion"
                        {...register('aplicacion', {
                            required: '*la aplicacion es obligatorio'
                        })}
                    >
                        <ServiceListType />
                    </select>
                    {errors.aplicacion &&
                        <Error>{errors.aplicacion?.message}</Error>
                    }
                </div>
                
                <div className="formulario__campo">
                    <label className='formulario__label' htmlFor="nombre">Nombre:</label>
                    <input 
                        className={`formulario__input ${errors.nombre && 'formulario__input--error'}`}
                        type="text" 
                        id='nombre' 
                        placeholder='Tu nombre'
                        
                        {...register('nombre', {
                            required: '*El nombre es obligatorio'
                        })}

                    />
                    {errors.nombre &&
                        <Error>{errors.nombre?.message}</Error>
                    }
                </div>


                <div className="formulario__campo">
                    <label className='formulario__label' htmlFor="telefono">telefono:</label>
                    <input 
                        className={`formulario__input ${errors.telefono && 'formulario__input--error'}`}
                        type="tel" 
                        id='telefono' 
                        placeholder='Digita tu telefono'
                        
                        {...register('telefono', {
                            required: '*El telefono es obligatorio',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "El número de teléfono no es válido" 
                            }
                        })}

                    />
                    {errors.telefono &&
                        <Error>{errors.telefono?.message}</Error>
                    }
                </div>

               

                <input 
                    className="formulario__boton" 
                    type="submit" 
                    value="Siguiente" 
                />
                
            </form>
        </div>
    )
}

export default Formulario