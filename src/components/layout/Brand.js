import React from 'react';
import { Link } from 'react-router-dom';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Brand = () => (
  <Link className="navbar-brand" to="/">
    <FontAwesomeIcon icon={faReact} size="lg" />
  </Link>
);

export default Brand;
