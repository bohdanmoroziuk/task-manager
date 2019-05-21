import React from 'react';
import { Link } from 'react-router-dom';

import Message from '../components/shared/Message';

const NotFound = () => (
  <>
    <Message type="warning" title="Error 404!" message="Page not found..." />
    <Link className="btn btn-dark" to="/">
      Home
    </Link>
  </>
);

export default NotFound;
