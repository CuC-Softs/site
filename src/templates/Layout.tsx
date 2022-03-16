import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout({ children }) {
  return (
    <div>
      <nav>
        <h1>Navbar</h1>
      </nav>
      <div>{children}</div>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default Layout;
