import React, { useEffect, useState } from 'react';
import { Alert, Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useMovieDetailsQuery } from '../../hooks/useMovieDetail';
import './MovieDetailPage.style.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const MovieDetailPage = () => {
  const { id } = useParams();
  // const [movie, setMovie] = useState(null);

  const { data, isLoading, isError, error } = useMovieDetailsQuery({id, API_KEY});
console.log(data);
  if(isLoading){
    return <h1>LOADING!!!!!</h1>
  }
  if(isError){
      return <Alert variant='danger'>{error.message}</Alert>
  }

  // console.log("Movuuuuuuu", movie);
  // useEffect(() => {
  //   const fetchMovieDetails = async () => {
  //     try {
  //       const response = await api.get(`/movie/${id}?api_key=${API_KEY}`);
  //       console.log("Asgdag", response.data);
  //       setMovie(response.data); 
  //     } catch (error) {
  //       console.error('Error fetching movie details:', error);
  //     }
  //   };

  //   fetchMovieDetails(); 
  // }, [id]);
  const formatBudget = (budget) => {
    if (!budget) return 'N/A';
    return budget.toLocaleString(); // 숫자에 ,를 추가하여 포맷팅
  };
  return (
    <Container style={{ marginTop: '20px' }}>
      {/* <Row>
        <Col md={4}>
          <img 
            src={data.poster_path} 
            alt={data.title} 
            style={{ width: '100%', borderRadius: '10px' }} 
          />
        </Col>
        <Col md={8}>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <div><strong>Rating:</strong> {data.vote_average}</div>
          <div><strong>Popularity:</strong> {data.popularity}</div>
          <div><strong>Age Rating:</strong> {data.adult ? '18+' : 'ALL'}</div>





        </Col>
      </Row> */}
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
              alt={data.title}
            />
          </Card>
        </Col>
        <Col md={8}>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Subtitle className="mb-2">
                <strong>장르:</strong>
                {data.genres.map((genre) => (
                  <Badge key={genre.id} bg={'info'} className="me-1">
                    {genre.name}
                  </Badge>
                ))}
              </Card.Subtitle>
              <Card.Text>
                <strong>영화 인기도:</strong> {data.popularity.toFixed(1)} <br />
                <strong>영화 줄거리:</strong> {data.overview} <br />
                <strong>예산:</strong> ${formatBudget(data.budget)} <br />
                <strong>개봉일:</strong> {data.release_date}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetailPage