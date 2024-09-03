import React from 'react';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import responsive from '../../../../constants/responsive';

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
        <MovieSlider title='Upcoming Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default UpcomingMovieSlide