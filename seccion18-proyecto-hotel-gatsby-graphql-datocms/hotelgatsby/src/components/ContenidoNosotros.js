import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Contenido = styled.div`
    flex: 1 0 auto;
    align-content: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }
`;

const ContenidoNosotros = () => {

    const resultado = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
          nodes {
            titulo
            contenido
            imagen {
              fluid ( maxWidth: 1200 ) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `);

    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

    return (
        <>
            <h2
                css={css`
                    margin-top: 5rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{titulo}</h2>
            <Contenido>
                <p>{contenido}</p>
                <Image
                    fluid={imagen.fluid}
                />
            </Contenido>
        </>
    );
}

export default ContenidoNosotros;
