import React, {  Fragment  } from 'react';
import "./App.css";

import Routes from './routes'

function App() {

  return (
    //usando o Fragment pq é obrigatório
    <Fragment>

      <Routes/>
      
    </Fragment>
  );
}

export default App;

