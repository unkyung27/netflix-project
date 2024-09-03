import React from 'react';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import responsive from '../../../../constants/responsive';

const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
    if(isLoading){
        return <h1>LOADING!!!!!</h1>
    }
    if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
    }

  return (
    <div className='carousel-container'>
        <MovieSlider title='Top Rated Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default TopRatedMovieSlide