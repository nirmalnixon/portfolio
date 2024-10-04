import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => (
    <Container id="about" className="py-5">
        <Row>
            <Col md={4}>
                <Image src="https://via.placeholder.com/150" roundedCircle />
            </Col>
            <Col md={8}>
                <h2>About Me</h2>
                <p>
                    I am a passionate developer with experience in building web applications using modern technologies like React, Node.js, and MongoDB.
                </p>
            </Col>
        </Row>
    </Container>
);

export default About;
