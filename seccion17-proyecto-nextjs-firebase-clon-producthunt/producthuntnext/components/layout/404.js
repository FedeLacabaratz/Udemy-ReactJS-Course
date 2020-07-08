import React from 'react';
import { css } from '@emotion/core';

const Error404 = () => {

    return (
        <h1
            css={css`
                font-size: 2rem;
                margin-top: 5rem;
                text-align: center;
            `}
        >No se puede mostrar</h1>
    );
}

export default Error404;