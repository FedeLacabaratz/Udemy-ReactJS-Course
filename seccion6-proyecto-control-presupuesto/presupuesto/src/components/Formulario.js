import React, { useState } from 'react';
import PropTypes from'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({ setMyexpense, setAddexpense }) => {

    const [expense, setExpense] = useState('');
    const [expamount, setExpamount] = useState(0);
    const [error, setError] = useState(false);

    const handleExpense = e => {
        setExpense(e.target.value);
    }

    const handleExpamount = e => {
        setExpamount(Number(e.target.value));
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (expense.trim() === '' || expamount < 1 || isNaN(expamount)) {
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 2000);
            return;
        }

        // Construir el gasto
        const myexpense = {
            expense,
            expamount,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        setMyexpense(myexpense)
        setAddexpense(true)

        // Resetear el form
        setExpense('');
        setExpamount(0);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>My Expenses</h2>
            {error ? <Error mensaje=", please asign a valid expense and/or amount" /> : null}
            <div className="campo">
                <label>Expense's Description</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="i.e. Transport"
                    value={expense}
                    onChange={handleExpense}
                />
            </div>
            <div className="campo">
                <label>Expense's Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="i.e. 300"
                    value={expamount}
                    onChange={handleExpamount}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Save Expense"
            />
        </form>
    );
};
Formulario.propTypes = {
    setMyexpense: PropTypes.func.isRequired,
    setAddexpense: PropTypes.func.isRequired
}

export default Formulario;