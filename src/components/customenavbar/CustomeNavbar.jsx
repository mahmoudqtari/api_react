import React from 'react'
import './CustomeNavbar.css'

import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CustomeNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='home' to='/'></Link>
            <Link className='resturent' to='/resturent'>Resturent</Link>
            <Link className='products' to='/products'>Products</Link>
            <Link className='page-not-found' to='*'></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomeNavbar