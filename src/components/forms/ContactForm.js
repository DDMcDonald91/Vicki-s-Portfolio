import { useRef, useState } from 'react'
import { Container, Form, Button, Spinner } from 'react-bootstrap'
import '../global.css'

export default function ContactForm() {
    const form = useRef()
    const [loading, setLoading] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()

        setLoading(true)

        // email contact function

        setLoading(false)
    }

  return (
    <Container style={{maxWidth: '30rem'}}>
        <Container align='center'>
        <h1 className='section-heading'>Contact Me</h1>
        <p>Want to reach out to me? <br /> Fill out the form below!</p>
        </Container>
        <Form className='w-100 p-2' onSubmit={sendEmail} ref={form}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your name" name="user_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" name="user_email" />
            <Form.Text className="text-muted">
            I'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Control value="Contact/Inquiry" type="text" name="subject" hidden />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    required 
                    type="text" 
                    as="textarea" 
                    placeholder="Enter your message here..." 
                    name="message"
                    style={{ height: '100px' }} 
                    />
            </Form.Group>

            {!loading ? 
            <>
            <Button className='w-100 mt-5' variant="primary" type="submit">
                Submit
            </Button>
            </> 
            : 
            <>
            <Container align='center' fluid>
                <Spinner animation='grow' />
            </Container>
            </>}
        </Form>
    </Container>
  )
}
