import React from 'react';
import Gasto from './Gasto';
import PropTypes from'prop-types';

const Listado = ({ expenses }) => (
    <div className="gastos-realizados">
        <h2>My Expenses Detail</h2>
        {expenses.map(expense => (
            <Gasto
                key={expense.id} 
                expense={expense}
            />
        ))}
    </div>
);

Listado.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default Listado;