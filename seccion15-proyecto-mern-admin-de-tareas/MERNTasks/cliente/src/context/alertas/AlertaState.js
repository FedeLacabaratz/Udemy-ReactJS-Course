import React, { useReducer } from 'react';
import AlertaReducer from './AlertaReducer';
import AlertaContext from './AlertaContext';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = props => {
    const initialState = {
        alerta: null
    }

    const [ state, dispatch ] = useReducer(AlertaReducer, initialState)

    // Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        // Despues de 2 segundos limpia a alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 2000);
    };

    return (
        <AlertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </AlertaContext.Provider>
    )
};

export default AlertaState;