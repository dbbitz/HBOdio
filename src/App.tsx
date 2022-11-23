import { Router } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

