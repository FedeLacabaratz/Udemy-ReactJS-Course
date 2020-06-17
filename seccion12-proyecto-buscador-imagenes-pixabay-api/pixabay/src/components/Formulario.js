import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);

    const handleSearch = e => {
        e.preventDefault();

        // Validar
        if(termino.trim() === '') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1500);
            return;
        }

        // Enviar el termino de búsqueda hacia el componente principal
        setBusqueda(termino);
    }

    return ( 
        <form
            onSubmit={handleSearch}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca tu imagen aqui, por ejemplo: Arcoiris, guitarra"
                        onChange={e => setTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {error ? <Error mensaje="Agrega un término de búsqueda válido" /> : null}
        </form>
     );
};
 
export default Formulario;