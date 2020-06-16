import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

const API_KEY = process.env.REACT_APP_BUSCADOR_NOTICIAS_API_KEY; // Your API_KEY

function App() {

  // Definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async() => {

      const country = 'gb' // Great Britain (Reino Unido)

      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoria}&apiKey=${API_KEY}`;

      const respuesta = await fetch(url);

      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
