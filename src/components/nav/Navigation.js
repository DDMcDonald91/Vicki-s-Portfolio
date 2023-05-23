import React from 'react'
import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import './nav.css'
import  amLogo  from '../../amLogo.png'

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='w-100 p-0' id='navigation-bar'>
    <Container>
      <Navbar.Brand href="#home">
        <Image
        src={amLogo}
        id='logo'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
