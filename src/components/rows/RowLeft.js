import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './rows.css'

export default function RowLeft(props) {
  return (
    <Container fluid id="about">
        <Row fluid className='section-row'>
            <Col xs={12} md={6} align='left'>
              <Container className='row-text-container row-text-left-container'>
                <h2 className='section-heading'>{props.sectionHeading}</h2>
                <p>{props.sectionText}</p>
              </Container>
            </Col>
            <Col xs={12} md={6} className="row-left-image-container" order={{ sm: 1 }}></Col>
        </Row>
    </Container>
  )
}
