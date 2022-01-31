import React from 'react';
import './style/style.css'; 
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './elements/Header';
import { Link } from "react-router-dom";

function App() {
  return (

    <section className="section">

      {/* HEADER */}
      {/* <Header /> */}

      
      <Container className='login  d-flex justify-content-center align-items-center flex-column'>
        <div className='login-card  d-flex justify-content-center align-items-center flex-column'>
          <Link className='login-without-sign-btn' to='/films'>Continue without login</Link>
          <Link className='sign-up-btn' to='/login'>Login</Link>
          <Link className='sign-up-btn' to='/sign_up'>Sign up</Link>

        </div>

      </Container>
   

    </section>
  );
}

export default App;