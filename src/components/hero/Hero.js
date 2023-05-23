import React from 'react'
import { Container } from 'react-bootstrap'
import './hero.css'
import '../global.css'

export default function Hero() {
  return (
    <Container fluid align='left' id='hero home'>
        <Container id='hero-text-container'>
          <h1 id='hero-heading'>Design Portfolio</h1>
          <p>Creating designs for the future of education.</p>
        </Container>
    </Container>
  )
}
