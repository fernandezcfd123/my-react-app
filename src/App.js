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
        <Button variant="contained" color="primary" id="uno">Dar de alta PAS</Button>
        <Button variant="contained" color="primary" id="dos">Dar de alta Centro Sanitario</Button>
        <Button variant="contained" color="primary" id="tres">Dar de alta médico</Button>
        <Button variant="contained" color="primary" id="cuatro">Crear cuadro médico</Button>
        <Button variant="contained" color="primary" id="cinco">Visualizar Cuadros<br></br> Médicos</Button>
        <Button variant="contained" color="primary" id="seis">Buscar, modificar y<br></br> eliminar Cuadro Médico</Button>
        <Button variant="contained" color="primary" id="siete">Buscar Centro Sanitario</Button>

      </header>
    </div>
  );
}

export default App;
