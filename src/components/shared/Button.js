import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ active, type, children, onClick }) => (
  <button
    className="btn btn-dark"
    type={type}
    disabled={active}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  active: false,
  type: 'button'
};

export default Button;
