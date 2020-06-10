import React from 'react';
import PropTypes from'prop-types';

const Error = ({ mensaje }) => (
    <p className="alert alert-danger error">Something is wrong{mensaje}</p>
);
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
};

export default Error;