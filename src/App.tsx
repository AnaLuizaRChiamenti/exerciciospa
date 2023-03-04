import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Config/GlobalStyled';
import theme from './Config/theme';
import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>

  );
}

export default App;