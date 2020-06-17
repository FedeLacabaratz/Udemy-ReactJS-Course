import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Info from "./components/Info";
import Error from "./components/Error";

function App() {
  // Definir el state
  const [searchartlyr, setSearchArtLyr] = useState({});
  const [lyrics, setLyrics] = useState("");
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(searchartlyr).length === 0) return;

    const consultarApiLyrics = async () => {
      const { artista, cancion } = searchartlyr;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      try {
        const [letra, informacion] = await Promise.all([
          axios(url),
          axios(url2),
        ]);
        setLyrics(letra.data.lyrics);
        setInfo(informacion.data.artists[0]);
      } catch (err) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
        return;
      }
    };
    consultarApiLyrics();
  }, [searchartlyr]);

  return (
    <Fragment>
      <Formulario setSearchArtLyr={setSearchArtLyr} />
      {error ? (
        <Error mensaje="Canción o Grupo no encontrados" />
      ) : null}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
