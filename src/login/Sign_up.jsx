import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../elements/Header';
import { Link } from "react-router-dom";

function Sign_up() {
  return (

    <section className="section">

      {/* HEADER */}
      {/* <Header /> */}


      <Container className='login  d-flex justify-content-center align-items-center flex-column'>
        <div className='login-card  d-flex justify-content-center align-items-center flex-column'>
          <h3>Sign up!</h3>
          <input className='username' placeholder='E-mail or username' type='text'></input>
          <input className='password' placeholder='Password' type='password'></input>
          <input className='password' placeholder='Confirm password' type='password'></input>
          <Link className='login-without-sign-btn' to='/films'>Continue without login</Link>
          <Link className='sign-up-btn' to='/login'>Sign in</Link>
        </div>

      </Container>
   

    </section>
  );
}

export default Sign_up;