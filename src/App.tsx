import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default App;
