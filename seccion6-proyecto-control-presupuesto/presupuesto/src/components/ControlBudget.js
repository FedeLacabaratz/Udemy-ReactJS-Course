import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';
import PropTypes from'prop-types';

const ControlBudget = ({ budget, remanent }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget: € {budget}
            </div>
            <div className={checkBudget(budget, remanent)}>
                Remanent: € {remanent}
            </div>
        </Fragment>
    );
}
ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    remanent: PropTypes.number.isRequired
};

export default ControlBudget;