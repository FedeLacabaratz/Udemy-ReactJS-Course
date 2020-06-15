import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Error from './Error'
import useMoneda from "../hooks/useMoneda";
import useCryptomoneda from "../hooks/useCryptomoneda";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({setMoneda, setCrypto}) => {
  // State del listado de cryptomonedas
  const [listacrypto, setListacrypto] = useState([]);
  const [error, setError] = useState(false);

  // Array de monedas
  const MONEDAS = [
    { codigo: "ARS", nombre: "Peso Argentino" },
    { codigo: "AUD", nombre: "Dólar Australiano" },
    { codigo: "BRL", nombre: "Real Brasilero" },
    { codigo: "CAD", nombre: "Dólar Canadiense" },
    { codigo: "CHF", nombre: "Franco Suizo" },
    { codigo: "CNY", nombre: "Yuan Chino" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "INR", nombre: "Rupia India" },
    { codigo: "JPY", nombre: "Yen Japonés" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "NZD", nombre: "Dólar Neocelandés" },
    { codigo: "RUB", nombre: "Rublo Ruso" },
    { codigo: "USD", nombre: "Dólar Estadounidense" },
  ];

  //Utilizar useMoneda
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);

  // Utilizar cryptomoneda
  const [crypto, SelectCrypto] = useCryptomoneda(
    "Elige tu cryptomoneda",
    "",
    listacrypto
  );

  // Ejecutar llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);

      setListacrypto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  // Cuando el usuario hace submit
  const handleCotizacion = (e) => {
    e.preventDefault();

    // Validar si ambos campos estan llenos
    if(moneda === '' || crypto === '') {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 1500);
        return
    }

    // Pasar los datos al componente principal
    setMoneda(moneda);
    setCrypto(crypto);
  };

  return (
    <form onSubmit={handleCotizacion}>
        {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
      <SelectMonedas />
      <SelectCrypto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
