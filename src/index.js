import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Films from './Films/Films';
import Film from './elements/Film';
import Login from './login/Login'; 
import Sign_up from './login/Sign_up'; 
import { Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      {/* <App /> */}
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="films" element={<Films />} />
          <Route path="login" element={<Login />} />
          <Route path="sign_up" element={<Sign_up />} />
          <Route path="/film/:id" element={<Film />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
