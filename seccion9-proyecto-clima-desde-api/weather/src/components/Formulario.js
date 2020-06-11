import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ search, setSearch, setConsultar }) => {

    // State para validacion
    const [error, setError] = useState(false);

    // Extraer ciudad y pais 
    const { ciudad, pais } = search

    // funcion que coloca los segmentos en el state
    const handleChange = e => {
        // actualizar el state
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    // Cuando el user da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // Validación
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        }

        // Pasar al componente principal
        setConsultar(true)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="All fields must contain valid values" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">City </label>
                <div className="input-field col s12 np">
                    <select
                        name="pais"
                        id="pais"
                        value={pais}
                        onChange={handleChange}
                    >
                        <option value="">-- Select a Country --</option>
                        <option value="AD">Andorra</option>
                        <option value="AR">Argentina</option>
                        <option value="AU">Australia</option>
                        <option value="CN">China</option>
                        <option value="EG">Egypt</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="MX">Mexico</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NO">Norway</option>
                        <option value="RU">Russia</option>
                        <option value="ES">Spain</option>
                        <option value="UK">United Kingdom</option>
                        <option value="US">United States</option>
                    </select>
                    <label htmlFor="pais">Country </label>
                </div>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Search Weather</button>
            </div>
        </form>
    );
};
Formulario.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
};

export default Formulario;