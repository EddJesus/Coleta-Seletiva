import React, {  Fragment  } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    //usando o Fragment pq é obrigatório
    <Fragment>
      <Header title="Página inicial"/>
      <h1>Hello wolrd!</h1>

      <Menu>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      </Menu>
      
    </Fragment>
  );
}

export default App;
