import React from 'react';
import PropTypes from'prop-types';

const Gasto = ({ expense }) => (
    <li className="gastos">
        <p>
            {expense.expense}

            <span className="gasto">€ {expense.expamount}</span>
        </p>
    </li>
);
Gasto.propTypes = {
    expense: PropTypes.object.isRequired
};

export default Gasto;