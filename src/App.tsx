import { Router } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';

/* O react-router-dom é uma biblioteca padrão para que você consiga fazer o roteamento das páginas da sua aplicação de forma dinâmica.*/

/* BrowserRouter: Todas as rotas precisam estar declaradas dentro desse escopo, ou seja, nenhuma outra rota poderá ser acessada se não
   tiver sido declarada aqui. Lembrando que há apenas uma declaração de BrowserRouter no projeto. Como o nome é muito extenso, é normal 
   no import deste componente ser utilizado o as Router. */

/* Router é um componente que deve ser utilizado para envolver a aplicação inteira. Ele é responsável por
    fornecer a aplicação com as funcionalidades de navegação. */

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
