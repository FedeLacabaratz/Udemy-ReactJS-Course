import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const FormTarea = () => {

    // Obtener si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la Tarea..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primario btn-submit"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;