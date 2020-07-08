import React, { useState, useContext, Fragment } from 'react';
import { css } from '@emotion/core';
import Router, { useRouter } from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout';
import Error404 from '../components/layout/404';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import { FirebaseContext } from '../firebase/';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearProducto from '../validacion/validarCrearProducto';

const STATE_INICIAL = {
    nombre: '',
    empresa: '',
    imagen: '',
    url: '',
    descripcion: ''
}

const NuevoProducto = () => {

    // state de las imagenes
    const [nombreImagen, setNombreImagen] = useState('');
    const [subiendo, setSubiendo] = useState(false);
    const [progreso, setProgreso] = useState(0);
    const [urlImagen, setUrlImagen] = useState('');

    const [error, setError] = useState(false);
    const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);
    const { nombre, empresa, imagen, url, descripcion } = valores;

    // hook de routing para redireccionar
    const router = useRouter();

    // Context con las operaciones CRUD de firebase
    const { usuario, firebase } = useContext(FirebaseContext);

    async function crearProducto() {
        // Si el usuario no esta autenticado llevar al login
        if (!usuario) {
            return router.push('/login');
        }

        // Crear el objeto de nuevo producto
        const producto = {
            nombre,
            empresa,
            url,
            urlImagen,
            descripcion,
            votos: 0,
            comentarios: [],
            creado: Date.now(),
            creador: {
                id: usuario.uid,
                nombre: usuario.displayName,
            },
            haVotado: []
        }

        // Insertarlo en la base de datos
        firebase.db.collection('productos').add(producto);
        return router.push('/');
    }

    // Cuando comienza a subir la imagen
    const handleUploadStart = () => {
        setProgreso(0);
        setSubiendo(true);
    };

    // Maneja el progreso de la carga
    const handleProgress = progreso => {
        setProgreso({ progreso })
    };

    // Controla los errores
    const handleUploadError = error => {
        setSubiendo(error);
        console.error(error);
    };

    // Controla lo que sucede al subir exitosamente la imagen
    const handleUploadSuccess = nombre => {
        setProgreso(100);
        setSubiendo(false);
        setNombreImagen(nombre);
        firebase
            .storage
            .ref("productos")
            .child(nombre)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                setUrlImagen(url);
            });
    };

    return (
        <div>
            <Layout>
                {!usuario ?
                    <Error404 />
                    : (
                        <Fragment>
                            <h1
                                css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                            >Nuevo Producto</h1>
                            <Formulario
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <fieldset>
                                    <legend>Información General</legend>
                                    <Campo>
                                        <label htmlFor="nombre">Nombre</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            placeholder="Nombre del producto..."
                                            name="nombre"
                                            value={nombre}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Campo>

                                    {errores.nombre && <Error>{errores.nombre}</Error>}

                                    <Campo>
                                        <label htmlFor="empresa">Empresa</label>
                                        <input
                                            type="text"
                                            id="empresa"
                                            placeholder="Nombre de la Empresa o Compañía..."
                                            name="empresa"
                                            value={empresa}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Campo>

                                    {errores.empresa && <Error>{errores.empresa}</Error>}

                                    <Campo>
                                        <label htmlFor="imagen">Imagen</label>
                                        <FileUploader
                                            accept="image/*"
                                            id="imagen"
                                            name="imagen"
                                            randomizeFilename
                                            storageRef={firebase.storage.ref("productos")}
                                            onUploadStart={handleUploadStart}
                                            onUploadError={handleUploadError}
                                            onUploadSuccess={handleUploadSuccess}
                                            onProgress={handleProgress}
                                        />
                                    </Campo>

                                    <Campo>
                                        <label htmlFor="nombre">URL</label>
                                        <input
                                            type="url"
                                            id="url"
                                            placeholder="La URL..."
                                            name="url"
                                            value={url}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Campo>

                                    {errores.url && <Error>{errores.url}</Error>}
                                </fieldset>
                                <fieldset>
                                    <legend>Sobre tu Producto</legend>
                                    <Campo>
                                        <label htmlFor="descripcion">Descripción</label>
                                        <textarea
                                            id="descripcion"
                                            placeholder="Descripción..."
                                            name="descripcion"
                                            value={descripcion}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Campo>

                                    {errores.descripcion && <Error>{errores.descripcion}</Error>}

                                </fieldset>

                                <InputSubmit
                                    type="submit"
                                    value="Crear Producto"
                                />
                            </Formulario>
                        </Fragment>
                    )}
            </Layout>
        </div>
    )
}

export default NuevoProducto;