import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

const appId = process.env.REACT_APP_WEATHER_API_KEY; // Your API Key here

function App() {

  // State para busquedas
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const { ciudad, pais } = search;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false);

        // Detecta si hubo resultados correctos en la consulta
        if (resultado.cod === "404") {
          setError(true);
          setTimeout(() => {
            setError(false)
          }, 2000);
        } else {
          setError(false);
        }
      }
    }
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado} />
  }

  return (
    <Fragment>
      <Header
        titulo="Get Weather App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                search={search}
                setSearch={setSearch}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
