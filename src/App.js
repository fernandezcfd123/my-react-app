import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="p1">¿Que quieres hacer?</p>
        <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
        <button id="uno">Dar de alta PAS</button>
        <button id="dos">Dar de alta Centro Sanitario</button>
        <button id="tres">Dar de alta médico</button>
        <button id="cuatro">Crear cuadro médico</button>
        <button id="cinco">Visualizar Cuadros Médicos</button>
        <button id="seis">Buscar, modificar y eliminar Cuadro Médico</button>
        <button id="siete">Buscar Centro Sanitario</button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
