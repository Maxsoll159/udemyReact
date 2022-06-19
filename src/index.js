import React from 'react';
import ReactDOM from 'react-dom/client';
import { SegundoComponente, TercerComponente } from './SegundoComponente';
import { HellowWorldApp } from './HelloWordAppReact';
import './style.css';



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <SegundoComponente />
    <HellowWorldApp />
    <TercerComponente />
  </React.StrictMode>
);