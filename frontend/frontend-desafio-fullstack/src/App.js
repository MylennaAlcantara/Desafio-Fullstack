import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { TipoProfissional } from './pages/tipoProfissionais';
import { Profissional } from './pages/profissionais';
import { CadastroProfissional } from './pages/cadastroProfissionais';
import { CadastroTipoProfissional } from './pages/cadastroTipoProfissional';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" Component={Home}/>
        <Route path="/profissionais" Component={Profissional}/>
        <Route path="/tiposProfissionais" Component={TipoProfissional}/>
        <Route path="/profissionais/cadastrar" Component={CadastroProfissional}/>
        <Route path="/tiposProfissionais/cadastrar" Component={CadastroTipoProfissional}/>
      </Routes>
    </div>
  );
}

export default App;
