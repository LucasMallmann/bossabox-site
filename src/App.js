import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home';
import GlobalStyle from './style';

library.add(faTimesCircle);

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
