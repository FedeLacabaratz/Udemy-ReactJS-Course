import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const Proyecto = ({ proyecto }) => {

    // Obtener el state de proyectos
    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtener el state de tareas
    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    // Maneja el onClick
    const handleOnClick = (id) => {
        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareas(id); // Filtrar las tareas cuando se de click
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => handleOnClick(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
    );
}

export default Proyecto;