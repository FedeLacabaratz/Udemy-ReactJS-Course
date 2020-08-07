import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { useRouter } from 'next/router';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OCULTAR_ALERTA,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    USUARIO_AUTENTICADO,
    CERRAR_SESION,
    LIMPIAR_STATE
} from '../../types';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AuthState = ({ children }) => {

    // Routing
    const router = useRouter();

    // Definir un state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
        autenticado: null,
        usuario: null,
        mensaje: null
    };

    // Definir el reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Registrar nuevos usuarios
    const registrarUsuario = async datos => {

        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            });
        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
        }
        // Limpia la alerta despues de 1.5 segundos
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA,
                payload: null
            })
        }, 1500);
    };

    // Autenticar usuarios
    const iniciarSesion = async datos => {
        
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
        // Limpia la alerta despues de 1.5 segundos
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA,
                payload: null
            })
        }, 1500);
    }

    // Retorne el usuario autenticado en base al JWT
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth');

            if(respuesta.data.usuario) {
                dispatch({
                    type: USUARIO_AUTENTICADO,
                    payload: respuesta.data.usuario
                })
            }
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    };
    
    const limpiarState = () => {
        dispatch({
            type: LIMPIAR_STATE,
        })
    };

    // Cerrar la sesión
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        });
        router.push('/');
        limpiarState();
    };
    
    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
                limpiarState
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthState;