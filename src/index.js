import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Team from './pages/Team';
import Product from './pages/Product';

ReactDOM.render(
  <Router>
    <Route exact path="/producto/:id" component={Product} />  //id es la parte dinamica de la ruta
    <Route exact path="/" component={App} />
    <Route exact path="/equipo" component={Team} />

  </Router>,
  document.getElementById('root')
);

//ACA ES DONDE SE REUNE EL MUNDO DE REACT CON EL DE JAVASCRIPT. LUGAR DONDE SE SINCRONIZA EL VIRTUAL DOM CON EL DOM REACT 
//ES EL REAL PRIMER PUNTO DE ENTRADA DE NUESTRA APLICACION.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
