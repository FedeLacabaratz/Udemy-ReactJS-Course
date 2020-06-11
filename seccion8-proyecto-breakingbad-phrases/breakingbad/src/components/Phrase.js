import React from 'react';
import styled from '@emotion/styled';
import PropTypes from'prop-types';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 1000px;

    @media (min-width: 992px) {
        margin-top: 15rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1.5rem;
            top: -3.2rem;
        }

    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Phrase = ({phrase}) => {

    return (
        <ContenedorFrase>
            <h1>{phrase.quote}</h1>
            <p>{phrase.author}</p>
        </ContenedorFrase> 
     );
};
Phrase.propTypes = {
    phrase: PropTypes.object.isRequired,
    
  }
 
export default Phrase;