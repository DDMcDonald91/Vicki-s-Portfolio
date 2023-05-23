import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './rows.css'

export default function RowRight(props) {
  return (
    <Container fluid>
        <Row fluid className='section-row'>
            <Col xs={12} md={4} className="row-right-image-container"></Col>
            <Col xs={12} md={8} align='right'>
                <Container className='row-text-container row-text-right-container'>
                <h2 className='section-heading'>{props.sectionHeading}</h2>
                <p>{props.sectionText}</p>
                </Container>
            </Col>
        </Row>
    </Container>
  )
}
