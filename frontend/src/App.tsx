import React, {  Fragment, useState  } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

  const [counter, setCounter] = useState(0);

  const incrementar:any = () =>{
    setCounter(counter + 1);

    console.log(counter);
  }

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

        <p>Contagem: {counter}</p>
        <button onClick={incrementar}>Adicionar</button>
      </Menu>

      
      
    </Fragment>
  );
}

export default App;
