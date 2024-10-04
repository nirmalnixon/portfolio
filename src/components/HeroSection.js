import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => (
    <Container fluid className="text-center bg-dark text-white py-5">
        <Row>
            <Col>
                <h1>Hello, I'm a Full-Stack Developer</h1>
                <p>I create web applications and interactive experiences.</p>
                <Button variant="primary" href="#projects">View My Work</Button>
            </Col>
        </Row>
    </Container>
);

export default HeroSection;
