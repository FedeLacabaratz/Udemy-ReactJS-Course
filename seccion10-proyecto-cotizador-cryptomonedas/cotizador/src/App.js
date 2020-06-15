import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [moneda, setMoneda] = useState("");
  const [crypto, setCrypto] = useState("");
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const cotizarCryptomoneda = async () => {
      // Evitamos la primera ejecucion en vacio
      if (moneda === "") return;

      // Consultar la API para obtener la cotización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      // Mostrar el Spinner
      setCargando(true);

      // Ocultar el Spinner y mostrar el resultado
      setTimeout(() => {
        // Desaparecer el spinner
        setCargando(false)
        
        //Guardar cotización
        setResultado(resultado.data.DISPLAY[crypto][moneda]);
      }, 3000);
    };
    cotizarCryptomoneda();
  }, [moneda, crypto]);

  // Mostrar Spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen Crypto" />
      </div>
      <div>
        <Heading>Cotiza Cryptomonedas al instante</Heading>

        <Formulario setMoneda={setMoneda} setCrypto={setCrypto} />

        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
