import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import './hojas-estilos/Boton.css';

function App() {

  const  manejarClick = () => {

    console.log('Click');

  }

  const reiniciarContador = () => {
    console.log('reinciar');
  }

  return (
    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de FreeCodeCamp'
        />
      </div>



      <div className='contendor-principal-contador'>

        <Contador
        
        clicks='5'
        
        />
        
        <Boton
        texto='Click'
        botonDeClick={true}
        manejarClick={manejarClick}
        />

        <Boton
        texto='reiniciar'
        botonDeClick={false}
        manejarClick={reiniciarContador}
        />

      </div>

    </div>
  );
}

export default App;
