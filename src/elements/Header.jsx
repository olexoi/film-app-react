import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/style.css';
import Logo from '../media/icons/logo.svg';

function Header() {
    return(
        <header>
            <Container className='header d-flex justify-content-between align-items-center'>
                <div className='col-3 d-flex justify-content-start align-items-center'>
                    <img className='logo' src={Logo} alt='logo' width='140px' />
                </div>

                <div className='col-9 d-flex justify-content-end align-items-center'>
                    <Link to='/'> Home</Link>    
                    <Link to='/films'> Films</Link>    
                    <Link to='/login'> Login</Link>    
                    <Link to='/sign_up'> Sing up</Link>    
                </div>
            </Container>
        </header>
    );
}

export default Header;