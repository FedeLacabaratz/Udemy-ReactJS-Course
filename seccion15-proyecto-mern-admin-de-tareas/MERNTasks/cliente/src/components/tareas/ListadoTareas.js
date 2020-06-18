import React, { Fragment, useContext } from "react";
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoTareas = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Elimina la tarea al hacer click
    const handleOnClick = () => {
      eliminarProyecto(proyectoActual.id)
    }


    const tareasProyecto = [
        {id: 1, nombre: 'Elegir Plataforma', estado: true},
        {id: 2, nombre: 'Elegir Colores', estado: false},
        {id: 3, nombre: 'Elegir Plataformas de pago', estado: false},
        {id: 4, nombre: 'Elegir Hosting', estado: true},
    ];

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 
            ? (<li className="tarea"><p>No hay tareas</p></li>)
            : (tareasProyecto.map(tarea => (
                    <Tarea
                      key={tarea.id}  
                      tarea={tarea}
                    />
                )))
        }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={handleOnClick}
      >Eliminar Proyecto &times;</button>
    </Fragment>
  );
};

export default ListadoTareas;
