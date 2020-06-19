import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA, 
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {

    // Definimos el state inicial
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            { id: 7, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4},
            { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 1},
            { id: 10, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2},
            { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
            { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4},
            { id: 13, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    // Creat el dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    };

    // Agregar una nueva tarea al listado de tareas del proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4();

        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    };

    // Valida y muestra un error em caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    };

    // Eliminar tarea por id
    const eliminarTarea = id =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    };

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    };

    // Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    };

    // Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    };

    // Elimina la tareaseleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
};

export default TareaState;