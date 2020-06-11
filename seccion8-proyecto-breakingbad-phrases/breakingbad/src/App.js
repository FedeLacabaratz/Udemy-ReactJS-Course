import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 450px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 650px;
  }
`;

function App() {

  // State de la frase
  const [phrase, setPhrase] = useState({});

  // Cargar una frase
  useEffect(() => {
    consultarAPI()
  }, [])

  const consultarAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    setPhrase(phrase[0]);
  }

  return (
    <Contenedor>
      <Phrase
        phrase={phrase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Get your random quote!
      </Boton>
    </Contenedor>
  );
};


export default App;
