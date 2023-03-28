import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* StrictMode é uma ferramenta de desenvolvimento que ajuda a encontrar problemas potenciais em uma aplicação React.
 Por exemplo, ele identifica componentes com propriedades não utilizadas, bem como componentes com estado e ciclo de
 vida que podem causar problemas. Ele também exibe avisos em caso de uso de APIs depreciadas.*/

/* ReactDom.render() é o método usado para renderizar um elemento React em um nó do DOM.*/

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
