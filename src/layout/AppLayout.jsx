import React from 'react';
import './AppLayout.style.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const BASE_PATH = process.env.REACT_APP_BASE_PATH;
  return (
    <div className="app-container">
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href={`${BASE_PATH}`}>
          <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" 
          style={{ width: '150px', height: 'auto' }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href={`${BASE_PATH}`} className="menu-text">Home</Nav.Link>
            <Nav.Link href={`${BASE_PATH}/movies`} className="menu-text">MOVIES</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
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