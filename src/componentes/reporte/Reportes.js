import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReporteCobrar from './reporteMarzo/ReporteCobrar'
import ReportePagar from './reporteMarzo/ReportePagar'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      Reportes <br />
        Mes del reporte: Marzo
        <br />
        Cuenta por cobrar
      <ReporteCobrar/>
      <ReportePagar/>
      <hr/> <hr/> <hr/>
      </header>
    </div>
  );
}

export default App;
