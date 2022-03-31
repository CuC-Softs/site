import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
      <Footer />
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
