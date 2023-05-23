import React from 'react'
import { Nav } from 'react-bootstrap'
import './footer.css'

export default function Footer() {
  return (
    <Nav className="justify-content-center" activeKey="/home" fluid id='footer'>
        <Nav.Item className='footer-item'>
            <Nav.Link href="/">Vicki's Portfolio</Nav.Link>
        </Nav.Item>
    </Nav>
  )
}
