import './style.css';
import {Route, Routes} from 'react-router-dom';
import {Menu} from "./Components/Menu/index";

import {ListaEstacionados} from "./Pages/ListaEstacionados/index";
import {CadastroVeiculo} from "./Pages/CadastroVeiculo/index";
import {ListaEstacionamento} from "./Pages/ListaEstacionamento/index";
import {ListaVeiculos} from "./Pages/ListaVeiculos/index";
import {CadastroEstacionamento} from "./Pages/CadastroEstacionamento/index"

 
function App() {
  return (
    <div className = "app-principal">
      <Menu/>
      <Routes>
        <Route path='/' element={<ListaEstacionados/>} />
        <Route path='/veiculos' element={<ListaVeiculos/>} />
        <Route path='/estacionamento' element={<ListaEstacionamento/>} />
        <Route path='/veiculos/cadastro' element={<CadastroVeiculo/>} />
        <Route path='/veiculos/:id_veiculo/estacionamento/:id_estacionamento/cadastro' element={<CadastroEstacionamento/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
