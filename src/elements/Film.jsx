import React from "react";
import { useParams } from 'react-router-dom';
import jsonData from '../data';
import Header from './Header';
import {Container, Row} from 'react-bootstrap';
import Carousel from '../Films/Carousel';

function Film() {

    const { id } = useParams();

    const filmData = jsonData.find(function getData(element) {
       if (element.id === id ) {
           return true;
       } 
       return false; 
    });

    return (
        <div className="film-wrapper">
            <Header />
            <Container className="film-content">
                <Row>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
                       <img src={filmData.poster} alt={filmData.title} className="film-img" />
                    </div>
                    <div className="col-12 col-md-6 film-description">
                        <h2>{filmData.title}</h2>
                        <p className="genre">{filmData.genre}</p>
                        <p>{filmData.year}</p>
                        {/* <p>Name: {filmData.rated}</p> */}
                        <p>Released: {filmData.released}</p>
                        <p>Duration: {filmData.runtime}</p>
                        <p>Writer: {filmData.writer}</p>
                        <p>Actors: {filmData.actors}</p>
                        <p>Language: {filmData.language}</p>
                        <p>Country: {filmData.country}</p>
                        {/* <p>Name: {filmData.awards}</p> */}
                        {/* <p>Name: {filmData.metascore}</p> */}
                        
                        {/* <p>Name: {filmData.type}</p> */}
                        <p>Seasons: {filmData.totalseasons}</p>
                        <p> {filmData.plot}</p>
                        <div className="rating d-flex justify-content-center flex-column align items-center">
                            <div className="text-center rating-data">{filmData.imdbrating}</div>
                            {/* <div className="text-center rating-data">{filmData.imdbvotes}</div> */}
                        </div>
                    </div>
                </Row>
            </Container>
        <Carousel />

        </div>
    );
    
} 

export default Film;