import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Campo, InputSubmit } from '../../components/ui/Formulario';
import Boton from '../../components/ui/Boton';

const ContenedorProducto = styled.div`
    @media (min-width:768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const CreadorProducto = styled.p`
    padding: .5rem 1rem;
    margin-top: .2rem;
    background-color: #da552f;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;

const Producto = () => {

    // State del componente
    const [producto, setProducto] = useState({});
    const [error, setError] = useState(false);
    const [comentario, setComentario] = useState({});
    const [consultarDB, setConsultarDB] = useState(true);

    // Routing para obtener el id actual
    const router = useRouter();
    const { query: { id } } = router;

    // Context de firebase
    const { usuario, firebase } = useContext(FirebaseContext);

    useEffect(() => {

        //Declaramos variable para trackear si esta o no el componente montado

        let isCancelled = false;

        if (id && consultarDB) {
            const obtenerProducto = async () => {
                const productoQuery = await firebase.db.collection('productos').doc(id);
                const producto = await productoQuery.get();

                // Se ejecuta si esta montado el componente
                if (!isCancelled) {
                    if (producto.exists) {
                        setProducto(producto.data());
                        setConsultarDB(false);
                    } else {
                        setError(true);
                        setConsultarDB(false);
                    }
                }
            };
            obtenerProducto();
        }
        return () => {
            // Volvemos la variable a true para evitar que se intente actualizar un state inexistente
            isCancelled = true;
        }
    }, [id]);

    if (Object.keys(producto).length === 0 && !error) return <p>Cargando...</p>

    const { comentarios, creado, descripcion, empresa, nombre, url, urlImagen, votos, creador, haVotado } = producto;

    // Administrar y validar los votos
    const votarProducto = () => {
        if (!usuario) {
            return router.push('/login');
        }

        // Obtener y sumar nuevo voto
        const nuevoTotal = votos + 1;

        // Verificar si el usuario actual ha votado
        if (haVotado.includes(usuario.uid)) return;

        // Guardar el ID del usuario que ha votado
        const nuevoHaVotado = [...haVotado, usuario.uid];

        // Actualizar en la base de datos
        firebase.db.collection('productos').doc(id).update({
            votos: nuevoTotal,
            haVotado: nuevoHaVotado
        });

        // Actualizar el state
        setProducto({
            ...producto,
            votos: nuevoTotal
        })
        setConsultarDB(false); // Hay un voto, por lo tanto consultar a la base de datos
    };

    // Funciones para crear comentarios
    const comentarioOnChange = e => {
        setComentario({
            ...comentario,
            [e.target.name]: e.target.value
        })
    };

    // Identifica si el comentario es del creador del producto
    const esCreador = id => {
        if (creador.id === id) {
            return true
        }
    };

    // Funcion para enviar el comentario a la base de datos
    const agregarComentario = e => {
        e.preventDefault();
        e.target.reset()

        if (!usuario) {
            return router.push('/login');
        }

        // Información extra al comentario
        comentario.usuarioId = usuario.uid;
        comentario.usuarioNombre = usuario.displayName;

        //Tomar copia de comentarios y agregarlos al arreglo
        const nuevosComentarios = [...comentarios, comentario];

        // Actualizar la base de datos
        firebase.db.collection('productos').doc(id).update({
            comentarios: nuevosComentarios
        });

        // Actualizat el state
        setProducto({
            ...producto,
            comentarios: nuevosComentarios
        })

        setConsultarDB(false); // Hay un comentario, por lo tanto consultar a la base de datos
    };

    // Funcion que revisa que el creador del producto es el mismo que esta autenticado
    const puedeBorrar = () => {
        if (!usuario) return false;

        if (creador.id === usuario.uid) {
            return true;
        }
    };

    // Elimina un producto de la base de datos
    const eliminarProducto = async () => {
        if (!usuario) {
            return router.push('/login');
        }

        if (creador.id === usuario.uid) {
            return router.push('/');
        }
        try {
            await firebase.db.collection('productos').doc(id).delete();
            router.push('/');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <Fragment>
                {error ? <Error404 /> : (
                    <div className="contenedor">
                        <h1
                            css={css`
                            text-align: center;
                            margin-bottom: 5rem;
                        `}
                        >{nombre}</h1>
                        <ContenedorProducto>
                            <div>
                                <p
                                    css={css`
                                    margin-top: 0;
                                `}
                                >Publicado hace: {formatDistanceToNow(new Date(creado), { locale: es })}</p>
                                <p>Por: {creador.nombre} de {empresa}</p>
                                <img src={urlImagen} />
                                <p>{descripcion}</p>
                                {usuario && (
                                    <Fragment>
                                        <h2>Agrega tu comentario:</h2>
                                        <form
                                            onSubmit={agregarComentario}
                                        >
                                            <Campo>
                                                <input
                                                    type="text"
                                                    name="mensaje"
                                                    placeholder="Escribe aquí tu comentario..."
                                                    onChange={comentarioOnChange}
                                                />
                                            </Campo>
                                            <InputSubmit
                                                type="submit"
                                                value="Agregar comentario"
                                            />
                                        </form>
                                    </Fragment>
                                )}
                                <h2
                                    css={css`
                                    margin: 2rem 0;
                                `}
                                >Comentarios:</h2>
                                {comentarios.length === 0 ? <p>Aún no hay comentarios para este post</p> : (
                                    <ul>
                                        {comentarios.map((comentario, index) => (
                                            <li
                                                key={`${comentario.usuarioId}-${index}`}
                                                css={css`
                                                border: 1px solid #e1e1e1;
                                                padding: .5rem 2rem;
                                                margin-bottom: 2rem;
                                            `}
                                            >
                                                <p>{comentario.mensaje}</p>
                                                <p>Escrito por:
                                                <span
                                                        css={css`
                                                        font-weight: bold;
                                                        margin-left: 0.5rem;
                                                    `}
                                                    >
                                                        {comentario.usuarioNombre}
                                                    </span>
                                                </p>
                                                {esCreador(comentario.usuarioId) && <CreadorProducto>Es Creador</CreadorProducto>}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <aside>
                                <Boton
                                    target="_blank"
                                    bgColor="true"
                                    href={url}
                                >Visitar URL</Boton>
                                <div
                                    css={css`
                                    margin-top: 5rem;
                                `}
                                >
                                    <p
                                        css={css`
                                    text-align: center;
                                `}
                                    >{votos} Votos</p>
                                    {usuario && (
                                        <Boton
                                            onClick={votarProducto}
                                        >Votar</Boton>
                                    )}
                                </div>
                            </aside>
                        </ContenedorProducto>
                        {puedeBorrar() &&
                            <Boton
                                css={css`
                                    background-color: var(--gris2);
                                    width: 100%;
                                    padding: 1rem;
                                    text-align: center;
                                    color: #fff;
                                    font-size: 1.8rem;
                                    text-transform: uppercase;
                                    border: none;
                                    font-family: 'PT Sans', sans-serif;
                                    font-weight: 700;
                                `}
                                onClick={eliminarProducto}
                            >Eliminar Producto</Boton>
                        }
                    </div>
                )}
            </Fragment>
        </Layout>
    );
}

export default Producto;

