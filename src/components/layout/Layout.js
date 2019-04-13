import React from 'react';
import Navbar from './Navbar';
import Brand from './Brand';

const Layout = ({ children }) => (
  <>
    <Navbar>
        <Brand />
    </Navbar>

    <main className="container mt-5">
      {children}
    </main>
  </>
);

export default Layout;