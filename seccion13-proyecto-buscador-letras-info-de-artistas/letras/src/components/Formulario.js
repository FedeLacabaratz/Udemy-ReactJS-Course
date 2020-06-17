import React, { useState } from "react";
import Error from './Error';

const Formulario = ({setSearchArtLyr}) => {

    const [search, setSearch] = useState({
        artista: '',
        cancion: ''
    });
    const [error, setError] = useState(false);

    // extraer artista y cancion
    const {artista, cancion} = search;

    // Funcion a cada input para leer su contenido
    const handleUpdate = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    };

    const handleSearch = e => {
        e.preventDefault();

        // Validación
        if(artista.trim() === '' || cancion.trim() === '') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000);
            return;
        }

        // Pasar la informacion a App
        setSearchArtLyr(search);

        //Limpiar los campos para que en caso de error pueda volver a ejecutar una búsqueda limpia
        setSearch({
            artista:'',
            cancion:''
        })
    }

    return (
    <div className="bg-info">
      <div className="container">
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
        <div className="row">
          <form 
            onSubmit={handleSearch}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Escribe el nombre del artista..."
                      onChange={handleUpdate}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Escribe el nombre de la canción..."
                      onChange={handleUpdate}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
