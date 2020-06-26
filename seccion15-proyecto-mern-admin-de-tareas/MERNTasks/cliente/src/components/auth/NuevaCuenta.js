import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/AlertaContext';
import AuthContext from '../../context/autenticacion/AuthContext';

const NuevaCuenta = (props) => {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    // En caso de que el usuario se haya autenticado o registrado y se intente un registro duplicado
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        

    }, [mensaje, autenticado, props.history])

    // State para iniciar sesion
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // Extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe de tener al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Los 2 passwords sean iguales
        if(password !== confirmar) {
            mostrarAlerta('El password debe de coincidir con la confirmacion', 'alerta-error');
            return;
        }

        // Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        });

    };

    return (
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Crear Nueva Cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirmar Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Repite tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    A Login
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;