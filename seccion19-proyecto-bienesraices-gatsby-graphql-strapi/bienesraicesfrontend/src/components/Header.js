import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navegacion from './Navegacion';
import { css } from '@emotion/core';

const Header = () => {

    // Consulta al logo.svg
    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
    `);

    return (  
        <header
            css={css`
                background-color: #0d283b;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link
                    to={'/'}
                >
                    <img src={logo.publicURL} alt="Logotipo Bienes Raíces"/>
                </Link>

                <Navegacion />
            </div>
        </header>
    );
}
 
export default Header;
