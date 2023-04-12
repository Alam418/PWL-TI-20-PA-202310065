import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Login from './Login'
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './components/pertemuan-5/apps/routes/AppRoute'

// import Form from './components/Form'
// import App from './App';
// import Layout from './components/Pertemuan-3/layouts/Layout';
// import Home from './components/Pertemuan-3/modules/homes/Home';
// import Praktikum from './components/Latihan-5_1/Praktikum';

import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const {PUBLIC_URL} = process.env;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
