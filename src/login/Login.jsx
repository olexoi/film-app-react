import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../elements/Header';
import { Link } from "react-router-dom";

function Login() {
  return (

    <section className="section">

      {/* HEADER */}
      {/* <Header /> */}
      {/* end of header */}


        {/* Login form */}
      <Container className='login  d-flex justify-content-center align-items-center flex-column'>
        <div className='login-card  d-flex justify-content-center align-items-center flex-column'>
          <h3>Nice to meet you friend!</h3>
          <input className='username' placeholder='E-mail or username' type='text'></input>
          <input className='password' placeholder='Password' type='password'></input>
          <Link className='login-without-sign-btn' to='/films'>Continue without login</Link>
          <Link className='sign-up-btn' to='/sign_up'>Sign up</Link>
        </div>
        {/* end of login form */}
      </Container>
   

    </section>
  );
}

export default Login;