import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: 'Bebas Neue', cursive;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
        color: #ffcc66
    }
`;

const Precio = styled.p`
    font-size: 25px;
    font-weight: bold;

    span {
        font-weight: bold;
        color: #ff704d
    }
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio mas alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio mas bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
}
 
export default Cotizacion;