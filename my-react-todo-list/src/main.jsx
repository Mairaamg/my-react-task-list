import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#262626' : '#DFFAE1',
        color: props.colorMode === 'dark' ? 'white' : '#262626gt',
      },
    }),
  },
  colors: {
    brand: {
      500: '#319795',
    },
  },
});

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
