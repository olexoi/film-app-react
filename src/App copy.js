import React, { useState } from 'react';
import './style/style.css'; 
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './elements/Header';
import { Link } from "react-router-dom";

import data from './data';

function App() {
  const [film] = useState(data);
  return (

    <section className="section">

      {/* HEADER */}
      <Header />
      {/* Start films section */}

      <Container className="section-center">
        <Row>
        {/* <Link className='btn' to="/login"></Link> */}

          {film.map((film) => {
            const { id, poster, title, genre, imdbrating, year, plot } = film;

            return (
              // Generating films

                <Link to={`/film/${id}`} key={id} className='film col-2'>
                  <div className='filter'>  
                    <div className='info'>
                      <p className='year'>{year}</p>
                      <p className="genre">{genre}</p>
                      <p className="text">{plot}</p> 
                    </div>
                  </div>

                  <article  key={id}>
                    <img src={poster} alt={title} className="film-img" />
                    <h4 className='title'>{title}</h4>
                    <span className='text-center imdbrating'>{imdbrating}/10</span>
                    {/* <span className='text-center imdbvotes'>{imdbvotes}</span> */}
                   
                    {/* <p className="text">{plot}</p> */}
                    {/* <FaQuoteRight className="icon" /> */}
                  </article>
                </Link>

              // End of generating films

            );
          })}
        </Row>
        
      </Container>
      {/* End films section */}

    </section>
  );
}

export default App;