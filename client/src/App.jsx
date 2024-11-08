import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestaoImagem from './views/GestaoImagem.jsx';
import logo from './logo.svg';
import './App.css';
import TelaLogin from './views/TelaLogin.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GestaoImagem />}/>
        <Route path='/login' element={<TelaLogin />}/>
      </Routes>
    </Router>
  );
}

export default App;
