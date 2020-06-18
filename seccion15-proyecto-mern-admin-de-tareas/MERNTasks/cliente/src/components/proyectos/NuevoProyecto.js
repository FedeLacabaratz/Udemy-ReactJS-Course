import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(ProyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    // State para proyecto
    const [proyecto, setProyecto] = useState({
        nombre:''
    });

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    };

    // Lee los contenidos del input
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto

        // Agregar al state

        // Reiniciar el form
    }

    // Mostrar el formulario
    const handleClick = () => {
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={handleClick}
            >Nuevo Proyecto
            </button>
            {formulario ? 
                (
                    <form 
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
                        <input 
                            type="submit"
                            className="btn btn-block btn-primario"
                            value="Agregar Proyecto"
                        />
                    </form>
                ) : null
            }
        </Fragment> 
     );
}
 
export default NuevoProyecto;