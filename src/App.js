import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
