import React from 'react';
import Categorias from './componentes/categorias/Categorias'
import FlujosEfectivo from './componentes/flujosEfectivo/FlujoEfectivo'
import Indicadores from './componentes/indicadores/Indicadores'
import Menu_dos from './componentes/indicadores/Menu_dos'
import Home from './componentes/home/Home'
import Reporte from './componentes/reporte/Reporte'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
  <Routes>
    <Route path ='/' element={<Home/>} />
     <Route path ='/categoria' element={<Categorias/>} />
     <Route path ='/flujo' element={<FlujosEfectivo/>} />
     <Route path ='/indicadores' element={<Menu_dos/>} />
     <Route path ='/registro' element={<Indicadores/>} />
     <Route path ='/reporte' element={<Reporte/>} />
  </Routes>

  </BrowserRouter>,
    <br/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
