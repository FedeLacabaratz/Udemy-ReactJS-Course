import React, { useContext, useState, useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';
const FormTarea = () => {

    // Obtener si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener tarea de un proyecto activo
    const tareasContext = useContext(TareaContext);
    const { errortarea, agregarTarea, tareaseleccionada, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null) {
            setTarea(tareaseleccionada)
            } else {
                setTarea({
                    nombre: ''
                })
            }
    }, [tareaseleccionada]);

    // State del formulario
    const [ tarea, setTarea ] = useState({
        nombre: '',
    });

    // Extraer el nombre del proyecto
    const { nombre } = tarea;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    };

    // Manejo de funciones cuando envío el formulario
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        };

        // Revisa si es edicion o nueva tarea
        if(tareaseleccionada === null) {
            // Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
    
            // Obtener y filtrar las tareas del proyecto actual
            obtenerTareas(proyectoActual.id);
    
            // Reiniciar el form
            setTarea({
                nombre: ''
            });
        } else {
            // Actualizar tarea existente
            actualizarTarea(tarea);

            // Elimina tareaseleccionada del state
            limpiarTarea();

            // Obtener y filtrar las tareas del proyecto actual
            obtenerTareas(proyectoActual.id);
    
            // Reiniciar el form
            setTarea({
                nombre: ''
            });
        }

    };

    return ( 
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primario btn-submit"
                        value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormTarea;