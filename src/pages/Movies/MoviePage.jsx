import React, { useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css'

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading,isError, error } = useSearchMovieQuery({keyword, page});
  console.log("aaaaaaaaa", data);
  
  const handlePageClick=({ selected })=>{
    setPage(selected + 1);

  }

  if(isLoading){
    return <h1>LOADING!!!!!</h1>
  }
  if(isError){
      return <Alert variant='danger'>{error.message}</Alert>
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            {" "}필터{" "}
          </Col>
          <Col lg={8} xs={12}>
            <Row>
            {data?.results.length > 0 ? (
              data.results.map((movie, index) => (
                <Col key={index} lg={4} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <p>검색 결과가 없습니다</p>
              </Col>
            )}
            </Row>
            <ReactPaginate
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={data?.total_pages}
              nextLabel=" >"
              previousLabel="< "
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MoviePage