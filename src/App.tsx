import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';
import { MenuProvider } from './hooks/useMenu';
// import theme from './styles/theme';

const App: React.FC = () => (
  <MenuProvider>
    <ChakraProvider>
      {/* <ThemeProvider theme={theme}> */}
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
      {/* </ThemeProvider> */}
    </ChakraProvider>
  </MenuProvider>
);

export default App;
