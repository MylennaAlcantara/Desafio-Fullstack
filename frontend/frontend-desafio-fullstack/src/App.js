import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" Component={Home}/>
        <Route path="/profissionais"/>
        <Route path="/tiposProfissionais"/>
        <Route path="/tiposProfissionais/cadastrar"/>
        <Route path="/tiposProfissionais/cadastrar"/>
      </Routes>
    </div>
  );
}

export default App;
