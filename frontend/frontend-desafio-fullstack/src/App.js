import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { TipoProfissional } from './pages/tipoProfissionais';
import { Profissional } from './pages/profissionais';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" Component={Home}/>
        <Route path="/profissionais" Component={Profissional}/>
        <Route path="/tiposProfissionais" Component={TipoProfissional}/>
        <Route path="/tiposProfissionais/cadastrar"/>
        <Route path="/tiposProfissionais/cadastrar"/>
      </Routes>
    </div>
  );
}

export default App;
