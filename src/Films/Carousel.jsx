import React, { useState } from "react";
import '../style/style.css'; 

import data from '../data';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
function Carousel() {
    const [film] = useState(data);

    return(
        <div className="carousel-section">
            <Swiper
        // slidesPerView={4}
        spaceBetween={30}
        // slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="films-carousel container ">

        {film.map((film) => {
            const { id, poster, title, genre, imdbrating, year, plot } = film;

            return (
              // Generating films
                <SwiperSlide className="slide " key={id}>
                    <div className='filter'>  
                    <div className='info'>
                      <p className='year'>{year}</p>
                      <p className="genre">{genre}</p>
                      <p className="text">{plot}</p> 
                    </div>
                  </div> 
                <Link to={`/film/${id}`} key={id} className='carousel-film col-lg-2 col-md-3 col-sm-4 col-6'>

                    <div className='filter'>  
                        <div className='info'>
                        <span className='text-center imdbrating'>{imdbrating}/10</span>
                        <h4 className='title'>{title}</h4>

                        <p className='year'>{year}</p>
                        <p className="genre">{genre}</p>
                        <p className="text">{plot}</p> 
                        </div>
                    </div>

                  <article  key={id}>
                  
                    <img src={poster} alt={title} className="film-img" />
                    {/* <h4 className='title'>{title}</h4> */}
                    {/* <span className='text-center imdbrating'>{imdbrating}/10</span> */}
                    {/* <span className='text-center imdbvotes'>{imdbvotes}</span> */}
                   
                    {/* <p className="text">{plot}</p> */}
                    {/* <FaQuoteRight className="icon" /> */}
                  </article>
                </Link>
                </SwiperSlide>

              // End of generating films

            );
          })}
            </Swiper>
        </div>

    )
}

export default Carousel;