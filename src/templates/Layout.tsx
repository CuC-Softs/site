import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/common/Navbar';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Ubuntu';
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
`;

export default Layout;
