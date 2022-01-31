import React from 'react';
import '../style/style.css'; 
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../elements/Header';
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import Carousel from './Carousel';
import data from '../data';

// const scrollElement = data.slice(index, index+index );
// let currentContext = this; 


class Films extends React.Component{

  state = {
    items: data.slice(0,19),
    index: 19
  };
  
  fetchMoreData = () => {
    let localIndex = this.state.index + 20
    // a fake async api call like which sends
    // 20 more records in 1.1 secs
    setTimeout(() => {
      this.setState({
        index: this.state.index + 20,
        items: data.slice(0,localIndex)
      });
    }, 1100);
  };

  render(){
    return (
      <section className="section">

        {/* HEADER */}
        <Header />
        {/* Start films section */}

        <Carousel />
        
        <Container className="section-center">
          <h1>Top of all the time</h1>
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <Row>
                {this.state.items.map((film) => {
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
              </Row>
            </InfiniteScroll>
        </Container>
        {/* End films section */}
      </section>
    )
  };
}

export default Films;