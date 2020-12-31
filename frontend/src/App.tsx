import React, {  Fragment, useState  } from 'react';
import "./App.css";

import Home from "./pages/Home/index";

function App() {

  return (
    //usando o Fragment pq é obrigatório
    <Fragment>

      <Home></Home>

      
    </Fragment>
  );
}

export default App;
