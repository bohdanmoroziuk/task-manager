import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ children }) => (
  <nav className="navbar navbar-dark bg-dark">{children}</nav>
);

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Navbar;
