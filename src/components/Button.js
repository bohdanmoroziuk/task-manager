import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ active, children, onClick }) => (
    <button 
        className="btn btn-dark" 
        disabled={active} 
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any,
    onClick: PropTypes.func
};

export default Button;