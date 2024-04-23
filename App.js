import './App.css';
import logo from './imagenes/logoFCC.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/boton-clear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input,setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) { 
      setInput(evaluate(input));
    } else {
      alert("Por favor Coloque operacion a realizar no se puede definir campo vacio");
    }
    
  };

  return (
    <div className='App'>
      <div className='freecodecampo-contenedor-logo'>
        <img
        src={logo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp' />
      </div>
      <div className='Contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
          </div>
        <div className='fila'>
          <BotonClear manejarClear={() =>{setInput('')}}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
