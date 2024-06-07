import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {
  
    let datos = {
      altura: 180,
      peso: 70,
      tipo_sangre: '0+'
    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-
        
        logo" alt="logo" />
        <p>
          Bienvenido al master de React !
        </p>
        

        
        
        <TercerComponente nombre = 'Augusto' web = 'augustoalmiron.com' datos_usuario = {datos}/>
        
      </header>
      {/**Carfar componente */}
      
    </div>
  );
}

export default App;
