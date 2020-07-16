import React from 'react';
import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';
import Encuentra from '../components/Encuentra';
import ListadoPropiedades from '../components/ListadoPropiedades';

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio();
    const { nombre, contenido, imagen } = inicio[0];

    return (
        <Layout>
            <ImagenBackground
                tag="section"
                fluid={imagen.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagenbg}>
                    <h1 className={heroCSS.titulo}> Venta de casas y apartamentos exclusivos</h1>
                </div>
            </ImagenBackground>
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1
                        css={css`
                        margin-top: 2rem;
                        `}
                    >{nombre}</h1>
                    <p
                        css={css`
                    text-align: center;
                    `}
                    >{contenido}</p>
                </div>
            </main>
            <Encuentra />
            <ListadoPropiedades />
        </Layout>
    );
}

export default Index;

