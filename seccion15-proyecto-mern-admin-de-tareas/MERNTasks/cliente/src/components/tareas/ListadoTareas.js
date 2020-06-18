import React, { Fragment } from "react";
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        {id: 1, nombre: 'Elegir Plataforma', estado: true},
        {id: 2, nombre: 'Elegir Colores', estado: false},
        {id: 3, nombre: 'Elegir Plataformas de pago', estado: false},
        {id: 4, nombre: 'Elegir Hosting', estado: true},
    ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>
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
      >Eliminar Proyecto &times;</button>
    </Fragment>
  );
};

export default ListadoTareas;
