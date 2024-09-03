import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({movie}) => {
    const {data:genreData} = useMovieGenreQuery();
    // console.log("genreData", genreData);
    // console.log("movie", movie);

    const showGenre=(genreIdList)=>{
        if(!genreData) return []

        const genreNameList = genreIdList.map((id)=>{
            const genreObj = genreData.find((genre)=>genre.id === id)
            return genreObj.name;
        })
        return genreNameList
    }
  return (
    <div 
    style={{
        backgroundImage: "url(" 
        + `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` 
        + ")",
    }}
    className='movie-card'
    >
        <div className='overlay'>
            <h1 className='movie-title'>{movie.title}</h1>
            {showGenre(movie.genre_ids).map((genre, id)=>(
            <Badge bg="primary" key={id}>{genre}</Badge>
            ))}
            <div>
                <div>{movie.vote_average.toFixed(1)}</div>
                <div>{movie.popularity}</div>
                <div>{movie.audult?<Badge bg="danger">18+</Badge> : <Badge bg="success">ALL</Badge>}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard