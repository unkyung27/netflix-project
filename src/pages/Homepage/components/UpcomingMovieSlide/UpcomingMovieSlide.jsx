import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import { Alert } from 'bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import './UpcomingMovieSlide.style.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    //   slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    //   slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    //   slidesToSlide: 1 // optional, default to 1.
    }
  };

const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
    if(isLoading){
        return <h1>LOADING!!!!!</h1>
    }
    if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
    }

  return (
    <div className='carousel-container'>
        <h3>Upcoming Movies</h3>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-slider p-1'
            containerClass='carousel-container'
            responsive={responsive}
        >
            {data.results.map((movie, index)=><MovieCard movie={movie} key={index} />)}
        </Carousel>
    </div>
  )
}

export default UpcomingMovieSlide