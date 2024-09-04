import React, { useState } from 'react';
import './AppLayout.style.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword=(event)=>{
    event.preventDefault();
    //1. url 변경
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  }
  const BASE_PATH = process.env.REACT_APP_BASE_PATH || '/';
  return (
    <div className="app-container">
    <Navbar expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href={`${BASE_PATH}`}> */}
        <Navbar.Brand as={Link} to="/">
          <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" 
          style={{ width: '150px', height: 'auto' }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
            }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href={`${BASE_PATH}`} className="menu-text">HOME</Nav.Link>
            <Nav.Link href={`${BASE_PATH}/movies`} className="menu-text">MOVIES</Nav.Link> */}
            <NavLink to="/" className="menu-text">HOME</NavLink>
            <NavLink to="/movies" className="menu-text">MOVIES</NavLink>
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(event)=>setKeyword(event.target.value)}
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </div>
  )
}

export default AppLayout