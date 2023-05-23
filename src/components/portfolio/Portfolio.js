import React from 'react'
import { Carousel, Container, Spinner, Button } from 'react-bootstrap'
import { PortfolioContextData } from '../../context/portfolio'
import './portfolio.css'
import '../global.css'

export default function Portfolio() {
    const { data } = PortfolioContextData();

    if(!data) {
        return(
            <Spinner />
        )
    }

  return (
    <Container align='center' className='p-0'>
        <Container className='portfolio-text-container'>
            <h2 className='section-heading'>Projects</h2>
            <p>Explore my portfolio site to view a collection of my engaging instructional design projects. Discover the innovative and learner-centered solutions I have crafted to enhance the learning experience and achieve impactful outcomes.</p>
        </Container>
        <Carousel id='project-slider'>
        {data.map((project) => {
            return(
            <Carousel.Item key={project.project_id} className="project-slide">
                <img
                className="d-block w-100 project-image"
                src={project.project_image}
                />
            <Carousel.Caption>
                <h3>{project.project_title}</h3>
                <p>{project.project_description}</p>
                <Button>Project Link</Button>
            </Carousel.Caption>
            </Carousel.Item>
            )
        })}
        </Carousel>
    </Container>
  )
}
