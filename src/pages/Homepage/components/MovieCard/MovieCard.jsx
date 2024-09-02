import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';

const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
};

const MovieCard = ({movie}) => {
    console.log("movie", movie);
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
            {movie.genre_ids.map((id)=>(
            <Badge bg="primary" key={id}>{genres[id]}</Badge>
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