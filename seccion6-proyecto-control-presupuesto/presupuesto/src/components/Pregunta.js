import React, { Fragment, useState } from 'react';
import PropTypes from'prop-types';
import Error from './Error';

const Pregunta = ({ setBudget, setRemanent, setShowpregunta }) => {

    // Definir el State
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);


    // Funcion que lee el presupuesto
    const handleBudget = e => {
        setAmount(Number(e.target.value));
    }

    // Submit para definir el presupuesto
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (amount < 1 || isNaN(amount)) {
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 2000);
            return;
        }

        // Si se pasa la validacion
        setBudget(amount);
        setRemanent(amount);
        setShowpregunta(false)
    }

    return (
        <Fragment>
            <h2>My budget</h2>
            {error ? <Error mensaje=", please insert a valid numeric value" /> : null}
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Place your budget"
                    onChange={handleBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Set Budget"
                />
            </form>
        </Fragment>
    );
};
Pregunta.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemanent: PropTypes.func.isRequired,
    setShowpregunta: PropTypes.func.isRequired
}

export default Pregunta;