import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

const API_KEY = process.env.REACT_APP_BUSCADOR_PIXABAY_API_KEY; // Your API_KEY

function App() {
  // State de la app
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaactual, setPaginaActual] = useState(1);
  const [totalpaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setImagenes(resultado.hits);

      // Calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );

      setTotalPaginas(calcularTotalPaginas);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})
    };
    consultarApi();
  }, [busqueda, paginaactual]);

  useEffect(() => {
    // En caso de cambio de búsqueda cuando miramos otra búsqueda vuelve a la pag 1 de esta nueva búsqueda
    setPaginaActual(1)
  }, [busqueda]);

  // Definir la pagina anterior
  const handlePagAnt = () => {
    const nuevaPaginaActual = paginaactual - 1;

    if (nuevaPaginaActual <= 0) return;

    setPaginaActual(nuevaPaginaActual);
  };

  // Definir la pagina siguiente
  const handlePagSig = () => {
    const nuevaPaginaActual = paginaactual + 1;

    if (nuevaPaginaActual > totalpaginas) return;

    setPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="mt-5 jumbotron">
        <p className="lead display-4 text-center">Buscador de Imagenes</p>

        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />

        {paginaactual === 1 ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={handlePagAnt}
          >
            &laquo; Anterior
          </button>
        )}
        {paginaactual === totalpaginas ? null : (
          <button
            type="button"
            className="bbtn btn-info"
            onClick={handlePagSig}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
