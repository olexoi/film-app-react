import React, { useState, setState } from 'react';
import '../style/style.css'; 

import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../elements/Header';
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import Carousel from './Carousel';
import data from '../data';


function Films() {
  const [film] = useState(data);
  let index = 19;
  // const scrollElement = data.slice(index, index+index );
  let items = data.slice(0,index)
  let currentContext = this;

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    currentContext.setState({
      index: index + 20,
      items: data.slice(0,index)
    });

    console.log(items);
    console.log(index);
    // setTimeout(() => {
    // }, 1500);
  };

  // {console.log(scrollElement);}
  return (

    <section className="section">

      {/* HEADER */}
      <Header />
      {/* Start films section */}

      <Carousel />
      
      <Container className="section-center">
        <h1>Top of all the time</h1>
        {/* <Link className='btn' to="/login"></Link> */}
        <Row>
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {items.map((film) => {
              const { id, poster, title, genre, imdbrating, year, plot } = film;

              return (
                // Generating films
              
                  <Link to={`/film/${id}`}  key={id} className='film col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6'>

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
                    </article>
                  
                  </Link>
                // End of generating films

              );
            })}
          </InfiniteScroll>
        </Row>
      </Container>
      {/* End films section */}

    </section>
  );
}

export default Films;